// /app/services/microsoft-access/integrate-access-with-power-bi/(svgs)/ApbiIntroDiagram.jsx
// Informative diagram: related Access tables, a scheduled refresh, a tidied
// Power BI data model (fact table with lookup tables), then a shared dashboard.
// Hex values and the tokens they match:
//   #0b2433 $ink, #4a5568 $text-secondary, #046999 $accent, #034e72 $accent-dark,
//   #e8f4fa $accent-light, #f7f8f9 $light-bg, #e3e8ec $line, #d4d6d9 $line-strong,
//   #c0392b $replace-x, #fdf6f5 $before-bg, #18232e $dark-surface, #1a2a3a $dark-mid,
//   #6fc3e8 $accent-on-dark, #ffffff $white

const TABLES = [
  {
    x: 24,
    name: "Customers",
    rows: [
      { label: "CustomerID", key: "pk" },
      { label: "Name" },
      { label: "State" },
      { label: "Phone" },
    ],
  },
  {
    x: 188,
    name: "Orders",
    rows: [
      { label: "OrderID", key: "pk" },
      { label: "CustomerID", key: "fk" },
      { label: "ProductID", key: "fk" },
      { label: "OrderDate", flag: true },
    ],
  },
  {
    x: 352,
    name: "Products",
    rows: [
      { label: "ProductID", key: "pk" },
      { label: "Name" },
      { label: "Price" },
      { label: "Stock" },
    ],
  },
];

const TABLE_Y = 50;
const TABLE_W = 144;

