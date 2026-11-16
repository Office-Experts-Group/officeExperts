// /app/blog/power-bi-in-healthcare-analytics/(svgs)/DataFlowSvg.jsx
// Diagram: how health data reaches a Power BI dashboard.
// Hex values map to globals.scss tokens:
//   #0d1b2a $text-primary, #4a5568 $text-secondary, #046999 $accent,
//   #e8f4fa $accent-light, #bcd9e6 ~ $accent-border on white,
//   #f7f8f9 $light-bg, #d4d6d9 $line-strong, #ffffff $white.

const SOURCES = [
  { y: 50, label: "EMR or EHR" },
  { y: 126, label: "Lab system" },
  { y: 202, label: "Scheduling" },
  { y: 278, label: "Devices" },
];

const DASHBOARDS = [
  { y: 50, label: "Patient flow" },
  { y: 146, label: "Readmissions" },
  { y: 242, label: "Quality" },
];

const Arrow = ({ x, y }) => (
  <path
    d={`M${x - 6} ${y - 5}l6 5-6 5`}
    fill="none"
    stroke="#046999"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

const DataFlowSvg = () => (
  <svg
    viewBox="0 0 720 400"
    role="img"
    aria-labelledby="hca-flow-title hca-flow-desc"
    fontFamily="aptos"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    <title id="hca-flow-title">From clinical systems to dashboards</title>
    <desc id="hca-flow-desc">
      Four source systems (medical record, lab system, scheduling and devices)
      feed a data store that is cleaned and joined, then a star-shaped model
      with a visits table and patient, date, ward and clinician lookups, then
      three dashboards for patient flow, readmissions and quality.
    </desc>

    {/* Stage headings */}
    <g fontSize="14" fontWeight="700" fill="#046999" letterSpacing="1">
      <text x="10" y="30">
        SOURCES
      </text>
      <text x="200" y="30">
        STORE AND CLEAN
      </text>
      <text x="380" y="30">
        MODEL
      </text>
      <text x="570" y="30">
        DASHBOARDS
      </text>
    </g>

    {/* Sources */}
    {SOURCES.map(({ y, label }) => (
      <g key={label}>
        <rect
          x="10"
          y={y}
          width="150"
          height="62"
          rx="10"
          fill="#f7f8f9"
          stroke="#d4d6d9"
        />
        <text x="56" y={y + 36} fontSize="15" fontWeight="600" fill="#0d1b2a">
          {label}
        </text>
      </g>
    ))}

    {/* Source icons */}
    <g fill="none" stroke="#046999" strokeWidth="1.8" strokeLinecap="round">
      <rect x="22" y="62" width="20" height="26" rx="3" />
      <path d="M27 70h10M27 76h10M27 82h6" />
      <path d="M26 138h12v18a6 6 0 0 1-12 0z" />
      <path d="M24 138h16" />
      <rect x="22" y="214" width="22" height="22" rx="3" />
      <path d="M22 222h22M28 211v6M38 211v6" />
      <path d="M21 313h7l4-10 6 20 4-10h6" strokeLinejoin="round" />
    </g>

    {/* Merge lines into the store */}
    <g fill="none" stroke="#046999" strokeWidth="1.6" strokeLinecap="round">
      <path d="M160 81h20M160 157h20M160 233h20M160 309h20" />
      <path d="M180 81V309" />
      <path d="M180 195h20" />
      <path d="M340 195h40" />
      <path d="M530 195h20" />
      <path d="M550 92V284" />
      <path d="M550 92h20M550 188h20M550 284h20" />
    </g>
    <Arrow x={200} y={195} />
    <Arrow x={380} y={195} />
    <Arrow x={570} y={92} />
    <Arrow x={570} y={188} />
    <Arrow x={570} y={284} />

    {/* Store */}
    <rect
      x="200"
      y="50"
      width="140"
      height="290"
      rx="14"
      fill="#e8f4fa"
      stroke="#bcd9e6"
    />
    {[
      { y: 70, label: "Raw copy" },
      { y: 132, label: "Cleaned" },
      { y: 194, label: "Joined" },
    ].map(({ y, label }) => (
      <g key={label}>
        <rect
          x="214"
          y={y}
          width="112"
          height="46"
          rx="8"
          fill="#ffffff"
          stroke="#bcd9e6"
        />
        <text
          x="270"
          y={y + 29}
          fontSize="15"
          fontWeight="600"
          fill="#0d1b2a"
          textAnchor="middle"
        >
          {label}
        </text>
      </g>
    ))}
    <g
      fill="none"
      stroke="#046999"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M264 121l6 6 6-6" />
      <path d="M264 183l6 6 6-6" />
      <circle cx="270" cy="263" r="10" />
      <path d="M270 257v6l4 3" />
    </g>
    <g fontSize="14" fill="#4a5568" textAnchor="middle">
      <text x="270" y="296">
        Refreshes on
      </text>
      <text x="270" y="316">
        a schedule
      </text>
    </g>

    {/* Star model */}
    <g stroke="#046999" strokeWidth="1.5" strokeLinecap="round">
      <path d="M415 110L430 165" />
      <path d="M495 110L480 165" />
      <path d="M415 280L430 225" />
      <path d="M495 280L480 225" />
    </g>
    <rect x="405" y="165" width="100" height="60" rx="10" fill="#046999" />
    <text
      x="455"
      y="200"
      fontSize="15"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      Visits
    </text>
    {[
      { x: 380, y: 70, label: "Patient" },
      { x: 460, y: 70, label: "Date" },
      { x: 380, y: 280, label: "Ward" },
      { x: 460, y: 280, label: "Clinician" },
    ].map(({ x, y, label }) => (
      <g key={label}>
        <rect
          x={x}
          y={y}
          width="70"
          height="40"
          rx="8"
          fill="#e8f4fa"
          stroke="#046999"
          strokeOpacity="0.45"
        />
        <text
          x={x + 35}
          y={y + 24}
          fontSize="14"
          fontWeight="600"
          fill="#0d1b2a"
          textAnchor="middle"
        >
          {label}
        </text>
      </g>
    ))}

    {/* Dashboards */}
    {DASHBOARDS.map(({ y, label }) => (
      <g key={label}>
        <rect
          x="570"
          y={y}
          width="140"
          height="84"
          rx="10"
          fill="#ffffff"
          stroke="#046999"
          strokeOpacity="0.4"
        />
        <text x="584" y={y + 68} fontSize="14" fontWeight="600" fill="#0d1b2a">
          {label}
        </text>
      </g>
    ))}
    <g fill="#046999">
      {[14, 22, 16, 28, 20].map((h, i) => (
        <rect key={i} x={584 + i * 14} y={96 - h} width="9" height={h} rx="2" />
      ))}
    </g>
    <path
      d="M584 188L600 180 616 184 632 172 648 176 664 164"
      fill="none"
      stroke="#046999"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="664" cy="164" r="3.5" fill="#046999" />
    <circle
      cx="602"
      cy="272"
      r="14"
      fill="none"
      stroke="#bcd9e6"
      strokeWidth="7"
    />
    <circle
      cx="602"
      cy="272"
      r="14"
      fill="none"
      stroke="#046999"
      strokeWidth="7"
      strokeDasharray="58 30"
      transform="rotate(-90 602 272)"
    />
    <g fill="#e8f4fa" stroke="#046999" strokeOpacity="0.45">
      <rect x="636" y="258" width="56" height="8" rx="4" />
      <rect x="636" y="274" width="40" height="8" rx="4" />
    </g>

    <text x="360" y="378" fontSize="14" fill="#4a5568" textAnchor="middle">
      Report from a copy of the data so clinical systems stay fast.
    </text>
  </svg>
);

export default DataFlowSvg;
