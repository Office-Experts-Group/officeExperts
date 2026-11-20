// /app/services/microsoft-access/is-access-right-for-your-company/(svgs)/IarcHeroSvg.jsx
// Hero illustration, drawn straight onto the dark hero (no panel).
// Hex values and the tokens they match:
//   #111820 $dark-bg · #18232e $dark-surface · #1a2a3a $dark-mid
//   #046999 $accent · #6fc3e8 $accent-on-dark · #ffffff $white
//   #f7f8f9 $light-bg · #e3e8ec $line · #4a5568 $text-secondary
// The only animated SVG on the page: flowClass moves the dashes along the
// connectors, liveClass pulses the "live" dot. Both are set in iarcHero.module.scss.
import React from "react";

const CARD = "#18232e";
const MID = "#1a2a3a";
const DARK = "#111820";
const ACCENT = "#046999";
const SKY = "#6fc3e8";

const Avatar = ({ cx, cy, fill }) => (
  <g>
    <circle cx={cx} cy={cy} r="15" fill={fill} />
    <circle cx={cx} cy={cy - 4} r="4.6" fill="#ffffff" fillOpacity="0.92" />
    <path
      d={`M${cx - 8.5} ${cy + 9} a8.5 7 0 0 1 17 0`}
      fill="#ffffff"
      fillOpacity="0.92"
    />
  </g>
);

const Row = ({ y, widths, hot }) => (
  <g>
    {hot && (
      <rect
        x="17"
        y={y}
        width="230"
        height="26"
        fill={SKY}
        fillOpacity="0.14"
      />
    )}
    <rect
      x="30"
      y={y + 9}
      width={widths[0]}
      height="8"
      rx="4"
      fill="#ffffff"
      fillOpacity="0.28"
    />
    <rect
      x="72"
      y={y + 9}
      width={widths[1]}
      height="8"
      rx="4"
      fill="#ffffff"
      fillOpacity="0.28"
    />
    <rect
      x="186"
      y={y + 9}
      width={widths[2]}
      height="8"
      rx="4"
      fill="#ffffff"
      fillOpacity="0.28"
    />
    <path d={`M17 ${y + 26}H247`} stroke="#ffffff" strokeOpacity="0.08" />
  </g>
);

