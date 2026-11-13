// /app/services/microsoft-power-platform/sharepoint-consulting-and-development/(svgs)/SpcdServiceArt.jsx
// One spot illustration per service tile in SpcdServices, each drawn for the
// tile it sits on (light, accent or dark). Decorative.
//
// Hex values and matching globals.scss tokens:
//   #046999 $accent          #034e72 $accent-dark     #e8f4fa $accent-light
//   #6fc3e8 $accent-on-dark  #111820 $dark-bg         #18232e $dark-surface
//   #0d1b2a $text-primary    #d4d6d9 $line-strong     #e3e8ec $line
//   #ffffff $white

const Svg = ({ children }) => (
  <svg
    viewBox="0 0 220 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
);

// Light tile: a site architecture blueprint (hub over three sites)
const Implementation = () => (
  <Svg>
    <rect width="220" height="120" rx="14" fill="#e8f4fa" />
    <g stroke="#046999" strokeOpacity="0.12">
      {[24, 48, 72, 96].map((y) => (
        <path key={y} d={`M0 ${y}h220`} />
      ))}
      {[44, 88, 132, 176].map((x) => (
        <path key={x} d={`M${x} 0v120`} />
      ))}
    </g>
    <path
      d="M110 44V58H40V70M110 58V70M110 58H180V70"
      stroke="#046999"
      strokeWidth="1.6"
      strokeDasharray="4 3"
    />
    <rect x="78" y="14" width="64" height="30" rx="7" fill="#046999" />
    <path
      d="M88 25h28M88 33h18"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="131" cy="29" r="5" fill="#6fc3e8" />
    {[14, 84, 154].map((x, i) => (
      <g key={x}>
        <rect
          x={x}
          y="70"
          width="52"
          height="36"
          rx="6"
          fill="#ffffff"
          stroke="#046999"
          strokeWidth="1.4"
        />
        <rect
          x={x + 7}
          y="78"
          width={i === 1 ? 38 : 28}
          height="5"
          rx="2.5"
          fill="#046999"
          fillOpacity="0.6"
        />
        <rect x={x + 7} y="88" width="34" height="4" rx="2" fill="#d4d6d9" />
        <rect x={x + 7} y="96" width="22" height="4" rx="2" fill="#d4d6d9" />
      </g>
    ))}
    {/* padlock on the hub = permissions designed in from the start */}
    <g transform="translate(146 8)">
      <rect x="0" y="7" width="16" height="12" rx="3" fill="#0d1b2a" />
      <path d="M3.5 7V5a4.5 4.5 0 0 1 9 0v2" stroke="#0d1b2a" strokeWidth="2" />
    </g>
  </Svg>
);

