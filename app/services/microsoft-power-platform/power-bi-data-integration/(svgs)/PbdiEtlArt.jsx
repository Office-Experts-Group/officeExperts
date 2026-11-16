// /app/services/microsoft-power-platform/power-bi-data-integration/(svgs)/PbdiEtlArt.jsx
// Spot illustrations for the extract, transform and load tiles.
// "extract" is drawn for the white tile, "transform" for the dark tile, "load" for the pale blue tile.
// Hex values and the tokens they match:
//   #046999 $accent, #e8f4fa $accent-light, #6fc3e8 $accent-on-dark, #111820 $dark-bg,
//   #18232e $dark-surface, #1a2a3a $dark-mid, #0b2433 $ink, #d4d6d9 $line-strong,
//   #c0392b $before-border, #ffffff $white

const Wrap = ({ children }) => (
  <svg
    viewBox="0 0 260 150"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
);

// Sources pulled into a tray
const Extract = () => (
  <Wrap>
    <rect width="260" height="150" rx="16" fill="#e8f4fa" />
    <g fill="#ffffff" stroke="#046999" strokeWidth="2.2">
      <rect x="16" y="16" width="44" height="34" rx="8" />
      <rect x="16" y="58" width="44" height="34" rx="8" />
      <rect x="16" y="100" width="44" height="34" rx="8" />
    </g>
    <path
      d="M24 28h28M24 34h28M24 40h18"
      stroke="#046999"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <g fill="none" stroke="#046999" strokeWidth="2.2">
      <ellipse cx="38" cy="68" rx="12" ry="4.5" />
      <path d="M26 68v14c0 2.5 5.4 4.5 12 4.5s12-2 12-4.5V68" />
    </g>
    <path
      d="M26 124a6 6 0 0 1 2-11 8 8 0 0 1 15 1 5 5 0 0 1 0 10z"
      fill="none"
      stroke="#046999"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <g
      fill="none"
      stroke="#046999"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M62 33h30c18 0 14 42 40 42" />
      <path d="M62 75h70" />
      <path d="M62 117h30c18 0 14-42 40-42" />
      <path d="M124 69l8 6-8 6" />
    </g>
    <path
      d="M142 48h92l-10 82h-72z"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2.6"
      strokeLinejoin="round"
    />
    <g stroke="#046999" strokeWidth="3" strokeLinecap="round">
      <path d="M158 70h60" />
      <path d="M162 88h52" />
      <path d="M166 106h44" />
    </g>
    <rect x="198" y="64" width="9" height="9" fill="#c0392b" />
    <path
      d="M146 58h84"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.4"
    />
  </Wrap>
);

// Messy table cleaned into a tidy one, on dark
const Transform = () => (
  <Wrap>
    <rect width="260" height="150" rx="16" fill="#18232e" />
    <rect
      x="16"
      y="22"
      width="92"
      height="106"
      rx="10"
      fill="#1a2a3a"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeDasharray="5 4"
    />
    <g
      stroke="#ffffff"
      strokeOpacity="0.7"
      strokeWidth="3.2"
      strokeLinecap="round"
    >
      <path d="M28 44h50" />
      <path d="M28 62h66" />
      <path d="M28 80h66" />
      <path d="M28 98h34" />
    </g>
    <path
      d="M70 98h24"
      stroke="#ffffff"
      strokeOpacity="0.35"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeDasharray="2 6"
    />
    <rect
      x="84"
      y="38"
      width="16"
      height="16"
      rx="4"
      fill="#111820"
      stroke="#6fc3e8"
      strokeWidth="1.8"
    />
    <path
      d="M89 46l3 3 5-6"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g transform="translate(112 52)">
      <path
        d="M2 4h30L22 20v22l-10 6V20z"
        fill="#111820"
        stroke="#6fc3e8"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </g>
    <path
      d="M122 106h20M136 100l6 6-6 6"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="152"
      y="22"
      width="92"
      height="106"
      rx="10"
      fill="#111820"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <rect x="153" y="23" width="90" height="24" rx="9" fill="#6fc3e8" />
    <g stroke="#ffffff" strokeWidth="3.2" strokeLinecap="round">
      <path d="M166 66h64" />
      <path d="M166 84h64" />
      <path d="M166 102h64" />
    </g>
    <circle cx="226" cy="110" r="14" fill="#6fc3e8" />
    <path
      d="M220 110l4 4 8-9"
      fill="none"
      stroke="#111820"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Wrap>
);

// Tidy data into a model, then a refreshing dashboard
const Load = () => (
  <Wrap>
    <rect width="260" height="150" rx="16" fill="#ffffff" />
    <rect
      x="14"
      y="30"
      width="48"
      height="90"
      rx="8"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="2.2"
    />
    <rect x="15" y="31" width="46" height="18" rx="7" fill="#046999" />
    <g stroke="#046999" strokeWidth="2.6" strokeLinecap="round">
      <path d="M24 66h28" />
      <path d="M24 82h28" />
      <path d="M24 98h28" />
    </g>
    <path
      d="M62 75h16"
      stroke="#046999"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <g fill="#ffffff" stroke="#046999" strokeWidth="2.2">
      <rect x="90" y="56" width="34" height="38" rx="7" />
      <rect x="82" y="16" width="22" height="22" rx="6" />
      <rect x="82" y="112" width="22" height="22" rx="6" />
      <rect x="112" y="16" width="22" height="22" rx="6" />
    </g>
    <rect x="91" y="57" width="32" height="12" rx="6" fill="#046999" />
    <g stroke="#046999" strokeWidth="2.2" strokeLinecap="round">
      <path d="M97 86h20" />
      <path d="M96 38l6 18" />
      <path d="M123 38l-2 18" />
      <path d="M96 112l6-18" />
    </g>
    <path
      d="M136 75h18"
      stroke="#046999"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <rect x="158" y="22" width="88" height="106" rx="12" fill="#111820" />
    <g fill="#6fc3e8">
      <rect x="172" y="84" width="13" height="24" rx="2" />
      <rect x="191" y="68" width="13" height="40" rx="2" />
      <rect x="210" y="76" width="13" height="32" rx="2" />
    </g>
    <path
      d="M172 44h34"
      stroke="#ffffff"
      strokeOpacity="0.65"
      strokeWidth="3.4"
      strokeLinecap="round"
    />
    <g
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M222 38a9 9 0 0 1 15-3" />
      <path d="M239 29v7h-7" />
    </g>
  </Wrap>
);

const ART = { extract: Extract, transform: Transform, load: Load };

const PbdiEtlArt = ({ kind }) => {
  const Art = ART[kind];
  return Art ? <Art /> : null;
};

export default PbdiEtlArt;
