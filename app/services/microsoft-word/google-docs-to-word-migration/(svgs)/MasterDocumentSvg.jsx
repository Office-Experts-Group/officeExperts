// app/google-docs-to-word-migration/(svgs)/MasterDocumentSvg.jsx

// A master document branching into three subdocuments, each with its own author.
export const MasterDocumentSvg = () => (
  <svg viewBox="0 0 160 100" fill="none" aria-hidden="true">
    {/* Master */}
    <rect x="50" y="6" width="60" height="26" rx="6" fill="currentColor" />
    <rect x="60" y="15" width="40" height="5" rx="2.5" fill="#111820" opacity="0.6" />
    <rect x="60" y="23" width="26" height="4" rx="2" fill="#111820" opacity="0.4" />

    {/* Connectors */}
    <path d="M80 32v22M80 40H30v14M80 40h50v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />

    {/* Subdocuments */}
    {[10, 60, 110].map((x) => (
      <g key={x}>
        <rect x={x} y="54" width="40" height="40" rx="5" fill="currentColor" opacity="0.15" />
        <rect x={x} y="54" width="40" height="40" rx="5" stroke="currentColor" strokeWidth="2" />
        <rect x={x + 6} y="64" width="22" height="4" rx="2" fill="currentColor" opacity="0.6" />
        <rect x={x + 6} y="72" width="28" height="4" rx="2" fill="currentColor" opacity="0.6" />
        <rect x={x + 6} y="80" width="16" height="4" rx="2" fill="currentColor" opacity="0.6" />
        <circle cx={x + 34} cy="60" r="4" fill="currentColor" />
      </g>
    ))}
  </svg>
);
