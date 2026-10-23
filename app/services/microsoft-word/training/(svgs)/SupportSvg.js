const SupportSvg = ({ width = 48, height = 48, className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M8 26v-4a16 16 0 0132 0v4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <rect x="4" y="26" width="8" height="10" rx="3" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.12" />
    <rect x="36" y="26" width="8" height="10" rx="3" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.12" />
    <path
      d="M44 36v2a4 4 0 01-4 4H28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="26" cy="42" r="2" fill="currentColor" />
  </svg>
);

export default SupportSvg;
