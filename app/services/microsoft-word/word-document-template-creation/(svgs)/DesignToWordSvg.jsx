// /services/microsoft-word/word-document-template-creation/(svgs)/DesignToWordSvg.jsx

// A fixed design (left) is rebuilt as a working Word template (right).
// Shapes use currentColor, set by the parent. Elements marked data-accent are
// filled with the accent colour by the stylesheet that renders this SVG.
export const DesignToWordSvg = () => (
  <svg
    viewBox="0 0 560 340"
    role="img"
    aria-label="An InDesign layout being rebuilt as an editable Word template"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* ── Source design ── */}
    <rect
      x="20"
      y="30"
      width="190"
      height="250"
      rx="8"
      fill="none"
      stroke="#fff"
      strokeOpacity="0.1"
      strokeWidth="2"
    />
    <rect
      x="36"
      y="46"
      width="158"
      height="96"
      rx="3"
      fill="currentColor"
      opacity="0.18"
    />
    <rect
      x="36"
      y="160"
      width="112"
      height="14"
      rx="2"
      fill="currentColor"
      opacity="0.55"
    />
    <rect
      x="36"
      y="188"
      width="158"
      height="6"
      rx="2"
      fill="currentColor"
      opacity="0.25"
    />
    <rect
      x="36"
      y="202"
      width="158"
      height="6"
      rx="2"
      fill="currentColor"
      opacity="0.25"
    />
    <rect
      x="36"
      y="216"
      width="120"
      height="6"
      rx="2"
      fill="currentColor"
      opacity="0.25"
    />
    <circle cx="170" cy="248" r="12" fill="currentColor" opacity="0.3" />
    <text x="115" y="312" textAnchor="middle" fontSize="14" fill="#ffffff">
      InDesign layout
    </text>

    {/* ── Conversion arrow ── */}
    <path
      d="M226 155h96M308 141l14 14-14 14"
      fill="none"
      stroke="currentColor"
      strokeOpacity="0.9"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle data-accent cx="274" cy="155" r="18" />
    <path
      d="M266 155l6 6 11-12"
      fill="none"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* ── Working Word template ── */}
    <rect
      x="350"
      y="30"
      width="190"
      height="250"
      rx="8"
      fill="currentColor"
      fillOpacity="0.08"
      stroke="currentColor"
      strokeOpacity="0.5"
      strokeWidth="2"
    />
    <rect data-accent x="366" y="48" width="104" height="14" rx="2" />
    <rect
      x="366"
      y="72"
      width="70"
      height="8"
      rx="2"
      fill="currentColor"
      opacity="0.6"
    />
    <rect
      x="366"
      y="96"
      width="158"
      height="6"
      rx="2"
      fill="currentColor"
      opacity="0.25"
    />
    <rect
      x="366"
      y="110"
      width="158"
      height="6"
      rx="2"
      fill="currentColor"
      opacity="0.25"
    />
    <rect
      x="366"
      y="124"
      width="158"
      height="6"
      rx="2"
      fill="currentColor"
      opacity="0.25"
    />
    <rect
      x="366"
      y="138"
      width="110"
      height="6"
      rx="2"
      fill="currentColor"
      opacity="0.25"
    />
    <rect
      x="366"
      y="162"
      width="158"
      height="46"
      rx="3"
      fill="currentColor"
      opacity="0.14"
    />
    <rect data-accent x="366" y="226" width="86" height="24" rx="12" />
    <text x="409" y="242" textAnchor="middle" fontSize="11" fill="#ffffff">
      Quick Part
    </text>
    <text x="445" y="312" textAnchor="middle" fontSize="14" fill="#ffffff">
      Word template
    </text>
  </svg>
);
