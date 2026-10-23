"use strict";

const DEFAULT_LANG = "en";
const LANG_KEY = "mindTrainer.lang";
const STORAGE_KEY = "mindTrainer.formEditor.v1";

const I18N = {
  en: {
    pageTitle: "Form editor · mind trainer",
    product: "Form editor",
    nextText: "Text →",
    export: "Export",
    textEyebrow: "Text for the form",
    textHint: "Change one axis, then read. Start the timer (S) when you begin.",
    textFoot: "The form can stay static or move while you read",
    notes: "Observations",
    clear: "Clear",
    effect: "Effect",
    flow: "Flow",
    clarity: "Clarity",
    comfort: "Comfort",
    notePlaceholder: "What changed — and where did attention dip?",
    save: "Save",
    emptyLog: "No observations yet. Change an axis, read, and record what happened.",
    noNote: "no note",
    tabEdges: "Edges",
    tabCurvature: "Curvature",
    tabHole: "Hole",
    tabOrientation: "Orientation",
    axisEdges: "Facet count",
    axisCurvature: "Roundness",
    axisHole: "Hole size",
    yaw: "Yaw",
    pitch: "Pitch",
    roll: "Roll",
    staticLabel: "static",
    movingLabel: "moving",
    motion: "Motion",
    keyMotion: "motion",
    shortEffect: "eff",
    shortFlow: "flow",
    shortClarity: "clar",
    shortComfort: "comf",
    keyTabs: "tabs",
    keyTimer: "timer",
    keyReset: "reset",
    keyText: "text",
    keyExport: "export",
    timerStartStop: "Start/stop (S)",
    timerReset: "Reset timer",
    langLabel: "Language",
    clearConfirm: "Clear the observations and events log?",
    deleteNote: "Delete observation",
    words: (n) => `${n} words`
  },
  ru: {
    pageTitle: "Редактор форм · мысленный тренажёр",
    product: "Редактор форм",
    nextText: "Текст →",
    export: "Экспорт",
    textEyebrow: "Текст для формы",
    textHint: "Меняй одну ось, затем читай. Включи таймер (S), когда начнёшь.",
    textFoot: "Форма может оставаться статичной или двигаться во время чтения",
    notes: "Наблюдения",
    clear: "Очистить",
    effect: "Эффект",
    flow: "Поток",
    clarity: "Ясность",
    comfort: "Комфорт",
    notePlaceholder: "Что изменилось — и где внимание провалилось?",
    save: "Записать",
    emptyLog: "Пока нет наблюдений. Измени ось, прочитай и запиши, что произошло.",
    noNote: "без заметки",
    tabEdges: "Грани",
    tabCurvature: "Кривизна",
    tabHole: "Отверстие",
    tabOrientation: "Ориентация",
    axisEdges: "Количество граней",
    axisCurvature: "Округлость",
    axisHole: "Размер отверстия",
    yaw: "Поворот",
    pitch: "Наклон",
    roll: "Крен",
    staticLabel: "статика",
    movingLabel: "движение",
    motion: "Движение",
    keyMotion: "движение",
    shortEffect: "эфф",
    shortFlow: "поток",
    shortClarity: "ясн",
    shortComfort: "комф",
    keyTabs: "вкладки",
    keyTimer: "таймер",
    keyReset: "сброс",
    keyText: "текст",
    keyExport: "экспорт",
    timerStartStop: "Старт/стоп (S)",
    timerReset: "Сброс таймера",
    langLabel: "Язык",
    clearConfirm: "Очистить журнал наблюдений и событий?",
    deleteNote: "Удалить наблюдение",
    words: (n) => `${n} слов`
  }
};

