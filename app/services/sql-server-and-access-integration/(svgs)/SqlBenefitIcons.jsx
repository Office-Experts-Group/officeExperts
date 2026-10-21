// app/services/sql-server-and-access-integration/(svgs)/SqlBenefitIcons.jsx

// Line icons for the four benefit rows in SqlBenefits.jsx.
// They draw in currentColor, so the SCSS module controls their colour.

// Shared wrapper so every icon uses the same 24px grid and stroke style
const Icon = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

// Shield with a tick
export const SecurityIcon = () => (
  <Icon>
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </Icon>
);

// Stacked database
export const ReliabilityIcon = () => (
  <Icon>
    <ellipse cx="12" cy="6" rx="7" ry="3" />
    <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
    <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
  </Icon>
);

// Lightning bolt
export const PerformanceIcon = () => (
  <Icon>
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
  </Icon>
);

// Three sliders
export const ManagementIcon = () => (
  <Icon>
    <path d="M4 6h10M18 6h2" />
    <circle cx="16" cy="6" r="2" />
    <path d="M4 12h4M12 12h8" />
    <circle cx="10" cy="12" r="2" />
    <path d="M4 18h11M19 18h1" />
    <circle cx="17" cy="18" r="2" />
  </Icon>
);
