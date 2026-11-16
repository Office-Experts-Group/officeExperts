// /app/services/microsoft-power-platform/microsoft-power-pages/(svgs)/PpgComparisonArt.jsx
// Small criterion icons for the comparison panels (stroke uses currentColor,
// so the SCSS sets $white on the accent panel and $accent on the light panel),
// plus a balance illustration for the trade-off band.
// Balance hex values and tokens: #6fc3e8 $accent-on-dark, #046999 $accent,
// #111820 $dark-bg, #ffffff $white.

const icon = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

export const CRITERIA_ICONS = {
  // Power Pages side
  ecosystem: (
    <svg {...icon}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="8.5" y="14" width="7" height="7" rx="1.5" />
      <path d="M10 6.5h4M6.5 10v2.5l2 1.5M17.5 10v2.5l-2 1.5" />
    </svg>
  ),
  weeks: (
    <svg {...icon}>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
      <path d="M8 14.5h3M8 17h6" />
    </svg>
  ),
  selfManage: (
    <svg {...icon}>
      <path d="M4 7h10M18 7h2M4 17h2M10 17h10" />
      <circle cx="16" cy="7" r="2.2" />
      <circle cx="8" cy="17" r="2.2" />
    </svg>
  ),
  patterns: (
    <svg {...icon}>
      <rect x="4" y="3" width="12" height="15" rx="2" />
      <path d="M7 8h6M7 11.5h4" />
      <rect x="12" y="13" width="8" height="8" rx="1.5" fill="none" />
      <path d="M14.5 13v-1.5a1.5 1.5 0 0 1 3 0V13" />
    </svg>
  ),
  support: (
    <svg {...icon}>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9.5 12l2 2 3.5-4" />
    </svg>
  ),
  // Custom build side
  beyond: (
    <svg {...icon}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
      <path d="M18.5 16l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />
    </svg>
  ),
  control: (
    <svg {...icon}>
      <path d="M4 15a8 8 0 1 1 16 0" />
      <path d="M12 15l4-5" />
      <circle cx="12" cy="15" r="1.4" />
      <path d="M6 19h12" />
    </svg>
  ),
  notTied: (
    <svg {...icon}>
      <path d="M9.5 14.5l-2 2a3.2 3.2 0 0 1-4.5-4.5l2-2" />
      <path d="M14.5 9.5l2-2A3.2 3.2 0 0 1 21 12l-2 2" />
      <path d="M9 15l2-2M13 11l2-2" />
    </svg>
  ),
  scale: (
    <svg {...icon}>
      <path d="M7 18a4.5 4.5 0 0 1-.5-9A6 6 0 0 1 18 10a4 4 0 0 1-.5 8z" />
      <path d="M12 12v6M9.5 14.5L12 12l2.5 2.5" />
    </svg>
  ),
  content: (
    <svg {...icon}>
      <rect x="4" y="3" width="13" height="18" rx="2" />
      <path d="M7.5 8h6M7.5 11.5h6M7.5 15h3" />
      <path d="M20 9l-5 5-1 3 3-1 5-5z" />
    </svg>
  ),
};

// Decorative balance for the trade-off band (dark background).
export const PpgBalanceArt = () => (
  <svg
    viewBox="0 0 280 170"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M140 150 V30"
      stroke="#6fc3e8"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M110 154 H170"
      stroke="#6fc3e8"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle
      cx="140"
      cy="26"
      r="8"
      fill="#046999"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <path
      d="M44 40 L236 50"
      stroke="#6fc3e8"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* Left pan: quick to stand up */}
    <path
      d="M44 40 L22 100 M44 40 L66 100"
      stroke="#6fc3e8"
      strokeOpacity="0.7"
      strokeWidth="1.6"
    />
    <path
      d="M14 100 H74 C74 114 60 120 44 120 C28 120 14 114 14 100 Z"
      fill="#ffffff"
      fillOpacity="0.08"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <rect
      x="28"
      y="72"
      width="32"
      height="26"
      rx="4"
      fill="#ffffff"
      fillOpacity="0.12"
      stroke="#ffffff"
      strokeOpacity="0.8"
      strokeWidth="1.6"
    />
    <path
      d="M28 81 H60 M37 72 V68 M51 72 V68"
      stroke="#ffffff"
      strokeOpacity="0.8"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <rect x="34" y="86" width="8" height="6" rx="1" fill="#6fc3e8" />
    {/* Right pan: you own the result */}
    <path
      d="M236 50 L214 110 M236 50 L258 110"
      stroke="#6fc3e8"
      strokeOpacity="0.7"
      strokeWidth="1.6"
    />
    <path
      d="M206 110 H266 C266 124 252 130 236 130 C220 130 206 124 206 110 Z"
      fill="#ffffff"
      fillOpacity="0.08"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <circle
      cx="226"
      cy="92"
      r="9"
      stroke="#ffffff"
      strokeOpacity="0.8"
      strokeWidth="2"
    />
    <path
      d="M233 98 L250 114 M243 108 l5 -5 M247 112 l5 -5"
      stroke="#ffffff"
      strokeOpacity="0.8"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="226" cy="92" r="2.4" fill="#6fc3e8" />
  </svg>
);
