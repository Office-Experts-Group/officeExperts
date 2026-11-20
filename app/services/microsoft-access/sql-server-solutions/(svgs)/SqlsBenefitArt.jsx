// /app/services/microsoft-access/sql-server-solutions/(svgs)/SqlsBenefitArt.jsx
// Spot illustrations for the dark benefits bento. Decorative, no text.
// Palette for dark tiles:
//   #1a2a3a $dark-mid, #223a50 (lift of $dark-mid), #111820 $dark-bg,
//   #6fc3e8 $accent-on-dark, #ffffff $white (at several opacities),
//   #e8f4fa $accent-light.
import React from "react";

const common = {
  viewBox: "0 0 240 150",
  "aria-hidden": "true",
  focusable: "false",
};

const A = "#6fc3e8";

export const SqlsSpeedArt = ({ className }) => (
  <svg {...common} className={className}>
    <rect
      x="8"
      y="16"
      width="104"
      height="118"
      rx="10"
      fill="#1a2a3a"
      stroke={A}
      strokeOpacity=".3"
    />
    <rect x="8" y="16" width="104" height="22" rx="10" fill="#223a50" />
    {[46, 60, 74, 88, 102, 116].map((y, i) => (
      <rect
        key={y}
        x="18"
        y={y}
        width="84"
        height="9"
        rx="3"
        fill={[1, 3, 5].includes(i) ? A : "#ffffff"}
        fillOpacity={[1, 3, 5].includes(i) ? ".55" : ".1"}
      />
    ))}
    <path
      d="M112 64C122 64 124 54 130 52M112 92C122 92 124 80 130 76M112 120C124 120 124 90 130 82"
      fill="none"
      stroke={A}
      strokeWidth="1.5"
      strokeDasharray="3 4"
    />
    <polygon
      points="128,32 190,32 164,76 164,114 148,124 148,76"
      fill="#223a50"
      stroke={A}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <rect
      x="196"
      y="66"
      width="36"
      height="56"
      rx="6"
      fill="#1a2a3a"
      stroke={A}
      strokeOpacity=".6"
    />
    {[74, 90, 106].map((y) => (
      <rect
        key={y}
        x="202"
        y={y}
        width="24"
        height="8"
        rx="3"
        fill={A}
        fillOpacity=".7"
      />
    ))}
    <circle cx="214" cy="30" r="16" fill={A} />
    <path d="M218 20l-10 13h8l-4 11 11-14h-8z" fill="#111820" />
  </svg>
);

