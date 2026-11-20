// /app/services/microsoft-access/is-access-right-for-your-company/(svgs)/IarcSituationArt.jsx
// One illustration per business situation in the tabbed section. They sit on a
// light panel, so they use the light palette:
//   #ffffff $white · #f7f8f9 $light-bg · #e8f4fa $accent-light · #e3e8ec $line
//   #d4d6d9 $line-strong · #046999 $accent · #6fc3e8 $accent-on-dark
//   #0b2433 $ink · #4a5568 $text-secondary · #9a9da1 $text-muted · #c0392b $replace-x
import React from "react";

const svgProps = (className) => ({
  viewBox: "0 0 320 240",
  className,
  "aria-hidden": "true",
  focusable: "false",
  xmlns: "http://www.w3.org/2000/svg",
});

const Person = ({ cx, cy, r = 12 }) => (
  <g>
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <circle cx={cx} cy={cy - r * 0.28} r={r * 0.34} fill="#046999" />
    <path
      d={`M${cx - r * 0.6} ${cy + r * 0.62}a${r * 0.6} ${r * 0.5} 0 0 1 ${r * 1.2} 0`}
      fill="#046999"
    />
  </g>
);

// 1. A small team in one office, all on the same network
export const IarcSituationOfficeArt = ({ className }) => (
  <svg {...svgProps(className)}>
    <rect
      x="8"
      y="20"
      width="304"
      height="204"
      rx="16"
      fill="#f7f8f9"
      stroke="#e3e8ec"
    />
    <path d="M8 196h304" stroke="#e3e8ec" />
    {[50, 128, 206].map((cx, i) => (
      <g key={cx}>
        <Person cx={cx} cy={92} r={15} />
        <rect
          x={cx - 26}
          y={106}
          width="52"
          height="36"
          rx="5"
          fill="#0b2433"
        />
        <rect
          x={cx - 21}
          y={111}
          width="42"
          height="26"
          rx="2"
          fill="#18232e"
        />
        <rect
          x={cx - 17}
          y={116}
          width={22 + i * 4}
          height="4"
          rx="2"
          fill="#6fc3e8"
        />
        <rect
          x={cx - 17}
          y={124}
          width="30"
          height="4"
          rx="2"
          fill="#ffffff"
          fillOpacity="0.4"
        />
        <rect
          x={cx - 17}
          y={131}
          width="14"
          height="3"
          rx="1.5"
          fill="#046999"
        />
        <path d={`M${cx - 6} 142v8h12v-8`} fill="#d4d6d9" />
        <rect
          x={cx - 40}
          y={150}
          width="80"
          height="9"
          rx="3"
          fill="#ffffff"
          stroke="#d4d6d9"
        />
        <path
          d={`M${cx - 30} 159v28M${cx + 30} 159v28`}
          stroke="#d4d6d9"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d={`M${cx} 159V176`}
          stroke="#046999"
          strokeWidth="2"
          strokeDasharray="4 4"
          strokeLinecap="round"
        />
      </g>
    ))}
    <path
      d="M50 176H266"
      stroke="#046999"
      strokeWidth="2"
      strokeDasharray="4 4"
      strokeLinecap="round"
    />
    <rect x="244" y="96" width="50" height="86" rx="7" fill="#0b2433" />
    <g fill="#18232e">
      <rect x="250" y="104" width="38" height="10" rx="3" />
      <rect x="250" y="118" width="38" height="10" rx="3" />
      <rect x="250" y="132" width="38" height="10" rx="3" />
    </g>
    <g fill="#6fc3e8">
      <circle cx="256" cy="109" r="2" />
      <circle cx="256" cy="123" r="2" />
      <circle cx="256" cy="137" r="2" />
    </g>
    <ellipse
      cx="269"
      cy="160"
      rx="14"
      ry="5"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="1.5"
    />
    <path
      d="M255 160v10c0 3 6 5 14 5s14-2 14-5v-10"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="1.5"
    />
    <path
      d="M269 176V182"
      stroke="#046999"
      strokeWidth="2"
      strokeDasharray="4 4"
    />
  </svg>
);

