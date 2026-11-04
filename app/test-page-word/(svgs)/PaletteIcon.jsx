// app/(svgs)/PaletteIcon.jsx

// Stroke settings sit on the <svg> and are inherited by every shape inside.
// currentColor lets the tile recolour the icon on hover.
export const PaletteIcon = () => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 5C10.8 5 5 10.4 5 17c0 6.6 5.4 12 12 12 1.7 0 2.5-1 2.5-2.2 0-1.5-1.3-2-1.3-3.4 0-1.3 1-2.2 2.3-2.2h3c3.9 0 6.5-2.5 6.5-5.9C31.5 9.9 25.4 5 18 5z" />
    <circle cx="11" cy="17" r="1.4" />
    <circle cx="15" cy="11.5" r="1.4" />
    <circle cx="21.5" cy="11.5" r="1.4" />
    <circle cx="26" cy="16.5" r="1.4" />
  </svg>
);
