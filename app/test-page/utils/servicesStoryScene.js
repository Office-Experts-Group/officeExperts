// app/utils/servicesStoryScene.js
// The home hero services story as pure maths. sceneAt(t) takes a time in seconds
// and returns every attribute the illustration needs at that moment, keyed by
// element name. No React or DOM in here, so the server renders the first frame
// from it and the client repaints from the same function each frame.
//
// Three acts, one per hero frame (lengths match the tab timers):
//   Act 1   0–9s   every platform we work with, then each group and its services
//   Act 2   9–19s  a discovery session: we listen, match each problem to a tool, plan
//   Act 3   19–31s we build it, connect every platform into one system, and it runs
// Each act ends exactly where the next one starts, so autoplay is seamless.

// ── Timing ──────────────────────────────────────────────────────────────────
// Seconds per act. HomeHero passes these to HeroRotator as the tab durations.
export const STORY_DURATIONS = [9, 10, 12];

export const ACTS = STORY_DURATIONS.map((length, index) => {
  const start = STORY_DURATIONS.slice(0, index).reduce((sum, n) => sum + n, 0);
  return { start, end: start + length };
});

// First frame rendered on the server: every platform tile is already on screen
export const INITIAL_T = 1.2;

// Reduced motion shows one still per frame: the full platform grid, the
// finished discovery session, and the integrated system running
export const REDUCED_MOTION_T = [8.9, 15.35, 30.95];

// Story beats used in more than one place
const TO_COMPACT = 9.0; // act 1 grid shrinks to make room for the discovery panel
const FLY = 15.5; // chosen tools fly into the solution plan
const BUILD = 19.3; // the plan becomes the real system
const REJOIN = 21.9; // every other platform connects in
const RUN = 25.2; // the system is live

// ── Layout (viewBox units) ──────────────────────────────────────────────────
export const VIEW = { w: 720, h: 540 };
export const ICON = 56; // tile size at full scale
export const HUB = { x: 250, y: 192, w: 220, h: 160, cx: 360, cy: 272 };
export const ORBIT = { cx: 360, cy: 272, rx: 300, ry: 212 };
export const CHIP_Y = 478;
const SCALE = { grid: 1, compact: 0.6, ring: 0.72 };

// Act 1: four rows of four, one row per group, with the group name on the left
const gridAt = (row, col) => ({ x: 244 + col * 122, y: 74 + row * 100 });
// Act 2: the same grid, shrunk into the left-hand column
const compactAt = (row, col) => ({ x: 58 + col * 58, y: 185 + row * 58 });
// Act 3: sixteen slots round an ellipse, clockwise from the top
const ringAt = (slot) => {
  const a = ((-90 + slot * 22.5) * Math.PI) / 180;
  return { x: ORBIT.cx + ORBIT.rx * Math.cos(a), y: ORBIT.cy + ORBIT.ry * Math.sin(a) };
};

// ── Cast ────────────────────────────────────────────────────────────────────
// One row per group. `services` are the chips shown while that row is in the spotlight.
export const GROUPS = [
  {
    label: "Microsoft 365",
    tiles: [["word", "Word"], ["excel", "Excel"], ["powerpoint", "PowerPoint"], ["outlook", "Outlook"]],
    services: ["Branded templates", "Fill-in forms", "Spreadsheet models"],
  },
  {
    label: "Data & teamwork",
    tiles: [["access", "Access"], ["sqlserver", "SQL Server"], ["sharepoint", "SharePoint"], ["teams", "Teams"]],
    services: ["Database development", "Upgrades & migration", "Intranets"],
  },
  {
    label: "Power Platform",
    tiles: [["powerapps", "Power Apps"], ["powerautomate", "Power Automate"], ["powerbi", "Power BI"], ["powerpages", "Power Pages"]],
    services: ["Business apps", "Workflow automation", "Dashboards"],
  },
  {
    label: "Code & AI",
    tiles: [["python", "Python"], ["javascript", "JavaScript"], ["vba", "VBA"], ["aiagents", "AI agents"]],
    services: ["Custom AI agents", "Web & mobile apps", "VBA macros"],
  },
].map((group, row) => ({ ...group, y: gridAt(row, 0).y }));

