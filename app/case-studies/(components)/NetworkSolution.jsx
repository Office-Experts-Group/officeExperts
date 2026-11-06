// app/case-studies/(components)/NetworkSolution.jsx
//
// Decorative hero illustration: a scattered, disconnected set of "software"
// tiles (spreadsheets, databases, docs...) that drift into place, wire up to a
// central hub and lock in as one working solution, then loop.
//
// Pure SVG + CSS keyframes, so it stays a server component (no JS shipped).
// Every element's *resting* style is the finished, connected state; the
// keyframes supply the broken state. That means prefers-reduced-motion just
// switches the animations off and visitors see the solved network.
import styles from "@/styles/networkSolution.module.scss";

const HUB = { x: 280, y: 240 };

// x/y: final position. dx/dy/rot: how far out of place it starts.
// lx/ly/anchor: label offset, always on the side facing away from the hub
// so labels never sit on top of a connecting line.
const NODES = [
  {
    id: "sheet",
    label: "Spreadsheets",
    x: 280,
    y: 70,
    dx: -30,
    dy: -24,
    rot: -14,
    delay: 0,
    lx: 0,
    ly: -46,
    anchor: "middle",
  },
  {
    id: "db",
    label: "Databases",
    x: 427,
    y: 155,
    dx: 44,
    dy: -22,
    rot: 18,
    delay: 0.12,
    lx: 44,
    ly: 4,
    anchor: "start",
  },
  {
    id: "flow",
    label: "Automation",
    x: 427,
    y: 325,
    dx: 38,
    dy: 30,
    rot: -10,
    delay: 0.24,
    lx: 44,
    ly: 4,
    anchor: "start",
  },
  {
    id: "chart",
    label: "Reporting",
    x: 280,
    y: 410,
    dx: -22,
    dy: 30,
    rot: 12,
    delay: 0.36,
    lx: 0,
    ly: 54,
    anchor: "middle",
  },
  {
    id: "form",
    label: "Forms & apps",
    x: 133,
    y: 325,
    dx: -44,
    dy: 18,
    rot: -20,
    delay: 0.48,
    lx: -44,
    ly: 4,
    anchor: "end",
  },
  {
    id: "doc",
    label: "Documents",
    x: 133,
    y: 155,
    dx: -34,
    dy: -30,
    rot: 9,
    delay: 0.6,
    lx: -44,
    ly: 4,
    anchor: "end",
  },
];

const SPOKES = NODES.map((n, i) => ({ ...n, linkDelay: i * 0.06 }));
const RING = NODES.map((n, i) => {
  const next = NODES[(i + 1) % NODES.length];
  return {
    id: `${n.id}-${next.id}`,
    x1: n.x,
    y1: n.y,
    x2: next.x,
    y2: next.y,
    linkDelay: 0.2 + i * 0.05,
  };
});

// Simple generic glyphs drawn around 0,0 inside a 64px tile
const Glyph = ({ type }) => {
  switch (type) {
    case "sheet":
      return (
        <>
          <rect x="-14" y="-12" width="28" height="24" rx="3" />
          <path d="M-14 -4H14M-14 4H14M-4 -12V12M5 -12V12" />
        </>
      );
    case "db":
      return (
        <>
          <ellipse cx="0" cy="-9" rx="12" ry="4" />
          <path d="M-12 -9V9A12 4 0 0 0 12 9V-9M-12 0A12 4 0 0 0 12 0" />
        </>
      );
    case "flow":
      return (
        <>
          <circle cx="-10" cy="-8" r="4" />
          <circle cx="10" cy="-8" r="4" />
          <circle cx="0" cy="10" r="4" />
          <path d="M-6 -8H6M-8 -4.5L-2 6.5M8 -4.5L2 6.5" />
        </>
      );
    case "chart":
      return (
        <>
          <path d="M-14 13H14" />
          <rect x="-10" y="3" width="5" height="10" rx="1" />
          <rect x="-2.5" y="-4" width="5" height="17" rx="1" />
          <rect x="5" y="-11" width="5" height="24" rx="1" />
        </>
      );
    case "form":
      return (
        <>
          <rect x="-14" y="-12" width="28" height="24" rx="3" />
          <path d="M-14 -5H14M-9 2H9M-9 7H4" />
        </>
      );
    case "doc":
    default:
      return (
        <>
          <path d="M-10 -14H5L11 -8V14H-10Z" />
          <path d="M-5 -3H6M-5 3H6M-5 9H2" />
        </>
      );
  }
};

