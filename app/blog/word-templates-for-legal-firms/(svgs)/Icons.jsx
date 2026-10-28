// /app/blog/word-templates-for-legal-firms/(svgs)/Icons.jsx
// 24x24 line icons, currentColor, decorative only.

const base = {
  viewBox: "0 0 24 24",
  width: 24,
  height: 24,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

export const IconLock = () => (
  <svg {...base}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);
export const IconAlert = () => (
  <svg {...base}>
    <path d="M12 4 3 19h18L12 4Z" />
    <path d="M12 10v4M12 17h.01" />
  </svg>
);
export const IconInfo = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 8h.01" />
  </svg>
);
export const IconLayers = () => (
  <svg {...base}>
    <path d="m12 4 9 5-9 5-9-5 9-5Z" />
    <path d="m3 14 9 5 9-5" />
  </svg>
);
export const IconBolt = () => (
  <svg {...base}>
    <path d="M13 3 5 13h6l-1 8 8-10h-6l1-8Z" />
  </svg>
);
export const IconTarget = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
export const IconUsers = () => (
  <svg {...base}>
    <circle cx="9" cy="9" r="3" />
    <path d="M3 19c0-3 2.5-5 6-5s6 2 6 5" />
    <path d="M16 6.5a3 3 0 0 1 0 5.5M18 14c2 .6 3 2.2 3 5" />
  </svg>
);
export const IconBrand = () => (
  <svg {...base}>
    <path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 1.6-2-.5-1.2.2-2.2 1.5-2.2H17a4 4 0 0 0 4-4C21 7 17 3 12 3Z" />
    <circle cx="8" cy="11" r=".8" />
    <circle cx="12" cy="8" r=".8" />
    <circle cx="16" cy="11" r=".8" />
  </svg>
);
export const IconClock = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
export const IconSearch = () => (
  <svg {...base}>
    <circle cx="11" cy="11" r="6" />
    <path d="m16 16 4 4" />
  </svg>
);
export const IconCheck = () => (
  <svg {...base}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);
export const IconArrow = () => (
  <svg {...base}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const IconFolder = () => (
  <svg {...base}>
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
  </svg>
);
export const IconScale = () => (
  <svg {...base}>
    <path d="M12 4v16M7 20h10M5 8h14" />
    <path d="m5 8-3 7a3.5 3.5 0 0 0 6 0L5 8ZM19 8l-3 7a3.5 3.5 0 0 0 6 0l-3-7Z" />
  </svg>
);
export const IconQuote = () => (
  <svg {...base}>
    <path d="M9 7H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3V9M20 7h-3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3V9" />
  </svg>
);
