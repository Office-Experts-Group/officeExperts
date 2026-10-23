// app/accessibility/(svgs)/TaggedStructureSVG.jsx

// Illustrates a properly tagged document outline — H1 down through H2/H3 and
// a paragraph — with a dotted reading-order path a screen reader would follow.
const TaggedStructureSVG = () => (
  <svg
    viewBox="0 0 480 380"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    fill="none"
  >
    {/* Page outline */}
    <rect
      x="20"
      y="16"
      width="440"
      height="348"
      rx="6"
      stroke="rgba(4,105,153,0.18)"
      strokeWidth="1.5"
    />

    {/* H1 tag + heading bar */}
    <rect x="44" y="40" width="34" height="18" rx="3" fill="#046999" />
    <text
      x="61"
      y="53"
      textAnchor="middle"
      fill="#fff"
      fontSize="9"
      fontWeight="700"
    >
      H1
    </text>
    <rect x="88" y="42" width="180" height="14" rx="2" fill="rgba(4,105,153,0.85)" />

    {/* Body line under H1 */}
    <rect x="44" y="70" width="392" height="8" rx="2" fill="rgba(13,27,42,0.1)" />
    <rect x="44" y="84" width="340" height="8" rx="2" fill="rgba(13,27,42,0.1)" />

    {/* H2 tag + heading bar */}
    <rect x="44" y="112" width="34" height="18" rx="3" fill="#046999" opacity="0.85" />
    <text
      x="61"
      y="125"
      textAnchor="middle"
      fill="#fff"
      fontSize="9"
      fontWeight="700"
    >
      H2
    </text>
    <rect x="88" y="114" width="150" height="14" rx="2" fill="rgba(4,105,153,0.65)" />

    <rect x="44" y="142" width="392" height="8" rx="2" fill="rgba(13,27,42,0.1)" />

    {/* Nested H3 — indented to show hierarchy */}
    <rect x="68" y="166" width="30" height="16" rx="3" fill="#046999" opacity="0.6" />
    <text
      x="83"
      y="178"
      textAnchor="middle"
      fill="#fff"
      fontSize="8"
      fontWeight="700"
    >
      H3
    </text>
    <rect x="106" y="167" width="120" height="12" rx="2" fill="rgba(4,105,153,0.5)" />

    <rect x="68" y="192" width="368" height="8" rx="2" fill="rgba(13,27,42,0.1)" />
    <rect x="68" y="206" width="300" height="8" rx="2" fill="rgba(13,27,42,0.1)" />

    {/* Second H2 */}
    <rect x="44" y="234" width="34" height="18" rx="3" fill="#046999" opacity="0.85" />
    <text
      x="61"
      y="247"
      textAnchor="middle"
      fill="#fff"
      fontSize="9"
      fontWeight="700"
    >
      H2
    </text>
    <rect x="88" y="236" width="170" height="14" rx="2" fill="rgba(4,105,153,0.65)" />

    {/* Alt-text tagged image placeholder */}
    <rect
      x="44"
      y="264"
      width="90"
      height="66"
      rx="4"
      stroke="#046999"
      strokeWidth="1.5"
      strokeDasharray="4 3"
      fill="rgba(4,105,153,0.06)"
    />
    <path
      d="M58 310l14-16 10 10 8-9 16 15"
      stroke="#046999"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.5"
    />
    <circle cx="60" cy="278" r="3" fill="#046999" opacity="0.5" />

    <rect x="146" y="270" width="290" height="8" rx="2" fill="rgba(13,27,42,0.1)" />
    <rect x="146" y="284" width="290" height="8" rx="2" fill="rgba(13,27,42,0.1)" />
    <rect x="146" y="298" width="220" height="8" rx="2" fill="rgba(13,27,42,0.1)" />

    {/* Alt text label tag on the image */}
    <rect x="44" y="336" width="90" height="16" rx="8" fill="#e8f4fa" />
    <text x="89" y="347" textAnchor="middle" fill="#046999" fontSize="7.5" fontWeight="700">
      ALT TEXT SET
    </text>

    {/* Dotted reading-order path connecting each tag in sequence */}
    <path
      d="M61 58 V112 M61 130 V166 M83 182 V234 M61 252 V264"
      stroke="#046999"
      strokeWidth="1.3"
      strokeDasharray="3 3"
      opacity="0.4"
    />

    {/* Reading order arrow markers */}
    {[58, 130, 182, 252].map((y, i) => (
      <circle key={i} cx={i === 2 ? 83 : 61} cy={y} r="2" fill="#046999" opacity="0.5" />
    ))}
  </svg>
);

export default TaggedStructureSVG;
