// /app/services/microsoft-power-platform/power-bi-data-integration/(svgs)/PbdiSilosDiagram.jsx
// Intro diagram: four separate reports that disagree, versus one connected data model and one dashboard.
// Hex values and the tokens they match:
//   #fdf6f5 $before-bg, #c0392b $before-border, #feb2b2 $error-border, #e8f4fa $accent-light,
//   #046999 $accent, #111820 $dark-bg, #6fc3e8 $accent-on-dark, #0b2433 $ink,
//   #4a5568 $text-secondary, #e3e8ec $line, #d4d6d9 $line-strong, #ffffff $white

const REPORTS = [
  {
    x: 24,
    y: 84,
    label: "Spreadsheet",
    value: "$1.20M",
    bars: [10, 18, 14, 22],
  },
  { x: 180, y: 84, label: "CRM", value: "$1.18M", bars: [16, 12, 20, 14] },
  {
    x: 24,
    y: 224,
    label: "Accounting",
    value: "$1.31M",
    bars: [12, 22, 10, 18],
  },
  {
    x: 180,
    y: 224,
    label: "Database",
    value: "$1.12M",
    bars: [20, 14, 18, 10],
  },
];

const SOURCES = [
  { x: 426, label: "Sheets" },
  { x: 508, label: "CRM" },
  { x: 590, label: "Finance" },
  { x: 672, label: "SQL" },
];

const PbdiSilosDiagram = () => (
  <svg
    viewBox="0 0 760 470"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="pbdi-silos-title pbdi-silos-desc"
  >
    <title id="pbdi-silos-title">
      Separate reports versus one connected Power BI model
    </title>
    <desc id="pbdi-silos-desc">
      On the left, four reports built from separate spreadsheet, CRM, accounting
      and database exports each show a different sales total. On the right, the
      same sources feed one data model with a sales table linked to customer,
      product and date tables, and a single dashboard shows one sales total.
    </desc>

    <defs>
      <marker
        id="pbdi-silos-arrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto-start-reverse"
      >
        <path d="M1 1l8 4-8 4z" fill="#046999" />
      </marker>
    </defs>

    {/* before panel */}
    <rect width="350" height="470" rx="24" fill="#fdf6f5" />
    <text x="24" y="40" fontSize="15" fontWeight="700" fill="#0b2433">
      Before: four separate reports
    </text>
    <text x="24" y="62" fontSize="14" fill="#4a5568">
      Same question, different answers
    </text>

    {REPORTS.map(({ x, y, label, value, bars }) => (
      <g key={label}>
        <rect
          x={x}
          y={y}
          width="146"
          height="124"
          rx="12"
          fill="#ffffff"
          stroke="#e3e8ec"
          strokeWidth="1.5"
        />
        <text
          x={x + 12}
          y={y + 26}
          fontSize="14"
          fontWeight="700"
          fill="#0b2433"
        >
          {label}
        </text>
        {bars.map((h, i) => (
          <rect
            key={i}
            x={x + 12 + i * 14}
            y={y + 62 - h}
            width="9"
            height={h}
            rx="2"
            fill="#d4d6d9"
          />
        ))}
        <text x={x + 12} y={y + 82} fontSize="14" fill="#4a5568">
          Total sales
        </text>
        <text
          x={x + 12}
          y={y + 105}
          fontSize="20"
          fontWeight="700"
          fill="#0b2433"
        >
          {value}
        </text>
      </g>
    ))}

    <circle cx="175" cy="216" r="14" fill="#c0392b" />
    <text
      x="175"
      y="222"
      fontSize="16"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      ≠
    </text>

    <rect
      x="24"
      y="372"
      width="302"
      height="74"
      rx="14"
      fill="#ffffff"
      stroke="#feb2b2"
      strokeWidth="1.5"
    />
    <text x="40" y="402" fontSize="14" fontWeight="700" fill="#0b2433">
      Teams copy, paste and argue
    </text>
    <text x="40" y="424" fontSize="14" fill="#4a5568">
      over which number is right.
    </text>

    {/* connector between the panels */}
    <circle cx="380" cy="235" r="22" fill="#046999" />
    <path
      d="M371 235h17M382 227l8 8-8 8"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* after panel */}
    <rect x="410" width="350" height="470" rx="24" fill="#e8f4fa" />
    <text x="434" y="40" fontSize="15" fontWeight="700" fill="#0b2433">
      After: one connected model
    </text>
    <text x="434" y="62" fontSize="14" fill="#4a5568">
      Same question, one answer
    </text>

    {SOURCES.map(({ x, label }) => (
      <g key={label}>
        <rect
          x={x}
          y="84"
          width="72"
          height="34"
          rx="10"
          fill="#ffffff"
          stroke="#d4d6d9"
          strokeWidth="1.5"
        />
        <text
          x={x + 36}
          y="106"
          fontSize="14"
          fontWeight="700"
          fill="#0b2433"
          textAnchor="middle"
        >
          {label}
        </text>
      </g>
    ))}

    {/* sources into the sales table */}
    <g fill="none" stroke="#046999" strokeWidth="2" strokeLinecap="round">
      <path d="M462 118 C462 160 560 150 560 194" />
      <path d="M544 118 C544 160 574 150 574 194" />
      <path d="M626 118 C626 160 596 150 596 194" />
      <path d="M708 118 C708 160 610 150 610 194" />
    </g>

    {/* star schema */}
    <g stroke="#046999" strokeWidth="2" strokeLinecap="round">
      <path d="M516 238h18" />
      <path d="M636 238h18" />
      <path d="M585 280v24" />
    </g>
    <g fill="#ffffff" stroke="#046999" strokeWidth="2">
      <rect x="424" y="216" width="92" height="44" rx="10" />
      <rect x="654" y="216" width="92" height="44" rx="10" />
      <rect x="545" y="304" width="80" height="44" rx="10" />
    </g>
    <g fontSize="14" fontWeight="700" fill="#0b2433" textAnchor="middle">
      <text x="470" y="243">
        Customers
      </text>
      <text x="700" y="243">
        Products
      </text>
      <text x="585" y="331">
        Dates
      </text>
    </g>

    <rect
      x="534"
      y="196"
      width="102"
      height="84"
      rx="10"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
    />
    <rect x="535" y="197" width="100" height="36" rx="9" fill="#046999" />
    <text
      x="585"
      y="220"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      Sales
    </text>
    <g stroke="#d4d6d9" strokeWidth="2" strokeLinecap="round">
      <path d="M548 247h74" />
      <path d="M548 258h54" />
      <path d="M548 269h66" />
    </g>

    {/* model into the dashboard */}
    <path
      d="M585 348v24"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
      markerEnd="url(#pbdi-silos-arrow)"
    />

    <rect x="470" y="378" width="230" height="68" rx="14" fill="#111820" />
    <text x="488" y="402" fontSize="14" fill="#ffffff" fillOpacity="0.75">
      Total sales
    </text>
    <text x="488" y="428" fontSize="20" fontWeight="700" fill="#ffffff">
      $1.20M
    </text>
    <g fill="#6fc3e8">
      <rect x="590" y="408" width="12" height="14" rx="2" />
      <rect x="608" y="400" width="12" height="22" rx="2" />
      <rect x="626" y="404" width="12" height="18" rx="2" />
    </g>
    <circle cx="672" cy="412" r="12" fill="#6fc3e8" />
    <path
      d="M666 412l4 4 7-8"
      fill="none"
      stroke="#111820"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PbdiSilosDiagram;
