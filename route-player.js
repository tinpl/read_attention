"use strict";

const DEFAULT_LANG = "en";
const LANG_KEY = "mindTrainer.lang";
const STORAGE_KEY = "mindTrainer.routePlayer.v1";
const BASE_SPEED = 110;
const SPEEDS = { slow: 0.65, medium: 1, fast: 1.5 };

const I18N = {
  en: {
    pageTitle: "Route player · mind trainer",
    product: "Route player",
    route: "Route",
    speed: "Speed",
    play: "Play",
    pause: "Pause",
    reset: "Reset",
    nextText: "Text →",
    export: "Export",
    textEyebrow: "Text for the route",
    textHint: "Play the route, follow it for one cycle, then read. Start the timer (S) when you begin.",
    textFoot: "The route stays visible while you read",
    notes: "Observations",
    clear: "Clear",
    follow: "Follow",
    flow: "Flow",
    clarity: "Clarity",
    notePlaceholder: "What changed in the reading?",
    save: "Save",
    emptyLog: "No observations yet. Play a route, read, and record what happened.",
    noNote: "no note",
    noRoute: "No route",
    playing: "playing",
    paused: "paused",
    slow: "Slow",
    medium: "Medium",
    fast: "Fast",
    shortFollow: "foll",
    shortFlow: "flow",
    shortClarity: "clar",
    keyPlay: "play",
    keyTimer: "timer",
    keyReset: "reset",
    keyText: "text",
    keyExport: "export",
    timerStartStop: "Start/stop (S)",
    timerReset: "Reset timer (R)",
    langLabel: "Language",
    clearConfirm: "Clear the observations and events log?",
    deleteNote: "Delete observation",
    words: (n) => `${n} words`
  },
  ru: {
    pageTitle: "Route player · мысленный тренажёр",
    product: "Маршрут внимания",
    route: "Маршрут",
    speed: "Скорость",
    play: "Играть",
    pause: "Пауза",
    reset: "Сброс",
    nextText: "Текст →",
    export: "Экспорт",
    textEyebrow: "Текст для маршрута",
    textHint: "Запусти маршрут, проследи за ним один цикл, затем читай. Включи таймер (S), когда начнёшь.",
    textFoot: "Маршрут остаётся видимым во время чтения",
    notes: "Наблюдения",
    clear: "Очистить",
    follow: "Следование",
    flow: "Поток",
    clarity: "Ясность",
    notePlaceholder: "Что изменилось в чтении?",
    save: "Записать",
    emptyLog: "Пока нет наблюдений. Запусти маршрут, прочитай и запиши, что произошло.",
    noNote: "без заметки",
    noRoute: "Без маршрута",
    playing: "идёт",
    paused: "пауза",
    slow: "Медленно",
    medium: "Средне",
    fast: "Быстро",
    shortFollow: "след",
    shortFlow: "поток",
    shortClarity: "ясн",
    keyPlay: "играть",
    keyTimer: "таймер",
    keyReset: "сброс",
    keyText: "текст",
    keyExport: "экспорт",
    timerStartStop: "Старт/стоп (S)",
    timerReset: "Сброс таймера (R)",
    langLabel: "Язык",
    clearConfirm: "Очистить журнал наблюдений и событий?",
    deleteNote: "Удалить наблюдение",
    words: (n) => `${n} слов`
  }
};