// Chip rows under the grid: one per group, then the services that tie it all together.
// Widths are estimates so each pill fits its text; each row is centred under the grid.
export const CHIP_SETS = [...GROUPS.map((g) => g.services), ["Business analysis", "Integration", "Training & support"]].map(
  (labels) => {
    const widths = labels.map((label) => Math.round(label.length * 6.9 + 30));
    const total = widths.reduce((sum, w) => sum + w, 0) + 10 * (labels.length - 1);
    let x = Math.max(40, 427 - total / 2);
    return labels.map((label, i) => {
      const chip = { label, x, w: widths[i] };
      x += widths[i] + 10;
      return chip;
    });
  },
);

// Act 2 discovery session: what the client says, and what we recommend.
// `tiles` are the platforms each fix uses; they light up when the fix appears.
export const CARDS = [
  { quote: "“Quotes take hours to put together”", fix: "Quote templates with AI drafting", tiles: ["word", "aiagents"] },
  { quote: "“Our job data lives in five spreadsheets”", fix: "One database with live reports", tiles: ["sqlserver", "powerbi"] },
  { quote: "“Approvals get lost in email”", fix: "Approvals that route themselves", tiles: ["powerautomate"] },
].map((card, k) => ({
  ...card,
  y: 118 + k * 110,
  fixW: Math.round(card.fix.length * 6.3 + 40),
  at: 10.4 + k * 0.8, // client's point appears
  match: 13.0 + k * 0.6, // our recommendation appears
}));

// Act 3 slots, clockwise from the top. Chosen tools sit spread round the ring.
const RING = [
  "word", "excel", "powerpoint", "powerbi", "powerpages", "powerapps", "powerautomate", "outlook",
  "teams", "sharepoint", "sqlserver", "access", "vba", "aiagents", "python", "javascript",
];
// The tools picked in the discovery session, in the order they fly into the plan
const CHOSEN = RING.filter((id) => CARDS.some((card) => card.tiles.includes(id)));

export const TILES = GROUPS.flatMap((group, row) =>
  group.tiles.map(([id, name], col) => ({
    id,
    name,
    row,
    col,
    i: row * 4 + col,
    slot: RING.indexOf(id),
    chosen: CHOSEN.indexOf(id), // -1 when not part of the plan
    card: CARDS.findIndex((card) => card.tiles.includes(id)),
  })),
);
// Order the other platforms rejoin in act 3 (clockwise round the ring)
const others = RING.filter((id) => !CHOSEN.includes(id));
TILES.forEach((tile) => {
  tile.pop = others.indexOf(tile.id);
});

// Live figures on the hub once it is running
export const KPIS = [
  { label: "Quotes sent", base: 148, every: 1.1 },
  { label: "Approvals automated", base: 312, every: 0.8 },
  { label: "Enquiries triaged by AI", base: 96, every: 1.5 },
];

// Caption bar above the drawing
export const CAPTIONS = [
  { start: 0, end: 2.2, tag: "Since 2000", text: "One team for every Microsoft platform" },
  { start: 2.2, end: 3.7, tag: "Microsoft 365", text: "Word, Excel, PowerPoint and Outlook" },
  { start: 3.7, end: 5.2, tag: "Data", text: "Access, SQL Server, SharePoint and Teams" },
  { start: 5.2, end: 6.7, tag: "Power Platform", text: "Apps, automation, reporting and portals" },
  { start: 6.7, end: 8.2, tag: "Code & AI", text: "Python, JavaScript, VBA and AI agents" },
  { start: 8.2, end: 9.2, tag: "Services", text: "From one template to a whole system" },
  { start: 9.2, end: 12.4, tag: "Listen", text: "Tell us what's slowing your team down" },
  { start: 12.4, end: 15.4, tag: "Analyse", text: "We match each problem to the right tool" },
  { start: 15.4, end: 19.2, tag: "Plan", text: "A clear solution plan before we build" },
  { start: 19.2, end: 21.8, tag: "Build", text: "Built and tested by our own developers" },
  { start: 21.8, end: 25.2, tag: "Integrate", text: "Every platform talking to each other" },
  { start: 25.2, end: 28.6, tag: "Run", text: "Live reports, automated work, AI that helps" },
  { start: 28.6, end: 99, tag: "Support", text: "Still here long after go-live" },
];

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

