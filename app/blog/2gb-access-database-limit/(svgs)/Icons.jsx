// /app/blog/2gb-access-database-limit/(svgs)/Icons.jsx
// 24x24 line icons. Stroke is currentColor, so colour comes from the parent in
// the SCSS module ($accent, $accent-on-dark). Decorative, so aria-hidden.

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

export const IconDatabase = () => (
  <svg {...base}>
    <ellipse cx="12" cy="5.5" rx="7.5" ry="3" />
    <path d="M4.5 5.5v13c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-13" />
    <path d="M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" />
  </svg>
);

export const IconPaperclip = () => (
  <svg {...base}>
    <path d="M21 11.5l-8.6 8.6a5.5 5.5 0 01-7.8-7.8l9-9a3.7 3.7 0 015.2 5.2l-9 9a1.8 1.8 0 01-2.6-2.6l8.4-8.4" />
  </svg>
);

export const IconTrash = () => (
  <svg {...base}>
    <path d="M4 7h16" />
    <path d="M9 7V4.5h6V7" />
    <path d="M6.5 7l1 13h9l1-13" />
    <path d="M10 11v5M14 11v5" />
  </svg>
);

export const IconWrench = () => (
  <svg {...base}>
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  </svg>
);

export const IconAlert = () => (
  <svg {...base}>
    <path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" />
    <path d="M12 9v4M12 17h.01" />
  </svg>
);

export const IconClock = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const IconShield = () => (
  <svg {...base}>
    <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const IconArrowRight = () => (
  <svg {...base}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconCheck = () => (
  <svg {...base}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

export const IconBulb = () => (
  <svg {...base}>
    <path d="M9 18h6M10 21h4" />
    <path d="M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z" />
  </svg>
);

export const IconQuote = () => (
  <svg {...base}>
    <path d="M7 8c-1.7.7-3 2.3-3 4.5V16h5v-4H6.5c0-1.2.7-2 1.7-2.4L7 8z" />
    <path d="M17 8c-1.7.7-3 2.3-3 4.5V16h5v-4h-2.5c0-1.2.7-2 1.7-2.4L17 8z" />
  </svg>
);

export const IconCloud = () => (
  <svg {...base}>
    <path d="M7 18a4.5 4.5 0 01-.5-9A6 6 0 0118 10.5 3.8 3.8 0 0117.5 18H7z" />
  </svg>
);

export const IconServer = () => (
  <svg {...base}>
    <rect x="3" y="4" width="18" height="6" rx="1.5" />
    <rect x="3" y="14" width="18" height="6" rx="1.5" />
    <path d="M7 7h.01M7 17h.01" />
  </svg>
);

export const IconRefresh = () => (
  <svg {...base}>
    <path d="M20 11a8 8 0 00-14.5-4M4 4v4h4" />
    <path d="M4 13a8 8 0 0014.5 4M20 20v-4h-4" />
  </svg>
);

export const IconGauge = () => (
  <svg {...base}>
    <path d="M4 17a8 8 0 1116 0" />
    <path d="M12 17l4-5" />
    <path d="M7 14.5h.01M9 10.5h.01M15 10.5h.01" />
  </svg>
);

export const IconArchive = () => (
  <svg {...base}>
    <rect x="3" y="4" width="18" height="4" rx="1" />
    <path d="M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8" />
    <path d="M10 12h4" />
  </svg>
);

export const IconLayers = () => (
  <svg {...base}>
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M3 13l9 5 9-5" />
  </svg>
);

export const IconHammer = () => (
  <svg {...base}>
    <path d="M13 6l5 5" />
    <path d="M3 21l8-8" />
    <path d="M12 4.5l1.5-1.5 7 7-1.5 1.5-7-7z" />
  </svg>
);

export const IconPlus = () => (
  <svg {...base}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const IconLock = () => (
  <svg {...base}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 018 0v3" />
  </svg>
);

export const IconTrendUp = () => (
  <svg {...base}>
    <path d="M3 17l6-6 4 4 8-8" />
    <path d="M15 7h6v6" />
  </svg>
);

export const IconCompass = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
  </svg>
);
