// /app/services/microsoft-access/sql-server-solutions/(svgs)/SqlsIntroDiagram.jsx
// Informative diagram: one shared Access file (every PC drags whole tables
// across the network) next to an Access front end on a SQL Server backend
// (only results travel). Hex values and the tokens they match:
//   #ffffff $white, #e8f4fa $accent-light, #046999 $accent, #034e72 $accent-dark,
//   #0b2433 $ink, #4a5568 $text-secondary, #d4d6d9 $line-strong,
//   #e3e8ec $line, #c0392b $replace-x.
import React from "react";

const MiniLaptop = ({ x, y, tone = "light" }) => (
  <g transform={`translate(${x} ${y})`}>
    <rect
      width="76"
      height="48"
      rx="6"
      fill={tone === "light" ? "#ffffff" : "#e8f4fa"}
      stroke={tone === "light" ? "#4a5568" : "#046999"}
      strokeWidth="1.5"
    />
    <rect
      x="8"
      y="8"
      width="60"
      height="8"
      rx="3"
      fill="#046999"
      fillOpacity=".7"
    />
    <rect x="8" y="22" width="40" height="5" rx="2.5" fill="#d4d6d9" />
    <rect x="8" y="32" width="50" height="5" rx="2.5" fill="#d4d6d9" />
    <path
      d="M-4 48h84l-5 10H1z"
      fill="#e3e8ec"
      stroke="#4a5568"
      strokeWidth="1.5"
    />
  </g>
);

const SqlsIntroDiagram = () => (
  <svg
    viewBox="0 0 760 420"
    fontFamily="aptos"
    role="img"
    aria-labelledby="sqls-intro-diagram-title sqls-intro-diagram-desc"
  >
    <title id="sqls-intro-diagram-title">
      Access file on a shared drive compared with Access plus SQL Server
    </title>
    <desc id="sqls-intro-diagram-desc">
      On the left, three PCs all open one Access file that holds the forms,
      queries and tables together, so whole tables travel across the network. On
      the right, each PC runs an Access front end with the forms and reports,
      and the tables, indexes and backups live in SQL Server, so only results
      travel.
    </desc>

    <text x="20" y="28" fontSize="16" fontWeight="700" fill="#0b2433">
      Access file on a shared drive
    </text>
    <text x="430" y="28" fontSize="16" fontWeight="700" fill="#0b2433">
      Access front end, SQL Server backend
    </text>

    {/* left: one shared file */}
    <rect
      x="20"
      y="50"
      width="300"
      height="236"
      rx="14"
      fill="#ffffff"
      stroke="#d4d6d9"
      strokeWidth="1.5"
    />
    <path
      d="M20 64a14 14 0 0 1 14-14h272a14 14 0 0 1 14 14v22H20z"
      fill="#e3e8ec"
    />
    <text x="40" y="74" fontSize="15" fontWeight="700" fill="#0b2433">
      Sales.accdb
    </text>
    {[
      ["Forms and reports", 96],
      ["Queries and code", 150],
      ["Tables and data", 204],
    ].map(([label, y]) => (
      <g key={label}>
        <rect
          x="40"
          y={y}
          width="260"
          height="44"
          rx="8"
          fill="#e8f4fa"
          stroke="#046999"
          strokeOpacity=".4"
        />
        <text x="58" y={y + 27} fontSize="15" fill="#0b2433">
          {label}
        </text>
      </g>
    ))}
    <rect
      x="262"
      y="213"
      width="22"
      height="26"
      rx="4"
      fill="#c0392b"
      fillOpacity=".15"
      stroke="#c0392b"
    />
    <path
      d="M266 213v-5a7 7 0 0 1 14 0v5"
      fill="none"
      stroke="#c0392b"
      strokeWidth="2"
    />

    {[44, 136, 228].map((x) => (
      <g key={x}>
        <path
          d={`M${x + 38} 330V292`}
          stroke="#c0392b"
          strokeWidth="3"
          strokeDasharray="7 6"
          fill="none"
        />
        <polygon
          points={`${x + 31},296 ${x + 38},284 ${x + 45},296`}
          fill="#c0392b"
        />
        <MiniLaptop x={x} y={332} />
      </g>
    ))}
    <rect
      x="62"
      y="296"
      width="196"
      height="26"
      rx="13"
      fill="#ffffff"
      stroke="#c0392b"
    />
    <text
      x="160"
      y="314"
      fontSize="14"
      fontWeight="700"
      textAnchor="middle"
      fill="#c0392b"
    >
      Whole tables travel
    </text>

    {/* middle arrow */}
    <path
      d="M338 200h74"
      stroke="#046999"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    <polygon points="408,190 424,200 408,210" fill="#046999" />
    <text
      x="378"
      y="184"
      fontSize="14"
      fontWeight="700"
      textAnchor="middle"
      fill="#046999"
    >
      Upsize
    </text>

    {/* right: front end + SQL Server */}
    {[440, 548, 656].map((x) => (
      <MiniLaptop key={x} x={x} y="50" tone="accent" />
    ))}
    {[
      ["M478 118L520 206", 478],
      ["M586 118V206", 586],
      ["M694 118L660 206", 694],
    ].map(([d, key]) => (
      <path
        key={key}
        d={d}
        stroke="#046999"
        strokeWidth="3"
        strokeDasharray="7 6"
        fill="none"
      />
    ))}
    <rect
      x="530"
      y="150"
      width="120"
      height="26"
      rx="13"
      fill="#ffffff"
      stroke="#046999"
    />
    <text
      x="590"
      y="168"
      fontSize="14"
      fontWeight="700"
      textAnchor="middle"
      fill="#046999"
    >
      Results only
    </text>

    <path d="M490 226v146a100 20 0 0 0 200 0V226" fill="#046999" />
    <path
      d="M490 282a100 20 0 0 0 200 0M490 332a100 20 0 0 0 200 0"
      fill="none"
      stroke="#ffffff"
      strokeOpacity=".55"
      strokeWidth="1.5"
    />
    <ellipse
      cx="590"
      cy="226"
      rx="100"
      ry="20"
      fill="#034e72"
      stroke="#ffffff"
      strokeOpacity=".6"
    />
    {[
      ["Tables and data", 262],
      ["Indexes", 318],
      ["Backups and logs", 372],
    ].map(([label, y]) => (
      <text
        key={label}
        x="590"
        y={y}
        fontSize="15"
        fontWeight="700"
        textAnchor="middle"
        fill="#ffffff"
      >
        {label}
      </text>
    ))}
  </svg>
);

export default SqlsIntroDiagram;
