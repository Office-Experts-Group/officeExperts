// app/google-docs-to-word-migration/(svgs)/ShieldSvg.jsx

// A shield with a tick, a locked document and an audit trail. Colour comes from currentColor.
export const ShieldSvg = () => (
  <svg viewBox="0 0 300 160" fill="none" aria-hidden="true">
    {/* Shield */}
    <path
      d="M150 12l52 18v48c0 30-22 52-52 66-30-14-52-36-52-66V30z"
      fill="currentColor"
      opacity="0.12"
    />
    <path
      d="M150 12l52 18v48c0 30-22 52-52 66-30-14-52-36-52-66V30z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path d="M128 78l16 16 30-34" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Locked document on the left */}
    <rect x="18" y="44" width="48" height="62" rx="6" stroke="currentColor" strokeWidth="2" />
    <rect x="28" y="54" width="28" height="5" rx="2.5" fill="currentColor" opacity="0.6" />
    <rect x="28" y="64" width="22" height="5" rx="2.5" fill="currentColor" opacity="0.6" />
    <rect x="34" y="88" width="24" height="20" rx="4" fill="currentColor" />
    <path d="M39 88v-5a7 7 0 0 1 14 0v5" stroke="currentColor" strokeWidth="2.5" />

    {/* Audit trail on the right */}
    <path d="M222 44v68" stroke="currentColor" strokeWidth="2" opacity="0.5" />
    {[44, 78, 112].map((y, i) => (
      <g key={y}>
        <circle cx="222" cy={y} r="5" fill="currentColor" />
        <rect x="234" y={y - 4} width={[48, 40, 32][i]} height="8" rx="4" fill="currentColor" opacity="0.6" />
      </g>
    ))}
  </svg>
);
