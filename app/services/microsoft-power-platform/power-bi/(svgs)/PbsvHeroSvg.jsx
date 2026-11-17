// /app/services/microsoft-power-platform/power-bi/(svgs)/PbsvHeroSvg.jsx
// Hero illustration: a report coming together, drawn straight onto the hero
// background (no enclosing panel). flowClass animates the lines (dash offset),
// liveClass pulses the "refreshed" dot. Both come from the hero module.
//
// Hex values and the tokens they match:
//   #ffffff $white · #e3e8ec $line · #d4d6d9 $line-strong · #f7f8f9 $light-bg
//   #e8f4fa $accent-light · #046999 $accent · #034e72 $accent-dark
//   #6fc3e8 $accent-on-dark · #0d1b2a $text-primary · #4a5568 $text-secondary
//   #0eaa0e $success

export default function PbsvHeroSvg({ flowClass = "", liveClass = "" }) {
  const bars = [
    { x: 88, y: 350, h: 50 },
    { x: 136, y: 328, h: 72 },
    { x: 184, y: 340, h: 60 },
    { x: 232, y: 304, h: 96 },
    { x: 280, y: 318, h: 82 },
    { x: 328, y: 280, h: 120, hot: true },
    { x: 376, y: 300, h: 100 },
  ];

  return (
    <svg
      viewBox="0 0 600 520"
      fontFamily="aptos"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <filter
          id="pbsv-hero-shadow"
          x="-20%"
          y="-20%"
          width="140%"
          height="150%"
        >
          <feDropShadow
            dx="0"
            dy="10"
            stdDeviation="12"
            floodColor="#0d1b2a"
            floodOpacity="0.1"
          />
        </filter>
      </defs>

      {/* faint rings for depth */}
      <circle cx="300" cy="270" r="250" fill="none" stroke="#e3e8ec" />
      <circle
        cx="300"
        cy="270"
        r="196"
        fill="none"
        stroke="#e3e8ec"
        strokeDasharray="3 9"
      />
      <circle cx="548" cy="206" r="6" fill="#6fc3e8" />
      <circle cx="42" cy="214" r="5" fill="#046999" opacity="0.35" />
      <circle cx="520" cy="500" r="4" fill="#046999" opacity="0.35" />

      {/* KPI tile */}
      <g filter="url(#pbsv-hero-shadow)">
        <rect
          x="20"
          y="40"
          width="250"
          height="130"
          rx="16"
          fill="#ffffff"
          stroke="#e3e8ec"
        />
      </g>
      <text x="40" y="72" fontSize="14" fill="#4a5568">
        Revenue
      </text>
      <text x="40" y="112" fontSize="30" fontWeight="700" fill="#0d1b2a">
        $4.82m
      </text>
      <rect x="40" y="124" width="84" height="28" rx="14" fill="#e8f4fa" />
      <text x="54" y="143" fontSize="14" fontWeight="700" fill="#046999">
        +12.4%
      </text>
      <path
        className={flowClass}
        d="M150 148 C170 138 180 126 196 130 S224 100 252 84"
        fill="none"
        stroke="#046999"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="252" cy="84" r="5" fill="#046999" />

      {/* Orders tile (solid accent) */}
      <g filter="url(#pbsv-hero-shadow)">
        <rect x="300" y="20" width="180" height="150" rx="16" fill="#046999" />
      </g>
      <circle
        cx="352"
        cy="95"
        r="34"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.25"
        strokeWidth="12"
      />
      <circle
        cx="352"
        cy="95"
        r="34"
        fill="none"
        stroke="#ffffff"
        strokeWidth="12"
        strokeLinecap="round"
        strokeDasharray="154 60"
        transform="rotate(-90 352 95)"
      />
      <text
        x="352"
        y="101"
        fontSize="16"
        fontWeight="700"
        fill="#ffffff"
        textAnchor="middle"
      >
        72%
      </text>
      <text x="402" y="92" fontSize="14" fontWeight="700" fill="#ffffff">
        Orders
      </text>
      <text x="402" y="112" fontSize="14" fill="#ffffff" opacity="0.8">
        on time
      </text>

      {/* Sales chart tile */}
      <g filter="url(#pbsv-hero-shadow)">
        <rect
          x="60"
          y="200"
          width="360"
          height="230"
          rx="16"
          fill="#ffffff"
          stroke="#e3e8ec"
        />
      </g>
      <text x="84" y="234" fontSize="14" fontWeight="700" fill="#0d1b2a">
        Sales by month
      </text>
      <line x1="84" y1="400" x2="402" y2="400" stroke="#e3e8ec" />
      <line
        x1="84"
        y1="352"
        x2="402"
        y2="352"
        stroke="#e3e8ec"
        strokeDasharray="2 6"
      />
      {bars.map((b) => (
        <rect
          key={b.x}
          x={b.x}
          y={b.y}
          width="30"
          height={b.h}
          rx="5"
          fill={b.hot ? "#046999" : "#c6e3f1"}
        />
      ))}
      <path
        className={flowClass}
        d="M103 350 L151 328 L199 340 L247 304 L295 318 L343 280 L391 300"
        fill="none"
        stroke="#034e72"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="292" y="224" width="102" height="44" rx="8" fill="#0d1b2a" />
      <path d="M338 268 L348 268 L343 277 Z" fill="#0d1b2a" />
      <text x="306" y="242" fontSize="14" fill="#ffffff" opacity="0.8">
        June
      </text>
      <text x="306" y="260" fontSize="14" fontWeight="700" fill="#6fc3e8">
        $812k
      </text>
      <polygon
        points="338,304 338,334 346,327 352,340 358,337 352,324 362,324"
        fill="#0d1b2a"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* drill through chip */}
      <rect x="300" y="442" width="130" height="34" rx="17" fill="#e8f4fa" />
      <text x="316" y="464" fontSize="14" fontWeight="700" fill="#046999">
        Drill through
      </text>
      <path
        d="M404 459h14M413 454l5 5-5 5"
        fill="none"
        stroke="#046999"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Region slicer tile */}
      <g filter="url(#pbsv-hero-shadow)">
        <rect
          x="440"
          y="190"
          width="140"
          height="170"
          rx="16"
          fill="#ffffff"
          stroke="#e3e8ec"
        />
      </g>
      <text x="458" y="220" fontSize="14" fontWeight="700" fill="#0d1b2a">
        Region
      </text>
      <rect x="458" y="232" width="104" height="30" rx="15" fill="#046999" />
      <text x="474" y="252" fontSize="14" fontWeight="700" fill="#ffffff">
        QLD
      </text>
      <rect
        x="458"
        y="270"
        width="104"
        height="30"
        rx="15"
        fill="#f7f8f9"
        stroke="#e3e8ec"
      />
      <text x="474" y="290" fontSize="14" fill="#4a5568">
        NSW
      </text>
      <rect
        x="458"
        y="308"
        width="104"
        height="30"
        rx="15"
        fill="#f7f8f9"
        stroke="#e3e8ec"
      />
      <text x="474" y="328" fontSize="14" fill="#4a5568">
        VIC
      </text>

      {/* top products tile */}
      <g filter="url(#pbsv-hero-shadow)">
        <rect
          x="440"
          y="380"
          width="140"
          height="112"
          rx="16"
          fill="#ffffff"
          stroke="#e3e8ec"
        />
      </g>
      <text x="458" y="406" fontSize="14" fontWeight="700" fill="#0d1b2a">
        Top products
      </text>
      <rect x="458" y="420" width="96" height="10" rx="5" fill="#046999" />
      <rect x="458" y="440" width="70" height="10" rx="5" fill="#6fc3e8" />
      <rect x="458" y="460" width="46" height="10" rx="5" fill="#c6e3f1" />

      {/* refreshed badge */}
      <rect
        x="60"
        y="448"
        width="190"
        height="36"
        rx="18"
        fill="#ffffff"
        stroke="#e3e8ec"
      />
      <circle
        className={liveClass}
        cx="82"
        cy="466"
        r="9"
        fill="#0eaa0e"
        opacity="0.25"
      />
      <circle cx="82" cy="466" r="5" fill="#0eaa0e" />
      <text x="98" y="471" fontSize="14" fill="#4a5568">
        Refreshed 8:02 am
      </text>
    </svg>
  );
}
