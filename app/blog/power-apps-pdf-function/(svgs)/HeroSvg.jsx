// /app/blog/power-apps-pdf-function/(svgs)/HeroSvg.jsx
// Hero illustration: an app screen, the PDF( ) formula, then a finished A4 page
// that can be emailed, saved to SharePoint or downloaded. Sits directly on the
// dark hero, no panel behind it.
// Hex values and the tokens they match:
//   #111820 $dark-bg      #1a2a3a $dark-mid       #046999 $accent
//   #6fc3e8 $accent-on-dark   #e8f4fa $accent-light   #0d1b2a $text-primary
//   #4a5568 $text-secondary   #9a9da1 $text-muted     #e3e8ec $line
//   #f7f8f9 $light-bg     #ffffff $white
import React from "react";

const HeroSvg = () => (
  <svg
    viewBox="0 0 600 470"
    role="img"
    aria-labelledby="papdf-hero-title papdf-hero-desc"
    xmlns="http://www.w3.org/2000/svg"
    fontFamily="aptos"
  >
    <title id="papdf-hero-title">A Power Apps screen becoming a PDF</title>
    <desc id="papdf-hero-desc">
      An app screen with a summary header, two tiles, a list of records and an
      Export PDF button. The PDF formula turns it into a finished A4 page with
      the same header, tiles and table, which can then be emailed, saved to
      SharePoint or downloaded.
    </desc>

    {/* ambient dots */}
    <circle cx="300" cy="150" r="3" fill="#6fc3e8" opacity="0.5" />
    <circle cx="318" cy="330" r="2.5" fill="#6fc3e8" opacity="0.35" />
    <circle cx="286" cy="318" r="2" fill="#ffffff" opacity="0.25" />

    {/* ---------- app screen ---------- */}
    <text x="10" y="50" fontSize="14" fill="#9fb3c4">
      Your Power Apps screen
    </text>
    <rect
      x="10"
      y="70"
      width="220"
      height="330"
      rx="18"
      fill="#1a2a3a"
      stroke="#ffffff"
      strokeOpacity="0.18"
      strokeWidth="1.5"
    />
    <path
      d="M10 88a18 18 0 0 1 18-18h184a18 18 0 0 1 18 18v22H10z"
      fill="#046999"
    />
    <rect
      x="26"
      y="86"
      width="90"
      height="8"
      rx="4"
      fill="#ffffff"
      opacity="0.9"
    />
    <rect
      x="26"
      y="98"
      width="56"
      height="6"
      rx="3"
      fill="#ffffff"
      opacity="0.5"
    />
    <circle cx="206" cy="92" r="8" fill="#ffffff" opacity="0.25" />

    {/* summary tiles */}
    <rect x="24" y="122" width="94" height="40" rx="8" fill="#223548" />
    <rect x="34" y="132" width="40" height="6" rx="3" fill="#6fc3e8" />
    <rect
      x="34"
      y="146"
      width="62"
      height="8"
      rx="4"
      fill="#ffffff"
      opacity="0.85"
    />
    <rect x="122" y="122" width="94" height="40" rx="8" fill="#223548" />
    <rect x="132" y="132" width="34" height="6" rx="3" fill="#6fc3e8" />
    <rect
      x="132"
      y="146"
      width="48"
      height="8"
      rx="4"
      fill="#ffffff"
      opacity="0.85"
    />

    {/* container that PDF() can target */}
    <text x="216" y="180" fontSize="14" fill="#6fc3e8" textAnchor="end">
      Container1
    </text>
    <rect
      x="20"
      y="186"
      width="200"
      height="156"
      rx="10"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="1.5"
      strokeDasharray="5 4"
    />
    {[0, 1, 2, 3].map((i) => {
      const y = 194 + i * 36;
      return (
        <g key={i}>
          <rect x="28" y={y} width="184" height="30" rx="6" fill="#1f3144" />
          <circle cx="44" cy={y + 15} r="7" fill="#046999" />
          <rect
            x="58"
            y={y + 8}
            width={70 - i * 6}
            height="6"
            rx="3"
            fill="#ffffff"
            opacity="0.8"
          />
          <rect
            x="58"
            y={y + 19}
            width="44"
            height="5"
            rx="2.5"
            fill="#ffffff"
            opacity="0.35"
          />
          <rect
            x="170"
            y={y + 9}
            width="32"
            height="12"
            rx="6"
            fill="#6fc3e8"
            opacity="0.85"
          />
        </g>
      );
    })}

    {/* export button */}
    <rect x="24" y="356" width="192" height="32" rx="6" fill="#046999" />
    <text
      x="120"
      y="377"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      Export PDF
    </text>

    {/* ---------- formula chip and arrows ---------- */}
    <line
      x1="234"
      y1="235"
      x2="252"
      y2="235"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeDasharray="4 4"
    />
    <polygon points="252,229 258,235 252,241" fill="#6fc3e8" />
    <rect x="258" y="214" width="84" height="42" rx="21" fill="#6fc3e8" />
    <text
      x="300"
      y="241"
      fontSize="18"
      fontWeight="700"
      fill="#0b2433"
      textAnchor="middle"
    >
      PDF( )
    </text>
    <line
      x1="346"
      y1="235"
      x2="364"
      y2="235"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeDasharray="4 4"
    />
    <polygon points="364,229 370,235 364,241" fill="#6fc3e8" />

    {/* ---------- finished PDF page ---------- */}
    <rect
      x="384"
      y="68"
      width="200"
      height="283"
      rx="8"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.2"
    />
    <path
      d="M380 80H544L572 108V355a8 8 0 0 1-8 8H380a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8z"
      fill="#ffffff"
    />
    <polygon points="544,80 544,108 572,108" fill="#cfe3ee" />
    <rect x="388" y="96" width="44" height="20" rx="4" fill="#046999" />
    <text
      x="410"
      y="111"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      PDF
    </text>
    <rect x="388" y="130" width="120" height="10" rx="5" fill="#0d1b2a" />
    <rect
      x="388"
      y="148"
      width="80"
      height="7"
      rx="3.5"
      fill="#9a9da1"
      opacity="0.6"
    />

    <rect x="388" y="170" width="76" height="36" rx="6" fill="#e8f4fa" />
    <rect
      x="396"
      y="178"
      width="30"
      height="5"
      rx="2.5"
      fill="#046999"
      opacity="0.55"
    />
    <rect x="396" y="190" width="46" height="8" rx="4" fill="#0d1b2a" />
    <rect x="472" y="170" width="84" height="36" rx="6" fill="#e8f4fa" />
    <rect
      x="480"
      y="178"
      width="34"
      height="5"
      rx="2.5"
      fill="#046999"
      opacity="0.55"
    />
    <rect x="480" y="190" width="52" height="8" rx="4" fill="#0d1b2a" />

    <rect x="388" y="222" width="168" height="18" rx="4" fill="#046999" />
    <rect x="396" y="229" width="30" height="4" rx="2" fill="#ffffff" />
    <rect x="500" y="229" width="40" height="4" rx="2" fill="#ffffff" />
    {[0, 1, 2, 3].map((i) => {
      const y = 244 + i * 22;
      return (
        <g key={i}>
          <rect
            x="388"
            y={y}
            width="168"
            height="20"
            fill={i % 2 ? "#f7f8f9" : "#ffffff"}
          />
          <line x1="388" y1={y + 20} x2="556" y2={y + 20} stroke="#e3e8ec" />
          <rect
            x="396"
            y={y + 8}
            width={64 - i * 4}
            height="5"
            rx="2.5"
            fill="#4a5568"
            opacity="0.7"
          />
          <rect
            x="500"
            y={y + 8}
            width="40"
            height="5"
            rx="2.5"
            fill="#4a5568"
            opacity="0.4"
          />
        </g>
      );
    })}
    <line x1="388" y1="352" x2="450" y2="352" stroke="#9a9da1" />
    <rect
      x="480"
      y="346"
      width="76"
      height="7"
      rx="3.5"
      fill="#0d1b2a"
      opacity="0.8"
    />

    {/* ---------- destinations ---------- */}
    {[396, 472, 548].map((cx) => (
      <line
        key={cx}
        x1="472"
        y1="363"
        x2={cx}
        y2="394"
        stroke="#6fc3e8"
        strokeOpacity="0.6"
        strokeDasharray="3 3"
      />
    ))}
    {[396, 472, 548].map((cx) => (
      <circle
        key={cx}
        cx={cx}
        cy="412"
        r="18"
        fill="#1a2a3a"
        stroke="#6fc3e8"
        strokeWidth="1.5"
      />
    ))}
    {/* envelope */}
    <g
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="387" y="405" width="18" height="14" rx="2" />
      <path d="M387 407l9 7 9-7" />
      {/* folder */}
      <path d="M463 406h6l2 2h9v11h-17z" />
      {/* download */}
      <path d="M548 403v12M542 410l6 6 6-6M541 421h14" />
    </g>
    <g fontSize="14" fill="#9fb3c4" textAnchor="middle">
      <text x="396" y="452">
        Email
      </text>
      <text x="472" y="452">
        SharePoint
      </text>
      <text x="548" y="452">
        Download
      </text>
    </g>
  </svg>
);

export default HeroSvg;
