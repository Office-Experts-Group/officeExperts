// /services/vba-macro-development/(svgs)/VbaRibbonSvg.jsx
// An Office ribbon with a custom "Formatting" tab selected and its button group showing.
// Decorative only, so it is hidden from assistive technology.
const FONT = "system-ui, -apple-system, 'Segoe UI', sans-serif";

export const VbaRibbonSvg = () => (
  <svg
    viewBox="0 0 360 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    fontFamily={FONT}
  >
    <rect x="8" y="8" width="344" height="134" rx="12" fill="#ffffff" stroke="#d4d6d9" />

    {/* Tabs */}
    <g fontSize="10.5" fill="#4a5568">
      <text x="24" y="31">Home</text>
      <text x="72" y="31">Insert</text>
      <text x="224" y="31">View</text>
    </g>
    <rect x="116" y="14" width="86" height="26" rx="6" fill="#046999" />
    <text x="159" y="31" fontSize="10.5" fontWeight="700" fill="#ffffff" textAnchor="middle">
      Formatting
    </text>

    {/* Ribbon body */}
    <path d="M9 44h342v85a12 12 0 0 1-12 12H21a12 12 0 0 1-12-12z" fill="#f7f8f9" />

    {/* Custom group: three macro buttons */}
    <g fill="#046999">
      <rect x="24" y="56" width="30" height="30" rx="7" />
      <rect x="62" y="56" width="30" height="30" rx="7" />
      <rect x="100" y="56" width="30" height="30" rx="7" />
    </g>
    <g stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 66h14M32 71h14M32 76h8" />
      <path d="M70 79l6-12 6 12M72.5 75h7" />
      <path d="M108 66h14v12h-14z" />
    </g>
    <g fontSize="8" fill="#4a5568" textAnchor="middle">
      <text x="39" y="98">Clean</text>
      <text x="77" y="98">Paste</text>
      <text x="115" y="98">Page</text>
    </g>
    <text x="77" y="128" fontSize="8.5" fill="#9a9da1" textAnchor="middle">
      Formatting
    </text>

    {/* Dividers */}
    <path d="M146 54v76M262 54v76" stroke="#e3e8ec" />

    {/* Ordinary groups */}
    <rect x="162" y="56" width="34" height="34" rx="7" fill="#e3e8ec" />
    <g fill="#e3e8ec">
      <rect x="206" y="56" width="44" height="9" rx="4.5" />
      <rect x="206" y="70" width="44" height="9" rx="4.5" />
      <rect x="206" y="84" width="44" height="9" rx="4.5" />
    </g>
    <g fill="#e3e8ec">
      <rect x="278" y="56" width="26" height="34" rx="7" />
      <rect x="312" y="56" width="26" height="34" rx="7" />
    </g>
  </svg>
);
