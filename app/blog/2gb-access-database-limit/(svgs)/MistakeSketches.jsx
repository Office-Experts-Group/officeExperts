// /app/blog/2gb-access-database-limit/(svgs)/MistakeSketches.jsx
// Five small "Avoid" vs "Do this" sketches. Decorative: aria-hidden.
// Hex values map to tokens: slate #64748b / #94a3b8 / #f8fafc are neutral greys,
// #046999 = $accent, #e8f4fa = $accent-light, #0d1b2a = $text-primary,
// #c0392b = $replace-x (tiny warning accents only).

const SLATE = "#64748b";
const SLATE_LIGHT = "#94a3b8";
const ACCENT = "#046999";

function Panels({ children }) {
  return (
    <svg
      viewBox="0 0 400 190"
      aria-hidden="true"
      focusable="false"
      fontFamily="aptos"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="10"
        y="10"
        width="180"
        height="170"
        rx="12"
        fill="#f8fafc"
        stroke={SLATE_LIGHT}
        strokeWidth="1.5"
        strokeDasharray="6 5"
      />
      <text x="24" y="36" fill={SLATE} fontSize="14" fontWeight="700">
        Avoid
      </text>
      <rect
        x="210"
        y="10"
        width="180"
        height="170"
        rx="12"
        fill="#e8f4fa"
        stroke={ACCENT}
        strokeOpacity="0.4"
        strokeWidth="1.5"
      />
      <text x="224" y="36" fill={ACCENT} fontSize="14" fontWeight="700">
        Do this
      </text>
      {children}
    </svg>
  );
}

function Doc({ x, y, fill, stroke, w = 50, h = 64 }) {
  return (
    <g>
      <path
        d={`M${x} ${y}H${x + w - 14}L${x + w} ${y + 14}V${y + h}H${x}Z`}
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d={`M${x + w - 14} ${y}V${y + 14}H${x + w}`}
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d={`M${x + 9} ${y + 28}H${x + w - 10}M${x + 9} ${y + 38}H${x + w - 16}M${x + 9} ${y + 48}H${x + w - 10}`}
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeOpacity="0.55"
      />
    </g>
  );
}

function Cylinder({ cx, top, w, h, fill, stroke }) {
  const rx = w / 2;
  return (
    <g>
      <path
        d={`M${cx - rx} ${top}V${top + h}A${rx} 9 0 0 0 ${cx + rx} ${top + h}V${top}`}
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
      />
      <ellipse
        cx={cx}
        cy={top}
        rx={rx}
        ry="9"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
      />
    </g>
  );
}

/* 1. Fixing it with no backup */
export function BackupSketch() {
  return (
    <Panels>
      <g transform="rotate(-6 100 100)">
        <Doc x={72} y={62} fill="#ffffff" stroke={SLATE} />
      </g>
      <path
        d="M92 70L100 84L90 92L104 108L96 124"
        fill="none"
        stroke="#c0392b"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M146 72a14 14 0 1 1-14-4"
        fill="none"
        stroke={SLATE}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="3 4"
      />
      <path d="M130 62l6 6-8 3z" fill={SLATE} />
      <text x="100" y="164" textAnchor="middle" fill={SLATE} fontSize="14">
        Only copy
      </text>

      <Doc x={232} y={68} fill="#ffffff" stroke={ACCENT} />
      <Doc x={320} y={68} fill="#ffffff" stroke={ACCENT} />
      <path
        d="M290 100H312"
        stroke={ACCENT}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M308 94l8 6-8 6"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="368" cy="70" r="11" fill={ACCENT} />
      <path
        d="M362 70l4 4 7-8"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="257"
        y="164"
        textAnchor="middle"
        fill={ACCENT}
        fontSize="14"
        fontWeight="700"
      >
        Original
      </text>
      <text
        x="345"
        y="164"
        textAnchor="middle"
        fill={ACCENT}
        fontSize="14"
        fontWeight="700"
      >
        Backup
      </text>
    </Panels>
  );
}

