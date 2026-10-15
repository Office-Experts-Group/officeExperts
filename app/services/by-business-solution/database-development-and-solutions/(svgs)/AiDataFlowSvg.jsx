// app/services/by-business-solution/database-development-and-solutions/(svgs)/AiDataFlowSvg.jsx
// How a private AI assistant answers from business data: sources → permission check and search →
// assistant → answer with references. Drawn for a dark panel.
// Decorative only, so it is hidden from assistive technology (the steps are written out in the section copy).

// Source chips across the top, kept as data so positions are easy to adjust
const sources = [
  { label: "Documents", x: 20, y: 20 },
  { label: "SharePoint", x: 190, y: 20 },
  { label: "SQL / Access", x: 20, y: 68 },
  { label: "Excel", x: 190, y: 68 },
];

export const AiDataFlowSvg = () => (
  <svg
    viewBox="0 0 360 440"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    {sources.map((s) => (
      <g key={s.label}>
        <rect x={s.x} y={s.y} width="150" height="36" rx="18" fill="#18232e" stroke="rgba(255,255,255,0.12)" />
        <circle cx={s.x + 20} cy={s.y + 18} r="4" fill="#ffffff" opacity="0.55" />
        <text x={s.x + 34} y={s.y + 22} fontSize="12" fill="#ffffff" opacity="0.88">
          {s.label}
        </text>
      </g>
    ))}

    {/* Converging lines into the permission and search step */}
    <path d="M95 104v24h85M265 104v24h-85M180 128v22" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" />

    {/* Permission check and retrieval */}
    <rect x="40" y="150" width="280" height="64" rx="10" fill="#046999" />
    <rect x="60" y="168" width="18" height="14" rx="2" fill="#ffffff" />
    <path d="M63 168v-4a6 6 0 0 1 12 0v4" stroke="#ffffff" strokeWidth="1.8" />
    <text x="92" y="178" fontSize="13" fontWeight="700" fill="#ffffff">
      Permission check + search
    </text>
    <text x="92" y="197" fontSize="11" fill="#ffffff" opacity="0.88">
      Only what this user may see
    </text>

    <path d="M180 214v26" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" />

    {/* AI assistant */}
    <rect x="90" y="240" width="180" height="52" rx="26" fill="#1a2a3a" stroke="rgba(255,255,255,0.18)" />
    <path
      d="M120 266l4 -9 4 9 9 4 -9 4 -4 9 -4 -9 -9 -4z"
      fill="#ffffff"
      opacity="0.88"
    />
    <text x="148" y="271" fontSize="13" fontWeight="700" fill="#ffffff" opacity="0.9">
      AI assistant
    </text>

    <path d="M180 292v26" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" />

    {/* Answer bubble with numbered references back to the source records */}
    <rect x="20" y="318" width="320" height="100" rx="12" fill="#ffffff" />
    <rect x="40" y="338" width="230" height="9" rx="4.5" fill="#0d1b2a" opacity="0.8" />
    <rect x="40" y="356" width="270" height="8" rx="4" fill="#4a5568" opacity="0.3" />
    <rect x="40" y="372" width="190" height="8" rx="4" fill="#4a5568" opacity="0.3" />
    <rect x="40" y="392" width="34" height="16" rx="8" fill="#e8f4fa" />
    <text x="51" y="404" fontSize="10" fontWeight="700" fill="#046999">
      [1]
    </text>
    <rect x="80" y="392" width="34" height="16" rx="8" fill="#e8f4fa" />
    <text x="91" y="404" fontSize="10" fontWeight="700" fill="#046999">
      [2]
    </text>
  </svg>
);
