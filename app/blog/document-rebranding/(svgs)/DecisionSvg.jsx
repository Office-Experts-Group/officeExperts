// /app/blog/document-rebranding/(svgs)/DecisionSvg.jsx
// Hard-coded theme hex (token names): $accent #046999, $accent-light #e8f4fa,
// $text-primary #0d1b2a, $text-secondary #4a5568.
// Decision flow: which rebranding approach fits. Recommended outcome is solid accent.

function Box({ x, y, w, label, line1, line2, solid }) {
  const fill = solid ? "#046999" : "#e8f4fa";
  const main = solid ? "#ffffff" : "#0d1b2a";
  const sub = solid ? "rgba(255,255,255,0.8)" : "#4a5568";
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height="96"
        rx="12"
        fill={fill}
        stroke="#046999"
      />
      <text
        x={x + 16}
        y={y + 28}
        fontSize="14"
        fontWeight="700"
        letterSpacing="0.6"
        fill={sub}
      >
        {label}
      </text>
      <text x={x + 16} y={y + 56} fontSize="16" fontWeight="700" fill={main}>
        {line1}
      </text>
      <text x={x + 16} y={y + 76} fontSize="15" fill={sub}>
        {line2}
      </text>
    </g>
  );
}

export default function DecisionSvg() {
  return (
    <svg
      viewBox="0 0 560 436"
      role="img"
      aria-labelledby="drb-decision-title drb-decision-desc"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
    >
      <title id="drb-decision-title">Which rebranding approach fits</title>
      <desc id="drb-decision-desc">
        If you have over a thousand files or macro-heavy documents, bring in a
        specialist. If not, and your templates use proper Word styles, update
        the styles and themes. Otherwise rebuild the templates on styles while
        keeping the approved design.
      </desc>
      <defs>
        <marker
          id="drb-decision-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 z" fill="#4a5568" />
        </marker>
      </defs>

      {/* Questions */}
      <g>
        <rect
          x="20"
          y="20"
          width="250"
          height="96"
          rx="12"
          fill="#ffffff"
          stroke="#cbd5e1"
        />
        <text
          x="36"
          y="48"
          fontSize="14"
          fontWeight="700"
          letterSpacing="0.6"
          fill="#4a5568"
        >
          QUESTION 1
        </text>
        <text x="36" y="76" fontSize="16" fontWeight="700" fill="#0d1b2a">
          Over 1,000 files, or
        </text>
        <text x="36" y="96" fontSize="16" fontWeight="700" fill="#0d1b2a">
          macro-heavy documents?
        </text>
      </g>
      <g>
        <rect
          x="20"
          y="170"
          width="250"
          height="96"
          rx="12"
          fill="#ffffff"
          stroke="#cbd5e1"
        />
        <text
          x="36"
          y="198"
          fontSize="14"
          fontWeight="700"
          letterSpacing="0.6"
          fill="#4a5568"
        >
          QUESTION 2
        </text>
        <text x="36" y="226" fontSize="16" fontWeight="700" fill="#0d1b2a">
          Are your templates built
        </text>
        <text x="36" y="246" fontSize="16" fontWeight="700" fill="#0d1b2a">
          on proper Word styles?
        </text>
      </g>

      {/* Outcomes */}
      <Box
        x={320}
        y={20}
        w={220}
        label="OPTION A"
        line1="Bring in a specialist"
        line2="Audit, scripts, rollout"
      />
      <Box
        x={320}
        y={170}
        w={220}
        label="RECOMMENDED"
        line1="Update styles and themes"
        line2="One change flows through"
        solid
      />
      <Box
        x={20}
        y={320}
        w={250}
        label="OPTION C"
        line1="Rebuild on styles"
        line2="Keep the approved design"
      />

      {/* Arrows and labels */}
      <path
        d="M272 68 H316"
        stroke="#4a5568"
        strokeWidth="2"
        strokeLinecap="round"
        markerEnd="url(#drb-decision-arrow)"
      />
      <text
        x="294"
        y="58"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#4a5568"
      >
        Yes
      </text>

      <path
        d="M145 118 V166"
        stroke="#4a5568"
        strokeWidth="2"
        strokeLinecap="round"
        markerEnd="url(#drb-decision-arrow)"
      />
      <text x="158" y="148" fontSize="14" fontWeight="700" fill="#4a5568">
        No
      </text>

      <path
        d="M272 218 H316"
        stroke="#4a5568"
        strokeWidth="2"
        strokeLinecap="round"
        markerEnd="url(#drb-decision-arrow)"
      />
      <text
        x="294"
        y="208"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#4a5568"
      >
        Yes
      </text>

      <path
        d="M145 268 V316"
        stroke="#4a5568"
        strokeWidth="2"
        strokeLinecap="round"
        markerEnd="url(#drb-decision-arrow)"
      />
      <text x="158" y="298" fontSize="14" fontWeight="700" fill="#4a5568">
        No
      </text>
    </svg>
  );
}
