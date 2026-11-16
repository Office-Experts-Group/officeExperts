// /app/services/microsoft-power-platform/microsoft-power-pages/(svgs)/PpgEngageArt.jsx
// Spot illustrations for the four ways to work with us, each drawn for its
// tile: Fixed on the accent tile, Hourly on the dark surface tile, Support on
// the white tile, Training on the dark mid tile.
// Hex values and tokens: #046999 $accent, #e8f4fa $accent-light,
// #6fc3e8 $accent-on-dark, #034e72 $accent-dark, #18232e $dark-surface,
// #1a2a3a $dark-mid, #111820 $dark-bg, #d4d6d9 $line-strong, #ffffff $white.

const props = {
  viewBox: "0 0 96 96",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
};

// Accent tile: a scoped document with a signed-off stamp.
export const PpgFixedArt = () => (
  <svg {...props}>
    <rect
      x="10"
      y="8"
      width="54"
      height="72"
      rx="8"
      fill="#ffffff"
      fillOpacity="0.14"
      stroke="#ffffff"
      strokeWidth="2.4"
    />
    <rect x="20" y="20" width="26" height="6" rx="3" fill="#ffffff" />
    <path
      d="M20 36 H54 M20 46 H54 M20 56 H40"
      stroke="#ffffff"
      strokeOpacity="0.7"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <rect
      x="20"
      y="64"
      width="22"
      height="8"
      rx="4"
      fill="#ffffff"
      fillOpacity="0.35"
    />
    <circle cx="68" cy="66" r="20" fill="#ffffff" />
    <circle
      cx="68"
      cy="66"
      r="15"
      stroke="#046999"
      strokeWidth="2"
      strokeDasharray="3 3"
    />
    <path
      d="M60 66 l6 6 11 -13"
      stroke="#046999"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Dark surface tile: a stopwatch with segments.
export const PpgHourlyArt = () => (
  <svg {...props}>
    <circle
      cx="48"
      cy="54"
      r="30"
      fill="#ffffff"
      fillOpacity="0.07"
      stroke="#6fc3e8"
      strokeWidth="2.4"
    />
    <path
      d="M40 16 H56 M48 16 V24"
      stroke="#6fc3e8"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M74 28 l6 -6"
      stroke="#6fc3e8"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M48 54 V36"
      stroke="#6fc3e8"
      strokeWidth="3.4"
      strokeLinecap="round"
    />
    <path
      d="M48 54 L62 62"
      stroke="#ffffff"
      strokeOpacity="0.85"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="48" cy="54" r="3.4" fill="#6fc3e8" />
    <path
      d="M48 26 V30 M48 78 V82 M18 54 H22 M74 54 H78"
      stroke="#6fc3e8"
      strokeOpacity="0.6"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M26 54 A22 22 0 0 1 48 32"
      stroke="#6fc3e8"
      strokeWidth="5"
      strokeLinecap="round"
      strokeOpacity="0.35"
    />
  </svg>
);

// White tile: a portal with a headset badge for ongoing support.
export const PpgSupportArt = () => (
  <svg {...props}>
    <rect
      x="8"
      y="12"
      width="64"
      height="50"
      rx="8"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="2.2"
    />
    <path
      d="M8 22 a8 8 0 0 1 8 -10 H64 a8 8 0 0 1 8 10 V26 H8 Z"
      fill="#046999"
    />
    <circle cx="17" cy="19" r="2" fill="#ffffff" />
    <circle cx="24" cy="19" r="2" fill="#ffffff" />
    <rect
      x="16"
      y="34"
      width="26"
      height="5"
      rx="2.5"
      fill="#046999"
      fillOpacity="0.55"
    />
    <rect x="16" y="44" width="40" height="4" rx="2" fill="#d4d6d9" />
    <rect x="16" y="52" width="30" height="4" rx="2" fill="#d4d6d9" />
    <circle
      cx="70"
      cy="68"
      r="20"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2.2"
    />
    <path
      d="M58 70 V66 a12 12 0 0 1 24 0 V70"
      stroke="#046999"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <rect x="55" y="66" width="6" height="10" rx="3" fill="#046999" />
    <rect x="79" y="66" width="6" height="10" rx="3" fill="#046999" />
    <path
      d="M82 76 C82 82 76 84 70 84"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle
      cx="68"
      cy="84"
      r="2.6"
      fill="#6fc3e8"
      stroke="#046999"
      strokeWidth="1.2"
    />
  </svg>
);

// Dark mid tile: a presenter at a screen with a small audience.
export const PpgTrainingArt = () => (
  <svg {...props}>
    <rect
      x="8"
      y="10"
      width="80"
      height="48"
      rx="7"
      fill="#ffffff"
      fillOpacity="0.08"
      stroke="#6fc3e8"
      strokeWidth="2.2"
    />
    <rect x="18" y="20" width="30" height="6" rx="3" fill="#6fc3e8" />
    <path
      d="M18 34 H48 M18 42 H40"
      stroke="#ffffff"
      strokeOpacity="0.55"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <rect
      x="56"
      y="20"
      width="24"
      height="28"
      rx="4"
      fill="#6fc3e8"
      fillOpacity="0.2"
      stroke="#6fc3e8"
      strokeWidth="1.4"
      strokeDasharray="3 2.5"
    />
    <path
      d="M60 42 V36 M66 42 V30 M72 42 V34"
      stroke="#6fc3e8"
      strokeWidth="3.4"
      strokeLinecap="round"
    />
    <path
      d="M36 58 L30 70 M60 58 L66 70 M26 70 H70"
      stroke="#6fc3e8"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <circle cx="28" cy="84" r="5" fill="#6fc3e8" fillOpacity="0.9" />
    <path d="M19 94 a9 8 0 0 1 18 0 Z" fill="#6fc3e8" fillOpacity="0.9" />
    <circle cx="48" cy="84" r="5" fill="#ffffff" fillOpacity="0.8" />
    <path d="M39 94 a9 8 0 0 1 18 0 Z" fill="#ffffff" fillOpacity="0.8" />
    <circle cx="68" cy="84" r="5" fill="#6fc3e8" fillOpacity="0.9" />
    <path d="M59 94 a9 8 0 0 1 18 0 Z" fill="#6fc3e8" fillOpacity="0.9" />
  </svg>
);
