// app/government-departments/(svgs)/DepartmentIcon.js

export const DepartmentIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
    {/* Pediment roof */}
    <path
      d="M4 14 22 5l18 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Base plinth */}
    <path d="M4 36h34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M6 39h30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    {/* Columns */}
    <path d="M9 17.5v18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16.5 17.5v18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M24 17.5v18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M31.5 17.5v18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M39 17.5v18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {/* Entablature strip beneath roof */}
    <path d="M5.5 17.5h33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
