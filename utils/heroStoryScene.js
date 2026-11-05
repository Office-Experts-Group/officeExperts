// utils/heroStoryScene.js
// The home hero story as pure maths. sceneAt(t) takes a time in seconds and
// returns every attribute the illustration needs at that moment, keyed by
// element name. There is no React or DOM in here, so the server renders the
// first frame from it and the client repaints from the same function each frame.
//
// The story runs as three acts, one per hero frame (lengths match the tab timers):
//   Act 1   0–9s   the business grows one tool at a time, then it falls apart
//   Act 2   9–19s  Office Experts maps it, connects it and switches on live reporting
//   Act 3   19–31s the connected business runs itself: workflows, documents, AI agents
// Each act ends exactly where the next one starts, so autoplay is seamless.

// ── Timing ──────────────────────────────────────────────────────────────────
// Seconds per act. HomeHero passes these to HeroRotator as the tab durations.
export const STORY_DURATIONS = [9, 10, 12];

export const ACTS = STORY_DURATIONS.map((length, index) => {
  const start = STORY_DURATIONS.slice(0, index).reduce((sum, n) => sum + n, 0);
  return { start, end: start + length };
});

// First frame rendered on the server: the lone spreadsheet is already in place
export const INITIAL_T = 0.6;

// Reduced motion shows one still per frame: the connected picture for frames
// 1 and 2, the fully running business for frame 3
export const REDUCED_MOTION_T = [ACTS[1].end, ACTS[1].end, ACTS[2].end].map(
  (t) => t - 0.001,
);

// ── Product icons ───────────────────────────────────────────────────────────
// false: tiles show the neutral built-in glyphs (HeroStoryGlyphs.jsx).
// true: tiles with a `logo` load /public/logos/<logo> instead. Use the official
// Microsoft icon downloads, unmodified (Microsoft asks that they are not
// rotated, cropped or recoloured; the engine never rotates an icon).
export const USE_LOGOS = false;

// ── Layout (viewBox units) ──────────────────────────────────────────────────
export const VIEW = { w: 720, h: 540 };
export const CARD = { w: 172, h: 56 };
export const HUB = { x: 232, y: 88, w: 216, h: 388 };

// Where a tile ends up once Office Experts has organised everything
const source = (row) => ({ kind: "source", row, x: 70, y: 96 + row * 76, bg: 52, icon: 1, label: true });
const chip = (col, row) => ({ kind: "chip", x: 270 + col * 70, y: 266 + row * 78, bg: 44, icon: 0.8, label: true });
const core = { kind: "core", x: 270, y: 188, bg: 44, icon: 0.8, label: false };
const header = (y, panel) => ({ kind: "header", x: 508, y, bg: 0, icon: 0.72, label: false, panel });

// Output panels on the right. hubY/linkY are where their connector leaves the
// hub and meets the panel. `at` is when the panel slides in.
export const PANELS = [
  { id: "dash", x: 484, y: 24, w: 220, h: 196, at: 12.8, hubY: 130, linkY: 122 },
  { id: "auto", x: 484, y: 236, w: 220, h: 112, at: 13.1, hubY: 292, linkY: 292 },
  { id: "docs", x: 484, y: 364, w: 220, h: 152, at: 13.4, hubY: 430, linkY: 440 },
];

