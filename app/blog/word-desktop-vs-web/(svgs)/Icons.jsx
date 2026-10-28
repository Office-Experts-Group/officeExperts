// /app/blog/word-desktop-vs-web/(svgs)/Icons.jsx
// 24x24 line icons. Stroke uses currentColor, so colour comes from the SCSS module
// ($accent on light panels, $accent-on-dark on the hero). Decorative only (aria-hidden).

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

export const IconWeb = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.8 2.6 4 5.6 4 9s-1.2 6.4-4 9c-2.8-2.6-4-5.6-4-9s1.2-6.4 4-9z" />
  </svg>
);

export const IconDesktop = () => (
  <svg {...base}>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M9 20h6" />
    <path d="M12 16v4" />
  </svg>
);

export const IconCloud = () => (
  <svg {...base}>
    <path d="M7 18a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 8.5a4.75 4.75 0 0 1 .5 9.5H7z" />
  </svg>
);

export const IconUsers = () => (
  <svg {...base}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 19c0-3.2 2.7-5.5 6-5.5s6 2.3 6 5.5" />
    <path d="M16 5.2a3 3 0 0 1 0 5.6" />
    <path d="M18 14c1.8.7 3 2.3 3 5" />
  </svg>
);

export const IconInfo = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 7.6v.1" />
  </svg>
);

export const IconBulb = () => (
  <svg {...base}>
    <path d="M9 18h6" />
    <path d="M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
  </svg>
);

export const IconCheck = () => (
  <svg {...base}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

export const IconQuote = () => (
  <svg {...base}>
    <path d="M10 8H6.5A2.5 2.5 0 0 0 4 10.5V14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2H6.5" />
    <path d="M20 8h-3.5A2.5 2.5 0 0 0 14 10.5V14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2h-3.5" />
  </svg>
);

export const IconClock = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const IconLayers = () => (
  <svg {...base}>
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M3 13l9 5 9-5" />
  </svg>
);

export const IconCoin = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M14.5 9.2c-.4-.8-1.4-1.2-2.5-1.2-1.4 0-2.5.7-2.5 1.8 0 2.4 5 1.2 5 3.6 0 1.1-1.1 1.8-2.5 1.8-1.2 0-2.2-.5-2.6-1.4" />
    <path d="M12 6.5V8m0 8v1.5" />
  </svg>
);

export const IconBolt = () => (
  <svg {...base}>
    <path d="M13 3L5 13.5h6L10 21l8-10.5h-6L13 3z" />
  </svg>
);

export const IconArrow = () => (
  <svg {...base}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

export const IconFile = () => (
  <svg {...base}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6M9 17h4" />
  </svg>
);

export const IconShield = () => (
  <svg {...base}>
    <path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6l8-3z" />
    <path d="M9 12l2.2 2.2L15.5 10" />
  </svg>
);

export const icons = {
  web: IconWeb,
  desktop: IconDesktop,
  cloud: IconCloud,
  users: IconUsers,
  info: IconInfo,
  bulb: IconBulb,
  check: IconCheck,
  quote: IconQuote,
  clock: IconClock,
  layers: IconLayers,
  coin: IconCoin,
  bolt: IconBolt,
  arrow: IconArrow,
  file: IconFile,
  shield: IconShield,
};
