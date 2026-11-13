// /app/services/microsoft-power-platform/excel-to-power-bi-migration/(svgs)/EpbmModelSvg.jsx

// Intro diagram: three separate workbooks become a star-schema data model
// (one fact table, four lookup tables), which powers one shared dashboard.
// Sits on a light panel. Static. Colours (globals.scss tokens):
//   #046999 $accent   #e8f4fa $accent-light   #6fc3e8 $accent-on-dark
//   #0d1b2a $text-primary   #4a5568 $text-secondary   #d4d6d9 $line-strong
//   #e3e8ec $line   #f7f8f9 $light-bg   #c0392b $replace-x (tiny accents only)

const WORKBOOKS = [
  { y: 50, name: "Sales.xlsx", warn: [1, 3] },
  { y: 140, name: "Stock.xlsx", warn: [2, 0] },
  { y: 230, name: "Finance.xlsx", warn: [0, 4] },
];

// lookup tables around the fact table
const DIMS = [
  { x: 250, y: 44, name: "Date", rows: 2 },
  { x: 424, y: 44, name: "Product", rows: 2 },
  { x: 250, y: 236, name: "Customer", rows: 2 },
  { x: 424, y: 236, name: "Region", rows: 2 },
];

const EpbmModelSvg = () => (
  <svg
    viewBox="0 0 720 330"
    role="img"
    aria-labelledby="epbm-model-title epbm-model-desc"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="epbm-model-title">
      From separate workbooks to one data model and one dashboard
    </title>
    <desc id="epbm-model-desc">
      Three separate workbooks, Sales, Stock and Finance, each with a few
      inconsistent cells, feed a single Power BI data model. The model has one
      central sales table linked to Date, Product, Customer and Region lookup
      tables, and it powers one dashboard that is shared with everyone.
    </desc>

    <defs>
      <marker
        id="epbm-model-arrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto-start-reverse"
      >
        <path d="M0 0 10 5 0 10Z" fill="#046999" />
      </marker>
      <pattern
        id="epbm-model-dots"
        width="14"
        height="14"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="2" cy="2" r="1.2" fill="#d4d6d9" />
      </pattern>
    </defs>

    {/* column labels */}
    {[
      [20, "YOUR WORKBOOKS"],
      [262, "ONE DATA MODEL"],
      [560, "ONE DASHBOARD"],
    ].map(([x, label]) => (
      <text
        key={label}
        x={x}
        y="26"
        fontSize="14"
        fontWeight="700"
        letterSpacing="1.2"
        fill="#4a5568"
      >
        {label}
      </text>
    ))}

    {/* model backdrop */}
    <rect
      x="236"
      y="36"
      width="298"
      height="264"
      rx="18"
      fill="url(#epbm-model-dots)"
    />

    {/* workbooks */}
    {WORKBOOKS.map(({ y, name, warn }) => (
      <g key={name}>
        <rect
          x="20"
          y={y}
          width="170"
          height="74"
          rx="10"
          fill="#ffffff"
          stroke="#d4d6d9"
        />
        <path
          d={`M20 ${y + 10} a10 10 0 0 1 10 -10 h150 a10 10 0 0 1 10 10 v14 h-170 Z`}
          fill="#f7f8f9"
        />
        <line x1="20" y1={y + 24} x2="190" y2={y + 24} stroke="#e3e8ec" />
        <rect x="30" y={y + 7} width="10" height="10" rx="2" fill="#046999" />
        <text x="48" y={y + 17} fontSize="14" fill="#0d1b2a">
          {name}
        </text>
        {[0, 1, 2].map((r) =>
          [0, 1, 2, 3, 4].map((c) => {
            const bad = warn[0] === r && warn[1] === c;
            return (
              <rect
                key={`${r}-${c}`}
                x={30 + c * 31}
                y={y + 32 + r * 12}
                width="27"
                height="8"
                rx="2"
                fill={bad ? "rgba(192,57,43,0.18)" : "#e3e8ec"}
                stroke={bad ? "#c0392b" : "none"}
                strokeWidth="1"
              />
            );
          }),
        )}
      </g>
    ))}

    {/* workbooks into the fact table */}
    <g
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
      markerEnd="url(#epbm-model-arrow)"
    >
      <path d="M190 87 C262 87 262 158 326 160" />
      <path d="M190 177 L326 177" />
      <path d="M190 267 C262 267 262 196 326 194" />
    </g>

    {/* relationships */}
    <g stroke="#6fc3e8" strokeWidth="2" fill="none">
      <path d="M298 98 L350 130" />
      <path d="M472 98 L420 130" />
      <path d="M298 236 L350 216" />
      <path d="M472 236 L420 216" />
    </g>

    {/* lookup tables */}
    {DIMS.map(({ x, y, name }) => (
      <g key={name}>
        <rect
          x={x}
          y={y}
          width="96"
          height="54"
          rx="10"
          fill="#ffffff"
          stroke="#6fc3e8"
        />
        <path
          d={`M${x} ${y + 10} a10 10 0 0 1 10 -10 h76 a10 10 0 0 1 10 10 v12 h-96 Z`}
          fill="#e8f4fa"
        />
        <text
          x={x + 48}
          y={y + 16}
          fontSize="14"
          fontWeight="700"
          textAnchor="middle"
          fill="#0d1b2a"
        >
          {name}
        </text>
        <rect
          x={x + 12}
          y={y + 30}
          width="56"
          height="6"
          rx="3"
          fill="#d4d6d9"
        />
        <rect
          x={x + 12}
          y={y + 41}
          width="40"
          height="6"
          rx="3"
          fill="#e3e8ec"
        />
      </g>
    ))}

    {/* fact table */}
    <rect
      x="330"
      y="130"
      width="110"
      height="86"
      rx="12"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <path
      d="M330 142 a12 12 0 0 1 12 -12 h86 a12 12 0 0 1 12 12 v14 h-110 Z"
      fill="#046999"
    />
    <text
      x="385"
      y="149"
      fontSize="14"
      fontWeight="700"
      textAnchor="middle"
      fill="#ffffff"
    >
      Sales
    </text>
    {[166, 180, 194].map((y, i) => (
      <g key={y}>
        {/* key glyph */}
        <circle
          cx="346"
          cy={y + 3}
          r="3.5"
          fill="none"
          stroke="#046999"
          strokeWidth="1.5"
        />
        <path
          d={`M349.5 ${y + 3} h7 m-3 0 v3`}
          stroke="#046999"
          strokeWidth="1.5"
          fill="none"
        />
        <rect
          x="364"
          y={y}
          width={[58, 46, 52][i]}
          height="6"
          rx="3"
          fill="#d4d6d9"
        />
      </g>
    ))}

    {/* model into the dashboard */}
    <path
      d="M440 173 L556 173"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
      markerEnd="url(#epbm-model-arrow)"
    />

    {/* dashboard */}
    <rect x="560" y="44" width="144" height="250" rx="16" fill="#046999" />
    <rect
      x="574"
      y="60"
      width="54"
      height="40"
      rx="8"
      fill="rgba(255,255,255,0.16)"
    />
    <rect
      x="582"
      y="70"
      width="26"
      height="5"
      rx="2.5"
      fill="rgba(255,255,255,0.6)"
    />
    <rect x="582" y="82" width="36" height="9" rx="3" fill="#ffffff" />
    <rect
      x="636"
      y="60"
      width="54"
      height="40"
      rx="8"
      fill="rgba(255,255,255,0.16)"
    />
    <rect
      x="644"
      y="70"
      width="26"
      height="5"
      rx="2.5"
      fill="rgba(255,255,255,0.6)"
    />
    <rect x="644" y="82" width="30" height="9" rx="3" fill="#6fc3e8" />
    <rect
      x="574"
      y="110"
      width="116"
      height="92"
      rx="8"
      fill="rgba(255,255,255,0.1)"
    />
    {[34, 52, 40, 64, 56, 74].map((h, i) => (
      <rect
        key={i}
        x={586 + i * 16}
        y={190 - h}
        width="10"
        height={h}
        rx="2"
        fill={i > 3 ? "#ffffff" : "rgba(255,255,255,0.55)"}
      />
    ))}
    <rect
      x="574"
      y="212"
      width="54"
      height="68"
      rx="8"
      fill="rgba(255,255,255,0.1)"
    />
    <circle
      cx="601"
      cy="246"
      r="17"
      fill="none"
      stroke="rgba(255,255,255,0.25)"
      strokeWidth="7"
    />
    <circle
      cx="601"
      cy="246"
      r="17"
      fill="none"
      stroke="#ffffff"
      strokeWidth="7"
      strokeDasharray="70 107"
      transform="rotate(-90 601 246)"
    />
    <rect
      x="636"
      y="212"
      width="54"
      height="68"
      rx="8"
      fill="rgba(255,255,255,0.1)"
    />
    <path
      d="M644 266 L654 256 L664 260 L674 242 L682 236"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* shared with everyone */}
    {[586, 602, 618].map((cx, i) => (
      <circle
        key={cx}
        cx={cx}
        cy="314"
        r="9"
        fill={i === 1 ? "#046999" : "#e8f4fa"}
        stroke="#ffffff"
        strokeWidth="2"
      />
    ))}
    <text x="636" y="319" fontSize="14" fill="#4a5568">
      Everyone
    </text>
  </svg>
);

export default EpbmModelSvg;
