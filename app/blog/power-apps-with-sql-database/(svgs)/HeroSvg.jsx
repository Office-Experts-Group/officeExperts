// /app/blog/power-apps-with-sql-database/(svgs)/HeroSvg.jsx
// Hero illustration: a canvas app (gallery of orders) -> flow -> Azure SQL with
// two linked tables. Sits directly on the dark hero, no panel behind it.
// Hex values map to tokens: #111820 $dark-bg, #18232e $dark-surface,
// #1a2a3a $dark-mid, #6fc3e8 $accent-on-dark, #046999 $accent, #ffffff $white.

const HeroSvg = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 640 470"
    role="img"
    aria-labelledby="pasql-hero-title pasql-hero-desc"
    fontFamily="aptos, sans-serif"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="pasql-hero-title">
      A Power App reading data from an Azure SQL database
    </title>
    <desc id="pasql-hero-desc">
      A canvas app showing a gallery of stock orders sends a request through a
      Power Automate flow to a stored procedure called GetOrders in an Azure SQL
      database. The database holds two linked tables, Stock and Orders, and
      sends the rows back to the app.
    </desc>

    <defs>
      <linearGradient id="pasql-hero-cyl" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#1a2a3a" />
        <stop offset="0.5" stopColor="#26405a" />
        <stop offset="1" stopColor="#1a2a3a" />
      </linearGradient>
      <marker
        id="pasql-hero-arrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="8"
        markerHeight="8"
        orient="auto-start-reverse"
      >
        <path d="M1 1.5 8.5 5 1 8.5Z" fill="#6fc3e8" />
      </marker>
    </defs>

    {/* App window */}
    <rect
      x="8"
      y="30"
      width="236"
      height="404"
      rx="20"
      fill="#18232e"
      stroke="#35506a"
      strokeWidth="1.5"
    />
    <circle cx="32" cy="54" r="5" fill="#35506a" />
    <circle cx="50" cy="54" r="5" fill="#35506a" />
    <circle cx="68" cy="54" r="5" fill="#35506a" />
    <text x="28" y="104" fontSize="19" fontWeight="700" fill="#ffffff">
      Orders
    </text>
    <rect x="152" y="82" width="76" height="30" rx="8" fill="#046999" />
    <text
      x="190"
      y="102"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      Refresh
    </text>

    {/* Gallery rows */}
    {[
      { y: 134, name: "Resistor", note: "10K Ohm", qty: "x20" },
      { y: 202, name: "Capacitor", note: "10uF Electrolytic", qty: "x15" },
      { y: 270, name: "Diode", note: "1N4007", qty: "x30" },
      { y: 338, name: "Resistor", note: "Emergency order", qty: "x25" },
    ].map((row) => (
      <g key={row.y}>
        <rect x="24" y={row.y} width="204" height="60" rx="12" fill="#1f3041" />
        <rect
          x="36"
          y={row.y + 18}
          width="24"
          height="24"
          rx="7"
          fill="#6fc3e8"
          fillOpacity="0.22"
          stroke="#6fc3e8"
          strokeWidth="1.2"
        />
        <path
          d={`M43 ${row.y + 30}h10M48 ${row.y + 25}v10`}
          stroke="#6fc3e8"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <text
          x="72"
          y={row.y + 24}
          fontSize="15"
          fontWeight="700"
          fill="#ffffff"
        >
          {row.name}
        </text>
        <text x="72" y={row.y + 44} fontSize="14" fill="#a9c1d3">
          {row.note}
        </text>
        <text
          x="216"
          y={row.y + 24}
          fontSize="14"
          fontWeight="700"
          fill="#6fc3e8"
          textAnchor="end"
        >
          {row.qty}
        </text>
      </g>
    ))}

    {/* Flow chip */}
    <rect
      x="270"
      y="96"
      width="124"
      height="72"
      rx="16"
      fill="#046999"
      fillOpacity="0.28"
      stroke="#6fc3e8"
      strokeWidth="1.5"
    />
    <circle cx="332" cy="120" r="12" fill="#6fc3e8" />
    <path d="m334 111-7 11h5l-2 8 7-11h-5l2-8Z" fill="#111820" />
    <text
      x="332"
      y="154"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      Power Automate
    </text>

    {/* Request and response */}
    <path
      d="M244 132H264"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeDasharray="5 5"
      markerEnd="url(#pasql-hero-arrow)"
    />
    <path
      d="M394 132H418"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeDasharray="5 5"
      markerEnd="url(#pasql-hero-arrow)"
    />
    <path
      d="M418 208H252"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeDasharray="5 5"
      markerEnd="url(#pasql-hero-arrow)"
    />
    <text x="335" y="234" fontSize="14" fill="#a9c1d3" textAnchor="middle">
      Rows come back
    </text>

    {/* Stored procedure tag */}
    <rect x="412" y="30" width="132" height="34" rx="17" fill="#046999" />
    <text
      x="478"
      y="52"
      fontSize="15"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      GetOrders
    </text>
    <path
      d="M478 64V90"
      stroke="#6fc3e8"
      strokeWidth="1.5"
      strokeDasharray="3 4"
    />

    {/* Database */}
    <path
      d="M408 110v92c0 12 31.3 22 70 22s70-10 70-22v-92"
      fill="url(#pasql-hero-cyl)"
      stroke="#6fc3e8"
      strokeWidth="1.5"
    />
    <ellipse
      cx="478"
      cy="110"
      rx="70"
      ry="22"
      fill="#26405a"
      stroke="#6fc3e8"
      strokeWidth="1.5"
    />
    <path
      d="M408 148c0 12 31.3 22 70 22s70-10 70-22"
      fill="none"
      stroke="#6fc3e8"
      strokeOpacity="0.4"
      strokeWidth="1.2"
    />
    <text
      x="478"
      y="152"
      fontSize="16"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      Azure SQL
    </text>

    {/* Links down to tables */}
    <path
      d="M440 224V268M516 224V268"
      stroke="#6fc3e8"
      strokeWidth="1.5"
      strokeDasharray="3 4"
    />

    {/* Stock table */}
    <rect
      x="352"
      y="268"
      width="122"
      height="130"
      rx="12"
      fill="#18232e"
      stroke="#35506a"
      strokeWidth="1.5"
    />
    <path
      d="M352 280a12 12 0 0 1 12-12h98a12 12 0 0 1 12 12v18H352Z"
      fill="#046999"
    />
    <text x="366" y="289" fontSize="15" fontWeight="700" fill="#ffffff">
      Stock
    </text>
    <text x="366" y="322" fontSize="14" fill="#ffffff">
      ID
    </text>
    <text x="366" y="346" fontSize="14" fill="#ffffff">
      Name
    </text>
    <text x="366" y="370" fontSize="14" fill="#ffffff">
      StockLevel
    </text>
    <circle
      cx="448"
      cy="317"
      r="4.5"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="1.6"
    />
    <path
      d="M452 317h8"
      stroke="#6fc3e8"
      strokeWidth="1.6"
      strokeLinecap="round"
    />

    {/* Orders table */}
    <rect
      x="514"
      y="268"
      width="122"
      height="130"
      rx="12"
      fill="#18232e"
      stroke="#35506a"
      strokeWidth="1.5"
    />
    <path
      d="M514 280a12 12 0 0 1 12-12h98a12 12 0 0 1 12 12v18H514Z"
      fill="#046999"
    />
    <text x="528" y="289" fontSize="15" fontWeight="700" fill="#ffffff">
      Orders
    </text>
    <text x="528" y="322" fontSize="14" fill="#ffffff">
      ID
    </text>
    <rect
      x="522"
      y="331"
      width="106"
      height="22"
      rx="6"
      fill="#6fc3e8"
      fillOpacity="0.2"
    />
    <text x="528" y="346" fontSize="14" fontWeight="700" fill="#6fc3e8">
      StockID
    </text>
    <text x="528" y="370" fontSize="14" fill="#ffffff">
      Amount
    </text>

    {/* Foreign key link */}
    <path d="M474 342H498" stroke="#6fc3e8" strokeWidth="2" />
    <path
      d="M498 342 514 334M498 342 514 342M498 342 514 350"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default HeroSvg;
