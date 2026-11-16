// /app/services/microsoft-power-platform/ai-with-power-platform/(svgs)/AippIcons.jsx
// Small UI icons. They use currentColor so the parent module sets the colour.

export const AippArrowIcon = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M2 7h9M7.5 3.5L11 7l-3.5 3.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AippPlusIcon = ({ className = "" }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="9" cy="9" r="8.2" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M9 5.2v7.6M5.2 9h7.6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

export const AippDiamondIcon = ({ size = 10 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 10 10"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M5 0.5L9.5 5L5 9.5L0.5 5Z" fill="currentColor" />
  </svg>
);

export const AippDownArrowIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M9 2.5v11M4.5 9.5L9 14l4.5-4.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
