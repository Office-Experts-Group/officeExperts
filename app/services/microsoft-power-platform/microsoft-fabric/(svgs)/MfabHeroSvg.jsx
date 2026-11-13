// /app/services/microsoft-power-platform/microsoft-fabric/(svgs)/MfabHeroSvg.jsx
// Hero illustration: an isometric Fabric "platform". OneLake is the pool set
// into the slab. Sources at the front (a spreadsheet with a flagged cell, a
// stack of files, a database) send data into the pool along pipelines, and
// the workloads around the back read from it: a warehouse stack, a live
// dashboard screen, a real-time beacon and a small machine learning model.
// No text inside the SVG, so it never depends on the site font.
// The only animated SVG on the page: flowClass animates the dashed pipelines,
// liveClass pulses the ring around the real-time beacon.
// Colours (tokens): #046999 $accent, #034e72 $accent-dark, #6fc3e8
// $accent-on-dark, #e8f4fa $accent-light, #cfe6f2 / #b7d7e8 / #9fcbe1
// (accent washes for shaded faces), #111820 $dark-bg, #18232e $dark-surface,
// #1a2a3a $dark-mid, #0d1b2a $text-primary, #e3e8ec $line, #c0392b
// $replace-x, #ffffff $white.

// ── Isometric helpers ───────────────────────────────────────────────────────
const S = 34; // px per grid unit
const OX = 320;
const OY = 92;

const iso = (x, y, z = 0) => [
  +(OX + (x - y) * S * 0.866).toFixed(1),
  +(OY + (x + y) * S * 0.5 - z * S).toFixed(1),
];
const pts = (list) => list.map((p) => p.join(",")).join(" ");
const line = (list) =>
  list.map((p, i) => `${i ? "L" : "M"}${p[0]} ${p[1]}`).join("");

const PALETTES = {
  light: { top: "#ffffff", left: "#e8f4fa", right: "#cfe6f2" },
  mid: { top: "#e8f4fa", left: "#cfe6f2", right: "#9fcbe1" },
  slab: { top: "#ffffff", left: "#d7e9f3", right: "#b7d7e8" },
  dark: { top: "#1a2a3a", left: "#111820", right: "#0b131a" },
  accent: { top: "#2a8bbd", left: "#046999", right: "#034e72" },
};

// Box with its three visible faces (top, front-left, front-right)
const Box = ({ x, y, z, w, d, h, tone = "light" }) => {
  const c = PALETTES[tone];
  return (
    <g>
      <polygon
        points={pts([
          iso(x, y + d, z),
          iso(x + w, y + d, z),
          iso(x + w, y + d, z + h),
          iso(x, y + d, z + h),
        ])}
        fill={c.left}
      />
      <polygon
        points={pts([
          iso(x + w, y, z),
          iso(x + w, y + d, z),
          iso(x + w, y + d, z + h),
          iso(x + w, y, z + h),
        ])}
        fill={c.right}
      />
      <polygon
        points={pts([
          iso(x, y, z + h),
          iso(x + w, y, z + h),
          iso(x + w, y + d, z + h),
          iso(x, y + d, z + h),
        ])}
        fill={c.top}
      />
    </g>
  );
};

// Upright cylinder centred on (cx, cy)
const Cylinder = ({ cx, cy, z, r, h, side, top, bands = [] }) => {
  const [tx, ty] = iso(cx, cy, z + h);
  const [, by] = iso(cx, cy, z);
  const rx = +(r * S * 1.2247).toFixed(1);
  const ry = +(r * S * 0.7071).toFixed(1);
  return (
    <g>
      <path
        d={`M${tx - rx} ${ty}V${by}A${rx} ${ry} 0 0 0 ${tx + rx} ${by}V${ty}Z`}
        fill={side}
      />
      {bands.map((bz) => {
        const [, bandY] = iso(cx, cy, bz);
        return (
          <path
            key={bz}
            d={`M${tx - rx} ${bandY}A${rx} ${ry} 0 0 0 ${tx + rx} ${bandY}`}
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.5"
            strokeWidth="1.4"
          />
        );
      })}
      <ellipse cx={tx} cy={ty} rx={rx} ry={ry} fill={top} />
    </g>
  );
};

// ── Scene geometry ──────────────────────────────────────────────────────────
const SLAB = { x: 0, y: 0, w: 10, d: 10, h: 0.6 };
const TOP = SLAB.h;
const POOL = { x0: 2.6, x1: 7.4, y0: 3.2, y1: 8, z: 0.25 };