const TEXTS = {
  en: [
    {
      id: "A",
      title: "The Index",
      body: "Before the book index existed, reading was almost linear: to find a passage, a reader flipped pages or relied on memory. The index changed not the speed of reading but its trajectory. It allowed a reader to enter a book at any point, bypassing the beginning, and turned the text into an addressable space. In this sense, the index is not a reference tool but a technology of attention: it decides in advance what counts as a separate object in the book and under which names one can reach it. The history of indexes is therefore also a history of the categories publishers considered important. Page numbers and alphabetical order made knowledge fragmented and, at the same time, more accessible. The reader ceased to be only a traveler moving through the text from start to finish and became a user who chooses a route."
    },
    {
      id: "B",
      title: "The Octopus",
      body: "In an octopus, most neurons are not in the brain but in the arms. Each arm can explore a crevice, seize prey, and withdraw without waiting for a command from the center. This does not mean the octopus is fully decentralized: the brain sets the overall goal and intervenes when the arms conflict. But its control is organized as negotiations among local systems rather than as a top-down order. Such an architecture works well in a changing environment: an arm that hits an obstacle changes its behavior faster than a signal could travel to the center and back. The price is less coherence: the arms can interfere with one another, and the octopus has to pull them apart. Its behavior therefore looks both precise and strange: it is not a single commander but a collective that negotiates on the move."
    },
    {
      id: "C",
      title: "The Gothic Cathedral",
      body: "The Gothic cathedral is often explained by a desire for light and height, but its form is primarily a solution to an engineering problem. A stone vault is heavy and pushes the walls outward; to hold it, builders transferred the load to flying buttresses and piers. Freed from that work, the walls could be cut through with large windows. Light thus became not the cause of the style but a consequence of the structure. Stained glass, in turn, changed not only the lighting but also the way a person read the space: the stories of the saints were arranged not in a book but around the gaze, at different heights and in different light. The cathedral worked as a machine for managing attention, in which stone, glass, and the visitor's route were linked into one system."
    },
    {
      id: "D",
      title: "The Paris Sewers",
      body: "The Paris sewer system of the nineteenth century was not only a sanitary project. It rebuilt the idea of the city: beneath the streets appeared a second city, with its own passages, maps, and inspectors. For engineers it was flow management; for writers, a metaphor for hidden life; for politicians, a way to make the invisible visible and accountable. The sewers showed that infrastructure is not neutral: it defines what counts as normal, who has access, and what traces remain. When a system works well, no one notices it; when it breaks, it becomes the main story. The history of the sewers is therefore a history not only of pipes but also of how a society learns to think about consequences that are usually hidden."
    }
  ],
  ru: [
    {
      id: "A",
      title: "Указатель",
      body: "До появления книжного указателя чтение было почти линейным: чтобы найти нужное место, читатель листал страницы или полагался на память. Указатель изменил не скорость чтения, а его траекторию. Он позволил входить в книгу с любой точки, минуя начало, и превратил текст в адресуемое пространство. В этом смысле указатель — не справочный аппарат, а технология внимания: он заранее решает, что в книге считается отдельным предметом и по каким именам к нему можно обратиться. Поэтому история указателей — это ещё и история того, какие категории казались издателям важными. Страница, номер и алфавитный порядок сделали знание фрагментированным и одновременно более доступным. Читатель перестал быть только путником, проходящим текст насквозь, и стал пользователем, который выбирает маршрут."
    },
    {
      id: "B",
      title: "Осьминог",
      body: "У осьминога большая часть нейронов находится не в мозге, а в руках. Каждая рука может исследовать щель, схватить добычу и отдернуться, не дожидаясь команды из центра. Это не значит, что осьминог полностью децентрализован: мозг задаёт общую цель и вмешивается, когда руки конфликтуют. Но управление у него устроено как переговоры между локальными системами, а не как приказ сверху. Такая архитектура хорошо работает в изменчивой среде: рука, наткнувшаяся на препятствие, меняет поведение быстрее, чем сигнал успел бы дойти до центра и вернуться. Цена — меньшая согласованность: руки могут мешать друг другу, и осьминогу приходится их разнимать. Поэтому его поведение выглядит одновременно точным и странным: это не единый командир, а коллектив, который договаривается на ходу."
    },
    {
      id: "C",
      title: "Готический собор",
      body: "Готический собор часто объясняют стремлением к свету и высоте, но его форма — прежде всего решение инженерной задачи. Каменный свод тяжёл и распирает стены наружу; чтобы удержать его, строители перенесли нагрузку на аркбутаны и контрфорсы. Освобождённые от этой работы стены можно было прорезать большими окнами. Так свет стал не причиной стиля, а следствием конструкции. Витражи, в свою очередь, изменили не только освещение, но и то, как человек читал пространство: история святых располагалась не в книге, а вокруг взгляда, на разных высотах и в разном свете. Собор работал как машина для управления вниманием, где камень, стекло и маршрут человека были связаны в одну систему."
    },
    {
      id: "D",
      title: "Парижская канализация",
      body: "Парижская канализация XIX века была не только санитарным проектом. Она перестраивала представление о городе: под улицами появлялся второй город, с собственными проходами, картами и инспекторами. Для инженеров это было управление потоками; для писателей — метафора скрытой жизни; для политиков — способ сделать невидимое видимым и подотчётным. Канализация показала, что инфраструктура не нейтральна: она задаёт, что считается нормой, кто имеет доступ и какие следы остаются. Когда система работает хорошо, её не замечают; когда она ломается, она становится главным сюжетом. Поэтому история канализации — это история не только труб, но и того, как общество учится думать о последствиях, которые обычно скрыты."
    }
  ]
};