export const SqlsSecurityArt = ({ className }) => (
  <svg {...common} className={className}>
    <path
      d="M120 12l54 19v38c0 31-24 52-54 63-30-11-54-32-54-63V31z"
      fill="#223a50"
      stroke={A}
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path
      d="M120 24l42 15v30c0 24-18 41-42 51-24-10-42-27-42-51V39z"
      fill="none"
      stroke={A}
      strokeOpacity=".35"
    />
    <rect x="103" y="64" width="34" height="28" rx="6" fill={A} />
    <path
      d="M109 64v-9a11 11 0 0 1 22 0v9"
      fill="none"
      stroke={A}
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle cx="120" cy="76" r="3.5" fill="#111820" />
    <path
      d="M120 79v6"
      stroke="#111820"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <rect
      x="8"
      y="38"
      width="46"
      height="66"
      rx="7"
      fill="#1a2a3a"
      stroke={A}
      strokeOpacity=".5"
    />
    {[50, 64, 78, 92].map((y, i) => (
      <g key={y}>
        <circle cx="19" cy={y + 3} r="3" fill={A} />
        <rect
          x="27"
          y={y}
          width={i === 1 ? 18 : 22}
          height="6"
          rx="3"
          fill="#ffffff"
          fillOpacity=".3"
        />
      </g>
    ))}
    <circle cx="204" cy="60" r="12" fill="none" stroke={A} strokeWidth="4" />
    <path
      d="M216 60h20M228 60v10M236 60v8"
      stroke={A}
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const SqlsReliabilityArt = ({ className }) => (
  <svg {...common} className={className}>
    <path
      d="M78 52v46a42 12 0 0 0 84 0V52"
      fill="#1a2a3a"
      stroke={A}
      strokeOpacity=".7"
      strokeWidth="1.5"
    />
    <ellipse
      cx="120"
      cy="52"
      rx="42"
      ry="12"
      fill="#223a50"
      stroke={A}
      strokeWidth="1.5"
    />
    <path
      d="M78 74a42 12 0 0 0 84 0"
      fill="none"
      stroke={A}
      strokeOpacity=".4"
    />
    <path
      d="M62 75A58 58 0 1 1 91 125"
      fill="none"
      stroke={A}
      strokeWidth="4"
      strokeLinecap="round"
    />
    <polygon points="84,121 96,119 90,131" fill={A} />
    <circle cx="154" cy="104" r="14" fill={A} />
    <path
      d="M147 104l5 5 9-10"
      fill="none"
      stroke="#111820"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {[40, 62, 84].map((y, i) => (
      <g key={y}>
        <rect
          x="186"
          y={y}
          width="46"
          height="16"
          rx="5"
          fill="#1a2a3a"
          stroke={A}
          strokeOpacity=".5"
        />
        <circle cx="196" cy={y + 8} r="3" fill={A} fillOpacity={1 - i * 0.25} />
        <rect
          x="204"
          y={y + 5}
          width="22"
          height="6"
          rx="3"
          fill="#ffffff"
          fillOpacity=".3"
        />
      </g>
    ))}
    <circle cx="26" cy="30" r="14" fill="none" stroke={A} strokeWidth="3" />
    <path
      d="M26 21v9l6 4"
      fill="none"
      stroke={A}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export const SqlsMultiUserArt = ({ className }) => (
  <svg {...common} className={className}>
    <rect
      x="20"
      y="14"
      width="200"
      height="122"
      rx="10"
      fill="#1a2a3a"
      stroke={A}
      strokeOpacity=".3"
    />
    <rect x="20" y="14" width="200" height="24" rx="10" fill="#223a50" />
    {[0, 1, 2, 3, 4].map((i) => (
      <g key={i}>
        <rect
          x="30"
          y={46 + i * 18}
          width="180"
          height="14"
          rx="4"
          fill="#ffffff"
          fillOpacity=".06"
        />
        <rect
          x="36"
          y={50 + i * 18}
          width="34"
          height="6"
          rx="3"
          fill="#ffffff"
          fillOpacity=".25"
        />
        <rect
          x="80"
          y={50 + i * 18}
          width="50"
          height="6"
          rx="3"
          fill="#ffffff"
          fillOpacity=".25"
        />
        <rect
          x="140"
          y={50 + i * 18}
          width="30"
          height="6"
          rx="3"
          fill="#ffffff"
          fillOpacity=".25"
        />
      </g>
    ))}
    {[
      [1, A, 150],
      [2, "#ffffff", 90],
      [4, "#e8f4fa", 40],
    ].map(([row, color, x]) => (
      <g key={row}>
        <rect
          x="30"
          y={46 + row * 18 - 1}
          width="180"
          height="16"
          rx="5"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
        />
        <polygon
          points={`${x},${50 + row * 18} ${x + 14},${58 + row * 18} ${x + 6},${59 + row * 18} ${x + 4},${67 + row * 18}`}
          fill={color}
          stroke="#111820"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        <rect
          x={x + 14}
          y={64 + row * 18}
          width="28"
          height="10"
          rx="5"
          fill={color}
        />
      </g>
    ))}
  </svg>
);

export const SqlsScaleArt = ({ className }) => (
  <svg {...common} className={className}>
    <path
      d="M10 134h220"
      stroke="#ffffff"
      strokeOpacity=".25"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {[
      [48, 26, 40, 0.45],
      [112, 36, 62, 0.7],
      [182, 46, 92, 1],
    ].map(([cx, rx, h, op]) => (
      <g key={cx}>
        <path
          d={`M${cx - rx} ${126 - h}v${h - 12}a${rx} ${rx * 0.28} 0 0 0 ${rx * 2} 0V${126 - h}`}
          fill="#1a2a3a"
          stroke={A}
          strokeOpacity={op}
          strokeWidth="1.5"
        />
        <ellipse
          cx={cx}
          cy={126 - h}
          rx={rx}
          ry={rx * 0.28}
          fill="#223a50"
          stroke={A}
          strokeOpacity={op}
          strokeWidth="1.5"
        />
        <path
          d={`M${cx - rx} ${126 - h / 2}a${rx} ${rx * 0.28} 0 0 0 ${rx * 2} 0`}
          fill="none"
          stroke={A}
          strokeOpacity={op * 0.5}
        />
      </g>
    ))}
    <path
      d="M30 30C80 34 130 24 196 14"
      fill="none"
      stroke={A}
      strokeWidth="2"
      strokeDasharray="4 5"
      strokeLinecap="round"
    />
    <polygon points="196,6 212,12 198,22" fill={A} />
  </svg>
);

export const SqlsLinkArt = ({ className }) => (
  <svg {...common} className={className}>
    <path
      d="M100 62v26a20 7 0 0 0 40 0V62"
      fill="#1a2a3a"
      stroke={A}
      strokeWidth="1.5"
    />
    <ellipse
      cx="120"
      cy="62"
      rx="20"
      ry="7"
      fill="#223a50"
      stroke={A}
      strokeWidth="1.5"
    />
    <path
      d="M120 40V14M120 110v26M100 76H60M140 76h40"
      stroke={A}
      strokeWidth="2"
      strokeDasharray="4 4"
      fill="none"
    />
    <rect
      x="94"
      y="2"
      width="52"
      height="34"
      rx="7"
      fill="#1a2a3a"
      stroke={A}
      strokeOpacity=".6"
    />
    {[0, 1, 2].map((i) => (
      <rect
        key={i}
        x={104 + i * 14}
        y={30 - (i + 1) * 8}
        width="8"
        height={(i + 1) * 8}
        rx="2"
        fill={A}
      />
    ))}
    <rect
      x="182"
      y="54"
      width="52"
      height="44"
      rx="7"
      fill="#1a2a3a"
      stroke={A}
      strokeOpacity=".6"
    />
    <path
      d="M192 66h32M192 76h32M192 86h32M204 62v32M214 62v32"
      stroke={A}
      strokeOpacity=".8"
    />
    <rect
      x="94"
      y="114"
      width="52"
      height="34"
      rx="7"
      fill="#1a2a3a"
      stroke={A}
      strokeOpacity=".6"
    />
    <path
      d="M104 126h32M104 134h22M104 142h28"
      stroke={A}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M30 98a14 14 0 0 1 4-27 18 18 0 0 1 34 4 12 12 0 0 1-2 23z"
      fill="#1a2a3a"
      stroke={A}
      strokeOpacity=".7"
      strokeWidth="1.5"
    />
    <path
      d="M44 88l6 6 10-12"
      fill="none"
      stroke={A}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SqlsFutureArt = ({ className }) => (
  <svg {...common} className={className}>
    <path
      d="M10 124L48 98l30 14 40-40 34 18 56-52"
      fill="none"
      stroke={A}
      strokeOpacity=".5"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="86"
      y="42"
      width="68"
      height="68"
      rx="12"
      fill="#223a50"
      stroke={A}
      strokeWidth="2.5"
    />
    <rect
      x="102"
      y="58"
      width="36"
      height="36"
      rx="7"
      fill="#111820"
      stroke={A}
      strokeOpacity=".7"
    />
    {[96, 112, 128].map((x) => (
      <g key={x}>
        <path
          d={`M${x} 42v-12M${x} 110v12`}
          stroke={A}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
    ))}
    {[58, 76, 94].map((y) => (
      <path
        key={y}
        d={`M86 ${y}H72M154 ${y}h14`}
        stroke={A}
        strokeWidth="3"
        strokeLinecap="round"
      />
    ))}
    <path d="M120 66l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill={A} />
    <path d="M198 30l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#ffffff" />
    <path
      d="M30 40l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"
      fill="#ffffff"
      fillOpacity=".7"
    />
  </svg>
);
