// app/services/microsoft-365-api-integration/(svgs)/SurfaceIcons.jsx

// Line icons for "where it runs" (ApiSurfaces.jsx). currentColor is set in SCSS.

const base = {
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

// Office window with a task pane on the right
const InsideOffice = () => (
  <svg {...base}>
    <rect x="4" y="7" width="32" height="26" rx="2.5" />
    <path d="M4 13h32M25 13v20" />
    <path d="M9 19h11M9 24h11M29 19h3M29 24h3" />
  </svg>
);

// Browser window
const WebPortal = () => (
  <svg {...base}>
    <rect x="4" y="7" width="32" height="26" rx="2.5" />
    <path d="M4 13h32" />
    <circle cx="8" cy="10" r="0.8" fill="currentColor" />
    <circle cx="11" cy="10" r="0.8" fill="currentColor" />
    <rect x="9" y="18" width="9" height="10" rx="1.5" />
    <path d="M22 19h9M22 23h9M22 27h6" />
  </svg>
);

// Phone with an offline/sync mark
const Mobile = () => (
  <svg {...base}>
    <rect x="11" y="4" width="18" height="32" rx="3" />
    <path d="M18 31h4" />
    <path d="M15 17a5 5 0 0 1 9-2M25 20a5 5 0 0 1-9 2" />
  </svg>
);

// Chat bubbles
const TeamsChat = () => (
  <svg {...base}>
    <path d="M5 9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9l-5 4v-4H7a2 2 0 0 1-2-2z" />
    <path d="M29 15h4a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2v4l-5-4h-7a2 2 0 0 1-2-2v-1" />
  </svg>
);

// Gear inside a cloud: background services
const Background = () => (
  <svg {...base}>
    <path d="M11 30a7 7 0 0 1-1-13.9A9 9 0 0 1 27.5 14 7 7 0 0 1 29 28" />
    <circle cx="20" cy="27" r="3" />
    <path d="M20 21v2M20 31v2M14 27h2M24 27h2M15.8 22.8l1.4 1.4M22.8 29.8l1.4 1.4M15.8 31.2l1.4-1.4M22.8 24.2l1.4-1.4" />
  </svg>
);

// Keyed by the surface id used in ApiSurfaces.jsx
export const surfaceIcons = {
  office: InsideOffice,
  web: WebPortal,
  mobile: Mobile,
  teams: TeamsChat,
  background: Background,
};
