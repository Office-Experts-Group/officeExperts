// /app/services/(svgs)/ArrowIcon.jsx
// Right pointing arrow for linked list rows. It uses currentColor, so the parent's CSS colour controls it.
export const ArrowIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4 10h12M12 5l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
