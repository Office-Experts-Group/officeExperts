// /app/blog/spreadsheet-errors-in-excel/(svgs)/Icons.jsx
// 24x24 line icons. currentColor, decorative (aria-hidden).

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

export const IconBrokenLink = (props) => (
  <svg {...base} {...props}>
    <path d="M9.5 14.5l-2 2a3.5 3.5 0 01-5-5l2-2" />
    <path d="M14.5 9.5l2-2a3.5 3.5 0 015 5l-2 2" />
    <path d="M8 4v2M4 8h2M16 20v-2M20 16h-2" />
  </svg>
);

export const IconPerson = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="8" r="3.6" />
    <path d="M4.5 20c.6-3.6 3.6-5.6 7.5-5.6s6.9 2 7.5 5.6" />
  </svg>
);

export const IconEye = (props) => (
  <svg {...base} {...props}>
    <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" />
    <circle cx="12" cy="12" r="2.8" />
  </svg>
);

export const IconGauge = (props) => (
  <svg {...base} {...props}>
    <path d="M4 17a8.5 8.5 0 1116 0" />
    <path d="M12 17l4-5" />
    <circle cx="12" cy="17" r="1" />
  </svg>
);

export const IconHash = (props) => (
  <svg {...base} {...props}>
    <path d="M9 4L7 20M17 4l-2 16M4 9h16M3.5 15h16" />
  </svg>
);

export const IconCopy = (props) => (
  <svg {...base} {...props}>
    <rect x="8" y="8" width="12" height="12" rx="2" />
    <path d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2" />
  </svg>
);

export const IconTag = (props) => (
  <svg {...base} {...props}>
    <path d="M3 12V4h8l10 10-8 8L3 12z" />
    <circle cx="7.5" cy="8.5" r="1.2" />
  </svg>
);

export const IconLock = (props) => (
  <svg {...base} {...props}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 018 0v3" />
  </svg>
);

export const IconSearch = (props) => (
  <svg {...base} {...props}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16l4.5 4.5" />
  </svg>
);

export const IconRefresh = (props) => (
  <svg {...base} {...props}>
    <path d="M20 12a8 8 0 01-14 5.3M4 12a8 8 0 0114-5.3" />
    <path d="M18 3v4h-4M6 21v-4h4" />
  </svg>
);

export const IconCalendar = (props) => (
  <svg {...base} {...props}>
    <rect x="4" y="5" width="16" height="15" rx="2" />
    <path d="M4 10h16M9 3v4M15 3v4" />
  </svg>
);

export const IconCheck = (props) => (
  <svg {...base} {...props}>
    <path d="M4.5 12.5l5 5 10-11" />
  </svg>
);

export const IconWarn = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3.5l9.5 16.5h-19L12 3.5z" />
    <path d="M12 10v4.5" />
    <circle cx="12" cy="17.2" r="0.6" />
  </svg>
);

export const IconNote = (props) => (
  <svg {...base} {...props}>
    <path d="M6 3h9l4 4v14H6z" />
    <path d="M14 3v5h5M9 13h7M9 17h5" />
  </svg>
);

export const IconBolt = (props) => (
  <svg {...base} {...props}>
    <path d="M13 3L5 13.5h6L10 21l8-10.5h-6L13 3z" />
  </svg>
);

export const IconGrid = (props) => (
  <svg {...base} {...props}>
    <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
    <path d="M3.5 10h17M3.5 15h17M9.5 4.5v15M15 4.5v15" />
  </svg>
);

export const IconInfo = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5.5" />
    <circle cx="12" cy="7.8" r="0.6" />
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
