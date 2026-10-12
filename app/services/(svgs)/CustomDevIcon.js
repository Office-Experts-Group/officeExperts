// /app/services/(svgs)/CustomDevIcon.js
// Decorative icon. It is drawn with currentColor, so the stylesheet of the parent sets the colour.
export const CustomDevIcon = () => (
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
    <path d="M24 20L10 32l14 12M40 20l14 12-14 12M35 14L29 50"/>
  </svg>
);
