const builtInReferences = [
  {
    id: "rembrandt",
    title: "伦勃朗光肖像",
    chip: "Rembrandt",
    image: "assets/references/rembrandt-light.png",
    summary: "四分之三面向镜头，暗部脸颊保留小三角光，训练单灯塑形。",
    tags: ["单灯", "暗调", "三角光"],
    templateAnalysis:
      "构图重点是四分之三面部朝向、眼睛落在上三分区域，主光从高侧位塑造鼻梁和颧骨，暗部保留层次但不完全补平。",
    shooting: {
      aperture: "f/2.8-f/4",
      shutter: "1/160s",
      iso: "ISO 100-400",
      wb: "4300K-4800K",
      ev: "-0.3 EV",
      lens: "70-85mm",
    },
    processing: {
      exposure: -0.18,
      contrast: 28,
      saturation: -8,
      warmth: 8,
      tint: 3,
      shadows: -12,
      highlights: -18,
      blacks: -12,
      vignette: 26,
      grain: 5,
    },
    shootingAdvice:
      "让主光从人物前侧约45度、高于眼睛的位置落下。面部暗部不要补得太平，背景压暗一到两档，眼神光需要清楚但不过曝。",
    processingAdvice:
      "整体压低曝光和黑位，保住高光皮肤细节；肤色略暖，饱和度克制，暗角帮助视线回到眼睛。",
  },
  {
    id: "window",
    title: "窗光三分法",
    chip: "Window",
    image: "assets/references/window-thirds.png",
    summary: "人物放在画面三分线，保留环境和留白，训练空间叙事。",
    tags: ["窗光", "留白", "环境"],
    templateAnalysis:
      "人物靠近画面三分线，环境留白承担叙事功能。柔和窗光带来低反差肤色，背景需要保留可读性但不能抢过人物。",
    shooting: {
      aperture: "f/2-f/2.8",
      shutter: "1/125s",
      iso: "ISO 400-800",
      wb: "5200K-5800K",
      ev: "+0.3 EV",
      lens: "35-50mm",
    },
    processing: {
      exposure: 0.2,
      contrast: 12,
      saturation: -3,
      warmth: -6,
      tint: 2,
      shadows: 14,
      highlights: -24,
      blacks: -4,
      vignette: 10,
      grain: 2,
    },
    shootingAdvice:
      "人物靠近窗户但不要贴窗，眼睛放在上三分线附近。右侧或背后留出能说明环境的空间，窗外高光宁可稍微压住。",
    processingAdvice:
      "提亮中间调和阴影，压回窗边高光；白平衡保持偏自然冷一点，让环境色和肤色区分开。",
  },
  {
    id: "profile",
    title: "低调侧脸轮廓",
    chip: "Profile",
    image: "assets/references/low-key-profile.png",
    summary: "侧脸面向留白，边缘光勾出鼻梁和唇线，训练轮廓剪影。",
    tags: ["侧脸", "黑白", "轮廓光"],
    templateAnalysis:
      "主体轮廓比面部细节更重要，侧脸朝向留白，亮边勾出鼻梁、嘴唇和下颌。画面依赖高反差和深黑背景完成情绪。",
    shooting: {
      aperture: "f/4-f/5.6",
      shutter: "1/200s",
      iso: "ISO 100-400",
      wb: "固定WB",
      ev: "-0.7 EV",
      lens: "85-105mm",
    },
    processing: {
      exposure: -0.25,
      contrast: 42,
      saturation: -100,
      warmth: 0,
      tint: 0,
      shadows: -22,
      highlights: 8,
      blacks: -24,
      vignette: 30,
      grain: 9,
    },
    shootingAdvice:
      "让人物鼻尖朝向留白，光源放在侧后方制造边缘线。背景尽量干净，测光优先照顾脸部亮边，不要把暗部全部拉亮。",
    processingAdvice:
      "转黑白后提高反差，压深黑位，保留鼻梁、嘴唇和下颌的亮边；颗粒可以稍微明显一点，增加低调质感。",
  },
  {
    id: "golden",
    title: "金色逆光居中",
    chip: "Golden",
    image: "assets/references/golden-symmetry.png",
    summary: "居中构图配合逆光和浅景深，训练脸部补光与背景层次。",
    tags: ["逆光", "居中", "金色时刻"],
    templateAnalysis:
      "主体居中，背景线条服务于稳定感。逆光负责发丝和肩部边缘，脸部需要反光或环境补光，否则会变成剪影。",
    shooting: {
      aperture: "f/1.8-f/2.8",
      shutter: "1/500s",
      iso: "ISO 100-200",
      wb: "5600K-6200K",
      ev: "+0.3 EV",
      lens: "50-85mm",
    },
    processing: {
      exposure: 0.12,
      contrast: 18,
      saturation: 8,
      warmth: 16,
      tint: 2,
      shadows: 10,
      highlights: -16,
      blacks: -6,
      vignette: 14,
      grain: 1,
    },
    shootingAdvice:
      "太阳放在人物后侧，脸部用反光板或环境反射补回来。居中时尤其注意肩线和背景线条，避免树枝或建筑线穿过头部。",
    processingAdvice:
      "压住高光边缘，适度提亮脸部阴影；暖色和饱和度可以略高，但肤色不要变橙。",
  },
];

const STORAGE_KEYS = {
  album: "portrait-practice-album",
  templates: "portrait-practice-custom-templates",
  libraries: "portrait-practice-template-libraries",
  libraryOverrides: "portrait-practice-library-overrides",
  activeLibrary: "portrait-practice-active-library",
  api: "portrait-practice-api-settings",
};

const BUILTIN_LIBRARY_ID = "builtin";
const DEFAULT_LIBRARY_ID = "personal";

const state = {
  customTemplates: migrateTemplates(loadJson(STORAGE_KEYS.templates, [])),
  libraries: loadLibraries(),
  bundledTemplates: [],
  bundledLibraries: [],
  libraryOverrides: loadJson(STORAGE_KEYS.libraryOverrides, {
    hiddenLibraries: [],
    hiddenTemplates: [],
    renamedLibraries: {},
    templateOrders: {},
  }),
  activeLibraryId: loadJson(STORAGE_KEYS.activeLibrary, BUILTIN_LIBRARY_ID),
  selectedId: builtInReferences[0].id,
  image: null,
  fileName: "",
  analysis: null,
  currentProcessing: null,
  compositionMatch: null,
  processingRunId: 0,
  processedUrl: "",
  album: loadJson(STORAGE_KEYS.album, []),
  templateProfiles: new Map(),
  templateImage: null,
  templateImageDataUrl: "",
  templateFileName: "",
  templateExif: null,
};

const els = {
  referenceGrid: document.getElementById("referenceGrid"),
  activeTitle: document.getElementById("activeTitle"),
  activeChip: document.getElementById("activeChip"),
  activeTemplateImage: document.getElementById("activeTemplateImage"),
  templateAnalysisText: document.getElementById("templateAnalysisText"),
  templateExifSettings: document.getElementById("templateExifSettings"),
  templateExifStatus: document.getElementById("templateExifStatus"),
  shootingSettings: document.getElementById("shootingSettings"),
  processingSettings: document.getElementById("processingSettings"),
  shootingAdvice: document.getElementById("shootingAdvice"),
  processingAdvice: document.getElementById("processingAdvice"),
  uploadZone: document.getElementById("uploadZone"),
  photoInput: document.getElementById("photoInput"),
  originalPreview: document.getElementById("originalPreview"),
  processedCanvas: document.getElementById("processedCanvas"),
  originalEmpty: document.getElementById("originalEmpty"),
  processedEmpty: document.getElementById("processedEmpty"),
  exposureReadout: document.getElementById("exposureReadout"),
  wbReadout: document.getElementById("wbReadout"),
  contrastReadout: document.getElementById("contrastReadout"),
  compositionReadout: document.getElementById("compositionReadout"),
  applyButton: document.getElementById("applyButton"),
  saveButton: document.getElementById("saveButton"),
  downloadLink: document.getElementById("downloadLink"),
  albumGrid: document.getElementById("albumGrid"),
  clearAlbumButton: document.getElementById("clearAlbumButton"),
  librarySelect: document.getElementById("librarySelect"),
  libraryCountText: document.getElementById("libraryCountText"),
  createLibraryButton: document.getElementById("createLibraryButton"),
  renameLibraryButton: document.getElementById("renameLibraryButton"),
  exportLibrariesButton: document.getElementById("exportLibrariesButton"),
  exportDefaultBundleButton: document.getElementById("exportDefaultBundleButton"),
  deleteLibraryButton: document.getElementById("deleteLibraryButton"),
  templateForm: document.getElementById("templateForm"),
  templateTitle: document.getElementById("templateTitle"),
  templateNotes: document.getElementById("templateNotes"),
  templateInput: document.getElementById("templateInput"),
  templateUploadText: document.getElementById("templateUploadText"),
  templateStatus: document.getElementById("templateStatus"),
  analyzeTemplateButton: document.getElementById("analyzeTemplateButton"),
  apiEndpoint: document.getElementById("apiEndpoint"),
  apiModel: document.getElementById("apiModel"),
  apiKey: document.getElementById("apiKey"),
};

init();

async function init() {
  restoreApiSettings();
  await loadBundledTemplateLibraries();
  ensureActiveLibrary();
  saveJson(STORAGE_KEYS.templates, state.customTemplates);
  saveJson(STORAGE_KEYS.libraries, state.libraries);
  renderReferences();
  renderLibraries();
  renderPreset();
  renderAlbum();
  bindEvents();
}