// Smooth horizontal S-curve between two points, as an SVG path
const curvePath = ([x1, y1], [x2, y2]) => {
  const mid = (x1 + x2) / 2;
  return `M${n(x1)} ${n(y1)} C${n(mid)} ${n(y1)} ${n(mid)} ${n(y2)} ${n(x2)} ${n(y2)}`;
};

// ── Static geometry (rendered once, only dash and opacity animate) ──────────
const byId = Object.fromEntries(TILES.map((tile) => [tile.id, tile]));

// Act 2: a line from each client point to every tool its fix uses
export const CONNECTORS = CARDS.flatMap((card) =>
  card.tiles.map((id) => {
    const tile = byId[id];
    const to = compactAt(tile.row, tile.col);
    return { id: `${card.y}-${id}`, d: curvePath([316, card.y + 48], [to.x, to.y]), at: card.match - 0.5 };
  }),
);

// Act 3: a spoke from the hub's edge to each ring slot, stopping short of the tile.
// Tiles above the hub stop further out, so the spoke doesn't run through the label below them.
export const SPOKES = TILES.map((tile) => {
  const ring = ringAt(tile.slot);
  const dx = ring.x - HUB.cx;
  const dy = ring.y - HUB.cy;
  const len = Math.hypot(dx, dy);
  const gap = dy < -40 ? 50 : 28;
  const k = Math.min((HUB.w / 2 + 6) / Math.abs(dx || 1e-6), (HUB.h / 2 + 6) / Math.abs(dy || 1e-6));
  return {
    id: tile.id,
    chosen: tile.chosen >= 0,
    x1: n(HUB.cx + dx * k),
    y1: n(HUB.cy + dy * k),
    x2: n(ring.x - (dx / len) * gap),
    y2: n(ring.y - (dy / len) * gap),
  };
});

// ── Story beats ─────────────────────────────────────────────────────────────
// Act 1 spotlight: row r is lit for 1.5s each, starting at 2.2s
const spot = (r, t) => {
  const start = 2.2 + r * 1.5;
  return prog(t, start - 0.15, 0.3) * (1 - prog(t, start + 1.35, 0.3));
};
// 1 while any row is in the spotlight
const spotOn = (t) => prog(t, 2.0, 0.3) * (1 - prog(t, 8.05, 0.3));
// Rows outside the spotlight dim back
const rowDim = (r, t) => 1 - 0.62 * spotOn(t) * (1 - spot(r, t));

// Position, scale and state of one platform tile
function tileState(tile, t) {
  const ring = ringAt(tile.slot);

  // Tools not in the plan rejoin in act 3, popping straight into their ring slot
  if (tile.chosen < 0 && t >= REJOIN) {
    const start = REJOIN + tile.pop * 0.07;
    const p = prog(t, start, 0.45);
    return {
      x: ring.x,
      y: ring.y,
      scale: SCALE.ring * easeBack(p),
      opacity: prog(t, start, 0.2),
      label: prog(p, 0.5, 0.5),
      glow: 0,
      badge: 0,
    };
  }

  const grid = gridAt(tile.row, tile.col);
  const compact = compactAt(tile.row, tile.col);
  // Act 1 entrance: a diagonal wave from the top-left corner
  const enter = 0.1 * (tile.row + tile.col);
  const appear = prog(t, enter, 0.45);
  const toCompact = easeInOut(prog(t, TO_COMPACT + tile.i * 0.02, 0.9));
  // A gentle float while the grid is on show
  const bob = 2.2 * Math.sin(t * 1.3 + tile.i * 0.9) * (1 - toCompact);
  const lit = spot(tile.row, t) * (1 - toCompact);

  const state = {
    x: lerp(grid.x, compact.x, toCompact),
    y: lerp(grid.y, compact.y, toCompact) + bob,
    scale: easeBack(appear) * lerp(SCALE.grid * (1 + 0.07 * lit), SCALE.compact, toCompact),
    opacity: prog(t, enter, 0.2) * lerp(rowDim(tile.row, t), 1, toCompact),
    label: prog(appear, 0.5, 0.5) * (1 - prog(t, TO_COMPACT, 0.3)),
    glow: 0.85 * lit,
    badge: 0,
  };

  if (tile.chosen >= 0) {
    // Lights up when its recommendation appears, then flies into the plan
    const matched = prog(t, CARDS[tile.card].match, 0.35);
    const fly = easeInOut(prog(t, FLY + tile.chosen * 0.12, 1.1));
    state.x = lerp(state.x, ring.x, fly);
    state.y = lerp(state.y, ring.y, fly);
    state.scale = lerp(state.scale, SCALE.ring, fly);
    state.glow = Math.max(state.glow, 0.8 * matched * (1 - prog(t, BUILD + 0.1, 0.6)));
    state.badge = matched * (1 - prog(t, BUILD + 0.1, 0.4));
    state.badgeScale = easeBack(matched);
    state.label = Math.max(state.label, prog(fly, 0.6, 0.4));
  } else {
    // Steps back while the chosen tools are matched, then leaves the stage
    state.opacity *= lerp(1, 0.28, prog(t, 12.6, 0.6)) * (1 - prog(t, 15.4, 0.5));
  }
  return state;
}

