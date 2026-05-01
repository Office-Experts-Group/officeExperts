export const DataVisual = () => (
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
    {/* Chart background */}
    <rect
      x="15"
      y="15"
      width="230"
      height="150"
      rx="8"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.1)"
      strokeWidth="1.5"
    />
    {/* Y axis lines */}
    <line
      x1="40"
      y1="40"
      x2="230"
      y2="40"
      stroke="rgba(255,255,255,0.06)"
      strokeWidth="1"
    />
    <line
      x1="40"
      y1="65"
      x2="230"
      y2="65"
      stroke="rgba(255,255,255,0.06)"
      strokeWidth="1"
    />
    <line
      x1="40"
      y1="90"
      x2="230"
      y2="90"
      stroke="rgba(255,255,255,0.06)"
      strokeWidth="1"
    />
    <line
      x1="40"
      y1="115"
      x2="230"
      y2="115"
      stroke="rgba(255,255,255,0.06)"
      strokeWidth="1"
    />
    {/* Area chart fill */}
    <path
      d="M40 130 L80 105 L120 95 L160 70 L200 50 L230 38 L230 145 L40 145Z"
      fill="rgba(4,105,153,0.2)"
    />
    {/* Line */}
    <path
      d="M40 130 L80 105 L120 95 L160 70 L200 50 L230 38"
      stroke="rgba(4,105,153,0.9)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Data points */}
    <circle cx="40" cy="130" r="4" fill="#046999" />
    <circle cx="80" cy="105" r="4" fill="#046999" />
    <circle cx="120" cy="95" r="4" fill="#046999" />
    <circle cx="160" cy="70" r="4" fill="#046999" />
    <circle cx="200" cy="50" r="4" fill="#046999" />
    <circle
      cx="230"
      cy="38"
      r="5"
      fill="white"
      stroke="#046999"
      strokeWidth="2"
    />
    {/* Tooltip */}
    <rect
      x="195"
      y="22"
      width="60"
      height="22"
      rx="4"
      fill="rgba(4,105,153,0.9)"
    />
    <text
      x="225"
      y="33"
      textAnchor="middle"
      fill="white"
      fontSize="7"
      fontWeight="700"
    >
      +34.2%
    </text>
    <text
      x="225"
      y="41"
      textAnchor="middle"
      fill="rgba(255,255,255,0.7)"
      fontSize="6"
    >
      vs last yr
    </text>
    {/* KPI pills bottom */}
    <rect
      x="22"
      y="152"
      width="55"
      height="10"
      rx="5"
      fill="rgba(46,200,120,0.3)"
    />
    <text
      x="49"
      y="160"
      textAnchor="middle"
      fill="rgba(255,255,255,0.8)"
      fontSize="6.5"
    >
      Live Data
    </text>
    <rect
      x="85"
      y="152"
      width="55"
      height="10"
      rx="5"
      fill="rgba(4,105,153,0.4)"
    />
    <text
      x="112"
      y="160"
      textAnchor="middle"
      fill="rgba(255,255,255,0.8)"
      fontSize="6.5"
    >
      Auto-refresh
    </text>
    <rect
      x="148"
      y="152"
      width="55"
      height="10"
      rx="5"
      fill="rgba(255,255,255,0.1)"
    />
    <text
      x="175"
      y="160"
      textAnchor="middle"
      fill="rgba(255,255,255,0.8)"
      fontSize="6.5"
    >
      Power BI
    </text>
  </svg>
);
