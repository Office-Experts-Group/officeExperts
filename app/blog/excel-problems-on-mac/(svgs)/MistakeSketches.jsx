// /app/blog/excel-problems-on-mac/(svgs)/MistakeSketches.jsx
// Five small "Avoid" vs "Do this" sketches. Decorative: aria-hidden.
// Avoid = slate, dashed frame. Do this = accent, clean frame.
// Hex values match: $accent #046999, $accent-light #e8f4fa, $text-primary #0d1b2a,
// $text-secondary #4a5568, $replace-x #c0392b (tiny error accent only), $white #ffffff.

const SLATE = "#7b8794";
const SLATE_BG = "#f1f3f5";
const ACCENT = "#046999";
const ACCENT_BG = "#e8f4fa";
const INK = "#0d1b2a";
const ERR = "#c0392b";

const Svg = ({ children }) => (
  <svg
    viewBox="0 0 320 150"
    xmlns="http://www.w3.org/2000/svg"
    fontFamily="aptos"
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
);

const Frame = ({ x, label, good, children }) => (
  <g transform={`translate(${x} 0)`}>
    <rect
      x="2"
      y="2"
      width="150"
      height="146"
      rx="12"
      fill={good ? ACCENT_BG : SLATE_BG}
      stroke={good ? ACCENT : SLATE}
      strokeWidth="1.5"
      strokeDasharray={good ? undefined : "6 5"}
    />
    <text
      x="14"
      y="24"
      fontSize="14"
      fontWeight="700"
      fill={good ? ACCENT : SLATE}
    >
      {label}
    </text>
    {children}
  </g>
);

const Tick = ({ cx, cy }) => (
  <g>
    <circle cx={cx} cy={cy} r="11" fill={ACCENT} />
    <path
      d={`M${cx - 5} ${cy} l3.5 3.5 l6.5 -7`}
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </g>
);

const Cross = ({ cx, cy }) => (
  <g>
    <circle cx={cx} cy={cy} r="11" fill={ERR} />
    <path
      d={`M${cx - 4.5} ${cy - 4.5} l9 9 M${cx + 4.5} ${cy - 4.5} l-9 9`}
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </g>
);

const Calendar = ({ x, y, color, bg, label }) => (
  <g>
    <rect
      x={x}
      y={y}
      width="88"
      height="82"
      rx="8"
      fill={bg}
      stroke={color}
      strokeWidth="1.5"
    />
    <rect x={x} y={y} width="88" height="22" rx="8" fill={color} />
    <rect x={x} y={y + 14} width="88" height="8" fill={color} />
    <rect x={x + 16} y={y - 6} width="6" height="14" rx="3" fill={INK} />
    <rect x={x + 66} y={y - 6} width="6" height="14" rx="3" fill={INK} />
    <text
      x={x + 44}
      y={y + 52}
      fontSize="16"
      fontWeight="700"
      fill={INK}
      textAnchor="middle"
    >
      {label}
    </text>
    {[0, 1, 2, 3].map((i) => (
      <rect
        key={i}
        x={x + 12 + i * 18}
        y={y + 62}
        width="12"
        height="9"
        rx="2"
        fill={color}
        fillOpacity="0.35"
      />
    ))}
  </g>
);

// 1. Updating macOS on release day
export const SketchUpdate = () => (
  <Svg>
    <Frame x={0} label="Avoid">
      <Calendar x={30} y={44} color={SLATE} bg="#ffffff" label="Day 1" />
      <Cross cx={122} cy={50} />
    </Frame>
    <Frame x={166} label="Do this" good>
      <Calendar x={30} y={44} color={ACCENT} bg="#ffffff" label="1–2 weeks" />
      <Tick cx={122} cy={50} />
    </Frame>
  </Svg>
);

// 2. Jumping straight to a reinstall
export const SketchLadder = () => (
  <Svg>
    <Frame x={0} label="Avoid">
      <g
        fill="none"
        stroke={SLATE}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M52 62h50l-5 52H57z" fill="#ffffff" />
        <path d="M46 62h62M64 62v-8h26v8M68 74v30M77 74v30M86 74v30" />
      </g>
      <text x="77" y="136" fontSize="14" fill={INK} textAnchor="middle">
        Reinstall first
      </text>
      <Cross cx={124} cy={52} />
    </Frame>
    <Frame x={166} label="Do this" good>
      <g>
        <rect x="26" y="96" width="26" height="22" rx="4" fill="#cfe6f2" />
        <rect x="56" y="80" width="26" height="38" rx="4" fill="#7fb8d6" />
        <rect x="86" y="64" width="26" height="54" rx="4" fill="#4f9cc2" />
        <rect x="116" y="48" width="26" height="70" rx="4" fill={ACCENT} />
      </g>
      <text x="77" y="138" fontSize="14" fill={INK} textAnchor="middle">
        Reinstall last
      </text>
      <Tick cx={129} cy={36} />
    </Frame>
  </Svg>
);

