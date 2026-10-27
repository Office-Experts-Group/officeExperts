// /services/microsoft-word/word-document-template-creation/(svgs)/ReportArt.jsx

// Report page with a pie chart and bar chart. Uses currentColor; elements marked
// data-accent are filled with the accent colour by the stylesheet on dark tiles.
export const ReportArt = () => (
  <svg viewBox="0 0 300 180" fill="none" aria-hidden="true">
    <rect
      x="60"
      y="20"
      width="200"
      height="190"
      rx="8"
      fill="currentColor"
      fillOpacity="0.08"
      stroke="currentColor"
      strokeOpacity="0.5"
      strokeWidth="2"
    />
    <rect x="78" y="38" width="90" height="10" rx="2" fill="currentColor" fillOpacity="0.7" />
    {/* Pie chart */}
    <circle cx="112" cy="96" r="30" fill="currentColor" fillOpacity="0.2" />
    <path d="M112 96V66a30 30 0 0 1 28.5 20.7z" data-accent fill="currentColor" />
    {/* Bar chart */}
    <rect x="170" y="114" width="14" height="40" rx="2" fill="currentColor" fillOpacity="0.45" />
    <rect x="190" y="94" width="14" height="60" rx="2" data-accent fill="currentColor" />
    <rect x="210" y="124" width="14" height="30" rx="2" fill="currentColor" fillOpacity="0.45" />
    <rect x="230" y="104" width="14" height="50" rx="2" fill="currentColor" fillOpacity="0.45" />
    <rect x="78" y="170" width="160" height="5" rx="2" fill="currentColor" fillOpacity="0.25" />
  </svg>
);
