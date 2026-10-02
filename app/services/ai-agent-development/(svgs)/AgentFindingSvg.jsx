// app/services/ai-agent-development/(svgs)/AgentFindingSvg.jsx

// Mock of one agent finding with lettered markers (A–F). Markers A–C sit on the
// left edge and D–F on the right, matching the principle lists either side of
// it in AiAgentsCapabilities.

const ACCENT = "#046999";
const INK = "#0d1b2a";
const SECONDARY = "#4a5568";
const MUTED = "#9a9da1";
const LINE = "#e2e8ee";
const TINT = "#e8f4fa";

// Lettered badge straddling the panel edge
const Marker = ({ x, y, letter }) => (
  <g>
    <circle cx={x} cy={y} r="13" fill={ACCENT} stroke="#ffffff" strokeWidth="3" />
    <text x={x} y={y + 4.5} textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="800">
      {letter}
    </text>
  </g>
);

// Placeholder copy line
const Line = ({ y, w }) => <rect x="56" y={y} width={w} height="7" rx="3.5" fill={LINE} />;

export const AgentFindingSvg = () => (
  <svg viewBox="0 0 380 500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <filter id="afs-shadow" x="-15%" y="-10%" width="130%" height="125%">
        <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor={INK} floodOpacity="0.1" />
      </filter>
      {/* Keeps the header and footer bands inside the panel's rounded corners */}
      <clipPath id="afs-clip">
        <rect x="30" y="20" width="320" height="460" rx="12" />
      </clipPath>
    </defs>

    {/* ── Panel ── */}
    <rect x="30" y="20" width="320" height="460" rx="12" fill="#ffffff" filter="url(#afs-shadow)" />

    {/* ── Header: which agent produced this (A) ── */}
    <rect x="30" y="20" width="320" height="54" fill={INK} clipPath="url(#afs-clip)" />
    <circle cx="62" cy="47" r="6" fill={ACCENT} />
    <text x="78" y="44" fill="#ffffff" fontSize="13" fontWeight="700">Application review</text>
    <text x="78" y="61" fill="rgba(255,255,255,0.55)" fontSize="10.5">Compliance agent · 1 of 4</text>

    {/* ── Finding title + status ── */}
    <text x="56" y="104" fill={INK} fontSize="13" fontWeight="700">Source of funds</text>
    <rect x="248" y="91" width="80" height="20" rx="10" fill="#fdf6f5" />
    <text x="288" y="105" textAnchor="middle" fill="#c0392b" fontSize="9.5" fontWeight="700">Needs review</text>
    <Line y={120} w={262} />
    <Line y={134} w={240} />
    <Line y={148} w={176} />

    {/* ── Policy grounding (B) ── */}
    <rect x="56" y="172" width="216" height="26" rx="4" fill={TINT} />
    <text x="68" y="189" fill={ACCENT} fontSize="10.5" fontWeight="700">Checked against: AML policy v3.1</text>

    {/* ── Citations (C) ── */}
    <rect x="56" y="214" width="2.5" height="62" fill={ACCENT} />
    <text x="68" y="226" fill={MUTED} fontSize="9" fontWeight="700" letterSpacing="1.5">SOURCES</text>
    <text x="68" y="246" fill={SECONDARY} fontSize="11">Bank statement, page 4</text>
    <text x="68" y="266" fill={SECONDARY} fontSize="11">Company register extract</text>

    {/* ── Tone (E) ── */}
    <line x1="56" y1="296" x2="324" y2="296" stroke={LINE} />
    <text x="56" y="320" fill={MUTED} fontSize="10" fontWeight="700">Tone</text>
    <text x="96" y="320" fill={INK} fontSize="11">Formal · your style guide</text>

    {/* ── Destinations (F) ── */}
    <text x="56" y="352" fill={MUTED} fontSize="10" fontWeight="700">Send to</text>
    {[
      { x: 104, w: 46, label: "Word" },
      { x: 156, w: 74, label: "SharePoint" },
      { x: 236, w: 52, label: "Teams" },
    ].map(({ x, w, label }) => (
      <g key={label}>
        <rect x={x} y="338" width={w} height="22" rx="11" fill="none" stroke="rgba(0,0,0,0.11)" />
        <text x={x + w / 2} y="353" textAnchor="middle" fill={SECONDARY} fontSize="10">
          {label}
        </text>
      </g>
    ))}

    {/* ── Human approval (D) ── */}
    <rect x="30" y="390" width="320" height="90" fill="#f7f8f9" clipPath="url(#afs-clip)" />
    <rect x="56" y="414" width="112" height="36" rx="4" fill={ACCENT} />
    <text x="112" y="437" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="700">Approve</text>
    <rect x="178" y="414" width="146" height="36" rx="4" fill="#ffffff" stroke="rgba(4,105,153,0.3)" />
    <text x="251" y="437" textAnchor="middle" fill={ACCENT} fontSize="12" fontWeight="700">Send back with note</text>

    {/* ── Markers ── */}
    <Marker x={30} y={47} letter="A" />
    <Marker x={30} y={185} letter="B" />
    <Marker x={30} y={245} letter="C" />
    <Marker x={350} y={432} letter="D" />
    <Marker x={350} y={316} letter="E" />
    <Marker x={350} y={349} letter="F" />
  </svg>
);
