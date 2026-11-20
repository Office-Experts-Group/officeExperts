// /app/blog/microsoft-access-on-mac/(svgs)/HeroSvg.jsx
// Hero illustration: a Windows-only Access file reaching a Mac by three routes
// (virtual machine, cloud desktop, new app). Sits directly on the dark hero.
// Hex values and the tokens they match:
//   #6fc3e8 $accent-on-dark   #046999 $accent   #e8f4fa $accent-light
//   #111820 $dark-bg          #18232e $dark-surface   #1a2a3a $dark-mid
//   #0d1b2a $text-primary     #4a5568 $text-secondary  #f7f8f9 $light-bg
// Only this SVG animates: the page module animates .flow (dash offset) and
// .live (pulse) inside prefers-reduced-motion: no-preference.

export default function HeroSvg({ flowClass = "", liveClass = "" }) {
  return (
    <svg
      viewBox="0 0 640 440"
      role="img"
      aria-labelledby="mac-hero-title mac-hero-desc"
      fontFamily="aptos"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="mac-hero-title">Access reaching a Mac</title>
      <desc id="mac-hero-desc">
        A locked Access database file on the left connects to a Mac laptop on
        the right by three routes: a Parallels virtual machine, a cloud desktop
        and a new app. The laptop shows the database running in a window.
      </desc>

      {/* Left: the Windows-only file */}
      <rect
        x="20"
        y="104"
        width="150"
        height="28"
        rx="14"
        fill="#6fc3e8"
        fillOpacity="0.18"
      />
      <text
        x="95"
        y="123"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#6fc3e8"
      >
        Windows only
      </text>
      <rect
        x="20"
        y="150"
        width="150"
        height="190"
        rx="16"
        fill="#ffffff"
        fillOpacity="0.05"
        stroke="#ffffff"
        strokeOpacity="0.35"
        strokeWidth="1.5"
        strokeDasharray="6 6"
      />
      <ellipse
        cx="95"
        cy="196"
        rx="34"
        ry="11"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2"
      />
      <path
        d="M61 196v44c0 6 15 11 34 11s34-5 34-11v-44"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2"
      />
      <path
        d="M61 218c0 6 15 11 34 11s34-5 34-11"
        fill="none"
        stroke="#6fc3e8"
        strokeOpacity="0.55"
        strokeWidth="2"
      />
      <circle
        cx="131"
        cy="244"
        r="16"
        fill="#111820"
        stroke="#6fc3e8"
        strokeWidth="2"
      />
      <rect x="123" y="243" width="16" height="12" rx="2.5" fill="#6fc3e8" />
      <path
        d="M126 243v-3.5a5 5 0 0 1 10 0V243"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text
        x="95"
        y="294"
        textAnchor="middle"
        fontSize="16"
        fontWeight="700"
        fill="#ffffff"
      >
        Access file
      </text>
      <text
        x="95"
        y="316"
        textAnchor="middle"
        fontSize="14"
        fill="#ffffff"
        fillOpacity="0.7"
      >
        .accdb
      </text>

      {/* Three routes. Dashes come from the attribute, the page animates the offset */}
      <g
        fill="none"
        stroke="#6fc3e8"
        strokeOpacity="0.75"
        strokeWidth="2"
        strokeDasharray="6 10"
        strokeLinecap="round"
      >
        <path className={flowClass} d="M170 245C196 245 200 130 224 130" />
        <path className={flowClass} d="M276 130C312 130 318 205 350 215" />
        <path className={flowClass} d="M170 245H224" />
        <path className={flowClass} d="M276 245H350" />
        <path className={flowClass} d="M170 245C196 245 200 360 224 360" />
        <path className={flowClass} d="M276 360C312 360 318 285 350 275" />
      </g>

      {/* Route nodes */}
      <g>
        <circle
          cx="250"
          cy="130"
          r="26"
          fill="#18232e"
          stroke="#6fc3e8"
          strokeWidth="2"
        />
        <path
          d="M240 138a6 6 0 0 1-.7-11.95A8 8 0 0 1 255 123.5a6.8 6.8 0 0 1 .7 13.5H240z"
          fill="none"
          stroke="#6fc3e8"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <text
          x="250"
          y="94"
          textAnchor="middle"
          fontSize="14"
          fill="#ffffff"
          fillOpacity="0.85"
        >
          Cloud host
        </text>

        <circle
          cx="250"
          cy="245"
          r="26"
          fill="#18232e"
          stroke="#6fc3e8"
          strokeWidth="2"
        />
        <path
          d="M250 232l13 7-13 7-13-7 13-7z"
          fill="none"
          stroke="#6fc3e8"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M237 247l13 7 13-7"
          fill="none"
          stroke="#6fc3e8"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <text
          x="250"
          y="209"
          textAnchor="middle"
          fontSize="14"
          fill="#ffffff"
          fillOpacity="0.85"
        >
          Parallels
        </text>

        <circle
          cx="250"
          cy="360"
          r="26"
          fill="#18232e"
          stroke="#6fc3e8"
          strokeWidth="2"
        />
        <rect
          x="238"
          y="348"
          width="10"
          height="10"
          rx="2"
          fill="none"
          stroke="#6fc3e8"
          strokeWidth="2"
        />
        <rect
          x="252"
          y="348"
          width="10"
          height="10"
          rx="2"
          fill="none"
          stroke="#6fc3e8"
          strokeWidth="2"
        />
        <rect
          x="238"
          y="362"
          width="10"
          height="10"
          rx="2"
          fill="none"
          stroke="#6fc3e8"
          strokeWidth="2"
        />
        <rect x="252" y="362" width="10" height="10" rx="2" fill="#6fc3e8" />
        <text
          x="250"
          y="408"
          textAnchor="middle"
          fontSize="14"
          fill="#ffffff"
          fillOpacity="0.85"
        >
          New app
        </text>
      </g>

      {/* Right: the Mac */}
      <rect
        x="350"
        y="76"
        width="100"
        height="28"
        rx="14"
        fill="#6fc3e8"
        fillOpacity="0.18"
      />
      <text
        x="400"
        y="95"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#6fc3e8"
      >
        Your Mac
      </text>
      <rect
        x="350"
        y="118"
        width="270"
        height="196"
        rx="14"
        fill="#0b1118"
        stroke="#ffffff"
        strokeOpacity="0.4"
        strokeWidth="2"
      />
      <rect
        x="330"
        y="322"
        width="310"
        height="14"
        rx="7"
        fill="#1a2a3a"
        stroke="#ffffff"
        strokeOpacity="0.3"
      />
      <rect x="456" y="322" width="58" height="5" rx="2.5" fill="#111820" />

      {/* App window on the Mac screen */}
      <rect x="364" y="132" width="242" height="168" rx="8" fill="#ffffff" />
      <path
        d="M364 140a8 8 0 0 1 8-8h226a8 8 0 0 1 8 8v14H364v-14z"
        fill="#e8f4fa"
      />
      <circle cx="378" cy="143" r="3" fill="#046999" fillOpacity="0.45" />
      <circle cx="389" cy="143" r="3" fill="#046999" fillOpacity="0.45" />
      <circle cx="400" cy="143" r="3" fill="#046999" fillOpacity="0.45" />
      <text
        x="486"
        y="148"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#0d1b2a"
      >
        Orders
      </text>
      <circle className={liveClass} cx="592" cy="143" r="4.5" fill="#046999" />

      {/* Navigation strip */}
      <rect x="364" y="154" width="52" height="146" fill="#f7f8f9" />
      <rect x="372" y="164" width="36" height="9" rx="4.5" fill="#046999" />
      <rect x="372" y="182" width="30" height="9" rx="4.5" fill="#d4d6d9" />
      <rect x="372" y="200" width="34" height="9" rx="4.5" fill="#d4d6d9" />
      <rect x="372" y="218" width="26" height="9" rx="4.5" fill="#d4d6d9" />

      {/* Datasheet */}
      <rect x="426" y="164" width="172" height="16" rx="3" fill="#046999" />
      <rect x="426" y="182" width="172" height="14" fill="#f7f8f9" />
      <rect x="426" y="196" width="172" height="14" fill="#ffffff" />
      <rect x="426" y="210" width="172" height="14" fill="#f7f8f9" />
      <rect x="426" y="224" width="172" height="14" fill="#ffffff" />
      <g fill="#d4d6d9">
        <rect x="432" y="186" width="38" height="6" rx="3" />
        <rect x="486" y="186" width="30" height="6" rx="3" />
        <rect x="532" y="186" width="44" height="6" rx="3" />
        <rect x="432" y="200" width="30" height="6" rx="3" />
        <rect x="486" y="200" width="42" height="6" rx="3" />
        <rect x="532" y="200" width="28" height="6" rx="3" />
        <rect x="432" y="214" width="42" height="6" rx="3" />
        <rect x="486" y="214" width="26" height="6" rx="3" />
        <rect x="532" y="214" width="40" height="6" rx="3" />
        <rect x="432" y="228" width="34" height="6" rx="3" />
        <rect x="486" y="228" width="38" height="6" rx="3" />
        <rect x="532" y="228" width="32" height="6" rx="3" />
      </g>
      <g fill="#ffffff">
        <rect x="432" y="169" width="34" height="6" rx="3" />
        <rect x="486" y="169" width="26" height="6" rx="3" />
        <rect x="532" y="169" width="38" height="6" rx="3" />
      </g>

      {/* Small bar chart */}
      <rect x="426" y="246" width="172" height="46" rx="6" fill="#e8f4fa" />
      <rect
        x="440"
        y="272"
        width="14"
        height="14"
        rx="2"
        fill="#046999"
        fillOpacity="0.45"
      />
      <rect
        x="462"
        y="262"
        width="14"
        height="24"
        rx="2"
        fill="#046999"
        fillOpacity="0.65"
      />
      <rect
        x="484"
        y="268"
        width="14"
        height="18"
        rx="2"
        fill="#046999"
        fillOpacity="0.45"
      />
      <rect x="506" y="254" width="14" height="32" rx="2" fill="#046999" />
      <rect
        x="528"
        y="260"
        width="14"
        height="26"
        rx="2"
        fill="#046999"
        fillOpacity="0.65"
      />
      <rect
        x="550"
        y="266"
        width="30"
        height="6"
        rx="3"
        fill="#046999"
        fillOpacity="0.25"
      />
      <rect
        x="550"
        y="276"
        width="22"
        height="6"
        rx="3"
        fill="#046999"
        fillOpacity="0.25"
      />

      <text
        x="485"
        y="372"
        textAnchor="middle"
        fontSize="16"
        fontWeight="700"
        fill="#ffffff"
      >
        Running on your Mac
      </text>
      <text
        x="485"
        y="394"
        textAnchor="middle"
        fontSize="14"
        fill="#ffffff"
        fillOpacity="0.7"
      >
        Same Access, same data
      </text>
    </svg>
  );
}