const TAB_ORDER = ["edges", "curvature", "hole", "orientation"];

const textEl = document.getElementById("text");
const textTitleEl = document.getElementById("text-title");
const wordCountEl = document.getElementById("word-count");
const nextTextBtn = document.getElementById("next-text");
const exportBtn = document.getElementById("export");
const tabButtons = Array.from(document.querySelectorAll(".tab[data-tab]"));
const axisGroups = Array.from(document.querySelectorAll(".axis[data-axis]"));
const edgesInput = document.getElementById("edges");
const edgesValue = document.getElementById("edges-value");
const curvatureInput = document.getElementById("curvature");
const curvatureValue = document.getElementById("curvature-value");
const holeInput = document.getElementById("hole");
const holeValue = document.getElementById("hole-value");
const yawInput = document.getElementById("yaw");
const yawValue = document.getElementById("yaw-value");
const pitchInput = document.getElementById("pitch");
const pitchValue = document.getElementById("pitch-value");
const rollInput = document.getElementById("roll");
const rollValue = document.getElementById("roll-value");
const formLabelEl = document.getElementById("form-label");
const motionLabelEl = document.getElementById("motion-label");
const motionInput = document.getElementById("motion");
const statusModeEl = document.getElementById("status-mode");
const noteInput = document.getElementById("note");
const saveNoteBtn = document.getElementById("save-note");
const ratingGroups = Array.from(document.querySelectorAll(".rating[data-rating]"));
const logEl = document.getElementById("log");
const summaryEl = document.getElementById("summary");
const clearLogBtn = document.getElementById("clear-log");
const timerBtn = document.getElementById("timer");
const timerResetBtn = document.getElementById("timer-reset");
const linkRoute = document.getElementById("link-route");
const linkScreening = document.getElementById("link-screening");

function loadLang() {
  try {
    const requested = new URLSearchParams(location.search).get("lang");
    if (requested === "en" || requested === "ru") {
      try {
        localStorage.setItem(LANG_KEY, requested);
      } catch (err) {}
      return requested;
    }
  } catch (err) {}
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "ru") return saved;
  } catch (err) {}
  return DEFAULT_LANG;
}

const state = {
  lang: loadLang(),
  tab: "edges",
  base: "edges",
  edges: 8,
  curvature: 0.4,
  hole: 0.6,
  yaw: 0,
  pitch: 0,
  roll: 0,
  motion: false,
  spin: 0,
  textIndex: 0,
  ratings: { effect: 0, flow: 0, clarity: 0, comfort: 0 }
};

const timer = { running: false, startedAt: 0, elapsed: 0 };

const store = loadStore();
let observations = store.observations;
let events = store.events;

let renderer = null;
let scene = null;
let camera = null;
let group = null;
let smoothMaterial = null;
let flatMaterial = null;
let lineMaterial = null;
let currentGeometry = null;
let currentEdges = null;
let lastFrame = performance.now();

function t(key, ...args) {
  const value = I18N[state.lang][key];
  return typeof value === "function" ? value(...args) : value;
}

