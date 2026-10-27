// /services/microsoft-word/word-document-template-creation/(svgs)/ContractArt.jsx

// Contract page with numbered clauses, signatures and a stamp. Uses currentColor.
export const ContractArt = () => (
  <svg viewBox="0 0 200 260" fill="none" aria-hidden="true">
    <rect
      x="20"
      y="10"
      width="160"
      height="260"
      rx="6"
      fill="currentColor"
      fillOpacity="0.1"
      stroke="currentColor"
      strokeOpacity="0.6"
      strokeWidth="2"
    />
    <rect x="36" y="28" width="90" height="10" rx="2" fill="currentColor" fillOpacity="0.75" />
    {/* Numbered clauses */}
    <rect x="36" y="56" width="12" height="12" rx="2" fill="currentColor" fillOpacity="0.6" />
    <rect x="56" y="57" width="108" height="5" rx="2" fill="currentColor" fillOpacity="0.3" />
    <rect x="56" y="67" width="80" height="5" rx="2" fill="currentColor" fillOpacity="0.3" />
    <rect x="36" y="86" width="12" height="12" rx="2" fill="currentColor" fillOpacity="0.6" />
    <rect x="56" y="87" width="108" height="5" rx="2" fill="currentColor" fillOpacity="0.3" />
    <rect x="56" y="97" width="92" height="5" rx="2" fill="currentColor" fillOpacity="0.3" />
    <rect x="36" y="116" width="12" height="12" rx="2" fill="currentColor" fillOpacity="0.6" />
    <rect x="56" y="117" width="108" height="5" rx="2" fill="currentColor" fillOpacity="0.3" />
    <rect x="56" y="127" width="64" height="5" rx="2" fill="currentColor" fillOpacity="0.3" />
    {/* Stamp */}
    <circle cx="146" cy="168" r="17" stroke="currentColor" strokeOpacity="0.7" strokeWidth="2" />
    <circle cx="146" cy="168" r="10" stroke="currentColor" strokeOpacity="0.4" strokeWidth="2" />
    {/* Signature lines */}
    <path
      d="M40 204c8-18 14 10 22-4s12-14 20 2"
      stroke="currentColor"
      strokeOpacity="0.85"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <rect x="36" y="210" width="60" height="2" fill="currentColor" fillOpacity="0.6" />
    <rect x="116" y="210" width="48" height="2" fill="currentColor" fillOpacity="0.6" />
  </svg>
);