const slabTopOuter = [
  iso(0, 0, TOP),
  iso(10, 0, TOP),
  iso(10, 10, TOP),
  iso(0, 10, TOP),
];
const poolRim = [
  iso(POOL.x0, POOL.y0, TOP),
  iso(POOL.x1, POOL.y0, TOP),
  iso(POOL.x1, POOL.y1, TOP),
  iso(POOL.x0, POOL.y1, TOP),
];
const slabTopWithHole = `${line(slabTopOuter)}Z${line(poolRim)}Z`;

// Ripples on the water: short sine lines running along x
const ripple = (y, x0, x1) => {
  const p = [];
  for (let x = x0; x <= x1 + 0.001; x += 0.2) {
    p.push(iso(x, y, POOL.z + Math.sin((x - x0) * 3.2) * 0.05));
  }
  return line(p);
};

// Pipelines on the slab surface (all in grid units)
const PIPES = [
  [
    [1.6, 9.2],
    [3.6, 9.2],
    [3.6, 8],
  ], // spreadsheet into the pool
  [
    [1.5, 5.6],
    [2.6, 5.6],
  ], // files into the pool
  [
    [8.3, 9.1],
    [6.4, 9.1],
    [6.4, 8],
  ], // database into the pool
  [
    [3.2, 3.2],
    [3.2, 1.6],
    [2.4, 1.6],
  ], // pool to warehouse
  [
    [5.8, 3.2],
    [5.8, 1.3],
  ], // pool to dashboard
  [
    [7.4, 4.4],
    [8.35, 4.4],
  ], // pool to real-time beacon
  [
    [7.4, 6.7],
    [8.2, 6.7],
  ], // pool to ML model
].map((path) => line(path.map(([x, y]) => iso(x, y, TOP + 0.01))));

// Small data packets riding the pipelines
const PACKETS = [
  [2.6, 9.05],
  [3.45, 8.55],
  [7.4, 8.95],
  [3.05, 2.3],
  [5.65, 2.2],
];

// Dashboard screen bars, drawn on its front-left face (plane y = SCREEN_Y)
const SCREEN = { x: 4.2, y: 0.9, z: 0.8, w: 3.6, d: 0.25, h: 2.6 };
const SCREEN_Y = SCREEN.y + SCREEN.d + 0.01;
const BARS = [0.55, 0.9, 0.7, 1.15, 1.0, 1.45];
const barPolys = BARS.map((bh, i) => {
  const bx = SCREEN.x + 0.45 + i * 0.5;
  const bz = SCREEN.z + 0.4;
  return pts([
    iso(bx, SCREEN_Y, bz),
    iso(bx + 0.3, SCREEN_Y, bz),
    iso(bx + 0.3, SCREEN_Y, bz + bh),
    iso(bx, SCREEN_Y, bz + bh),
  ]);
});
const trendLine = line(
  BARS.map((bh, i) =>
    iso(SCREEN.x + 0.6 + i * 0.5, SCREEN_Y, SCREEN.z + 0.6 + bh + 0.25),
  ),
);
const screenInset = pts([
  iso(SCREEN.x + 0.2, SCREEN_Y, SCREEN.z + 0.2),
  iso(SCREEN.x + SCREEN.w - 0.2, SCREEN_Y, SCREEN.z + 0.2),
  iso(SCREEN.x + SCREEN.w - 0.2, SCREEN_Y, SCREEN.z + SCREEN.h - 0.2),
  iso(SCREEN.x + 0.2, SCREEN_Y, SCREEN.z + SCREEN.h - 0.2),
]);
const kpiBar = pts([
  iso(SCREEN.x + 0.45, SCREEN_Y, SCREEN.z + 2.15),
  iso(SCREEN.x + 1.45, SCREEN_Y, SCREEN.z + 2.15),
  iso(SCREEN.x + 1.45, SCREEN_Y, SCREEN.z + 2.3),
  iso(SCREEN.x + 0.45, SCREEN_Y, SCREEN.z + 2.3),
]);

