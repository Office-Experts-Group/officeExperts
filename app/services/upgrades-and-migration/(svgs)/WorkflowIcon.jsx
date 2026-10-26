// app/services/upgrades-and-migration/(svgs)/WorkflowIcon.jsx
// A trigger branching into two steps, for manual work turned into automated flows.
// Uses currentColor so the parent tile sets the colour.
export const WorkflowIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <circle cx="7" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
    <rect x="19" y="5" width="9" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="19" y="20" width="9" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M10 16h3M13 16V8.5h6M13 16v7.5h6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
