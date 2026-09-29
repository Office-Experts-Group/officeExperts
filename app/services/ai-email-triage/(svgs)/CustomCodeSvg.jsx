// app/services/ai-email-triage/(svgs)/CustomCodeSvg.jsx

// Card and table icon for "Custom-coded AI agents": code brackets with an AI
// sparkle, representing bespoke Python and JavaScript builds. Uses currentColor.

export const CustomCodeSvg = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M12 13l-7 7 7 7M24 13l7 7-7 7M20.5 10l-5 20"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Sparkle marks the AI model inside the custom code */}
    <path
      d="M33 2.5l1.4 3.4 3.4 1.4-3.4 1.4L33 12.1l-1.4-3.4-3.4-1.4 3.4-1.4L33 2.5z"
      fill="currentColor"
    />
  </svg>
);
