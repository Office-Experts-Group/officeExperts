// /app/blog/fields-and-repeating-data-in-word/(svgs)/DecisionSvg.jsx
// Hex values mirror tokens: $accent #046999, $accent-light #e8f4fa,
// $accent-border rgba(4,105,153,0.28), $text-primary #0d1b2a, $text-secondary #4a5568.

const ACCENT = "#046999";
const ACCENT_LIGHT = "#e8f4fa";
const ACCENT_BORDER = "rgba(4,105,153,0.28)";
const TEXT = "#0d1b2a";
const TEXT_SECONDARY = "#4a5568";
const WHITE = "#ffffff";
const PANEL = "#f7f8f9";

const rows = [
  {
    y: 20,
    q: ["Do you need tables, lists or", "rich text repeated?"],
    yes: true,
    name: "Content controls + XML",
    sub: "Structured and reusable",
  },
  {
    y: 150,
    q: ["Is it document information,", "such as company or title?"],
    yes: true,
    name: "Built-in properties",
    sub: "Set once, shown anywhere",
  },
  {
    y: 280,
    q: ["Will a team reuse the same", "named values across templates?"],
    yes: true,
    name: "Custom properties",
    sub: "Your own named values",
  },
  {
    y: 410,
    q: ["Short text in one document,", "such as a name or ID"],
    yes: false,
    name: "Bookmark + REF field",
    sub: "Simplest to set up",
    recommended: true,
  },
];

const DecisionSvg = () => (
  <svg
    viewBox="0 0 760 536"
    role="img"
    aria-labelledby="frd-decision-title frd-decision-desc"
    style={{ width: "100%", height: "auto" }}
  >
    <title id="frd-decision-title">Which method should you use?</title>
    <desc id="frd-decision-desc">
      A decision flow with three yes or no questions. Rich content points to
      content controls with XML, document information points to built-in
      properties, shared named values point to custom properties, and everything
      else uses a bookmark with a REF field.
    </desc>
    <defs>
      <marker
        id="frd-decision-arrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="8"
        markerHeight="8"
        orient="auto-start-reverse"
      >
        <path d="M1 1l8 4-8 4z" fill={ACCENT} />
      </marker>
    </defs>

    {rows.map((r, i) => (
      <g key={r.name}>
        <rect
          x="20"
          y={r.y}
          width="320"
          height="96"
          rx="14"
          fill={WHITE}
          stroke={ACCENT_BORDER}
          strokeWidth="1.5"
        />
        <text x="40" y={r.y + 42} fontSize="15" fill={TEXT}>
          {r.q[0]}
        </text>
        <text x="40" y={r.y + 66} fontSize="15" fill={TEXT}>
          {r.q[1]}
        </text>

        <line
          x1="340"
          y1={r.y + 48}
          x2="436"
          y2={r.y + 48}
          stroke={ACCENT}
          strokeWidth="2"
          markerEnd="url(#frd-decision-arrow)"
        />
        {r.yes && (
          <text
            x="388"
            y={r.y + 38}
            fontSize="14"
            fontWeight="700"
            textAnchor="middle"
            fill={ACCENT}
          >
            Yes
          </text>
        )}

        <rect
          x="440"
          y={r.y}
          width="300"
          height="96"
          rx="14"
          fill={r.recommended ? ACCENT : ACCENT_LIGHT}
          stroke={ACCENT}
          strokeWidth="1.5"
        />
        <text
          x="460"
          y={r.y + 30}
          fontSize="14"
          fontWeight="700"
          letterSpacing="1.5"
          fill={r.recommended ? WHITE : ACCENT}
        >
          USE
        </text>
        <text
          x="460"
          y={r.y + 56}
          fontSize="17"
          fontWeight="700"
          fill={r.recommended ? WHITE : TEXT}
        >
          {r.name}
        </text>
        <text
          x="460"
          y={r.y + 76}
          fontSize="15"
          fill={r.recommended ? WHITE : TEXT_SECONDARY}
        >
          {r.sub}
        </text>

        {i < rows.length - 1 && (
          <g>
            <line
              x1="180"
              y1={r.y + 96}
              x2="180"
              y2={r.y + 146}
              stroke={ACCENT}
              strokeWidth="2"
              markerEnd="url(#frd-decision-arrow)"
            />
            <rect
              x="190"
              y={r.y + 106}
              width="36"
              height="24"
              rx="12"
              fill={PANEL}
            />
            <text
              x="208"
              y={r.y + 123}
              fontSize="14"
              fontWeight="700"
              textAnchor="middle"
              fill={TEXT_SECONDARY}
            >
              No
            </text>
          </g>
        )}
      </g>
    ))}
  </svg>
);

export default DecisionSvg;