function writeTile(S, tile, s, pinged, pingPhase) {
  const key = `tile.${tile.id}`;
  S[key] = { transform: `translate(${n(s.x)} ${n(s.y)})`, opacity: n(s.opacity) };
  S[`${key}.icon`] = { transform: `scale(${n(s.scale)})` };
  S[`${key}.glow`] = { opacity: n(s.glow) };
  // Only the tools picked in the discovery session have a badge
  if (tile.chosen >= 0) {
    S[`${key}.badge`] = {
      opacity: n(s.badge),
      transform: `translate(24 -24) scale(${n(s.badgeScale)})`,
    };
  }
  // The label stays a readable size, so it sits below the scaled icon rather than inside it
  S[`${key}.label`] = {
    transform: `translate(0 ${n((ICON / 2) * s.scale + 16)})`,
    opacity: n(s.label),
  };
  // Act 3: one tile at a time sends out a ring to show the system at work
  const pinging = tile.slot === pinged;
  S[`${key}.ping`] = {
    r: pinging ? n(22 + 20 * pingPhase) : 22,
    opacity: pinging ? n(0.75 * (1 - pingPhase)) : 0,
  };
}

function writeGroups(S, t) {
  GROUPS.forEach((_, r) => {
    S[`group.${r}`] = {
      opacity: n(prog(t, 0.2 + r * 0.12, 0.4) * rowDim(r, t) * (1 - prog(t, TO_COMPACT, 0.35))),
    };
  });
  CHIP_SETS.forEach((_, k) => {
    // One chip row per group spotlight, then the final row until the grid shrinks
    const o = k < GROUPS.length ? spot(k, t) : prog(t, 8.15, 0.3) * (1 - prog(t, TO_COMPACT, 0.4));
    S[`chips.${k}`] = { opacity: n(o), transform: `translate(0 ${n((1 - o) * 8)})` };
  });
  S["compact.title"] = { opacity: n(prog(t, 10.0, 0.4) * (1 - prog(t, 15.4, 0.4))) };
}

function writeDiscovery(S, t) {
  const shown = easeOut(prog(t, 9.9, 0.6));
  const gone = easeInOut(prog(t, 15.4, 0.6));
  S.panel = { transform: `translate(${n(30 * (1 - shown) + 30 * gone)} 0)`, opacity: n(shown * (1 - gone)) };

  CARDS.forEach((card, k) => {
    const p = easeOut(prog(t, card.at, 0.45));
    S[`card.${k}`] = { opacity: n(p), transform: `translate(0 ${n(10 * (1 - p))})` };
    const m = prog(t, card.match, 0.35);
    S[`card.${k}.fix`] = { opacity: n(m), transform: `translate(${n(-8 * (1 - m))} 0)` };
  });
  S["panel.done"] = { opacity: n(prog(t, 14.7, 0.4)) };

  // pathLength is 1, so "1 1" with an offset draws each connector in
  CONNECTORS.forEach((link, i) => {
    const drawn = easeOut(prog(t, link.at, 0.5));
    S[`conn.${i}`] = {
      strokeDashoffset: n(1 - drawn),
      opacity: drawn > 0 ? n(1 - prog(t, 15.3, 0.4)) : 0,
    };
  });
}

