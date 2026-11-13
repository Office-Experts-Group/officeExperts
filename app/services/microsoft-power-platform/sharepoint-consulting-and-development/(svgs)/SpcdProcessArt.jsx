// /app/services/microsoft-power-platform/sharepoint-consulting-and-development/(svgs)/SpcdProcessArt.jsx
// One spot illustration per engagement phase in SpcdProcess, drawn for light
// cards. The same art is shown small in the sticky route. Decorative.
//
// Hex values and matching globals.scss tokens:
//   #046999 $accent   #e8f4fa $accent-light   #0d1b2a $text-primary
//   #d4d6d9 $line-strong   #c53030 $error   #ffffff $white

const Svg = ({ size, children }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <rect width="64" height="64" rx="16" fill="#e8f4fa" />
    {children}
  </svg>
);

// A magnifier over a site map with one flagged branch
const Assessment = ({ size }) => (
  <Svg size={size}>
    <rect x="12" y="12" width="14" height="9" rx="2" fill="#046999" />
    <path
      d="M19 21v6M10 27h22M10 27v5M19 27v5M32 27v5"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <rect
      x="5"
      y="32"
      width="10"
      height="8"
      rx="2"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.3"
    />
    <rect
      x="14"
      y="32"
      width="10"
      height="8"
      rx="2"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.3"
    />
    <rect
      x="27"
      y="32"
      width="10"
      height="8"
      rx="2"
      fill="#ffffff"
      stroke="#c53030"
      strokeWidth="1.5"
    />
    <circle
      cx="44"
      cy="40"
      r="10"
      fill="#ffffff"
      fillOpacity="0.6"
      stroke="#0d1b2a"
      strokeWidth="2.4"
    />
    <path
      d="M51 47l7 7"
      stroke="#0d1b2a"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </Svg>
);

// A blueprint sheet with a target layout and a set square
const Architecture = ({ size }) => (
  <Svg size={size}>
    <rect x="10" y="12" width="40" height="40" rx="4" fill="#046999" />
    <g stroke="#ffffff" strokeOpacity="0.18">
      <path d="M10 22h40M10 32h40M10 42h40M20 12v40M30 12v40M40 12v40" />
    </g>
    <rect
      x="16"
      y="18"
      width="16"
      height="8"
      rx="1.5"
      stroke="#ffffff"
      strokeWidth="1.5"
    />
    <path d="M24 26v6H17v6M24 32h8v6" stroke="#ffffff" strokeWidth="1.5" />
    <rect x="13" y="38" width="8" height="6" rx="1" fill="#ffffff" />
    <rect x="28" y="38" width="8" height="6" rx="1" fill="#ffffff" />
    <path
      d="M40 54V34l16 20z"
      fill="#ffffff"
      stroke="#0d1b2a"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M44 50v-5l5 5z"
      stroke="#0d1b2a"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </Svg>
);

// Blocks being placed in stages, the last one in transit
const Build = ({ size }) => (
  <Svg size={size}>
    <rect x="10" y="40" width="16" height="12" rx="2" fill="#046999" />
    <rect x="28" y="40" width="16" height="12" rx="2" fill="#046999" />
    <rect
      x="19"
      y="26"
      width="16"
      height="12"
      rx="2"
      fill="#046999"
      fillOpacity="0.55"
    />
    <rect
      x="40"
      y="12"
      width="16"
      height="12"
      rx="2"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.6"
      strokeDasharray="3 2"
    />
    <path
      d="M47 26c0 6-4 10-10 10"
      stroke="#0d1b2a"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeDasharray="2 3"
    />
    <path
      d="M40 33l-3 3 3.5 2.5"
      stroke="#0d1b2a"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8 54h48" stroke="#0d1b2a" strokeWidth="2" strokeLinecap="round" />
  </Svg>
);

// A checklist beside a key: functional checks and permissions verified
const Validation = ({ size }) => (
  <Svg size={size}>
    <rect
      x="10"
      y="10"
      width="28"
      height="44"
      rx="4"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.5"
    />
    {[20, 29, 38, 47].map((y, i) => (
      <g key={y}>
        <rect
          x="15"
          y={y - 3.5}
          width="7"
          height="7"
          rx="1.5"
          fill={i < 3 ? "#046999" : "#ffffff"}
          stroke="#046999"
          strokeWidth="1.2"
        />
        {i < 3 && (
          <path
            d={`M16.6 ${y}l1.6 1.6 2.6-2.8`}
            stroke="#ffffff"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        <path
          d={`M26 ${y}h8`}
          stroke="#d4d6d9"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </g>
    ))}
    <circle cx="48" cy="26" r="7" fill="#0d1b2a" />
    <circle cx="48" cy="26" r="2.6" fill="#e8f4fa" />
    <path
      d="M48 33v19M48 42h5M48 48h4"
      stroke="#0d1b2a"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </Svg>
);

// People around a site with an upward trend: training and ongoing support
const Adoption = ({ size }) => (
  <Svg size={size}>
    <rect
      x="18"
      y="14"
      width="28"
      height="22"
      rx="3"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <path
      d="M22 31l6-6 4 4 8-9"
      stroke="#046999"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M36 20h4v4"
      stroke="#046999"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {[14, 32, 50].map((x, i) => (
      <g key={x}>
        <circle cx={x} cy="44" r="4" fill={i === 1 ? "#046999" : "#0d1b2a"} />
        <path
          d={`M${x - 7} 55a7 7 0 0 1 14 0`}
          fill={i === 1 ? "#046999" : "#0d1b2a"}
        />
      </g>
    ))}
  </Svg>
);

const SPCD_PROCESS_ART = {
  assessment: Assessment,
  architecture: Architecture,
  build: Build,
  validation: Validation,
  adoption: Adoption,
};

const SpcdProcessArt = ({ type, size = 64 }) => {
  const Art = SPCD_PROCESS_ART[type];
  return Art ? <Art size={size} /> : null;
};

export default SpcdProcessArt;