// ── Cast ────────────────────────────────────────────────────────────────────
// Act 1 tools have a `chaos` spot (where they land as the business grows, `at`
// seconds in, then how far they `drop` and `tilt` when it falls apart) and a
// `fly` time for when they move into their organised place `to`.
// Tools without `chaos` are brought in by Office Experts in act 2 (`at`).
export const TILES = [
  { id: "excel", name: "Excel", file: "customers_v7.xlsx", logo: "excel.svg",
    chaos: { x: 360, y: 272, at: 0, drop: 16, tilt: -3 }, fly: 10.7, to: source(0) },
  { id: "website", name: "Website", file: "Contact form", logo: null,
    chaos: { x: 150, y: 150, at: 0.9, drop: 24, tilt: 5 }, fly: 10.94, to: source(3) },
  { id: "outlook", name: "Outlook", file: "Orders by email", logo: "outlook.svg",
    chaos: { x: 572, y: 168, at: 1.4, drop: 20, tilt: -6 }, fly: 10.86, to: source(2) },
  { id: "access", name: "Access", file: "jobs_2014.accdb", logo: "access.svg",
    chaos: { x: 186, y: 404, at: 1.9, drop: 28, tilt: 4 }, fly: 10.78, to: source(1) },
  { id: "crm", name: "CRM", file: "Third-party app", logo: null,
    chaos: { x: 548, y: 334, at: 2.5, drop: 22, tilt: 7 }, fly: 11.02, to: source(4) },
  { id: "accounting", name: "Accounting", file: "Xero or MYOB", logo: null,
    chaos: { x: 380, y: 452, at: 2.9, drop: 30, tilt: -5 }, fly: 11.1, to: source(5) },
  { id: "word", name: "Word", file: "quote_v3.docx", logo: "word.svg",
    chaos: { x: 360, y: 112, at: 3.3, drop: 26, tilt: 6 }, fly: 11.4, to: header(390, "docs") },
  { id: "python", name: "Python", file: "sync_script.py", logo: "python.svg",
    chaos: { x: 590, y: 452, at: 3.7, drop: 18, tilt: -7 }, fly: 11.9, to: chip(0, 1) },
  { id: "javascript", name: "JavaScript", file: "form-widget.js", logo: "javascript.svg",
    chaos: { x: 128, y: 286, at: 4.1, drop: 24, tilt: 6 }, fly: 12.0, to: chip(1, 1) },

  { id: "dataverse", name: "Dataverse", logo: "dataverse.svg", at: 11.7, to: core },
  { id: "powerapps", name: "Power Apps", logo: "powerapps.svg", at: 12.0, to: chip(0, 0) },
  { id: "powerpages", name: "Power Pages", logo: "powerpages.svg", at: 12.1, to: chip(1, 0) },
  // Generic glyph by default: our agents are often custom Python/JS, not only Copilot Studio
  { id: "aiagents", name: "AI agents", logo: null, at: 12.2, to: chip(2, 0) },
  { id: "sql", name: "SQL Server", logo: "sqlserver.svg", at: 12.3, to: chip(2, 1) },
  { id: "powerbi", name: "Power BI", logo: "powerbi.svg", at: 13.0, to: header(52, "dash") },
  { id: "powerautomate", name: "Power Automate", logo: "powerautomate.svg", at: 13.3, to: header(262, "auto") },
];

// Act 1 workarounds between tools: drawn as each tool arrives, then they snap
export const WIRES = [
  { a: "website", b: "excel", at: 1.1, tag: "copy & paste" },
  { a: "outlook", b: "excel", at: 1.6 },
  { a: "access", b: "excel", at: 2.1, tag: "export CSV" },
  { a: "crm", b: "outlook", at: 2.7 },
  { a: "accounting", b: "excel", at: 3.1, tag: "re-keyed" },
  { a: "word", b: "excel", at: 3.5 },
  { a: "python", b: "crm", at: 3.9 },
  { a: "javascript", b: "website", at: 4.3 },
  { a: "accounting", b: "crm", at: 4.6 },
];

// Error pop-ups while it falls apart. width is an estimate so the pill fits the text.
export const TOASTS = [
  { tile: "crm", text: "Duplicate records", dy: -48, at: 5.1 },
  { tile: "excel", text: "Which version is right?", dy: 58, at: 5.4 },
  { tile: "python", text: "Sync failed", dy: -48, at: 5.7 },
  { tile: "website", text: "Form not sending", dy: -48, at: 6.0 },
  { tile: "word", text: "Template out of date", dy: -48, at: 6.3 },
].map((toast) => ({ ...toast, width: Math.round(toast.text.length * 6.6 + 28) }));

