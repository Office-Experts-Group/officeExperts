// app/services/upgrades-and-migration/(svgs)/SpreadsheetIcon.jsx
// Spreadsheet grid with a cracked bottom-right cell, for workbooks past their limits.
// Uses currentColor so the parent tile sets the colour.
export const SpreadsheetIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="4" y="5" width="24" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M4 11h24M4 17h24M4 22h15M11 5v22M19 5v22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M24.5 17.5l-1.5 2.5 2 1.5-1.5 2.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
