// /services/microsoft-word/document-rebranding-services/(svgs)/RebrandingWhoSvgs.js
// One line icon per audience. Colour is set by the parent via currentColor.

// Shared attributes for the 40px line icons
const iconProps = {
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

// Office building with a half-filled colour swatch: a company changing its look
export const RebrandIcon = () => (
  <svg {...iconProps}>
    <path d="M7 34V10h16v24" />
    <path d="M3 34h34" />
    <path d="M11 15h2M17 15h2M11 21h2M17 21h2M11 27h2M17 27h2" />
    <circle cx="31" cy="14" r="5" />
    <path d="M31 9a5 5 0 0 1 0 10z" fill="currentColor" />
  </svg>
);

// Two overlapping circles: two organisations becoming one
export const MergerIcon = () => (
  <svg {...iconProps}>
    <circle cx="15" cy="20" r="10" />
    <circle cx="25" cy="20" r="10" />
  </svg>
);

// Columned building: government and legal formality
export const GovLegalIcon = () => (
  <svg {...iconProps}>
    <path d="M4 15L20 6l16 9z" />
    <path d="M8 18v12M16 18v12M24 18v12M32 18v12" />
    <path d="M5 34h30" />
  </svg>
);

// Shopfront with an awning: small and medium businesses
export const SmallBusinessIcon = () => (
  <svg {...iconProps}>
    <path d="M6 16l3-9h22l3 9" />
    <path d="M6 16a4.7 4.7 0 0 0 9.3 0 4.7 4.7 0 0 0 9.4 0 4.7 4.7 0 0 0 9.3 0" />
    <path d="M8 20v14h24V20" />
    <path d="M16 34v-8h8v8" />
  </svg>
);

// Briefcase: consultancies preparing client documents
export const ConsultancyIcon = () => (
  <svg {...iconProps}>
    <rect x="5" y="12" width="30" height="21" rx="3" />
    <path d="M15 12V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
    <path d="M5 22h30" />
    <path d="M18 22v3h4v-3" />
  </svg>
);
