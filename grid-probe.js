"use strict";

const DEFAULT_LANG = "en";
const LANG_KEY = "mindTrainer.lang";
const STORAGE_KEY = "mindTrainer.gridProbe.v1";
const SVG_NS = "http://www.w3.org/2000/svg";

const I18N = {
  en: {
    pageTitle: "Grid probe · mind trainer",
    product: "Grid probe",
    condition: "Condition",
    conditionOff: "Off",
    conditionParallel: "Parallel",
    conditionOne: "One",
    conditionFew: "Few",
    conditionGrid: "Grid",
    angle: "Angle",
    intersections: (n) => n === 1 ? "1 intersection" : `${n} intersections`,
    noGrid: "No grid",
    nextText: "Text →",
    export: "Export",
    linkForm: "Form",
    linkRoute: "Route",
    linkProbe: "Probe",
    textEyebrow: "Text for the grid",
    textHint: "Read and switch the grid. Watch the action, not the result.",
    textFoot: "The grid stays static while you read",
    notes: "Observations",
    clear: "Clear",
    effect: "Effect",
    flow: "Flow",
    clarity: "Clarity",
    comfort: "Comfort",
    notePlaceholder: "What changed — and where did the action go?",
    save: "Save",
    emptyLog: "No observations yet. Switch the grid, read, and record what happened.",
    noNote: "no note",
    keyCondition: "condition",
    keyAngle: "angle",
    keyNote: "note",
    keyText: "text",
    keyExport: "export",
    langLabel: "Language",
    clearConfirm: "Clear the observations and events log?",
    deleteNote: "Delete observation",
    words: (n) => `${n} words`,
    shortEffect: "eff",
    shortFlow: "flow",
    shortClarity: "clar",
    shortComfort: "comf"
  },
  ru: {
    pageTitle: "Проба сетки · мысленный тренажёр",
    product: "Проба сетки",
    condition: "Условие",
    conditionOff: "Выкл",
    conditionParallel: "Параллельные",
    conditionOne: "Одно",
    conditionFew: "Несколько",
    conditionGrid: "Сетка",
    angle: "Угол",
    intersections: (n) => {
      const mod10 = n % 10;
      const mod100 = n % 100;
      if (mod10 === 1 && mod100 !== 11) return `${n} пересечение`;
      if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${n} пересечения`;
      return `${n} пересечений`;
    },
    noGrid: "Без сетки",
    nextText: "Текст →",
    export: "Экспорт",
    linkForm: "Форма",
    linkRoute: "Маршрут",
    linkProbe: "Проба",
    textEyebrow: "Текст для сетки",
    textHint: "Читай и переключай сетку. Смотри на действие, не на результат.",
    textFoot: "Сетка остаётся статичной во время чтения",
    notes: "Наблюдения",
    clear: "Очистить",
    effect: "Эффект",
    flow: "Поток",
    clarity: "Ясность",
    comfort: "Комфорт",
    notePlaceholder: "Что изменилось — и куда пошло действие?",
    save: "Записать",
    emptyLog: "Пока нет наблюдений. Переключай сетку, читай и записывай, что произошло.",
    noNote: "без заметки",
    keyCondition: "условие",
    keyAngle: "угол",
    keyNote: "заметка",
    keyText: "текст",
    keyExport: "экспорт",
    langLabel: "Язык",
    clearConfirm: "Очистить журнал наблюдений и событий?",
    deleteNote: "Удалить наблюдение",
    words: (n) => `${n} слов`,
    shortEffect: "эфф",
    shortFlow: "поток",
    shortClarity: "ясн",
    shortComfort: "комф"
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

const CONDITIONS = {
  off: { label: { en: "Off", ru: "Выкл" }, count: 0 },
  parallel: { label: { en: "Parallel", ru: "Параллельные" }, count: 0 },
  one: { label: { en: "One", ru: "Одно" }, count: 1 },
  few: { label: { en: "Few", ru: "Несколько" }, count: 10 },
  grid: { label: { en: "Grid", ru: "Сетка" }, count: 25 }
};

const CONDITION_ORDER = ["off", "parallel", "one", "few", "grid"];
const ANGLE_ORDER = [90, 60, 45];
const HORIZONTALS = [100, 200, 300, 400, 500];

const textEl = document.getElementById("text");
const textTitleEl = document.getElementById("text-title");
const wordCountEl = document.getElementById("word-count");
const conditionSelect = document.getElementById("condition");
const angleSelect = document.getElementById("angle");
const nextTextBtn = document.getElementById("next-text");
const exportBtn = document.getElementById("export");
const horizontalLines = document.getElementById("horizontal-lines");
const verticalLines = document.getElementById("vertical-lines");
const conditionLabelEl = document.getElementById("condition-label");
const countLabelEl = document.getElementById("count-label");
const statusModeEl = document.getElementById("status-mode");
const noteInput = document.getElementById("note");
const saveNoteBtn = document.getElementById("save-note");
const ratingGroups = Array.from(document.querySelectorAll(".rating[data-rating]"));
const logEl = document.getElementById("log");
const summaryEl = document.getElementById("summary");
const clearLogBtn = document.getElementById("clear-log");

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
  condition: "grid",
  angle: 90,
  textIndex: 0,
  ratings: { effect: 0, flow: 0, clarity: 0, comfort: 0 }
};

const store = loadStore();
let observations = store.observations;
let events = store.events;

function t(key, ...args) {
  const value = I18N[state.lang][key];
  return typeof value === "function" ? value(...args) : value;
}

function conditionLabel(key) {
  return CONDITIONS[key] ? CONDITIONS[key].label[state.lang] : key;
}

function textMeta() {
  return TEXTS[state.lang][state.textIndex];
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
        ? data.observations.filter((o) => o && o.id && o.at && o.condition)
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

function gridSpec() {
  if (state.condition === "off") {
    return { horizontals: [], verticals: [], count: 0 };
  }
  if (state.condition === "parallel") {
    return { horizontals: HORIZONTALS, verticals: [], count: 0 };
  }
  if (state.condition === "one") {
    return {
      horizontals: HORIZONTALS,
      verticals: [{ x: 300, y1: 260, y2: 340 }],
      count: 1
    };
  }
  if (state.condition === "few") {
    return {
      horizontals: HORIZONTALS,
      verticals: [200, 400].map((x) => ({ x, y1: 40, y2: 560 })),
      count: HORIZONTALS.length * 2
    };
  }
  return {
    horizontals: HORIZONTALS,
    verticals: [100, 200, 300, 400, 500].map((x) => ({ x, y1: 40, y2: 560 })),
    count: HORIZONTALS.length * 5
  };
}

function intersectionCount() {
  return CONDITIONS[state.condition] ? CONDITIONS[state.condition].count : 0;
}

function createLine(x1, y1, x2, y2) {
  const line = document.createElementNS(SVG_NS, "line");
  line.setAttribute("x1", String(x1));
  line.setAttribute("y1", String(y1));
  line.setAttribute("x2", String(x2));
  line.setAttribute("y2", String(y2));
  line.setAttribute("class", "grid-line");
  return line;
}

function renderGrid() {
  const spec = gridSpec();
  horizontalLines.replaceChildren(...spec.horizontals.map((y) => createLine(40, y, 560, y)));
  verticalLines.replaceChildren(...spec.verticals.map((v) => createLine(v.x, v.y1, v.x, v.y2)));
  verticalLines.setAttribute("transform", "rotate(" + (state.angle - 90) + " 300 300)");
  updateHud();
}

function updateHud() {
  const label = state.condition === "off"
    ? t("noGrid")
    : conditionLabel(state.condition) + " · " + state.angle + "°";
  conditionLabelEl.textContent = label;
  countLabelEl.textContent = t("intersections", intersectionCount());
  statusModeEl.textContent = label + " · " + t("intersections", intersectionCount());
}

function setCondition(next, options) {
  if (!CONDITIONS[next]) return;
  state.condition = next;
  conditionSelect.value = next;
  renderGrid();
  if (!options || !options.silent) logEvent("condition", next);
}

function setAngle(next, options) {
  const value = Number(next);
  if (!ANGLE_ORDER.includes(value)) return;
  state.angle = value;
  angleSelect.value = String(value);
  renderGrid();
  if (!options || !options.silent) logEvent("angle", value);
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

function saveObservation() {
  const note = noteInput.value.trim();
  const { effect, flow, clarity, comfort } = state.ratings;
  if (!note && !effect && !flow && !clarity && !comfort) {
    noteInput.focus();
    return;
  }
  const meta = textMeta();
  observations.unshift({
    id: uid(),
    at: new Date().toISOString(),
    condition: state.condition,
    conditionLabel: conditionLabel(state.condition),
    angle: state.angle,
    intersections: intersectionCount(),
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
    form.textContent = (observation.conditionLabel || conditionLabel(observation.condition)) +
      " · " + observation.angle + "°";

    const meta = document.createElement("span");
    const time = new Date(observation.at).toLocaleTimeString(state.lang === "ru" ? "ru-RU" : "en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });
    meta.textContent = [
      observation.textTitle,
      t("intersections", observation.intersections),
      time
    ].filter(Boolean).join(" · ");

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
    const key = observation.condition + "|" + observation.angle;
    if (!groups.has(key)) {
      groups.set(key, {
        condition: observation.condition,
        conditionLabel: conditionLabel(observation.condition),
        angle: observation.angle,
        intersections: observation.intersections,
        label: conditionLabel(observation.condition) + " · " + observation.angle + "°",
        count: 0,
        effect: [],
        flow: [],
        clarity: [],
        comfort: []
      });
    }
    const group = groups.get(key);
    group.count += 1;
    if (observation.effect) group.effect.push(observation.effect);
    if (observation.flow) group.flow.push(observation.flow);
    if (observation.clarity) group.clarity.push(observation.clarity);
    if (observation.comfort) group.comfort.push(observation.comfort);
  });
  return Array.from(groups.values()).map((group) => ({
    ...group,
    effectAverage: average(group.effect),
    flowAverage: average(group.flow),
    clarityAverage: average(group.clarity),
    comfortAverage: average(group.comfort)
  })).sort((a, b) => {
    const conditionDiff = CONDITION_ORDER.indexOf(a.condition) - CONDITION_ORDER.indexOf(b.condition);
    if (conditionDiff !== 0) return conditionDiff;
    return b.angle - a.angle;
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
    return chip;
  });
  summaryEl.replaceChildren(...chips);
}

function exportJson() {
  const payload = {
    format: "mind-trainer/grid-probe",
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
  link.download = "grid-probe-" + new Date().toISOString().slice(0, 10) + ".json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function updateConditionOptions() {
  Array.from(conditionSelect.options).forEach((option) => {
    if (CONDITIONS[option.value]) option.textContent = conditionLabel(option.value);
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
  updateConditionOptions();
  renderText();
  renderGrid();
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
  conditionSelect.addEventListener("change", () => setCondition(conditionSelect.value));
  angleSelect.addEventListener("change", () => setAngle(angleSelect.value));
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
    if (/^[0-4]$/.test(event.key)) {
      setCondition(CONDITION_ORDER[Number(event.key)]);
      return;
    }
    const key = event.key.toLowerCase();
    if (key === "a") {
      const index = ANGLE_ORDER.indexOf(state.angle);
      setAngle(ANGLE_ORDER[(index + 1) % ANGLE_ORDER.length]);
    } else if (key === "n") {
      event.preventDefault();
      noteInput.focus();
    } else if (key === "t") {
      nextText();
    } else if (key === "e") {
      exportJson();
    }
  });
}

function init() {
  conditionSelect.value = state.condition;
  angleSelect.value = String(state.angle);
  applyI18n();
  bindEvents();
}

init();
