// app/popup-forms/(svgs)/CopyPasteSVG.js

export const CopyPasteSVG = () => (
  <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
    {/* Back document — the source being retyped */}
    <rect
      x="5"
      y="6"
      width="15"
      height="19"
      rx="2"
      stroke="#046999"
      strokeWidth="1.4"
      opacity="0.45"
    />
    <path
      d="M8 11h9M8 15h9M8 19h6"
      stroke="#046999"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.45"
    />
    {/* Front document — the retyped copy */}
    <rect
      x="12"
      y="9"
      width="15"
      height="19"
      rx="2"
      stroke="#046999"
      strokeWidth="1.5"
      fill="#fff"
    />
    <path
      d="M15 14h9M15 18h9M15 22h5"
      stroke="#046999"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    {/* Small duplication arrows between the two — repetition, not automation */}
    <path
      d="M9.5 27.5c-1.4-1-2.2-2.3-2.2-3.8"
      stroke="#046999"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M6.6 25.2l.7 2.3 2.2-.9"
      stroke="#046999"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.6"
    />
  </svg>
);
