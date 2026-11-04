// app/(svgs)/DocumentMigrateIcon.jsx

// Stroke settings sit on the <svg> and are inherited by every shape inside.
// currentColor lets the tile recolour the icon on hover.
export const DocumentMigrateIcon = () => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Source document, arrow, then the finished Word document */}
    <path d="M4 9a2 2 0 0 1 2-2h5l4 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
    <path d="M7 17h5M7 21h5" />
    <path d="M16.5 18h4M18.5 16l2 2-2 2" />
    <path d="M21 9a2 2 0 0 1 2-2h5l4 4v14a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2z" />
    <path d="M24 17h5M24 21h5" />
  </svg>
);
