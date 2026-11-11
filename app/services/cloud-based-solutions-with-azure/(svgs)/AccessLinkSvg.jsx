// app/services/cloud-based-solutions-with-azure/(svgs)/AccessLinkSvg.jsx
// Illustration for the AccessOnAzure requirements panel: an Access form on the left, an encrypted
// ODBC connection in the middle and the Azure SQL database on the right.
// Decorative only. The connection path (data-flow) is animated by accessOnAzure.module.scss.
// Colours are hardcoded hex values that match globals.scss tokens.

export const AccessLinkSvg = () => (
  <svg
    viewBox="0 0 420 156"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    fontFamily="inherit"
  >
    {/* ── Access form window ── */}
    <rect x="10" y="16" width="150" height="110" rx="12" fill="#ffffff" stroke="#e3e8ec" />
    <path d="M10 38 H160" stroke="#e3e8ec" />
    <g fill="#d4d6d9">
      <circle cx="24" cy="27" r="3" />
      <circle cx="34" cy="27" r="3" />
      <circle cx="44" cy="27" r="3" />
      <rect x="24" y="52" width="32" height="5" rx="2.5" />
      <rect x="24" y="70" width="26" height="5" rx="2.5" />
      <rect x="24" y="88" width="34" height="5" rx="2.5" />
    </g>
    <g fill="#f7f8f9" stroke="#e3e8ec">
      <rect x="64" y="48" width="82" height="13" rx="3" />
      <rect x="64" y="66" width="82" height="13" rx="3" />
      <rect x="64" y="84" width="82" height="13" rx="3" />
    </g>
    <rect x="96" y="104" width="50" height="12" rx="3" fill="#046999" />

    {/* ── Encrypted connection ── */}
    <path
      data-flow=""
      d="M160 71 H296"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="228" cy="71" r="17" fill="#111820" />
    <rect x="221" y="70" width="14" height="11" rx="2" fill="#ffffff" />
    <path d="M224 70 v-4 a4 4 0 0 1 8 0 v4" stroke="#ffffff" strokeWidth="2" />
    <text x="228" y="42" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a5568">
      ODBC Driver 18
    </text>
    <text x="228" y="106" textAnchor="middle" fontSize="11" fill="#9a9da1">
      TLS encrypted
    </text>

    {/* ── Azure SQL database ── */}
    <ellipse cx="342" cy="106" rx="44" ry="12" fill="#046999" />
    <rect x="298" y="36" width="88" height="70" fill="#046999" />
    <g stroke="#ffffff" strokeOpacity="0.35" strokeWidth="2">
      <path d="M298 59 a44 12 0 0 0 88 0" />
      <path d="M298 82 a44 12 0 0 0 88 0" />
    </g>
    <ellipse cx="342" cy="36" rx="44" ry="12" fill="#6fc3e8" />

    {/* ── Labels ── */}
    <text x="85" y="148" textAnchor="middle" fontSize="12" fontWeight="600" fill="#0d1b2a">
      Access front end
    </text>
    <text x="342" y="148" textAnchor="middle" fontSize="12" fontWeight="600" fill="#0d1b2a">
      Azure SQL Database
    </text>
  </svg>
);
