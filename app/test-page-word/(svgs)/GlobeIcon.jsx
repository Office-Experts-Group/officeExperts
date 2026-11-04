// app/(svgs)/GlobeIcon.jsx

// Stroke settings sit on the <svg> and are inherited by every shape inside.
// currentColor lets the tile recolour the icon on hover.
export const GlobeIcon = () => (
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
    <ellipse cx="18" cy="18" rx="5.5" ry="13" />
    <path d="M5 18h26M7 11.5h22M7 24.5h22" />
  </svg>
);
