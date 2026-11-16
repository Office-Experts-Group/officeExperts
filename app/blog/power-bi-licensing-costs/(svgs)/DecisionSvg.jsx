// /app/blog/power-bi-licensing-costs/(svgs)/DecisionSvg.jsx
// Decision flow: three yes/no questions that point to a licence mix. Recommended outcome is solid
// accent, the others are light accent. Hex values: #046999 $accent, #e8f4fa $accent-light,
// #0b2433 $ink, #4a5568 $text-secondary, #d4d6d9 $line-strong.

const QUESTIONS = [
  {
    y: 20,
    lines: ["Do you need more than 8", "data refreshes a day?"],
    out: ["Consider", "Premium Per User or", "capacity"],
  },
  {
    y: 156,
    lines: ["Do audit logging or", "compliance rules apply?"],
    out: ["Plan for", "Premium or Fabric", "capacity"],
  },
  {
    y: 292,
    lines: ["Do 400+ people only", "view reports?"],
    out: ["Price it", "Compare capacity with", "Pro seats first"],
  },
];

const Q_X = 20;
const Q_W = 330;
const Q_H = 92;
const O_X = 470;
const O_W = 270;

const Arrow = ({ d }) => (
  <path
    d={d}
    fill="none"
    stroke="#4a5568"
    strokeWidth="2.5"
    strokeLinecap="round"
    markerEnd="url(#pbl-decision-arrow)"
  />
);

const DecisionSvg = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 760 540"
    role="img"
    aria-labelledby="pbl-decision-title pbl-decision-desc"
    fontFamily="aptos, 'Segoe UI', Arial, sans-serif"
  >
    <title id="pbl-decision-title">
      Which Power BI licence mix fits your business
    </title>
    <desc id="pbl-decision-desc">
      A three-question flow. If you need more than eight refreshes a day,
      consider Premium Per User or capacity. If audit logging or compliance
      rules apply, plan for capacity. If 400 or more people only view reports,
      compare capacity against Pro seats. If the answer to all three is no,
      start with Pro licences mixed with exported reports.
    </desc>
    <defs>
      <marker
        id="pbl-decision-arrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="8"
        markerHeight="8"
        orient="auto"
      >
        <path d="M1 1l8 4-8 4z" fill="#4a5568" />
      </marker>
    </defs>

    {QUESTIONS.map((q) => (
      <g key={q.y}>
        <rect
          x={Q_X}
          y={q.y}
          width={Q_W}
          height={Q_H}
          rx="14"
          fill="#ffffff"
          stroke="#d4d6d9"
          strokeWidth="2"
        />
        {q.lines.map((line, n) => (
          <text
            key={line}
            x={Q_X + 22}
            y={q.y + 40 + n * 24}
            fontSize="17"
            fontWeight="700"
            fill="#0b2433"
          >
            {line}
          </text>
        ))}

        <Arrow d={`M${Q_X + Q_W + 4} ${q.y + Q_H / 2}H${O_X - 6}`} />
        <text
          x={(Q_X + Q_W + O_X) / 2}
          y={q.y + Q_H / 2 - 12}
          textAnchor="middle"
          fontSize="15"
          fontWeight="700"
          fill="#046999"
        >
          Yes
        </text>

        <rect
          x={O_X}
          y={q.y}
          width={O_W}
          height={Q_H}
          rx="14"
          fill="#e8f4fa"
          stroke="rgba(4,105,153,0.28)"
          strokeWidth="2"
        />
        {q.out.map((line, n) => (
          <text
            key={line}
            x={O_X + 20}
            y={q.y + 30 + n * 22}
            fontSize={n === 0 ? 14 : 16}
            fontWeight={n === 0 ? 700 : 600}
            fill={n === 0 ? "#046999" : "#0b2433"}
          >
            {n === 0 ? line.toUpperCase() : line}
          </text>
        ))}

        <Arrow d={`M${Q_X + 40} ${q.y + Q_H + 4}V${q.y + 136 - 6}`} />
        <text
          x={Q_X + 54}
          y={q.y + Q_H + 24}
          fontSize="15"
          fontWeight="700"
          fill="#4a5568"
        >
          No
        </text>
      </g>
    ))}

    {/* final outcome */}
    <rect x={Q_X} y="428" width={Q_W} height="96" rx="14" fill="#046999" />
    <text x={Q_X + 22} y="458" fontSize="14" fontWeight="700" fill="#cfe7f3">
      START WITH
    </text>
    <text x={Q_X + 22} y="484" fontSize="17" fontWeight="700" fill="#ffffff">
      Pro licences for creators,
    </text>
    <text x={Q_X + 22} y="506" fontSize="17" fontWeight="700" fill="#ffffff">
      plus exported reports
    </text>
    <text x={O_X} y="470" fontSize="15" fill="#4a5568">
      Review the choice every quarter.
    </text>
    <text x={O_X} y="492" fontSize="15" fill="#4a5568">
      Needs change as headcount does.
    </text>
  </svg>
);

export default DecisionSvg;
