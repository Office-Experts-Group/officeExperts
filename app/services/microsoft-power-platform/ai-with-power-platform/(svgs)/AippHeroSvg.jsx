// /app/services/microsoft-power-platform/ai-with-power-platform/(svgs)/AippHeroSvg.jsx
// Animated hero illustration with no panel or background of its own, so it sits
// straight on the dark hero. An invoice or email has its key details picked out,
// they flow into an AI step, and the result lands as a row in a Dataverse table
// and as an approval request for a person. A padlock on each card shows the
// tenant's permissions travelling with the data. The only animated SVG on the
// page: the hero module passes flowClass (dash offset on flow lines and the
// orbit ring) and liveClass (pulse on the "live" dot).
// Colours (hex, with matching globals.scss tokens):
//   #111820 $dark-bg · #18232e $dark-surface · #1a2a3a $dark-mid
//   #046999 $accent · #6fc3e8 $accent-on-dark · #ffffff $white
//   rgba(255,255,255,.75) $white-75 · rgba(255,255,255,.12) $white-12

const SPARK =
  "M0 -26 C3 -10 10 -3 26 0 C10 3 3 10 0 26 C-3 10 -10 3 -26 0 C-10 -3 -3 -10 0 -26Z";

const Lock = ({ x, y }) => (
  <g transform={`translate(${x} ${y})`}>
    <circle r="13" fill="#111820" stroke="#6fc3e8" strokeOpacity="0.7" />
    <rect x="-5" y="-2" width="10" height="8" rx="2" fill="#6fc3e8" />
    <path
      d="M-3 -2 V-4 a3 3 0 0 1 6 0 V-2"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </g>
);

