export const LogicAppsVisual = () => (
  <svg
    viewBox="0 0 220 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <style>{`
      @keyframes rdgStepLight { 0%,100%{opacity:.3} 50%{opacity:1} }
      .rdgS1{animation:rdgStepLight 3s ease-in-out infinite}
      .rdgS2{animation:rdgStepLight 3s ease-in-out infinite;animation-delay:.75s}
      .rdgS3{animation:rdgStepLight 3s ease-in-out infinite;animation-delay:1.5s}
      .rdgS4{animation:rdgStepLight 3s ease-in-out infinite;animation-delay:2.25s}
    `}</style>
    {[
      { y: 8, label: "Trigger", sub: "Field form submit", cls: "rdgS1" },
      { y: 50, label: "Transform", sub: "Map & validate", cls: "rdgS2" },
      { y: 92, label: "Route", sub: "Logic branch", cls: "rdgS3" },
      { y: 134, label: "Write", sub: "ERP / Dataverse", cls: "rdgS4" },
    ].map(({ y, label, sub, cls }) => (
      <g key={label} className={cls}>
        <rect
          x="58"
          y={y}
          width="106"
          height="30"
          rx="5"
          fill="#18232e"
          stroke="rgba(4,105,153,.4)"
          strokeWidth="1.2"
        />
        <rect
          x="58"
          y={y}
          width="6"
          height="30"
          rx="3"
          fill="rgba(4,105,153,.6)"
        />
        <text
          x="73"
          y={y + 12}
          fill="rgba(255,255,255,.8)"
          fontSize="8"
          fontWeight="800"
          letterSpacing=".3"
        >
          {label}
        </text>
        <text
          x="73"
          y={y + 23}
          fill="rgba(255,255,255,.38)"
          fontSize="7"
          fontWeight="500"
        >
          {sub}
        </text>
      </g>
    ))}
    {[38, 80, 122].map((y) => (
      <line
        key={y}
        x1="111"
        y1={y}
        x2="111"
        y2={y + 12}
        stroke="rgba(4,105,153,.4)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    ))}
    <rect
      x="4"
      y="68"
      width="50"
      height="20"
      rx="4"
      fill="rgba(4,105,153,.08)"
      stroke="rgba(4,105,153,.3)"
      strokeWidth="1"
    />
    <text
      x="29"
      y="77"
      textAnchor="middle"
      fill="rgba(255,255,255,.4)"
      fontSize="6.5"
      fontWeight="700"
    >
      On-premises
    </text>
    <text
      x="29"
      y="85"
      textAnchor="middle"
      fill="rgba(4,105,153,.7)"
      fontSize="6.5"
      fontWeight="700"
    >
      gateway
    </text>
    <line
      x1="54"
      y1="78"
      x2="58"
      y2="78"
      stroke="rgba(4,105,153,.4)"
      strokeWidth="1"
      strokeDasharray="2 2"
    />
  </svg>
);
