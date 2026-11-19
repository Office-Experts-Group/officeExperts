// /app/services/microsoft-excel/(svgs)/excelHeroStoryScene.js
// Timeline and geometry for the Excel hero story (ExcelHeroStory.jsx).
// Plain module (no "use client") so the server hero can read STORY_DURATIONS
// and the client story can call sceneAt(t) every frame.
//
// Three acts, one per hero frame:
//   Act 1 (0–9s)   "Before": a linked workbook fills with errors, grows to
//                  412 MB, loses a link and stops responding.
//   Act 2 (9–18s)  "The fix": a scan clears the errors, the linked files
//                  collapse into Power Query steps, a clean formula is typed
//                  and filled down, and a macro builds the report.
//   Act 3 (18–27s) "After": the workbook steps back, a live dashboard builds
//                  itself and the report is emailed to three teams.
//
// sceneAt(t) returns { key: { attribute: value } } for every bound node. The
// "text" attribute sets text content; "data-on" toggles HTML captions.

// The drawing starts 30 units down, so the viewBox skips that empty band
export const VIEW = { y: 30, w: 720, h: 430 };

export const ACTS = [
  { start: 0, end: 9 },
  { start: 9, end: 18 },
  { start: 18, end: 27 },
];

// Seconds per hero frame, read by HeroRotator so tabs and acts stay in step
export const STORY_DURATIONS = ACTS.map((act) => act.end - act.start);

// Opening frame for the server render: the workbook is already on screen
export const INITIAL_T = 0;

// One still per frame when the visitor prefers reduced motion
export const REDUCED_MOTION_T = [8.6, 17.6, 26.6];

export const CAPTIONS = [
  {
    tag: "Before",
    text: "One fragile workbook doing everyone’s job",
    tone: "alert",
  },
  {
    tag: "The fix",
    text: "Clean data, solid formulas, one-click macros",
    tone: "fix",
  },
  {
    tag: "After",
    text: "Reports that build and send themselves",
    tone: "calm",
  },
];

// ── Workbook geometry (viewBox units) ──────────────────────────────────────
export const WB = { x: 24, y: 40, w: 440, h: 392 };
export const SHEET = { x: 32, right: 456, head: 114, top: 136, rowH: 28 };
export const ROWS = 9; // header row + seven regions + total
export const COLS = [
  { key: "A", x: 56, w: 120 },
  { key: "B", x: 176, w: 70 },
  { key: "C", x: 246, w: 70 },
  { key: "D", x: 316, w: 70 },
  { key: "E", x: 386, w: 70 },
];
export const rowTop = (row) => SHEET.top + row * SHEET.rowH;
export const colOf = (key) => COLS.find((col) => col.key === key);

// Thousands separator without Intl, so server and browser always agree
const withCommas = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const REGIONS = [
  ["Sydney", 18420, 19105, 20340],
  ["Melbourne", 16880, 17420, 18015],
  ["Brisbane", 11240, 11960, 12410],
  ["Perth", 8930, 9315, 9870],
  ["Adelaide", 6415, 6780, 7020],
  ["Hobart", 2860, 3015, 3140],
  ["Darwin", 1980, 2140, 2265],
];

// Full grid of cell values (row 0 = headings, row 8 = totals)
const GRID = (() => {
  const rows = [["Region", "Jan", "Feb", "Mar", "Total"]];
  const sums = [0, 0, 0, 0];
  REGIONS.forEach(([name, ...months]) => {
    const total = months.reduce((a, b) => a + b, 0);
    [...months, total].forEach((v, i) => {
      sums[i] += v;
    });
    rows.push([name, ...[...months, total].map(withCommas)]);
  });
  rows.push(["Total", ...sums.map(withCommas)]);
  return rows;
})();

