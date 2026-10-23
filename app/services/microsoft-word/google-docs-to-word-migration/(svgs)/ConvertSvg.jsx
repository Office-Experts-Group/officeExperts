// app/google-docs-to-word-migration/(svgs)/ConvertSvg.jsx

// A loose page converting into a properly structured one. Colour comes from currentColor.
export const ConvertSvg = () => (
  <svg viewBox="0 0 240 120" fill="none" aria-hidden="true">
    {/* Before: loose page */}
    <rect x="14" y="14" width="76" height="92" rx="7" stroke="currentColor" strokeWidth="2" opacity="0.6" />
    {[28, 40, 52, 64, 76].map((y, i) => (
      <rect key={y} x="24" y={y} width={[56, 44, 56, 36, 50][i]} height="5" rx="2.5" fill="currentColor" opacity="0.4" />
    ))}

    {/* Conversion arrows */}
    <path d="M104 52h32M128 44l8 8-8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M136 72h-32M112 64l-8 8 8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />

    {/* After: structured page with heading, list and table */}
    <rect x="150" y="14" width="76" height="92" rx="7" fill="currentColor" opacity="0.12" />
    <rect x="150" y="14" width="76" height="92" rx="7" stroke="currentColor" strokeWidth="2" />
    <rect x="160" y="24" width="40" height="9" rx="4.5" fill="currentColor" />
    {[42, 52].map((y) => (
      <g key={y}>
        <circle cx="163" cy={y + 2.5} r="2.5" fill="currentColor" />
        <rect x="170" y={y} width="42" height="5" rx="2.5" fill="currentColor" opacity="0.6" />
      </g>
    ))}
    <rect x="160" y="68" width="56" height="28" rx="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M160 78h56M179 68v28M198 68v28" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);