// Caption bar above the drawing. tone: "alert" turns the tag red.
export const CAPTIONS = [
  { start: 0, end: 0.9, tag: "Year 1", text: "One spreadsheet runs the business" },
  { start: 0.9, end: 2.5, tag: "Year 3", text: "Add a website, an inbox, a database" },
  { start: 2.5, end: 4.9, tag: "Year 6", text: "Then a CRM, accounting and scripts" },
  { start: 4.9, end: 7.4, tag: "Year 9", text: "Nothing talks to anything", tone: "alert" },
  { start: 7.4, end: 9.2, tag: "Today", text: "Sound familiar?", tone: "alert" },
  { start: 9.2, end: 12.2, tag: "Analyse", text: "We map how it all fits together" },
  { start: 12.2, end: 15.0, tag: "Connect", text: "One source of truth for every system" },
  { start: 15.0, end: 19.2, tag: "Report", text: "Live dashboards, always current" },
  { start: 19.2, end: 23.5, tag: "Automate", text: "The busywork runs itself" },
  { start: 23.5, end: 27.5, tag: "Documents", text: "Branded documents, sent automatically" },
  { start: 27.5, end: 99, tag: "AI agents", text: "Enquiries triaged before you look" },
];

// Act 3 spotlight: the panel the caption talks about stays bright, the rest dim
const SPOTS = { dash: [15.0, 19.2], auto: [19.2, 23.5], docs: [23.5, 27.5], agent: [27.5, 99] };

// Dashboard, workflow, documents and AI agent content
export const BARS = [0.42, 0.58, 0.5, 0.72, 0.62, 0.86, 0.7, 0.8, 0.96];
export const BAR_BASE = 206;
export const STEPS = [
  { x: 524, label: "New order" },
  { x: 594, label: "Invoice" },
  { x: 664, label: "Notify" },
];
export const CLIENTS = [
  { x: 598, letter: "A" },
  { x: 640, letter: "B" },
  { x: 682, letter: "C" },
];
export const CLIENT_Y = 437;
export const DOC_HOME = [519, 437];
export const DOC_LINES = [24, 26, 18];
export const AGENT_MESSAGES = ["Quote request → Sales", "Invoice → Accounts", "Fault report → Support"];

const AUTO = { start: 14.6, period: 2.4 };
const DOCS = { start: 15.2, period: 2.6 };
const AGENT = { start: 15.6, period: 2.8 };

// ── Maths helpers ───────────────────────────────────────────────────────────
const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
// 0 → 1 progress of t through a window that opens at `start` and lasts `length`
const prog = (t, start, length) => clamp01((t - start) / length);
const lerp = (a, b, p) => a + (b - a) * p;
const frac = (v) => v - Math.floor(v);
// Two decimals keeps attribute strings short and identical on server and client
const n = (v) => Math.round(v * 100) / 100;
const commas = (v) => String(v).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const easeOut = (p) => 1 - (1 - p) ** 3;
const easeInOut = (p) => (p < 0.5 ? 4 * p ** 3 : 1 - (-2 * p + 2) ** 3 / 2);
// Overshoots slightly then settles: used for things popping into place
const easeBack = (p) => 1 + 2.70158 * (p - 1) ** 3 + 1.70158 * (p - 1) ** 2;
const easeBounce = (p) => {
  if (p < 1 / 2.75) return 7.5625 * p * p;
  if (p < 2 / 2.75) return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
  if (p < 2.5 / 2.75) return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
  return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
};

// Cubic bezier point at p (0–1) on four control points
const cubic = (pts, p) => {
  const u = 1 - p;
  const w = [u * u * u, 3 * u * u * p, 3 * u * p * p, p * p * p];
  return [0, 1].map((axis) => pts.reduce((sum, pt, i) => sum + pt[axis] * w[i], 0));
};
// Smooth horizontal S-curve between two points
const curve = (from, to) => {
  const mid = (from[0] + to[0]) / 2;
  return [from, [mid, from[1]], [mid, to[1]], to];
};
const toPath = (pts) =>
  `M${pts[0].join(" ")} C${pts[1].join(" ")} ${pts[2].join(" ")} ${pts[3].join(" ")}`;

