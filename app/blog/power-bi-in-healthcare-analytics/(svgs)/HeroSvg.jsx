// /app/blog/power-bi-in-healthcare-analytics/(svgs)/HeroSvg.jsx
// Hero illustration: scattered records feeding one dashboard.
// Sits directly on the dark hero background (no outer panel).
// Hex values map to globals.scss tokens:
//   #111820 $dark-bg, #18232e $dark-surface, #1a2a3a $dark-mid,
//   #046999 $accent, #6fc3e8 $accent-on-dark, #e6edf2 ~ $white-88 on dark.

const BED_PATTERN = ["110111", "101101", "111011", "011110"];

const HeroSvg = () => (
  <svg
    viewBox="0 0 600 480"
    role="img"
    aria-labelledby="hca-hero-title hca-hero-desc"
    fontFamily="aptos"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    <title id="hca-hero-title">Patient data flowing into one dashboard</title>
    <desc id="hca-hero-desc">
      Four separate sources (records, lab results, imaging and devices) are
      merged and shown on a single dashboard with trend, bed use and quality
      measures.
    </desc>

    <defs>
      <linearGradient id="hca-hero-area" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#6fc3e8" stopOpacity="0.38" />
        <stop offset="1" stopColor="#6fc3e8" stopOpacity="0" />
      </linearGradient>
    </defs>

    {/* Source cards */}
    {[34, 138, 242, 346].map((y) => (
      <rect
        key={y}
        x="10"
        y={y}
        width="160"
        height="84"
        rx="14"
        fill="#18232e"
        stroke="#6fc3e8"
        strokeOpacity="0.35"
      />
    ))}

    {/* Records icon */}
    <g fill="none" stroke="#6fc3e8" strokeWidth="1.8" strokeLinecap="round">
      <rect x="24" y="58" width="28" height="36" rx="4" />
      <path d="M31 68h14M31 76h14M31 84h9" />
    </g>
    <text x="68" y="81" fontSize="14" fontWeight="600" fill="#e6edf2">
      Records
    </text>

    {/* Lab icon */}
    <g fill="none" stroke="#6fc3e8" strokeWidth="1.8" strokeLinecap="round">
      <path d="M32 160h14v26a7 7 0 0 1-14 0z" />
      <path d="M29 160h20" />
    </g>
    <path d="M32 180h14v6a7 7 0 0 1-14 0z" fill="#6fc3e8" fillOpacity="0.8" />
    <text x="68" y="185" fontSize="14" fontWeight="600" fill="#e6edf2">
      Lab results
    </text>

    {/* Imaging icon */}
    <g fill="none" stroke="#6fc3e8" strokeWidth="1.8" strokeLinecap="round">
      <rect x="24" y="266" width="32" height="36" rx="4" />
      <circle cx="40" cy="284" r="9" />
    </g>
    <circle cx="40" cy="284" r="3" fill="#6fc3e8" />
    <text x="68" y="289" fontSize="14" fontWeight="600" fill="#e6edf2">
      Imaging
    </text>

    {/* Devices icon */}
    <path
      d="M22 388h8l5-12 7 24 5-12h8"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text x="68" y="393" fontSize="14" fontWeight="600" fill="#e6edf2">
      Devices
    </text>

    {/* Flow lines into the hub */}
    <g
      fill="none"
      stroke="#6fc3e8"
      strokeOpacity="0.55"
      strokeWidth="1.6"
      strokeDasharray="4 5"
    >
      <path d="M170 76C192 76 192 240 206 240" />
      <path d="M170 180C190 180 192 240 206 240" />
      <path d="M170 284C190 284 192 240 206 240" />
      <path d="M170 388C192 388 192 240 206 240" />
    </g>

    {/* Hub */}
    <circle
      cx="232"
      cy="240"
      r="26"
      fill="#046999"
      stroke="#6fc3e8"
      strokeWidth="1.5"
    />
    <path
      d="M219 230 234 240M219 250 234 240M219 240h27M240 235l6 5-6 5"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M258 240h30M282 235l6 5-6 5"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Dashboard */}
    <rect
      x="290"
      y="30"
      width="300"
      height="420"
      rx="20"
      fill="#18232e"
      stroke="#6fc3e8"
      strokeOpacity="0.4"
    />
    <g fill="#ffffff" fillOpacity="0.3">
      <circle cx="312" cy="56" r="4" />
      <circle cx="326" cy="56" r="4" />
      <circle cx="340" cy="56" r="4" />
    </g>
    <rect
      x="358"
      y="50"
      width="96"
      height="12"
      rx="6"
      fill="#ffffff"
      fillOpacity="0.16"
    />
    <path
      d="M466 56h14l5-10 8 22 6-12h10l4-6 4 12h18"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M306 76h268" stroke="#ffffff" strokeOpacity="0.1" />

    {/* KPI tiles */}
    {[306, 399, 492].map((x) => (
      <rect
        key={x}
        x={x}
        y="92"
        width="82"
        height="68"
        rx="10"
        fill="#1a2a3a"
        stroke="#ffffff"
        strokeOpacity="0.1"
      />
    ))}
    <text x="316" y="116" fontSize="14" fill="#e6edf2" fillOpacity="0.85">
      Returns
    </text>
    <path
      d="M316 132l10 4 10-1 10 7 10 3 10 2"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text x="409" y="116" fontSize="14" fill="#e6edf2" fillOpacity="0.85">
      Bed use
    </text>
    <g fill="#6fc3e8" fillOpacity="0.85">
      {[10, 16, 12, 20, 14, 18].map((h, i) => (
        <rect
          key={i}
          x={409 + i * 11}
          y={148 - h}
          width="8"
          height={h}
          rx="2"
        />
      ))}
    </g>
    <text x="502" y="116" fontSize="14" fill="#e6edf2" fillOpacity="0.85">
      ED wait
    </text>
    <path
      d="M502 134l10-2 10 5 10-4 10 8 10 3"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Trend chart */}
    <rect
      x="306"
      y="172"
      width="268"
      height="124"
      rx="10"
      fill="#1a2a3a"
      stroke="#ffffff"
      strokeOpacity="0.1"
    />
    <text x="320" y="196" fontSize="14" fill="#e6edf2" fillOpacity="0.85">
      Waiting time
    </text>
    <g stroke="#ffffff" strokeOpacity="0.08">
      <path d="M318 216h244M318 244h244M318 272h244" />
    </g>
    <path
      d="M318 262L350 250 382 256 414 236 446 242 478 222 510 228 542 208 562 214V282H318Z"
      fill="url(#hca-hero-area)"
    />
    <path
      d="M318 262L350 250 382 256 414 236 446 242 478 222 510 228 542 208 562 214"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M318 240h244"
      stroke="#ffffff"
      strokeOpacity="0.45"
      strokeDasharray="6 6"
    />
    <circle cx="562" cy="214" r="8" fill="#6fc3e8" fillOpacity="0.3" />
    <circle cx="562" cy="214" r="4" fill="#6fc3e8" />

    {/* Beds */}
    <rect
      x="306"
      y="308"
      width="130"
      height="126"
      rx="10"
      fill="#1a2a3a"
      stroke="#ffffff"
      strokeOpacity="0.1"
    />
    <text x="320" y="332" fontSize="14" fill="#e6edf2" fillOpacity="0.85">
      Beds
    </text>
    {BED_PATTERN.map((row, r) =>
      row
        .split("")
        .map((cell, c) => (
          <rect
            key={`${r}-${c}`}
            x={320 + c * 18}
            y={346 + r * 18}
            width="14"
            height="14"
            rx="3"
            fill={cell === "1" ? "#6fc3e8" : "#ffffff"}
            fillOpacity={cell === "1" ? 0.85 : 0.14}
          />
        )),
    )}

    {/* Quality donut */}
    <rect
      x="446"
      y="308"
      width="128"
      height="126"
      rx="10"
      fill="#1a2a3a"
      stroke="#ffffff"
      strokeOpacity="0.1"
    />
    <text x="460" y="332" fontSize="14" fill="#e6edf2" fillOpacity="0.85">
      Quality
    </text>
    <circle
      cx="510"
      cy="386"
      r="26"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.12"
      strokeWidth="12"
    />
    <circle
      cx="510"
      cy="386"
      r="26"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="12"
      strokeLinecap="round"
      strokeDasharray="112 51"
      transform="rotate(-90 510 386)"
    />
  </svg>
);

export default HeroSvg;