// Cells that break in act 1 and are fixed in act 2. The clean value is the
// real figure from the grid, so the repaired sheet still adds up.
const SCAN = { from: 56, to: 456, start: 10.2, end: 13.6 };
export const ERRORS = [
  { col: "C", row: 2, text: "#REF!", at: 2.2 },
  { col: "E", row: 4, text: "#N/A", at: 3.4 },
  { col: "B", row: 6, text: "#VALUE!", at: 4.6 },
  { col: "D", row: 7, text: "#DIV/0!", at: 5.8 },
].map((err) => {
  const col = colOf(err.col);
  const centre = col.x + col.w / 2;
  const colIndex = COLS.indexOf(col);
  return {
    ...err,
    clean: GRID[err.row][colIndex],
    fixAt:
      SCAN.start +
      ((centre - SCAN.from) / (SCAN.to - SCAN.from)) * (SCAN.end - SCAN.start),
  };
});

const isError = (colKey, row) =>
  ERRORS.some((err) => err.col === colKey && err.row === row);

// Static cell text, minus the cells that start broken
export const CELLS = GRID.flatMap((values, row) =>
  values
    .map((text, i) => ({ text, row, col: COLS[i] }))
    .filter((cell) => !isError(cell.col.key, row)),
);

export const SHEET_TABS = [
  { label: "Data", x: 40, w: 62 },
  { label: "Calcs", x: 106, w: 66 },
  { label: "Report", x: 176, w: 74 },
];

export const OLD_FORMULA = "=[Sydney.xlsx]Data!C4+#REF!";
export const NEW_FORMULA = "=SUMIFS(Sales[Amount],Sales[Region],$A2)";

// ── Linked workbooks (act 1) ───────────────────────────────────────────────
export const SOURCES = [
  { name: "Sydney.xlsx", y: 72, row: 1 },
  { name: "Melbourne.xlsx", y: 158, row: 2 },
  { name: "Perth.xlsx", y: 244, row: 4 },
];
export const SOURCE_CARD = { x: 506, w: 194, h: 58 };
export const BROKEN_SOURCE = 1;
export const wirePath = (src) => {
  const cy = src.y + SOURCE_CARD.h / 2;
  const ty = rowTop(src.row) + SHEET.rowH / 2;
  return `M${SOURCE_CARD.x} ${cy}C486 ${cy} 486 ${ty} ${WB.x + WB.w} ${ty}`;
};

// ── Power Query steps and macro (act 2) ────────────────────────────────────
export const STEPS = [
  "Combine 3 workbooks",
  "Fix data types",
  "Remove duplicates",
  "Load to one table",
];
export const stepY = (i) => 132 + i * 46;
export const MACRO = { x: 506, y: 306, w: 194, h: 40 };

// ── Dashboard (act 3) ──────────────────────────────────────────────────────
export const DASH = { x: 316, y: 40, w: 388, h: 392 };
export const BAR_BASE = 378;
export const BAR_W = 28;
export const barX = (i) => 338 + i * 45;
export const BARS = [
  { label: "Jul", h: 64 },
  { label: "Aug", h: 78 },
  { label: "Sep", h: 72 },
  { label: "Oct", h: 96 },
  { label: "Nov", h: 104 },
  { label: "Dec", h: 88 },
  { label: "Jan", h: 118 },
  { label: "Feb", h: 132 },
];
// Last year, drawn as a line over the bars
export const TREND_POINTS = [50, 58, 62, 70, 76, 80, 88, 96]
  .map((v, i) => `${barX(i) + BAR_W / 2},${BAR_BASE - v}`)
  .join(" ");
export const CHIPS = [
  { label: "NSW", x: 338 },
  { label: "VIC", x: 400 },
  { label: "WA", x: 462 },
];
// Bar height multipliers for each slicer choice
const BAR_MIX = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0.82, 0.9, 0.86, 0.8, 0.92, 0.95, 0.84, 0.88],
  [0.55, 0.6, 0.66, 0.58, 0.62, 0.7, 0.64, 0.6],
];
export const RECIPIENTS = [
  { label: "Finance", x: 62 },
  { label: "Sales", x: 150 },
  { label: "Ops", x: 238 },
];
export const RCPT_Y = 366;
const DOC_FROM = [262, 296];

// ── Timing helpers ─────────────────────────────────────────────────────────
const clamp01 = (v) => Math.min(1, Math.max(0, v));
const easeInOut = (p) =>
  p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
