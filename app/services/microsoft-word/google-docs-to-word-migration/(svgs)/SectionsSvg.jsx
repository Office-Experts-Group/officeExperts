// app/google-docs-to-word-migration/(svgs)/SectionsSvg.jsx

// Portrait, landscape and portrait pages in one document, joined by section breaks.
// Uses currentColor so the parent tile decides the colour.
export const SectionsSvg = () => (
  <svg viewBox="0 0 360 200" fill="none" aria-hidden="true">
    {/* Page 1: portrait */}
    <rect x="14" y="20" width="88" height="124" rx="6" fill="currentColor" opacity="0.1" />
    <rect x="14" y="20" width="88" height="124" rx="6" stroke="currentColor" strokeWidth="2" />
    <rect x="24" y="30" width="68" height="8" rx="4" fill="currentColor" opacity="0.55" />
    {[50, 62, 74, 86, 98].map((y, i) => (
      <rect key={y} x="24" y={y} width={[68, 60, 68, 50, 64][i]} height="5" rx="2.5" fill="currentColor" opacity="0.6" />
    ))}
    <rect x="24" y="128" width="24" height="5" rx="2.5" fill="currentColor" opacity="0.6" />

    {/* Page 2: landscape, with a small chart */}
    <rect x="118" y="50" width="140" height="96" rx="6" fill="currentColor" opacity="0.1" />
    <rect x="118" y="50" width="140" height="96" rx="6" stroke="currentColor" strokeWidth="2" />
    <rect x="130" y="60" width="116" height="8" rx="4" fill="currentColor" opacity="0.9" />
    {[0, 1, 2, 3, 4].map((i) => (
      <rect key={i} x={134 + i * 22} y={128 - [18, 30, 22, 40, 34][i]} width="14" height={[18, 30, 22, 40, 34][i]} rx="3" fill="currentColor" opacity="0.7" />
    ))}
    <rect x="130" y="134" width="24" height="5" rx="2.5" fill="currentColor" opacity="0.6" />

    {/* Page 3: portrait */}
    <rect x="268" y="20" width="88" height="124" rx="6" fill="currentColor" opacity="0.1" />
    <rect x="268" y="20" width="88" height="124" rx="6" stroke="currentColor" strokeWidth="2" />
    <rect x="278" y="30" width="68" height="8" rx="4" fill="currentColor" opacity="0.55" />
    {[50, 62, 74, 86, 98].map((y, i) => (
      <rect key={y} x="278" y={y} width={[68, 56, 68, 62, 44][i]} height="5" rx="2.5" fill="currentColor" opacity="0.6" />
    ))}
    <rect x="278" y="128" width="24" height="5" rx="2.5" fill="currentColor" opacity="0.6" />

    {/* Section break rail */}
    <path d="M14 172h342" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" opacity="0.6" />
    {[58, 188, 312].map((x) => (
      <g key={x}>
        <circle cx={x} cy="172" r="10" fill="#111820" stroke="currentColor" strokeWidth="2" />
        <circle cx={x} cy="172" r="3.5" fill="currentColor" />
      </g>
    ))}
  </svg>
);
