// /app/blog/ultimate-guide-to-word-templates/(svgs)/Icons.jsx
// 24x24 line icons. Stroke is currentColor so SCSS controls the colour
// (tokens: $accent, $accent-light, $white).

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

export const IconLayout = () => (
  <svg {...base}>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M4 8h16M9 8v13" />
  </svg>
);

export const IconStyles = () => (
  <svg {...base}>
    <path d="M5 6V4h14v2M12 4v16M9 20h6" />
  </svg>
);

export const IconText = () => (
  <svg {...base}>
    <path d="M4 6h16M4 11h16M4 16h10" />
  </svg>
);

export const IconBrand = () => (
  <svg {...base}>
    <circle cx="12" cy="9" r="5" />
    <path d="M9 13.5 8 21l4-2 4 2-1-7.5" />
  </svg>
);

export const IconToolbar = () => (
  <svg {...base}>
    <rect x="3" y="5" width="18" height="6" rx="1.5" />
    <path d="M7 8h.01M11 8h.01M15 8h.01M5 16h14M5 19.5h9" />
  </svg>
);

export const IconMacro = () => (
  <svg {...base}>
    <path d="M13 3 5 13h6l-1 8 8-10h-6l1-8Z" />
  </svg>
);

export const IconLayers = () => (
  <svg {...base}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
  </svg>
);

export const IconClock = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const IconShield = () => (
  <svg {...base}>
    <path d="M12 3 5 6v5.5c0 4.2 2.8 7.6 7 9.5 4.2-1.9 7-5.3 7-9.5V6l-7-3Z" />
    <path d="m9 12 2.2 2.2L15.5 10" />
  </svg>
);

export const IconUser = () => (
  <svg {...base}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4.5 20c.8-3.6 3.8-5.5 7.5-5.5s6.7 1.9 7.5 5.5" />
  </svg>
);

export const IconGroup = () => (
  <svg {...base}>
    <circle cx="9" cy="8.5" r="3.2" />
    <circle cx="17" cy="9.5" r="2.5" />
    <path d="M3 19c.6-3 3-4.7 6-4.7s5.4 1.7 6 4.7M16 14.6c2.4 0 4.4 1.2 5 3.9" />
  </svg>
);

export const IconGlobe = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5c2.4 2.4 3.4 5.2 3.4 8.5s-1 6.1-3.4 8.5c-2.4-2.4-3.4-5.2-3.4-8.5s1-6.1 3.4-8.5Z" />
  </svg>
);

export const IconPlug = () => (
  <svg {...base}>
    <path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0V8ZM12 17v4" />
  </svg>
);

export const IconDocument = () => (
  <svg {...base}>
    <path d="M7 3h7l4 4v14H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
    <path d="M14 3v4h4M9 12h6M9 16h6" />
  </svg>
);

export const IconChart = () => (
  <svg {...base}>
    <path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6" />
  </svg>
);

export const IconContract = () => (
  <svg {...base}>
    <path d="M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
    <path d="M9 8h6M9 12h6M9 17c1-1.5 1.8-1.5 2.4 0s1.4 1.5 2.6 0" />
  </svg>
);

export const IconInvoice = () => (
  <svg {...base}>
    <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" />
    <path d="M9 8h6M9 12h6" />
  </svg>
);

export const IconCalendar = () => (
  <svg {...base}>
    <rect x="3.5" y="5" width="17" height="15" rx="2" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </svg>
);

export const IconMegaphone = () => (
  <svg {...base}>
    <path d="M4 10v4a1 1 0 0 0 1 1h3l8 4V5L8 9H5a1 1 0 0 0-1 1ZM19 9.5v5" />
  </svg>
);

export const IconBook = () => (
  <svg {...base}>
    <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z" />
    <path d="M4 19a2 2 0 0 1 2-2h13" />
  </svg>
);

export const IconMail = () => (
  <svg {...base}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const IconFolder = () => (
  <svg {...base}>
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
  </svg>
);

export const IconSearch = () => (
  <svg {...base}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4.5 4.5" />
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

export const IconBulb = () => (
  <svg {...base}>
    <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z" />
  </svg>
);

export const IconWarning = () => (
  <svg {...base}>
    <path d="M12 4 3 19h18L12 4Z" />
    <path d="M12 10v4M12 17h.01" />
  </svg>
);

export const IconStar = () => (
  <svg {...base}>
    <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.3-4.1 5.9-.9L12 3.5Z" />
  </svg>
);