const ROUTES = {
  none: {
    label: { en: "No route", ru: "Без маршрута" },
    paths: [],
    nodes: [],
    closed: false
  },
  line: {
    label: { en: "Line", ru: "Линия" },
    paths: ["M70 200 L530 200"],
    nodes: [[70, 200], [230, 200], [390, 200], [530, 200]],
    closed: false
  },
  loop: {
    label: { en: "Loop", ru: "Петля" },
    paths: ["M300 70 C430 70 530 130 530 200 C530 270 430 330 300 330 C170 330 70 270 70 200 C70 130 170 70 300 70 Z"],
    nodes: [[300, 70], [530, 200], [300, 330], [70, 200]],
    closed: true
  },
  branch: {
    label: { en: "Branch", ru: "Ветвление" },
    paths: [
      "M70 200 L230 200 L390 110 L530 200",
      "M70 200 L230 200 L390 290 L530 200"
    ],
    nodes: [[70, 200], [230, 200], [390, 110], [390, 290], [530, 200]],
    closed: false,
    alternate: true
  },
  zigzag: {
    label: { en: "Zigzag", ru: "Зигзаг" },
    paths: ["M70 80 L530 80 L70 160 L530 160 L70 240 L530 240 L70 320 L530 320"],
    nodes: [[70, 80], [530, 80], [70, 160], [530, 160], [70, 240], [530, 240], [70, 320], [530, 320]],
    closed: false
  }
};

const ROUTE_ORDER = ["none", "line", "loop", "branch", "zigzag"];

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

const textEl = document.getElementById("text");
const textTitleEl = document.getElementById("text-title");
const wordCountEl = document.getElementById("word-count");
const routeSelect = document.getElementById("route");
const speedSelect = document.getElementById("speed");
const playBtn = document.getElementById("play");
const resetBtn = document.getElementById("reset-route");
const nextTextBtn = document.getElementById("next-text");
const exportBtn = document.getElementById("export");
const routePathsEl = document.getElementById("route-paths");
const routeNodesEl = document.getElementById("route-nodes");
const playheadGroup = document.getElementById("playhead-group");
const routeEmpty = document.getElementById("route-empty");
const routeLabelEl = document.getElementById("route-label");
const routeStateEl = document.getElementById("route-state");
const noteInput = document.getElementById("note");
const saveNoteBtn = document.getElementById("save-note");
const ratingGroups = Array.from(document.querySelectorAll(".rating[data-rating]"));
const logEl = document.getElementById("log");
const summaryEl = document.getElementById("summary");
const clearLogBtn = document.getElementById("clear-log");
const timerBtn = document.getElementById("timer");
const timerResetBtn = document.getElementById("timer-reset");
const statusModeEl = document.getElementById("status-mode");

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
  route: "loop",
  speed: "medium",
  playing: false,
  progress: 0,
  activePath: 0,
  paths: [],
  nodes: [],
  textIndex: 0,
  ratings: { follow: 0, flow: 0, clarity: 0 }
};

const timer = { running: false, startedAt: 0, elapsed: 0 };

const store = loadStore();
let observations = store.observations;
let events = store.events;
let lastFrame = performance.now();

function t(key, ...args) {
  const value = I18N[state.lang][key];
  return typeof value === "function" ? value(...args) : value;
}

function routeLabel(key) {
  return ROUTES[key] ? ROUTES[key].label[state.lang] : key;
}

function textMeta() {
  return TEXTS[state.lang][state.textIndex];
}