const lin = (t, a, b) => clamp01((t - a) / (b - a));
const prog = (t, a, b) => easeInOut(lin(t, a, b));
const mix = (a, b, p) => a + (b - a) * p;
const round = (v, digits = 3) => Number(v.toFixed(digits));
// Scale about a point, written as one transform attribute
const scaleAbout = (cx, cy, k) =>
  `translate(${round(cx * (1 - k), 2)} ${round(cy * (1 - k), 2)}) scale(${round(k)})`;

export const sceneAt = (t) => {
  const s = {};

  // Captions: one per act
  CAPTIONS.forEach((_, i) => {
    const on = t >= ACTS[i].start && t < ACTS[i].end;
    s[`caption.${i}`] = { "data-on": on ? "true" : "false" };
  });

  // ── Workbook ──
  const shrink = prog(t, 18.2, 19.6);
  s.wb = { transform: scaleAbout(WB.x, WB.y, mix(1, 0.6, shrink)) };
  s["wb.name"] = {
    text: t < 16 ? "Monthly_Report_FINAL_v7.xlsx" : "Monthly_Report.xlsx",
  };

  const mb =
    t < 9 ? mix(38, 412, lin(t, 1.5, 8)) : mix(412, 9, prog(t, 15, 16.6));
  const sizeText = `${Math.round(mb)} MB`;
  const sizeFixed = prog(t, 15.6, 16.4);
  s["size.bad"] = { opacity: round(1 - sizeFixed) };
  s["size.bad.text"] = { text: sizeText };
  s["size.good"] = { opacity: round(sizeFixed) };
  s["size.good.text"] = { text: sizeText };

  let formula = NEW_FORMULA;
  if (t < 13.7) formula = OLD_FORMULA;
  else if (t < 15.7) {
    const n = Math.round(lin(t, 13.7, 15.5) * NEW_FORMULA.length);
    formula = NEW_FORMULA.slice(0, n) + (n < NEW_FORMULA.length ? "|" : "");
  }
  s["fx.text"] = { text: formula };

  ERRORS.forEach((err, i) => {
    const col = colOf(err.col);
    const appear = prog(t, err.at, err.at + 0.35);
    const fixed = prog(t, err.fixAt, err.fixAt + 0.4);
    s[`err.${i}`] = {
      opacity: round(appear * (1 - fixed)),
      transform: scaleAbout(
        col.x + col.w / 2,
        rowTop(err.row) + SHEET.rowH / 2,
        mix(0.7, 1, appear),
      ),
    };
    s[`fix.${i}`] = { opacity: round(fixed) };
  });

  s.scan = {
    opacity: round(prog(t, 9.9, 10.2) * (1 - prog(t, 13.6, 14))),
    transform: `translate(${round(mix(SCAN.from, SCAN.to, lin(t, SCAN.start, SCAN.end)), 1)} 0)`,
  };

  // Active cell: lands on E2 while the formula is typed, then fills down
  s["cell.sel"] = {
    opacity: round(prog(t, 13.5, 13.8) * (1 - prog(t, 17.6, 18))),
    height: round(mix(26, 7 * SHEET.rowH - 2, prog(t, 15.9, 16.7)), 2),
  };

  const toast = prog(t, 6.6, 7) * (1 - prog(t, 9.1, 9.5));
  s.toast = { opacity: round(toast) };
  s["toast.spin"] = {
    transform: `rotate(${toast > 0 ? round((t * 300) % 360, 1) : 0})`,
  };

  // ── Linked workbooks and wires ──
  const wiresOut = 1 - prog(t, 9.2, 9.8);
  const broken = prog(t, 5, 5.4) * wiresOut;
  const collapse = prog(t, 9.6, 10.6);
  SOURCES.forEach((src, i) => {
    const drawn = prog(t, 0.8 + i * 0.35, 1.8 + i * 0.35);
    const hidden = i === BROKEN_SOURCE ? 1 - prog(t, 5, 5.4) : 1;
    s[`wire.${i}`] = {
      strokeDashoffset: round(1 - drawn),
      opacity: round(wiresOut * hidden),
    };
    s[`src.${i}`] = {
      opacity: round(
        prog(t, 0.2 + i * 0.25, 0.7 + i * 0.25) * (1 - prog(t, 10.6, 11.2)),
      ),
      transform: `translate(0 ${round((SOURCES[0].y - src.y) * collapse, 2)})`,
    };
  });
  s["wire.broken"] = { opacity: round(broken) };
  s["wire.badge"] = { opacity: round(prog(t, 5.2, 5.6) * wiresOut) };

  // ── Power Query steps ──
  s.steps = { opacity: round(prog(t, 10.6, 11.2) * (1 - prog(t, 18, 18.6))) };
  STEPS.forEach((_, i) => {
    const lit = 11.4 + i * 0.9;
    s[`step.${i}.on`] = { opacity: round(prog(t, lit, lit + 0.4)) };
    if (i < STEPS.length - 1) {
      s[`step.${i}.line`] = {
        strokeDashoffset: round(1 - prog(t, lit + 0.4, lit + 0.9)),
      };
    }
  });

  // ── Macro button ──
  s.macro = { opacity: round(prog(t, 14.4, 14.8) * (1 - prog(t, 18, 18.6))) };
  const press = Math.sin(Math.PI * lin(t, 15, 15.3));
  s["macro.btn"] = {
    transform: scaleAbout(
      MACRO.x + MACRO.w / 2,
      MACRO.y + MACRO.h / 2,
      1 - 0.05 * press,
    ),
  };
  s["macro.bar"] = { width: round(MACRO.w * lin(t, 15.3, 17), 2) };
  s["macro.status"] = {
    text: t < 17 ? "Building report…" : "Report built",
    opacity: round(prog(t, 15.3, 15.6)),
  };

  // ── Dashboard ──
  const dashIn = prog(t, 19, 19.7);
  s.dash = {
    opacity: round(dashIn),
    transform: `translate(0 ${round(mix(14, 0, dashIn), 2)})`,
  };
  const pulse = (t * 0.8) % 1;
  s["dash.halo"] = {
    r: round(4 + 9 * pulse, 2),
    opacity: round((1 - pulse) * 0.6 * dashIn),
  };
  const counted = prog(t, 19.6, 21.4);
  s["kpi.rev"] = { text: `$${(1.28 * counted).toFixed(2)}M` };
  s["kpi.margin"] = { text: `${(34.6 * counted).toFixed(1)}%` };

  // Slicer: NSW, then VIC, then WA, every 1.4s from 22.6s
  let chip = 0;
  let from = 0;
  let blend = 1;
  if (t >= 22.6) {
    const seg = Math.floor((t - 22.6) / 1.4) + 1;
    chip = seg % 3;
    from = (seg - 1) % 3;
    blend = prog((t - 22.6) % 1.4, 0, 0.45);
  }
  CHIPS.forEach((_, i) => {
    let on = 0;
    if (i === chip) on = blend;
    else if (i === from) on = 1 - blend;
    s[`chip.${i}.on`] = { opacity: round(on) };
  });
  BARS.forEach((bar, i) => {
    const grow = prog(t, 19.8 + i * 0.12, 20.6 + i * 0.12);
    const h = bar.h * grow * mix(BAR_MIX[from][i], BAR_MIX[chip][i], blend);
    s[`bar.${i}`] = { y: round(BAR_BASE - h, 2), height: round(h, 2) };
  });
  s["dash.trend"] = { strokeDashoffset: round(1 - prog(t, 20.8, 22.2)) };

  // ── Report emailed to three teams ──
  s.send = { opacity: round(prog(t, 21.4, 21.9)) };
  let docOpacity = 0;
  let [dx, dy] = DOC_FROM;
  RECIPIENTS.forEach((person, j) => {
    const a = 22.2 + j * 1.3;
    const b = a + 0.9;
    s[`rcpt.${j}.tick`] = { opacity: round(prog(t, b, b + 0.25)) };
    if (t >= a - 0.15 && t <= b + 0.2) {
      const q = prog(t, a, b);
      dx = mix(DOC_FROM[0], person.x, q);
      dy = mix(DOC_FROM[1], RCPT_Y - 46, q) - Math.sin(Math.PI * q) * 28;
      docOpacity = prog(t, a - 0.15, a) * (1 - prog(t, b, b + 0.2));
    }
  });
  s.doc = {
    opacity: round(docOpacity),
    transform: `translate(${round(dx, 1)} ${round(dy, 1)})`,
  };

  return s;
};
