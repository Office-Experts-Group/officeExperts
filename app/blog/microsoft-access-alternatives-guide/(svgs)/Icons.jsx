// /app/blog/microsoft-access-alternatives-guide/(svgs)/Icons.jsx
// 24x24 line icons. They use currentColor, so the colour comes from the CSS that wraps them.
// Decorative only: every icon is aria-hidden.

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

export const IconSpeed = (props) => (
  <svg {...base} {...props}>
    <path d="M4.5 17.5a8.5 8.5 0 1 1 15 0" />
    <path d="M12 13.5 16 8.5" />
    <circle cx="12" cy="14" r="1.6" />
    <path d="M6.2 11.2l1 .6M12 6.2v1.2M17.8 11.2l-1 .6" />
  </svg>
);

export const IconUsers = (props) => (
  <svg {...base} {...props}>
    <circle cx="9" cy="8.5" r="3" />
    <path d="M3.5 19c.4-3 2.6-4.8 5.5-4.8s5.1 1.8 5.5 4.8" />
    <circle cx="17" cy="9.5" r="2.3" />
    <path d="M16.5 14.4c2.3 0 3.7 1.4 4 3.6" />
  </svg>
);

export const IconCloud = (props) => (
  <svg {...base} {...props}>
    <path d="M7 18.5a4.2 4.2 0 0 1-.4-8.4A5.5 5.5 0 0 1 17 9.3a4.6 4.6 0 0 1 .2 9.2z" />
    <path d="M9.5 14.5 12 12l2.5 2.5M12 12v5" />
  </svg>
);

export const IconLayout = (props) => (
  <svg {...base} {...props}>
    <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
    <path d="M3.5 9.5h17M9.5 9.5v10" />
  </svg>
);

export const IconDatabase = (props) => (
  <svg {...base} {...props}>
    <ellipse cx="12" cy="6" rx="7" ry="2.7" />
    <path d="M5 6v6c0 1.5 3.1 2.7 7 2.7s7-1.2 7-2.7V6" />
    <path d="M5 12v6c0 1.5 3.1 2.7 7 2.7s7-1.2 7-2.7v-6" />
  </svg>
);

export const IconLayers = (props) => (
  <svg {...base} {...props}>
    <path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8z" />
    <path d="m3.5 12.5 8.5 4.5 8.5-4.5M3.5 16.5l8.5 4.5 8.5-4.5" />
  </svg>
);

export const IconAlert = (props) => (
  <svg {...base} {...props}>
    <path d="M12 4 21 19.5H3z" />
    <path d="M12 10v4.2M12 16.8v.2" />
  </svg>
);

export const IconWrench = (props) => (
  <svg {...base} {...props}>
    <path d="M14.5 5.5a4 4 0 0 0 4.7 5.2l-8.4 8.4a2.2 2.2 0 0 1-3.1-3.1l8.4-8.4a4 4 0 0 0-1.6-2.1z" />
    <path d="M7.2 17.2v.1" />
  </svg>
);

export const IconShield = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3.5 19 6v5.5c0 4.2-2.8 7.3-7 9-4.2-1.7-7-4.8-7-9V6z" />
    <path d="m9 12 2.2 2.2L15.2 10" />
  </svg>
);

export const IconPhone = (props) => (
  <svg {...base} {...props}>
    <rect x="7" y="3" width="10" height="18" rx="2.6" />
    <path d="M11 18h2" />
  </svg>
);

export const IconCode = (props) => (
  <svg {...base} {...props}>
    <path d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4M13.5 6l-3 12" />
  </svg>
);

export const IconBox = (props) => (
  <svg {...base} {...props}>
    <path d="m12 3 8 4.2v9.6L12 21l-8-4.2V7.2z" />
    <path d="m4 7.2 8 4.2 8-4.2M12 11.4V21" />
  </svg>
);

export const IconUnlock = (props) => (
  <svg {...base} {...props}>
    <rect x="5" y="10.5" width="14" height="10" rx="2.4" />
    <path d="M8.5 10.5V8a3.5 3.5 0 0 1 6.8-1.2" />
    <path d="M12 14.5v2.2" />
  </svg>
);

export const IconCompass = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m15.5 8.5-2 5-5 2 2-5z" />
  </svg>
);

export const IconClock = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const IconRefresh = (props) => (
  <svg {...base} {...props}>
    <path d="M19.5 12a7.5 7.5 0 0 1-13 5.1M4.5 12a7.5 7.5 0 0 1 13-5.1" />
    <path d="M17.5 3.5v3.8h-3.8M6.5 20.5v-3.8h3.8" />
  </svg>
);

export const IconSearch = (props) => (
  <svg {...base} {...props}>
    <circle cx="10.5" cy="10.5" r="6" />
    <path d="m15 15 5 5" />
  </svg>
);

export const IconPlug = (props) => (
  <svg {...base} {...props}>
    <path d="M9 3.5v4.5M15 3.5v4.5M6.5 8h11v3.2a5.5 5.5 0 0 1-11 0z" />
    <path d="M12 16.7v3.8" />
  </svg>
);

export const IconChart = (props) => (
  <svg {...base} {...props}>
    <path d="M4 20h16M7 16v-5M12 16V6M17 16v-8" />
  </svg>
);

export const IconClipboard = (props) => (
  <svg {...base} {...props}>
    <rect x="5.5" y="4.5" width="13" height="16" rx="2.4" />
    <path d="M9 4.5V3.8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v.7M9 11h6M9 15h4" />
  </svg>
);

export const IconInfo = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 11v5M12 8v.2" />
  </svg>
);

export const IconSpark = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3.5 13.8 9l5.7 1.8-5.7 1.8L12 18.1l-1.8-5.5-5.7-1.8L10.2 9z" />
  </svg>
);

export const IconArrow = (props) => (
  <svg {...base} strokeWidth={2} {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconPlus = (props) => (
  <svg {...base} strokeWidth={2} {...props}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
