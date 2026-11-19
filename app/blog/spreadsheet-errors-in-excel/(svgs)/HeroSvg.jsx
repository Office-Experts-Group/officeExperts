// /app/blog/spreadsheet-errors-in-excel/(svgs)/HeroSvg.jsx
// Hero illustration: a spreadsheet with flagged cells and three safeguards.
// Hex values map to tokens: #111820 $dark-bg, #18232e $dark-surface,
// #1a2a3a $dark-mid, #6fc3e8 $accent-on-dark, #046999 $accent,
// rgba(255,255,255,x) $white-xx. #f4977f is a small warm flag colour.

export default function HeroSvg({ className }) {
  const flag = "#f4977f";
  const line = "rgba(255,255,255,0.12)";
  const text = "rgba(255,255,255,0.88)";
  const muted = "rgba(255,255,255,0.55)";

  return (
    <svg
      className={className}
      viewBox="0 0 600 400"
      role="img"
      aria-labelledby="sse-hero-title sse-hero-desc"
      fontFamily="aptos"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="sse-hero-title">A spreadsheet with errors flagged</title>
      <desc id="sse-hero-desc">
        A sheet with a broken #REF! link, a typed-over number and a total that
        skips a row, with peer review, locked formulas and an audit trail shown
        as safeguards below it.
      </desc>

      {/* formula bar */}
      <rect
        x="20"
        y="14"
        width="380"
        height="40"
        rx="8"
        fill="#18232e"
        stroke={line}
      />
      <text
        x="36"
        y="40"
        fontSize="15"
        fontWeight="700"
        fill="#6fc3e8"
        fontStyle="italic"
      >
        fx
      </text>
      <line x1="62" y1="22" x2="62" y2="46" stroke={line} />
      <text x="76" y="40" fontSize="15" fill={text}>
        =D2+D3+D5
      </text>
      <text x="300" y="40" fontSize="14" fill={flag}>
        skips D4
      </text>

      {/* sheet */}
      <rect
        x="20"
        y="72"
        width="380"
        height="232"
        rx="10"
        fill="#18232e"
        stroke={line}
      />
      {/* header row */}
      <rect x="20" y="72" width="380" height="34" rx="10" fill="#1a2a3a" />
      <rect x="20" y="92" width="380" height="14" fill="#1a2a3a" />
      <text x="34" y="95" fontSize="14" fontWeight="700" fill={muted}>
        Region
      </text>
      <text x="154" y="95" fontSize="14" fontWeight="700" fill={muted}>
        Units
      </text>
      <text x="234" y="95" fontSize="14" fontWeight="700" fill={muted}>
        Price
      </text>
      <text x="324" y="95" fontSize="14" fontWeight="700" fill={muted}>
        Revenue
      </text>

      {/* grid lines */}
      <g stroke={line}>
        <line x1="20" y1="144" x2="400" y2="144" />
        <line x1="20" y1="182" x2="400" y2="182" />
        <line x1="20" y1="220" x2="400" y2="220" />
        <line x1="20" y1="258" x2="400" y2="258" />
        <line x1="140" y1="72" x2="140" y2="304" />
        <line x1="220" y1="72" x2="220" y2="304" />
        <line x1="310" y1="72" x2="310" y2="304" />
      </g>

      {/* rows */}
      <g fontSize="15" fill={text}>
        <text x="34" y="131">
          North
        </text>
        <text x="154" y="131">
          120
        </text>
        <text x="234" y="131">
          $45
        </text>
        <text x="324" y="131">
          5,400
        </text>

        <text x="34" y="169">
          South
        </text>
        <text x="154" y="169">
          98
        </text>
        <text x="234" y="169">
          $45
        </text>
        <text x="324" y="169">
          4,410
        </text>

        <text x="34" y="207">
          East
        </text>
        <text x="154" y="207">
          143
        </text>
        <text x="234" y="207" fill={flag}>
          #REF!
        </text>

        <text x="34" y="245">
          West
        </text>
        <text x="154" y="245">
          87
        </text>
        <text x="234" y="245">
          $45
        </text>

        <text x="34" y="283" fontWeight="700">
          Total
        </text>
        <text x="154" y="283" fontWeight="700">
          448
        </text>
        <text x="324" y="283" fontWeight="700">
          13,725
        </text>
      </g>

      {/* flagged cells */}
      <rect
        x="311"
        y="183"
        width="88"
        height="36"
        fill="rgba(244,151,127,0.14)"
        stroke={flag}
        strokeWidth="1.5"
      />
      <text x="324" y="207" fontSize="15" fill={flag}>
        #REF!
      </text>
      <rect
        x="311"
        y="221"
        width="88"
        height="36"
        fill="rgba(244,151,127,0.14)"
        stroke={flag}
        strokeWidth="1.5"
        strokeDasharray="5 4"
      />
      <text x="324" y="245" fontSize="15" fill={flag}>
        3,915
      </text>
      <rect
        x="311"
        y="259"
        width="88"
        height="36"
        fill="rgba(111,195,232,0.12)"
        stroke="#6fc3e8"
        strokeWidth="1.5"
      />

      {/* trace arrows from the total back up the column */}
      <path
        d="M306 277 C 292 277, 292 128, 306 128"
        stroke="#6fc3e8"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        fill="none"
      />
      <path
        d="M302 123l6 5-6 5"
        stroke="#6fc3e8"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* callout labels */}
      <g fontSize="14" fill={text}>
        <line x1="400" y1="201" x2="420" y2="201" stroke={flag} />
        <circle cx="426" cy="201" r="5" fill={flag} />
        <text x="440" y="206">
          Broken link
        </text>

        <line x1="400" y1="239" x2="420" y2="239" stroke={flag} />
        <circle cx="426" cy="239" r="5" fill={flag} />
        <text x="440" y="244">
          Typed-over value
        </text>

        <line x1="400" y1="277" x2="420" y2="277" stroke="#6fc3e8" />
        <circle cx="426" cy="277" r="5" fill="#6fc3e8" />
        <text x="440" y="282">
          Total skips a row
        </text>
      </g>

      {/* safeguards */}
      <g fontSize="14" fill={text}>
        <rect
          x="20"
          y="332"
          width="170"
          height="46"
          rx="23"
          fill="rgba(111,195,232,0.12)"
          stroke="rgba(111,195,232,0.5)"
        />
        <g
          transform="translate(36 343)"
          fill="none"
          stroke="#6fc3e8"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="8" cy="8" r="3.4" />
          <path d="M1.5 22c.5-3.4 3.2-5.2 6.5-5.2s6 1.8 6.5 5.2" />
          <path d="M16 6l2.4 2.4L23 3.5" />
        </g>
        <text x="72" y="360">
          Peer review
        </text>

        <rect
          x="204"
          y="332"
          width="190"
          height="46"
          rx="23"
          fill="rgba(111,195,232,0.12)"
          stroke="rgba(111,195,232,0.5)"
        />
        <g
          transform="translate(220 343)"
          fill="none"
          stroke="#6fc3e8"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="10" width="16" height="12" rx="2.5" />
          <path d="M7 10V7a4 4 0 018 0v3" />
        </g>
        <text x="250" y="360">
          Locked formulas
        </text>

        <rect
          x="408"
          y="332"
          width="172"
          height="46"
          rx="23"
          fill="rgba(111,195,232,0.12)"
          stroke="rgba(111,195,232,0.5)"
        />
        <g
          transform="translate(424 343)"
          fill="none"
          stroke="#6fc3e8"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="10" cy="10" r="7" />
          <path d="M15.5 15.5L21 21" />
        </g>
        <text x="458" y="360">
          Audit trail
        </text>
      </g>
    </svg>
  );
}
