// app/services/app-and-custom-development/(svgs)/PlatformHubSvg.jsx

// Dataverse at the centre of the Power Platform, drawn for a dark background
// Satellites sit on a circle of radius 150 around the centre point (240, 210)
const satellites = [
  { x: 240, y: 60, label: "Apps" },
  { x: 383, y: 164, label: "Automate" },
  { x: 328, y: 331, label: "Pages" },
  { x: 152, y: 331, label: "Power BI" },
  { x: 97, y: 164, label: "Agents" },
];

export const PlatformHubSvg = () => (
  <svg
    viewBox="0 0 480 420"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="ph-accent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#046999" />
        <stop offset="100%" stopColor="#0a85bf" />
      </linearGradient>
    </defs>

    {/* Outer ring and spokes */}
    <circle
      cx="240"
      cy="210"
      r="150"
      fill="none"
      stroke="#fff"
      strokeOpacity="0.12"
      strokeDasharray="4 6"
    />
    {satellites.map(({ x, y, label }) => (
      <line
        key={label}
        x1="240"
        y1="210"
        x2={x}
        y2={y}
        stroke="#0a85bf"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
    ))}

    {/* Satellites */}
    {satellites.map(({ x, y, label }) => (
      <g key={label}>
        <circle
          cx={x}
          cy={y}
          r="44"
          fill="#18232e"
          stroke="#0a85bf"
          strokeOpacity="0.7"
          strokeWidth="1.5"
        />
        <text
          x={x}
          y={y + 4}
          textAnchor="middle"
          fill="#fff"
          fontSize="13"
          fontWeight="700"
        >
          {label}
        </text>
      </g>
    ))}

    {/* Centre */}
    <circle cx="240" cy="210" r="62" fill="url(#ph-accent)" />
    <circle
      cx="240"
      cy="210"
      r="74"
      fill="none"
      stroke="#0a85bf"
      strokeOpacity="0.35"
    />
    <text
      x="240"
      y="206"
      textAnchor="middle"
      fill="#fff"
      fontSize="15"
      fontWeight="800"
    >
      Dataverse
    </text>
    <text
      x="240"
      y="224"
      textAnchor="middle"
      fill="#fff"
      fillOpacity="0.75"
      fontSize="10"
      letterSpacing="1.5"
    >
      YOUR DATA
    </text>
  </svg>
);
