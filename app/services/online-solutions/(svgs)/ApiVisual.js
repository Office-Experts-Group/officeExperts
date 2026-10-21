export const ApiVisual = () => (
  <svg
    viewBox="0 0 260 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{
      width: "100%",
      height: "auto",
      display: "block",
    }}
  >
    {/* Central hub */}
    <circle
      cx="130"
      cy="90"
      r="24"
      fill="rgba(4,105,153,0.15)"
      stroke="rgba(4,105,153,0.6)"
      strokeWidth="2"
    />
    <circle cx="130" cy="90" r="14" fill="rgba(4,105,153,0.3)" />
    <text
      x="130"
      y="95"
      textAnchor="middle"
      fill="white"
      fontSize="9"
      fontWeight="700"
    >
      API
    </text>
    {/* Satellites */}
    <circle
      cx="40"
      cy="40"
      r="18"
      fill="rgba(255,255,255,0.08)"
      stroke="rgba(255,255,255,0.25)"
      strokeWidth="1.5"
    />
    <text
      x="40"
      y="44"
      textAnchor="middle"
      fill="rgba(255,255,255,0.7)"
      fontSize="7"
      fontWeight="600"
    >
      M365
    </text>
    <circle
      cx="220"
      cy="40"
      r="18"
      fill="rgba(255,255,255,0.08)"
      stroke="rgba(255,255,255,0.25)"
      strokeWidth="1.5"
    />
    <text
      x="220"
      y="44"
      textAnchor="middle"
      fill="rgba(255,255,255,0.7)"
      fontSize="7"
      fontWeight="600"
    >
      CRM
    </text>
    <circle
      cx="40"
      cy="140"
      r="18"
      fill="rgba(255,255,255,0.08)"
      stroke="rgba(255,255,255,0.25)"
      strokeWidth="1.5"
    />
    <text
      x="40"
      y="144"
      textAnchor="middle"
      fill="rgba(255,255,255,0.7)"
      fontSize="7"
      fontWeight="600"
    >
      XERO
    </text>
    <circle
      cx="220"
      cy="140"
      r="18"
      fill="rgba(255,255,255,0.08)"
      stroke="rgba(255,255,255,0.25)"
      strokeWidth="1.5"
    />
    <text
      x="220"
      y="144"
      textAnchor="middle"
      fill="rgba(255,255,255,0.7)"
      fontSize="7"
      fontWeight="600"
    >
      ERP
    </text>
    <circle
      cx="130"
      cy="18"
      r="14"
      fill="rgba(255,255,255,0.08)"
      stroke="rgba(255,255,255,0.2)"
      strokeWidth="1.5"
    />
    <text
      x="130"
      y="22"
      textAnchor="middle"
      fill="rgba(255,255,255,0.7)"
      fontSize="6.5"
      fontWeight="600"
    >
      SHAREPOINT
    </text>
    {/* Connection lines */}
    <path
      d="M56 52 L114 78"
      stroke="rgba(4,105,153,0.6)"
      strokeWidth="1.5"
      strokeDasharray="5 4"
    />
    <path
      d="M204 52 L146 78"
      stroke="rgba(4,105,153,0.6)"
      strokeWidth="1.5"
      strokeDasharray="5 4"
    />
    <path
      d="M56 130 L114 102"
      stroke="rgba(4,105,153,0.6)"
      strokeWidth="1.5"
      strokeDasharray="5 4"
    />
    <path
      d="M204 130 L146 102"
      stroke="rgba(4,105,153,0.6)"
      strokeWidth="1.5"
      strokeDasharray="5 4"
    />
    <path
      d="M130 32 L130 66"
      stroke="rgba(4,105,153,0.6)"
      strokeWidth="1.5"
      strokeDasharray="5 4"
    />
    {/* Data packets */}
    <circle cx="85" cy="65" r="4" fill="rgba(4,105,153,0.9)" />
    <circle cx="175" cy="65" r="4" fill="rgba(4,105,153,0.9)" />
    <circle cx="85" cy="115" r="4" fill="rgba(46,200,120,0.9)" />
    <circle cx="175" cy="115" r="4" fill="rgba(46,200,120,0.9)" />
  </svg>
);
