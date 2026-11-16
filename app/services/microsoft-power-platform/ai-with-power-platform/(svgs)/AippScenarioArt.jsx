// /app/services/microsoft-power-platform/ai-with-power-platform/(svgs)/AippScenarioArt.jsx
// Decorative spot icons for the five scenarios. Drawn for a white section.
// Colours (hex, with matching globals.scss tokens):
//   #046999 $accent · #e8f4fa $accent-light · #ffffff $white
//   #0d1b2a $text-primary · #034e72 $accent-dark

const Frame = ({ children }) => (
  <svg viewBox="0 0 96 96" aria-hidden="true" focusable="false">
    <rect x="2" y="2" width="92" height="92" rx="22" fill="#e8f4fa" />
    {children}
  </svg>
);

export const AippKnowledgeIcon = () => (
  <Frame>
    <path
      d="M26 20h28l12 12v40a4 4 0 0 1-4 4H26a4 4 0 0 1-4-4V24a4 4 0 0 1 4-4z"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M54 20v12h12"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <rect
      x="30"
      y="42"
      width="30"
      height="4"
      rx="2"
      fill="#0d1b2a"
      fillOpacity="0.4"
    />
    <rect
      x="30"
      y="52"
      width="22"
      height="4"
      rx="2"
      fill="#0d1b2a"
      fillOpacity="0.4"
    />
    <circle cx="58" cy="60" r="11" fill="#046999" />
    <path
      d="M58 53C58.6 57.4 60.6 59.4 65 60C60.6 60.6 58.6 62.6 58 67C57.4 62.6 55.4 60.6 51 60C55.4 59.4 57.4 57.4 58 53Z"
      fill="#ffffff"
    />
  </Frame>
);

export const AippApprovalsIcon = () => (
  <Frame>
    <rect
      x="20"
      y="22"
      width="40"
      height="52"
      rx="5"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
    />
    <rect
      x="27"
      y="32"
      width="26"
      height="4"
      rx="2"
      fill="#0d1b2a"
      fillOpacity="0.4"
    />
    <rect
      x="27"
      y="42"
      width="18"
      height="4"
      rx="2"
      fill="#0d1b2a"
      fillOpacity="0.4"
    />
    <rect
      x="27"
      y="52"
      width="26"
      height="4"
      rx="2"
      fill="#0d1b2a"
      fillOpacity="0.4"
    />
    <circle cx="62" cy="62" r="16" fill="#046999" />
    <path
      d="M54 62l6 6l11-12"
      fill="none"
      stroke="#ffffff"
      strokeWidth="3.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Frame>
);

export const AippReportingIcon = () => (
  <Frame>
    <rect
      x="18"
      y="26"
      width="46"
      height="44"
      rx="6"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
    />
    <rect
      x="25"
      y="50"
      width="7"
      height="14"
      rx="1.5"
      fill="#046999"
      fillOpacity="0.5"
    />
    <rect x="36" y="42" width="7" height="22" rx="1.5" fill="#046999" />
    <rect
      x="47"
      y="34"
      width="7"
      height="30"
      rx="1.5"
      fill="#046999"
      fillOpacity="0.7"
    />
    <path
      d="M56 52h22a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H70l-7 6v-6h-7a5 5 0 0 1-5-5v-10a5 5 0 0 1 5-5z"
      fill="#046999"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <rect x="58" y="58" width="20" height="3.6" rx="1.8" fill="#ffffff" />
    <rect
      x="58"
      y="65"
      width="14"
      height="3.6"
      rx="1.8"
      fill="#ffffff"
      fillOpacity="0.7"
    />
  </Frame>
);

export const AippGovernanceIcon = () => (
  <Frame>
    <path
      d="M48 18l24 9v18c0 16-10 26-24 33c-14-7-24-17-24-33V27z"
      fill="#046999"
    />
    <rect
      x="35"
      y="36"
      width="26"
      height="4"
      rx="2"
      fill="#ffffff"
      fillOpacity="0.9"
    />
    <rect
      x="35"
      y="45"
      width="20"
      height="4"
      rx="2"
      fill="#ffffff"
      fillOpacity="0.7"
    />
    <rect
      x="35"
      y="54"
      width="24"
      height="4"
      rx="2"
      fill="#ffffff"
      fillOpacity="0.5"
    />
    <circle
      cx="66"
      cy="66"
      r="12"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
    />
    <circle
      cx="66"
      cy="64"
      r="4"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
    />
    <path d="M66 68v5" stroke="#046999" strokeWidth="2" strokeLinecap="round" />
  </Frame>
);

export const AippTriageIcon = () => (
  <Frame>
    <rect
      x="16"
      y="24"
      width="64"
      height="20"
      rx="6"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
    />
    <path
      d="M20 29l28 10l28-10"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M48 46v8M48 54L30 66M48 54v14M48 54l18 12"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect x="21" y="66" width="18" height="12" rx="3" fill="#046999" />
    <rect
      x="41"
      y="68"
      width="14"
      height="10"
      rx="3"
      fill="#046999"
      fillOpacity="0.6"
    />
    <rect
      x="59"
      y="66"
      width="18"
      height="12"
      rx="3"
      fill="#046999"
      fillOpacity="0.3"
    />
  </Frame>
);
