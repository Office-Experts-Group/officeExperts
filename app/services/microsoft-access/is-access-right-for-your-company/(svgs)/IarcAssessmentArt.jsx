// /app/services/microsoft-access/is-access-right-for-your-company/(svgs)/IarcAssessmentArt.jsx
// Illustrations for the four parts of an assessment. They sit on the dark section.
//   #111820 $dark-bg · #18232e $dark-surface · #1a2a3a $dark-mid
//   #046999 $accent · #6fc3e8 $accent-on-dark · #ffffff $white · #c0392b $replace-x
import React from "react";

const svgProps = (className) => ({
  viewBox: "0 0 200 130",
  className,
  "aria-hidden": "true",
  focusable: "false",
  xmlns: "http://www.w3.org/2000/svg",
});

const CARD = "#18232e";
const MID = "#1a2a3a";
const ACCENT = "#046999";
const SKY = "#6fc3e8";

const Person = ({ cx, cy, fill = ACCENT }) => (
  <g>
    <circle cx={cx} cy={cy} r="15" fill={fill} />
    <circle cx={cx} cy={cy - 4} r="4.8" fill="#ffffff" fillOpacity="0.92" />
    <path
      d={`M${cx - 9} ${cy + 10}a9 7.5 0 0 1 18 0`}
      fill="#ffffff"
      fillOpacity="0.92"
    />
  </g>
);

// 1. Database assessment: a table with problem cells, under a magnifier
export const IarcAssessDatabaseArt = ({ className }) => (
  <svg {...svgProps(className)}>
    <rect
      x="10"
      y="12"
      width="132"
      height="92"
      rx="9"
      fill={CARD}
      stroke="#ffffff"
      strokeOpacity="0.22"
    />
    <path d="M10 28v-7a9 9 0 0 1 9-9h114a9 9 0 0 1 9 9v7z" fill={ACCENT} />
    <rect x="11" y="28" width="130" height="12" fill={MID} />
    <path
      d="M10 52h132M10 64h132M10 76h132M10 88h132M54 28v76M98 28v76"
      stroke="#ffffff"
      strokeOpacity="0.12"
    />
    <rect
      x="99"
      y="53"
      width="42"
      height="11"
      fill="#c0392b"
      fillOpacity="0.8"
    />
    <rect
      x="55"
      y="77"
      width="42"
      height="11"
      fill="#c0392b"
      fillOpacity="0.8"
    />
    <rect x="11" y="65" width="42" height="11" fill={SKY} fillOpacity="0.22" />
    <g fill="#ffffff" fillOpacity="0.32">
      <rect x="18" y="32" width="24" height="4" rx="2" />
      <rect x="62" y="32" width="24" height="4" rx="2" />
      <rect x="106" y="32" width="24" height="4" rx="2" />
      <rect x="18" y="44" width="20" height="4" rx="2" />
      <rect x="62" y="44" width="28" height="4" rx="2" />
      <rect x="18" y="80" width="20" height="4" rx="2" />
      <rect x="106" y="92" width="24" height="4" rx="2" />
    </g>
    <circle
      cx="136"
      cy="82"
      r="24"
      fill="#111820"
      fillOpacity="0.55"
      stroke={SKY}
      strokeWidth="5"
    />
    <path
      d="M154 100l24 22"
      stroke={SKY}
      strokeWidth="7"
      strokeLinecap="round"
    />
    <path
      d="M124 82l8 8 14-16"
      fill="none"
      stroke="#ffffff"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="10"
      y="112"
      width="86"
      height="8"
      rx="4"
      fill="#ffffff"
      fillOpacity="0.12"
    />
    <rect x="10" y="112" width="56" height="8" rx="4" fill={SKY} />
  </svg>
);

