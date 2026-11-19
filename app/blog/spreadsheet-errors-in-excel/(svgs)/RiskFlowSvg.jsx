// /app/blog/spreadsheet-errors-in-excel/(svgs)/RiskFlowSvg.jsx
// Decision flow: how much attention does this spreadsheet need?
// Hex values map to tokens: #046999 $accent, #e8f4fa $accent-light,
// #0d1b2a $text-primary, #4a5568 $text-secondary, #ffffff $white,
// #e3e8ec $line, #f7f8f9 $light-bg.

export default function RiskFlowSvg({ className }) {
  const questions = [
    {
      y: 20,
      l1: "Does it feed money, staffing",
      l2: "or compliance decisions?",
    },
    {
      y: 164,
      l1: "Has someone other than the",
      l2: "builder checked the logic?",
    },
    {
      y: 308,
      l1: "Is it slow, fragile or built",
      l2: "from many linked files?",
    },
  ];
  const outcomes = [
    {
      y: 14,
      title: "Light touch",
      l1: "Tidy it, label the inputs",
      l2: "and back it up.",
      solid: false,
    },
    {
      y: 158,
      title: "Add a review step",
      l1: "Peer check, lock formulas",
      l2: "and run the audit tools.",
      solid: false,
    },
    {
      y: 302,
      title: "Rebuild the foundation",
      l1: "Power Query, Power BI",
      l2: "or a proper database.",
      solid: true,
    },
  ];

  return (
    <svg
      className={className}
      viewBox="0 0 720 570"
      role="img"
      aria-labelledby="sse-flow-title sse-flow-desc"
      fontFamily="aptos"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="sse-flow-title">
        How much attention does your spreadsheet need?
      </title>
      <desc id="sse-flow-desc">
        A three-question flow. If the file does not feed important decisions,
        keep a light touch. If it does but nobody has reviewed it, add a review
        step. If it is slow, fragile or built from many linked files, rebuild
        the foundation. Otherwise maintain it with regular audits.
      </desc>
      <defs>
        <marker
          id="sse-flow-arrow"
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

      {questions.map((q, i) => (
        <g key={q.y}>
          <rect
            x="30"
            y={q.y}
            width="310"
            height="84"
            rx="12"
            fill="#f7f8f9"
            stroke="#e3e8ec"
          />
          <text
            x="48"
            y={q.y + 36}
            fontSize="16"
            fontWeight="700"
            fill="#0d1b2a"
          >
            {q.l1}
          </text>
          <text
            x="48"
            y={q.y + 60}
            fontSize="16"
            fontWeight="700"
            fill="#0d1b2a"
          >
            {q.l2}
          </text>

          {/* side arrow to outcome */}
          <line
            x1="340"
            y1={q.y + 42}
            x2="428"
            y2={q.y + 42}
            stroke="#046999"
            strokeWidth="2"
            markerEnd="url(#sse-flow-arrow)"
          />
          <text
            x="384"
            y={q.y + 32}
            fontSize="14"
            fontWeight="700"
            fill="#046999"
            textAnchor="middle"
          >
            {i === 2 ? "Yes" : "No"}
          </text>
        </g>
      ))}

      {/* down arrows */}
      <line
        x1="185"
        y1="104"
        x2="185"
        y2="160"
        stroke="#046999"
        strokeWidth="2"
        markerEnd="url(#sse-flow-arrow)"
      />
      <text x="197" y="138" fontSize="14" fontWeight="700" fill="#046999">
        Yes
      </text>
      <line
        x1="185"
        y1="248"
        x2="185"
        y2="304"
        stroke="#046999"
        strokeWidth="2"
        markerEnd="url(#sse-flow-arrow)"
      />
      <text x="197" y="282" fontSize="14" fontWeight="700" fill="#046999">
        Yes
      </text>
      <line
        x1="185"
        y1="392"
        x2="185"
        y2="448"
        stroke="#046999"
        strokeWidth="2"
        markerEnd="url(#sse-flow-arrow)"
      />
      <text x="197" y="426" fontSize="14" fontWeight="700" fill="#046999">
        No
      </text>

      {outcomes.map((o) => (
        <g key={o.title}>
          <rect
            x="430"
            y={o.y}
            width="270"
            height="96"
            rx="12"
            fill={o.solid ? "#046999" : "#e8f4fa"}
            stroke="#046999"
            strokeOpacity={o.solid ? 0 : 0.28}
          />
          <text
            x="448"
            y={o.y + 32}
            fontSize="16"
            fontWeight="700"
            fill={o.solid ? "#ffffff" : "#0d1b2a"}
          >
            {o.title}
          </text>
          <text
            x="448"
            y={o.y + 56}
            fontSize="14"
            fill={o.solid ? "rgba(255,255,255,0.88)" : "#4a5568"}
          >
            {o.l1}
          </text>
          <text
            x="448"
            y={o.y + 76}
            fontSize="14"
            fill={o.solid ? "rgba(255,255,255,0.88)" : "#4a5568"}
          >
            {o.l2}
          </text>
        </g>
      ))}

      {/* final outcome */}
      <rect
        x="30"
        y="450"
        width="310"
        height="96"
        rx="12"
        fill="#e8f4fa"
        stroke="#046999"
        strokeOpacity="0.28"
      />
      <text x="48" y="482" fontSize="16" fontWeight="700" fill="#0d1b2a">
        Maintain and audit
      </text>
      <text x="48" y="506" fontSize="14" fill="#4a5568">
        Schedule a regular health check
      </text>
      <text x="48" y="526" fontSize="14" fill="#4a5568">
        and keep notes on the logic.
      </text>
    </svg>
  );
}
