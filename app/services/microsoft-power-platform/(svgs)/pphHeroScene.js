// /app/services/microsoft-power-platform/(svgs)/pphHeroScene.js
// Timeline and geometry for the Power Platform hero story (PphHeroStory).
//
// One job travels through the platform, one act per hero frame:
//   Act 1 (Power Apps)      paper forms, a broken spreadsheet and an email chain fold
//                           into a phone app; a site job is typed in, photographed and
//                           saved as a new row in a Dataverse table.
//   Act 2 (Automate + AI)   the new row starts a flow: AI reads the photo, a manager
//                           approves, a work order is built and the tech is alerted.
//   Act 3 (BI + Pages)      the report fills in and updates with the new job, someone
//                           asks it a question, and the customer sees their booking on
//                           a portal. The whole platform lights up together.
//
// sceneAt(t) is a pure function of time (seconds). It returns the attributes for every
// animated node, keyed by the name the node is bound under in PphHeroStory. The server
// renders sceneAt(PPH_INITIAL_T); useStoryPlayer repaints only what changes per frame.
// Rules: never set a CSS property here that the stylesheet also sets on the same node
// (CSS beats SVG presentation attributes), and "text" sets textContent.

export const PPH_VIEW = { w: 760, h: 600 };

// One act per hero frame. Tab durations come from these so the two stay in step.
export const PPH_ACTS = [
  { start: 0, end: 10 },
  { start: 10, end: 20 },
  { start: 20, end: 31 },
];
export const PPH_STORY_DURATIONS = PPH_ACTS.map(
  ({ start, end }) => end - start,
);

// Server render and first paint
export const PPH_INITIAL_T = 0;
// Reduced motion: one finished still per frame
export const PPH_REDUCED_MOTION_T = [9.8, 19.1, 29.4];

// HTML caption bar above the drawing
export const PPH_CAPTIONS = [
  {
    tag: "Before",
    text: "Paper forms, spreadsheets and email chains",
    tone: "warn",
    from: 0,
    to: 3,
  },
  {
    tag: "Power Apps",
    text: "Jobs captured on site, straight into one table",
    from: 3,
    to: 10,
  },
  {
    tag: "Power Automate + AI",
    text: "Approvals, paperwork and alerts run themselves",
    from: 10,
    to: 20,
  },
  {
    tag: "Power BI + Power Pages",
    text: "Reports for you, a status page for your customers",
    from: 20,
    to: 31,
  },
];

// ── Geometry (viewBox units) ────────────────────────────────────────────────

// Left column: the phone (acts 1–2) hands over to the customer portal (act 3)
export const PPH_PHONE = { x: 18, y: 84, w: 180, h: 388, cx: 108, cy: 278 };
export const PPH_PORTAL = { x: 18, y: 112, w: 180, h: 340, cx: 108, cy: 282 };
export const PPH_PORTAL_STEPS = [
  { label: "Logged" },
  { label: "Approved" },
  { label: "Booked", sub: "Thu 10am" },
  { label: "Fixed" },
];
export const PPH_PORTAL_STEP_Y = 230;
export const PPH_PORTAL_STEP_GAP = 46;

// What lands on the desk before the platform exists
export const PPH_CHAOS = [
  { id: "paper", x: 118, y: 250, rot: -7, warn: [58, -78] },
  { id: "sheet", x: 372, y: 352, rot: 4, warn: [78, -50] },
  { id: "mail", x: 612, y: 140, rot: 5, warn: [70, -38] },
  { id: "note", x: 604, y: 432, rot: -6, warn: [46, -46] },
];

// Centre: the Dataverse table every tool reads and writes
export const PPH_TABLE = { x: 238, y: 228, w: 214, h: 228, cx: 345, cy: 342 };
export const PPH_ROW_Y = 320;
export const PPH_ROW_H = 30;
export const PPH_ROWS = [
  { site: "Blacktown", status: "booked", color: "#6fc3e8" },
  { site: "Ryde", status: "done", color: "#046999" },
  { site: "Liverpool", status: "done", color: "#6fc3e8" },
  { site: "Hornsby", status: "booked", color: "#046999" },
];
export const PPH_NEW_ROW = { site: "Penrith", color: "#0eaa0e" };

