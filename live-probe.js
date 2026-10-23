"use strict";

const DEFAULT_LANG = "en";
const LANG_KEY = "mindTrainer.lang";

const I18N = {
  en: {
    pageTitle: "Live probe · mind trainer",
    product: "Live probe",
    form: "Form",
    motion: "Motion",
    size: "Size",
    nextText: "Text →",
    nextTextTitle: "Next text (T)",
    customText: "Custom text",
    export: "Export",
    exportTitle: "Export (E)",
    textEyebrow: "Text for the probe",
    textHint: "Read and switch the probe. Watch the process, not the result.",
    textFoot: "The probe can be switched on the fly",
    notes: "Notes",
    clear: "Clear",
    clearTitle: "Clear the log",
    ratingLabel: "Strength of change",
    rating1: "Weak",
    rating2: "Noticeable",
    rating3: "Medium",
    rating4: "Strong",
    rating5: "Very strong",
    notePlaceholder: "What changed right now?",
    save: "Save",
    emptyLog: "No notes yet. Switch the probe and record what changes right now.",
    noNote: "no note",
    noProbe: "No probe",
    motionOn: "motion",
    motionOff: "still",
    on: "on",
    off: "off",
    probeOn: "Probe on",
    probeOff: "Probe off",
    probeOffHint: "to bring it back",
    space: "probe",
    keysForm: "form",
    keysMotion: "motion",
    keysSize: "size",
    keysTimer: "timer",
    keysReset: "reset",
    keysNote: "note",
    keysText: "text",
    keysExport: "export",
    dialogTitle: "Text for the probe",
    dialogPlaceholder: "Paste or edit the text",
    cancel: "Cancel",
    apply: "Apply",
    clearConfirm: "Clear the notes and events log?",
    deleteNote: "Delete note",
    timerStartStop: "Start/stop (S)",
    timerReset: "Reset (R)",
    noWebGL: "WebGL did not start. Check the browser or open through a local server.",
    words: (n) => `${n} words`,
    summaryMov: "mov",
    summaryStill: "still",
    langLabel: "Language"
  },
  ru: {
    pageTitle: "Live probe · мысленный тренажёр",
    product: "Проба сейчас",
    form: "Форма",
    motion: "Движение",
    size: "Размер",
    nextText: "Текст →",
    nextTextTitle: "Следующий текст (T)",
    customText: "Свой текст",
    export: "Экспорт",
    exportTitle: "Экспорт (E)",
    textEyebrow: "Текст для пробы",
    textHint: "Читай и переключай пробу. Смотри на процесс, не на результат.",
    textFoot: "Пробу можно переключать на ходу",
    notes: "Заметки",
    clear: "Очистить",
    clearTitle: "Очистить журнал",
    ratingLabel: "Сила изменения",
    rating1: "Слабо",
    rating2: "Заметно",
    rating3: "Средне",
    rating4: "Сильно",
    rating5: "Очень сильно",
    notePlaceholder: "Что изменилось прямо сейчас?",
    save: "Записать",
    emptyLog: "Пока нет заметок. Переключай пробу и записывай, что меняется прямо сейчас.",
    noNote: "без заметки",
    noProbe: "Без пробы",
    motionOn: "движение",
    motionOff: "статика",
    on: "включена",
    off: "выключена",
    probeOn: "Проба включена",
    probeOff: "Проба выключена",
    probeOffHint: "вернуть",
    space: "проба",
    keysForm: "форма",
    keysMotion: "движение",
    keysSize: "размер",
    keysTimer: "таймер",
    keysReset: "сброс",
    keysNote: "заметка",
    keysText: "текст",
    keysExport: "экспорт",
    dialogTitle: "Текст для пробы",
    dialogPlaceholder: "Вставь или отредактируй текст",
    cancel: "Отмена",
    apply: "Применить",
    clearConfirm: "Очистить журнал заметок и событий?",
    deleteNote: "Удалить заметку",
    timerStartStop: "Старт/стоп (S)",
    timerReset: "Сброс (R)",
    noWebGL: "WebGL не запустился. Проверь браузер или открой через локальный сервер.",
    words: (n) => `${n} слов`,
    summaryMov: "дв",
    summaryStill: "ст",
    langLabel: "Язык"
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
    },
    {
      id: "E",
      title: "Bird Navigation",
      body: "Migrating birds find their way by combining several signals: the position of the sun, the pattern of the stars, the magnetic field, and familiar landmarks. None of these channels is primary; if one is unavailable, the bird switches to another. Such redundancy makes navigation robust but not absolute: in unfamiliar terrain or under strong interference, birds make mistakes. Researchers argue about how exactly birds sense the magnetic field, but the fact that navigation is not reducible to a single sensory system is important. It shows that complex behavior often rests not on one precise instrument but on the agreement of several rough ones. This makes the system flexible, but it also makes the search for a single center of navigation difficult."
    },
    {
      id: "F",
      title: "The Container",
      body: "The revolution in world trade is often explained by faster ships or cheaper fuel, but the decisive invention was the standard container. Before it, cargo was reloaded by hand, and every transfer cost time, money, and risk. The container made cargo a unit that could pass between ship, crane, train, and truck without repacking. Not only logistics changed but also geography: ports, warehouses, and cities began to reorganize around new nodes. The standard won not because it was the most efficient for every participant, but because it allowed everyone to use one infrastructure. Like the index in a book, it defined a unit by which movement became easy to address."
    },
    {
      id: "G",
      title: "The Sonnet",
      body: "A sonnet is a strict form: fourteen lines, a fixed rhyme scheme, a turn between the octave and the sestet. The constraint does not hinder thought; it makes thought visible. The poet must not only say something but fit it into a given length, and this conflict between intention and form often creates meaning. The turn, or volta, is the place where the argument changes direction; without it, the sonnet falls into two parts. It is therefore useful to read a sonnet not as a list of lines but as a trajectory: first tension, then shift, then conclusion. The form works here as an instrument: it shows where thought resists and where it yields."
    },
    {
      id: "H",
      title: "Bread",
      body: "Sourdough bread is not a recipe but a system. Flour, water, salt, and microorganisms form an environment in which yeasts and bacteria compete and cooperate. Time and temperature change not only the speed of fermentation but also the taste: at one temperature yeasts are more active, at another bacteria are, and the balance determines acidity. Therefore the same recipe produces different bread under different conditions. The baker does not control the dough directly but the conditions in which it develops. This is a shift from command to tuning the environment: the task is not to force the dough to rise but to create a regime in which it rises on its own."
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
    },
    {
      id: "E",
      title: "Навигация птиц",
      body: "Мигрирующие птицы находят дорогу, сочетая несколько сигналов: положение солнца, звёздный узор, магнитное поле и знакомые ориентиры. Ни один из этих каналов не является главным; если один недоступен, птица переключается на другой. Такая избыточность делает навигацию устойчивой, но не абсолютной: в незнакомой местности или при сильных помехах птицы ошибаются. Исследователи спорят, как именно птицы чувствуют магнитное поле, но сам факт, что навигация не сводится к одной сенсорной системе, важен. Он показывает, что сложное поведение часто держится не на одном точном инструменте, а на согласии нескольких грубых. Это делает систему гибкой, но затрудняет поиск единственного «центра» навигации."
    },
    {
      id: "F",
      title: "Контейнер",
      body: "Революцию в мировой торговле часто объясняют скоростью судов или дешевизной топлива, но решающим изобретением был стандартный контейнер. До него груз перегружали вручную, и каждая перегрузка стоила времени, денег и риска. Контейнер сделал груз единицей, которую можно передавать между кораблём, краном, поездом и грузовиком без переупаковки. Изменилась не только логистика, но и география: порты, склады и города начали перестраиваться вокруг новых узлов. Стандарт победил не потому, что был самым эффективным для каждого участника, а потому, что позволил всем пользоваться одной инфраструктурой. Как и указатель в книге, он задал единицу, по которой стало удобно адресовать движение."
    },
    {
      id: "G",
      title: "Сонет",
      body: "Сонет — жёсткая форма: четырнадцать строк, определённая схема рифм, поворот между октавой и секстетом. Ограничение не мешает мысли, а делает её видимой. Поэт должен не только сказать, но и уложить сказанное в заданную длину, и этот конфликт между замыслом и формой часто и создаёт смысл. Поворот, или вольта, — место, где аргумент меняет направление; без него сонет распадается на две части. Поэтому сонет полезно читать не как список строк, а как траекторию: сначала напряжение, затем сдвиг, затем вывод. Форма здесь работает как прибор: она показывает, где мысль сопротивляется, а где поддаётся."
    },
    {
      id: "H",
      title: "Хлеб",
      body: "Хлеб на закваске — это не рецепт, а система. Мука, вода, соль и микроорганизмы образуют среду, в которой дрожжи и бактерии конкурируют и сотрудничают. Время и температура меняют не только скорость брожения, но и вкус: при одной температуре активнее дрожжи, при другой — бактерии, и баланс определяет кислотность. Поэтому один и тот же рецепт в разных условиях даёт разный хлеб. Пекарь управляет не тестом напрямую, а условиями, в которых тесто развивается. Это сдвиг от команды к настройке среды: нужно не заставить тесто подняться, а создать режим, в котором оно поднимется само."
    }
  ]
};

