// /app/blog/google-docs-vs-microsoft-word/(svgs)/DecisionSvg.jsx
// Decision flow: three yes/no questions to a recommendation.
// Theme values used (hard-coded hex): $accent #046999, $accent-light #e8f4fa,
// $white #ffffff, $text-primary #0d1b2a. Recommended outcome is solid accent.

const QUESTIONS = [
  {
    y: 30,
    lines: [
      "Do your documents run past 50 pages",
      "or need strict, repeatable layouts?",
    ],
  },
  {
    y: 170,
    lines: [
      "Do you need audit trails, digital",
      "signatures or retention rules?",
    ],
  },
  {
    y: 310,
    lines: [
      "Is real-time co-editing the main job",
      "for a small, informal team?",
    ],
  },
];

const OUTCOMES = [
  {
    y: 26,
    solid: true,
    label: "RECOMMENDED",
    title: "Choose Microsoft Word",
    note: "Long, templated documents",
  },
  {
    y: 166,
    solid: true,
    label: "RECOMMENDED",
    title: "Choose Microsoft Word",
    note: "Audit, signing and retention",
  },
  {
    y: 306,
    solid: false,
    label: "GOOD FIT",
    title: "Choose Google Docs",
    note: "Fast co-editing, little setup",
  },
];

export default function DecisionSvg() {
  return (
    <svg
      viewBox="0 0 760 570"
      role="img"
      aria-labelledby="gdw-decision-title gdw-decision-desc"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
    >
      <title id="gdw-decision-title">
        Decision flow: Google Docs or Microsoft Word
      </title>
      <desc id="gdw-decision-desc">
        Question one asks whether documents run past 50 pages or need strict
        layouts. Yes leads to Word. No leads to question two about audit trails,
        signatures or retention. Yes leads to Word. No leads to question three
        about real-time co-editing for a small informal team. Yes leads to
        Google Docs. No means either tool can work, so follow the tools your
        team already uses.
      </desc>
      <defs>
        <marker
          id="gdw-decision-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto-start-reverse"
        >
          <path
            d="M1 1l8 4-8 4"
            fill="none"
            stroke="#046999"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
      </defs>

      {/* questions */}
      {QUESTIONS.map((q, i) => (
        <g key={q.y}>
          <rect
            x="30"
            y={q.y}
            width="340"
            height="88"
            rx="12"
            fill="#ffffff"
            stroke="#046999"
            strokeWidth="1.5"
          />
          <circle cx="56" cy={q.y + 44} r="14" fill="#046999" />
          <text
            x="56"
            y={q.y + 50}
            textAnchor="middle"
            fontSize="16"
            fontWeight="700"
            fill="#ffffff"
          >
            {i + 1}
          </text>
          <text x="82" y={q.y + 38} fontSize="15" fill="#0d1b2a">
            {q.lines[0]}
          </text>
          <text x="82" y={q.y + 62} fontSize="15" fill="#0d1b2a">
            {q.lines[1]}
          </text>

          {/* yes arrow */}
          <path
            d={`M370 ${q.y + 44}H462`}
            stroke="#046999"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#gdw-decision-arrow)"
          />
          <text
            x="416"
            y={q.y + 34}
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fill="#046999"
          >
            Yes
          </text>
        </g>
      ))}

      {/* no arrows */}
      {[118, 258, 398].map((y) => (
        <g key={y}>
          <path
            d={`M200 ${y}V${y === 398 ? 434 : y + 48}`}
            stroke="#046999"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#gdw-decision-arrow)"
          />
          <text
            x="214"
            y={y + 28}
            fontSize="14"
            fontWeight="700"
            fill="#046999"
          >
            No
          </text>
        </g>
      ))}

      {/* outcomes */}
      {OUTCOMES.map((o) => (
        <g key={o.y}>
          <rect
            x="470"
            y={o.y}
            width="260"
            height="96"
            rx="12"
            fill={o.solid ? "#046999" : "#e8f4fa"}
            stroke="#046999"
            strokeWidth="1.5"
          />
          <text
            x="490"
            y={o.y + 30}
            fontSize="14"
            fontWeight="700"
            letterSpacing="1"
            fill={o.solid ? "#ffffff" : "#046999"}
            fillOpacity={o.solid ? "0.8" : "1"}
          >
            {o.label}
          </text>
          <text
            x="490"
            y={o.y + 56}
            fontSize="17"
            fontWeight="700"
            fill={o.solid ? "#ffffff" : "#0d1b2a"}
          >
            {o.title}
          </text>
          <text
            x="490"
            y={o.y + 76}
            fontSize="14"
            fill={o.solid ? "#ffffff" : "#0d1b2a"}
            fillOpacity={o.solid ? "0.9" : "1"}
          >
            {o.note}
          </text>
        </g>
      ))}

      {/* final fallback */}
      <rect
        x="30"
        y="440"
        width="340"
        height="96"
        rx="12"
        fill="#e8f4fa"
        stroke="#046999"
        strokeWidth="1.5"
      />
      <text
        x="50"
        y="470"
        fontSize="14"
        fontWeight="700"
        letterSpacing="1"
        fill="#046999"
      >
        EITHER
      </text>
      <text x="50" y="496" fontSize="17" fontWeight="700" fill="#0d1b2a">
        Either can work
      </text>
      <text x="50" y="516" fontSize="14" fill="#0d1b2a">
        Follow the tools your team already uses
      </text>
    </svg>
  );
}
