// app/services/microsoft-365-api-integration/(svgs)/AgentFlowSvg.jsx

// Agent flow diagram for the dark AI section:
// a plain-English request -> agent -> governed MCP / Graph layer -> Microsoft 365 apps.
// Colours are tuned for the $dark-bg section (white at reduced opacity,
// plus a lighter accent tint that reads on dark). Decorative only.

const tools = ["Outlook", "Teams", "SharePoint", "Dataverse", "Word"];

export const AgentFlowSvg = () => (
  <svg viewBox="0 0 440 420" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* ── 1. Request bubble ── */}
    <rect x="20" y="20" width="250" height="56" rx="14" fill="rgba(255,255,255,0.08)" />
    <text x="38" y="44" fill="rgba(255,255,255,0.55)" fontSize="9" fontWeight="700" letterSpacing="2">
      REQUEST
    </text>
    <text x="38" y="63" fill="#ffffff" fontSize="12.5" fontWeight="600">
      &ldquo;Draft the quote and email it to Sam&rdquo;
    </text>

    {/* Arrow down to the agent */}
    <path d="M145 76v34" stroke="#6fc3e8" strokeWidth="1.6" strokeDasharray="4 4" />

    {/* ── 2. Agent ── */}
    <rect x="70" y="112" width="150" height="62" rx="14" fill="#046999" />
    <circle cx="100" cy="143" r="12" fill="none" stroke="#ffffff" strokeWidth="1.8" />
    <circle cx="96" cy="141" r="1.8" fill="#ffffff" />
    <circle cx="104" cy="141" r="1.8" fill="#ffffff" />
    <text x="124" y="139" fill="#ffffff" fontSize="13" fontWeight="800">
      AI agent
    </text>
    <text x="124" y="155" fill="rgba(255,255,255,0.75)" fontSize="9.5">
      plans the steps
    </text>

    {/* Arrow down to the gateway */}
    <path d="M145 174v34" stroke="#6fc3e8" strokeWidth="1.6" strokeDasharray="4 4" />

    {/* ── 3. Governed gateway (MCP / Graph) with a shield ── */}
    <rect x="20" y="210" width="250" height="64" rx="14" fill="none" stroke="rgba(255,255,255,0.35)" />
    <path
      d="M48 226l12 5v9c0 7-5 12-12 14-7-2-12-7-12-14v-9z"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M43 240l4 4 7-7" stroke="#6fc3e8" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    <text x="74" y="238" fill="#ffffff" fontSize="12.5" fontWeight="800">
      MCP servers + Microsoft Graph
    </text>
    <text x="74" y="255" fill="rgba(255,255,255,0.6)" fontSize="9.5">
      permissions, DLP and audit applied here
    </text>

    {/* ── 4. Tools fanning out to the right ── */}
    {tools.map((tool, i) => {
      const y = 120 + i * 60;
      return (
        <g key={tool}>
          <path
            d={`M270 242 C 320 242, 300 ${y + 16}, 330 ${y + 16}`}
            fill="none"
            stroke="rgba(111,195,232,0.45)"
            strokeWidth="1.4"
          />
          <rect x="330" y={y} width="96" height="32" rx="16" fill="rgba(255,255,255,0.1)" />
          <text x="378" y={y + 20} textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700">
            {tool}
          </text>
        </g>
      );
    })}

    {/* ── 5. Result ── */}
    <path d="M145 274v40" stroke="#6fc3e8" strokeWidth="1.6" strokeDasharray="4 4" />
    <rect x="20" y="316" width="250" height="56" rx="14" fill="rgba(111,195,232,0.14)" />
    <text x="38" y="340" fill="#6fc3e8" fontSize="9" fontWeight="700" letterSpacing="2">
      RESULT
    </text>
    <text x="38" y="359" fill="#ffffff" fontSize="12.5" fontWeight="600">
      Quote filed, email sent, logged
    </text>
  </svg>
);
