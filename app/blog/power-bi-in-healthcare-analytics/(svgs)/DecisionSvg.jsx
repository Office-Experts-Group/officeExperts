// /app/blog/power-bi-in-healthcare-analytics/(svgs)/DecisionSvg.jsx
// Decision flow: which healthcare dashboard to build first.
// Hex values map to globals.scss tokens:
//   #0d1b2a $text-primary, #4a5568 $text-secondary, #046999 $accent,
//   #034e72 $accent-dark, #e8f4fa $accent-light, #f7f8f9 $light-bg,
//   #d4d6d9 $line-strong, #ffffff $white.

const ROWS = [
  {
    question: [
      "Are unplanned returns to hospital",
      "costing you money or penalties?",
    ],
    outcome: ["Readmission risk dashboard", "Who may return, and why"],
  },
  {
    question: [
      "Do waits, bed shortages or discharge",
      "delays dominate the day?",
    ],
    outcome: ["Patient flow dashboard", "Beds, waits and discharge timing"],
  },
  {
    question: [
      "Do you look after a large group of",
      "patients with long-term conditions?",
    ],
    outcome: [
      "Population health dashboard",
      "Care gaps by condition and group",
    ],
  },
  {
    question: ["None of these, or not sure?"],
    outcome: ["Quality scorecard", "Built from measures you report now"],
    recommended: true,
  },
];

const rowY = (i) => 20 + i * 120;

const DecisionSvg = () => (
  <svg
    viewBox="0 0 720 500"
    role="img"
    aria-labelledby="hca-decision-title hca-decision-desc"
    fontFamily="aptos"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    <title id="hca-decision-title">
      Choosing your first healthcare dashboard
    </title>
    <desc id="hca-decision-desc">
      A set of questions. If unplanned returns are the problem, build a
      readmission risk dashboard. If waits and bed shortages dominate, build a
      patient flow dashboard. If you manage many patients with long-term
      conditions, build a population health dashboard. Otherwise start with a
      quality scorecard.
    </desc>

    {ROWS.map(({ question, outcome, recommended }, i) => {
      const y = rowY(i);
      const isLast = i === ROWS.length - 1;
      return (
        <g key={outcome[0]}>
          {/* Question */}
          <rect
            x="10"
            y={y}
            width="340"
            height="84"
            rx="12"
            fill={isLast ? "#f7f8f9" : "#ffffff"}
            stroke={isLast ? "#d4d6d9" : "#046999"}
            strokeWidth="1.5"
            strokeDasharray={isLast ? "6 5" : undefined}
          />
          {question.length === 2 ? (
            <g fontSize="15" fill="#0d1b2a" fontWeight="600">
              <text x="26" y={y + 34}>
                {question[0]}
              </text>
              <text x="26" y={y + 58}>
                {question[1]}
              </text>
            </g>
          ) : (
            <text
              x="26"
              y={y + 48}
              fontSize="15"
              fontWeight="600"
              fill="#4a5568"
            >
              {question[0]}
            </text>
          )}

          {/* Arrow to outcome */}
          <path
            d={`M350 ${y + 42}H420`}
            stroke="#046999"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d={`M414 ${y + 37}l6 5-6 5`}
            fill="none"
            stroke="#046999"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="385"
            y={y + 34}
            fontSize="14"
            fontWeight="700"
            fill="#046999"
            textAnchor="middle"
          >
            {isLast ? "Then" : "Yes"}
          </text>

          {/* Outcome */}
          <rect
            x="420"
            y={y}
            width="290"
            height="84"
            rx="12"
            fill={recommended ? "#046999" : "#e8f4fa"}
            stroke="#046999"
            strokeOpacity={recommended ? 1 : 0.45}
          />
          <text
            x="436"
            y={y + 36}
            fontSize="15"
            fontWeight="700"
            fill={recommended ? "#ffffff" : "#034e72"}
          >
            {outcome[0]}
          </text>
          <text
            x="436"
            y={y + 62}
            fontSize="14"
            fill={recommended ? "#e8f4fa" : "#4a5568"}
          >
            {outcome[1]}
          </text>

          {/* No arrow to next question */}
          {!isLast && (
            <g>
              <path
                d={`M180 ${y + 84}V${y + 120}`}
                stroke="#046999"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d={`M174 ${y + 114}l6 6 6-6`}
                fill="none"
                stroke="#046999"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text
                x="194"
                y={y + 106}
                fontSize="14"
                fontWeight="700"
                fill="#4a5568"
              >
                No
              </text>
            </g>
          )}
        </g>
      );
    })}
  </svg>
);

export default DecisionSvg;