// Accent tile: an on-premises rack sending files across to the cloud
const Migration = () => (
  <Svg>
    <rect
      x="16"
      y="18"
      width="56"
      height="86"
      rx="9"
      fill="#034e72"
      stroke="#6fc3e8"
      strokeOpacity="0.5"
    />
    {[30, 50, 70].map((y, i) => (
      <g key={y}>
        <rect x="25" y={y} width="38" height="14" rx="3" fill="#046999" />
        <path
          d={`M30 ${y + 7}h16`}
          stroke="#6fc3e8"
          strokeOpacity="0.6"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="56"
          cy={y + 7}
          r="2.5"
          fill={i === 0 ? "#ffffff" : "#6fc3e8"}
        />
      </g>
    ))}
    <path
      d="M80 60h66"
      stroke="#ffffff"
      strokeOpacity="0.7"
      strokeWidth="2"
      strokeDasharray="5 5"
      strokeLinecap="round"
    />
    <path
      d="M140 54l7 6-7 6"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g transform="translate(92 38) rotate(-8)">
      <path d="M0 0h11l5 5v15H0z" fill="#ffffff" />
      <path
        d="M3 9h9M3 13h7"
        stroke="#046999"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </g>
    <g transform="translate(116 66) rotate(6)">
      <path d="M0 0h11l5 5v15H0z" fill="#ffffff" fillOpacity="0.85" />
      <path
        d="M3 9h9M3 13h7"
        stroke="#046999"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </g>
    <path
      d="M164 82a16 16 0 0 1-1.5-31.9A21 21 0 0 1 202 56a14 14 0 0 1-2 26z"
      fill="#ffffff"
    />
    <path
      d="M170 62h10l3 3.5h11V76h-24z"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M176 71l3 3 6-6"
      stroke="#046999"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Light tile: an intranet home page with news, people and an embedded chart
const Intranet = () => (
  <Svg>
    <rect
      x="12"
      y="8"
      width="196"
      height="104"
      rx="10"
      fill="#ffffff"
      stroke="#d4d6d9"
      strokeWidth="1.4"
    />
    <path
      d="M12 18a10 10 0 0 1 10-10h176a10 10 0 0 1 10 10v8H12z"
      fill="#046999"
    />
    <rect
      x="22"
      y="13"
      width="34"
      height="8"
      rx="4"
      fill="#ffffff"
      fillOpacity="0.6"
    />
    <rect x="22" y="34" width="100" height="44" rx="6" fill="#e8f4fa" />
    <path
      d="M32 68l14-14 10 10 8-8 16 12"
      stroke="#046999"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="106" cy="46" r="5" fill="#046999" fillOpacity="0.5" />
    {[30, 52, 74].map((x) => (
      <g key={x}>
        <circle
          cx={x}
          cy="94"
          r="7"
          fill="#e8f4fa"
          stroke="#046999"
          strokeWidth="1.2"
        />
        <circle cx={x} cy="92" r="2.4" fill="#046999" />
      </g>
    ))}
    <rect x="88" y="90" width="34" height="4" rx="2" fill="#d4d6d9" />
    <rect x="88" y="98" width="24" height="4" rx="2" fill="#e3e8ec" />
    <rect
      x="132"
      y="34"
      width="66"
      height="68"
      rx="6"
      fill="#f7f8f9"
      stroke="#e3e8ec"
    />
    {[
      [142, 26],
      [154, 40],
      [166, 18],
      [178, 48],
    ].map(([x, h]) => (
      <rect
        key={x}
        x={x}
        y={92 - h}
        width="8"
        height={h}
        rx="2"
        fill="#046999"
        fillOpacity={h > 40 ? 1 : 0.55}
      />
    ))}
  </Svg>
);

// Dark tile: custom web parts slotting into a page, with a code window
const Development = () => (
  <Svg>
    <rect
      x="12"
      y="14"
      width="112"
      height="92"
      rx="10"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.12"
    />
    <circle cx="25" cy="27" r="3" fill="#ffffff" fillOpacity="0.3" />
    <circle cx="35" cy="27" r="3" fill="#ffffff" fillOpacity="0.3" />
    <path
      d="M26 46l-8 8 8 8"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M36 46h40M36 56h56M44 66h34M36 76h46M44 86h28"
      stroke="#ffffff"
      strokeOpacity="0.35"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M36 56h22"
      stroke="#6fc3e8"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M44 86h14"
      stroke="#6fc3e8"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <rect
      x="140"
      y="14"
      width="68"
      height="26"
      rx="6"
      fill="#ffffff"
      fillOpacity="0.08"
      stroke="#ffffff"
      strokeOpacity="0.2"
    />
    <rect x="140" y="47" width="68" height="26" rx="6" fill="#046999" />
    <path
      d="M152 60h28"
      stroke="#ffffff"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <circle cx="196" cy="60" r="4" fill="#6fc3e8" />
    <rect
      x="140"
      y="80"
      width="68"
      height="26"
      rx="6"
      fill="#ffffff"
      fillOpacity="0.08"
      stroke="#ffffff"
      strokeOpacity="0.2"
    />
    <path
      d="M124 60h16"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeDasharray="3 3"
    />
    <path
      d="M152 27h22M152 93h30"
      stroke="#ffffff"
      strokeOpacity="0.3"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </Svg>
);

// Light tile: a governance shield inside a site lifecycle loop
const Governance = () => (
  <Svg>
    <rect width="220" height="120" rx="14" fill="#e8f4fa" />
    <path
      d="M70 60a40 40 0 0 1 72-24"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M150 60a40 40 0 0 1-72 24"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M136 28l7 8-10 3"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M84 92l-7-8 10-3"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M110 34l20 8v16c0 13-9 22-20 26-11-4-20-13-20-26V42z"
      fill="#046999"
    />
    <path
      d="M101 60l6 6 12-13"
      stroke="#ffffff"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {[
      [30, 30],
      [30, 90],
      [190, 30],
      [190, 90],
    ].map(([x, y], i) => (
      <g key={`${x}-${y}`}>
        <circle
          cx={x}
          cy={y}
          r="11"
          fill="#ffffff"
          stroke="#046999"
          strokeWidth="1.3"
        />
        <circle cx={x} cy={y - 3} r="3.2" fill="#046999" />
        <path d={`M${x - 5.5} ${y + 6}a5.5 5.5 0 0 1 11 0`} fill="#046999" />
        {i === 3 && <circle cx={x + 9} cy={y - 9} r="4.5" fill="#0d1b2a" />}
      </g>
    ))}
    <path
      d="M41 30h18M41 90h18M161 30h18M161 90h18"
      stroke="#046999"
      strokeOpacity="0.35"
      strokeWidth="1.4"
      strokeDasharray="3 3"
    />
  </Svg>
);

const SPCD_SERVICE_ART = {
  implementation: Implementation,
  migration: Migration,
  intranet: Intranet,
  development: Development,
  governance: Governance,
};

const SpcdServiceArt = ({ type }) => {
  const Art = SPCD_SERVICE_ART[type];
  return Art ? <Art /> : null;
};

export default SpcdServiceArt;
