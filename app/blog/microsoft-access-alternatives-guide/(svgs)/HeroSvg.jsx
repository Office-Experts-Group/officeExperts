// /app/blog/microsoft-access-alternatives-guide/(svgs)/HeroSvg.jsx
// Hero illustration on the dark hero: an Access front-end linked to a cloud database,
// with a mobile app, dashboard and web portal that can be added later.
// Hex values match tokens: #111820 $dark-bg, #18232e $dark-surface, #1a2a3a $dark-mid,
// #046999 $accent, #6fc3e8 $accent-on-dark. #2b4258, #5d7488 and #9fb7c8 are slate tints.
// flowClass and liveClass are CSS module classes passed in so the motion lives in the SCSS.

export default function HeroSvg({ flowClass = "", liveClass = "" }) {
  return (
    <svg
      viewBox="0 0 560 476"
      role="img"
      aria-labelledby="aag-hero-title aag-hero-desc"
      xmlns="http://www.w3.org/2000/svg"
      fontFamily="aptos"
    >
      <title id="aag-hero-title">
        An Access front-end linked to a cloud database
      </title>
      <desc id="aag-hero-desc">
        Several Access windows share one Azure SQL back-end in the cloud. Below
        it, a mobile app, a dashboard and a web portal can be added later, all
        using the same data.
      </desc>

      {/* Stacked windows behind the main one: more users, same front-end */}
      <rect
        x="48"
        y="16"
        width="270"
        height="210"
        rx="14"
        fill="#142029"
        stroke="#25384b"
      />
      <rect
        x="34"
        y="28"
        width="270"
        height="210"
        rx="14"
        fill="#16222d"
        stroke="#2b4258"
      />

      {/* Main Access front-end window */}
      <rect
        x="20"
        y="40"
        width="270"
        height="210"
        rx="14"
        fill="#18232e"
        stroke="#2b4258"
      />
      <path
        d="M20 54a14 14 0 0 1 14-14h242a14 14 0 0 1 14 14v20H20z"
        fill="#1a2a3a"
      />
      <circle cx="40" cy="57" r="5" fill="#5d7488" />
      <circle cx="58" cy="57" r="5" fill="#5d7488" />
      <circle cx="76" cy="57" r="5" fill="#5d7488" />
      <text x="100" y="62" fontSize="14" fill="#cfe3ef">
        Access front-end
      </text>

      {/* Navigation */}
      <rect x="32" y="86" width="76" height="152" rx="8" fill="#1a2a3a" />
      <rect x="38" y="94" width="64" height="26" rx="6" fill="#046999" />
      <text x="48" y="112" fontSize="14" fill="#ffffff">
        Orders
      </text>
      <text x="48" y="140" fontSize="14" fill="#9fb7c8">
        Clients
      </text>
      <text x="48" y="166" fontSize="14" fill="#9fb7c8">
        Stock
      </text>
      <text x="48" y="192" fontSize="14" fill="#9fb7c8">
        Reports
      </text>
      <rect x="44" y="210" width="52" height="6" rx="3" fill="#2b4258" />
      <rect x="44" y="222" width="36" height="6" rx="3" fill="#2b4258" />

      {/* Form */}
      <text x="122" y="102" fontSize="14" fill="#9fb7c8">
        Client
      </text>
      <rect
        x="122"
        y="108"
        width="152"
        height="26"
        rx="5"
        fill="#111820"
        stroke="#2b4258"
      />
      <text x="132" y="126" fontSize="14" fill="#ffffff">
        Harbour Co.
      </text>
      <text x="122" y="156" fontSize="14" fill="#9fb7c8">
        Status
      </text>
      <rect
        x="122"
        y="162"
        width="104"
        height="26"
        rx="5"
        fill="#111820"
        stroke="#2b4258"
      />
      <rect x="130" y="168" width="48" height="14" rx="7" fill="#046999" />
      <path
        d="M208 172l5 5 8-9"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="122" y="202" width="72" height="30" rx="6" fill="#046999" />
      <text x="143" y="222" fontSize="14" fill="#ffffff">
        Save
      </text>
      <rect
        x="202"
        y="202"
        width="72"
        height="30"
        rx="6"
        fill="none"
        stroke="#5d7488"
      />
      <text x="222" y="222" fontSize="14" fill="#9fb7c8">
        Print
      </text>

      {/* Cloud */}
      <g fill="#1a2a3a">
        <circle cx="392" cy="138" r="30" />
        <circle cx="428" cy="106" r="38" />
        <circle cx="476" cy="114" r="34" />
        <circle cx="510" cy="142" r="28" />
        <rect x="392" y="138" width="118" height="30" />
      </g>

      {/* Database cylinder inside the cloud */}
      <path d="M416 98v46c0 6 15 10 34 10s34-4 34-10V98z" fill="#046999" />
      <ellipse cx="450" cy="98" rx="34" ry="10" fill="#6fc3e8" />
      <path
        d="M416 114c0 6 15 10 34 10s34-4 34-10M416 130c0 6 15 10 34 10s34-4 34-10"
        fill="none"
        stroke="#6fc3e8"
        strokeOpacity="0.7"
        strokeWidth="1.6"
      />
      <circle className={liveClass} cx="520" cy="96" r="5" fill="#6fc3e8" />

      <text
        x="450"
        y="200"
        fontSize="16"
        fontWeight="700"
        fill="#ffffff"
        textAnchor="middle"
      >
        Azure SQL back-end
      </text>
      <text x="450" y="220" fontSize="14" fill="#9fb7c8" textAnchor="middle">
        One shared source of data
      </text>

      {/* Link from Access to the cloud database */}
      <path
        className={flowClass}
        d="M290 150C322 150 334 138 362 138"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2.4"
        strokeDasharray="6 6"
        strokeLinecap="round"
      />
      <path
        d="M356 131l8 7-8 7"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Rail to the things you can add later */}
      <text x="40" y="278" fontSize="14" fill="#9fb7c8">
        Add these later, on the same data
      </text>
      <path
        className={flowClass}
        d="M450 232V290M100 290H460M100 290V306M280 290V306M460 290V306"
        fill="none"
        stroke="#5bbce6"
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeDasharray="6 6"
        strokeLinecap="round"
      />

      {/* Tile 1: mobile app */}
      <rect
        x="20"
        y="306"
        width="160"
        height="150"
        rx="12"
        fill="#18232e"
        stroke="#2b4258"
      />
      <rect
        x="70"
        y="320"
        width="60"
        height="98"
        rx="10"
        fill="#111820"
        stroke="#6fc3e8"
        strokeWidth="2"
      />
      <rect x="90" y="326" width="20" height="4" rx="2" fill="#2b4258" />
      <rect x="78" y="338" width="44" height="24" rx="4" fill="#1a2a3a" />
      <rect x="82" y="344" width="24" height="4" rx="2" fill="#6fc3e8" />
      <rect x="82" y="352" width="34" height="3" rx="1.5" fill="#5d7488" />
      <rect x="78" y="366" width="44" height="24" rx="4" fill="#1a2a3a" />
      <rect x="82" y="372" width="28" height="4" rx="2" fill="#6fc3e8" />
      <rect x="82" y="380" width="30" height="3" rx="1.5" fill="#5d7488" />
      <rect x="78" y="396" width="44" height="14" rx="7" fill="#046999" />
      <text x="100" y="440" fontSize="14" fill="#ffffff" textAnchor="middle">
        Mobile app
      </text>

      {/* Tile 2: dashboard */}
      <rect
        x="200"
        y="306"
        width="160"
        height="150"
        rx="12"
        fill="#18232e"
        stroke="#2b4258"
      />
      <path
        d="M232 332v78h96"
        fill="none"
        stroke="#5d7488"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="242" y="382" width="14" height="28" rx="2" fill="#046999" />
      <rect x="264" y="364" width="14" height="46" rx="2" fill="#6fc3e8" />
      <rect x="286" y="374" width="14" height="36" rx="2" fill="#046999" />
      <rect x="308" y="346" width="14" height="64" rx="2" fill="#6fc3e8" />
      <path
        d="M249 372 271 354 293 364 315 336"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="249" cy="372" r="3" fill="#ffffff" />
      <circle cx="271" cy="354" r="3" fill="#ffffff" />
      <circle cx="293" cy="364" r="3" fill="#ffffff" />
      <circle cx="315" cy="336" r="3" fill="#ffffff" />
      <text x="280" y="440" fontSize="14" fill="#ffffff" textAnchor="middle">
        Dashboards
      </text>

      {/* Tile 3: web portal */}
      <rect
        x="380"
        y="306"
        width="160"
        height="150"
        rx="12"
        fill="#18232e"
        stroke="#2b4258"
      />
      <rect
        x="400"
        y="324"
        width="120"
        height="92"
        rx="8"
        fill="#111820"
        stroke="#6fc3e8"
        strokeWidth="1.6"
      />
      <path
        d="M400 332a8 8 0 0 1 8-8h104a8 8 0 0 1 8 8v10H400z"
        fill="#1a2a3a"
      />
      <circle cx="411" cy="333" r="3" fill="#5d7488" />
      <circle cx="421" cy="333" r="3" fill="#5d7488" />
      <circle cx="431" cy="333" r="3" fill="#5d7488" />
      <rect x="410" y="350" width="46" height="56" rx="4" fill="#1a2a3a" />
      <rect x="418" y="360" width="30" height="5" rx="2.5" fill="#6fc3e8" />
      <rect x="418" y="372" width="24" height="4" rx="2" fill="#5d7488" />
      <rect x="418" y="382" width="28" height="4" rx="2" fill="#5d7488" />
      <rect x="464" y="352" width="46" height="6" rx="3" fill="#6fc3e8" />
      <rect x="464" y="364" width="38" height="5" rx="2.5" fill="#5d7488" />
      <rect x="464" y="375" width="42" height="5" rx="2.5" fill="#5d7488" />
      <rect x="464" y="388" width="46" height="16" rx="8" fill="#046999" />
      <text x="460" y="440" fontSize="14" fill="#ffffff" textAnchor="middle">
        Web portal
      </text>
    </svg>
  );
}