function bindEvents() {
  els.photoInput.addEventListener("change", (event) => {
    const [file] = event.target.files;
    if (file) handlePracticeFile(file);
  });

  ["dragenter", "dragover"].forEach((eventName) => {
    els.uploadZone.addEventListener(eventName, (event) => {
      event.preventDefault();
      els.uploadZone.classList.add("is-dragging");
    });
  });

  ["dragleave", "drop"].forEach((eventName) => {
    els.uploadZone.addEventListener(eventName, (event) => {
      event.preventDefault();
      els.uploadZone.classList.remove("is-dragging");
    });
  });

  els.uploadZone.addEventListener("drop", (event) => {
    const [file] = event.dataTransfer.files;
    if (file && file.type.startsWith("image/")) handlePracticeFile(file);
  });

  els.templateInput.addEventListener("change", async (event) => {
    const [file] = event.target.files;
    if (!file) return;
    await handleTemplateFile(file);
  });

  els.templateForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    await analyzeAndSaveTemplate();
  });

  els.librarySelect.addEventListener("change", () => {
    state.activeLibraryId = els.librarySelect.value;
    saveJson(STORAGE_KEYS.activeLibrary, state.activeLibraryId);
    state.currentProcessing = null;
    state.compositionMatch = null;
    selectFirstTemplateInLibrary();
    renderLibraries();
    renderReferences();
    renderPreset();
    if (state.image) processImage();
  });

  els.createLibraryButton.addEventListener("click", createTemplateLibrary);
  els.renameLibraryButton.addEventListener("click", renameActiveLibrary);
  els.exportLibrariesButton.addEventListener("click", exportTemplateLibraryData);
  els.exportDefaultBundleButton.addEventListener("click", exportDefaultTemplateBundle);
  els.deleteLibraryButton.addEventListener("click", deleteActiveLibrary);

  [els.apiEndpoint, els.apiModel, els.apiKey].forEach((input) => {
    input.addEventListener("change", persistApiSettings);
  });

  els.applyButton.addEventListener("click", () => {
    if (state.image) processImage();
  });

  els.saveButton.addEventListener("click", saveCurrentToAlbum);
  els.clearAlbumButton.addEventListener("click", clearAlbum);
}

function getReferences() {
  const localTemplates = state.customTemplates.filter((item) => item.libraryId === state.activeLibraryId);
  const references =
    state.activeLibraryId === BUILTIN_LIBRARY_ID
      ? [...getVisibleBuiltInReferences(), ...localTemplates]
      : [
    ...getVisibleBundledTemplates().filter((item) => item.libraryId === state.activeLibraryId),
    ...localTemplates,
        ];
  return applyTemplateOrder(state.activeLibraryId, references);
}

function getAllReferences() {
  return [...getVisibleBuiltInReferences(), ...getVisibleBundledTemplates(), ...state.customTemplates];
}

function getVisibleBuiltInReferences() {
  if (isLibraryHidden(BUILTIN_LIBRARY_ID)) return [];
  return builtInReferences.filter((item) => !isTemplateHidden(item.id));
}

function getVisibleBundledLibraries() {
  return state.bundledLibraries
    .filter((library) => !isLibraryHidden(library.id))
    .map((library) => ({
      ...library,
      name: state.libraryOverrides.renamedLibraries?.[library.id] || library.name,
    }));
}

function getVisibleBundledTemplates() {
  const hiddenLibraries = new Set(state.libraryOverrides.hiddenLibraries || []);
  return state.bundledTemplates.filter(
    (template) => !hiddenLibraries.has(template.libraryId) && !isTemplateHidden(template.id),
  );
}

function isLibraryHidden(libraryId) {
  return (state.libraryOverrides.hiddenLibraries || []).includes(libraryId);
}

function isTemplateHidden(templateId) {
  return (state.libraryOverrides.hiddenTemplates || []).includes(templateId);
}

function applyTemplateOrder(libraryId, templates) {
  const order = state.libraryOverrides.templateOrders?.[libraryId] || [];
  if (!order.length) return templates;
  const indexMap = new Map(order.map((id, index) => [id, index]));
  return [...templates].sort((a, b) => {
    const aIndex = indexMap.has(a.id) ? indexMap.get(a.id) : Number.MAX_SAFE_INTEGER;
    const bIndex = indexMap.has(b.id) ? indexMap.get(b.id) : Number.MAX_SAFE_INTEGER;
    return aIndex - bIndex;
  });
}

function renderReferences() {
  const references = getReferences();
  if (!references.length) {
    els.referenceGrid.innerHTML = `<div class="empty-library">这个模板库还是空的。上传并分析一张模板照片后，它会出现在这里。</div>`;
    return;
  }

  els.referenceGrid.innerHTML = references
    .map((item) => {
      const deleteButton = `<button class="delete-template" type="button" data-delete-id="${escapeHtml(item.id)}" title="删除模板">×</button>`;
      return `
      <div class="reference-card-wrap" draggable="true" data-sort-id="${escapeHtml(item.id)}">
        ${deleteButton}
        <button class="reference-card ${item.id === state.selectedId ? "is-active" : ""}" type="button" data-id="${escapeHtml(item.id)}">
          <img src="${item.image}" alt="${escapeHtml(item.title)}" />
          <span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.summary)}</p>
            <span class="tag-row">${item.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</span>
          </span>
        </button>
      </div>`;
    })
    .join("");

  els.referenceGrid.querySelectorAll("[data-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedId = button.dataset.id;
      state.currentProcessing = null;
      state.compositionMatch = null;
      renderReferences();
      renderPreset();
      if (state.image) processImage();
    });
  });

  els.referenceGrid.querySelectorAll("[data-delete-id]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      deleteTemplate(button.dataset.deleteId);
    });
  });

  bindTemplateSorting();
}

function bindTemplateSorting() {
  let draggedId = "";

  els.referenceGrid.querySelectorAll("[data-sort-id]").forEach((card) => {
    card.addEventListener("dragstart", (event) => {
      draggedId = card.dataset.sortId;
      card.classList.add("is-dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", draggedId);
    });

    card.addEventListener("dragend", () => {
      card.classList.remove("is-dragging");
      draggedId = "";
      els.referenceGrid.querySelectorAll(".is-drag-over").forEach((item) => item.classList.remove("is-drag-over"));
    });

    card.addEventListener("dragover", (event) => {
      event.preventDefault();
      if (!draggedId || draggedId === card.dataset.sortId) return;
      event.dataTransfer.dropEffect = "move";
      card.classList.add("is-drag-over");
    });

    card.addEventListener("dragleave", () => {
      card.classList.remove("is-drag-over");
    });

    card.addEventListener("drop", (event) => {
      event.preventDefault();
      card.classList.remove("is-drag-over");
      const sourceId = event.dataTransfer.getData("text/plain") || draggedId;
      const targetId = card.dataset.sortId;
      if (!sourceId || sourceId === targetId) return;
      const rect = card.getBoundingClientRect();
      reorderTemplates(sourceId, targetId, event.clientY > rect.top + rect.height / 2);
    });
  });
}

function reorderTemplates(sourceId, targetId, insertAfter) {
  const order = getReferences().map((item) => item.id);
  const from = order.indexOf(sourceId);
  const to = order.indexOf(targetId);
  if (from < 0 || to < 0) return;
  const [moved] = order.splice(from, 1);
  const targetIndex = order.indexOf(targetId);
  order.splice(insertAfter ? targetIndex + 1 : targetIndex, 0, moved);
  state.libraryOverrides.templateOrders = {
    ...(state.libraryOverrides.templateOrders || {}),
    [state.activeLibraryId]: order,
  };
  saveLibraryOverrides();
  renderReferences();
  renderLibraries();
}

function renderPreset() {
  const preset = getPreset();
  els.activeTitle.textContent = preset.title;
  els.activeChip.textContent = preset.chip || "Custom";
  els.activeTemplateImage.src = preset.image;
  els.activeTemplateImage.alt = `${preset.title}模板照片`;
  els.templateAnalysisText.textContent = buildTemplateAnalysisText(preset);
  renderTemplateExif(preset);
  els.shootingAdvice.textContent = preset.shootingAdvice;
  els.processingAdvice.textContent = buildProcessingAdvice(preset);
  renderDefinitionList(els.shootingSettings, preset.shooting);
  renderDefinitionList(els.processingSettings, formatProcessingSettings(state.currentProcessing || getAdjustedProcessing()));
}

function buildTemplateAnalysisText(preset) {
  const parts = [preset.templateAnalysis || preset.summary];
  if (preset.notes) parts.push(`备注：${preset.notes}`);
  if (preset.analysisSource) parts.push(`分析来源：${preset.analysisSource}`);
  return parts.filter(Boolean).join(" ");
}

function renderTemplateExif(preset) {
  const exif = preset.exif || null;
  if (exif && Object.keys(exif).length) {
    renderDefinitionList(els.templateExifSettings, formatExifSettings(exif));
    els.templateExifStatus.textContent = "这些是照片文件里读到的真实拍摄参数；下方拍摄建议会结合它们和画面分析生成。";
    return;
  }
  renderDefinitionList(els.templateExifSettings, preset.shooting);
  els.templateExifStatus.textContent = "没有读到 EXIF，可能是截图、社交平台压缩图或网页下载图；这里暂用视觉分析生成的建议参数。";
}

function renderDefinitionList(node, values) {
  node.innerHTML = Object.entries(values)
    .map(
      ([key, value]) => `
      <div>
        <dt>${settingLabel(key)}</dt>
        <dd>${escapeHtml(String(value))}</dd>
      </div>`,
    )
    .join("");
}

function settingLabel(key) {
  const labels = {
    aperture: "光圈",
    shutter: "快门",
    iso: "感光度",
    wb: "白平衡",
    ev: "曝光补偿",
    lens: "焦段",
    focalLength: "焦距",
    camera: "相机",
    capturedAt: "拍摄时间",
    focalLength35mm: "等效焦距",
    exposure: "曝光",
    contrast: "反差",
    saturation: "饱和",
    warmth: "色温",
    tint: "色偏",
    shadows: "阴影",
    highlights: "高光",
    blacks: "黑位",
    vignette: "暗角",
    grain: "颗粒",
  };
  return labels[key] || key;
}

