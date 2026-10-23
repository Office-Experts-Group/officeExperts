// app/popup-forms/(svgs)/BlankTemplateSVG.js

export const BlankTemplateSVG = () => (
  <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
    {/* Document outline */}
    <rect
      x="7"
      y="4"
      width="18"
      height="24"
      rx="2"
      stroke="#046999"
      strokeWidth="1.5"
    />
    {/* Header line — the only "filled in" part */}
    <path
      d="M11 9h10"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Dashed placeholder lines — left blank / open to interpretation */}
    <path
      d="M11 14h10"
      stroke="#046999"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeDasharray="1.8 2.4"
      opacity="0.4"
    />
    <path
      d="M11 18h10"
      stroke="#046999"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeDasharray="1.8 2.4"
      opacity="0.4"
    />
    <path
      d="M11 22h6"
      stroke="#046999"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeDasharray="1.8 2.4"
      opacity="0.4"
    />
    {/* Question mark — ambiguity */}
    <path
      d="M15 12.2c0-.9.7-1.6 1.6-1.6.9 0 1.4.5 1.4 1.2 0 .9-1.4 1-1.4 2.1"
      stroke="#046999"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.7"
    />
  </svg>
);
