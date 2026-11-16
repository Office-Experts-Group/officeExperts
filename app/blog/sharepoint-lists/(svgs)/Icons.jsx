// /app/blog/sharepoint-lists/(svgs)/Icons.jsx
// 24x24 line icons. Colour comes from currentColor (set in the SCSS module).

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

export const IconInfo = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 8h.01" />
  </svg>
);

export const IconBulb = () => (
  <svg {...base}>
    <path d="M9 18h6M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
  </svg>
);

export const IconWarning = () => (
  <svg {...base}>
    <path d="M12 3 2.5 20h19L12 3z" />
    <path d="M12 10v5M12 18h.01" />
  </svg>
);

export const IconCheck = () => (
  <svg {...base}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

export const IconMinus = () => (
  <svg {...base}>
    <path d="M6 12h12" />
  </svg>
);

export const IconArrow = () => (
  <svg {...base}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconPlay = () => (
  <svg {...base}>
    <path d="M8 5v14l11-7z" />
  </svg>
);

export const IconDatabase = () => (
  <svg {...base}>
    <ellipse cx="12" cy="6" rx="8" ry="3" />
    <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
    <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
  </svg>
);

export const IconLink = () => (
  <svg {...base}>
    <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
    <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
  </svg>
);

export const IconLayers = () => (
  <svg {...base}>
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M3 12.5l9 5 9-5" />
    <path d="M3 17l9 5 9-5" />
  </svg>
);
