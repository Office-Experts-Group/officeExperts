export const ClassificationVisual = () => (
  <svg
    viewBox="0 0 260 210"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{
      width: "100%",
      height: "auto",
      display: "block",
    }}
  >
    {/* ── Incoming document stack (mixed types) ── */}
    {/* Ghost layers */}
    {[
      { y: 4, w: 64, opacity: 0.1, rotate: "-5 46 38" },
      { y: 9, w: 64, opacity: 0.15, rotate: "-2 46 38" },
    ].map(({ y, w, opacity, rotate }) => (
      <rect
        key={y}
        x="14"
        y={y}
        width={w}
        height="46"
        rx="3"
        fill={`rgba(255,255,255,${opacity})`}
        stroke={`rgba(255,255,255,${opacity * 1.2})`}
        strokeWidth="1"
        transform={`rotate(${rotate})`}
      />
    ))}
    {/* Front envelope */}
    <rect
      x="10"
      y="14"
      width="68"
      height="46"
      rx="4"
      fill="rgba(255,255,255,0.07)"
      stroke="rgba(255,255,255,0.25)"
      strokeWidth="1.2"
    />
    <path
      d="M10 22 L44 38 L78 22"
      stroke="rgba(255,255,255,0.3)"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="18"
      y="42"
      width="44"
      height="2.5"
      rx="1.25"
      fill="rgba(255,255,255,0.18)"
    />
    <rect
      x="18"
      y="47"
      width="32"
      height="2"
      rx="1"
      fill="rgba(255,255,255,0.1)"
    />
    <rect
      x="18"
      y="52"
      width="38"
      height="2"
      rx="1"
      fill="rgba(255,255,255,0.07)"
    />

    {/* Type label on envelope */}
    <rect
      x="50"
      y="22"
      width="22"
      height="9"
      rx="2"
      fill="rgba(4,105,153,0.35)"
    />
    <text
      x="61"
      y="28.5"
      textAnchor="middle"
      fontSize="4.5"
      fontWeight="700"
      fill="rgba(255,255,255,0.85)"
    >
      MIXED
    </text>

    {/* ── Arrow to classifier ── */}
    <path
      d="M80 37 L104 37"
      stroke="rgba(4,105,153,0.6)"
      strokeWidth="1.5"
      strokeDasharray="3 2.5"
    />
    <path
      d="M100 33 L106 37 L100 41"
      stroke="rgba(4,105,153,0.9)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* ── Classification engine box ── */}
    <rect
      x="106"
      y="18"
      width="68"
      height="42"
      rx="6"
      fill="rgba(4,105,153,0.15)"
      stroke="rgba(4,105,153,0.5)"
      strokeWidth="1.2"
    />
    <text
      x="140"
      y="32"
      textAnchor="middle"
      fontSize="6.5"
      fontWeight="800"
      letterSpacing="0.8"
      fill="rgba(4,105,153,0.95)"
    >
      AI CLASSIFY
    </text>
    {/* Intent rows */}
    {[
      { label: "Intent", y: 41 },
      { label: "Urgency", y: 49 },
    ].map(({ label, y }) => (
      <g key={label}>
        <text x="112" y={y} fontSize="5.5" fill="rgba(255,255,255,0.35)">
          {label}
        </text>
        <rect
          x="136"
          y={y - 5}
          width="28"
          height="5"
          rx="2"
          fill="rgba(4,105,153,0.3)"
        />
      </g>
    ))}
    {/* Confidence score */}
    <rect
      x="112"
      y="53"
      width="52"
      height="3"
      rx="1.5"
      fill="rgba(255,255,255,0.08)"
    />
    <rect
      x="112"
      y="53"
      width="44"
      height="3"
      rx="1.5"
      fill="rgba(4,105,153,0.6)"
    />

    {/* ── Three output routing paths ── */}

    {/* LEFT — Invoice queue */}
    <path
      d="M106 39 L60 39 L60 100"
      stroke="rgba(4,105,153,0.45)"
      strokeWidth="1.2"
      fill="none"
      strokeDasharray="3 2.5"
    />
    <path
      d="M56 96 L60 102 L64 96"
      stroke="rgba(4,105,153,0.8)"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <rect
      x="22"
      y="102"
      width="76"
      height="36"
      rx="4"
      fill="rgba(4,105,153,0.14)"
      stroke="rgba(4,105,153,0.3)"
      strokeWidth="1"
    />
    <rect
      x="22"
      y="102"
      width="76"
      height="4"
      rx="4"
      fill="rgba(4,105,153,0.5)"
    />
    <text
      x="60"
      y="116"
      textAnchor="middle"
      fontSize="6.5"
      fontWeight="700"
      fill="rgba(255,255,255,0.8)"
    >
      Invoice
    </text>
    <text
      x="60"
      y="125"
      textAnchor="middle"
      fontSize="5.5"
      fill="rgba(255,255,255,0.4)"
    >
      Auto-match &amp; post
    </text>
    <rect
      x="30"
      y="130"
      width="60"
      height="3"
      rx="1.5"
      fill="rgba(255,255,255,0.08)"
    />

    {/* CENTRE — Purchase Order queue */}
    <path
      d="M140 62 L140 100"
      stroke="rgba(4,105,153,0.45)"
      strokeWidth="1.2"
      fill="none"
      strokeDasharray="3 2.5"
    />
    <path
      d="M136 96 L140 102 L144 96"
      stroke="rgba(4,105,153,0.8)"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <rect
      x="102"
      y="102"
      width="76"
      height="36"
      rx="4"
      fill="rgba(4,105,153,0.2)"
      stroke="rgba(4,105,153,0.4)"
      strokeWidth="1"
    />
    <rect
      x="102"
      y="102"
      width="76"
      height="4"
      rx="4"
      fill="rgba(4,105,153,0.65)"
    />
    <text
      x="140"
      y="116"
      textAnchor="middle"
      fontSize="6.5"
      fontWeight="700"
      fill="rgba(255,255,255,0.85)"
    >
      Purchase Order
    </text>
    <text
      x="140"
      y="125"
      textAnchor="middle"
      fontSize="5.5"
      fill="rgba(255,255,255,0.5)"
    >
      Route to procurement
    </text>
    <rect
      x="110"
      y="130"
      width="60"
      height="3"
      rx="1.5"
      fill="rgba(255,255,255,0.12)"
    />

    {/* RIGHT — Complaint / escalation queue */}
    <path
      d="M174 39 L220 39 L220 100"
      stroke="rgba(220,80,60,0.45)"
      strokeWidth="1.2"
      fill="none"
      strokeDasharray="3 2.5"
    />
    <path
      d="M216 96 L220 102 L224 96"
      stroke="rgba(220,80,60,0.8)"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <rect
      x="182"
      y="102"
      width="76"
      height="36"
      rx="4"
      fill="rgba(220,80,60,0.1)"
      stroke="rgba(220,80,60,0.3)"
      strokeWidth="1"
    />
    <rect
      x="182"
      y="102"
      width="76"
      height="4"
      rx="4"
      fill="rgba(220,80,60,0.5)"
    />
    <text
      x="220"
      y="116"
      textAnchor="middle"
      fontSize="6.5"
      fontWeight="700"
      fill="rgba(255,255,255,0.75)"
    >
      Complaint
    </text>
    <text
      x="220"
      y="125"
      textAnchor="middle"
      fontSize="5.5"
      fill="rgba(255,255,255,0.4)"
    >
      Escalate · priority
    </text>
    <rect
      x="190"
      y="130"
      width="60"
      height="3"
      rx="1.5"
      fill="rgba(220,80,60,0.2)"
    />

    {/* ── Queue labels below ── */}
    {[
      { x: 60, label: "Accounts", clr: "rgba(4,105,153,0.7)" },
      { x: 140, label: "Procurement", clr: "rgba(4,105,153,0.85)" },
      { x: 220, label: "Management", clr: "rgba(220,100,80,0.75)" },
    ].map(({ x, label, clr }) => (
      <text
        key={label}
        x={x}
        y="148"
        textAnchor="middle"
        fontSize="5.5"
        fill={clr}
        fontWeight="600"
        letterSpacing="0.5"
      >
        → {label}
      </text>
    ))}

    {/* ── Stats footer strip ── */}
    <rect
      x="10"
      y="158"
      width="240"
      height="38"
      rx="4"
      fill="rgba(255,255,255,0.02)"
      stroke="rgba(255,255,255,0.06)"
      strokeWidth="1"
    />

    {[
      { label: "Avg. classification time", value: "< 2 sec", x: 70 },
      { label: "Routing accuracy", value: "94%", x: 160 },
      { label: "Human review needed", value: "< 6%", x: 230 },
    ].map(({ label, value, x }) => (
      <g key={label}>
        <text
          x={x}
          y="172"
          textAnchor="middle"
          fontSize="8.5"
          fontWeight="900"
          fill="rgba(4,105,153,0.9)"
        >
          {value}
        </text>
        <text
          x={x}
          y="183"
          textAnchor="middle"
          fontSize="5.2"
          fill="rgba(255,255,255,0.3)"
        >
          {label}
        </text>
      </g>
    ))}

    {/* Dividers */}
    <line
      x1="120"
      y1="163"
      x2="120"
      y2="192"
      stroke="rgba(255,255,255,0.06)"
      strokeWidth="0.8"
    />
    <line
      x1="196"
      y1="163"
      x2="196"
      y2="192"
      stroke="rgba(255,255,255,0.06)"
      strokeWidth="0.8"
    />
  </svg>
);
