// /app/blog/excel-problems-on-mac/(svgs)/TriageSvg.jsx
// Decision flow: which of the 10 problems do you have? Sits on a white panel.
// Hex values match: $accent #046999, $accent-light #e8f4fa, $text-primary #0d1b2a,
// $text-secondary #4a5568, $line-strong #d4d6d9, $white #ffffff.

const ROWS = [
  {
    y: 16,
    q: ["Does Excel fail to open", "or crash on launch?"],
    a: ["Problems 1, 3 and 8", "Startup, licence, install"],
  },
  {
    y: 132,
    q: ["Is Excel slow, or does", "it freeze?"],
    a: ["Problem 2", "Freezing and slow files"],
  },
  {
    y: 248,
    q: ["Does it only happen with", "certain files?"],
    a: ["Problems 4, 5 and 10", "File errors, Windows files"],
  },
  {
    y: 364,
    q: ["Is it a feature, key or", "on-screen issue?"],
    a: ["Problems 6, 7 and 9", "Solver, selection, shortcuts"],
  },
];

const TriageSvg = () => (
  <svg
    viewBox="0 0 612 572"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="epm-triage-title epm-triage-desc"
    fontFamily="aptos"
  >
    <title id="epm-triage-title">
      Which Excel for Mac problem do you have?
    </title>
    <desc id="epm-triage-desc">
      Four yes or no questions. If Excel will not open or crashes, read problems
      1, 3 and 8. If it is slow or freezes, read problem 2. If it only happens
      with certain files, read problems 4, 5 and 10. If it is a feature, key or
      on-screen issue, read problems 6, 7 and 9. If none apply, work up the fix
      ladder.
    </desc>

    {ROWS.map((r) => (
      <g key={r.y}>
        <rect
          x="16"
          y={r.y}
          width="250"
          height="76"
          rx="12"
          fill="#ffffff"
          stroke="#d4d6d9"
          strokeWidth="1.5"
        />
        <text x="34" y={r.y + 32} fontSize="16" fontWeight="700" fill="#0d1b2a">
          {r.q[0]}
        </text>
        <text x="34" y={r.y + 56} fontSize="16" fontWeight="700" fill="#0d1b2a">
          {r.q[1]}
        </text>

        <text
          x="296"
          y={r.y + 28}
          fontSize="14"
          fontWeight="700"
          fill="#046999"
          textAnchor="middle"
        >
          Yes
        </text>
        <line
          x1="270"
          y1={r.y + 38}
          x2="320"
          y2={r.y + 38}
          stroke="#046999"
          strokeWidth="2"
        />
        <polygon
          points={`318,${r.y + 32} 328,${r.y + 38} 318,${r.y + 44}`}
          fill="#046999"
        />

        <rect
          x="332"
          y={r.y}
          width="264"
          height="76"
          rx="12"
          fill="#e8f4fa"
          stroke="#046999"
          strokeOpacity="0.28"
          strokeWidth="1.5"
        />
        <text
          x="350"
          y={r.y + 32}
          fontSize="16"
          fontWeight="700"
          fill="#046999"
        >
          {r.a[0]}
        </text>
        <text x="350" y={r.y + 56} fontSize="15" fill="#4a5568">
          {r.a[1]}
        </text>

        <line
          x1="141"
          y1={r.y + 78}
          x2="141"
          y2={r.y + 108}
          stroke="#4a5568"
          strokeWidth="2"
        />
        <polygon
          points={`135,${r.y + 104} 141,${r.y + 114} 147,${r.y + 104}`}
          fill="#4a5568"
        />
        <text
          x="154"
          y={r.y + 100}
          fontSize="14"
          fontWeight="700"
          fill="#4a5568"
        >
          No
        </text>
      </g>
    ))}

    <rect x="16" y="480" width="580" height="76" rx="12" fill="#046999" />
    <text
      x="306"
      y="512"
      fontSize="17"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      Still stuck?
    </text>
    <text
      x="306"
      y="536"
      fontSize="15"
      fill="#ffffff"
      fillOpacity="0.9"
      textAnchor="middle"
    >
      Work up the fix ladder: restart, update, reset, reinstall
    </text>
  </svg>
);

export default TriageSvg;
