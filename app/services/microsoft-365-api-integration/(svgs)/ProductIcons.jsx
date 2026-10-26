// app/services/microsoft-365-api-integration/(svgs)/ProductIcons.jsx

// Line icons for the "by application" cards. Deliberately generic shapes
// (not Microsoft's product logos) so there's no trademark reuse.
// stroke="currentColor" lets the SCSS module set the colour per card.

const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

// Document with assembling blocks
const Word = () => (
  <svg {...base}>
    <path d="M12 6h17l9 9v27H12z" />
    <path d="M29 6v9h9" />
    <path d="M18 23h14M18 29h14M18 35h8" />
  </svg>
);

// Spreadsheet grid with a highlighted cell
const Excel = () => (
  <svg {...base}>
    <rect x="7" y="9" width="34" height="30" rx="3" />
    <path d="M7 18h34M7 27h34M19 9v30M30 9v30" />
    <rect x="30" y="27" width="11" height="12" fill="currentColor" fillOpacity="0.18" stroke="none" />
  </svg>
);

// Envelope with a chat bubble
const Outlook = () => (
  <svg {...base}>
    <rect x="5" y="12" width="28" height="20" rx="2" />
    <path d="M5 14l14 10 14-10" />
    <path d="M30 26h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3l-4 4v-4h-4a2 2 0 0 1-2-2" />
  </svg>
);

// Stacked slides
const PowerPoint = () => (
  <svg {...base}>
    <rect x="12" y="8" width="29" height="21" rx="2" />
    <path d="M7 14v19a2 2 0 0 0 2 2h24" />
    <path d="M19 22l5-6 4 4 5-5" />
    <path d="M18 41h12" />
  </svg>
);

// Folder with cloud sync arrows
const SharePoint = () => (
  <svg {...base}>
    <path d="M5 14a2 2 0 0 1 2-2h10l4 4h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
    <path d="M19 30a5 5 0 0 1 9-3M29 32a5 5 0 0 1-9 3" />
    <path d="M28 24v3h-3M20 38v-3h3" />
  </svg>
);

// Flow: three connected nodes
const PowerPlatform = () => (
  <svg {...base}>
    <circle cx="11" cy="12" r="5" />
    <circle cx="37" cy="24" r="5" />
    <circle cx="11" cy="36" r="5" />
    <path d="M16 13.5l16 8M16 34.5l16-8" />
  </svg>
);

// Database cylinder
const Access = () => (
  <svg {...base}>
    <ellipse cx="24" cy="11" rx="14" ry="5" />
    <path d="M10 11v26c0 2.8 6.3 5 14 5s14-2.2 14-5V11" />
    <path d="M10 20c0 2.8 6.3 5 14 5s14-2.2 14-5M10 29c0 2.8 6.3 5 14 5s14-2.2 14-5" />
  </svg>
);

// Plug, used on the "other systems" pointer card
const OtherSystems = () => (
  <svg {...base}>
    <path d="M18 6v9M30 6v9" />
    <path d="M13 15h22v7a11 11 0 0 1-22 0z" />
    <path d="M24 33v9" />
  </svg>
);

// Keyed by the product id used in ApiByProduct.jsx
export const productIcons = {
  word: Word,
  excel: Excel,
  outlook: Outlook,
  powerpoint: PowerPoint,
  sharepoint: SharePoint,
  powerPlatform: PowerPlatform,
  access: Access,
  other: OtherSystems,
};
