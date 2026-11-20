// /app/blog/microsoft-access-on-mac/(svgs)/MistakeSketches.jsx
// Five small "Avoid" vs "Do this" sketches for the common-mistakes cards.
// Avoid panels are slate with a dashed frame and a messy feel. Do-this panels
// are accent and clean. Generic shapes only, decorative (aria-hidden).
// Hex values and the tokens they match:
//   #046999 $accent   #e8f4fa $accent-light   #f7f8f9 $light-bg
//   #d4d6d9 $line-strong   #4a5568 $text-secondary   #ffffff $white
//   #eef0f2 (light track, between $light-bg and $line-strong)

const SLATE = "#4a5568";
const ACCENT = "#046999";
const TINT = "#e8f4fa";

function Frame({ children }) {
  return (
    <svg
      viewBox="0 0 520 200"
      aria-hidden="true"
      focusable="false"
      fontFamily="aptos"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

function Panels({ avoid, doThis }) {
  return (
    <>
      <rect
        x="2"
        y="2"
        width="236"
        height="196"
        rx="14"
        fill="#f7f8f9"
        stroke={SLATE}
        strokeOpacity="0.6"
        strokeWidth="1.5"
        strokeDasharray="6 5"
      />
      <text
        x="18"
        y="28"
        fontSize="14"
        fontWeight="700"
        fill={SLATE}
        letterSpacing="1"
      >
        AVOID
      </text>
      <rect
        x="282"
        y="2"
        width="236"
        height="196"
        rx="14"
        fill={TINT}
        stroke={ACCENT}
        strokeOpacity="0.5"
        strokeWidth="1.5"
      />
      <text
        x="298"
        y="28"
        fontSize="14"
        fontWeight="700"
        fill={ACCENT}
        letterSpacing="1"
      >
        DO THIS
      </text>
      <path
        d="M244 100h32"
        stroke={ACCENT}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M268 93l8 7-8 7"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {avoid}
      {doThis}
    </>
  );
}

function Chip({ x, y, stroke, fill }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width="64"
        height="64"
        rx="10"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
      />
      <rect
        x={x + 18}
        y={y + 18}
        width="28"
        height="28"
        rx="4"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
      />
      <path
        d={`M${x + 16} ${y - 8}v8M${x + 32} ${y - 8}v8M${x + 48} ${y - 8}v8M${x + 16} ${y + 64}v8M${x + 32} ${y + 64}v8M${x + 48} ${y + 64}v8M${x - 8} ${y + 16}h8M${x - 8} ${y + 32}h8M${x - 8} ${y + 48}h8M${x + 64} ${y + 16}h8M${x + 64} ${y + 32}h8M${x + 64} ${y + 48}h8`}
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>
  );
}

/* 1. Assuming Boot Camp works on any Mac */
export function SketchBootCamp() {
  return (
    <Frame>
      <Panels
        avoid={
          <g>
            <Chip x={88} y={52} stroke={SLATE} fill="#ffffff" />
            <rect
              x="40"
              y="144"
              width="160"
              height="32"
              rx="8"
              fill="#ffffff"
              stroke={SLATE}
              strokeWidth="1.5"
              strokeDasharray="5 4"
            />
            <text
              x="120"
              y="165"
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill={SLATE}
            >
              Boot Camp
            </text>
            <path
              d="M46 176L196 144"
              stroke={SLATE}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        }
        doThis={
          <g>
            <Chip x={368} y={52} stroke={ACCENT} fill="#ffffff" />
            <rect
              x="320"
              y="144"
              width="160"
              height="32"
              rx="8"
              fill={ACCENT}
            />
            <text
              x="400"
              y="165"
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill="#ffffff"
            >
              Virtual machine
            </text>
          </g>
        }
      />
    </Frame>
  );
}

/* 2. Expecting a file viewer to edit forms and reports */
export function SketchViewer() {
  return (
    <Frame>
      <Panels
        avoid={
          <g>
            <rect
              x="44"
              y="52"
              width="152"
              height="84"
              rx="6"
              fill="#ffffff"
              stroke={SLATE}
              strokeWidth="1.5"
              strokeDasharray="5 4"
            />
            <path
              d="M44 74h152M44 96h152M44 118h152M96 52v84M148 52v84"
              stroke={SLATE}
              strokeOpacity="0.5"
              strokeWidth="1.5"
            />
            <circle cx="184" cy="56" r="16" fill={SLATE} />
            <rect
              x="176"
              y="55"
              width="16"
              height="12"
              rx="2.5"
              fill="#ffffff"
            />
            <path
              d="M179 55v-3a5 5 0 0 1 10 0v3"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <text
              x="120"
              y="166"
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill={SLATE}
            >
              Read-only
            </text>
          </g>
        }
        doThis={
          <g>
            <rect
              x="324"
              y="52"
              width="152"
              height="84"
              rx="6"
              fill="#ffffff"
              stroke={ACCENT}
              strokeWidth="1.5"
            />
            <path
              d="M324 58a6 6 0 0 1 6-6h140a6 6 0 0 1 6 6v14H324V58z"
              fill={ACCENT}
            />
            <rect x="334" y="82" width="52" height="42" rx="4" fill={TINT} />
            <rect
              x="396"
              y="82"
              width="70"
              height="8"
              rx="4"
              fill={ACCENT}
              fillOpacity="0.55"
            />
            <rect
              x="396"
              y="98"
              width="52"
              height="8"
              rx="4"
              fill={ACCENT}
              fillOpacity="0.3"
            />
            <rect
              x="396"
              y="114"
              width="62"
              height="8"
              rx="4"
              fill={ACCENT}
              fillOpacity="0.3"
            />
            <text
              x="400"
              y="166"
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill={ACCENT}
            >
              Edit in full Access
            </text>
          </g>
        }
      />
    </Frame>
  );
}

/* 3. Keeping a shared Access file in a syncing folder */
export function SketchSync() {
  return (
    <Frame>
      <Panels
        avoid={
          <g>
            <path
              d="M34 66a4 4 0 0 1 4-4h28l6 8h52a4 4 0 0 1 4 4v58a4 4 0 0 1-4 4H38a4 4 0 0 1-4-4V66z"
              fill="#ffffff"
              stroke={SLATE}
              strokeWidth="1.5"
              strokeDasharray="5 4"
            />
            <ellipse
              cx="86"
              cy="98"
              rx="20"
              ry="7"
              fill="none"
              stroke={SLATE}
              strokeWidth="2"
            />
            <path
              d="M66 98v22c0 4 9 7 20 7s20-3 20-7V98"
              fill="none"
              stroke={SLATE}
              strokeWidth="2"
            />
            <path
              d="M178 114a12 12 0 0 1 1-23.8A16 16 0 0 1 210 92a11 11 0 0 1 0 22H178z"
              fill="#ffffff"
              stroke={SLATE}
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M152 100h18M162 94l8 6-8 6M166 124h-18M156 118l-8 6 8 6"
              fill="none"
              stroke={SLATE}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M72 112l7 6-6 5 8 7"
              fill="none"
              stroke={SLATE}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text
              x="120"
              y="176"
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill={SLATE}
            >
              Synced folder
            </text>
          </g>
        }
        doThis={
          <g>
            <rect
              x="314"
              y="58"
              width="70"
              height="92"
              rx="8"
              fill="#ffffff"
              stroke={ACCENT}
              strokeWidth="2"
            />
            <ellipse
              cx="349"
              cy="82"
              rx="18"
              ry="6"
              fill="none"
              stroke={ACCENT}
              strokeWidth="2"
            />
            <path
              d="M331 82v24c0 4 8 6 18 6s18-2 18-6V82"
              fill="none"
              stroke={ACCENT}
              strokeWidth="2"
            />
            <circle cx="349" cy="132" r="3" fill={ACCENT} />
            <path
              d="M384 90h22M384 124h22"
              stroke={ACCENT}
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <rect
              x="406"
              y="76"
              width="68"
              height="30"
              rx="5"
              fill="#ffffff"
              stroke={ACCENT}
              strokeWidth="2"
            />
            <rect
              x="406"
              y="110"
              width="68"
              height="30"
              rx="5"
              fill="#ffffff"
              stroke={ACCENT}
              strokeWidth="2"
            />
            <text
              x="400"
              y="176"
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill={ACCENT}
            >
              Server share
            </text>
          </g>
        }
      />
    </Frame>
  );
}

/* 4. Giving the Windows VM too little memory */
export function SketchRam() {
  return (
    <Frame>
      <Panels
        avoid={
          <g>
            <rect
              x="30"
              y="76"
              width="180"
              height="26"
              rx="13"
              fill="#eef0f2"
              stroke={SLATE}
              strokeOpacity="0.5"
              strokeWidth="1.5"
            />
            <rect x="30" y="76" width="34" height="26" rx="13" fill={SLATE} />
            <path
              d="M40 126c10 8 20-8 30 0s20-8 30 0 20-8 30 0 20-8 30 0"
              fill="none"
              stroke={SLATE}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <text
              x="120"
              y="166"
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill={SLATE}
            >
              Too little memory
            </text>
          </g>
        }
        doThis={
          <g>
            <rect
              x="310"
              y="76"
              width="180"
              height="26"
              rx="13"
              fill="#ffffff"
              stroke={ACCENT}
              strokeOpacity="0.5"
              strokeWidth="1.5"
            />
            <rect
              x="310"
              y="76"
              width="104"
              height="26"
              rx="13"
              fill={ACCENT}
            />
            <path
              d="M320 126h160"
              stroke={ACCENT}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <text
              x="400"
              y="166"
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill={ACCENT}
            >
              8GB or more for Windows
            </text>
          </g>
        }
      />
    </Frame>
  );
}

/* 5. Migrating without mapping the database first */
export function SketchMigrate() {
  return (
    <Frame>
      <Panels
        avoid={
          <g>
            <rect
              x="34"
              y="60"
              width="52"
              height="38"
              rx="6"
              fill="#ffffff"
              stroke={SLATE}
              strokeWidth="1.5"
              transform="rotate(-8 60 79)"
            />
            <rect
              x="74"
              y="78"
              width="56"
              height="40"
              rx="6"
              fill="#ffffff"
              stroke={SLATE}
              strokeWidth="1.5"
              strokeDasharray="5 4"
              transform="rotate(6 102 98)"
            />
            <rect
              x="50"
              y="102"
              width="48"
              height="36"
              rx="6"
              fill="#ffffff"
              stroke={SLATE}
              strokeWidth="1.5"
              transform="rotate(10 74 120)"
            />
            <path
              d="M140 100h34"
              stroke={SLATE}
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <circle
              cx="198"
              cy="100"
              r="20"
              fill="#ffffff"
              stroke={SLATE}
              strokeWidth="1.5"
              strokeDasharray="5 4"
            />
            <text
              x="198"
              y="108"
              textAnchor="middle"
              fontSize="22"
              fontWeight="700"
              fill={SLATE}
            >
              ?
            </text>
            <text
              x="120"
              y="172"
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill={SLATE}
            >
              No inventory
            </text>
          </g>
        }
        doThis={
          <g>
            <g fill="#ffffff" stroke={ACCENT} strokeWidth="1.5">
              <rect x="314" y="58" width="94" height="26" rx="6" />
              <rect x="314" y="90" width="94" height="26" rx="6" />
              <rect x="314" y="122" width="94" height="26" rx="6" />
            </g>
            <g
              fill="none"
              stroke={ACCENT}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M322 71l4 4 7-8" />
              <path d="M322 103l4 4 7-8" />
              <path d="M322 135l4 4 7-8" />
            </g>
            <g fill={ACCENT} fillOpacity="0.35">
              <rect x="342" y="67" width="54" height="8" rx="4" />
              <rect x="342" y="99" width="46" height="8" rx="4" />
              <rect x="342" y="131" width="58" height="8" rx="4" />
            </g>
            <path d="M416 103h24" stroke={ACCENT} strokeWidth="2" />
            <rect x="444" y="82" width="52" height="42" rx="8" fill={ACCENT} />
            <rect x="452" y="92" width="36" height="6" rx="3" fill="#ffffff" />
            <rect
              x="452"
              y="106"
              width="24"
              height="6"
              rx="3"
              fill="#ffffff"
              fillOpacity="0.7"
            />
            <text
              x="400"
              y="172"
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill={ACCENT}
            >
              Map it first
            </text>
          </g>
        }
      />
    </Frame>
  );
}
