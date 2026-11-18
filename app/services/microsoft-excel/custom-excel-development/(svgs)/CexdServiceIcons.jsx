// /app/services/microsoft-excel/custom-excel-development/(svgs)/CexdServiceIcons.jsx
// Spot icons for the hero list and the "what we build" rows.
// Stroke is currentColor, so the parent sets the colour
// (tokens: $accent on light, $accent-on-dark on dark).

const Spot = ({ children }) => (
  <svg
    viewBox="0 0 44 44"
    fill="none"
    aria-hidden="true"
    focusable="false"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

// Custom user interface: a screen with a nav panel, a card and mini chart
export const CexdUiIcon = () => (
  <Spot>
    <rect x="4" y="6" width="36" height="24" rx="3" />
    <path d="M4 13h36" />
    <path d="M4 13v17h8V13" />
    <path d="M6.5 17h3M6.5 20h3M6.5 23h3" strokeWidth="1.4" />
    <rect x="14" y="16" width="10" height="6" rx="1" strokeWidth="1.3" />
    <path d="M14 25h10M14 27.5h7" strokeWidth="1.3" />
    <rect x="27" y="21" width="3" height="5" rx="0.5" strokeWidth="1.3" />
    <rect x="31.5" y="18" width="3" height="8" rx="0.5" strokeWidth="1.3" />
    <path d="M18 30v4M26 30v4M15 34h14" />
  </Spot>
);

// VBA macros: an editor window with code lines and a cursor block
export const CexdMacroIcon = () => (
  <Spot>
    <rect x="4" y="7" width="36" height="28" rx="3" />
    <path d="M4 14h36" />
    <circle cx="9" cy="10.5" r="1.4" strokeWidth="1.2" />
    <circle cx="14" cy="10.5" r="1.4" strokeWidth="1.2" />
    <circle cx="19" cy="10.5" r="1.4" strokeWidth="1.2" />
    <path d="M9 20l4 3-4 3" />
    <path d="M16 20h14M16 23.5h10M16 27h16M16 30.5h8" strokeWidth="1.4" />
    <rect
      x="25"
      y="29"
      width="3"
      height="3"
      rx="0.5"
      fill="currentColor"
      stroke="none"
      opacity="0.5"
    />
  </Spot>
);

// Integrations: a hub with eight connected nodes
export const CexdIntegrationsIcon = () => (
  <Spot>
    <circle cx="22" cy="22" r="4.5" />
    <path
      d="M22 17.5V10M26.2 19.8l5-5M26.5 22H34M26.2 24.2l5 5M22 26.5V34M17.8 24.2l-5 5M17.5 22H10M17.8 19.8l-5-5"
      strokeWidth="1.4"
    />
    <rect x="19" y="6" width="6" height="6" rx="1.5" strokeWidth="1.3" />
    <rect x="30" y="10" width="6" height="6" rx="1.5" strokeWidth="1.3" />
    <rect x="34" y="19" width="6" height="6" rx="1.5" strokeWidth="1.3" />
    <rect x="30" y="30" width="6" height="6" rx="1.5" strokeWidth="1.3" />
    <rect x="19" y="34" width="6" height="6" rx="1.5" strokeWidth="1.3" />
    <rect x="8" y="30" width="6" height="6" rx="1.5" strokeWidth="1.3" />
    <rect x="4" y="19" width="6" height="6" rx="1.5" strokeWidth="1.3" />
    <rect x="8" y="10" width="6" height="6" rx="1.5" strokeWidth="1.3" />
  </Spot>
);

// Custom workbooks: a protected sheet with header, rows and a padlock
export const CexdWorkbookIcon = () => (
  <Spot>
    <rect
      x="10"
      y="8"
      width="26"
      height="32"
      rx="2.5"
      strokeWidth="1.4"
      strokeDasharray="3 2"
      opacity="0.4"
    />
    <rect x="7" y="5" width="26" height="32" rx="2.5" />
    <rect
      x="7"
      y="5"
      width="26"
      height="7"
      rx="2.5"
      fill="currentColor"
      fillOpacity="0.1"
    />
    <path d="M10 17h6M19 17h6M28 17h3" strokeWidth="1.3" />
    <path d="M7 20h26" strokeWidth="1" opacity="0.3" />
    <path d="M10 23.5h4M19 23.5h7M28 23.5h3" strokeWidth="1.3" />
    <path d="M7 26.5h26" strokeWidth="1" opacity="0.3" />
    <path d="M10 30h6M19 30h4" strokeWidth="1.3" />
    <rect x="26" y="30" width="6" height="5" rx="1" strokeWidth="1.3" />
    <path d="M27.5 30v-1.5a1.5 1.5 0 0 1 3 0V30" strokeWidth="1.3" />
    <circle cx="29" cy="33" r="0.7" fill="currentColor" stroke="none" />
  </Spot>
);

// Add-ins: an app window whose ribbon gains an extra button and a puzzle piece
export const CexdAddinIcon = () => (
  <Spot>
    <rect x="5" y="8" width="34" height="28" rx="3" />
    <path d="M5 15h34" />
    <rect x="8" y="10" width="5" height="3" rx="0.8" strokeWidth="1.2" />
    <rect x="15" y="10" width="5" height="3" rx="0.8" strokeWidth="1.2" />
    <rect x="22" y="10" width="5" height="3" rx="0.8" strokeWidth="1.2" />
    <path d="M30 9v5" strokeWidth="1.2" opacity="0.5" />
    <rect
      x="32"
      y="10"
      width="5"
      height="3"
      rx="0.8"
      strokeWidth="1.2"
      fill="currentColor"
      fillOpacity="0.12"
    />
    <path d="M34.5 10.7v1.6M33.7 11.5h1.6" strokeWidth="1" />
    <path
      d="M16 21h4v-2.5a1.5 1.5 0 0 1 3 0V21h4v4h-2.5a1.5 1.5 0 0 0 0 3H27v4H16V21z"
      strokeWidth="1.4"
    />
  </Spot>
);
