// /app/services/microsoft-power-platform/power-bi-data-integration/(svgs)/PbdiBenefitArt.jsx
// Spot illustrations for the benefit rows. Decorative, so they are hidden from assistive tech.
// "central" is drawn for the solid accent tile; the other three are drawn for the dark tile.
// Hex values and the tokens they match:
//   #046999 $accent, #034e72 $accent-dark, #e8f4fa $accent-light, #6fc3e8 $accent-on-dark,
//   #111820 $dark-bg, #1a2a3a $dark-mid, #ffffff $white

const Wrap = ({ children }) => (
  <svg
    viewBox="0 0 160 120"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
);

// One dashboard fed by several sources, drawn in light-on-accent colours
const Central = () => (
  <Wrap>
    <g fill="#e8f4fa">
      <circle cx="16" cy="26" r="8" />
      <circle cx="16" cy="60" r="8" />
      <circle cx="16" cy="94" r="8" />
    </g>
    <g fill="none" stroke="#e8f4fa" strokeWidth="2.4" strokeLinecap="round">
      <path d="M26 26c14 0 14 34 30 34" />
      <path d="M26 60h30" />
      <path d="M26 94c14 0 14-34 30-34" />
    </g>
    <rect
      x="58"
      y="18"
      width="92"
      height="84"
      rx="10"
      fill="#034e72"
      stroke="#e8f4fa"
      strokeWidth="2.4"
    />
    <path d="M58 40h92" stroke="#e8f4fa" strokeWidth="2" />
    <circle cx="70" cy="29" r="3" fill="#e8f4fa" />
    <circle cx="82" cy="29" r="3" fill="#e8f4fa" opacity="0.6" />
    <circle cx="136" cy="29" r="4" fill="#6fc3e8" />
    <g fill="#e8f4fa">
      <rect x="70" y="70" width="12" height="20" rx="2" />
      <rect x="88" y="58" width="12" height="32" rx="2" />
      <rect x="106" y="64" width="12" height="26" rx="2" />
    </g>
    <path
      d="M70 56l20-4 20 5 26-12"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Wrap>
);

// Trends across departments with a target line, on dark
const Decisions = () => (
  <Wrap>
    <path
      d="M22 18v78h122"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.35"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 44h122"
      stroke="#6fc3e8"
      strokeWidth="1.8"
      strokeDasharray="5 5"
      opacity="0.7"
    />
    <path
      d="M26 88l26-16 26 4 28-28 30-14"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26 92l26-6 26-20 28 6 30-8"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.75"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="132" cy="34" r="5" fill="#6fc3e8" />
    <circle cx="132" cy="58" r="5" fill="#ffffff" />
    <circle
      cx="104"
      cy="48"
      r="15"
      fill="#1a2a3a"
      fillOpacity="0.6"
      stroke="#6fc3e8"
      strokeWidth="2.4"
    />
    <path
      d="M115 59l12 12"
      stroke="#6fc3e8"
      strokeWidth="3.4"
      strokeLinecap="round"
    />
  </Wrap>
);

// Stopwatch plus a stack of coins, on dark
const Savings = () => (
  <Wrap>
    <rect x="48" y="14" width="16" height="8" rx="3" fill="#6fc3e8" />
    <circle
      cx="56"
      cy="64"
      r="36"
      fill="#1a2a3a"
      stroke="#6fc3e8"
      strokeWidth="4"
    />
    <path d="M56 64V36A28 28 0 0 1 80 78z" fill="#6fc3e8" opacity="0.32" />
    <path
      d="M56 64V38M56 64l22 13"
      fill="none"
      stroke="#ffffff"
      strokeWidth="3.4"
      strokeLinecap="round"
    />
    <circle cx="56" cy="64" r="4" fill="#ffffff" />
    <g fill="#1a2a3a" stroke="#6fc3e8" strokeWidth="2.6">
      <path d="M102 96v-6h40v6c0 4-9 7-20 7s-20-3-20-7z" />
      <path d="M102 80v-6h40v6c0 4-9 7-20 7s-20-3-20-7z" />
      <path d="M102 64v-6h40v6c0 4-9 7-20 7s-20-3-20-7z" />
      <ellipse
        cx="122"
        cy="58"
        rx="20"
        ry="7"
        fill="#6fc3e8"
        fillOpacity="0.3"
      />
    </g>
    <circle cx="140" cy="30" r="12" fill="#6fc3e8" />
    <path
      d="M134 30l4 4 8-9"
      fill="none"
      stroke="#111820"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Wrap>
);

// Growing bars with a new block plugging in, on dark
const Scale = () => (
  <Wrap>
    <path
      d="M14 104h132"
      stroke="#ffffff"
      strokeOpacity="0.35"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <g fill="#6fc3e8">
      <rect x="22" y="80" width="22" height="24" rx="3" opacity="0.4" />
      <rect x="50" y="64" width="22" height="40" rx="3" opacity="0.6" />
      <rect x="78" y="46" width="22" height="58" rx="3" opacity="0.8" />
      <rect x="106" y="32" width="22" height="72" rx="3" />
    </g>
    <rect
      x="106"
      y="6"
      width="22"
      height="20"
      rx="3"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.2"
      strokeDasharray="4 4"
    />
    <path
      d="M128 16h10"
      stroke="#ffffff"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <circle cx="144" cy="16" r="6" fill="#ffffff" />
    <path
      d="M141 16h6M144 13v6"
      stroke="#111820"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </Wrap>
);

const ART = {
  central: Central,
  decisions: Decisions,
  savings: Savings,
  scale: Scale,
};

const PbdiBenefitArt = ({ kind }) => {
  const Art = ART[kind];
  return Art ? <Art /> : null;
};

export default PbdiBenefitArt;
