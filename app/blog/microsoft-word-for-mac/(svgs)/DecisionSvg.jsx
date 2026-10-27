// /app/blog/microsoft-word-for-mac/(svgs)/DecisionSvg.jsx
// Decision flow: three yes/no questions leading to the recommended setup.
// Hard-coded hex (light panel). Tokens: $accent #046999, $accent-light #e8f4fa,
// $text-primary #0d1b2a, $text-secondary #4a5568.
// Box sizing follows the padding rule: last baseline sits at least 16px above
// the bottom edge (question boxes 72 tall, outcome boxes 96 tall).

const QUESTIONS = [
  { y: 30, lines: ["Do you depend on macros,", "VBA or advanced mail merge?"] },
  {
    y: 190,
    lines: [
      "Do you build templates for others",
      "or work to a Windows standard?",
    ],
  },
  { y: 350, lines: ["Do you need add-ins that", "are Windows-only?"] },
];

const OUTCOMES = [
  {
    y: 18,
    label: "USE WINDOWS WORD",
    lines: ["Macros and VBA need", "the full Windows build"],
  },
  {
    y: 178,
    label: "USE WINDOWS WORD",
    lines: ["Template builders need", "the full toolset"],
  },
  {
    y: 338,
    label: "HYBRID SETUP",
    lines: ["Check Mac support first,", "or keep a Windows PC"],
  },
];

export default function DecisionSvg() {
  return (
    <svg
      viewBox="0 0 640 620"
      role="img"
      aria-labelledby="wfm-decision-title wfm-decision-desc"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="wfm-decision-title">Which Word suits you</title>
      <desc id="wfm-decision-desc">
        Three questions. If you depend on macros, VBA or advanced mail merge,
        use Windows Word. If you build templates for others or work to a Windows
        standard, use Windows Word. If you need Windows-only add-ins, use a
        hybrid setup. If you answer no to all three, Word for Mac suits you.
      </desc>

      {QUESTIONS.map((q, i) => {
        // Arrow tip lands exactly on the top edge of the next box.
        const tipY = i < QUESTIONS.length - 1 ? q.y + 160 : 500;
        return (
          <g key={q.y}>
            <rect
              x="20"
              y={q.y}
              width="300"
              height="72"
              rx="12"
              fill="#ffffff"
              stroke="#cfdbe3"
              strokeWidth="1.5"
            />
            <text
              x="36"
              y={q.y + 30}
              fontSize="15"
              fontWeight="600"
              fill="#0d1b2a"
            >
              {q.lines[0]}
            </text>
            <text
              x="36"
              y={q.y + 54}
              fontSize="15"
              fontWeight="600"
              fill="#0d1b2a"
            >
              {q.lines[1]}
            </text>

            {/* Yes: to the right */}
            <line
              x1="320"
              y1={q.y + 36}
              x2="384"
              y2={q.y + 36}
              stroke="#4a5568"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <polygon
              points={`382,${q.y + 28} 398,${q.y + 36} 382,${q.y + 44}`}
              fill="#4a5568"
            />
            <text
              x="352"
              y={q.y + 26}
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill="#4a5568"
            >
              Yes
            </text>

            {/* No: down to the next box */}
            <line
              x1="170"
              y1={q.y + 72}
              x2="170"
              y2={tipY - 12}
              stroke="#4a5568"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <polygon
              points={`162,${tipY - 16} 170,${tipY} 178,${tipY - 16}`}
              fill="#4a5568"
            />
            <text
              x="184"
              y={q.y + 118}
              fontSize="14"
              fontWeight="700"
              fill="#4a5568"
            >
              No
            </text>
          </g>
        );
      })}

      {OUTCOMES.map((o) => (
        <g key={o.y}>
          <rect
            x="400"
            y={o.y}
            width="220"
            height="96"
            rx="12"
            fill="#e8f4fa"
            stroke="#046999"
            strokeOpacity="0.45"
            strokeWidth="1.5"
          />
          <text
            x="416"
            y={o.y + 30}
            fontSize="14"
            fontWeight="700"
            letterSpacing="0.5"
            fill="#046999"
          >
            {o.label}
          </text>
          <text x="416" y={o.y + 56} fontSize="15" fill="#0d1b2a">
            {o.lines[0]}
          </text>
          <text x="416" y={o.y + 76} fontSize="15" fill="#0d1b2a">
            {o.lines[1]}
          </text>
        </g>
      ))}

      {/* Recommended outcome */}
      <rect x="20" y="500" width="300" height="96" rx="12" fill="#046999" />
      <text
        x="36"
        y="530"
        fontSize="14"
        fontWeight="700"
        letterSpacing="0.5"
        fill="#ffffff"
      >
        WORD FOR MAC SUITS YOU
      </text>
      <text x="36" y="556" fontSize="15" fill="#ffffff">
        Standard documents and a
      </text>
      <text x="36" y="576" fontSize="15" fill="#ffffff">
        native Mac experience
      </text>
    </svg>
  );
}
