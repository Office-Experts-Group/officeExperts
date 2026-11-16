// /app/services/microsoft-power-platform/(svgs)/PphIcons.jsx
// Small UI icons. All decorative (aria-hidden) and drawn in currentColor, so the
// CSS module sets the colour. Colours come from the module, not from this file.

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

export const PphArrowIcon = ({ size = 16, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const PphPhoneIcon = ({ size = 18, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <path d="M5 4h3.5l1.8 4.6-2.3 1.4a11.5 11.5 0 0 0 6 6l1.4-2.3L20 15.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

export const PphPlusIcon = ({ size = 18, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

// Calendar with a small tick mark: "25+ years"
export const PphYearsIcon = ({ size = 20, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 10h17M8 3v4M16 3v4M9 15l2 2 4-4.2" />
  </svg>
);

// Map pin: "Australia-wide"
export const PphPinIcon = ({ size = 20, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
    <circle cx="12" cy="10" r="2.4" />
  </svg>
);

// Price tag: "Quote or hourly rate"
export const PphTagIcon = ({ size = 20, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <path d="M3.5 12.2V4.5a1 1 0 0 1 1-1h7.7a1 1 0 0 1 .7.3l7.3 7.3a1 1 0 0 1 0 1.4l-7.4 7.4a1 1 0 0 1-1.4 0l-7.2-7.2a1 1 0 0 1-.3-.7z" />
    <circle cx="8.2" cy="8.2" r="1.3" />
  </svg>
);