const SHAPES = {
  sphere: { label: { en: "Sphere", ru: "Сфера" }, make: () => new THREE.SphereGeometry(1, 64, 48) },
  cube: { label: { en: "Cube", ru: "Куб" }, make: () => new THREE.BoxGeometry(1.5, 1.5, 1.5) },
  octa: { label: { en: "Octahedron", ru: "Октаэдр" }, make: () => new THREE.OctahedronGeometry(1.15) },
  torus: { label: { en: "Torus", ru: "Тор" }, make: () => new THREE.TorusGeometry(0.78, 0.28, 32, 96) },
  cone: { label: { en: "Cone", ru: "Конус" }, make: () => new THREE.ConeGeometry(0.95, 1.7, 64) },
  cylinder: { label: { en: "Cylinder", ru: "Цилиндр" }, make: () => new THREE.CylinderGeometry(0.72, 0.72, 1.6, 64) },
  dodeca: { label: { en: "Dodecahedron", ru: "Додекаэдр" }, make: () => new THREE.DodecahedronGeometry(1.1) },
  tetra: { label: { en: "Tetrahedron", ru: "Тетраэдр" }, make: () => new THREE.TetrahedronGeometry(1.2) },
  torusLow: { label: { en: "Faceted torus", ru: "Гранёный тор" }, make: () => new THREE.TorusGeometry(0.78, 0.28, 8, 16) }
};

