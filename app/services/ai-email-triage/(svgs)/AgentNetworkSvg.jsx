// app/services/ai-email-triage/(svgs)/AgentNetworkSvg.jsx

// Card icon for "Custom AI agents": a central agent node connected out to
// four systems it can act on. Uses currentColor.

export const AgentNetworkSvg = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M20 9.5l7.8 4.5v9L20 27.5 12.2 23v-9L20 9.5z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="20" cy="18.5" r="2.6" fill="currentColor" />
    <path d="M12.2 14L6 10M27.8 14L34 10M12.2 23L6 29M27.8 23L34 29" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="5" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="35" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="5" cy="30" r="2.5" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="35" cy="30" r="2.5" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);
