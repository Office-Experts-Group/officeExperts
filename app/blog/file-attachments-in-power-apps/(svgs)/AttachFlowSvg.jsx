// /app/blog/file-attachments-in-power-apps/(svgs)/AttachFlowSvg.jsx
// Anatomy of the save: app, list, flow and library, with six numbered pins
// that match the "How it all works together" list.
// Hex values map to tokens: #046999 $accent, #e8f4fa $accent-light,
// #0d1b2a $text-primary, #4a5568 $text-secondary, #9a9da1 $text-muted,
// #f7f8f9 $light-bg, #d4d6d9 $line-strong, #ffffff $white.

const Pin = ({ cx, cy, n }) => (
  <g>
    <circle
      cx={cx}
      cy={cy}
      r="13"
      fill="#046999"
      stroke="#ffffff"
      strokeWidth="2"
    />
    <text
      x={cx}
      y={cy + 5}
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      {n}
    </text>
  </g>
);

const Zone = ({ x, y, text }) => (
  <text
    x={x}
    y={y}
    fontSize="14"
    fontWeight="700"
    letterSpacing="1"
    fill="#046999"
  >
    {text}
  </text>
);

const Block = ({ y, title, sub, solid }) => (
  <g>
    <rect
      x="346"
      y={y}
      width="198"
      height="56"
      rx="10"
      fill={solid ? "#046999" : "#ffffff"}
      stroke="#046999"
      strokeOpacity={solid ? 1 : 0.45}
    />
    <text
      x="360"
      y={y + 22}
      fontSize="14"
      fontWeight="700"
      fill={solid ? "#ffffff" : "#0d1b2a"}
    >
      {title}
    </text>
    <text
      x="360"
      y={y + 40}
      fontSize="14"
      fill={solid ? "#ffffff" : "#4a5568"}
      fillOpacity={solid ? 0.9 : 1}
    >
      {sub}
    </text>
  </g>
);

