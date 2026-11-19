// /app/services/microsoft-excel/(svgs)/ExcelIntroDiagram.jsx
// Informative diagram for ExcelIntro: how a custom workbook fits together.
// Inputs (a data entry form and imported files) feed one structured table,
// a VBA macro works on that table, and the outputs are a dashboard, a PDF
// report and an email to managers.
//
// Colours (hard-coded hex, matching globals.scss tokens):
//   #ffffff $white   #f7f8f9 $light-bg   #e3e8ec $line   #d4d6d9 $line-strong
//   #046999 $accent  #e8f4fa $accent-light  #6fc3e8 $accent-on-dark
//   #111820 $dark-bg #0d1b2a $text-primary  #4a5568 $text-secondary

const FILES = ["Sales export.csv", "Stock levels.xlsx", "Bank feed.csv"];
const fileY = (i) => 258 + i * 50;
const TABLE_ROWS = [
  [34, 30, 46],
  [40, 24, 38],
  [30, 34, 52],
  [38, 28, 42],
];
const DASH_BARS = [18, 26, 22, 34, 30, 40];

const Card = ({ y, h, x, w, fill = "#ffffff" }) => (
  <rect
    x={x}
    y={y}
    width={w}
    height={h}
    rx="14"
    fill={fill}
    stroke={fill === "#ffffff" ? "#e3e8ec" : "none"}
  />
);

