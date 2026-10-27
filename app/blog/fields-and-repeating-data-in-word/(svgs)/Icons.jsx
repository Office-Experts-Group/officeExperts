// /app/blog/fields-and-repeating-data-in-word/(svgs)/Icons.jsx
// 24x24 line icons. Stroke is currentColor so the SCSS controls the colour.

const Svg = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const ClockIcon = () => (
  <Svg>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Svg>
);

export const ShieldIcon = () => (
  <Svg>
    <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </Svg>
);

export const LinkIcon = () => (
  <Svg>
    <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
    <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
  </Svg>
);

export const LayersIcon = () => (
  <Svg>
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M3 13l9 5 9-5" />
  </Svg>
);

export const CodeIcon = () => (
  <Svg>
    <path d="M8 8l-4 4 4 4" />
    <path d="M16 8l4 4-4 4" />
    <path d="M13.5 5l-3 14" />
  </Svg>
);

export const UsersIcon = () => (
  <Svg>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
    <path d="M16 5a3.5 3.5 0 0 1 0 6.5" />
    <path d="M18 14.5c2 .8 3.5 2.5 3.5 5.5" />
  </Svg>
);

export const CheckIcon = () => (
  <Svg>
    <path d="M5 12.5l4.5 4.5L19 7" />
  </Svg>
);

export const AlertIcon = () => (
  <Svg>
    <path d="M12 3l10 18H2L12 3z" />
    <path d="M12 10v4" />
    <path d="M12 17.5v.01" />
  </Svg>
);

export const BulbIcon = () => (
  <Svg>
    <path d="M9 18h6" />
    <path d="M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
  </Svg>
);

export const InfoIcon = () => (
  <Svg>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 7.5v.01" />
  </Svg>
);

export const ArrowIcon = () => (
  <Svg>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </Svg>
);

export const FileIcon = () => (
  <Svg>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6" />
    <path d="M9 17h6" />
  </Svg>
);

export const LockIcon = () => (
  <Svg>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </Svg>
);

export const RefreshIcon = () => (
  <Svg>
    <path d="M20 11a8 8 0 0 0-14.5-4L4 9" />
    <path d="M4 4v5h5" />
    <path d="M4 13a8 8 0 0 0 14.5 4L20 15" />
    <path d="M20 20v-5h-5" />
  </Svg>
);
