// /app/services/microsoft-power-platform/ai-with-power-platform/(svgs)/AippRouteArt.jsx
// Decorative icons for the "which AI service fits" table rows.
// Colours (hex, with matching globals.scss tokens):
//   #046999 $accent · #e8f4fa $accent-light · #ffffff $white · #0d1b2a $text-primary

const Plate = ({ children }) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
    <rect x="1" y="1" width="62" height="62" rx="16" fill="#e8f4fa" />
    {children}
  </svg>
);

export const AippCopilotRouteArt = () => (
  <Plate>
    <rect
      x="14"
      y="16"
      width="36"
      height="32"
      rx="8"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
    />
    <path
      d="M32 22C33 29 36 32 42 33C36 34 33 37 32 44C31 37 28 34 22 33C28 32 31 29 32 22Z"
      fill="#046999"
    />
    <path
      d="M22 48l-4 7l10-7"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </Plate>
);

export const AippPlatformRouteArt = () => (
  <Plate>
    <rect x="12" y="12" width="18" height="18" rx="5" fill="#046999" />
    <rect
      x="34"
      y="12"
      width="18"
      height="18"
      rx="5"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
    />
    <rect
      x="12"
      y="34"
      width="18"
      height="18"
      rx="5"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
    />
    <rect
      x="34"
      y="34"
      width="18"
      height="18"
      rx="5"
      fill="#046999"
      fillOpacity="0.55"
    />
    <path
      d="M21 15.5C21.4 19 23 20.6 26.5 21C23 21.4 21.4 23 21 26.5C20.6 23 19 21.4 15.5 21C19 20.6 20.6 19 21 15.5Z"
      fill="#ffffff"
    />
  </Plate>
);

export const AippCodeRouteArt = () => (
  <Plate>
    <rect
      x="11"
      y="14"
      width="42"
      height="36"
      rx="7"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
    />
    <path d="M11 24h42" stroke="#046999" strokeWidth="2" />
    <path
      d="M26 32l-6 6l6 6M38 32l6 6l-6 6"
      fill="none"
      stroke="#046999"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="17" cy="19" r="1.6" fill="#046999" />
    <circle cx="23" cy="19" r="1.6" fill="#046999" />
  </Plate>
);

export const AippInboxRouteArt = () => (
  <Plate>
    <rect
      x="11"
      y="16"
      width="42"
      height="22"
      rx="6"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
    />
    <path
      d="M14 20l18 12l18-12"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M32 40v5M32 45L20 50M32 45v6M32 45l12 5"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="19" cy="52" r="3" fill="#046999" />
    <circle cx="32" cy="55" r="3" fill="#046999" fillOpacity="0.6" />
    <circle cx="45" cy="52" r="3" fill="#046999" fillOpacity="0.35" />
  </Plate>
);
