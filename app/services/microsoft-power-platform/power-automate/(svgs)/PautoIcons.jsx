// /app/services/microsoft-power-platform/power-automate/(svgs)/PautoIcons.jsx
// Small UI icons. All use currentColor, so the parent sets the colour.

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

const Icon24 = ({ size = 22, children }) => (
  <svg {...base} width={size} height={size} viewBox="0 0 24 24">
    {children}
  </svg>
);

export const ArrowIcon = ({ size = 16 }) => (
  <svg
    {...base}
    width={size}
    height={size}
    viewBox="0 0 16 16"
    strokeWidth="1.6"
  >
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export const PlusIcon = ({ size = 20 }) => (
  <Icon24 size={size}>
    <path d="M12 5v14M5 12h14" />
  </Icon24>
);

export const CheckIcon = ({ size = 14 }) => (
  <svg {...base} width={size} height={size} viewBox="0 0 24 24" strokeWidth="3">
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

export const BoltIcon = ({ size }) => (
  <Icon24 size={size}>
    <path d="M13 3L5 13.5h6L10 21l8-10.5h-6L13 3z" />
  </Icon24>
);

export const ClockIcon = ({ size }) => (
  <Icon24 size={size}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Icon24>
);

export const BranchIcon = ({ size }) => (
  <Icon24 size={size}>
    <circle cx="6" cy="5.5" r="2" />
    <circle cx="6" cy="18.5" r="2" />
    <circle cx="18" cy="9" r="2" />
    <path d="M6 7.5v9M6 13c0-2.5 2-4 5-4h5" />
  </Icon24>
);

export const EyeIcon = ({ size }) => (
  <Icon24 size={size}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </Icon24>
);

export const QueueIcon = ({ size }) => (
  <Icon24 size={size}>
    <rect x="4" y="4" width="16" height="4" rx="1.2" />
    <rect x="4" y="10" width="16" height="4" rx="1.2" />
    <rect x="4" y="16" width="10" height="4" rx="1.2" />
  </Icon24>
);

export const BellIcon = ({ size }) => (
  <Icon24 size={size}>
    <path d="M6 17v-6a6 6 0 1 1 12 0v6l1.5 2h-15L6 17z" />
    <path d="M10 21a2 2 0 0 0 4 0" />
  </Icon24>
);

export const BadgeIcon = ({ size }) => (
  <Icon24 size={size}>
    <circle cx="12" cy="9" r="5" />
    <path d="M8.5 13.5L7 21l5-3 5 3-1.5-7.5" />
  </Icon24>
);

export const PinIcon = ({ size }) => (
  <Icon24 size={size}>
    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Icon24>
);

export const LockIcon = ({ size }) => (
  <Icon24 size={size}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </Icon24>
);
