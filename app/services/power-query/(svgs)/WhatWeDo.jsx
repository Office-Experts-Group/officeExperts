// /app/services/power-query/(svgs)/WhatWeDo.jsx
// Animated radial hub showing the 8 Power Query capability areas, on a light background.
// Server component: no hooks or client JS. Motion is CSS (whatWeDo.module.scss) plus
// SMIL <animateMotion> for the data packets. The labels themselves never move.

import styles from "@/styles/whatWeDo.module.scss";

// ── Layout constants (SVG user units, viewBox 720 x 560) ──
const HUB = { x: 360, y: 280 };
const CARD_W = 230;
const CARD_H = 64;
const EDGE = 8; // gap between the outer cards and the viewBox edge
const TEXT_X = 70; // where the label starts, measured from the card's left edge

// ── Capability data ──
// side: "l" = hugs the left edge, "r" = hugs the right edge, "c" = centred on the hub.
// lines: label split over two lines so the text can stay large.
// icon: 20 x 20 line glyph, stroke only (original artwork, not Microsoft icons).
const NODES = [
  {
    key: "etl",
    lines: ["ETL pipeline", "development"],
    side: "c",
    y: 48,
    icon: (
      <>
        <circle cx="4" cy="10" r="2" />
        <circle cx="16" cy="10" r="2" />
        <path d="M6 10h8M12 7l3 3-3 3" />
      </>
    ),
  },
  {
    key: "merge",
    lines: ["Multi-source", "data merging"],
    side: "r",
    y: 150,
    icon: <path d="M2 5h5c4 0 4 5 8 5M2 15h5c4 0 4-5 8-5M15 10h3" />,
  },
  {
    key: "refresh",
    lines: ["Scheduled", "auto-refresh"],
    side: "r",
    y: 280,
    icon: (
      <>
        <circle cx="10" cy="10" r="7" />
        <path d="M10 6v4l3 2" />
      </>
    ),
  },
  {
    key: "mlang",
    lines: ["M language", "custom logic"],
    side: "r",
    y: 410,
    icon: (
      <path d="M7 3C5 3 4 4 4 6v2c0 1-1 2-2 2 1 0 2 1 2 2v2c0 2 1 3 3 3M13 3c2 0 3 1 3 3v2c0 1 1 2 2 2-1 0-2 1-2 2v2c0 2-1 3-3 3" />
    ),
  },
  {
    key: "cleanse",
    lines: ["Data cleansing", "& reshaping"],
    side: "c",
    y: 512,
    icon: <path d="M3 4h14l-5 6v6l-4-2v-4z" />,
  },
  {
    key: "api",
    lines: ["API & web", "data pulls"],
    side: "l",
    y: 410,
    icon: (
      <>
        <circle cx="10" cy="10" r="7" />
        <ellipse cx="10" cy="10" rx="3" ry="7" />
        <path d="M3 10h14" />
      </>
    ),
  },
  {
    key: "database",
    lines: ["Database", "connections"],
    side: "l",
    y: 280,
    icon: (
      <>
        <ellipse cx="10" cy="5" rx="6" ry="2.5" />
        <path d="M4 5v10c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V5M4 10c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5" />
      </>
    ),
  },
  {
    key: "sharepoint",
    lines: ["SharePoint &", "OneDrive feeds"],
    side: "l",
    y: 150,
    icon: (
      <path d="M6 16a4 4 0 0 1-.5-8A5 5 0 0 1 15 8.5 3.5 3.5 0 0 1 15 16z" />
    ),
  },
];

// Work out the card position and the spoke path (card -> hub) for one capability.
function layout(node) {
  const left =
    node.side === "l"
      ? EDGE
      : node.side === "r"
        ? 720 - EDGE - CARD_W
        : HUB.x - CARD_W / 2;

  // Point on the card nearest the hub, where the spoke attaches.
  let ex;
  let ey;
  if (node.side === "c") {
    ex = HUB.x;
    ey = node.y < HUB.y ? node.y + CARD_H / 2 : node.y - CARD_H / 2;
  } else {
    ex = node.side === "l" ? left + CARD_W : left;
    ey = node.y;
  }

  // Centred cards get a straight spoke, side cards an S-curve that leaves and
  // enters horizontally. Drawn card -> hub so dashes and packets flow inwards.
  const dx = HUB.x - ex;
  const path =
    node.side === "c"
      ? `M${ex} ${ey}L${HUB.x} ${HUB.y}`
      : `M${ex} ${ey}C${ex + dx * 0.45} ${ey} ${HUB.x - dx * 0.45} ${HUB.y} ${HUB.x} ${HUB.y}`;

  return { left, path };
}

