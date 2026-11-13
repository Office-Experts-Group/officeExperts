// /app/services/microsoft-power-platform/sharepoint-consulting-and-development/(svgs)/SpcdHeroSvg.jsx
// Animated hero illustration, composed to sit beside the hero copy: an ageing
// on-premises server feeds a modern SharePoint intranet hub, which branches into
// team, communication and project sites. Copilot reads from those sites and
// answers a question with its source. Decorative (the copy says it in words).
//
// Animation classes come from the hero module as props:
//   flowClass  -> dashed flow lines (stroke-dashoffset loop)
//   liveClass  -> pulsing ring on the Copilot "live" dot
//
// Hex values and matching globals.scss tokens:
//   #046999 $accent          #034e72 $accent-dark     #e8f4fa $accent-light
//   #6fc3e8 $accent-on-dark  #111820 $dark-bg         #0d1b2a $text-primary
//   #4a5568 $text-secondary  #9a9da1 $text-muted      #e3e8ec $line
//   #d4d6d9 $line-strong     #f7f8f9 $light-bg        #c53030 $error
//   #ffffff $white

const SpcdHeroSvg = ({ flowClass, liveClass }) => (
  <svg
    viewBox="0 0 600 540"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    {/* ── Flow lines (drawn first so cards sit on top) ── */}
    <g stroke="#046999" strokeWidth="2.5" strokeLinecap="round">
      {/* server -> hub */}
      <path className={flowClass} d="M470 106 H362" />
      {/* hub -> sites */}
      <path className={flowClass} d="M190 172 V212 H105 V250" />
      <path className={flowClass} d="M190 212 H300 V250" />
      <path className={flowClass} d="M300 212 H495 V250" />
      {/* sites -> Copilot */}
      <path className={flowClass} d="M105 370 V392" />
      <path className={flowClass} d="M300 370 V392" />
      <path className={flowClass} d="M495 370 V392 H70 V410" />
    </g>

    {/* Document travelling along the migration line */}
    <g transform="translate(404 92) rotate(-10)">
      <rect
        width="20"
        height="25"
        rx="3"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.6"
      />
      <path
        d="M5 8h10M5 12.5h10M5 17h6"
        stroke="#046999"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </g>

    {/* ── On-premises server ── */}
    <g>
      <rect
        x="470"
        y="40"
        width="104"
        height="124"
        rx="14"
        fill="#f7f8f9"
        stroke="#d4d6d9"
        strokeWidth="1.5"
      />
      {[54, 80, 106, 132].map((y, i) => (
        <g key={y}>
          <rect
            x="484"
            y={y}
            width="76"
            height="20"
            rx="5"
            fill="#ffffff"
            stroke="#e3e8ec"
            strokeWidth="1.2"
          />
          <path
            d={`M493 ${y + 10}h32`}
            stroke="#d4d6d9"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle
            cx="548"
            cy={y + 10}
            r="4"
            fill={i === 1 ? "#c53030" : "#9a9da1"}
          />
        </g>
      ))}
      {/* end-of-support warning badge */}
      <g transform="translate(552 22)">
        <path d="M14 2 L27 25 H1 Z" fill="#c53030" />
        <path
          d="M14 10v7"
          stroke="#ffffff"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <circle cx="14" cy="21" r="1.5" fill="#ffffff" />
      </g>
      <text
        x="522"
        y="190"
        textAnchor="middle"
        fontSize="15"
        fontWeight="600"
        fill="#4a5568"
      >
        On-premises
      </text>
    </g>

    {/* ── Intranet hub ── */}
    <g>
      <rect x="28" y="38" width="340" height="140" rx="16" fill="#e8f4fa" />
      <rect
        x="20"
        y="30"
        width="340"
        height="142"
        rx="16"
        fill="#ffffff"
        stroke="#d4d6d9"
        strokeWidth="1.5"
      />
      <rect x="20" y="30" width="340" height="34" rx="16" fill="#046999" />
      <rect x="20" y="48" width="340" height="16" fill="#046999" />
      <circle cx="40" cy="47" r="3.5" fill="#ffffff" fillOpacity="0.7" />
      <circle cx="53" cy="47" r="3.5" fill="#ffffff" fillOpacity="0.7" />
      <circle cx="66" cy="47" r="3.5" fill="#ffffff" fillOpacity="0.7" />
      <text x="88" y="52" fontSize="15" fontWeight="700" fill="#ffffff">
        Intranet hub
      </text>
      {/* hub navigation */}
      <rect x="36" y="74" width="54" height="14" rx="7" fill="#e8f4fa" />
      <rect x="98" y="74" width="64" height="14" rx="7" fill="#e8f4fa" />
      <rect x="170" y="74" width="50" height="14" rx="7" fill="#e8f4fa" />
      <rect
        x="228"
        y="74"
        width="58"
        height="14"
        rx="7"
        fill="#046999"
        fillOpacity="0.2"
      />
      {/* news hero */}
      <rect x="36" y="98" width="180" height="60" rx="8" fill="#034e72" />
      <text x="48" y="121" fontSize="14" fontWeight="700" fill="#ffffff">
        Company news
      </text>
      <rect
        x="48"
        y="132"
        width="124"
        height="6"
        rx="3"
        fill="#ffffff"
        fillOpacity="0.5"
      />
      <rect
        x="48"
        y="144"
        width="88"
        height="6"
        rx="3"
        fill="#ffffff"
        fillOpacity="0.35"
      />
      {/* news list */}
      {[98, 132].map((y) => (
        <g key={y}>
          <rect x="228" y={y} width="116" height="26" rx="6" fill="#f7f8f9" />
          <rect
            x="234"
            y={y + 4}
            width="18"
            height="18"
            rx="4"
            fill="#e8f4fa"
          />
          <rect
            x="258"
            y={y + 7}
            width="72"
            height="5"
            rx="2.5"
            fill="#d4d6d9"
          />
          <rect
            x="258"
            y={y + 16}
            width="48"
            height="5"
            rx="2.5"
            fill="#e3e8ec"
          />
        </g>
      ))}
    </g>

    {/* ── Team site ── */}
    <g>
      <rect
        x="20"
        y="250"
        width="170"
        height="120"
        rx="12"
        fill="#ffffff"
        stroke="#d4d6d9"
        strokeWidth="1.5"
      />
      <text x="36" y="274" fontSize="14" fontWeight="700" fill="#0d1b2a">
        Team site
      </text>
      {[288, 310, 332].map((y, i) => (
        <g key={y}>
          <path
            d={`M36 ${y}h9l4 4v12h-13z`}
            fill="#e8f4fa"
            stroke="#046999"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          <rect
            x="56"
            y={y + 5}
            width={i === 1 ? 62 : 80}
            height="6"
            rx="3"
            fill="#e3e8ec"
          />
          <rect
            x="146"
            y={y + 3}
            width="28"
            height="10"
            rx="5"
            fill="#046999"
            fillOpacity={i === 0 ? 0.85 : 0.18}
          />
        </g>
      ))}
    </g>

    {/* ── Communication site ── */}
    <g>
      <rect
        x="215"
        y="250"
        width="170"
        height="120"
        rx="12"
        fill="#ffffff"
        stroke="#d4d6d9"
        strokeWidth="1.5"
      />
      <text x="231" y="274" fontSize="14" fontWeight="700" fill="#0d1b2a">
        Comms site
      </text>
      <rect x="231" y="284" width="138" height="34" rx="6" fill="#e8f4fa" />
      <path
        d="M242 306 l12-12 l9 9 l6-6 l14 14"
        stroke="#046999"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="350" cy="295" r="5" fill="#046999" fillOpacity="0.5" />
      <rect
        x="231"
        y="326"
        width="65"
        height="30"
        rx="5"
        fill="#f7f8f9"
        stroke="#e3e8ec"
      />
      <rect
        x="304"
        y="326"
        width="65"
        height="30"
        rx="5"
        fill="#f7f8f9"
        stroke="#e3e8ec"
      />
      <rect x="238" y="334" width="40" height="5" rx="2.5" fill="#d4d6d9" />
      <rect x="311" y="334" width="34" height="5" rx="2.5" fill="#d4d6d9" />
    </g>

    {/* ── Project site ── */}
    <g>
      <rect
        x="410"
        y="250"
        width="170"
        height="120"
        rx="12"
        fill="#ffffff"
        stroke="#d4d6d9"
        strokeWidth="1.5"
      />
      <text x="426" y="274" fontSize="14" fontWeight="700" fill="#0d1b2a">
        Project site
      </text>
      {[286, 306, 326].map((y, i) => (
        <g key={y}>
          <rect
            x="426"
            y={y}
            width="13"
            height="13"
            rx="3"
            fill={i < 2 ? "#046999" : "#ffffff"}
            stroke="#046999"
            strokeWidth="1.3"
          />
          {i < 2 && (
            <path
              d={`M429 ${y + 6.5}l2.6 2.6 4.2-4.6`}
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
          <rect
            x="447"
            y={y + 4}
            width={i === 2 ? 80 : 104}
            height="5"
            rx="2.5"
            fill="#e3e8ec"
          />
        </g>
      ))}
      <rect x="426" y="350" width="138" height="6" rx="3" fill="#e3e8ec" />
      <rect x="426" y="350" width="92" height="6" rx="3" fill="#046999" />
    </g>

    {/* ── Copilot ── */}
    <g>
      <circle cx="70" cy="456" r="44" fill="#111820" />
      <path
        d="M70 431 C73.5 448 77 451.5 94 456 C77 459.5 73.5 463 70 481 C66.5 463 63 459.5 46 456 C63 451.5 66.5 448 70 431Z"
        fill="#6fc3e8"
      />
      <circle className={liveClass} cx="103" cy="425" r="7" fill="#6fc3e8" />
      <circle
        cx="103"
        cy="425"
        r="7"
        fill="#6fc3e8"
        stroke="#ffffff"
        strokeWidth="2"
      />
      <text
        x="70"
        y="526"
        textAnchor="middle"
        fontSize="15"
        fontWeight="700"
        fill="#0d1b2a"
      >
        Copilot
      </text>
    </g>

    {/* Copilot answer bubble */}
    <g>
      <path
        d="M140 450 l-14 6 14 6z"
        fill="#ffffff"
        stroke="#e3e8ec"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect
        x="140"
        y="410"
        width="440"
        height="96"
        rx="14"
        fill="#ffffff"
        stroke="#e3e8ec"
        strokeWidth="1.5"
      />
      <rect x="139" y="449" width="3" height="14" fill="#ffffff" />
      <rect x="156" y="424" width="176" height="30" rx="15" fill="#046999" />
      <text
        x="244"
        y="444"
        textAnchor="middle"
        fontSize="14"
        fontWeight="600"
        fill="#ffffff"
      >
        Latest leave policy?
      </text>
      <rect x="420" y="424" width="144" height="30" rx="15" fill="#e8f4fa" />
      <text
        x="492"
        y="444"
        textAnchor="middle"
        fontSize="14"
        fontWeight="600"
        fill="#046999"
      >
        From: HR site
      </text>
      <rect x="156" y="468" width="380" height="7" rx="3.5" fill="#d4d6d9" />
      <rect x="156" y="483" width="260" height="7" rx="3.5" fill="#e3e8ec" />
    </g>
  </svg>
);

export default SpcdHeroSvg;
