// app/services/word/templates/(svgs)/CopilotTemplateSVG.jsx

// Decorative illustration for CopilotIntegration.jsx.
// A Word page with mapped styles (left tags), a Copilot content zone fed by the
// Copilot node (right), and a brand theme card + brand-safe badge.
// Hex values mirror globals.scss tokens: $accent, $accent-light, $text-primary, $border.
// Ids are prefixed "ci-" to avoid clashing with other inline SVGs on the page.

// Style tags down the left-hand side, each pointing at the page element it formats
const styleTags = [
  { label: "Heading 1", y: 127 },
  { label: "Normal", y: 171 },
  { label: "Heading 2", y: 297 },
  { label: "List Bullet", y: 340 },
];

// Reusable four-point sparkle, centred on 0,0 (scaled/translated where used)
const sparkle =
  "M0 -16 C2 -5 5 -2 16 0 C5 2 2 5 0 16 C-2 5 -5 2 -16 0 C-5 -2 -2 -5 0 -16Z";

export const CopilotTemplateSVG = () => (
  <svg
    viewBox="0 0 520 440"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="ci-nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0a85bf" />
        <stop offset="100%" stopColor="#046999" />
      </linearGradient>
      <filter id="ci-shadow" x="-15%" y="-15%" width="130%" height="130%">
        <feDropShadow
          dx="0"
          dy="6"
          stdDeviation="8"
          floodColor="#046999"
          floodOpacity="0.12"
        />
      </filter>
    </defs>

    {/* ── Soft backdrop ── */}
    <circle cx="270" cy="220" r="190" fill="#e8f4fa" />

    {/* ── Word page ── */}
    <rect
      x="110"
      y="40"
      width="260"
      height="350"
      rx="10"
      fill="#ffffff"
      filter="url(#ci-shadow)"
    />
    <rect
      x="110"
      y="40"
      width="260"
      height="350"
      rx="10"
      fill="none"
      stroke="rgba(0,0,0,0.08)"
    />

    {/* Brand header: logo mark + company line */}
    <rect x="134" y="66" width="24" height="24" rx="5" fill="#046999" />
    <rect
      x="168"
      y="70"
      width="90"
      height="7"
      rx="3.5"
      fill="#0d1b2a"
      opacity="0.8"
    />
    <rect
      x="168"
      y="82"
      width="60"
      height="5"
      rx="2.5"
      fill="#9a9da1"
      opacity="0.6"
    />
    <line x1="134" y1="104" x2="346" y2="104" stroke="rgba(0,0,0,0.08)" />

    {/* Heading 1 */}
    <rect x="134" y="120" width="160" height="14" rx="3" fill="#0d1b2a" />

    {/* Normal body text */}
    <rect x="134" y="152" width="212" height="6" rx="3" fill="#d8dde3" />
    <rect x="134" y="166" width="198" height="6" rx="3" fill="#d8dde3" />
    <rect x="134" y="180" width="150" height="6" rx="3" fill="#d8dde3" />

    {/* ── Copilot content zone — where generated content lands ── */}
    <rect
      x="126"
      y="202"
      width="228"
      height="76"
      rx="8"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.5"
      strokeDasharray="5 4"
    />
    <rect
      x="140"
      y="218"
      width="170"
      height="6"
      rx="3"
      fill="#046999"
      opacity="0.4"
    />
    <rect
      x="140"
      y="232"
      width="190"
      height="6"
      rx="3"
      fill="#046999"
      opacity="0.4"
    />
    <rect
      x="140"
      y="246"
      width="140"
      height="6"
      rx="3"
      fill="#046999"
      opacity="0.4"
    />
    <rect
      x="140"
      y="260"
      width="100"
      height="6"
      rx="3"
      fill="#046999"
      opacity="0.25"
    />
    <path
      d={sparkle}
      transform="translate(336 220) scale(0.55)"
      fill="#046999"
    />

    {/* Heading 2 (brand accent colour) */}
    <rect x="134" y="292" width="120" height="11" rx="3" fill="#046999" />

    {/* List Bullet */}
    {[322, 340, 358].map((y, i) => (
      <g key={y}>
        <circle cx="140" cy={y + 3} r="3" fill="#046999" />
        <rect
          x="150"
          y={y}
          width={[170, 146, 122][i]}
          height="6"
          rx="3"
          fill="#d8dde3"
        />
      </g>
    ))}

    {/* ── Style tags + leader lines ── */}
    {styleTags.map(({ label, y }) => (
      <g key={label}>
        <line
          x1="100"
          y1={y}
          x2="126"
          y2={y}
          stroke="#046999"
          strokeOpacity="0.45"
          strokeDasharray="2 3"
        />
        <rect
          x="12"
          y={y - 12}
          width="88"
          height="24"
          rx="12"
          fill="#ffffff"
          stroke="rgba(4,105,153,0.3)"
        />
        <text
          x="56"
          y={y + 4}
          textAnchor="middle"
          fontSize="11"
          fontWeight="600"
          fill="#046999"
          fontFamily="inherit"
        >
          {label}
        </text>
      </g>
    ))}

    {/* ── Copilot node + connector into the content zone ── */}
    <path
      d="M409 146 C 386 162, 384 226, 356 240"
      fill="none"
      stroke="#046999"
      strokeWidth="1.8"
      strokeDasharray="5 5"
      strokeLinecap="round"
    />
    <circle cx="356" cy="240" r="4" fill="#046999" />
    <circle
      cx="445"
      cy="134"
      r="38"
      fill="url(#ci-nodeGrad)"
      filter="url(#ci-shadow)"
    />
    <path
      d={sparkle}
      transform="translate(441 138) scale(1.1)"
      fill="#ffffff"
    />
    <path
      d={sparkle}
      transform="translate(462 116) scale(0.45)"
      fill="#ffffff"
      opacity="0.85"
    />
    <text
      x="445"
      y="192"
      textAnchor="middle"
      fontSize="12"
      fontWeight="700"
      fill="#0d1b2a"
      fontFamily="inherit"
    >
      Copilot
    </text>

    {/* ── Brand theme card: colours locked to the template ── */}
    <rect
      x="394"
      y="262"
      width="112"
      height="62"
      rx="8"
      fill="#ffffff"
      stroke="rgba(0,0,0,0.08)"
      filter="url(#ci-shadow)"
    />
    <text
      x="408"
      y="283"
      fontSize="10.5"
      fontWeight="700"
      fill="#0d1b2a"
      fontFamily="inherit"
    >
      Brand theme
    </text>
    <rect x="408" y="294" width="18" height="18" rx="4" fill="#046999" />
    <rect x="432" y="294" width="18" height="18" rx="4" fill="#0d1b2a" />
    <rect
      x="456"
      y="294"
      width="18"
      height="18"
      rx="4"
      fill="#e8f4fa"
      stroke="rgba(0,0,0,0.08)"
    />
    <rect x="480" y="294" width="12" height="18" rx="4" fill="#4a5568" />

    {/* ── Brand-safe badge ── */}
    <circle
      cx="370"
      cy="390"
      r="26"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
      filter="url(#ci-shadow)"
    />
    <path
      d="M359 390 l7 7 l14 -15"
      fill="none"
      stroke="#046999"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text
      x="404"
      y="395"
      fontSize="12"
      fontWeight="700"
      fill="#0d1b2a"
      fontFamily="inherit"
    >
      Brand-safe
    </text>
  </svg>
);