const WhatWeDo = () => (
  <svg
    className={styles.svg}
    width="100%"
    viewBox="0 0 720 560"
    role="img"
    aria-label="Radial diagram showing eight Power Query capabilities connected to a central hub"
  >
    <title>What we do — Power Query capabilities</title>
    <desc>
      Eight Power Query capabilities — ETL pipeline development, Multi-source
      data merging, Scheduled auto-refresh, M language custom logic, Data
      cleansing and reshaping, API and web data pulls, Database connections,
      SharePoint and OneDrive feeds — connected to a central Power Query hub.
    </desc>

    <defs>
      {/* Soft glow behind the hub */}
      <radialGradient id="wwd-glow">
        <stop offset="0" className={styles.glowStop} stopOpacity="0.22" />
        <stop offset="1" className={styles.glowStop} stopOpacity="0" />
      </radialGradient>
      {/* Hub core */}
      <radialGradient id="wwd-core" cx="0.35" cy="0.3" r="0.9">
        <stop offset="0" className={styles.coreA} />
        <stop offset="1" className={styles.coreB} />
      </radialGradient>
      {/* Card shadow */}
      <filter id="wwd-shadow" x="-20%" y="-30%" width="140%" height="180%">
        <feDropShadow
          dx="0"
          dy="4"
          stdDeviation="7"
          className={styles.shadow}
        />
      </filter>
    </defs>

    <circle cx={HUB.x} cy={HUB.y} r="250" fill="url(#wwd-glow)" />

    {/* ── Orbit rings (slow, counter-rotating) ── */}
    <circle cx={HUB.x} cy={HUB.y} r="96" className={styles.ringFaint} />
    <g className={styles.orbitSlow}>
      <circle cx={HUB.x} cy={HUB.y} r="96" className={styles.ringDashed} />
      <circle cx={HUB.x} cy={HUB.y - 96} r="4.5" className={styles.satellite} />
      <circle
        cx={HUB.x + 96}
        cy={HUB.y}
        r="3"
        className={styles.satelliteDim}
      />
    </g>
    <g className={styles.orbitFast}>
      <circle cx={HUB.x} cy={HUB.y} r="74" className={styles.ringDashed} />
      <circle cx={HUB.x - 74} cy={HUB.y} r="3.5" className={styles.satellite} />
    </g>

    {/* ── Spokes: faint base line, flowing dashes, then travelling data packets ── */}
    {NODES.map((node, i) => {
      const { path } = layout(node);
      const begin = `${(i * 0.45).toFixed(2)}s`;
      return (
        <g key={node.key} aria-hidden="true">
          <path d={path} className={styles.spokeBase} />
          <path d={path} className={styles.spoke} />
          <g className={styles.packet}>
            {/* Halo plus solid core, fading in and out along the journey */}
            <circle r="9" className={styles.packetHalo} />
            <circle r="4.5" className={styles.packetCore} />
            <animateMotion
              dur="3.6s"
              begin={begin}
              repeatCount="indefinite"
              path={path}
              calcMode="linear"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.15;0.8;1"
              dur="3.6s"
              begin={begin}
              repeatCount="indefinite"
            />
          </g>
        </g>
      );
    })}

    {/* ── Hub ── */}
    <circle cx={HUB.x} cy={HUB.y} r="52" className={styles.pulse} />
    <circle
      cx={HUB.x}
      cy={HUB.y}
      r="52"
      className={styles.pulse}
      style={{ animationDelay: "1.4s" }}
    />
    <circle cx={HUB.x} cy={HUB.y} r="60" className={styles.hubHalo} />
    <circle
      cx={HUB.x}
      cy={HUB.y}
      r="50"
      fill="url(#wwd-core)"
      className={styles.hubCore}
    />
    <text x={HUB.x} y={HUB.y - 11} className={styles.hubText}>
      Power
    </text>
    <text x={HUB.x} y={HUB.y + 12} className={styles.hubText}>
      Query
    </text>

    {/* ── Capability cards (fade in once, then stay perfectly still) ── */}
    {NODES.map((node, i) => {
      const { left } = layout(node);
      return (
        <g key={node.key} className={styles.node} style={{ "--i": i }}>
          <rect
            x={left}
            y={node.y - CARD_H / 2}
            width={CARD_W}
            height={CARD_H}
            rx="14"
            className={styles.card}
            filter="url(#wwd-shadow)"
          />
          <circle cx={left + 36} cy={node.y} r="21" className={styles.badge} />
          <g
            transform={`translate(${left + 36 - 12} ${node.y - 12}) scale(1.2)`}
            className={styles.glyph}
          >
            {node.icon}
          </g>
          <text x={left + TEXT_X} y={node.y - 11} className={styles.label}>
            {node.lines[0]}
          </text>
          <text x={left + TEXT_X} y={node.y + 11} className={styles.label}>
            {node.lines[1]}
          </text>
        </g>
      );
    })}
  </svg>
);

export default WhatWeDo;
