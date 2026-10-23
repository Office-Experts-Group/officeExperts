// /services/microsoft-word/companies-and-organisations/(svgs)/PasteFlowSvg.js
// Decorative flow for the accent panel: pasted content passes through your template
// and comes out on-brand. Drawn in white so it reads on the $accent background.

// Three rows of "pasted" content, deliberately uneven, then the same rows made consistent
const BEFORE_ROWS = [
  { y: 30, bar: 96, opacity: 0.18 },
  { y: 62, bar: 120, opacity: 0.28 },
  { y: 94, bar: 70, opacity: 0.18 },
];

const arrow = (x) => `M${x} 75h46M${x + 36} 66l10 9-10 9`;

export const PasteFlowSvg = () => (
  <svg
    viewBox="0 0 600 150"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* ── Pasted content ── */}
    {BEFORE_ROWS.map((row) => (
      <g key={row.y}>
        <rect x="10" y={row.y} width="150" height="24" rx="6" fill="#fff" opacity={row.opacity} />
        <rect x="22" y={row.y + 9} width={row.bar} height="6" rx="3" fill="#fff" opacity="0.8" />
      </g>
    ))}
    <text x="85" y="144" textAnchor="middle" fill="#fff" opacity="0.8" fontSize="12" fontWeight="700">
      Pasted content
    </text>

    <path d={arrow(172)} fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />

    {/* ── Your template ── */}
    <rect x="240" y="20" width="120" height="110" rx="14" fill="#fff" />
    <path
      d="M288 68v-9a12 12 0 0 1 24 0v9"
      fill="none"
      stroke="#046999"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <rect x="282" y="68" width="36" height="28" rx="5" fill="#046999" />
    <circle cx="300" cy="80" r="4" fill="#fff" />
    <text x="300" y="144" textAnchor="middle" fill="#fff" opacity="0.8" fontSize="12" fontWeight="700">
      Your template
    </text>

    <path d={arrow(372)} fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />

    {/* ── On-brand output ── */}
    {BEFORE_ROWS.map((row) => (
      <g key={`out${row.y}`}>
        <rect x="440" y={row.y} width="150" height="24" rx="6" fill="#fff" opacity="0.95" />
        <rect x="452" y={row.y + 9} width="96" height="6" rx="3" fill="#046999" />
      </g>
    ))}
    <text x="515" y="144" textAnchor="middle" fill="#fff" opacity="0.8" fontSize="12" fontWeight="700">
      On-brand styles
    </text>
  </svg>
);
