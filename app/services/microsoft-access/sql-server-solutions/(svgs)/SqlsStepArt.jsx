// /app/services/microsoft-access/sql-server-solutions/(svgs)/SqlsStepArt.jsx
// One spot illustration per migration step, drawn for a light card on an
// $accent-light panel. Decorative, no text.
//   #e8f4fa $accent-light, #ffffff $white, #046999 $accent, #034e72 $accent-dark,
//   #0b2433 $ink, #4a5568 $text-secondary, #d4d6d9 $line-strong,
//   #e3e8ec $line, #c0392b $replace-x, #fdf6f5 $before-bg.
import React from "react";

const common = {
  viewBox: "0 0 240 150",
  "aria-hidden": "true",
  focusable: "false",
};

const Cylinder = ({ cx, top, rx, h, fill = "#046999", cap = "#034e72" }) => (
  <g>
    <path
      d={`M${cx - rx} ${top}v${h}a${rx} ${rx * 0.28} 0 0 0 ${rx * 2} 0V${top}`}
      fill={fill}
    />
    <path
      d={`M${cx - rx} ${top + h / 2}a${rx} ${rx * 0.28} 0 0 0 ${rx * 2} 0`}
      fill="none"
      stroke="#ffffff"
      strokeOpacity=".5"
    />
    <ellipse
      cx={cx}
      cy={top}
      rx={rx}
      ry={rx * 0.28}
      fill={cap}
      stroke="#ffffff"
      strokeOpacity=".6"
    />
  </g>
);