/* 2. Treating Compact and Repair as the cure */
export function CompactSketch() {
  return (
    <Panels>
      <path d="M28 140H176" stroke={SLATE_LIGHT} strokeWidth="1.5" />
      <path
        d="M28 66H176"
        stroke="#c0392b"
        strokeWidth="2"
        strokeDasharray="5 4"
      />
      <text x="28" y="58" fill="#c0392b" fontSize="14" fontWeight="700">
        2GB
      </text>
      <path
        d="M30 130L58 112L68 122L98 94L108 104L138 80L148 88L174 68"
        fill="none"
        stroke={SLATE}
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <g fill={SLATE}>
        <circle cx="68" cy="122" r="3" />
        <circle cx="108" cy="104" r="3" />
        <circle cx="148" cy="88" r="3" />
      </g>
      <text x="100" y="164" textAnchor="middle" fill={SLATE} fontSize="14">
        Compact only
      </text>

      <g transform="translate(224 92)">
        <path
          d="M0 8a4 4 0 014-4h14l5 6h17a4 4 0 014 4v26a4 4 0 01-4 4H4a4 4 0 01-4-4V8z"
          fill="#ffffff"
          stroke={ACCENT}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M8 24h30M8 32h22"
          stroke={ACCENT}
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.55"
        />
      </g>
      <path
        d="M276 114H300"
        stroke={ACCENT}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M296 108l8 6-8 6"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Cylinder
        cx={346}
        top={68}
        w={56}
        h={58}
        fill="#ffffff"
        stroke={ACCENT}
      />
      <path
        d="M318 112V126A28 9 0 0 0 374 126V112Z"
        fill={ACCENT}
        fillOpacity="0.85"
      />
      <path
        d="M390 68V135"
        stroke={ACCENT}
        strokeOpacity="0.4"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <text
        x="300"
        y="164"
        textAnchor="middle"
        fill={ACCENT}
        fontSize="14"
        fontWeight="700"
      >
        Archive and migrate
      </text>
    </Panels>
  );
}

/* 3. Embedding files in the database */
export function EmbedSketch() {
  return (
    <Panels>
      <Cylinder cx={100} top={66} w={84} h={72} fill="#ffffff" stroke={SLATE} />
      <g transform="rotate(-10 86 92)">
        <Doc x={68} y={74} fill="#ffffff" stroke={SLATE} w={30} h={38} />
      </g>
      <g transform="rotate(8 112 98)">
        <Doc x={98} y={80} fill="#f1f5f9" stroke={SLATE} w={30} h={38} />
      </g>
      <path
        d="M62 112H138"
        stroke={SLATE}
        strokeWidth="2"
        strokeOpacity="0.4"
        strokeDasharray="3 4"
      />
      <path
        d="M52 98l-10-4M148 98l10-6M54 124l-12 4M146 122l12 6"
        stroke="#c0392b"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text x="100" y="164" textAnchor="middle" fill={SLATE} fontSize="14">
        Files inside
      </text>

      <Cylinder
        cx={252}
        top={66}
        w={64}
        h={60}
        fill="#ffffff"
        stroke={ACCENT}
      />
      <path
        d="M232 92H272M232 104H262"
        stroke={ACCENT}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeOpacity="0.6"
      />
      <path
        d="M284 96H318"
        stroke={ACCENT}
        strokeWidth="2"
        strokeDasharray="4 4"
        strokeLinecap="round"
      />
      <g transform="translate(320 78)">
        <path
          d="M0 6a4 4 0 014-4h12l5 6h27a4 4 0 014 4v32a4 4 0 01-4 4H4a4 4 0 01-4-4V6z"
          fill="#ffffff"
          stroke={ACCENT}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <g
          stroke={ACCENT}
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.6"
        >
          <path d="M9 24h28M9 32h20" />
        </g>
      </g>
      <text
        x="300"
        y="164"
        textAnchor="middle"
        fill={ACCENT}
        fontSize="14"
        fontWeight="700"
      >
        Store the path only
      </text>
    </Panels>
  );
}