const ApbiIntroDiagram = () => (
  <svg
    viewBox="0 0 520 748"
    fontFamily="aptos"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="apbi-intro-diagram-title apbi-intro-diagram-desc"
  >
    <title id="apbi-intro-diagram-title">
      How Access data reaches a Power BI dashboard
    </title>
    <desc id="apbi-intro-diagram-desc">
      Three related Access tables (Customers, Orders and Products) are copied on
      a scheduled refresh into a Power BI data model, where a Sales table links
      to Customer, Product, Date and Region lookups. The model feeds a shared
      sales dashboard with headline figures, a bar chart and a trend line.
    </desc>

    {/* Access database */}
    <rect
      x="8"
      y="8"
      width="504"
      height="204"
      rx="16"
      fill="#f7f8f9"
      stroke="#e3e8ec"
    />
    <text x="24" y="32" fontSize="14" fontWeight="700" fill="#4a5568">
      Your Access database
    </text>
    <text x="496" y="32" fontSize="14" fill="#4a5568" textAnchor="end">
      Forms and reports keep working
    </text>

    {TABLES.map(({ x, name, rows }) => (
      <g key={name}>
        <rect
          x={x}
          y={TABLE_Y}
          width={TABLE_W}
          height="140"
          rx="10"
          fill="#ffffff"
          stroke="#d4d6d9"
        />
        <path
          d={`M${x} ${TABLE_Y + 30}V${TABLE_Y + 10}a10 10 0 0 1 10-10H${x + TABLE_W - 10}a10 10 0 0 1 10 10V${TABLE_Y + 30}Z`}
          fill="#046999"
        />
        <text
          x={x + 12}
          y={TABLE_Y + 20}
          fontSize="15"
          fontWeight="700"
          fill="#ffffff"
        >
          {name}
        </text>
        {rows.map(({ label, key, flag }, i) => {
          const top = TABLE_Y + 30 + i * 27.5;
          const cy = top + 13;
          return (
            <g key={label}>
              {flag && (
                <rect
                  x={x + 1}
                  y={top + 1}
                  width={TABLE_W - 2}
                  height="25"
                  fill="#fdf6f5"
                />
              )}
              {i > 0 && (
                <line
                  x1={x}
                  x2={x + TABLE_W}
                  y1={top}
                  y2={top}
                  stroke="#e3e8ec"
                />
              )}
              {key && (
                <g
                  fill={key === "pk" ? "#046999" : "none"}
                  stroke={key === "pk" ? "#046999" : "#4a5568"}
                  strokeWidth="1.4"
                  strokeLinecap="round"
                >
                  <circle cx={x + 14} cy={cy} r="3.4" />
                  <path
                    d={`M${x + 17.4} ${cy}h7M${x + 22} ${cy}v3`}
                    fill="none"
                  />
                </g>
              )}
              <text
                x={x + 32}
                y={cy + 5}
                fontSize="14"
                fill={flag ? "#c0392b" : "#0b2433"}
              >
                {label}
              </text>
              {flag && (
                <g stroke="#c0392b" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx={x + TABLE_W - 14} cy={cy} r="7" fill="none" />
                  <path
                    d={`M${x + TABLE_W - 14} ${cy - 3}v3.2M${x + TABLE_W - 14} ${cy + 3.6}v.4`}
                  />
                </g>
              )}
            </g>
          );
        })}
      </g>
    ))}

    {/* relationships: Customers to Orders, Products to Orders */}
    <g
      fill="none"
      stroke="#046999"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M168 93H178V119H188" />
      <path d="M188 119l-8-6M188 119l-8 6" />
      <path d="M352 93H342V145H332" />
      <path d="M332 145l8-6M332 145l8 6" />
    </g>
    <circle cx="168" cy="93" r="3" fill="#046999" />
    <circle cx="352" cy="93" r="3" fill="#046999" />

    {/* scheduled refresh */}
    <g
      fill="none"
      stroke="#046999"
      strokeWidth="1.6"
      strokeDasharray="5 5"
      strokeLinecap="round"
    >
      <path d="M96 212V224Q96 234 106 234H414Q424 234 424 224V212" />
      <path d="M260 212V240" />
    </g>
    <rect
      x="170"
      y="240"
      width="180"
      height="34"
      rx="17"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <circle
      cx="193"
      cy="257"
      r="8"
      fill="none"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <path
      d="M193 252v5h4"
      fill="none"
      stroke="#046999"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text x="209" y="262" fontSize="14" fontWeight="700" fill="#0b2433">
      Scheduled refresh
    </text>
    <path d="M260 274V296" stroke="#046999" strokeWidth="1.6" />
    <polygon points="254,290 266,290 260,300" fill="#046999" />

    {/* Power BI data model */}
    <rect
      x="8"
      y="304"
      width="504"
      height="190"
      rx="16"
      fill="#e8f4fa"
      stroke="#046999"
      strokeOpacity="0.28"
    />
    <text x="24" y="328" fontSize="14" fontWeight="700" fill="#034e72">
      Power BI data model
    </text>
    <text x="496" y="328" fontSize="14" fill="#034e72" textAnchor="end">
      Tidied and related
    </text>
    <g fill="none" stroke="#046999" strokeWidth="1.6">
      <path d="M148 372C170 372 170 396 190 396" />
      <path d="M148 442C170 442 170 420 190 420" />
      <path d="M372 372C350 372 350 396 330 396" />
      <path d="M372 442C350 442 350 420 330 420" />
    </g>
    <g fill="#046999">
      <circle cx="148" cy="372" r="3" />
      <circle cx="148" cy="442" r="3" />
      <circle cx="372" cy="372" r="3" />
      <circle cx="372" cy="442" r="3" />
    </g>
    {[
      [28, 350, "Customer"],
      [28, 420, "Date"],
      [372, 350, "Product"],
      [372, 420, "Region"],
    ].map(([x, y, label]) => (
      <g key={label}>
        <rect
          x={x}
          y={y}
          width="120"
          height="44"
          rx="10"
          fill="#ffffff"
          stroke="#046999"
          strokeWidth="1.4"
        />
        <text
          x={x + 60}
          y={y + 27}
          fontSize="14"
          fontWeight="700"
          fill="#0b2433"
          textAnchor="middle"
        >
          {label}
        </text>
      </g>
    ))}
    <rect x="190" y="372" width="140" height="72" rx="12" fill="#046999" />
    <text
      x="260"
      y="402"
      fontSize="16"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      Sales
    </text>
    <text
      x="260"
      y="425"
      fontSize="14"
      fill="#ffffff"
      fillOpacity="0.88"
      textAnchor="middle"
    >
      orders, amounts
    </text>

    {/* publish and share */}
    <path d="M260 494V508" stroke="#046999" strokeWidth="1.6" />
    <rect
      x="160"
      y="508"
      width="200"
      height="34"
      rx="17"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <g fill="none" stroke="#046999" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="180" cy="525" r="3" />
      <circle cx="193" cy="518.5" r="3" />
      <circle cx="193" cy="531.5" r="3" />
      <path d="M182.6 523.6l7.8-3.8M182.6 526.4l7.8 3.8" />
    </g>
    <text x="206" y="530" fontSize="14" fontWeight="700" fill="#0b2433">
      Publish and share
    </text>
    <path d="M260 542V564" stroke="#046999" strokeWidth="1.6" />
    <polygon points="254,558 266,558 260,568" fill="#046999" />

    {/* shared dashboard */}
    <rect
      x="8"
      y="572"
      width="504"
      height="160"
      rx="16"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.16"
    />
    <circle cx="26" cy="592" r="4" fill="#6fc3e8" />
    <circle cx="40" cy="592" r="4" fill="#ffffff" fillOpacity="0.35" />
    <circle cx="54" cy="592" r="4" fill="#ffffff" fillOpacity="0.35" />
    <text x="70" y="597" fontSize="14" fill="#ffffff" fillOpacity="0.75">
      Sales dashboard
    </text>
    <line
      x1="8"
      x2="512"
      y1="608"
      y2="608"
      stroke="#ffffff"
      strokeOpacity="0.08"
    />
    {[
      [20, "Revenue", "$1.2m"],
      [120, "Orders", "3,481"],
      [220, "Margin", "31%"],
    ].map(([x, label, value]) => (
      <g key={label}>
        <rect x={x} y="618" width="92" height="52" rx="10" fill="#1a2a3a" />
        <text
          x={x + 10}
          y="638"
          fontSize="14"
          fill="#ffffff"
          fillOpacity="0.65"
        >
          {label}
        </text>
        <text x={x + 10} y="660" fontSize="18" fontWeight="700" fill="#ffffff">
          {value}
        </text>
      </g>
    ))}
    <rect x="326" y="618" width="174" height="100" rx="10" fill="#1a2a3a" />
    <text x="338" y="640" fontSize="14" fill="#ffffff" fillOpacity="0.65">
      By month
    </text>
    <line
      x1="338"
      x2="488"
      y1="704"
      y2="704"
      stroke="#ffffff"
      strokeOpacity="0.18"
    />
    {[18, 30, 24, 40, 34, 50, 44].map((h, i) => (
      <rect
        key={i}
        x={340 + i * 21}
        y={704 - h}
        width="14"
        height={h}
        rx="3"
        fill={i === 5 ? "#6fc3e8" : "#046999"}
      />
    ))}
    <rect x="20" y="678" width="292" height="40" rx="10" fill="#1a2a3a" />
    <polygon
      points="32,704 64,698 96,701 128,692 160,695 192,686 224,689 256,684 300,686 300,712 32,712"
      fill="#6fc3e8"
      fillOpacity="0.12"
    />
    <polyline
      points="32,704 64,698 96,701 128,692 160,695 192,686 224,689 256,684 300,686"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ApbiIntroDiagram;
