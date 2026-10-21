// ─────────────────────────────────────────────
// Approval flow SVG
//
// Vertical flow diagram — 6 step nodes connected
// by a spine line. Step 3 branches (available /
// delegate). Step 5 branches (actioned / escalated).
// Light-background palette — dark nodes, #046999
// accent, muted borders.
// ViewBox: 280 × 520
// ─────────────────────────────────────────────
export const ApprovalFlowSvg = () => {
  // Main spine x-coordinate
  const spineX = 140;

  // Primary node positions (y centres)
  const nodes = [
    {
      y: 44,
      index: "01",
      label: "PO Raised",
      sub: "Dynamics 365 · Business Central · Power Apps",
    },
    {
      y: 130,
      index: "02",
      label: "AI Context Assembly",
      sub: "Budget · vendor · cost centre · Copilot summary",
    },
    {
      y: 216,
      index: "03",
      label: "Approver Routing",
      sub: "Graph API availability check",
    },
    {
      y: 312,
      index: "04",
      label: "Teams Approval Card",
      sub: "Summary · budget · flags · one-click action",
    },
    {
      y: 398,
      index: "05",
      label: "SLA Tracking",
      sub: "Auto-escalate if unactioned",
    },
    {
      y: 480,
      index: "06",
      label: "Audit & Posting",
      sub: "SharePoint trail · ERP auto-post",
    },
  ];

  // Branch from node 3 (available vs delegate)
  const branch3Y = 216;
  const branch3Out = 252; // y where the branch re-merges back into node 4

  // Branch from node 5 (actioned vs escalated)
  const branch5Y = 398;
  const branch5Out = 435;

  return (
    <svg
      viewBox="0 0 280 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "100%",
        height: "auto",
        display: "block",
      }}
      aria-label="Six-step Copilot purchase order approval flow diagram"
      role="img"
    >
      {/* ── Main spine line ── */}
      <line
        x1={spineX}
        y1={60}
        x2={spineX}
        y2={468}
        stroke="rgba(4,105,153,0.18)"
        strokeWidth="1.5"
        strokeDasharray="5 4"
      />

      {/* ── Branch at step 3 — Available / Delegate ── */}
      {/* Left fork: available approver */}
      <path
        d={`M ${spineX} ${branch3Y + 26} C ${spineX} ${branch3Y + 50} ${spineX - 62} ${branch3Y + 50} ${spineX - 62} ${branch3Y + 74}`}
        stroke="rgba(46,180,100,0.5)"
        strokeWidth="1.2"
        fill="none"
        strokeDasharray="4 3"
      />
      <rect
        x={spineX - 98}
        y={branch3Y + 74}
        width="72"
        height="22"
        rx="4"
        fill="rgba(46,180,100,0.1)"
        stroke="rgba(46,180,100,0.4)"
        strokeWidth="1"
      />
      <text
        x={spineX - 62}
        y={branch3Y + 86}
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="700"
        fill="rgba(46,180,100,0.85)"
      >
        Primary approver
      </text>
      {/* Re-merge arrow */}
      <path
        d={`M ${spineX - 62} ${branch3Y + 96} C ${spineX - 62} ${branch3Y + 118} ${spineX} ${branch3Y + 118} ${spineX} ${branch3Y + 138}`}
        stroke="rgba(46,180,100,0.35)"
        strokeWidth="1"
        fill="none"
        strokeDasharray="3 3"
      />

      {/* Right fork: out-of-office — delegate */}
      <path
        d={`M ${spineX} ${branch3Y + 26} C ${spineX} ${branch3Y + 50} ${spineX + 62} ${branch3Y + 50} ${spineX + 62} ${branch3Y + 74}`}
        stroke="rgba(4,105,153,0.45)"
        strokeWidth="1.2"
        fill="none"
        strokeDasharray="4 3"
      />
      <rect
        x={spineX + 26}
        y={branch3Y + 74}
        width="72"
        height="22"
        rx="4"
        fill="rgba(4,105,153,0.1)"
        stroke="rgba(4,105,153,0.35)"
        strokeWidth="1"
      />
      <text
        x={spineX + 62}
        y={branch3Y + 86}
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="700"
        fill="rgba(4,105,153,0.8)"
      >
        Auto → delegate
      </text>
      {/* Re-merge arrow */}
      <path
        d={`M ${spineX + 62} ${branch3Y + 96} C ${spineX + 62} ${branch3Y + 118} ${spineX} ${branch3Y + 118} ${spineX} ${branch3Y + 138}`}
        stroke="rgba(4,105,153,0.3)"
        strokeWidth="1"
        fill="none"
        strokeDasharray="3 3"
      />

      {/* Branch label */}
      <text
        x={spineX}
        y={branch3Y + 44}
        textAnchor="middle"
        fontSize="5.5"
        fill="rgba(0,0,0,0.3)"
        fontStyle="italic"
      >
        Is approver available?
      </text>

      {/* ── Branch at step 5 — Actioned / Escalated ── */}
      {/* Left fork: actioned */}
      <path
        d={`M ${spineX} ${branch5Y + 24} C ${spineX} ${branch5Y + 44} ${spineX - 58} ${branch5Y + 44} ${spineX - 58} ${branch5Y + 60}`}
        stroke="rgba(46,180,100,0.45)"
        strokeWidth="1.2"
        fill="none"
        strokeDasharray="4 3"
      />
      <rect
        x={spineX - 94}
        y={branch5Y + 60}
        width="72"
        height="20"
        rx="4"
        fill="rgba(46,180,100,0.09)"
        stroke="rgba(46,180,100,0.35)"
        strokeWidth="1"
      />
      <text
        x={spineX - 58}
        y={branch5Y + 72}
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="700"
        fill="rgba(46,180,100,0.8)"
      >
        Approved ✓
      </text>
      {/* Re-merge */}
      <path
        d={`M ${spineX - 58} ${branch5Y + 80} C ${spineX - 58} ${branch5Y + 100} ${spineX} ${branch5Y + 100} ${spineX} ${branch5Y + 112}`}
        stroke="rgba(46,180,100,0.3)"
        strokeWidth="1"
        fill="none"
        strokeDasharray="3 3"
      />

      {/* Right fork: escalated */}
      <path
        d={`M ${spineX} ${branch5Y + 24} C ${spineX} ${branch5Y + 44} ${spineX + 58} ${branch5Y + 44} ${spineX + 58} ${branch5Y + 60}`}
        stroke="rgba(210,80,60,0.45)"
        strokeWidth="1.2"
        fill="none"
        strokeDasharray="4 3"
      />
      <rect
        x={spineX + 22}
        y={branch5Y + 60}
        width="72"
        height="20"
        rx="4"
        fill="rgba(210,80,60,0.08)"
        stroke="rgba(210,80,60,0.32)"
        strokeWidth="1"
      />
      <text
        x={spineX + 58}
        y={branch5Y + 72}
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="700"
        fill="rgba(210,100,80,0.8)"
      >
        Escalated →
      </text>
      {/* Re-merge */}
      <path
        d={`M ${spineX + 58} ${branch5Y + 80} C ${spineX + 58} ${branch5Y + 100} ${spineX} ${branch5Y + 100} ${spineX} ${branch5Y + 112}`}
        stroke="rgba(210,80,60,0.28)"
        strokeWidth="1"
        fill="none"
        strokeDasharray="3 3"
      />

      <text
        x={spineX}
        y={branch5Y + 39}
        textAnchor="middle"
        fontSize="5.5"
        fill="rgba(0,0,0,0.3)"
        fontStyle="italic"
      >
        Action within SLA?
      </text>

      {/* ── Primary nodes ── */}
      {nodes.map(({ y, index, label, sub }, i) => {
        const isFirst = i === 0;
        const isLast = i === nodes.length - 1;
        const isBranch = i === 2 || i === 4; // steps 3 & 5 have branches below

        return (
          <g key={index}>
            {/* Node box */}
            <rect
              x={spineX - 88}
              y={y - 24}
              width={176}
              height={44}
              rx="6"
              fill={isLast ? "rgba(4,105,153,0.12)" : "#ffffff"}
              stroke={isLast ? "rgba(4,105,153,0.5)" : "rgba(0,0,0,0.1)"}
              strokeWidth={isLast ? "1.4" : "1"}
            />
            {/* Left accent bar */}
            <rect
              x={spineX - 88}
              y={y - 24}
              width="3"
              height={44}
              rx="2"
              fill={
                isFirst
                  ? "#046999"
                  : isLast
                    ? "#046999"
                    : "rgba(4,105,153,0.35)"
              }
            />

            {/* Step index */}
            <text
              x={spineX - 80}
              y={y - 8}
              fontSize="5.5"
              fontWeight="800"
              letterSpacing="1"
              fill="rgba(4,105,153,0.6)"
            >
              {index}
            </text>

            {/* Step label */}
            <text
              x={spineX - 80}
              y={y + 6}
              fontSize="9.5"
              fontWeight="800"
              fill={isLast ? "rgba(4,105,153,0.9)" : "rgba(13,27,42,0.85)"}
              letterSpacing="-0.2"
            >
              {label}
            </text>

            {/* Sub-label */}
            <text
              x={spineX - 80}
              y={y + 17}
              fontSize="6.2"
              fill="rgba(0,0,0,0.38)"
            >
              {sub}
            </text>
          </g>
        );
      })}

      {/* ── Connector arrows between primary nodes ── */}
      {/* 1→2 */}
      <path
        d={`M ${spineX} 68 L ${spineX} 106`}
        stroke="rgba(4,105,153,0.3)"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d={`M ${spineX - 4} 102 L ${spineX} 108 L ${spineX + 4} 102`}
        stroke="rgba(4,105,153,0.5)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 2→3 */}
      <path
        d={`M ${spineX} 154 L ${spineX} 192`}
        stroke="rgba(4,105,153,0.3)"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d={`M ${spineX - 4} 188 L ${spineX} 194 L ${spineX + 4} 188`}
        stroke="rgba(4,105,153,0.5)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 3→4 (after branch re-merge) */}
      <path
        d={`M ${spineX - 4} 284 L ${spineX} 290 L ${spineX + 4} 284`}
        stroke="rgba(4,105,153,0.5)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 4→5 */}
      <path
        d={`M ${spineX} 336 L ${spineX} 374`}
        stroke="rgba(4,105,153,0.3)"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d={`M ${spineX - 4} 370 L ${spineX} 376 L ${spineX + 4} 370`}
        stroke="rgba(4,105,153,0.5)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 5→6 (after branch re-merge) */}
      <path
        d={`M ${spineX - 4} 454 L ${spineX} 460 L ${spineX + 4} 454`}
        stroke="rgba(4,105,153,0.5)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
