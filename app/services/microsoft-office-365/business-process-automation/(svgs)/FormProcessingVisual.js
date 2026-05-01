export const FormProcessingVisual = () => (
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
    {/* ── Stacked input forms (fan effect) ── */}
    {/* Shadow copies */}
    <rect
      x="26"
      y="22"
      width="66"
      height="86"
      rx="4"
      fill="rgba(255,255,255,0.03)"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="1"
      transform="rotate(-7 59 65)"
    />
    <rect
      x="22"
      y="18"
      width="66"
      height="86"
      rx="4"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.11)"
      strokeWidth="1"
      transform="rotate(-3 55 61)"
    />
    {/* Front form */}
    <rect
      x="14"
      y="14"
      width="68"
      height="88"
      rx="5"
      fill="rgba(255,255,255,0.07)"
      stroke="rgba(255,255,255,0.22)"
      strokeWidth="1.2"
    />

    {/* Form content */}
    <rect
      x="22"
      y="24"
      width="52"
      height="4"
      rx="2"
      fill="rgba(255,255,255,0.4)"
    />
    <rect
      x="22"
      y="32"
      width="38"
      height="2.5"
      rx="1.25"
      fill="rgba(255,255,255,0.15)"
    />

    {/* Checkbox rows */}
    {[40, 48, 56, 64].map((y) => (
      <g key={y}>
        <rect
          x="22"
          y={y}
          width="7"
          height="7"
          rx="2"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1"
          fill="none"
        />
        <rect
          x="33"
          y={y + 2}
          width="33"
          height="3"
          rx="1.5"
          fill="rgba(255,255,255,0.1)"
        />
      </g>
    ))}

    {/* Signature line */}
    <line
      x1="22"
      y1="82"
      x2="74"
      y2="82"
      stroke="rgba(255,255,255,0.18)"
      strokeWidth="0.8"
      strokeDasharray="4 3"
    />
    <text x="22" y="90" fontSize="5.5" fill="rgba(255,255,255,0.25)">
      Signature / date
    </text>

    {/* Form type label */}
    <rect
      x="22"
      y="94"
      width="52"
      height="4"
      rx="1"
      fill="rgba(4,105,153,0.3)"
    />

    {/* ── Arrow to AI model ── */}
    <path
      d="M84 58 L108 58"
      stroke="rgba(4,105,153,0.65)"
      strokeWidth="1.5"
      strokeDasharray="3 2.5"
    />
    <path
      d="M104 54 L110 58 L104 62"
      stroke="rgba(4,105,153,0.9)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* ── Custom AI model diamond ── */}
    {/* Diamond shape */}
    <polygon
      points="140,32 164,58 140,84 116,58"
      fill="rgba(4,105,153,0.15)"
      stroke="rgba(4,105,153,0.55)"
      strokeWidth="1.2"
    />
    <text
      x="140"
      y="53"
      textAnchor="middle"
      fontSize="6"
      fontWeight="800"
      letterSpacing="0.8"
      fill="rgba(4,105,153,0.9)"
    >
      CUSTOM
    </text>
    <text
      x="140"
      y="62"
      textAnchor="middle"
      fontSize="6"
      fontWeight="800"
      letterSpacing="0.8"
      fill="rgba(4,105,153,0.9)"
    >
      AI MODEL
    </text>

    {/* Accuracy arc indicator */}
    <circle
      cx="140"
      cy="58"
      r="28"
      stroke="rgba(4,105,153,0.12)"
      strokeWidth="1"
      fill="none"
    />

    {/* ── Three output channels ── */}
    {/* Left channel — SharePoint */}
    <path
      d="M116 58 L76 58 L76 120"
      stroke="rgba(4,105,153,0.5)"
      strokeWidth="1.2"
      fill="none"
      strokeDasharray="3 2.5"
    />
    <path
      d="M72 116 L76 122 L80 116"
      stroke="rgba(4,105,153,0.8)"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="44"
      y="122"
      width="64"
      height="30"
      rx="4"
      fill="rgba(4,105,153,0.16)"
      stroke="rgba(4,105,153,0.35)"
      strokeWidth="1"
    />
    <text
      x="76"
      y="135"
      textAnchor="middle"
      fontSize="6.5"
      fontWeight="700"
      fill="rgba(255,255,255,0.78)"
    >
      SharePoint
    </text>
    <rect
      x="52"
      y="138"
      width="48"
      height="2.5"
      rx="1.25"
      fill="rgba(255,255,255,0.2)"
    />
    <rect
      x="56"
      y="143"
      width="38"
      height="2.5"
      rx="1.25"
      fill="rgba(255,255,255,0.12)"
    />

    {/* Centre channel — Dataverse */}
    <path
      d="M140 84 L140 122"
      stroke="rgba(4,105,153,0.5)"
      strokeWidth="1.2"
      fill="none"
      strokeDasharray="3 2.5"
    />
    <path
      d="M136 118 L140 124 L144 118"
      stroke="rgba(4,105,153,0.8)"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="108"
      y="124"
      width="64"
      height="30"
      rx="4"
      fill="rgba(4,105,153,0.24)"
      stroke="rgba(4,105,153,0.45)"
      strokeWidth="1"
    />
    <text
      x="140"
      y="137"
      textAnchor="middle"
      fontSize="6.5"
      fontWeight="700"
      fill="rgba(255,255,255,0.85)"
    >
      Dataverse
    </text>
    <rect
      x="116"
      y="140"
      width="48"
      height="2.5"
      rx="1.25"
      fill="rgba(255,255,255,0.28)"
    />
    <rect
      x="120"
      y="145"
      width="38"
      height="2.5"
      rx="1.25"
      fill="rgba(255,255,255,0.16)"
    />

    {/* Right channel — Dynamics / ERP */}
    <path
      d="M164 58 L204 58 L204 120"
      stroke="rgba(4,105,153,0.5)"
      strokeWidth="1.2"
      fill="none"
      strokeDasharray="3 2.5"
    />
    <path
      d="M200 116 L204 122 L208 116"
      stroke="rgba(4,105,153,0.8)"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="172"
      y="122"
      width="64"
      height="30"
      rx="4"
      fill="rgba(4,105,153,0.12)"
      stroke="rgba(4,105,153,0.28)"
      strokeWidth="1"
    />
    <text
      x="204"
      y="135"
      textAnchor="middle"
      fontSize="6.5"
      fontWeight="700"
      fill="rgba(255,255,255,0.72)"
    >
      Dynamics 365
    </text>
    <rect
      x="180"
      y="138"
      width="48"
      height="2.5"
      rx="1.25"
      fill="rgba(255,255,255,0.16)"
    />
    <rect
      x="184"
      y="143"
      width="36"
      height="2.5"
      rx="1.25"
      fill="rgba(255,255,255,0.1)"
    />

    {/* ── Accuracy progress strip ── */}
    <rect
      x="14"
      y="162"
      width="232"
      height="24"
      rx="4"
      fill="rgba(255,255,255,0.03)"
      stroke="rgba(255,255,255,0.07)"
      strokeWidth="1"
    />
    <text
      x="130"
      y="172"
      textAnchor="middle"
      fontSize="5.5"
      fill="rgba(255,255,255,0.3)"
      fontWeight="500"
      letterSpacing="0.5"
    >
      MODEL ACCURACY IMPROVES WITH EACH DOCUMENT PROCESSED
    </text>
    <rect
      x="22"
      y="176"
      width="212"
      height="3"
      rx="1.5"
      fill="rgba(255,255,255,0.07)"
    />
    <rect
      x="22"
      y="176"
      width="180"
      height="3"
      rx="1.5"
      fill="rgba(4,105,153,0.65)"
    />
    <text
      x="206"
      y="179.5"
      fontSize="6"
      fill="rgba(4,105,153,0.85)"
      fontWeight="700"
    >
      85%
    </text>
  </svg>
);
