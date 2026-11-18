// /app/services/microsoft-excel/data-manipulation/(svgs)/DataManipulationProblemArt.jsx
//
// Spot illustrations for the DataManipulationProblem bento tiles.
// Decorative only (aria-hidden). Hex values are hard-coded; token names:
//   #046999 $accent          #034e72 $accent-dark     #6fc3e8 $accent-on-dark
//   #e8f4fa $accent-light    #111820 $dark-bg         #18232e $dark-surface
//   #1a2a3a $dark-mid        #f7f8f9 $light-bg        #f2f3f5 $grayBGC
//   #d4d6d9 $line-strong     #0d1b2a $text-primary    #4a5568 $text-secondary
//   #c0392b $replace-x       #fdf6f5 $before-bg       #ffffff $white
// Each art is drawn for the tile it sits on (see tone in the component).

const svgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  fontFamily: "aptos",
  "aria-hidden": "true",
  focusable: "false",
};

// ── 1. Manual copying · sits on accent ($accent #046999) ────────────────────
export const DmpCopyArt = () => (
  <svg viewBox="0 0 480 340" {...svgProps}>
    {/* System A */}
    <rect
      x="20"
      y="20"
      width="180"
      height="170"
      rx="14"
      fill="#034e72"
      stroke="#ffffff"
      strokeOpacity="0.25"
    />
    {[38, 52, 66].map((cx) => (
      <circle key={cx} cx={cx} cy="36" r="4" fill="#ffffff" fillOpacity="0.5" />
    ))}
    <rect
      x="26"
      y="104"
      width="168"
      height="24"
      rx="6"
      fill="#6fc3e8"
      fillOpacity="0.45"
      stroke="#6fc3e8"
    />
    {[54, 80, 106, 132, 158].map((y, r) =>
      [28, 84, 140].map((x, c) => (
        <g key={`${y}-${x}`}>
          <rect
            x={x}
            y={y}
            width="52"
            height="20"
            rx="4"
            fill="#ffffff"
            fillOpacity={r === 0 ? 0.22 : r === 2 ? 0 : 0.1}
          />
          <rect
            x={x + 8}
            y={y + 8}
            width={22 + ((r + c) % 3) * 8}
            height="4"
            rx="2"
            fill="#ffffff"
            fillOpacity="0.6"
          />
        </g>
      )),
    )}
    <text
      x="110"
      y="216"
      textAnchor="middle"
      fontSize="14"
      fill="#ffffff"
      fillOpacity="0.85"
    >
      System A
    </text>

    {/* System B */}
    <rect
      x="280"
      y="20"
      width="180"
      height="170"
      rx="14"
      fill="#034e72"
      stroke="#ffffff"
      strokeOpacity="0.25"
    />
    {[298, 312, 326].map((cx) => (
      <circle key={cx} cx={cx} cy="36" r="4" fill="#ffffff" fillOpacity="0.5" />
    ))}
    {[56, 90, 124].map((y) => (
      <rect
        key={y}
        x="296"
        y={y}
        width="48"
        height="4"
        rx="2"
        fill="#ffffff"
        fillOpacity="0.45"
      />
    ))}
    <rect
      x="296"
      y="64"
      width="148"
      height="22"
      rx="5"
      fill="#ffffff"
      fillOpacity="0.14"
    />
    <rect
      x="296"
      y="96"
      width="148"
      height="22"
      rx="5"
      fill="#ffffff"
      fillOpacity="0.92"
    />
    <rect x="306" y="105" width="64" height="4" rx="2" fill="#046999" />
    <rect
      x="296"
      y="128"
      width="148"
      height="22"
      rx="5"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.8"
      strokeDasharray="4 3"
    />
    <circle cx="428" cy="139" r="10" fill="#ffffff" />
    <text
      x="428"
      y="144"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#034e72"
    >
      !
    </text>
    <rect x="380" y="158" width="64" height="22" rx="5" fill="#ffffff" />
    <path
      d="M412 163v10m-4-4 4 4 4-4"
      fill="none"
      stroke="#034e72"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text
      x="370"
      y="216"
      textAnchor="middle"
      fontSize="14"
      fill="#ffffff"
      fillOpacity="0.85"
    >
      System B
    </text>

    {/* Copied row travelling between the two */}
    <path
      d="M194 116 214 110"
      stroke="#ffffff"
      strokeWidth="2"
      strokeDasharray="3 3"
    />
    <rect x="214" y="96" width="52" height="26" rx="6" fill="#6fc3e8" />
    <rect x="222" y="105" width="14" height="4" rx="2" fill="#034e72" />
    <rect x="240" y="105" width="18" height="4" rx="2" fill="#034e72" />
    <rect
      x="222"
      y="112"
      width="30"
      height="3"
      rx="1.5"
      fill="#034e72"
      fillOpacity="0.6"
    />
    <path
      d="M266 108 272 108"
      stroke="#ffffff"
      strokeWidth="2"
      strokeDasharray="3 3"
    />
    <polygon points="271,102 281,108 271,114" fill="#ffffff" />
    <polygon
      points="238,110 238,132 244,127 249,138 254,136 249,125 257,125"
      fill="#ffffff"
      stroke="#034e72"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M200 172 C230 172 246 139 272 139"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeDasharray="3 3"
    />
    <polygon points="271,133 281,139 271,145" fill="#ffffff" />

    {/* The daily grind: the same job, day after day */}
    {[20, 68, 116, 164, 212].map((x, i) => (
      <g key={x}>
        <rect
          x={x}
          y="238"
          width="40"
          height="40"
          rx="7"
          fill="#ffffff"
          fillOpacity={i === 4 ? 0.9 : 0.12}
          stroke="#ffffff"
          strokeOpacity="0.25"
        />
        {[248, 256, 264].map((y) => (
          <rect
            key={y}
            x={x + 8}
            y={y}
            width={i === 4 ? 24 : 18 + (y % 3) * 3}
            height="4"
            rx="2"
            fill={i === 4 ? "#046999" : "#ffffff"}
            fillOpacity={i === 4 ? 1 : 0.5}
          />
        ))}
      </g>
    ))}
    <text x="20" y="312" fontSize="14" fill="#ffffff" fillOpacity="0.85">
      Every morning
    </text>
    <path
      d="M268 258H348"
      stroke="#ffffff"
      strokeWidth="2"
      strokeDasharray="3 3"
    />
    <polygon points="346,252 356,258 346,264" fill="#ffffff" />
    <circle
      cx="400"
      cy="258"
      r="34"
      fill="#034e72"
      stroke="#ffffff"
      strokeWidth="2.5"
    />
    {[0, 90, 180, 270].map((a) => (
      <line
        key={a}
        x1="400"
        y1="228"
        x2="400"
        y2="233"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        transform={`rotate(${a} 400 258)`}
      />
    ))}
    <path
      d="M400 258V238M400 258l15 9"
      stroke="#6fc3e8"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="400" cy="258" r="3" fill="#ffffff" />
    <text
      x="400"
      y="314"
      textAnchor="middle"
      fontSize="14"
      fill="#ffffff"
      fillOpacity="0.85"
    >
      The first hour
    </text>
  </svg>
);

