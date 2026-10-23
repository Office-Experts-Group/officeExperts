const DocumentSvg = ({ width = 48, height = 48, className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="6" y="4" width="28" height="36" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M34 4l8 8h-8V4z" fill="currentColor" opacity="0.3" />
    <path d="M34 4v8h8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
    <line x1="12" y1="16" x2="30" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="22" x2="30" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="28" x2="22" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="38" cy="38" r="6" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
    <path d="M36 38l1.5 1.5L40 36" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default DocumentSvg;
