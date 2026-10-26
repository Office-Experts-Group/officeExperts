// app/services/upgrades-and-migration/(svgs)/DataHubIcon.jsx
// Four scattered sources feeding one central point, for centralised data and reporting.
// Uses currentColor so the parent tile sets the colour.
export const DataHubIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="26" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="6" cy="26" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="26" cy="26" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M7.8 7.8l5.4 5.4M24.2 7.8l-5.4 5.4M7.8 24.2l5.4-5.4M24.2 24.2l-5.4-5.4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
