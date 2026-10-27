// /services/microsoft-word/word-document-template-creation/(svgs)/AgendaArt.jsx

// Agenda page with ticked items and times. Uses currentColor.
export const AgendaArt = () => (
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
    <rect x="56" y="36" width="76" height="10" rx="2" fill="currentColor" fillOpacity="0.7" />
    {/* Four agenda items; the first three are ticked off */}
    <rect x="56" y="62" width="14" height="14" rx="3" stroke="currentColor" strokeOpacity="0.6" strokeWidth="2" />
    <path d="M59 69l4 4 6-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="80" y="66" width="84" height="6" rx="2" fill="currentColor" fillOpacity="0.4" />
    <rect x="56" y="92" width="14" height="14" rx="3" stroke="currentColor" strokeOpacity="0.6" strokeWidth="2" />
    <path d="M59 99l4 4 6-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="80" y="96" width="64" height="6" rx="2" fill="currentColor" fillOpacity="0.4" />
    <rect x="56" y="122" width="14" height="14" rx="3" stroke="currentColor" strokeOpacity="0.6" strokeWidth="2" />
    <path d="M59 129l4 4 6-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="80" y="126" width="76" height="6" rx="2" fill="currentColor" fillOpacity="0.4" />
    <rect x="56" y="152" width="14" height="14" rx="3" stroke="currentColor" strokeOpacity="0.6" strokeWidth="2" />
    <rect x="80" y="156" width="56" height="6" rx="2" fill="currentColor" fillOpacity="0.4" />
  </svg>
);
