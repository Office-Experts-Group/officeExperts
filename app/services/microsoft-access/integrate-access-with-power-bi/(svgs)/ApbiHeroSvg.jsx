// /app/services/microsoft-access/integrate-access-with-power-bi/(svgs)/ApbiHeroSvg.jsx
// Hero illustration: an Access table is refreshed on a schedule and appears
// as a Power BI style dashboard. Drawn straight onto the hero background (no panel).
// Hex values and the tokens they match:
//   #111820 $dark-bg, #18232e $dark-surface, #1a2a3a $dark-mid,
//   #046999 $accent, #6fc3e8 $accent-on-dark, #c0392b $replace-x,
//   #ffffff $white (faint strokes use $white-08 to $white-18 as stroke opacity)
// The only animated SVG on the page: flowClass animates the dashed pipe and
// liveClass pulses the refresh dot. Both are set in apbiHero.module.scss.

const ApbiHeroSvg = ({ flowClass = "", liveClass = "" }) => (
  <svg
    viewBox="0 0 560 520"
    fontFamily="aptos"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    {/* faint rings for depth */}
    <circle
      cx="400"
      cy="210"
      r="190"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.05"
    />
    <circle
      cx="400"
      cy="210"
      r="250"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.04"
    />
    <circle cx="30" cy="190" r="3" fill="#6fc3e8" fillOpacity="0.5" />
    <circle cx="540" cy="480" r="3" fill="#6fc3e8" fillOpacity="0.5" />
    <circle cx="300" cy="490" r="2" fill="#ffffff" fillOpacity="0.35" />

    {/* chip: refreshed */}
    <rect
      x="8"
      y="40"
      width="196"
      height="40"
      rx="20"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.14"
    />
    <circle className={liveClass} cx="30" cy="60" r="5" fill="#6fc3e8" />
    <text x="46" y="65" fontSize="14" fill="#ffffff" fillOpacity="0.88">
      Refreshed 6:00 am
    </text>

    {/* chip: shared */}
    <rect
      x="24"
      y="94"
      width="200"
      height="40"
      rx="20"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.14"
    />
    <circle cx="45" cy="110" r="4" fill="#6fc3e8" />
    <path
      d="M37 124c0-4.5 3.6-6.5 8-6.5s8 2 8 6.5"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle
      cx="55"
      cy="111"
      r="3.2"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="1.4"
    />
    <text x="68" y="119" fontSize="14" fill="#ffffff" fillOpacity="0.88">
      Shared with your team
    </text>

    {/* pipe from the Access table to the dashboard */}
    <path
      d="M114 282 C114 214 150 170 250 170"
      fill="none"
      stroke="#6fc3e8"
      strokeOpacity="0.16"
      strokeWidth="9"
      strokeLinecap="round"
    />
    <path
      className={flowClass}
      d="M114 282 C114 214 150 170 250 170"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="6 10"
    />

    {/* refresh hub */}
    <circle
      cx="144"
      cy="198"
      r="20"
      fill="#111820"
      stroke="#6fc3e8"
      strokeWidth="1.5"
    />
    <path
      d="M135.5 195.5A9 9 0 0 1 151 192"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path d="M148 187.5l5 4.8-6.6 1.6z" fill="#6fc3e8" />
    <path
      d="M152.5 200.5A9 9 0 0 1 137 204"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path d="M140 208.5l-5-4.8 6.6-1.6z" fill="#6fc3e8" />
    <text
      x="116"
      y="194"
      fontSize="14"
      fill="#ffffff"
      fillOpacity="0.75"
      textAnchor="end"
    >
      Scheduled
    </text>
    <text
      x="116"
      y="212"
      fontSize="14"
      fill="#ffffff"
      fillOpacity="0.75"
      textAnchor="end"
    >
      refresh
    </text>

    {/* Access table card (a second table peeks out behind it) */}
    <rect
      x="24"
      y="264"
      width="196"
      height="40"
      rx="12"
      fill="#1a2a3a"
      stroke="#ffffff"
      strokeOpacity="0.1"
    />
    <rect
      x="8"
      y="282"
      width="212"
      height="220"
      rx="14"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.16"
    />
    <rect x="8" y="282" width="212" height="34" rx="14" fill="#046999" />
    <rect x="8" y="298" width="212" height="18" fill="#046999" />
    <circle
      cx="24"
      cy="299"
      r="4"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.6"
    />
    <path
      d="M28 299h10M34 299v4M38 299v3"
      stroke="#ffffff"
      strokeWidth="1.6"
      strokeLinecap="round"
      fill="none"
    />
    <text x="46" y="304" fontSize="15" fontWeight="700" fill="#ffffff">
      Orders
    </text>
    <rect x="8" y="316" width="212" height="28" fill="#1a2a3a" />
    <text x="20" y="335" fontSize="14" fill="#ffffff" fillOpacity="0.55">
      ID
    </text>
    <text x="66" y="335" fontSize="14" fill="#ffffff" fillOpacity="0.55">
      Customer
    </text>
    <text x="166" y="335" fontSize="14" fill="#ffffff" fillOpacity="0.55">
      Total
    </text>
    {[
      ["1001", "Harbour Co", "$4,200"],
      ["1002", "Bright Dental", "$1,850"],
      ["1003", "Kemp Foods", ""],
      ["1004", "Lane & Co", "$960"],
      ["1005", "Orca Freight", "$3,120"],
    ].map(([id, name, total], i) => {
      const y = 344 + i * 28;
      return (
        <g key={id}>
          {i % 2 === 1 && (
            <rect
              x="8"
              y={y}
              width="212"
              height="28"
              fill="#ffffff"
              fillOpacity="0.03"
            />
          )}
          <line
            x1="8"
            x2="220"
            y1={y + 28}
            y2={y + 28}
            stroke="#ffffff"
            strokeOpacity="0.08"
          />
          <text
            x="20"
            y={y + 19}
            fontSize="14"
            fill="#ffffff"
            fillOpacity="0.65"
          >
            {id}
          </text>
          <text
            x="66"
            y={y + 19}
            fontSize="14"
            fill="#ffffff"
            fillOpacity="0.88"
          >
            {name}
          </text>
          <text
            x="166"
            y={y + 19}
            fontSize="14"
            fill="#ffffff"
            fillOpacity="0.88"
          >
            {total}
          </text>
        </g>
      );
    })}
    {/* a blank cell Power BI will flag during tidy-up */}
    <rect
      x="160"
      y="376"
      width="54"
      height="22"
      rx="4"
      fill="#c0392b"
      fillOpacity="0.14"
      stroke="#c0392b"
      strokeWidth="1.4"
    />
    <circle
      cx="114"
      cy="282"
      r="5"
      fill="#6fc3e8"
      stroke="#111820"
      strokeWidth="2"
    />

    {/* dashboard */}
    <rect
      x="250"
      y="30"
      width="302"
      height="350"
      rx="18"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.16"
    />
    <circle cx="272" cy="52" r="4" fill="#6fc3e8" />
    <circle cx="286" cy="52" r="4" fill="#ffffff" fillOpacity="0.35" />
    <circle cx="300" cy="52" r="4" fill="#ffffff" fillOpacity="0.35" />
    <text x="316" y="57" fontSize="14" fill="#ffffff" fillOpacity="0.75">
      Sales overview
    </text>
    <line
      x1="250"
      x2="552"
      y1="70"
      y2="70"
      stroke="#ffffff"
      strokeOpacity="0.08"
    />
    {[
      [262, "Revenue", "$1.2m"],
      [358, "Orders", "3,481"],
      [454, "Margin", "31%"],
    ].map(([x, label, value]) => (
      <g key={label}>
        <rect x={x} y="82" width="88" height="58" rx="10" fill="#1a2a3a" />
        <text
          x={x + 10}
          y="104"
          fontSize="14"
          fill="#ffffff"
          fillOpacity="0.65"
        >
          {label}
        </text>
        <text x={x + 10} y="128" fontSize="20" fontWeight="700" fill="#ffffff">
          {value}
        </text>
      </g>
    ))}

    {/* bars */}
    <rect x="262" y="152" width="150" height="150" rx="12" fill="#1a2a3a" />
    <text x="274" y="176" fontSize="14" fill="#ffffff" fillOpacity="0.65">
      By month
    </text>
    <line
      x1="274"
      x2="400"
      y1="286"
      y2="286"
      stroke="#ffffff"
      strokeOpacity="0.18"
    />
    {[34, 52, 44, 70, 58, 86].map((h, i) => (
      <rect
        key={i}
        x={276 + i * 20}
        y={286 - h}
        width="12"
        height={h}
        rx="3"
        fill={i === 5 ? "#6fc3e8" : "#046999"}
      />
    ))}

    {/* donut */}
    <rect x="422" y="152" width="120" height="150" rx="12" fill="#1a2a3a" />
    <text x="434" y="176" fontSize="14" fill="#ffffff" fillOpacity="0.65">
      By region
    </text>
    <g transform="rotate(-90 482 240)" fill="none" strokeWidth="12">
      <circle cx="482" cy="240" r="30" stroke="#ffffff" strokeOpacity="0.08" />
      <circle
        cx="482"
        cy="240"
        r="30"
        stroke="#6fc3e8"
        strokeDasharray="80 108.5"
      />
      <circle
        cx="482"
        cy="240"
        r="30"
        stroke="#046999"
        strokeDasharray="60 128.5"
        strokeDashoffset="-84"
      />
      <circle
        cx="482"
        cy="240"
        r="30"
        stroke="#ffffff"
        strokeOpacity="0.35"
        strokeDasharray="36 152.5"
        strokeDashoffset="-148"
      />
    </g>
    <text
      x="482"
      y="245"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      fillOpacity="0.88"
      textAnchor="middle"
    >
      42%
    </text>

    {/* trend */}
    <rect x="262" y="314" width="280" height="54" rx="12" fill="#1a2a3a" />
    <polygon
      points="276,352 306,344 336,348 366,334 396,338 426,326 456,330 486,322 516,324 516,360 276,360"
      fill="#6fc3e8"
      fillOpacity="0.12"
    />
    <polyline
      points="276,352 306,344 336,348 366,334 396,338 426,326 456,330 486,322 516,324"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="516" cy="324" r="4" fill="#6fc3e8" />

    {/* insight card */}
    <rect
      x="330"
      y="398"
      width="222"
      height="50"
      rx="14"
      fill="#046999"
      stroke="#ffffff"
      strokeOpacity="0.2"
    />
    <path
      d="M352 414l2.2 5.2 5.3 2.3-5.3 2.2-2.2 5.3-2.2-5.3-5.3-2.2 5.3-2.3z"
      fill="#ffffff"
    />
    <text x="372" y="428" fontSize="14" fontWeight="700" fill="#ffffff">
      Sales up 8% this quarter
    </text>
  </svg>
);

export default ApbiHeroSvg;
