// /app/services/microsoft-power-platform/microsoft-power-bi/(svgs)/PbsvFreshArt.jsx
// Row icons for the "how fresh does your data need to be" table (light section).
// Hex values and the tokens they match:
//   #ffffff $white · #e8f4fa $accent-light · #046999 $accent · #034e72 $accent-dark
//   #6fc3e8 $accent-on-dark · #c6e3f1 (tint of $accent) · #0d1b2a $text-primary

const SVG_PROPS = {
  viewBox: "0 0 64 64",
  "aria-hidden": "true",
  focusable: "false",
};

export function PbsvScheduleArt() {
  return (
    <svg {...SVG_PROPS}>
      <rect width="64" height="64" rx="16" fill="#e8f4fa" />
      <circle
        cx="32"
        cy="32"
        r="13"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="3"
      />
      <path
        d="M32 24v8l6 4"
        fill="none"
        stroke="#0d1b2a"
        strokeWidth="2.500"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 28a20 20 0 0 1 34-9"
        fill="none"
        stroke="#034e72"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M48 11v9h-9"
        fill="none"
        stroke="#034e72"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51 36a20 20 0 0 1-34 9"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M16 53v-9h9"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PbsvConnectArt() {
  return (
    <svg {...SVG_PROPS}>
      <rect width="64" height="64" rx="16" fill="#e8f4fa" />
      <ellipse cx="20" cy="18" rx="11" ry="4.500" fill="#046999" />
      <path
        d="M9 18v22c0 2.500 5 4.500 11 4.500s11-2 11-4.500V18"
        fill="#c6e3f1"
        stroke="#046999"
        strokeWidth="2"
      />
      <path
        d="M9 29c0 2.500 5 4.500 11 4.500s11-2 11-4.500"
        fill="none"
        stroke="#046999"
        strokeWidth="2"
      />
      <path
        d="M31 31h8"
        stroke="#034e72"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="39" y="24" width="12" height="14" rx="3" fill="#034e72" />
      <path
        d="M51 28h5M51 34h5"
        stroke="#034e72"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="48" cy="50" r="3" fill="#0eaa0e" />
    </svg>
  );
}

export function PbsvStreamArt() {
  return (
    <svg {...SVG_PROPS}>
      <rect width="64" height="64" rx="16" fill="#e8f4fa" />
      <polygon points="35,10 21,35 30,35 27,54 43,28 33,28" fill="#046999" />
      <path
        d="M11 24a14 14 0 0 0 0 16"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M5 20a21 21 0 0 0 0 24"
        fill="none"
        stroke="#c6e3f1"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M53 24a14 14 0 0 1 0 16"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M59 20a21 21 0 0 1 0 24"
        fill="none"
        stroke="#c6e3f1"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
