// /app/services/microsoft-excel/(svgs)/ExcelIcons.jsx
// Small UI icons for the Microsoft Excel hub. All decorative
// (aria-hidden), drawn with currentColor so the parent sets the colour.

const iconProps = {
  width: "1em",
  height: "1em",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

export const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" {...iconProps}>
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export const PlusIcon = () => (
  <svg viewBox="0 0 16 16" {...iconProps}>
    <path d="M8 3v10M3 8h10" />
  </svg>
);

// Hero trust row
export const ClockIcon = () => (
  <svg viewBox="0 0 20 20" {...iconProps}>
    <circle cx="10" cy="10" r="7.5" />
    <path d="M10 5.5V10l3 2" />
  </svg>
);

export const ExpertIcon = () => (
  <svg viewBox="0 0 20 20" {...iconProps}>
    <circle cx="10" cy="7" r="3.5" />
    <path d="M3.5 17.5c.8-3.3 3.4-5 6.5-5s5.7 1.7 6.5 5" />
    <path d="M13.5 3.5l1.2 1.2 2.3-2.4" />
  </svg>
);

export const MapIcon = () => (
  <svg viewBox="0 0 20 20" {...iconProps}>
    <path d="M10 18s-5.5-5.2-5.5-9.5a5.5 5.5 0 0 1 11 0C15.5 12.8 10 18 10 18z" />
    <circle cx="10" cy="8.5" r="2" />
  </svg>
);

// Hero "How we work" steps
export const ChatIcon = () => (
  <svg viewBox="0 0 20 20" {...iconProps}>
    <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v6a2.5 2.5 0 0 1-2.5 2.5H9l-4 3v-3h0.5A2.5 2.5 0 0 1 3 11.5z" />
    <path d="M7 7.5h6M7 10.5h4" />
  </svg>
);

export const QuoteIcon = () => (
  <svg viewBox="0 0 20 20" {...iconProps}>
    <path d="M5 2.5h7l3.5 3.5v11.5H5z" />
    <path d="M12 2.5V6h3.5M8 10h5M8 13h3" />
  </svg>
);

export const BuildIcon = () => (
  <svg viewBox="0 0 20 20" {...iconProps}>
    <rect x="2.5" y="3.5" width="15" height="13" rx="2" />
    <path d="M2.5 8h15M8 8v8.5M12.5 11.5l1.5 1.5 2.5-2.5" />
  </svg>
);

export const SupportIcon = () => (
  <svg viewBox="0 0 20 20" {...iconProps}>
    <path d="M4 11V9a6 6 0 0 1 12 0v2" />
    <rect x="2.5" y="10.5" width="3.5" height="5" rx="1.5" />
    <rect x="14" y="10.5" width="3.5" height="5" rx="1.5" />
    <path d="M16 15.5c0 1.5-1.5 2.5-4 2.5" />
  </svg>
);

// "More Excel help" list in the services section
export const AddInIcon = () => (
  <svg viewBox="0 0 24 24" {...iconProps}>
    <rect x="3" y="4" width="18" height="16" rx="2.5" />
    <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
    <path d="M12 12.5v5M9.5 15h5" />
  </svg>
);

export const UpgradeIcon = () => (
  <svg viewBox="0 0 24 24" {...iconProps}>
    <rect x="3" y="11" width="8" height="9" rx="1.5" />
    <rect x="13" y="4" width="8" height="16" rx="1.5" />
    <path d="M5 8.5a6 6 0 0 1 6-4.5M9.5 2.5 11 4l-1.5 1.5" />
  </svg>
);

export const CloudIcon = () => (
  <svg viewBox="0 0 24 24" {...iconProps}>
    <path d="M7 18.5a4.5 4.5 0 0 1-.6-9 6 6 0 0 1 11.4 1.6 3.8 3.8 0 0 1-.3 7.4z" />
    <path d="M9.5 14h5M12 11.5V16.5" />
  </svg>
);

export const PlugIcon = () => (
  <svg viewBox="0 0 24 24" {...iconProps}>
    <path d="M9 3v4M15 3v4M7 7h10v3a5 5 0 0 1-10 0z" />
    <path d="M12 15v3a3 3 0 0 0 3 3h3" />
  </svg>
);

export const TrainingIcon = () => (
  <svg viewBox="0 0 24 24" {...iconProps}>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M8 20h8M12 16v4M7 12l3-3 2.5 2L17 7.5" />
  </svg>
);
