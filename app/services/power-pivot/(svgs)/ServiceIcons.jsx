// app/services/power-pivot/(svgs)/ServiceIcons.jsx
// Line icons for the five consulting services. Original artwork (not Microsoft icons).
// They draw in currentColor and are sized by the parent's CSS.

// Shared attributes for every icon in this file
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  focusable: "false",
  role: "presentation",
};

// Three linked tables: data modelling and relationships
export const ModelIcon = () => (
  <svg {...base}>
    <rect x="3" y="4" width="7" height="6" rx="1.5" />
    <rect x="14" y="4" width="7" height="6" rx="1.5" />
    <rect x="8.5" y="15" width="7" height="6" rx="1.5" />
    <path d="M6.5 10v2.5h11V10M12 12.5V15" />
  </svg>
);

// Code brackets: DAX formulas and business logic
export const CodeIcon = () => (
  <svg {...base}>
    <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
  </svg>
);

// Funnel: Power Query integration (cleaning and shaping data)
export const QueryIcon = () => (
  <svg {...base}>
    <path d="M3 5h18l-7 8v6l-4-2v-4z" />
  </svg>
);

// Gauge: performance optimisation
export const SpeedIcon = () => (
  <svg {...base}>
    <path d="M4 17a8 8 0 1 1 16 0" />
    <path d="M12 17l4-5" />
    <circle cx="12" cy="17" r="1" />
  </svg>
);

// Pie chart: dashboard-ready reporting
export const ChartIcon = () => (
  <svg {...base}>
    <path d="M12 3v9h9" />
    <path d="M20.5 15A9 9 0 1 1 9 3.5" />
  </svg>
);
