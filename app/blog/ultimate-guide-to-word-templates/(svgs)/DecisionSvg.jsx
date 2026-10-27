// /app/blog/ultimate-guide-to-word-templates/(svgs)/DecisionSvg.jsx
// Decision flow: which template type fits the job.
// Theme values used: $accent #046999, $accent-light #e8f4fa, $text-primary #0d1b2a,
// $text-secondary #4a5568.

const questions = [
  { y: 20, l1: "Is it just for", l2: "your own documents?" },
  { y: 170, l1: "Does a team or", l2: "department share it?" },
  { y: 320, l1: "Must tools load in", l2: "every document?" },
];

const outcomes = [
  { y: 20, title: "User template", sub: "Save as .dotx or .dotm" },
  {
    y: 170,
    title: "Workgroup template",
    sub: "Shared network location",
    solid: true,
  },
  { y: 320, title: "Global or add-in", sub: "Loads from STARTUP" },
];

export default function DecisionSvg() {
  return (
    <svg
      viewBox="0 0 640 540"
      role="img"
      aria-labelledby="uwt-decision-title uwt-decision-desc"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="uwt-decision-title">
        Which kind of Word template do you need?
      </title>
      <desc id="uwt-decision-desc">
        Three yes or no questions. Just for you leads to a user template. Shared
        by a team leads to a workgroup template. Tools needed in every document
        lead to a global or add-in template. Otherwise leave Normal.dotm as it
        is.
      </desc>

      <defs>
        <marker
          id="uwt-decision-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto"
        >
          <path
            d="M1 1 9 5 1 9"
            fill="none"
            stroke="#046999"
            strokeWidth="1.8"
          />
        </marker>
      </defs>

      {/* No arrows between questions */}
      <path
        d="M150 104V166"
        stroke="#4a5568"
        strokeWidth="2"
        markerEnd="url(#uwt-decision-arrow)"
      />
      <path
        d="M150 254V316"
        stroke="#4a5568"
        strokeWidth="2"
        markerEnd="url(#uwt-decision-arrow)"
      />
      <path
        d="M150 404V446"
        stroke="#4a5568"
        strokeWidth="2"
        markerEnd="url(#uwt-decision-arrow)"
      />
      {[104, 254, 404].map((y) => (
        <text
          key={y}
          x="164"
          y={y + 28}
          fill="#4a5568"
          fontSize="14"
          fontWeight="700"
        >
          No
        </text>
      ))}

      {questions.map((q, i) => (
        <g key={q.l1}>
          <rect
            x="10"
            y={q.y}
            width="280"
            height="84"
            rx="14"
            fill="#ffffff"
            stroke="#046999"
            strokeWidth="2"
          />
          <text
            x="150"
            y={q.y + 36}
            textAnchor="middle"
            fill="#0d1b2a"
            fontSize="16"
            fontWeight="700"
          >
            {q.l1}
          </text>
          <text
            x="150"
            y={q.y + 58}
            textAnchor="middle"
            fill="#0d1b2a"
            fontSize="16"
            fontWeight="700"
          >
            {q.l2}
          </text>
          {/* Yes arrow */}
          <path
            d={`M292 ${q.y + 42}H368`}
            stroke="#046999"
            strokeWidth="2"
            markerEnd="url(#uwt-decision-arrow)"
          />
          <text
            x="330"
            y={q.y + 32}
            textAnchor="middle"
            fill="#046999"
            fontSize="14"
            fontWeight="700"
          >
            Yes
          </text>
        </g>
      ))}

      {outcomes.map((o) => (
        <g key={o.title}>
          <rect
            x="370"
            y={o.y}
            width="260"
            height="96"
            rx="14"
            fill={o.solid ? "#046999" : "#e8f4fa"}
            stroke="#046999"
            strokeOpacity={o.solid ? 1 : 0.3}
          />
          <text
            x="390"
            y={o.y + 38}
            fill={o.solid ? "#ffffff" : "#0d1b2a"}
            fontSize="17"
            fontWeight="700"
          >
            {o.title}
          </text>
          <text
            x="390"
            y={o.y + 64}
            fill={o.solid ? "#ffffff" : "#4a5568"}
            fontSize="14"
          >
            {o.sub}
          </text>
        </g>
      ))}

      {/* Fallback */}
      <rect
        x="10"
        y="448"
        width="280"
        height="84"
        rx="14"
        fill="#e8f4fa"
        stroke="#046999"
        strokeOpacity="0.3"
      />
      <text
        x="150"
        y="484"
        textAnchor="middle"
        fill="#0d1b2a"
        fontSize="17"
        fontWeight="700"
      >
        Leave Normal.dotm alone
      </text>
      <text x="150" y="508" textAnchor="middle" fill="#4a5568" fontSize="14">
        Keep a backup if you edit it
      </text>
    </svg>
  );
}
