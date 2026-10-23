// /services/microsoft-word/companies-and-organisations/(svgs)/CreationIcons.js
// Four line icons for the "Document Creation" points. They draw in currentColor,
// so the SCSS decides the colour. All share a 48 x 48 grid and a 2px stroke.

const iconProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
};

// Approved styles and colours: a letter "A" beside a colour swatch
const StylesIcon = () => (
  <svg {...iconProps}>
    <rect x="6" y="6" width="36" height="36" rx="8" />
    <path d="M14 34l6-16 6 16M16.5 28.5h7" />
    <circle cx="35" cy="17" r="2.5" fill="currentColor" />
    <circle cx="35" cy="25" r="2.5" fill="currentColor" />
    <circle cx="35" cy="33" r="2.5" fill="currentColor" />
  </svg>
);

// Locked fonts: the Home tab font box with a padlock
const FontsIcon = () => (
  <svg {...iconProps}>
    <rect x="5" y="9" width="28" height="14" rx="3" />
    <path d="M10 16h10M26 14.5l2 3 2-3" />
    <rect x="25" y="29" width="17" height="13" rx="3" />
    <path d="M29 29v-3a4.5 4.5 0 0 1 9 0v3" />
  </svg>
);

// Controlled pasting: a clipboard with content arriving
const PasteIcon = () => (
  <svg {...iconProps}>
    <rect x="10" y="9" width="28" height="33" rx="4" />
    <rect x="17" y="5" width="14" height="8" rx="2" />
    <path d="M24 20v12M19 27l5 5 5-5" />
  </svg>
);

// Protected documents: a page with its corner folded
const DocumentsIcon = () => (
  <svg {...iconProps}>
    <path d="M13 5h16l9 9v27a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
    <path d="M29 5v9h9M17 25h14M17 32h9" />
  </svg>
);

export const creationIcons = {
  styles: StylesIcon,
  fonts: FontsIcon,
  paste: PasteIcon,
  documents: DocumentsIcon,
};
