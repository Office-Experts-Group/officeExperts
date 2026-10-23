// app/corporate-identity/(svgs)/DriftComparisonSvg.jsx

// Two miniature documents side by side: an ungoverned one drifting out of
// brand on the left, a locked and consistent one on the right. Used as the
// visual centrepiece of CorporateIdentityDrift, sitting above the copy.
export const DriftComparisonSvg = () => (
  <svg
    viewBox="0 0 640 340"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="dc-goodGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#046999" />
        <stop offset="100%" stopColor="#0a85bf" />
      </linearGradient>
    </defs>

    {/* ── Left: drifting / inconsistent documents (fanned stack) ── */}
    <g transform="translate(30,40)">
      {/* Back document, rotated, mismatched header colour */}
      <g transform="rotate(-7 100 120)">
        <rect x="20" y="10" width="170" height="230" rx="4" fill="#fdf6f5" stroke="#c0392b" strokeWidth="1.2" />
        <rect x="20" y="10" width="170" height="28" fill="#e67e22" opacity="0.6" />
        <rect x="34" y="54" width="120" height="7" rx="2" fill="#e0a9a2" />
        <rect x="34" y="68" width="140" height="6" rx="2" fill="#f0d3ce" />
        <rect x="34" y="80" width="140" height="6" rx="2" fill="#f0d3ce" />
        <rect x="34" y="92" width="100" height="6" rx="2" fill="#f0d3ce" />
      </g>

      {/* Front document, slightly rotated, different mismatched header */}
      <g transform="rotate(5 100 120)">
        <rect x="10" y="0" width="170" height="230" rx="4" fill="#fdf6f5" stroke="#c0392b" strokeWidth="1.2" />
        <rect x="10" y="0" width="170" height="24" fill="#8e44ad" opacity="0.55" />
        <rect x="24" y="42" width="110" height="8" rx="2" fill="#c0392b" opacity="0.6" />
        <rect x="24" y="58" width="150" height="6" rx="2" fill="#f0d3ce" />
        <rect x="24" y="70" width="120" height="6" rx="2" fill="#f0d3ce" />
        <rect x="24" y="82" width="150" height="6" rx="2" fill="#f0d3ce" />
        <rect x="24" y="94" width="90" height="6" rx="2" fill="#f0d3ce" />

        {/* Stray mismatched logo mark */}
        <circle cx="150" cy="150" r="16" fill="none" stroke="#c0392b" strokeWidth="1.4" strokeDasharray="2 2" />
        <path d="M144 150h12M150 144v12" stroke="#c0392b" strokeWidth="1.4" strokeLinecap="round" />

        {/* Warning marker */}
        <circle cx="20" cy="210" r="13" fill="#c0392b" />
        <path d="M20 204v8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="20" cy="216" r="1.2" fill="#fff" />
      </g>
    </g>

    <text x="115" y="300" textAnchor="middle" fontSize="11" fontWeight="700" fill="#c0392b" letterSpacing="1">
      UNGOVERNED
    </text>

    {/* ── Centre divider with arrow ── */}
    <line x1="320" y1="20" x2="320" y2="280" stroke="#e2edf4" strokeWidth="1.5" strokeDasharray="4 4" />
    <circle cx="320" cy="150" r="20" fill="#ffffff" stroke="#046999" strokeWidth="1.5" />
    <path d="M312 150h16M322 144l6 6-6 6" stroke="#046999" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />

    {/* ── Right: single governed, on-brand document ── */}
    <g transform="translate(430,25)">
      <rect x="0" y="0" width="180" height="250" rx="4" fill="#ffffff" stroke="#e2edf4" strokeWidth="1.5" />
      <rect x="0" y="0" width="180" height="30" rx="4" fill="url(#dc-goodGrad)" />
      <rect x="0" y="24" width="180" height="6" fill="url(#dc-goodGrad)" />
      <rect x="16" y="10" width="18" height="12" rx="2" fill="#ffffff" opacity="0.9" />
      <rect x="42" y="12" width="70" height="7" rx="2" fill="#ffffff" opacity="0.75" />

      <rect x="16" y="48" width="110" height="9" rx="2" fill="#046999" />
      <rect x="16" y="68" width="148" height="6" rx="2" fill="#d7dee3" />
      <rect x="16" y="80" width="148" height="6" rx="2" fill="#d7dee3" />
      <rect x="16" y="92" width="120" height="6" rx="2" fill="#d7dee3" />

      {/* Locked field */}
      <rect x="16" y="112" width="110" height="18" rx="3" fill="#e8f4fa" stroke="#046999" strokeWidth="1.2" strokeDasharray="2 2" />
      <text x="24" y="125" fontSize="7.5" fontWeight="700" fill="#046999" fontFamily="monospace">[Locked field]</text>

      <rect x="16" y="146" width="148" height="6" rx="2" fill="#e6e9ec" />
      <rect x="16" y="158" width="148" height="6" rx="2" fill="#e6e9ec" />
      <rect x="16" y="170" width="100" height="6" rx="2" fill="#e6e9ec" />

      {/* Approved / consistent marker */}
      <circle cx="150" cy="210" r="14" fill="#046999" />
      <path d="M143 210l5 5 9-10" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      <rect x="16" y="228" width="70" height="6" rx="2" fill="#c3ccd1" />
    </g>

    <text x="520" y="300" textAnchor="middle" fontSize="11" fontWeight="700" fill="#046999" letterSpacing="1">
      TEMPLATE-GOVERNED
    </text>
  </svg>
);