const NetworkSolution = () => (
  <div className={styles.visual}>
    <svg
      className={styles.svg}
      viewBox="0 0 560 480"
      role="img"
      aria-labelledby="ns-title"
    >
      <title id="ns-title">
        Disconnected business software coming together into one connected
        solution
      </title>

      <defs>
        <pattern
          id="ns-dots"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="12" cy="12" r="1" className={styles.gridDot} />
        </pattern>
        <radialGradient id="ns-fade-grad">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="#000" />
        </radialGradient>
        <mask id="ns-fade">
          <rect width="560" height="480" fill="url(#ns-fade-grad)" />
        </mask>
        <radialGradient id="ns-glow-grad">
          <stop offset="0%" className={styles.glowStopInner} />
          <stop offset="100%" className={styles.glowStopOuter} />
        </radialGradient>
      </defs>

      {/* Background dot grid, faded out towards the edges */}
      <rect
        width="560"
        height="480"
        fill="url(#ns-dots)"
        mask="url(#ns-fade)"
      />

      {/* Glow behind the hub once everything connects */}
      <circle
        cx={HUB.x}
        cy={HUB.y}
        r="190"
        fill="url(#ns-glow-grad)"
        className={styles.glow}
      />

      {/* Outer ring: tiles talking to each other */}
      {RING.map((l) => (
        <line
          key={l.id}
          className={`${styles.link} ${styles.ring}`}
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          pathLength="1"
          style={{ "--delay": `${l.linkDelay}s` }}
        />
      ))}

      {/* Spokes: each tile wired into the hub */}
      {SPOKES.map((n) => (
        <line
          key={n.id}
          className={styles.link}
          x1={HUB.x}
          y1={HUB.y}
          x2={n.x}
          y2={n.y}
          pathLength="1"
          style={{ "--delay": `${n.linkDelay}s` }}
        />
      ))}

      {/* Data packets running out along the spokes */}
      {SPOKES.map((n) => (
        <circle
          key={`p-${n.id}`}
          className={styles.packet}
          cx={HUB.x}
          cy={HUB.y}
          r="3.5"
          style={{
            "--tx": `${n.x - HUB.x}px`,
            "--ty": `${n.y - HUB.y}px`,
            "--delay": `${n.linkDelay * 2}s`,
          }}
        />
      ))}

      {/* Tiles */}
      {NODES.map((n) => {
        const dist = Math.hypot(HUB.x - n.x, HUB.y - n.y);
        const ux = (HUB.x - n.x) / dist;
        const uy = (HUB.y - n.y) / dist;

        return (
          <g
            key={n.id}
            className={styles.node}
            style={{
              "--dx": `${n.dx}px`,
              "--dy": `${n.dy}px`,
              "--rot": `${n.rot}deg`,
              "--delay": `${n.delay}s`,
            }}
          >
            <g transform={`translate(${n.x} ${n.y})`}>
              {/* Broken connector stub, only visible in the scattered state */}
              <line
                className={styles.stub}
                x1={ux * 42}
                y1={uy * 42}
                x2={ux * 66}
                y2={uy * 66}
              />
              <rect
                className={styles.tile}
                x="-32"
                y="-32"
                width="64"
                height="64"
                rx="16"
              />
              <g className={styles.glyph}>
                <Glyph type={n.id} />
              </g>
              <text
                className={styles.label}
                x={n.lx}
                y={n.ly}
                textAnchor={n.anchor}
              >
                {n.label}
              </text>
            </g>
          </g>
        );
      })}

      {/* Hub */}
      <g transform={`translate(${HUB.x} ${HUB.y})`}>
        <circle className={styles.hubRing} r="58" />
        <circle className={styles.hubCore} r="42" />
        <g className={styles.hubAlert}>
          <path d="M0 -13V3" />
          <circle cx="0" cy="11" r="2" />
        </g>
        <path className={styles.check} d="M-14 1L-4 11L15 -9" pathLength="1" />
      </g>
    </svg>
  </div>
);

export default NetworkSolution;