function tabLabel(tab) {
  return t("tab" + tab.charAt(0).toUpperCase() + tab.slice(1));
}

function textMeta() {
  return TEXTS[state.lang][state.textIndex];
}

function textTitleFor(observation) {
  const text = TEXTS[state.lang].find((item) => item.id === observation.textId);
  return text ? text.title : (observation.textTitle || "");
}

function axisValue() {
  if (state.tab === "edges") return String(state.edges);
  if (state.tab === "curvature") return state.curvature.toFixed(2);
  if (state.tab === "hole") return state.hole.toFixed(2);
  return state.yaw + "° / " + state.pitch + "° / " + state.roll + "°";
}

function formLabel() {
  return tabLabel(state.tab) + " · " + axisValue();
}

function uid() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return String(Date.now()) + "-" + Math.random().toString(16).slice(2);
}

function loadStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { observations: [], events: [] };
    const data = JSON.parse(raw);
    return {
      observations: Array.isArray(data.observations)
        ? data.observations.filter((o) => o && o.id && o.at && o.tab)
        : [],
      events: Array.isArray(data.events) ? data.events : []
    };
  } catch (err) {
    return { observations: [], events: [] };
  }
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      observations: observations.slice(0, 500),
      events: events.slice(0, 1200)
    }));
  } catch (err) {}
}

function logEvent(type, value) {
  events.unshift({ at: new Date().toISOString(), type, value });
  if (events.length > 1200) events.length = 1200;
  persist();
}

function countWords(text) {
  const trimmed = text.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
}

function renderText() {
  const meta = textMeta();
  textTitleEl.textContent = meta.title;
  const paragraphs = meta.body.split(/\n{2,}/).map((part) => {
    const p = document.createElement("p");
    p.textContent = part.trim();
    return p;
  });
  textEl.replaceChildren(...paragraphs);
  wordCountEl.textContent = t("words", countWords(meta.body));
  document.querySelector(".text-pane").scrollTop = 0;
}

function nextText() {
  state.textIndex = (state.textIndex + 1) % TEXTS[state.lang].length;
  renderText();
  logEvent("text", textMeta().id);
}

function setRating(key, value) {
  state.ratings[key] = value;
  const group = ratingGroups.find((element) => element.dataset.rating === key);
  if (!group) return;
  group.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.value) === value);
  });
}

function resetRatings() {
  Object.keys(state.ratings).forEach((key) => setRating(key, 0));
}

function timerElapsed() {
  return timer.elapsed + (timer.running ? performance.now() - timer.startedAt : 0);
}

function formatTimer(ms) {
  const tenths = Math.max(0, Math.floor(ms / 100));
  const seconds = Math.floor(tenths / 10);
  const minutes = Math.floor(seconds / 60);
  return String(minutes).padStart(2, "0") + ":" +
    String(seconds % 60).padStart(2, "0") + "." +
    String(tenths % 10);
}

function updateTimerDisplay() {
  if (!timerBtn) return;
  timerBtn.textContent = "⏱ " + formatTimer(timerElapsed());
  timerBtn.classList.toggle("running", timer.running);
}

function toggleTimer() {
  if (timer.running) {
    timer.elapsed += performance.now() - timer.startedAt;
    timer.running = false;
  } else {
    timer.startedAt = performance.now();
    timer.running = true;
  }
  updateTimerDisplay();
  logEvent("timer", timer.running ? "start" : "stop");
}

function resetTimer() {
  timer.running = false;
  timer.elapsed = 0;
  updateTimerDisplay();
  logEvent("timer", "reset");
}

function makeCurvatureGeometry(roundness) {
  const geometry = new THREE.SphereGeometry(1, 48, 32);
  const position = geometry.attributes.position;
  for (let i = 0; i < position.count; i += 1) {
    const x = position.getX(i);
    const y = position.getY(i);
    const z = position.getZ(i);
    const max = Math.max(Math.abs(x), Math.abs(y), Math.abs(z)) || 1;
    const cx = x / max;
    const cy = y / max;
    const cz = z / max;
    position.setXYZ(
      i,
      x + (cx - x) * roundness,
      y + (cy - y) * roundness,
      z + (cz - z) * roundness
    );
  }
  position.needsUpdate = true;
  geometry.computeVertexNormals();
  return geometry;
}