// Spreadsheet source: flat tile with a grid and one flagged cell
const SHEET = { x: 0.4, y: 8.6, z: TOP, w: 1.2, d: 1.2, h: 0.18 };
const sheetZ = SHEET.z + SHEET.h + 0.005;
const sheetGrid = [
  ...[0.4, 0.8].map((o) =>
    line([
      iso(SHEET.x + o, SHEET.y, sheetZ),
      iso(SHEET.x + o, SHEET.y + SHEET.d, sheetZ),
    ]),
  ),
  ...[0.3, 0.6, 0.9].map((o) =>
    line([
      iso(SHEET.x, SHEET.y + o, sheetZ),
      iso(SHEET.x + SHEET.w, SHEET.y + o, sheetZ),
    ]),
  ),
].join("");
const sheetHeader = pts([
  iso(SHEET.x, SHEET.y, sheetZ),
  iso(SHEET.x + SHEET.w, SHEET.y, sheetZ),
  iso(SHEET.x + SHEET.w, SHEET.y + 0.3, sheetZ),
  iso(SHEET.x, SHEET.y + 0.3, sheetZ),
]);
const sheetFlag = pts([
  iso(SHEET.x + 0.4, SHEET.y + 0.6, sheetZ),
  iso(SHEET.x + 0.8, SHEET.y + 0.6, sheetZ),
  iso(SHEET.x + 0.8, SHEET.y + 0.9, sheetZ),
  iso(SHEET.x + 0.4, SHEET.y + 0.9, sheetZ),
]);

// Machine learning model: nodes floating above a pad
const ML_NODES = [
  [8.5, 6.3, 2.0],
  [9.2, 6.5, 2.5],
  [8.8, 7.1, 1.65],
  [9.4, 7.2, 2.15],
].map(([x, y, z]) => iso(x, y, z));
const ML_LINKS = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [0, 3],
];

// Real-time beacon
const BEACON = { cx: 8.7, cy: 4.4, z: TOP, r: 0.32, h: 2.1 };
const [beaconX, beaconY] = iso(
  BEACON.cx,
  BEACON.cy,
  BEACON.z + BEACON.h + 0.35,
);

const shadow = pts([
  iso(0.3, 0.3, -0.25),
  iso(10.3, 0.3, -0.25),
  iso(10.3, 10.3, -0.25),
  iso(0.3, 10.3, -0.25),
]);

