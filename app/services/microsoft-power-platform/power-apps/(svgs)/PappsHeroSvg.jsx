// /app/services/microsoft-power-platform/power-apps/(svgs)/PappsHeroSvg.jsx
// Animated hero illustration: a paper form becomes a phone app, the data lands
// in a shared list, a job card shows on a tablet and an approval card appears.
// Drawn straight onto the hero background (no panel).
// Hex values and the tokens they match:
//   #046999 $accent, #6fc3e8 $accent-on-dark, #e8f4fa $accent-light,
//   #0d1b2a $text-primary, #4a5568 $text-secondary, #9a9da1 $text-muted,
//   #e3e8ec $line, #d4d6d9 $line-strong, #f7f8f9 $light-bg, #ffffff $white,
//   #1a2a3a $dark-mid, #0eaa0e $success, #c0392b $replace-x
// Motion is applied by the hero module through flowClass and liveClass.

const PappsHeroSvg = ({ flowClass = "", liveClass = "" }) => (
  <svg
    viewBox="0 0 640 540"
    role="img"
    aria-labelledby="papps-hero-title papps-hero-desc"
    fontFamily="aptos"
    width="100%"
    height="auto"
    style={{ display: "block", width: "100%", height: "auto" }}
  >
    <title id="papps-hero-title">
      A paper form turning into a phone app with a shared list and an approval
    </title>
    <desc id="papps-hero-desc">
      A paper checklist feeds a phone app. The answers appear in a shared list
      and a job list on a tablet, and a quote approval card is ready for sign
      off.
    </desc>

    <defs>
      <marker
        id="papps-hero-arrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="8"
        markerHeight="8"
        orient="auto-start-reverse"
      >
        <path d="M1 1l8 4-8 4z" fill="#046999" />
      </marker>
      <filter
        id="papps-hero-shadow"
        x="-20%"
        y="-20%"
        width="140%"
        height="150%"
      >
        <feDropShadow
          dx="0"
          dy="8"
          stdDeviation="9"
          floodColor="#0d1b2a"
          floodOpacity="0.12"
        />
      </filter>
      <clipPath id="papps-hero-phone-clip">
        <rect x="200" y="54" width="150" height="306" rx="20" />
      </clipPath>
      <clipPath id="papps-hero-tablet-clip">
        <rect x="410" y="80" width="200" height="170" rx="12" />
      </clipPath>
    </defs>

    {/* faint rings for depth */}
    <circle
      cx="330"
      cy="272"
      r="252"
      fill="none"
      stroke="#046999"
      strokeOpacity="0.1"
      strokeWidth="1.5"
    />
    <circle
      cx="330"
      cy="272"
      r="190"
      fill="none"
      stroke="#046999"
      strokeOpacity="0.14"
      strokeWidth="1.5"
    />

    {/* paper form */}
    <g
      transform="translate(18 70) rotate(-5 62 80)"
      filter="url(#papps-hero-shadow)"
    >
      <rect
        x="0"
        y="0"
        width="124"
        height="160"
        rx="10"
        fill="#ffffff"
        stroke="#d4d6d9"
      />
      <rect x="40" y="-8" width="44" height="18" rx="5" fill="#9a9da1" />
      <rect x="14" y="26" width="62" height="8" rx="4" fill="#0d1b2a" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect
            x="14"
            y={58 + i * 20}
            width="96"
            height="2"
            rx="1"
            fill="#d4d6d9"
          />
          <path
            d={`M16 ${55 + i * 20} q5 -8 10 0 t10 0 t10 0 ${i % 2 ? "t10 0" : ""}`}
            fill="none"
            stroke="#4a5568"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </g>
      ))}
      <circle
        cx="92"
        cy="132"
        r="15"
        fill="none"
        stroke="#9a9da1"
        strokeOpacity="0.45"
        strokeWidth="3"
      />
      <ellipse
        cx="62"
        cy="98"
        rx="52"
        ry="10"
        fill="none"
        stroke="#c0392b"
        strokeWidth="1.6"
      />
    </g>
    <text x="78" y="270" textAnchor="middle" fontSize="14" fill="#4a5568">
      Paper form
    </text>

    {/* flow: paper to phone */}
    <path
      className={flowClass}
      d="M148 166 C 170 166 168 204 188 204"
      fill="none"
      stroke="#046999"
      strokeWidth="2.5"
      strokeDasharray="6 7"
      strokeLinecap="round"
      markerEnd="url(#papps-hero-arrow)"
    />

    {/* phone */}
    <g filter="url(#papps-hero-shadow)">
      <rect x="190" y="30" width="170" height="340" rx="30" fill="#0d1b2a" />
    </g>
    <rect x="256" y="39" width="38" height="8" rx="4" fill="#1a2a3a" />
    <g clipPath="url(#papps-hero-phone-clip)">
      <rect x="200" y="54" width="150" height="306" fill="#ffffff" />
      <rect x="200" y="54" width="150" height="50" fill="#046999" />
      <text x="214" y="84" fontSize="14" fontWeight="700" fill="#ffffff">
        Site check
      </text>
      <circle cx="331" cy="79" r="9" fill="#6fc3e8" />
      {[
        { y: 118, label: "Roof", done: true },
        { y: 150, label: "Gutters", done: true },
        { y: 182, label: "Switchboard", done: false },
      ].map(({ y, label, done }) => (
        <g key={label}>
          <rect
            x="212"
            y={y}
            width="22"
            height="22"
            rx="6"
            fill={done ? "#046999" : "#ffffff"}
            stroke={done ? "#046999" : "#d4d6d9"}
            strokeWidth="1.6"
          />
          {done && (
            <path
              d={`M217 ${y + 11.5} l4 4 l7 -8`}
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
          <text
            x="244"
            y={y + 16}
            fontSize="14"
            fill={done ? "#0d1b2a" : "#4a5568"}
          >
            {label}
          </text>
        </g>
      ))}
      <rect x="212" y="216" width="126" height="72" rx="10" fill="#e8f4fa" />
      <path
        d="M252 268 L275 247 L298 268"
        fill="none"
        stroke="#046999"
        strokeWidth="2.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <rect x="260" y="266" width="30" height="16" fill="#046999" />
      <rect x="270" y="272" width="9" height="10" fill="#e8f4fa" />
      <circle cx="321" cy="233" r="10" fill="#046999" />
      <circle
        cx="321"
        cy="233"
        r="4"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
      />
      <rect x="212" y="306" width="126" height="40" rx="10" fill="#046999" />
      <text
        x="275"
        y="331"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#ffffff"
      >
        Submit
      </text>
    </g>

    {/* flow: phone to tablet */}
    <path
      className={flowClass}
      d="M362 190 C 384 190 382 168 398 168"
      fill="none"
      stroke="#046999"
      strokeWidth="2.5"
      strokeDasharray="6 7"
      strokeLinecap="round"
      markerEnd="url(#papps-hero-arrow)"
    />

    {/* tablet job list */}
    <g filter="url(#papps-hero-shadow)">
      <rect x="400" y="70" width="220" height="190" rx="20" fill="#0d1b2a" />
    </g>
    <g clipPath="url(#papps-hero-tablet-clip)">
      <rect x="410" y="80" width="200" height="170" fill="#ffffff" />
      <text x="424" y="108" fontSize="14" fontWeight="700" fill="#0d1b2a">
        Jobs
      </text>
      <rect x="560" y="91" width="38" height="24" rx="12" fill="#e8f4fa" />
      <text
        x="579"
        y="108"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#046999"
      >
        All
      </text>
      {[
        { y: 122, label: "Smith St", pill: "Quote sent", kind: "tint" },
        { y: 160, label: "Park Rd", pill: "In review", kind: "line" },
        { y: 198, label: "Marine Pde", pill: "New", kind: "solid" },
      ].map(({ y, label, pill, kind }) => (
        <g key={label}>
          <line x1="410" x2="610" y1={y} y2={y} stroke="#e3e8ec" />
          <text x="424" y={y + 24} fontSize="14" fill="#0d1b2a">
            {label}
          </text>
          <rect
            x="512"
            y={y + 6}
            width="86"
            height="26"
            rx="13"
            fill={
              kind === "tint"
                ? "#e8f4fa"
                : kind === "solid"
                  ? "#046999"
                  : "#ffffff"
            }
            stroke={kind === "line" ? "#046999" : "none"}
          />
          <text
            x="555"
            y={y + 24}
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fill={kind === "solid" ? "#ffffff" : "#046999"}
          >
            {pill}
          </text>
        </g>
      ))}
    </g>

    {/* flow: phone to shared list */}
    <path
      className={flowClass}
      d="M275 374 L275 396"
      fill="none"
      stroke="#046999"
      strokeWidth="2.5"
      strokeDasharray="6 7"
      strokeLinecap="round"
      markerEnd="url(#papps-hero-arrow)"
    />

    {/* shared list card */}
    <g filter="url(#papps-hero-shadow)">
      <rect
        x="120"
        y="400"
        width="250"
        height="128"
        rx="16"
        fill="#ffffff"
        stroke="#e3e8ec"
      />
    </g>
    <text x="138" y="428" fontSize="14" fontWeight="700" fill="#0d1b2a">
      Shared list
    </text>
    <circle cx="350" cy="422" r="5" fill="#0eaa0e" />
    <circle
      className={liveClass}
      cx="350"
      cy="422"
      r="5"
      fill="none"
      stroke="#0eaa0e"
      strokeWidth="2"
    />
    <rect x="136" y="438" width="218" height="26" rx="7" fill="#e8f4fa" />
    <text x="148" y="456" fontSize="14" fontWeight="700" fill="#046999">
      Site
    </text>
    <text x="244" y="456" fontSize="14" fontWeight="700" fill="#046999">
      Status
    </text>
    <text x="148" y="486" fontSize="14" fill="#0d1b2a">
      Smith St
    </text>
    <text x="244" y="486" fontSize="14" fill="#4a5568">
      Quote sent
    </text>
    <line x1="136" x2="354" y1="494" y2="494" stroke="#e3e8ec" />
    <text x="148" y="514" fontSize="14" fill="#0d1b2a">
      Park Rd
    </text>
    <text x="244" y="514" fontSize="14" fill="#4a5568">
      In review
    </text>

    {/* flow: list to approval */}
    <path
      className={flowClass}
      d="M372 464 C 452 464 520 474 520 426"
      fill="none"
      stroke="#046999"
      strokeWidth="2.5"
      strokeDasharray="6 7"
      strokeLinecap="round"
      markerEnd="url(#papps-hero-arrow)"
    />

    {/* approval card */}
    <g filter="url(#papps-hero-shadow)">
      <rect
        x="420"
        y="290"
        width="200"
        height="134"
        rx="16"
        fill="#ffffff"
        stroke="#e3e8ec"
      />
    </g>
    <circle cx="448" cy="322" r="14" fill="#e8f4fa" />
    <circle cx="448" cy="318" r="4.5" fill="#046999" />
    <path d="M439 331 q9 -10 18 0" fill="#046999" />
    <text x="472" y="321" fontSize="14" fontWeight="700" fill="#0d1b2a">
      Quote ready
    </text>
    <text x="472" y="341" fontSize="14" fill="#4a5568">
      Smith St check
    </text>
    <rect x="436" y="360" width="86" height="40" rx="10" fill="#046999" />
    <text
      x="479"
      y="385"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
    >
      Approve
    </text>
    <rect
      x="530"
      y="360"
      width="76"
      height="40"
      rx="10"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <text
      x="568"
      y="385"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#0d1b2a"
    >
      Edit
    </text>
  </svg>
);

export default PappsHeroSvg;
