// /app/services/microsoft-access/integrate-access-with-power-bi/(svgs)/ApbiStrainArt.jsx
// Spot illustrations for the "where Access strains" tiles, one per tile, each
// drawn for the tile colour it sits on. Decorative, so no text and aria-hidden.
// Hex values and the tokens they match:
//   Dark tile:   #111820 $dark-bg, #18232e $dark-surface, #6fc3e8 $accent-on-dark, #ffffff $white
//   Light tile:  #ffffff $white, #e8f4fa $accent-light, #e3e8ec $line, #d4d6d9 $line-strong,
//                #046999 $accent, #0b2433 $ink, #4a5568 $text-secondary, #c0392b $replace-x
//   Accent tile: #046999 $accent, #034e72 $accent-dark, #ffffff $white
//   Tint tile:   #e8f4fa $accent-light, #046999 $accent, #0b2433 $ink, #d4d6d9 $line-strong,
//                #4a5568 $text-secondary, #c0392b $replace-x, #ffffff $white

const svgProps = {
  viewBox: "0 0 200 120",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
};

// Dark tile: a plain bar chart, with the visuals Access can't draw shown as ghosts.
export const ApbiLimitedChartsArt = () => (
  <svg {...svgProps}>
    <rect
      x="8"
      y="14"
      width="86"
      height="92"
      rx="10"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.16"
    />
    <line
      x1="20"
      x2="82"
      y1="90"
      y2="90"
      stroke="#ffffff"
      strokeOpacity="0.3"
    />
    {[28, 44, 36, 56].map((h, i) => (
      <rect
        key={i}
        x={22 + i * 15}
        y={90 - h}
        width="10"
        height={h}
        rx="2"
        fill={i === 3 ? "#6fc3e8" : "#ffffff"}
        fillOpacity={i === 3 ? 1 : 0.35}
      />
    ))}
    <line
      x1="20"
      x2="46"
      y1="30"
      y2="30"
      stroke="#ffffff"
      strokeOpacity="0.35"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* ghosts: a map, a donut and a trend line */}
    <rect
      x="104"
      y="14"
      width="88"
      height="42"
      rx="10"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.35"
      strokeDasharray="4 4"
    />
    <path
      d="M118 44c4-10 12-14 20-12s10 8 18 6 12 4 8 10-14 4-22 6-18 2-24-10z"
      fill="#ffffff"
      fillOpacity="0.12"
    />
    <circle cx="140" cy="38" r="3" fill="#6fc3e8" fillOpacity="0.7" />
    <circle cx="166" cy="42" r="2.5" fill="#6fc3e8" fillOpacity="0.5" />
    <rect
      x="104"
      y="64"
      width="88"
      height="42"
      rx="10"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.35"
      strokeDasharray="4 4"
    />
    <circle
      cx="128"
      cy="85"
      r="11"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.25"
      strokeWidth="5"
      strokeDasharray="30 40"
    />
    <polyline
      points="148,96 158,86 168,92 182,76"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.3"
      strokeWidth="2"
      strokeDasharray="4 4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Light tile: a database that is close to full, with a gauge and a slow clock.
export const ApbiScaleArt = () => (
  <svg {...svgProps}>
    <path
      d="M26 26v60c0 5.5 15.2 10 34 10s34-4.5 34-10V26"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <path
      d="M26 46c0 5.5 15.2 10 34 10s34-4.5 34-10M26 66c0 5.5 15.2 10 34 10s34-4.5 34-10"
      fill="none"
      stroke="#046999"
      strokeWidth="1.4"
    />
    <ellipse
      cx="60"
      cy="26"
      rx="34"
      ry="10"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <circle cx="82" cy="36" r="3" fill="#c0392b" />

    <rect
      x="112"
      y="18"
      width="22"
      height="80"
      rx="7"
      fill="#ffffff"
      stroke="#d4d6d9"
      strokeWidth="1.6"
    />
    <rect x="116" y="30" width="14" height="64" rx="4" fill="#c0392b" />
    <path
      d="M106 26h34"
      stroke="#c0392b"
      strokeWidth="1.6"
      strokeDasharray="4 3"
    />
    {[44, 58, 72, 86].map((y) => (
      <line
        key={y}
        x1="106"
        x2="111"
        y1={y}
        y2={y}
        stroke="#d4d6d9"
        strokeWidth="1.6"
      />
    ))}

    <circle
      cx="168"
      cy="30"
      r="15"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <path
      d="M168 21v9h7"
      fill="none"
      stroke="#046999"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M150 56h10M148 62h14"
      stroke="#d4d6d9"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {[158, 170, 182].map((x) => (
      <g key={x}>
        <circle cx={x} cy="84" r="4" fill="#4a5568" />
        <path
          d={`M${x - 6} 100c0-5 3-8 6-8s6 3 6 8z`}
          fill="#4a5568"
          fillOpacity="0.7"
        />
      </g>
    ))}
  </svg>
);

