// /app/blog/power-apps-pdf-function/(svgs)/Icons.jsx
// 24x24 line icons. Stroke uses currentColor so the module sets the colour
// (tokens: $accent, $accent-on-dark, $text-secondary). Decorative only.
import React from "react";

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

export const IconReport = () => (
  <svg {...base}>
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4" />
    <path d="M9 17v-3M12 17v-6M15 17v-4" />
  </svg>
);

export const IconCertificate = () => (
  <svg {...base}>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M7 8h10M7 11h6" />
    <path d="M15 16l1.5 5 1.5-2 2 .5-1.5-3.5" />
    <circle cx="15.5" cy="13.5" r="1.5" />
  </svg>
);

export const IconForm = () => (
  <svg {...base}>
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 4V3h6v1" />
    <path d="M8.5 11l1.5 1.5 2.5-3M8.5 17h7" />
  </svg>
);

export const IconInvoice = () => (
  <svg {...base}>
    <path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" />
    <path d="M9 8h6M9 12h6M9 16h3" />
  </svg>
);

export const IconWorkOrder = () => (
  <svg {...base}>
    <path d="M14.5 5.5a4 4 0 0 0-5 5L4 16l4 4 5.5-5.5a4 4 0 0 0 5-5l-2.5 2.5-2.5-.5-.5-2.5z" />
  </svg>
);

export const IconBulb = () => (
  <svg {...base}>
    <path d="M9 18h6M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
  </svg>
);

export const IconInfo = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 8h.01" />
  </svg>
);

export const IconWarn = () => (
  <svg {...base}>
    <path d="M12 4l9 16H3z" />
    <path d="M12 10v4M12 17h.01" />
  </svg>
);

export const IconCheck = () => (
  <svg {...base}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

export const IconArrow = () => (
  <svg {...base} width="16" height="16" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconDevice = () => (
  <svg {...base}>
    <rect x="7" y="3" width="10" height="18" rx="2" />
    <path d="M11 18h2" />
  </svg>
);

export const IconToggle = () => (
  <svg {...base}>
    <rect x="3" y="8" width="18" height="8" rx="4" />
    <circle cx="16" cy="12" r="2" />
  </svg>
);

export const IconLayers = () => (
  <svg {...base}>
    <path d="M12 3l9 5-9 5-9-5z" />
    <path d="M3 13l9 5 9-5" />
  </svg>
);

export const IconClock = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const IconChat = () => (
  <svg {...base}>
    <path d="M4 5h16v11H9l-5 4z" />
    <path d="M8 9h8M8 12h5" />
  </svg>
);
