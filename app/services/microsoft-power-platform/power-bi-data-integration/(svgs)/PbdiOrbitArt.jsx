// /app/services/microsoft-power-platform/power-bi-data-integration/(svgs)/PbdiOrbitArt.jsx
// Orbit diagram for the tools section: seven tools circle one connected data model.
// Decorative, because the list next to it carries the same information in text.
// Icons are generic shapes on purpose (no brand logos). Pass labelClass so the module can hide the labels on small phones.
// Hex values and the tokens they match:
//   #046999 $accent, #e8f4fa $accent-light, #111820 $dark-bg, #6fc3e8 $accent-on-dark,
//   #0b2433 $ink, #ffffff $white

const CX = 300;
const CY = 275;
const RING = 180;
const NODE = 36;

// Each icon is drawn inside a 40 x 40 box centred on 0,0
const ICONS = {
  report: (
    <g fill="#046999">
      <rect x="-15" y="2" width="9" height="14" rx="2" />
      <rect x="-4.5" y="-8" width="9" height="24" rx="2" />
      <rect x="6" y="-16" width="9" height="32" rx="2" />
    </g>
  ),
  pipeline: (
    <g
      fill="none"
      stroke="#046999"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="-18" y="-16" width="13" height="13" rx="3" />
      <rect x="5" y="3" width="13" height="13" rx="3" />
      <path d="M-5 -9.5h6a5 5 0 0 1 5 5V3" />
      <path d="M2 -1l4 4 4-4" />
    </g>
  ),
  server: (
    <g
      fill="none"
      stroke="#046999"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="-3" cy="-11" rx="12" ry="5" />
      <path d="M-15 -11v21c0 3 5.4 5.5 12 5.5S9 13 9 10v-21" />
      <path d="M-15 -1c0 3 5.4 5.5 12 5.5S9 2 9 -1" />
      <path d="M13 -2h8M18 -7l4 5-4 5" />
    </g>
  ),
  flow: (
    <g
      fill="none"
      stroke="#046999"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M-15 1a15 15 0 0 1 24-12" />
      <path d="M11 -15l-2 5-5-2" />
      <path d="M15 -1a15 15 0 0 1-24 12" />
      <path d="M-11 15l2-5 5 2" />
    </g>
  ),
  site: (
    <g
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="-17" y="-17" width="20" height="20" rx="5" />
      <rect x="-3" y="-8" width="20" height="20" rx="5" />
      <path d="M2 0h10M2 6h7" fill="none" />
    </g>
  ),
  api: (
    <g
      fill="none"
      stroke="#046999"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M-6 -15c-9 0-4 11-12 15 8 4 3 15 12 15" />
      <path d="M6 -15c9 0 4 11 12 15-8 4-3 15-12 15" />
      <circle cx="0" cy="0" r="1.8" fill="#046999" />
    </g>
  ),
  store: (
    <g
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="2.4"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <path d="M0 -17l17 8-17 8-17-8z" />
      <path d="M-17 0l17 8 17-8" fill="none" />
      <path d="M-17 9l17 8 17-8" fill="none" />
    </g>
  ),
};

const TOOLS = [
  { icon: "report", label: "Power BI" },
  { icon: "pipeline", label: "Data Factory" },
  { icon: "server", label: "SSIS" },
  { icon: "flow", label: "Power Automate" },
  { icon: "site", label: "SharePoint" },
  { icon: "api", label: "REST APIs" },
  { icon: "store", label: "Dataverse" },
];

const NODES = TOOLS.map((tool, i) => {
  const angle = ((-90 + (i * 360) / TOOLS.length) * Math.PI) / 180;
  return {
    ...tool,
    x: Math.round((CX + RING * Math.cos(angle)) * 10) / 10,
    y: Math.round((CY + RING * Math.sin(angle)) * 10) / 10,
    above: i === 0,
  };
});

const PbdiOrbitDiagram = ({ labelClass = "" }) => (
  <svg
    viewBox="0 0 600 540"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <circle
      cx={CX}
      cy={CY}
      r={RING}
      fill="none"
      stroke="#046999"
      strokeOpacity="0.35"
      strokeWidth="2"
      strokeDasharray="3 9"
      strokeLinecap="round"
    />
    <circle cx={CX} cy={CY} r={RING * 0.55} fill="#e8f4fa" />
    <g stroke="#046999" strokeOpacity="0.5" strokeWidth="2">
      {NODES.map(({ x, y, label }) => (
        <path key={label} d={`M${CX} ${CY}L${x} ${y}`} />
      ))}
    </g>

    {/* hub */}
    <circle cx={CX} cy={CY} r="64" fill="#111820" />
    <g fill="#6fc3e8">
      <rect x="276" y="236" width="12" height="16" rx="2" />
      <rect x="294" y="226" width="12" height="26" rx="2" />
      <rect x="312" y="232" width="12" height="20" rx="2" />
    </g>
    <text
      x={CX}
      y="284"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      One connected
    </text>
    <text
      x={CX}
      y="303"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      data model
    </text>

    {NODES.map(({ x, y, icon, label, above }) => (
      <g key={label}>
        <circle
          cx={x}
          cy={y}
          r={NODE}
          fill="#ffffff"
          stroke="#046999"
          strokeWidth="2.5"
        />
        <g transform={`translate(${x} ${y})`}>{ICONS[icon]}</g>
        <text
          className={labelClass}
          x={x}
          y={above ? y - NODE - 12 : y + NODE + 20}
          fontSize="14"
          fontWeight="700"
          fill="#0b2433"
          textAnchor="middle"
        >
          {label}
        </text>
      </g>
    ))}
  </svg>
);

export default PbdiOrbitDiagram;
