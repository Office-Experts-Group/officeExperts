// app/services/ai-email-triage/(svgs)/InboundOutboundSvg.jsx

// Inbound/outbound band illustration: incoming mail enters Microsoft 365 and is
// triaged; personalised mail-merged letters leave the other side.
// Decorative, hidden from assistive tech.

// Vertical offsets for the three envelopes on each side
const rows = [50, 100, 150];

// Small envelope glyph, reused on both sides
const Envelope = ({ x, y, fill, stroke }) => (
  <g>
    <rect x={x} y={y} width="44" height="30" rx="3" fill={fill} stroke={stroke} strokeWidth="1.4" />
    <path d={`M${x + 2} ${y + 3}l20 14 20-14`} stroke={stroke} strokeWidth="1.4" strokeLinejoin="round" />
  </g>
);

export const InboundOutboundSvg = () => (
  <svg
    viewBox="0 0 480 230"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    {/* ── Side labels ── */}
    <text x="32" y="30" fontSize="10" fontWeight="700" letterSpacing="2" fill="#9a9da1" textAnchor="middle">
      IN
    </text>
    <text x="448" y="30" fontSize="10" fontWeight="700" letterSpacing="2" fill="#046999" textAnchor="middle">
      OUT
    </text>

    {/* ── Inbound envelopes and arrows ── */}
    {rows.map((y) => (
      <g key={`in-${y}`}>
        <Envelope x={10} y={y} fill="#fff" stroke="#9a9da1" />
        <path d={`M62 ${y + 15}H140`} stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeDasharray="3 4" />
      </g>
    ))}
    <path d="M134 110l8 5-8 5" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* ── Centre: Microsoft 365 ── */}
    <rect x="146" y="30" width="188" height="170" rx="10" fill="#fff" stroke="rgba(0,0,0,0.11)" />
    <text x="240" y="56" fontSize="11" fontWeight="700" letterSpacing="1.5" fill="#0d1b2a" textAnchor="middle">
      MICROSOFT 365
    </text>
    <rect x="164" y="72" width="152" height="50" rx="6" fill="#e8f4fa" />
    <text x="180" y="94" fontSize="12" fontWeight="700" fill="#046999">
      AI email triage
    </text>
    <text x="180" y="110" fontSize="10" fill="#4a5568">
      Sort, prioritise, route
    </text>
    <rect x="164" y="132" width="152" height="50" rx="6" fill="#f7f8f9" />
    <text x="180" y="154" fontSize="12" fontWeight="700" fill="#0d1b2a">
      Word mail merge
    </text>
    <text x="180" y="170" fontSize="10" fill="#4a5568">
      Letters, statements, bulk
    </text>

    {/* ── Outbound arrows and letters ── */}
    {rows.map((y) => (
      <g key={`out-${y}`}>
        <path d={`M340 ${y + 15}H418`} stroke="#046999" strokeOpacity="0.5" strokeWidth="1.5" />
        <Envelope x={426} y={y} fill="#e8f4fa" stroke="#046999" />
      </g>
    ))}
    <path d="M412 110l8 5-8 5" stroke="#046999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
