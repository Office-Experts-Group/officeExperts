// app/google-docs-to-word-migration/(svgs)/IntegrationSvg.jsx

// A central document linked to four business systems.
export const IntegrationSvg = () => (
  <svg viewBox="0 0 120 120" fill="none" aria-hidden="true">
    {/* Links */}
    <path d="M60 60L22 24M60 60l38-36M60 60L22 98M60 60l38 38" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />

    {/* Central document */}
    <rect x="42" y="38" width="36" height="44" rx="5" fill="currentColor" />
    <path d="M50 50h20M50 58h20M50 66h12" stroke="#111820" strokeWidth="3" strokeLinecap="round" opacity="0.7" />

    {/* Database */}
    <ellipse cx="22" cy="20" rx="12" ry="5" stroke="currentColor" strokeWidth="2" />
    <path d="M10 20v10c0 3 5 5 12 5s12-2 12-5V20" stroke="currentColor" strokeWidth="2" />

    {/* Cloud */}
    <path d="M86 28a8 8 0 0 1 4-14 10 10 0 0 1 19 3 7 7 0 0 1-1 11z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />

    {/* Grid / spreadsheet */}
    <rect x="10" y="88" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
    <path d="M10 98h24M22 88v20" stroke="currentColor" strokeWidth="1.5" />

    {/* Mail */}
    <rect x="86" y="88" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
    <path d="M87 91l11 9 11-9" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);
