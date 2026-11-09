// /services/add-in-creation/(svgs)/AddInConnectSvg.js
// Your systems on the left, the add-in in the middle, the Microsoft apps on the right.
// Shows that an add-in is the link between business data and the apps staff already use.
const systems = ["Accounting", "CRM", "SQL databases", "APIs and files"];
const apps = ["Excel", "Word and PowerPoint", "Outlook", "Teams and SharePoint"];
// Top edge of each of the four rows, shared by both columns
const rowY = [14, 64, 114, 164];

export const AddInConnectSvg = () => (
  <svg
    viewBox="0 0 1000 250"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="aic-accent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#046999" />
        <stop offset="100%" stopColor="#0a85bf" />
      </linearGradient>
      <marker
        id="aic-arrow"
        viewBox="0 0 8 8"
        refX="7"
        refY="4"
        markerWidth="8"
        markerHeight="8"
        orient="auto"
      >
        <path d="M0 0 L8 4 L0 8 z" fill="#046999" />
      </marker>
    </defs>

    {/* ── Connectors: systems into the add-in, add-in out to the apps ── */}
    {rowY.map((y) => (
      <path
        key={`in${y}`}
        d={`M220 ${y + 20} C300 ${y + 20} 300 110 380 110`}
        fill="none"
        stroke="#cfd4d9"
        strokeWidth="2"
        strokeDasharray="5 4"
      />
    ))}
    {rowY.map((y) => (
      <path
        key={`out${y}`}
        d={`M620 110 C700 110 700 ${y + 20} 772 ${y + 20}`}
        fill="none"
        stroke="#046999"
        strokeWidth="2"
        opacity="0.6"
        markerEnd="url(#aic-arrow)"
      />
    ))}

    {/* ── Your systems ── */}
    {systems.map((label, i) => (
      <g key={label}>
        <rect x="20" y={rowY[i]} width="200" height="40" rx="12" fill="#ffffff" />
        <text
          x="120"
          y={rowY[i] + 25}
          textAnchor="middle"
          fill="#4a5568"
          fontSize="14"
          fontWeight="600"
        >
          {label}
        </text>
      </g>
    ))}

    {/* ── The add-in ── */}
    <rect x="380" y="40" width="240" height="140" rx="28" fill="url(#aic-accent)" />
    <text
      x="500"
      y="104"
      textAnchor="middle"
      fill="#ffffff"
      fontSize="24"
      fontWeight="800"
    >
      Your add-in
    </text>
    <text
      x="500"
      y="132"
      textAnchor="middle"
      fill="#ffffff"
      fontSize="14"
      opacity="0.8"
    >
      Rules, logic and AI
    </text>

    {/* ── Your Microsoft apps ── */}
    {apps.map((label, i) => (
      <g key={label}>
        <rect x="780" y={rowY[i]} width="200" height="40" rx="12" fill="#ffffff" />
        <text
          x="880"
          y={rowY[i] + 25}
          textAnchor="middle"
          fill="#0d1b2a"
          fontSize="14"
          fontWeight="700"
        >
          {label}
        </text>
      </g>
    ))}

    {/* ── Column captions ── */}
    <text
      x="120"
      y="236"
      textAnchor="middle"
      fill="#777a7e"
      fontSize="12"
      fontWeight="700"
      letterSpacing="2"
    >
      YOUR SYSTEMS
    </text>
    <text
      x="500"
      y="236"
      textAnchor="middle"
      fill="#777a7e"
      fontSize="12"
      fontWeight="700"
      letterSpacing="2"
    >
      THE ADD-IN
    </text>
    <text
      x="880"
      y="236"
      textAnchor="middle"
      fill="#777a7e"
      fontSize="12"
      fontWeight="700"
      letterSpacing="2"
    >
      YOUR MICROSOFT APPS
    </text>
  </svg>
);
