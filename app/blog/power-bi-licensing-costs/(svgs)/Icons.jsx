// /app/blog/power-bi-licensing-costs/(svgs)/Icons.jsx
// 24x24 line icons. Colour comes from currentColor (design tokens: $accent, $accent-on-dark).
// Decorative only, so every icon is hidden from assistive tech.

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

export const IconUsers = () => (
  <svg {...base}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 19c0-3.2 2.7-5.2 6-5.2s6 2 6 5.2" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M16.5 14c2.6 0 4.5 1.6 4.5 4.2" />
  </svg>
);

export const IconClock = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7v5l3.2 2" />
  </svg>
);

export const IconServer = () => (
  <svg {...base}>
    <rect x="3.5" y="4" width="17" height="6.5" rx="1.8" />
    <rect x="3.5" y="13.5" width="17" height="6.5" rx="1.8" />
    <path d="M7 7.2h.01M7 16.8h.01M11 7.2h6M11 16.8h6" />
  </svg>
);

export const IconShield = () => (
  <svg {...base}>
    <path d="M12 3.5l7 2.6v5.4c0 4.4-2.8 7.5-7 9-4.2-1.5-7-4.6-7-9V6.1z" />
    <path d="M8.8 12l2.2 2.2 4.2-4.4" />
  </svg>
);

export const IconSeat = () => (
  <svg {...base}>
    <rect x="4" y="3.5" width="16" height="17" rx="2.4" />
    <circle cx="12" cy="10" r="2.6" />
    <path d="M7.5 17c.8-2 2.5-3 4.5-3s3.7 1 4.5 3" />
  </svg>
);

export const IconLayers = () => (
  <svg {...base}>
    <path d="M12 3.5l8.5 4.5-8.5 4.5L3.5 8z" />
    <path d="M3.5 12.2l8.5 4.5 8.5-4.5" />
    <path d="M3.5 16.2l8.5 4.3 8.5-4.3" />
  </svg>
);

export const IconMail = () => (
  <svg {...base}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" />
    <path d="M4.5 7.5l7.5 5.5 7.5-5.5" />
  </svg>
);

export const IconTable = () => (
  <svg {...base}>
    <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
    <path d="M3.5 9.5h17M3.5 14.5h17M9.5 4.5v15" />
  </svg>
);

export const IconCalc = () => (
  <svg {...base}>
    <rect x="5" y="3.5" width="14" height="17" rx="2.2" />
    <rect x="8" y="6.5" width="8" height="3.4" rx="0.8" />
    <path d="M8.5 13.5h.01M12 13.5h.01M15.5 13.5h.01M8.5 17h.01M12 17h.01M15.5 17h.01" />
  </svg>
);

export const IconBulb = () => (
  <svg {...base}>
    <path d="M9 17.5h6M10 20.5h4" />
    <path d="M12 3.5a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2v.2h5.2v-.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3.5z" />
  </svg>
);

export const IconInfo = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 11v5M12 7.8h.01" />
  </svg>
);

export const IconSearch = () => (
  <svg {...base}>
    <circle cx="10.5" cy="10.5" r="6" />
    <path d="M15 15l5 5" />
  </svg>
);

export const IconCheck = () => (
  <svg {...base} strokeWidth={2.2}>
    <path d="M5 12.5l4.2 4.2L19 7.2" />
  </svg>
);

export const IconArrow = () => (
  <svg {...base} width="16" height="16">
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const IconCalendar = () => (
  <svg {...base}>
    <rect x="3.5" y="5" width="17" height="15" rx="2.2" />
    <path d="M3.5 10h17M8 3.5v3M16 3.5v3" />
  </svg>
);

export const IconCloud = () => (
  <svg {...base}>
    <path d="M7 18.5a4.2 4.2 0 0 1-.6-8.4A5.5 5.5 0 0 1 17 9.2a4.7 4.7 0 0 1 .5 9.3z" />
  </svg>
);
