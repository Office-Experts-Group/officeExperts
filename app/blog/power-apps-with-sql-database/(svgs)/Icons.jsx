// /app/blog/power-apps-with-sql-database/(svgs)/Icons.jsx
// 24x24 line icons. Stroke uses currentColor so the parent sets the colour.
// All decorative: aria-hidden, not focusable.

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

export const IconLink = () => (
  <svg {...base}>
    <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
    <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
  </svg>
);

export const IconGrowth = () => (
  <svg {...base}>
    <path d="M4 20h16" />
    <path d="M6 16v-3M11 16V9M16 16v-6" />
    <path d="m5 8 5-4 4 3 5-4" />
    <path d="M15 3h4v4" />
  </svg>
);

export const IconRules = () => (
  <svg {...base}>
    <rect x="4" y="3" width="16" height="18" rx="3" />
    <path d="m8 9 1.5 1.5L12 8" />
    <path d="M14 9.5h3M8 15h9" />
  </svg>
);

export const IconShield = () => (
  <svg {...base}>
    <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const IconDatabase = () => (
  <svg {...base}>
    <ellipse cx="12" cy="6" rx="7" ry="3" />
    <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
    <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
  </svg>
);

export const IconFlow = () => (
  <svg {...base}>
    <circle cx="5.5" cy="6" r="2.5" />
    <circle cx="18.5" cy="18" r="2.5" />
    <path d="M8 6h5a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-2a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3h5" />
  </svg>
);

export const IconApp = () => (
  <svg {...base}>
    <rect x="3" y="4" width="18" height="16" rx="3" />
    <path d="M3 9h18" />
    <path d="M7 13h6M7 16.5h9" />
  </svg>
);

export const IconKey = () => (
  <svg {...base}>
    <circle cx="8" cy="15" r="4" />
    <path d="m11 12 8-8" />
    <path d="m16 7 2.5 2.5M14 9l2 2" />
  </svg>
);

export const IconLock = () => (
  <svg {...base}>
    <rect x="5" y="11" width="14" height="9" rx="2.5" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    <path d="M12 15v2" />
  </svg>
);

export const IconUsers = () => (
  <svg {...base}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <path d="M16 5.2a3 3 0 0 1 0 5.6M18 14.4c1.8.9 3 2.7 3 5.6" />
  </svg>
);

export const IconForm = () => (
  <svg {...base}>
    <rect x="4" y="3" width="16" height="18" rx="3" />
    <path d="M8 8h8M8 12h8" />
    <rect x="8" y="15.5" width="5" height="2.5" rx="1" />
  </svg>
);

export const IconRefresh = () => (
  <svg {...base}>
    <path d="M20 12a8 8 0 1 1-2.6-5.9" />
    <path d="M20 4v4.5h-4.5" />
  </svg>
);

export const IconCheck = () => (
  <svg {...base}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const IconBulb = () => (
  <svg {...base}>
    <path d="M9 18h6M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z" />
  </svg>
);

export const IconInfo = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 7.6v.1" />
  </svg>
);

export const IconArrow = () => (
  <svg {...base} width="16" height="16" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconPlus = () => (
  <svg {...base} strokeWidth="2">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const IconExternal = () => (
  <svg {...base} width="16" height="16" strokeWidth="2">
    <path d="M14 4h6v6" />
    <path d="M20 4 11 13" />
    <path d="M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
  </svg>
);
