// /app/services/(svgs)/SupportIcon.js
// Decorative icon. It is drawn with currentColor, so the stylesheet of the parent sets the colour.
export const SupportIcon = () => (
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
    <circle cx="32" cy="32" r="22"/><circle cx="32" cy="32" r="9"/><path d="M16 16l9 9M48 16l-9 9M16 48l9-9M48 48l-9-9"/>
  </svg>
);
