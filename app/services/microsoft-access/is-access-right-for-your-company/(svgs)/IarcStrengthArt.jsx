// /app/services/microsoft-access/is-access-right-for-your-company/(svgs)/IarcStrengthArt.jsx
// Spot illustrations for the four strength tiles. Each one is drawn for the
// colour of the tile it sits on. Decorative, so aria-hidden.
//   Dark tile:   #111820 $dark-bg · #18232e $dark-surface · #1a2a3a $dark-mid
//                #6fc3e8 $accent-on-dark · #046999 $accent · #c0392b $replace-x
//   Accent tile: #046999 $accent · #034e72 $accent-dark · #ffffff $white · #6fc3e8 $accent-on-dark
//   Light tile:  #ffffff $white · #f7f8f9 $light-bg · #e8f4fa $accent-light · #e3e8ec $line
//                #d4d6d9 $line-strong · #046999 $accent · #6fc3e8 $accent-on-dark
import React from "react";

const svgProps = (viewBox, className) => ({
  viewBox,
  className,
  "aria-hidden": "true",
  focusable: "false",
  xmlns: "http://www.w3.org/2000/svg",
});

// ── Dark tile: scattered sheets converge into one database ──────────────────
const Sheet = ({ x, y, rot, flag }) => (
  <g transform={`rotate(${rot} ${x + 49} ${y + 29})`}>
    <rect
      x={x}
      y={y}
      width="98"
      height="58"
      rx="6"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.22"
    />
    <path
      d={`M${x} ${y + 14}h98M${x} ${y + 29}h98M${x} ${y + 44}h98M${x + 24} ${y}v58M${x + 49} ${y}v58M${x + 74} ${y}v58`}
      stroke="#ffffff"
      strokeOpacity="0.12"
    />
    <rect x={x} y={y} width="98" height="14" rx="6" fill="#1a2a3a" />
    <rect
      x={x + flag[0] * 25 + 1}
      y={y + flag[1] * 15 + 1}
      width="23"
      height="13"
      fill="#c0392b"
      fillOpacity="0.8"
    />
    <rect
      x={x + 5}
      y={y + 5}
      width="14"
      height="4"
      rx="2"
      fill="#ffffff"
      fillOpacity="0.3"
    />
  </g>
);

export const IarcDataManagementArt = ({ className }) => (
  <svg {...svgProps("0 0 300 190", className)}>
    <Sheet x={8} y={10} rot={-6} flag={[1, 2]} />
    <Sheet x={24} y={66} rot={4} flag={[2, 1]} />
    <Sheet x={6} y={122} rot={-3} flag={[0, 2]} />
    <g
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeDasharray="5 5"
      strokeLinecap="round"
    >
      <path d="M110 42C140 42 150 70 172 84" />
      <path d="M126 96H170" />
      <path d="M108 150C140 150 150 120 172 108" />
    </g>
    <path
      d="M166 80l8 5-9 4"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* database */}
    <path
      d="M176 44v96c0 8 20 15 44 15s44-7 44-15V44z"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.25"
    />
    <ellipse
      cx="220"
      cy="44"
      rx="44"
      ry="14"
      fill="#1a2a3a"
      stroke="#ffffff"
      strokeOpacity="0.3"
    />
    <path
      d="M176 78c0 8 20 14 44 14s44-6 44-14M176 110c0 8 20 14 44 14s44-6 44-14"
      fill="none"
      stroke="#6fc3e8"
      strokeOpacity="0.75"
      strokeWidth="1.5"
    />
    <g fill="#6fc3e8">
      <circle cx="248" cy="62" r="2.5" />
      <circle cx="248" cy="96" r="2.5" />
      <circle cx="248" cy="128" r="2.5" />
    </g>
    <rect
      x="190"
      y="58"
      width="30"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity="0.3"
    />
    <rect
      x="190"
      y="92"
      width="38"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity="0.3"
    />
    {/* one clean record */}
    <rect
      x="204"
      y="124"
      width="86"
      height="58"
      rx="9"
      fill="#1a2a3a"
      stroke="#ffffff"
      strokeOpacity="0.3"
    />
    <path d="M204 142v-9a9 9 0 0 1 9-9h68a9 9 0 0 1 9 9v9z" fill="#046999" />
    <circle
      cx="216"
      cy="133"
      r="3.5"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.5"
    />
    <path
      d="M219 133h8M224 133v3"
      stroke="#ffffff"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <rect x="214" y="150" width="30" height="5" rx="2.5" fill="#6fc3e8" />
    <rect
      x="248"
      y="150"
      width="30"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity="0.35"
    />
    <rect
      x="214"
      y="162"
      width="44"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity="0.35"
    />
    <rect
      x="214"
      y="172"
      width="22"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity="0.2"
    />
  </svg>
);