function initThree() {
  if (typeof THREE === "undefined") throw new Error("THREE is not loaded");
  const canvas = document.getElementById("scene");
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputEncoding = THREE.sRGBEncoding;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 0, 5.6);
  camera.lookAt(0, 0, 0);

  group = new THREE.Group();
  scene.add(group);

  scene.add(new THREE.AmbientLight(0xffffff, 0.4));
  const key = new THREE.DirectionalLight(0xfff2e2, 0.75);
  key.position.set(3, 4, 5);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0x9fb4c9, 0.2);
  fill.position.set(-4, -2, 3);
  scene.add(fill);

  smoothMaterial = new THREE.MeshStandardMaterial({
    color: 0x8f8374,
    roughness: 0.76,
    metalness: 0.02,
    emissive: 0x0a0806,
    emissiveIntensity: 1
  });
  flatMaterial = new THREE.MeshStandardMaterial({
    color: 0x8f8374,
    roughness: 0.82,
    metalness: 0.02,
    emissive: 0x0a0806,
    emissiveIntensity: 1,
    flatShading: true
  });
  lineMaterial = new THREE.LineBasicMaterial({
    color: 0x6e6255,
    transparent: true,
    opacity: 0.55
  });

  buildForm();
  resize();
  new ResizeObserver(resize).observe(document.querySelector(".form-stage"));
  requestAnimationFrame(animate);
}

function failThree(err) {
  console.error(err);
  const stage = document.querySelector(".form-stage");
  if (!stage) return;
  stage.innerHTML = '<div style="position:absolute;inset:0;display:grid;place-items:center;color:#5f6671;font-size:11px;text-align:center;padding:20px">WebGL did not start. Check the browser.</div>';
}

function resize() {
  if (!renderer || !camera) return;
  const stage = document.querySelector(".form-stage");
  const width = Math.max(1, stage.clientWidth);
  const height = Math.max(1, stage.clientHeight);
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

function animate(now) {
  const delta = Math.min(50, now - lastFrame);
  lastFrame = now;
  if (renderer && scene && camera) {
    if (state.motion && group) {
      state.spin += delta * 0.00035;
      group.rotation.y = THREE.MathUtils.degToRad(state.yaw) + state.spin;
    }
    renderer.render(scene, camera);
  }
  requestAnimationFrame(animate);
}

function disposeCurrent() {
  if (currentGeometry) currentGeometry.dispose();
  if (currentEdges) currentEdges.dispose();
  currentGeometry = null;
  currentEdges = null;
}

function buildForm() {
  if (!group) return;
  disposeCurrent();
  while (group.children.length) group.remove(group.children[0]);

  const base = state.tab === "orientation" ? state.base : state.tab;
  let geometry = null;
  let material = smoothMaterial;

  if (base === "edges") {
    geometry = new THREE.SphereGeometry(
      1,
      state.edges,
      Math.max(3, Math.round(state.edges / 2))
    );
    material = flatMaterial;
  } else if (base === "curvature") {
    geometry = makeCurvatureGeometry(state.curvature);
  } else if (base === "hole") {
    geometry = new THREE.TorusGeometry(
      0.55 + state.hole * 0.55,
      0.5 - state.hole * 0.22,
      32,
      96
    );
  } else {
    geometry = new THREE.SphereGeometry(1, 12, 8);
    material = flatMaterial;
  }

  const mesh = new THREE.Mesh(geometry, material);
  const edgesGeometry = new THREE.EdgesGeometry(geometry, 24);
  const edges = new THREE.LineSegments(edgesGeometry, lineMaterial);
  group.add(mesh);
  group.add(edges);
  group.rotation.set(
    THREE.MathUtils.degToRad(state.pitch),
    THREE.MathUtils.degToRad(state.yaw) + state.spin,
    THREE.MathUtils.degToRad(state.roll)
  );
  currentGeometry = geometry;
  currentEdges = edgesGeometry;
}

function updateOutputs() {
  edgesValue.textContent = String(state.edges);
  curvatureValue.textContent = state.curvature.toFixed(2);
  holeValue.textContent = state.hole.toFixed(2);
  yawValue.textContent = state.yaw + "°";
  pitchValue.textContent = state.pitch + "°";
  rollValue.textContent = state.roll + "°";
}

function updateHud() {
  const label = formLabel();
  formLabelEl.textContent = label;
  motionLabelEl.textContent = state.motion ? t("movingLabel") : t("staticLabel");
  statusModeEl.textContent = label + " · " + (state.motion ? t("movingLabel") : t("staticLabel"));
}

function setTab(tab) {
  if (!TAB_ORDER.includes(tab)) return;
  state.tab = tab;
  if (tab !== "orientation") state.base = tab;
  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tab);
  });
  axisGroups.forEach((groupEl) => {
    groupEl.classList.toggle("active", groupEl.dataset.axis === tab);
  });
  buildForm();
  updateOutputs();
  updateHud();
  logEvent("tab", tab);
}