const SHAPE_KEYS = ["sphere", "cube", "octa", "torus", "cone", "cylinder", "dodeca", "tetra", "torusLow"];
const STORAGE_KEY = "mindTrainer.liveProbe.v1";

const textEl = document.getElementById("text");
const textTitleEl = document.getElementById("text-title");
const wordCountEl = document.getElementById("word-count");
const probePane = document.getElementById("probe-pane");
const shapeSelect = document.getElementById("shape");
const motionInput = document.getElementById("motion");
const sizeInput = document.getElementById("size");
const toggleBtn = document.getElementById("toggle");
const shapeLabel = document.getElementById("shape-label");
const stateLabel = document.getElementById("state-label");
const statusModeEl = document.getElementById("status-mode");
const timerBtn = document.getElementById("timer");
const timerResetBtn = document.getElementById("timer-reset");
const noteInput = document.getElementById("note");
const saveNoteBtn = document.getElementById("save-note");
const ratingEl = document.getElementById("rating");
const logEl = document.getElementById("log");
const summaryEl = document.getElementById("summary");
const exportBtn = document.getElementById("export");
const clearLogBtn = document.getElementById("clear-log");
const nextTextBtn = document.getElementById("next-text");
const editTextBtn = document.getElementById("edit-text");
const textDialog = document.getElementById("text-dialog");
const textInput = document.getElementById("text-input");
const cancelTextBtn = document.getElementById("cancel-text");
const applyTextBtn = document.getElementById("apply-text");

function loadLang() {
  try {
    const requested = new URLSearchParams(location.search).get("lang");
    if (requested === "en" || requested === "ru") {
      try {
        localStorage.setItem(LANG_KEY, requested);
      } catch (err) {
        // The language still applies for this page load.
      }
      return requested;
    }
  } catch (err) {
    // Ignore malformed query strings.
  }
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "ru") return saved;
  } catch (err) {
    // localStorage can be unavailable on file://.
  }
  return DEFAULT_LANG;
}

const state = {
  lang: loadLang(),
  visible: true,
  shape: "sphere",
  motion: true,
  size: 1,
  rating: 0,
  textIndex: 0,
  customText: null
};

function t(key, ...args) {
  const value = I18N[state.lang][key];
  return typeof value === "function" ? value(...args) : value;
}

function shapeLabelFor(key) {
  return SHAPES[key] ? SHAPES[key].label[state.lang] : key;
}

