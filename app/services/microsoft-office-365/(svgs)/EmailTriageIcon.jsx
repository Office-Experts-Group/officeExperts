// app/(svgs)/EmailTriageIcon.jsx
// Envelope with a sparkle, for AI-sorted email. Stroke icon that inherits currentColor.

export const EmailTriageIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    focusable="false"
  >
    <rect x="2" y="7" width="15" height="12" rx="2" />
    <path d="M2 9l7.5 5.5L17 9" />
    <path d="M20 3v5M17.5 5.5h5" />
  </svg>
);
