// /app/services/microsoft-power-platform/microsoft-fabric/(svgs)/MfabIcons.jsx
// Small UI icons. They inherit colour from the parent (currentColor).

export const MfabArrowIcon = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M2 8h11M9 3.5 13.5 8 9 12.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MfabPlusIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M9 3v12M3 9h12"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

// Short bar marker used in place of ticks in plain lists
export const MfabDashIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <rect x="2" y="7" width="12" height="2.4" rx="1.2" fill="currentColor" />
    <circle cx="2.6" cy="8.2" r="2.2" fill="currentColor" opacity="0.45" />
  </svg>
);