function textTitleFor(observation) {
  const text = TEXTS[state.lang].find((item) => item.id === observation.textId);
  return text ? text.title : (observation.textTitle || "");
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
        ? data.observations.filter((o) => o && o.id && o.at && o.route)
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

function createSvg(tag, attrs) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

function buildRoute() {
  routePathsEl.replaceChildren();
  routeNodesEl.replaceChildren();
  state.paths = [];
  state.nodes = [];
  state.progress = 0;
  state.activePath = 0;
  const route = ROUTES[state.route];
  if (!route || !route.paths.length) {
    playheadGroup.style.display = "none";
    routeEmpty.style.display = "grid";
    state.playing = false;
    updatePlayButton();
    updateHud();
    return;
  }
  playheadGroup.style.display = "";
  routeEmpty.style.display = "none";
  route.paths.forEach((d) => {
    const path = createSvg("path", { d, class: "route-path" });
    routePathsEl.append(path);
    state.paths.push({ el: path, length: path.getTotalLength() });
  });
  route.nodes.forEach(([cx, cy]) => {
    const node = createSvg("circle", { cx, cy, r: 7, class: "route-node" });
    routeNodesEl.append(node);
    state.nodes.push(node);
  });
  updateRouteVisual();
  updatePlayhead();
  updatePlayButton();
  updateHud();
}

function updateRouteVisual() {
  state.paths.forEach((path, index) => {
    path.el.classList.toggle("active", index === state.activePath);
    path.el.classList.toggle("inactive", state.paths.length > 1 && index !== state.activePath);
  });
}

function updatePlayhead() {
  if (!state.paths.length) return;
  const path = state.paths[state.activePath];
  const point = path.el.getPointAtLength(state.progress * path.length);
  playheadGroup.setAttribute("transform", "translate(" + point.x + " " + point.y + ")");
  let nearest = -1;
  let best = Infinity;
  state.nodes.forEach((node, index) => {
    const dx = Number(node.getAttribute("cx")) - point.x;
    const dy = Number(node.getAttribute("cy")) - point.y;
    const distance = dx * dx + dy * dy;
    if (distance < best) {
      best = distance;
      nearest = index;
    }
  });
  state.nodes.forEach((node, index) => {
    node.classList.toggle("active", index === nearest && best < 3600);
  });
}

function updatePlayButton() {
  const route = ROUTES[state.route];
  const empty = !route || !route.paths.length;
  playBtn.disabled = empty;
  playBtn.classList.toggle("active", state.playing);
  playBtn.innerHTML = (state.playing ? t("pause") : t("play")) + " <kbd>Space</kbd>";
}

function updateHud() {
  const route = ROUTES[state.route];
  routeLabelEl.textContent = routeLabel(state.route);
  if (!route || !route.paths.length) {
    routeStateEl.textContent = "";
    statusModeEl.textContent = routeLabel(state.route);
    return;
  }
  const status = state.playing ? t("playing") : t("paused");
  routeStateEl.textContent = status;
  statusModeEl.textContent = routeLabel(state.route) + " · " + status + " · " + t(state.speed);
}

function setRoute(name) {
  if (!ROUTES[name]) return;
  state.route = name;
  state.playing = false;
  routeSelect.value = name;
  buildRoute();
  logEvent("route", name);
}

function setSpeed(key) {
  if (!SPEEDS[key]) return;
  state.speed = key;
  speedSelect.value = key;
  updateHud();
  logEvent("speed", key);
}

function togglePlay() {
  const route = ROUTES[state.route];
  if (!route || !route.paths.length) return;
  state.playing = !state.playing;
  updatePlayButton();
  updateHud();
  logEvent("play", state.playing ? "on" : "off");
}

function resetPlay() {
  state.playing = false;
  state.progress = 0;
  state.activePath = 0;
  updateRouteVisual();
  updatePlayhead();
  updatePlayButton();
  updateHud();
  logEvent("reset", state.route);
}

function animate(now) {
  const delta = Math.min(50, now - lastFrame);
  lastFrame = now;
  if (state.playing && state.paths.length) {
    const path = state.paths[state.activePath];
    const speed = BASE_SPEED * SPEEDS[state.speed];
    state.progress += (delta / 1000) * speed / path.length;
    if (state.progress >= 1) {
      const route = ROUTES[state.route];
      if (route.closed) {
        state.progress = state.progress % 1;
      } else if (route.alternate) {
        state.progress = 0;
        state.activePath = (state.activePath + 1) % state.paths.length;
        updateRouteVisual();
      } else {
        state.progress = 0;
      }
    }
    updatePlayhead();
  }
  requestAnimationFrame(animate);
}

function saveObservation() {
  const note = noteInput.value.trim();
  const { follow, flow, clarity } = state.ratings;
  if (!note && !follow && !flow && !clarity) {
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
    route: state.route,
    routeLabel: routeLabel(state.route),
    speed: state.speed,
    playing: state.playing,
    readingMs,
    follow,
    flow,
    clarity,
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

    const route = document.createElement("span");
    route.className = "log-route";
    route.textContent = ROUTES[observation.route] ? routeLabel(observation.route) : observation.route;

    const meta = document.createElement("span");
    const time = new Date(observation.at).toLocaleTimeString(state.lang === "ru" ? "ru-RU" : "en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });
    const parts = [];
    const title = textTitleFor(observation);
    if (title) parts.push(title);
    parts.push(t(observation.speed));
    parts.push(t(observation.playing ? "playing" : "paused"));
    if (observation.readingMs) parts.push((observation.readingMs / 1000).toFixed(1) + "s");
    parts.push(time);
    meta.textContent = parts.join(" · ");

    const ratings = document.createElement("span");
    ratings.className = "log-ratings";
    const ratingParts = [];
    if (observation.follow) ratingParts.push(t("shortFollow") + " " + observation.follow);
    if (observation.flow) ratingParts.push(t("shortFlow") + " " + observation.flow);
    if (observation.clarity) ratingParts.push(t("shortClarity") + " " + observation.clarity);
    ratings.textContent = ratingParts.join(" · ");

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "log-remove";
    remove.dataset.remove = observation.id;
    remove.title = t("deleteNote");
    remove.textContent = "×";

    top.append(route, meta, ratings, remove);

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
    if (!groups.has(observation.route)) {
      groups.set(observation.route, {
        route: observation.route,
        label: ROUTES[observation.route] ? routeLabel(observation.route) : observation.route,
        count: 0,
        follow: [],
        flow: [],
        clarity: [],
        times: []
      });
    }
    const group = groups.get(observation.route);
    group.count += 1;
    if (observation.follow) group.follow.push(observation.follow);
    if (observation.flow) group.flow.push(observation.flow);
    if (observation.clarity) group.clarity.push(observation.clarity);
    if (observation.readingMs) group.times.push(observation.readingMs);
  });
  return Array.from(groups.values()).map((group) => ({
    ...group,
    followAverage: average(group.follow),
    flowAverage: average(group.flow),
    clarityAverage: average(group.clarity),
    timeAverage: average(group.times)
  })).sort((a, b) => ROUTE_ORDER.indexOf(a.route) - ROUTE_ORDER.indexOf(b.route));
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
    if (group.followAverage != null) chip.append(" · " + t("shortFollow") + " " + group.followAverage.toFixed(1));
    if (group.flowAverage != null) chip.append(" · " + t("shortFlow") + " " + group.flowAverage.toFixed(1));
    if (group.clarityAverage != null) chip.append(" · " + t("shortClarity") + " " + group.clarityAverage.toFixed(1));
    if (group.timeAverage != null) chip.append(" · " + (group.timeAverage / 1000).toFixed(1) + "s");
    return chip;
  });
  summaryEl.replaceChildren(...chips);
}