const AttachFlowSvg = () => (
  <svg
    viewBox="0 0 900 530"
    role="img"
    aria-labelledby="fa-flow-title fa-flow-desc"
    fontFamily="aptos"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="fa-flow-title">What happens when a user clicks Save</title>
    <desc id="fa-flow-desc">
      Six numbered steps. The app saves the record to a SharePoint list and gets
      the new record ID back. It then calls a flow once per file. The flow
      creates each file in a document library and sets its ParentId to the
      record ID, so a gallery can later filter the library by that ID.
    </desc>
    <defs>
      <marker
        id="fa-flow-arrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto"
      >
        <path d="M1 1 9 5 1 9z" fill="#046999" />
      </marker>
    </defs>

    <Zone x={20} y={38} text="POWER APPS" />
    <Zone x={330} y={38} text="SHAREPOINT LIST" />
    <Zone x={330} y={222} text="POWER AUTOMATE" />
    <Zone x={690} y={38} text="DOCUMENT LIBRARY" />
    <Zone x={690} y={262} text="ON THE VIEW SCREEN" />

    {/* app */}
    <rect
      x="20"
      y="48"
      width="230"
      height="462"
      rx="14"
      fill="#f7f8f9"
      stroke="#d4d6d9"
    />
    <text x="36" y="80" fontSize="15" fontWeight="700" fill="#0d1b2a">
      New request
    </text>
    <rect
      x="36"
      y="92"
      width="198"
      height="28"
      rx="7"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <text x="46" y="111" fontSize="14" fill="#4a5568">
      Roof inspection
    </text>
    <rect
      x="36"
      y="134"
      width="198"
      height="130"
      rx="10"
      fill="#ffffff"
      stroke="#046999"
      strokeOpacity="0.6"
      strokeDasharray="5 4"
    />
    <text x="46" y="156" fontSize="14" fontWeight="700" fill="#046999">
      Attach files
    </text>
    {[
      ["quote.pdf", 168],
      ["photo.jpg", 196],
      ["scope.docx", 224],
    ].map(([name, y]) => (
      <g key={name}>
        <rect x="46" y={y} width="178" height="24" rx="6" fill="#e8f4fa" />
        <path
          d={`M54 ${y + 5}h6l4 4v9a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1Z`}
          fill="none"
          stroke="#046999"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <text x="72" y={y + 17} fontSize="14" fill="#0d1b2a">
          {name}
        </text>
      </g>
    ))}
    <rect x="118" y="280" width="116" height="34" rx="8" fill="#046999" />
    <text
      x="176"
      y="302"
      fontSize="15"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      Save
    </text>
    <rect
      x="36"
      y="326"
      width="118"
      height="26"
      rx="13"
      fill="#e8f4fa"
      stroke="#046999"
      strokeOpacity="0.4"
    />
    <text
      x="95"
      y="344"
      fontSize="14"
      fontWeight="700"
      fill="#046999"
      textAnchor="middle"
    >
      RecId = 42
    </text>
    <text x="36" y="384" fontSize="14" fill="#4a5568">
      Patch saves the record,
    </text>
    <text x="36" y="404" fontSize="14" fill="#4a5568">
      then ForAll loops over
    </text>
    <text x="36" y="424" fontSize="14" fill="#4a5568">
      the files.
    </text>

    {/* list */}
    <rect
      x="330"
      y="48"
      width="230"
      height="124"
      rx="12"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <text x="346" y="78" fontSize="14" fontWeight="700" fill="#9a9da1">
      ID
    </text>
    <text x="396" y="78" fontSize="14" fontWeight="700" fill="#9a9da1">
      Title
    </text>
    <path d="M330 88h230" stroke="#d4d6d9" />
    <text x="346" y="112" fontSize="14" fill="#4a5568">
      17
    </text>
    <text x="396" y="112" fontSize="14" fill="#4a5568">
      Site visit
    </text>
    <rect x="334" y="122" width="222" height="28" rx="6" fill="#e8f4fa" />
    <text x="346" y="141" fontSize="14" fontWeight="700" fill="#046999">
      42
    </text>
    <text x="396" y="141" fontSize="14" fontWeight="700" fill="#046999">
      Roof inspection
    </text>

    {/* flow */}
    <rect
      x="330"
      y="232"
      width="230"
      height="278"
      rx="12"
      fill="#f7f8f9"
      stroke="#d4d6d9"
      strokeDasharray="6 4"
    />
    <Block y={246} solid title="Power Apps (V2)" sub="inputs: file, ParentId" />
    <Block y={310} title="Create file" sub="saves to the library" />
    <Block y={374} title="Update file properties" sub="sets ParentId" />
    <Block y={438} title="Respond to Power Apps" sub="hands control back" />
    <path
      d="M445 302v8M445 366v8M445 430v8"
      stroke="#046999"
      strokeOpacity="0.5"
      strokeWidth="2"
    />

    {/* library */}
    <rect
      x="690"
      y="48"
      width="200"
      height="176"
      rx="12"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <text x="704" y="78" fontSize="14" fontWeight="700" fill="#9a9da1">
      Name
    </text>
    <text x="800" y="78" fontSize="14" fontWeight="700" fill="#9a9da1">
      ParentId
    </text>
    <path d="M690 88h200" stroke="#d4d6d9" />
    <rect x="694" y="94" width="192" height="84" rx="6" fill="#e8f4fa" />
    {[
      ["quote.pdf", "42", 112],
      ["photo.jpg", "42", 140],
      ["scope.docx", "42", 168],
    ].map(([n, id, y]) => (
      <g key={n}>
        <text x="704" y={y} fontSize="14" fontWeight="700" fill="#046999">
          {n}
        </text>
        <text x="800" y={y} fontSize="14" fontWeight="700" fill="#046999">
          {id}
        </text>
      </g>
    ))}
    <text x="704" y="203" fontSize="14" fill="#9a9da1">
      other.xlsx
    </text>
    <text x="800" y="203" fontSize="14" fill="#9a9da1">
      17
    </text>

    {/* gallery on view screen */}
    <rect
      x="690"
      y="270"
      width="200"
      height="180"
      rx="12"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <text x="704" y="298" fontSize="14" fontWeight="700" fill="#0d1b2a">
      Files for record 42
    </text>
    {[
      ["quote.pdf", 326],
      ["photo.jpg", 352],
      ["scope.docx", 378],
    ].map(([n, y]) => (
      <g key={n}>
        <circle
          cx="712"
          cy={y - 5}
          r="6"
          fill="#e8f4fa"
          stroke="#046999"
          strokeOpacity="0.5"
        />
        <text x="728" y={y} fontSize="14" fill="#4a5568">
          {n}
        </text>
      </g>
    ))}
    <text x="704" y="426" fontSize="14" fontWeight="700" fill="#046999">
      ParentId = ID
    </text>

    {/* arrows */}
    <g fill="none" stroke="#046999" strokeWidth="2" strokeLinejoin="round">
      <path d="M234 297H268V110H330" markerEnd="url(#fa-flow-arrow)" />
      <path
        d="M330 150H292V339H158"
        strokeDasharray="6 5"
        markerEnd="url(#fa-flow-arrow)"
      />
      <path d="M250 430H314V274H346" markerEnd="url(#fa-flow-arrow)" />
      <path d="M560 400H625V190H690" markerEnd="url(#fa-flow-arrow)" />
      <path d="M560 130H690" strokeDasharray="2 5" strokeLinecap="round" />
      <path d="M875 224V270" markerEnd="url(#fa-flow-arrow)" />
    </g>
    <rect
      x="571"
      y="117"
      width="108"
      height="26"
      rx="13"
      fill="#ffffff"
      stroke="#046999"
      strokeOpacity="0.45"
    />
    <text
      x="625"
      y="135"
      fontSize="14"
      fontWeight="700"
      fill="#046999"
      textAnchor="middle"
    >
      ParentId = ID
    </text>

    <Pin cx={118} cy={282} n={1} />
    <Pin cx={268} cy={190} n={2} />
    <Pin cx={292} cy={250} n={3} />
    <Pin cx={314} cy={360} n={4} />
    <Pin cx={625} cy={300} n={5} />
    <Pin cx={625} cy={96} n={6} />
  </svg>
);

export default AttachFlowSvg;
