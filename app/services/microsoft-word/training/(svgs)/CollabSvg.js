const CollabSvg = ({ width = 48, height = 48, className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
    <circle cx="32" cy="16" r="6" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
    <path
      d="M2 40c0-7.7 6.3-14 14-14s14 6.3 14 14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M32 26c7.7 0 14 6.3 14 14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export default CollabSvg;