// 3. Whole-column references in heavy workbooks
const Sheet = ({ highlight, color, label }) => (
  <g>
    <rect
      x="26"
      y="44"
      width="100"
      height="78"
      rx="6"
      fill="#ffffff"
      stroke={color}
      strokeWidth="1.5"
    />
    {[0, 1, 2].map((c) => (
      <line
        key={c}
        x1={52 + c * 25}
        y1="44"
        x2={52 + c * 25}
        y2="122"
        stroke={color}
        strokeOpacity="0.4"
      />
    ))}
    {[0, 1, 2, 3].map((r) => (
      <line
        key={r}
        x1="26"
        y1={64 + r * 19}
        x2="126"
        y2={64 + r * 19}
        stroke={color}
        strokeOpacity="0.4"
      />
    ))}
    {highlight}
    <text
      x="76"
      y="140"
      fontSize="14"
      fontWeight="700"
      fill={INK}
      textAnchor="middle"
    >
      {label}
    </text>
  </g>
);

export const SketchRange = () => (
  <Svg>
    <Frame x={0} label="Avoid">
      <Sheet
        color={SLATE}
        label="A:A"
        highlight={
          <rect
            x="27"
            y="45"
            width="25"
            height="76"
            fill={SLATE}
            fillOpacity="0.45"
          />
        }
      />
    </Frame>
    <Frame x={166} label="Do this" good>
      <Sheet
        color={ACCENT}
        label="A2:A500"
        highlight={
          <rect
            x="27"
            y="65"
            width="25"
            height="38"
            fill={ACCENT}
            fillOpacity="0.45"
          />
        }
      />
    </Frame>
  </Svg>
);

// 4. No backup
const Doc = ({ x, y, color, fill = "#ffffff" }) => (
  <g>
    <path
      d={`M${x} ${y}h24l10 10v38h-34z`}
      fill={fill}
      stroke={color}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d={`M${x + 24} ${y}v10h10`}
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d={`M${x + 7} ${y + 24}h20M${x + 7} ${y + 33}h20M${x + 7} ${y + 42}h12`}
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </g>
);

export const SketchBackup = () => (
  <Svg>
    <Frame x={0} label="Avoid">
      <Doc x={59} y={52} color={SLATE} />
      <text x="77" y="136" fontSize="14" fill={INK} textAnchor="middle">
        One copy only
      </text>
    </Frame>
    <Frame x={166} label="Do this" good>
      <Doc x={22} y={52} color={ACCENT} />
      <g
        fill="none"
        stroke={ACCENT}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M70 76h14" />
        <path d="M80 72l4 4-4 4" />
        <rect x="92" y="48" width="44" height="22" rx="5" fill="#ffffff" />
        <circle cx="126" cy="59" r="2.5" fill={ACCENT} />
        <path d="M100 59h14" />
        <path
          d="M96 98a8 8 0 0 1-.8-15.9 10 10 0 0 1 19.5 1.8A6.5 6.5 0 0 1 114 98z"
          fill="#ffffff"
          transform="translate(8 0)"
        />
      </g>
      <text x="77" y="136" fontSize="14" fill={INK} textAnchor="middle">
        Disk and cloud
      </text>
    </Frame>
  </Svg>
);

// 5. Windows-only features in files Mac users must open
const Laptop = ({ x, y, color, mark }) => (
  <g>
    <rect
      x={x}
      y={y}
      width="52"
      height="34"
      rx="4"
      fill="#ffffff"
      stroke={color}
      strokeWidth="1.8"
    />
    <path
      d={`M${x - 6} ${y + 40}h64`}
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {mark}
  </g>
);

export const SketchWindowsOnly = () => (
  <Svg>
    <Frame x={0} label="Avoid">
      <Doc x={18} y={52} color={SLATE} />
      <path
        d="M62 78h22M80 73l5 5-5 5"
        fill="none"
        stroke={SLATE}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Laptop x={90} y={58} color={SLATE} mark={<Cross cx={116} cy={75} />} />
      <text x="77" y="134" fontSize="14" fill={INK} textAnchor="middle">
        Windows-only
      </text>
    </Frame>
    <Frame x={166} label="Do this" good>
      <Doc x={18} y={52} color={ACCENT} />
      <path
        d="M62 78h22M80 73l5 5-5 5"
        fill="none"
        stroke={ACCENT}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Laptop x={90} y={58} color={ACCENT} mark={<Tick cx={116} cy={75} />} />
      <text x="77" y="134" fontSize="14" fill={INK} textAnchor="middle">
        Plain formulas
      </text>
    </Frame>
  </Svg>
);
