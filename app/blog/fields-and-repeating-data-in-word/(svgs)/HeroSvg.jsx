// /app/blog/fields-and-repeating-data-in-word/(svgs)/HeroSvg.jsx
// Hex values mirror tokens: $dark-surface #18232e, $accent #046999,
// $accent-on-dark #5bbce6, white-18 / white-35 for strokes and muted bars.

const SURFACE = "#18232e";
const ACCENT = "#046999";
const ACCENT_ON_DARK = "#5bbce6";
const STROKE = "rgba(255,255,255,0.18)";
const BAR = "rgba(255,255,255,0.14)";
const TEXT_MUTED = "rgba(255,255,255,0.65)";
const TEXT = "#ffffff";

const pages = [
  { y: 30, label: "Header" },
  { y: 158, label: "Body text" },
  { y: 286, label: "Footer" },
];

const HeroSvg = () => (
  <svg
    viewBox="0 0 540 420"
    role="img"
    aria-labelledby="frd-hero-title frd-hero-desc"
    style={{ width: "100%", height: "auto" }}
  >
    <title id="frd-hero-title">One entry repeated across a document</title>
    <desc id="frd-hero-desc">
      A single source value labelled enter once is linked to three document
      sections: the header, the body text and the footer, which all show the
      same client name.
    </desc>

    <rect
      x="30"
      y="150"
      width="180"
      height="104"
      rx="14"
      fill={SURFACE}
      stroke={ACCENT_ON_DARK}
      strokeWidth="2"
    />
    <text
      x="50"
      y="182"
      fontSize="14"
      fontWeight="700"
      letterSpacing="1.5"
      fill={ACCENT_ON_DARK}
    >
      ENTER ONCE
    </text>
    <rect x="50" y="198" width="140" height="32" rx="8" fill={ACCENT} />
    <text x="62" y="220" fontSize="16" fontWeight="600" fill={TEXT}>
      Client name
    </text>

    {pages.map((p) => (
      <g key={p.label}>
        <path
          d={`M210 202 C 270 202, 280 ${p.y + 76}, 340 ${p.y + 76}`}
          fill="none"
          stroke={ACCENT_ON_DARK}
          strokeWidth="2"
          strokeDasharray="6 5"
        />
        <circle cx="340" cy={p.y + 76} r="4" fill={ACCENT_ON_DARK} />
        <rect
          x="340"
          y={p.y}
          width="170"
          height="104"
          rx="12"
          fill={SURFACE}
          stroke={STROKE}
        />
        <text x="356" y={p.y + 26} fontSize="14" fill={TEXT_MUTED}>
          {p.label}
        </text>
        <rect x="356" y={p.y + 36} width="120" height="6" rx="3" fill={BAR} />
        <rect
          x="356"
          y={p.y + 64}
          width="104"
          height="24"
          rx="8"
          fill={ACCENT}
        />
        <text x="368" y={p.y + 81} fontSize="15" fontWeight="600" fill={TEXT}>
          Client name
        </text>
      </g>
    ))}
  </svg>
);

export default HeroSvg;
