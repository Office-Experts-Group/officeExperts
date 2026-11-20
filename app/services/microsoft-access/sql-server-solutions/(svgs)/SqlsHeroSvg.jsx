// /app/services/microsoft-access/sql-server-solutions/(svgs)/SqlsHeroSvg.jsx
// Hero illustration: an overloaded Access file (size gauge nearly full, one
// locked row) migrating into a SQL Server database, with encryption and
// backup chips and several users working at once. Sits straight on the hero
// background (no panel). Animated through the flowClass and liveClass props.
// Hex values and the tokens they match:
//   #111820 $dark-bg, #18232e $dark-surface, #1a2a3a $dark-mid,
//   #6fc3e8 $accent-on-dark, #0b2433 $ink, #c0392b $replace-x,
//   #ffffff $white (at the opacities used). #223a50 is a one-off lift of $dark-mid.
import React from "react";

const Laptop = ({ x, y, live, liveClass }) => (
  <g transform={`translate(${x} ${y})`}>
    <rect
      width="76"
      height="50"
      rx="6"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity=".28"
    />
    <circle cx="17" cy="14" r="5" fill="#6fc3e8" />
    <rect
      x="28"
      y="10"
      width="39"
      height="8"
      rx="3"
      fill="#6fc3e8"
      fillOpacity=".55"
    />
    <rect
      x="9"
      y="23"
      width="40"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity=".25"
    />
    <rect
      x="9"
      y="33"
      width="50"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity=".25"
    />
    <path
      d="M-4 50h84l-5 10H1z"
      fill="#1a2a3a"
      stroke="#ffffff"
      strokeOpacity=".28"
    />
    <circle
      cx="62"
      cy="40"
      r="4"
      fill="#6fc3e8"
      className={live ? liveClass : undefined}
    />
  </g>
);

