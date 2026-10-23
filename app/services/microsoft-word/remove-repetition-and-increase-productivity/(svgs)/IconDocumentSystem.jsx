const IconDocumentSystem = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 400 480"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* ── Background document (furthest back) ── */}
    <rect
      x="60"
      y="48"
      width="220"
      height="284"
      rx="5"
      fill="#f2f3f5"
      stroke="#c8ccd2"
      strokeWidth="1.5"
    />
    <line
      x1="84"
      y1="82"
      x2="252"
      y2="82"
      stroke="#c8ccd2"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="84"
      y1="100"
      x2="240"
      y2="100"
      stroke="#c8ccd2"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="84"
      y1="118"
      x2="248"
      y2="118"
      stroke="#c8ccd2"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="84"
      y1="136"
      x2="220"
      y2="136"
      stroke="#c8ccd2"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    {/* ── Mid document ── */}
    <rect
      x="80"
      y="30"
      width="220"
      height="284"
      rx="5"
      fill="#ffffff"
      stroke="#b0b5bd"
      strokeWidth="1.5"
    />

    {/* Folded corner */}
    <path
      d="M260 30 L300 70"
      stroke="#b0b5bd"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M260 30 L260 70 L300 70"
      fill="#e8eaed"
      stroke="#b0b5bd"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />

    {/* Header bar — branded blue strip */}
    <rect
      x="80"
      y="30"
      width="220"
      height="26"
      rx="5"
      fill="#046999"
      opacity="0.12"
    />
    <line
      x1="100"
      y1="43"
      x2="210"
      y2="43"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.6"
    />

    {/* Body text lines */}
    <line
      x1="100"
      y1="78"
      x2="272"
      y2="78"
      stroke="#c8ccd2"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="100"
      y1="94"
      x2="264"
      y2="94"
      stroke="#c8ccd2"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="100"
      y1="110"
      x2="270"
      y2="110"
      stroke="#c8ccd2"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="100"
      y1="126"
      x2="248"
      y2="126"
      stroke="#c8ccd2"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    {/* Table block */}
    <rect
      x="100"
      y="146"
      width="172"
      height="72"
      rx="3"
      fill="none"
      stroke="#b0b5bd"
      strokeWidth="1.5"
    />
    <line
      x1="100"
      y1="164"
      x2="272"
      y2="164"
      stroke="#b0b5bd"
      strokeWidth="1"
    />
    <line
      x1="100"
      y1="182"
      x2="272"
      y2="182"
      stroke="#b0b5bd"
      strokeWidth="1"
    />
    <line
      x1="100"
      y1="200"
      x2="272"
      y2="200"
      stroke="#b0b5bd"
      strokeWidth="1"
    />
    <line
      x1="157"
      y1="146"
      x2="157"
      y2="218"
      stroke="#b0b5bd"
      strokeWidth="1"
    />
    <line
      x1="214"
      y1="146"
      x2="214"
      y2="218"
      stroke="#b0b5bd"
      strokeWidth="1"
    />
    {/* Table header fill */}
    <rect
      x="100"
      y="146"
      width="172"
      height="18"
      rx="3"
      fill="#046999"
      opacity="0.1"
    />

    {/* More text lines below table */}
    <line
      x1="100"
      y1="234"
      x2="268"
      y2="234"
      stroke="#c8ccd2"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="100"
      y1="250"
      x2="256"
      y2="250"
      stroke="#c8ccd2"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="100"
      y1="266"
      x2="262"
      y2="266"
      stroke="#c8ccd2"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="100"
      y1="282"
      x2="238"
      y2="282"
      stroke="#c8ccd2"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    {/* Footer bar */}
    <rect
      x="80"
      y="288"
      width="220"
      height="26"
      rx="5"
      fill="#046999"
      opacity="0.07"
    />
    <line
      x1="100"
      y1="301"
      x2="200"
      y2="301"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.4"
    />
    <line
      x1="254"
      y1="301"
      x2="282"
      y2="301"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.4"
    />

    {/* ── Building block snapping in (top right) ── */}
    {/* Block floating in */}
    <rect
      x="282"
      y="92"
      width="92"
      height="52"
      rx="4"
      fill="#046999"
      opacity="0.1"
      stroke="#046999"
      strokeWidth="1.5"
      strokeDasharray="4 3"
    />
    <line
      x1="295"
      y1="110"
      x2="360"
      y2="110"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.6"
    />
    <line
      x1="295"
      y1="124"
      x2="350"
      y2="124"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.6"
    />
    {/* Arrow pointing left into doc */}
    <path
      d="M282 118 L266 118"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M270 113 L264 118 L270 123"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* ── Macro button (bottom right) ── */}
    <rect
      x="284"
      y="218"
      width="96"
      height="36"
      rx="6"
      fill="#046999"
      opacity="0.9"
    />
    <text
      x="332"
      y="241"
      fontFamily="system-ui, sans-serif"
      fontSize="11"
      fontWeight="600"
      fill="#ffffff"
      textAnchor="middle"
      opacity="0.95"
    >
      Run Macro
    </text>

    {/* Cursor clicking the button */}
    <path
      d="M316 262 l5 13 2.5-5.5 5.5 2.5-8-13z"
      fill="#1e1e1e"
      stroke="#1e1e1e"
      strokeWidth="0.5"
      strokeLinejoin="round"
    />

    {/* Click ripple */}
    <circle
      cx="320"
      cy="260"
      r="10"
      stroke="#046999"
      strokeWidth="1"
      opacity="0.25"
    />
    <circle
      cx="320"
      cy="260"
      r="16"
      stroke="#046999"
      strokeWidth="1"
      opacity="0.12"
    />

    {/* ── Content control badge (left side) ── */}
    <rect
      x="16"
      y="168"
      width="58"
      height="26"
      rx="4"
      fill="none"
      stroke="#046999"
      strokeWidth="1.5"
      opacity="0.7"
    />
    <line
      x1="24"
      y1="177"
      x2="66"
      y2="177"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.5"
    />
    <line
      x1="24"
      y1="187"
      x2="58"
      y2="187"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.5"
    />
    {/* Arrow from badge into doc */}
    <path
      d="M74 181 L96 181"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.5"
    />
    <path
      d="M92 177 L97 181 L92 185"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.5"
    />

    {/* ── Output PDF (bottom, slightly offset) ── */}
    <rect
      x="96"
      y="348"
      width="200"
      height="106"
      rx="5"
      fill="#ffffff"
      stroke="#b0b5bd"
      strokeWidth="1.5"
    />
    {/* PDF red tab */}
    <rect
      x="96"
      y="348"
      width="48"
      height="18"
      rx="3"
      fill="#c0392b"
      opacity="0.85"
    />
    <text
      x="120"
      y="361"
      fontFamily="system-ui, sans-serif"
      fontSize="9"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      PDF
    </text>

    <line
      x1="116"
      y1="382"
      x2="276"
      y2="382"
      stroke="#c8ccd2"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="116"
      y1="396"
      x2="268"
      y2="396"
      stroke="#c8ccd2"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="116"
      y1="410"
      x2="272"
      y2="410"
      stroke="#c8ccd2"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="116"
      y1="424"
      x2="252"
      y2="424"
      stroke="#c8ccd2"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="116"
      y1="438"
      x2="260"
      y2="438"
      stroke="#c8ccd2"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    {/* Dashed connector from doc bottom to PDF */}
    <path
      d="M190 318 L190 348"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeDasharray="4 3"
      opacity="0.45"
    />
    <path
      d="M185 344 L190 350 L195 344"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.45"
    />

    {/* ── Check mark — done indicator ── */}
    <circle
      cx="316"
      cy="368"
      r="16"
      fill="#046999"
      opacity="0.12"
      stroke="#046999"
      strokeWidth="1.5"
      opacity="0.4"
    />
    <path
      d="M308 368 l5 5 10-10"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconDocumentSystem;
