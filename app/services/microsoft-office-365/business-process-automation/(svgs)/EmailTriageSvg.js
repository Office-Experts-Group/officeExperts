import styles from "../../../../../styles/bpaEmailTriage.module.scss";

// ─────────────────────────────────────────────
// Email Triage SVG
//
// Three-layer flow visualisation:
//   Top    — incoming email stream (4 staggered
//             envelope icons arriving from above)
//   Middle — AI classification engine (horizontal
//             bar with intent labels + urgency
//             scoring row)
//   Bottom — three output channels:
//              · Auto-handled  (green)
//              · Routed to team (blue)
//              · Escalated urgent (red-orange)
//
// Animated data-packet dots travel down each of
// the three output paths using CSS offset-path
// animation — same technique as AgentsSegment.
//
// ViewBox: 360 × 480
// ─────────────────────────────────────────────

export const EmailTriageSvg = () => (
  <svg
    viewBox="0 0 360 480"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: "100%",
      height: "auto",
      display: "block",
    }}
    aria-label="Animated email triage flow: incoming emails classified and routed to three output queues"
    role="img"
  >
    {/* ══════════════════════════════════════════
        LAYER 1 — Incoming email stream
        Four envelope shapes arriving at the top,
        staggered horizontally to suggest volume.
        ══════════════════════════════════════════ */}

    {/* Ghost envelopes behind — depth effect */}
    {[
      { x: 30, y: 8, w: 58, h: 38, op: 0.08, rotate: "-4 59 27" },
      { x: 100, y: 4, w: 58, h: 38, op: 0.1, rotate: "2 129 23" },
      { x: 200, y: 6, w: 58, h: 38, op: 0.09, rotate: "-2 229 25" },
      { x: 270, y: 5, w: 58, h: 38, op: 0.08, rotate: "3 299 24" },
    ].map(({ x, y, w, h, op, rotate }) => (
      <rect
        key={`ghost-${x}`}
        x={x}
        y={y}
        width={w}
        height={h}
        rx="3"
        fill={`rgba(255,255,255,${op})`}
        stroke={`rgba(255,255,255,${op * 1.5})`}
        strokeWidth="0.8"
        transform={`rotate(${rotate})`}
      />
    ))}

    {/* Primary envelopes — four incoming emails */}
    {[
      {
        x: 26,
        y: 16,
        label: "Invoice",
        labelClr: "rgba(4,105,153,0.9)",
        bg: "rgba(4,105,153,0.18)",
        cls: styles.env1,
      },
      {
        x: 96,
        y: 12,
        label: "Query",
        labelClr: "rgba(255,255,255,0.6)",
        bg: "rgba(255,255,255,0.07)",
        cls: styles.env2,
      },
      {
        x: 196,
        y: 14,
        label: "Order",
        labelClr: "rgba(255,255,255,0.6)",
        bg: "rgba(255,255,255,0.07)",
        cls: styles.env3,
      },
      {
        x: 266,
        y: 13,
        label: "Complaint",
        labelClr: "rgba(210,90,70,0.9)",
        bg: "rgba(210,90,70,0.16)",
        cls: styles.env4,
      },
    ].map(({ x, y, label, labelClr, bg, cls }) => (
      <g key={label} className={cls}>
        <rect
          x={x}
          y={y}
          width="62"
          height="40"
          rx="4"
          fill={bg}
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.1"
        />
        {/* Envelope flap chevron */}
        <path
          d={`M ${x} ${y + 10} L ${x + 31} ${y + 22} L ${x + 62} ${y + 10}`}
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Type label */}
        <text
          x={x + 31}
          y={y + 33}
          textAnchor="middle"
          fontSize="6"
          fontWeight="700"
          letterSpacing="0.5"
          fill={labelClr}
        >
          {label}
        </text>
      </g>
    ))}

    {/* Downward arrows from envelopes into classifier */}
    {[57, 127, 227, 297].map((x) => (
      <g key={`arr-${x}`}>
        <line
          x1={x}
          y1={60}
          x2={x}
          y2={106}
          stroke="rgba(4,105,153,0.25)"
          strokeWidth="1.2"
          strokeDasharray="4 3"
        />
        <path
          d={`M ${x - 4} 102 L ${x} 108 L ${x + 4} 102`}
          stroke="rgba(4,105,153,0.45)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    ))}

    {/* ══════════════════════════════════════════
        LAYER 2 — AI classification engine
        Full-width horizontal block spanning all
        four input streams. Shows intent labels
        and an urgency scoring bar.
        ══════════════════════════════════════════ */}

    {/* Engine outer border */}
    <rect
      x="16"
      y="110"
      width="328"
      height="88"
      rx="7"
      fill="rgba(4,105,153,0.13)"
      stroke="rgba(4,105,153,0.45)"
      strokeWidth="1.3"
    />

    {/* Top accent bar */}
    <rect
      x="16"
      y="110"
      width="328"
      height="4"
      rx="7"
      fill="rgba(4,105,153,0.6)"
    />

    {/* Engine label */}
    <text
      x="180"
      y="130"
      textAnchor="middle"
      fontSize="8"
      fontWeight="800"
      letterSpacing="2"
      fill="rgba(4,105,153,0.95)"
    >
      AI CLASSIFICATION ENGINE
    </text>

    {/* Intent detection row */}
    <text
      x="26"
      y="148"
      fontSize="6.5"
      fontWeight="600"
      fill="rgba(255,255,255,0.4)"
      letterSpacing="0.5"
    >
      INTENT DETECTED
    </text>

    {/* Intent chips */}
    {[
      { label: "Invoice", x: 26, accent: true },
      { label: "Query", x: 82 },
      { label: "Order", x: 126 },
      { label: "Remittance", x: 170 },
      { label: "Complaint", x: 230, warn: true },
      { label: "General", x: 295 },
    ].map(({ label, x, accent, warn }) => (
      <g key={label}>
        <rect
          x={x}
          y={152}
          width={label.length * 5.2 + 14}
          height="14"
          rx="7"
          fill={
            accent
              ? "rgba(4,105,153,0.35)"
              : warn
                ? "rgba(210,90,70,0.25)"
                : "rgba(255,255,255,0.08)"
          }
          stroke={
            accent
              ? "rgba(4,105,153,0.55)"
              : warn
                ? "rgba(210,90,70,0.45)"
                : "rgba(255,255,255,0.1)"
          }
          strokeWidth="0.8"
        />
        <text
          x={x + label.length * 2.6 + 7}
          y={161.5}
          textAnchor="middle"
          fontSize="5.8"
          fontWeight="600"
          fill={
            accent
              ? "rgba(4,105,153,0.95)"
              : warn
                ? "rgba(210,110,90,0.9)"
                : "rgba(255,255,255,0.5)"
          }
        >
          {label}
        </text>
      </g>
    ))}

    {/* Urgency scoring row */}
    <text
      x="26"
      y="183"
      fontSize="6.5"
      fontWeight="600"
      fill="rgba(255,255,255,0.4)"
      letterSpacing="0.5"
    >
      URGENCY SCORE
    </text>

    {/* Score gradient bar */}
    <rect
      x="116"
      y="176"
      width="216"
      height="6"
      rx="3"
      fill="rgba(255,255,255,0.07)"
    />
    {/* Low → medium → high gradient segments */}
    <rect
      x="116"
      y="176"
      width="72"
      height="6"
      rx="3"
      fill="rgba(46,180,100,0.55)"
    />
    <rect x="188" y="176" width="72" height="6" fill="rgba(4,105,153,0.55)" />
    <rect
      x="260"
      y="176"
      width="72"
      height="6"
      rx="3"
      fill="rgba(210,90,70,0.65)"
    />

    {/* Score labels */}
    <text
      x="152"
      y="190"
      textAnchor="middle"
      fontSize="5.5"
      fill="rgba(46,180,100,0.7)"
    >
      Routine
    </text>
    <text
      x="224"
      y="190"
      textAnchor="middle"
      fontSize="5.5"
      fill="rgba(4,105,153,0.8)"
    >
      Elevated
    </text>
    <text
      x="296"
      y="190"
      textAnchor="middle"
      fontSize="5.5"
      fill="rgba(210,110,90,0.8)"
    >
      Urgent
    </text>

    {/* ══════════════════════════════════════════
        LAYER 3 — Three output routing paths
        Centre spine drops from the classifier
        then splits into three branches.
        ══════════════════════════════════════════ */}

    {/* Main trunk from classifier */}
    <line
      x1="180"
      y1="200"
      x2="180"
      y2="234"
      stroke="rgba(4,105,153,0.4)"
      strokeWidth="1.4"
      strokeDasharray="5 3"
    />

    {/* Horizontal splitter bar */}
    <line
      x1="72"
      y1="234"
      x2="288"
      y2="234"
      stroke="rgba(4,105,153,0.25)"
      strokeWidth="1.2"
    />

    {/* Left branch path — Auto-handled */}
    <path
      id="pathLeft"
      d="M 72 234 L 72 302"
      stroke="rgba(46,180,100,0.35)"
      strokeWidth="1.2"
      strokeDasharray="5 3"
    />
    <path
      d="M 68 298 L 72 304 L 76 298"
      stroke="rgba(46,180,100,0.65)"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Centre branch path — Routed to team */}
    <path
      id="pathCentre"
      d="M 180 234 L 180 302"
      stroke="rgba(4,105,153,0.45)"
      strokeWidth="1.4"
      strokeDasharray="5 3"
    />
    <path
      d="M 176 298 L 180 304 L 184 298"
      stroke="rgba(4,105,153,0.75)"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Right branch path — Escalated */}
    <path
      id="pathRight"
      d="M 288 234 L 288 302"
      stroke="rgba(210,90,70,0.35)"
      strokeWidth="1.2"
      strokeDasharray="5 3"
    />
    <path
      d="M 284 298 L 288 304 L 292 298"
      stroke="rgba(210,90,70,0.65)"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* ══════════════════════════════════════════
        Animated data-packet dots
        One dot per path, staggered delays.
        ══════════════════════════════════════════ */}

    {/* Left path — green packet */}
    <circle r="4" fill="rgba(46,180,100,0.85)" className={styles.packetLeft} />

    {/* Centre path — blue packet */}
    <circle r="4" fill="rgba(4,105,153,0.9)" className={styles.packetCentre} />
    <circle r="4" fill="rgba(4,105,153,0.7)" className={styles.packetCentre2} />

    {/* Right path — red-orange packet */}
    <circle r="4" fill="rgba(210,90,70,0.85)" className={styles.packetRight} />

    {/* ══════════════════════════════════════════
        Output queue cards
        ══════════════════════════════════════════ */}

    {/* Auto-handled — green */}
    <rect
      x="16"
      y="306"
      width="112"
      height="72"
      rx="6"
      fill="rgba(46,180,100,0.1)"
      stroke="rgba(46,180,100,0.35)"
      strokeWidth="1.1"
    />
    <rect
      x="16"
      y="306"
      width="112"
      height="4"
      rx="6"
      fill="rgba(46,180,100,0.55)"
    />
    <text
      x="72"
      y="324"
      textAnchor="middle"
      fontSize="7.5"
      fontWeight="800"
      fill="rgba(46,180,100,0.9)"
    >
      Auto-Handled
    </text>
    <text
      x="72"
      y="337"
      textAnchor="middle"
      fontSize="6"
      fill="rgba(255,255,255,0.45)"
    >
      Acknowledgement sent
    </text>
    <text
      x="72"
      y="347"
      textAnchor="middle"
      fontSize="6"
      fill="rgba(255,255,255,0.45)"
    >
      Logged to SharePoint
    </text>
    <text
      x="72"
      y="357"
      textAnchor="middle"
      fontSize="6"
      fill="rgba(255,255,255,0.45)"
    >
      No human needed
    </text>
    {/* Volume indicator */}
    <rect
      x="28"
      y="364"
      width="80"
      height="7"
      rx="3.5"
      fill="rgba(46,180,100,0.12)"
      stroke="rgba(46,180,100,0.25)"
      strokeWidth="0.8"
    />
    <text
      x="68"
      y="370"
      textAnchor="middle"
      fontSize="5.5"
      fontWeight="700"
      fill="rgba(46,180,100,0.7)"
    >
      ~65% of volume
    </text>

    {/* Routed to team — blue */}
    <rect
      x="124"
      y="306"
      width="112"
      height="72"
      rx="6"
      fill="rgba(4,105,153,0.14)"
      stroke="rgba(4,105,153,0.4)"
      strokeWidth="1.1"
    />
    <rect
      x="124"
      y="306"
      width="112"
      height="4"
      rx="6"
      fill="rgba(4,105,153,0.6)"
    />
    <text
      x="180"
      y="324"
      textAnchor="middle"
      fontSize="7.5"
      fontWeight="800"
      fill="rgba(4,105,153,0.95)"
    >
      Routed to Team
    </text>
    <text
      x="180"
      y="337"
      textAnchor="middle"
      fontSize="6"
      fill="rgba(255,255,255,0.45)"
    >
      Correct person notified
    </text>
    <text
      x="180"
      y="347"
      textAnchor="middle"
      fontSize="6"
      fill="rgba(255,255,255,0.45)"
    >
      Context summary attached
    </text>
    <text
      x="180"
      y="357"
      textAnchor="middle"
      fontSize="6"
      fill="rgba(255,255,255,0.45)"
    >
      SLA clock started
    </text>
    <rect
      x="136"
      y="364"
      width="80"
      height="7"
      rx="3.5"
      fill="rgba(4,105,153,0.12)"
      stroke="rgba(4,105,153,0.3)"
      strokeWidth="0.8"
    />
    <text
      x="176"
      y="370"
      textAnchor="middle"
      fontSize="5.5"
      fontWeight="700"
      fill="rgba(4,105,153,0.8)"
    >
      ~30% of volume
    </text>

    {/* Escalated urgent — red-orange */}
    <rect
      x="232"
      y="306"
      width="112"
      height="72"
      rx="6"
      fill="rgba(210,90,70,0.1)"
      stroke="rgba(210,90,70,0.35)"
      strokeWidth="1.1"
    />
    <rect
      x="232"
      y="306"
      width="112"
      height="4"
      rx="6"
      fill="rgba(210,90,70,0.55)"
    />
    <text
      x="288"
      y="324"
      textAnchor="middle"
      fontSize="7.5"
      fontWeight="800"
      fill="rgba(210,110,90,0.9)"
    >
      Escalated Urgent
    </text>
    <text
      x="288"
      y="337"
      textAnchor="middle"
      fontSize="6"
      fill="rgba(255,255,255,0.45)"
    >
      Immediate Teams alert
    </text>
    <text
      x="288"
      y="347"
      textAnchor="middle"
      fontSize="6"
      fill="rgba(255,255,255,0.45)"
    >
      Sentiment score flagged
    </text>
    <text
      x="288"
      y="357"
      textAnchor="middle"
      fontSize="6"
      fill="rgba(255,255,255,0.45)"
    >
      Senior staff notified
    </text>
    <rect
      x="244"
      y="364"
      width="80"
      height="7"
      rx="3.5"
      fill="rgba(210,90,70,0.1)"
      stroke="rgba(210,90,70,0.28)"
      strokeWidth="0.8"
    />
    <text
      x="284"
      y="370"
      textAnchor="middle"
      fontSize="5.5"
      fontWeight="700"
      fill="rgba(210,110,90,0.75)"
    >
      ~5% of volume
    </text>

    {/* ══════════════════════════════════════════
        Footer stats strip
        ══════════════════════════════════════════ */}
    <rect
      x="16"
      y="390"
      width="328"
      height="72"
      rx="6"
      fill="rgba(255,255,255,0.03)"
      stroke="rgba(255,255,255,0.07)"
      strokeWidth="1"
    />

    {/* Dividers */}
    <line
      x1="125"
      y1="398"
      x2="125"
      y2="454"
      stroke="rgba(255,255,255,0.07)"
      strokeWidth="0.8"
    />
    <line
      x1="233"
      y1="398"
      x2="233"
      y2="454"
      stroke="rgba(255,255,255,0.07)"
      strokeWidth="0.8"
    />

    {[
      { value: "0 hrs", label: "manual sorting\nper day", x: 70 },
      { value: "< 2 min", label: "receipt to\nrouting decision", x: 179 },
      { value: "100%", label: "of items logged\nwith timestamp", x: 288 },
    ].map(({ value, label, x }) => (
      <g key={value}>
        <text
          x={x}
          y="416"
          textAnchor="middle"
          fontSize="14"
          fontWeight="900"
          letterSpacing="-0.5"
          fill="rgba(4,105,153,0.95)"
        >
          {value}
        </text>
        {label.split("\n").map((line, li) => (
          <text
            key={li}
            x={x}
            y={434 + li * 11}
            textAnchor="middle"
            fontSize="6"
            fill="rgba(255,255,255,0.35)"
          >
            {line}
          </text>
        ))}
      </g>
    ))}
  </svg>
);
