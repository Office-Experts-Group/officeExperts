// /app/blog/word-templates-for-legal-firms/(svgs)/LifecycleSvg.jsx
// Template lifecycle loop: draft, review, approve, publish, revisit.
// Theme hex used: $accent #046999, $accent-light #e8f4fa, $text-primary #0d1b2a,
// $text-secondary #4a5568.

const stages = [
  { t: "Draft", s: "Owner drafts" },
  { t: "Review", s: "Partner checks" },
  { t: "Approve", s: "Version logged" },
  { t: "Publish", s: "Library update" },
  { t: "Revisit", s: "Annual review" },
];

export default function LifecycleSvg() {
  const w = 132;
  const gap = 20;
  return (
    <svg
      viewBox="0 0 760 290"
      role="img"
      aria-labelledby="lfw-life-title lfw-life-desc"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="lfw-life-title">Lifecycle of a firm-approved template</title>
      <desc id="lfw-life-desc">
        Five stages in a loop: draft, review, approve, publish and revisit, with
        the last stage feeding back into the first as laws, branding and
        expectations change.
      </desc>

      <path
        d={`M${10 + 4 * (w + gap) + w / 2} 152 V210 Q${10 + 4 * (w + gap) + w / 2} 222 ${10 + 4 * (w + gap) + w / 2 - 12} 222 H${10 + w / 2 + 12} Q${10 + w / 2} 222 ${10 + w / 2} 210 V160`}
        fill="none"
        stroke="#046999"
        strokeWidth="2"
        strokeDasharray="6 6"
        strokeLinecap="round"
      />
      <path
        d={`M${10 + w / 2 - 8} 170 L${10 + w / 2} 156 L${10 + w / 2 + 8} 170`}
        fill="none"
        stroke="#046999"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {stages.map((s, i) => {
        const x = 10 + i * (w + gap);
        return (
          <g key={s.t}>
            <rect
              x={x}
              y="40"
              width={w}
              height="112"
              rx="14"
              fill={i === 3 ? "#046999" : "#e8f4fa"}
              stroke={i === 3 ? "#046999" : "#b9d6e5"}
            />
            <circle
              cx={x + 26}
              cy="66"
              r="12"
              fill={i === 3 ? "#ffffff" : "#046999"}
            />
            <text
              x={x + 26}
              y="71"
              fontSize="14"
              fontWeight="700"
              fill={i === 3 ? "#046999" : "#ffffff"}
              textAnchor="middle"
            >
              {i + 1}
            </text>
            <text
              x={x + 16}
              y="108"
              fontSize="16"
              fontWeight="700"
              fill={i === 3 ? "#ffffff" : "#0d1b2a"}
            >
              {s.t}
            </text>
            <text
              x={x + 16}
              y="132"
              fontSize="14"
              fill={i === 3 ? "#d8effa" : "#4a5568"}
            >
              {s.s}
            </text>
            {i < 4 && (
              <path
                d={`M${x + w + 3} 96 H${x + w + gap - 3}`}
                stroke="#046999"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </g>
        );
      })}

      <text x="380" y="262" fontSize="15" fill="#4a5568" textAnchor="middle">
        Laws change, branding updates and client expectations grow, so the loop
        never closes.
      </text>
    </svg>
  );
}
