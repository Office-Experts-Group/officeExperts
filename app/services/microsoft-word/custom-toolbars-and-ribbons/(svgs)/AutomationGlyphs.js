// /services/microsoft-word/custom-toolbars-and-ribbons/(svgs)/AutomationGlyphs.js

// Icons for the four automation groups, drawn on a shared 32 x 32 grid.
// Everything uses currentColor so the parent stylesheet controls the colour.

// The unique part of each icon
const glyphs = {
  // A portrait page overlapping a landscape page
  pages: (
    <>
      <rect x="4" y="5" width="12" height="16" rx="2" />
      <rect x="12" y="14" width="16" height="12" rx="2" />
    </>
  ),
  // Sparkle with a small plus
  cleanup: (
    <>
      <path d="M13 4l2.4 6.6L22 13l-6.6 2.4L13 22l-2.4-6.6L4 13l6.6-2.4z" />
      <path d="M25 21v6M22 24h6" />
    </>
  ),
  // Table grid
  tables: (
    <>
      <rect x="4" y="7" width="24" height="18" rx="2" />
      <path d="M4 13h24M4 19h24M12 7v18" />
    </>
  ),
  // Magnifying glass
  content: (
    <>
      <circle cx="14" cy="14" r="7" />
      <path d="M19.5 19.5L27 27" />
    </>
  ),
};

export const AutomationGlyph = ({ name }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {glyphs[name]}
  </svg>
);
