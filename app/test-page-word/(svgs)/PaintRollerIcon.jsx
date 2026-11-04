// app/(svgs)/PaintRollerIcon.jsx

// Stroke settings sit on the <svg> and are inherited by every shape inside.
// currentColor lets the tile recolour the icon on hover.
export const PaintRollerIcon = () => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="5" y="6" width="22" height="8" rx="2" />
    <path d="M27 10h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H18v4" />
    <rect x="15" y="22" width="6" height="9" rx="1.5" />
  </svg>
);
