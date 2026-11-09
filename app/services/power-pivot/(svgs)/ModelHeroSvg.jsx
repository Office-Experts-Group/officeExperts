// app/services/power-pivot/(svgs)/ModelHeroSvg.jsx
// Decorative star-schema illustration for the hero: four lookup tables feeding one fact table,
// a DAX measure underneath and a small report on top. Designed for a dark background.
// Colours are hard-coded hex values because SVG attributes cannot read SCSS variables:
//   #046999 $accent, #6fc3e8 $accent-on-dark, #18232e $dark-surface, #1a2a3a $dark-mid

// One table card. `keys` is how many leading fields are shown as key columns (filled dot).
const Table = ({ x, y, w, title, fields, keys = 1, headerFill = "#1a2a3a" }) => {
  const headerH = 30;
  const rowH = 22;
  const h = headerH + fields.length * rowH + 8;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="12"
        fill="#18232e"
        stroke="#ffffff"
        strokeOpacity="0.12"
      />
      {/* Header band with rounded top corners only */}
      <path
        d={`M${x} ${y + headerH}V${y + 12}a12 12 0 0 1 12-12h${w - 24}a12 12 0 0 1 12 12V${y + headerH}z`}
        fill={headerFill}
      />
      <text x={x + 14} y={y + 20} fontSize="12" fontWeight="700" fill="#ffffff">
        {title}
      </text>
      {fields.map((field, i) => {
        const cy = y + headerH + 14 + i * rowH;
        return (
          <g key={field}>
            <circle
              cx={x + 16}
              cy={cy}
              r="3"
              fill={i < keys ? "#6fc3e8" : "none"}
              stroke="#6fc3e8"
              strokeOpacity={i < keys ? 1 : 0.4}
            />
            <text
              x={x + 28}
              y={cy + 4}
              fontSize="11"
              fill="#ffffff"
              fillOpacity="0.7"
            >
              {field}
            </text>
          </g>
        );
      })}
    </g>
  );
};

export const ModelHeroSvg = () => (
  <svg
    viewBox="0 0 560 460"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    role="presentation"
  >
    {/* Relationship lines: one side (1) to many (∞) */}
    <g
      fill="none"
      stroke="#6fc3e8"
      strokeOpacity="0.55"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M85 114V196H190" />
      <path d="M475 114V196H370" />
      <path d="M85 346V264H190" />
      <path d="M475 346V264H370" />
      {/* Model feeds the report above, measure is calculated from the model below */}
      <path d="M280 156V120" strokeDasharray="4 5" />
      <path d="M280 346V304" strokeDasharray="4 5" />
    </g>

    <g fontSize="12" fontWeight="700" fill="#6fc3e8">
      <text x="93" y="134">1</text>
      <text x="93" y="332">1</text>
      <text x="483" y="134">1</text>
      <text x="483" y="332">1</text>
      <text x="172" y="188">∞</text>
      <text x="172" y="258">∞</text>
      <text x="378" y="188">∞</text>
      <text x="378" y="258">∞</text>
    </g>

    {/* Lookup (dimension) tables in the four corners */}
    <Table x={10} y={10} w={150} title="Calendar" fields={["Date", "Month", "Financial year"]} />
    <Table x={400} y={10} w={150} title="Product" fields={["ProductID", "Category", "Cost"]} />
    <Table x={10} y={346} w={150} title="Customer" fields={["CustomerID", "Segment", "State"]} />
    <Table x={400} y={346} w={150} title="Region" fields={["RegionID", "Territory", "Manager"]} />

    {/* Fact table in the centre, with an accent header */}
    <Table
      x={190}
      y={156}
      w={180}
      title="Sales"
      fields={["Date", "ProductID", "CustomerID", "RegionID", "Amount"]}
      keys={4}
      headerFill="#046999"
    />

    {/* Report card (top centre) */}
    <rect x="190" y="10" width="180" height="110" rx="14" fill="#ffffff" />
    <text x="206" y="34" fontSize="11" fontWeight="700" fill="#0d1b2a">
      Sales by quarter
    </text>
    <g fill="#046999">
      <rect x="208" y="72" width="28" height="32" rx="4" fillOpacity="0.35" />
      <rect x="250" y="58" width="28" height="46" rx="4" fillOpacity="0.55" />
      <rect x="292" y="66" width="28" height="38" rx="4" fillOpacity="0.75" />
      <rect x="334" y="42" width="28" height="62" rx="4" />
    </g>

    {/* DAX measure card (bottom centre) */}
    <rect x="190" y="346" width="180" height="104" rx="14" fill="#046999" />
    <text x="208" y="372" fontSize="10" fontWeight="700" letterSpacing="1.5" fill="#ffffff" fillOpacity="0.65">
      MEASURE
    </text>
    <text x="208" y="396" fontSize="15" fontWeight="700" fill="#ffffff">
      Total Sales
    </text>
    <text x="208" y="432" fontSize="26" fontWeight="700" fill="#ffffff">
      $4.82M
    </text>
    <rect x="318" y="358" width="36" height="18" rx="9" fill="#ffffff" fillOpacity="0.18" />
    <text x="336" y="371" fontSize="10" fontWeight="700" fill="#ffffff" textAnchor="middle">
      DAX
    </text>
  </svg>
);
