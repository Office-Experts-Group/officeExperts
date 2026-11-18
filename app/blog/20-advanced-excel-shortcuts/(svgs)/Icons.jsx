// /app/blog/20-advanced-excel-shortcuts/(svgs)/Icons.jsx
// 24x24 line icons, currentColor, decorative (aria-hidden).
import React from "react";

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

export const ArrowIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ChevronIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const TipIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z" />
  </svg>
);

export const InfoIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 8h.01" />
  </svg>
);

export const KeyboardIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10" />
  </svg>
);

export const LaptopIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="4" y="5" width="16" height="11" rx="1.5" />
    <path d="M2 19h20" />
  </svg>
);

export const GridIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 10h18M9 4v16M15 4v16" />
  </svg>
);

export const SlidersIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M4 6h8M16 6h4M4 12h4M12 12h8M4 18h10M18 18h2" />
    <path d="M14 4v4M10 10v4M16 16v4" />
  </svg>
);
