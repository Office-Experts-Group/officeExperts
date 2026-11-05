// utils/wordHeroScene.js
// The Microsoft Word hero story as pure maths. sceneAt(t) takes a time in
// seconds and returns every attribute the illustration needs at that moment,
// keyed by element name. No React or DOM, so the server renders the first frame
// from it and useStoryPlayer repaints from it on the client.
//
// One act per hero frame (lengths match the tab timers):
//   Act 1   0–9s   a quick quote template is copied around until nobody trusts it
//   Act 2   9–19s  master template, brand styles, fill-in form, Quick Parts
//   Act 3   19–31s one click makes an on-brand quote; the whole team sends them
// Each act ends exactly where the next one starts, so autoplay is seamless.

// ── Timing ──────────────────────────────────────────────────────────────────
// Seconds per act. WordHero passes these to HeroRotator as the tab durations.
export const STORY_DURATIONS = [9, 10, 12];

export const ACTS = STORY_DURATIONS.map((length, index) => {
  const start = STORY_DURATIONS.slice(0, index).reduce((sum, n) => sum + n, 0);
  return { start, end: start + length };
});

// First frame rendered on the server: Word open on the original quote template
export const INITIAL_T = 0.8;

// Reduced motion: the finished template for frames 1 and 2, the running result for frame 3
export const REDUCED_MOTION_T = [ACTS[1].end, ACTS[1].end, ACTS[2].end].map((t) => t - 0.001);

// ── Layout (viewBox units) ──────────────────────────────────────────────────
export const VIEW = { w: 720, h: 540 };
export const WINDOW = { x: 158, y: 26, w: 404, h: 484 };
export const PAGE = { x: 190, y: 130, w: 340, h: 400 };
export const FILENAMES = { messy: "Quote_FINAL_v3 (2).docx", master: "Quote.dotx" };

// Side panels: Word Experts' work appears around the Word window in act 2 and 3
export const PANELS = {
  brand: { x: 10, y: 40, w: 130, h: 250, at: 11.4 },
  sent: { x: 10, y: 306, w: 130, h: 194, at: 19.3 },
  form: { x: 580, y: 40, w: 130, h: 222, at: 13.8 },
  parts: { x: 580, y: 278, w: 130, h: 194, at: 16.3 },
};

// Ribbon: the stock tabs, then the custom tab Word Experts adds
export const TABS = [
  { label: "File", x: 176 },
  { label: "Home", x: 210 },
  { label: "Insert", x: 252 },
  { label: "Layout", x: 300 },
];
export const CUSTOM_TAB = { label: "Your Brand", x: 350 };
export const RIBBON_BUTTONS = [
  { id: "quote", label: "New quote" },
  { id: "letter", label: "Letter" },
  { id: "clauses", label: "Clauses" },
  { id: "styles", label: "Styles" },
].map((button, i) => ({ ...button, x: 172 + i * 64 }));

// ── Page content ────────────────────────────────────────────────────────────
// Fill-in fields: labels on the left, content controls on the right
export const FIELDS = [
  { label: "Client", y: 240, placeholder: "[CLIENT NAME]", value: "Harbour Logistics" },
  { label: "Date", y: 260, placeholder: "[insert date]", value: "4 November 2026" },
  { label: "Reference", y: 280, placeholder: "[ref no.]", value: "Q-0142" },
];
export const FIELD_X = 282;
// Rough text width for a highlight behind a value (11px text)
export const textWidth = (text) => Math.round(text.length * 6.4 + 10);

// Body lines: brand width, then how far each is off when the template is messy
export const BODY = [
  { y: 300, w: 292, dx: 12, dy: 0, h: 7 },
  { y: 312, w: 270, dx: -6, dy: 2, h: 4 },
  { y: 324, w: 196, dx: 20, dy: -1, h: 6 },
];
// Numbered list: messy numbering restarts and drifts; styles fix it
export const LIST = [
  { y: 352, w: 240, messy: "1.", fixed: "1.", dx: 0 },
  { y: 370, w: 220, messy: "1.", fixed: "2.", dx: 14 },
  { y: 388, w: 180, messy: "3.", fixed: "3.", dx: 5 },
];
// Quick Parts inserted at the foot of the page (centre y)
export const BLOCKS = [
  { id: "terms", y: 420, from: 0, at: 16.9 },
  { id: "sign", y: 470, from: 2, at: 18.1 },
];
// Badges added to the finished document in act 3
export const BADGES = [
  { label: "PDF ready", x: 376, w: 80 },
  { label: "Accessible", x: 464, w: 86 },
];
export const QUICK_PARTS = ["Payment terms", "Scope of work", "Signature block", "Disclaimer"];
export const QUICK_PART_Y = (i) => 330 + i * 32;