// ── 2. Stale reports · sits on dark surface ($dark-surface #18232e) ─────────
export const DmpStaleArt = () => (
  <svg viewBox="0 0 320 200" {...svgProps}>
    {[50, 80, 110, 140].map((y) => (
      <line
        key={y}
        x1="24"
        y1={y}
        x2="296"
        y2={y}
        stroke="#ffffff"
        strokeOpacity="0.07"
      />
    ))}
    <line
      x1="24"
      y1="150"
      x2="296"
      y2="150"
      stroke="#ffffff"
      strokeOpacity="0.3"
    />
    {[30, 72, 114, 156, 198].map((x, i) => (
      <g key={x}>
        <rect
          x={x}
          y={150 - [50, 70, 60, 85, 75][i]}
          width="30"
          height={[50, 70, 60, 85, 75][i]}
          rx="3"
          fill="#6fc3e8"
          fillOpacity="0.55"
        />
        <rect
          x={x}
          y={150 - [72, 60, 94, 58, 112][i]}
          width="30"
          height={[72, 60, 94, 58, 112][i]}
          rx="3"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.85"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
      </g>
    ))}
    {/* the gap between the report and reality */}
    <path
      d="M228 38H250M228 75H250"
      stroke="#ffffff"
      strokeOpacity="0.5"
      strokeDasharray="2 3"
    />
    <path d="M250 46V67" stroke="#6fc3e8" strokeWidth="2" />
    <polygon points="246,48 250,38 254,48" fill="#6fc3e8" />
    <polygon points="246,65 250,75 254,65" fill="#6fc3e8" />
    <text x="260" y="62" fontSize="14" fill="#ffffff" fillOpacity="0.85">
      gap
    </text>
    {/* clock that has already moved on */}
    <circle
      cx="36"
      cy="34"
      r="16"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <path
      d="M36 34V24M36 34l7 4"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M60 34H92"
      stroke="#ffffff"
      strokeOpacity="0.35"
      strokeDasharray="3 3"
    />
    {/* legend */}
    <rect
      x="24"
      y="170"
      width="14"
      height="10"
      rx="2"
      fill="#6fc3e8"
      fillOpacity="0.55"
    />
    <text x="44" y="180" fontSize="14" fill="#ffffff" fillOpacity="0.8">
      Last night’s export
    </text>
    <rect
      x="190"
      y="170"
      width="14"
      height="10"
      rx="2"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.85"
      strokeWidth="1.5"
      strokeDasharray="3 2"
    />
    <text x="210" y="180" fontSize="14" fill="#ffffff" fillOpacity="0.8">
      Right now
    </text>
  </svg>
);