function setMotion(next) {
  state.motion = Boolean(next);
  if (!state.motion) state.spin = 0;
  motionInput.checked = state.motion;
  buildForm();
  updateHud();
  logEvent("motion", state.motion ? "on" : "off");
}

function setEdge(value) {
  state.edges = Math.max(3, Math.min(24, Math.round(Number(value) || 8)));
  edgesInput.value = String(state.edges);
  updateOutputs();
  buildForm();
  updateHud();
}

function setCurvature(value) {
  state.curvature = Math.max(0, Math.min(1, Number(value) || 0));
  curvatureInput.value = String(state.curvature);
  updateOutputs();
  buildForm();
  updateHud();
}

function setHole(value) {
  state.hole = Math.max(0, Math.min(1, Number(value) || 0));
  holeInput.value = String(state.hole);
  updateOutputs();
  buildForm();
  updateHud();
}

function setOrientation(axis, value) {
  const next = Math.max(-180, Math.min(180, Math.round(Number(value) || 0)));
  state[axis] = next;
  const input = axis === "yaw" ? yawInput : axis === "pitch" ? pitchInput : rollInput;
  input.value = String(next);
  updateOutputs();
  buildForm();
  updateHud();
}

function resetCurrentAxis() {
  if (state.tab === "edges") setEdge(8);
  else if (state.tab === "curvature") setCurvature(0.4);
  else if (state.tab === "hole") setHole(0.6);
  else {
    setOrientation("yaw", 0);
    setOrientation("pitch", 0);
    setOrientation("roll", 0);
  }
  logEvent("reset", state.tab);
}

function saveObservation() {
  const note = noteInput.value.trim();
  const { effect, flow, clarity, comfort } = state.ratings;
  if (!note && !effect && !flow && !clarity && !comfort) {
    noteInput.focus();
    return;
  }
  if (timer.running) {
    timer.elapsed += performance.now() - timer.startedAt;
    timer.running = false;
  }
  const readingMs = timer.elapsed > 0 ? Math.round(timer.elapsed) : null;
  const meta = textMeta();
  observations.unshift({
    id: uid(),
    at: new Date().toISOString(),
    tab: state.tab,
    tabLabel: tabLabel(state.tab),
    value: axisValue(),
    settings: {
      edges: state.edges,
      curvature: state.curvature,
      hole: state.hole,
      yaw: state.yaw,
      pitch: state.pitch,
      roll: state.roll
    },
    motion: state.motion,
    readingMs,
    effect,
    flow,
    clarity,
    comfort,
    note,
    textId: meta.id,
    textTitle: meta.title
  });
  if (observations.length > 500) observations.length = 500;
  persist();
  renderLog();
  renderSummary();
  noteInput.value = "";
  noteInput.blur();
  resetRatings();
  timer.elapsed = 0;
  timer.running = false;
  updateTimerDisplay();
}

function removeObservation(id) {
  observations = observations.filter((observation) => observation.id !== id);
  persist();
  renderLog();
  renderSummary();
}