// Clean act 2 connectors: each source into the hub, then the hub out to each panel
export const LINKS = [
  ...TILES.filter((tile) => tile.to.kind === "source").map((tile) => {
    const { row } = tile.to;
    const pts = curve([tile.to.x + 30, tile.to.y], [HUB.x, 160 + row * 46]);
    return { id: tile.id, pts, d: toPath(pts), at: 12.2 + row * 0.08, period: 1.9, offset: row * 0.13 };
  }),
  ...PANELS.map((panel, index) => {
    const pts = curve([HUB.x + HUB.w, panel.hubY], [panel.x, panel.linkY]);
    return { id: panel.id, pts, d: toPath(pts), at: 13.3 + index * 0.15, period: 1.3, offset: index * 0.2, panel: panel.id };
  }),
];

// ── Story beats ─────────────────────────────────────────────────────────────
// The act 2 analysis sweep: a scan line crosses the stage left to right
const scanX = (t) => lerp(-80, 800, easeInOut(prog(t, 9.3, 1.3)));
// 0 → 1 as the scan line passes x: problems at that spot clear up
const repaired = (x, t) => clamp01((scanX(t) - x + 30) / 110);

// How strongly a spotlight is on (0–1), and the brightness that gives a panel
const spotWeight = (name, t) => {
  const [start, end] = SPOTS[name];
  return prog(t, start - 0.2, 0.4) * (1 - prog(t, end - 0.2, 0.4));
};
const spotDim = (name, t) => (t < 15 ? 1 : lerp(0.5, 1, spotWeight(name, t)));

// Position, tilt and morph (0 = labelled card, 1 = organised icon) of one tile
function tileState(tile, index, t) {
  const { chaos, to } = tile;

  if (!chaos) {
    const pop = prog(t, tile.at, 0.45);
    return { x: to.x, y: to.y, rot: 0, scale: easeBack(pop), opacity: prog(t, tile.at, 0.2), morph: 1, warn: 0 };
  }

  const fix = repaired(chaos.x, t);
  // Arrive with a small overshoot; the first spreadsheet starts larger, alone on stage
  let scale = easeBack(prog(t, chaos.at, 0.45));
  if (index === 0) scale *= lerp(1.16, 1, easeInOut(prog(t, 0.7, 0.7)));

  // Strain: a growing tremor from 4.9s that eases off once everything has slumped
  const strain = prog(t, 4.9, 1.1) * (1 - 0.75 * prog(t, 7.3, 1.2)) * (1 - fix);
  // Slump: each card drops and tilts as it gives way
  const slump = easeBounce(prog(t, 6.1 + index * 0.07, 0.9)) * (1 - fix);

  let x = chaos.x + 2.8 * strain * Math.sin(t * 39 + index * 1.7);
  let y = chaos.y + 2.2 * strain * Math.cos(t * 45 + index * 2.3) + chaos.drop * slump;
  let rot = chaos.tilt * slump;
  const opacity = prog(t, chaos.at, 0.2) * (1 - 0.3 * prog(t, 6.3, 1.0) * (1 - fix));
  const warn = prog(t, 4.9 + index * 0.12, 0.25) * (1 - fix);

  // Fly into the organised layout, straightening as it goes
  const fly = easeInOut(prog(t, tile.fly, 1.0));
  x = lerp(x, to.x, fly);
  y = lerp(y, to.y, fly);
  rot = lerp(rot, 0, fly);

  return { x, y, rot, scale, opacity, morph: fly, warn };
}

