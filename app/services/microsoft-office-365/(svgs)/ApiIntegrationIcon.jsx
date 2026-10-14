// app/(svgs)/ApiIntegrationIcon.jsx
// Two systems exchanging data both ways, for API and third-party integration.
// Stroke icon that inherits currentColor.

export const ApiIntegrationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    focusable="false"
  >
    <rect x="2" y="8" width="6" height="8" rx="1.5" />
    <rect x="16" y="8" width="6" height="8" rx="1.5" />
    <path d="M8 10h8M14 8l2 2-2 2" />
    <path d="M16 14H8M10 12l-2 2 2 2" />
  </svg>
);
