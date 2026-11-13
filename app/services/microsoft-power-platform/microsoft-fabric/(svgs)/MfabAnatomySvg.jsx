// /app/services/microsoft-power-platform/microsoft-fabric/(svgs)/MfabAnatomySvg.jsx
// Informative diagram for the intro: the three layers of Microsoft Fabric
// (what people use, the workloads, OneLake storage) with security,
// governance and capacity running down the side of all three.
// Colours (tokens): #046999 $accent, #e8f4fa $accent-light, #6fc3e8
// $accent-on-dark, #111820 $dark-bg, #18232e $dark-surface, #0d1b2a
// $text-primary, #4a5568 $text-secondary, #9a9da1 $text-muted, #e3e8ec $line,
// #ffffff $white.

const CHIPS = [
  { label: "Data Factory", icon: "pipe" },
  { label: "Engineering", icon: "spark" },
  { label: "Warehouse", icon: "table" },
  { label: "Data Science", icon: "dots" },
  { label: "Real-Time", icon: "pulse" },
  { label: "Power BI", icon: "bars" },
];

const ChipIcon = ({ type, x, y }) => {
  const s = {
    fill: "none",
    stroke: "#046999",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (type) {
    case "pipe":
      return (
        <path {...s} d={`M${x} ${y + 12}h7l4-6h8M${x + 11} ${y + 6}l4 6h5`} />
      );
    case "spark":
      return <path {...s} d={`M${x + 10} ${y}l2 7 7 2-7 2-2 7-2-7-7-2 7-2z`} />;
    case "table":
      return (
        <g {...s}>
          <rect x={x} y={y + 1} width="20" height="16" rx="2" />
          <path d={`M${x} ${y + 7}h20M${x + 7} ${y + 7}v10`} />
        </g>
      );
    case "dots":
      return (
        <g fill="#046999">
          <circle cx={x + 3} cy={y + 14} r="2.2" />
          <circle cx={x + 9} cy={y + 9} r="2.2" />
          <circle cx={x + 15} cy={y + 11} r="2.2" />
          <circle cx={x + 19} cy={y + 3} r="2.2" />
        </g>
      );
    case "pulse":
      return <path {...s} d={`M${x} ${y + 10}h5l3-8 4 16 3-8h5`} />;
    default:
      return (
        <g fill="#046999">
          <rect x={x} y={y + 9} width="4.5" height="9" rx="1" />
          <rect x={x + 7.5} y={y + 4} width="4.5" height="14" rx="1" />
          <rect x={x + 15} y={y} width="4.5" height="18" rx="1" />
        </g>
      );
  }
};

const LayerArrow = ({ y }) => (
  <g stroke="#046999" strokeWidth="1.6" strokeLinecap="round" fill="none">
    <path d={`M230 ${y}v22M224 ${y + 6}l6-6 6 6M224 ${y + 16}l6 6 6-6`} />
  </g>
);

const MfabAnatomySvg = () => (
  <svg
    viewBox="0 0 560 500"
    role="img"
    aria-labelledby="mfab-anatomy-title mfab-anatomy-desc"
  >
    <title id="mfab-anatomy-title">How Microsoft Fabric is put together</title>
    <desc id="mfab-anatomy-desc">
      Three layers. At the top, the reports, apps and Copilot your team uses. In
      the middle, six workloads: Data Factory, Data Engineering, Data Warehouse,
      Data Science, Real-Time Intelligence and Power BI. At the bottom, OneLake
      stores one copy of your data in an open format, with shortcuts to data
      held elsewhere. Security, governance and capacity run across all three
      layers.
    </desc>

    {/* Top layer: what people use */}
    <rect
      x="20"
      y="20"
      width="420"
      height="100"
      rx="16"
      fill="#ffffff"
      stroke="#e3e8ec"
      strokeWidth="1.5"
    />
    <text
      x="40"
      y="50"
      fontSize="14"
      fill="#9a9da1"
      fontWeight="700"
      letterSpacing="1"
    >
      WHAT YOUR TEAM USES
    </text>
    <text x="40" y="76" fontSize="16" fontWeight="700" fill="#0d1b2a">
      Reports, apps and Copilot
    </text>
    <text x="40" y="98" fontSize="14" fill="#4a5568">
      in Teams, the web and mobile
    </text>
    {/* mini dashboard */}
    <rect x="300" y="36" width="122" height="68" rx="8" fill="#e8f4fa" />
    <g fill="#046999">
      <rect x="312" y="74" width="8" height="18" rx="1.5" />
      <rect x="324" y="64" width="8" height="28" rx="1.5" />
      <rect x="336" y="70" width="8" height="22" rx="1.5" />
      <rect x="348" y="56" width="8" height="36" rx="1.5" fill="#111820" />
    </g>
    <circle
      cx="392"
      cy="70"
      r="15"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="6"
    />
    <path
      d="M392 55a15 15 0 0 1 14 20"
      fill="none"
      stroke="#046999"
      strokeWidth="6"
    />

    <LayerArrow y={128} />

    {/* Middle layer: workloads */}
    <rect x="20" y="158" width="420" height="152" rx="16" fill="#111820" />
    <text
      x="40"
      y="186"
      fontSize="14"
      fill="#6fc3e8"
      fontWeight="700"
      letterSpacing="1"
    >
      WORKLOADS
    </text>
    {CHIPS.map((c, i) => {
      const x = 34 + (i % 3) * 136;
      const y = 200 + Math.floor(i / 3) * 52;
      return (
        <g key={c.label}>
          <rect x={x} y={y} width="128" height="44" rx="10" fill="#ffffff" />
          <ChipIcon type={c.icon} x={x + 10} y={y + 13} />
          <text x={x + 36} y={y + 27} fontSize="14" fill="#0d1b2a">
            {c.label}
          </text>
        </g>
      );
    })}

    <LayerArrow y={318} />

    {/* Bottom layer: OneLake */}
    <path
      d="M20 410C20 368 120 348 230 348C340 348 440 368 440 410C440 452 340 480 230 480C120 480 20 452 20 410Z"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <path
      d="M70 380c16-6 32-6 48 0s32 6 48 0M300 380c16-6 32-6 48 0s32 6 48 0"
      fill="none"
      stroke="#046999"
      strokeOpacity="0.35"
      strokeWidth="1.5"
    />
    <text
      x="230"
      y="404"
      fontSize="20"
      fontWeight="700"
      fill="#0d1b2a"
      textAnchor="middle"
    >
      OneLake
    </text>
    <text x="230" y="428" fontSize="14" fill="#4a5568" textAnchor="middle">
      One copy of your data, in an open format
    </text>
    {/* shortcut chips */}
    <g>
      <rect
        x="128"
        y="440"
        width="94"
        height="24"
        rx="12"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.2"
      />
      <text x="175" y="457" fontSize="14" fill="#046999" textAnchor="middle">
        your tables
      </text>
      <rect x="238" y="440" width="94" height="24" rx="12" fill="#046999" />
      <text x="285" y="457" fontSize="14" fill="#ffffff" textAnchor="middle">
        shortcuts
      </text>
    </g>

    {/* Side band: security, governance, capacity */}
    <rect x="460" y="20" width="80" height="460" rx="16" fill="#046999" />
    <path
      d="M500 44l14 5v10c0 9-6 15-14 18-8-3-14-9-14-18V49z"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M494 60l4 4 8-8"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <text
      x="0"
      y="0"
      fontSize="16"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
      transform="translate(496 278) rotate(-90)"
    >
      Security and governance
    </text>
    <text
      x="0"
      y="0"
      fontSize="14"
      fill="#ffffff"
      fillOpacity="0.88"
      textAnchor="middle"
      transform="translate(520 278) rotate(-90)"
    >
      one capacity, one bill
    </text>
  </svg>
);

export default MfabAnatomySvg;
