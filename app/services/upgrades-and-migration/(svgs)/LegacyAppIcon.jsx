// app/services/upgrades-and-migration/(svgs)/LegacyAppIcon.jsx
// Browser window with code brackets, for legacy systems rebuilt as web applications.
// Uses currentColor so the parent tile sets the colour.
export const LegacyAppIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="3" y="6" width="26" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 11h26" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="6.5" cy="8.5" r="0.75" fill="currentColor" />
    <circle cx="9" cy="8.5" r="0.75" fill="currentColor" />
    <path
      d="M12 15l-3 3 3 3M20 15l3 3-3 3M17.5 14l-3 8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
