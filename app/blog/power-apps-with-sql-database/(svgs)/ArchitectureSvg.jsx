// /app/blog/power-apps-with-sql-database/(svgs)/ArchitectureSvg.jsx
// How data moves: Power App -> Power Automate flow -> Azure SQL, with the
// direct-connection route underneath. Sits on a light panel.
// Hex values map to tokens: #e8f4fa $accent-light, #046999 $accent,
// #0d1b2a $text-primary, #4a5568 $text-secondary, #ffffff $white.

const ArchitectureSvg = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 900 372"
    role="img"
    aria-labelledby="pasql-map-title pasql-map-desc"
    fontFamily="aptos, sans-serif"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="pasql-map-title">
      How data moves between Power Apps, Power Automate and Azure SQL
    </title>
    <desc id="pasql-map-desc">
      The Power App runs a Power Automate flow. The flow executes the GetOrders
      stored procedure in the Azure SQL database, parses the result and responds
      to the app. A dashed route underneath shows the alternative of connecting
      the app straight to the database for tables, views and stored procedures.
    </desc>

    <defs>
      <marker
        id="pasql-map-arrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="8"
        markerHeight="8"
        orient="auto-start-reverse"
      >
        <path d="M1 1.5 8.5 5 1 8.5Z" fill="#046999" />
      </marker>
    </defs>

    {/* Power App */}
    <rect
      x="12"
      y="24"
      width="232"
      height="232"
      rx="16"
      fill="#e8f4fa"
      stroke="#046999"
      strokeOpacity="0.35"
    />
    <text x="32" y="58" fontSize="17" fontWeight="700" fill="#0d1b2a">
      Power App
    </text>
    <text x="32" y="78" fontSize="14" fill="#4a5568">
      Canvas app
    </text>
    {[96, 136, 176].map((y, i) => (
      <g key={y}>
        <rect
          x="32"
          y={y}
          width="192"
          height="32"
          rx="8"
          fill="#ffffff"
          stroke="#046999"
          strokeOpacity="0.2"
        />
        <rect
          x="42"
          y={y + 9}
          width="14"
          height="14"
          rx="4"
          fill="#046999"
          fillOpacity="0.3"
        />
        <rect
          x="66"
          y={y + 10}
          width={[96, 78, 108][i]}
          height="5"
          rx="2.5"
          fill="#0d1b2a"
          fillOpacity="0.55"
        />
        <rect
          x="66"
          y={y + 19}
          width={[64, 88, 52][i]}
          height="4"
          rx="2"
          fill="#4a5568"
          fillOpacity="0.35"
        />
      </g>
    ))}
    <rect x="32" y="216" width="92" height="26" rx="7" fill="#046999" />
    <text
      x="78"
      y="234"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      Refresh
    </text>

    {/* Flow */}
    <rect
      x="338"
      y="24"
      width="224"
      height="232"
      rx="16"
      fill="#e8f4fa"
      stroke="#046999"
      strokeOpacity="0.35"
    />
    <text x="358" y="58" fontSize="17" fontWeight="700" fill="#0d1b2a">
      Power Automate flow
    </text>
    <text x="358" y="78" fontSize="14" fill="#4a5568">
      Instant flow
    </text>
    {[
      { y: 92, t: "Power Apps trigger" },
      { y: 130, t: "Execute stored procedure" },
      { y: 168, t: "Parse JSON" },
      { y: 206, t: "Respond to Power Apps" },
    ].map((s) => (
      <g key={s.t}>
        <rect
          x="358"
          y={s.y}
          width="184"
          height="30"
          rx="8"
          fill="#ffffff"
          stroke="#046999"
          strokeOpacity="0.25"
        />
        <text x="372" y={s.y + 20} fontSize="14" fill="#0d1b2a">
          {s.t}
        </text>
      </g>
    ))}
    <path
      d="M450 122v8M450 160v8M450 198v8"
      stroke="#046999"
      strokeOpacity="0.5"
      strokeWidth="1.5"
    />

    {/* Azure SQL */}
    <rect
      x="656"
      y="24"
      width="232"
      height="232"
      rx="16"
      fill="#e8f4fa"
      stroke="#046999"
      strokeOpacity="0.35"
    />
    <text x="676" y="58" fontSize="17" fontWeight="700" fill="#0d1b2a">
      Azure SQL database
    </text>
    <text x="676" y="78" fontSize="14" fill="#4a5568">
      Tables and procedures
    </text>
    <rect x="676" y="92" width="128" height="28" rx="14" fill="#046999" />
    <text
      x="740"
      y="111"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      GetOrders
    </text>

    <rect
      x="676"
      y="132"
      width="90"
      height="108"
      rx="10"
      fill="#ffffff"
      stroke="#046999"
      strokeOpacity="0.3"
    />
    <path
      d="M676 142a10 10 0 0 1 10-10h70a10 10 0 0 1 10 10v14h-90Z"
      fill="#046999"
      fillOpacity="0.9"
    />
    <text x="686" y="149" fontSize="14" fontWeight="700" fill="#ffffff">
      Stock
    </text>
    <text x="686" y="178" fontSize="14" fill="#0d1b2a">
      ID
    </text>
    <text x="686" y="200" fontSize="14" fill="#0d1b2a">
      Name
    </text>
    <text x="686" y="222" fontSize="14" fill="#0d1b2a">
      Level
    </text>

    <rect
      x="788"
      y="132"
      width="90"
      height="108"
      rx="10"
      fill="#ffffff"
      stroke="#046999"
      strokeOpacity="0.3"
    />
    <path
      d="M788 142a10 10 0 0 1 10-10h70a10 10 0 0 1 10 10v14h-90Z"
      fill="#046999"
      fillOpacity="0.9"
    />
    <text x="798" y="149" fontSize="14" fontWeight="700" fill="#ffffff">
      Orders
    </text>
    <text x="798" y="178" fontSize="14" fill="#0d1b2a">
      ID
    </text>
    <text x="798" y="200" fontSize="14" fontWeight="700" fill="#046999">
      StockID
    </text>
    <text x="798" y="222" fontSize="14" fill="#0d1b2a">
      Amount
    </text>
    <path d="M766 196H780" stroke="#046999" strokeWidth="2" />
    <path
      d="M776 196 788 190M776 196 788 196M776 196 788 202"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Arrows */}
    <path
      d="M246 110H334"
      stroke="#046999"
      strokeWidth="2"
      markerEnd="url(#pasql-map-arrow)"
    />
    <text x="290" y="100" fontSize="14" fill="#0d1b2a" textAnchor="middle">
      Run flow
    </text>
    <path
      d="M564 110H652"
      stroke="#046999"
      strokeWidth="2"
      markerEnd="url(#pasql-map-arrow)"
    />
    <text x="608" y="100" fontSize="14" fill="#0d1b2a" textAnchor="middle">
      Call
    </text>
    <path
      d="M652 204H564"
      stroke="#046999"
      strokeWidth="2"
      markerEnd="url(#pasql-map-arrow)"
    />
    <text x="608" y="194" fontSize="14" fill="#0d1b2a" textAnchor="middle">
      Rows
    </text>
    <path
      d="M334 204H246"
      stroke="#046999"
      strokeWidth="2"
      markerEnd="url(#pasql-map-arrow)"
    />
    <text x="290" y="194" fontSize="14" fill="#0d1b2a" textAnchor="middle">
      JSON back
    </text>

    {/* Direct route */}
    <path
      d="M128 258V318H772V260"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeDasharray="6 6"
      markerEnd="url(#pasql-map-arrow)"
    />
    <rect
      x="266"
      y="300"
      width="368"
      height="36"
      rx="18"
      fill="#ffffff"
      stroke="#046999"
      strokeOpacity="0.35"
    />
    <text
      x="450"
      y="323"
      fontSize="14"
      fontWeight="700"
      fill="#0d1b2a"
      textAnchor="middle"
    >
      Or connect directly: tables, views, stored procedures
    </text>
  </svg>
);

export default ArchitectureSvg;