function exportJson() {
  const payload = {
    format: "mind-trainer/route-player",
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
  link.download = "route-player-" + new Date().toISOString().slice(0, 10) + ".json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function updateRouteOptions() {
  Array.from(routeSelect.options).forEach((option) => {
    if (ROUTES[option.value]) option.textContent = routeLabel(option.value);
  });
  Array.from(speedSelect.options).forEach((option) => {
    if (SPEEDS[option.value]) option.textContent = t(option.value);
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
  updateRouteOptions();
  renderText();
  updatePlayButton();
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
  routeSelect.addEventListener("change", () => setRoute(routeSelect.value));
  speedSelect.addEventListener("change", () => setSpeed(speedSelect.value));
  playBtn.addEventListener("click", togglePlay);
  resetBtn.addEventListener("click", resetPlay);
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
    if (event.code === "Space") {
      event.preventDefault();
      togglePlay();
      return;
    }
    const key = event.key.toLowerCase();
    if (key === "s") toggleTimer();
    else if (key === "r") resetPlay();
    else if (key === "t") nextText();
    else if (key === "e") exportJson();
  });
}

function init() {
  applyI18n();
  buildRoute();
  renderLog();
  renderSummary();
  updateTimerDisplay();
  setInterval(updateTimerDisplay, 100);
  bindEvents();
  requestAnimationFrame(animate);
}

init();
