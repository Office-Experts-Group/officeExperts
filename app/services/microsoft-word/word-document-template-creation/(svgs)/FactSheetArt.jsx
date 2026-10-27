// /services/microsoft-word/word-document-template-creation/(svgs)/FactSheetArt.jsx

// Fact sheet with three stat blocks and a picture panel. Uses currentColor.
export const FactSheetArt = () => (
  <svg viewBox="0 0 200 200" fill="none" aria-hidden="true">
    <rect
      x="40"
      y="20"
      width="140"
      height="200"
      rx="6"
      fill="currentColor"
      fillOpacity="0.14"
      stroke="currentColor"
      strokeOpacity="0.6"
      strokeWidth="2"
    />
    <rect x="54" y="34" width="84" height="10" rx="2" fill="currentColor" fillOpacity="0.8" />
    {/* Three stat blocks */}
    <rect x="54" y="58" width="32" height="38" rx="4" fill="currentColor" fillOpacity="0.3" />
    <rect x="92" y="58" width="32" height="38" rx="4" fill="currentColor" fillOpacity="0.3" />
    <rect x="130" y="58" width="32" height="38" rx="4" fill="currentColor" fillOpacity="0.3" />
    <rect x="60" y="68" width="20" height="8" rx="2" fill="currentColor" fillOpacity="0.8" />
    <rect x="98" y="68" width="20" height="8" rx="2" fill="currentColor" fillOpacity="0.8" />
    <rect x="136" y="68" width="20" height="8" rx="2" fill="currentColor" fillOpacity="0.8" />
    {/* Picture panel */}
    <rect x="54" y="106" width="108" height="42" rx="4" fill="currentColor" fillOpacity="0.22" />
    <path d="M54 148l30-26 22 18 18-12 38 20z" fill="currentColor" fillOpacity="0.4" />
    <rect x="54" y="160" width="108" height="5" rx="2" fill="currentColor" fillOpacity="0.3" />
    <rect x="54" y="172" width="76" height="5" rx="2" fill="currentColor" fillOpacity="0.3" />
  </svg>
);
