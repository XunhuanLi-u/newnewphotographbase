import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const inputPath = process.argv[2] || "portrait-template-export.json";
const outputRoot = process.argv[3] || "assets/template-libraries";

const exportData = JSON.parse(await readFile(inputPath, "utf8"));
const libraries = Array.isArray(exportData.libraries) ? exportData.libraries : [];
const templates = Array.isArray(exportData.templates) ? exportData.templates : [];

await mkdir(outputRoot, { recursive: true });

const manifest = {
  version: 1,
  generatedAt: new Date().toISOString(),
  libraries,
  templates: [],
};

for (const template of templates) {
  if (!template.image?.startsWith("data:image/")) {
    if (template.image) {
      manifest.templates.push({
        ...template,
        custom: false,
        bundled: true,
      });
    }
    continue;
  }
  const library = libraries.find((item) => item.id === template.libraryId);
  const librarySlug = slugify(library?.name || template.libraryId || "templates");
  const templateSlug = slugify(template.title || template.id || "template");
  const libraryDir = path.join(outputRoot, librarySlug);
  await mkdir(libraryDir, { recursive: true });

  const { extension, buffer } = decodeDataUrl(template.image);
  const fileName = `${templateSlug}-${shortId(template.id)}.${extension}`;
  const filePath = path.join(libraryDir, fileName);
  await writeFile(filePath, buffer);

  manifest.templates.push({
    ...template,
    image: path.posix.join("assets/template-libraries", librarySlug, fileName),
    custom: false,
    bundled: true,
  });
}

await writeFile(path.join(outputRoot, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
await writeFile(
  path.join(outputRoot, "manifest.js"),
  `window.BUNDLED_TEMPLATE_MANIFEST = ${JSON.stringify(manifest, null, 2)};\n`,
  "utf8",
);
console.log(`Wrote ${manifest.templates.length} templates to ${outputRoot}`);

function decodeDataUrl(dataUrl) {
  const match = dataUrl.match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$/);
  if (!match) throw new Error("Unsupported image data URL");
  const mime = match[1];
  const extension = mime.includes("png") ? "png" : mime.includes("webp") ? "webp" : "jpg";
  return { extension, buffer: Buffer.from(match[2], "base64") };
}

function slugify(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48) || "template";
}

function shortId(value) {
  return String(value || Date.now()).replace(/[^a-zA-Z0-9]/g, "").slice(-8) || "asset";
}
