// /app/blog/google-docs-vs-microsoft-word/(svgs)/Icons.jsx
// 24x24 line icons. Stroke uses currentColor, so colour comes from the SCSS module
// ($accent, $white and so on). Decorative only (aria-hidden).

function Base({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export function IconGauge() {
  return (
    <Base>
      <path d="M4 16a8 8 0 1 1 16 0" />
      <path d="M12 16l4-5" />
      <circle cx="12" cy="16" r="1.2" />
    </Base>
  );
}

export function IconLayout() {
  return (
    <Base>
      <rect x="3.5" y="4" width="17" height="16" rx="2.5" />
      <path d="M3.5 9.5h17M9.5 9.5V20" />
    </Base>
  );
}

export function IconBolt() {
  return (
    <Base>
      <path d="M13 3L5 13.5h6L10 21l8-10.5h-6L13 3z" />
    </Base>
  );
}

export function IconShield() {
  return (
    <Base>
      <path d="M12 3l7 3v5.5c0 4.4-3 7.7-7 9.5-4-1.8-7-5.1-7-9.5V6l7-3z" />
      <path d="M9 12l2.2 2.2L15.5 10" />
    </Base>
  );
}

export function IconUsers() {
  return (
    <Base>
      <circle cx="9" cy="8.5" r="3.2" />
      <path d="M3.5 19c.6-3.2 3-5 5.5-5s4.9 1.8 5.5 5" />
      <circle cx="17" cy="9.5" r="2.4" />
      <path d="M16.5 14.2c2.2.2 3.8 1.7 4.3 4.3" />
    </Base>
  );
}

export function IconCloud() {
  return (
    <Base>
      <path d="M7 18h10a4 4 0 0 0 .6-7.95A5.5 5.5 0 0 0 7 9.3 4.4 4.4 0 0 0 7 18z" />
    </Base>
  );
}

export function IconCoins() {
  return (
    <Base>
      <ellipse cx="12" cy="6.5" rx="7" ry="3" />
      <path d="M5 6.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" />
      <path d="M5 11.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" />
    </Base>
  );
}

export function IconLayers() {
  return (
    <Base>
      <path d="M12 3.5l9 4.8-9 4.8-9-4.8 9-4.8z" />
      <path d="M3 12.5l9 4.8 9-4.8" />
      <path d="M3 16.7l9 4.8 9-4.8" />
    </Base>
  );
}

export function IconFile() {
  return (
    <Base>
      <path d="M7 3.5h7l4 4V20.5H7z" />
      <path d="M14 3.5v4h4M9.5 12.5h5M9.5 16h5" />
    </Base>
  );
}

export function IconCheck() {
  return (
    <Base>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </Base>
  );
}

export function IconInfo() {
  return (
    <Base>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.5" />
      <circle cx="12" cy="7.8" r=".6" />
    </Base>
  );
}

export function IconLightbulb() {
  return (
    <Base>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
    </Base>
  );
}

export function IconArrow() {
  return (
    <Base>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Base>
  );
}

export function IconPlus() {
  return (
    <Base>
      <path d="M12 5v14M5 12h14" />
    </Base>
  );
}

export function IconClock() {
  return (
    <Base>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 2" />
    </Base>
  );
}