const ExcelIntroDiagram = () => (
  <svg
    viewBox="0 0 640 430"
    role="img"
    aria-labelledby="eid-title eid-desc"
    fontFamily="aptos"
  >
    <title id="eid-title">How a custom Excel workbook fits together</title>
    <desc id="eid-desc">
      A data entry form and three imported files (a sales export, stock levels
      and a bank feed) feed one structured orders table with clean formulas. A
      VBA macro refreshes the table and produces the outputs: a live dashboard,
      a monthly PDF report and an email to managers.
    </desc>

    <defs>
      <marker
        id="eid-arrow"
        viewBox="0 0 8 8"
        refX="7"
        refY="4"
        markerWidth="8"
        markerHeight="8"
        orient="auto"
      >
        <path d="M0 0L8 4L0 8z" fill="#046999" />
      </marker>
    </defs>

    {/* Column headings */}
    {[
      { x: 85, text: "WHAT COMES IN" },
      { x: 320, text: "WHAT WE BUILD" },
      { x: 555, text: "WHAT YOU GET" },
    ].map((col) => (
      <text
        key={col.text}
        x={col.x}
        y="24"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        letterSpacing="1"
        fill="#046999"
      >
        {col.text}
      </text>
    ))}

    {/* ── Inputs: data entry form ── */}
    <Card x={0} y={44} w={170} h={196} />
    <text x="16" y="70" fontSize="15" fontWeight="700" fill="#0d1b2a">
      New order form
    </text>
    <text x="16" y="96" fontSize="14" fill="#4a5568">
      Customer
    </text>
    <rect
      x="16"
      y="104"
      width="138"
      height="28"
      rx="6"
      fill="#f7f8f9"
      stroke="#e3e8ec"
    />
    <text x="26" y="123" fontSize="14" fill="#0d1b2a">
      Harbour Cafe
    </text>
    <text x="16" y="152" fontSize="14" fill="#4a5568">
      Region
    </text>
    <rect
      x="16"
      y="160"
      width="138"
      height="28"
      rx="6"
      fill="#f7f8f9"
      stroke="#e3e8ec"
    />
    <text x="26" y="179" fontSize="14" fill="#0d1b2a">
      NSW
    </text>
    <path
      d="M134 171l5 5 5-5"
      fill="none"
      stroke="#4a5568"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="16" y="198" width="72" height="28" rx="6" fill="#046999" />
    <text
      x="52"
      y="217"
      textAnchor="middle"
      fontSize="14"
      fontWeight="600"
      fill="#ffffff"
    >
      Save
    </text>

    {/* ── Inputs: imported files ── */}
    {FILES.map((name, i) => {
      const y = fileY(i);
      return (
        <g key={name}>
          <Card x={0} y={y} w={170} h={42} />
          <path
            d={`M12 ${y + 9}h12l6 6v18H12z`}
            fill="#e8f4fa"
            stroke="#046999"
            strokeWidth="1.2"
          />
          <path
            d={`M15 ${y + 22}h12M15 ${y + 27}h9`}
            stroke="#046999"
            strokeWidth="1.2"
          />
          <text x="40" y={y + 26} fontSize="14" fill="#0d1b2a">
            {name}
          </text>
        </g>
      );
    })}

    {/* ── Build: structured table ── */}
    <Card x={228} y={44} w={184} h={204} />
    <text x="244" y="70" fontSize="15" fontWeight="700" fill="#0d1b2a">
      Orders table
    </text>
    <rect x="244" y="82" width="152" height="24" rx="4" fill="#046999" />
    {[
      { x: 252, text: "Date", anchor: "start" },
      { x: 300, text: "Region", anchor: "start" },
      { x: 388, text: "Total", anchor: "end" },
    ].map((head) => (
      <text
        key={head.text}
        x={head.x}
        y="99"
        textAnchor={head.anchor}
        fontSize="14"
        fontWeight="600"
        fill="#ffffff"
      >
        {head.text}
      </text>
    ))}
    {TABLE_ROWS.map((widths, r) => {
      const y = 106 + r * 24;
      return (
        <g key={r}>
          {r % 2 === 1 && (
            <rect x="244" y={y} width="152" height="24" fill="#f7f8f9" />
          )}
          <rect
            x="252"
            y={y + 9}
            width={widths[0]}
            height="6"
            rx="3"
            fill="#d4d6d9"
          />
          <rect
            x="300"
            y={y + 9}
            width={widths[1]}
            height="6"
            rx="3"
            fill="#d4d6d9"
          />
          <rect
            x={388 - widths[2]}
            y={y + 9}
            width={widths[2]}
            height="6"
            rx="3"
            fill="#6fc3e8"
          />
        </g>
      );
    })}
    <rect
      x="244"
      y="212"
      width="132"
      height="24"
      rx="12"
      fill="#e8f4fa"
      stroke="#046999"
      strokeOpacity="0.28"
    />
    <text x="256" y="229" fontSize="14" fontWeight="600" fill="#046999">
      =XLOOKUP(…)
    </text>

    {/* ── Build: VBA macro ── */}
    <Card x={228} y={268} w={184} h={142} fill="#111820" />
    <text x="244" y="294" fontSize="15" fontWeight="700" fill="#ffffff">
      VBA macro
    </text>
    <circle cx="388" cy="289" r="12" fill="#046999" />
    <path d="M384.5 283.5l9 5.5-9 5.5z" fill="#ffffff" />
    {[
      { x: 244, text: "Sub BuildReport()", tone: "#6fc3e8" },
      { x: 258, text: "RefreshAll", tone: "#ffffff" },
      { x: 258, text: "SendPdf", tone: "#ffffff" },
      { x: 244, text: "End Sub", tone: "#6fc3e8" },
    ].map((line, i) => (
      <text
        key={line.text}
        x={line.x}
        y={318 + i * 22}
        fontSize="14"
        fontFamily="monospace"
        fill={line.tone}
        fillOpacity={line.tone === "#ffffff" ? 0.8 : 1}
      >
        {line.text}
      </text>
    ))}

    {/* ── Outputs: dashboard ── */}
    <Card x={470} y={44} w={170} h={152} />
    <text x="486" y="70" fontSize="15" fontWeight="700" fill="#0d1b2a">
      Dashboard
    </text>
    <text x="486" y="100" fontSize="20" fontWeight="700" fill="#0d1b2a">
      $84.2k
    </text>
    <text x="486" y="120" fontSize="14" fill="#4a5568">
      This month
    </text>
    <circle
      cx="608"
      cy="100"
      r="16"
      fill="none"
      stroke="#e8f4fa"
      strokeWidth="7"
    />
    <circle
      cx="608"
      cy="100"
      r="16"
      fill="none"
      stroke="#046999"
      strokeWidth="7"
      strokeDasharray="70 101"
      transform="rotate(-90 608 100)"
    />
    {DASH_BARS.map((h, i) => (
      <rect
        key={i}
        x={486 + i * 22}
        y={180 - h}
        width="14"
        height={h}
        rx="3"
        fill={i === DASH_BARS.length - 1 ? "#046999" : "#6fc3e8"}
      />
    ))}
    <path d="M482 180H624" stroke="#e3e8ec" />

    {/* ── Outputs: PDF report ── */}
    <Card x={470} y={214} w={170} h={86} />
    <path
      d="M486 232h20l8 8v30h-28z"
      fill="#ffffff"
      stroke="#d4d6d9"
      strokeWidth="1.4"
    />
    <path d="M506 232v8h8" fill="none" stroke="#d4d6d9" strokeWidth="1.4" />
    <rect x="490" y="246" width="14" height="4" rx="1" fill="#046999" />
    <path
      d="M490 256h18M490 262h14"
      stroke="#d4d6d9"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <text x="526" y="252" fontSize="14" fontWeight="600" fill="#0d1b2a">
      Report.pdf
    </text>
    <text x="526" y="272" fontSize="14" fill="#4a5568">
      Built each month
    </text>

    {/* ── Outputs: email ── */}
    <Card x={470} y={318} w={170} h={92} />
    <rect
      x="486"
      y="342"
      width="30"
      height="22"
      rx="3"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.4"
    />
    <path
      d="M487 344l14 10 14-10"
      fill="none"
      stroke="#046999"
      strokeWidth="1.4"
    />
    <text x="528" y="350" fontSize="14" fill="#4a5568">
      Emailed to
    </text>
    <text x="528" y="370" fontSize="14" fontWeight="600" fill="#0d1b2a">
      managers
    </text>

    {/* ── Flow arrows ── */}
    <g
      fill="none"
      stroke="#046999"
      strokeWidth="1.75"
      strokeLinecap="round"
      markerEnd="url(#eid-arrow)"
    >
      <path d="M170 142C198 142 200 128 225 128" />
      <path d="M192 329C210 329 206 214 225 214" />
      <path d="M320 249V264" />
      <path d="M412 120C440 120 442 118 467 118" />
      <path d="M412 318C440 318 442 256 467 256" />
      <path d="M412 352C440 352 442 362 467 362" />
    </g>
    {/* Files join before the table (Power Query style combine) */}
    <path
      d={`M170 ${fileY(0) + 21}H192M170 ${fileY(1) + 21}H192M170 ${fileY(2) + 21}H192M192 ${fileY(0) + 21}V${fileY(2) + 21}`}
      fill="none"
      stroke="#046999"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
  </svg>
);

export default ExcelIntroDiagram;
