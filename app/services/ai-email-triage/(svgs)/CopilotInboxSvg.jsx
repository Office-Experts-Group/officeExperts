// app/services/ai-email-triage/(svgs)/CopilotInboxSvg.jsx

// Card icon for "Copilot in Outlook": an envelope with a priority sparkle.
// Uses currentColor so the card's SCSS sets the colour.

export const CopilotInboxSvg = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <rect x="4" y="12" width="26" height="20" rx="3" stroke="currentColor" strokeWidth="1.6" />
    <path d="M5 14l12 9 12-9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    {/* Sparkle marks the AI prioritisation */}
    <path
      d="M32 4l1.6 3.9L37.5 9.5l-3.9 1.6L32 15l-1.6-3.9-3.9-1.6 3.9-1.6L32 4z"
      fill="currentColor"
    />
  </svg>
);