function getPreset() {
  return getAllReferences().find((item) => item.id === state.selectedId) || getReferences()[0] || builtInReferences[0];
}

async function handleTemplateFile(file) {
  state.templateFileName = file.name.replace(/\.[^.]+$/, "");
  state.templateExif = await readExifFromFile(file);
  const image = await loadImage(URL.createObjectURL(file));
  const dataUrl = await imageToDataUrl(image, 1200, 0.86);
  state.templateImage = await loadImage(dataUrl);
  state.templateImageDataUrl = dataUrl;
  els.templateUploadText.textContent = file.name;
  if (!els.templateTitle.value.trim()) {
    els.templateTitle.value = state.templateFileName.slice(0, 28);
  }
  els.templateStatus.textContent = state.templateExif
    ? "模板照片已载入，并读到 EXIF 原片参数。"
    : "模板照片已载入，但没有读到 EXIF，将使用视觉分析建议参数。";
}

async function analyzeAndSaveTemplate() {
  if (!state.templateImage || !state.templateImageDataUrl) {
    els.templateStatus.textContent = "请先上传一张模板照片。";
    return;
  }

  setTemplateBusy(true, "正在分析模板...");
  persistApiSettings();
  const notes = els.templateNotes.value.trim();
  const title = els.templateTitle.value.trim() || state.templateFileName || "自定义模板";
  const localTemplate = buildLocalTemplate(
    title,
    notes,
    state.templateImage,
    state.templateImageDataUrl,
    state.templateExif,
  );
  let finalTemplate = localTemplate;

  try {
    if (hasApiSettings()) {
      const apiTemplate = await analyzeTemplateWithApi(
        title,
        notes,
        state.templateImageDataUrl,
        localTemplate,
        state.templateExif,
      );
      finalTemplate = normalizeTemplate({
        ...localTemplate,
        ...apiTemplate,
        id: localTemplate.id,
        image: localTemplate.image,
        exif: localTemplate.exif,
        custom: true,
        notes,
        analysisSource: "视觉模型 + 本地参数",
      });
    }
  } catch (error) {
    finalTemplate.analysisSource = "本地分析";
    finalTemplate.templateAnalysis += ` API 分析未完成，已保留本地结果。`;
    console.warn(error);
  }

  finalTemplate.libraryId = getWritableLibraryId();
  state.customTemplates = [finalTemplate, ...state.customTemplates];
  state.selectedId = finalTemplate.id;
  saveJson(STORAGE_KEYS.templates, state.customTemplates);
  resetTemplateForm();
  renderLibraries();
  renderReferences();
  renderPreset();
  if (state.image) processImage();
  setTemplateBusy(false, `已保存模板：${finalTemplate.title}`);
}

function buildLocalTemplate(title, notes, image, dataUrl, exif) {
  const stats = analyzeImage(image);
  const composition = analyzeComposition(image, stats);
  const lowKey = stats.average < 95;
  const highKey = stats.average > 166;
  const highContrast = stats.contrast > 64;
  const lowContrast = stats.contrast < 38;
  const warm = stats.avgR - stats.avgB > 12;
  const cool = stats.avgB - stats.avgR > 10;
  const monochrome = Math.abs(stats.avgR - stats.avgG) < 4 && Math.abs(stats.avgG - stats.avgB) < 4;

  const processing = {
    exposure: lowKey ? -0.18 : highKey ? 0.12 : 0,
    contrast: highContrast ? 34 : lowContrast ? 18 : 24,
    saturation: monochrome ? -100 : warm ? 4 : cool ? -4 : 0,
    warmth: warm ? 12 : cool ? -8 : 2,
    tint: 2,
    shadows: lowKey ? -14 : 8,
    highlights: stats.highlightPct > 4 ? -24 : -10,
    blacks: lowKey || highContrast ? -18 : -8,
    vignette: composition.centerWeighted ? 20 : 12,
    grain: lowKey || monochrome ? 7 : 3,
  };

  const tags = [
    composition.primaryTag,
    lowKey ? "低调" : highKey ? "高调" : "自然影调",
    monochrome ? "黑白" : warm ? "暖色" : cool ? "冷色" : "中性色",
  ];

  return normalizeTemplate({
    id: `custom-${Date.now()}`,
    custom: true,
    title,
    chip: "Custom",
    image: dataUrl,
    summary: composition.summary,
    tags,
    notes,
    exif,
    templateAnalysis: `${composition.analysis} ${describeLighting(stats)} ${notes ? `备注重点：${notes}` : ""}`,
    shooting: buildSuggestedShootingFromExif(exif, {
      aperture: composition.tightPortrait ? "f/1.8-f/2.8" : "f/2.8-f/4",
      shutter: "1/125s-1/250s",
      iso: lowKey ? "ISO 100-400" : "ISO 200-800",
      wb: warm ? "5600K-6200K" : cool ? "4600K-5200K" : "5200K-5600K",
      ev: lowKey ? "-0.3 至 -0.7 EV" : highKey ? "+0.3 EV" : "0 EV",
      lens: composition.tightPortrait ? "70-105mm" : "35-70mm",
    }),
    processing,
    shootingAdvice: buildLocalShootingAdvice(composition, stats),
    processingAdvice: buildLocalTemplateProcessingAdvice(stats, processing, monochrome),
    analysisSource: "本地分析",
  });
}

function analyzeComposition(image, stats) {
  const canvas = document.createElement("canvas");
  const width = 180;
  const height = Math.max(1, Math.round((image.height / image.width) * width));
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(image, 0, 0, width, height);
  const data = ctx.getImageData(0, 0, width, height).data;
  const zones = {
    left: 0,
    center: 0,
    right: 0,
    top: 0,
    middle: 0,
    bottom: 0,
  };

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = (y * width + x) * 4;
      const luma = 0.2126 * data[index] + 0.7152 * data[index + 1] + 0.0722 * data[index + 2];
      if (x < width / 3) zones.left += luma;
      else if (x > (width * 2) / 3) zones.right += luma;
      else zones.center += luma;
      if (y < height / 3) zones.top += luma;
      else if (y > (height * 2) / 3) zones.bottom += luma;
      else zones.middle += luma;
    }
  }

  const horizontal = maxZone(["left", "center", "right"], zones);
  const vertical = maxZone(["top", "middle", "bottom"], zones);
  const portraitRatio = image.height / image.width;
  const centerWeighted = horizontal === "center";
  const thirdsWeighted = horizontal === "left" || horizontal === "right";
  const tightPortrait = portraitRatio > 1.1;

  const primaryTag = centerWeighted ? "居中" : thirdsWeighted ? "三分法" : "均衡";
  const summary = centerWeighted
    ? "主体重心接近中轴，适合训练稳定、凝视感或对称构图。"
    : thirdsWeighted
      ? "画面重心偏向一侧，适合训练三分法、留白和视线方向。"
      : "画面重心较均衡，适合训练整体光影和背景层次。";

  const analysis = `画面比例为${tightPortrait ? "竖幅人像" : "环境或半身构图"}，亮度重心偏${zoneLabel(horizontal)}，视觉高度集中在${zoneLabel(vertical)}。${summary}`;

  return {
    primaryTag,
    summary,
    analysis,
    centerWeighted,
    thirdsWeighted,
    tightPortrait,
  };
}

function describeLighting(stats) {
  const exposure = stats.average < 95 ? "整体偏低调" : stats.average > 166 ? "整体偏高调" : "曝光接近中间调";
  const contrast = stats.contrast > 64 ? "反差较强" : stats.contrast < 38 ? "反差较柔" : "反差适中";
  const color =
    stats.avgB - stats.avgR > 10
      ? "白平衡偏冷"
      : stats.avgR - stats.avgB > 12
        ? "白平衡偏暖"
        : "色温较自然";
  return `${exposure}，${contrast}，${color}。`;
}

function buildLocalShootingAdvice(composition, stats) {
  const placement = composition.centerWeighted
    ? "拍摄时保持头部和肩线居中，检查背景线条不要切过头部。"
    : "拍摄时把眼睛或面部亮区放在三分线附近，给视线方向留出空间。";
  const light =
    stats.contrast > 64
      ? "光比可以拉开，但要保留眼睛和面部关键亮部。"
      : "用大面积柔光或反光板控制阴影，让肤色过渡自然。";
  return `${placement}${light}建议先用固定白平衡和手动曝光，方便后期复现这张模板的色彩。`;
}

function buildLocalTemplateProcessingAdvice(stats, processing, monochrome) {
  const tone = stats.average < 95 ? "压低黑位和背景，保留面部亮部" : "控制高光并保留中间调肤色";
  const color = monochrome
    ? "转黑白后提高局部反差，颗粒可以略明显"
    : processing.warmth > 0
      ? "色温略暖，饱和度克制，避免肤色发橙"
      : "色温略冷，保留环境色和肤色分离";
  return `${tone}；${color}。暗角只作为收束视线，不要压掉人物轮廓。`;
}

function buildSuggestedShootingFromExif(exif, fallback) {
  if (!exif) return fallback;
  return {
    aperture: exif.aperture || fallback.aperture,
    shutter: exif.shutter || fallback.shutter,
    iso: exif.iso || fallback.iso,
    wb: exif.whiteBalance || fallback.wb,
    ev: exif.ev || fallback.ev,
    lens: exif.focalLength || exif.focalLength35mm || fallback.lens,
  };
}

function formatExifSettings(exif) {
  return {
    camera: exif.camera || "未知",
    lens: exif.lens || exif.focalLength || "未知",
    aperture: exif.aperture || "未知",
    shutter: exif.shutter || "未知",
    iso: exif.iso || "未知",
    focalLength: exif.focalLength || "未知",
    focalLength35mm: exif.focalLength35mm || "未知",
    ev: exif.ev || "未知",
    wb: exif.whiteBalance || "未知",
    capturedAt: exif.capturedAt || "未知",
  };
}