function writeHub(S, t) {
  S["hub.plan"] = { opacity: n(prog(t, 15.9, 0.5) * (1 - prog(t, BUILD, 0.5))) };

  const built = easeOut(prog(t, BUILD, 0.7));
  S.hub = {
    opacity: n(built),
    transform: `translate(${HUB.cx} ${HUB.cy}) scale(${n(lerp(0.94, 1, built))}) translate(${-HUB.cx} ${-HUB.cy})`,
  };

  // Build: a progress bar fills, then gives way to live figures
  const progress = easeInOut(prog(t, BUILD + 0.3, 2.2));
  S["hub.build"] = { opacity: n(prog(t, BUILD + 0.2, 0.3) * (1 - prog(t, 22.1, 0.35))) };
  S["hub.bar"] = { width: n(184 * progress) };
  S["hub.pct"] = { text: `${Math.round(progress * 100)}%` };

  S["hub.run"] = { opacity: n(prog(t, 22.4, 0.5)) };
  S["hub.live"] = { opacity: n(0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * 4))) };
  // Figures count up, then keep ticking
  const count = easeOut(prog(t, 22.5, 1.4));
  KPIS.forEach((kpi, k) => {
    const value = t < 23.9 ? Math.round(kpi.base * count) : kpi.base + Math.floor((t - 23.9) / kpi.every);
    S[`kpi.${k}`] = { text: commas(value) };
  });
}

function writeSpokes(S, t) {
  SPOKES.forEach((spoke) => {
    const tile = byId[spoke.id];
    if (spoke.chosen) {
      // Dashed plan lines while the solution is still on paper
      S[`spoke.${spoke.id}.plan`] = {
        opacity: n(prog(t, 16.3 + tile.chosen * 0.12, 0.4) * (1 - prog(t, BUILD + 0.2, 0.4))),
      };
    }
    const start = spoke.chosen ? BUILD + 0.2 + tile.chosen * 0.1 : REJOIN + tile.pop * 0.07 + 0.1;
    const drawn = easeOut(prog(t, start, 0.6));
    S[`spoke.${spoke.id}`] = { strokeDashoffset: n(1 - drawn), opacity: drawn > 0 ? 1 : 0 };

    // A data pulse per spoke once drawn: even slots flow in to the hub, odd slots flow out
    const flow = start + 0.6;
    const p = frac((t - flow) / 1.6 + tile.slot * 0.137);
    const q = tile.slot % 2 ? p : 1 - p;
    S[`pulse.${spoke.id}`] = {
      cx: n(lerp(spoke.x1, spoke.x2, q)),
      cy: n(lerp(spoke.y1, spoke.y2, q)),
      opacity: t >= flow ? n(Math.sin(Math.PI * p)) : 0,
    };
  });

  // The orbit line draws round once everything is joining up
  const orbit = easeInOut(prog(t, REJOIN, 1.8));
  S.orbit = { strokeDashoffset: n(1 - orbit), opacity: orbit > 0 ? 1 : 0 };
}

function writeEffects(S, t) {
  S["fx.grid"] = { opacity: n(0.9 * (1 - prog(t, TO_COMPACT, 1.0))) };
  S["fx.hub"] = { opacity: n(0.45 * prog(t, 15.9, 1.0) + 0.55 * prog(t, BUILD, 1.2)) };
  // One ring pulses out from the hub as the last platform connects
  const ring = prog(t, 23.4, 1.3);
  S["fx.ring"] = {
    r: n(lerp(90, 380, easeOut(ring))),
    opacity: ring > 0 && ring < 1 ? n(0.55 * (1 - ring)) : 0,
  };
}

// ── Public ──────────────────────────────────────────────────────────────────
export function sceneAt(t) {
  const S = {};
  // Which ring slot is pinging (stride of 5 jumps round the ring, never next door)
  const pinged = t >= RUN ? (Math.floor((t - RUN) / 0.6) * 5) % RING.length : -1;
  const pingPhase = t >= RUN ? frac((t - RUN) / 0.6) : 0;

  TILES.forEach((tile) => writeTile(S, tile, tileState(tile, t), pinged, pingPhase));
  writeGroups(S, t);
  writeDiscovery(S, t);
  writeHub(S, t);
  writeSpokes(S, t);
  writeEffects(S, t);
  CAPTIONS.forEach((caption, i) => {
    S[`caption.${i}`] = { "data-on": t >= caption.start && t < caption.end ? "true" : "false" };
  });

  return S;
}
