// app/accessibility/(svgs)/AssistiveTechSVG.jsx

// A speech/announcement bubble reading out a document line, representing
// screen reader and assistive technology compatibility.
const AssistiveTechSVG = () => (
  <svg
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    fill="none"
  >
    {/* Small document */}
    <rect x="14" y="20" width="26" height="34" rx="2.5" stroke="#046999" strokeWidth="1.5" />
    <rect x="19" y="27" width="16" height="3.5" rx="1" fill="#046999" opacity="0.8" />
    <rect x="19" y="34" width="16" height="3" rx="1" fill="rgba(4,105,153,0.3)" />
    <rect x="19" y="40" width="12" height="3" rx="1" fill="rgba(4,105,153,0.3)" />

    {/* Speech bubble announcing the content */}
    <path
      d="M42 22h24a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H54l-6 7v-7h-6a4 4 0 0 1-4-4V26a4 4 0 0 1 4-4z"
      fill="#046999"
      opacity="0.9"
    />

    {/* Sound wave lines inside the bubble */}
    <path
      d="M48 30v10M53 27v16M58 31v8M63 28v14"
      stroke="#fff"
      strokeWidth="1.8"
      strokeLinecap="round"
    />

    {/* Base line for the composition */}
    <path d="M10 62h60" stroke="rgba(4,105,153,0.2)" strokeWidth="1.3" />
  </svg>
);

export default AssistiveTechSVG;
