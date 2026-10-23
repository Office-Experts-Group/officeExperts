// app/accessibility/(svgs)/TemplateGovernanceSVG.jsx
const TemplateGovernanceSVG = () => (
  <svg
    viewBox="0 0 450 300"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    fill="none"
    style={{ overflow: "visible" }}
  >
    <defs>
      <linearGradient id="tg-pageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#e8f4fa" />
      </linearGradient>
      <filter id="tg-shadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow
          dx="0"
          dy="6"
          stdDeviation="10"
          floodColor="#046999"
          floodOpacity="0.16"
        />
      </filter>
    </defs>

    {/* Background accent */}
    <circle cx="70" cy="250" r="90" fill="#046999" opacity="0.05" />

    {/* ── Master template, top centre ── */}
    <rect
      x="177"
      y="14"
      width="96"
      height="118"
      rx="6"
      fill="url(#tg-pageGrad)"
      stroke="#046999"
      strokeWidth="1.6"
      filter="url(#tg-shadow)"
    />
    {/* Lock badge marking it as the controlled master */}
    <rect x="195" y="30" width="60" height="16" rx="3" fill="#046999" />
    <text
      x="225"
      y="41.5"
      textAnchor="middle"
      fill="#fff"
      fontSize="7.5"
      fontWeight="700"
    >
      MASTER
    </text>
    <rect
      x="192"
      y="56"
      width="66"
      height="6"
      rx="1.5"
      fill="rgba(13,27,42,0.14)"
    />
    <rect
      x="192"
      y="67"
      width="50"
      height="6"
      rx="1.5"
      fill="rgba(13,27,42,0.14)"
    />
    <rect
      x="192"
      y="84"
      width="66"
      height="6"
      rx="1.5"
      fill="rgba(13,27,42,0.1)"
    />
    <rect
      x="192"
      y="95"
      width="66"
      height="6"
      rx="1.5"
      fill="rgba(13,27,42,0.1)"
    />
    <rect
      x="192"
      y="106"
      width="44"
      height="6"
      rx="1.5"
      fill="rgba(13,27,42,0.1)"
    />
    {/* Small padlock icon, top-right of the master card */}
    <rect
      x="248"
      y="18"
      width="12"
      height="9"
      rx="1.5"
      stroke="#046999"
      strokeWidth="1.2"
      fill="#fff"
    />
    <path d="M250.5 18v-3a3 3 0 0 1 6 0v3" stroke="#046999" strokeWidth="1.2" />

    {/* ── Branch lines from master down to three sub-templates ── */}
    <path
      d="M225 132 V150 M225 150 H90 M225 150 H360 M225 150 V150"
      stroke="#046999"
      strokeWidth="1.4"
      strokeDasharray="4 3"
      opacity="0.45"
    />
    <path
      d="M90 150 V172"
      stroke="#046999"
      strokeWidth="1.4"
      strokeDasharray="4 3"
      opacity="0.45"
    />
    <path
      d="M225 150 V172"
      stroke="#046999"
      strokeWidth="1.4"
      strokeDasharray="4 3"
      opacity="0.45"
    />
    <path
      d="M360 150 V172"
      stroke="#046999"
      strokeWidth="1.4"
      strokeDasharray="4 3"
      opacity="0.45"
    />

    {/* ── Three governed sub-templates ── */}
    {[
      { x: 50, label: "Report" },
      { x: 185, label: "Letter" },
      { x: 320, label: "Form" },
    ].map(({ x, label }) => (
      <g key={label}>
        <rect
          x={x}
          y="172"
          width="80"
          height="96"
          rx="5"
          fill="url(#tg-pageGrad)"
          stroke="#046999"
          strokeWidth="1.3"
          opacity="0.9"
        />
        <rect
          x={x + 12}
          y="184"
          width="56"
          height="10"
          rx="2"
          fill="#046999"
          opacity="0.7"
        />
        <text
          x={x + 40}
          y="192"
          textAnchor="middle"
          fill="#fff"
          fontSize="6.5"
          fontWeight="700"
        >
          {label}
        </text>
        <rect
          x={x + 12}
          y="202"
          width="56"
          height="5"
          rx="1.2"
          fill="rgba(13,27,42,0.12)"
        />
        <rect
          x={x + 12}
          y="212"
          width="44"
          height="5"
          rx="1.2"
          fill="rgba(13,27,42,0.12)"
        />
        <rect
          x={x + 12}
          y="228"
          width="56"
          height="5"
          rx="1.2"
          fill="rgba(13,27,42,0.1)"
        />
        <rect
          x={x + 12}
          y="238"
          width="36"
          height="5"
          rx="1.2"
          fill="rgba(13,27,42,0.1)"
        />
        {/* small "governed" tick */}
        <circle cx={x + 68} cy="256" r="7" fill="#046999" opacity="0.85" />
        <path
          d={`M${x + 65} 256l2 2.5 4-5`}
          stroke="#fff"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    ))}

    {/* ── Small user dots beneath, representing the "hundreds of users" distribution ── */}
    <path d="M40 286h370" stroke="rgba(4,105,153,0.15)" strokeWidth="1.2" />
    {Array.from({ length: 9 }).map((_, i) => (
      <circle
        key={i}
        cx={55 + i * 43}
        cy="286"
        r={i % 3 === 0 ? 5 : 3.5}
        fill="#046999"
        opacity={i % 3 === 0 ? 0.7 : 0.35}
      />
    ))}
  </svg>
);

export default TemplateGovernanceSVG;