// ── 3. Fragile spreadsheets · sits on light ($light-bg #f7f8f9) ─────────────
export const DmpFragileArt = () => (
  <svg viewBox="0 0 320 212" {...svgProps}>
    {/* source table, a column header renamed upstream */}
    <rect
      x="16"
      y="28"
      width="112"
      height="140"
      rx="10"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <rect x="24" y="36" width="96" height="22" rx="5" fill="#e8f4fa" />
    <rect
      x="32"
      y="44"
      width="40"
      height="6"
      rx="3"
      fill="#046999"
      fillOpacity="0.8"
    />
    <path
      d="M28 47H76"
      stroke="#c0392b"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="82"
      y="44"
      width="30"
      height="6"
      rx="3"
      fill="#c0392b"
      fillOpacity="0.75"
    />
    {[66, 86, 106, 126, 146].map((y, i) => (
      <g key={y}>
        <rect x="24" y={y} width="96" height="14" rx="4" fill="#f2f3f5" />
        <rect
          x="32"
          y={y + 5}
          width={30 + (i % 3) * 10}
          height="4"
          rx="2"
          fill="#4a5568"
          fillOpacity="0.5"
        />
      </g>
    ))}
    <text x="16" y="192" fontSize="14" fill="#4a5568">
      Renamed upstream
    </text>

    {/* the link that no longer holds */}
    <rect
      x="132"
      y="76"
      width="22"
      height="16"
      rx="8"
      fill="none"
      stroke="#046999"
      strokeWidth="2.5"
    />
    <rect
      x="162"
      y="76"
      width="22"
      height="16"
      rx="8"
      fill="none"
      stroke="#046999"
      strokeWidth="2.5"
    />
    <path
      d="M156 70l4 8-6 4 6 4-4 8"
      fill="none"
      stroke="#c0392b"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M150 64l-3-5M166 64l3-5M148 100l-4 4M168 100l4 4"
      stroke="#c0392b"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* workbook that depended on it */}
    <rect
      x="190"
      y="28"
      width="114"
      height="140"
      rx="10"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <rect x="198" y="36" width="98" height="22" rx="5" fill="#e8f4fa" />
    <rect
      x="206"
      y="44"
      width="36"
      height="6"
      rx="3"
      fill="#046999"
      fillOpacity="0.8"
    />
    {[66, 86].map((y, i) => (
      <g key={y}>
        <rect x="198" y={y} width="98" height="14" rx="4" fill="#f2f3f5" />
        <rect
          x="206"
          y={y + 5}
          width={34 + i * 14}
          height="4"
          rx="2"
          fill="#4a5568"
          fillOpacity="0.5"
        />
      </g>
    ))}
    <rect
      x="198"
      y="108"
      width="98"
      height="40"
      rx="6"
      fill="#fdf6f5"
      stroke="#c0392b"
      strokeWidth="1.5"
    />
    <text
      x="247"
      y="132"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#c0392b"
    >
      #REF!
    </text>
    <text x="190" y="192" fontSize="14" fill="#4a5568">
      Workbook breaks
    </text>
  </svg>
);

