// /app/blog/ultimate-guide-to-word-templates/(svgs)/HierarchySvg.jsx
// Template hierarchy: which element wins when names clash.
// Theme values used: $accent #046999, $accent-light #e8f4fa, $text-primary #0d1b2a,
// $text-secondary #4a5568.

const layers = [
  {
    title: "Document-specific elements",
    sub: "Stored in the document itself",
    solid: true,
  },
  { title: "Attached template", sub: "The template the document is based on" },
  { title: "Normal.dotm", sub: "Default settings from the Normal template" },
  {
    title: "Global templates",
    sub: "Active global templates, in alphabetical order",
  },
];

export default function HierarchySvg() {
  return (
    <svg
      viewBox="0 0 640 450"
      role="img"
      aria-labelledby="uwt-hier-title uwt-hier-desc"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="uwt-hier-title">Template hierarchy in Word</title>
      <desc id="uwt-hier-desc">
        Four layers in order of precedence: document-specific elements first,
        then the attached template, then Normal.dotm, then global templates.
      </desc>

      <defs>
        <marker
          id="uwt-hier-arrow"
          viewBox="0 0 10 10"
          refX="5"
          refY="8"
          markerWidth="8"
          markerHeight="8"
          orient="auto"
        >
          <path
            d="M1 2 5 9 9 2"
            fill="none"
            stroke="#046999"
            strokeWidth="1.8"
          />
        </marker>
      </defs>

      <text
        x="40"
        y="28"
        textAnchor="middle"
        fill="#046999"
        fontSize="14"
        fontWeight="700"
      >
        Wins
      </text>
      <path
        d="M40 40V396"
        stroke="#046999"
        strokeWidth="2"
        markerEnd="url(#uwt-hier-arrow)"
      />
      <text
        x="40"
        y="428"
        textAnchor="middle"
        fill="#4a5568"
        fontSize="14"
        fontWeight="700"
      >
        Yields
      </text>

      {layers.map((l, i) => {
        const x = 84 + i * 20;
        const y = 40 + i * 92;
        const fill = l.solid ? "#046999" : "#e8f4fa";
        const head = l.solid ? "#ffffff" : "#0d1b2a";
        const sub = l.solid ? "#ffffff" : "#4a5568";
        return (
          <g key={l.title}>
            <rect
              x={x}
              y={y}
              width="480"
              height="78"
              rx="14"
              fill={fill}
              stroke="#046999"
              strokeOpacity={l.solid ? 1 : 0.3}
            />
            <circle
              cx={x + 34}
              cy={y + 39}
              r="16"
              fill={l.solid ? "#ffffff" : "#046999"}
            />
            <text
              x={x + 34}
              y={y + 45}
              textAnchor="middle"
              fill={l.solid ? "#046999" : "#ffffff"}
              fontSize="16"
              fontWeight="700"
            >
              {i + 1}
            </text>
            <text
              x={x + 64}
              y={y + 32}
              fill={head}
              fontSize="16"
              fontWeight="700"
            >
              {l.title}
            </text>
            <text x={x + 64} y={y + 56} fill={sub} fontSize="14">
              {l.sub}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
