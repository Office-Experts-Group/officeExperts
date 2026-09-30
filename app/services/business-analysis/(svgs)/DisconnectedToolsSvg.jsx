// app/services/business-analysis/(svgs)/DisconnectedToolsSvg.jsx

// ── DisconnectedToolsSvg ──────────────────────────────────────────────────────
// Problem-section illustration for a dark background: four tools built by
// different people, each pointing at an empty "shared data model" that was
// never designed. Red crosses mark the connections that don't exist.
// Colours mirror globals.scss tokens ($dark-surface, $white-*, $replace-x).
const tools = [
  { x: 30, y: 36, name: "Power App", note: "Owner: left in 2024" },
  { x: 300, y: 36, name: "Python script", note: "Documentation: none" },
  { x: 30, y: 254, name: "AI agent", note: "Access: everything" },
  { x: 300, y: 254, name: "Spreadsheet", note: "Holds customer records" },
];

// Connector start points (inner corner of each tile) and end points (edge of
// the centre circle). Kept alongside the tiles above so they stay in step.
const links = [
  { x1: 180, y1: 106, x2: 212, y2: 148 },
  { x1: 300, y1: 106, x2: 268, y2: 148 },
  { x1: 180, y1: 254, x2: 212, y2: 212 },
  { x1: 300, y1: 254, x2: 268, y2: 212 },
];

// Draws a small red cross centred on a connector's midpoint
const renderCross = ({ x1, y1, x2, y2 }) => {
  const cx = (x1 + x2) / 2;
  const cy = (y1 + y2) / 2;
  return (
    <g key={`x-${cx}-${cy}`} stroke="#c0392b" strokeWidth="2" strokeLinecap="round">
      <line x1={cx - 5} y1={cy - 5} x2={cx + 5} y2={cy + 5} />
      <line x1={cx + 5} y1={cy - 5} x2={cx - 5} y2={cy + 5} />
    </g>
  );
};

export const DisconnectedToolsSvg = () => (
  <svg
    viewBox="0 0 480 360"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    {/* Broken connectors */}
    <g stroke="rgba(255,255,255,0.35)" strokeDasharray="4 5" strokeWidth="1.25">
      {links.map((l) => (
        <line key={`l-${l.x1}-${l.y1}`} {...l} />
      ))}
    </g>
    {links.map(renderCross)}

    {/* The shared data model nobody designed */}
    <circle
      cx="240"
      cy="180"
      r="44"
      fill="none"
      stroke="rgba(255,255,255,0.18)"
      strokeDasharray="3 5"
    />
    <g fontSize="10.5" fill="rgba(255,255,255,0.55)" textAnchor="middle">
      <text x="240" y="177">No shared</text>
      <text x="240" y="191">data model</text>
    </g>

    {/* Tool tiles */}
    {tools.map((t) => (
      <g key={t.name}>
        <rect
          x={t.x}
          y={t.y}
          width="150"
          height="70"
          rx="8"
          fill="#18232e"
          stroke="rgba(255,255,255,0.18)"
        />
        <circle cx={t.x + 20} cy={t.y + 25} r="4" fill="#046999" />
        <text
          x={t.x + 32}
          y={t.y + 29}
          fontSize="12.5"
          fontWeight="700"
          fill="rgba(255,255,255,0.9)"
        >
          {t.name}
        </text>
        <text x={t.x + 16} y={t.y + 52} fontSize="10" fill="rgba(255,255,255,0.55)">
          {t.note}
        </text>
      </g>
    ))}
  </svg>
);