function writeTile(S, tile, s, t) {
  const { to } = tile;
  const key = `tile.${tile.id}`;
  const m = s.morph;
  const w = lerp(CARD.w, to.bg, m);
  const h = lerp(CARD.h, to.bg, m);
  const dim = to.panel ? spotDim(to.panel, t) : 1;

  S[key] = {
    transform: `translate(${n(s.x)} ${n(s.y)}) rotate(${n(s.rot)}) scale(${n(s.scale)})`,
    opacity: n(s.opacity * dim),
  };
  S[`${key}.card`] = { x: n(-w / 2), y: n(-h / 2), width: n(w), height: n(h), opacity: n(to.bg ? 1 : 1 - m) };
  // The icon counter-rotates, so a product icon is never shown tilted
  S[`${key}.icon`] = {
    transform: `translate(${n(lerp(-CARD.w / 2 + 30, 0, m))} 0) rotate(${n(-s.rot)}) scale(${n(lerp(1, to.icon, m))})`,
  };
  S[`${key}.text`] = { opacity: n(1 - prog(m, 0, 0.35)) };
  S[`${key}.label`] = { opacity: n(to.label ? prog(m, 0.6, 0.4) : 0) };
  S[`${key}.warn`] = {
    opacity: n(s.warn),
    transform: `translate(${CARD.w / 2 - 8} ${-CARD.h / 2 + 8}) scale(${n(easeBack(s.warn))})`,
  };
}

function writeWire(S, wire, i, t, placed) {
  const A = placed[wire.a];
  const B = placed[wire.b];
  // Bow each wire sideways so the tangle reads as hand-made workarounds
  const dx = B.x - A.x;
  const dy = B.y - A.y;
  const len = Math.hypot(dx, dy) || 1;
  const sag = (i % 2 ? -1 : 1) * 28;
  const cx = (A.x + B.x) / 2 - (dy / len) * sag;
  const cy = (A.y + B.y) / 2 + (dx / len) * sag;

  const draw = easeOut(prog(t, wire.at, 0.5));
  const red = prog(t, 5.0 + i * 0.06, 0.5);
  const gap = 0.12 * easeOut(prog(t, 6.0 + i * 0.08, 0.35));
  const fix = repaired((A.x + B.x) / 2, t);
  const flicker = gap < 0.12 ? red * 0.35 * (0.5 + 0.5 * Math.sin(t * 47 + i * 3)) : 0;
  const opacity = (draw > 0 ? 1 : 0) * (1 - fix) * (0.9 - flicker) * (1 - 3 * gap);

  // pathLength is 1: "1 1" with an offset draws the wire in; after that the
  // pattern opens a gap in the middle as it snaps
  const dash =
    draw < 1
      ? { strokeDasharray: "1 1", strokeDashoffset: n(1 - draw) }
      : { strokeDasharray: `${n(0.5 - gap)} ${n(2 * gap)} ${n(0.5 - gap)} 1`, strokeDashoffset: 0 };
  const d = `M${n(A.x)} ${n(A.y)} Q${n(cx)} ${n(cy)} ${n(B.x)} ${n(B.y)}`;

  S[`wire.${i}`] = { d, ...dash, opacity: n(opacity) };
  S[`wire.${i}.red`] = { d, ...dash, opacity: n(opacity * red) };
  if (wire.tag) {
    // Halfway along the quadratic curve
    const mx = 0.25 * A.x + 0.5 * cx + 0.25 * B.x;
    const my = 0.25 * A.y + 0.5 * cy + 0.25 * B.y;
    S[`wire.${i}.tag`] = {
      transform: `translate(${n(mx)} ${n(my)})`,
      opacity: n(prog(t, wire.at + 0.3, 0.3) * (1 - fix) * (1 - 0.6 * red)),
    };
  }
}

function writeToast(S, toast, i, t, placed) {
  const tile = placed[toast.tile];
  const pop = prog(t, toast.at, 0.3);
  const fix = repaired(tile.x, t);
  S[`toast.${i}`] = {
    transform: `translate(${n(tile.x)} ${n(tile.y + toast.dy)}) scale(${n(easeBack(pop))})`,
    opacity: n(pop * (1 - fix)),
  };
}

