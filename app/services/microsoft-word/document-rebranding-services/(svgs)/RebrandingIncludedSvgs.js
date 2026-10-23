// /services/microsoft-word/document-rebranding-services/(svgs)/RebrandingIncludedSvgs.js
// Accordion icons plus the custom Word ribbon illustration shown beside the accordion.
// Line icons take their colour from the parent via currentColor; the ribbon uses globals.scss hex values.

// Shared attributes for the 24px line icons
const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

export const TemplateIcon = () => (
  <svg {...iconProps}>
    <path d="M6 3h8l5 5v13H6z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h7M9 17h5" />
  </svg>
);

export const BulkIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="7" width="11" height="14" rx="2" />
    <path d="M7 7V5a2 2 0 0 1 2-2h8l4 4v10a2 2 0 0 1-2 2h-2" />
    <path d="M6 13h5M6 17h3" />
  </svg>
);

export const RibbonIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 10h18" />
    <path d="M7 7.5h2M11 7.5h2" />
    <rect x="6" y="13" width="5" height="3" rx=".8" />
    <path d="M14 13h4M14 16h3" />
  </svg>
);

export const ChevronIcon = () => (
  <svg {...iconProps} strokeWidth="2">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

// Style gallery cards shown in the ribbon's "Brand styles" group
const STYLE_CARDS = [
  { x: 34, fill: "#0d1b2a", weight: 900 },
  { x: 102, fill: "#4a5568", weight: 400 },
  { x: 170, fill: "#046999", weight: 700 },
];

// A custom Word ribbon with a Formatting tab: brand styles and Quick Parts on, risky controls locked
export const RibbonPanelSvg = () => (
  <svg viewBox="0 0 420 270" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="10" y="10" width="400" height="250" rx="12" fill="#fff" />

    {/* Title bar */}
    {[30, 46, 62].map((cx) => (
      <circle key={cx} cx={cx} cy="28" r="5" fill="#dde0e4" />
    ))}
    <text x="210" y="32" fontSize="10" fill="#9a9da1" textAnchor="middle">
      Brand template.dotx
    </text>

    {/* Tabs, with the custom Formatting tab active */}
    <text x="34" y="68" fontSize="11" fill="#777a7e">Home</text>
    <text x="84" y="68" fontSize="11" fill="#777a7e">Insert</text>
    <text x="134" y="68" fontSize="11" fill="#777a7e">Layout</text>
    <rect x="186" y="52" width="92" height="26" rx="13" fill="#046999" />
    <text x="232" y="69" fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle">
      Formatting
    </text>

    {/* Ribbon body */}
    <rect x="22" y="84" width="376" height="92" rx="10" fill="#f2f3f5" />

    {/* Group 1: brand styles */}
    {STYLE_CARDS.map(({ x, fill, weight }) => (
      <g key={x}>
        <rect x={x} y="94" width="62" height="50" rx="8" fill="#fff" />
        <text x={x + 31} y="127" fontSize="20" fontWeight={weight} fill={fill} textAnchor="middle">
          Aa
        </text>
      </g>
    ))}
    <text x="34" y="164" fontSize="9" fill="#777a7e">Brand styles</text>

    <line x1="244" y1="94" x2="244" y2="164" stroke="#dde0e4" />

    {/* Group 2: Quick Parts */}
    <rect x="256" y="94" width="56" height="50" rx="8" fill="#fff" />
    <rect x="266" y="104" width="36" height="14" rx="3" fill="#046999" />
    <rect x="266" y="124" width="36" height="4" rx="2" fill="#c9d3dc" />
    <rect x="266" y="132" width="24" height="4" rx="2" fill="#c9d3dc" />
    <text x="256" y="164" fontSize="9" fill="#777a7e">Quick Parts</text>

    <line x1="324" y1="94" x2="324" y2="164" stroke="#dde0e4" />

    {/* Group 3: locked font controls */}
    <rect x="336" y="94" width="52" height="26" rx="6" fill="#e6e8eb" />
    <rect x="355" y="104" width="14" height="10" rx="2" fill="#9a9da1" />
    <path
      d="M358 104v-3a4 4 0 0 1 8 0v3"
      fill="none"
      stroke="#9a9da1"
      strokeWidth="1.6"
    />
    <rect x="336" y="126" width="52" height="18" rx="6" fill="#e6e8eb" />
    <text x="336" y="164" fontSize="9" fill="#777a7e">Locked</text>

    {/* Document canvas */}
    <rect x="22" y="186" width="376" height="62" rx="10" fill="#fff" stroke="#e1e5ea" />
    <rect x="40" y="198" width="120" height="10" rx="3" fill="#0d1b2a" />
    <rect x="40" y="216" width="300" height="5" rx="2.5" fill="#d5dbe1" />
    <rect x="40" y="228" width="250" height="5" rx="2.5" fill="#d5dbe1" />
    <rect x="316" y="196" width="64" height="20" rx="10" fill="#046999" />
    <text x="348" y="210" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">
      On brand
    </text>
  </svg>
);
