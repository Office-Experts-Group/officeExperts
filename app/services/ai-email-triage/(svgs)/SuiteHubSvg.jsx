// app/services/ai-email-triage/(svgs)/SuiteHubSvg.jsx

// Dark-section illustration: a triaged email at the centre, feeding data out to
// the Microsoft 365 apps listed in the copy beside it. Drawn on the $dark-bg
// palette. Spokes use "et-flow" for the moving-dash animation defined in the
// emailTriageSuite SCSS module.

// Node centres sit on a hexagon around the hub at (260, 220)
const nodes = [
  { x: 260, y: 48, label: "Teams" },
  { x: 418, y: 134, label: "SharePoint & Lists" },
  { x: 418, y: 306, label: "Excel & Power BI" },
  { x: 260, y: 392, label: "Dataverse & D365" },
  { x: 102, y: 306, label: "Planner & To Do" },
  { x: 102, y: 134, label: "Your systems" },
];

export const SuiteHubSvg = () => (
  <svg
    viewBox="0 0 520 440"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    {/* ── Spokes ── */}
    {nodes.map((node) => (
      <path
        key={`spoke-${node.label}`}
        className="et-flow"
        d={`M260 220L${node.x} ${node.y}`}
        stroke="#046999"
        strokeWidth="1.5"
      />
    ))}

    {/* ── Hub: the triaged email ── */}
    <circle cx="260" cy="220" r="62" fill="rgba(4,105,153,0.15)" />
    <circle cx="260" cy="220" r="46" fill="#046999" />
    <rect
      x="243"
      y="206"
      width="34"
      height="24"
      rx="3"
      stroke="#fff"
      strokeWidth="1.8"
    />
    <path
      d="M244 208l16 12 16-12"
      stroke="#fff"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <text
      x="260"
      y="248"
      fontSize="9"
      fontWeight="700"
      letterSpacing="1.5"
      fill="#fff"
      textAnchor="middle"
    >
      TRIAGED
    </text>

    {/* ── App nodes ── */}
    {nodes.map((node) => (
      <g key={node.label}>
        <rect
          x={node.x - 66}
          y={node.y - 18}
          width="132"
          height="36"
          rx="18"
          fill="#18232e"
          stroke="rgba(4,105,153,0.3)"
        />
        <text
          x={node.x}
          y={node.y + 4}
          fontSize="11.5"
          fontWeight="600"
          fill="rgba(255,255,255,0.88)"
          textAnchor="middle"
        >
          {node.label}
        </text>
      </g>
    ))}
  </svg>
);
