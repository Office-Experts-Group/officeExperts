// /app/blog/xero-to-power-bi/(svgs)/DecisionSvg.jsx
// Decision flow: three yes/no questions leading to the recommended approach.
// Recommended outcome is solid accent, the others are light accent.
// Tokens: $accent #046999, $accent-light #e8f4fa, $text-primary #0d1b2a,
// $text-secondary #4a5568, $line-strong #d4d6d9.

const QUESTIONS = [
  { y: 20, a: "One Xero or MYOB file and", b: "standard dashboards?" },
  { y: 150, a: "Need heavy custom ETL or", b: "enterprise-scale integration?" },
  { y: 280, a: "Feeding other tools as well", b: "as Power BI?" },
];

const OUTCOMES = [
  { y: 20, a: "Native marketplace app", b: "Quick to start, single file" },
  { y: 150, a: "Custom SQL pipeline", b: "Azure Data Factory ETL" },
  { y: 280, a: "CData connectors", b: "Several platforms, one tool" },
];

const DecisionSvg = () => (
  <svg
    viewBox="0 0 680 540"
    role="img"
    aria-labelledby="xpb-decision-title xpb-decision-desc"
    fontFamily="aptos"
  >
    <title id="xpb-decision-title">Which approach fits your reporting?</title>
    <desc id="xpb-decision-desc">
      A decision flow. If you have one file and standard dashboards, use a
      native marketplace app. Otherwise, if you need heavy custom ETL, build a
      custom SQL pipeline. Otherwise, if you feed other tools as well as Power
      BI, use CData connectors. If none of those apply, OdataLink feeds are the
      usual best fit.
    </desc>

    <defs>
      <marker
        id="xpb-decision-arrow"
        markerUnits="userSpaceOnUse"
        markerWidth="12"
        markerHeight="12"
        refX="10"
        refY="6"
        orient="auto"
      >
        <path d="M1 1 11 6 1 11Z" fill="#046999" />
      </marker>
    </defs>

    {QUESTIONS.map((q) => (
      <g key={q.y}>
        <rect
          x="20"
          y={q.y}
          width="300"
          height="100"
          rx="14"
          fill="#ffffff"
          stroke="#d4d6d9"
          strokeWidth="1.5"
        />
        <text
          x="40"
          y={q.y + 30}
          fontSize="14"
          fontWeight="700"
          letterSpacing="1.5"
          fill="#046999"
        >
          QUESTION
        </text>
        <text x="40" y={q.y + 56} fontSize="16" fontWeight="600" fill="#0d1b2a">
          {q.a}
        </text>
        <text x="40" y={q.y + 76} fontSize="16" fontWeight="600" fill="#0d1b2a">
          {q.b}
        </text>
      </g>
    ))}

    {OUTCOMES.map((o) => (
      <g key={o.y}>
        <rect
          x="420"
          y={o.y}
          width="240"
          height="100"
          rx="14"
          fill="#e8f4fa"
          stroke="#046999"
          strokeOpacity="0.5"
        />
        <text
          x="440"
          y={o.y + 30}
          fontSize="14"
          fontWeight="700"
          letterSpacing="1.5"
          fill="#046999"
        >
          CHOOSE
        </text>
        <text
          x="440"
          y={o.y + 56}
          fontSize="16"
          fontWeight="700"
          fill="#0d1b2a"
        >
          {o.a}
        </text>
        <text x="440" y={o.y + 76} fontSize="14" fill="#4a5568">
          {o.b}
        </text>
      </g>
    ))}

    {/* Yes arrows */}
    {[70, 200, 330].map((y) => (
      <g key={y}>
        <path
          d={`M324 ${y}H414`}
          stroke="#046999"
          strokeWidth="2.5"
          markerEnd="url(#xpb-decision-arrow)"
        />
        <text
          x="369"
          y={y - 10}
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill="#046999"
        >
          Yes
        </text>
      </g>
    ))}

    {/* No arrows */}
    {[120, 250, 380].map((y) => (
      <g key={y}>
        <path
          d={`M170 ${y}V${y + 26}`}
          stroke="#4a5568"
          strokeWidth="2.5"
          markerEnd="url(#xpb-decision-arrow)"
        />
        <text x="184" y={y + 20} fontSize="14" fontWeight="700" fill="#4a5568">
          No
        </text>
      </g>
    ))}

    {/* Recommended outcome */}
    <rect x="20" y="410" width="300" height="100" rx="14" fill="#046999" />
    <text
      x="40"
      y="440"
      fontSize="14"
      fontWeight="700"
      letterSpacing="1.5"
      fill="#ffffff"
      fillOpacity="0.85"
    >
      USUAL BEST FIT
    </text>
    <text x="40" y="466" fontSize="16" fontWeight="700" fill="#ffffff">
      OdataLink feeds
    </text>
    <text x="40" y="486" fontSize="14" fill="#ffffff" fillOpacity="0.9">
      Multi-entity, low overhead
    </text>
  </svg>
);

export default DecisionSvg;