function textTitleFor(observation) {
  if (observation.textId === "custom") return t("customText");
  const text = TEXTS[state.lang].find((item) => item.id === observation.textId);
  return text ? text.title : (observation.textTitle || "");
}

const timer = { running: false, startedAt: 0, elapsed: 0 };

const store = loadStore();
let observations = store.observations;
let events = store.events;

let renderer = null;
let scene = null;
let camera = null;
let group = null;
let material = null;
let lineMaterial = null;
let currentGeometry = null;
let currentEdges = null;
let lastFrame = performance.now();

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
        ? data.observations.filter((o) => o && o.id && o.at && o.shape)
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
  } catch (err) {
    // localStorage can be unavailable on file://; the live session still works.
  }
}

function currentText() {
  return state.customText || TEXTS[state.lang][state.textIndex].body;
}

function textMeta() {
  if (state.customText) return { id: "custom", title: t("customText") };
  return TEXTS[state.lang][state.textIndex];
}

function countWords(text) {
  const trimmed = text.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
}

function renderText() {
  const meta = textMeta();
  textTitleEl.textContent = meta.title;
  const body = currentText();
  const paragraphs = body.split(/\n{2,}/).map((part) => {
    const p = document.createElement("p");
    p.textContent = part.trim();
    return p;
  });
  textEl.replaceChildren(...paragraphs);
  wordCountEl.textContent = t("words", countWords(body));
  document.querySelector(".text-pane").scrollTop = 0;
}

function logEvent(type, value) {
  events.unshift({ at: new Date().toISOString(), type, value });
  if (events.length > 1200) events.length = 1200;
  persist();
}

function setVisible(next, options) {
  state.visible = next;
  probePane.classList.toggle("off", !next);
  toggleBtn.classList.toggle("off", !next);
  toggleBtn.innerHTML = (next ? t("probeOn") : t("probeOff")) + " <kbd>Space</kbd>";
  toggleBtn.setAttribute("aria-pressed", String(next));
  stateLabel.textContent = next ? t("on") : t("off");
  if (!options || !options.silent) logEvent("toggle", next ? "on" : "off");
}

function setShape(name, options) {
  if (!SHAPES[name]) return;
  state.shape = name;
  shapeSelect.value = name;
  shapeLabel.textContent = shapeLabelFor(name);
  updateStatus();
  if (group) buildShape(name);
  if (!options || !options.silent) logEvent("shape", name);
}

function setMotion(next, options) {
  state.motion = next;
  motionInput.checked = next;
  updateStatus();
  if (!options || !options.silent) logEvent("motion", next ? "on" : "off");
}

function setSize(value, options) {
  const next = Math.max(0.55, Math.min(1.45, Number(value) || 1));
  state.size = next;
  sizeInput.value = String(next);
  if (group) group.scale.setScalar(next);
  updateStatus();
  if (options && options.log) logEvent("size", next);
}

function setRating(value) {
  state.rating = Number(value) || 0;
  ratingEl.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.r) === state.rating);
  });
}

function updateStatus() {
  if (!statusModeEl) return;
  statusModeEl.textContent = shapeLabelFor(state.shape) +
    " · " + (state.motion ? t("motionOn") : t("motionOff")) +
    " · " + state.size.toFixed(2);
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

function buildShape(name) {
  if (!group) return;
  if (currentGeometry) currentGeometry.dispose();
  if (currentEdges) currentEdges.dispose();
  while (group.children.length) group.remove(group.children[0]);
  const geometry = SHAPES[name].make();
  const mesh = new THREE.Mesh(geometry, material);
  const edgesGeometry = new THREE.EdgesGeometry(geometry, 24);
  const edges = new THREE.LineSegments(edgesGeometry, lineMaterial);
  group.add(mesh);
  group.add(edges);
  group.scale.setScalar(state.size);
  group.rotation.set(0.32, 0.65, 0.04);
  currentGeometry = geometry;
  currentEdges = edgesGeometry;
}

function initThree() {
  if (typeof THREE === "undefined") throw new Error("THREE is not loaded");
  const canvas = document.getElementById("scene");
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputEncoding = THREE.sRGBEncoding;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 0, 7.2);
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

  material = new THREE.MeshStandardMaterial({
    color: 0x8f8374,
    roughness: 0.76,
    metalness: 0.02,
    emissive: 0x0a0806,
    emissiveIntensity: 1
  });
  lineMaterial = new THREE.LineBasicMaterial({
    color: 0x6e6255,
    transparent: true,
    opacity: 0.55
  });

  buildShape(state.shape);
  resize();
  new ResizeObserver(resize).observe(probePane);
  requestAnimationFrame(animate);
}

