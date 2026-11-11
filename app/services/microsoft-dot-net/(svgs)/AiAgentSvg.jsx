// app/services/microsoft-dot-net/(svgs)/AiAgentSvg.jsx
// Question routed through an AI agent that calls existing C# methods as tools. Used in DotNetAi.
// Decorative only (aria-hidden). Text inherits the site font; colours mirror globals.scss tokens.
export const AiAgentSvg = () => (
  <svg viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    {/* Connectors: question in, tool calls out, answer back */}
    <g stroke="#d4d6d9" strokeWidth="1.5" strokeDasharray="4 5">
      <path d="M196 82C226 82 222 150 236 160" />
      <path d="M286 152L330 92" />
      <path d="M294 170H330" />
      <path d="M286 188L330 248" />
      <path d="M236 182C222 192 226 262 214 262" />
    </g>

    {/* User question */}
    <rect x="12" y="44" width="184" height="76" rx="16" fill="#f2f3f5" />
    <text x="30" y="76" fontSize="12" fontWeight="700" fill="#0d1b2a">Which quotes expire</text>
    <text x="30" y="94" fontSize="12" fontWeight="700" fill="#0d1b2a">this week?</text>

    {/* Agent node */}
    <circle cx="262" cy="170" r="44" fill="#111820" />
    <path d="M262 146l5 13 13 5-13 5-5 13-5-13-13-5 13-5z" fill="#6fc3e8" />
    <circle cx="282" cy="150" r="3" fill="#6fc3e8" fillOpacity="0.6" />
    <text x="262" y="234" fontSize="10" fontWeight="700" letterSpacing="2" fill="#777a7e" textAnchor="middle">AGENT</text>

    {/* Existing C# methods exposed as tools */}
    <g fontSize="11" fontFamily="Consolas, Menlo, monospace" fontWeight="700" fill="#046999">
      <rect x="330" y="70" width="138" height="44" rx="12" fill="#ffffff" stroke="#e3e8ec" strokeWidth="1.5" />
      <text x="346" y="96">GetQuotes()</text>
      <rect x="330" y="148" width="138" height="44" rx="12" fill="#ffffff" stroke="#e3e8ec" strokeWidth="1.5" />
      <text x="346" y="174">FindClient()</text>
      <rect x="330" y="226" width="138" height="44" rx="12" fill="#ffffff" stroke="#e3e8ec" strokeWidth="1.5" />
      <text x="346" y="252">SendReminder()</text>
    </g>

    {/* Answer */}
    <rect x="30" y="226" width="184" height="72" rx="16" fill="#046999" />
    <text x="48" y="257" fontSize="12" fontWeight="700" fill="#ffffff">3 quotes expire by Friday.</text>
    <text x="48" y="276" fontSize="11" fill="#ffffffbf">Send reminders?</text>
  </svg>
);
