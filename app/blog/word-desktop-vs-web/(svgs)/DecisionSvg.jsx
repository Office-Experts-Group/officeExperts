// /app/blog/word-desktop-vs-web/(svgs)/DecisionSvg.jsx
// Decision flow: which Word option fits. Recommended outcome in solid accent, others light.
// Hex values: $accent #046999, $accent-light #e8f4fa, $text-primary #0d1b2a, $text-secondary #4a5568.

const questions = [
  { y: 36, n: "1", a: "Do you need macros,", b: "mail merge or add-ins?" },
  {
    y: 186,
    n: "2",
    a: "Do several people edit",
    b: "long, complex documents?",
  },
  { y: 336, n: "3", a: "Is this for business", b: "(commercial) use?" },
];

const outcomes = [
  {
    y: 36,
    solid: false,
    h: "Desktop Word licence",
    a: "Business Standard or Office",
    b: "Home & Business 2024",
  },
  {
    y: 186,
    solid: true,
    h: "Business Standard",
    a: "Desktop Word, co-authored",
    b: "from SharePoint or OneDrive",
  },
  {
    y: 336,
    solid: false,
    h: "Business Basic",
    a: "Web and mobile apps,",
    b: "plus business email",
  },
];

export default function DecisionSvg() {
  return (
    <svg
      viewBox="0 0 640 640"
      role="img"
      aria-labelledby="wdw-decision-title wdw-decision-desc"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="wdw-decision-title">Which Word option should you choose</title>
      <desc id="wdw-decision-desc">
        Three yes or no questions. Needing macros, mail merge or add-ins points
        to a desktop licence. Several people editing complex documents points to
        Business Standard. Business use without those needs points to Business
        Basic. Anything else suits the free web version.
      </desc>

      <defs>
        <marker
          id="wdw-decision-arrow"
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

      {questions.map((q) => (
        <g key={q.n}>
          <rect
            x="24"
            y={q.y}
            width="280"
            height="90"
            rx="14"
            fill="#ffffff"
            stroke="#9fc3d4"
            strokeWidth="1.5"
          />
          <circle
            cx="56"
            cy={q.y + 45}
            r="16"
            fill="#e8f4fa"
            stroke="#046999"
          />
          <text
            x="56"
            y={q.y + 51}
            textAnchor="middle"
            fontSize="16"
            fontWeight="700"
            fill="#046999"
          >
            {q.n}
          </text>
          <text
            x="84"
            y={q.y + 40}
            fontSize="16"
            fontWeight="600"
            fill="#0d1b2a"
          >
            {q.a}
          </text>
          <text
            x="84"
            y={q.y + 62}
            fontSize="16"
            fontWeight="600"
            fill="#0d1b2a"
          >
            {q.b}
          </text>
        </g>
      ))}

      {/* yes arrows */}
      {outcomes.map((o, i) => (
        <g key={`y${i}`}>
          <path
            d={`M304 ${o.y + 45}H356`}
            stroke="#046999"
            strokeWidth="2.5"
            fill="none"
            markerEnd="url(#wdw-decision-arrow)"
          />
          <text
            x="330"
            y={o.y + 34}
            textAnchor="middle"
            fontSize="15"
            fontWeight="700"
            fill="#046999"
          >
            Yes
          </text>
        </g>
      ))}

      {/* no arrows */}
      {[0, 1, 2].map((i) => (
        <g key={`n${i}`}>
          <path
            d={`M164 ${questions[i].y + 90}V${questions[i].y + 146}`}
            stroke="#046999"
            strokeWidth="2.5"
            fill="none"
            markerEnd="url(#wdw-decision-arrow)"
          />
          <text
            x="178"
            y={questions[i].y + 124}
            fontSize="15"
            fontWeight="700"
            fill="#046999"
          >
            No
          </text>
        </g>
      ))}

      {outcomes.map((o) => (
        <g key={o.h}>
          <rect
            x="360"
            y={o.y}
            width="256"
            height="96"
            rx="14"
            fill={o.solid ? "#046999" : "#e8f4fa"}
            stroke={o.solid ? "#046999" : "#9fc3d4"}
          />
          <text
            x="378"
            y={o.y + 30}
            fontSize="17"
            fontWeight="700"
            fill={o.solid ? "#ffffff" : "#0d1b2a"}
          >
            {o.h}
          </text>
          <text
            x="378"
            y={o.y + 56}
            fontSize="15"
            fill={o.solid ? "#ffffff" : "#4a5568"}
          >
            {o.a}
          </text>
          <text
            x="378"
            y={o.y + 76}
            fontSize="15"
            fill={o.solid ? "#ffffff" : "#4a5568"}
          >
            {o.b}
          </text>
        </g>
      ))}

      {/* final fallback */}
      <rect
        x="24"
        y="486"
        width="280"
        height="96"
        rx="14"
        fill="#e8f4fa"
        stroke="#9fc3d4"
      />
      <text x="42" y="516" fontSize="17" fontWeight="700" fill="#0d1b2a">
        Free Word for web
      </text>
      <text x="42" y="542" fontSize="15" fill="#4a5568">
        Add a personal plan later
      </text>
      <text x="42" y="562" fontSize="15" fill="#4a5568">
        if you hit its limits
      </text>
    </svg>
  );
}