/* 4. Waiting until the file goes read-only */
export function WaitSketch() {
  return (
    <Panels>
      <rect
        x="70"
        y="92"
        width="60"
        height="46"
        rx="8"
        fill="#ffffff"
        stroke={SLATE}
        strokeWidth="2.5"
      />
      <path
        d="M82 92V80a18 18 0 0136 0v12"
        fill="none"
        stroke={SLATE}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="100" cy="113" r="5" fill={SLATE} />
      <path
        d="M100 116v10"
        stroke={SLATE}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M146 76l8-8M152 90l12-2M50 76l-8-8"
        stroke="#c0392b"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <text x="100" y="164" textAnchor="middle" fill={SLATE} fontSize="14">
        Wait for the error
      </text>

      <path
        d="M246 126a54 54 0 0 1 108 0"
        fill="none"
        stroke="#cfe7f3"
        strokeWidth="14"
      />
      <path
        d="M246 126a54 54 0 0 1 20-42"
        fill="none"
        stroke="#9fd0e6"
        strokeWidth="14"
      />
      <path
        d="M266 84a54 54 0 0 1 56-18"
        fill="none"
        stroke="#7cbfdc"
        strokeWidth="14"
      />
      <path
        d="M322 66a54 54 0 0 1 32 60"
        fill="none"
        stroke={ACCENT}
        strokeWidth="14"
      />
      <path
        d="M300 126L326 88"
        stroke="#0d1b2a"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="300" cy="126" r="7" fill="#0d1b2a" />
      <g
        transform="translate(364 46)"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 18a9 9 0 0118 0c0 8 3 10 3 10H-1s3-2 3-10z" />
        <path d="M9 32a3 3 0 006 0" />
      </g>
      <text
        x="300"
        y="164"
        textAnchor="middle"
        fill={ACCENT}
        fontSize="14"
        fontWeight="700"
      >
        Alert at 1.5GB
      </text>
    </Panels>
  );
}

/* 5. Migrating without testing on a copy */
export function TestSketch() {
  return (
    <Panels>
      <rect
        x="26"
        y="78"
        width="50"
        height="40"
        rx="8"
        fill="#ffffff"
        stroke={SLATE}
        strokeWidth="2"
      />
      <text
        x="51"
        y="103"
        textAnchor="middle"
        fill={SLATE}
        fontSize="14"
        fontWeight="700"
      >
        Live
      </text>
      <path
        d="M80 98H128"
        stroke={SLATE}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M118 88l14 10-14 10"
        fill="none"
        stroke={SLATE}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M100 74l-8 14h10l-8 16"
        fill="none"
        stroke="#c0392b"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Cylinder cx={158} top={82} w={38} h={36} fill="#ffffff" stroke={SLATE} />
      <text x="100" y="164" textAnchor="middle" fill={SLATE} fontSize="14">
        Straight to live
      </text>

      <rect
        x="220"
        y="82"
        width="48"
        height="36"
        rx="8"
        fill="#ffffff"
        stroke={ACCENT}
        strokeWidth="2"
      />
      <text
        x="244"
        y="105"
        textAnchor="middle"
        fill={ACCENT}
        fontSize="14"
        fontWeight="700"
      >
        Copy
      </text>
      <rect
        x="282"
        y="82"
        width="48"
        height="36"
        rx="8"
        fill="#ffffff"
        stroke={ACCENT}
        strokeWidth="2"
      />
      <text
        x="306"
        y="105"
        textAnchor="middle"
        fill={ACCENT}
        fontSize="14"
        fontWeight="700"
      >
        Test
      </text>
      <rect
        x="344"
        y="82"
        width="40"
        height="36"
        rx="8"
        fill={ACCENT}
        stroke={ACCENT}
        strokeWidth="2"
      />
      <text
        x="364"
        y="105"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="14"
        fontWeight="700"
      >
        Live
      </text>
      <path
        d="M268 100h12M330 100h12"
        stroke={ACCENT}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="326" cy="80" r="10" fill={ACCENT} />
      <path
        d="M321 80l3.5 3.5 6-7"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="300"
        y="164"
        textAnchor="middle"
        fill={ACCENT}
        fontSize="14"
        fontWeight="700"
      >
        Test on a copy first
      </text>
    </Panels>
  );
}