export const SqlsReviewArt = ({ className }) => (
  <svg {...common} className={className}>
    <rect
      x="14"
      y="16"
      width="148"
      height="118"
      rx="10"
      fill="#ffffff"
      stroke="#d4d6d9"
      strokeWidth="1.5"
    />
    <rect x="14" y="16" width="148" height="24" rx="10" fill="#e3e8ec" />
    {[48, 66, 84, 102, 118].map((y, i) => (
      <g key={y}>
        <rect
          x="24"
          y={y}
          width="128"
          height="12"
          rx="3"
          fill={i === 1 || i === 3 ? "#fdf6f5" : "#e8f4fa"}
          stroke={i === 1 || i === 3 ? "#c0392b" : "none"}
        />
        <rect
          x="30"
          y={y + 4}
          width="28"
          height="4"
          rx="2"
          fill="#4a5568"
          fillOpacity=".5"
        />
        <rect
          x="68"
          y={y + 4}
          width="40"
          height="4"
          rx="2"
          fill="#4a5568"
          fillOpacity=".5"
        />
        <rect
          x="118"
          y={y + 4}
          width="24"
          height="4"
          rx="2"
          fill={i === 1 || i === 3 ? "#c0392b" : "#4a5568"}
          fillOpacity={i === 1 || i === 3 ? 0.9 : 0.5}
        />
      </g>
    ))}
    <circle
      cx="170"
      cy="82"
      r="38"
      fill="#ffffff"
      fillOpacity=".7"
      stroke="#046999"
      strokeWidth="6"
    />
    <path
      d="M198 110l30 28"
      stroke="#046999"
      strokeWidth="10"
      strokeLinecap="round"
    />
    <path
      d="M152 82l12 12 22-26"
      fill="none"
      stroke="#046999"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SqlsPlanArt = ({ className }) => (
  <svg {...common} className={className}>
    <rect
      x="10"
      y="14"
      width="86"
      height="122"
      rx="10"
      fill="#ffffff"
      stroke="#d4d6d9"
      strokeWidth="1.5"
    />
    <rect x="144" y="14" width="86" height="122" rx="10" fill="#046999" />
    {[28, 56, 84, 112].map((y, i) => (
      <g key={y}>
        <rect
          x="20"
          y={y}
          width="66"
          height="18"
          rx="5"
          fill="#e8f4fa"
          stroke="#046999"
          strokeOpacity=".4"
        />
        <rect
          x="26"
          y={y + 6}
          width={[30, 40, 24, 36][i]}
          height="6"
          rx="3"
          fill="#046999"
          fillOpacity=".7"
        />
        <rect
          x="154"
          y={y}
          width="66"
          height="18"
          rx="5"
          fill="#034e72"
          stroke="#ffffff"
          strokeOpacity=".4"
        />
        <rect
          x="160"
          y={y + 6}
          width={[34, 28, 40, 26][i]}
          height="6"
          rx="3"
          fill="#ffffff"
          fillOpacity=".85"
        />
      </g>
    ))}
    <path
      d="M86 37C115 37 125 65 154 65M86 65C115 65 125 37 154 37M86 93C115 93 125 93 154 93M86 121C115 121 125 121 154 121"
      fill="none"
      stroke="#046999"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle
      cx="120"
      cy="79"
      r="13"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2.5"
    />
    <path
      d="M114 79l4 4 8-9"
      fill="none"
      stroke="#046999"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SqlsBuildArt = ({ className }) => (
  <svg {...common} className={className}>
    {[
      [12, 18, 78],
      [150, 18, 78],
      [80, 90, 80],
    ].map(([x, y, w], i) => (
      <g key={x}>
        <rect
          x={x}
          y={y}
          width={w}
          height="56"
          rx="8"
          fill="#ffffff"
          stroke="#046999"
          strokeWidth="1.5"
        />
        <path
          d={`M${x} ${y + 8}a8 8 0 0 1 8-8h${w - 16}a8 8 0 0 1 8 8v10H${x}z`}
          fill="#046999"
        />
        <rect
          x={x + 10}
          y={y + 26}
          width={w - 34}
          height="6"
          rx="3"
          fill="#4a5568"
          fillOpacity=".4"
        />
        <rect
          x={x + 10}
          y={y + 38}
          width={w - 46}
          height="6"
          rx="3"
          fill="#4a5568"
          fillOpacity=".4"
        />
        <circle
          cx={x + w - 14}
          cy={y + 29}
          r="5"
          fill="none"
          stroke="#046999"
          strokeWidth="2"
        />
        <path
          d={`M${x + w - 9} ${y + 29}h8M${x + w - 3} ${y + 29}v5`}
          stroke="#046999"
          strokeWidth="2"
        />
        {i === 2 && (
          <rect
            x={x + w - 26}
            y={y + 36}
            width="10"
            height="10"
            rx="2"
            fill="#046999"
            fillOpacity=".25"
          />
        )}
      </g>
    ))}
    <path
      d="M90 46h60M50 74v28h30M190 74v28h-30"
      fill="none"
      stroke="#046999"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeDasharray="1 6"
    />
    <circle cx="120" cy="46" r="4" fill="#046999" />
    <circle cx="50" cy="74" r="4" fill="#046999" />
    <circle cx="190" cy="74" r="4" fill="#046999" />
  </svg>
);

export const SqlsMoveArt = ({ className }) => (
  <svg {...common} className={className}>
    <rect
      x="10"
      y="30"
      width="78"
      height="90"
      rx="9"
      fill="#ffffff"
      stroke="#d4d6d9"
      strokeWidth="1.5"
    />
    <rect x="10" y="30" width="78" height="20" rx="9" fill="#e3e8ec" />
    {[58, 74, 90, 106].map((y) => (
      <rect
        key={y}
        x="20"
        y={y}
        width="58"
        height="8"
        rx="3"
        fill="#046999"
        fillOpacity=".3"
      />
    ))}
    {[52, 76, 100].map((y, i) => (
      <g key={y}>
        <path
          d={`M88 ${y + 12}C118 ${y + 12} 124 ${70 + i * 8} 150 ${76 + i * 8}`}
          fill="none"
          stroke="#046999"
          strokeWidth="2.5"
          strokeDasharray="5 6"
          strokeLinecap="round"
        />
        <rect
          x={110 + i * 4}
          y={y + 14 - i * 8 + 2}
          width="16"
          height="12"
          rx="2"
          fill="#e8f4fa"
          stroke="#046999"
        />
      </g>
    ))}
    <Cylinder cx={192} top={48} rx={36} h={62} />
    <circle
      cx="214"
      cy="116"
      r="16"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="3"
    />
    <path
      d="M207 116l5 5 9-10"
      fill="none"
      stroke="#046999"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="164" y="124" width="22" height="6" rx="3" fill="#046999" />
    <rect x="164" y="134" width="22" height="6" rx="3" fill="#046999" />
  </svg>
);

export const SqlsRelinkArt = ({ className }) => (
  <svg {...common} className={className}>
    <rect
      x="10"
      y="18"
      width="116"
      height="90"
      rx="10"
      fill="#ffffff"
      stroke="#d4d6d9"
      strokeWidth="1.5"
    />
    <path
      d="M10 28a10 10 0 0 1 10-10h96a10 10 0 0 1 10 10v10H10z"
      fill="#046999"
    />
    <rect
      x="22"
      y="50"
      width="52"
      height="10"
      rx="3"
      fill="#e8f4fa"
      stroke="#046999"
      strokeOpacity=".4"
    />
    <rect
      x="22"
      y="68"
      width="92"
      height="10"
      rx="3"
      fill="#e8f4fa"
      stroke="#046999"
      strokeOpacity=".4"
    />
    <rect
      x="22"
      y="86"
      width="68"
      height="10"
      rx="3"
      fill="#e8f4fa"
      stroke="#046999"
      strokeOpacity=".4"
    />
    <path
      d="M126 70h18"
      stroke="#046999"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <rect x="144" y="58" width="16" height="24" rx="4" fill="#046999" />
    <rect
      x="160"
      y="62"
      width="12"
      height="16"
      rx="3"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2.5"
    />
    <path
      d="M172 66h10M172 74h10"
      stroke="#046999"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <Cylinder cx={206} top={46} rx={26} h={52} />
    <path
      d="M30 128h120M30 142h120"
      stroke="#d4d6d9"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle
      cx="96"
      cy="128"
      r="7"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2.5"
    />
    <circle
      cx="60"
      cy="142"
      r="7"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2.5"
    />
    <path
      d="M30 128h66M30 142h30"
      stroke="#046999"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export const SqlsLaunchArt = ({ className }) => (
  <svg {...common} className={className}>
    <rect
      x="10"
      y="14"
      width="96"
      height="122"
      rx="10"
      fill="#ffffff"
      stroke="#d4d6d9"
      strokeWidth="1.5"
    />
    {[28, 56, 84, 112].map((y, i) => (
      <g key={y}>
        <rect
          x="20"
          y={y}
          width="16"
          height="16"
          rx="4"
          fill={i === 3 ? "#ffffff" : "#046999"}
          stroke="#046999"
          strokeWidth="2"
        />
        {i < 3 && (
          <path
            d={`M24 ${y + 8}l4 4 6-8`}
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        <rect
          x="44"
          y={y + 5}
          width={[44, 36, 48, 30][i]}
          height="6"
          rx="3"
          fill="#4a5568"
          fillOpacity=".4"
        />
      </g>
    ))}
    {[148, 184, 220].map((x, i) => (
      <g key={x}>
        <circle cx={x} cy={i === 1 ? 52 : 62} r="11" fill="#046999" />
        <path
          d={`M${x - 17} ${i === 1 ? 92 : 102}a17 15 0 0 1 34 0z`}
          fill="#046999"
          fillOpacity=".75"
        />
      </g>
    ))}
    <path
      d="M132 120h92"
      stroke="#d4d6d9"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M156 132a8 8 0 0 1 16 0"
      fill="none"
      stroke="#046999"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M176 132a8 8 0 0 1 16 0M196 132a8 8 0 0 1 16 0"
      fill="none"
      stroke="#046999"
      strokeOpacity=".5"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);
