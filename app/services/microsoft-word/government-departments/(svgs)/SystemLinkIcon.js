// app/government-departments/(svgs)/SystemLinkIcon.js

export const SystemLinkIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
    {/* Word document — left node */}
    <rect x="3" y="14" width="14" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 19h8M6 22.5h8M6 26h5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.55" />
    {/* Department records system — right node */}
    <rect x="27" y="10" width="14" height="21" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M27 16h14" stroke="currentColor" strokeWidth="1.3" opacity="0.6" />
    <circle cx="30.4" cy="13" r="1" fill="currentColor" opacity="0.6" />
    <circle cx="33.6" cy="13" r="1" fill="currentColor" opacity="0.6" />
    <path d="M30 21h8M30 24.5h8M30 28h5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.55" />
    {/* Bidirectional link between the two systems */}
    <path
      d="M17.5 20.5h9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path d="M20 17.5 17 20.5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24 17.5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
