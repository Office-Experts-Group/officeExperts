// app/services/cloud-based-solutions-with-azure/(svgs)/AzureHubSvg.jsx
// Illustration for AzureIntegratedSolutions (dark section): Azure SQL as a central hub with six
// connected apps and systems on an orbit around it.
// Decorative only. Spokes (data-flow) are animated by azureIntegratedSolutions.module.scss.
// Colours are hardcoded hex values that match globals.scss tokens ($dark-surface, $dark-mid, $accent, $accent-on-dark).

// Node positions sit on a 160px orbit around the hub at (240, 220), every 60 degrees
const nodes = [
  { x: 240, y: 60, label: "Web portal" },
  { x: 378.6, y: 140, label: "Mobile app" },
  { x: 378.6, y: 300, label: "Power BI" },
  { x: 240, y: 380, label: "Xero & MYOB" },
  { x: 101.4, y: 300, label: "Access forms" },
  { x: 101.4, y: 140, label: "AI assistant" },
];

export const AzureHubSvg = () => (
  <svg
    viewBox="0 0 480 440"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    fontFamily="inherit"
  >
    {/* ── Orbit ring ── */}
    <circle cx="240" cy="220" r="160" stroke="#ffffff" strokeOpacity="0.12" strokeDasharray="2 6" />

    {/* ── Spokes, drawn first so the hub and nodes sit on top ── */}
    <g stroke="#6fc3e8" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round">
      {nodes.map((node) => (
        <path key={node.label} data-flow="" d={`M240 220 L${node.x} ${node.y}`} />
      ))}
    </g>

    {/* ── Hub ── */}
    <circle cx="240" cy="220" r="76" stroke="#6fc3e8" strokeOpacity="0.2" strokeDasharray="3 5" />
    <circle cx="240" cy="220" r="62" fill="#18232e" stroke="#6fc3e8" strokeOpacity="0.5" />
    <ellipse cx="240" cy="226" rx="22" ry="6" fill="#046999" />
    <rect x="218" y="194" width="44" height="32" fill="#046999" />
    <path d="M218 210 a22 6 0 0 0 44 0" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" />
    <ellipse cx="240" cy="194" rx="22" ry="6" fill="#6fc3e8" />
    <text x="240" y="254" textAnchor="middle" fontSize="12" fontWeight="700" fill="#ffffff">
      Azure SQL
    </text>

    {/* ── Connected apps ── */}
    {nodes.map((node) => (
      <g key={node.label}>
        <rect
          x={node.x - 62}
          y={node.y - 20}
          width="124"
          height="40"
          rx="20"
          fill="#1a2a3a"
          stroke="#ffffff"
          strokeOpacity="0.18"
        />
        <circle cx={node.x - 47} cy={node.y} r="4" fill="#6fc3e8" />
        <text
          x={node.x + 7}
          y={node.y + 4}
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill="#ffffff"
          fillOpacity="0.88"
        >
          {node.label}
        </text>
      </g>
    ))}
  </svg>
);
