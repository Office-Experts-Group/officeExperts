// /app/services/microsoft-power-platform/microsoft-power-apps/(svgs)/PappsMobilitySvg.jsx
// Informative illustration for the mobility band (drawn for $accent-dark):
// one cloud, three devices, the same job list on each.
// Hex values and the tokens they match:
//   #6fc3e8 $accent-on-dark, #046999 $accent, #034e72 $accent-dark,
//   #e8f4fa $accent-light, #0d1b2a $text-primary, #e3e8ec $line,
//   #ffffff $white, #0eaa0e $success, #9a9da1 $text-muted

const jobs = [
  { t: "Smith St", p: "New" },
  { t: "Park Rd", p: "Quoted" },
  { t: "Beach Rd", p: "Won" },
];

const PappsMobilitySvg = () => (
  <svg
    viewBox="0 0 680 420"
    role="img"
    aria-labelledby="papps-mobility-title papps-mobility-desc"
    fontFamily="aptos"
    width="100%"
    height="auto"
    style={{ display: "block", width: "100%", height: "auto" }}
  >
    <title id="papps-mobility-title">
      One cloud-based app shown on a laptop, a tablet and a phone
    </title>
    <desc id="papps-mobility-desc">
      A cloud connects to a laptop, a tablet and a phone. Each device shows the
      same list of jobs.
    </desc>

    {/* cloud */}
    <g fill="#e8f4fa">
      <circle cx="285" cy="62" r="28" />
      <circle cx="332" cy="46" r="36" />
      <circle cx="378" cy="62" r="30" />
      <rect x="285" y="62" width="93" height="28" />
    </g>
    <text
      x="332"
      y="80"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#034e72"
    >
      Cloud
    </text>
    <g
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeDasharray="6 7"
      strokeLinecap="round"
    >
      <path d="M300 94 C 300 140 170 130 166 176" />
      <path d="M335 94 C 340 150 420 170 425 220" />
      <path d="M368 94 C 380 120 590 110 596 138" />
    </g>

    {/* laptop */}
    <rect x="16" y="176" width="300" height="190" rx="14" fill="#0d1b2a" />
    <rect x="26" y="186" width="280" height="170" rx="8" fill="#ffffff" />
    <path
      d="M26 214 V194 Q26 186 34 186 H298 Q306 186 306 194 V214 Z"
      fill="#046999"
    />
    <text x="40" y="206" fontSize="14" fontWeight="700" fill="#ffffff">
      Open jobs
    </text>
    {jobs.map(({ t, p }, i) => (
      <g key={t}>
        <line
          x1="26"
          x2="306"
          y1={214 + i * 46}
          y2={214 + i * 46}
          stroke="#e3e8ec"
        />
        <text x="40" y={214 + i * 46 + 29} fontSize="14" fill="#0d1b2a">
          {t}
        </text>
        <rect
          x="222"
          y={214 + i * 46 + 11}
          width="70"
          height="24"
          rx="12"
          fill="#e8f4fa"
        />
        <text
          x="257"
          y={214 + i * 46 + 28}
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill="#046999"
        >
          {p}
        </text>
      </g>
    ))}
    <rect x="2" y="366" width="328" height="14" rx="7" fill="#0d1b2a" />
    <rect x="132" y="366" width="68" height="5" rx="2.5" fill="#9a9da1" />

    {/* tablet */}
    <rect
      x="340"
      y="220"
      width="176"
      height="180"
      rx="16"
      fill="#0d1b2a"
      stroke="#034e72"
      strokeWidth="3"
    />
    <rect x="348" y="228" width="160" height="164" rx="10" fill="#ffffff" />
    <path
      d="M348 254 V238 Q348 228 358 228 H498 Q508 228 508 238 V254 Z"
      fill="#046999"
    />
    <text x="360" y="246" fontSize="14" fontWeight="700" fill="#ffffff">
      Open jobs
    </text>
    {jobs.map(({ t, p }, i) => (
      <g key={t}>
        <line
          x1="348"
          x2="508"
          y1={254 + i * 46}
          y2={254 + i * 46}
          stroke="#e3e8ec"
        />
        <text x="360" y={254 + i * 46 + 29} fontSize="14" fill="#0d1b2a">
          {t}
        </text>
        <rect
          x="438"
          y={254 + i * 46 + 11}
          width="62"
          height="24"
          rx="12"
          fill="#e8f4fa"
        />
        <text
          x="469"
          y={254 + i * 46 + 28}
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill="#046999"
        >
          {p}
        </text>
      </g>
    ))}

    {/* phone */}
    <rect
      x="544"
      y="138"
      width="122"
      height="236"
      rx="22"
      fill="#0d1b2a"
      stroke="#034e72"
      strokeWidth="3"
    />
    <rect x="552" y="147" width="106" height="218" rx="15" fill="#ffffff" />
    <path
      d="M552 176 V162 Q552 147 567 147 H643 Q658 147 658 162 V176 Z"
      fill="#046999"
    />
    <text x="566" y="168" fontSize="14" fontWeight="700" fill="#ffffff">
      Jobs
    </text>
    {jobs.slice(0, 2).map(({ t }, i) => (
      <g key={t}>
        <line
          x1="552"
          x2="658"
          y1={176 + i * 46}
          y2={176 + i * 46}
          stroke="#e3e8ec"
        />
        <text x="566" y={176 + i * 46 + 29} fontSize="14" fill="#0d1b2a">
          {t}
        </text>
        <circle
          cx="640"
          cy={176 + i * 46 + 24}
          r="5"
          fill={i === 1 ? "#0eaa0e" : "#046999"}
        />
      </g>
    ))}
    <line x1="552" x2="658" y1="268" y2="268" stroke="#e3e8ec" />
    <rect x="566" y="318" width="78" height="30" rx="10" fill="#046999" />
    <text
      x="605"
      y="338"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
    >
      Add job
    </text>
  </svg>
);

export default PappsMobilitySvg;