const IarcHeroSvg = ({ flowClass = "", liveClass = "" }) => (
  <svg
    viewBox="0 0 560 540"
    role="img"
    aria-labelledby="iarc-hero-title iarc-hero-desc"
    fontFamily="aptos"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="iarc-hero-title">An Access database at work</title>
    <desc id="iarc-hero-desc">
      A customers table linked to an orders table, an order entry form, a
      monthly sales report, six people sharing one live database and a fit gauge
      pointing at Access.
    </desc>

    {/* faint rings for depth */}
    <circle
      cx="280"
      cy="270"
      r="262"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.05"
    />
    <circle
      cx="280"
      cy="270"
      r="196"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.05"
    />

    {/* Customers datasheet */}
    <rect
      x="16"
      y="24"
      width="232"
      height="168"
      rx="14"
      fill={CARD}
      stroke="#ffffff"
      strokeOpacity="0.14"
    />
    <path
      d="M16 58V38a14 14 0 0 1 14-14h204a14 14 0 0 1 14 14v20z"
      fill={ACCENT}
    />
    <text x="32" y="47" fontSize="14" fontWeight="700" fill="#ffffff">
      Customers
    </text>
    <g fill="#ffffff" fillOpacity="0.85">
      <rect x="216" y="35" width="8" height="8" rx="2" />
      <rect x="227" y="35" width="8" height="8" rx="2" />
    </g>
    <rect x="17" y="58" width="230" height="26" fill={MID} />
    <g fontSize="14" fill="#ffffff" fillOpacity="0.7">
      <text x="30" y="76">
        ID
      </text>
      <text x="72" y="76">
        Name
      </text>
      <text x="186" y="76">
        State
      </text>
    </g>
    <Row y={84} widths={[16, 92, 28]} />
    <Row y={110} widths={[16, 74, 28]} hot />
    <Row y={136} widths={[16, 104, 28]} />
    <Row y={162} widths={[16, 60, 28]} />

    {/* Orders datasheet */}
    <rect
      x="16"
      y="232"
      width="232"
      height="148"
      rx="14"
      fill={CARD}
      stroke="#ffffff"
      strokeOpacity="0.14"
    />
    <path
      d="M16 266V246a14 14 0 0 1 14-14h204a14 14 0 0 1 14 14v20z"
      fill={ACCENT}
    />
    <text x="32" y="255" fontSize="14" fontWeight="700" fill="#ffffff">
      Orders
    </text>
    <rect x="17" y="266" width="230" height="26" fill={MID} />
    <g fontSize="14" fill="#ffffff" fillOpacity="0.7">
      <text x="30" y="284">
        Order
      </text>
      <text x="94" y="284">
        Date
      </text>
      <text x="164" y="284">
        Customer
      </text>
    </g>
    {[292, 318, 344].map((y, i) => (
      <g key={y}>
        {i === 1 && (
          <rect
            x="17"
            y={y}
            width="230"
            height="26"
            fill={SKY}
            fillOpacity="0.14"
          />
        )}
        <rect
          x="30"
          y={y + 9}
          width="30"
          height="8"
          rx="4"
          fill="#ffffff"
          fillOpacity="0.28"
        />
        <rect
          x="94"
          y={y + 9}
          width="44"
          height="8"
          rx="4"
          fill="#ffffff"
          fillOpacity="0.28"
        />
        <rect
          x="164"
          y={y + 9}
          width="16"
          height="8"
          rx="4"
          fill="#ffffff"
          fillOpacity="0.28"
        />
        <path d={`M17 ${y + 26}H247`} stroke="#ffffff" strokeOpacity="0.08" />
      </g>
    ))}

    {/* relationship line: one customer, many orders */}
    <path
      d="M60 192V212H200V232"
      fill="none"
      stroke={SKY}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <text x="66" y="208" fontSize="14" fontWeight="700" fill={SKY}>
      1
    </text>
    <path
      d="M200 221L192 232M200 221V232M200 221L208 232"
      fill="none"
      stroke={SKY}
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Order entry form */}
    <rect
      x="276"
      y="24"
      width="268"
      height="216"
      rx="14"
      fill={CARD}
      stroke="#ffffff"
      strokeOpacity="0.14"
    />
    <path
      d="M276 58V38a14 14 0 0 1 14-14h240a14 14 0 0 1 14 14v20z"
      fill={ACCENT}
    />
    <text x="292" y="47" fontSize="14" fontWeight="700" fill="#ffffff">
      Order entry
    </text>
    <g fill="#ffffff" fillOpacity="0.85">
      <circle cx="504" cy="41" r="3.5" />
      <circle cx="516" cy="41" r="3.5" />
      <circle cx="528" cy="41" r="3.5" />
    </g>
    <text x="292" y="80" fontSize="14" fill="#ffffff" fillOpacity="0.7">
      Customer
    </text>
    <rect
      x="292"
      y="88"
      width="236"
      height="28"
      rx="6"
      fill={DARK}
      stroke="#ffffff"
      strokeOpacity="0.2"
    />
    <rect
      x="304"
      y="98"
      width="92"
      height="8"
      rx="4"
      fill="#ffffff"
      fillOpacity="0.5"
    />
    <path d="M496 88V116" stroke="#ffffff" strokeOpacity="0.2" />
    <path
      d="M506 99l6 6 6-6"
      fill="none"
      stroke={SKY}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text x="292" y="140" fontSize="14" fill="#ffffff" fillOpacity="0.7">
      Order date
    </text>
    <rect
      x="292"
      y="148"
      width="112"
      height="28"
      rx="6"
      fill={DARK}
      stroke="#ffffff"
      strokeOpacity="0.2"
    />
    <rect
      x="304"
      y="158"
      width="56"
      height="8"
      rx="4"
      fill="#ffffff"
      fillOpacity="0.5"
    />
    <rect
      x="378"
      y="156"
      width="14"
      height="12"
      rx="2"
      fill="none"
      stroke={SKY}
      strokeWidth="1.5"
    />
    <path d="M378 160h14" stroke={SKY} strokeWidth="1.5" />
    <rect
      x="424"
      y="154"
      width="16"
      height="16"
      rx="4"
      fill={SKY}
      fillOpacity="0.2"
      stroke={SKY}
      strokeWidth="1.5"
    />
    <path
      d="M428 162l3 3 5-6"
      fill="none"
      stroke={SKY}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text x="448" y="167" fontSize="14" fill="#ffffff" fillOpacity="0.88">
      Paid
    </text>
    <rect x="292" y="196" width="76" height="30" rx="6" fill={ACCENT} />
    <text
      x="330"
      y="216"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      Save
    </text>
    <path d="M426 211l7-5v10z" fill={SKY} />
    <text x="440" y="216" fontSize="14" fill="#ffffff" fillOpacity="0.88">
      3 of 120
    </text>
    <path d="M508 206l7 5-7 5z" fill={SKY} />

    {/* Monthly sales report */}
    <rect
      x="276"
      y="264"
      width="268"
      height="116"
      rx="14"
      fill={CARD}
      stroke="#ffffff"
      strokeOpacity="0.14"
    />
    <rect
      x="294"
      y="280"
      width="92"
      height="84"
      rx="6"
      fill="#f7f8f9"
      fillOpacity="0.95"
    />
    <rect x="304" y="291" width="48" height="7" rx="3.5" fill={ACCENT} />
    <rect
      x="304"
      y="306"
      width="72"
      height="5"
      rx="2.5"
      fill="#4a5568"
      fillOpacity="0.35"
    />
    <rect
      x="304"
      y="316"
      width="60"
      height="5"
      rx="2.5"
      fill="#4a5568"
      fillOpacity="0.35"
    />
    <rect
      x="304"
      y="326"
      width="68"
      height="5"
      rx="2.5"
      fill="#4a5568"
      fillOpacity="0.35"
    />
    <rect
      x="304"
      y="340"
      width="30"
      height="14"
      rx="3"
      fill={ACCENT}
      fillOpacity="0.18"
    />
    <rect
      x="340"
      y="340"
      width="30"
      height="14"
      rx="3"
      fill={ACCENT}
      fillOpacity="0.18"
    />
    <text x="404" y="298" fontSize="14" fontWeight="700" fill="#ffffff">
      Monthly sales
    </text>
    <path d="M404 360H524" stroke="#ffffff" strokeOpacity="0.2" />
    {[
      [408, 22],
      [431, 34],
      [454, 28],
      [477, 48],
      [500, 40],
    ].map(([x, h], i) => (
      <rect
        key={x}
        x={x}
        y={360 - h}
        width="16"
        height={h}
        rx="3"
        fill={i === 3 ? SKY : ACCENT}
      />
    ))}

    {/* Fit gauge */}
    <rect
      x="16"
      y="404"
      width="252"
      height="124"
      rx="14"
      fill={CARD}
      stroke="#ffffff"
      strokeOpacity="0.14"
    />
    <text
      x="32"
      y="428"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      fillOpacity="0.88"
    >
      Fit check
    </text>
    <path
      d="M82 482A60 60 0 0 1 112 430"
      fill="none"
      stroke="#2b3d4f"
      strokeWidth="14"
    />
    <path
      d="M112 430A60 60 0 0 1 172 430"
      fill="none"
      stroke={SKY}
      strokeWidth="14"
    />
    <path
      d="M172 430A60 60 0 0 1 202 482"
      fill="none"
      stroke={ACCENT}
      strokeWidth="14"
    />
    <path
      d="M142 482L129.6 435.6"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="142" cy="482" r="7" fill="#ffffff" />
    <circle cx="142" cy="482" r="3" fill={DARK} />
    <g fontSize="14" fill="#ffffff" fillOpacity="0.7" textAnchor="middle">
      <text x="80" y="506">
        Sheet
      </text>
      <text x="142" y="506" fillOpacity="0.95" fontWeight="700">
        Access
      </text>
      <text x="206" y="506">
        Server
      </text>
    </g>
    <rect
      x="196"
      y="410"
      width="62"
      height="24"
      rx="12"
      fill={SKY}
      fillOpacity="0.18"
      stroke={SKY}
    />
    <text
      x="227"
      y="427"
      fontSize="14"
      fontWeight="700"
      fill={SKY}
      textAnchor="middle"
    >
      Good fit
    </text>

    {/* Shared by a team */}
    <rect
      x="292"
      y="404"
      width="252"
      height="124"
      rx="14"
      fill={CARD}
      stroke="#ffffff"
      strokeOpacity="0.14"
    />
    <Avatar cx={322} cy={440} fill={ACCENT} />
    <Avatar cx={356} cy={440} fill="#2f6f8f" />
    <Avatar cx={390} cy={440} fill={ACCENT} />
    <Avatar cx={424} cy={440} fill="#2f6f8f" />
    <Avatar cx={458} cy={440} fill={ACCENT} />
    <Avatar cx={492} cy={440} fill="#2f6f8f" />
    <text
      x="308"
      y="482"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      fillOpacity="0.92"
    >
      Six people, one database
    </text>
    <circle className={liveClass} cx="314" cy="502" r="4" fill={SKY} />
    <circle cx="314" cy="502" r="4" fill={SKY} />
    <text x="326" y="507" fontSize="14" fill="#ffffff" fillOpacity="0.7">
      Live, no copies to merge
    </text>

    {/* connectors */}
    <g
      fill="none"
      stroke={SKY}
      strokeWidth="2"
      strokeDasharray="5 6"
      strokeLinecap="round"
      className={flowClass}
    >
      <path d="M248 120C262 120 262 96 276 96" />
      <path d="M248 322H276" />
      <path d="M410 240V264" />
      <path d="M410 380V404" />
      <path d="M132 380V404" />
      <path d="M268 466H292" />
    </g>
  </svg>
);

export default IarcHeroSvg;
