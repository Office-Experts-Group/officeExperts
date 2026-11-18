// /app/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions/(svgs)/PivotIcons.jsx
// Small UI icons. All use currentColor so the module controls the colour.
import React from "react";

export const PivotArrowIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PivotCheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M2.5 7.4l2.8 2.8 6-6.2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// verticalClass lets the module collapse the vertical bar when a <details> is open
export const PivotPlusIcon = ({ verticalClass }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <line
      className={verticalClass}
      x1="8"
      y1="2"
      x2="8"
      y2="14"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <line
      x1="2"
      y1="8"
      x2="14"
      y2="8"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);
