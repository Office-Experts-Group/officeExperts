// /app/services/microsoft-power-platform/power-automate/(svgs)/PautoIntroCells.jsx
// Three stacked cells for the intro: how far Power Automate has moved.
// Each cell is its own informative SVG (role="img" with a prefixed title and desc).
// Colours: #046999 $accent, #6fc3e8 $accent-on-dark, #e8f4fa $accent-light,
// #0b2433 $ink, #4a5568 $text-secondary, #9a9da1 $text-muted, #e3e8ec $line,
// #d4d6d9 $line-strong, #ffffff $white.

const svgProps = {
  viewBox: "0 0 440 170",
  fontFamily: "aptos",
  xmlns: "http://www.w3.org/2000/svg",
};

// Cell 1: flows that move
export const PautoIntroMoveCell = () => (
  <svg
    {...svgProps}
    role="img"
    aria-labelledby="pauto-intro-move-title pauto-intro-move-desc"
  >
    <title id="pauto-intro-move-title">Flows that move</title>
    <desc id="pauto-intro-move-desc">
      A table of records sends data to an email message: flows move data and
      send notifications when something happens, such as triggers, approvals and
      data sync.
    </desc>
    <rect
      x="0.5"
      y="0.5"
      width="439"
      height="169"
      rx="16"
      fill="#ffffff"
      stroke="#e3e8ec"
    />
    <rect
      x="20"
      y="63"
      width="44"
      height="44"
      rx="10"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <path
      d="M30 76h24M30 85h24M30 94h16M40 72v30"
      stroke="#046999"
      strokeWidth="1.5"
      opacity="0.7"
    />
    <path
      d="M71 85h16m-5-5l5 5-5 5"
      fill="none"
      stroke="#046999"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="94"
      y="63"
      width="44"
      height="44"
      rx="10"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <rect
      x="104"
      y="76"
      width="24"
      height="18"
      rx="3"
      fill="none"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <path
      d="M104 78l12 9 12-9"
      fill="none"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <path
      d="M118 54v-4a6 6 0 0 1 12 0v4l2 3h-16z"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.4"
      strokeLinejoin="round"
      transform="translate(2 -6)"
    />
    <circle cx="126" cy="56" r="2" fill="#046999" />
    <text x="164" y="64" fontSize="16" fontWeight="700" fill="#0b2433">
      Flows that move
    </text>
    <text x="164" y="88" fontSize="14" fill="#4a5568">
      Triggers, approvals
    </text>
    <text x="164" y="106" fontSize="14" fill="#4a5568">
      and data sync
    </text>
  </svg>
);

// Cell 2: flows that read
export const PautoIntroReadCell = () => (
  <svg
    {...svgProps}
    role="img"
    aria-labelledby="pauto-intro-read-title pauto-intro-read-desc"
  >
    <title id="pauto-intro-read-title">Flows that read</title>
    <desc id="pauto-intro-read-desc">
      A scanned document with highlighted fields is turned into a table of data:
      AI Builder reads invoices, forms and email, then acts.
    </desc>
    <rect
      x="0.5"
      y="0.5"
      width="439"
      height="169"
      rx="16"
      fill="#e8f4fa"
      stroke="#046999"
      strokeOpacity="0.28"
    />
    <rect
      x="14"
      y="49"
      width="52"
      height="72"
      rx="6"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <rect
      x="21"
      y="56"
      width="20"
      height="5"
      rx="2.5"
      fill="#9a9da1"
      opacity="0.6"
    />
    <rect
      x="21"
      y="66"
      width="38"
      height="9"
      rx="2.5"
      fill="#046999"
      opacity="0.28"
    />
    <rect x="21" y="80" width="34" height="4" rx="2" fill="#e3e8ec" />
    <rect
      x="21"
      y="89"
      width="38"
      height="9"
      rx="2.5"
      fill="#046999"
      opacity="0.28"
    />
    <rect x="21" y="103" width="26" height="4" rx="2" fill="#e3e8ec" />
    <path
      d="M71 85h12m-5-5l5 5-5 5"
      fill="none"
      stroke="#046999"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="90"
      y="53"
      width="58"
      height="64"
      rx="6"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.4"
    />
    <rect
      x="90"
      y="53"
      width="58"
      height="13"
      rx="6"
      fill="#046999"
      opacity="0.2"
    />
    <path d="M90 78h58M90 90h58M90 102h58M110 66v51" stroke="#d4d6d9" />
    <rect x="91" y="79" width="56" height="11" fill="#046999" opacity="0.18" />
    <text x="164" y="46" fontSize="16" fontWeight="700" fill="#0b2433">
      Flows that read
    </text>
    <text x="164" y="70" fontSize="14" fill="#4a5568">
      AI Builder reads
    </text>
    <text x="164" y="88" fontSize="14" fill="#4a5568">
      invoices, forms and
    </text>
    <text x="164" y="106" fontSize="14" fill="#4a5568">
      email, then acts.
    </text>
    <rect x="164" y="122" width="90" height="24" rx="12" fill="#046999" />
    <text
      x="209"
      y="139"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      AI Builder
    </text>
  </svg>
);

// Cell 3: agents that watch
export const PautoIntroWatchCell = () => (
  <svg
    {...svgProps}
    role="img"
    aria-labelledby="pauto-intro-watch-title pauto-intro-watch-desc"
  >
    <title id="pauto-intro-watch-title">Agents that watch</title>
    <desc id="pauto-intro-watch-desc">
      A radar screen with blips: Copilot Studio agents watch your systems and
      act on rules, with no trigger needed.
    </desc>
    <rect x="0" y="0" width="440" height="170" rx="16" fill="#0b2433" />
    <g fill="none" stroke="#6fc3e8" strokeOpacity="0.55">
      <circle cx="76" cy="85" r="52" />
      <circle cx="76" cy="85" r="35" />
      <circle cx="76" cy="85" r="18" />
      <path d="M24 85h104M76 33v104" strokeOpacity="0.3" />
    </g>
    <path d="M76 85L128 85A52 52 0 0 0 113 48z" fill="#6fc3e8" opacity="0.25" />
    <circle cx="76" cy="85" r="4" fill="#6fc3e8" />
    <circle cx="106" cy="67" r="4.5" fill="#6fc3e8" />
    <circle cx="50" cy="110" r="4.5" fill="#6fc3e8" />
    <circle cx="54" cy="58" r="6" fill="#ffffff" />
    <text x="164" y="44" fontSize="16" fontWeight="700" fill="#ffffff">
      Agents that watch
    </text>
    <text x="164" y="68" fontSize="14" fill="#ffffff" fillOpacity="0.75">
      Copilot Studio
    </text>
    <text x="164" y="86" fontSize="14" fill="#ffffff" fillOpacity="0.75">
      watches your systems
    </text>
    <text x="164" y="104" fontSize="14" fill="#ffffff" fillOpacity="0.75">
      and acts on rules.
    </text>
    <rect x="164" y="124" width="136" height="26" rx="13" fill="#6fc3e8" />
    <text
      x="232"
      y="142"
      fontSize="14"
      fontWeight="700"
      fill="#0b2433"
      textAnchor="middle"
    >
      No trigger needed
    </text>
  </svg>
);
