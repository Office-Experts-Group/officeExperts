// app/services/microsoft-365-api-integration/(svgs)/ApiHubSvg.jsx

// Hub diagram for the intro: Microsoft Graph and Entra ID in the centre,
// with each Office app and "your systems" connected around it.
// Decorative only (aria-hidden), the intro copy says the same thing in words.
// Hex values mirror globals.scss ($accent, $text-primary, $grayBGC) because
// SVG attributes can't read Sass variables.

// Satellite nodes: label and centre position
const nodes = [
  { label: "Word", x: 260, y: 52 },
  { label: "Excel", x: 430, y: 118 },
  { label: "Outlook", x: 470, y: 268 },
  { label: "SharePoint", x: 392, y: 398 },
  { label: "Power Platform", x: 128, y: 398 },
  { label: "Access / SQL", x: 50, y: 268 },
  { label: "Teams", x: 90, y: 118 },
];

const CENTRE = { x: 260, y: 236 };

export const ApiHubSvg = () => (
  <svg viewBox="0 0 520 460" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="hub-core" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#046999" />
        <stop offset="100%" stopColor="#0a85bf" />
      </linearGradient>
      <filter id="hub-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0b2433" floodOpacity="0.12" />
      </filter>
    </defs>

    {/* Outer ring, suggests the tenant boundary */}
    <circle cx={CENTRE.x} cy={CENTRE.y} r="186" fill="none" stroke="#dfe7ed" strokeDasharray="3 7" />

    {/* Connector lines from each node into the core */}
    {nodes.map((n) => (
      <line
        key={`line-${n.label}`}
        x1={n.x}
        y1={n.y}
        x2={CENTRE.x}
        y2={CENTRE.y}
        stroke="#046999"
        strokeOpacity="0.28"
        strokeWidth="1.5"
        strokeDasharray="5 5"
      />
    ))}

    {/* Data packets travelling along two of the lines */}
    <circle cx="345" cy="177" r="4" fill="#046999" />
    <circle cx="155" cy="252" r="4" fill="#046999" opacity="0.6" />
    <circle cx="326" cy="317" r="4" fill="#046999" opacity="0.8" />

    {/* Core: Microsoft Graph with an Entra ID ring */}
    <circle cx={CENTRE.x} cy={CENTRE.y} r="78" fill="#ffffff" stroke="#dfe7ed" filter="url(#hub-shadow)" />
    <circle cx={CENTRE.x} cy={CENTRE.y} r="60" fill="url(#hub-core)" />
    <text x={CENTRE.x} y={CENTRE.y - 6} textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="800">
      Microsoft
    </text>
    <text x={CENTRE.x} y={CENTRE.y + 14} textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="800">
      Graph
    </text>
    <text
      x={CENTRE.x}
      y={CENTRE.y + 70}
      textAnchor="middle"
      fill="#046999"
      fontSize="8.5"
      fontWeight="700"
      letterSpacing="2"
    >
      ENTRA ID
    </text>

    {/* Satellite pills. Width scales with the label length. */}
    {nodes.map((n) => {
      const w = n.label.length * 7.4 + 30;
      return (
        <g key={n.label} filter="url(#hub-shadow)">
          <rect x={n.x - w / 2} y={n.y - 17} width={w} height="34" rx="17" fill="#ffffff" stroke="#dfe7ed" />
          <circle cx={n.x - w / 2 + 15} cy={n.y} r="4" fill="#046999" />
          <text x={n.x + 6} y={n.y + 4.5} textAnchor="middle" fill="#0d1b2a" fontSize="12" fontWeight="700">
            {n.label}
          </text>
        </g>
      );
    })}

    {/* "Your systems" node, outside the ring to show it's beyond Microsoft 365 */}
    <g>
      <rect x="198" y="430" width="124" height="26" rx="13" fill="#0b2433" />
      <text x="260" y="447" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="700">
        + your systems
      </text>
    </g>
  </svg>
);
