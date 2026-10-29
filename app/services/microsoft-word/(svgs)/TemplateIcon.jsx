// app/(svgs)/TemplateIcon.jsx

// Stroke settings sit on the <svg> and are inherited by every shape inside.
// currentColor lets the tile recolour the icon on hover.
export const TemplateIcon = () => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 4h12l7 7v19a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    <path d="M21 4v7h7" />
    {/* Page layout: header block above two lines of body text */}
    <rect x="11" y="15" width="14" height="5" rx="1" />
    <path d="M11 25h14M11 29h8" />
  </svg>
);
