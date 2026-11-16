// /app/blog/power-bi-licensing-costs/(svgs)/CostSketches.jsx
// Five 96x96 spot illustrations, one per hidden cost. Decorative, so aria-hidden.
// Hex values: #e8f4fa $accent-light, #046999 $accent, #034e72 $accent-dark, #0b2433 $ink,
// #9fd0e8 mid accent tint, #ffffff $white.

const frame = {
  viewBox: "0 0 96 96",
  "aria-hidden": "true",
  focusable: "false",
  fontFamily: "aptos, 'Segoe UI', Arial, sans-serif",
};

const Bg = () => <rect width="96" height="96" rx="22" fill="#e8f4fa" />;

const Head = ({ x, y, fill = "#046999" }) => (
  <g>
    <circle cx={x} cy={y} r="3.6" fill={fill} />
    <path d={`M${x - 6} ${y + 12}a6 6 0 0 1 12 0z`} fill={fill} />
  </g>
);

// 1. The viewer trap: a growing crowd and a price tag
export const ViewerSketch = ({ className }) => (
  <svg {...frame} className={className}>
    <Bg />
    <Head x="42" y="20" />
    <Head x="54" y="20" />
    <Head x="30" y="38" />
    <Head x="42" y="38" />
    <Head x="54" y="38" />
    <Head x="66" y="38" />
    <Head x="24" y="56" fill="#9fd0e8" />
    <Head x="36" y="56" fill="#9fd0e8" />
    <Head x="48" y="56" fill="#9fd0e8" />
    <Head x="60" y="56" fill="#9fd0e8" />
    <Head x="72" y="56" fill="#9fd0e8" />
    <path
      d="M18 76h40l8 8-8 8H18a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4z"
      fill="#046999"
      transform="translate(0 -6)"
    />
    <circle cx="24" cy="80" r="2.6" fill="#e8f4fa" />
    <path
      d="M34 80h20M34 86h12"
      stroke="#e8f4fa"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
);

// 2. Real-time refresh: clock with eight ticks and a refresh arrow
export const RefreshSketch = ({ className }) => (
  <svg {...frame} className={className}>
    <Bg />
    <circle
      cx="48"
      cy="48"
      r="26"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="3.5"
    />
    {Array.from({ length: 8 }).map((_, i) => {
      const a = (i * Math.PI * 2) / 8;
      const x1 = 48 + Math.sin(a) * 19;
      const y1 = 48 - Math.cos(a) * 19;
      const x2 = 48 + Math.sin(a) * 23;
      const y2 = 48 - Math.cos(a) * 23;
      return (
        <path
          key={i}
          d={`M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}`}
          stroke="#9fd0e8"
          strokeWidth="3"
          strokeLinecap="round"
        />
      );
    })}
    <path
      d="M48 48V32M48 48l11 7"
      stroke="#034e72"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <circle cx="48" cy="48" r="3.2" fill="#034e72" />
    <path
      d="M78 34a32 32 0 0 0-52-12"
      fill="none"
      stroke="#046999"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M22 12l4 11 11-3"
      fill="none"
      stroke="#046999"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="78" cy="76" r="11" fill="#046999" />
    <path
      d="M78 70v7M78 81.2h.01"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

// 3. The gateway: cloud, dashed link and a server that has to stay on
export const GatewaySketch = ({ className }) => (
  <svg {...frame} className={className}>
    <Bg />
    <path
      d="M30 40a9 9 0 0 1-1-17.9A13 13 0 0 1 54 18a10.5 10.5 0 0 1 11 21z"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="3.5"
      strokeLinejoin="round"
      transform="translate(8 0)"
    />
    <path
      d="M48 44v14"
      stroke="#046999"
      strokeWidth="3.5"
      strokeDasharray="4 4"
      strokeLinecap="round"
    />
    <path
      d="M42 53l6 7 6-7"
      fill="none"
      stroke="#046999"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="24" y="62" width="48" height="12" rx="3.5" fill="#046999" />
    <rect x="24" y="77" width="48" height="12" rx="3.5" fill="#034e72" />
    <circle cx="32" cy="68" r="2" fill="#9fd0e8" />
    <circle cx="32" cy="83" r="2" fill="#9fd0e8" />
    <path
      d="M42 68h22M42 83h22"
      stroke="#e8f4fa"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

// 4. Compliance: a shield over a ledger
export const ComplianceSketch = ({ className }) => (
  <svg {...frame} className={className}>
    <Bg />
    <rect
      x="12"
      y="18"
      width="44"
      height="60"
      rx="6"
      fill="#ffffff"
      stroke="#9fd0e8"
      strokeWidth="3"
    />
    <path
      d="M20 30h28M20 40h22M20 50h28M20 60h16"
      stroke="#9fd0e8"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M60 22l20 7.5v15.5c0 12.5-8 21.5-20 26-12-4.5-20-13.5-20-26V29.5z"
      fill="#046999"
    />
    <path
      d="M51 46l7 7 12-13"
      fill="none"
      stroke="#ffffff"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="26"
      cy="80"
      r="6"
      fill="none"
      stroke="#034e72"
      strokeWidth="3"
    />
    <path
      d="M32 80h22M46 80v6M52 80v4"
      stroke="#034e72"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

// 5. Licence sprawl: seats, some never used
export const SprawlSketch = ({ className }) => (
  <svg {...frame} className={className}>
    <Bg />
    {[
      [14, 16, true],
      [37, 16, true],
      [60, 16, false],
      [14, 52, false],
      [37, 52, true],
      [60, 52, false],
    ].map(([x, y, used]) => (
      <g key={`${x}-${y}`}>
        <rect
          x={x}
          y={y}
          width="22"
          height="28"
          rx="5"
          fill={used ? "#046999" : "#ffffff"}
          stroke={used ? "#046999" : "#9fd0e8"}
          strokeWidth="2.5"
          strokeDasharray={used ? undefined : "4 3"}
        />
        <circle
          cx={x + 11}
          cy={y + 10}
          r="4"
          fill={used ? "#e8f4fa" : "#9fd0e8"}
        />
        <path
          d={`M${x + 4} ${y + 24}a7 7 0 0 1 14 0`}
          fill={used ? "#e8f4fa" : "#9fd0e8"}
        />
      </g>
    ))}
    <path
      d="M20 88h56"
      stroke="#034e72"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="2 7"
    />
  </svg>
);
