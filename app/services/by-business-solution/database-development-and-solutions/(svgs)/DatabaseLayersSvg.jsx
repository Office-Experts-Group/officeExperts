// app/services/by-business-solution/database-development-and-solutions/(svgs)/DatabaseLayersSvg.jsx
// Three stacked layers of a database solution (interface, logic, data), joined by a connector rail.
// Decorative only, so it is hidden from assistive technology where it is used.

export const DatabaseLayersSvg = () => (
  <svg
    viewBox="0 0 420 340"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    {/* Connector rail running down the left of the stack */}
    <path d="M30 70v200" stroke="#9a9da1" strokeWidth="1.5" strokeDasharray="4 6" />
    <circle cx="30" cy="80" r="6" fill="#e8f4fa" stroke="#046999" strokeWidth="1.5" />
    <circle cx="30" cy="170" r="6" fill="#e8f4fa" stroke="#046999" strokeWidth="1.5" />
    <circle cx="30" cy="260" r="6" fill="#046999" />
    <path d="M36 80h44M36 170h34M36 260h24" stroke="#9a9da1" strokeWidth="1.5" />

    {/* Interface layer */}
    <rect x="120" y="30" width="280" height="96" rx="10" fill="#e8f4fa" />
    <rect x="140" y="50" width="90" height="10" rx="5" fill="#046999" opacity="0.5" />
    <rect x="140" y="70" width="58" height="34" rx="6" fill="#ffffff" />
    <rect x="206" y="70" width="58" height="34" rx="6" fill="#ffffff" />
    <rect x="272" y="70" width="58" height="34" rx="6" fill="#ffffff" />
    <rect x="338" y="70" width="44" height="34" rx="6" fill="#046999" opacity="0.18" />
    <text x="382" y="58" textAnchor="end" fontSize="11" fontWeight="700" fill="#046999">
      INTERFACE
    </text>

    {/* Logic layer */}
    <rect x="90" y="122" width="280" height="96" rx="10" fill="#ffffff" stroke="rgba(0,0,0,0.11)" />
    <path
      d="M112 158h40l14 -14 14 28 14 -14h40"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="252" y="146" width="96" height="9" rx="4.5" fill="#4a5568" opacity="0.25" />
    <rect x="252" y="162" width="70" height="9" rx="4.5" fill="#4a5568" opacity="0.18" />
    <rect x="112" y="186" width="120" height="9" rx="4.5" fill="#4a5568" opacity="0.18" />
    <text x="352" y="205" textAnchor="end" fontSize="11" fontWeight="700" fill="#4a5568">
      LOGIC
    </text>

    {/* Data layer */}
    <rect x="60" y="212" width="280" height="96" rx="10" fill="#0d1b2a" />
    <g fill="#ffffff" opacity="0.14">
      <rect x="80" y="234" width="72" height="12" rx="3" />
      <rect x="160" y="234" width="72" height="12" rx="3" />
      <rect x="240" y="234" width="72" height="12" rx="3" />
      <rect x="80" y="252" width="72" height="12" rx="3" />
      <rect x="160" y="252" width="72" height="12" rx="3" />
      <rect x="240" y="252" width="72" height="12" rx="3" />
    </g>
    <rect x="80" y="234" width="72" height="12" rx="3" fill="#046999" />
    <text x="80" y="290" fontSize="11" fontWeight="700" fill="#ffffff" opacity="0.88">
      DATA
    </text>
    <text x="322" y="290" textAnchor="end" fontSize="10" fill="#ffffff" opacity="0.55">
      Access · SQL Server · PostgreSQL
    </text>
  </svg>
);
