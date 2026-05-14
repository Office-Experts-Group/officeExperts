// app/microsoft-consultants-sydney/(components)/WordSVG.js

// Inline SVG illustration for the Microsoft Word service card.
// Shows an unformatted document transforming into a structured template,
// which then branches into three output types: formatted document,
// email footer, and invoice header.

const WordSVG = () => (
  <svg
    viewBox="0 0 280 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Illustration of messy document transformed into formatted templates"
    style={{
      width: "100%",
      height: "auto",
      display: "block",
      margin: "0 auto 1rem auto",
    }}
  >
    {/* ── Messy document (top) ─────────────────── */}
    <g>
      {/* Page background */}
      <rect
        x="90"
        y="8"
        width="100"
        height="72"
        rx="3"
        fill="rgba(255,255,255,0.05)"
        stroke="rgba(192,57,43,0.5)"
        strokeWidth="1"
      />

      {/* Jagged, misaligned text lines representing mess */}
      <rect
        x="100"
        y="18"
        width="58"
        height="3"
        rx="1"
        fill="rgba(192,57,43,0.4)"
      />
      <rect
        x="104"
        y="25"
        width="72"
        height="3"
        rx="1"
        fill="rgba(255,255,255,0.15)"
      />
      <rect
        x="97"
        y="32"
        width="44"
        height="3"
        rx="1"
        fill="rgba(255,255,255,0.12)"
      />
      <rect
        x="108"
        y="39"
        width="68"
        height="3"
        rx="1"
        fill="rgba(255,255,255,0.15)"
      />
      <rect
        x="100"
        y="46"
        width="36"
        height="3"
        rx="1"
        fill="rgba(255,255,255,0.1)"
      />
      <rect
        x="116"
        y="53"
        width="60"
        height="3"
        rx="1"
        fill="rgba(255,255,255,0.13)"
      />
      <rect
        x="98"
        y="60"
        width="52"
        height="3"
        rx="1"
        fill="rgba(255,255,255,0.1)"
      />
      <rect
        x="110"
        y="67"
        width="40"
        height="3"
        rx="1"
        fill="rgba(192,57,43,0.3)"
      />

      {/* Small "x" warning icon */}
      <text
        x="178"
        y="22"
        fontSize="10"
        fontWeight="800"
        fill="rgba(192,57,43,0.6)"
      >
        ✕
      </text>
    </g>

    {/* ── Arrow: messy → formatted ────────────── */}
    <g>
      <line
        x1="140"
        y1="84"
        x2="140"
        y2="110"
        stroke="rgba(4,105,153,0.35)"
        strokeWidth="1.2"
        strokeDasharray="3 3"
      />
      <polygon points="135,108 140,118 145,108" fill="rgba(4,105,153,0.5)" />
    </g>

    {/* ── Formatted document (centre) ────────── */}
    <g>
      <rect
        x="85"
        y="120"
        width="110"
        height="76"
        rx="3"
        fill="rgba(4,105,153,0.1)"
        stroke="rgba(4,105,153,0.45)"
        strokeWidth="1.2"
      />

      {/* Header bar */}
      <rect
        x="85"
        y="120"
        width="110"
        height="14"
        rx="3"
        fill="rgba(4,105,153,0.25)"
      />
      <rect
        x="93"
        y="125"
        width="32"
        height="4"
        rx="1"
        fill="rgba(255,255,255,0.5)"
      />

      {/* Clean, aligned text lines */}
      <rect
        x="93"
        y="142"
        width="88"
        height="3"
        rx="1"
        fill="rgba(255,255,255,0.25)"
      />
      <rect
        x="93"
        y="149"
        width="72"
        height="3"
        rx="1"
        fill="rgba(255,255,255,0.18)"
      />
      <rect
        x="93"
        y="156"
        width="80"
        height="3"
        rx="1"
        fill="rgba(255,255,255,0.2)"
      />
      <rect
        x="93"
        y="166"
        width="88"
        height="3"
        rx="1"
        fill="rgba(255,255,255,0.25)"
      />
      <rect
        x="93"
        y="173"
        width="60"
        height="3"
        rx="1"
        fill="rgba(255,255,255,0.18)"
      />
      <rect
        x="93"
        y="180"
        width="76"
        height="3"
        rx="1"
        fill="rgba(255,255,255,0.2)"
      />

      {/* Tick icon */}
      <text
        x="182"
        y="134"
        fontSize="10"
        fontWeight="800"
        fill="rgba(4,105,153,0.8)"
      >
        ✓
      </text>
    </g>

    {/* ── Branching lines ────────────────────── */}
    <g stroke="rgba(4,105,153,0.3)" strokeWidth="1.2">
      {/* Centre trunk */}
      <line x1="140" y1="196" x2="140" y2="220" />
      {/* Left branch */}
      <line x1="140" y1="220" x2="46" y2="220" />
      <line x1="46" y1="220" x2="46" y2="240" />
      {/* Centre branch */}
      <line x1="140" y1="220" x2="140" y2="240" />
      {/* Right branch */}
      <line x1="140" y1="220" x2="234" y2="220" />
      <line x1="234" y1="220" x2="234" y2="240" />

      {/* Small dots at branch points */}
      <circle cx="46" cy="220" r="2.5" fill="rgba(4,105,153,0.5)" />
      <circle cx="140" cy="220" r="2.5" fill="rgba(4,105,153,0.5)" />
      <circle cx="234" cy="220" r="2.5" fill="rgba(4,105,153,0.5)" />
    </g>

    {/* ── Output 1: Formatted document (left) ── */}
    <g>
      <rect
        x="10"
        y="242"
        width="72"
        height="64"
        rx="3"
        fill="rgba(4,105,153,0.08)"
        stroke="rgba(4,105,153,0.3)"
        strokeWidth="1"
      />
      {/* Mini header */}
      <rect
        x="10"
        y="242"
        width="72"
        height="10"
        rx="3"
        fill="rgba(4,105,153,0.2)"
      />
      <rect
        x="16"
        y="245.5"
        width="22"
        height="3"
        rx="1"
        fill="rgba(255,255,255,0.4)"
      />
      {/* Body lines */}
      <rect
        x="16"
        y="258"
        width="58"
        height="2.5"
        rx="1"
        fill="rgba(255,255,255,0.15)"
      />
      <rect
        x="16"
        y="264"
        width="48"
        height="2.5"
        rx="1"
        fill="rgba(255,255,255,0.12)"
      />
      <rect
        x="16"
        y="270"
        width="54"
        height="2.5"
        rx="1"
        fill="rgba(255,255,255,0.15)"
      />
      <rect
        x="16"
        y="276"
        width="42"
        height="2.5"
        rx="1"
        fill="rgba(255,255,255,0.1)"
      />
      <rect
        x="16"
        y="282"
        width="56"
        height="2.5"
        rx="1"
        fill="rgba(255,255,255,0.12)"
      />
      <rect
        x="16"
        y="288"
        width="38"
        height="2.5"
        rx="1"
        fill="rgba(255,255,255,0.1)"
      />
      {/* Label */}
      <text
        x="46"
        y="316"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="600"
        letterSpacing="1.2"
        fill="rgba(255,255,255,0.35)"
      >
        DOCUMENTS
      </text>
    </g>

    {/* ── Output 2: Email footer (centre) ─────── */}
    <g>
      <rect
        x="104"
        y="242"
        width="72"
        height="64"
        rx="3"
        fill="rgba(4,105,153,0.08)"
        stroke="rgba(4,105,153,0.3)"
        strokeWidth="1"
      />
      {/* Email body area — faded lines */}
      <rect
        x="110"
        y="250"
        width="58"
        height="2.5"
        rx="1"
        fill="rgba(255,255,255,0.08)"
      />
      <rect
        x="110"
        y="256"
        width="50"
        height="2.5"
        rx="1"
        fill="rgba(255,255,255,0.06)"
      />
      <rect
        x="110"
        y="262"
        width="56"
        height="2.5"
        rx="1"
        fill="rgba(255,255,255,0.06)"
      />
      {/* Divider line */}
      <line
        x1="110"
        y1="272"
        x2="168"
        y2="272"
        stroke="rgba(4,105,153,0.3)"
        strokeWidth="0.8"
      />
      {/* Footer block — brighter to emphasise the output */}
      <rect
        x="110"
        y="277"
        width="36"
        height="3"
        rx="1"
        fill="rgba(4,105,153,0.45)"
      />
      <rect
        x="110"
        y="283"
        width="52"
        height="2.5"
        rx="1"
        fill="rgba(255,255,255,0.2)"
      />
      <rect
        x="110"
        y="289"
        width="44"
        height="2.5"
        rx="1"
        fill="rgba(255,255,255,0.15)"
      />
      <rect
        x="110"
        y="295"
        width="28"
        height="2.5"
        rx="1"
        fill="rgba(255,255,255,0.12)"
      />
      {/* Label */}
      <text
        x="140"
        y="316"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="600"
        letterSpacing="1.2"
        fill="rgba(255,255,255,0.35)"
      >
        EMAIL FOOTERS
      </text>
    </g>

    {/* ── Output 3: Invoice header (right) ────── */}
    <g>
      <rect
        x="198"
        y="242"
        width="72"
        height="64"
        rx="3"
        fill="rgba(4,105,153,0.08)"
        stroke="rgba(4,105,153,0.3)"
        strokeWidth="1"
      />
      {/* Invoice header block — brighter */}
      <rect
        x="198"
        y="242"
        width="72"
        height="22"
        rx="3"
        fill="rgba(4,105,153,0.18)"
      />
      <rect
        x="204"
        y="247"
        width="28"
        height="3.5"
        rx="1"
        fill="rgba(4,105,153,0.5)"
      />
      <rect
        x="204"
        y="253"
        width="40"
        height="2.5"
        rx="1"
        fill="rgba(255,255,255,0.25)"
      />
      {/* Table-style rows below header */}
      <line
        x1="204"
        y1="271"
        x2="264"
        y2="271"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="0.6"
      />
      <rect
        x="204"
        y="274"
        width="20"
        height="2.5"
        rx="1"
        fill="rgba(255,255,255,0.15)"
      />
      <rect
        x="244"
        y="274"
        width="16"
        height="2.5"
        rx="1"
        fill="rgba(255,255,255,0.12)"
      />
      <line
        x1="204"
        y1="280"
        x2="264"
        y2="280"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="0.6"
      />
      <rect
        x="204"
        y="283"
        width="24"
        height="2.5"
        rx="1"
        fill="rgba(255,255,255,0.12)"
      />
      <rect
        x="244"
        y="283"
        width="16"
        height="2.5"
        rx="1"
        fill="rgba(255,255,255,0.1)"
      />
      <line
        x1="204"
        y1="289"
        x2="264"
        y2="289"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="0.6"
      />
      <rect
        x="204"
        y="292"
        width="18"
        height="2.5"
        rx="1"
        fill="rgba(255,255,255,0.12)"
      />
      <rect
        x="244"
        y="292"
        width="20"
        height="2.5"
        rx="1"
        fill="rgba(255,255,255,0.15)"
      />
      {/* Label */}
      <text
        x="234"
        y="316"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="600"
        letterSpacing="1.2"
        fill="rgba(255,255,255,0.35)"
      >
        INVOICES
      </text>
    </g>
  </svg>
);

export default WordSVG;
