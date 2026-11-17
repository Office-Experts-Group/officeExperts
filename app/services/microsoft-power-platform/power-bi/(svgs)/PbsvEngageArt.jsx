// /app/services/microsoft-power-platform/power-bi/(svgs)/PbsvEngageArt.jsx
// Spot illustrations for the three ways to work with us. Drawn per tile tone:
// "accent" ($accent tile), "dark" ($dark-bg tile), "light" ($accent-light tile).
// Hex values and the tokens they match:
//   accent: #034e72 $accent-dark · #ffffff $white · #6fc3e8 $accent-on-dark
//           #5fa3c0 (line on accent) · #6fa9c4 (muted on accent)
//   dark:   #18232e $dark-surface · #33475b (line on dark) · #6fc3e8 · #046999
//           #3d5268 (muted on dark) · #ffffff
//   light:  #ffffff $white · #d4d6d9 $line-strong · #046999 $accent
//           #6fc3e8 · #c6e3f1 (tint of $accent) · #0d1b2a $text-primary

const SVG_PROPS = {
  viewBox: "0 0 160 120",
  "aria-hidden": "true",
  focusable: "false",
};

export function PbsvFixedQuoteArt() {
  return (
    <svg {...SVG_PROPS}>
      <rect
        x="30"
        y="10"
        width="76"
        height="98"
        rx="8"
        fill="#034e72"
        stroke="#5fa3c0"
        strokeWidth="1.500"
      />
      <rect x="42" y="24" width="36" height="6" rx="3" fill="#ffffff" />
      <rect x="42" y="38" width="52" height="4" rx="2" fill="#6fa9c4" />
      <rect x="42" y="48" width="44" height="4" rx="2" fill="#6fa9c4" />
      <rect x="42" y="58" width="48" height="4" rx="2" fill="#6fa9c4" />
      <path d="M42 84h52" stroke="#5fa3c0" strokeDasharray="3 4" />
      <rect x="42" y="90" width="30" height="8" rx="4" fill="#6fc3e8" />
      <circle cx="116" cy="40" r="24" fill="#ffffff" />
      <path
        d="M104 40l9 9 16-18"
        fill="none"
        stroke="#046999"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M126 82l16 8-16 8-12-8z" fill="#6fc3e8" />
      <circle cx="124" cy="90" r="2.500" fill="#034e72" />
    </svg>
  );
}

export function PbsvHourlyArt() {
  return (
    <svg {...SVG_PROPS}>
      <circle
        cx="58"
        cy="60"
        r="44"
        fill="#18232e"
        stroke="#33475b"
        strokeWidth="2"
      />
      <circle
        cx="58"
        cy="60"
        r="36"
        fill="none"
        stroke="#3d5268"
        strokeWidth="2"
        strokeDasharray="2 8"
      />
      <path
        d="M58 34v26l18 12"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="58" cy="60" r="5" fill="#ffffff" />
      <rect x="108" y="64" width="12" height="30" rx="3" fill="#046999" />
      <rect x="124" y="46" width="12" height="48" rx="3" fill="#6fc3e8" />
      <rect x="140" y="56" width="12" height="38" rx="3" fill="#046999" />
      <line
        x1="104"
        y1="94"
        x2="156"
        y2="94"
        stroke="#33475b"
        strokeWidth="2"
      />
      <path
        d="M110 40h40"
        stroke="#3d5268"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 7"
      />
    </svg>
  );
}

export function PbsvTrainingSupportArt() {
  return (
    <svg {...SVG_PROPS}>
      <rect
        x="12"
        y="12"
        width="96"
        height="62"
        rx="8"
        fill="#ffffff"
        stroke="#d4d6d9"
        strokeWidth="1.500"
      />
      <rect x="24" y="44" width="12" height="22" rx="2" fill="#6fc3e8" />
      <rect x="42" y="32" width="12" height="34" rx="2" fill="#046999" />
      <rect x="60" y="38" width="12" height="28" rx="2" fill="#6fc3e8" />
      <path
        d="M78 54l8-12 8 6 8-14"
        fill="none"
        stroke="#0d1b2a"
        strokeWidth="2.500"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="34" cy="96" r="8" fill="#046999" />
      <path d="M20 118c0-10 6-16 14-16s14 6 14 16z" fill="#046999" />
      <circle cx="74" cy="96" r="8" fill="#6fc3e8" />
      <path d="M60 118c0-10 6-16 14-16s14 6 14 16z" fill="#6fc3e8" />
      <path
        d="M124 70h22a8 8 0 0 1 8 8v8a8 8 0 0 1-8 8h-10l-10 8v-8h-2a8 8 0 0 1-8-8v-8a8 8 0 0 1 8-8z"
        fill="#046999"
      />
      <circle cx="128" cy="82" r="2.500" fill="#ffffff" />
      <circle cx="136" cy="82" r="2.500" fill="#ffffff" />
      <circle cx="144" cy="82" r="2.500" fill="#ffffff" />
    </svg>
  );
}
