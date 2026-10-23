// /services/microsoft-word/custom-toolbars-and-ribbons/(svgs)/LayoutGlyphs.js

// Small page-layout glyphs, one per layout option, drawn on a shared 48 x 48 grid.
// Everything uses currentColor so the parent stylesheet controls the colour (including hover).
// Shaded blocks use currentColor at low opacity instead of a second colour.

// The unique part of each glyph, drawn inside the shared page outline
const glyphs = {
  cover: (
    <>
      <rect x="16" y="11" width="16" height="10" rx="1.5" fill="currentColor" fillOpacity="0.2" />
      <path d="M16 29h16M16 34h10" />
    </>
  ),
  image: (
    <>
      <rect x="16" y="11" width="16" height="14" rx="1.5" fill="currentColor" fillOpacity="0.2" />
      <path d="M16 22l4.5-4.5 3.5 3.5 3-3 5 4" />
      <path d="M16 31h16M16 36h10" />
    </>
  ),
  chapter: (
    <>
      <path d="M20 16h8" strokeWidth="3.2" />
      <path d="M16 25h16M19 30h10" />
    </>
  ),
  appendix: <path d="M19 34l5-18 5 18M20.8 28h6.4" />,
  toc: <path d="M16 13h9M28 13h4M16 19h11M28 19h4M16 25h8M28 25h4M16 31h10M28 31h4" />,
  terms: (
    <>
      <path d="M16 13h16M16 18h16M16 23h12" />
      <rect x="16" y="29" width="7" height="7" rx="1.5" />
      <path d="M17.8 32.5l1.7 1.7 2.7-3.2M26 33h6" />
    </>
  ),
  content: (
    <>
      <rect x="16" y="11" width="16" height="7" rx="1.5" fill="currentColor" fillOpacity="0.2" />
      <rect x="16" y="21" width="16" height="7" rx="1.5" />
      <rect x="16" y="31" width="16" height="7" rx="1.5" />
    </>
  ),
  chart: (
    <>
      <rect x="16" y="27" width="4" height="9" rx="1" fill="currentColor" fillOpacity="0.2" />
      <rect x="22" y="21" width="4" height="15" rx="1" fill="currentColor" fillOpacity="0.2" />
      <rect x="28" y="15" width="4" height="21" rx="1" fill="currentColor" fillOpacity="0.2" />
      <path d="M15 36h18" />
    </>
  ),
  layout: (
    <>
      <rect x="16" y="11" width="16" height="8" rx="1.5" fill="currentColor" fillOpacity="0.2" />
      <path d="M24 24v14M16 25h5M16 30h5M16 35h5M27 25h5M27 30h5M27 35h5" />
    </>
  ),
};

export const LayoutGlyph = ({ name }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Shared page outline */}
    <rect x="11" y="5" width="26" height="38" rx="3" />
    {glyphs[name]}
  </svg>
);
