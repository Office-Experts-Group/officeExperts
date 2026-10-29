// app/(svgs)/SparklesIcon.jsx

// Stroke settings sit on the <svg> and are inherited by every shape inside.
// currentColor lets the tile recolour the icon on hover.
export const SparklesIcon = () => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M14 8c.9 6 3.5 8.6 10 10-6.5 1.4-9.1 4-10 10-.9-6-3.5-8.6-10-10 6.5-1.4 9.1-4 10-10z" />
    <path d="M28 4v7M24.5 7.5h7" />
    <path d="M29 24v6M26 27h6" />
  </svg>
);
