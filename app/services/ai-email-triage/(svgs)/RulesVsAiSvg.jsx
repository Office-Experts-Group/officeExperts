// app/services/ai-email-triage/(svgs)/RulesVsAiSvg.jsx

// Intro illustration: the same customer email run through a keyword-based
// Outlook rule (which misses it) and through AI triage (which understands it).
// Decorative, as the intro copy uses this exact example.

export const RulesVsAiSvg = () => (
  <svg
    viewBox="0 0 520 360"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    {/* ── Shared incoming email ── */}
    <rect x="130" y="10" width="260" height="70" rx="6" fill="#fff" stroke="rgba(0,0,0,0.11)" />
    <circle cx="154" cy="45" r="11" fill="#e8f4fa" />
    <path d="M148 41l6 5 6-5" stroke="#046999" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <text x="176" y="38" fontSize="10" fill="#9a9da1">
      From: a customer
    </text>
    <text x="176" y="58" fontSize="12" fontWeight="700" fill="#0d1b2a">
      “The bill you sent is wrong”
    </text>

    {/* Split to both panels */}
    <path d="M260 80v20M260 100H130v24M260 100h130v24" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" />

    {/* ── Left: Outlook rule ── */}
    <rect x="10" y="124" width="240" height="226" rx="8" fill="#f7f8f9" stroke="rgba(0,0,0,0.08)" />
    <text x="30" y="154" fontSize="11" fontWeight="700" letterSpacing="2" fill="#9a9da1">
      OUTLOOK RULE
    </text>
    <rect x="30" y="170" width="200" height="54" rx="4" fill="#fff" stroke="rgba(0,0,0,0.11)" />
    <text x="44" y="192" fontSize="11" fill="#4a5568">
      If subject contains
    </text>
    <text x="44" y="210" fontSize="12" fontWeight="700" fill="#0d1b2a">
      “invoice”
    </text>
    <path d="M130 234v26" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" />
    <rect x="30" y="270" width="200" height="54" rx="4" fill="#fdf6f5" stroke="rgba(192,57,43,0.4)" />
    <circle cx="54" cy="297" r="10" stroke="#c0392b" strokeWidth="1.5" />
    <path d="M50 293l8 8M58 293l-8 8" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" />
    <text x="74" y="293" fontSize="12" fontWeight="700" fill="#0d1b2a">
      No match
    </text>
    <text x="74" y="310" fontSize="10" fill="#4a5568">
      Sits unread in the inbox
    </text>

    {/* ── Right: AI triage ── */}
    <rect x="270" y="124" width="240" height="226" rx="8" fill="#e8f4fa" stroke="rgba(4,105,153,0.28)" />
    <text x="290" y="154" fontSize="11" fontWeight="700" letterSpacing="2" fill="#046999">
      AI TRIAGE
    </text>
    <rect x="290" y="170" width="200" height="54" rx="4" fill="#fff" stroke="rgba(4,105,153,0.28)" />
    <text x="304" y="192" fontSize="11" fill="#4a5568">
      Understood as
    </text>
    <text x="304" y="210" fontSize="12" fontWeight="700" fill="#0d1b2a">
      Billing dispute · High
    </text>
    <path d="M390 234v26" stroke="#046999" strokeOpacity="0.5" strokeWidth="1.5" />
    <rect x="290" y="270" width="200" height="54" rx="4" fill="#fff" stroke="rgba(4,105,153,0.28)" />
    <circle cx="314" cy="297" r="10" fill="#046999" />
    <path d="M309 297l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <text x="334" y="293" fontSize="12" fontWeight="700" fill="#0d1b2a">
      Routed to Accounts
    </text>
    <text x="334" y="310" fontSize="10" fill="#4a5568">
      Teams alert sent
    </text>
  </svg>
);
