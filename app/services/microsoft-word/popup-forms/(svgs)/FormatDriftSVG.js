// app/popup-forms/(svgs)/FormatDriftSVG.js

export const FormatDriftSVG = () => (
  <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
    {/* Document outline */}
    <rect
      x="6"
      y="4"
      width="20"
      height="24"
      rx="2"
      stroke="#046999"
      strokeWidth="1.5"
    />
    {/* Consistent header line — how it should look */}
    <path
      d="M10 9h12"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Lines that drift — inconsistent indent, size and weight */}
    <path
      d="M10 14h11"
      stroke="#046999"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M13 18h9"
      stroke="#046999"
      strokeWidth="1.1"
      strokeLinecap="round"
      opacity="0.55"
    />
    <path
      d="M9 22h10"
      stroke="#046999"
      strokeWidth="1.7"
      strokeLinecap="round"
      opacity="0.85"
    />
    {/* Small ruler-style marks showing shifting alignment */}
    <path
      d="M10 12.5v1M13 16.5v1M9 20.5v1"
      stroke="#046999"
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.4"
    />
  </svg>
);
