// /app/services/microsoft-access/is-access-right-for-your-company/(svgs)/IarcGrowthArt.jsx
// One illustration per stage on the growth path. Stages 1, 3 and 4 sit on dark
// cards, stage 2 (Access) sits on a solid accent card.
//   Dark card:   #18232e $dark-surface · #1a2a3a $dark-mid · #111820 $dark-bg
//                #6fc3e8 $accent-on-dark · #046999 $accent · #c0392b $replace-x
//   Accent card: #046999 $accent · #034e72 $accent-dark · #ffffff $white · #6fc3e8 $accent-on-dark
import React from "react";

const svgProps = (className) => ({
  viewBox: "0 0 260 140",
  className,
  "aria-hidden": "true",
  focusable: "false",
  xmlns: "http://www.w3.org/2000/svg",
});

const Cursor = ({ x, y, fill }) => (
  <path
    d={`M${x} ${y}l0 16 4.5-4 3.5 8 3-1.5-3.5-7.5 6-.500z`}
    fill={fill}
    stroke="#111820"
    strokeWidth="1"
    strokeLinejoin="round"
  />
);

// Stage 1: spreadsheets, copies piling up and two people in the same file
export const IarcStageSheetsArt = ({ className }) => (
  <svg {...svgProps(className)}>
    <g transform="rotate(-7 80 60)">
      <rect
        x="24"
        y="14"
        width="124"
        height="84"
        rx="7"
        fill="#1a2a3a"
        stroke="#ffffff"
        strokeOpacity="0.18"
      />
    </g>
    <g transform="rotate(5 110 70)">
      <rect
        x="40"
        y="22"
        width="130"
        height="88"
        rx="7"
        fill="#1a2a3a"
        stroke="#ffffff"
        strokeOpacity="0.22"
      />
    </g>
    <rect
      x="52"
      y="26"
      width="150"
      height="100"
      rx="8"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.3"
    />
    <path d="M52 34a8 8 0 0 1 8-8h134a8 8 0 0 1 8 8v8H52z" fill="#046999" />
    <rect
      x="60"
      y="30"
      width="44"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity="0.8"
    />
    <rect x="53" y="42" width="148" height="12" fill="#1a2a3a" />
    <path
      d="M52 54h150M52 70h150M52 86h150M52 102h150M52 118h150M77 42v84M102 42v84M127 42v84M152 42v84M177 42v84"
      stroke="#ffffff"
      strokeOpacity="0.12"
    />
    <rect
      x="103"
      y="71"
      width="24"
      height="14"
      fill="#c0392b"
      fillOpacity="0.8"
    />
    <rect
      x="153"
      y="103"
      width="24"
      height="14"
      fill="#c0392b"
      fillOpacity="0.8"
    />
    <rect
      x="128"
      y="55"
      width="24"
      height="14"
      fill="#6fc3e8"
      fillOpacity="0.22"
      stroke="#6fc3e8"
    />
    <g fill="#ffffff" fillOpacity="0.28">
      <rect x="57" y="59" width="14" height="4" rx="2" />
      <rect x="82" y="59" width="16" height="4" rx="2" />
      <rect x="57" y="75" width="12" height="4" rx="2" />
      <rect x="82" y="91" width="14" height="4" rx="2" />
      <rect x="107" y="91" width="12" height="4" rx="2" />
      <rect x="157" y="75" width="14" height="4" rx="2" />
    </g>
    <Cursor x={132} y={58} fill="#6fc3e8" />
    <Cursor x={146} y={62} fill="#ffffff" />
    <circle
      cx="224"
      cy="40"
      r="14"
      fill="#1a2a3a"
      stroke="#6fc3e8"
      strokeWidth="1.5"
    />
    <path
      d="M224 33v8M224 45v.5"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

// Stage 2: Access, one file holding the tables, forms and reports
export const IarcStageAccessArt = ({ className }) => (
  <svg {...svgProps(className)}>
    <rect
      x="16"
      y="8"
      width="228"
      height="124"
      rx="10"
      fill="#034e72"
      stroke="#ffffff"
      strokeOpacity="0.45"
    />
    <path
      d="M16 18a10 10 0 0 1 10-10h208a10 10 0 0 1 10 10v10H16z"
      fill="#ffffff"
      fillOpacity="0.18"
    />
    <g fill="#ffffff">
      <circle cx="30" cy="18" r="3" fillOpacity="0.9" />
      <circle cx="40" cy="18" r="3" fillOpacity="0.6" />
      <circle cx="50" cy="18" r="3" fillOpacity="0.4" />
    </g>
    <rect
      x="16"
      y="28"
      width="52"
      height="104"
      fill="#ffffff"
      fillOpacity="0.1"
    />
    {/* navigation pane: table, query, form, report */}
    <g fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round">
      <rect x="24" y="38" width="14" height="11" rx="2" />
      <path d="M24 43h14M31 38v11" />
      <path d="M24 60h14l-5 6v5l-4 2v-7z" />
      <rect x="24" y="80" width="14" height="11" rx="2" />
      <path d="M27 84h8M27 88h5" />
      <rect x="24" y="102" width="14" height="14" rx="2" />
      <path d="M27 112v-4M31 112v-7M35 112v-5" />
    </g>
    <g fill="#ffffff" fillOpacity="0.55">
      <rect x="43" y="42" width="18" height="4" rx="2" />
      <rect x="43" y="63" width="18" height="4" rx="2" />
      <rect x="43" y="84" width="18" height="4" rx="2" />
      <rect x="43" y="107" width="18" height="4" rx="2" />
    </g>
    {/* a form and a datasheet */}
    <rect
      x="78"
      y="36"
      width="94"
      height="86"
      rx="7"
      fill="#046999"
      stroke="#ffffff"
      strokeOpacity="0.4"
    />
    <rect
      x="86"
      y="44"
      width="40"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.8"
    />
    <rect x="86" y="58" width="78" height="12" rx="4" fill="#034e72" />
    <rect x="86" y="76" width="78" height="12" rx="4" fill="#034e72" />
    <rect
      x="91"
      y="62"
      width="34"
      height="4"
      rx="2"
      fill="#ffffff"
      fillOpacity="0.6"
    />
    <rect
      x="91"
      y="80"
      width="46"
      height="4"
      rx="2"
      fill="#ffffff"
      fillOpacity="0.6"
    />
    <rect x="86" y="96" width="34" height="18" rx="4" fill="#6fc3e8" />
    <rect x="92" y="103" width="22" height="4" rx="2" fill="#034e72" />
    <rect
      x="182"
      y="36"
      width="54"
      height="86"
      rx="7"
      fill="#034e72"
      stroke="#ffffff"
      strokeOpacity="0.4"
    />
    <path
      d="M182 52h54M182 66h54M182 80h54M182 94h54M182 108h54"
      stroke="#ffffff"
      strokeOpacity="0.25"
    />
    <rect
      x="183"
      y="67"
      width="52"
      height="13"
      fill="#6fc3e8"
      fillOpacity="0.35"
    />
    <g fill="#ffffff" fillOpacity="0.55">
      <rect x="190" y="43" width="22" height="4" rx="2" />
      <rect x="190" y="57" width="30" height="4" rx="2" />
      <rect x="190" y="71" width="24" height="4" rx="2" />
      <rect x="190" y="85" width="34" height="4" rx="2" />
      <rect x="190" y="99" width="20" height="4" rx="2" />
    </g>
  </svg>
);

// Stage 3: Access screens on every desk, data held in a server database
export const IarcStageServerArt = ({ className }) => (
  <svg {...svgProps(className)}>
    <rect
      x="8"
      y="14"
      width="86"
      height="56"
      rx="7"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.28"
    />
    <path d="M8 24a7 7 0 0 1 7-7h72a7 7 0 0 1 7 7v6H8z" fill="#046999" />
    <rect x="16" y="38" width="42" height="5" rx="2.5" fill="#6fc3e8" />
    <rect x="16" y="48" width="64" height="9" rx="3" fill="#1a2a3a" />
    <rect
      x="22"
      y="76"
      width="86"
      height="56"
      rx="7"
      fill="#1a2a3a"
      stroke="#ffffff"
      strokeOpacity="0.28"
    />
    <path d="M22 86a7 7 0 0 1 7-7h72a7 7 0 0 1 7 7v6H22z" fill="#046999" />
    <rect
      x="30"
      y="100"
      width="34"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity="0.5"
    />
    <g fill="#6fc3e8">
      <rect x="30" y="111" width="10" height="14" rx="2" />
      <rect x="44" y="116" width="10" height="9" rx="2" />
      <rect x="58" y="108" width="10" height="17" rx="2" />
    </g>
    <g
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M96 44C122 44 126 70 152 70" strokeDasharray="5 5" />
      <path d="M110 104C128 104 134 84 152 80" strokeDasharray="5 5" />
      <path d="M146 66l7 4-7 5" />
    </g>
    <path
      d="M160 36v68c0 7 18 12 38 12s38-5 38-12V36z"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.3"
    />
    <ellipse
      cx="198"
      cy="36"
      rx="38"
      ry="12"
      fill="#1a2a3a"
      stroke="#ffffff"
      strokeOpacity="0.35"
    />
    <path
      d="M160 62c0 7 18 12 38 12s38-5 38-12M160 84c0 7 18 12 38 12s38-5 38-12"
      fill="none"
      stroke="#6fc3e8"
      strokeOpacity="0.75"
      strokeWidth="1.5"
    />
    <g fill="#6fc3e8">
      <circle cx="220" cy="50" r="2.2" />
      <circle cx="220" cy="73" r="2.2" />
      <circle cx="220" cy="95" r="2.2" />
    </g>
    <path
      d="M198 10l16 6v12c0 9-7 14-16 17-9-3-16-8-16-17V16z"
      transform="translate(0 66)"
      fill="#046999"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M191 86l5 5 9-10"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M236 118a12 12 0 1 1-4-9"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M226 106l6 3-2 7"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Stage 4: a web or cloud app that people reach from anywhere
export const IarcStageWebArt = ({ className }) => (
  <svg {...svgProps(className)}>
    <path
      d="M92 52a22 22 0 0 1 40-14 18 18 0 0 1 30 10 15 15 0 0 1-2 30H98a16 16 0 0 1-6-26z"
      fill="#046999"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <g
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M128 66V46M120 54l8-8 8 8" />
    </g>
    <g
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeDasharray="5 5"
      strokeLinecap="round"
    >
      <path d="M96 76C80 88 66 94 54 100" />
      <path d="M130 82V106" />
      <path d="M160 76C176 88 192 94 206 100" />
    </g>
    <rect
      x="6"
      y="96"
      width="76"
      height="40"
      rx="6"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.28"
    />
    <path d="M6 104a6 6 0 0 1 6-6h64a6 6 0 0 1 6 6v6H6z" fill="#1a2a3a" />
    <g fill="#6fc3e8">
      <circle cx="14" cy="104" r="2" />
      <circle cx="21" cy="104" r="2" />
    </g>
    <rect
      x="14"
      y="116"
      width="36"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity="0.4"
    />
    <rect x="14" y="125" width="22" height="5" rx="2.5" fill="#6fc3e8" />
    <rect
      x="100"
      y="98"
      width="60"
      height="38"
      rx="6"
      fill="#1a2a3a"
      stroke="#ffffff"
      strokeOpacity="0.28"
    />
    <g fill="#ffffff" fillOpacity="0.35">
      <rect x="108" y="106" width="44" height="5" rx="2.5" />
      <rect x="108" y="116" width="30" height="5" rx="2.5" />
    </g>
    <rect x="108" y="125" width="18" height="6" rx="3" fill="#046999" />
    <rect
      x="198"
      y="92"
      width="48"
      height="44"
      rx="8"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.35"
      strokeWidth="1.5"
    />
    <rect x="203" y="100" width="38" height="30" rx="3" fill="#111820" />
    <g fill="#046999">
      <rect x="207" y="104" width="13" height="10" rx="2" />
      <rect x="224" y="104" width="13" height="10" rx="2" />
    </g>
    <rect x="207" y="118" width="13" height="8" rx="2" fill="#6fc3e8" />
    <rect
      x="224"
      y="118"
      width="13"
      height="8"
      rx="2"
      fill="#ffffff"
      fillOpacity="0.25"
    />
    <g>
      <circle
        cx="30"
        cy="30"
        r="12"
        fill="#1a2a3a"
        stroke="#6fc3e8"
        strokeWidth="1.5"
      />
      <circle cx="30" cy="27" r="4" fill="#6fc3e8" />
      <path d="M22 38a8 6 0 0 1 16 0" fill="#6fc3e8" />
      <circle
        cx="226"
        cy="30"
        r="12"
        fill="#1a2a3a"
        stroke="#6fc3e8"
        strokeWidth="1.5"
      />
      <circle cx="226" cy="27" r="4" fill="#6fc3e8" />
      <path d="M218 38a8 6 0 0 1 16 0" fill="#6fc3e8" />
    </g>
    <path
      d="M44 34C62 40 72 44 84 50M212 34C196 40 186 44 174 50"
      fill="none"
      stroke="#6fc3e8"
      strokeOpacity="0.6"
      strokeWidth="1.5"
      strokeDasharray="3 4"
    />
  </svg>
);
