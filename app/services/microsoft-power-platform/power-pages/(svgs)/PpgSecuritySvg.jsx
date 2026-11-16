// /app/services/microsoft-power-platform/microsoft-power-pages/(svgs)/PpgSecuritySvg.jsx
// Full-width security journey: a request from an external user passes four
// checks, in order, before it reaches their own data.
// Hex values and tokens: #046999 $accent, #e8f4fa $accent-light,
// #6fc3e8 $accent-on-dark, #0b2433 $ink, #111820 $dark-bg,
// #0d1b2a $text-primary, #d4d6d9 $line-strong, #ffffff $white.

const GATES = [
  { x: 250, label: "Authentication" },
  { x: 440, label: "Web roles" },
  { x: 630, label: "Table permissions" },
  { x: 820, label: "Column permissions" },
];

const GateIcon = ({ index, x }) => {
  const cx = x;
  const cy = 128;
  if (index === 0) {
    // ID card with a key
    return (
      <g>
        <rect
          x={cx - 26}
          y={cy - 18}
          width="52"
          height="38"
          rx="6"
          fill="#6fc3e8"
          fillOpacity="0.15"
          stroke="#6fc3e8"
          strokeWidth="2"
        />
        <circle cx={cx - 12} cy={cy - 4} r="6" fill="#6fc3e8" />
        <path d={`M${cx - 20} ${cy + 14} a8 6 0 0 1 16 0 Z`} fill="#6fc3e8" />
        <rect
          x={cx + 2}
          y={cy - 8}
          width="18"
          height="5"
          rx="2.5"
          fill="#ffffff"
          fillOpacity="0.8"
        />
        <rect
          x={cx + 2}
          y={cy + 2}
          width="14"
          height="5"
          rx="2.5"
          fill="#ffffff"
          fillOpacity="0.4"
        />
      </g>
    );
  }
  if (index === 1) {
    // Badge on a lanyard
    return (
      <g>
        <path
          d={`M${cx - 10} ${cy - 30} L${cx} ${cy - 8} L${cx + 10} ${cy - 30}`}
          stroke="#6fc3e8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x={cx - 20}
          y={cy - 8}
          width="40"
          height="46"
          rx="7"
          fill="#6fc3e8"
          fillOpacity="0.15"
          stroke="#6fc3e8"
          strokeWidth="2"
        />
        <circle cx={cx} cy={cy + 8} r="6" fill="#6fc3e8" />
        <path d={`M${cx - 11} ${cy + 30} a11 9 0 0 1 22 0 Z`} fill="#6fc3e8" />
      </g>
    );
  }
  if (index === 2) {
    // Table with one allowed row
    return (
      <g>
        <rect
          x={cx - 28}
          y={cy - 24}
          width="56"
          height="52"
          rx="6"
          fill="#ffffff"
          fillOpacity="0.06"
          stroke="#6fc3e8"
          strokeWidth="2"
        />
        <path
          d={`M${cx - 28} ${cy - 8} H${cx + 28} M${cx - 28} ${cy + 8} H${cx + 28} M${cx - 6} ${cy - 24} V${cy + 28}`}
          stroke="#6fc3e8"
          strokeOpacity="0.6"
          strokeWidth="1.5"
        />
        <rect
          x={cx - 26}
          y={cy - 6}
          width="52"
          height="14"
          fill="#6fc3e8"
          fillOpacity="0.55"
        />
      </g>
    );
  }
  // Table with one masked column
  return (
    <g>
      <rect
        x={cx - 28}
        y={cy - 24}
        width="56"
        height="52"
        rx="6"
        fill="#ffffff"
        fillOpacity="0.06"
        stroke="#6fc3e8"
        strokeWidth="2"
      />
      <path
        d={`M${cx - 28} ${cy - 8} H${cx + 28} M${cx - 28} ${cy + 8} H${cx + 28}`}
        stroke="#6fc3e8"
        strokeOpacity="0.6"
        strokeWidth="1.5"
      />
      <rect x={cx + 2} y={cy - 22} width="24" height="48" fill="#111820" />
      <path
        d={`M${cx + 6} ${cy - 12} H${cx + 22} M${cx + 6} ${cy + 2} H${cx + 22} M${cx + 6} ${cy + 16} H${cx + 22}`}
        stroke="#6fc3e8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 5"
      />
      <rect
        x={cx - 24}
        y={cy - 18}
        width="20"
        height="5"
        rx="2.5"
        fill="#ffffff"
        fillOpacity="0.7"
      />
      <rect
        x={cx - 24}
        y={cy - 2}
        width="16"
        height="5"
        rx="2.5"
        fill="#ffffff"
        fillOpacity="0.5"
      />
      <rect
        x={cx - 24}
        y={cy + 14}
        width="18"
        height="5"
        rx="2.5"
        fill="#ffffff"
        fillOpacity="0.5"
      />
    </g>
  );
};

