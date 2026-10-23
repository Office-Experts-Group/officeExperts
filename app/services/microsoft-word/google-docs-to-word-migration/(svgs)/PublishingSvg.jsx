// app/google-docs-to-word-migration/(svgs)/PublishingSvg.jsx

// A Word page exported to a print-ready, accessible PDF with crop marks and an access symbol.
export const PublishingSvg = () => (
  <svg viewBox="0 0 240 140" fill="none" aria-hidden="true">
    {/* Source page */}
    <rect x="10" y="26" width="64" height="88" rx="6" fill="currentColor" opacity="0.12" />
    <rect x="10" y="26" width="64" height="88" rx="6" stroke="currentColor" strokeWidth="2" />
    <rect x="20" y="38" width="44" height="7" rx="3.5" fill="currentColor" opacity="0.7" />
    {[54, 64, 74, 84].map((y, i) => (
      <rect key={y} x="20" y={y} width={[44, 38, 44, 26][i]} height="5" rx="2.5" fill="currentColor" opacity="0.55" />
    ))}

    {/* Export arrow */}
    <path d="M86 70h26M104 62l8 8-8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* PDF page with folded corner */}
    <path d="M128 26h42l16 16v72a6 6 0 0 1-6 6h-52a6 6 0 0 1-6-6V32a6 6 0 0 1 6-6z" fill="currentColor" opacity="0.12" />
    <path d="M128 26h42l16 16v72a6 6 0 0 1-6 6h-52a6 6 0 0 1-6-6V32a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M170 26v16h16" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    {/* Tag brackets show the PDF is tagged for accessibility */}
    <path d="M146 76l-8 8 8 8M168 76l8 8-8 8M160 72l-6 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Crop marks around the PDF page */}
    <path d="M114 16v-8h8M194 16v-8h-8M114 126v8h8M194 126v8h-8" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />

    {/* Universal access symbol */}
    <circle cx="218" cy="34" r="16" stroke="currentColor" strokeWidth="2" />
    <circle cx="218" cy="27" r="2.5" fill="currentColor" />
    <path d="M208 33h20M218 33v8M218 41l-5 7M218 41l5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
