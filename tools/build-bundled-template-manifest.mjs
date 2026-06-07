import { copyFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = "assets/template-libraries";

const libraries = [
  { id: "lib-misc", name: "杂七", slug: "misc" },
  { id: "lib-cinema", name: "电影构图", slug: "cinema" },
  { id: "lib-kobe", name: "科比体育人像", slug: "kobe-sports" },
  { id: "lib-xhs", name: "小红书参考", slug: "xiaohongshu" },
];

const items = [
  template("lib-misc", "杂七", "音乐专辑封面", "音乐专辑封面.jpg", "music-album-cover.jpg", "画面重心偏向一侧，适合训练三分法、留白和视线方向。", ["三分法", "自然影调", "中性色"], "f/2.8-f/4", "1/125s-1/250s", "ISO 200-800", "5200K-5600K", "0 EV", "35-70mm", { exposure: 0, contrast: 18, saturation: 0, warmth: 0, shadows: 8, highlights: -10, blacks: -8, vignette: 12, grain: 3 }),
  template("lib-misc", "杂七", "摄影师作品", "摄影师作品.jpg", "photographer-work.jpg", "主体重心接近中轴，适合训练稳定、凝视感或对称构图。", ["居中", "低调", "暖色"], "f/2.8-f/4", "1/125s-1/250s", "ISO 200-800", "5600K-6200K", "-0.3 EV", "50-85mm", { exposure: -0.12, contrast: 24, saturation: 2, warmth: 8, shadows: -6, highlights: -18, blacks: -12, vignette: 18, grain: 3 }),
  template("lib-misc", "杂七", "cobe2", "cobe2.jpg", "cobe2.jpg", "主体重心接近中轴，适合训练稳定、凝视感或对称构图。", ["居中", "低调", "暖色"], "f/2.8", "1/1000s", "ISO 800-3200", "4800K-5600K", "0 EV", "135-200mm", { exposure: -0.08, contrast: 26, saturation: 4, warmth: 6, shadows: -8, highlights: -12, blacks: -10, vignette: 14, grain: 4 }),

  template("lib-cinema", "电影构图", "2001太空漫游", "2001太空漫游.jpg", "2001-space-odyssey.jpg", "强几何线条和中心透视，适合训练对称构图与空间压迫感。", ["对称", "电影感", "几何"], "f/4-f/5.6", "1/125s", "ISO 200-800", "固定WB", "0 EV", "35-50mm", { exposure: 0, contrast: 22, saturation: -6, warmth: 0, shadows: -6, highlights: -12, blacks: -10, vignette: 10, grain: 3 }),
  template("lib-cinema", "电影构图", "公民凯恩", "公民凯恩.jpg", "citizen-kane.jpg", "低角度和深焦空间感明显，适合训练戏剧化人物关系。", ["低角度", "黑白", "深焦"], "f/5.6-f/8", "1/125s", "ISO 400-1600", "固定WB", "-0.3 EV", "28-50mm", { exposure: -0.12, contrast: 36, saturation: -100, warmth: 0, shadows: -16, highlights: -8, blacks: -20, vignette: 16, grain: 7 }),
  template("lib-cinema", "电影构图", "教父", "教父.jpg", "godfather.jpg", "低调光和面部阴影强烈，适合训练权威感与暗部控制。", ["低调", "暗部", "电影感"], "f/2.8-f/4", "1/125s", "ISO 400-1600", "4300K-5200K", "-0.7 EV", "50-85mm", { exposure: -0.24, contrast: 34, saturation: -10, warmth: 6, shadows: -20, highlights: -16, blacks: -22, vignette: 26, grain: 5 }),
  template("lib-cinema", "电影构图", "闪灵", "闪灵.jpg", "the-shining.jpg", "强烈中心构图与视线压迫，适合训练情绪张力。", ["居中", "冷色", "压迫感"], "f/2.8-f/4", "1/125s", "ISO 400-1600", "4200K-5000K", "-0.3 EV", "35-70mm", { exposure: -0.12, contrast: 28, saturation: -8, warmth: -8, shadows: -10, highlights: -14, blacks: -14, vignette: 20, grain: 5 }),
  template("lib-cinema", "电影构图", "Winston", "winston.jpg", "winston.jpg", "黑白低调肖像，适合训练暗部层次和人物权威感。", ["黑白", "低调", "肖像"], "f/4-f/5.6", "1/125s", "ISO 400-1600", "固定WB", "-0.7 EV", "70-105mm", { exposure: -0.22, contrast: 42, saturation: -100, warmth: 0, shadows: -22, highlights: -8, blacks: -24, vignette: 28, grain: 8 }),

  template("lib-kobe", "科比体育人像", "cobe", "cobe.jpg", "cobe.jpg", "赛场长焦人像，适合训练高速快门、浅景深和主体突出。", ["体育", "长焦", "高快门"], "f/2.8", "1/1000s", "ISO 800-3200", "4800K-5600K", "0 EV", "135-200mm", { exposure: 0, contrast: 24, saturation: 6, warmth: 2, shadows: 2, highlights: -16, blacks: -8, vignette: 12, grain: 3 }),
  template("lib-kobe", "科比体育人像", "Kobe Bryant 2014", "kobe-bryant-2014.jpg", "kobe-bryant-2014.jpg", "体育场高 ISO 长焦人像，适合展示 EXIF 和运动凝固。", ["体育", "长焦", "EXIF"], "f/2.8", "1/1600s", "ISO 6400", "自动WB", "0 EV", "200mm", { exposure: 0.05, contrast: 20, saturation: 5, warmth: 2, shadows: 6, highlights: -18, blacks: -8, vignette: 10, grain: 4 }),
  template("lib-kobe", "科比体育人像", "Kobe Bryant 7144", "kobe-bryant-7144.jpg", "kobe-bryant-7144.jpg", "赛场运动人像，适合训练主体姿态和背景虚化。", ["体育", "姿态", "长焦"], "f/2.8", "1/1000s", "ISO 1600-6400", "自动WB", "0 EV", "135-200mm", { exposure: 0, contrast: 22, saturation: 4, warmth: 1, shadows: 4, highlights: -16, blacks: -8, vignette: 10, grain: 3 }),

  template("lib-xhs", "小红书参考", "小红书1", "小红书1.jpg", "xiaohongshu-1.jpg", "生活方式人像参考，适合训练自然光、姿态和色彩统一。", ["生活方式", "自然光", "色彩"], "f/1.8-f/2.8", "1/125s-1/250s", "ISO 100-800", "5200K-6000K", "+0.3 EV", "35-70mm", { exposure: 0.12, contrast: 12, saturation: 4, warmth: 6, shadows: 10, highlights: -14, blacks: -4, vignette: 6, grain: 1 }),
  template("lib-xhs", "小红书参考", "小红书2", "小红书2.jpg", "xiaohongshu-2.jpg", "生活方式人像参考，适合训练自然光、姿态和色彩统一。", ["生活方式", "自然光", "色彩"], "f/1.8-f/2.8", "1/125s-1/250s", "ISO 100-800", "5200K-6000K", "+0.3 EV", "35-70mm", { exposure: 0.12, contrast: 12, saturation: 4, warmth: 6, shadows: 10, highlights: -14, blacks: -4, vignette: 6, grain: 1 }),
  template("lib-xhs", "小红书参考", "小红书3", "小红书3.jpg", "xiaohongshu-3.jpg", "生活方式人像参考，适合训练自然光、姿态和色彩统一。", ["生活方式", "自然光", "色彩"], "f/1.8-f/2.8", "1/125s-1/250s", "ISO 100-800", "5200K-6000K", "+0.3 EV", "35-70mm", { exposure: 0.12, contrast: 12, saturation: 4, warmth: 6, shadows: 10, highlights: -14, blacks: -4, vignette: 6, grain: 1 }),
  template("lib-xhs", "小红书参考", "小红书4", "小红书4.jpg", "xiaohongshu-4.jpg", "生活方式人像参考，适合训练自然光、姿态和色彩统一。", ["生活方式", "自然光", "色彩"], "f/1.8-f/2.8", "1/125s-1/250s", "ISO 100-800", "5200K-6000K", "+0.3 EV", "35-70mm", { exposure: 0.12, contrast: 12, saturation: 4, warmth: 6, shadows: 10, highlights: -14, blacks: -4, vignette: 6, grain: 1 }),
];

const manifest = {
  version: 1,
  generatedAt: new Date().toISOString(),
  libraries: libraries.map(({ id, name }) => ({ id, name, createdAt: new Date().toISOString() })),
  templates: [],
};

for (const item of items) {
  const library = libraries.find((entry) => entry.id === item.libraryId);
  const outputDir = path.join(root, library.slug);
  await mkdir(outputDir, { recursive: true });
  await copyFile(path.join(root, item.sourceLibraryName, item.sourceFile), path.join(outputDir, item.outputFile));
  manifest.templates.push({
    ...item.template,
    image: `assets/template-libraries/${library.slug}/${item.outputFile}`,
  });
}

await writeFile(path.join(root, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
await writeFile(
  path.join(root, "manifest.js"),
  `window.BUNDLED_TEMPLATE_MANIFEST = ${JSON.stringify(manifest, null, 2)};\n`,
  "utf8",
);
console.log(`Bundled ${manifest.templates.length} templates in ${manifest.libraries.length} libraries.`);

function template(libraryId, sourceLibraryName, title, sourceFile, outputFile, summary, tags, aperture, shutter, iso, wb, ev, lens, processing) {
  const id = `asset-${libraryId}-${outputFile.replace(/\.[^.]+$/, "")}`;
  return {
    libraryId,
    sourceLibraryName,
    sourceFile,
    outputFile,
    template: {
      id,
      libraryId,
      custom: false,
      bundled: true,
      title,
      chip: "Asset",
      summary,
      tags,
      templateAnalysis: `${summary} 这是随项目上线的参考模板，适合用于公开演示和分类练习。`,
      shooting: { aperture, shutter, iso, wb, ev, lens },
      processing: { tint: 2, ...processing },
      shootingAdvice: "先复现模板里的主体位置、视线方向和光线比例，再微调焦段与曝光，让背景服务于人物。",
      processingAdvice: "优先统一曝光、白平衡和反差，再处理肤色、背景层次与暗角。",
      analysisSource: "项目内置模板",
    },
  };
}
