export const ApiVisual = () => (
  <svg
    viewBox="0 0 220 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <style>{`
      @keyframes rdgFlowR {
        0%   { offset-distance:0%;  opacity:0 }
        10%  { opacity:.9 }
        90%  { opacity:.9 }
        100% { offset-distance:100%; opacity:0 }
      }
      @keyframes rdgFlowL {
        0%   { offset-distance:100%; opacity:0 }
        10%  { opacity:.7 }
        90%  { opacity:.7 }
        100% { offset-distance:0%;  opacity:0 }
      }
      .rdgFp1{offset-path:path("M 52 55 L 170 55");animation:rdgFlowR 2s ease-in-out infinite}
      .rdgFp2{offset-path:path("M 52 55 L 170 55");animation:rdgFlowR 2s ease-in-out infinite;animation-delay:-1s}
      .rdgFp3{offset-path:path("M 170 80 L 52 80");animation:rdgFlowL 2.2s ease-in-out infinite;animation-delay:.3s}
      .rdgFp4{offset-path:path("M 52 105 L 170 105");animation:rdgFlowR 2.4s ease-in-out infinite;animation-delay:.6s}
    `}</style>
    <rect
      x="8"
      y="38"
      width="44"
      height="84"
      rx="5"
      fill="#18232e"
      stroke="rgba(4,105,153,.4)"
      strokeWidth="1"
    />
    <text
      x="30"
      y="62"
      textAnchor="middle"
      fill="rgba(4,105,153,.8)"
      fontSize="7"
      fontWeight="800"
      letterSpacing=".5"
    >
      M365
    </text>
    <rect
      x="14"
      y="68"
      width="32"
      height="4"
      rx="2"
      fill="rgba(4,105,153,.3)"
    />
    <rect
      x="14"
      y="76"
      width="24"
      height="4"
      rx="2"
      fill="rgba(4,105,153,.2)"
    />
    <rect
      x="14"
      y="84"
      width="28"
      height="4"
      rx="2"
      fill="rgba(4,105,153,.2)"
    />
    <rect
      x="14"
      y="92"
      width="20"
      height="4"
      rx="2"
      fill="rgba(4,105,153,.15)"
    />
    <line
      x1="52"
      y1="55"
      x2="170"
      y2="55"
      stroke="rgba(4,105,153,.2)"
      strokeWidth="1"
      strokeDasharray="3 3"
    />
    <line
      x1="52"
      y1="80"
      x2="170"
      y2="80"
      stroke="rgba(4,105,153,.2)"
      strokeWidth="1"
      strokeDasharray="3 3"
    />
    <line
      x1="52"
      y1="105"
      x2="170"
      y2="105"
      stroke="rgba(4,105,153,.2)"
      strokeWidth="1"
      strokeDasharray="3 3"
    />
    <circle className="rdgFp1" r="3.5" fill="#046999" />
    <circle className="rdgFp2" r="2.5" fill="rgba(4,105,153,.6)" />
    <circle className="rdgFp3" r="3" fill="rgba(46,200,120,.8)" />
    <circle className="rdgFp4" r="3.5" fill="#046999" />
    {[
      { y: 44, label: "Xero" },
      { y: 70, label: "MYOB" },
      { y: 96, label: "REST API" },
    ].map(({ y, label }) => (
      <g key={label}>
        <rect
          x="170"
          y={y}
          width="44"
          height="22"
          rx="4"
          fill="#18232e"
          stroke="rgba(4,105,153,.3)"
          strokeWidth="1"
        />
        <text
          x="192"
          y={y + 14}
          textAnchor="middle"
          fill="rgba(255,255,255,.55)"
          fontSize="7"
          fontWeight="700"
          letterSpacing=".5"
        >
          {label}
        </text>
      </g>
    ))}
    <rect
      x="90"
      y="130"
      width="42"
      height="18"
      rx="4"
      fill="rgba(4,105,153,.15)"
      stroke="rgba(4,105,153,.4)"
      strokeWidth="1"
    />
    <text
      x="111"
      y="143"
      textAnchor="middle"
      fill="rgba(4,105,153,.9)"
      fontSize="7.5"
      fontWeight="800"
      letterSpacing="1"
    >
      REST · JSON
    </text>
  </svg>
);