// 2. Staff in several places, one shared database in the middle
export const IarcSituationRemoteArt = ({ className }) => (
  <svg {...svgProps(className)}>
    <rect
      x="8"
      y="20"
      width="304"
      height="204"
      rx="16"
      fill="#f7f8f9"
      stroke="#e3e8ec"
    />
    <g
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeDasharray="5 5"
      strokeLinecap="round"
    >
      <path d="M58 122C74 96 104 88 128 84" />
      <path d="M160 142V112" />
      <path d="M262 122C246 96 216 88 192 84" />
    </g>
    <path
      d="M118 96a26 26 0 0 1 44-22 20 20 0 0 1 34 12 17 17 0 0 1-3 34H126a18 18 0 0 1-8-24z"
      fill="#046999"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <ellipse
      cx="160"
      cy="76"
      rx="15"
      ry="5.5"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
    />
    <path
      d="M145 76v12c0 3 7 5.5 15 5.500s15-2.5 15-5.500V76M145 82c0 3 7 5.5 15 5.500s15-2.5 15-5.5"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
    />
    {/* head office */}
    <rect
      x="24"
      y="126"
      width="66"
      height="80"
      rx="5"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
    />
    <rect x="24" y="126" width="66" height="14" rx="5" fill="#046999" />
    <g fill="#e8f4fa" stroke="#6fc3e8">
      <rect x="32" y="148" width="14" height="12" rx="2" />
      <rect x="68" y="148" width="14" height="12" rx="2" />
      <rect x="32" y="168" width="14" height="12" rx="2" />
      <rect x="68" y="168" width="14" height="12" rx="2" />
    </g>
    <rect x="49" y="184" width="16" height="22" rx="3" fill="#046999" />
    {/* home */}
    <path
      d="M120 176l40-30 40 30v30H120z"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <rect x="138" y="170" width="44" height="28" rx="3" fill="#0b2433" />
    <rect x="143" y="175" width="34" height="18" rx="2" fill="#18232e" />
    <rect x="147" y="179" width="18" height="3.5" rx="1.8" fill="#6fc3e8" />
    <rect
      x="147"
      y="186"
      width="24"
      height="3.5"
      rx="1.8"
      fill="#ffffff"
      fillOpacity="0.4"
    />
    <rect x="130" y="198" width="60" height="6" rx="3" fill="#d4d6d9" />
    {/* on the road */}
    <rect x="238" y="124" width="48" height="84" rx="9" fill="#0b2433" />
    <rect x="243" y="134" width="38" height="62" rx="3" fill="#e8f4fa" />
    <path
      d="M243 168c10-6 14 6 24 0s8-8 14-4"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M262 144c-5 0-8 3.5-8 7.5 0 5 8 12 8 12s8-7 8-12c0-4-3-7.5-8-7.500z"
      fill="#046999"
    />
    <circle cx="262" cy="151" r="2.8" fill="#ffffff" />
    <rect
      x="256"
      y="128"
      width="12"
      height="3"
      rx="1.5"
      fill="#ffffff"
      fillOpacity="0.4"
    />
    <Person cx={58} cy={110} r={13} />
    <Person cx={262} cy={108} r={13} />
  </svg>
);

// 3. Outgrowing spreadsheets: a sprawling sheet becomes tidy linked tables
export const IarcSituationSheetArt = ({ className }) => (
  <svg {...svgProps(className)}>
    <rect
      x="8"
      y="20"
      width="304"
      height="204"
      rx="16"
      fill="#f7f8f9"
      stroke="#e3e8ec"
    />
    <rect
      x="20"
      y="38"
      width="132"
      height="168"
      rx="8"
      fill="#ffffff"
      stroke="#d4d6d9"
      strokeWidth="1.5"
    />
    <path d="M20 46a8 8 0 0 1 8-8h116a8 8 0 0 1 8 8v8H20z" fill="#e8f4fa" />
    <path
      d="M20 70h132M20 86h132M20 102h132M20 118h132M20 134h132M20 150h132M20 166h132M20 182h132M42 54v152M64 54v152M86 54v152M108 54v152M130 54v152"
      stroke="#e3e8ec"
    />
    <g fill="#c0392b" fillOpacity="0.8">
      <rect x="65" y="87" width="21" height="15" />
      <rect x="109" y="135" width="21" height="15" />
      <rect x="21" y="167" width="21" height="15" />
    </g>
    <rect
      x="87"
      y="119"
      width="21"
      height="15"
      fill="#6fc3e8"
      fillOpacity="0.4"
    />
    <g fill="#4a5568" fillOpacity="0.35">
      <rect x="25" y="75" width="12" height="4" rx="2" />
      <rect x="69" y="75" width="12" height="4" rx="2" />
      <rect x="91" y="107" width="12" height="4" rx="2" />
      <rect x="25" y="123" width="12" height="4" rx="2" />
      <rect x="113" y="123" width="12" height="4" rx="2" />
      <rect x="47" y="155" width="12" height="4" rx="2" />
      <rect x="91" y="171" width="12" height="4" rx="2" />
    </g>
    <path d="M152 46h6v152h-6z" fill="#f7f8f9" />
    <path
      d="M160 122h36"
      stroke="#046999"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M188 112l12 10-12 10"
      fill="none"
      stroke="#046999"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {[
      [212, 34, "#046999"],
      [212, 98, "#6fc3e8"],
      [212, 162, "#046999"],
    ].map(([x, y, c]) => (
      <g key={y}>
        <rect
          x={x}
          y={y}
          width="92"
          height="52"
          rx="7"
          fill="#ffffff"
          stroke="#d4d6d9"
          strokeWidth="1.5"
        />
        <path
          d={`M${x} ${y + 14}V${y + 7}a7 7 0 0 1 7-7h78a7 7 0 0 1 7 7v7z`}
          fill={c}
        />
        <path
          d={`M${x} ${y + 28}h92M${x} ${y + 40}h92M${x + 30} ${y + 14}v38`}
          stroke="#e3e8ec"
        />
        <rect
          x={x + 8}
          y={y + 19}
          width="14"
          height="4"
          rx="2"
          fill="#4a5568"
          fillOpacity="0.35"
        />
        <rect
          x={x + 38}
          y={y + 19}
          width="30"
          height="4"
          rx="2"
          fill="#4a5568"
          fillOpacity="0.35"
        />
        <rect
          x={x + 8}
          y={y + 31}
          width="14"
          height="4"
          rx="2"
          fill="#4a5568"
          fillOpacity="0.35"
        />
        <rect
          x={x + 38}
          y={y + 31}
          width="22"
          height="4"
          rx="2"
          fill="#4a5568"
          fillOpacity="0.35"
        />
      </g>
    ))}
    <g fill="none" stroke="#046999" strokeWidth="2" strokeLinecap="round">
      <path d="M258 86V98" />
      <path d="M258 150V162" />
      <path d="M258 86l-4-6M258 86l4-6M258 86v-8" />
      <path d="M258 150l-4-6M258 150l4-6M258 150v-8" />
    </g>
  </svg>
);

