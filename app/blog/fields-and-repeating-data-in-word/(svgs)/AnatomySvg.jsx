// /app/blog/fields-and-repeating-data-in-word/(svgs)/AnatomySvg.jsx
// Hex values mirror tokens: $accent #046999, $accent-light #e8f4fa,
// $accent-border rgba(4,105,153,0.28), $text-primary #0d1b2a, $text-secondary #4a5568.

const ACCENT = "#046999";
const ACCENT_LIGHT = "#e8f4fa";
const ACCENT_BORDER = "rgba(4,105,153,0.28)";
const TEXT = "#0d1b2a";
const TEXT_SECONDARY = "#4a5568";
const WHITE = "#ffffff";
const MONO = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

// Pieces of the field code with the x position each pin points to.
const pieces = [
  { n: 1, x: 236, text: "{" },
  { n: 2, x: 280, text: "REF" },
  { n: 3, x: 387, text: "ClientName" },
  { n: 4, x: 489, text: "\\h" },
];

const legend = [
  {
    n: 1,
    title: "Braces",
    lines: ["Insert with Ctrl+F9,", "never typed by hand"],
  },
  {
    n: 2,
    title: "Field type",
    lines: ["REF repeats the", "content of a bookmark"],
  },
  {
    n: 3,
    title: "Bookmark name",
    lines: ["Must match the", "bookmark exactly"],
  },
  {
    n: 4,
    title: "Switch",
    lines: ["\\h makes the result", "a clickable link"],
  },
];

const AnatomySvg = () => (
  <svg
    viewBox="0 0 760 330"
    role="img"
    aria-labelledby="frd-anatomy-title frd-anatomy-desc"
    style={{ width: "100%", height: "auto" }}
  >
    <title id="frd-anatomy-title">Anatomy of a REF field</title>
    <desc id="frd-anatomy-desc">
      A field code reading REF ClientName with a hyperlink switch, with four
      numbered pins marking the braces, the field type, the bookmark name and
      the switch, each explained in a card below.
    </desc>

    <rect
      x="150"
      y="72"
      width="460"
      height="80"
      rx="14"
      fill={ACCENT_LIGHT}
      stroke={ACCENT_BORDER}
      strokeWidth="1.5"
    />
    {pieces.map((p) => (
      <g key={p.n}>
        <line
          x1={p.x}
          y1="44"
          x2={p.x}
          y2="72"
          stroke={ACCENT}
          strokeWidth="1.5"
        />
        <circle cx={p.x} cy="30" r="14" fill={ACCENT} />
        <text
          x={p.x}
          y="35.5"
          fontSize="15"
          fontWeight="700"
          textAnchor="middle"
          fill={WHITE}
        >
          {p.n}
        </text>
        <text
          x={p.x}
          y="123"
          fontSize="24"
          fontWeight="700"
          textAnchor="middle"
          fontFamily={MONO}
          fill={TEXT}
        >
          {p.text}
        </text>
      </g>
    ))}
    <text
      x="524"
      y="123"
      fontSize="24"
      fontWeight="700"
      textAnchor="middle"
      fontFamily={MONO}
      fill={TEXT}
    >
      {"}"}
    </text>

    {legend.map((item, i) => {
      const x = 20 + i * 185;
      return (
        <g key={item.n}>
          <rect
            x={x}
            y="190"
            width="165"
            height="112"
            rx="12"
            fill={WHITE}
            stroke={ACCENT_BORDER}
            strokeWidth="1.5"
          />
          <circle cx={x + 26} cy="216" r="13" fill={ACCENT} />
          <text
            x={x + 26}
            y="221"
            fontSize="14"
            fontWeight="700"
            textAnchor="middle"
            fill={WHITE}
          >
            {item.n}
          </text>
          <text x={x + 46} y="221" fontSize="15" fontWeight="700" fill={TEXT}>
            {item.title}
          </text>
          <text x={x + 16} y="252" fontSize="14" fill={TEXT_SECONDARY}>
            {item.lines[0]}
          </text>
          <text x={x + 16} y="274" fontSize="14" fill={TEXT_SECONDARY}>
            {item.lines[1]}
          </text>
        </g>
      );
    })}
  </svg>
);

export default AnatomySvg;
