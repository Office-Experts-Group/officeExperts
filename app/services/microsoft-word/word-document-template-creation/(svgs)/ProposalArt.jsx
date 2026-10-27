// /services/microsoft-word/word-document-template-creation/(svgs)/ProposalArt.jsx

// Proposal cover page with a second page peeking out behind it.
// Shapes use currentColor, so the tile's stylesheet sets the colour.
export const ProposalArt = () => (
  <svg viewBox="0 0 360 320" fill="none" aria-hidden="true">
    {/* Page behind, turned the opposite way */}
    <rect
      x="170"
      y="30"
      width="170"
      height="250"
      rx="8"
      transform="rotate(9 255 155)"
      fill="currentColor"
      fillOpacity="0.08"
      stroke="currentColor"
      strokeOpacity="0.4"
      strokeWidth="2"
    />
    {/* Cover page */}
    <g transform="rotate(-6 150 190)">
      <rect
        x="60"
        y="60"
        width="180"
        height="270"
        rx="8"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeOpacity="0.75"
        strokeWidth="2"
      />
      <rect x="76" y="76" width="148" height="100" rx="4" fill="currentColor" fillOpacity="0.3" />
      <path d="M76 176l38-46 30 32 24-26 56 40z" fill="currentColor" fillOpacity="0.5" />
      <rect x="76" y="196" width="110" height="16" rx="3" fill="currentColor" fillOpacity="0.85" />
      <rect x="76" y="220" width="76" height="9" rx="3" fill="currentColor" fillOpacity="0.45" />
      <rect x="76" y="244" width="148" height="6" rx="3" fill="currentColor" fillOpacity="0.28" />
      <rect x="76" y="258" width="148" height="6" rx="3" fill="currentColor" fillOpacity="0.28" />
      <rect x="76" y="272" width="104" height="6" rx="3" fill="currentColor" fillOpacity="0.28" />
      <circle cx="200" cy="304" r="12" stroke="currentColor" strokeOpacity="0.7" strokeWidth="2" />
    </g>
  </svg>
);
