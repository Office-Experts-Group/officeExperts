// /app/blog/2gb-access-database-limit/(svgs)/GaugeSvg.jsx
// File-size zones from 0 to 2GB with what to do in each zone.
// Hex values map to tokens: #cfe7f3 = light $accent tint, #7cbfdc = mid accent,
// #046999 = $accent, #0d1b2a = $text-primary, #4a5568 = $text-secondary,
// #c0392b = $replace-x (the hard limit only).

const ZONES = [
  { x: 40, w: 510, fill: "#cfe7f3" },
  { x: 550, w: 102, fill: "#7cbfdc" },
  { x: 652, w: 68, fill: "#046999" },
];

const CARDS = [
  {
    x: 40,
    fill: "#cfe7f3",
    title: "Under 1.5GB",
    l1: "You have time to",
    l2: "plan properly",
    from: 295,
    lvl: 150,
  },
  {
    x: 212.7,
    fill: "#7cbfdc",
    title: "1.5 to 1.8GB",
    l1: "Act within",
    l2: "2 to 4 weeks",
    from: 601,
    lvl: 158,
  },
  {
    x: 385.3,
    fill: "#046999",
    title: "1.8 to 2GB",
    l1: "Emergency",
    l2: "migration needed",
    from: 686,
    lvl: 166,
  },
  {
    x: 558,
    fill: "#c0392b",
    title: "At 2GB",
    l1: "Database at",
    l2: "critical risk",
    from: 720,
    lvl: 174,
  },
];

export default function GaugeSvg() {
  return (
    <svg
      viewBox="0 0 760 304"
      role="img"
      aria-labelledby="tgb-gauge-title tgb-gauge-desc"
      fontFamily="aptos"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="tgb-gauge-title">
        Access file size zones and what to do in each
      </title>
      <desc id="tgb-gauge-desc">
        A gauge from 0 to 2GB. Under 1.5GB you have time to plan properly. From
        1.5 to 1.8GB act within two to four weeks. From 1.8 to 2GB an emergency
        migration is needed. At 2GB the database is at critical risk.
      </desc>

      <defs>
        <clipPath id="tgb-gauge-clip">
          <rect x="40" y="100" width="680" height="40" rx="10" />
        </clipPath>
      </defs>

      <text
        x="720"
        y="60"
        textAnchor="end"
        fill="#c0392b"
        fontSize="15"
        fontWeight="700"
      >
        Hard limit: 2GB
      </text>

      <g clipPath="url(#tgb-gauge-clip)">
        {ZONES.map((z) => (
          <rect
            key={z.x}
            x={z.x}
            y="100"
            width={z.w}
            height="40"
            fill={z.fill}
          />
        ))}
        <path d="M550 100V140M652 100V140" stroke="#ffffff" strokeWidth="2" />
      </g>
      <rect
        x="40"
        y="100"
        width="680"
        height="40"
        rx="10"
        fill="none"
        stroke="#0d1b2a"
        strokeOpacity="0.2"
      />
      <path
        d="M720 72V148"
        stroke="#c0392b"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <g fill="#4a5568" fontSize="14">
        <text x="40" y="90">
          0
        </text>
        <text x="380" y="90" textAnchor="middle">
          1GB
        </text>
        <text x="550" y="90" textAnchor="middle">
          1.5GB
        </text>
        <text x="652" y="90" textAnchor="middle">
          1.8GB
        </text>
        <text x="706" y="90" textAnchor="end">
          2GB
        </text>
      </g>
      <g stroke="#0d1b2a" strokeOpacity="0.35" strokeWidth="1.5">
        <path d="M380 94V100M550 94V100M652 94V100" />
      </g>

      {CARDS.map((c) => {
        const cx = c.x + 81;
        return (
          <g key={c.title}>
            <path
              d={`M${c.from} 140V${c.lvl}H${cx}V180`}
              fill="none"
              stroke="#0d1b2a"
              strokeOpacity="0.35"
              strokeWidth="1.5"
            />
            <circle cx={c.from} cy="140" r="4" fill="#0d1b2a" />
            <rect
              x={c.x}
              y="180"
              width="162"
              height="96"
              rx="12"
              fill="#ffffff"
              stroke="#0d1b2a"
              strokeOpacity="0.15"
            />
            <circle
              cx={c.x + 22}
              cy="206"
              r="7"
              fill={c.fill}
              stroke="#0d1b2a"
              strokeOpacity="0.2"
            />
            <text
              x={c.x + 38}
              y="212"
              fill="#0d1b2a"
              fontSize="15"
              fontWeight="700"
            >
              {c.title}
            </text>
            <text x={c.x + 16} y="238" fill="#4a5568" fontSize="14">
              {c.l1}
            </text>
            <text x={c.x + 16} y="258" fill="#4a5568" fontSize="14">
              {c.l2}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