// Brand panel style list: each ticks when the style sweep fixes that part of the page
export const STYLE_ROWS = [
  { name: "Title", y: 212 },
  { name: "Form fields", y: 240 },
  { name: "Body text", y: 300 },
  { name: "Numbering", y: 352 },
];

// Act 1: everyone's own copy of the template
export const MINIS = [
  { file: "Quote_old.docx", x: 75, y: 150, at: 1.7, tilt: -6, tone: "grey" },
  { file: "Quote_Sarah.docx", x: 645, y: 132, at: 2.1, tilt: 5, tone: "red" },
  { file: "Quote 2019.doc", x: 75, y: 372, at: 2.6, tilt: 4, tone: "dark" },
  { file: "Quote_v3_FINAL.docx", x: 645, y: 352, at: 3.0, tilt: -5, tone: "pale" },
];

// Act 1 problems. Each clears when the fix for it arrives (`clear`).
export const TOASTS = [
  { text: "Old logo", x: 340, y: 152, at: 3.9, clear: 12.0 },
  { text: "Fonts don't match", x: 425, y: 198, at: 4.4, clear: 12.2 },
  { text: "Numbering broken", x: 340, y: 362, at: 4.9, clear: 12.9 },
  { text: "Re-typed again", x: 455, y: 252, at: 6.0, clear: 14.7 },
].map((toast) => ({ ...toast, width: Math.round(toast.text.length * 6.6 + 28) }));

// Act 3: each cycle presses New quote for the next client and files it as sent
const GEN = { start: 19.4, period: 3.9 };
export const RUNS = [
  { client: "Ridge Dental", ref: "Q-0143", author: "S" },
  { client: "Coastal Council", ref: "Q-0144", author: "T" },
  { client: "Northside Build", ref: "Q-0145", author: "M" },
];
export const SENT_Y = (k) => 364 + k * 42;
const TYPO = "Harbor Logistcs";

// Caption bar above the drawing. tone: "alert" turns the tag red.
export const CAPTIONS = [
  { start: 0, end: 1.6, tag: "Day one", text: "One quote template, made in a hurry" },
  { start: 1.6, end: 3.6, tag: "Year 3", text: "Everyone saves their own copy" },
  { start: 3.6, end: 5.6, tag: "Year 6", text: "Old logos, mixed fonts, broken numbering", tone: "alert" },
  { start: 5.6, end: 7.6, tag: "Every day", text: "Client details re-typed on every page", tone: "alert" },
  { start: 7.6, end: 9.2, tag: "Today", text: "Which version is the right one?", tone: "alert" },
  { start: 9.2, end: 11.4, tag: "Template", text: "One master template replaces every copy" },
  { start: 11.4, end: 13.8, tag: "Brand", text: "Your brand identity built into Word styles" },
  { start: 13.8, end: 16.4, tag: "Fill-in forms", text: "Type client details once" },
  { start: 16.4, end: 19.2, tag: "Quick Parts", text: "Approved wording in one click" },
  { start: 19.2, end: 23.2, tag: "One click", text: "A new quote, already on brand" },
  { start: 23.2, end: 27.2, tag: "Whole team", text: "Everyone sends the same standard" },
  { start: 27.2, end: 99, tag: "Ready to send", text: "Accessible structure, ready for PDF" },
];

// ── Maths helpers ───────────────────────────────────────────────────────────
const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
// 0 → 1 progress of t through a window that opens at `start` and lasts `length`
const prog = (t, start, length) => clamp01((t - start) / length);
const lerp = (a, b, p) => a + (b - a) * p;
const frac = (v) => v - Math.floor(v);
// Two decimals keeps attribute strings short and identical on server and client
const n = (v) => Math.round(v * 100) / 100;
const easeOut = (p) => 1 - (1 - p) ** 3;
const easeInOut = (p) => (p < 0.5 ? 4 * p ** 3 : 1 - (-2 * p + 2) ** 3 / 2);
const easeBack = (p) => 1 + 2.70158 * (p - 1) ** 3 + 1.70158 * (p - 1) ** 2;
// The first `p` share of a string, as if being typed
const typed = (text, p) => text.slice(0, Math.round(text.length * clamp01(p)));

