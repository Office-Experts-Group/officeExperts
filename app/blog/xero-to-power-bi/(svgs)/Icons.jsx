// /app/blog/xero-to-power-bi/(svgs)/Icons.jsx
// 24x24 line icons, currentColor. Decorative: always aria-hidden.

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

export const IconError = () => (
  <svg {...base}>
    <path d="M12 3.5 2.8 19.5h18.4L12 3.5Z" />
    <path d="M12 10v4.5" />
    <circle cx="12" cy="17" r="0.6" fill="currentColor" />
  </svg>
);

export const IconClock = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.2 2" />
  </svg>
);

export const IconLayers = () => (
  <svg {...base}>
    <path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z" />
    <path d="m3 12 9 4.5 9-4.5" />
    <path d="m3 16.5 9 4.5 9-4.5" />
  </svg>
);

export const IconMerge = () => (
  <svg {...base}>
    <path d="M5 4v4a4 4 0 0 0 4 4h6a4 4 0 0 1 4 4v4" />
    <path d="M19 4v4a4 4 0 0 1-4 4" />
    <path d="m16 17 3 3 3-3" />
  </svg>
);

export const IconInfo = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <circle cx="12" cy="7.8" r="0.6" fill="currentColor" />
  </svg>
);

export const IconBulb = () => (
  <svg {...base}>
    <path d="M9 18h6" />
    <path d="M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V16h5.2v-.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z" />
  </svg>
);

export const IconShield = () => (
  <svg {...base}>
    <path d="M12 3 4.5 6v5.5c0 4.5 3 8 7.5 9.5 4.5-1.5 7.5-5 7.5-9.5V6L12 3Z" />
    <path d="m9 12 2.2 2.2L15.5 10" />
  </svg>
);

export const IconKey = () => (
  <svg {...base}>
    <circle cx="8" cy="15" r="4" />
    <path d="m11 12 8-8" />
    <path d="m16 7 2.5 2.5" />
    <path d="m14 9 2 2" />
  </svg>
);

export const IconLock = () => (
  <svg {...base}>
    <rect x="5" y="11" width="14" height="9.5" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);

export const IconUsers = () => (
  <svg {...base}>
    <circle cx="9" cy="8.5" r="3.2" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <path d="M16 5.5a3.2 3.2 0 0 1 0 6" />
    <path d="M18 14.3c1.8.7 3 2.5 3 4.7" />
  </svg>
);

export const IconGlobe = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.6 2.6 3.8 5.6 3.8 9S14.6 18.4 12 21c-2.6-2.6-3.8-5.6-3.8-9S9.4 5.6 12 3Z" />
  </svg>
);

export const IconList = () => (
  <svg {...base}>
    <path d="M9 6h11" />
    <path d="M9 12h11" />
    <path d="M9 18h11" />
    <circle cx="4.5" cy="6" r="1" fill="currentColor" />
    <circle cx="4.5" cy="12" r="1" fill="currentColor" />
    <circle cx="4.5" cy="18" r="1" fill="currentColor" />
  </svg>
);

export const IconMapPin = () => (
  <svg {...base}>
    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const IconCheck = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8 12.3 2.8 2.8L16 9.5" />
  </svg>
);

export const IconChevron = () => (
  <svg {...base}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const IconQuote = () => (
  <svg {...base}>
    <path d="M9.5 7C6.5 8 5 10.2 5 13v4h5v-5H7.5c.1-1.5.9-2.5 2-3" />
    <path d="M18.5 7C15.5 8 14 10.2 14 13v4h5v-5h-2.5c.1-1.5.9-2.5 2-3" />
  </svg>
);

export const IconRefresh = () => (
  <svg {...base}>
    <path d="M20 11a8 8 0 0 0-14.5-3.5L4 9" />
    <path d="M4 4v5h5" />
    <path d="M4 13a8 8 0 0 0 14.5 3.5L20 15" />
    <path d="M20 20v-5h-5" />
  </svg>
);

export const IconArrow = () => (
  <svg {...base}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const IconCalendar = () => (
  <svg {...base}>
    <rect x="4" y="5.5" width="16" height="14.5" rx="2.5" />
    <path d="M4 10h16" />
    <path d="M8.5 3.5v4" />
    <path d="M15.5 3.5v4" />
  </svg>
);

export const IconDatabase = () => (
  <svg {...base}>
    <ellipse cx="12" cy="6" rx="7" ry="3" />
    <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
    <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
  </svg>
);