// 2. Business requirements: people, speech bubbles and a checklist
export const IarcAssessRequirementsArt = ({ className }) => (
  <svg {...svgProps(className)}>
    <Person cx={30} cy={84} />
    <Person cx={92} cy={84} fill="#2f6f8f" />
    <path
      d="M12 22a8 8 0 0 1 8-8h50a8 8 0 0 1 8 8v22a8 8 0 0 1-8 8H38l-12 10v-10h-6a8 8 0 0 1-8-8z"
      fill={CARD}
      stroke="#ffffff"
      strokeOpacity="0.3"
    />
    <rect x="22" y="24" width="44" height="5" rx="2.5" fill={SKY} />
    <rect
      x="22"
      y="34"
      width="32"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity="0.35"
    />
    <path
      d="M60 26a8 8 0 0 1 8-8h44a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8h-4v9l-11-9H68a8 8 0 0 1-8-8z"
      transform="translate(4 -8)"
      fill={MID}
      stroke="#ffffff"
      strokeOpacity="0.3"
    />
    <g fill="#ffffff" fillOpacity="0.4">
      <rect x="74" y="22" width="34" height="5" rx="2.5" />
      <rect x="74" y="32" width="24" height="5" rx="2.5" />
    </g>
    <rect
      x="130"
      y="14"
      width="62"
      height="106"
      rx="9"
      fill={CARD}
      stroke="#ffffff"
      strokeOpacity="0.3"
    />
    <rect
      x="148"
      y="8"
      width="26"
      height="12"
      rx="6"
      fill={ACCENT}
      stroke="#111820"
      strokeWidth="2"
    />
    {[0, 1, 2, 3].map((i) => (
      <g key={i}>
        <rect
          x="138"
          y={32 + i * 21}
          width="14"
          height="14"
          rx="4"
          fill={i < 3 ? SKY : "none"}
          fillOpacity={i < 3 ? 0.25 : 1}
          stroke={SKY}
          strokeWidth="1.5"
        />
        {i < 3 && (
          <path
            d={`M141 ${39 + i * 21}l3.5 3.5 6-7`}
            fill="none"
            stroke={SKY}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        <rect
          x="158"
          y={36 + i * 21}
          width={26 - i * 3}
          height="5"
          rx="2.5"
          fill="#ffffff"
          fillOpacity="0.4"
        />
      </g>
    ))}
  </svg>
);

// 3. Solution consulting: one question, three realistic routes
export const IarcAssessOptionsArt = ({ className }) => (
  <svg {...svgProps(className)}>
    <circle
      cx="28"
      cy="65"
      r="18"
      fill={ACCENT}
      stroke="#ffffff"
      strokeOpacity="0.5"
      strokeWidth="2"
    />
    <path
      d="M22 60a6 6 0 1 1 9 5c-2 1-3 2-3 4"
      fill="none"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="28" cy="75" r="2" fill="#ffffff" />
    <g
      fill="none"
      stroke={SKY}
      strokeWidth="2"
      strokeDasharray="5 5"
      strokeLinecap="round"
    >
      <path d="M46 65C70 65 76 28 104 28" />
      <path d="M46 65H104" />
      <path d="M46 65C70 65 76 102 104 102" />
    </g>
    {/* route 1: Access with a server database */}
    <rect
      x="106"
      y="10"
      width="86"
      height="36"
      rx="8"
      fill={CARD}
      stroke="#ffffff"
      strokeOpacity="0.3"
    />
    <path
      d="M118 22v10c0 3 6 5 12 5s12-2 12-5V22z"
      fill={MID}
      stroke={SKY}
      strokeWidth="1.5"
    />
    <ellipse
      cx="130"
      cy="22"
      rx="12"
      ry="4"
      fill={SKY}
      fillOpacity="0.5"
      stroke={SKY}
      strokeWidth="1.5"
    />
    <rect
      x="150"
      y="22"
      width="34"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity="0.4"
    />
    <rect
      x="150"
      y="31"
      width="24"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity="0.25"
    />
    {/* route 2: stay as you are */}
    <rect
      x="106"
      y="47"
      width="86"
      height="36"
      rx="8"
      fill={ACCENT}
      stroke="#ffffff"
      strokeOpacity="0.4"
    />
    <rect
      x="116"
      y="56"
      width="24"
      height="18"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.9"
    />
    <rect x="120" y="60" width="16" height="3" rx="1.5" fill={ACCENT} />
    <rect
      x="120"
      y="66"
      width="10"
      height="3"
      rx="1.5"
      fill={ACCENT}
      fillOpacity="0.5"
    />
    <rect
      x="150"
      y="57"
      width="34"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity="0.85"
    />
    <rect
      x="150"
      y="67"
      width="24"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity="0.5"
    />
    {/* route 3: web or app */}
    <rect
      x="106"
      y="84"
      width="86"
      height="36"
      rx="8"
      fill={CARD}
      stroke="#ffffff"
      strokeOpacity="0.3"
    />
    <path
      d="M118 108a6 6 0 0 1 2-11 8 8 0 0 1 15-2 6.5 6.5 0 0 1 3 13z"
      fill={MID}
      stroke={SKY}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <rect
      x="150"
      y="94"
      width="34"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity="0.4"
    />
    <rect
      x="150"
      y="104"
      width="24"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity="0.25"
    />
  </svg>
);

// 4. Strategy planning: a roadmap with milestones, a calendar and a backup
export const IarcAssessPlanArt = ({ className }) => (
  <svg {...svgProps(className)}>
    <rect
      x="10"
      y="12"
      width="84"
      height="76"
      rx="9"
      fill={CARD}
      stroke="#ffffff"
      strokeOpacity="0.3"
    />
    <path d="M10 30v-9a9 9 0 0 1 9-9h66a9 9 0 0 1 9 9v9z" fill={ACCENT} />
    <rect x="28" y="6" width="5" height="12" rx="2.5" fill="#ffffff" />
    <rect x="71" y="6" width="5" height="12" rx="2.5" fill="#ffffff" />
    <g fill="#ffffff" fillOpacity="0.28">
      {[0, 1, 2].map((r) =>
        [0, 1, 2, 3].map((c) => (
          <rect
            key={`${r}-${c}`}
            x={20 + c * 18}
            y={38 + r * 15}
            width="12"
            height="9"
            rx="2.5"
          />
        )),
      )}
    </g>
    <rect x="56" y="53" width="12" height="9" rx="2.5" fill={SKY} />
    <rect
      x="38"
      y="68"
      width="12"
      height="9"
      rx="2.5"
      fill={SKY}
      fillOpacity="0.55"
    />
    <path
      d="M14 112C46 112 52 98 78 98S126 112 150 98"
      fill="none"
      stroke={SKY}
      strokeWidth="2.5"
      strokeDasharray="5 5"
      strokeLinecap="round"
    />
    <g>
      <circle cx="24" cy="112" r="6" fill={SKY} />
      <circle cx="86" cy="100" r="6" fill={SKY} fillOpacity="0.6" />
      <circle cx="146" cy="100" r="6" fill="#ffffff" fillOpacity="0.4" />
    </g>
    <path
      d="M142 14l30 11v22c0 16-12 25-30 32-18-7-30-16-30-32V25z"
      fill={MID}
      stroke={SKY}
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M154 46a12 12 0 1 1-4-9"
      fill="none"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M146 33l5 2.5-2 6"
      fill="none"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