function writeLinks(S, t) {
  LINKS.forEach((link) => {
    const drawn = easeOut(prog(t, link.at, 0.7));
    const dim = link.panel ? spotDim(link.panel, t) : 1;
    S[`link.${link.id}`] = { strokeDashoffset: n(1 - drawn), opacity: drawn > 0 ? n(dim) : 0 };

    // Two data pulses per connector once it has finished drawing
    const start = link.at + 0.7;
    [0, 0.5].forEach((phase, k) => {
      const p = frac((t - start) / link.period + phase + link.offset);
      const [x, y] = cubic(link.pts, p);
      S[`pulse.${link.id}.${k}`] = {
        cx: n(x),
        cy: n(y),
        opacity: t >= start ? n(Math.sin(Math.PI * p) * dim) : 0,
      };
    });
  });
}

function writeHub(S, t) {
  const shown = easeOut(prog(t, 11.2, 0.9));
  const cx = HUB.x + HUB.w / 2;
  const cy = HUB.y + HUB.h / 2;
  S.hub = {
    opacity: n(shown),
    transform: `translate(${cx} ${cy}) scale(${n(lerp(0.94, 1, shown))}) translate(${-cx} ${-cy})`,
  };
  S["hub.glow"] = { opacity: n(shown * (0.75 + 0.25 * Math.sin(t * 1.6))) };
}

function writePanels(S, t) {
  PANELS.forEach((panel) => {
    const shown = easeOut(prog(t, panel.at, 0.7));
    S[`panel.${panel.id}`] = {
      transform: `translate(${n(lerp(28, 0, shown))} 0)`,
      opacity: n(shown * spotDim(panel.id, t)),
    };
    S[`panel.${panel.id}.glow`] = { opacity: n(shown * spotWeight(panel.id, t)) };
  });
}

// Completed workflow runs, shared by the workflow panel and the invoices KPI
const runsDone = (t) => (t < AUTO.start ? 0 : Math.floor((t - AUTO.start) / AUTO.period));

function writeDashboard(S, t) {
  const rise = easeOut(prog(t, 14.2, 1.2));
  BARS.forEach((base, i) => {
    const h = Math.max(0, (base * 56 + 5 * Math.sin(t * 1.3 + i * 1.1)) * rise);
    S[`bar.${i}`] = { y: n(BAR_BASE - h), height: n(h) };
  });

  // Live trend line: ten points that drift over time
  const points = BARS.concat(0)
    .map((_, i) => `${500 + i * 21},${n(150 - 14 * Math.sin(i * 0.75 + t * 0.9) - 8 * Math.sin(i * 1.9 + t * 0.5))}`)
    .join(" ");
  S["dash.trend"] = { points, strokeDashoffset: n(1 - easeOut(prog(t, 14.4, 1.3))) };

  // KPIs count up, then keep ticking
  const count = easeOut(prog(t, 14.2, 1.4));
  const orders = t < 15.6 ? Math.round(1284 * count) : 1284 + Math.floor((t - 15.6) / 0.9);
  const invoices = t < 15.6 ? Math.round(312 * count) : 312 + runsDone(t);
  S["dash.orders"] = { text: commas(orders) };
  S["dash.invoices"] = { text: commas(invoices) };
  S["dash.live"] = { opacity: n(0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * 4))) };
}

function writeAutomation(S, t) {
  const running = t >= AUTO.start;
  const ph = running ? frac((t - AUTO.start) / AUTO.period) : 0;
  // Everything resets at the end of each run, ready for the next order
  const hold = running ? 1 - prog(ph, 0.9, 0.1) : 0;
  STEPS.forEach((_, k) => {
    S[`auto.node.${k}`] = { opacity: n(prog(ph, 0.08 + k * 0.27, 0.08) * hold) };
  });
  [0, 1].forEach((k) => {
    S[`auto.track.${k}`] = { strokeDashoffset: n(1 - prog(ph, 0.16 + k * 0.27, 0.19) * hold) };
  });
}

