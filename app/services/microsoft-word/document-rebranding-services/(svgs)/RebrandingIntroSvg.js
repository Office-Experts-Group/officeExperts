// /services/microsoft-word/document-rebranding-services/(svgs)/RebrandingIntroSvg.js
// Before and after illustration: a generic, faded Word page becoming an on-brand one.
// Hex values match the globals.scss palette because an SVG can't read Sass variables.

// Grey placeholder swatches on the "before" page
const OLD_SWATCHES = [
  { x: 75, fill: "#c3c8ce" },
  { x: 99, fill: "#d5d9de" },
  { x: 123, fill: "#dde0e4" },
];

// Brand swatches on the "after" page
const NEW_SWATCHES = [
  { cx: 350, fill: "#046999", stroke: "none" },
  { cx: 378, fill: "#111820", stroke: "none" },
  { cx: 406, fill: "#a0a2a6", stroke: "none" },
  { cx: 434, fill: "#f2f3f5", stroke: "#d5d9de" },
];

export const BrandSwapSvg = () => (
  <svg
    viewBox="0 0 560 440"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <filter id="rb-intro-shadow" x="-15%" y="-10%" width="130%" height="130%">
        <feDropShadow
          dx="0"
          dy="10"
          stdDeviation="14"
          floodColor="#0d1b2a"
          floodOpacity="0.16"
        />
      </filter>
    </defs>

    {/* Soft backdrop */}
    <rect x="20" y="40" width="520" height="360" rx="28" fill="#eceff2" />

    {/* BEFORE: faded, generic page */}
    <g transform="rotate(-4 140 230)">
      <rect
        x="45"
        y="85"
        width="190"
        height="270"
        rx="10"
        fill="#fff"
        stroke="#d5d9de"
      />
      <rect x="65" y="108" width="28" height="28" rx="6" fill="#c3c8ce" />
      <rect x="101" y="114" width="70" height="8" rx="4" fill="#c3c8ce" />
      <rect x="101" y="127" width="46" height="6" rx="3" fill="#dde0e4" />
      <rect x="65" y="162" width="150" height="12" rx="3" fill="#b4bac1" />
      {[196, 212, 228, 244].map((y) => (
        <rect key={y} x="65" y={y} width="150" height="6" rx="3" fill="#dde0e4" />
      ))}
      <rect x="65" y="260" width="90" height="6" rx="3" fill="#dde0e4" />
      {OLD_SWATCHES.map(({ x, fill }) => (
        <rect key={x} x={x} y="300" width="20" height="20" rx="4" fill={fill} />
      ))}
    </g>

    {/* Arrow between the two pages */}
    <circle cx="280" cy="220" r="26" fill="#046999" />
    <path
      d="M268 220h24m-9-9 9 9-9 9"
      fill="none"
      stroke="#fff"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* AFTER: on-brand page */}
    <g filter="url(#rb-intro-shadow)">
      <rect x="320" y="62" width="200" height="316" rx="10" fill="#fff" />
    </g>
    {/* Header band, drawn as a path so only the top corners are rounded */}
    <path d="M320 72a10 10 0 0 1 10-10h180a10 10 0 0 1 10 10v54H320z" fill="#046999" />
    <circle cx="348" cy="94" r="14" fill="#fff" />
    <path d="M342 100l6-12 6 12z" fill="#046999" />
    <rect x="370" y="86" width="70" height="8" rx="4" fill="#fff" />
    <rect x="370" y="100" width="46" height="6" rx="3" fill="#fff" opacity="0.6" />

    {/* Typography sample */}
    <text x="340" y="172" fontSize="38" fontWeight="900" fill="#0d1b2a">
      Aa
    </text>
    <rect x="396" y="148" width="104" height="12" rx="3" fill="#0d1b2a" />
    <rect x="396" y="168" width="76" height="7" rx="3" fill="#a0a2a6" />

    {/* Body copy */}
    {[200, 216, 232].map((y) => (
      <rect key={y} x="340" y={y} width="160" height="6" rx="3" fill="#c9d3dc" />
    ))}

    {/* Brand callout block */}
    <rect x="340" y="258" width="160" height="50" rx="8" fill="#046999" />
    <rect x="354" y="272" width="90" height="7" rx="3" fill="#fff" />
    <rect x="354" y="287" width="120" height="6" rx="3" fill="#fff" opacity="0.6" />

    {/* Palette */}
    {NEW_SWATCHES.map(({ cx, fill, stroke }) => (
      <circle key={cx} cx={cx} cy="340" r="11" fill={fill} stroke={stroke} />
    ))}
  </svg>
);
