// /app/services/(svgs)/AccessIcon.js
// Decorative icon. It is drawn with currentColor, so the stylesheet of the parent sets the colour.
export const AccessIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <ellipse cx="32" cy="16" rx="18" ry="7"/><path d="M14 16v32c0 4 8 7 18 7s18-3 18-7V16M14 32c0 4 8 7 18 7s18-3 18-7"/>
  </svg>
);
