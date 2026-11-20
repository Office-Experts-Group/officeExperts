// /app/services/microsoft-access/sql-server-solutions/(svgs)/SqlsSignArt.jsx
// Spot illustrations for the "signs" section, one per tile, drawn for the
// colour of the tile they sit on. Decorative (aria-hidden), no text.
// Dark tile:   #18232e $dark-surface, #1a2a3a $dark-mid, #223a50 (lift of $dark-mid),
//              #6fc3e8 $accent-on-dark, #c0392b $replace-x, #ffffff $white.
// Light tile:  #e8f4fa $accent-light, #046999 $accent, #0b2433 $ink,
//              #e3e8ec $line, #d4d6d9 $line-strong, #4a5568 $text-secondary,
//              #fdf6f5 $before-bg, #c0392b $replace-x.
// Accent tile: #046999 $accent, #034e72 $accent-dark, #ffffff $white.
import React from "react";

const common = {
  viewBox: "0 0 260 170",
  "aria-hidden": "true",
  focusable: "false",
};

export const SqlsSlowArt = ({ className }) => (
  <svg {...common} className={className}>
    <path
      d="M14 26a10 10 0 0 1 10-10h116a10 10 0 0 1 10 10v94a10 10 0 0 1-10 10H24a10 10 0 0 1-10-10z"
      fill="#1a2a3a"
      stroke="#6fc3e8"
      strokeOpacity=".35"
    />
    <path
      d="M14 26a10 10 0 0 1 10-10h116a10 10 0 0 1 10 10v14H14z"
      fill="#223a50"
    />
    {[28, 38, 48].map((x) => (
      <circle key={x} cx={x} cy="28" r="3" fill="#6fc3e8" fillOpacity=".7" />
    ))}
    {[50, 72, 94].map((y, i) => (
      <g key={y}>
        <rect
          x="26"
          y={y}
          width="112"
          height="16"
          rx="4"
          fill={i === 1 ? "#c0392b" : "#ffffff"}
          fillOpacity={i === 1 ? ".35" : ".08"}
          stroke={i === 1 ? "#c0392b" : "none"}
        />
        <rect
          x="32"
          y={y + 5}
          width="30"
          height="6"
          rx="3"
          fill="#ffffff"
          fillOpacity=".3"
        />
        <rect
          x="70"
          y={y + 5}
          width="36"
          height="6"
          rx="3"
          fill="#ffffff"
          fillOpacity=".3"
        />
      </g>
    ))}
    <rect x="118" y="77" width="14" height="10" rx="2" fill="#ffffff" />
    <path
      d="M121 77v-3a4 4 0 0 1 8 0v3"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.6"
    />
    {[40, 90, 140].map((x) => (
      <g key={x}>
        <path
          d={`M${x} 138V122`}
          stroke="#6fc3e8"
          strokeDasharray="3 4"
          strokeLinecap="round"
        />
        <circle cx={x} cy="146" r="7" fill="#6fc3e8" />
        <path
          d={`M${x - 11} 168a11 9 0 0 1 22 0z`}
          fill="#6fc3e8"
          fillOpacity=".7"
        />
      </g>
    ))}
    <circle
      cx="206"
      cy="78"
      r="34"
      fill="#1a2a3a"
      stroke="#6fc3e8"
      strokeWidth="3"
    />
    <rect x="200" y="34" width="12" height="7" rx="2" fill="#6fc3e8" />
    <path
      d="M206 44v6M206 106v-6M170 78h6M242 78h-6"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M206 46A32 32 0 0 1 238 78"
      fill="none"
      stroke="#c0392b"
      strokeWidth="5"
    />
    <path
      d="M206 78L222 66M206 78V56"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="206" cy="78" r="4" fill="#ffffff" />
  </svg>
);

export const SqlsSizeArt = ({ className }) => (
  <svg {...common} className={className}>
    <path
      d="M30 14h62l28 28v104a8 8 0 0 1-8 8H30a8 8 0 0 1-8-8V22a8 8 0 0 1 8-8z"
      fill="#e8f4fa"
      stroke="#046999"
      strokeOpacity=".5"
      strokeWidth="2"
    />
    <path
      d="M92 14v22a6 6 0 0 0 6 6h22"
      fill="#ffffff"
      stroke="#046999"
      strokeOpacity=".5"
      strokeWidth="2"
    />
    {[56, 74, 92, 110].map((y) => (
      <rect
        key={y}
        x="36"
        y={y}
        width="62"
        height="8"
        rx="4"
        fill="#046999"
        fillOpacity=".25"
      />
    ))}
    <path
      d="M112 54l-10 12 8 6-10 14"
      fill="none"
      stroke="#c0392b"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M136 100A54 54 0 0 1 244 100"
      fill="none"
      stroke="#e3e8ec"
      strokeWidth="14"
    />
    <path
      d="M136 100A54 54 0 0 1 231.8 64.6"
      fill="none"
      stroke="#046999"
      strokeWidth="14"
    />
    <path
      d="M231.8 64.6A54 54 0 0 1 244 100"
      fill="none"
      stroke="#c0392b"
      strokeWidth="14"
    />
    <path
      d="M190 100l42-14"
      stroke="#0b2433"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle cx="190" cy="100" r="8" fill="#0b2433" />
    <rect x="136" y="124" width="108" height="12" rx="6" fill="#e3e8ec" />
    <rect x="136" y="124" width="100" height="12" rx="6" fill="#c0392b" />
  </svg>
);