// Accent tile: one sheet turning into many exported copies.
export const ApbiExportArt = () => (
  <svg {...svgProps}>
    <rect x="8" y="26" width="64" height="68" rx="8" fill="#ffffff" />
    <path d="M8 34a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v6H8z" fill="#034e72" />
    <g stroke="#d4d6d9" strokeWidth="1.2">
      <path d="M8 56h64M8 72h64M30 40v54M52 40v54" fill="none" />
    </g>
    <path
      d="M78 60C92 60 98 48 108 44"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M104 38l9 4-7 7z" fill="#ffffff" />
    <path
      d="M78 66C92 66 98 80 108 86"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="1 5"
    />
    {[
      [118, 12],
      [128, 38],
      [138, 64],
    ].map(([x, y], i) => (
      <g key={i}>
        <rect
          x={x}
          y={y}
          width="58"
          height="40"
          rx="6"
          fill="#ffffff"
          fillOpacity="0.16"
          stroke="#ffffff"
          strokeOpacity="0.55"
        />
        <path
          d={`M${x} ${y + 12}h58M${x} ${y + 26}h58M${x + 20} ${y}v40M${x + 40} ${y}v40`}
          stroke="#ffffff"
          strokeOpacity="0.3"
          fill="none"
        />
      </g>
    ))}
    <path
      d="M118 100a12 12 0 1 0 -4-9"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M109 88l6 5 1-8z" fill="#ffffff" />
  </svg>
);

// Tint tile: a locked laptop that nobody else can reach.
export const ApbiShareArt = () => (
  <svg {...svgProps}>
    <rect x="30" y="30" width="72" height="50" rx="7" fill="#0b2433" />
    <rect x="36" y="36" width="60" height="38" rx="3" fill="#18232e" />
    {[18, 28, 22, 34].map((h, i) => (
      <rect
        key={i}
        x={44 + i * 12}
        y={68 - h}
        width="8"
        height={h}
        rx="2"
        fill={i === 3 ? "#6fc3e8" : "#046999"}
      />
    ))}
    <path
      d="M18 84h96l-6 8H24z"
      fill="#ffffff"
      stroke="#d4d6d9"
      strokeWidth="1.4"
    />
    <rect x="56" y="52" width="24" height="18" rx="4" fill="#046999" />
    <path
      d="M61 52v-5a7 7 0 0 1 14 0v5"
      fill="none"
      stroke="#046999"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <circle cx="68" cy="60" r="2.4" fill="#ffffff" />

    {[
      [160, 24],
      [178, 62],
      [160, 98],
    ].map(([x, y], i) => (
      <g key={i}>
        <path
          d={`M106 ${i === 1 ? 60 : i === 0 ? 48 : 72}L${x - 14} ${y}`}
          fill="none"
          stroke="#046999"
          strokeWidth="1.6"
          strokeDasharray="4 4"
          strokeLinecap="round"
        />
        <circle cx={x} cy={y - 4} r="6" fill="#d4d6d9" />
        <path
          d={`M${x - 11} ${y + 12}c0-7 5-11 11-11s11 4 11 11z`}
          fill="#d4d6d9"
        />
      </g>
    ))}
    <path
      d="M126 36l8 8M134 36l-8 8"
      stroke="#c0392b"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M138 58l8 8M146 58l-8 8"
      stroke="#c0392b"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M126 92l8 8M134 92l-8 8"
      stroke="#c0392b"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);
