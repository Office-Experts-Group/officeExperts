// /services/microsoft-word/word-document-template-creation/(svgs)/BriefingArt.jsx

// Briefing paper with a header banner, two text columns and a call-out box. Uses currentColor.
export const BriefingArt = () => (
  <svg viewBox="0 0 200 200" fill="none" aria-hidden="true">
    <rect
      x="40"
      y="20"
      width="140"
      height="200"
      rx="6"
      fill="currentColor"
      fillOpacity="0.1"
      stroke="currentColor"
      strokeOpacity="0.5"
      strokeWidth="2"
    />
    <rect x="54" y="34" width="112" height="24" rx="3" fill="currentColor" fillOpacity="0.6" />
    <rect x="54" y="68" width="40" height="8" rx="2" fill="currentColor" fillOpacity="0.35" />
    {/* Left column */}
    <rect x="54" y="88" width="50" height="5" rx="2" fill="currentColor" fillOpacity="0.28" />
    <rect x="54" y="100" width="50" height="5" rx="2" fill="currentColor" fillOpacity="0.28" />
    <rect x="54" y="112" width="50" height="5" rx="2" fill="currentColor" fillOpacity="0.28" />
    <rect x="54" y="124" width="50" height="5" rx="2" fill="currentColor" fillOpacity="0.28" />
    <rect x="54" y="136" width="36" height="5" rx="2" fill="currentColor" fillOpacity="0.28" />
    {/* Right column with call-out */}
    <rect x="112" y="88" width="54" height="36" rx="3" fill="currentColor" fillOpacity="0.25" />
    <rect x="112" y="132" width="54" height="5" rx="2" fill="currentColor" fillOpacity="0.28" />
    <rect x="112" y="144" width="54" height="5" rx="2" fill="currentColor" fillOpacity="0.28" />
  </svg>
);
