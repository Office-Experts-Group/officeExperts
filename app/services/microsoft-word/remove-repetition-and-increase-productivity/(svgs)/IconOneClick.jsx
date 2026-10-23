const IconOneClick = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M20 8H10a2 2 0 00-2 2v28a2 2 0 002 2h28a2 2 0 002-2V28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M30 6l4 4-14 14H16v-4L30 6z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="38" cy="10" r="1.5" fill="currentColor" />
    <path d="M14 30h10M14 34h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default IconOneClick;