function formatExifForPrompt(exif) {
  if (!exif || !Object.keys(exif).length) return "未读取到 EXIF。";
  return Object.entries(formatExifSettings(exif))
    .map(([key, value]) => `${settingLabel(key)}=${value}`)
    .join("；");
}

async function readExifFromFile(file) {
  try {
    const buffer = await file.arrayBuffer();
    const tags = parseJpegExif(buffer);
    return normalizeExif(tags);
  } catch (error) {
    console.warn(error);
    return null;
  }
}

function parseJpegExif(buffer) {
  const view = new DataView(buffer);
  if (view.byteLength < 12 || view.getUint16(0, false) !== 0xffd8) return null;

  let offset = 2;
  while (offset + 4 < view.byteLength) {
    if (view.getUint8(offset) !== 0xff) break;
    const marker = view.getUint8(offset + 1);
    const size = view.getUint16(offset + 2, false);
    if (marker === 0xe1 && offset + 4 + size <= view.byteLength) {
      const exifHeader = readAscii(view, offset + 4, 6);
      if (exifHeader === "Exif\0\0") {
        return parseTiffExif(view, offset + 10);
      }
    }
    offset += 2 + size;
  }
  return null;
}

function parseTiffExif(view, tiffStart) {
  if (tiffStart + 8 > view.byteLength) return null;
  const endian = readAscii(view, tiffStart, 2);
  const little = endian === "II";
  if (!little && endian !== "MM") return null;
  const magic = view.getUint16(tiffStart + 2, little);
  if (magic !== 42) return null;

  const firstIfdOffset = view.getUint32(tiffStart + 4, little);
  const tags = {};
  const ifd0 = parseIfd(view, tiffStart, tiffStart + firstIfdOffset, little);
  Object.assign(tags, mapExifTags(ifd0.entries));
  const exifPointer = ifd0.entries[0x8769];
  if (Number.isFinite(exifPointer)) {
    const exifIfd = parseIfd(view, tiffStart, tiffStart + exifPointer, little);
    Object.assign(tags, mapExifTags(exifIfd.entries));
  }
  return tags;
}

function parseIfd(view, tiffStart, ifdOffset, little) {
  const entries = {};
  if (ifdOffset + 2 > view.byteLength) return { entries };
  const count = view.getUint16(ifdOffset, little);
  for (let i = 0; i < count; i += 1) {
    const entryOffset = ifdOffset + 2 + i * 12;
    if (entryOffset + 12 > view.byteLength) break;
    const tag = view.getUint16(entryOffset, little);
    const type = view.getUint16(entryOffset + 2, little);
    const valueCount = view.getUint32(entryOffset + 4, little);
    entries[tag] = readExifValue(view, tiffStart, entryOffset, type, valueCount, little);
  }
  return { entries };
}

function readExifValue(view, tiffStart, entryOffset, type, count, little) {
  const typeSizes = { 1: 1, 2: 1, 3: 2, 4: 4, 5: 8, 7: 1, 9: 4, 10: 8 };
  const size = (typeSizes[type] || 1) * count;
  const valueOffset = size <= 4 ? entryOffset + 8 : tiffStart + view.getUint32(entryOffset + 8, little);
  if (valueOffset < 0 || valueOffset + size > view.byteLength) return null;

  if (type === 2) return readAscii(view, valueOffset, count).replace(/\0+$/, "").trim();
  if (type === 3) return readNumberArray(count, (index) => view.getUint16(valueOffset + index * 2, little));
  if (type === 4) return readNumberArray(count, (index) => view.getUint32(valueOffset + index * 4, little));
  if (type === 5) {
    return readNumberArray(count, (index) => {
      const position = valueOffset + index * 8;
      const numerator = view.getUint32(position, little);
      const denominator = view.getUint32(position + 4, little);
      return denominator ? numerator / denominator : 0;
    });
  }
  if (type === 9) return readNumberArray(count, (index) => view.getInt32(valueOffset + index * 4, little));
  if (type === 10) {
    return readNumberArray(count, (index) => {
      const position = valueOffset + index * 8;
      const numerator = view.getInt32(position, little);
      const denominator = view.getInt32(position + 4, little);
      return denominator ? numerator / denominator : 0;
    });
  }
  return null;
}

function readNumberArray(count, reader) {
  if (count === 1) return reader(0);
  return Array.from({ length: count }, (_, index) => reader(index));
}

function mapExifTags(entries) {
  const tags = {
    make: entries[0x010f],
    model: entries[0x0110],
    dateTime: entries[0x0132],
    exposureTime: entries[0x829a],
    fNumber: entries[0x829d],
    iso: firstValue(entries[0x8827] || entries[0x8833]),
    dateTimeOriginal: entries[0x9003],
    exposureBias: entries[0x9204],
    focalLength: entries[0x920a],
    whiteBalance: entries[0xa403],
    focalLength35mm: entries[0xa405],
    lensModel: entries[0xa434],
  };
  Object.keys(tags).forEach((key) => {
    if (tags[key] === undefined || tags[key] === null || tags[key] === "") delete tags[key];
  });
  return tags;
}

function normalizeExif(tags) {
  if (!tags) return null;
  const normalized = {
    camera: [tags.make, tags.model].filter(Boolean).join(" ").trim(),
    lens: tags.lensModel || "",
    iso: tags.iso ? `ISO ${Math.round(tags.iso)}` : "",
    shutter: formatShutter(tags.exposureTime),
    aperture: tags.fNumber ? `f/${roundNumber(tags.fNumber, 1)}` : "",
    focalLength: tags.focalLength ? `${roundNumber(tags.focalLength, 1)}mm` : "",
    focalLength35mm: tags.focalLength35mm ? `${Math.round(tags.focalLength35mm)}mm 等效` : "",
    ev: Number.isFinite(tags.exposureBias) ? `${tags.exposureBias > 0 ? "+" : ""}${roundNumber(tags.exposureBias, 2)} EV` : "",
    whiteBalance: formatWhiteBalance(tags.whiteBalance),
    capturedAt: formatExifDate(tags.dateTimeOriginal || tags.dateTime),
  };

  Object.keys(normalized).forEach((key) => {
    if (!normalized[key]) delete normalized[key];
  });
  return Object.keys(normalized).length ? normalized : null;
}

function formatShutter(value) {
  if (!Number.isFinite(value) || value <= 0) return "";
  if (value >= 1) return `${roundNumber(value, 1)}s`;
  return `1/${Math.round(1 / value)}s`;
}

function formatWhiteBalance(value) {
  if (value === 0) return "自动白平衡";
  if (value === 1) return "手动白平衡";
  return "";
}

function formatExifDate(value) {
  if (!value) return "";
  return String(value).replace(/^(\d{4}):(\d{2}):(\d{2})/, "$1/$2/$3");
}

function readAscii(view, start, length) {
  let value = "";
  for (let i = 0; i < length && start + i < view.byteLength; i += 1) {
    value += String.fromCharCode(view.getUint8(start + i));
  }
  return value;
}

function firstValue(value) {
  return Array.isArray(value) ? value[0] : value;
}

function roundNumber(value, decimals) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

async function analyzeTemplateWithApi(title, notes, imageDataUrl, localTemplate) {
  const endpoint = els.apiEndpoint.value.trim() || "https://api.openai.com/v1/chat/completions";
  const model = els.apiModel.value.trim() || "gpt-4o-mini";
  const key = els.apiKey.value.trim();
  const prompt = [
    "你是一位人像摄影导师和影视调色师。请分析用户上传的人像参考模板。",
    "输出必须是 JSON，不要 Markdown。",
    "需要字段：title, summary, tags, templateAnalysis, shooting, processing, shootingAdvice, processingAdvice。",
    "shooting 包含 aperture, shutter, iso, wb, ev, lens。",
    "processing 包含数字 exposure, contrast, saturation, warmth, tint, shadows, highlights, blacks, vignette, grain。",
    "processing 的数字范围：exposure -1.1 到 1.1；contrast/saturation/warmth/tint/shadows/highlights/blacks/vignette/grain 约 -100 到 100。",
    `用户命名：${title}`,
    `用户备注：${notes || "无"}`,
    `EXIF 原片参数：${formatExifForPrompt(localTemplate.exif)}`,
    `本地初步分析：${localTemplate.templateAnalysis}`,
  ].join("\n");

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.3,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: prompt },
            {
              type: "image_url",
              image_url: {
                url: imageDataUrl,
                detail: "low",
              },
            },
          ],
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  const payload = await response.json();
  const content = payload.choices?.[0]?.message?.content;
  if (!content) throw new Error("API returned empty content");
  return JSON.parse(content);
}

function normalizeTemplate(template) {
  const fallback = buildFallbackTemplate();
  const processing = { ...fallback.processing, ...(template.processing || {}) };
  Object.keys(processing).forEach((key) => {
    processing[key] = Number.isFinite(Number(processing[key])) ? Number(processing[key]) : fallback.processing[key];
  });

  return {
    ...fallback,
    ...template,
    title: String(template.title || fallback.title).slice(0, 32),
    summary: String(template.summary || fallback.summary).slice(0, 84),
    tags: Array.isArray(template.tags) ? template.tags.slice(0, 4).map((tag) => String(tag).slice(0, 8)) : fallback.tags,
    shooting: { ...fallback.shooting, ...(template.shooting || {}) },
    processing,
    shootingAdvice: String(template.shootingAdvice || fallback.shootingAdvice),
    processingAdvice: String(template.processingAdvice || fallback.processingAdvice),
    templateAnalysis: String(template.templateAnalysis || template.summary || fallback.templateAnalysis),
  };
}

