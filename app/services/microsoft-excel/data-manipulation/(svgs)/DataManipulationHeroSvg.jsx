// /app/services/microsoft-excel/data-manipulation/(svgs)/DataManipulationHeroSvg.jsx
//
// Hero illustration: messy sources -> automated pipeline -> clean workbook.
// Sits directly on the hero background ($dark-bg). Pass module classes in:
//   <DataManipulationHeroSvg flowClass={styles.flow} liveClass={styles.live} />
// Hex values are hard-coded; token names:
//   #111820 $dark-bg      #18232e $dark-surface   #046999 $accent
//   #6fc3e8 $accent-on-dark   #c0392b $replace-x  #ffffff $white

const DataManipulationHeroSvg = ({ flowClass = "", liveClass = "" }) => (
  <svg
    viewBox="0 0 560 420"
    xmlns="http://www.w3.org/2000/svg"
    fontFamily="aptos"
    role="img"
    aria-labelledby="dmh-hero-title dmh-hero-desc"
    focusable="false"
  >
    <title id="dmh-hero-title">Excel data automation pipeline</title>
    <desc id="dmh-hero-desc">
      A database, a CSV file and an API feed flow through an automated pipeline
      into a clean, refreshed Excel workbook with a chart.
    </desc>

    {/* ── Sources ── */}
    {/* SQL database */}
    <ellipse
      cx="71"
      cy="52"
      rx="44"
      ry="12"
      fill="#18232e"
      stroke="#6fc3e8"
      strokeOpacity="0.6"
    />
    <path
      d="M27 52v52a44 12 0 0 0 88 0V52"
      fill="#18232e"
      stroke="#6fc3e8"
      strokeOpacity="0.6"
    />
    <path
      d="M27 78a44 12 0 0 0 88 0"
      fill="none"
      stroke="#6fc3e8"
      strokeOpacity="0.4"
    />
    <ellipse
      cx="71"
      cy="52"
      rx="44"
      ry="12"
      fill="#046999"
      fillOpacity="0.35"
      stroke="#6fc3e8"
      strokeOpacity="0.6"
    />
    <circle cx="96" cy="92" r="3" fill="#c0392b" />
    <text
      x="71"
      y="140"
      textAnchor="middle"
      fontSize="14"
      fill="#ffffff"
      fillOpacity="0.75"
    >
      SQL
    </text>

    {/* CSV file with a flagged row */}
    <path
      d="M27 176a6 6 0 0 1 6-6h58l24 24v40a6 6 0 0 1-6 6H33a6 6 0 0 1-6-6z"
      fill="#18232e"
      stroke="#6fc3e8"
      strokeOpacity="0.6"
    />
    <path
      d="M91 170v18a6 6 0 0 0 6 6h18"
      fill="none"
      stroke="#6fc3e8"
      strokeOpacity="0.6"
    />
    {[206, 218, 230].map((y, i) => (
      <rect
        key={y}
        x="39"
        y={y}
        width={[48, 62, 40][i]}
        height="5"
        rx="2.5"
        fill={i === 1 ? "#c0392b" : "#ffffff"}
        fillOpacity={i === 1 ? 0.9 : 0.4}
      />
    ))}
    <text
      x="71"
      y="272"
      textAnchor="middle"
      fontSize="14"
      fill="#ffffff"
      fillOpacity="0.75"
    >
      CSV
    </text>

    {/* API feed */}
    <rect
      x="27"
      y="296"
      width="88"
      height="64"
      rx="10"
      fill="#18232e"
      stroke="#6fc3e8"
      strokeOpacity="0.6"
    />
    <text
      x="71"
      y="340"
      textAnchor="middle"
      fontSize="30"
      fontWeight="700"
      fill="#6fc3e8"
    >
      {"{ }"}
    </text>
    <text
      x="71"
      y="392"
      textAnchor="middle"
      fontSize="14"
      fill="#ffffff"
      fillOpacity="0.75"
    >
      API
    </text>

    {/* ── Flow lines: static underlay, then animated dashes ── */}
    {[
      "M126 78C190 78 200 210 232 210",
      "M126 204C180 204 200 210 232 210",
      "M126 328C190 328 200 210 232 210",
    ].map((d) => (
      <g key={d}>
        <path
          d={d}
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.14"
          strokeWidth="2"
        />
        <path
          d={d}
          fill="none"
          stroke="#6fc3e8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 10"
          className={flowClass}
        />
      </g>
    ))}

    {/* ── Pipeline hub ── */}
    <circle
      cx="290"
      cy="210"
      r="58"
      fill="#18232e"
      stroke="#6fc3e8"
      strokeOpacity="0.5"
    />
    <circle
      cx="290"
      cy="210"
      r="46"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeDasharray="5 6"
    />
    <rect
      x="266"
      y="186"
      width="48"
      height="48"
      rx="10"
      transform="rotate(45 290 210)"
      fill="#046999"
      stroke="#6fc3e8"
      strokeOpacity="0.8"
    />
    {[
      [198, 34],
      [210, 24],
      [222, 14],
    ].map(([y, w]) => (
      <rect
        key={y}
        x={290 - w / 2}
        y={y}
        width={w}
        height="5"
        rx="2.5"
        fill="#ffffff"
        fillOpacity="0.92"
      />
    ))}
    <text
      x="290"
      y="306"
      textAnchor="middle"
      fontSize="14"
      fill="#ffffff"
      fillOpacity="0.75"
    >
      Power Query · VBA · SQL
    </text>

    {/* Hub to workbook */}
    <path
      d="M348 210H386"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.14"
      strokeWidth="2"
    />
    <path
      d="M348 210H386"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="6 10"
      className={flowClass}
    />
    <polygon points="384,203 396,210 384,217" fill="#6fc3e8" />

    {/* ── Clean workbook ── */}
    <rect
      x="400"
      y="80"
      width="148"
      height="264"
      rx="14"
      fill="#18232e"
      stroke="#6fc3e8"
      strokeOpacity="0.5"
    />
    {[418, 432, 446].map((cx) => (
      <circle
        key={cx}
        cx={cx}
        cy="100"
        r="4"
        fill="#ffffff"
        fillOpacity="0.45"
      />
    ))}
    <text x="506" y="105" textAnchor="end" fontSize="14" fill="#6fc3e8">
      Live
    </text>
    <circle cx="521" cy="100" r="4" fill="#6fc3e8" />
    <circle
      cx="521"
      cy="100"
      r="4"
      fill="none"
      stroke="#6fc3e8"
      className={liveClass}
    />
    <rect
      x="412"
      y="120"
      width="124"
      height="22"
      rx="5"
      fill="#046999"
      fillOpacity="0.55"
    />
    {[152, 178, 204, 230].map((y, r) => (
      <g key={y}>
        <rect
          x="412"
          y={y}
          width="124"
          height="20"
          rx="4"
          fill="#ffffff"
          fillOpacity="0.06"
        />
        {[422, 464, 506].map((x, c) => (
          <rect
            key={x}
            x={x}
            y={y + 8}
            width={22 + ((r + c) % 2) * 8}
            height="4"
            rx="2"
            fill="#ffffff"
            fillOpacity="0.55"
          />
        ))}
      </g>
    ))}
    <path d="M412 328H536" stroke="#ffffff" strokeOpacity="0.3" />
    {[418, 444, 470, 496].map((x, i) => (
      <rect
        key={x}
        x={x}
        y={328 - [28, 42, 36, 58][i]}
        width="18"
        height={[28, 42, 36, 58][i]}
        rx="3"
        fill="#6fc3e8"
        fillOpacity={0.35 + i * 0.15}
      />
    ))}
    <text
      x="474"
      y="380"
      textAnchor="middle"
      fontSize="14"
      fill="#ffffff"
      fillOpacity="0.75"
    >
      Clean, refreshed data
    </text>
  </svg>
);

export default DataManipulationHeroSvg;
