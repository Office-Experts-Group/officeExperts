// /app/services/microsoft-power-platform/microsoft-power-apps/(svgs)/PappsWhyArt.jsx
// Spot illustrations for the three ways to work with us. Decorative, one per
// card, drawn for the card colour (white, accent, dark).
// Hex values and the tokens they match:
//   #046999 $accent, #6fc3e8 $accent-on-dark, #e8f4fa $accent-light,
//   #111820 $dark-bg, #18232e $dark-surface, #1a2a3a $dark-mid,
//   #0d1b2a $text-primary, #9a9da1 $text-muted, #d4d6d9 $line-strong, #ffffff $white

const frame = {
  viewBox: "0 0 120 90",
  width: "100%",
  height: "auto",
  "aria-hidden": "true",
  focusable: "false",
};

// White card: sketch of a screen turning into a phone app.
export const PappsBuildArt = () => (
  <svg {...frame}>
    <rect
      x="6"
      y="14"
      width="52"
      height="62"
      rx="6"
      fill="#ffffff"
      stroke="#9a9da1"
      strokeWidth="2"
      strokeDasharray="5 4"
    />
    <rect x="14" y="24" width="26" height="5" rx="2.5" fill="#d4d6d9" />
    <rect
      x="14"
      y="36"
      width="36"
      height="9"
      rx="3"
      fill="none"
      stroke="#d4d6d9"
      strokeWidth="1.8"
    />
    <rect
      x="14"
      y="50"
      width="36"
      height="9"
      rx="3"
      fill="none"
      stroke="#d4d6d9"
      strokeWidth="1.8"
    />
    <path
      d="M62 45 h14 m-5 -5 l5 5 l-5 5"
      fill="none"
      stroke="#046999"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="82" y="8" width="34" height="74" rx="8" fill="#0d1b2a" />
    <rect x="85" y="13" width="28" height="64" rx="5" fill="#ffffff" />
    <rect x="85" y="13" width="28" height="12" rx="5" fill="#046999" />
    <rect x="85" y="20" width="28" height="5" fill="#046999" />
    <rect x="89" y="31" width="20" height="5" rx="2.5" fill="#e8f4fa" />
    <rect x="89" y="40" width="20" height="5" rx="2.5" fill="#e8f4fa" />
    <rect x="89" y="62" width="20" height="10" rx="3" fill="#046999" />
  </svg>
);

// Accent card: an existing app with a spanner and a highlighted fix.
export const PappsImproveArt = () => (
  <svg {...frame}>
    <rect x="10" y="12" width="76" height="62" rx="8" fill="#ffffff" />
    <rect x="10" y="12" width="76" height="14" rx="8" fill="#e8f4fa" />
    <rect x="10" y="20" width="76" height="6" fill="#e8f4fa" />
    <rect x="18" y="33" width="32" height="6" rx="3" fill="#d4d6d9" />
    <rect
      x="18"
      y="45"
      width="52"
      height="8"
      rx="3"
      fill="#ffffff"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <rect x="18" y="58" width="24" height="8" rx="3" fill="#046999" />
    <g transform="translate(90 44) rotate(40)">
      <rect x="-4" y="-6" width="8" height="40" rx="4" fill="#6fc3e8" />
      <circle cx="0" cy="-8" r="11" fill="#6fc3e8" />
      <rect x="-4.5" y="-24" width="9" height="14" fill="#046999" />
    </g>
    <path
      d="M100 14 l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 l6 -2 z"
      fill="#ffffff"
    />
  </svg>
);

// Dark card: a training session with a screen, a chat bubble and a person.
export const PappsSupportArt = () => (
  <svg {...frame}>
    <rect
      x="8"
      y="10"
      width="74"
      height="50"
      rx="7"
      fill="#1a2a3a"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <rect x="16" y="18" width="30" height="5" rx="2.5" fill="#6fc3e8" />
    <rect
      x="16"
      y="29"
      width="58"
      height="22"
      rx="4"
      fill="#ffffff"
      fillOpacity="0.14"
    />
    <circle cx="45" cy="40" r="8" fill="#046999" />
    <path d="M42.5 36 l7 4 l-7 4 z" fill="#ffffff" />
    <rect x="34" y="60" width="18" height="6" fill="#1a2a3a" />
    <rect x="24" y="66" width="38" height="5" rx="2.5" fill="#1a2a3a" />
    <circle cx="98" cy="32" r="10" fill="#6fc3e8" />
    <path d="M82 66 q16 -22 32 0 z" fill="#6fc3e8" />
    <path
      d="M84 6 h26 a6 6 0 0 1 6 6 v8 a6 6 0 0 1 -6 6 h-12 l-8 7 v-7 h-6 a6 6 0 0 1 -6 -6 v-8 a6 6 0 0 1 6 -6 z"
      fill="#046999"
      transform="translate(-2 -4) scale(0.9)"
    />
  </svg>
);
