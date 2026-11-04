// app/(svgs)/AccessibilityIcon.jsx

// Stroke settings sit on the <svg> and are inherited by every shape inside.
// currentColor lets the tile recolour the icon on hover.
export const AccessibilityIcon = () => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="18" cy="18" r="13" />
    <circle cx="18" cy="11.5" r="1.5" />
    <path d="M11.5 15.5L18 17l6.5-1.5" />
    <path d="M18 17v4.5M18 21.5l-3 5.5M18 21.5l3 5.5" />
  </svg>
);