// ── 4. Cleaning overhead · sits on dark mid ($dark-mid #1a2a3a) ─────────────
export const DmpCleanArt = () => (
  <svg viewBox="0 0 360 250" {...svgProps}>
    {/* messy table */}
    <rect
      x="14"
      y="12"
      width="140"
      height="222"
      rx="10"
      fill="#111820"
      stroke="#ffffff"
      strokeOpacity="0.14"
    />
    <rect
      x="22"
      y="22"
      width="124"
      height="22"
      rx="4"
      fill="#ffffff"
      fillOpacity="0.12"
    />
    {[52, 96, 140, 184].map((y, i) => (
      <g key={y}>
        <rect
          x="22"
          y={y}
          width="124"
          height="38"
          rx="6"
          fill="#ffffff"
          fillOpacity="0.06"
          stroke={i === 2 ? "#6fc3e8" : "none"}
          strokeDasharray="4 3"
        />
        {i === 3 ? (
          <>
            {[32, 38, 44].map((cx) => (
              <circle
                key={cx}
                cx={cx}
                cy={y + 19}
                r="1.8"
                fill="#6fc3e8"
                fillOpacity="0.8"
              />
            ))}
            <text
              x="52"
              y={y + 24}
              fontSize="14"
              fill="#ffffff"
              fillOpacity="0.75"
            >
              Acme
            </text>
          </>
        ) : (
          <text
            x="32"
            y={y + 24}
            fontSize="14"
            fill="#ffffff"
            fillOpacity="0.75"
          >
            {["12/03", "03-12", "12/03"][i]}
          </text>
        )}
        <rect
          x="92"
          y={y + 17}
          width="44"
          height="5"
          rx="2.5"
          fill="#ffffff"
          fillOpacity="0.3"
        />
      </g>
    ))}
    <path
      d="M28 159H140"
      stroke="#c0392b"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* the pipeline in the middle */}
    <polygon
      points="160,70 212,70 196,116 196,150 176,150 176,116"
      fill="#046999"
      stroke="#6fc3e8"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    {[
      [172, 52],
      [190, 58],
      [204, 46],
      [182, 40],
    ].map(([cx, cy]) => (
      <circle
        key={`${cx}-${cy}`}
        cx={cx}
        cy={cy}
        r="3"
        fill="#ffffff"
        fillOpacity="0.55"
      />
    ))}
    <path d="M196 150H206" stroke="#6fc3e8" strokeWidth="2" />
    <polygon points="206,143 218,150 206,157" fill="#6fc3e8" />

    {/* clean table */}
    <rect
      x="224"
      y="12"
      width="122"
      height="222"
      rx="10"
      fill="#111820"
      stroke="#6fc3e8"
      strokeOpacity="0.5"
    />
    <rect
      x="232"
      y="22"
      width="106"
      height="22"
      rx="4"
      fill="#6fc3e8"
      fillOpacity="0.25"
    />
    {[52, 96, 140, 184].map((y, i) => (
      <g key={y}>
        <rect
          x="232"
          y={y}
          width="106"
          height="38"
          rx="6"
          fill="#ffffff"
          fillOpacity="0.06"
        />
        <text x="242" y={y + 24} fontSize="14" fill="#ffffff" fillOpacity="0.9">
          {["12/03", "03-12", "04-12", "Acme"][i]}
        </text>
        <rect
          x="288"
          y={y + 17}
          width="40"
          height="5"
          rx="2.5"
          fill="#6fc3e8"
          fillOpacity="0.7"
        />
      </g>
    ))}
    <circle cx="344" cy="14" r="12" fill="#6fc3e8" />
    <path
      d="M338 14l4 4 7-8"
      fill="none"
      stroke="#111820"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ── 5. Broken macros · sits on deep accent ($accent-dark #034e72) ───────────
export const DmpMacroArt = () => (
  <svg viewBox="0 0 320 200" {...svgProps}>
    <rect
      x="16"
      y="16"
      width="288"
      height="168"
      rx="14"
      fill="#111820"
      stroke="#ffffff"
      strokeOpacity="0.2"
    />
    <path d="M16 44H304" stroke="#ffffff" strokeOpacity="0.12" />
    {[34, 48, 62].map((cx) => (
      <circle
        key={cx}
        cx={cx}
        cy="30"
        r="4"
        fill="#ffffff"
        fillOpacity="0.45"
      />
    ))}
    <text x="32" y="68" fontSize="14" fill="#6fc3e8">
      Sub Monthly()
    </text>
    <rect
      x="48"
      y="82"
      width="120"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.4"
    />
    <rect
      x="48"
      y="98"
      width="84"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.4"
    />
    <rect
      x="48"
      y="114"
      width="48"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.4"
    />
    <rect
      x="132"
      y="114"
      width="36"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.4"
    />
    <path
      d="M104 106l6 6-8 4 8 4-4 8"
      fill="none"
      stroke="#c0392b"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="48"
      y="130"
      width="100"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.4"
    />
    <rect
      x="48"
      y="146"
      width="70"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.4"
    />
    <text x="32" y="168" fontSize="14" fill="#6fc3e8">
      End Sub
    </text>
    <rect x="176" y="96" width="116" height="40" rx="8" fill="#ffffff" />
    <text
      x="234"
      y="121"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#c0392b"
    >
      Runtime error
    </text>
    <path
      d="M172 116H162"
      stroke="#ffffff"
      strokeOpacity="0.6"
      strokeWidth="2"
      strokeDasharray="3 3"
    />
  </svg>
);
