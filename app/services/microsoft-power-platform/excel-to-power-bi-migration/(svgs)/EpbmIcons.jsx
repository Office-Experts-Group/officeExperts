// /app/services/microsoft-power-platform/excel-to-power-bi-migration/(svgs)/EpbmIcons.jsx

// Small UI icons for the Excel to Power BI page: links, ticks, the FAQ toggle
// and the two comparison table headers. currentColor, aria-hidden.

const EpbmIcon = ({ children, size = 24, strokeWidth = 1.75 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
);

export const EpbmArrowIcon = ({ size = 16 }) => (
  <EpbmIcon size={size}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </EpbmIcon>
);

export const EpbmCheckIcon = ({ size = 18 }) => (
  <EpbmIcon size={size} strokeWidth={2}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </EpbmIcon>
);

export const EpbmPlusIcon = ({ size = 20 }) => (
  <EpbmIcon size={size}>
    <path d="M12 5v14M5 12h14" />
  </EpbmIcon>
);

// Generic grid: stands for a spreadsheet (no product logos)
export const EpbmGridIcon = ({ size = 20 }) => (
  <EpbmIcon size={size}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9.5h18M3 15h18M9 4v16M15 4v16" />
  </EpbmIcon>
);

// Generic bars: stands for a dashboard (no product logos)
export const EpbmBarsIcon = ({ size = 20 }) => (
  <EpbmIcon size={size}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 16v-3M12 16V8M16 16v-5" />
  </EpbmIcon>
);