// Right top: the flow
export const PPH_STEP_X = 492;
export const PPH_STEP_W = 252;
export const PPH_STEP_H = 60;
export const PPH_STEPS = [
  {
    id: "ai",
    y: 34,
    title: "AI checks the job",
    sub: "Reads photo + notes",
    done: "Urgent · plumbing",
    run: [11.0, 12.4],
  },
  {
    id: "approve",
    y: 108,
    title: "Manager approves",
    sub: "Request sent to Sam",
    run: [12.9, 15.0],
  },
  {
    id: "doc",
    y: 182,
    title: "Work order created",
    sub: "From your template",
    run: [15.5, 16.9],
  },
  {
    id: "notify",
    y: 256,
    title: "Team notified",
    sub: "On-call tech alerted",
    run: [17.4, 18.6],
  },
];
// Centre of each step's icon tile and status ring
export const PPH_STEP_ICON_X = PPH_STEP_X + 28;
export const PPH_STEP_RING_X = PPH_STEP_X + PPH_STEP_W - 20;

// Right bottom: the report
export const PPH_DASH = { x: 492, y: 330, w: 252, h: 262 };
export const PPH_BAR = { x0: 516, step: 42, w: 26, base: 556, unit: 7.2 };
export const PPH_BARS = [
  { day: "Mon", v: 8 },
  { day: "Tue", v: 9 },
  { day: "Wed", v: 7 },
  { day: "Thu", v: 11 },
  { day: "Fri", v: 7 }, // goes to 8 when the Penrith job lands
];
export const PPH_LAST_WEEK = [6, 7, 9, 8, 6];
export const PPH_BUSIEST = 3; // Thursday

// Work order lines (target widths)
export const PPH_DOC_LINES = [46, 52, 34, 48, 28];

// Connectors as cubic Béziers, so dot positions can be worked out on the server
const LINK_POINTS = {
  side: [
    [198, 392],
    [218, 392],
    [218, 352],
    [238, 352],
  ],
  flow: [
    [452, 300],
    [474, 300],
    [470, 64],
    [492, 64],
  ],
  dash: [
    [452, 420],
    [474, 420],
    [470, 460],
    [492, 460],
  ],
};
const PACKET_PATH = [
  [108, 427],
  [160, 380],
  [262, 296],
  [345, 335],
];
const toD = ([a, b, c, d]) =>
  `M${a[0]} ${a[1]}C${b[0]} ${b[1]} ${c[0]} ${c[1]} ${d[0]} ${d[1]}`;
export const PPH_LINKS = Object.fromEntries(
  Object.entries(LINK_POINTS).map(([id, p]) => [id, toD(p)]),
);

// ── Easing and helpers ──────────────────────────────────────────────────────

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const lerp = (a, b, p) => a + (b - a) * p;
const inOut = (p) => (p < 0.5 ? 4 * p * p * p : 1 - (-2 * p + 2) ** 3 / 2);
const out = (p) => 1 - (1 - p) ** 3;
const back = (p) => 1 + 2.70158 * (p - 1) ** 3 + 1.70158 * (p - 1) ** 2;
const span = (t, a, b) => clamp01((t - a) / (b - a));
const ramp = (t, a, b, ease = inOut) => ease(span(t, a, b));
// Rises over a→b, holds, falls over c→d
const win = (t, a, b, c, d) => (t < c ? ramp(t, a, b) : 1 - ramp(t, c, d));

const n = (v) => String(Math.round(v * 100) / 100);
const op = (v) => n(clamp01(v));
const scaleAt = (cx, cy, s) =>
  s === 1
    ? "translate(0 0)"
    : `translate(${n(cx)} ${n(cy)}) scale(${n(s)}) translate(${n(-cx)} ${n(-cy)})`;
const bez = ([a, b, c, d], s) => {
  const u = 1 - s;
  const k = [u * u * u, 3 * u * u * s, 3 * u * s * s, s * s * s];
  return [
    k[0] * a[0] + k[1] * b[0] + k[2] * c[0] + k[3] * d[0],
    k[0] * a[1] + k[1] * b[1] + k[2] * c[1] + k[3] * d[1],
  ];
};
const typed = (t, str, a, b) => {
  const shown = str.slice(0, Math.round(str.length * span(t, a, b)));
  const caret = t >= a - 0.3 && t < b + 0.3 && Math.floor(t * 3) % 2 === 0;
  return shown + (caret ? "|" : "");
};
// Quick fade-and-rise used by the popout cards
const pop = (t, a, b, cx, cy) => {
  const p = ramp(t, a, a + 0.35, out);
  const leave = ramp(t, b - 0.3, b);
  return {
    opacity: op(p * (1 - leave)),
    transform:
      p >= 1 && leave === 0
        ? "translate(0 0)"
        : `translate(0 ${n((1 - p) * 10 - leave * 6)}) ${scaleAt(cx, cy, lerp(0.96, 1, p))}`,
  };
};

