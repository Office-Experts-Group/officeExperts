// app/(svgs)/AutomationIcon.jsx
// Three connected workflow steps with a loop-back arrow.
// Stroke icon that inherits currentColor.

export const AutomationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    focusable="false"
  >
    <rect x="2" y="9" width="5" height="6" rx="1.5" />
    <rect x="17" y="9" width="5" height="6" rx="1.5" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M7 12h2.5M14.5 12H17" />
    <path d="M4.5 9V5h15v4M18 7.5l1.5 1.5 1.5-1.5" />
  </svg>
);
