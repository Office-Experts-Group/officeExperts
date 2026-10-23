// app/government-departments/(svgs)/TemplateTreeIcon.js

export const TemplateTreeIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
    {/* Master template — top */}
    <rect x="16" y="4" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M19 8h6M19 11h6M19 14h4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />
    {/* Connecting lines down to sub templates */}
    <path
      d="M22 18v4M22 22H8v4M22 22h14v4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Sub template — left */}
    <rect x="3" y="26" width="10" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5.5 30h5M5.5 33h5M5.5 36h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.55" />
    {/* Sub template — centre */}
    <rect x="17" y="26" width="10" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M19.5 30h5M19.5 33h5M19.5 36h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.55" />
    {/* Sub template — right */}
    <rect x="31" y="26" width="10" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M33.5 30h5M33.5 33h5M33.5 36h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.55" />
  </svg>
);