// ── Accent tile: a query narrowing a table down to the right rows ───────────
export const IarcQueryArt = ({ className }) => (
  <svg {...svgProps("0 0 240 170", className)}>
    <rect
      x="10"
      y="8"
      width="144"
      height="66"
      rx="9"
      fill="#034e72"
      stroke="#ffffff"
      strokeOpacity="0.4"
    />
    <path
      d="M10 28h144M62 8v66M108 8v66"
      stroke="#ffffff"
      strokeOpacity="0.22"
    />
    <g fill="#ffffff" fillOpacity="0.7">
      <rect x="20" y="15" width="30" height="6" rx="3" />
      <rect x="72" y="15" width="24" height="6" rx="3" />
      <rect x="118" y="15" width="28" height="6" rx="3" />
    </g>
    <path d="M10 50h144" stroke="#ffffff" strokeOpacity="0.22" />
    <rect x="68" y="34" width="34" height="11" rx="5.5" fill="#6fc3e8" />
    <rect
      x="114"
      y="34"
      width="36"
      height="11"
      rx="5.5"
      fill="#ffffff"
      fillOpacity="0.25"
    />
    <rect
      x="16"
      y="58"
      width="40"
      height="8"
      rx="4"
      fill="#ffffff"
      fillOpacity="0.14"
    />
    <path
      d="M82 76v14M76 85l6 7 6-7"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="10"
      y="98"
      width="144"
      height="64"
      rx="9"
      fill="#034e72"
      stroke="#ffffff"
      strokeOpacity="0.4"
    />
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <circle cx="26" cy={115 + i * 18} r="5" fill="#6fc3e8" />
        <rect
          x="40"
          y={111 + i * 18}
          width={74 - i * 12}
          height="7"
          rx="3.5"
          fill="#ffffff"
          fillOpacity="0.55"
        />
        <rect
          x="124"
          y={111 + i * 18}
          width="22"
          height="7"
          rx="3.5"
          fill="#ffffff"
          fillOpacity="0.25"
        />
      </g>
    ))}
    <path
      d="M168 14h60l-22 30v26l-16 10V44z"
      fill="#ffffff"
      fillOpacity="0.92"
    />
    <path
      d="M178 22h40"
      stroke="#046999"
      strokeOpacity="0.3"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle
      cx="196"
      cy="116"
      r="17"
      fill="#046999"
      stroke="#ffffff"
      strokeWidth="4"
    />
    <path
      d="M208 129l18 18"
      stroke="#ffffff"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <path
      d="M188 114a9 9 0 0 1 8-6"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

// ── Light tile: one live record, several people, each with a role ───────────
const Person = ({ cx, cy }) => (
  <g>
    <circle
      cx={cx}
      cy={cy}
      r="19"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <circle cx={cx} cy={cy - 5} r="6" fill="#046999" />
    <path d={`M${cx - 11} ${cy + 13}a11 9 0 0 1 22 0`} fill="#046999" />
  </g>
);

