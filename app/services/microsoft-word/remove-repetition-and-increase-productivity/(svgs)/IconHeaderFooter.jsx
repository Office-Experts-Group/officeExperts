const IconHeaderFooter = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="6" y="6" width="36" height="36" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="6" y="6" width="36" height="9" rx="2" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
    <rect x="6" y="33" width="36" height="9" rx="2" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
    <path d="M12 10.5h12M12 38.5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14 19h20M14 23h16M14 27h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default IconHeaderFooter;
