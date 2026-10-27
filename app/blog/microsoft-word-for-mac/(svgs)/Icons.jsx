// /app/blog/microsoft-word-for-mac/(svgs)/Icons.jsx
// 24x24 line icons. Stroke uses currentColor so the colour comes from the
// surrounding SCSS (tokens: $accent, $white). Decorative, so aria-hidden.

const make = (children) =>
  function Icon({ className }) {
    return (
      <svg
        className={className}
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
  };

export const IconCode = make(
  <>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </>,
);

export const IconMail = make(
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <polyline points="3 7 12 13 21 7" />
  </>,
);

export const IconSliders = make(
  <>
    <line x1="4" y1="7" x2="20" y2="7" />
    <line x1="4" y1="17" x2="20" y2="17" />
    <circle cx="9" cy="7" r="2.5" />
    <circle cx="15" cy="17" r="2.5" />
  </>,
);

export const IconPuzzle = make(
  <path d="M5 9h4V7a2 2 0 1 1 4 0v2h4v4h-2a2 2 0 1 0 0 4h2v4H5V9z" />,
);

export const IconLayers = make(
  <>
    <polygon points="12 3 21 8 12 13 3 8 12 3" />
    <polyline points="3 12 12 17 21 12" />
    <polyline points="3 16 12 21 21 16" />
  </>,
);

export const IconPlug = make(
  <>
    <path d="M9 3v5M15 3v5" />
    <path d="M6 8h12v3a6 6 0 0 1-12 0V8z" />
    <path d="M12 17v4" />
  </>,
);

export const IconShield = make(
  <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />,
);

export const IconUsers = make(
  <>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M17 14c2.8 0 4.5 1.9 4.5 5" />
  </>,
);

export const IconClock = make(
  <>
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15.5 14" />
  </>,
);

export const IconCalendar = make(
  <>
    <rect x="3.5" y="5" width="17" height="15" rx="2" />
    <line x1="3.5" y1="10" x2="20.5" y2="10" />
    <line x1="8" y1="3" x2="8" y2="7" />
    <line x1="16" y1="3" x2="16" y2="7" />
  </>,
);

export const IconBulb = make(
  <>
    <path d="M9 18h6M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
  </>,
);

export const IconInfo = make(
  <>
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="11" x2="12" y2="16.5" />
    <circle cx="12" cy="7.8" r=".6" />
  </>,
);

export const IconCheck = make(<polyline points="4 12.5 9.5 18 20 6.5" />);

export const IconAlert = make(
  <>
    <path d="M12 3.5l9.5 16.5h-19L12 3.5z" />
    <line x1="12" y1="10" x2="12" y2="14.5" />
    <circle cx="12" cy="17.2" r=".6" />
  </>,
);

export const IconCloud = make(
  <path d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 10.5a3.8 3.8 0 0 1-.5 7.5H7z" />,
);

export const IconMonitor = make(
  <>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <line x1="8" y1="20" x2="16" y2="20" />
    <line x1="12" y1="16" x2="12" y2="20" />
  </>,
);

export const IconGlobe = make(
  <>
    <circle cx="12" cy="12" r="9" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <path d="M12 3c2.6 2.7 3.8 5.7 3.8 9s-1.2 6.3-3.8 9c-2.6-2.7-3.8-5.7-3.8-9S9.4 5.7 12 3z" />
  </>,
);

export const IconTag = make(
  <>
    <path d="M3 12V4h8l10 10-8 8L3 12z" />
    <circle cx="7.5" cy="8.5" r="1" />
  </>,
);

export const IconRefresh = make(
  <>
    <path d="M20 11a8 8 0 0 0-14.5-4M4 13a8 8 0 0 0 14.5 4" />
    <polyline points="5 3 5.5 7.5 10 7" />
    <polyline points="19 21 18.5 16.5 14 17" />
  </>,
);

export const IconArrowRight = make(
  <>
    <line x1="4" y1="12" x2="20" y2="12" />
    <polyline points="14 6 20 12 14 18" />
  </>,
);

export const IconChevron = make(<polyline points="6 9 12 15 18 9" />);

export const IconQuestion = make(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7" />
    <circle cx="12" cy="17" r=".6" />
  </>,
);

export const IconDoc = make(
  <>
    <path d="M6 3h8l4 4v14H6V3z" />
    <polyline points="14 3 14 7 18 7" />
    <line x1="9" y1="12" x2="15" y2="12" />
    <line x1="9" y1="16" x2="15" y2="16" />
  </>,
);

// Filled quote glyph for the quote cards (uses currentColor).
export function IconQuoteMark({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M6 20c0-6 3-10 8-12l1 2c-3 1.4-4.6 3.4-4.8 6H14v8H6v-4zm12 0c0-6 3-10 8-12l1 2c-3 1.4-4.6 3.4-4.8 6H26v8h-8v-4z" />
    </svg>
  );
}
