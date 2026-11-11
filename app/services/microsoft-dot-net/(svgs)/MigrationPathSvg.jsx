// app/services/microsoft-dot-net/(svgs)/MigrationPathSvg.jsx
// Legacy .NET Framework window moving through assess, upgrade and test to .NET 10. Used in DotNetMigration.
// Decorative only (aria-hidden). Text inherits the site font; colours mirror globals.scss tokens.
export const MigrationPathSvg = () => (
  <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    {/* Legacy app window */}
    <rect x="12" y="62" width="150" height="176" rx="16" fill="#f2f3f5" stroke="#d4d6d9" strokeWidth="1.5" />
    <path d="M12 78a16 16 0 0 1 16-16h118a16 16 0 0 1 16 16v8H12z" fill="#d4d6d9" />
    <rect x="28" y="102" width="70" height="8" rx="4" fill="#a0a2a6" />
    <rect x="28" y="118" width="110" height="8" rx="4" fill="#d4d6d9" />
    <rect x="28" y="134" width="92" height="8" rx="4" fill="#d4d6d9" />
    <rect x="28" y="154" width="52" height="34" rx="6" fill="#ffffff" stroke="#d4d6d9" />
    <rect x="86" y="154" width="52" height="34" rx="6" fill="#ffffff" stroke="#d4d6d9" />
    <text x="87" y="218" fontSize="11" fontWeight="700" fill="#777a7e" textAnchor="middle">.NET Framework 4.x</text>

    {/* Upgrade path with stage markers */}
    <path d="M170 150H300" stroke="#046999" strokeWidth="2" strokeDasharray="5 6" strokeLinecap="round" />
    <path d="M298 143l8 7-8 7" stroke="#046999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <g fontSize="10" fontWeight="700" fill="#4a5568" textAnchor="middle">
      <circle cx="198" cy="150" r="7" fill="#ffffff" stroke="#046999" strokeWidth="2" />
      <text x="198" y="128">Assess</text>
      <circle cx="238" cy="150" r="7" fill="#046999" />
      <text x="238" y="178">Upgrade</text>
      <circle cx="278" cy="150" r="7" fill="#ffffff" stroke="#046999" strokeWidth="2" />
      <text x="278" y="128">Test</text>
    </g>

    {/* Modern app window */}
    <rect x="316" y="40" width="152" height="220" rx="18" fill="#111820" />
    <path d="M316 58a18 18 0 0 1 18-18h116a18 18 0 0 1 18 18v10H316z" fill="#046999" />
    <rect x="334" y="88" width="64" height="8" rx="4" fill="#6fc3e8" />
    <rect x="334" y="104" width="116" height="8" rx="4" fill="#ffffff40" />
    <rect x="334" y="120" width="96" height="8" rx="4" fill="#ffffff40" />
    {/* Small bar chart: faster runtime */}
    <rect x="334" y="176" width="16" height="22" rx="3" fill="#ffffff2e" />
    <rect x="356" y="164" width="16" height="34" rx="3" fill="#ffffff40" />
    <rect x="378" y="150" width="16" height="48" rx="3" fill="#6fc3e8" fillOpacity="0.7" />
    <rect x="400" y="138" width="16" height="60" rx="3" fill="#6fc3e8" />
    <text x="392" y="232" fontSize="12" fontWeight="700" fill="#ffffff" textAnchor="middle">.NET 10</text>
    <rect x="368" y="22" width="56" height="22" rx="11" fill="#0eaa0e" />
    <text x="396" y="37" fontSize="10" fontWeight="700" fill="#ffffff" textAnchor="middle">LTS</text>
  </svg>
);