// Zone visibility (spotlight). Each zone fades in once the platform appears,
// then brightens for its own act. Everything is lit for the finale.
const zones = (t) => {
  const built = (a) => ramp(t, a, a + 0.6);
  const finale = ramp(t, 28.4, 29.2);
  return {
    phone:
      ramp(t, 2.9, 3.5) *
      (1 - 0.5 * ramp(t, 10, 10.6)) *
      (1 - ramp(t, 20, 20.7)),
    table: built(3.4) * (0.4 + 0.6 * ramp(t, 7.9, 8.4)),
    flow:
      built(3.6) *
      (0.3 +
        0.7 * ramp(t, 10, 10.6) -
        0.45 * ramp(t, 20, 20.6) +
        0.45 * finale),
    dash: built(3.8) * (0.3 + 0.7 * ramp(t, 20.2, 20.8)),
    portal: ramp(t, 20.4, 21.1),
    tracks: built(3.4),
  };
};

// A dot that travels a connector during given windows, then loops in the finale
const dotOn = (t, points, runs, reverse) => {
  let s = -1;
  for (const [a, b] of runs) {
    if (t >= a && t <= b) s = span(t, a, b);
  }
  if (s < 0 && t >= 28.6) s = ((t - 28.6) * 0.65) % 1;
  if (s < 0) return { opacity: "0" };
  const [x, y] = bez(points, reverse ? 1 - s : s);
  const fade = Math.min(1, s * 6, (1 - s) * 6);
  return { cx: n(x), cy: n(y), opacity: op(fade) };
};

// ── The scene ───────────────────────────────────────────────────────────────

