// /app/blog/power-bi-in-healthcare-analytics/(svgs)/Icons.jsx
// 24x24 line icons. They use currentColor, so the colour comes from the CSS
// of the element they sit in. All are decorative (aria-hidden).

const Base = ({ children }) => (
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
    focusable="false"
  >
    {children}
  </svg>
);

export const PlugIcon = () => (
  <Base>
    <path d="M9 3v5M15 3v5" />
    <path d="M6 8h12v3a6 6 0 0 1-12 0V8z" />
    <path d="M12 17v4" />
  </Base>
);

export const LayersIcon = () => (
  <Base>
    <path d="M12 3 3 8l9 5 9-5-9-5z" />
    <path d="m3 13 9 5 9-5" />
  </Base>
);

export const ShieldIcon = () => (
  <Base>
    <path d="M12 3 5 6v5c0 4.5 2.9 8.2 7 10 4.1-1.8 7-5.5 7-10V6l-7-3z" />
    <path d="m9 12 2 2 4-4" />
  </Base>
);

export const GridIcon = () => (
  <Base>
    <rect x="3" y="3" width="8" height="8" rx="1.5" />
    <rect x="13" y="3" width="8" height="8" rx="1.5" />
    <rect x="3" y="13" width="8" height="8" rx="1.5" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" />
  </Base>
);

export const TickIcon = () => (
  <Base>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Base>
);

export const MinusIcon = () => (
  <Base>
    <path d="M6 12h12" />
  </Base>
);

export const BulbIcon = () => (
  <Base>
    <path d="M9 18h6M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" />
  </Base>
);

export const ArrowIcon = () => (
  <Base>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);

export const PlusIcon = () => (
  <Base>
    <path d="M12 5v14M5 12h14" />
  </Base>
);

export const LockIcon = () => (
  <Base>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </Base>
);

export const InfoIcon = () => (
  <Base>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 8h.01" />
  </Base>
);

export const ClipboardIcon = () => (
  <Base>
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 4h6v3H9zM9 12h6M9 16h4" />
  </Base>
);

export const TargetIcon = () => (
  <Base>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.2" />
  </Base>
);

export const AlertIcon = () => (
  <Base>
    <path d="M12 3 2.5 20h19L12 3z" />
    <path d="M12 10v4M12 17h.01" />
  </Base>
);
