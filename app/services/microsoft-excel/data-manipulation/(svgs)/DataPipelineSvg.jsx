// /app/services/microsoft-excel/data-manipulation/(svgs)/DataPipelineSvg.jsx

const DataPipelineSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 820"
    width="120"
    height="820"
    aria-hidden="true"
    fontFamily="aptos"
    focusable="false"
    style={{ display: "block" }}
  >
    <defs>
      {/* Vertical gradient — fades in and out at top/bottom */}
      <linearGradient id="pipeGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#046999" stopOpacity="0" />
        <stop offset="8%" stopColor="#046999" stopOpacity="0.6" />
        <stop offset="92%" stopColor="#046999" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#046999" stopOpacity="0" />
      </linearGradient>

      {/* Animated travelling dash — the "data flow" */}
      <linearGradient id="flowGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#7ec8e3" stopOpacity="0" />
        <stop offset="45%" stopColor="#7ec8e3" stopOpacity="0.9" />
        <stop offset="55%" stopColor="#7ec8e3" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#7ec8e3" stopOpacity="0" />
      </linearGradient>

      {/* Glow filter on node circles */}
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* Clip path so travelling highlight stays inside the pipe */}
      <clipPath id="pipeClip">
        <rect x="55" y="0" width="10" height="820" rx="5" />
      </clipPath>
    </defs>

    {/* ── Main pipe spine ── */}
    <rect x="57" y="0" width="6" height="820" rx="3" fill="url(#pipeGrad)" />

    {/* ── Travelling highlight — animated data packet ── */}
    <rect
      x="55"
      y="0"
      width="10"
      height="160"
      rx="5"
      fill="url(#flowGrad)"
      clipPath="url(#pipeClip)"
      opacity="0.55"
    >
      <animateTransform
        attributeName="transform"
        type="translate"
        from="0 -160"
        to="0 820"
        dur="3.2s"
        repeatCount="indefinite"
        calcMode="linear"
      />
    </rect>

    {/* Second packet — offset so there's always one in view */}
    <rect
      x="55"
      y="0"
      width="10"
      height="160"
      rx="5"
      fill="url(#flowGrad)"
      clipPath="url(#pipeClip)"
      opacity="0.35"
    >
      <animateTransform
        attributeName="transform"
        type="translate"
        from="0 -160"
        to="0 820"
        dur="3.2s"
        begin="1.6s"
        repeatCount="indefinite"
        calcMode="linear"
      />
    </rect>

    {/* ── Node 1 — Source data (top) ── */}
    <circle
      cx="60"
      cy="80"
      r="9"
      fill="#046999"
      filter="url(#glow)"
      opacity="0.85"
    />
    <circle cx="60" cy="80" r="5" fill="#7ec8e3" opacity="0.9" />
    {/* Horizontal tick mark left */}
    <line
      x1="20"
      y1="80"
      x2="52"
      y2="80"
      stroke="#046999"
      strokeWidth="1"
      strokeOpacity="0.35"
      strokeDasharray="3 3"
    />
    {/* Label */}
    <text
      x="16"
      y="75"
      textAnchor="end"
      fontSize="8"
      fill="#046999"
      fillOpacity="0.65"
      fontFamily="system-ui, sans-serif"
      fontWeight="700"
      letterSpacing="1.5"
    >
      SOURCE
    </text>
    <text
      x="16"
      y="86"
      textAnchor="end"
      fontSize="7.5"
      fill="#046999"
      fillOpacity="0.45"
      fontFamily="system-ui, sans-serif"
    >
      SQL · API · Files
    </text>

    {/* ── Node 2 — Extract ── */}
    <circle
      cx="60"
      cy="200"
      r="9"
      fill="#046999"
      filter="url(#glow)"
      opacity="0.85"
    />
    <circle cx="60" cy="200" r="5" fill="#7ec8e3" opacity="0.9" />
    <line
      x1="68"
      y1="200"
      x2="100"
      y2="200"
      stroke="#046999"
      strokeWidth="1"
      strokeOpacity="0.35"
      strokeDasharray="3 3"
    />
    <text
      x="104"
      y="195"
      textAnchor="start"
      fontSize="8"
      fill="#046999"
      fillOpacity="0.65"
      fontFamily="system-ui, sans-serif"
      fontWeight="700"
      letterSpacing="1.5"
    >
      EXTRACT
    </text>
    <text
      x="104"
      y="206"
      textAnchor="start"
      fontSize="7.5"
      fill="#046999"
      fillOpacity="0.45"
      fontFamily="system-ui, sans-serif"
    >
      Power Query
    </text>

    {/* Connector branches to the right — suggest multiple inputs */}
    <path
      d="M68 200 Q90 200 90 185 L90 175"
      stroke="#046999"
      strokeWidth="1"
      strokeOpacity="0.2"
      fill="none"
      strokeDasharray="2 3"
    />
    <path
      d="M68 200 Q90 200 90 215 L90 225"
      stroke="#046999"
      strokeWidth="1"
      strokeOpacity="0.2"
      fill="none"
      strokeDasharray="2 3"
    />
    <circle cx="90" cy="175" r="2.5" fill="#046999" fillOpacity="0.3" />
    <circle cx="90" cy="225" r="2.5" fill="#046999" fillOpacity="0.3" />

    {/* ── Node 3 — Transform ── */}
    {/* Diamond shape for transform step */}
    <polygon
      points="60,305 70,320 60,335 50,320"
      fill="none"
      stroke="#046999"
      strokeWidth="1.5"
      strokeOpacity="0.7"
    />
    <polygon
      points="60,310 67,320 60,330 53,320"
      fill="#046999"
      fillOpacity="0.2"
    />
    <line
      x1="20"
      y1="320"
      x2="50"
      y2="320"
      stroke="#046999"
      strokeWidth="1"
      strokeOpacity="0.35"
      strokeDasharray="3 3"
    />
    <text
      x="16"
      y="315"
      textAnchor="end"
      fontSize="8"
      fill="#046999"
      fillOpacity="0.65"
      fontFamily="system-ui, sans-serif"
      fontWeight="700"
      letterSpacing="1.5"
    >
      TRANSFORM
    </text>
    <text
      x="16"
      y="326"
      textAnchor="end"
      fontSize="7.5"
      fill="#046999"
      fillOpacity="0.45"
      fontFamily="system-ui, sans-serif"
    >
      Clean · Shape · Merge
    </text>

    {/* Pipe reconnects below diamond */}
    <line
      x1="60"
      y1="335"
      x2="60"
      y2="360"
      stroke="#046999"
      strokeWidth="1.5"
      strokeOpacity="0.4"
    />

    {/* ── Node 4 — Validate ── */}
    <circle
      cx="60"
      cy="440"
      r="9"
      fill="#046999"
      filter="url(#glow)"
      opacity="0.85"
    />
    <circle cx="60" cy="440" r="5" fill="#7ec8e3" opacity="0.9" />
    <line
      x1="68"
      y1="440"
      x2="100"
      y2="440"
      stroke="#046999"
      strokeWidth="1"
      strokeOpacity="0.35"
      strokeDasharray="3 3"
    />
    <text
      x="104"
      y="435"
      textAnchor="start"
      fontSize="8"
      fill="#046999"
      fillOpacity="0.65"
      fontFamily="system-ui, sans-serif"
      fontWeight="700"
      letterSpacing="1.5"
    >
      VALIDATE
    </text>
    <text
      x="104"
      y="446"
      textAnchor="start"
      fontSize="7.5"
      fill="#046999"
      fillOpacity="0.45"
      fontFamily="system-ui, sans-serif"
    >
      Checks · Flags
    </text>

    {/* ── Node 5 — Load ── */}
    <circle
      cx="60"
      cy="570"
      r="9"
      fill="#046999"
      filter="url(#glow)"
      opacity="0.85"
    />
    <circle cx="60" cy="570" r="5" fill="#7ec8e3" opacity="0.9" />
    <line
      x1="20"
      y1="570"
      x2="52"
      y2="570"
      stroke="#046999"
      strokeWidth="1"
      strokeOpacity="0.35"
      strokeDasharray="3 3"
    />
    <text
      x="16"
      y="565"
      textAnchor="end"
      fontSize="8"
      fill="#046999"
      fillOpacity="0.65"
      fontFamily="system-ui, sans-serif"
      fontWeight="700"
      letterSpacing="1.5"
    >
      LOAD
    </text>
    <text
      x="16"
      y="576"
      textAnchor="end"
      fontSize="7.5"
      fill="#046999"
      fillOpacity="0.45"
      fontFamily="system-ui, sans-serif"
    >
      Excel · SharePoint
    </text>

    {/* Branch lines fanning out from load node — suggest multiple outputs */}
    <path
      d="M52 570 Q30 570 30 555 L30 540"
      stroke="#046999"
      strokeWidth="1"
      strokeOpacity="0.2"
      fill="none"
      strokeDasharray="2 3"
    />
    <path
      d="M52 570 Q30 570 30 585 L30 600"
      stroke="#046999"
      strokeWidth="1"
      strokeOpacity="0.2"
      fill="none"
      strokeDasharray="2 3"
    />
    <circle cx="30" cy="540" r="2.5" fill="#046999" fillOpacity="0.3" />
    <circle cx="30" cy="600" r="2.5" fill="#046999" fillOpacity="0.3" />

    {/* ── Node 6 — Automate (bottom) ── */}
    <circle
      cx="60"
      cy="710"
      r="9"
      fill="#046999"
      filter="url(#glow)"
      opacity="0.85"
    />
    <circle cx="60" cy="710" r="5" fill="#7ec8e3" opacity="0.9" />
    {/* Outer ring — "scheduled" indicator */}
    <circle
      cx="60"
      cy="710"
      r="14"
      fill="none"
      stroke="#046999"
      strokeWidth="1"
      strokeOpacity="0.3"
      strokeDasharray="4 3"
    />
    <line
      x1="68"
      y1="710"
      x2="100"
      y2="710"
      stroke="#046999"
      strokeWidth="1"
      strokeOpacity="0.35"
      strokeDasharray="3 3"
    />
    <text
      x="104"
      y="705"
      textAnchor="start"
      fontSize="8"
      fill="#046999"
      fillOpacity="0.65"
      fontFamily="system-ui, sans-serif"
      fontWeight="700"
      letterSpacing="1.5"
    >
      AUTOMATE
    </text>
    <text
      x="104"
      y="716"
      textAnchor="start"
      fontSize="7.5"
      fill="#046999"
      fillOpacity="0.45"
      fontFamily="system-ui, sans-serif"
    >
      Scheduled · Always on
    </text>

    {/* ── Subtle horizontal grid lines — suggest data rows ── */}
    {[140, 260, 380, 500, 630].map((y) => (
      <line
        key={y}
        x1="0"
        y1={y}
        x2="120"
        y2={y}
        stroke="#046999"
        strokeWidth="0.5"
        strokeOpacity="0.06"
      />
    ))}
  </svg>
);

export default DataPipelineSvg;