function buildFallbackTemplate() {
  return {
    id: `custom-${Date.now()}`,
    custom: true,
    title: "自定义模板",
    chip: "Custom",
    image: "",
    summary: "自定义人像模板。",
    tags: ["自定义", "人像"],
    notes: "",
    templateAnalysis: "根据上传模板生成的练习分析。",
    shooting: {
      aperture: "f/2.8-f/4",
      shutter: "1/125s-1/250s",
      iso: "ISO 100-800",
      wb: "固定WB",
      ev: "0 EV",
      lens: "50-85mm",
    },
    processing: {
      exposure: 0,
      contrast: 18,
      saturation: 0,
      warmth: 0,
      tint: 0,
      shadows: 0,
      highlights: -10,
      blacks: -8,
      vignette: 12,
      grain: 2,
    },
    shootingAdvice: "先复现构图和光位，再微调曝光，保证眼睛和肤色是画面最可靠的锚点。",
    processingAdvice: "优先统一曝光、白平衡和反差，再处理肤色、背景和暗角。",
    analysisSource: "本地分析",
  };
}

function deleteTemplate(id) {
  const template = getAllReferences().find((item) => item.id === id);
  const confirmed = window.confirm(`删除「${template?.title || "这个模板"}」吗？`);
  if (!confirmed) return;
  if (state.customTemplates.some((item) => item.id === id)) {
    state.customTemplates = state.customTemplates.filter((item) => item.id !== id);
    saveJson(STORAGE_KEYS.templates, state.customTemplates);
  } else {
    state.libraryOverrides.hiddenTemplates = uniqueList([...(state.libraryOverrides.hiddenTemplates || []), id]);
    saveLibraryOverrides();
  }
  removeTemplateFromOrders(id);
  if (state.selectedId === id) selectFirstTemplateInLibrary();
  renderReferences();
  renderLibraries();
  renderPreset();
}

function renderLibraries() {
  const customCount = (libraryId) =>
    state.customTemplates.filter((template) => template.libraryId === libraryId).length;
  const bundledCount = (libraryId) =>
    getVisibleBundledTemplates().filter((template) => template.libraryId === libraryId).length;
  const builtInCount = () => getVisibleBuiltInReferences().length + customCount(BUILTIN_LIBRARY_ID);
  const builtinName = state.libraryOverrides.renamedLibraries?.[BUILTIN_LIBRARY_ID] || "经典模板库";
  const builtinOption = isLibraryHidden(BUILTIN_LIBRARY_ID)
    ? ""
    : `<option value="${BUILTIN_LIBRARY_ID}">${escapeHtml(builtinName)} (${builtInCount()})</option>`;
  const bundledOptions = getVisibleBundledLibraries()
    .map(
      (library) =>
        `<option value="${escapeHtml(library.id)}">${escapeHtml(library.name)} (${bundledCount(library.id) + customCount(library.id)})</option>`,
    )
    .join("");
  const customOptions = state.libraries
    .map((library) => `<option value="${escapeHtml(library.id)}">${escapeHtml(library.name)} (${customCount(library.id)})</option>`)
    .join("");
  els.librarySelect.innerHTML = builtinOption + bundledOptions + customOptions;
  els.librarySelect.value = state.activeLibraryId;
  const activeCount = getReferences().length;
  els.libraryCountText.textContent = `${activeCount} 个模板`;
  const editable = isEditableLibrary(state.activeLibraryId);
  els.renameLibraryButton.disabled = !editable;
  els.deleteLibraryButton.disabled = !editable;
}

function createTemplateLibrary() {
  const name = window.prompt("新模板库叫什么名字？", "新的模板库");
  if (!name || !name.trim()) return;
  const library = {
    id: `library-${Date.now()}`,
    name: name.trim().slice(0, 24),
    createdAt: new Date().toISOString(),
  };
  state.libraries = [...state.libraries, library];
  state.activeLibraryId = library.id;
  saveJson(STORAGE_KEYS.libraries, state.libraries);
  saveJson(STORAGE_KEYS.activeLibrary, state.activeLibraryId);
  state.selectedId = "";
  renderLibraries();
  renderReferences();
  renderPreset();
}

function deleteActiveLibrary() {
  if (!isEditableLibrary(state.activeLibraryId)) return;
  const library = getLibraryById(state.activeLibraryId);
  if (!library) return;
  const count = getReferences().length;
  const confirmed = window.confirm(`删除「${library.name}」模板库吗？里面的 ${count} 个模板也会一起删除。`);
  if (!confirmed) return;
  state.customTemplates = state.customTemplates.filter((template) => template.libraryId !== library.id);
  if (isLocalLibrary(library.id)) {
    state.libraries = state.libraries.filter((item) => item.id !== library.id);
    saveJson(STORAGE_KEYS.libraries, state.libraries);
  } else {
    state.libraryOverrides.hiddenLibraries = uniqueList([...(state.libraryOverrides.hiddenLibraries || []), library.id]);
    saveLibraryOverrides();
  }
  state.activeLibraryId = firstAvailableLibraryId();
  selectFirstTemplateInLibrary();
  saveJson(STORAGE_KEYS.templates, state.customTemplates);
  saveJson(STORAGE_KEYS.activeLibrary, state.activeLibraryId);
  renderLibraries();
  renderReferences();
  renderPreset();
}

function renameActiveLibrary() {
  if (!isEditableLibrary(state.activeLibraryId)) return;
  const library = getLibraryById(state.activeLibraryId);
  if (!library) return;
  const name = window.prompt("新的模板库名称", library.name);
  if (!name || !name.trim()) return;
  const nextName = name.trim().slice(0, 24);
  if (isLocalLibrary(library.id)) {
    const localLibrary = state.libraries.find((item) => item.id === library.id);
    localLibrary.name = nextName;
    saveJson(STORAGE_KEYS.libraries, state.libraries);
  } else {
    state.libraryOverrides.renamedLibraries = {
      ...(state.libraryOverrides.renamedLibraries || {}),
      [library.id]: nextName,
    };
    saveLibraryOverrides();
  }
  renderLibraries();
}

function selectFirstTemplateInLibrary() {
  const first = getReferences()[0];
  state.selectedId = first ? first.id : builtInReferences[0].id;
}

function getWritableLibraryId() {
  if (isEditableLibrary(state.activeLibraryId)) return state.activeLibraryId;
  state.activeLibraryId = DEFAULT_LIBRARY_ID;
  ensureActiveLibrary();
  saveJson(STORAGE_KEYS.activeLibrary, state.activeLibraryId);
  return DEFAULT_LIBRARY_ID;
}

function ensureActiveLibrary() {
  if (!state.libraries.some((library) => library.id === DEFAULT_LIBRARY_ID)) {
    state.libraries = [
      { id: DEFAULT_LIBRARY_ID, name: "我的模板库", createdAt: new Date().toISOString() },
      ...state.libraries,
    ];
  }
  state.libraryOverrides.hiddenLibraries = Array.isArray(state.libraryOverrides.hiddenLibraries)
    ? state.libraryOverrides.hiddenLibraries
    : [];
  state.libraryOverrides.hiddenTemplates = Array.isArray(state.libraryOverrides.hiddenTemplates)
    ? state.libraryOverrides.hiddenTemplates
    : [];
  state.libraryOverrides.renamedLibraries = state.libraryOverrides.renamedLibraries || {};
  state.libraryOverrides.templateOrders = state.libraryOverrides.templateOrders || {};
  const valid =
    (state.activeLibraryId === BUILTIN_LIBRARY_ID && !isLibraryHidden(BUILTIN_LIBRARY_ID)) ||
    state.libraries.some((library) => library.id === state.activeLibraryId) ||
    getVisibleBundledLibraries().some((library) => library.id === state.activeLibraryId);
  if (!valid) state.activeLibraryId = firstAvailableLibraryId();
  const selectedInActiveLibrary = getReferences().some((item) => item.id === state.selectedId);
  if (!selectedInActiveLibrary) selectFirstTemplateInLibrary();
}

async function loadBundledTemplateLibraries() {
  if (window.BUNDLED_TEMPLATE_MANIFEST) {
    applyBundledTemplateManifest(window.BUNDLED_TEMPLATE_MANIFEST);
    return;
  }
  try {
    const response = await fetch("assets/template-libraries/manifest.json", { cache: "no-store" });
    if (!response.ok) return;
    const manifest = await response.json();
    applyBundledTemplateManifest(manifest);
  } catch {
    state.bundledLibraries = [];
    state.bundledTemplates = [];
  }
}

function applyBundledTemplateManifest(manifest) {
  state.bundledLibraries = Array.isArray(manifest.libraries) ? manifest.libraries : [];
  state.bundledTemplates = Array.isArray(manifest.templates)
    ? manifest.templates.map((template) => ({ ...template, custom: false, bundled: true }))
    : [];
}

function isLocalLibrary(libraryId) {
  return state.libraries.some((library) => library.id === libraryId);
}

function isEditableLibrary(libraryId) {
  return (
    libraryId === BUILTIN_LIBRARY_ID ||
    isLocalLibrary(libraryId) ||
    getVisibleBundledLibraries().some((library) => library.id === libraryId)
  );
}

function getLibraryById(libraryId) {
  if (libraryId === BUILTIN_LIBRARY_ID && !isLibraryHidden(BUILTIN_LIBRARY_ID)) {
    return {
      id: BUILTIN_LIBRARY_ID,
      name: state.libraryOverrides.renamedLibraries?.[BUILTIN_LIBRARY_ID] || "经典模板库",
    };
  }
  return (
    state.libraries.find((library) => library.id === libraryId) ||
    getVisibleBundledLibraries().find((library) => library.id === libraryId)
  );
}

function firstAvailableLibraryId() {
  if (!isLibraryHidden(BUILTIN_LIBRARY_ID)) return BUILTIN_LIBRARY_ID;
  const bundled = getVisibleBundledLibraries()[0];
  if (bundled) return bundled.id;
  const local = state.libraries[0];
  return local ? local.id : DEFAULT_LIBRARY_ID;
}

