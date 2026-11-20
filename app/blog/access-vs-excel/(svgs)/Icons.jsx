// /app/blog/access-vs-excel/(svgs)/Icons.jsx
// 24x24 line icons. They use currentColor, so colour comes from the CSS of the parent.

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

export const IconChart = (props) => (
  <svg {...base} {...props}>
    <path d="M4 20V4" />
    <path d="M4 20h16" />
    <rect x="7.5" y="12" width="3" height="5" rx="0.6" />
    <rect x="12.5" y="8" width="3" height="9" rx="0.6" />
    <rect x="17.5" y="10.5" width="2" height="6.5" rx="0.6" />
  </svg>
);

export const IconCalc = (props) => (
  <svg {...base} {...props}>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <rect x="8" y="6" width="8" height="3.5" rx="0.6" />
    <path d="M8.5 13h.01M12 13h.01M15.5 13h.01M8.5 16.5h.01M12 16.5h.01M15.5 16.5h.01" />
  </svg>
);

export const IconGrid = (props) => (
  <svg {...base} {...props}>
    <rect x="3.5" y="4" width="17" height="16" rx="2" />
    <path d="M3.5 9.5h17M3.5 14.5h17M9.2 4v16M14.8 4v16" />
  </svg>
);

export const IconUsers = (props) => (
  <svg {...base} {...props}>
    <circle cx="9" cy="8.5" r="3" />
    <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
    <circle cx="17" cy="9.5" r="2.4" />
    <path d="M16.5 14.2c2.4 0 4 1.6 4 4" />
  </svg>
);

export const IconDatabase = (props) => (
  <svg {...base} {...props}>
    <ellipse cx="12" cy="6" rx="7" ry="2.8" />
    <path d="M5 6v6c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8V6" />
    <path d="M5 12v6c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-6" />
  </svg>
);

export const IconLink = (props) => (
  <svg {...base} {...props}>
    <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
    <path d="M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 11 18.7l1-1" />
  </svg>
);

export const IconShield = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3l7 3v5.5c0 4.4-2.9 7.9-7 9.5-4.1-1.6-7-5.1-7-9.5V6l7-3z" />
    <path d="M8.8 12.2l2.2 2.2 4.2-4.4" />
  </svg>
);

export const IconLayers = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3.5l8.5 4.5-8.5 4.5L3.5 8 12 3.5z" />
    <path d="M3.5 12.2L12 16.7l8.5-4.5" />
    <path d="M3.5 16.2L12 20.7l8.5-4.5" />
  </svg>
);

export const IconCheck = (props) => (
  <svg {...base} {...props}>
    <path d="M5 12.5l4.2 4.2L19 7" />
  </svg>
);

export const IconPlus = (props) => (
  <svg {...base} {...props}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const IconArrow = (props) => (
  <svg {...base} {...props}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

export const IconBulb = (props) => (
  <svg {...base} {...props}>
    <path d="M9 18h6M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" />
  </svg>
);

export const IconInfo = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5.5" />
    <path d="M12 7.6h.01" />
  </svg>
);

export const IconCloud = (props) => (
  <svg {...base} {...props}>
    <path d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 17.8 9.6 4.2 4.2 0 0 1 17 18H7z" />
  </svg>
);

export const IconServer = (props) => (
  <svg {...base} {...props}>
    <rect x="4" y="4" width="16" height="6.5" rx="1.8" />
    <rect x="4" y="13.5" width="16" height="6.5" rx="1.8" />
    <path d="M7.5 7.25h.01M7.5 16.75h.01" />
    <path d="M11 7.25h6M11 16.75h6" />
  </svg>
);

export const IconList = (props) => (
  <svg {...base} {...props}>
    <rect x="4" y="3.5" width="16" height="17" rx="2" />
    <path d="M8 8.5h.01M8 12h.01M8 15.5h.01" />
    <path d="M11 8.5h5M11 12h5M11 15.5h5" />
  </svg>
);

export const IconPhone = (props) => (
  <svg {...base} {...props}>
    <rect x="7" y="3" width="10" height="18" rx="2.2" />
    <path d="M10.5 17.5h3" />
  </svg>
);

export const IconDashboard = (props) => (
  <svg {...base} {...props}>
    <rect x="3.5" y="4" width="17" height="16" rx="2" />
    <path d="M7.5 15v-2.5M11 15V9.5M14.5 15v-4M18 15V8" />
  </svg>
);
