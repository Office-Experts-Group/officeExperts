// app/government-departments/(svgs)/CompliantDocIcon.js

export const CompliantDocIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
    {/* Document body with folded corner */}
    <path
      d="M11 5h15l7 7v27a1.5 1.5 0 0 1-1.5 1.5h-20.5a1.5 1.5 0 0 1-1.5-1.5V6.5A1.5 1.5 0 0 1 11 5z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M26 5v7h7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    {/* Text lines */}
    <path d="M14 22h9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
    <path d="M14 26h9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
    {/* Small shield badge overlapping bottom-right, standing for compliance sign-off */}
    <path
      d="M27 24.5l6-2 6 2v5c0 3.6-2.6 6-6 7.3-3.4-1.3-6-3.7-6-7.3v-5z"
      fill="#f8f8f8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M30.5 29.8l1.8 1.8 3.4-3.8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