function saveLibraryOverrides() {
  saveJson(STORAGE_KEYS.libraryOverrides, state.libraryOverrides);
}

function removeTemplateFromOrders(templateId) {
  const orders = state.libraryOverrides.templateOrders || {};
  Object.entries(orders).forEach(([libraryId, order]) => {
    orders[libraryId] = order.filter((id) => id !== templateId);
  });
  state.libraryOverrides.templateOrders = orders;
  saveLibraryOverrides();
}

function uniqueList(values) {
  return [...new Set(values.filter(Boolean))];
}

function exportTemplateLibraryData() {
  const payload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    libraries: getExportableLibraries(),
    templates: getExportableTemplates(),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "portrait-template-export.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function exportDefaultTemplateBundle() {
  const manifest = buildDefaultTemplateManifest();
  downloadTextFile(
    "manifest.js",
    `window.BUNDLED_TEMPLATE_MANIFEST = ${JSON.stringify(manifest, null, 2)};\n`,
    "text/javascript",
  );
  window.setTimeout(() => {
    downloadTextFile("manifest.json", `${JSON.stringify(manifest, null, 2)}\n`, "application/json");
  }, 180);
}

function buildDefaultTemplateManifest() {
  return {
    version: 1,
    generatedAt: new Date().toISOString(),
    libraries: getExportableLibraries(),
    templates: getExportableTemplates().map((template) => ({
      ...template,
      custom: false,
      bundled: true,
    })),
  };
}

function getExportableLibraries() {
  const libraries = [...getVisibleBundledLibraries(), ...state.libraries]
    .filter((library) => library.id !== BUILTIN_LIBRARY_ID)
    .map((library) => ({
      id: library.id,
      name: library.name,
      createdAt: library.createdAt || new Date().toISOString(),
    }));
  const seen = new Set();
  return libraries.filter((library) => {
    if (seen.has(library.id)) return false;
    seen.add(library.id);
    return true;
  });
}

function getExportableTemplates() {
  const templates = [...getVisibleBundledTemplates(), ...state.customTemplates].filter((template) => !isTemplateHidden(template.id));
  return getExportableLibraries().flatMap((library) =>
    applyTemplateOrder(
      library.id,
      templates.filter((template) => template.libraryId === library.id),
    ).map((template) => ({
      ...template,
      custom: false,
      bundled: true,
    })),
  );
}

function downloadTextFile(fileName, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function resetTemplateForm() {
  els.templateForm.reset();
  els.templateUploadText.textContent = "上传模板照片";
  state.templateImage = null;
  state.templateImageDataUrl = "";
  state.templateFileName = "";
  state.templateExif = null;
  restoreApiSettings();
}

function setTemplateBusy(isBusy, text) {
  els.analyzeTemplateButton.disabled = isBusy;
  els.analyzeTemplateButton.textContent = isBusy ? "分析中..." : "分析并保存模板";
  els.templateStatus.textContent = text;
}

function hasApiSettings() {
  return Boolean(els.apiKey.value.trim() && (els.apiEndpoint.value.trim() || els.apiModel.value.trim()));
}

function restoreApiSettings() {
  const settings = loadJson(STORAGE_KEYS.api, {});
  els.apiEndpoint.value = settings.endpoint || "https://api.openai.com/v1/chat/completions";
  els.apiModel.value = settings.model || "gpt-4o-mini";
  els.apiKey.value = "";
}

function persistApiSettings() {
  saveJson(STORAGE_KEYS.api, {
    endpoint: els.apiEndpoint.value.trim(),
    model: els.apiModel.value.trim(),
  });
}

async function handlePracticeFile(file) {
  state.fileName = file.name.replace(/\.[^.]+$/, "");
  const url = URL.createObjectURL(file);
  const image = await loadImage(url);
  state.image = image;
  state.analysis = analyzeImage(image);
  state.currentProcessing = null;
  state.compositionMatch = null;
  els.originalPreview.src = url;
  els.originalEmpty.hidden = true;
  els.compositionReadout.textContent = "计算中";
  updateAnalysisReadout();
  await processImage();
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function imageToDataUrl(image, maxEdge, quality = 0.86) {
  const canvas = document.createElement("canvas");
  const scale = Math.min(maxEdge / image.width, maxEdge / image.height, 1);
  canvas.width = Math.max(1, Math.round(image.width * scale));
  canvas.height = Math.max(1, Math.round(image.height * scale));
  const ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  return Promise.resolve(canvas.toDataURL("image/jpeg", quality));
}

function analyzeImage(image) {
  const canvas = document.createElement("canvas");
  const size = 320;
  const scale = Math.min(size / image.width, size / image.height, 1);
  canvas.width = Math.max(1, Math.round(image.width * scale));
  canvas.height = Math.max(1, Math.round(image.height * scale));
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  let totalLuma = 0;
  let totalR = 0;
  let totalG = 0;
  let totalB = 0;
  let highlights = 0;
  let shadows = 0;
  const lumas = [];

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    totalR += r;
    totalG += g;
    totalB += b;
    totalLuma += luma;
    lumas.push(luma);
    if (luma > 236) highlights += 1;
    if (luma < 22) shadows += 1;
  }

  const count = lumas.length || 1;
  const average = totalLuma / count;
  const variance =
    lumas.reduce((sum, value) => sum + (value - average) * (value - average), 0) / count;
  const contrast = Math.sqrt(variance);
  const exposureCorrection = clamp((132 - average) / 160, -0.65, 0.65);
  const warmthCorrection = clamp(((totalB - totalR) / count) / 3, -14, 14);

  return {
    average,
    contrast,
    highlightPct: (highlights / count) * 100,
    shadowPct: (shadows / count) * 100,
    avgR: totalR / count,
    avgG: totalG / count,
    avgB: totalB / count,
    exposureCorrection,
    warmthCorrection,
  };
}

function analyzeImageProfile(image) {
  const canvas = document.createElement("canvas");
  const maxEdge = 260;
  const scale = Math.min(maxEdge / image.width, maxEdge / image.height, 1);
  canvas.width = Math.max(1, Math.round(image.width * scale));
  canvas.height = Math.max(1, Math.round(image.height * scale));
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  return analyzeCanvasProfile(canvas);
}

function analyzeCanvasProfile(canvas) {
  const maxSampleEdge = 300;
  if (Math.max(canvas.width, canvas.height) > maxSampleEdge) {
    const sample = document.createElement("canvas");
    const scale = Math.min(maxSampleEdge / canvas.width, maxSampleEdge / canvas.height);
    sample.width = Math.max(1, Math.round(canvas.width * scale));
    sample.height = Math.max(1, Math.round(canvas.height * scale));
    const sampleCtx = sample.getContext("2d", { willReadFrequently: true });
    sampleCtx.drawImage(canvas, 0, 0, sample.width, sample.height);
    return analyzeCanvasProfile(sample);
  }

  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  const { width, height } = canvas;
  const data = ctx.getImageData(0, 0, width, height).data;
  const lumas = new Float32Array(width * height);
  let totalLuma = 0;
  let totalR = 0;
  let totalG = 0;
  let totalB = 0;
  let totalSaturation = 0;
  let highlights = 0;
  let shadows = 0;

  for (let i = 0; i < data.length; i += 4) {
    const pixel = i / 4;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    lumas[pixel] = luma;
    totalR += r;
    totalG += g;
    totalB += b;
    totalLuma += luma;
    totalSaturation += max === 0 ? 0 : ((max - min) / max) * 100;
    if (luma > 236) highlights += 1;
    if (luma < 24) shadows += 1;
  }

  const count = lumas.length || 1;
  const average = totalLuma / count;
  let variance = 0;
  let weightSum = 0;
  let weightedX = 0;
  let weightedY = 0;
  let weightedDistance = 0;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const pixel = y * width + x;
      const luma = lumas[pixel];
      variance += (luma - average) * (luma - average);
      const left = x > 0 ? lumas[pixel - 1] : luma;
      const top = y > 0 ? lumas[pixel - width] : luma;
      const edge = Math.abs(luma - left) + Math.abs(luma - top);
      const saliency = Math.max(0, Math.abs(luma - average) * 0.55 + edge * 0.7 - 10);
      weightSum += saliency;
      weightedX += x * saliency;
      weightedY += y * saliency;
    }
  }

  const centerX = weightSum ? weightedX / weightSum : width / 2;
  const centerY = weightSum ? weightedY / weightSum : height / 2;
  const diagonal = Math.hypot(width, height) || 1;

  if (weightSum) {
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const pixel = y * width + x;
        const luma = lumas[pixel];
        const left = x > 0 ? lumas[pixel - 1] : luma;
        const top = y > 0 ? lumas[pixel - width] : luma;
        const edge = Math.abs(luma - left) + Math.abs(luma - top);
        const saliency = Math.max(0, Math.abs(luma - average) * 0.55 + edge * 0.7 - 10);
        weightedDistance += Math.hypot(x - centerX, y - centerY) * saliency;
      }
    }
  }

  const contrast = Math.sqrt(variance / count);
  const saturation = totalSaturation / count;

  return {
    width,
    height,
    aspect: width / height,
    average,
    contrast,
    saturation,
    avgR: totalR / count,
    avgG: totalG / count,
    avgB: totalB / count,
    highlightPct: (highlights / count) * 100,
    shadowPct: (shadows / count) * 100,
    isMonochrome: saturation < 8,
    isLowKey: average < 96 || (shadows / count) * 100 > 18,
    subject: {
      x: clamp(centerX / width, 0, 1),
      y: clamp(centerY / height, 0, 1),
      radius: clamp(weightSum ? weightedDistance / weightSum / diagonal : 0.24, 0.08, 0.45),
    },
  };
}

