// app/popup-forms/(svgs)/DocumentMergeIcon.js

export const DocumentMergeIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
    {/* Document */}
    <rect x="16" y="5" width="22" height="28" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M20 13h14M20 18h14M20 23h9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    {/* Incoming field being merged in, left */}
    <rect x="4" y="22" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.1" />
    {/* Arrow into document */}
    <path
      d="M14.5 25.5h5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeDasharray="2.5 2"
    />
    <path
      d="M17.5 23l3 2.5-3 2.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