// 4. Customers or partners need to log in: a web app, with Access behind the scenes
export const IarcSituationPortalArt = ({ className }) => (
  <svg {...svgProps(className)}>
    <rect
      x="8"
      y="20"
      width="304"
      height="204"
      rx="16"
      fill="#f7f8f9"
      stroke="#e3e8ec"
    />
    <rect
      x="24"
      y="34"
      width="196"
      height="136"
      rx="9"
      fill="#ffffff"
      stroke="#d4d6d9"
      strokeWidth="1.5"
    />
    <path d="M24 48v-5a9 9 0 0 1 9-9h178a9 9 0 0 1 9 9v5z" fill="#e8f4fa" />
    <g fill="#046999">
      <circle cx="36" cy="41" r="2.5" />
      <circle cx="45" cy="41" r="2.5" />
      <circle cx="54" cy="41" r="2.5" />
    </g>
    <rect
      x="68"
      y="37"
      width="110"
      height="8"
      rx="4"
      fill="#ffffff"
      stroke="#e3e8ec"
    />
    <circle
      cx="122"
      cy="76"
      r="14"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <circle cx="122" cy="72" r="4.5" fill="#046999" />
    <path d="M113 84a9 7 0 0 1 18 0" fill="#046999" />
    <rect
      x="76"
      y="98"
      width="92"
      height="14"
      rx="5"
      fill="#f7f8f9"
      stroke="#d4d6d9"
    />
    <rect
      x="81"
      y="103"
      width="36"
      height="4"
      rx="2"
      fill="#4a5568"
      fillOpacity="0.35"
    />
    <rect
      x="76"
      y="118"
      width="92"
      height="14"
      rx="5"
      fill="#f7f8f9"
      stroke="#d4d6d9"
    />
    <g fill="#4a5568" fillOpacity="0.45">
      <circle cx="86" cy="125" r="2" />
      <circle cx="93" cy="125" r="2" />
      <circle cx="100" cy="125" r="2" />
      <circle cx="107" cy="125" r="2" />
    </g>
    <rect x="76" y="140" width="92" height="16" rx="5" fill="#046999" />
    <rect x="104" y="146" width="36" height="4" rx="2" fill="#ffffff" />
    <circle
      cx="204"
      cy="152"
      r="13"
      fill="#046999"
      stroke="#ffffff"
      strokeWidth="3"
    />
    <rect x="198" y="152" width="12" height="9" rx="2" fill="#ffffff" />
    <path
      d="M200.5 152v-3a3.5 3.5 0 0 1 7 0v3"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <g
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeDasharray="5 5"
      strokeLinecap="round"
    >
      <path d="M222 70C238 70 244 62 256 58" />
      <path d="M222 100H256" />
      <path d="M222 130C238 130 244 138 256 142" />
    </g>
    <Person cx={278} cy={56} r={16} />
    <Person cx={278} cy={100} r={16} />
    <Person cx={278} cy={144} r={16} />
    {/* back office: Access window and database */}
    <rect x="24" y="182" width="110" height="34" rx="7" fill="#0b2433" />
    <path d="M24 192a7 7 0 0 1 7-7h96a7 7 0 0 1 7 7v3H24z" fill="#046999" />
    <rect x="32" y="200" width="46" height="4" rx="2" fill="#6fc3e8" />
    <rect
      x="32"
      y="208"
      width="70"
      height="4"
      rx="2"
      fill="#ffffff"
      fillOpacity="0.35"
    />
    <path
      d="M136 199H172"
      stroke="#046999"
      strokeWidth="2"
      strokeDasharray="4 4"
      strokeLinecap="round"
    />
    <ellipse
      cx="196"
      cy="188"
      rx="22"
      ry="7"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <path
      d="M174 188v22c0 4 10 7 22 7s22-3 22-7v-22"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <path
      d="M174 199c0 4 10 7 22 7s22-3 22-7"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="1.5"
    />
    <path
      d="M196 181V170"
      stroke="#046999"
      strokeWidth="2"
      strokeDasharray="4 4"
      strokeLinecap="round"
    />
  </svg>
);
