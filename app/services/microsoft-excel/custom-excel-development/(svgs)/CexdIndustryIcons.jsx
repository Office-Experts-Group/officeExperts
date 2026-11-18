// /app/services/microsoft-excel/custom-excel-development/(svgs)/CexdIndustryIcons.jsx
// Spot icons for the industry cards. Stroke is currentColor, so the card sets
// the colour (token: $accent).

const Spot = ({ children }) => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    aria-hidden="true"
    focusable="false"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

// Finance: a ledger with a verified stamp
export const CexdFinanceIcon = () => (
  <Spot>
    <rect x="5" y="8" width="26" height="20" rx="3" />
    <path d="M5 14h26M11 20h5M11 24h8" />
    <circle cx="26" cy="22" r="4" />
    <path d="M24.5 22l1 1 2-2" strokeWidth="1.2" />
  </Spot>
);

// Logistics: a delivery truck
export const CexdLogisticsIcon = () => (
  <Spot>
    <rect x="4" y="12" width="20" height="14" rx="2" />
    <path d="M24 16h4l4 5v5h-8V16z" />
    <circle cx="10" cy="27" r="2.5" />
    <circle cx="26" cy="27" r="2.5" />
    <path d="M9 12V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3" />
  </Spot>
);

// Healthcare: a clinical form with a cross
export const CexdHealthcareIcon = () => (
  <Spot>
    <rect x="9" y="5" width="18" height="26" rx="3" />
    <path d="M15 14h6M18 11v6M13 23h10M13 26h6" />
  </Spot>
);

// Construction: a building with a door
export const CexdConstructionIcon = () => (
  <Spot>
    <path d="M8 28V14l10-8 10 8v14" />
    <rect x="14" y="19" width="8" height="9" rx="1" />
    <path d="M14 22h8M14 25h5" strokeWidth="1.2" />
  </Spot>
);

// Professional services: a source sheet feeding a finished report
export const CexdProfessionalIcon = () => (
  <Spot>
    <rect x="5" y="6" width="16" height="24" rx="2" />
    <rect
      x="15"
      y="11"
      width="16"
      height="20"
      rx="2"
      fill="currentColor"
      fillOpacity="0.07"
    />
    <path
      d="M19 16h8M19 20h8M19 24h5M10 13h5M10 17h5M10 21h3"
      strokeWidth="1.3"
    />
  </Spot>
);

// Government: a civic building with columns
export const CexdGovernmentIcon = () => (
  <Spot>
    <path d="M5 16L18 7l13 9" />
    <rect x="9" y="16" width="5" height="12" rx="1" />
    <rect x="16" y="20" width="5" height="8" rx="1" />
    <rect x="23" y="13" width="5" height="15" rx="1" />
    <path d="M4 28h28" />
  </Spot>
);