const SqlsHeroSvg = ({ flowClass = "", liveClass = "", className = "" }) => (
  <svg
    viewBox="0 0 640 556"
    fontFamily="aptos"
    role="img"
    aria-labelledby="sqls-hero-title sqls-hero-desc"
    className={className}
  >
    <title id="sqls-hero-title">An Access file moving into SQL Server</title>
    <desc id="sqls-hero-desc">
      An Access database file that is almost at its 2 GB limit, with one locked
      row, sends its tables into a SQL Server database. The server is encrypted
      and backed up, and three laptops work against it at the same time.
    </desc>

    {/* faint rings for depth */}
    <circle
      cx="510"
      cy="230"
      r="128"
      fill="none"
      stroke="#ffffff"
      strokeOpacity=".06"
    />
    <circle
      cx="510"
      cy="230"
      r="100"
      fill="none"
      stroke="#ffffff"
      strokeOpacity=".06"
    />

    {/* Access file card */}
    <g transform="translate(10 120)">
      <rect
        width="230"
        height="260"
        rx="14"
        fill="#18232e"
        stroke="#ffffff"
        strokeOpacity=".18"
      />
      <path
        d="M0 14A14 14 0 0 1 14 0h202a14 14 0 0 1 14 14v30H0z"
        fill="#1a2a3a"
      />
      <circle cx="20" cy="22" r="4" fill="#6fc3e8" fillOpacity=".7" />
      <text
        x="34"
        y="28"
        fontSize="15"
        fontWeight="700"
        fill="#ffffff"
        fillOpacity=".92"
      >
        Orders.accdb
      </text>
      <rect
        x="150"
        y="14"
        width="30"
        height="16"
        rx="5"
        fill="#ffffff"
        fillOpacity=".1"
      />
      <rect
        x="186"
        y="14"
        width="30"
        height="16"
        rx="5"
        fill="#ffffff"
        fillOpacity=".1"
      />
      {[58, 92, 126, 160].map((y, i) => (
        <g key={y}>
          {i === 2 ? (
            <rect
              x="10"
              y={y}
              width="210"
              height="28"
              rx="6"
              fill="#c0392b"
              fillOpacity=".28"
              stroke="#c0392b"
            />
          ) : (
            <rect
              x="10"
              y={y}
              width="210"
              height="28"
              rx="6"
              fill="#ffffff"
              fillOpacity=".04"
            />
          )}
          <rect
            x="20"
            y={y + 9}
            width="54"
            height="10"
            rx="3"
            fill="#ffffff"
            fillOpacity=".2"
          />
          <rect
            x="84"
            y={y + 9}
            width="64"
            height="10"
            rx="3"
            fill="#ffffff"
            fillOpacity=".2"
          />
          <rect
            x="158"
            y={y + 9}
            width="30"
            height="10"
            rx="3"
            fill="#ffffff"
            fillOpacity=".2"
          />
        </g>
      ))}
      {/* padlock on the locked row */}
      <rect x="196" y="139" width="16" height="12" rx="2.5" fill="#ffffff" />
      <path
        d="M199 139v-3.5a5 5 0 0 1 10 0V139"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
      />
      <text x="18" y="222" fontSize="14" fill="#ffffff" fillOpacity=".88">
        1.9 GB of 2 GB
      </text>
      <path d="M204 205l10 18h-20z" fill="#c0392b" />
      <path
        d="M204 211v6"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="204" cy="220" r="1.3" fill="#ffffff" />
      <rect
        x="18"
        y="232"
        width="194"
        height="14"
        rx="7"
        fill="#ffffff"
        fillOpacity=".12"
      />
      <rect x="18" y="232" width="184" height="14" rx="7" fill="#c0392b" />
    </g>

    {/* flow lines and data tiles */}
    {[
      "M245 190C315 190 350 135 426 135",
      "M245 245C320 245 360 165 426 165",
      "M245 300C320 300 360 195 426 195",
    ].map((d) => (
      <path
        key={d}
        d={d}
        className={flowClass}
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="6 8"
      />
    ))}
    <polygon points="426,129 438,135 426,141" fill="#6fc3e8" />
    <polygon points="426,159 438,165 426,171" fill="#6fc3e8" />
    <polygon points="426,189 438,195 426,201" fill="#6fc3e8" />
    {[
      [322, 155],
      [328, 197],
      [328, 240],
    ].map(([x, y]) => (
      <g key={`${x}-${y}`}>
        <rect
          x={x}
          y={y}
          width="24"
          height="17"
          rx="3"
          fill="#111820"
          stroke="#6fc3e8"
        />
        <path
          d={`M${x} ${y + 6}h24M${x + 8} ${y + 6}v11`}
          stroke="#6fc3e8"
          strokeOpacity=".7"
        />
      </g>
    ))}
    <rect x="270" y="320" width="104" height="30" rx="15" fill="#6fc3e8" />
    <text
      x="322"
      y="340"
      fontSize="14"
      fontWeight="700"
      textAnchor="middle"
      fill="#0b2433"
    >
      Migrate
    </text>

    {/* SQL Server database */}
    <path
      d="M430 120v110a80 20 0 0 0 160 0V120"
      fill="#1a2a3a"
      stroke="#6fc3e8"
      strokeOpacity=".6"
      strokeWidth="1.5"
    />
    <ellipse
      cx="510"
      cy="120"
      rx="80"
      ry="20"
      fill="#223a50"
      stroke="#6fc3e8"
      strokeWidth="1.5"
    />
    <path
      d="M430 168a80 20 0 0 0 160 0M430 200a80 20 0 0 0 160 0"
      fill="none"
      stroke="#6fc3e8"
      strokeOpacity=".4"
    />
    {[146, 178, 210].map((y) => (
      <g key={y}>
        <rect
          x="448"
          y={y - 3}
          width="34"
          height="6"
          rx="3"
          fill="#ffffff"
          fillOpacity=".28"
        />
        <rect
          x="490"
          y={y - 3}
          width="22"
          height="6"
          rx="3"
          fill="#6fc3e8"
          fillOpacity=".5"
        />
      </g>
    ))}
    <circle cx="560" cy="146" r="4" fill="#6fc3e8" />
    <circle cx="560" cy="178" r="4" fill="#6fc3e8" fillOpacity=".6" />
    <text
      x="510"
      y="276"
      fontSize="17"
      fontWeight="700"
      textAnchor="middle"
      fill="#ffffff"
    >
      SQL Server
    </text>

    {/* chips: sized from the text, 24px padding either side */}
    <g transform="translate(338 36)">
      <rect
        width="144"
        height="44"
        rx="22"
        fill="#18232e"
        stroke="#6fc3e8"
        strokeOpacity=".55"
      />
      <path
        d="M26 11l9 3.4v7c0 5.6-4 9-9 11.2-5-2.2-9-5.6-9-11.2v-7z"
        fill="#6fc3e8"
      />
      <path
        d="M22 22l3 3 5-6"
        fill="none"
        stroke="#18232e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="46" y="27" fontSize="14" fill="#ffffff" fillOpacity=".92">
        Encrypted
      </text>
    </g>
    <g transform="translate(492 36)">
      <rect
        width="144"
        height="44"
        rx="22"
        fill="#18232e"
        stroke="#6fc3e8"
        strokeOpacity=".55"
      />
      <circle
        cx="26"
        cy="22"
        r="10"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2"
      />
      <path
        d="M26 16v6l4 2.5"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text x="46" y="27" fontSize="14" fill="#ffffff" fillOpacity=".92">
        Backed up
      </text>
    </g>

    {/* chips tie into the database */}
    <path
      d="M410 80v22M562 80v22"
      stroke="#6fc3e8"
      strokeOpacity=".35"
      strokeDasharray="3 5"
      fill="none"
    />

    {/* server rack */}
    {[300, 334, 368].map((y, i) => (
      <g key={y}>
        <rect
          x="430"
          y={y}
          width="160"
          height="26"
          rx="8"
          fill="#18232e"
          stroke="#ffffff"
          strokeOpacity=".2"
        />
        <circle
          cx="448"
          cy={y + 13}
          r="4"
          fill="#6fc3e8"
          className={i === 0 ? liveClass : undefined}
        />
        <circle cx="464" cy={y + 13} r="4" fill="#6fc3e8" fillOpacity=".4" />
        {i === 0 && (
          <rect
            x="490"
            y={y + 9}
            width="80"
            height="8"
            rx="4"
            fill="#ffffff"
            fillOpacity=".14"
          />
        )}
        {i === 1 && (
          <path
            d={`M490 ${y + 17}l12 -8l10 5l12 -9l12 8l10 -4l14 4`}
            fill="none"
            stroke="#6fc3e8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        {i === 2 &&
          [0, 1, 2, 3, 4, 5].map((k) => (
            <rect
              key={k}
              x={490 + k * 14}
              y={y + 9}
              width="10"
              height="8"
              rx="2"
              fill="#6fc3e8"
              fillOpacity={k < 4 ? 0.55 : 0.18}
            />
          ))}
      </g>
    ))}

    {/* users working at the same time */}
    {[
      [372, 440],
      [464, 440],
      [556, 440],
    ].map(([x, y], i) => (
      <g key={x}>
        <path
          d={`M${x + 38} ${y} L${[450, 510, 570][i]} 396`}
          className={flowClass}
          stroke="#6fc3e8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="5 7"
          fill="none"
        />
        <Laptop x={x} y={y} live={i === 1} liveClass={liveClass} />
      </g>
    ))}

    {/* one waiting user on the Access side */}
    <g>
      <path
        d="M125 440V384"
        stroke="#c0392b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="3 6"
        fill="none"
      />
      <Laptop x={87} y={440} />
    </g>

    {/* captions */}
    <text
      x="125"
      y="534"
      fontSize="14"
      textAnchor="middle"
      fill="#ffffff"
      fillOpacity=".7"
    >
      Waiting their turn
    </text>
    <text
      x="510"
      y="534"
      fontSize="14"
      textAnchor="middle"
      fill="#ffffff"
      fillOpacity=".7"
    >
      Everyone working at once
    </text>
  </svg>
);

export default SqlsHeroSvg;
