// app/fill-in-forms/(svgs)/FormFieldsMockSVG.js
//
// A mock document illustrating the six content control types listed beside
// it in FormFieldsAnatomy.jsx: plain text, rich text, drop-down list, date
// picker, check box and picture. Colours are hardcoded to match the values
// behind the globals.scss tokens ($accent, $text-primary, $text-secondary,
// $grayBGC, $border) since this is a self-contained illustration rather
// than an icon meant to inherit currentColor.

export const FormFieldsMockSVG = () => (
  <svg
    viewBox="0 0 460 520"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* ── Document window chrome ── */}
    <rect x="0" y="0" width="460" height="520" rx="14" fill="#ffffff" />
    <rect x="0" y="0" width="460" height="44" rx="14" fill="#f2f3f5" />
    <rect x="0" y="30" width="460" height="14" fill="#f2f3f5" />
    <circle cx="24" cy="22" r="4" fill="rgba(0,0,0,0.16)" />
    <circle cx="40" cy="22" r="4" fill="rgba(0,0,0,0.16)" />
    <circle cx="56" cy="22" r="4" fill="rgba(0,0,0,0.16)" />

    {/* ── Document title ── */}
    <text x="32" y="78" fill="#0d1b2a" fontSize="15" fontWeight="700">
      Staff Details Form
    </text>
    <line
      x1="32"
      y1="90"
      x2="428"
      y2="90"
      stroke="rgba(0,0,0,0.08)"
      strokeWidth="1"
    />

    {/* ── Field 1: Plain Text ── */}
    <text
      x="32"
      y="115"
      fill="#4a5568"
      fontSize="10"
      fontWeight="700"
      letterSpacing="0.02em"
    >
      FULL NAME
    </text>
    <rect
      x="32"
      y="122"
      width="396"
      height="30"
      rx="5"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <text x="44" y="141" fill="#0d1b2a" fontSize="11">
      Jane Smith
    </text>
    <rect x="88" y="130" width="1.5" height="14" fill="#046999" opacity="0.5" />

    {/* ── Field 2: Rich Text ── */}
    <text
      x="32"
      y="177"
      fill="#4a5568"
      fontSize="10"
      fontWeight="700"
      letterSpacing="0.02em"
    >
      ADDITIONAL NOTES
    </text>
    <rect
      x="32"
      y="184"
      width="396"
      height="56"
      rx="5"
      fill="#ffffff"
      stroke="rgba(0,0,0,0.11)"
      strokeWidth="1.25"
    />
    <rect x="44" y="196" width="230" height="7" rx="3.5" fill="#f2f3f5" />
    <rect x="44" y="211" width="180" height="7" rx="3.5" fill="#f2f3f5" />
    <rect x="52" y="211" width="0" height="0" />
    <circle cx="48" cy="228" r="2" fill="#a0a2a6" />
    <rect x="56" y="225" width="150" height="6" rx="3" fill="#f2f3f5" />

    {/* ── Field 3: Drop-Down List ── */}
    <text
      x="32"
      y="264"
      fill="#4a5568"
      fontSize="10"
      fontWeight="700"
      letterSpacing="0.02em"
    >
      DEPARTMENT
    </text>
    <rect
      x="32"
      y="271"
      width="188"
      height="30"
      rx="5"
      fill="#ffffff"
      stroke="rgba(0,0,0,0.11)"
      strokeWidth="1.25"
    />
    <text x="44" y="290" fill="#4a5568" fontSize="10.5">
      Select department
    </text>
    <path
      d="M198 283l4 4 4-4"
      stroke="#046999"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* ── Field 4: Date Picker (beside drop-down) ── */}
    <text
      x="240"
      y="264"
      fill="#4a5568"
      fontSize="10"
      fontWeight="700"
      letterSpacing="0.02em"
    >
      START DATE
    </text>
    <rect
      x="240"
      y="271"
      width="188"
      height="30"
      rx="5"
      fill="#ffffff"
      stroke="rgba(0,0,0,0.11)"
      strokeWidth="1.25"
    />
    <rect
      x="252"
      y="279"
      width="14"
      height="14"
      rx="2"
      fill="none"
      stroke="#046999"
      strokeWidth="1.4"
    />
    <line
      x1="255"
      y1="277"
      x2="255"
      y2="281"
      stroke="#046999"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <line
      x1="263"
      y1="277"
      x2="263"
      y2="281"
      stroke="#046999"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <text x="276" y="290" fill="#4a5568" fontSize="10.5">
      12 / 03 / 2026
    </text>

    {/* ── Field 5: Check Box ── */}
    <rect x="32" y="325" width="16" height="16" rx="3" fill="#046999" />
    <path
      d="M36 333l3 3 7-7"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <text x="58" y="337" fill="#0d1b2a" fontSize="11">
      I confirm these details are correct
    </text>

    {/* ── Field 6: Picture placeholder ── */}
    <text
      x="32"
      y="378"
      fill="#4a5568"
      fontSize="10"
      fontWeight="700"
      letterSpacing="0.02em"
    >
      SIGNATURE
    </text>
    <rect
      x="32"
      y="385"
      width="180"
      height="90"
      rx="6"
      fill="#f6f6f6"
      stroke="rgba(0,0,0,0.11)"
      strokeWidth="1.25"
      strokeDasharray="5 4"
    />
    <g transform="translate(96,412)">
      <rect
        x="0"
        y="0"
        width="52"
        height="38"
        rx="4"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.4"
      />
      <circle
        cx="15"
        cy="15"
        r="5"
        fill="none"
        stroke="#046999"
        strokeWidth="1.4"
      />
      <path
        d="M4 32l12-12 9 8 9-11 14 15"
        stroke="#046999"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </g>

    {/* ── Submit button, for context ── */}
    <rect
      x="32"
      y="490"
      width="118"
      height="14"
      rx="7"
      fill="#046999"
      opacity="0.12"
    />
  </svg>
);