const MfabHeroSvg = ({ flowClass, liveClass }) => (
  <svg
    viewBox="0 0 640 470"
    role="img"
    aria-labelledby="mfab-hero-title mfab-hero-desc"
  >
    <title id="mfab-hero-title">
      Microsoft Fabric as one connected data platform
    </title>
    <desc id="mfab-hero-desc">
      An illustration of a platform with OneLake as a pool at its centre.
      Spreadsheets, files and a database send data into the pool along
      pipelines, and the workloads around it read from the same water: a data
      warehouse, a live dashboard, a real-time alert beacon and a machine
      learning model.
    </desc>
    <defs>
      <clipPath id="mfab-hero-slab-clip">
        <path d={slabTopWithHole} clipRule="evenodd" />
      </clipPath>
    </defs>

    {/* Ground shadow */}
    <polygon points={shadow} fill="#0d1b2a" fillOpacity="0.05" />

    {/* Slab sides */}
    <Box {...SLAB} z={0} tone="slab" />

    {/* Pool: inner walls, water, ripples */}
    <polygon
      points={pts([
        iso(POOL.x0, POOL.y0, POOL.z),
        iso(POOL.x1, POOL.y0, POOL.z),
        iso(POOL.x1, POOL.y0, TOP),
        iso(POOL.x0, POOL.y0, TOP),
      ])}
      fill="#9fcbe1"
    />
    <polygon
      points={pts([
        iso(POOL.x0, POOL.y0, POOL.z),
        iso(POOL.x0, POOL.y1, POOL.z),
        iso(POOL.x0, POOL.y1, TOP),
        iso(POOL.x0, POOL.y0, TOP),
      ])}
      fill="#b7d7e8"
    />
    <polygon
      points={pts([
        iso(POOL.x0, POOL.y0, POOL.z),
        iso(POOL.x1, POOL.y0, POOL.z),
        iso(POOL.x1, POOL.y1, POOL.z),
        iso(POOL.x0, POOL.y1, POOL.z),
      ])}
      fill="#046999"
    />
    <g
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeOpacity="0.8"
    >
      <path d={ripple(4.4, 3.4, 5.4)} />
      <path d={ripple(5.6, 4.6, 6.8)} />
      <path d={ripple(6.9, 3.2, 4.8)} />
    </g>
    <path
      d={ripple(7.4, 5.4, 6.8)}
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.5"
      strokeWidth="1.4"
      strokeLinecap="round"
    />

    {/* Slab top with the pool cut out, plus a faint grid */}
    <path d={slabTopWithHole} fill="#ffffff" fillRule="evenodd" />
    <g clipPath="url(#mfab-hero-slab-clip)" stroke="#e3e8ec" strokeWidth="1">
      {Array.from({ length: 9 }, (_, i) => i + 1).map((n) => (
        <g key={n}>
          <path d={line([iso(n, 0, TOP), iso(n, 10, TOP)])} />
          <path d={line([iso(0, n, TOP), iso(10, n, TOP)])} />
        </g>
      ))}
    </g>
    <path
      d={line(poolRim)}
      fill="none"
      stroke="#034e72"
      strokeOpacity="0.35"
      strokeWidth="1"
    />

    {/* Pipelines */}
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      {PIPES.map((d) => (
        <path key={d} d={d} stroke="#cfe6f2" strokeWidth="7" />
      ))}
      {PIPES.map((d) => (
        <path
          key={`f-${d}`}
          className={flowClass}
          d={d}
          stroke="#046999"
          strokeWidth="2.2"
        />
      ))}
    </g>

    {/* Back left: warehouse stack */}
    <Box x={0.6} y={0.6} z={TOP} w={1.8} d={1.8} h={0.55} tone="mid" />
    <Box x={0.6} y={0.6} z={TOP + 0.67} w={1.8} d={1.8} h={0.55} tone="mid" />
    <Box
      x={0.6}
      y={0.6}
      z={TOP + 1.34}
      w={1.8}
      d={1.8}
      h={0.55}
      tone="accent"
    />

    {/* Back: dashboard screen on a plinth */}
    <Box x={5.6} y={0.8} z={TOP} w={0.8} d={0.5} h={0.2} tone="dark" />
    <Box {...SCREEN} tone="dark" />
    <polygon points={screenInset} fill="#18232e" />
    <polygon points={kpiBar} fill="#ffffff" fillOpacity="0.85" />
    {barPolys.map((p, i) => (
      <polygon
        key={p}
        points={p}
        fill={i === BARS.length - 1 ? "#6fc3e8" : "#046999"}
      />
    ))}
    <path
      d={trendLine}
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />

    {/* Left: stack of files */}
    <Box x={0.45} y={5.05} z={TOP} w={1.05} d={1.1} h={0.16} tone="mid" />
    <Box x={0.5} y={5.0} z={TOP + 0.22} w={1.05} d={1.1} h={0.16} tone="mid" />
    <Box
      x={0.4}
      y={5.1}
      z={TOP + 0.44}
      w={1.05}
      d={1.1}
      h={0.16}
      tone="accent"
    />

    {/* Right: real-time beacon */}
    <Cylinder {...BEACON} side="#046999" top="#2a8bbd" bands={[1.4, 2.1]} />
    <ellipse
      className={liveClass}
      cx={beaconX}
      cy={beaconY}
      rx="9"
      ry="9"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <circle
      cx={beaconX}
      cy={beaconY}
      r="7"
      fill="#6fc3e8"
      stroke="#ffffff"
      strokeWidth="2"
    />

    {/* Front left: spreadsheet with a flagged cell */}
    <Box {...SHEET} tone="mid" />
    <polygon points={sheetHeader} fill="#046999" />
    <polygon points={sheetFlag} fill="#c0392b" fillOpacity="0.85" />
    <path d={sheetGrid} stroke="#046999" strokeOpacity="0.35" strokeWidth="1" />

    {/* Right: machine learning model above a pad */}
    <Box x={8.2} y={6.1} z={TOP} w={1.4} d={1.3} h={0.14} tone="dark" />
    <g stroke="#046999" strokeWidth="1.4" strokeDasharray="2 3">
      <path d={line([iso(8.9, 6.75, TOP + 0.14), iso(8.9, 6.75, 1.5)])} />
    </g>
    <g stroke="#111820" strokeWidth="1.4">
      {ML_LINKS.map(([a, b]) => (
        <path key={`${a}-${b}`} d={line([ML_NODES[a], ML_NODES[b]])} />
      ))}
    </g>
    {ML_NODES.map(([cx, cy], i) => (
      <circle
        key={`${cx}-${cy}`}
        cx={cx}
        cy={cy}
        r="8"
        fill={i === 1 ? "#6fc3e8" : "#111820"}
        stroke="#ffffff"
        strokeWidth="2"
      />
    ))}

    {/* Data packets riding the pipelines */}
    {PACKETS.map(([x, y]) => (
      <Box
        key={`${x}-${y}`}
        x={x - 0.15}
        y={y - 0.15}
        z={TOP}
        w={0.3}
        d={0.3}
        h={0.3}
        tone="accent"
      />
    ))}

    {/* Front right: database */}
    <Cylinder
      cx={8.9}
      cy={9.1}
      z={TOP}
      r={0.55}
      h={1.3}
      side="#111820"
      top="#1a2a3a"
      bands={[1.05, 1.5]}
    />
  </svg>
);

export default MfabHeroSvg;
