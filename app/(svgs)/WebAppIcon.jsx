// app/(svgs)/WebAppIcon.jsx
// Browser window containing code brackets, for web apps and custom software.
// Stroke icon that inherits currentColor.

export const WebAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    focusable="false"
  >
    <rect x="2" y="4" width="20" height="16" rx="2.5" />
    <path d="M2 9h20" />
    <path d="M9 13l-2 2 2 2M15 13l2 2-2 2M13 12.5l-2 5" />
  </svg>
);
