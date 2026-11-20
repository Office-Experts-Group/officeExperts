// /app/blog/2gb-access-database-limit/(svgs)/DecisionSvg.jsx
// Yes/no flow from "file near 2GB" to the recommended option.
// Hex values map to tokens: #046999 = $accent, #e8f4fa = $accent-light,
// #0b2433 = $ink, #0d1b2a = $text-primary, #4a5568 = $text-secondary.
// The recommended outcome is solid accent, the others are light accent.

const ARROW = "url(#tgb-decision-arrow)";

function Outcome({ x, y, label, l1, l2, solid }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width="250"
        height="96"
        rx="14"
        fill={solid ? "#046999" : "#e8f4fa"}
        stroke={solid ? "#034e72" : "#046999"}
        strokeOpacity={solid ? 1 : 0.28}
      />
      <text
        x={x + 16}
        y={y + 30}
        fill={solid ? "#bfe6f7" : "#046999"}
        fontSize="14"
        fontWeight="700"
        letterSpacing="1.5"
      >
        {label}
      </text>
      <text
        x={x + 16}
        y={y + 56}
        fill={solid ? "#ffffff" : "#0d1b2a"}
        fontSize="15"
        fontWeight="700"
      >
        {l1}
      </text>
      <text
        x={x + 16}
        y={y + 76}
        fill={solid ? "#e6f4fb" : "#4a5568"}
        fontSize="14"
      >
        {l2}
      </text>
    </g>
  );
}

function Question({ y, children }) {
  return (
    <g>
      <rect
        x="50"
        y={y}
        width="300"
        height="60"
        rx="12"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.5"
      />
      <text
        x="200"
        y={y + 36}
        textAnchor="middle"
        fill="#0d1b2a"
        fontSize="15"
        fontWeight="700"
      >
        {children}
      </text>
    </g>
  );
}

export default function DecisionSvg() {
  return (
    <svg
      viewBox="0 0 780 548"
      role="img"
      aria-labelledby="tgb-decision-title tgb-decision-desc"
      fontFamily="aptos"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="tgb-decision-title">
        Which option to choose when your Access file is near 2GB
      </title>
      <desc id="tgb-decision-desc">
        A decision flow. If the file is under 1.5GB and growing slowly, archive,
        compact and split to buy 6 to 12 months. If not, and the app is outdated
        beyond its size, rebuild it. Otherwise, if staff need remote access with
        no server to run, choose Azure SQL Database. If not, the recommended
        route for most businesses is SQL Server or SQL Express with the Access
        front end kept.
      </desc>

      <defs>
        <marker
          id="tgb-decision-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto"
        >
          <path d="M1 1l8 4-8 4z" fill="#046999" />
        </marker>
      </defs>

      <rect x="50" y="14" width="300" height="46" rx="23" fill="#0b2433" />
      <text
        x="200"
        y="43"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="16"
        fontWeight="700"
      >
        Your Access file is near 2GB
      </text>
      <path
        d="M200 60V92"
        stroke="#046999"
        strokeWidth="2.5"
        markerEnd={ARROW}
      />

      <Question y={96}>Under 1.5GB and growing slowly?</Question>
      <path
        d="M350 126H474"
        stroke="#046999"
        strokeWidth="2.5"
        markerEnd={ARROW}
      />
      <text
        x="412"
        y="116"
        textAnchor="middle"
        fill="#046999"
        fontSize="14"
        fontWeight="700"
      >
        Yes
      </text>
      <Outcome
        x={480}
        y={78}
        label="BRIDGE"
        l1="Archive, compact and split."
        l2="Buys 6 to 12 months."
      />
      <path
        d="M200 156V202"
        stroke="#046999"
        strokeWidth="2.5"
        markerEnd={ARROW}
      />
      <text x="214" y="184" fill="#046999" fontSize="14" fontWeight="700">
        No
      </text>

      <Question y={206}>Is the app outdated beyond its size?</Question>
      <path
        d="M350 236H474"
        stroke="#046999"
        strokeWidth="2.5"
        markerEnd={ARROW}
      />
      <text
        x="412"
        y="226"
        textAnchor="middle"
        fill="#046999"
        fontSize="14"
        fontWeight="700"
      >
        Yes
      </text>
      <Outcome
        x={480}
        y={188}
        label="REBUILD"
        l1="Power Apps or a web app."
        l2="Larger budget and timeline."
      />
      <path
        d="M200 266V312"
        stroke="#046999"
        strokeWidth="2.5"
        markerEnd={ARROW}
      />
      <text x="214" y="294" fill="#046999" fontSize="14" fontWeight="700">
        No
      </text>

      <Question y={316}>Need remote access, no server?</Question>
      <path
        d="M350 346H474"
        stroke="#046999"
        strokeWidth="2.5"
        markerEnd={ARROW}
      />
      <text
        x="412"
        y="336"
        textAnchor="middle"
        fill="#046999"
        fontSize="14"
        fontWeight="700"
      >
        Yes
      </text>
      <Outcome
        x={480}
        y={298}
        label="CLOUD"
        l1="Azure SQL Database."
        l2="Pay as you go, no hardware."
      />
      <path
        d="M200 376V422"
        stroke="#046999"
        strokeWidth="2.5"
        markerEnd={ARROW}
      />
      <text x="214" y="404" fill="#046999" fontSize="14" fontWeight="700">
        No
      </text>

      <g>
        <rect
          x="50"
          y="426"
          width="300"
          height="96"
          rx="14"
          fill="#046999"
          stroke="#034e72"
        />
        <text
          x="66"
          y="456"
          fill="#bfe6f7"
          fontSize="14"
          fontWeight="700"
          letterSpacing="1.5"
        >
          RECOMMENDED FOR MOST
        </text>
        <text x="66" y="482" fill="#ffffff" fontSize="15" fontWeight="700">
          SQL Server or SQL Express
        </text>
        <text x="66" y="502" fill="#e6f4fb" fontSize="14">
          with your Access front end kept.
        </text>
      </g>
      <text x="400" y="462" fill="#0d1b2a" fontSize="15" fontWeight="700">
        Why this one?
      </text>
      <text x="400" y="486" fill="#4a5568" fontSize="14">
        Keeps your forms, reports and VBA,
      </text>
      <text x="400" y="506" fill="#4a5568" fontSize="14">
        with no practical size ceiling.
      </text>
    </svg>
  );
}
