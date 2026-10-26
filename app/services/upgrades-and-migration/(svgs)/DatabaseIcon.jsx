// app/services/upgrades-and-migration/(svgs)/DatabaseIcon.jsx
// Database cylinder with an arrow heading up and out, for a back end moving to SQL Server or Azure.
// Uses currentColor so the parent tile sets the colour.
export const DatabaseIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <ellipse cx="13" cy="8" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M5 8v14c0 1.7 3.6 3 8 3s8-1.3 8-3V8M5 15c0 1.7 3.6 3 8 3s8-1.3 8-3"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M22 18l6-6M23 12h5v5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
