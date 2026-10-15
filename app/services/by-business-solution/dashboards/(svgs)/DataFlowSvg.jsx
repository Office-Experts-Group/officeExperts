// app/services/by-business-solution/dashboards/(svgs)/DataFlowSvg.jsx
// Decorative diagram for DashboardsDataSources: several source systems flow into one
// data model, which feeds a single dashboard. Drawn for the dark section background.
// IDs are prefixed "df-" to avoid clashes with other SVGs on the page.

// Source systems on the left; y is the vertical centre of each pill
const sources = [
  { label: "Xero / MYOB", y: 50 },
  { label: "Salesforce", y: 130 },
  { label: "SQL Server", y: 210 },
  { label: "Excel files", y: 290 },
  { label: "Microsoft 365", y: 370 },
];

// Curved connector from the right edge of a pill (x=150) into the model node (x=225, y=210)
const connector = (y) => `M150 ${y} C 195 ${y}, 190 210, 225 210`;

export const DataFlowSvg = () => (
  <svg viewBox="0 0 480 420" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <defs>
      <marker id="df-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0 0 L10 5 L0 10 Z" fill="#5ba4c4" />
      </marker>
    </defs>

    {/* ── Connectors (drawn first so pills sit on top) ── */}
    {sources.map(({ y }) => (
      <path key={`c${y}`} d={connector(y)} fill="none" stroke="#5ba4c4" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
    ))}

    {/* ── Source pills ── */}
    {sources.map(({ label, y }) => (
      <g key={label}>
        <rect x="10" y={y - 18} width="140" height="36" rx="18" fill="#18232e" stroke="rgba(255,255,255,0.18)" />
        <circle cx="30" cy={y} r="4" fill="#5ba4c4" />
        <text x="44" y={y + 4} fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.88)">
          {label}
        </text>
      </g>
    ))}

    {/* ── Data model node ── */}
    <rect x="225" y="176" width="100" height="68" rx="10" fill="#046999" />
    <text x="275" y="206" fontSize="12" fontWeight="800" fill="#fff" textAnchor="middle">
      Data model
    </text>
    <text x="275" y="224" fontSize="8.5" fill="rgba(255,255,255,0.75)" textAnchor="middle">
      Power Query · DAX
    </text>

    {/* ── Model to dashboard arrow ── */}
    <path d="M325 210 L352 210" stroke="#5ba4c4" strokeWidth="1.8" markerEnd="url(#df-arrow)" />

    {/* ── Mini dashboard ── */}
    <rect x="356" y="140" width="114" height="140" rx="8" fill="#18232e" stroke="rgba(255,255,255,0.18)" />
    <rect x="368" y="154" width="42" height="24" rx="4" fill="rgba(255,255,255,0.08)" />
    <rect x="416" y="154" width="42" height="24" rx="4" fill="rgba(255,255,255,0.08)" />
    {[34, 52, 26, 60, 44].map((h, i) => (
      <rect key={i} x={370 + i * 18} y={262 - h} width="11" height={h} rx="2" fill="#5ba4c4" opacity={0.5 + i * 0.1} />
    ))}
    <text x="413" y="300" fontSize="9" fontWeight="700" fill="rgba(255,255,255,0.65)" textAnchor="middle">
      One dashboard
    </text>
  </svg>
);
