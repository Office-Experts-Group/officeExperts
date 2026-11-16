// /app/blog/power-bi-for-financial-services/(svgs)/Icons.jsx
// 24x24 line icons. They use currentColor, so the colour comes from the CSS
// of the element they sit in. Decorative only (aria-hidden).

import React from "react";

const Icon = ({ children, className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
);

export const IconScale = (p) => (
  <Icon {...p}>
    <path d="M12 3v18M5 7h14M8 21h8" />
    <path d="M5 7l-3 7a3 3 0 0 0 6 0L5 7zM19 7l-3 7a3 3 0 0 0 6 0l-3-7z" />
  </Icon>
);

export const IconTrend = (p) => (
  <Icon {...p}>
    <path d="M3 17l6-6 4 4 8-8" />
    <path d="M15 7h6v6" />
  </Icon>
);

export const IconUsers = (p) => (
  <Icon {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </Icon>
);

export const IconBolt = (p) => (
  <Icon {...p}>
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
  </Icon>
);

export const IconShield = (p) => (
  <Icon {...p}>
    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </Icon>
);

export const IconCheck = (p) => (
  <Icon {...p}>
    <path d="M5 12l5 5L20 7" />
  </Icon>
);

export const IconArrow = (p) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);

export const IconBank = (p) => (
  <Icon {...p}>
    <path d="M3 10l9-6 9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 21h18" />
  </Icon>
);

export const IconBriefcase = (p) => (
  <Icon {...p}>
    <path d="M3 8h18v12H3zM8 8V5h8v3M3 13h18" />
  </Icon>
);

export const IconUmbrella = (p) => (
  <Icon {...p}>
    <path d="M12 3a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9zM12 12v6a2 2 0 0 0 4 0" />
  </Icon>
);

export const IconPie = (p) => (
  <Icon {...p}>
    <path d="M21 12A9 9 0 1 1 12 3v9h9z" />
    <path d="M15 3.5A9 9 0 0 1 20.5 9H15V3.5z" />
  </Icon>
);

export const IconClipboard = (p) => (
  <Icon {...p}>
    <path d="M9 4h6v3H9zM7 5H5v16h14V5h-2M9 12h6M9 16h4" />
  </Icon>
);

export const IconPlug = (p) => (
  <Icon {...p}>
    <path d="M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0V7zM12 17v5" />
  </Icon>
);

export const IconLayout = (p) => (
  <Icon {...p}>
    <path d="M3 4h18v16H3zM3 10h18M10 10v10" />
  </Icon>
);

export const IconCap = (p) => (
  <Icon {...p}>
    <path d="M2 9l10-5 10 5-10 5L2 9zM6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
  </Icon>
);

export const IconLock = (p) => (
  <Icon {...p}>
    <path d="M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4" />
  </Icon>
);

export const IconBulb = (p) => (
  <Icon {...p}>
    <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z" />
  </Icon>
);

export const IconInfo = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 8h.01" />
  </Icon>
);

export const IconAlert = (p) => (
  <Icon {...p}>
    <path d="M12 3l10 18H2L12 3zM12 10v5M12 18h.01" />
  </Icon>
);

export const IconSearch = (p) => (
  <Icon {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </Icon>
);

export const IconChat = (p) => (
  <Icon {...p}>
    <path d="M4 5h16v11H9l-5 4V5z" />
    <path d="M8 9h8M8 12h5" />
  </Icon>
);

export const IconForecast = (p) => (
  <Icon {...p}>
    <path d="M3 21h18M3 16l5-5 4 3 4-6" />
    <path d="M16 8l5-3" strokeDasharray="2 3" />
  </Icon>
);

export const IconRefresh = (p) => (
  <Icon {...p}>
    <path d="M20 11a8 8 0 0 0-14.5-4M4 4v4h4M4 13a8 8 0 0 0 14.5 4M20 20v-4h-4" />
  </Icon>
);

export const IconDoc = (p) => (
  <Icon {...p}>
    <path d="M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h5" />
  </Icon>
);

export const IconTarget = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4" />
    <path d="M12 12h.01" />
  </Icon>
);

export const IconTable = (p) => (
  <Icon {...p}>
    <path d="M3 5h18v14H3zM3 10h18M9 5v14" />
  </Icon>
);
