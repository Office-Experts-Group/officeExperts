// /app/services/microsoft-power-platform/sharepoint-consulting-and-development/(svgs)/SpcdIntroArt.jsx
// Small area glyphs for the "Common situations we fix" table in SpcdIntro.
// Decorative: the area name sits beside each one as text.
//
// Hex values and matching globals.scss tokens:
//   #046999 $accent   #e8f4fa $accent-light   #c53030 $error
//   #d4d6d9 $line-strong   #ffffff $white

const Frame = ({ children }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <rect width="40" height="40" rx="12" fill="#e8f4fa" />
    {children}
  </svg>
);

// Folder with a tidy, tagged document stack
const Files = () => (
  <Frame>
    <path
      d="M9 13.5h8l2.5 3H31v12.5H9z"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M13.5 22h9M13.5 25.5h6"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="27" cy="23.5" r="2.6" fill="#046999" />
  </Frame>
);

// Server with a warning LED, arrow out to a cloud
const Migration = () => (
  <Frame>
    <rect
      x="8"
      y="12"
      width="12"
      height="16"
      rx="2.5"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <path
      d="M10.5 17h5M10.5 21.5h5"
      stroke="#d4d6d9"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="17.2" cy="25" r="1.3" fill="#c53030" />
    <path
      d="M21.5 20h4.5M24 17.5l2.5 2.5-2.5 2.5"
      stroke="#046999"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27.5 24.5a3 3 0 0 1 .4-6 3.6 3.6 0 0 1 4.3 2.9 2.4 2.4 0 0 1-.2 3.1z"
      fill="#046999"
    />
  </Frame>
);

// Approval chain with a completed final step
const Automation = () => (
  <Frame>
    <circle
      cx="11"
      cy="20"
      r="3.2"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <circle
      cx="20"
      cy="20"
      r="3.2"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <circle cx="29" cy="20" r="4.2" fill="#046999" />
    <path
      d="M14.2 20h2.6M23.2 20h1.6"
      stroke="#046999"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M27.2 20.1l1.3 1.3 2.4-2.6"
      stroke="#ffffff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Frame>
);

// Spark reading from a stack of documents
const AiReady = () => (
  <Frame>
    <rect
      x="9"
      y="17"
      width="13"
      height="14"
      rx="2"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <path
      d="M12 22h7M12 25.5h5"
      stroke="#046999"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M27 8.5c.8 3.6 1.6 4.4 5.2 5.2-3.6.8-4.4 1.6-5.2 5.2-.8-3.6-1.6-4.4-5.2-5.2 3.6-.8 4.4-1.6 5.2-5.2z"
      fill="#046999"
    />
  </Frame>
);

const SPCD_INTRO_ART = {
  files: Files,
  migration: Migration,
  automation: Automation,
  ai: AiReady,
};

const SpcdIntroArt = ({ type }) => {
  const Art = SPCD_INTRO_ART[type];
  return Art ? <Art /> : null;
};

export default SpcdIntroArt;
