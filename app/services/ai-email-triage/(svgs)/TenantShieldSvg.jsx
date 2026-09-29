// app/services/ai-email-triage/(svgs)/TenantShieldSvg.jsx

// Security section illustration: the triage solution and its audit log sit
// inside the client's Microsoft 365 tenant boundary under existing policies,
// while outside third-party AI inbox tools are blocked. Decorative.

// Components that live inside the tenant (x, y = chip top-left)
const insideChips = [
  { x: 44, y: 70, label: "Outlook" },
  { x: 188, y: 70, label: "Power Automate" },
  { x: 44, y: 262, label: "Azure agents" },
  { x: 188, y: 262, label: "Audit log" },
];

export const TenantShieldSvg = () => (
  <svg
    viewBox="0 0 480 350"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    {/* ── Tenant boundary ── */}
    <rect x="20" y="20" width="310" height="310" rx="14" fill="#e8f4fa" stroke="#046999" strokeWidth="1.5" strokeDasharray="5 5" />
    <text x="40" y="48" fontSize="10" fontWeight="700" letterSpacing="2" fill="#046999">
      YOUR TENANT
    </text>

    {/* ── Shield: security, compliance and DLP policies ── */}
    <path
      d="M175 118l44 16v30c0 28-19 46-44 56-25-10-44-28-44-56v-30l44-16z"
      fill="#046999"
    />
    <path d="M158 170l12 12 22-24" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <text x="175" y="244" fontSize="10.5" fontWeight="600" fill="#4a5568" textAnchor="middle">
      Your security, compliance and DLP policies
    </text>

    {/* ── Chips inside the tenant ── */}
    {insideChips.map((chip) => (
      <g key={chip.label}>
        <rect x={chip.x} y={chip.y} width="118" height="32" rx="16" fill="#fff" stroke="rgba(4,105,153,0.28)" />
        <text x={chip.x + 59} y={chip.y + 20} fontSize="11" fontWeight="600" fill="#0d1b2a" textAnchor="middle">
          {chip.label}
        </text>
      </g>
    ))}

    {/* ── Blocked route to an outside AI tool ── */}
    <path d="M330 175H378" stroke="#c0392b" strokeOpacity="0.6" strokeWidth="1.5" strokeDasharray="3 4" />
    <circle cx="354" cy="175" r="9" fill="#fdf6f5" stroke="#c0392b" strokeWidth="1.4" />
    <path d="M350.5 171.5l7 7M357.5 171.5l-7 7" stroke="#c0392b" strokeWidth="1.4" strokeLinecap="round" />

    <rect x="382" y="140" width="92" height="70" rx="8" fill="#fdf6f5" stroke="rgba(192,57,43,0.45)" />
    <text x="428" y="168" fontSize="10.5" fontWeight="700" fill="#0d1b2a" textAnchor="middle">
      Third-party
    </text>
    <text x="428" y="184" fontSize="10.5" fontWeight="700" fill="#0d1b2a" textAnchor="middle">
      AI inbox tool
    </text>
    <text x="428" y="199" fontSize="9" fill="#4a5568" textAnchor="middle">
      Not required
    </text>
  </svg>
);
