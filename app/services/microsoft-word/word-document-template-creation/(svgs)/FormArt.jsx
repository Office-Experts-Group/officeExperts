// /services/microsoft-word/word-document-template-creation/(svgs)/FormArt.jsx

// Fill-in form with labelled fields, a ticked box and a submit button. Uses currentColor.
export const FormArt = () => (
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
    <rect x="56" y="34" width="70" height="9" rx="2" fill="currentColor" fillOpacity="0.7" />
    {/* Two labelled input fields */}
    <rect x="56" y="58" width="40" height="5" rx="2" fill="currentColor" fillOpacity="0.5" />
    <rect x="56" y="68" width="108" height="18" rx="3" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.6" strokeWidth="2" />
    <rect x="56" y="94" width="52" height="5" rx="2" fill="currentColor" fillOpacity="0.5" />
    <rect x="56" y="104" width="108" height="18" rx="3" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.6" strokeWidth="2" />
    {/* Ticked checkbox */}
    <rect x="56" y="134" width="14" height="14" rx="3" stroke="currentColor" strokeOpacity="0.6" strokeWidth="2" />
    <path d="M59 141l4 4 6-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="78" y="138" width="60" height="6" rx="2" fill="currentColor" fillOpacity="0.4" />
    {/* Submit button */}
    <rect x="56" y="162" width="52" height="20" rx="3" fill="currentColor" fillOpacity="0.75" />
  </svg>
);
