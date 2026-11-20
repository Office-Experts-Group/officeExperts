// /app/blog/microsoft-access-alternatives-guide/(svgs)/ArchitectureSvg.jsx
// Informative diagram: keep the Access front-end, move the data to SQL Server or Azure SQL,
// then add Power Apps, Power BI or a web portal later.
// Hex values match tokens: #0d1b2a $text-primary, #4a5568 $text-secondary, #046999 $accent,
// #e8f4fa $accent-light, #5bbce6 $accent-on-dark (older tint), #cfd8df and #ffffff neutrals.

const windows = [56, 156, 256];
const tiles = [
  { y: 70, title: "Power Apps", sub: "Mobile and web forms" },
  { y: 170, title: "Power BI", sub: "Live dashboards" },
  { y: 270, title: "Web portal", sub: "Browser access" },
];

export default function ArchitectureSvg() {
  return (
    <svg
      viewBox="0 0 780 400"
      role="img"
      aria-labelledby="aag-arch-title aag-arch-desc"
      xmlns="http://www.w3.org/2000/svg"
      fontFamily="aptos"
    >
      <title id="aag-arch-title">
        Keep the Access front-end and move the data to SQL Server or Azure SQL
      </title>
      <desc id="aag-arch-desc">
        Three users each run the same Access front-end with forms, reports and
        VBA. Their linked tables point at one SQL Server or Azure SQL back-end,
        which allows more users, removes the 2 GB file limit and adds backups
        and security. Power Apps, Power BI and a web portal can be added later
        using the same data.
      </desc>

      <text x="20" y="34" fontSize="15" fontWeight="700" fill="#0d1b2a">
        Your team: nothing changes
      </text>
      <text x="330" y="34" fontSize="15" fontWeight="700" fill="#0d1b2a">
        One back-end
      </text>
      <text x="600" y="34" fontSize="15" fontWeight="700" fill="#0d1b2a">
        Add later: same data
      </text>

      {/* Access front-end windows */}
      {windows.map((y) => (
        <g key={y}>
          <rect
            x="20"
            y={y}
            width="210"
            height="88"
            rx="10"
            fill="#ffffff"
            stroke="#cfd8df"
          />
          <path
            d={`M20 ${y + 10}a10 10 0 0 1 10-10h190a10 10 0 0 1 10 10v12H20z`}
            fill="#e8f4fa"
          />
          <circle cx="34" cy={y + 11} r="3.5" fill="#9fb7c8" />
          <circle cx="46" cy={y + 11} r="3.5" fill="#9fb7c8" />
          <circle cx="58" cy={y + 11} r="3.5" fill="#9fb7c8" />
          <text x="34" y={y + 48} fontSize="15" fontWeight="700" fill="#0d1b2a">
            Access front-end
          </text>
          <text x="34" y={y + 70} fontSize="14" fill="#4a5568">
            Forms · Reports · VBA
          </text>
        </g>
      ))}

      {/* Linked tables */}
      {windows.map((y) => (
        <g key={`link-${y}`}>
          <path
            d={`M230 ${y + 44}H318`}
            fill="none"
            stroke="#046999"
            strokeWidth="2"
            strokeDasharray="6 5"
            strokeLinecap="round"
          />
          <path
            d={`M312 ${y + 38}l7 6-7 6`}
            fill="none"
            stroke="#046999"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ))}
      <text x="274" y="186" fontSize="14" fill="#4a5568" textAnchor="middle">
        linked tables
      </text>

      {/* Back-end */}
      <rect
        x="330"
        y="86"
        width="240"
        height="270"
        rx="14"
        fill="#e8f4fa"
        stroke="#046999"
        strokeWidth="1.5"
      />
      <path
        d="M401 134v58c0 7.5 19.7 13 44 13s44-5.5 44-13v-58z"
        fill="#046999"
      />
      <ellipse cx="445" cy="134" rx="44" ry="13" fill="#5bbce6" />
      <path
        d="M401 153c0 7.5 19.7 13 44 13s44-5.5 44-13M401 173c0 7.5 19.7 13 44 13s44-5.5 44-13"
        fill="none"
        stroke="#e8f4fa"
        strokeOpacity="0.75"
        strokeWidth="1.6"
      />
      <text
        x="450"
        y="244"
        fontSize="16"
        fontWeight="700"
        fill="#0d1b2a"
        textAnchor="middle"
      >
        SQL Server or Azure SQL
      </text>
      <text x="450" y="264" fontSize="14" fill="#4a5568" textAnchor="middle">
        The data lives here
      </text>
      {["More users at once", "No 2 GB file limit", "Backups and security"].map(
        (t, i) => (
          <g key={t}>
            <circle cx="360" cy={290 + i * 22} r="4" fill="#046999" />
            <text x="374" y={295 + i * 22} fontSize="14" fill="#0d1b2a">
              {t}
            </text>
          </g>
        ),
      )}

      {/* Add later */}
      {tiles.map((t) => (
        <g key={t.title}>
          <path
            d={`M570 ${t.y + 35}H592`}
            fill="none"
            stroke="#046999"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
          <rect
            x="600"
            y={t.y}
            width="170"
            height="70"
            rx="10"
            fill="#ffffff"
            stroke="#cfd8df"
          />
          <text
            x="614"
            y={t.y + 28}
            fontSize="15"
            fontWeight="700"
            fill="#0d1b2a"
          >
            {t.title}
          </text>
          <text x="614" y={t.y + 50} fontSize="14" fill="#4a5568">
            {t.sub}
          </text>
        </g>
      ))}
    </svg>
  );
}
