// /app/blog/microsoft-access-on-mac/(svgs)/MigrationMapSvg.jsx
// Map: what carries across from Access and what has to be rebuilt.
// Hex values and the tokens they match:
//   #046999 $accent   #e8f4fa $accent-light   #f7f8f9 $light-bg
//   #d4d6d9 $line-strong   #0d1b2a $text-primary   #4a5568 $text-secondary
//   #034e72 $accent-dark

const ROWS = [
  {
    y: 48,
    from: "Tables and data",
    fromSub: "Rows, fields, links",
    pill: "Carries across",
    pillStyle: "solid",
    to: "Imported records",
    toSub: "Usually via CSV export",
  },
  {
    y: 148,
    from: "Queries",
    fromSub: "Joins, filters, totals",
    pill: "Reconfigure",
    pillStyle: "light",
    to: "Rebuilt queries",
    toSub: "Check each result matches",
  },
  {
    y: 248,
    from: "Forms and reports",
    fromSub: "The screens people use",
    pill: "Rebuild",
    pillStyle: "slate",
    to: "New screens",
    toSub: "Designed in the new tool",
  },
  {
    y: 348,
    from: "VBA and macros",
    fromSub: "Automation and rules",
    pill: "Rewrite",
    pillStyle: "slate",
    to: "New automation",
    toSub: "Not converted automatically",
  },
];

const PILLS = {
  solid: { fill: "#046999", text: "#ffffff", stroke: "#046999" },
  light: { fill: "#e8f4fa", text: "#034e72", stroke: "#046999" },
  slate: { fill: "#ffffff", text: "#4a5568", stroke: "#4a5568" },
};

export default function MigrationMapSvg() {
  return (
    <svg
      viewBox="0 0 760 450"
      role="img"
      aria-labelledby="mac-map-title mac-map-desc"
      fontFamily="aptos"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="mac-map-title">
        What carries across when you leave Access
      </title>
      <desc id="mac-map-desc">
        Four rows. Tables and data carry across, usually through a CSV export.
        Queries need reconfiguring. Forms and reports are rebuilt. VBA and
        macros are rewritten, because they are not converted automatically.
      </desc>
      <defs>
        <marker
          id="mac-map-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto-start-reverse"
        >
          <path d="M1 1l8 4-8 4z" fill="#046999" />
        </marker>
      </defs>

      <text
        x="20"
        y="30"
        fontSize="14"
        fontWeight="700"
        fill="#4a5568"
        letterSpacing="1"
      >
        IN ACCESS
      </text>
      <text
        x="490"
        y="30"
        fontSize="14"
        fontWeight="700"
        fill="#046999"
        letterSpacing="1"
      >
        IN THE NEW TOOL
      </text>

      {ROWS.map((r) => {
        const p = PILLS[r.pillStyle];
        return (
          <g key={r.from}>
            <rect
              x="20"
              y={r.y}
              width="250"
              height="80"
              rx="14"
              fill="#f7f8f9"
              stroke="#d4d6d9"
              strokeWidth="1.5"
            />
            <text
              x="40"
              y={r.y + 33}
              fontSize="16"
              fontWeight="700"
              fill="#0d1b2a"
            >
              {r.from}
            </text>
            <text x="40" y={r.y + 57} fontSize="14" fill="#4a5568">
              {r.fromSub}
            </text>

            <path
              d={`M270 ${r.y + 40}H312`}
              stroke="#046999"
              strokeWidth="2"
              fill="none"
            />
            <rect
              x="314"
              y={r.y + 26}
              width="132"
              height="28"
              rx="14"
              fill={p.fill}
              stroke={p.stroke}
              strokeWidth="1.5"
            />
            <text
              x="380"
              y={r.y + 45}
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill={p.text}
            >
              {r.pill}
            </text>
            <path
              d={`M446 ${r.y + 40}H486`}
              stroke="#046999"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#mac-map-arrow)"
            />

            <rect
              x="490"
              y={r.y}
              width="250"
              height="80"
              rx="14"
              fill="#e8f4fa"
              stroke="#046999"
              strokeOpacity="0.45"
              strokeWidth="1.5"
            />
            <text
              x="510"
              y={r.y + 33}
              fontSize="16"
              fontWeight="700"
              fill="#034e72"
            >
              {r.to}
            </text>
            <text x="510" y={r.y + 57} fontSize="14" fill="#4a5568">
              {r.toSub}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
