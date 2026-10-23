// app/government-departments/(svgs)/RibbonRolloutIcon.js

export const RibbonRolloutIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
    {/* Application window */}
    <rect x="3" y="9" width="38" height="26" rx="2" stroke="currentColor" strokeWidth="1.5" />
    {/* Ribbon strip */}
    <path d="M3 16h38" stroke="currentColor" strokeWidth="1.5" />
    {/* Standard ribbon groups */}
    <rect x="6" y="11.3" width="6" height="3" rx="0.7" stroke="currentColor" strokeWidth="1" opacity="0.55" />
    <rect x="14" y="11.3" width="6" height="3" rx="0.7" stroke="currentColor" strokeWidth="1" opacity="0.55" />
    {/* Custom department tab — highlighted, distinct from standard groups */}
    <rect x="24" y="10.8" width="14" height="4" rx="0.9" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.1" />
    <path d="M27 12.8h8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    {/* Document lines below, representing the working area */}
    <path d="M8 22h28M8 26h28M8 30h18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
  </svg>
);
