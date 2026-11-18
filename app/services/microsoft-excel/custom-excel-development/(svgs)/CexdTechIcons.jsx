// /app/services/microsoft-excel/custom-excel-development/(svgs)/CexdTechIcons.jsx
// Generic shapes for the "technologies we work with" tiles (no brand logos).
// Stroke is currentColor, so the tile sets the colour
// (tokens: $darkGrayText at rest, $accent on hover).

const Tile = ({ children }) => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    aria-hidden="true"
    focusable="false"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

export const CexdVbaIcon = () => (
  <Tile>
    <rect x="4" y="8" width="28" height="20" rx="3" />
    <path d="M10 14l4 4-4 4M18 22h8" />
  </Tile>
);

export const CexdExcelIcon = () => (
  <Tile>
    <rect x="4" y="6" width="28" height="24" rx="3" />
    <path d="M4 13h28M18 13v17M11 20l6 6M11 26l6-6" />
  </Tile>
);

export const CexdOfficeIcon = () => (
  <Tile>
    <circle cx="18" cy="18" r="11" />
    <path d="M18 7c0 0-5 4-5 11s5 11 5 11M18 7c0 0 5 4 5 11s-5 11-5 11M7 18h22" />
  </Tile>
);

export const CexdSharepointIcon = () => (
  <Tile>
    <circle cx="14" cy="18" r="8" />
    <circle cx="22" cy="18" r="8" />
    <path d="M18 12v12" />
  </Tile>
);

export const CexdAzureIcon = () => (
  <Tile>
    <path d="M7 28l8-18 6 10-4 2 8 6H7z" />
    <path d="M18 10l7 18" />
  </Tile>
);

export const CexdAccessIcon = () => (
  <Tile>
    <ellipse cx="18" cy="13" rx="10" ry="5" />
    <path d="M8 13v10c0 2.76 4.48 5 10 5s10-2.24 10-5V13" />
    <path d="M8 18c0 2.76 4.48 5 10 5s10-2.24 10-5" />
  </Tile>
);

export const CexdBiIcon = () => (
  <Tile>
    <rect x="6" y="22" width="6" height="8" rx="1" />
    <rect x="15" y="16" width="6" height="14" rx="1" />
    <rect x="24" y="8" width="6" height="22" rx="1" />
  </Tile>
);

export const CexdDotNetIcon = () => (
  <Tile>
    <path d="M10 12l-6 6 6 6M26 12l6 6-6 6M21 9l-6 18" />
  </Tile>
);

export const CexdDocIcon = () => (
  <Tile>
    <rect x="5" y="5" width="26" height="26" rx="3" />
    <path d="M10 12h16M10 17h16M10 22h10" />
  </Tile>
);

export const CexdMailIcon = () => (
  <Tile>
    <rect x="5" y="9" width="26" height="18" rx="3" />
    <path d="M5 13l13 8 13-8" />
  </Tile>
);

export const CexdSlidesIcon = () => (
  <Tile>
    <rect x="4" y="7" width="28" height="22" rx="3" />
    <circle cx="13" cy="18" r="5" />
    <path d="M21 13h7M21 18h5M21 23h7" />
  </Tile>
);

export const CexdAddinTileIcon = () => (
  <Tile>
    <path d="M18 6v24M6 18h24" />
    <circle cx="18" cy="18" r="11" strokeDasharray="5 3" />
  </Tile>
);
