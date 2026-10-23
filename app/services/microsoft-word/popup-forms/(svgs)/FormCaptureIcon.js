// app/popup-forms/(svgs)/FormCaptureIcon.js

export const FormCaptureIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
    {/* Popup window frame */}
    <rect x="6" y="7" width="32" height="30" rx="3" stroke="currentColor" strokeWidth="1.5" />
    {/* Title bar */}
    <rect
      x="6"
      y="7"
      width="32"
      height="8"
      rx="3"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      fillOpacity="0.1"
    />
    <circle cx="10.5" cy="11" r="1.1" fill="currentColor" opacity="0.6" />
    {/* Input fields */}
    <rect x="10" y="19" width="24" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.2" />
    <rect x="10" y="27" width="17" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.2" />
    {/* Cursor blink in second field */}
    <path d="M29.5 27.5v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
  </svg>
);
