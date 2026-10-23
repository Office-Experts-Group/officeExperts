// app/popup-forms/(svgs)/MissedFieldSVG.js

export const MissedFieldSVG = () => (
  <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
    {/* Form field outline — empty, no validation */}
    <rect
      x="5"
      y="12"
      width="17"
      height="7"
      rx="1.5"
      stroke="#046999"
      strokeWidth="1.5"
    />
    {/* Cursor blink inside the empty field */}
    <path
      d="M8 14v3"
      stroke="#046999"
      strokeWidth="1.4"
      strokeLinecap="round"
      opacity="0.5"
    />
    {/* Field label above */}
    <path
      d="M5 8h12"
      stroke="#046999"
      strokeWidth="1.3"
      strokeLinecap="round"
      opacity="0.6"
    />
    {/* Warning triangle — required, but wrong or missing */}
    <path
      d="M24 10.5l4.3 7.6a1 1 0 0 1-.9 1.5h-8.6a1 1 0 0 1-.9-1.5l4.3-7.6a1 1 0 0 1 1.8 0z"
      stroke="#046999"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M24 14.2v2.6"
      stroke="#046999"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <circle cx="24" cy="18.4" r="0.7" fill="#046999" />
  </svg>
);
