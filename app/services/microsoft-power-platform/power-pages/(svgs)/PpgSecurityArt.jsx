// /app/services/microsoft-power-platform/microsoft-power-pages/(svgs)/PpgSecurityArt.jsx
// Spot illustrations for the four security cards (dark surface tiles).
// Hex values and tokens: #6fc3e8 $accent-on-dark, #046999 $accent,
// #18232e $dark-surface, #111820 $dark-bg, #ffffff $white.

const props = {
  viewBox: "0 0 72 72",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
};

export const PpgAuthArt = () => (
  <svg {...props}>
    <path
      d="M32 6 L54 14 V32 C54 46 44 56 32 62 C20 56 10 46 10 32 V14 Z"
      fill="#ffffff"
      fillOpacity="0.07"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="26" cy="30" r="7" stroke="#6fc3e8" strokeWidth="2.5" />
    <path
      d="M32 33 L46 47 M40 41 l4 -4 M44 45 l4 -4"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="26" cy="30" r="2" fill="#6fc3e8" />
    <circle cx="58" cy="52" r="10" fill="#046999" />
    <path
      d="M53 52 l3.5 3.5 6 -7"
      stroke="#ffffff"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PpgRolesSecurityArt = () => (
  <svg {...props}>
    <rect
      x="8"
      y="10"
      width="32"
      height="44"
      rx="6"
      fill="#ffffff"
      fillOpacity="0.07"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <circle cx="24" cy="26" r="6" fill="#6fc3e8" />
    <path d="M14 44 a10 8 0 0 1 20 0 Z" fill="#6fc3e8" />
    <rect x="30" y="16" width="34" height="12" rx="6" fill="#6fc3e8" />
    <circle cx="37" cy="22" r="2.5" fill="#111820" />
    <rect
      x="30"
      y="34"
      width="34"
      height="12"
      rx="6"
      stroke="#6fc3e8"
      strokeWidth="1.8"
    />
    <circle cx="37" cy="40" r="2.5" fill="#6fc3e8" />
    <rect
      x="30"
      y="52"
      width="34"
      height="12"
      rx="6"
      stroke="#6fc3e8"
      strokeOpacity="0.5"
      strokeWidth="1.8"
      strokeDasharray="3 3"
    />
  </svg>
);

export const PpgTableArt = () => (
  <svg {...props}>
    <rect
      x="8"
      y="12"
      width="48"
      height="44"
      rx="6"
      fill="#ffffff"
      fillOpacity="0.07"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <path
      d="M8 26 H56 M8 38 H56 M28 12 V56"
      stroke="#6fc3e8"
      strokeOpacity="0.6"
      strokeWidth="1.5"
    />
    <rect
      x="9"
      y="27"
      width="46"
      height="10"
      fill="#6fc3e8"
      fillOpacity="0.5"
    />
    <rect x="14" y="17" width="10" height="4" rx="2" fill="#6fc3e8" />
    <rect x="34" y="17" width="14" height="4" rx="2" fill="#6fc3e8" />
    <circle cx="56" cy="52" r="11" fill="#046999" />
    <path
      d="M51 52 H61 M56 47 V57"
      stroke="#ffffff"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

export const PpgColumnArt = () => (
  <svg {...props}>
    <rect
      x="8"
      y="12"
      width="48"
      height="44"
      rx="6"
      fill="#ffffff"
      fillOpacity="0.07"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <path
      d="M8 26 H56 M8 38 H56"
      stroke="#6fc3e8"
      strokeOpacity="0.6"
      strokeWidth="1.5"
    />
    <rect x="34" y="13" width="21" height="42" fill="#111820" />
    <path
      d="M38 20 H51 M38 32 H51 M38 46 H51"
      stroke="#6fc3e8"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="2 5"
    />
    <rect x="13" y="18" width="14" height="4" rx="2" fill="#6fc3e8" />
    <rect
      x="13"
      y="30"
      width="12"
      height="4"
      rx="2"
      fill="#6fc3e8"
      fillOpacity="0.6"
    />
    <rect
      x="13"
      y="44"
      width="14"
      height="4"
      rx="2"
      fill="#6fc3e8"
      fillOpacity="0.6"
    />
    <circle cx="56" cy="54" r="11" fill="#046999" />
    <path
      d="M49 54 q7 -8 14 0 q-7 8 -14 0 Z M50 60 L62 48"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
