// /services/microsoft-word/word-document-template-creation/(svgs)/PolicyIcon.jsx

// Page with a bulleted list. Uses currentColor so the parent sets the colour.
export const PolicyIcon = () => (
  <svg
    viewBox="0 0 48 48"
    width="44"
    height="44"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 6h18l8 8v28H12z" />
    <path d="M30 6v8h8" />
    {/* A zero-length line with round caps draws each bullet dot */}
    <path d="M17 21h.01M23 21h9M17 28h.01M23 28h9M17 35h.01M23 35h9" />
  </svg>
);