export const SqlsBackupArt = ({ className }) => (
  <svg {...common} className={className}>
    <rect
      x="18"
      y="22"
      width="104"
      height="72"
      rx="8"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="2"
    />
    <rect
      x="28"
      y="32"
      width="84"
      height="12"
      rx="4"
      fill="#046999"
      fillOpacity=".6"
    />
    <rect x="28" y="52" width="56" height="8" rx="4" fill="#d4d6d9" />
    <rect x="28" y="68" width="68" height="8" rx="4" fill="#d4d6d9" />
    <path
      d="M58 94v14h24V94M46 108h48"
      stroke="#4a5568"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    <rect
      x="146"
      y="102"
      width="96"
      height="42"
      rx="9"
      fill="#f7f8f9"
      stroke="#4a5568"
      strokeWidth="2"
    />
    <rect x="156" y="114" width="46" height="8" rx="4" fill="#d4d6d9" />
    <circle cx="224" cy="123" r="5" fill="#c0392b" />
    <path
      d="M122 70C146 70 150 92 170 102"
      fill="none"
      stroke="#4a5568"
      strokeWidth="2"
      strokeDasharray="4 5"
    />
    <path
      d="M194 18l26 46h-52z"
      fill="#fdf6f5"
      stroke="#c0392b"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M194 34v14"
      stroke="#c0392b"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle cx="194" cy="56" r="2.6" fill="#c0392b" />
    <rect x="30" y="126" width="38" height="30" rx="6" fill="#046999" />
    <path
      d="M38 126v-12a11 11 0 0 1 22 -2"
      fill="none"
      stroke="#046999"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle cx="49" cy="140" r="3.5" fill="#ffffff" />
  </svg>
);

export const SqlsIntegrateArt = ({ className }) => (
  <svg {...common} className={className}>
    <path
      d="M94 62v44a36 11 0 0 0 72 0V62"
      fill="#034e72"
      stroke="#ffffff"
      strokeOpacity=".65"
      strokeWidth="1.5"
    />
    <ellipse
      cx="130"
      cy="62"
      rx="36"
      ry="11"
      fill="#0a7fb5"
      stroke="#ffffff"
      strokeOpacity=".8"
      strokeWidth="1.5"
    />
    <path
      d="M94 84a36 11 0 0 0 72 0"
      fill="none"
      stroke="#ffffff"
      strokeOpacity=".4"
    />

    {/* bars (dashboard) */}
    <rect
      x="14"
      y="14"
      width="64"
      height="44"
      rx="8"
      fill="#ffffff"
      fillOpacity=".16"
      stroke="#ffffff"
      strokeOpacity=".6"
    />
    {[24, 36, 48].map((x, i) => (
      <rect
        key={x}
        x={x}
        y={46 - (i + 1) * 8}
        width="8"
        height={(i + 1) * 8}
        rx="2"
        fill="#ffffff"
      />
    ))}
    <path
      d="M58 24l6 6 4-8"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* grid (spreadsheet) */}
    <rect
      x="182"
      y="14"
      width="64"
      height="44"
      rx="8"
      fill="#ffffff"
      fillOpacity=".16"
      stroke="#ffffff"
      strokeOpacity=".6"
    />
    <path
      d="M194 26h40M194 36h40M194 46h40M208 22v30M222 22v30"
      stroke="#ffffff"
      strokeOpacity=".85"
    />
    {/* document */}
    <rect
      x="14"
      y="112"
      width="64"
      height="44"
      rx="8"
      fill="#ffffff"
      fillOpacity=".16"
      stroke="#ffffff"
      strokeOpacity=".6"
    />
    <path
      d="M28 126h36M28 136h26M28 146h32"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* people */}
    <rect
      x="182"
      y="112"
      width="64"
      height="44"
      rx="8"
      fill="#ffffff"
      fillOpacity=".16"
      stroke="#ffffff"
      strokeOpacity=".6"
    />
    {[198, 214, 230].map((x) => (
      <g key={x}>
        <circle cx={x} cy="128" r="5" fill="#ffffff" />
        <path
          d={`M${x - 8} 148a8 7 0 0 1 16 0z`}
          fill="#ffffff"
          fillOpacity=".8"
        />
      </g>
    ))}

    <path
      d="M78 40L96 62"
      stroke="#ffffff"
      strokeWidth="2.5"
      strokeDasharray="5 5"
      strokeLinecap="round"
    />
    <path
      d="M182 40L164 62"
      stroke="#ffffff"
      strokeWidth="2.5"
      strokeDasharray="5 5"
      strokeLinecap="round"
    />
    <path
      d="M78 134l9-7M94 118l5-4"
      stroke="#ffffff"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="90" cy="122" r="2.5" fill="none" stroke="#ffffff" />
    <path
      d="M182 134l-9-7M166 118l-5-4"
      stroke="#ffffff"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="170" cy="122" r="2.5" fill="none" stroke="#ffffff" />
  </svg>
);
