// app/(svgs)/DashboardIcon.jsx
// Dashboard panel with a title line and three bars.
// Stroke icon that inherits currentColor.

export const DashboardIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    focusable="false"
  >
    <rect x="3" y="3" width="18" height="18" rx="2.5" />
    <path d="M7 7h4M7 17v-3M12 17v-6M17 17V8" />
  </svg>
);
