// app/services/ai-email-triage/(svgs)/InboxTriageSvg.jsx

// Hero illustration: a shared inbox feeding an AI node, which sorts each email
// into a labelled action lane. Decorative only (the copy beside it says the same
// thing), so it's hidden from assistive tech.
// Paths with the "et-flow" class get a moving-dash animation from the
// emailTriageHero SCSS module (reached there via :global).

// Top edge of each of the five inbox email rows
const inboxRows = [95, 150, 205, 260, 315];

// Top edge, label, sub-label and colour of each sorted lane
const lanes = [
  { y: 70, label: "Urgent", sub: "Alert posted to Teams", colour: "#c0392b" },
  { y: 150, label: "Invoice", sub: "Filed to Accounts", colour: "#046999" },
  { y: 230, label: "New enquiry", sub: "Pushed to your CRM", colour: "#046999" },
  { y: 310, label: "Low priority", sub: "Summarised for later", colour: "#9a9da1" },
];

export const InboxTriageSvg = () => (
  <svg
    viewBox="0 0 560 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    {/* ── Inbox panel ── */}
    <rect x="10" y="40" width="180" height="340" rx="8" fill="#fff" stroke="rgba(0,0,0,0.11)" />
    <text x="24" y="72" fontSize="13" fontWeight="700" fill="#0d1b2a">
      Shared inbox
    </text>
    <rect x="126" y="59" width="50" height="18" rx="9" fill="#e8f4fa" />
    <text x="151" y="72" fontSize="10" fontWeight="700" fill="#046999" textAnchor="middle">
      info@
    </text>

    {inboxRows.map((y) => (
      <g key={y}>
        <rect x="24" y={y} width="152" height="42" rx="4" fill="#f7f8f9" />
        <circle cx="42" cy={y + 21} r="8" fill="#e8f4fa" />
        <rect x="58" y={y + 12} width="88" height="5" rx="2.5" fill="#0d1b2a" opacity="0.7" />
        <rect x="58" y={y + 24} width="104" height="4" rx="2" fill="#9a9da1" opacity="0.6" />
      </g>
    ))}

    {/* ── Inbox → AI connectors ── */}
    {inboxRows.map((y) => (
      <path
        key={`in-${y}`}
        className="et-flow"
        d={`M190 ${y + 21} C 210 ${y + 21}, 206 210, 222 210`}
        stroke="#046999"
        strokeOpacity="0.45"
        strokeWidth="1.5"
      />
    ))}

    {/* ── AI node ── */}
    <circle cx="280" cy="210" r="60" stroke="rgba(4,105,153,0.3)" strokeDasharray="3 5" />
    <circle cx="280" cy="210" r="46" fill="#046999" />
    <text x="280" y="218" fontSize="22" fontWeight="800" fill="#fff" textAnchor="middle">
      AI
    </text>
    <text x="280" y="292" fontSize="11" fontWeight="600" fill="#4a5568" textAnchor="middle">
      Reads intent
    </text>

    {/* ── AI → lane connectors ── */}
    {lanes.map((lane) => (
      <path
        key={`out-${lane.label}`}
        className="et-flow"
        d={`M338 210 C 366 210, 362 ${lane.y + 22}, 390 ${lane.y + 22}`}
        stroke={lane.colour}
        strokeOpacity="0.6"
        strokeWidth="1.5"
      />
    ))}

    {/* ── Sorted lanes ── */}
    {lanes.map((lane) => (
      <g key={lane.label}>
        <rect x="390" y={lane.y} width="160" height="44" rx="6" fill="#fff" stroke="rgba(0,0,0,0.11)" />
        <rect x="390" y={lane.y} width="4" height="44" rx="2" fill={lane.colour} />
        <text x="406" y={lane.y + 19} fontSize="12" fontWeight="700" fill="#0d1b2a">
          {lane.label}
        </text>
        <text x="406" y={lane.y + 34} fontSize="10" fill="#4a5568">
          {lane.sub}
        </text>
      </g>
    ))}
  </svg>
);
