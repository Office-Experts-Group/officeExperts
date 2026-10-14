// app/(svgs)/PresentationIcon.jsx
// Presentation screen on a stand showing a small chart.
// Stroke icon that inherits currentColor.

export const PresentationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    focusable="false"
  >
    <rect x="3" y="4" width="18" height="11" rx="1.5" />
    <path d="M12 15v4M9 20.5l3-1.5 3 1.5" />
    <path d="M8 12v-2M12 12V8M16 12v-3" />
  </svg>
);
