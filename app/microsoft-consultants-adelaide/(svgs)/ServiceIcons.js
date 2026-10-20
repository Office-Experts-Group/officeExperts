// app/microsoft-consultants-adelaide/(svgs)/ServiceIcons.js
import React from "react";

// ─────────────────────────────────────────────────────────────
// Eight line icons for the services section.
// All are 48 × 48, drawn with currentColor so the stylesheet sets the colour
// (accent by default, lighter on the dark AI card). A faint fill gives each
// one a little weight without breaking the outlined look.
// ─────────────────────────────────────────────────────────────

const Svg = ({ children }) => (
  <svg
    viewBox="0 0 48 48"
    width="100%"
    height="100%"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
);

const FILL = "currentColor";
const FILL_OPACITY = 0.14;

// Excel: a worksheet with one highlighted block of cells
export const ExcelIcon = () => (
  <Svg>
    <rect x="6" y="8" width="36" height="32" rx="4" />
    <rect
      x="19"
      y="29"
      width="23"
      height="11"
      rx="0"
      fill={FILL}
      fillOpacity={FILL_OPACITY}
      stroke="none"
    />
    <path d="M6 18.5h36M6 29h36M19 8v32" />
  </Svg>
);

// Power Platform: layered apps with a lightning bolt for automation
export const PowerPlatformIcon = () => (
  <Svg>
    <path d="M12 14v-4a6 6 0 0 1 6-6h18a6 6 0 0 1 6 6v18a6 6 0 0 1-6 6h-1" />
    <rect
      x="5"
      y="14"
      width="30"
      height="30"
      rx="6"
      fill={FILL}
      fillOpacity={FILL_OPACITY}
    />
    <path d="M22 19l-8 12h6.5L18 40l9-13h-6.5z" />
  </Svg>
);

// AI & custom agents: a chat bubble holding a spark, with a second spark outside
export const AiAgentIcon = () => (
  <Svg>
    <path
      d="M10 9h22a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H21l-8 7v-7h-3a5 5 0 0 1-5-5V14a5 5 0 0 1 5-5z"
      fill={FILL}
      fillOpacity={FILL_OPACITY}
    />
    <path d="M21 14c.8 4 2.6 5.8 6.6 6.6-4 .8-5.8 2.6-6.6 6.6-.8-4-2.6-5.8-6.6-6.6 4-.8 5.8-2.6 6.6-6.6z" />
    <path d="M38.5 3.5c.4 2 1.3 2.9 3.3 3.3-2 .4-2.9 1.3-3.3 3.3-.4-2-1.3-2.9-3.3-3.3 2-.4 2.9-1.3 3.3-3.3z" />
  </Svg>
);

// Word: a page with a folded corner and lines of text
export const WordIcon = () => (
  <Svg>
    <path
      d="M12 5h17l10 10v28H12z"
      fill={FILL}
      fillOpacity={FILL_OPACITY}
    />
    <path d="M29 5v10h10" />
    <path d="M17.5 24h16M17.5 30h16M17.5 36h9" />
  </Svg>
);

// Access: a database cylinder
export const AccessIcon = () => (
  <Svg>
    <path
      d="M11 10v28c0 3 6 5 13 5s13-2 13-5V10"
      fill={FILL}
      fillOpacity={FILL_OPACITY}
      stroke="none"
    />
    <ellipse cx="24" cy="10" rx="13" ry="5" />
    <path d="M11 10v28c0 3 6 5 13 5s13-2 13-5V10" />
    <path d="M11 19.5c0 3 6 5 13 5s13-2 13-5M11 29c0 3 6 5 13 5s13-2 13-5" />
  </Svg>
);

// PowerPoint: a slide on a stand, with a small chart on it
export const PowerPointIcon = () => (
  <Svg>
    <rect
      x="5"
      y="7"
      width="38"
      height="26"
      rx="3.5"
      fill={FILL}
      fillOpacity={FILL_OPACITY}
    />
    <path d="M14 27v-6M21 27v-11M28 27v-8M35 27v-14" />
    <path d="M24 33v8M16 42h16" />
  </Svg>
);

// Microsoft 365: a cloud with a small connected group inside
export const Microsoft365Icon = () => (
  <Svg>
    <path
      d="M14 38c-5.5 0-9-3.7-9-8.2 0-4.2 3.2-7.4 7.6-7.8C13.7 15.5 18.5 11 24.5 11 30.7 11 35.6 15.4 36.2 21.6 41 21.9 43 25.3 43 29.5c0 4.7-3.5 8.5-8.5 8.5z"
      fill={FILL}
      fillOpacity={FILL_OPACITY}
    />
    <circle cx="24" cy="21.5" r="2.3" />
    <circle cx="17.5" cy="31" r="2.3" />
    <circle cx="30.5" cy="31" r="2.3" />
    <path d="M22.8 23.6l-3.9 5.3M25.2 23.6l3.9 5.3M19.8 31h8.4" />
  </Svg>
);

// Custom software & integration: code brackets with a slash
export const CustomIcon = () => (
  <Svg>
    <rect
      x="4"
      y="8"
      width="40"
      height="32"
      rx="4"
      fill={FILL}
      fillOpacity={FILL_OPACITY}
    />
    <path d="M18 17l-8 7 8 7M30 17l8 7-8 7M26.5 14l-5 20" />
  </Svg>
);

// Keyed by the `id` of each service in AdelaideServices
export const serviceIcons = {
  excel: ExcelIcon,
  "power-platform": PowerPlatformIcon,
  "ai-agents": AiAgentIcon,
  word: WordIcon,
  access: AccessIcon,
  powerpoint: PowerPointIcon,
  "microsoft-365": Microsoft365Icon,
  custom: CustomIcon,
};