const PpgSecuritySvg = () => (
  <svg
    viewBox="0 0 1000 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    fontFamily="aptos"
    role="img"
    aria-labelledby="ppg-security-svg-title ppg-security-svg-desc"
  >
    <title id="ppg-security-svg-title">
      The four checks every request passes through
    </title>
    <desc id="ppg-security-svg-desc">
      An external user’s request passes four gates in order: authentication, web
      roles, table permissions and column permissions. It then reaches a record
      card that shows their permitted fields, with one sensitive field hidden.
    </desc>

    {/* Journey line */}
    <path
      d="M104 150 H886"
      stroke="#6fc3e8"
      strokeOpacity="0.55"
      strokeWidth="2"
      strokeDasharray="4 8"
    />

    {/* External user */}
    <circle
      cx="60"
      cy="150"
      r="36"
      fill="#ffffff"
      fillOpacity="0.08"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <circle cx="60" cy="140" r="11" fill="#6fc3e8" />
    <path d="M40 172 a20 16 0 0 1 40 0 Z" fill="#6fc3e8" />
    <text
      x="60"
      y="214"
      textAnchor="middle"
      fontSize="15"
      fontWeight="700"
      fill="#ffffff"
      fillOpacity="0.88"
    >
      Visitor
    </text>

    {/* Gates */}
    {GATES.map((g, i) => (
      <g key={g.label}>
        <rect
          x={g.x - 46}
          y="64"
          width="92"
          height="172"
          rx="16"
          fill="#ffffff"
          fillOpacity="0.05"
          stroke="#6fc3e8"
          strokeWidth="1.5"
        />
        <rect
          x={g.x - 46}
          y="64"
          width="92"
          height="12"
          rx="6"
          fill="#6fc3e8"
          fillOpacity="0.3"
        />
        <GateIcon index={i} x={g.x} />
        <text
          x={g.x}
          y="262"
          textAnchor="middle"
          fontSize="15"
          fontWeight="700"
          fill="#ffffff"
        >
          {g.label}
        </text>
        <path d={`M${g.x + 58} 150 l8 -6 v12 z`} fill="#6fc3e8" />
      </g>
    ))}

    {/* The data they reach */}
    <rect x="890" y="84" width="104" height="132" rx="12" fill="#ffffff" />
    <rect x="900" y="96" width="36" height="6" rx="3" fill="#d4d6d9" />
    <rect x="900" y="108" width="84" height="12" rx="4" fill="#e8f4fa" />
    <rect x="900" y="130" width="40" height="6" rx="3" fill="#d4d6d9" />
    <rect x="900" y="142" width="70" height="12" rx="4" fill="#e8f4fa" />
    <rect x="900" y="164" width="44" height="6" rx="3" fill="#d4d6d9" />
    <rect x="900" y="176" width="84" height="12" rx="4" fill="#0d1b2a" />
    <path
      d="M908 182 H976"
      stroke="#6fc3e8"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="2 5"
    />
    <text
      x="942"
      y="262"
      textAnchor="middle"
      fontSize="15"
      fontWeight="700"
      fill="#ffffff"
      fillOpacity="0.88"
    >
      Their data
    </text>
  </svg>
);

export default PpgSecuritySvg;