export const IarcMultiUserArt = ({ className }) => (
  <svg {...svgProps("0 0 240 150", className)}>
    <g
      stroke="#046999"
      strokeOpacity="0.5"
      strokeWidth="1.8"
      strokeDasharray="4 4"
      strokeLinecap="round"
      fill="none"
    >
      <path d="M53 50L82 60" />
      <path d="M187 50L158 60" />
      <path d="M53 108L82 92" />
      <path d="M187 108L158 92" />
    </g>
    <rect
      x="80"
      y="24"
      width="80"
      height="102"
      rx="10"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
    />
    <path
      d="M80 46V34a10 10 0 0 1 10-10h60a10 10 0 0 1 10 10v12z"
      fill="#046999"
    />
    <rect
      x="90"
      y="31"
      width="30"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.85"
    />
    <g>
      <rect
        x="90"
        y="54"
        width="22"
        height="5"
        rx="2.5"
        fill="#9a9da1"
        fillOpacity="0.6"
      />
      <rect
        x="90"
        y="63"
        width="60"
        height="12"
        rx="4"
        fill="#f7f8f9"
        stroke="#e3e8ec"
      />
      <rect
        x="95"
        y="67"
        width="30"
        height="4"
        rx="2"
        fill="#046999"
        fillOpacity="0.55"
      />
      <rect
        x="90"
        y="82"
        width="22"
        height="5"
        rx="2.5"
        fill="#9a9da1"
        fillOpacity="0.6"
      />
      <rect
        x="90"
        y="91"
        width="60"
        height="12"
        rx="4"
        fill="#f7f8f9"
        stroke="#e3e8ec"
      />
      <rect
        x="95"
        y="95"
        width="42"
        height="4"
        rx="2"
        fill="#046999"
        fillOpacity="0.55"
      />
      <rect
        x="90"
        y="108"
        width="28"
        height="10"
        rx="3"
        fill="#e8f4fa"
        stroke="#046999"
        strokeOpacity="0.4"
      />
    </g>
    <circle
      cx="160"
      cy="26"
      r="14"
      fill="#046999"
      stroke="#ffffff"
      strokeWidth="3"
    />
    <rect x="153.5" y="26" width="13" height="10" rx="2" fill="#ffffff" />
    <path
      d="M156.5 26v-3.500a3.5 3.5 0 0 1 7 0V26"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Person cx={34} cy={50} />
    <Person cx={206} cy={50} />
    <Person cx={34} cy={110} />
    <Person cx={206} cy={110} />
    {/* roles: edit, read only */}
    <circle
      cx="48"
      cy="34"
      r="9"
      fill="#046999"
      stroke="#ffffff"
      strokeWidth="2"
    />
    <path d="M44 38l1-3.5 6-6 2.5 2.5-6 6z" fill="#ffffff" />
    <circle
      cx="220"
      cy="34"
      r="9"
      fill="#6fc3e8"
      stroke="#ffffff"
      strokeWidth="2"
    />
    <path
      d="M214 34c2-3.5 4-5 6-5s4 1.5 6 5c-2 3.5-4 5-6 5s-4-1.5-6-5z"
      fill="none"
      stroke="#0b2433"
      strokeWidth="1.5"
    />
    <circle cx="220" cy="34" r="1.8" fill="#0b2433" />
  </svg>
);

