// app/government-departments/(svgs)/BrandLockIcon.js

export const BrandLockIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
    {/* Document with letterhead band */}
    <rect x="9" y="4" width="21" height="27" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 10.5h21" stroke="currentColor" strokeWidth="1.5" />
    <rect x="12" y="6.5" width="6" height="2.2" rx="0.6" fill="currentColor" opacity="0.35" />
    <path d="M12.5 15h14M12.5 18.5h14M12.5 22h9" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.55" />
    {/* Padlock overlapping bottom-right corner — controlled/locked brand template */}
    <rect x="24" y="24" width="14" height="11" rx="2" fill="#f8f8f8" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M27.5 24v-3.5a3.5 3.5 0 0 1 7 0V24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="31" cy="28.7" r="1.3" fill="currentColor" />
    <path d="M31 29.9v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);