// ── Story beats ─────────────────────────────────────────────────────────────
// How messy the template is: a little from day one, fully by year 6
const messAt = (t) => lerp(0.35, 1, prog(t, 3.6, 1.6));
// Low tremor while it is at its worst
const strainAt = (t) => prog(t, 3.6, 1.0);
// The act 2 style sweep runs down the page; fixed(y) goes 0 → 1 as it passes y
const sweepY = (t) => lerp(PAGE.y, 540, easeInOut(prog(t, 11.9, 1.4)));
const fixed = (y, t) => clamp01((sweepY(t) - y + 20) / 60);
const wobble = (t, seed) => Math.sin(t * 31 + seed * 2.1);

// Act 3 cycle details
const genCycle = (t) => (t < GEN.start ? -1 : Math.floor((t - GEN.start) / GEN.period));
const genPhase = (t) => (t < GEN.start ? 0 : frac((t - GEN.start) / GEN.period));
const runValue = (i, cycle) => (i === 0 ? RUNS[cycle % RUNS.length].client : RUNS[cycle % RUNS.length].ref);

// What each fill-in field shows on the page and in the form at time t
function fieldState(i, t) {
  const field = FIELDS[i];

  // Act 3: client and reference are re-typed in the form for each new quote
  if (t >= GEN.start && i !== 1) {
    const cycle = genCycle(t);
    const ph = genPhase(t);
    const before = cycle === 0 ? field.value : runValue(i, cycle - 1);
    const next = runValue(i, cycle);
    const start = i === 0 ? 0.12 : 0.32;
    const length = i === 0 ? 0.16 : 0.08;
    const lands = start + length + 0.02;
    const typing = ph >= start && ph < start + length;
    return {
      form: ph < start ? before : typed(next, (ph - start) / length) + (typing ? "|" : ""),
      page: ph >= lands ? next : before,
      flash: ph >= lands ? 1 - prog(ph, lands, 0.12) : 0,
      control: 1,
      typo: 0,
    };
  }

  // Act 2: typed once into the form, then it lands on the page
  const start = 14.2 + i * 0.55;
  const done = start + 0.45;
  if (t >= start) {
    const landed = t >= done;
    return {
      form: typed(field.value, (t - start) / 0.45) + (landed ? "" : "|"),
      page: landed ? field.value : i === 0 ? TYPO : "",
      flash: landed ? 1 - prog(t, done, 0.6) : 0,
      control: landed ? 1 : 0,
      typo: i === 0 && !landed ? 1 : 0,
    };
  }

  // Act 1: the client name is re-typed over and over, ending with a typo
  let page = "";
  if (i === 0 && t >= 5.6) {
    page = t < 7.6 ? `${typed(TYPO, frac((t - 5.6) / 0.66) / 0.85)}|` : TYPO;
  }
  return { form: "", page, flash: 0, control: 0, typo: i === 0 && t >= 7.6 ? 1 : 0 };
}

function writeWindow(S, t) {
  const shown = easeOut(prog(t, 0, 0.5));
  S.window = { opacity: n(shown), transform: `translate(0 ${n((1 - shown) * 10)})` };
  const master = prog(t, 10.1, 0.4);
  S["file.messy"] = { opacity: n(1 - master) };
  S["file.master"] = { opacity: n(master) };

  const custom = prog(t, 10.4, 0.4);
  S["tab.custom"] = { opacity: n(custom) };
  S["tab.home.line"] = { opacity: n(1 - custom) };
  S["tab.custom.line"] = { opacity: n(custom) };
  S["ribbon.stock"] = { opacity: n(1 - prog(t, 10.4, 0.3)) };
  S["ribbon.custom"] = { opacity: n(prog(t, 10.6, 0.4)) };

  // The New quote button lights up at the start of each act 3 cycle
  const ph = genPhase(t);
  S["ribbon.press"] = { opacity: t >= GEN.start ? n(prog(ph, 0, 0.03) * (1 - prog(ph, 0.1, 0.06))) : 0 };
}