// ── Light tile: one set of data, many outputs ───────────────────────────────
export const IarcReportArt = ({ className }) => (
  <svg {...svgProps("0 0 340 160", className)}>
    <rect
      x="12"
      y="8"
      width="104"
      height="144"
      rx="7"
      fill="#ffffff"
      stroke="#d4d6d9"
      strokeWidth="1.5"
    />
    <rect x="24" y="20" width="52" height="9" rx="4.5" fill="#046999" />
    <rect
      x="24"
      y="35"
      width="76"
      height="5"
      rx="2.5"
      fill="#9a9da1"
      fillOpacity="0.5"
    />
    <rect x="24" y="47" width="88" height="14" fill="#e8f4fa" />
    <rect x="24" y="75" width="88" height="14" fill="#f7f8f9" />
    <rect x="24" y="103" width="88" height="14" fill="#f7f8f9" />
    <path
      d="M24 61h88M24 75h88M24 89h88M24 103h88M24 117h88"
      stroke="#e3e8ec"
    />
    <g fill="#4a5568" fillOpacity="0.4">
      <rect x="28" y="52" width="26" height="4" rx="2" />
      <rect x="84" y="52" width="22" height="4" rx="2" />
      <rect x="28" y="66" width="34" height="4" rx="2" />
      <rect x="84" y="66" width="22" height="4" rx="2" />
      <rect x="28" y="80" width="22" height="4" rx="2" />
      <rect x="84" y="80" width="22" height="4" rx="2" />
      <rect x="28" y="94" width="30" height="4" rx="2" />
      <rect x="84" y="94" width="22" height="4" rx="2" />
    </g>
    <rect x="24" y="126" width="88" height="14" rx="3" fill="#046999" />
    <rect
      x="30"
      y="131"
      width="30"
      height="4"
      rx="2"
      fill="#ffffff"
      fillOpacity="0.85"
    />
    <rect
      x="86"
      y="131"
      width="20"
      height="4"
      rx="2"
      fill="#ffffff"
      fillOpacity="0.85"
    />
    {/* bar chart */}
    <rect
      x="134"
      y="10"
      width="112"
      height="72"
      rx="9"
      fill="#f7f8f9"
      stroke="#e3e8ec"
    />
    <path d="M146 68h88" stroke="#d4d6d9" />
    {[
      [150, 22],
      [168, 34],
      [186, 28],
      [204, 46],
      [222, 38],
    ].map(([x, h], i) => (
      <rect
        key={x}
        x={x}
        y={68 - h}
        width="12"
        height={h}
        rx="3"
        fill={i === 3 ? "#6fc3e8" : "#046999"}
      />
    ))}
    {/* donut */}
    <rect
      x="134"
      y="92"
      width="112"
      height="60"
      rx="9"
      fill="#f7f8f9"
      stroke="#e3e8ec"
    />
    <g transform="rotate(-90 168 122)" fill="none" strokeWidth="11">
      <circle cx="168" cy="122" r="19" stroke="#d4d6d9" />
      <circle
        cx="168"
        cy="122"
        r="19"
        stroke="#046999"
        strokeDasharray="64 120"
      />
      <circle
        cx="168"
        cy="122"
        r="19"
        stroke="#6fc3e8"
        strokeDasharray="30 120"
        strokeDashoffset="-64"
      />
    </g>
    <rect
      x="198"
      y="108"
      width="36"
      height="5"
      rx="2.5"
      fill="#046999"
      fillOpacity="0.7"
    />
    <rect
      x="198"
      y="120"
      width="28"
      height="5"
      rx="2.5"
      fill="#9a9da1"
      fillOpacity="0.5"
    />
    <rect
      x="198"
      y="132"
      width="32"
      height="5"
      rx="2.5"
      fill="#9a9da1"
      fillOpacity="0.5"
    />
    {/* export targets */}
    <path
      d="M118 44h12M118 112h12"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="3 4"
    />
    <path
      d="M262 14h30l12 12v46H262z"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M292 14v12h12"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <rect x="270" y="46" width="26" height="12" rx="3" fill="#046999" />
    <rect x="275" y="50" width="16" height="4" rx="2" fill="#ffffff" />
    <rect
      x="270"
      y="31"
      width="14"
      height="4"
      rx="2"
      fill="#9a9da1"
      fillOpacity="0.5"
    />
    <rect
      x="262"
      y="92"
      width="42"
      height="52"
      rx="6"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
    />
    <path
      d="M262 108h42M262 124h42M276 92v52M290 92v52"
      stroke="#046999"
      strokeOpacity="0.4"
    />
    <rect x="262" y="92" width="42" height="16" rx="6" fill="#e8f4fa" />
    <rect
      x="291"
      y="109"
      width="12"
      height="14"
      fill="#6fc3e8"
      fillOpacity="0.55"
    />
  </svg>
);
