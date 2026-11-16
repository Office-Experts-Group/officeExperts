// /app/services/microsoft-power-platform/ai-with-power-platform/(svgs)/AippProcessArt.jsx
// Decorative step icons for the process track. Drawn for a dark section.
// Colours (hex, with matching globals.scss tokens):
//   #1a2a3a $dark-mid · #6fc3e8 $accent-on-dark · #046999 $accent
//   #ffffff $white

const Plate = ({ children }) => (
  <svg viewBox="0 0 72 72" aria-hidden="true" focusable="false">
    <circle
      cx="36"
      cy="36"
      r="34"
      fill="#1a2a3a"
      stroke="#6fc3e8"
      strokeOpacity="0.7"
      strokeWidth="1.5"
    />
    {children}
  </svg>
);

export const AippDiscoveryArt = () => (
  <Plate>
    <circle cx="26" cy="28" r="4" fill="#6fc3e8" />
    <circle cx="48" cy="24" r="4" fill="#6fc3e8" fillOpacity="0.6" />
    <circle cx="44" cy="46" r="4" fill="#6fc3e8" fillOpacity="0.6" />
    <path
      d="M30 28l14-3M28 31l14 13"
      stroke="#6fc3e8"
      strokeOpacity="0.6"
      strokeWidth="1.6"
    />
    <circle
      cx="33"
      cy="38"
      r="11"
      fill="#1a2a3a"
      stroke="#ffffff"
      strokeWidth="2.4"
    />
    <path
      d="M41 46l9 9"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </Plate>
);

export const AippArchitectureArt = () => (
  <Plate>
    <rect
      x="18"
      y="18"
      width="16"
      height="12"
      rx="3"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <rect
      x="40"
      y="18"
      width="14"
      height="12"
      rx="3"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <rect
      x="18"
      y="42"
      width="16"
      height="12"
      rx="3"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
    />
    <path
      d="M34 24h6M26 30v12M47 30v6"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M47 36l9 3v7c0 5-4 8-9 10c-5-2-9-5-9-10v-7z"
      fill="#046999"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </Plate>
);

export const AippBuildArt = () => (
  <Plate>
    <rect
      x="18"
      y="38"
      width="16"
      height="14"
      rx="3"
      fill="#046999"
      stroke="#6fc3e8"
      strokeWidth="1.8"
    />
    <rect
      x="38"
      y="38"
      width="16"
      height="14"
      rx="3"
      fill="#046999"
      fillOpacity="0.55"
      stroke="#6fc3e8"
      strokeWidth="1.8"
    />
    <rect
      x="28"
      y="22"
      width="16"
      height="14"
      rx="3"
      fill="#046999"
      fillOpacity="0.8"
      stroke="#6fc3e8"
      strokeWidth="1.8"
    />
    <path d="M50 18l4 4l-6 6l-4-4z" fill="#ffffff" />
    <path
      d="M44 24l-5 5"
      stroke="#ffffff"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </Plate>
);

export const AippTestingArt = () => (
  <Plate>
    <path
      d="M18 36h14M32 36c6 0 6-12 14-12M32 36c6 0 6 12 14 12"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="18" cy="36" r="3.5" fill="#6fc3e8" />
    <circle
      cx="48"
      cy="24"
      r="7"
      fill="#046999"
      stroke="#ffffff"
      strokeWidth="1.8"
    />
    <path
      d="M44.5 24l2.5 2.5l4.5-5"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="48"
      cy="48"
      r="7"
      fill="#1a2a3a"
      stroke="#ffffff"
      strokeWidth="1.8"
      strokeDasharray="3 2"
    />
    <path
      d="M48 44v5M48 51.5v.5"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Plate>
);

export const AippHandoverArt = () => (
  <Plate>
    <path
      d="M18 22h18a4 4 0 0 1 4 4v26a3 3 0 0 0-3-3H18z"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M54 22H40a4 4 0 0 0-4 4v26a3 3 0 0 1 3-3h15z"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M23 30h10M23 36h8M45 30h4M45 36h6"
      stroke="#ffffff"
      strokeOpacity="0.7"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle
      cx="46"
      cy="52"
      r="6"
      fill="#046999"
      stroke="#ffffff"
      strokeWidth="1.8"
    />
    <path
      d="M43 52l2.2 2.2L49 50"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Plate>
);
