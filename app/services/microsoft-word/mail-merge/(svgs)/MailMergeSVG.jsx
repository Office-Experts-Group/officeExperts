// /services/microsoft-word/mail-merge/(svgs)/MailMergeSVG.jsx
// Decorative illustration: one Word template + one data list → a stack of personalised documents.
// Colours are hardcoded hex values matching globals.scss ($accent, $text-primary, $text-muted etc.)
// because SVG presentation attributes can't read Sass variables.

export const MailMergeSVG = () => (
  <svg
    viewBox="0 0 560 400"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    {/* ── Word template with merge fields ── */}
    <rect x="20" y="20" width="170" height="180" rx="8" fill="#fff" stroke="#d9dee3" />
    <rect x="36" y="36" width="56" height="8" rx="2" fill="#0d1b2a" opacity="0.8" />
    <rect x="36" y="56" width="72" height="15" rx="3" fill="#046999" opacity="0.14" />
    <text x="42" y="67" fontSize="9" fontFamily="monospace" fill="#046999">«Name»</text>
    <rect x="36" y="82" width="130" height="5" rx="2" fill="#e3e8ec" />
    <rect x="36" y="94" width="118" height="5" rx="2" fill="#e3e8ec" />
    <rect x="36" y="106" width="136" height="5" rx="2" fill="#e3e8ec" />
    <rect x="36" y="122" width="84" height="15" rx="3" fill="#046999" opacity="0.14" />
    <text x="42" y="133" fontSize="9" fontFamily="monospace" fill="#046999">«Amount»</text>
    <rect x="36" y="148" width="128" height="5" rx="2" fill="#e3e8ec" />
    <rect x="36" y="160" width="104" height="5" rx="2" fill="#e3e8ec" />
    <text x="105" y="218" fontSize="10" fontWeight="700" letterSpacing="1.5" textAnchor="middle" fill="#9a9da1">
      TEMPLATE
    </text>

    {/* ── Data list (spreadsheet) ── */}
    <rect x="20" y="240" width="170" height="120" rx="8" fill="#fff" stroke="#d9dee3" />
    <path d="M28 240h154a8 8 0 0 1 8 8v16H20v-16a8 8 0 0 1 8-8z" fill="#046999" />
    <text x="28" y="256" fontSize="8" fontWeight="700" fill="#fff">Name</text>
    <text x="82" y="256" fontSize="8" fontWeight="700" fill="#fff">Amount</text>
    <text x="137" y="256" fontSize="8" fontWeight="700" fill="#fff">Postcode</text>
    <g stroke="#e3e8ec">
      <path d="M76 264v96M131 264v96M20 288h170M20 312h170M20 336h170" />
    </g>
    <g fill="#e3e8ec">
      <rect x="28" y="273" width="40" height="5" rx="2" />
      <rect x="84" y="273" width="34" height="5" rx="2" />
      <rect x="139" y="273" width="28" height="5" rx="2" />
      <rect x="28" y="297" width="36" height="5" rx="2" />
      <rect x="84" y="297" width="38" height="5" rx="2" />
      <rect x="139" y="297" width="28" height="5" rx="2" />
      <rect x="28" y="321" width="42" height="5" rx="2" />
      <rect x="84" y="321" width="30" height="5" rx="2" />
      <rect x="139" y="321" width="28" height="5" rx="2" />
      <rect x="28" y="345" width="38" height="5" rx="2" />
      <rect x="84" y="345" width="36" height="5" rx="2" />
      <rect x="139" y="345" width="28" height="5" rx="2" />
    </g>
    <text x="105" y="380" fontSize="10" fontWeight="700" letterSpacing="1.5" textAnchor="middle" fill="#9a9da1">
      DATA LIST
    </text>

    {/* ── Connectors into the merge point ── */}
    <g fill="none" stroke="#9a9da1" strokeWidth="1.5" strokeDasharray="4 4">
      <path d="M190 110c50 0 50 90 64 90" />
      <path d="M190 300c50 0 50-100 64-100" />
    </g>
    <circle cx="280" cy="200" r="26" fill="#046999" />
    <text x="280" y="203.5" fontSize="9" fontWeight="700" textAnchor="middle" fill="#fff">
      MERGE
    </text>
    <path d="M306 200h40" stroke="#046999" strokeWidth="2" />
    <path d="M342 194l7 6-7 6" fill="none" stroke="#046999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    {/* ── Fanned stack of personalised documents ── */}
    <rect x="385" y="115" width="130" height="170" rx="8" fill="#f2f3f5" stroke="#d9dee3" transform="rotate(-9 450 200)" />
    <rect x="385" y="115" width="130" height="170" rx="8" fill="#f7f8f9" stroke="#d9dee3" transform="rotate(-4 450 200)" />
    <g transform="rotate(2 450 200)">
      <rect x="385" y="115" width="130" height="170" rx="8" fill="#fff" stroke="#d9dee3" />
      <rect x="399" y="130" width="44" height="7" rx="2" fill="#0d1b2a" opacity="0.8" />
      <rect x="399" y="148" width="70" height="15" rx="3" fill="#046999" />
      <text x="405" y="159" fontSize="9" fill="#fff">Jane Citizen</text>
      <rect x="399" y="173" width="100" height="5" rx="2" fill="#e3e8ec" />
      <rect x="399" y="185" width="88" height="5" rx="2" fill="#e3e8ec" />
      <rect x="399" y="200" width="64" height="15" rx="3" fill="#046999" />
      <text x="405" y="211" fontSize="9" fill="#fff">$1,250.50</text>
      <rect x="399" y="226" width="96" height="5" rx="2" fill="#e3e8ec" />
      <rect x="399" y="238" width="78" height="5" rx="2" fill="#e3e8ec" />
      <rect x="399" y="250" width="90" height="5" rx="2" fill="#e3e8ec" />
    </g>
    <text x="450" y="318" fontSize="10" fontWeight="700" letterSpacing="1.5" textAnchor="middle" fill="#9a9da1">
      ONE PER RECORD
    </text>
  </svg>
);
