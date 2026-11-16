// /app/blog/file-attachments-in-power-apps/(svgs)/Icons.jsx
// 24x24 line icons, drawn with currentColor. Decorative, so aria-hidden.

const Svg = ({ className, children }) => (
  <svg
    className={className}
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

export const IconPaperclip = ({ className }) => (
  <Svg className={className}>
    <path d="M20.5 11.5 12 20a5.5 5.5 0 0 1-7.8-7.8l8.5-8.5a3.7 3.7 0 0 1 5.2 5.2l-8.5 8.5a1.8 1.8 0 0 1-2.6-2.6l7.8-7.8" />
  </Svg>
);
export const IconFolder = ({ className }) => (
  <Svg className={className}>
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2.5h8a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
    <path d="M3 11h18" />
  </Svg>
);
export const IconBolt = ({ className }) => (
  <Svg className={className}>
    <path d="M13 3 5 13.5h6L10 21l8-10.5h-6L13 3Z" />
  </Svg>
);
export const IconLink = ({ className }) => (
  <Svg className={className}>
    <path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1" />
    <path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1" />
  </Svg>
);
export const IconLayers = ({ className }) => (
  <Svg className={className}>
    <path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z" />
    <path d="m3 12 9 4.5 9-4.5" />
    <path d="m3 16.5 9 4.5 9-4.5" />
  </Svg>
);
export const IconCheck = ({ className }) => (
  <Svg className={className}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Svg>
);
export const IconAlert = ({ className }) => (
  <Svg className={className}>
    <path d="M12 4 2.8 19.5h18.4L12 4Z" />
    <path d="M12 10v4.5" />
    <path d="M12 17.2v.1" />
  </Svg>
);
export const IconClock = ({ className }) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.2 2" />
  </Svg>
);
export const IconShield = ({ className }) => (
  <Svg className={className}>
    <path d="M12 3 5 6v5.5c0 4.4 2.9 7.8 7 9.5 4.1-1.7 7-5.1 7-9.5V6l-7-3Z" />
    <path d="m9 12 2.2 2.2L15.2 10" />
  </Svg>
);
export const IconPlus = ({ className }) => (
  <Svg className={className}>
    <path d="M12 5v14M5 12h14" />
  </Svg>
);
export const IconArrow = ({ className }) => (
  <Svg className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);
export const IconSpinner = ({ className }) => (
  <Svg className={className}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
  </Svg>
);
export const IconFilter = ({ className }) => (
  <Svg className={className}>
    <path d="M4 5h16l-6.2 7.4V19l-3.6-1.8v-4.8L4 5Z" />
  </Svg>
);
export const IconUpload = ({ className }) => (
  <Svg className={className}>
    <path d="M12 16V5M7.5 9.5 12 5l4.5 4.5" />
    <path d="M4 16v2.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V16" />
  </Svg>
);
export const IconDoc = ({ className }) => (
  <Svg className={className}>
    <path d="M6 3h8l5 5v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
    <path d="M14 3v5h5M8.5 13h7M8.5 16.5h7" />
  </Svg>
);
export const IconDatabase = ({ className }) => (
  <Svg className={className}>
    <ellipse cx="12" cy="6" rx="7.5" ry="3" />
    <path d="M4.5 6v12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" />
    <path d="M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" />
  </Svg>
);
export const IconEye = ({ className }) => (
  <Svg className={className}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
    <circle cx="12" cy="12" r="2.8" />
  </Svg>
);
export const IconHelp = ({ className }) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.6 9.5a2.5 2.5 0 1 1 3.6 2.3c-.8.4-1.2 1-1.2 1.9" />
    <path d="M12 17v.1" />
  </Svg>
);
