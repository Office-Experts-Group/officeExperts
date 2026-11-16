// /app/blog/xero-to-power-bi/(svgs)/FlowSvg.jsx
// Map diagram: accounting files -> OData feed layer -> Power BI model and report.
// Tokens: $accent #046999, $accent-light #e8f4fa, $text-primary #0d1b2a,
// $text-secondary #4a5568, $line-strong #d4d6d9, $light-bg #f7f8f9.

const FlowSvg = () => (
  <svg
    viewBox="0 0 1000 380"
    role="img"
    aria-labelledby="xpb-flow-title xpb-flow-desc"
    fontFamily="aptos"
  >
    <title id="xpb-flow-title">
      How accounting data reaches a Power BI report
    </title>
    <desc id="xpb-flow-desc">
      Xero and MYOB files connect, using OAuth and TLS, to an OData feed layer
      with endpoints for invoices, contacts, accounts and payroll. Power BI then
      reads the feed through its OData Feed connector into a star schema data
      model that drives a dashboard, refreshed on a schedule.
    </desc>

    <defs>
      <marker
        id="xpb-flow-arrow"
        markerUnits="userSpaceOnUse"
        markerWidth="12"
        markerHeight="12"
        refX="10"
        refY="6"
        orient="auto"
      >
        <path d="M1 1 11 6 1 11Z" fill="#046999" />
      </marker>
    </defs>

    {/* ── Stage 1: accounting files ── */}
    <rect
      x="20"
      y="40"
      width="200"
      height="300"
      rx="16"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <text x="40" y="70" fontSize="16" fontWeight="700" fill="#0d1b2a">
      Accounting
    </text>

    <g>
      <rect
        x="36"
        y="90"
        width="168"
        height="110"
        rx="12"
        fill="#f7f8f9"
        stroke="#d4d6d9"
      />
      <rect
        x="50"
        y="106"
        width="34"
        height="38"
        rx="5"
        fill="#e8f4fa"
        stroke="#046999"
        strokeWidth="1.5"
      />
      <path
        d="M57 118h20M57 126h20M57 134h12"
        stroke="#046999"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text x="96" y="124" fontSize="16" fontWeight="700" fill="#0d1b2a">
        Xero file
      </text>
      <text x="96" y="144" fontSize="14" fill="#4a5568">
        Company A
      </text>
      <rect x="50" y="166" width="140" height="8" rx="4" fill="#d4d6d9" />
      <rect
        x="50"
        y="166"
        width="92"
        height="8"
        rx="4"
        fill="#046999"
        fillOpacity="0.55"
      />
    </g>
    <g>
      <rect
        x="36"
        y="214"
        width="168"
        height="110"
        rx="12"
        fill="#f7f8f9"
        stroke="#d4d6d9"
      />
      <rect
        x="50"
        y="230"
        width="34"
        height="38"
        rx="5"
        fill="#e8f4fa"
        stroke="#046999"
        strokeWidth="1.5"
      />
      <path
        d="M57 242h20M57 250h20M57 258h12"
        stroke="#046999"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text x="96" y="248" fontSize="16" fontWeight="700" fill="#0d1b2a">
        MYOB file
      </text>
      <text x="96" y="268" fontSize="14" fill="#4a5568">
        Company B
      </text>
      <rect x="50" y="290" width="140" height="8" rx="4" fill="#d4d6d9" />
      <rect
        x="50"
        y="290"
        width="64"
        height="8"
        rx="4"
        fill="#046999"
        fillOpacity="0.55"
      />
    </g>

    {/* arrow 1 */}
    <path
      d="M224 190H284"
      stroke="#046999"
      strokeWidth="2.5"
      markerEnd="url(#xpb-flow-arrow)"
    />
    <text x="255" y="160" textAnchor="middle" fontSize="14" fill="#4a5568">
      OAuth
    </text>
    <text x="255" y="178" textAnchor="middle" fontSize="14" fill="#4a5568">
      + TLS
    </text>

    {/* ── Stage 2: OData feed layer ── */}
    <rect
      x="290"
      y="40"
      width="240"
      height="300"
      rx="16"
      fill="#e8f4fa"
      stroke="#046999"
    />
    <text x="310" y="70" fontSize="16" fontWeight="700" fill="#0d1b2a">
      OData feed layer
    </text>
    <text x="310" y="92" fontSize="14" fill="#4a5568">
      OdataLink
    </text>

    {[
      { x: 310, y: 108, t: "Invoices" },
      { x: 420, y: 108, t: "Contacts" },
      { x: 310, y: 148, t: "Accounts" },
      { x: 420, y: 148, t: "Payroll" },
    ].map((c) => (
      <g key={c.t}>
        <rect
          x={c.x}
          y={c.y}
          width="100"
          height="32"
          rx="16"
          fill="#ffffff"
          stroke="#046999"
          strokeOpacity="0.5"
        />
        <text
          x={c.x + 50}
          y={c.y + 21}
          textAnchor="middle"
          fontSize="14"
          fontWeight="600"
          fill="#0d1b2a"
        >
          {c.t}
        </text>
      </g>
    ))}

    <rect
      x="310"
      y="202"
      width="200"
      height="52"
      rx="10"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <path
      d="M326 228h14M333 221v14"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle
      cx="333"
      cy="228"
      r="11"
      fill="none"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <text x="356" y="233" fontSize="14" fontWeight="600" fill="#0d1b2a">
      Consolidates files
    </text>

    <rect
      x="310"
      y="268"
      width="200"
      height="56"
      rx="10"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <path
      d="M333 281l-9 4v6c0 5 4 8 9 10 5-2 9-5 9-10v-6l-9-4Z"
      fill="none"
      stroke="#046999"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <text x="356" y="301" fontSize="14" fontWeight="600" fill="#0d1b2a">
      Role-based access
    </text>

    {/* arrow 2 */}
    <path
      d="M534 190H594"
      stroke="#046999"
      strokeWidth="2.5"
      markerEnd="url(#xpb-flow-arrow)"
    />
    <text x="564" y="160" textAnchor="middle" fontSize="14" fill="#4a5568">
      OData
    </text>
    <text x="564" y="178" textAnchor="middle" fontSize="14" fill="#4a5568">
      feed
    </text>

    {/* ── Stage 3: Power BI ── */}
    <rect
      x="600"
      y="40"
      width="380"
      height="300"
      rx="16"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <text x="620" y="70" fontSize="16" fontWeight="700" fill="#0d1b2a">
      Power BI
    </text>

    {/* data model panel */}
    <rect
      x="616"
      y="90"
      width="160"
      height="235"
      rx="12"
      fill="#f7f8f9"
      stroke="#d4d6d9"
    />
    <text x="632" y="114" fontSize="14" fontWeight="600" fill="#4a5568">
      Data model
    </text>
    <path
      d="M696 158V178M676 222 656 246M716 222 736 246"
      stroke="#046999"
      strokeWidth="1.8"
      fill="none"
    />
    <rect
      x="666"
      y="128"
      width="60"
      height="30"
      rx="6"
      fill="#e8f4fa"
      stroke="#046999"
    />
    <text x="696" y="148" textAnchor="middle" fontSize="14" fill="#0d1b2a">
      Lookup
    </text>
    <rect x="656" y="178" width="80" height="44" rx="8" fill="#046999" />
    <text
      x="696"
      y="205"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
    >
      Invoices
    </text>
    <rect
      x="626"
      y="246"
      width="60"
      height="30"
      rx="6"
      fill="#e8f4fa"
      stroke="#046999"
    />
    <text x="656" y="266" textAnchor="middle" fontSize="14" fill="#0d1b2a">
      Lookup
    </text>
    <rect
      x="706"
      y="246"
      width="60"
      height="30"
      rx="6"
      fill="#e8f4fa"
      stroke="#046999"
    />
    <text x="736" y="266" textAnchor="middle" fontSize="14" fill="#0d1b2a">
      Lookup
    </text>
    <text x="696" y="306" textAnchor="middle" fontSize="14" fill="#4a5568">
      Star schema
    </text>

    {/* arrow inside Power BI */}
    <path
      d="M778 208H790"
      stroke="#046999"
      strokeWidth="2.5"
      markerEnd="url(#xpb-flow-arrow)"
    />

    {/* dashboard panel */}
    <rect
      x="796"
      y="90"
      width="168"
      height="235"
      rx="12"
      fill="#f7f8f9"
      stroke="#d4d6d9"
    />
    <text x="812" y="114" fontSize="14" fontWeight="600" fill="#4a5568">
      Dashboard
    </text>
    <rect
      x="812"
      y="126"
      width="64"
      height="38"
      rx="7"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <rect x="822" y="136" width="26" height="5" rx="2.5" fill="#9a9da1" />
    <rect x="822" y="148" width="42" height="9" rx="3" fill="#046999" />
    <rect
      x="884"
      y="126"
      width="64"
      height="38"
      rx="7"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <rect x="894" y="136" width="26" height="5" rx="2.5" fill="#9a9da1" />
    <rect x="894" y="148" width="34" height="9" rx="3" fill="#0d1b2a" />
    <path d="M814 270H948" stroke="#d4d6d9" strokeWidth="1.5" />
    <rect
      x="820"
      y="238"
      width="20"
      height="32"
      rx="3"
      fill="#046999"
      fillOpacity="0.55"
    />
    <rect
      x="850"
      y="222"
      width="20"
      height="48"
      rx="3"
      fill="#046999"
      fillOpacity="0.55"
    />
    <rect
      x="880"
      y="230"
      width="20"
      height="40"
      rx="3"
      fill="#046999"
      fillOpacity="0.55"
    />
    <rect x="910" y="200" width="20" height="70" rx="3" fill="#046999" />
    <text x="880" y="306" textAnchor="middle" fontSize="14" fill="#4a5568">
      Scheduled refresh
    </text>
  </svg>
);

export default FlowSvg;
