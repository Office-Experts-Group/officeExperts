// app/services/microsoft-365-api-integration/(svgs)/IndustryIcons.jsx

// Line icons for the use case cards (ApiUseCases.jsx). These replace the old
// stock photos (doctor.webp, salesperson.webp and so on).

const base = {
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

// Scales of justice
const Legal = () => (
  <svg {...base}>
    <path d="M20 6v28M12 34h16M9 11h22" />
    <path d="M9 11l-5 11a5 5 0 0 0 10 0zM31 11l-5 11a5 5 0 0 0 10 0z" />
  </svg>
);

// Two people
const People = () => (
  <svg {...base}>
    <circle cx="15" cy="13" r="5" />
    <path d="M5 33a10 10 0 0 1 20 0" />
    <circle cx="28" cy="15" r="4" />
    <path d="M27 23a8 8 0 0 1 9 8" />
  </svg>
);

// Rising bar chart
const Finance = () => (
  <svg {...base}>
    <path d="M6 34h28" />
    <rect x="9" y="22" width="5" height="12" />
    <rect x="18" y="16" width="5" height="18" />
    <rect x="27" y="9" width="5" height="25" />
  </svg>
);

// Document with a signature line: proposals
const Sales = () => (
  <svg {...base}>
    <path d="M10 5h14l7 7v23H10z" />
    <path d="M24 5v7h7" />
    <path d="M14 18h12M14 23h12" />
    <path d="M14 30c2-2 3-2 4 0s2 2 4 0 3-2 4 0" />
  </svg>
);

// Hard hat
const Field = () => (
  <svg {...base}>
    <path d="M6 27h28v4H6z" />
    <path d="M9 27a11 11 0 0 1 22 0" />
    <path d="M17 16v-5h6v5" />
  </svg>
);

// Clipboard with a cross
const Health = () => (
  <svg {...base}>
    <rect x="9" y="7" width="22" height="28" rx="2" />
    <path d="M15 7V5h10v2" />
    <path d="M20 15v10M15 20h10" />
  </svg>
);

// Keyed by the use case id used in ApiUseCases.jsx
export const industryIcons = {
  legal: Legal,
  hr: People,
  finance: Finance,
  sales: Sales,
  field: Field,
  health: Health,
};
