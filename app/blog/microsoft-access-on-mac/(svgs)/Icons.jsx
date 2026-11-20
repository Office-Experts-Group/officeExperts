// /app/blog/microsoft-access-on-mac/(svgs)/Icons.jsx
// 24x24 line icons. Stroke is currentColor, so each icon takes the colour of
// the chip or text it sits in. Decorative only (aria-hidden).

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

export const CheckIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M5 12.5l4.2 4.2L19 7" />
  </svg>
);

export const MinusIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M6 12h12" />
  </svg>
);

export const ArrowRightIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ChevronIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const InfoIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 8h.01" />
  </svg>
);

export const BulbIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
  </svg>
);

export const WarningIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3l10 18H2L12 3zM12 10v5M12 18h.01" />
  </svg>
);

export const LockIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);

export const LayersIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5" />
  </svg>
);

export const LaptopIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="4" y="5" width="16" height="11" rx="2" />
    <path d="M2 19h20" />
  </svg>
);

export const CloudIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 8.5a4.75 4.75 0 0 1 .5 9.5H7z" />
  </svg>
);

export const ServerIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="4" width="18" height="7" rx="2" />
    <rect x="3" y="13" width="18" height="7" rx="2" />
    <path d="M7 7.5h.01M7 16.5h.01" />
  </svg>
);

export const DatabaseIcon = (props) => (
  <svg {...base} {...props}>
    <ellipse cx="12" cy="5.5" rx="8" ry="3" />
    <path d="M4 5.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6M4 11.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
  </svg>
);

export const GridIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 10h18M3 15h18M9 4v16" />
  </svg>
);

export const UsersIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 20a6 6 0 0 1 12 0" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M16.5 14.2A5 5 0 0 1 21 19" />
  </svg>
);

export const ShieldIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3l8 3v6c0 4.5-3.2 7.6-8 9-4.8-1.4-8-4.5-8-9V6l8-3z" />
    <path d="M9 12l2.2 2.2L15.5 10" />
  </svg>
);

export const ClockIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const QuoteIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M9 8H6v5h3l-1.5 4M18 8h-3v5h3l-1.5 4" />
  </svg>
);

export const RefreshIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8M20 4v4h-4M20 12a8 8 0 0 1-13.7 5.6L4 16M4 20v-4h4" />
  </svg>
);

export const EyeIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const TargetIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" />
  </svg>
);

export const CoinIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M14.8 9.2c-.6-.8-1.6-1.2-2.8-1.2-1.6 0-2.7.8-2.7 2 0 1.1.9 1.6 2.7 2s2.8.9 2.8 2.1c0 1.2-1.2 2-2.8 2-1.3 0-2.3-.5-2.9-1.3M12 6v2M12 16v2" />
  </svg>
);

export const GaugeIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M4 17a9 9 0 1 1 16 0" />
    <path d="M12 14l4-4" />
    <circle cx="12" cy="14" r="1" />
  </svg>
);

export const BoxIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M3 7l9-4 9 4v10l-9 4-9-4V7zM3 7l9 4 9-4M12 11v10" />
  </svg>
);

export const ChipIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="7" y="7" width="10" height="10" rx="1.5" />
    <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
  </svg>
);

export const BuildingIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M5 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M15 10h3a1 1 0 0 1 1 1v10M3 21h18M9 8h2M9 12h2M9 16h2" />
  </svg>
);

export const PlugIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0V8zM12 17v4" />
  </svg>
);
