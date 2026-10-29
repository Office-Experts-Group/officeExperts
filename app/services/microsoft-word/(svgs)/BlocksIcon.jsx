// app/(svgs)/BlocksIcon.jsx

// Stroke settings sit on the <svg> and are inherited by every shape inside.
// currentColor lets the tile recolour the icon on hover.
export const BlocksIcon = () => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="6" y="6" width="10" height="10" rx="1.5" />
    <rect x="6" y="19" width="10" height="10" rx="1.5" />
    <rect x="19" y="19" width="10" height="10" rx="1.5" />
    {/* Tilted block, as if being dropped into place */}
    <rect
      x="19"
      y="6"
      width="10"
      height="10"
      rx="1.5"
      transform="rotate(15 24 11)"
    />
  </svg>
);