function renderLog() {
  if (!observations.length) {
    const empty = document.createElement("div");
    empty.className = "log-empty";
    empty.textContent = t("emptyLog");
    logEl.replaceChildren(empty);
    return;
  }
  const items = observations.slice(0, 60).map((observation) => {
    const entry = document.createElement("div");
    entry.className = "log-entry";

    const top = document.createElement("div");
    top.className = "log-top";

    const form = document.createElement("span");
    form.className = "log-form";
    form.textContent = tabLabel(observation.tab) + " " + observation.value +
      " · " + t(observation.motion ? "movingLabel" : "staticLabel");

    const meta = document.createElement("span");
    const time = new Date(observation.at).toLocaleTimeString(state.lang === "ru" ? "ru-RU" : "en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });
    const parts = [];
    const title = textTitleFor(observation);
    if (title) parts.push(title);
    if (observation.readingMs) parts.push((observation.readingMs / 1000).toFixed(1) + "s");
    parts.push(time);
    meta.textContent = parts.join(" · ");

    const ratings = document.createElement("span");
    ratings.className = "log-ratings";
    const ratingParts = [];
    if (observation.effect) ratingParts.push(t("shortEffect") + " " + observation.effect);
    if (observation.flow) ratingParts.push(t("shortFlow") + " " + observation.flow);
    if (observation.clarity) ratingParts.push(t("shortClarity") + " " + observation.clarity);
    if (observation.comfort) ratingParts.push(t("shortComfort") + " " + observation.comfort);
    ratings.textContent = ratingParts.join(" · ");

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "log-remove";
    remove.dataset.remove = observation.id;
    remove.title = t("deleteNote");
    remove.textContent = "×";

    top.append(form, meta, ratings, remove);

    const note = document.createElement("div");
    note.className = "log-note" + (observation.note ? "" : " empty");
    note.textContent = observation.note || t("noNote");

    entry.append(top, note);
    return entry;
  });
  logEl.replaceChildren(...items);
}

function average(values) {
  if (!values.length) return null;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function summarize() {
  const groups = new Map();
  observations.forEach((observation) => {
    const motion = Boolean(observation.motion);
    const key = observation.tab + "|" + observation.value + "|" + (motion ? "moving" : "static");
    if (!groups.has(key)) {
      groups.set(key, {
        tab: observation.tab,
        value: observation.value,
        motion,
        label: tabLabel(observation.tab) + " " + observation.value +
          " · " + t(motion ? "movingLabel" : "staticLabel"),
        count: 0,
        effect: [],
        flow: [],
        clarity: [],
        comfort: [],
        times: []
      });
    }
    const group = groups.get(key);
    group.count += 1;
    if (observation.effect) group.effect.push(observation.effect);
    if (observation.flow) group.flow.push(observation.flow);
    if (observation.clarity) group.clarity.push(observation.clarity);
    if (observation.comfort) group.comfort.push(observation.comfort);
    if (observation.readingMs) group.times.push(observation.readingMs);
  });
  return Array.from(groups.values()).map((group) => ({
    ...group,
    effectAverage: average(group.effect),
    flowAverage: average(group.flow),
    clarityAverage: average(group.clarity),
    comfortAverage: average(group.comfort),
    timeAverage: average(group.times)
  })).sort((a, b) => {
    const tabDiff = TAB_ORDER.indexOf(a.tab) - TAB_ORDER.indexOf(b.tab);
    if (tabDiff !== 0) return tabDiff;
    const valueDiff = String(a.value).localeCompare(String(b.value), undefined, { numeric: true });
    if (valueDiff !== 0) return valueDiff;
    return Number(a.motion) - Number(b.motion);
  });
}

function renderSummary() {
  const groups = summarize();
  if (!groups.length) {
    summaryEl.replaceChildren();
    return;
  }
  const chips = groups.map((group) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    const name = document.createElement("b");
    name.textContent = group.label;
    chip.append(name);
    chip.append(" · " + group.count);
    if (group.effectAverage != null) chip.append(" · " + t("shortEffect") + " " + group.effectAverage.toFixed(1));
    if (group.flowAverage != null) chip.append(" · " + t("shortFlow") + " " + group.flowAverage.toFixed(1));
    if (group.clarityAverage != null) chip.append(" · " + t("shortClarity") + " " + group.clarityAverage.toFixed(1));
    if (group.comfortAverage != null) chip.append(" · " + t("shortComfort") + " " + group.comfortAverage.toFixed(1));
    if (group.timeAverage != null) chip.append(" · " + (group.timeAverage / 1000).toFixed(1) + "s");
    return chip;
  });
  summaryEl.replaceChildren(...chips);
}

function exportJson() {
  const payload = {
    format: "mind-trainer/form-editor",
    version: 1,
    lang: state.lang,
    exportedAt: new Date().toISOString(),
    observations,
    events,
    summary: summarize()
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "form-editor-" + new Date().toISOString().slice(0, 10) + ".json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function applyI18n() {
  document.documentElement.lang = state.lang;
  document.title = t("pageTitle");
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.title = t(element.dataset.i18nTitle);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });
  linkRoute.href = "route-player.html?lang=" + state.lang;
  linkScreening.href = "live-probe.html?lang=" + state.lang;
  renderText();
  updateOutputs();
  updateHud();
  updateTimerDisplay();
  renderLog();
  renderSummary();
}