function writeDocs(S, t) {
  const running = t >= DOCS.start;
  const cycle = running ? Math.floor((t - DOCS.start) / DOCS.period) : -1;
  const ph = running ? frac((t - DOCS.start) / DOCS.period) : 0;
  const target = CLIENTS[Math.max(cycle, 0) % CLIENTS.length];

  // Fill the template, fly it in an arc to this cycle's client, then fade
  const fly = easeInOut(prog(ph, 0.32, 0.4));
  const x = lerp(DOC_HOME[0], target.x, fly);
  const y = lerp(DOC_HOME[1], CLIENT_Y, fly) - 16 * Math.sin(Math.PI * fly);
  const opacity = running ? prog(ph, 0, 0.06) * (1 - prog(ph, 0.72, 0.1)) : 1;
  S["doc.fly"] = { transform: `translate(${n(x)} ${n(y)}) scale(${n(lerp(1, 0.4, fly))})`, opacity: n(opacity) };
  DOC_LINES.forEach((width, i) => {
    S[`doc.line.${i}`] = { width: n(width * (running ? prog(ph, 0.04 + i * 0.07, 0.1) : 0)) };
  });

  CLIENTS.forEach((client, i) => {
    const ring = running && cycle % CLIENTS.length === i ? prog(ph, 0.72, 0.28) : 0;
    const delivered = running && (cycle > i || (cycle === i && ph >= 0.74));
    S[`client.${i}.ring`] = { r: n(14 + 14 * ring), opacity: ring > 0 && ring < 1 ? n(0.9 * (1 - ring)) : 0 };
    S[`client.${i}.tick`] = { opacity: delivered ? 1 : 0 };
  });

  const last = !running ? -1 : ph >= 0.74 ? cycle : cycle - 1;
  S["doc.status"] = {
    text:
      last < 0
        ? "Templates ready"
        : `Quote_${String(142 + last).padStart(4, "0")}.docx sent to Client ${CLIENTS[last % CLIENTS.length].letter}`,
  };
}

function writeAgent(S, t) {
  const running = t >= AGENT.start;
  const cycle = running ? Math.floor((t - AGENT.start) / AGENT.period) : -1;
  const ph = running ? frac((t - AGENT.start) / AGENT.period) : 0;
  S["agent.idle"] = { opacity: n(1 - prog(t, AGENT.start - 0.3, 0.3)) };
  AGENT_MESSAGES.forEach((_, i) => {
    const on = running && cycle % AGENT_MESSAGES.length === i;
    const o = on ? prog(ph, 0, 0.12) * (1 - prog(ph, 0.88, 0.12)) : 0;
    S[`agent.msg.${i}`] = { opacity: n(o), transform: `translate(0 ${n((1 - o) * 6)})` };
  });
  S["agent.glow"] = { opacity: n(spotWeight("agent", t)) };
}

function writeEffects(S, t) {
  // Red wash while it falls apart, calm accent glow once connected
  S["fx.alert"] = { opacity: n(prog(t, 5.0, 1.4) * (1 - prog(t, 9.3, 1.0))) };
  S["fx.calm"] = { opacity: n(prog(t, 10.0, 1.8)) };
  S["fx.scan"] = { transform: `translate(${n(scanX(t))} 0)`, opacity: t > 9.25 && t < 10.75 ? 1 : 0 };
  // One ring pulses out from the hub as everything connects
  const ring = prog(t, 12.2, 1.3);
  S["fx.ring"] = { r: n(lerp(70, 320, easeOut(ring))), opacity: ring > 0 && ring < 1 ? n(0.6 * (1 - ring)) : 0 };
}

// ── Public ──────────────────────────────────────────────────────────────────
export function sceneAt(t) {
  const S = {};
  const placed = {};

  TILES.forEach((tile, index) => {
    const state = tileState(tile, index, t);
    placed[tile.id] = state;
    writeTile(S, tile, state, t);
  });
  WIRES.forEach((wire, i) => writeWire(S, wire, i, t, placed));
  TOASTS.forEach((toast, i) => writeToast(S, toast, i, t, placed));
  writeLinks(S, t);
  writeHub(S, t);
  writePanels(S, t);
  writeDashboard(S, t);
  writeAutomation(S, t);
  writeDocs(S, t);
  writeAgent(S, t);
  writeEffects(S, t);
  CAPTIONS.forEach((caption, i) => {
    S[`caption.${i}`] = { "data-on": t >= caption.start && t < caption.end ? "true" : "false" };
  });

  return S;
}