function failThree(err) {
  console.error(err);
  state.visible = false;
  probePane.classList.add("off");
  const empty = probePane.querySelector(".probe-empty");
  if (empty) {
    empty.textContent = t("noWebGL");
  }
}

function resize() {
  if (!renderer || !camera) return;
  const width = Math.max(1, probePane.clientWidth);
  const height = Math.max(1, probePane.clientHeight);
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

function animate(now) {
  const delta = Math.min(48, now - lastFrame);
  lastFrame = now;
  if (renderer && scene && camera && state.visible) {
    if (state.motion) group.rotation.y += delta * 0.00035;
    renderer.render(scene, camera);
  }
  requestAnimationFrame(animate);
}

function saveObservation() {
  const note = noteInput.value.trim();
  if (!note && !state.rating) {
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
    shape: state.shape,
    shapeLabel: shapeLabelFor(state.shape),
    motion: state.motion,
    size: state.size,
    visible: state.visible,
    rating: state.rating,
    note,
    readingMs,
    textId: meta.id,
    textTitle: meta.title,
    textPreview: currentText().slice(0, 90)
  });
  if (observations.length > 500) observations.length = 500;
  persist();
  renderLog();
  renderSummary();
  noteInput.value = "";
  setRating(0);
  noteInput.blur();
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

    const shape = document.createElement("span");
    shape.className = "log-shape";
    shape.textContent = observation.visible ? shapeLabelFor(observation.shape) : t("noProbe");

    const meta = document.createElement("span");
    const time = new Date(observation.at).toLocaleTimeString(state.lang === "ru" ? "ru-RU" : "en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });
    const parts = [];
    if (!observation.visible) parts.push(t("noProbe"));
    const title = textTitleFor(observation);
    if (title) parts.push(title);
    parts.push(t(observation.motion ? "motionOn" : "motionOff"));
    parts.push(Number(observation.size).toFixed(2));
    if (observation.readingMs) parts.push((observation.readingMs / 1000).toFixed(1) + "s");
    parts.push(time);
    meta.textContent = parts.join(" · ");

    const rating = document.createElement("span");
    rating.className = "log-rating";
    rating.textContent = observation.rating ? "★ " + observation.rating : "";

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "log-remove";
    remove.dataset.remove = observation.id;
    remove.title = t("deleteNote");
    remove.textContent = "×";

    top.append(shape, meta, rating, remove);

    const note = document.createElement("div");
    note.className = "log-note" + (observation.note ? "" : " empty");
    note.textContent = observation.note || t("noNote");

    entry.append(top, note);
    return entry;
  });
  logEl.replaceChildren(...items);
}

function summarize() {
  const groups = new Map();
  observations.forEach((observation) => {
    const key = observation.visible ? observation.shape : "off";
    if (!groups.has(key)) {
      groups.set(key, {
        shape: key,
        label: observation.visible ? shapeLabelFor(observation.shape) : t("noProbe"),
        count: 0,
        ratings: [],
        times: [],
        motion: { on: [], off: [] }
      });
    }
    const group = groups.get(key);
    group.count += 1;
    if (observation.rating) {
      group.ratings.push(observation.rating);
      if (observation.visible) group.motion[observation.motion ? "on" : "off"].push(observation.rating);
    }
    if (observation.readingMs) group.times.push(observation.readingMs);
  });
  return Array.from(groups.values()).map((group) => ({
    ...group,
    average: average(group.ratings),
    timeAverage: average(group.times),
    motionAverage: {
      on: average(group.motion.on),
      off: average(group.motion.off)
    }
  })).sort((a, b) => {
    const ar = a.average == null ? -1 : a.average;
    const br = b.average == null ? -1 : b.average;
    return br - ar || b.count - a.count;
  });
}

