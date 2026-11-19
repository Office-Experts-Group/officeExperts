// /app/blog/excel-problems-on-mac/(svgs)/MacMapSvg.jsx
// What carries across from a Windows workbook to Excel for Mac, and what does not. White panel.
// Hex values match: $accent #046999, $text-primary #0d1b2a, $text-secondary #4a5568,
// $line #e3e8ec, $replace-x #c0392b (small accent only), $white #ffffff.

const CARDS = [
  {
    x: 10,
    title: "Works the same",
    color: "#046999",
    icon: "check",
    items: [
      ["Formulas and most", "functions"],
      ["Tables, filters and", "conditional formats"],
      ["Standard charts and", "PivotTables"],
    ],
  },
  {
    x: 222,
    title: "Works differently",
    color: "#2884ad",
    icon: "shuffle",
    items: [
      ["Keyboard shortcuts", "and function keys"],
      ["VBA: some code", "needs changes"],
      ["Solver set-up and", "options"],
    ],
  },
  {
    x: 434,
    title: "Windows only",
    color: "#c0392b",
    icon: "cross",
    items: [
      ["Power Pivot add-in", "(check status)"],
      ["COM add-ins and", "ActiveX controls"],
      ["Some data sources", "and connections"],
    ],
  },
];

const Chip = ({ kind, cx, cy, color }) => (
  <g>
    <circle cx={cx} cy={cy} r="15" fill={color} />
    <g
      transform={`translate(${cx} ${cy})`}
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {kind === "check" && <path d="M-6 0 -2 4 6 -4" />}
      {kind === "shuffle" && (
        <path d="M-6 -3H4M1 -6l3 3-3 3M6 4H-4M-1 1l-3 3 3 3" />
      )}
      {kind === "cross" && <path d="M-5 -5 5 5M5 -5-5 5" />}
    </g>
  </g>
);

const MacMapSvg = () => (
  <svg
    viewBox="0 0 640 420"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="epm-map-title epm-map-desc"
    fontFamily="aptos"
  >
    <title id="epm-map-title">
      What carries across from a Windows workbook to Excel for Mac
    </title>
    <desc id="epm-map-desc">
      A workbook built on Windows splits three ways. Formulas, tables and
      standard charts work the same. Shortcuts, VBA and Solver work differently.
      Power Pivot, COM add-ins and ActiveX controls are Windows only.
    </desc>

    <rect x="190" y="12" width="260" height="52" rx="12" fill="#046999" />
    <text
      x="320"
      y="44"
      fontSize="16"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      Workbook built on Windows
    </text>

    {CARDS.map((c) => (
      <g key={c.title}>
        <path
          d={`M320 64 C320 92 ${c.x + 98} 80 ${c.x + 98} 106`}
          fill="none"
          stroke="#4a5568"
          strokeWidth="2"
        />
        <polygon
          points={`${c.x + 92},100 ${c.x + 98},110 ${c.x + 104},100`}
          fill="#4a5568"
        />
        <rect
          x={c.x}
          y="110"
          width="196"
          height="292"
          rx="14"
          fill="#ffffff"
          stroke="#e3e8ec"
          strokeWidth="1.5"
        />
        <Chip kind={c.icon} cx={c.x + 30} cy="144" color={c.color} />
        <text
          x={c.x + 54}
          y="150"
          fontSize="16"
          fontWeight="700"
          fill="#0d1b2a"
        >
          {c.title}
        </text>
        <line x1={c.x + 16} y1="172" x2={c.x + 180} y2="172" stroke="#e3e8ec" />
        {c.items.map((it, i) => {
          const y0 = 186 + i * 74;
          return (
            <g key={it[0]}>
              <circle cx={c.x + 22} cy={y0 + 8} r="4" fill={c.color} />
              <text x={c.x + 36} y={y0 + 14} fontSize="15" fill="#0d1b2a">
                {it[0]}
              </text>
              <text x={c.x + 36} y={y0 + 36} fontSize="15" fill="#4a5568">
                {it[1]}
              </text>
            </g>
          );
        })}
      </g>
    ))}
  </svg>
);

export default MacMapSvg;
