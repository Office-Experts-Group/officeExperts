// /services/microsoft-word/word-document-template-creation/(svgs)/PolicyArt.jsx

// Policy page with a contents list and bookmark ribbon. Uses currentColor; elements
// marked data-accent are filled with the accent colour by the stylesheet on dark tiles.
export const PolicyArt = () => (
  <svg viewBox="0 0 300 180" fill="none" aria-hidden="true">
    <rect
      x="70"
      y="14"
      width="190"
      height="200"
      rx="8"
      fill="currentColor"
      fillOpacity="0.08"
      stroke="currentColor"
      strokeOpacity="0.5"
      strokeWidth="2"
    />
    {/* Bookmark ribbon */}
    <path d="M232 14h16v38l-8-7-8 7z" data-accent fill="currentColor" />
    <rect x="88" y="30" width="80" height="10" rx="2" fill="currentColor" fillOpacity="0.7" />
    {/* Contents rows: section number, title, page number */}
    <rect x="88" y="62" width="14" height="8" rx="2" data-accent fill="currentColor" />
    <rect x="110" y="63" width="96" height="6" rx="2" fill="currentColor" fillOpacity="0.4" />
    <rect x="228" y="63" width="14" height="6" rx="2" fill="currentColor" fillOpacity="0.5" />
    <rect x="88" y="88" width="14" height="8" rx="2" fill="currentColor" fillOpacity="0.55" />
    <rect x="110" y="89" width="76" height="6" rx="2" fill="currentColor" fillOpacity="0.4" />
    <rect x="228" y="89" width="14" height="6" rx="2" fill="currentColor" fillOpacity="0.5" />
    <rect x="88" y="114" width="14" height="8" rx="2" fill="currentColor" fillOpacity="0.55" />
    <rect x="110" y="115" width="104" height="6" rx="2" fill="currentColor" fillOpacity="0.4" />
    <rect x="228" y="115" width="14" height="6" rx="2" fill="currentColor" fillOpacity="0.5" />
    <rect x="88" y="140" width="14" height="8" rx="2" fill="currentColor" fillOpacity="0.55" />
    <rect x="110" y="141" width="84" height="6" rx="2" fill="currentColor" fillOpacity="0.4" />
    <rect x="228" y="141" width="14" height="6" rx="2" fill="currentColor" fillOpacity="0.5" />
    <rect x="88" y="166" width="14" height="8" rx="2" fill="currentColor" fillOpacity="0.55" />
    <rect x="110" y="167" width="92" height="6" rx="2" fill="currentColor" fillOpacity="0.4" />
  </svg>
);
