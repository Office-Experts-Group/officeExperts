// /app/blog/word-templates-for-legal-firms/(svgs)/DecisionSvg.jsx
// Decision flow: which template approach suits your firm.
// Theme hex used: $accent #046999, $accent-light #e8f4fa, $text-primary #0d1b2a,
// $text-secondary #4a5568. Recommended outcome is solid accent, others light accent.

const questions = [
  { y: 20, l1: "Do new documents start as", l2: "copies of old files?" },
  { y: 190, l1: "Do several people edit", l2: "the same templates?" },
  { y: 360, l1: "Do matter details repeat", l2: "within one document?" },
];

const outcomes = [
  {
    y: 20,
    l1: "Start with Styles and a",
    l2: "saved .dotx template",
    solid: true,
  },
  { y: 190, l1: "Name a template owner and", l2: "build a central library" },
  { y: 326, l1: "Add fields, Quick Parts", l2: "and content controls" },
  { y: 440, l1: "Review yearly and plan", l2: "automation when ready" },
];

export default function DecisionSvg() {
  return (
    <svg
      viewBox="0 0 760 560"
      role="img"
      aria-labelledby="lfw-decision-title lfw-decision-desc"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="lfw-decision-title">Which Word template approach to use</title>
      <desc id="lfw-decision-desc">
        Three yes or no questions about copying files, shared editing and
        repeated matter details, leading to four recommended next steps.
      </desc>

      <g
        fill="none"
        stroke="#046999"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M300 70 H440" />
        <path d="M300 240 H440" />
        <path d="M300 410 H340 V374 H440" />
        <path d="M300 410 H340 V488 H440" />
        <path d="M160 120 V190" />
        <path d="M160 290 V360" />
      </g>

      {[
        [370, 62, "Yes"],
        [370, 232, "Yes"],
        [320, 366, "Yes"],
        [320, 506, "No"],
      ].map(([x, y, t]) => (
        <text
          key={`${x}-${y}`}
          x={x}
          y={y}
          fontSize="14"
          fontWeight="700"
          fill="#046999"
          textAnchor="middle"
        >
          {t}
        </text>
      ))}
      <text x="172" y="160" fontSize="14" fontWeight="700" fill="#046999">
        No
      </text>
      <text x="172" y="330" fontSize="14" fontWeight="700" fill="#046999">
        No
      </text>

      {questions.map((q, i) => (
        <g key={q.y}>
          <rect
            x="20"
            y={q.y}
            width="280"
            height="100"
            rx="12"
            fill="#ffffff"
            stroke="#046999"
            strokeWidth="2"
          />
          <text
            x="40"
            y={q.y + 28}
            fontSize="14"
            fontWeight="700"
            fill="#046999"
          >{`QUESTION ${i + 1}`}</text>
          <text
            x="40"
            y={q.y + 54}
            fontSize="15"
            fontWeight="700"
            fill="#0d1b2a"
          >
            {q.l1}
          </text>
          <text
            x="40"
            y={q.y + 74}
            fontSize="15"
            fontWeight="700"
            fill="#0d1b2a"
          >
            {q.l2}
          </text>
        </g>
      ))}

      {outcomes.map((o) => (
        <g key={o.y}>
          <rect
            x="440"
            y={o.y}
            width="300"
            height="96"
            rx="12"
            fill={o.solid ? "#046999" : "#e8f4fa"}
            stroke={o.solid ? "#046999" : "#b9d6e5"}
          />
          <text
            x="460"
            y={o.y + 28}
            fontSize="14"
            fontWeight="700"
            fill={o.solid ? "#bfe6f7" : "#046999"}
          >
            NEXT STEP
          </text>
          <text
            x="460"
            y={o.y + 54}
            fontSize="15"
            fontWeight="700"
            fill={o.solid ? "#ffffff" : "#0d1b2a"}
          >
            {o.l1}
          </text>
          <text
            x="460"
            y={o.y + 74}
            fontSize="15"
            fontWeight="700"
            fill={o.solid ? "#ffffff" : "#0d1b2a"}
          >
            {o.l2}
          </text>
        </g>
      ))}
    </svg>
  );
}