function writePage(S, t) {
  const mess = messAt(t);
  const strain = strainAt(t);

  // Logo: the old one drifts out of place, the brand logo replaces it
  const logoFix = fixed(157, t);
  S["logo.old"] = {
    opacity: n(1 - logoFix),
    transform: `translate(${n(26 * mess + 1.2 * strain * wobble(t, 1))} ${n(4 * mess)})`,
  };
  S["logo.brand"] = { opacity: n(logoFix) };
  S["page.rule"] = { width: n(292 * logoFix) };

  // Title: wrong font and position until the Title style is applied
  const titleFix = fixed(212, t);
  S["title.old"] = {
    opacity: n(1 - titleFix),
    transform: `translate(${n(20 * mess + 1.2 * strain * wobble(t, 2))} 0)`,
  };
  S["title.brand"] = { opacity: n(titleFix) };

  // Fill-in fields
  FIELDS.forEach((field, i) => {
    const state = fieldState(i, t);
    const fieldFix = fixed(field.y, t);
    S[`field.${i}.placeholder`] = { opacity: state.page === "" ? 1 : 0 };
    S[`field.${i}.value`] = { text: state.page };
    // Yellow highlight: manual placeholders and hand-typed text, gone once it is a content control
    S[`field.${i}.highlight`] = {
      width: textWidth(state.page || field.placeholder),
      opacity: state.control ? 0 : n(state.page === "" ? 1 - fieldFix : 1),
    };
    S[`field.${i}.control`] = {
      width: textWidth(state.page || field.placeholder),
      opacity: n(Math.max(state.control, fieldFix * 0.6)),
    };
    S[`field.${i}.flash`] = { width: textWidth(state.page), opacity: n(state.flash * 0.7) };
    S[`field.${i}.typo`] = { opacity: state.typo };
    S[`form.${i}`] = { text: state.form };
  });

  // Body text: mismatched fonts (heights) and indents, then aligned
  BODY.forEach((line, i) => {
    const off = mess * (1 - fixed(line.y, t));
    S[`body.${i}`] = {
      x: n(214 + line.dx * off + 1.2 * strain * (1 - fixed(line.y, t)) * wobble(t, i + 3)),
      y: n(line.y - 3 + line.dy * off),
      height: n(lerp(5, line.h, off)),
    };
  });
  S["body.squiggle"] = { opacity: n(prog(t, 3.6, 0.4) * (1 - fixed(312, t))) };

  // Numbered list: restarts at 1 and drifts until List Number style is applied
  LIST.forEach((item, i) => {
    const itemFix = fixed(item.y, t);
    S[`list.${i}`] = { transform: `translate(${n(item.dx * mess * (1 - itemFix))} 0)` };
    S[`list.${i}.num`] = { text: itemFix > 0.5 ? item.fixed : item.messy };
  });

  // Quick Parts fly from the gallery into the page
  BLOCKS.forEach((block) => {
    const fly = easeInOut(prog(t, block.at, 0.7));
    const fromX = PANELS.parts.x + PANELS.parts.w / 2;
    const fromY = QUICK_PART_Y(block.from);
    // In act 3 the blocks drop in again for each new quote
    const ph = genPhase(t);
    const lag = block.id === "sign" ? 0.08 : 0;
    const redrop = t >= GEN.start ? prog(ph, 0.4 + lag, 0.06) * (1 - easeOut(prog(ph, 0.46 + lag, 0.14))) : 0;
    S[`block.${block.id}`] = {
      transform: `translate(${n(lerp(fromX, 360, fly))} ${n(lerp(fromY, block.y, fly) - 8 * redrop)}) scale(${n(lerp(0.42, 1, fly))})`,
      opacity: n(prog(t, block.at, 0.1) * (1 - 0.7 * redrop)),
    };
  });

  // Act 1 terms pasted from an old quote, replaced by the Payment terms Quick Part
  S["paste.old"] = {
    opacity: n(1 - prog(t, 16.9, 0.4)),
    transform: `translate(${n(10 * mess * (1 - fixed(420, t)))} 0)`,
  };

  // Act 3 finish: accessibility and PDF badges on the page
  [0, 1].forEach((i) => {
    const pop = prog(t, 27.4 + i * 0.3, 0.35);
    S[`badge.${i}`] = { opacity: n(pop), transform: `scale(${n(easeBack(pop))})` };
  });
}

