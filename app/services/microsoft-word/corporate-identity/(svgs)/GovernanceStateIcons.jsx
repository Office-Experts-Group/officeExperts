// app/corporate-identity/(svgs)/GovernanceStateIcons.jsx

// Small inline icons used in the comparison table to show whether a Word
// control is locked, available, or swapped for a branded alternative.
// All use currentColor so the state colour is set from the SCSS module.

export const LockedIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const AvailableIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M5.25 8.25l1.9 1.9 3.6-3.9"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Half-filled circle: the control is available, but only in a brand-approved form
export const ManagedIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 1.75a6.25 6.25 0 0 1 0 12.5z" fill="currentColor" />
  </svg>
);
