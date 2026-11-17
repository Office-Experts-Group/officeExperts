// /app/services/microsoft-power-platform/power-apps/(svgs)/PappsIntroSvg.jsx
// Informative diagram for the intro: paper forms, spreadsheets with flagged
// cells and emailed copies are replaced by one app, which reads and writes the
// existing data and runs approvals and alerts behind the scenes.
// Hex values and the tokens they match:
//   #046999 $accent, #6fc3e8 $accent-on-dark, #e8f4fa $accent-light,
//   #0d1b2a $text-primary, #4a5568 $text-secondary, #9a9da1 $text-muted,
//   #e3e8ec $line, #d4d6d9 $line-strong, #f7f8f9 $light-bg, #ffffff $white,
//   #c0392b $replace-x, #fdf6f5 $before-bg

const PappsIntroSvg = () => (
  <svg
    viewBox="0 0 960 390"
    role="img"
    aria-labelledby="papps-intro-title papps-intro-desc"
    fontFamily="aptos"
    width="100%"
    height="auto"
    style={{ display: "block", width: "100%", height: "auto" }}
  >
    <title id="papps-intro-title">
      From paper forms and spreadsheets to one Power App
    </title>
    <desc id="papps-intro-desc">
      On the left, paper forms, a spreadsheet with flagged cells and emailed
      copies in several versions. In the middle, one app on a tablet and a
      phone. On the right, the app reads and writes your existing data, runs
      approvals automatically and sends alerts by email or chat.
    </desc>

    <defs>
      <marker
        id="papps-intro-arrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="8"
        markerHeight="8"
        orient="auto-start-reverse"
      >
        <path d="M1 1l8 4-8 4z" fill="#046999" />
      </marker>
      <clipPath id="papps-intro-tablet-clip">
        <rect x="403" y="79" width="152" height="232" rx="11" />
      </clipPath>
      <clipPath id="papps-intro-phone-clip">
        <rect x="554" y="188" width="86" height="156" rx="11" />
      </clipPath>
    </defs>

    {/* column headings */}
    <text x="20" y="30" fontSize="14" fontWeight="700" fill="#4a5568">
      How it runs today
    </text>
    <text x="394" y="30" fontSize="14" fontWeight="700" fill="#046999">
      With a Power App
    </text>
    <text x="690" y="30" fontSize="14" fontWeight="700" fill="#4a5568">
      Behind the scenes
    </text>

    {/* paper form */}
    <g transform="translate(30 56) rotate(-3 55 70)">
      <rect width="110" height="140" rx="8" fill="#ffffff" stroke="#d4d6d9" />
      <rect x="36" y="-6" width="38" height="14" rx="4" fill="#9a9da1" />
      <rect x="12" y="24" width="54" height="7" rx="3.5" fill="#0d1b2a" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="12" y={52 + i * 20} width="86" height="2" fill="#d4d6d9" />
          <path
            d={`M14 ${49 + i * 20} q5 -8 10 0 t10 0 t10 0 ${i % 2 ? "t10 0" : "t12 0"}`}
            fill="none"
            stroke="#4a5568"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
      ))}
      <circle
        cx="82"
        cy="116"
        r="13"
        fill="none"
        stroke="#9a9da1"
        strokeOpacity="0.45"
        strokeWidth="3"
      />
    </g>
    <text x="85" y="224" textAnchor="middle" fontSize="14" fill="#4a5568">
      Paper forms
    </text>

    {/* spreadsheet with flagged cells */}
    <g transform="translate(170 56)">
      <rect width="140" height="140" rx="8" fill="#ffffff" stroke="#d4d6d9" />
      <rect width="140" height="24" rx="8" fill="#e8f4fa" />
      <rect y="12" width="140" height="12" fill="#e8f4fa" />
      {[1, 2, 3].map((c) => (
        <line
          key={`c${c}`}
          x1={c * 35}
          x2={c * 35}
          y1="0"
          y2="140"
          stroke="#e3e8ec"
        />
      ))}
      {[1, 2, 3, 4].map((r) => (
        <line
          key={`r${r}`}
          x1="0"
          x2="140"
          y1={24 + r * 23.2}
          y2={24 + r * 23.2}
          stroke="#e3e8ec"
        />
      ))}
      {[0, 1, 2, 3].map((c) => (
        <rect
          key={`h${c}`}
          x={c * 35 + 8}
          y="9"
          width="18"
          height="5"
          rx="2.5"
          fill="#046999"
          opacity="0.55"
        />
      ))}
      <rect
        x="36"
        y="48"
        width="33"
        height="21.2"
        fill="#fdf6f5"
        stroke="#c0392b"
        strokeWidth="1.5"
      />
      <text
        x="52.5"
        y="64"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#c0392b"
      >
        ?
      </text>
      <rect
        x="106"
        y="94.4"
        width="33"
        height="21.2"
        fill="#fdf6f5"
        stroke="#c0392b"
        strokeWidth="1.5"
      />
      <text
        x="122.5"
        y="110"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#c0392b"
      >
        !
      </text>
      {[
        [8, 34],
        [8, 57],
        [43, 80],
        [78, 34],
        [78, 80],
        [8, 103],
        [43, 126],
      ].map(([x, y], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width={i % 2 ? 16 : 22}
          height="5"
          rx="2.5"
          fill="#9a9da1"
          opacity="0.6"
        />
      ))}
    </g>
    <text x="240" y="224" textAnchor="middle" fontSize="14" fill="#4a5568">
      Spreadsheets
    </text>

    {/* emailed copies */}
    <g transform="translate(30 262)">
      <rect width="110" height="68" rx="8" fill="#ffffff" stroke="#d4d6d9" />
      <path
        d="M4 8 L55 42 L106 8"
        fill="none"
        stroke="#9a9da1"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="98" cy="6" r="9" fill="#c0392b" />
      <text
        x="98"
        y="11"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#ffffff"
      >
        3
      </text>
    </g>
    <text x="85" y="356" textAnchor="middle" fontSize="14" fill="#4a5568">
      Emailed copies
    </text>

    {/* version chips */}
    <g transform="translate(170 268)">
      <rect width="140" height="34" rx="9" fill="#fdf6f5" stroke="#c0392b" />
      <text x="70" y="22" textAnchor="middle" fontSize="14" fill="#c0392b">
        costing_v7_FINAL
      </text>
    </g>
    <g transform="translate(184 308)">
      <rect width="126" height="28" rx="9" fill="#ffffff" stroke="#d4d6d9" />
      <text x="63" y="19" textAnchor="middle" fontSize="14" fill="#4a5568">
        costing_v6
      </text>
    </g>
    <text x="240" y="356" textAnchor="middle" fontSize="14" fill="#4a5568">
      Which version?
    </text>

    {/* replace arrow */}
    <polygon
      points="330,170 360,170 360,154 388,190 360,226 360,210 330,210"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="2"
      strokeLinejoin="round"
    />

    {/* tablet app */}
    <rect x="394" y="70" width="170" height="250" rx="18" fill="#0d1b2a" />
    <g clipPath="url(#papps-intro-tablet-clip)">
      <rect x="403" y="79" width="152" height="232" fill="#ffffff" />
      <rect x="403" y="79" width="152" height="38" fill="#046999" />
      <text x="415" y="103" fontSize="14" fontWeight="700" fill="#ffffff">
        Job request
      </text>
      <text x="415" y="140" fontSize="14" fill="#4a5568">
        Customer
      </text>
      <rect
        x="415"
        y="146"
        width="128"
        height="28"
        rx="7"
        fill="#f7f8f9"
        stroke="#e3e8ec"
      />
      <text x="425" y="165" fontSize="14" fill="#0d1b2a">
        Smith &amp; Co
      </text>
      <text x="415" y="194" fontSize="14" fill="#4a5568">
        Job type
      </text>
      <rect
        x="415"
        y="200"
        width="128"
        height="28"
        rx="7"
        fill="#f7f8f9"
        stroke="#e3e8ec"
      />
      <text x="425" y="219" fontSize="14" fill="#0d1b2a">
        Inspection
      </text>
      <path
        d="M526 211 l5 5 l5 -5"
        fill="none"
        stroke="#4a5568"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="415" y="254" fontSize="14" fill="#4a5568">
        Approval
      </text>
      <rect x="513" y="240" width="30" height="18" rx="9" fill="#046999" />
      <circle cx="534" cy="249" r="6.5" fill="#ffffff" />
      <rect x="415" y="268" width="128" height="34" rx="9" fill="#046999" />
      <text
        x="479"
        y="290"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#ffffff"
      >
        Submit
      </text>
    </g>

    {/* phone app */}
    <rect x="548" y="180" width="98" height="172" rx="17" fill="#0d1b2a" />
    <g clipPath="url(#papps-intro-phone-clip)">
      <rect x="554" y="188" width="86" height="156" fill="#ffffff" />
      <rect x="554" y="188" width="86" height="30" fill="#046999" />
      <text x="563" y="208" fontSize="14" fontWeight="700" fill="#ffffff">
        Approvals
      </text>
      <text x="563" y="240" fontSize="14" fill="#0d1b2a">
        Smith St
      </text>
      <rect x="563" y="250" width="62" height="24" rx="12" fill="#e8f4fa" />
      <text
        x="594"
        y="267"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#046999"
      >
        Quote
      </text>
      <rect x="563" y="290" width="68" height="38" rx="9" fill="#046999" />
      <text
        x="597"
        y="314"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#ffffff"
      >
        Approve
      </text>
    </g>
    <text
      x="520"
      y="378"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#0d1b2a"
    >
      One app, any device
    </text>

    {/* app to data */}
    <text x="631" y="108" textAnchor="middle" fontSize="14" fill="#4a5568">
      Reads and writes
    </text>
    <path
      d="M568 120 L 688 120"
      fill="none"
      stroke="#046999"
      strokeWidth="2.5"
      markerStart="url(#papps-intro-arrow)"
      markerEnd="url(#papps-intro-arrow)"
    />
    <path
      d="M652 272 L 688 272"
      fill="none"
      stroke="#046999"
      strokeWidth="2.5"
      markerEnd="url(#papps-intro-arrow)"
    />
    <path
      d="M652 332 L 688 332"
      fill="none"
      stroke="#046999"
      strokeWidth="2.5"
      markerEnd="url(#papps-intro-arrow)"
    />

    {/* existing data cylinder */}
    <path
      d="M700 84 v76 a60 16 0 0 0 120 0 v-76"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
    />
    <path
      d="M700 112 a60 16 0 0 0 120 0 M700 138 a60 16 0 0 0 120 0"
      fill="none"
      stroke="#046999"
      strokeOpacity="0.4"
      strokeWidth="2"
    />
    <ellipse
      cx="760"
      cy="84"
      rx="60"
      ry="16"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="2"
    />
    <text
      x="760"
      y="204"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#0d1b2a"
    >
      Your existing data
    </text>
    <text x="760" y="224" textAnchor="middle" fontSize="14" fill="#4a5568">
      Lists, Excel, SQL
    </text>

    {/* automation chip */}
    <rect x="690" y="250" width="240" height="44" rx="12" fill="#0d1b2a" />
    <path d="M722 258 l-12 17 h9 l-3 13 l13 -18 h-9 z" fill="#6fc3e8" />
    <text x="742" y="277" fontSize="14" fontWeight="700" fill="#ffffff">
      Automatic approvals
    </text>

    {/* alerts chip */}
    <rect
      x="690"
      y="310"
      width="240"
      height="44"
      rx="12"
      fill="#e8f4fa"
      stroke="#046999"
    />
    <path
      d="M716 342 h12 M718 342 v-8 a4 4 0 0 1 8 0 v8"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="722" cy="346" r="2" fill="#046999" />
    <text x="742" y="337" fontSize="14" fontWeight="700" fill="#0d1b2a">
      Alerts by email or chat
    </text>
  </svg>
);

export default PappsIntroSvg;
