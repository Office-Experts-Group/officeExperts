// /app/blog/spreadsheet-errors-in-excel/(svgs)/ErrorTravelSvg.jsx
// How one small slip grows as it travels through a workbook.
// Hex values map to tokens: #046999 $accent, #e8f4fa $accent-light,
// #0d1b2a $text-primary, #4a5568 $text-secondary, #e3e8ec $line,
// #f7f8f9 $light-bg. #c0392b is $replace-x (tiny purposeful accent only).

export default function ErrorTravelSvg({ className }) {
  const boxes = [
    { x: 20, title: "Inputs", l1: "Raw data typed", l2: "or pasted in" },
    {
      x: 214,
      title: "Calculations",
      l1: "Formulas copied",
      l2: "down the sheet",
    },
    { x: 408, title: "Summary", l1: "Totals, pivots", l2: "and charts" },
    { x: 602, title: "Report", l1: "Slides, emails", l2: "and decisions" },
  ];
  const pills = [
    ["One mistyped", "input slips by"],
    ["Formula copied", "one row short"],
    ["Hidden tab with", "an old rate"],
    ["Wrong number", "guides a choice"],
  ];
  const radii = [6, 10, 15, 21];

  return (
    <svg
      className={className}
      viewBox="0 0 770 330"
      role="img"
      aria-labelledby="sse-travel-title sse-travel-desc"
      fontFamily="aptos"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="sse-travel-title">How a small spreadsheet error grows</title>
      <desc id="sse-travel-desc">
        A row of four stages: inputs, calculations, summary and report. A red
        dot above each stage gets bigger from left to right to show the impact
        growing, and a note under each stage names a typical slip.
      </desc>
      <defs>
        <marker
          id="sse-travel-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto"
        >
          <path d="M1 1l8 4-8 4z" fill="#046999" />
        </marker>
      </defs>

      {/* impact line */}
      <line x1="95" y1="36" x2="677" y2="36" stroke="#e3e8ec" strokeWidth="2" />
      {boxes.map((b, i) => (
        <circle
          key={b.title}
          cx={b.x + 75}
          cy="36"
          r={radii[i]}
          fill="#c0392b"
          fillOpacity={0.35 + i * 0.2}
        />
      ))}
      <text x="20" y="22" fontSize="14" fill="#4a5568">
        Small slip
      </text>
      <text x="750" y="22" fontSize="14" fill="#4a5568" textAnchor="end">
        Costly decision
      </text>

      {/* stages */}
      {boxes.map((b, i) => (
        <g key={b.title}>
          <rect
            x={b.x}
            y="76"
            width="150"
            height="100"
            rx="12"
            fill={i === 3 ? "#046999" : "#e8f4fa"}
            stroke="#046999"
            strokeOpacity={i === 3 ? 0 : 0.28}
          />
          <text
            x={b.x + 16}
            y="106"
            fontSize="16"
            fontWeight="700"
            fill={i === 3 ? "#ffffff" : "#0d1b2a"}
          >
            {b.title}
          </text>
          <text
            x={b.x + 16}
            y="132"
            fontSize="14"
            fill={i === 3 ? "rgba(255,255,255,0.88)" : "#4a5568"}
          >
            {b.l1}
          </text>
          <text
            x={b.x + 16}
            y="152"
            fontSize="14"
            fill={i === 3 ? "rgba(255,255,255,0.88)" : "#4a5568"}
          >
            {b.l2}
          </text>
          {i < 3 && (
            <line
              x1={b.x + 154}
              y1="126"
              x2={b.x + 190}
              y2="126"
              stroke="#046999"
              strokeWidth="2"
              markerEnd="url(#sse-travel-arrow)"
            />
          )}
          <line
            x1={b.x + 75}
            y1="176"
            x2={b.x + 75}
            y2="212"
            stroke="#e3e8ec"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <rect
            x={b.x}
            y="212"
            width="150"
            height="70"
            rx="10"
            fill="#f7f8f9"
            stroke="#e3e8ec"
          />
          <circle cx={b.x + 18} cy="237" r="5" fill="#c0392b" />
          <text x={b.x + 32} y="242" fontSize="14" fill="#0d1b2a">
            {pills[i][0]}
          </text>
          <text x={b.x + 32} y="263" fontSize="14" fill="#0d1b2a">
            {pills[i][1]}
          </text>
        </g>
      ))}
    </svg>
  );
}