function writeMinis(S, t) {
  const strain = strainAt(t);
  MINIS.forEach((mini, i) => {
    const pop = prog(t, mini.at, 0.45);
    // Act 2: every copy flies into the window and becomes the one master template
    const merge = easeInOut(prog(t, 9.4 + i * 0.1, 0.8));
    const x = lerp(mini.x + 2 * strain * wobble(t, i + 7), 360, merge);
    const y = lerp(mini.y + 1.5 * strain * wobble(t, i + 11), 320, merge);
    const tilt = mini.tilt * (1 + strain * 0.6) * (1 - merge);
    S[`mini.${i}`] = {
      transform: `translate(${n(x)} ${n(y)}) rotate(${n(tilt)}) scale(${n(easeBack(pop) * lerp(1, 0.3, merge))})`,
      opacity: n(prog(t, mini.at, 0.2) * (1 - prog(merge, 0.7, 0.3))),
    };
  });
}

function writeToasts(S, t) {
  TOASTS.forEach((toast, i) => {
    const pop = prog(t, toast.at, 0.3);
    const gone = prog(t, toast.clear, 0.3);
    S[`toast.${i}`] = {
      transform: `translate(${toast.x} ${toast.y}) scale(${n(easeBack(pop) * (1 - 0.2 * gone))})`,
      opacity: n(pop * (1 - gone)),
    };
  });
}

function writePanels(S, t) {
  Object.entries(PANELS).forEach(([id, panel]) => {
    const shown = easeOut(prog(t, panel.at, 0.6));
    const from = panel.x < WINDOW.x ? -24 : 24;
    S[`panel.${id}`] = { opacity: n(shown), transform: `translate(${n(from * (1 - shown))} 0)` };
  });

  // Brand panel: each style ticks as the sweep fixes its part of the page
  STYLE_ROWS.forEach((row, i) => {
    S[`style.${i}`] = { opacity: n(fixed(row.y, t)) };
  });

  // Form: the Insert button is pressed once all three fields are typed
  const press = prog(t, 15.85, 0.05) * (1 - prog(t, 16.1, 0.2));
  S["form.insert"] = { opacity: n(press) };

  // Quick Parts gallery: the item being inserted is highlighted
  QUICK_PARTS.forEach((_, i) => {
    const block = BLOCKS.find((item) => item.from === i);
    const on = block ? prog(t, block.at - 0.3, 0.15) * (1 - prog(t, block.at + 0.7, 0.3)) : 0;
    S[`part.${i}`] = { opacity: n(on) };
  });

  // Sent today: a thumbnail of each finished quote flies over and its row appears
  const cycle = genCycle(t);
  const ph = genPhase(t);
  const fly = easeInOut(prog(ph, 0.7, 0.18));
  const rowY = SENT_Y(Math.max(cycle, 0) % RUNS.length);
  S.thumb = {
    transform: `translate(${n(lerp(360, 30, fly))} ${n(lerp(330, rowY, fly))}) scale(${n(lerp(0.3, 0.08, fly))})`,
    opacity: cycle < 0 ? 0 : n(prog(ph, 0.66, 0.04) * (1 - prog(ph, 0.86, 0.04))),
  };
  RUNS.forEach((_, k) => {
    const shownAt = GEN.start + k * GEN.period + 0.88 * GEN.period;
    const pop = prog(t, shownAt, 0.3);
    S[`sent.${k}`] = { opacity: n(pop), transform: `translate(${n(-10 * (1 - pop))} 0)` };
  });
}

function writeEffects(S, t) {
  S["fx.alert"] = { opacity: n(prog(t, 4.6, 1.4) * (1 - prog(t, 9.4, 1.0))) };
  S["fx.calm"] = { opacity: n(prog(t, 11.2, 1.6)) };
  S["fx.sweep"] = {
    transform: `translate(0 ${n(sweepY(t))})`,
    opacity: t > 11.85 && t < 13.35 ? 1 : 0,
  };
}

// ── Public ──────────────────────────────────────────────────────────────────
export function sceneAt(t) {
  const S = {};
  writeWindow(S, t);
  writePage(S, t);
  writeMinis(S, t);
  writeToasts(S, t);
  writePanels(S, t);
  writeEffects(S, t);
  CAPTIONS.forEach((caption, i) => {
    S[`caption.${i}`] = { "data-on": t >= caption.start && t < caption.end ? "true" : "false" };
  });
  return S;
}