async function getTemplateProfile(preset) {
  const cacheKey = `${preset.id}:${String(preset.image).slice(0, 96)}`;
  if (state.templateProfiles.has(cacheKey)) return state.templateProfiles.get(cacheKey);
  const image = await loadImage(preset.image);
  const profile = analyzeImageProfile(image);
  state.templateProfiles.set(cacheKey, profile);
  return profile;
}

function calculateCompositionCrop(image, sourceProfile, templateProfile) {
  const targetAspect = clamp(templateProfile?.aspect || image.width / image.height, 0.45, 2.35);
  const imageAspect = image.width / image.height;
  let cropW = image.width;
  let cropH = image.height;

  if (imageAspect > targetAspect) cropW = cropH * targetAspect;
  else cropH = cropW / targetAspect;

  if (sourceProfile && templateProfile) {
    const sizeRatio = sourceProfile.subject.radius / Math.max(templateProfile.subject.radius, 0.08);
    const cropScale = clamp(sizeRatio, 0.76, 1.08);
    cropW = Math.min(cropW * cropScale, image.width);
    cropH = Math.min(cropH * cropScale, image.height);
    if (cropW / cropH > targetAspect) cropW = cropH * targetAspect;
    else cropH = cropW / targetAspect;
  }

  const targetSubjectX = clamp(templateProfile?.subject.x ?? 0.5, 0.18, 0.82);
  const targetSubjectY = clamp(templateProfile?.subject.y ?? 0.42, 0.16, 0.84);
  const sourceSubjectX = (sourceProfile?.subject.x ?? 0.5) * image.width;
  const sourceSubjectY = (sourceProfile?.subject.y ?? 0.42) * image.height;
  const cropX = clamp(sourceSubjectX - targetSubjectX * cropW, 0, image.width - cropW);
  const cropY = clamp(sourceSubjectY - targetSubjectY * cropH, 0, image.height - cropH);
  const zoom = image.width / cropW;

  return {
    x: cropX,
    y: cropY,
    width: cropW,
    height: cropH,
    matchText: buildCompositionMatchText(targetAspect, targetSubjectX, targetSubjectY, zoom),
  };
}

function buildCompositionMatchText(aspect, subjectX, subjectY, zoom) {
  const frame =
    aspect < 0.78 ? "竖幅" : aspect > 1.28 ? "横幅" : Math.abs(aspect - 1) < 0.08 ? "方幅" : "同模板画幅";
  const horizontal = subjectX < 0.42 ? "左侧重心" : subjectX > 0.58 ? "右侧重心" : "中轴重心";
  const vertical = subjectY < 0.38 ? "眼位偏上" : subjectY > 0.62 ? "重心偏下" : "中部重心";
  const zoomText = zoom > 1.08 ? `，裁切放大约${Math.round((zoom - 1) * 100)}%` : "";
  return `${frame}，${horizontal}，${vertical}${zoomText}`;
}

function buildStyleMatchedProcessing(base, sourceProfile, templateProfile) {
  const p = { ...base };
  if (!sourceProfile || !templateProfile) return p;
  p.exposure = clamp(p.exposure + (templateProfile.average - sourceProfile.average) / 170, -1.2, 1.2);
  p.contrast = clamp(p.contrast + (templateProfile.contrast - sourceProfile.contrast) * 0.62, -90, 90);
  p.saturation = templateProfile.isMonochrome
    ? -100
    : clamp(p.saturation + (templateProfile.saturation - sourceProfile.saturation) * 1.15, -100, 70);
  p.warmth = clamp(
    p.warmth + (templateProfile.avgR - templateProfile.avgB - (sourceProfile.avgR - sourceProfile.avgB)) * 0.42,
    -55,
    55,
  );
  p.shadows = clamp(p.shadows - (templateProfile.shadowPct - sourceProfile.shadowPct) * 0.8, -55, 55);
  p.highlights = clamp(p.highlights - (sourceProfile.highlightPct - templateProfile.highlightPct) * 1.4, -55, 45);
  p.blacks = clamp(p.blacks - (templateProfile.shadowPct - sourceProfile.shadowPct) * 0.65, -45, 35);
  p.vignette = clamp(p.vignette + (templateProfile.isLowKey ? 8 : 0), 0, 42);
  p.grain = clamp(p.grain + (templateProfile.isMonochrome ? 3 : templateProfile.contrast > 70 ? 2 : 0), 0, 16);
  p.matchStrength = templateProfile.isMonochrome ? 0.42 : 0.34;
  return p;
}

function updateAnalysisReadout() {
  const a = state.analysis;
  if (!a) return;
  const exposure =
    a.average < 98
      ? `偏暗，建议 +${Math.abs(a.exposureCorrection).toFixed(1)} EV`
      : a.average > 166
        ? `偏亮，建议 ${a.exposureCorrection.toFixed(1)} EV`
        : "接近正常";
  const wb =
    a.avgB - a.avgR > 10
      ? "偏冷，后期加暖"
      : a.avgR - a.avgB > 12
        ? "偏暖，轻微降温"
        : "较自然";
  const contrast =
    a.contrast < 38
      ? "偏平，需要塑形"
      : a.contrast > 72
        ? "反差强，注意细节"
        : "层次适中";
  els.exposureReadout.textContent = exposure;
  els.wbReadout.textContent = wb;
  els.contrastReadout.textContent = contrast;
}

function getAdjustedProcessing() {
  const preset = getPreset();
  const p = { ...preset.processing };
  if (state.analysis) {
    p.exposure = clamp(p.exposure + state.analysis.exposureCorrection, -1.1, 1.1);
    p.warmth = clamp(p.warmth + state.analysis.warmthCorrection, -40, 40);
    if (state.analysis.highlightPct > 4) p.highlights -= 12;
    if (state.analysis.shadowPct > 18) p.shadows += 10;
    if (state.analysis.contrast < 38) p.contrast += 12;
    if (state.analysis.contrast > 72) p.contrast -= 10;
  }
  return p;
}

function formatProcessingSettings(processing) {
  return {
    exposure: `${processing.exposure > 0 ? "+" : ""}${processing.exposure.toFixed(2)} EV`,
    contrast: `${processing.contrast > 0 ? "+" : ""}${Math.round(processing.contrast)}`,
    saturation: `${processing.saturation > 0 ? "+" : ""}${Math.round(processing.saturation)}`,
    warmth: `${processing.warmth > 0 ? "+" : ""}${Math.round(processing.warmth)}`,
    shadows: `${processing.shadows > 0 ? "+" : ""}${Math.round(processing.shadows)}`,
    highlights: `${processing.highlights > 0 ? "+" : ""}${Math.round(processing.highlights)}`,
    blacks: `${processing.blacks > 0 ? "+" : ""}${Math.round(processing.blacks)}`,
    vignette: `${Math.round(processing.vignette)}`,
    grain: `${Math.round(processing.grain)}`,
  };
}

function buildProcessingAdvice(preset) {
  if (!state.analysis) return preset.processingAdvice;
  const a = state.analysis;
  const notes = ["系统会先按模板画幅和视觉重心裁剪练习照，再匹配模板的亮度、反差、色温、饱和度、暗角和颗粒"];
  if (a.highlightPct > 4) notes.push("这张图高光占比较高，套用时会额外压高光");
  if (a.shadowPct > 18) notes.push("暗部面积较大，会多提一点阴影保留面部信息");
  if (a.contrast < 38) notes.push("原片反差偏平，会增加中间调对比");
  if (a.avgB - a.avgR > 10) notes.push("原片偏冷，会向暖色修正");
  return [preset.processingAdvice, ...notes].join("。") + "。";
}

async function processImage() {
  if (!state.image) return;
  const runId = (state.processingRunId += 1);
  const preset = getPreset();
  let templateProfile = null;

  try {
    templateProfile = await getTemplateProfile(preset);
  } catch (error) {
    console.warn("Template profile unavailable", error);
  }

  if (runId !== state.processingRunId) return;

  const canvas = els.processedCanvas;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  const maxEdge = 1800;
  const sourceProfile = analyzeImageProfile(state.image);
  const crop = calculateCompositionCrop(state.image, sourceProfile, templateProfile);
  const scale = Math.min(maxEdge / crop.width, maxEdge / crop.height, 1);
  canvas.width = Math.max(1, Math.round(crop.width * scale));
  canvas.height = Math.max(1, Math.round(crop.height * scale));
  ctx.drawImage(state.image, crop.x, crop.y, crop.width, crop.height, 0, 0, canvas.width, canvas.height);

  const croppedProfile = analyzeCanvasProfile(canvas);
  const processing = buildStyleMatchedProcessing(getAdjustedProcessing(), croppedProfile, templateProfile);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  applyProcessing(imageData, processing, canvas.width, canvas.height, {
    source: croppedProfile,
    target: templateProfile,
    strength: processing.matchStrength || 0.32,
  });
  ctx.putImageData(imageData, 0, 0);

  state.currentProcessing = processing;
  state.compositionMatch = crop.matchText;
  state.processedUrl = canvas.toDataURL("image/jpeg", 0.9);
  els.processedEmpty.hidden = true;
  els.compositionReadout.textContent = crop.matchText;
  els.saveButton.disabled = false;
  els.downloadLink.href = state.processedUrl;
  els.downloadLink.classList.remove("disabled");
  renderPreset();
}

