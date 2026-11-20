// /app/blog/2gb-access-database-limit/(svgs)/HeroSvg.jsx
// Hero illustration: a full Access file beside a SQL back end with room to grow.
// Sits directly on the dark hero ($dark-bg to $dark-mid), so no panel behind it.
// Hex values map to tokens: #6fc3e8 = $accent-on-dark, #046999 = $accent,
// #111820 = $dark-bg, #1a2a3a = $dark-mid, #18232e = $dark-surface.
// The red (#e8695a) is a small, purposeful warning accent only.

export default function HeroSvg() {
  return (
    <svg
      viewBox="0 0 560 508"
      role="img"
      aria-labelledby="tgb-hero-title tgb-hero-desc"
      fontFamily="aptos"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="tgb-hero-title">
        A full Access file next to a SQL back end with room to grow
      </title>
      <desc id="tgb-hero-desc">
        On the left, an Access database file filled to the 2GB wall with live
        data, attachments, bloat and temporary objects, marked read-only. An
        arrow labelled Upsize points to a larger SQL back end on the right that
        has plenty of empty space. Below, the Access front end stays in place
        with its forms and reports.
      </desc>

      <defs>
        <clipPath id="tgb-hero-clip-a">
          <path d="M110 92V350A70 16 0 0 0 250 350V92A70 16 0 0 0 110 92Z" />
        </clipPath>
        <clipPath id="tgb-hero-clip-b">
          <path d="M370 60V350A70 16 0 0 0 510 350V60A70 16 0 0 0 370 60Z" />
        </clipPath>
        <pattern
          id="tgb-hero-hatch"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <rect width="8" height="8" fill="#1f3347" />
          <line x1="0" y1="0" x2="0" y2="8" stroke="#6b8296" strokeWidth="2" />
        </pattern>
        <pattern
          id="tgb-hero-dots"
          width="14"
          height="14"
          patternUnits="userSpaceOnUse"
        >
          <rect width="14" height="14" fill="#17222d" />
          <circle cx="7" cy="7" r="1.2" fill="#35516a" />
        </pattern>
        <marker
          id="tgb-hero-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="9"
          markerHeight="9"
          orient="auto"
        >
          <path d="M1 1l8 4-8 4z" fill="#6fc3e8" />
        </marker>
      </defs>

      {/* read-only badge */}
      <path
        d="M180 52V74"
        stroke="#e8695a"
        strokeWidth="1.5"
        strokeDasharray="3 4"
      />
      <rect
        x="117"
        y="20"
        width="126"
        height="30"
        rx="15"
        fill="#e8695a"
        fillOpacity="0.16"
        stroke="#e8695a"
      />
      <g
        transform="translate(128 28)"
        stroke="#ffb3a8"
        fill="none"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <rect x="0" y="6" width="12" height="9" rx="2" />
        <path d="M3 6V4a3 3 0 016 0v2" />
      </g>
      <text
        x="193"
        y="40"
        textAnchor="middle"
        fill="#ffb3a8"
        fontSize="15"
        fontWeight="700"
      >
        Read-only
      </text>

      {/* gauge for the Access file */}
      <rect
        x="74"
        y="92"
        width="8"
        height="258"
        rx="4"
        fill="#ffffff"
        fillOpacity="0.12"
      />
      <rect x="74" y="118" width="8" height="232" rx="4" fill="#6fc3e8" />
      <rect x="74" y="92" width="8" height="26" rx="4" fill="#e8695a" />
      <g stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1.5">
        <path d="M66 350H72M66 285.5H72M66 221H72M66 156.5H72M66 92H72" />
      </g>
      <g fill="#8da2b5" fontSize="14" textAnchor="end">
        <text x="62" y="355">
          0
        </text>
        <text x="62" y="290">
          0.5GB
        </text>
        <text x="62" y="226">
          1GB
        </text>
        <text x="62" y="161">
          1.5GB
        </text>
      </g>
      <text
        x="62"
        y="97"
        textAnchor="end"
        fill="#e8695a"
        fontSize="14"
        fontWeight="700"
      >
        2GB
      </text>

      {/* Access cylinder */}
      <g clipPath="url(#tgb-hero-clip-a)">
        <rect x="110" y="76" width="140" height="290" fill="#24394d" />
        <rect
          x="110"
          y="150"
          width="140"
          height="75"
          fill="url(#tgb-hero-hatch)"
        />
        <rect x="110" y="225" width="140" height="67" fill="#3a8fb7" />
        <rect x="110" y="292" width="140" height="74" fill="#046999" />
      </g>
      <g fill="none" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.2">
        <path d="M110 150A70 16 0 0 0 250 150" />
        <path d="M110 225A70 16 0 0 0 250 225" />
        <path d="M110 292A70 16 0 0 0 250 292" />
      </g>
      <path
        d="M110 92V350A70 16 0 0 0 250 350V92"
        fill="none"
        stroke="#6fc3e8"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
      <ellipse
        cx="180"
        cy="92"
        rx="70"
        ry="16"
        fill="#2b4a63"
        stroke="#6fc3e8"
        strokeOpacity="0.7"
        strokeWidth="1.5"
      />
      <g fill="#ffffff" fontSize="14" fontWeight="700" textAnchor="middle">
        <text x="180" y="134">
          Temp
        </text>
        <text x="180" y="265">
          Attachments
        </text>
        <text x="180" y="333">
          Live data
        </text>
      </g>
      <rect
        x="143"
        y="178"
        width="74"
        height="24"
        rx="12"
        fill="#111820"
        fillOpacity="0.88"
      />
      <text
        x="180"
        y="195"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="14"
        fontWeight="700"
      >
        Bloat
      </text>

      {/* the 2GB wall */}
      <path
        d="M58 92H272"
        stroke="#e8695a"
        strokeWidth="2.2"
        strokeDasharray="7 5"
      />
      <text x="58" y="74" fill="#e8695a" fontSize="15" fontWeight="700">
        2GB wall
      </text>

      <text
        x="180"
        y="392"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="16"
        fontWeight="700"
      >
        Orders.accdb
      </text>
      <text x="180" y="412" textAnchor="middle" fill="#8da2b5" fontSize="14">
        Full at 2GB
      </text>

      {/* upsize arrow with flow dots */}
      <path
        d="M266 215H350"
        stroke="#6fc3e8"
        strokeWidth="3"
        strokeLinecap="round"
        markerEnd="url(#tgb-hero-arrow)"
      />
      <g fill="#6fc3e8">
        <circle cx="282" cy="215" r="3" fillOpacity="0.35" />
        <circle cx="300" cy="215" r="3" fillOpacity="0.6" />
        <circle cx="318" cy="215" r="3" />
      </g>
      <text
        x="312"
        y="192"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="16"
        fontWeight="700"
      >
        Upsize
      </text>
      <text x="312" y="246" textAnchor="middle" fill="#8da2b5" fontSize="14">
        tables move
      </text>

      {/* SQL cylinder */}
      <g clipPath="url(#tgb-hero-clip-b)">
        <rect
          x="370"
          y="44"
          width="140"
          height="322"
          fill="url(#tgb-hero-dots)"
        />
        <rect x="370" y="306" width="140" height="60" fill="#046999" />
      </g>
      <path
        d="M370 306A70 16 0 0 0 510 306"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.3"
        strokeWidth="1.2"
      />
      <path
        d="M370 60V350A70 16 0 0 0 510 350V60"
        fill="none"
        stroke="#6fc3e8"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
      <ellipse
        cx="440"
        cy="60"
        rx="70"
        ry="16"
        fill="#2b4a63"
        stroke="#6fc3e8"
        strokeOpacity="0.7"
        strokeWidth="1.5"
      />
      <path
        d="M440 290V132"
        stroke="#6fc3e8"
        strokeWidth="2.5"
        strokeDasharray="2 7"
        strokeLinecap="round"
      />
      <path
        d="M432 140L440 124L448 140"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="440"
        y="176"
        textAnchor="middle"
        fill="#6fc3e8"
        fontSize="16"
        fontWeight="700"
      >
        Room to grow
      </text>
      <text x="440" y="198" textAnchor="middle" fill="#c5d3df" fontSize="14">
        No practical limit
      </text>
      <text
        x="440"
        y="337"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="14"
        fontWeight="700"
      >
        Live data
      </text>
      <rect
        x="524"
        y="60"
        width="8"
        height="290"
        rx="4"
        fill="#ffffff"
        fillOpacity="0.12"
      />
      <rect x="524" y="306" width="8" height="44" rx="4" fill="#6fc3e8" />

      <text
        x="440"
        y="392"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="16"
        fontWeight="700"
      >
        SQL back end
      </text>
      <text x="440" y="412" textAnchor="middle" fill="#8da2b5" fontSize="14">
        Tables live here
      </text>

      {/* front end card */}
      <rect
        x="150"
        y="428"
        width="280"
        height="68"
        rx="12"
        fill="#ffffff"
        fillOpacity="0.06"
        stroke="#6fc3e8"
        strokeOpacity="0.5"
        strokeDasharray="5 5"
      />
      <g transform="translate(166 442)">
        <rect
          width="44"
          height="38"
          rx="5"
          fill="#18232e"
          stroke="#6fc3e8"
          strokeWidth="1.5"
        />
        <rect width="44" height="9" rx="4" fill="#6fc3e8" fillOpacity="0.8" />
        <path
          d="M7 19H37M7 26H28M7 32H34"
          stroke="#8da2b5"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <text x="226" y="458" fill="#ffffff" fontSize="15" fontWeight="700">
        Access front end
      </text>
      <text x="226" y="478" fill="#c5d3df" fontSize="14">
        Forms and reports stay
      </text>
    </svg>
  );
}
