// /app/blog/google-docs-vs-microsoft-word/(svgs)/MigrationSvg.jsx
// Five-stage migration pathway, left to right.
// Theme values used (hard-coded hex): $accent #046999, $white #ffffff,
// $text-primary #0d1b2a, $text-secondary #4a5568.

const STAGES = [
  { title: "Audit", a: "Inventory files", b: "and owners" },
  { title: "Convert", a: "Export to Word,", b: "check styles" },
  { title: "Standardise", a: "Build templates", b: "and styles" },
  { title: "Train", a: "Short, role-based", b: "sessions" },
  { title: "Automate", a: "Remove repeat", b: "formatting work" },
];

export default function MigrationSvg() {
  return (
    <svg
      viewBox="0 0 886 190"
      role="img"
      aria-labelledby="gdw-path-title gdw-path-desc"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
    >
      <title id="gdw-path-title">Five stages from Google Docs to Word</title>
      <desc id="gdw-path-desc">
        The pathway runs audit, convert, standardise, train and automate.
      </desc>
      <defs>
        <marker
          id="gdw-path-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto"
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

      {STAGES.map((s, i) => {
        const x = 20 + i * 174;
        return (
          <g key={s.title}>
            <rect
              x={x}
              y="20"
              width="150"
              height="140"
              rx="12"
              fill="#ffffff"
              stroke="#046999"
              strokeWidth="1.5"
            />
            <circle cx={x + 32} cy="54" r="16" fill="#046999" />
            <text
              x={x + 32}
              y="60"
              textAnchor="middle"
              fontSize="16"
              fontWeight="700"
              fill="#ffffff"
            >
              {i + 1}
            </text>
            <text
              x={x + 16}
              y="98"
              fontSize="17"
              fontWeight="700"
              fill="#0d1b2a"
            >
              {s.title}
            </text>
            <text x={x + 16} y="122" fontSize="14" fill="#4a5568">
              {s.a}
            </text>
            <text x={x + 16} y="142" fontSize="14" fill="#4a5568">
              {s.b}
            </text>
            {i < STAGES.length - 1 && (
              <path
                d={`M${x + 152} 90H${x + 172}`}
                stroke="#046999"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#gdw-path-arrow)"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}