function applyProcessing(imageData, p, width, height, styleMatch = null) {
  const data = imageData.data;
  const exposureFactor = Math.pow(2, p.exposure);
  const contrastValue = clamp(p.contrast, -90, 90) * 1.6;
  const contrastFactor = (259 * (contrastValue + 255)) / (255 * (259 - contrastValue));
  const saturationFactor = 1 + p.saturation / 100;
  const warm = p.warmth / 100;
  const tint = p.tint / 100;
  const centerX = width / 2;
  const centerY = height / 2;
  const maxDistance = Math.hypot(centerX, centerY);
  const toneSource = styleMatch?.source;
  const toneTarget = styleMatch?.target;
  const toneStrength = toneSource && toneTarget ? styleMatch.strength : 0;
  const contrastRatio = toneStrength
    ? clamp(toneTarget.contrast / Math.max(toneSource.contrast, 1), 0.65, 1.65)
    : 1;
  const colorStrength = toneStrength * 0.22;

  for (let i = 0; i < data.length; i += 4) {
    const pixel = i / 4;
    const x = pixel % width;
    const y = Math.floor(pixel / width);
    let r = data[i] * exposureFactor;
    let g = data[i + 1] * exposureFactor;
    let b = data[i + 2] * exposureFactor;

    r += warm * 18 + tint * 6;
    g -= tint * 8;
    b -= warm * 18 + tint * 3;

    let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    const shadowMask = clamp((128 - luma) / 128, 0, 1);
    const highlightMask = clamp((luma - 128) / 127, 0, 1);
    const shadowLift = (p.shadows / 100) * 42 * shadowMask;
    const highlightLift = (p.highlights / 100) * 42 * highlightMask;
    r += shadowLift + highlightLift;
    g += shadowLift + highlightLift;
    b += shadowLift + highlightLift;

    r = contrastFactor * (r - 128) + 128;
    g = contrastFactor * (g - 128) + 128;
    b = contrastFactor * (b - 128) + 128;

    luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    r = luma + (r - luma) * saturationFactor;
    g = luma + (g - luma) * saturationFactor;
    b = luma + (b - luma) * saturationFactor;

    const blackMask = clamp((96 - luma) / 96, 0, 1);
    r += (p.blacks / 100) * 32 * blackMask;
    g += (p.blacks / 100) * 32 * blackMask;
    b += (p.blacks / 100) * 32 * blackMask;

    if (toneStrength) {
      luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      const matchedLuma = toneTarget.average + (luma - toneSource.average) * contrastRatio;
      const lumaShift = (matchedLuma - luma) * toneStrength;
      r += lumaShift + (toneTarget.avgR - toneSource.avgR) * colorStrength;
      g += lumaShift + (toneTarget.avgG - toneSource.avgG) * colorStrength;
      b += lumaShift + (toneTarget.avgB - toneSource.avgB) * colorStrength;
    }

    const distance = Math.hypot(x - centerX, y - centerY) / maxDistance;
    const vignette = Math.pow(clamp((distance - 0.34) / 0.66, 0, 1), 1.55) * p.vignette;
    r -= vignette;
    g -= vignette;
    b -= vignette;

    if (p.grain > 0) {
      const grain = (noiseAt(x, y) - 0.5) * p.grain * 2.3;
      r += grain;
      g += grain;
      b += grain;
    }

    data[i] = clamp(r, 0, 255);
    data[i + 1] = clamp(g, 0, 255);
    data[i + 2] = clamp(b, 0, 255);
  }
}

function noiseAt(x, y) {
  const value = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

function saveCurrentToAlbum() {
  if (!state.processedUrl) return;
  const preset = getPreset();
  const item = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    title: state.fileName || "portrait-practice",
    preset: preset.title,
    presetId: preset.id,
    templateImage: preset.image,
    image: state.processedUrl,
    createdAt: new Date().toLocaleString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
  state.album = [item, ...state.album].slice(0, 18);
  saveJson(STORAGE_KEYS.album, state.album);
  renderAlbum();
}

function renderAlbum() {
  if (!state.album.length) {
    els.albumGrid.innerHTML = `<div class="empty-album">还没有保存作品。上传练习照并保存后，这里会形成你的私人练习相册。</div>`;
    return;
  }
  els.albumGrid.innerHTML = state.album
    .map((item) => {
      const matchedPreset = getAllReferences().find(
        (preset) => preset.id === item.presetId || preset.title === item.preset,
      );
      const templateImage = item.templateImage || matchedPreset?.image || "";
      return `
      <article class="album-card">
        <div class="album-pair">
          <figure>
            ${
              templateImage
                ? `<img src="${templateImage}" alt="${escapeHtml(item.preset)}模板照片" />`
                : `<div class="missing-template">模板图缺失</div>`
            }
            <figcaption>模板照片</figcaption>
          </figure>
          <figure>
            <img src="${item.image}" alt="${escapeHtml(item.title)}练习照片" />
            <figcaption>练习照片</figcaption>
          </figure>
        </div>
        <div class="album-meta">
          <strong>${escapeHtml(item.title)}</strong>
          <span>${escapeHtml(item.preset)} · ${escapeHtml(item.createdAt)}</span>
          <div class="album-actions">
            <button class="secondary-button mini-button" type="button" data-export-album="${escapeHtml(item.id)}">导出</button>
            <button class="danger-button mini-button" type="button" data-delete-album="${escapeHtml(item.id)}">删除</button>
          </div>
        </div>
      </article>`;
    })
    .join("");

  els.albumGrid.querySelectorAll("[data-delete-album]").forEach((button) => {
    button.addEventListener("click", () => deleteAlbumItem(button.dataset.deleteAlbum));
  });

  els.albumGrid.querySelectorAll("[data-export-album]").forEach((button) => {
    button.addEventListener("click", () => exportAlbumItem(button.dataset.exportAlbum));
  });
}

function deleteAlbumItem(id) {
  const item = state.album.find((entry) => entry.id === id);
  if (!item) return;
  const confirmed = window.confirm(`删除「${item.title}」这条练习记录吗？`);
  if (!confirmed) return;
  state.album = state.album.filter((entry) => entry.id !== id);
  saveJson(STORAGE_KEYS.album, state.album);
  renderAlbum();
}

async function exportAlbumItem(id) {
  const item = state.album.find((entry) => entry.id === id);
  if (!item) return;
  const matchedPreset = getAllReferences().find(
    (preset) => preset.id === item.presetId || preset.title === item.preset,
  );
  const templateImage = item.templateImage || matchedPreset?.image || "";
  const exportUrl = await buildAlbumExportImage(item, templateImage);
  const link = document.createElement("a");
  link.href = exportUrl;
  link.download = `${safeFileName(item.title)}-practice-pair.jpg`;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

async function buildAlbumExportImage(item, templateImage) {
  const practice = await loadImage(item.image);
  const template = templateImage ? await loadImage(templateImage) : null;
  const canvas = document.createElement("canvas");
  const width = 1800;
  const padding = 72;
  const gap = 28;
  const headerHeight = 154;
  const captionHeight = 58;
  const imageWidth = (width - padding * 2 - gap) / 2;
  const imageHeight = imageWidth * 1.25;
  const height = padding + headerHeight + imageHeight + captionHeight + padding;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#f7f4ef";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#171614";
  ctx.font = "800 48px Microsoft YaHei, Arial, sans-serif";
  ctx.fillText(item.title, padding, padding + 54);
  ctx.fillStyle = "#6e6962";
  ctx.font = "700 28px Microsoft YaHei, Arial, sans-serif";
  ctx.fillText(`${item.preset} · ${item.createdAt}`, padding, padding + 100);

  const top = padding + headerHeight;
  if (template) {
    drawImageCover(ctx, template, padding, top, imageWidth, imageHeight);
  } else {
    ctx.fillStyle = "#1d1a17";
    ctx.fillRect(padding, top, imageWidth, imageHeight);
    ctx.fillStyle = "rgba(255, 253, 250, 0.72)";
    ctx.font = "800 28px Microsoft YaHei, Arial, sans-serif";
    ctx.fillText("模板图缺失", padding + 36, top + imageHeight / 2);
  }
  drawImageCover(ctx, practice, padding + imageWidth + gap, top, imageWidth, imageHeight);

  ctx.fillStyle = "#171614";
  ctx.font = "800 28px Microsoft YaHei, Arial, sans-serif";
  ctx.fillText("模板照片", padding, top + imageHeight + 42);
  ctx.fillText("练习照片", padding + imageWidth + gap, top + imageHeight + 42);
  return canvas.toDataURL("image/jpeg", 0.92);
}

function drawImageCover(ctx, image, x, y, width, height) {
  const scale = Math.max(width / image.width, height / image.height);
  const sourceWidth = width / scale;
  const sourceHeight = height / scale;
  const sourceX = (image.width - sourceWidth) / 2;
  const sourceY = (image.height - sourceHeight) / 2;
  ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, x, y, width, height);
}

function clearAlbum() {
  if (!state.album.length) return;
  const confirmed = window.confirm("确定清空这个浏览器里的练习相册吗？");
  if (!confirmed) return;
  state.album = [];
  saveJson(STORAGE_KEYS.album, state.album);
  renderAlbum();
}

function maxZone(names, zones) {
  return names.reduce((best, name) => (zones[name] > zones[best] ? name : best), names[0]);
}

function loadLibraries() {
  const libraries = loadJson(STORAGE_KEYS.libraries, []);
  if (Array.isArray(libraries) && libraries.length) return libraries;
  return [{ id: DEFAULT_LIBRARY_ID, name: "我的模板库", createdAt: new Date().toISOString() }];
}

function migrateTemplates(templates) {
  if (!Array.isArray(templates)) return [];
  return templates.map((template) => ({
    ...template,
    libraryId: template.libraryId || DEFAULT_LIBRARY_ID,
  }));
}

function zoneLabel(zone) {
  const labels = {
    left: "左侧",
    center: "中央",
    right: "右侧",
    top: "上部",
    middle: "中部",
    bottom: "下部",
  };
  return labels[zone] || zone;
}

function loadJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    alert("浏览器本地空间不足，当前内容没有保存。可以先下载成片，再清理旧作品或旧模板。");
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeFileName(value) {
  return String(value)
    .trim()
    .replace(/[\\/:*?"<>|]+/g, "-")
    .replace(/\s+/g, "-")
    .slice(0, 60) || "portrait-practice";
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
