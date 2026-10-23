const RemoteSvg = ({ width = 48, height = 48, className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="4" y="8" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
    <line x1="16" y1="40" x2="32" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="36" x2="24" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="22" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M16 30c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

export default RemoteSvg;