function average(values) {
  if (!values.length) return null;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
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
    if (group.average != null) {
      chip.append(" · " + group.average.toFixed(1) + "★");
    }
    if (group.timeAverage != null) {
      chip.append(" · " + (group.timeAverage / 1000).toFixed(1) + "s");
    }
    const parts = [];
    if (group.motionAverage.on != null) parts.push(t("summaryMov") + " " + group.motionAverage.on.toFixed(1));
    if (group.motionAverage.off != null) parts.push(t("summaryStill") + " " + group.motionAverage.off.toFixed(1));
    if (parts.length) chip.append(" · " + parts.join(" / "));
    return chip;
  });
  summaryEl.replaceChildren(...chips);
}

function exportJson() {
  const payload = {
    format: "mind-trainer/live-probe",
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
  link.download = "live-probe-" + new Date().toISOString().slice(0, 10) + ".json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function nextText() {
  state.customText = null;
  state.textIndex = (state.textIndex + 1) % TEXTS[state.lang].length;
  renderText();
  logEvent("text", TEXTS[state.lang][state.textIndex].id);
}

function openTextDialog() {
  textInput.value = currentText();
  textDialog.showModal();
  textInput.focus();
}

function applyCustomText() {
  const value = textInput.value.trim();
  if (value) {
    state.customText = value;
  } else {
    state.customText = null;
    state.textIndex = 0;
  }
  renderText();
  logEvent("text", state.customText ? "custom" : TEXTS[state.lang][state.textIndex].id);
  textDialog.close();
}

function updateShapeOptions() {
  Array.from(shapeSelect.options).forEach((option) => {
    if (SHAPES[option.value]) option.textContent = shapeLabelFor(option.value);
  });
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
  updateShapeOptions();
  renderText();
  setVisible(state.visible, { silent: true });
  shapeLabel.textContent = shapeLabelFor(state.shape);
  updateStatus();
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
  } catch (err) {
    // The interface still switches; only the preference is not stored.
  }
  applyI18n();
  logEvent("lang", lang);
}

function bindEvents() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLang(button.dataset.lang));
  });
  toggleBtn.addEventListener("click", () => setVisible(!state.visible));
  shapeSelect.addEventListener("change", () => setShape(shapeSelect.value));
  motionInput.addEventListener("change", () => setMotion(motionInput.checked));
  sizeInput.addEventListener("input", () => setSize(sizeInput.value));
  sizeInput.addEventListener("change", () => logEvent("size", state.size));

  saveNoteBtn.addEventListener("click", saveObservation);
  timerBtn.addEventListener("click", toggleTimer);
  timerResetBtn.addEventListener("click", resetTimer);
  noteInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      saveObservation();
    }
  });

  ratingEl.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-r]");
    if (!button) return;
    const value = Number(button.dataset.r);
    setRating(state.rating === value ? 0 : value);
  });

  logEl.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-remove]");
    if (!button) return;
    removeObservation(button.dataset.remove);
  });

  exportBtn.addEventListener("click", exportJson);
  clearLogBtn.addEventListener("click", () => {
    if (!observations.length && !events.length) return;
    if (!confirm(t("clearConfirm"))) return;
    observations = [];
    events = [];
    persist();
    renderLog();
    renderSummary();
  });

  nextTextBtn.addEventListener("click", nextText);
  editTextBtn.addEventListener("click", openTextDialog);
  cancelTextBtn.addEventListener("click", () => textDialog.close());
  applyTextBtn.addEventListener("click", applyCustomText);

  window.addEventListener("keydown", (event) => {
    if (textDialog.open) return;
    const target = event.target;
    const tag = target && target.tagName ? target.tagName : "";
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || (target && target.isContentEditable)) {
      return;
    }
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    if (event.code === "Space") {
      event.preventDefault();
      setVisible(!state.visible);
      return;
    }
    if (/^[1-9]$/.test(event.key)) {
      setShape(SHAPE_KEYS[Number(event.key) - 1]);
      return;
    }
    const key = event.key.toLowerCase();
    if (key === "m") setMotion(!state.motion);
    else if (key === "s") toggleTimer();
    else if (key === "r") resetTimer();
    else if (key === "n") {
      event.preventDefault();
      noteInput.focus();
    } else if (key === "t") nextText();
    else if (key === "e") exportJson();
    else if (event.key === "[") setSize(state.size - 0.1, { log: true });
    else if (event.key === "]") setSize(state.size + 0.1, { log: true });
  });
}

function init() {
  setRating(0);
  setVisible(true, { silent: true });
  setShape(state.shape, { silent: true });
  setMotion(state.motion, { silent: true });
  setSize(state.size, { silent: true });
  applyI18n();
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
