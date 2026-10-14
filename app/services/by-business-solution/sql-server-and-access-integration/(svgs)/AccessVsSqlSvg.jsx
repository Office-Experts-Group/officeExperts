// app/services/by-business-solution/sql-server-and-access-integration/(svgs)/AccessVsSqlSvg.jsx

// Side-by-side explainer: an Access file back end drags whole tables across the
// network to every PC, while SQL Server runs the query and returns only the results.
// Colours are written out because an SVG can't read the SCSS variables. They match
// globals.scss ($accent, $accent-light, $text-primary, $replace-x, $before-bg).

// Vertical centre of each of the three user PCs
const rows = [78, 128, 178];

export const AccessVsSqlSvg = () => (
  <svg
    viewBox="0 0 520 290"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="With an Access file back end, whole tables travel across the network to each PC. With a SQL Server back end, queries run on the server and only the results are sent back."
    fill="none"
  >
    {/* ── Left: Access file back end ── */}
    <text x="120" y="28" fill="#0d1b2a" fontSize="14" fontWeight="700" textAnchor="middle">
      Access file back end
    </text>
    {rows.map((y, i) => (
      <g key={`left-${y}`}>
        <rect x="12" y={y - 18} width="56" height="36" rx="4" fill="#e8f4fa" stroke="#046999" strokeWidth="2" />
        <text x="40" y={y + 4} fill="#046999" fontSize="11" fontWeight="600" textAnchor="middle">
          User
        </text>
        {/* Thick line = lots of data moving */}
        <path d={`M68 ${y} L170 ${110 + i * 30}`} stroke="#c0392b" strokeOpacity="0.7" strokeWidth="5" />
      </g>
    ))}
    <rect x="170" y="80" width="70" height="120" rx="6" fill="#fdf6f5" stroke="#c0392b" strokeWidth="2" />
    <text x="205" y="136" fill="#c0392b" fontSize="12" fontWeight="700" textAnchor="middle">
      Access
    </text>
    <text x="205" y="152" fill="#c0392b" fontSize="12" fontWeight="700" textAnchor="middle">
      file
    </text>
    <text x="120" y="244" fill="#4a5568" fontSize="12" textAnchor="middle">
      Whole tables travel
    </text>
    <text x="120" y="260" fill="#4a5568" fontSize="12" textAnchor="middle">
      across the network
    </text>

    {/* Divider */}
    <path d="M260 20V270" stroke="#0d1b2a" strokeOpacity="0.11" />

    {/* ── Right: SQL Server back end ── */}
    <text x="400" y="28" fill="#0d1b2a" fontSize="14" fontWeight="700" textAnchor="middle">
      SQL Server back end
    </text>
    {rows.map((y, i) => (
      <g key={`right-${y}`}>
        <rect x="292" y={y - 18} width="56" height="36" rx="4" fill="#e8f4fa" stroke="#046999" strokeWidth="2" />
        <text x="320" y={y + 4} fill="#046999" fontSize="11" fontWeight="600" textAnchor="middle">
          User
        </text>
        {/* Thin line = only results moving */}
        <path d={`M348 ${y} L440 ${110 + i * 30}`} stroke="#046999" strokeWidth="2" />
      </g>
    ))}
    <path d="M440 90v100c0 8 18 14 40 14s40-6 40-14V90z" fill="#046999" />
    <ellipse cx="480" cy="90" rx="40" ry="14" fill="#3a8fb5" />
    <text x="480" y="148" fill="#ffffff" fontSize="12" fontWeight="700" textAnchor="middle">
      SQL
    </text>
    <text x="480" y="164" fill="#ffffff" fontSize="12" fontWeight="700" textAnchor="middle">
      Server
    </text>
    <text x="400" y="244" fill="#4a5568" fontSize="12" textAnchor="middle">
      Queries run on the server;
    </text>
    <text x="400" y="260" fill="#4a5568" fontSize="12" textAnchor="middle">
      only the results come back
    </text>
  </svg>
);
