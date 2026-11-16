// /app/blog/xero-to-power-bi/(svgs)/HeroSvg.jsx
// Hero illustration: stack of exported sheets with flagged cells (before),
// a refresh link, then a dashboard card (after). Sits directly on the hero.
// Tokens: $dark-surface #18232e, $dark-mid #1a2a3a, $accent #046999,
// $accent-on-dark #6fc3e8, $replace-x #c0392b, $white.

const HeroSvg = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 560 400"
    role="img"
    aria-labelledby="xpb-hero-title xpb-hero-desc"
    fontFamily="aptos"
  >
    <title id="xpb-hero-title">From manual exports to a live dashboard</title>
    <desc id="xpb-hero-desc">
      A stack of exported spreadsheets with flagged cells on the left is
      connected by a refresh link to a dashboard with KPI tiles and a bar chart
      on the right.
    </desc>

    {/* ── Before: stack of exported sheets ── */}
    <g transform="rotate(-8 118 190)">
      <rect
        x="30"
        y="66"
        width="176"
        height="216"
        rx="12"
        fill="#18232e"
        stroke="#2f4b63"
      />
    </g>
    <g transform="rotate(5 118 190)">
      <rect
        x="30"
        y="70"
        width="176"
        height="216"
        rx="12"
        fill="#1a2a3a"
        stroke="#2f4b63"
      />
    </g>
    <rect
      x="34"
      y="84"
      width="176"
      height="216"
      rx="12"
      fill="#1a2a3a"
      stroke="#3b6280"
    />
    <rect
      x="34"
      y="84"
      width="176"
      height="30"
      rx="12"
      fill="#046999"
      fillOpacity="0.45"
    />
    <rect
      x="34"
      y="100"
      width="176"
      height="14"
      fill="#046999"
      fillOpacity="0.45"
    />
    <rect
      x="50"
      y="95"
      width="30"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity="0.8"
    />
    <rect
      x="98"
      y="95"
      width="30"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity="0.8"
    />
    <rect
      x="146"
      y="95"
      width="30"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity="0.8"
    />

    {/* grid of cells: 3 columns x 6 rows */}
    {[126, 152, 178, 204, 230, 256].map((y) =>
      [48, 96, 144].map((x) => (
        <rect
          key={`${x}-${y}`}
          x={x}
          y={y}
          width="44"
          height="18"
          rx="4"
          fill="#223a50"
        />
      )),
    )}

    {/* flagged cells */}
    <rect x="96" y="152" width="44" height="18" rx="4" fill="#c0392b" />
    <rect x="127" y="157" width="2.4" height="6.5" rx="1.2" fill="#ffffff" />
    <circle cx="128.2" cy="167" r="1.3" fill="#ffffff" />
    <rect x="144" y="204" width="44" height="18" rx="4" fill="#c0392b" />
    <rect x="175" y="209" width="2.4" height="6.5" rx="1.2" fill="#ffffff" />
    <circle cx="176.2" cy="219" r="1.3" fill="#ffffff" />
    <rect
      x="48"
      y="256"
      width="44"
      height="18"
      rx="4"
      fill="none"
      stroke="#c0392b"
      strokeWidth="1.6"
      strokeDasharray="4 3"
    />

    {/* export tag */}
    <rect x="148" y="58" width="56" height="26" rx="7" fill="#046999" />
    <text
      x="176"
      y="76"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
    >
      CSV
    </text>

    {/* ── Link: scheduled refresh ── */}
    <path
      d="M214 190 H 243"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeDasharray="6 8"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M296 190 H 326"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeDasharray="6 8"
      strokeLinecap="round"
      fill="none"
    />
    <circle
      cx="270"
      cy="190"
      r="27"
      fill="#111820"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <path
      d="M258 192a12 12 0 0 1 19-9"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <path
      d="m279 177 0.8 8.2-8.2-0.6"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M282 188a12 12 0 0 1-19 9"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <path
      d="m261 203-0.8-8.2 8.2 0.6"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* ── After: dashboard card ── */}
    <rect
      x="330"
      y="62"
      width="220"
      height="244"
      rx="16"
      fill="#18232e"
      stroke="#3b6280"
    />
    <circle cx="350" cy="82" r="4" fill="#3b6280" />
    <circle cx="364" cy="82" r="4" fill="#3b6280" />
    <circle cx="378" cy="82" r="4" fill="#3b6280" />
    <rect
      x="440"
      y="70"
      width="100"
      height="24"
      rx="12"
      fill="#046999"
      fillOpacity="0.3"
      stroke="#6fc3e8"
    />
    <circle cx="455" cy="82" r="4" fill="#6fc3e8" />
    <text x="466" y="87" fontSize="14" fontWeight="600" fill="#ffffff">
      Live feed
    </text>

    {/* KPI tiles */}
    <rect x="346" y="108" width="88" height="50" rx="8" fill="#1a2a3a" />
    <rect x="356" y="119" width="34" height="5" rx="2.5" fill="#5f7d95" />
    <rect x="356" y="134" width="58" height="11" rx="3" fill="#6fc3e8" />
    <rect x="446" y="108" width="88" height="50" rx="8" fill="#1a2a3a" />
    <rect x="456" y="119" width="34" height="5" rx="2.5" fill="#5f7d95" />
    <rect
      x="456"
      y="134"
      width="46"
      height="11"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.85"
    />

    {/* bar chart with trend line */}
    <path d="M346 284 H534" stroke="#2f4b63" strokeWidth="1.5" />
    <rect x="352" y="252" width="22" height="32" rx="3" fill="#046999" />
    <rect x="384" y="238" width="22" height="46" rx="3" fill="#046999" />
    <rect x="416" y="244" width="22" height="40" rx="3" fill="#046999" />
    <rect x="448" y="222" width="22" height="62" rx="3" fill="#046999" />
    <rect x="480" y="230" width="22" height="54" rx="3" fill="#046999" />
    <rect x="512" y="200" width="18" height="84" rx="3" fill="#6fc3e8" />
    <polyline
      points="363,236 395,222 427,228 459,206 491,212 521,184"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.85"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="521" cy="184" r="4.5" fill="#ffffff" />

    {/* captions */}
    <text
      x="118"
      y="352"
      textAnchor="middle"
      fontSize="15"
      fill="#ffffff"
      fillOpacity="0.75"
    >
      Before: manual exports
    </text>
    <text
      x="440"
      y="352"
      textAnchor="middle"
      fontSize="15"
      fill="#ffffff"
      fillOpacity="0.75"
    >
      After: scheduled feed
    </text>
  </svg>
);

export default HeroSvg;
