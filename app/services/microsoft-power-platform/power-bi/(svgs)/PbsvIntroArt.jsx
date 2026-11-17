// /app/services/microsoft-power-platform/power-bi/(svgs)/PbsvIntroArt.jsx
// Spot illustrations for the four intro cards (light cards).
// Hex values and the tokens they match:
//   #ffffff $white · #e8f4fa $accent-light · #046999 $accent · #034e72 $accent-dark
//   #6fc3e8 $accent-on-dark · #c6e3f1 (tint of $accent) · #0d1b2a $text-primary
//   #d4d6d9 $line-strong · #e3e8ec $line

const SVG_PROPS = {
  viewBox: "0 0 96 96",
  "aria-hidden": "true",
  focusable: "false",
};

export function PbsvConsultantArt() {
  return (
    <svg {...SVG_PROPS}>
      <circle cx="48" cy="48" r="44" fill="#e8f4fa" />
      <circle
        cx="36"
        cy="38"
        r="10"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="2.5"
      />
      <path d="M16 78c0-14 9-22 20-22s20 8 20 22z" fill="#046999" />
      <path
        d="M31 62l5 6 5-6"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect
        x="52"
        y="22"
        width="32"
        height="26"
        rx="5"
        fill="#ffffff"
        stroke="#034e72"
        strokeWidth="2"
      />
      <rect x="58" y="36" width="5" height="8" rx="1" fill="#6fc3e8" />
      <rect x="66" y="31" width="5" height="13" rx="1" fill="#046999" />
      <rect x="74" y="27" width="5" height="17" rx="1" fill="#034e72" />
      <circle
        cx="74"
        cy="70"
        r="11"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="2.5"
      />
      <path
        d="M68.500 70.500l4 4 7-8"
        fill="none"
        stroke="#046999"
        strokeWidth="2.600"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PbsvCollabArt() {
  return (
    <svg {...SVG_PROPS}>
      <circle cx="48" cy="48" r="44" fill="#e8f4fa" />
      <rect
        x="14"
        y="26"
        width="52"
        height="42"
        rx="7"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="2.500"
      />
      <rect x="21" y="52" width="6" height="10" rx="1.500" fill="#6fc3e8" />
      <rect x="31" y="44" width="6" height="18" rx="1.500" fill="#046999" />
      <rect x="41" y="48" width="6" height="14" rx="1.500" fill="#6fc3e8" />
      <path
        d="M52 56l4-8 4 5 3-9"
        fill="none"
        stroke="#034e72"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="70"
        cy="22"
        r="8"
        fill="#6fc3e8"
        stroke="#ffffff"
        strokeWidth="2.500"
      />
      <circle
        cx="82"
        cy="34"
        r="8"
        fill="#034e72"
        stroke="#ffffff"
        strokeWidth="2.500"
      />
      <path
        d="M52 66h26a6 6 0 0 1 6 6v2a6 6 0 0 1-6 6H66l-8 6v-6h-6a6 6 0 0 1-6-6v-2a6 6 0 0 1 6-6z"
        fill="#046999"
      />
      <circle cx="58" cy="73" r="2" fill="#ffffff" />
      <circle cx="66" cy="73" r="2" fill="#ffffff" />
      <circle cx="74" cy="73" r="2" fill="#ffffff" />
    </svg>
  );
}

export function PbsvLiveArt() {
  return (
    <svg {...SVG_PROPS}>
      <circle cx="48" cy="48" r="44" fill="#e8f4fa" />
      <path
        d="M18 54a30 30 0 0 1 60 0"
        fill="none"
        stroke="#ffffff"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M18 54a30 30 0 0 1 44-26"
        fill="none"
        stroke="#046999"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M48 54l12-17"
        stroke="#0d1b2a"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="48" cy="54" r="5" fill="#0d1b2a" />
      <path
        d="M14 72h14l5-8 7 14 6-10 4 4h30"
        fill="none"
        stroke="#034e72"
        strokeWidth="2.500"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="82" cy="76" r="5" fill="#0eaa0e" />
      <circle cx="82" cy="76" r="9" fill="#0eaa0e" opacity="0.2" />
    </svg>
  );
}

export function PbsvDrillArt() {
  return (
    <svg {...SVG_PROPS}>
      <circle cx="48" cy="48" r="44" fill="#e8f4fa" />
      <rect x="14" y="52" width="12" height="22" rx="2" fill="#c6e3f1" />
      <rect x="30" y="38" width="12" height="36" rx="2" fill="#046999" />
      <rect x="46" y="46" width="12" height="28" rx="2" fill="#c6e3f1" />
      <rect x="62" y="30" width="12" height="44" rx="2" fill="#c6e3f1" />
      <line x1="12" y1="74" x2="78" y2="74" stroke="#d4d6d9" strokeWidth="2" />
      <circle
        cx="56"
        cy="40"
        r="17"
        fill="#ffffff"
        fillOpacity="0.92"
        stroke="#034e72"
        strokeWidth="3.500"
      />
      <rect x="47" y="44" width="5" height="8" rx="1" fill="#6fc3e8" />
      <rect x="54" y="36" width="5" height="16" rx="1" fill="#046999" />
      <rect x="61" y="41" width="5" height="11" rx="1" fill="#6fc3e8" />
      <path
        d="M68 52l13 13"
        stroke="#034e72"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
