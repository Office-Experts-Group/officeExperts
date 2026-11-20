// /app/services/microsoft-access/sql-server-solutions/(svgs)/SqlsIcons.jsx
// Small UI icons. They use currentColor, so the SCSS module sets the colour
// (tokens used there: $accent, $accent-on-dark, $white).
import React from "react";

const base = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

export const SqlsArrowIcon = () => (
  <svg {...base}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const SqlsPlusIcon = () => (
  <svg {...base}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const SqlsPeopleIcon = () => (
  <svg {...base}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M17 14c2.4 0 4 1.6 4 4" />
  </svg>
);

export const SqlsPinIcon = () => (
  <svg {...base}>
    <path d="M12 21c-4-4.3-7-8-7-11.5A7 7 0 0 1 19 9.5C19 13 16 16.7 12 21z" />
    <circle cx="12" cy="9.5" r="2.3" />
  </svg>
);

export const SqlsLayersIcon = () => (
  <svg {...base}>
    <path d="M12 3l9 4.5-9 4.5-9-4.5L12 3z" />
    <path d="M3 12l9 4.5 9-4.5M3 16.5L12 21l9-4.5" />
  </svg>
);

export const SqlsFormIcon = () => (
  <svg {...base}>
    <rect x="3.5" y="4" width="17" height="16" rx="2.5" />
    <path d="M3.5 9h17M8 13h8M8 16.5h5" />
  </svg>
);

export const SqlsDatabaseIcon = () => (
  <svg {...base}>
    <ellipse cx="12" cy="6" rx="7" ry="2.8" />
    <path d="M5 6v12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8V6" />
    <path d="M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" />
  </svg>
);
