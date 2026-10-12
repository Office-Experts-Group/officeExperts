// app/services/microsoft-office-365/app-and-custom-development/(svgs)/AppStackSvg.jsx

// Three layers of a custom web application: React interface, Next.js server rendering, then data and services
const layers = [
  { y: 24, label: "REACT INTERFACE" },
  { y: 152, label: "NEXT.JS SERVER RENDERING" },
  { y: 280, label: "DATA AND SERVICES" },
];

// Connectors sit between the layers, one per column
const connectorX = [120, 240, 360];

// Pills in the bottom layer
const services = ["SharePoint", "Dataverse", "SQL Server", "APIs"];

export const AppStackSvg = () => (
  <svg viewBox="0 0 480 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="as-accent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#046999" />
        <stop offset="100%" stopColor="#0a85bf" />
      </linearGradient>
    </defs>

    {/* Layer panels with their labels */}
    {layers.map(({ y, label }) => (
      <g key={label}>
        <rect x="24" y={y} width="432" height="96" rx="12" fill="#e8f4fa" stroke="#046999" strokeOpacity="0.35" />
        <text x="44" y={y + 26} fill="#046999" fontSize="10" fontWeight="700" letterSpacing="2">
          {label}
        </text>
      </g>
    ))}

    {/* Interface layer: three UI blocks */}
    <rect x="44" y="62" width="120" height="40" rx="6" fill="url(#as-accent)" />
    <rect x="176" y="62" width="120" height="40" rx="6" fill="#046999" opacity="0.6" />
    <rect x="308" y="62" width="128" height="40" rx="6" fill="#046999" opacity="0.3" />

    {/* Server layer: rendered page lines */}
    {[0, 1, 2].map((i) => (
      <rect key={i} x="44" y={190 + i * 14} width={392 - i * 90} height="8" rx="4" fill="#046999" opacity={0.55 - i * 0.15} />
    ))}

    {/* Data layer: service pills */}
    {services.map((name, i) => (
      <g key={name}>
        <rect x={44 + i * 98} y="318" width="90" height="34" rx="17" fill="#fff" stroke="#046999" strokeOpacity="0.5" />
        <text x={89 + i * 98} y="339" textAnchor="middle" fill="#046999" fontSize="10.5" fontWeight="700">
          {name}
        </text>
      </g>
    ))}

    {/* Connectors with arrowheads between layers */}
    {connectorX.map((x) => (
      <g key={x} stroke="#046999" strokeWidth="1.5" strokeDasharray="4 3" fill="none">
        <path d={`M ${x} 120 L ${x} 152`} />
        <path d={`M ${x} 248 L ${x} 280`} />
        <path d={`M ${x - 4} 146 L ${x} 152 L ${x + 4} 146`} strokeDasharray="0" />
        <path d={`M ${x - 4} 274 L ${x} 280 L ${x + 4} 274`} strokeDasharray="0" />
      </g>
    ))}
  </svg>
);