const AippHeroSvg = ({ flowClass = "", liveClass = "" }) => (
  <svg
    viewBox="0 0 640 490"
    role="img"
    aria-labelledby="aipp-hero-title aipp-hero-desc"
    focusable="false"
  >
    <title id="aipp-hero-title">
      An invoice or email read by an AI step, saved to Dataverse and sent for
      approval
    </title>
    <desc id="aipp-hero-desc">
      Three details are picked out of an email or invoice and flow into an AI
      step. The AI step adds a row to a Dataverse table and sends an approval
      request to a person in Teams. A padlock on each card and a note along the
      bottom show that your existing tenant permissions apply throughout.
    </desc>

    {/* faint rings behind the AI step */}
    <circle
      cx="320"
      cy="250"
      r="150"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.06"
    />
    <circle
      cx="320"
      cy="250"
      r="205"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.04"
    />

    {/* flow lines: details in, results out */}
    <g
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="6 10"
      strokeOpacity="0.85"
    >
      <path className={flowClass} d="M192 175 C220 175 218 236 247 238" />
      <path className={flowClass} d="M192 203 C224 203 226 250 245 250" />
      <path className={flowClass} d="M192 231 C220 231 218 264 247 262" />
      <path className={flowClass} d="M393 236 C425 236 420 154 452 154" />
      <path className={flowClass} d="M393 264 C425 264 420 322 452 322" />
    </g>

    {/* document: key details picked out */}
    <g transform="rotate(-4 111 220)">
      <rect
        x="36"
        y="130"
        width="150"
        height="180"
        rx="12"
        fill="#18232e"
        stroke="#ffffff"
        strokeOpacity="0.14"
      />
      <rect x="52" y="146" width="58" height="8" rx="4" fill="#6fc3e8" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x="50"
            y={164 + i * 28}
            width="122"
            height="22"
            rx="6"
            fill="#6fc3e8"
            fillOpacity="0.14"
            stroke="#6fc3e8"
            strokeOpacity="0.75"
          />
          <rect
            x="58"
            y={172 + i * 28}
            width={[58, 76, 44][i]}
            height="6"
            rx="3"
            fill="#ffffff"
            fillOpacity="0.85"
          />
          <circle cx="164" cy={175 + i * 28} r="3" fill="#6fc3e8" />
        </g>
      ))}
      <rect
        x="52"
        y="254"
        width="98"
        height="6"
        rx="3"
        fill="#ffffff"
        fillOpacity="0.2"
      />
      <rect
        x="52"
        y="270"
        width="70"
        height="6"
        rx="3"
        fill="#ffffff"
        fillOpacity="0.2"
      />
      <Lock x="186" y="130" />
    </g>
    <text
      x="111"
      y="342"
      textAnchor="middle"
      fontSize="15"
      fontFamily="aptos"
      fill="#ffffff"
      fillOpacity="0.75"
    >
      Email or invoice
    </text>

    {/* AI step */}
    <g transform="translate(320 250)">
      <circle
        className={flowClass}
        r="88"
        fill="none"
        stroke="#6fc3e8"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        strokeDasharray="3 9"
        strokeLinecap="round"
      />
      <circle r="66" fill="#1a2a3a" stroke="#6fc3e8" strokeOpacity="0.6" />
      <circle r="48" fill="#046999" />
      <path d={SPARK} fill="#ffffff" />
      <path d={SPARK} fill="#ffffff" transform="translate(30 -30) scale(0.3)" />
      <circle className={liveClass} cx="62" cy="-46" r="5" fill="#6fc3e8" />
      <circle cx="-88" cy="0" r="4" fill="#6fc3e8" />
      <circle cx="88" cy="0" r="4" fill="#6fc3e8" />
    </g>
    <text
      x="320"
      y="362"
      textAnchor="middle"
      fontSize="16"
      fontWeight="700"
      fontFamily="aptos"
      fill="#ffffff"
    >
      AI reads and decides
    </text>

    {/* Dataverse table: the result lands as a row */}
    <g>
      <rect
        x="452"
        y="84"
        width="164"
        height="142"
        rx="12"
        fill="#18232e"
        stroke="#ffffff"
        strokeOpacity="0.14"
      />
      <path
        d="M452 96 a12 12 0 0 1 12 -12 H604 a12 12 0 0 1 12 12 V112 H452 Z"
        fill="#1a2a3a"
      />
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={466 + i * 48}
          y="94"
          width="34"
          height="6"
          rx="3"
          fill="#ffffff"
          fillOpacity="0.45"
        />
      ))}
      {[0, 1, 2].map((r) => (
        <g key={r}>
          {[0, 1, 2].map((c) => {
            const filled = r < 2;
            return (
              <rect
                key={c}
                x={466 + c * 48}
                y={124 + r * 32}
                width="40"
                height="18"
                rx="5"
                fill={filled ? (c === 0 ? "#046999" : "#6fc3e8") : "none"}
                fillOpacity={filled ? (c === 0 ? 1 : 0.28) : 0}
                stroke={filled ? "none" : "#ffffff"}
                strokeOpacity="0.3"
                strokeDasharray={filled ? "0" : "3 3"}
              />
            );
          })}
        </g>
      ))}
      <Lock x="616" y="84" />
    </g>
    <text
      x="534"
      y="248"
      textAnchor="middle"
      fontSize="15"
      fontFamily="aptos"
      fill="#ffffff"
      fillOpacity="0.75"
    >
      Saved to Dataverse
    </text>

    {/* approval request to a person */}
    <g>
      <rect
        x="452"
        y="272"
        width="164"
        height="100"
        rx="12"
        fill="#18232e"
        stroke="#ffffff"
        strokeOpacity="0.14"
      />
      <path
        d="M470 372 v14 l16 -14"
        fill="#18232e"
        stroke="#ffffff"
        strokeOpacity="0.14"
      />
      <rect x="469" y="371" width="18" height="3" fill="#18232e" />
      <circle cx="480" cy="298" r="12" fill="#1a2a3a" stroke="#6fc3e8" />
      <circle cx="480" cy="294" r="4" fill="#6fc3e8" />
      <path
        d="M472 306 a8 6 0 0 1 16 0"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="1.6"
      />
      <rect
        x="500"
        y="291"
        width="84"
        height="7"
        rx="3.5"
        fill="#ffffff"
        fillOpacity="0.85"
      />
      <rect
        x="500"
        y="305"
        width="56"
        height="6"
        rx="3"
        fill="#ffffff"
        fillOpacity="0.25"
      />
      <rect x="468" y="326" width="68" height="28" rx="14" fill="#046999" />
      <path
        d="M489 340 l5 5 l10 -10"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="544"
        y="326"
        width="56"
        height="28"
        rx="14"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.4"
      />
      <rect
        x="558"
        y="338"
        width="28"
        height="4"
        rx="2"
        fill="#ffffff"
        fillOpacity="0.45"
      />
    </g>
    <text
      x="534"
      y="408"
      textAnchor="middle"
      fontSize="15"
      fontFamily="aptos"
      fill="#ffffff"
      fillOpacity="0.75"
    >
      A person approves
    </text>

    {/* permissions note */}
    <g>
      <rect
        x="150"
        y="430"
        width="340"
        height="38"
        rx="19"
        fill="#111820"
        stroke="#6fc3e8"
        strokeOpacity="0.45"
        strokeDasharray="4 5"
      />
      <g transform="translate(180 449)">
        <rect x="-6" y="-2" width="12" height="10" rx="2.5" fill="#6fc3e8" />
        <path
          d="M-3.5 -2 V-5 a3.5 3.5 0 0 1 7 0 V-2"
          fill="none"
          stroke="#6fc3e8"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <text
        x="202"
        y="454"
        fontSize="15"
        fontFamily="aptos"
        fill="#ffffff"
        fillOpacity="0.88"
      >
        Uses your tenant’s permissions
      </text>
    </g>
  </svg>
);

export default AippHeroSvg;
