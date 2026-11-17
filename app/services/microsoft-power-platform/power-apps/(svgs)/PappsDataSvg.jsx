// /app/services/microsoft-power-platform/power-apps/(svgs)/PappsDataSvg.jsx
// Informative diagram for the data section (drawn for the dark background):
// five kinds of existing data feed through connectors into one app, which
// produces alerts, reports and documents.
// Hex values and the tokens they match:
//   #6fc3e8 $accent-on-dark, #046999 $accent, #e8f4fa $accent-light,
//   #18232e $dark-surface, #1a2a3a $dark-mid, #111820 $dark-bg,
//   #0d1b2a $text-primary, #4a5568 $text-secondary, #d4d6d9 $line-strong,
//   #e3e8ec $line, #ffffff $white (strokes at 18% = $white-18)

const sources = [
  { y: 42, label: "Lists and libraries", icon: "list" },
  { y: 110, label: "Spreadsheets", icon: "grid" },
  { y: 178, label: "SQL databases", icon: "db" },
  { y: 246, label: "Email and calendars", icon: "mail" },
  { y: 314, label: "Other systems", icon: "plug" },
];

const outputs = [
  { y: 82, label: "Alerts in chat and email", icon: "bell" },
  { y: 172, label: "Reports and dashboards", icon: "bars" },
  { y: 262, label: "Documents and PDFs", icon: "doc" },
];

const Icon = ({ kind, x, y }) => {
  const s = {
    fill: "none",
    stroke: "#6fc3e8",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  return (
    <g transform={`translate(${x} ${y})`}>
      {kind === "list" && <path {...s} d="M2 5h20M2 12h20M2 19h12" />}
      {kind === "grid" && (
        <>
          <rect {...s} x="2" y="3" width="20" height="18" rx="2" />
          <path {...s} d="M2 9h20M2 15h20M9 3v18M15 3v18" />
        </>
      )}
      {kind === "db" && (
        <>
          <ellipse {...s} cx="12" cy="5" rx="9" ry="3" />
          <path
            {...s}
            d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3"
          />
        </>
      )}
      {kind === "mail" && (
        <>
          <rect {...s} x="2" y="4" width="20" height="16" rx="2" />
          <path {...s} d="M2 6l10 8 10-8" />
        </>
      )}
      {kind === "plug" && (
        <path {...s} d="M8 2v6M16 2v6M5 8h14v4a7 7 0 0 1-14 0zM12 19v3" />
      )}
      {kind === "bell" && (
        <path {...s} d="M6 17V11a6 6 0 0 1 12 0v6l2 2H4zM10 21h4" />
      )}
      {kind === "bars" && <path {...s} d="M4 21V12M10 21V4M16 21V9M22 21H2" />}
      {kind === "doc" && (
        <>
          <path {...s} d="M5 2h10l5 5v15H5z" />
          <path {...s} d="M9 13h8M9 17h8M14 2v6h6" />
        </>
      )}
    </g>
  );
};

const PappsDataSvg = () => (
  <svg
    viewBox="0 0 960 400"
    role="img"
    aria-labelledby="papps-data-title papps-data-desc"
    fontFamily="aptos"
    width="100%"
    height="auto"
    style={{ display: "block", width: "100%", height: "auto" }}
  >
    <title id="papps-data-title">
      Existing data sources connected to one Power App, which produces alerts,
      reports and documents
    </title>
    <desc id="papps-data-desc">
      Lists and libraries, spreadsheets, SQL databases, email and calendars and
      other systems connect through connectors to a single app. The app produces
      alerts in chat and email, reports and dashboards, and documents and PDFs.
    </desc>

    <text
      x="20"
      y="26"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      fillOpacity="0.65"
    >
      Where your data lives
    </text>
    <text
      x="400"
      y="26"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      fillOpacity="0.65"
    >
      What your team uses
    </text>
    <text
      x="730"
      y="26"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      fillOpacity="0.65"
    >
      What it produces
    </text>

    {/* connector lines (behind cards) */}
    {sources.map(({ y }) => (
      <path
        key={y}
        d={`M246 ${y + 28} C 320 ${y + 28} 330 195 400 195`}
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2"
        strokeOpacity="0.7"
      />
    ))}
    {outputs.map(({ y }) => (
      <path
        key={y}
        d={`M600 195 C 660 195 670 ${y + 28} 726 ${y + 28}`}
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2"
        strokeOpacity="0.7"
      />
    ))}

    {/* sources */}
    {sources.map(({ y, label, icon }) => (
      <g key={label}>
        <rect
          x="20"
          y={y}
          width="226"
          height="56"
          rx="12"
          fill="#18232e"
          stroke="#ffffff"
          strokeOpacity="0.18"
        />
        <Icon kind={icon} x={38} y={y + 16} />
        <text x="76" y={y + 34} fontSize="14" fontWeight="700" fill="#ffffff">
          {label}
        </text>
        <circle
          cx="246"
          cy={y + 28}
          r="5"
          fill="#111820"
          stroke="#6fc3e8"
          strokeWidth="2"
        />
      </g>
    ))}

    {/* connectors pill */}
    <rect
      x="278"
      y="181"
      width="100"
      height="28"
      rx="14"
      fill="#111820"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <text
      x="328"
      y="200"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#6fc3e8"
    >
      Connectors
    </text>

    {/* app: tablet + phone */}
    <rect
      x="400"
      y="60"
      width="200"
      height="250"
      rx="18"
      fill="#1a2a3a"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <rect x="409" y="69" width="182" height="232" rx="11" fill="#ffffff" />
    <path
      d="M409 107 V80 Q409 69 420 69 H580 Q591 69 591 80 V107 Z"
      fill="#046999"
    />
    <text x="423" y="94" fontSize="14" fontWeight="700" fill="#ffffff">
      Open jobs
    </text>
    {[
      { y: 114, t: "Smith St", p: "New" },
      { y: 160, t: "Park Rd", p: "Quoted" },
      { y: 206, t: "Beach Rd", p: "Won" },
    ].map(({ y, t, p }) => (
      <g key={t}>
        <line x1="409" x2="591" y1={y} y2={y} stroke="#e3e8ec" />
        <text x="423" y={y + 30} fontSize="14" fill="#0d1b2a">
          {t}
        </text>
        <rect
          x="508"
          y={y + 13}
          width="68"
          height="24"
          rx="12"
          fill="#e8f4fa"
        />
        <text
          x="542"
          y={y + 30}
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill="#046999"
        >
          {p}
        </text>
      </g>
    ))}
    <rect x="423" y="254" width="154" height="34" rx="9" fill="#046999" />
    <text
      x="500"
      y="276"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
    >
      Add job
    </text>
    <text
      x="500"
      y="346"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
    >
      Your Power App
    </text>
    <text
      x="500"
      y="366"
      textAnchor="middle"
      fontSize="14"
      fill="#ffffff"
      fillOpacity="0.75"
    >
      Phone, tablet or browser
    </text>

    {/* outputs */}
    {outputs.map(({ y, label, icon }) => (
      <g key={label}>
        <rect
          x="726"
          y={y}
          width="214"
          height="56"
          rx="12"
          fill="#18232e"
          stroke="#ffffff"
          strokeOpacity="0.18"
        />
        <circle
          cx="726"
          cy={y + 28}
          r="5"
          fill="#111820"
          stroke="#6fc3e8"
          strokeWidth="2"
        />
        <Icon kind={icon} x={744} y={y + 16} />
        <text x="782" y={y + 34} fontSize="14" fontWeight="700" fill="#ffffff">
          {label}
        </text>
      </g>
    ))}
  </svg>
);

export default PappsDataSvg;
