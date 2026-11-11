// app/locations/(svgs)/ConsultantsHeroSvg.js
// Abstract illustration: a spreadsheet, a document and a workflow, with
// "Remote" and "On-site" tags. Built for a light background.

export const ConsultantsHeroSvg = () => (
  <svg
    viewBox="0 0 520 440"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="A spreadsheet, a document and a workflow, delivered by consultants remotely or on-site"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    <defs>
      <filter
        id="ch-shadow"
        x="-20%"
        y="-20%"
        width="140%"
        height="150%"
        colorInterpolationFilters="sRGB"
      >
        <feDropShadow
          dx="0"
          dy="12"
          stdDeviation="14"
          floodColor="#0d1b2a"
          floodOpacity="0.1"
        />
      </filter>

      <style>{`
        @keyframes ch-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes ch-dash {
          to { stroke-dashoffset: -20; }
        }
        .ch-float-a { animation: ch-float 7s   ease-in-out      infinite; }
        .ch-float-b { animation: ch-float 8s   ease-in-out -2s  infinite; }
        .ch-float-c { animation: ch-float 6.5s ease-in-out -4s  infinite; }
        .ch-dash    { stroke-dasharray: 4 6; animation: ch-dash 1.6s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ch-float-a, .ch-float-b, .ch-float-c, .ch-dash { animation: none; }
        }
      `}</style>
    </defs>

    {/* ── Spreadsheet card ── */}
    <g className="ch-float-a">
      <rect
        x="30"
        y="40"
        width="300"
        height="210"
        rx="16"
        fill="#ffffff"
        stroke="#e3e8ec"
        filter="url(#ch-shadow)"
      />
      <circle cx="54" cy="62" r="4" fill="#d4d6d9" />
      <circle cx="70" cy="62" r="4" fill="#d4d6d9" />
      <circle cx="86" cy="62" r="4" fill="#d4d6d9" />

      {/* Header row */}
      <rect x="46" y="80" width="268" height="24" rx="6" fill="#046999" />
      <rect x="58" y="89" width="36" height="6" rx="3" fill="#ffffff" fillOpacity="0.8" />
      <rect x="128" y="89" width="36" height="6" rx="3" fill="#ffffff" fillOpacity="0.8" />
      <rect x="208" y="89" width="36" height="6" rx="3" fill="#ffffff" fillOpacity="0.8" />
      <rect x="272" y="89" width="28" height="6" rx="3" fill="#ffffff" fillOpacity="0.8" />

      {/* Grid */}
      <path
        d="M46 128H314M46 152H314M106 104V152M186 104V152M250 104V152"
        stroke="#e3e8ec"
      />
      <rect x="58" y="112" width="30" height="6" rx="3" fill="#d4d6d9" />
      <rect x="128" y="112" width="44" height="6" rx="3" fill="#d4d6d9" />
      <rect x="208" y="112" width="32" height="6" rx="3" fill="#d4d6d9" />
      <rect x="272" y="112" width="24" height="6" rx="3" fill="#046999" fillOpacity="0.55" />
      <rect x="58" y="136" width="38" height="6" rx="3" fill="#d4d6d9" />
      <rect x="128" y="136" width="30" height="6" rx="3" fill="#d4d6d9" />
      <rect x="208" y="136" width="40" height="6" rx="3" fill="#d4d6d9" />
      <rect x="272" y="136" width="28" height="6" rx="3" fill="#046999" fillOpacity="0.55" />

      {/* Chart */}
      <path d="M46 232H314" stroke="#e3e8ec" />
      <rect x="62" y="196" width="16" height="36" rx="3" fill="#046999" fillOpacity="0.3" />
      <rect x="92" y="184" width="16" height="48" rx="3" fill="#046999" fillOpacity="0.45" />
      <rect x="122" y="190" width="16" height="42" rx="3" fill="#046999" fillOpacity="0.35" />
      <rect x="152" y="172" width="16" height="60" rx="3" fill="#046999" fillOpacity="0.6" />
      <rect x="182" y="180" width="16" height="52" rx="3" fill="#046999" fillOpacity="0.45" />
      <rect x="212" y="164" width="16" height="68" rx="3" fill="#046999" />
      <path
        d="M70 190L100 176L130 184L160 160L190 170L220 152"
        stroke="#0b2433"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    {/* ── Document card ── */}
    <g className="ch-float-b">
      <rect
        x="250"
        y="140"
        width="230"
        height="250"
        rx="16"
        fill="#ffffff"
        stroke="#e3e8ec"
        filter="url(#ch-shadow)"
      />
      <rect x="272" y="166" width="110" height="10" rx="5" fill="#0b2433" />
      <rect x="272" y="190" width="186" height="6" rx="3" fill="#e3e8ec" />
      <rect x="272" y="206" width="170" height="6" rx="3" fill="#e3e8ec" />
      <rect x="272" y="222" width="180" height="6" rx="3" fill="#e3e8ec" />

      {/* Table inside the document */}
      <rect x="272" y="248" width="186" height="64" rx="8" fill="#046999" fillOpacity="0.08" />
      <path d="M272 270H458M272 291H458M334 248V312" stroke="#d4d6d9" />
      <rect x="284" y="256" width="36" height="6" rx="3" fill="#046999" />
      <rect x="346" y="256" width="60" height="6" rx="3" fill="#046999" fillOpacity="0.55" />
      <rect x="284" y="277" width="28" height="6" rx="3" fill="#9a9da1" />
      <rect x="346" y="277" width="76" height="6" rx="3" fill="#9a9da1" />
      <rect x="284" y="298" width="32" height="6" rx="3" fill="#9a9da1" />
      <rect x="346" y="298" width="48" height="6" rx="3" fill="#9a9da1" />

      <rect x="272" y="332" width="170" height="6" rx="3" fill="#e3e8ec" />
      <rect x="272" y="348" width="120" height="6" rx="3" fill="#e3e8ec" />
    </g>

    {/* ── Workflow card ── */}
    <g className="ch-float-c">
      <rect
        x="20"
        y="300"
        width="190"
        height="100"
        rx="16"
        fill="#ffffff"
        stroke="#e3e8ec"
        filter="url(#ch-shadow)"
      />
      <path
        className="ch-dash"
        d="M72 342H101M129 342H158"
        stroke="#046999"
        strokeWidth="1.5"
      />
      <circle cx="58" cy="342" r="14" fill="#046999" />
      <circle cx="115" cy="342" r="14" fill="#ffffff" stroke="#046999" strokeWidth="2" />
      <circle cx="172" cy="342" r="14" fill="#046999" />
      <path
        d="M52 342l5 5 9-10"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="40" y="372" width="60" height="6" rx="3" fill="#d4d6d9" />
      <rect x="112" y="372" width="70" height="6" rx="3" fill="#d4d6d9" />
    </g>

    {/* ── Location pin, linked to the document ── */}
    <g className="ch-float-a">
      <path
        d="M440 36c-13 0-23 10-23 23 0 17 23 41 23 41s23-24 23-41c0-13-10-23-23-23z"
        fill="#046999"
      />
      <circle cx="440" cy="59" r="8" fill="#ffffff" />
    </g>
    <path
      className="ch-dash"
      d="M440 106C440 124 420 130 408 142"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    {/* ── Tags ── */}
    <g>
      <rect x="340" y="22" width="64" height="26" rx="13" fill="#ffffff" stroke="#d4d6d9" />
      <text
        x="372"
        y="39"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="11"
        fontWeight="700"
        fill="#0b2433"
      >
        On-site
      </text>

      <rect x="36" y="262" width="72" height="26" rx="13" fill="#0b2433" />
      <text
        x="72"
        y="279"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="11"
        fontWeight="700"
        fill="#ffffff"
      >
        Remote
      </text>
    </g>
  </svg>
);