function setLang(lang) {
  if (lang !== "en" && lang !== "ru") return;
  if (lang === state.lang) return;
  state.lang = lang;
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (err) {}
  applyI18n();
  logEvent("lang", lang);
}

function bindEvents() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLang(button.dataset.lang));
  });
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => setTab(button.dataset.tab));
  });
  motionInput.addEventListener("change", () => setMotion(motionInput.checked));
  edgesInput.addEventListener("input", () => setEdge(edgesInput.value));
  edgesInput.addEventListener("change", () => logEvent("edges", state.edges));
  curvatureInput.addEventListener("input", () => setCurvature(curvatureInput.value));
  curvatureInput.addEventListener("change", () => logEvent("curvature", state.curvature));
  holeInput.addEventListener("input", () => setHole(holeInput.value));
  holeInput.addEventListener("change", () => logEvent("hole", state.hole));
  yawInput.addEventListener("input", () => setOrientation("yaw", yawInput.value));
  pitchInput.addEventListener("input", () => setOrientation("pitch", pitchInput.value));
  rollInput.addEventListener("input", () => setOrientation("roll", rollInput.value));

  nextTextBtn.addEventListener("click", nextText);
  exportBtn.addEventListener("click", exportJson);
  saveNoteBtn.addEventListener("click", saveObservation);
  noteInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      saveObservation();
    }
  });

  ratingGroups.forEach((group) => {
    group.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-value]");
      if (!button) return;
      const key = group.dataset.rating;
      const value = Number(button.dataset.value);
      setRating(key, state.ratings[key] === value ? 0 : value);
    });
  });

  timerBtn.addEventListener("click", toggleTimer);
  timerResetBtn.addEventListener("click", resetTimer);

  logEl.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-remove]");
    if (!button) return;
    removeObservation(button.dataset.remove);
  });

  clearLogBtn.addEventListener("click", () => {
    if (!observations.length && !events.length) return;
    if (!confirm(t("clearConfirm"))) return;
    observations = [];
    events = [];
    persist();
    renderLog();
    renderSummary();
  });

  window.addEventListener("keydown", (event) => {
    const target = event.target;
    const tag = target && target.tagName ? target.tagName : "";
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    if (/^[1-4]$/.test(event.key)) {
      setTab(TAB_ORDER[Number(event.key) - 1]);
      return;
    }
    const key = event.key.toLowerCase();
    if (key === "m") setMotion(!state.motion);
    else if (key === "s") toggleTimer();
    else if (key === "r") resetCurrentAxis();
    else if (key === "t") nextText();
    else if (key === "e") exportJson();
  });
}

function init() {
  motionInput.checked = state.motion;
  applyI18n();
  updateOutputs();
  updateTimerDisplay();
  setInterval(updateTimerDisplay, 100);
  bindEvents();
  try {
    initThree();
  } catch (err) {
    failThree(err);
  }
}

init();
