// /app/services/microsoft-power-platform/microsoft-power-pages/(svgs)/PpgAiArt.jsx
// Spot illustrations for the three Copilot feature rows. Design and Bot sit
// on white tiles, Forms sits on the dark tile.
// Hex values and tokens: #046999 $accent, #e8f4fa $accent-light,
// #6fc3e8 $accent-on-dark, #034e72 $accent-dark, #d4d6d9 $line-strong,
// #111820 $dark-bg, #ffffff $white.

const props = {
  viewBox: "0 0 96 96",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
};

const Sparkle = ({ x, y, s = 1, fill }) => (
  <path
    d={`M${x} ${y - 9 * s} L${x + 2.6 * s} ${y - 2.6 * s} L${x + 9 * s} ${y} L${x + 2.6 * s} ${y + 2.6 * s} L${x} ${y + 9 * s} L${x - 2.6 * s} ${y + 2.6 * s} L${x - 9 * s} ${y} L${x - 2.6 * s} ${y - 2.6 * s} Z`}
    fill={fill}
  />
);

// White tile: a page layout sketch with a pencil and a sparkle.
export const PpgDesignArt = () => (
  <svg {...props}>
    <rect
      x="8"
      y="14"
      width="64"
      height="50"
      rx="7"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
    />
    <path
      d="M8 22 a7 7 0 0 1 7 -8 H65 a7 7 0 0 1 7 8 V28 H8 Z"
      fill="#e8f4fa"
    />
    <circle cx="17" cy="21" r="2" fill="#046999" />
    <circle cx="24" cy="21" r="2" fill="#046999" fillOpacity="0.5" />
    <rect
      x="16"
      y="35"
      width="26"
      height="22"
      rx="4"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.4"
      strokeDasharray="3 2.5"
    />
    <rect x="48" y="35" width="16" height="5" rx="2.5" fill="#d4d6d9" />
    <rect x="48" y="44" width="12" height="4" rx="2" fill="#d4d6d9" />
    <rect
      x="48"
      y="52"
      width="16"
      height="5"
      rx="2.5"
      fill="#046999"
      fillOpacity="0.5"
    />
    <path d="M56 84 L50 72 L74 48 L86 60 Z" fill="#046999" />
    <path
      d="M74 48 L86 60 L90 56 a3 3 0 0 0 0 -4 L82 44 a3 3 0 0 0 -4 0 Z"
      fill="#6fc3e8"
    />
    <path d="M50 72 L46 88 L56 84 Z" fill="#034e72" />
    <Sparkle x={78} y={22} s={1.2} fill="#6fc3e8" />
    <Sparkle x={88} y={34} s={0.7} fill="#046999" />
  </svg>
);

// Dark tile: a form being filled in with generated fields and a sparkle.
export const PpgFormsAiArt = () => (
  <svg {...props}>
    <rect
      x="10"
      y="8"
      width="52"
      height="72"
      rx="8"
      fill="#ffffff"
      fillOpacity="0.08"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <rect
      x="18"
      y="18"
      width="36"
      height="9"
      rx="4.5"
      fill="#6fc3e8"
      fillOpacity="0.28"
      stroke="#6fc3e8"
      strokeWidth="1.2"
    />
    <rect
      x="18"
      y="33"
      width="36"
      height="9"
      rx="4.5"
      fill="#6fc3e8"
      fillOpacity="0.28"
      stroke="#6fc3e8"
      strokeWidth="1.2"
    />
    <rect
      x="18"
      y="48"
      width="22"
      height="9"
      rx="4.5"
      fill="#6fc3e8"
      fillOpacity="0.28"
      stroke="#6fc3e8"
      strokeWidth="1.2"
      strokeDasharray="3 2.5"
    />
    <rect x="18" y="64" width="26" height="10" rx="5" fill="#6fc3e8" />
    <path
      d="M64 50 H72"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="68"
      y="56"
      width="26"
      height="30"
      rx="4"
      fill="#ffffff"
      fillOpacity="0.08"
      stroke="#6fc3e8"
      strokeWidth="1.6"
    />
    <path
      d="M68 66 H94 M68 76 H94 M77 56 V86"
      stroke="#6fc3e8"
      strokeOpacity="0.7"
      strokeWidth="1.2"
    />
    <Sparkle x={74} y={24} s={1.5} fill="#6fc3e8" />
    <Sparkle x={88} y={38} s={0.8} fill="#ffffff" />
  </svg>
);

// White tile: a chat window with a bot badge.
export const PpgBotArt = () => (
  <svg {...props}>
    <rect
      x="8"
      y="12"
      width="64"
      height="46"
      rx="10"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
    />
    <path
      d="M22 58 L16 72 L34 58 Z"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M20 59 H34" stroke="#ffffff" strokeWidth="3" />
    <rect x="18" y="22" width="30" height="8" rx="4" fill="#e8f4fa" />
    <rect x="30" y="35" width="34" height="8" rx="4" fill="#046999" />
    <rect x="18" y="47" width="20" height="5" rx="2.5" fill="#d4d6d9" />
    <circle cx="68" cy="68" r="22" fill="#046999" />
    <rect x="55" y="58" width="26" height="18" rx="6" fill="#ffffff" />
    <circle cx="63" cy="67" r="3" fill="#046999" />
    <circle cx="73" cy="67" r="3" fill="#046999" />
    <path
      d="M62 72 H74"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M68 58 V52"
      stroke="#ffffff"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <circle cx="68" cy="50" r="3" fill="#6fc3e8" />
  </svg>
);
