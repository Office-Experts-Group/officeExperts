export const InvoiceMatchVisual = () => (
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
    {/* ── Source invoice document ── */}
    <rect
      x="10"
      y="10"
      width="72"
      height="92"
      rx="5"
      fill="rgba(255,255,255,0.05)"
      stroke="rgba(255,255,255,0.18)"
      strokeWidth="1.2"
    />
    {/* Dog-ear */}
    <path d="M66 10 L82 26 L66 26 Z" fill="rgba(255,255,255,0.1)" />
    <path d="M66 10 L82 26" stroke="rgba(255,255,255,0.15)" strokeWidth="0.9" />

    {/* Header bar */}
    <rect
      x="18"
      y="18"
      width="46"
      height="4"
      rx="2"
      fill="rgba(4,105,153,0.55)"
    />
    <rect
      x="18"
      y="25"
      width="32"
      height="2.5"
      rx="1.25"
      fill="rgba(255,255,255,0.18)"
    />

    {/* Field lines */}
    {[34, 40, 46, 52, 58].map((y) => (
      <rect
        key={y}
        x="18"
        y={y}
        width={y % 12 === 10 ? 46 : 36}
        height="2.2"
        rx="1.1"
        fill="rgba(255,255,255,0.12)"
      />
    ))}

    {/* ABN / GST stamp */}
    <rect
      x="18"
      y="68"
      width="56"
      height="16"
      rx="3"
      fill="rgba(4,105,153,0.22)"
      stroke="rgba(4,105,153,0.4)"
      strokeWidth="0.9"
    />
    <text
      x="46"
      y="76"
      textAnchor="middle"
      fontSize="5.5"
      fontWeight="700"
      letterSpacing="0.8"
      fill="rgba(4,105,153,0.9)"
    >
      TAX INVOICE
    </text>
    <text
      x="46"
      y="82"
      textAnchor="middle"
      fontSize="5"
      fill="rgba(255,255,255,0.38)"
    >
      ABN 61 000 000 000
    </text>

    {/* Total amount */}
    <rect
      x="18"
      y="90"
      width="56"
      height="6"
      rx="1.5"
      fill="rgba(255,255,255,0.06)"
    />
    <text x="21" y="95.5" fontSize="5.5" fill="rgba(255,255,255,0.4)">
      Total
    </text>
    <text
      x="72"
      y="95.5"
      textAnchor="end"
      fontSize="5.5"
      fontWeight="700"
      fill="rgba(255,255,255,0.7)"
    >
      $14,850.00
    </text>

    {/* ── Arrow: invoice → AI Builder ── */}
    <path
      d="M84 56 L106 56"
      stroke="rgba(4,105,153,0.7)"
      strokeWidth="1.5"
      strokeDasharray="3 2.5"
    />
    <path
      d="M102 52 L108 56 L102 60"
      stroke="rgba(4,105,153,0.9)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* ── AI Builder model box ── */}
    <rect
      x="108"
      y="36"
      width="64"
      height="42"
      rx="6"
      fill="rgba(4,105,153,0.18)"
      stroke="rgba(4,105,153,0.55)"
      strokeWidth="1.2"
    />
    {/* Scan line animation hint */}
    <rect
      x="114"
      y="46"
      width="52"
      height="1.5"
      rx="0.75"
      fill="rgba(4,105,153,0.45)"
      opacity="0.7"
    />
    <rect
      x="114"
      y="52"
      width="40"
      height="1.5"
      rx="0.75"
      fill="rgba(4,105,153,0.3)"
    />
    <rect
      x="114"
      y="58"
      width="46"
      height="1.5"
      rx="0.75"
      fill="rgba(4,105,153,0.2)"
    />
    <text
      x="140"
      y="43"
      textAnchor="middle"
      fontSize="6.5"
      fontWeight="800"
      letterSpacing="1"
      fill="rgba(4,105,153,0.95)"
    >
      AI BUILDER
    </text>
    {/* Spinner dots */}
    {[0, 1, 2].map((i) => (
      <circle
        key={i}
        cx={127 + i * 8}
        cy={68}
        r="2.5"
        fill={`rgba(4,105,153,${0.9 - i * 0.25})`}
      />
    ))}

    {/* ── Arrow: AI Builder → extracted fields ── */}
    <path
      d="M140 80 L140 100"
      stroke="rgba(4,105,153,0.7)"
      strokeWidth="1.5"
      strokeDasharray="3 2.5"
    />
    <path
      d="M136 96 L140 102 L144 96"
      stroke="rgba(4,105,153,0.9)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* ── Extracted fields table ── */}
    <rect
      x="56"
      y="104"
      width="168"
      height="88"
      rx="5"
      fill="rgba(255,255,255,0.03)"
      stroke="rgba(255,255,255,0.1)"
      strokeWidth="1"
    />

    {/* Table header */}
    <rect
      x="56"
      y="104"
      width="168"
      height="14"
      rx="5"
      fill="rgba(4,105,153,0.2)"
    />
    <text
      x="140"
      y="114"
      textAnchor="middle"
      fontSize="6"
      fontWeight="700"
      letterSpacing="1"
      fill="rgba(4,105,153,0.9)"
    >
      EXTRACTED DATA
    </text>

    {/* Field rows */}
    {[
      { label: "Supplier", value: "Contoso Pty Ltd", y: 128 },
      { label: "Invoice #", value: "INV-00472", y: 141 },
      { label: "Amount", value: "$14,850.00", y: 154 },
      { label: "Due date", value: "15 May 2026", y: 167 },
    ].map(({ label, value, y }) => (
      <g key={y}>
        <text
          x="66"
          y={y}
          fontSize="6.5"
          fill="rgba(255,255,255,0.35)"
          fontWeight="500"
        >
          {label}
        </text>
        <text
          x="218"
          y={y}
          textAnchor="end"
          fontSize="6.5"
          fontWeight="600"
          fill="rgba(255,255,255,0.75)"
        >
          {value}
        </text>
        <line
          x1="64"
          y1={y + 3}
          x2="220"
          y2={y + 3}
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="0.75"
        />
      </g>
    ))}

    {/* PO match badge */}
    <rect
      x="66"
      y="176"
      width="152"
      height="11"
      rx="3"
      fill="rgba(46,200,120,0.14)"
      stroke="rgba(46,200,120,0.35)"
      strokeWidth="0.9"
    />
    <text
      x="142"
      y="183.5"
      textAnchor="middle"
      fontSize="6"
      fontWeight="700"
      fill="rgba(46,200,120,0.9)"
    >
      ✓ PO-2026-0041 MATCHED — READY TO POST
    </text>
  </svg>
);
