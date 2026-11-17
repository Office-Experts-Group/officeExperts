// /app/services/microsoft-power-platform/power-pages/(svgs)/PpgIcons.jsx
// Small UI icons. Strokes use currentColor so each SCSS module sets the colour
// (tokens used there: $accent, $white, $accent-on-dark).

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

export const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" {...base} strokeWidth="1.6">
    <path d="M2.5 11.5l9-9M5 2.5h6.5V9" />
  </svg>
);

export const PlusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" {...base}>
    <path d="M9 3v12M3 9h12" />
  </svg>
);

export const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" {...base}>
    <path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10z" />
    <circle cx="12" cy="11" r="2.2" />
  </svg>
);

export const DatabaseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" {...base}>
    <ellipse cx="12" cy="6" rx="7" ry="3" />
    <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
  </svg>
);

export const KeyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" {...base}>
    <circle cx="8" cy="15" r="4" />
    <path d="M11 12l9-9M16 7l3 3M14 9l2 2" />
  </svg>
);

export const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" {...base}>
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
    <path d="M9.5 12l2 2 3.5-4" />
  </svg>
);
