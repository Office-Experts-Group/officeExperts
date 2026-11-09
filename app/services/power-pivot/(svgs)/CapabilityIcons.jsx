// app/services/power-pivot/(svgs)/CapabilityIcons.jsx
// Line icons for the four things Power Pivot does. Original artwork (not Microsoft icons).
// They draw in currentColor and are sized by the parent's CSS, so the SCSS module controls colour and size.

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

// Stacked database: handling large volumes of data
export const RowsIcon = () => (
  <svg {...base}>
    <ellipse cx="12" cy="6" rx="7" ry="3" />
    <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
    <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
  </svg>
);

// Three linked nodes: relationships between tables
export const RelationshipsIcon = () => (
  <svg {...base}>
    <circle cx="5" cy="6" r="2.5" />
    <circle cx="19" cy="6" r="2.5" />
    <circle cx="12" cy="18" r="2.5" />
    <path d="M7.5 6h9M6.3 8.2l4.4 7.6M17.7 8.2l-4.4 7.6" />
  </svg>
);

// Sigma: DAX calculations
export const DaxIcon = () => (
  <svg {...base}>
    <path d="M18 5H6l6 7-6 7h12" />
  </svg>
);

// Framed bar chart: pivot tables and dashboards
export const ReportIcon = () => (
  <svg {...base}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 17v-4M12 17V8M16 17v-6" />
  </svg>
);