export const sceneAt = (t) => {
  const s = {};
  const z = zones(t);

  // Captions
  PPH_CAPTIONS.forEach((c, i) => {
    s[`caption.${i}`] = { "data-show": String(t >= c.from && t < c.to) };
  });

  // ── Before: the clutter, then it folds into the phone ──
  PPH_CHAOS.forEach((item, i) => {
    const g = ramp(t, 2.3 + i * 0.15, 3.2 + i * 0.15);
    const bob = Math.sin(t * 1.8 + i * 1.7) * 3 * (1 - g);
    const x = lerp(item.x, PPH_PHONE.cx, g);
    const y = lerp(item.y, PPH_PHONE.cy, g) + bob;
    s[`chaos.${item.id}`] = {
      transform: `translate(${n(x)} ${n(y)}) rotate(${n(lerp(item.rot, 0, g))}) scale(${n(lerp(1, 0.18, g))})`,
      opacity: op(1 - ramp(t, 2.9 + i * 0.15, 3.3 + i * 0.15)),
    };
    const pulse = t < 3.4 ? 1 + 0.14 * Math.max(0, Math.sin(t * 5 + i)) : 1;
    s[`chaos.${item.id}.warn`] = {
      transform: `translate(${item.warn[0]} ${item.warn[1]}) scale(${n(pulse)})`,
    };
  });

  // ── Act 1: Power Apps ──
  const phoneScale =
    lerp(0.86, 1, back(span(t, 2.9, 3.6))) * lerp(1, 0.92, ramp(t, 20, 20.7));
  s["zone.phone"] = {
    opacity: op(z.phone),
    transform: scaleAt(PPH_PHONE.cx, PPH_PHONE.cy, phoneScale),
  };

  ["bar", "f0", "f1", "f2", "f3", "f4"].forEach((key, i) => {
    const p = ramp(t, 3.4 + i * 0.12, 3.75 + i * 0.12, out);
    s[`app.${key}`] = {
      opacity: op(p),
      transform: `translate(0 ${n((1 - p) * 8)})`,
    };
  });

  s["app.ph0"] = { opacity: t < 4.25 ? "1" : "0" };
  s["app.site"] = { text: typed(t, "Penrith depot", 4.3, 5.4) };
  s["app.ph1"] = { opacity: t < 5.55 ? "1" : "0" };
  s["app.issue"] = { text: typed(t, "Leaking valve", 5.6, 6.6) };

  s["app.cam"] = { opacity: op(1 - ramp(t, 6.95, 7.15)) };
  s["app.photo"] = { opacity: op(ramp(t, 6.95, 7.25)) };
  s["app.flash"] = { opacity: op(win(t, 6.85, 6.92, 6.95, 7.35) * 0.85) };
  s["app.high"] = { opacity: op(ramp(t, 7.5, 7.7)) };

  // Touch indicator: taps "High", then "Submit"
  const move = ramp(t, 7.85, 8.05);
  s["app.touch"] = {
    opacity: op(win(t, 7.3, 7.45, 8.25, 8.45)),
    transform: `translate(${n(lerp(142, 108, move))} ${n(lerp(381, 426, move))})`,
  };
  const r0 = span(t, 7.5, 7.95);
  s["app.ripple0"] = {
    r: n(6 + 16 * r0),
    opacity: op(r0 > 0 && r0 < 1 ? 0.6 * (1 - r0) : 0),
  };
  const r1 = span(t, 8.05, 8.55);
  s["app.ripple1"] = {
    r: n(8 + 24 * r1),
    opacity: op(r1 > 0 && r1 < 1 ? 0.6 * (1 - r1) : 0),
  };
  const saved = ramp(t, 8.1, 8.3);
  s["app.saved"] = { opacity: op(saved) };
  s["app.submitLabel"] = { opacity: op(1 - saved) };

  // The saved record flies to the table
  const pp = span(t, 8.25, 9.25);
  const [px, py] = bez(PACKET_PATH, inOut(pp));
  s.packet = {
    opacity: op(win(t, 8.2, 8.35, 9.1, 9.3)),
    transform: `translate(${n(px)} ${n(py)}) scale(${n(lerp(0.6, 1, Math.sin(pp * Math.PI) * 0.6 + pp * 0.4))})`,
  };

  // ── Table ──
  s["zone.table"] = { opacity: op(z.table) };
  s["zone.tracks"] = { opacity: op(z.tracks) };
  const shift = ramp(t, 9.0, 9.5);
  s["table.rows"] = { transform: `translate(0 ${n(PPH_ROW_H * shift)})` };
  s["table.row3"] = { opacity: op(1 - ramp(t, 9.0, 9.35)) };
  const rowIn = ramp(t, 9.1, 9.55);
  s["table.new"] = {
    opacity: op(rowIn),
    transform: `translate(${n(lerp(-14, 0, rowIn))} 0)`,
  };
  s["table.flash"] = {
    opacity: op(
      0.35 *
        Math.max(win(t, 9.15, 9.4, 9.9, 11.5), win(t, 14.9, 15.1, 15.6, 16.6)),
    ),
  };
  s["table.count"] = { text: t < 9.3 ? "128 rows" : "129 rows" };
  const approved = ramp(t, 15.0, 15.3);
  s["table.statusNew"] = { opacity: op(1 - approved) };
  s["table.statusOk"] = { opacity: op(approved) };

  // ── Connectors and travelling dots ──
  s["link.side"] = { strokeDashoffset: n(1 - ramp(t, 8.0, 8.6)) };
  s["link.flow"] = { strokeDashoffset: n(1 - ramp(t, 10.1, 10.6)) };
  s["link.dash"] = { strokeDashoffset: n(1 - ramp(t, 20.5, 21.0)) };
  s["dot.side"] = dotOn(t, LINK_POINTS.side, [[21.0, 21.7]], true);
  s["dot.flow"] = dotOn(t, LINK_POINTS.flow, [[10.3, 11.0]], false);
  s["dot.dash"] = dotOn(t, LINK_POINTS.dash, [[23.3, 24.0]], false);

  // ── Act 2: the flow ──
  s["zone.flow"] = { opacity: op(z.flow) };
  s["flow.status"] = { opacity: op(ramp(t, 18.7, 19.0)) };

  PPH_STEPS.forEach((step, k) => {
    const [a, b] = step.run;
    const started = ramp(t, a - 0.2, a);
    const done = ramp(t, b, b + 0.2);
    const cy = step.y + PPH_STEP_H / 2;
    const running = t >= a && t < b + 0.05;
    s[`step.${k}`] = { opacity: op(0.55 + 0.45 * started) };
    s[`step.${k}.glow`] = {
      opacity: op(win(t, a - 0.1, a + 0.15, b - 0.1, b + 0.4)),
    };
    s[`step.${k}.pending`] = { opacity: op(1 - started) };
    s[`step.${k}.spin`] = {
      opacity: op(win(t, a, a + 0.1, b - 0.05, b + 0.05)),
      transform: `rotate(${running ? n(((t - a) * 430) % 360) : "0"} ${PPH_STEP_RING_X} ${cy})`,
    };
    s[`step.${k}.tile`] = { opacity: op(done) };
    s[`step.${k}.tick`] = {
      opacity: op(done),
      transform: scaleAt(
        PPH_STEP_RING_X,
        cy,
        lerp(0.4, 1, back(span(t, b, b + 0.3))),
      ),
    };
  });
  s["step.0.subA"] = { opacity: op(1 - ramp(t, 12.2, 12.45)) };
  s["step.0.subB"] = { opacity: op(ramp(t, 12.3, 12.6)) };

  // Token hopping down the flow between steps
  const hops = [
    [12.4, 12.9, 0],
    [15.0, 15.5, 1],
    [16.9, 17.4, 2],
  ];
  let token = { opacity: "0", transform: `translate(${PPH_STEP_ICON_X} 64)` };
  for (const [a, b, k] of hops) {
    if (t >= a && t <= b) {
      const p = span(t, a, b);
      const y =
        lerp(PPH_STEPS[k].y, PPH_STEPS[k + 1].y, inOut(p)) + PPH_STEP_H / 2;
      token = {
        opacity: op(Math.min(1, p * 5, (1 - p) * 5)),
        transform: `translate(${PPH_STEP_ICON_X} ${n(y)})`,
      };
    }
  }
  s["flow.token"] = token;

  // Popout: AI reads the photo
  s["pop.ai"] = pop(t, 11.0, 12.8, 346, 120);
  const scan = span(t, 11.1, 11.95);
  s["pop.ai.scan"] = {
    opacity: op(win(t, 11.1, 11.2, 11.85, 12.0)),
    transform: `translate(0 ${n(lerp(0, 62, scan))})`,
  };
  s["pop.ai.box"] = { opacity: op(ramp(t, 11.55, 11.75)) };
  [0, 1, 2].forEach((i) => {
    const p = ramp(t, 11.8 + i * 0.15, 12.0 + i * 0.15, out);
    s[`pop.ai.tag.${i}`] = {
      opacity: op(p),
      transform: `translate(0 ${n((1 - p) * 6)})`,
    };
  });

  // Popout: approval with a click
  s["pop.ok"] = pop(t, 13.0, 15.3, 346, 120);
  const cm = ramp(t, 13.5, 14.1);
  const press = t >= 14.15 && t < 14.35 ? 0.85 : 1;
  s["pop.ok.cursor"] = {
    opacity: op(win(t, 13.3, 13.5, 14.6, 14.8)),
    transform: `translate(${n(lerp(434, 312, cm))} ${n(lerp(196, 166, cm))}) scale(${press})`,
  };
  s["pop.ok.press"] = { opacity: op(win(t, 14.15, 14.25, 14.3, 14.5)) };
  s["pop.ok.buttons"] = { opacity: op(1 - ramp(t, 14.45, 14.6)) };
  s["pop.ok.stamp"] = { opacity: op(ramp(t, 14.5, 14.7)) };

  // Popout: the work order builds, then drops into its step
  const docIn = ramp(t, 15.5, 15.85, out);
  const fly = ramp(t, 16.7, 17.1);
  const docTarget = [PPH_STEP_ICON_X, PPH_STEPS[2].y + PPH_STEP_H / 2];
  s["pop.doc"] = {
    opacity: op(docIn * (1 - ramp(t, 16.95, 17.15))),
    transform:
      t < 15.5
        ? "translate(0 0)"
        : `translate(${n(lerp(340, docTarget[0], fly))} ${n(lerp(110 + (1 - docIn) * 10, docTarget[1], fly))}) scale(${n(lerp(lerp(0.96, 1, docIn), 0.2, fly))}) translate(-340 -110)`,
  };
  s["pop.doc.leader"] = { opacity: op(1 - ramp(t, 16.6, 16.8)) };
  PPH_DOC_LINES.forEach((w, i) => {
    s[`pop.doc.line.${i}`] = {
      width: n(w * ramp(t, 15.7 + i * 0.1, 16.0 + i * 0.1)),
    };
  });

  // Popout: the tech replies
  s["pop.chat"] = pop(t, 17.45, 19.7, 346, 112);
  s["pop.chat.typing"] = { opacity: op(win(t, 17.6, 17.7, 18.0, 18.1)) };
  s["pop.chat.msg"] = { opacity: op(ramp(t, 18.05, 18.25)) };
  [0, 1, 2].forEach((i) => {
    const typing = t >= 17.6 && t < 18.1;
    const lift = typing ? 3 * Math.max(0, Math.sin(t * 12 - i * 0.9)) : 0;
    s[`pop.chat.dot.${i}`] = { transform: `translate(0 ${n(-lift)})` };
  });

  // ── Act 3: the report ──
  s["zone.dash"] = { opacity: op(z.dash) };
  s["dash.jobs"] = {
    text:
      t < 21
        ? "–"
        : t < 24.05
          ? String(Math.round(42 * ramp(t, 21.0, 22.6, out)))
          : "43",
  };
  s["dash.time"] = {
    text:
      t < 21.2 ? "–" : `${(1.8 * ramp(t, 21.2, 22.6, out)).toFixed(1)} days`,
  };
  s["dash.flash"] = { opacity: op(0.5 * win(t, 24.0, 24.15, 24.4, 25.0)) };
  PPH_BARS.forEach((bar, i) => {
    const grow = ramp(t, 21.0 + i * 0.12, 21.7 + i * 0.12, out);
    const v = i === PPH_BARS.length - 1 ? bar.v + ramp(t, 23.95, 24.25) : bar.v;
    const h = v * PPH_BAR.unit * grow;
    s[`bar.${i}`] = { y: n(PPH_BAR.base - h), height: n(h) };
  });
  s["bar.hi"] = { opacity: op(ramp(t, 26.9, 27.2)) };
  s["dash.trend"] = { strokeDashoffset: n(1 - ramp(t, 22.2, 23.2)) };
  s["dash.hint"] = { opacity: t < 25 ? "1" : "0" };
  s["dash.ask"] = {
    text:
      t < 25
        ? ""
        : t < 26.85
          ? typed(t, "Which day was busiest?", 25.0, 26.4)
          : "Thursday, 11 jobs",
  };
  const live = t >= 20.8 ? (t * 0.8) % 1 : 0;
  s["dash.live"] = {
    r: n(4 + 8 * live),
    opacity: op(t >= 20.8 ? 0.6 * (1 - live) : 0),
  };

  // ── Act 3: the customer portal ──
  s["zone.portal"] = {
    opacity: op(z.portal),
    transform: scaleAt(
      PPH_PORTAL.cx,
      PPH_PORTAL.cy,
      lerp(0.92, 1, ramp(t, 20.4, 21.2, out)),
    ),
  };
  const lit = [20.9, 21.5, 22.2];
  lit.forEach((at, i) => {
    s[`portal.step.${i}`] = { opacity: op(ramp(t, at, at + 0.25)) };
  });
  s["portal.fill"] = {
    height: n(
      PPH_PORTAL_STEP_GAP * (ramp(t, 21.2, 21.5) + ramp(t, 21.9, 22.2)),
    ),
  };
  s["portal.sub"] = { opacity: op(ramp(t, 22.2, 22.45)) };
  const ring = t >= 22.45 ? ((t - 22.45) * 0.9) % 1 : 0;
  s["portal.ring"] = {
    r: n(9 + 9 * ring),
    opacity: op(t >= 22.45 ? 0.7 * (1 - ring) : 0),
  };

  // ── Finale ──
  const fr = span(t, 28.6, 30.4);
  s["fx.ring"] = {
    r: n(30 + 230 * out(fr)),
    opacity: op(fr > 0 && fr < 1 ? 0.45 * (1 - fr) : 0),
  };

  return s;
};
