// /app/services/microsoft-access/is-access-right-for-your-company/(svgs)/IarcIcons.jsx
// Small UI icons. They take their colour from the surrounding text (currentColor).
import React from "react";

const base = {
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

export const IarcArrowIcon = () => (
  <svg {...base}>
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export const IarcPlusIcon = () => (
  <svg {...base}>
    <path d="M8 3v10M3 8h10" />
  </svg>
);

// Magnifier over a page: "independent advice"
export const IarcAdviceIcon = () => (
  <svg {...base}>
    <path d="M3 2.5h6l2 2V8" />
    <path d="M3 2.5v10h4" />
    <circle cx="10.6" cy="11" r="2.4" />
    <path d="M12.4 12.9l1.6 1.6" />
  </svg>
);

// Map pin: "Australia-wide"
export const IarcPinIcon = () => (
  <svg {...base}>
    <path d="M8 14s4.5-3.9 4.5-7.5a4.5 4.5 0 0 0-9 0C3.5 10.1 8 14 8 14z" />
    <circle cx="8" cy="6.5" r="1.6" />
  </svg>
);

// Speech bubble: "plain-English advice"
export const IarcChatIcon = () => (
  <svg {...base}>
    <path d="M2.5 3.5h11v7h-6l-3 2.5v-2.500h-2z" />
    <path d="M5.5 6.500h5M5.5 8.500h3" />
  </svg>
);

// Cylinder: "your data"
export const IarcDataIcon = () => (
  <svg {...base} width={22} height={22}>
    <ellipse cx="8" cy="4.5" rx="5.5" ry="2" />
    <path d="M2.5 4.500v7c0 1.1 2.5 2 5.5 2s5.5-.9 5.5-2v-7" />
    <path d="M2.5 8c0 1.1 2.5 2 5.5 2s5.5-.9 5.5-2" />
  </svg>
);

// Two people: "your people"
export const IarcPeopleIcon = () => (
  <svg {...base} width={22} height={22}>
    <circle cx="6" cy="5.5" r="2.2" />
    <path d="M1.8 13a4.2 3.6 0 0 1 8.4 0" />
    <circle cx="11.5" cy="6.5" r="1.8" />
    <path d="M11 9.800a3.4 3 0 0 1 3.7 3.2" />
  </svg>
);

// Two linked rings: "your systems"
export const IarcLinkIcon = () => (
  <svg {...base} width={22} height={22}>
    <path d="M6.8 9.200a2.6 2.6 0 0 0 3.7 0l2.2-2.200a2.6 2.6 0 0 0-3.7-3.700l-.8.8" />
    <path d="M9.2 6.800a2.6 2.6 0 0 0-3.7 0L3.3 9a2.6 2.6 0 0 0 3.7 3.700l.8-.8" />
  </svg>
);
