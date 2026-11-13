// /app/services/microsoft-power-platform/excel-to-power-bi-migration/(svgs)/EpbmSignArt.jsx

// Small illustrations for "Signs your reporting has outgrown Excel" in
// EpbmIntro. White background, decorative (aria-hidden).
// Colours (globals.scss tokens):
//   #046999 $accent   #e8f4fa $accent-light   #d4d6d9 $line-strong
//   #e3e8ec $line     #0d1b2a $text-primary   #c0392b $replace-x (small marks)

const svgProps = {
  viewBox: "0 0 140 84",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
};

const Sheet = ({ x = 8, y = 8, w = 84, h = 64 }) => (
  <g>
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx="8"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <rect x={x} y={y} width={w} height="14" rx="7" fill="#e3e8ec" />
    {[0, 1, 2].map((r) => (
      <rect
        key={r}
        x={x + 10}
        y={y + 22 + r * 12}
        width={w - 20}
        height="6"
        rx="3"
        fill="#e3e8ec"
      />
    ))}
  </g>
);

// Workbook stuck loading
export const EpbmSlowFileArt = () => (
  <svg {...svgProps}>
    <Sheet />
    <circle cx="104" cy="50" r="26" fill="#e8f4fa" />
    <circle
      cx="104"
      cy="50"
      r="16"
      fill="none"
      stroke="#d4d6d9"
      strokeWidth="5"
    />
    <path
      d="M104 34 A16 16 0 0 1 120 50"
      fill="none"
      stroke="#046999"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <path
      d="M104 44 v7 l5 3"
      stroke="#0d1b2a"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

// Several copies of the "same" report
export const EpbmVersionsArt = () => (
  <svg {...svgProps}>
    {[
      [8, 22, "#ffffff"],
      [30, 14, "#ffffff"],
      [52, 6, "#e8f4fa"],
    ].map(([x, y, fill], i) => (
      <g key={x}>
        <path
          d={`M${x} ${y} h44 l14 14 v50 h-58 Z`}
          fill={fill}
          stroke={i === 2 ? "#046999" : "#d4d6d9"}
          strokeLinejoin="round"
        />
        <path
          d={`M${x + 44} ${y} v14 h14`}
          fill="none"
          stroke={i === 2 ? "#046999" : "#d4d6d9"}
          strokeLinejoin="round"
        />
        <rect
          x={x + 8}
          y={y + 22}
          width="34"
          height="5"
          rx="2.5"
          fill="#d4d6d9"
        />
        <rect
          x={x + 8}
          y={y + 32}
          width="26"
          height="5"
          rx="2.5"
          fill="#d4d6d9"
        />
      </g>
    ))}
    <rect x="60" y="54" width="42" height="14" rx="7" fill="#046999" />
    <rect x="67" y="59" width="28" height="4" rx="2" fill="#ffffff" />
    <circle
      cx="124"
      cy="18"
      r="10"
      fill="#ffffff"
      stroke="#c0392b"
      strokeWidth="2"
    />
    <path
      d="M120 15 a4 4 0 1 1 5 4 v2 M124 25 v0.5"
      fill="none"
      stroke="#c0392b"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Copying and pasting between two sheets, again
export const EpbmCopyPasteArt = () => (
  <svg {...svgProps}>
    <Sheet x={4} y={14} w={50} h={56} />
    <Sheet x={86} y={14} w={50} h={56} />
    <path
      d="M58 32 C70 18 74 18 82 30"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M78 24 l5 7 -8 2"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M82 56 C70 70 66 70 58 58"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M62 64 l-5 -7 8 -2"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="58"
      y="36"
      width="24"
      height="16"
      rx="4"
      fill="#e8f4fa"
      stroke="#046999"
    />
    <rect x="63" y="42" width="14" height="4" rx="2" fill="#046999" />
  </svg>
);

// A report whose data is already old
export const EpbmOutOfDateArt = () => (
  <svg {...svgProps}>
    <rect
      x="8"
      y="10"
      width="76"
      height="64"
      rx="8"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <path
      d="M18 60 L34 46 L48 52 L62 32 L74 38"
      fill="none"
      stroke="#d4d6d9"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M74 38 L80 30"
      fill="none"
      stroke="#d4d6d9"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="2 5"
    />
    <rect
      x="92"
      y="18"
      width="42"
      height="44"
      rx="6"
      fill="#ffffff"
      stroke="#046999"
    />
    <rect x="92" y="18" width="42" height="12" rx="6" fill="#046999" />
    <path
      d="M102 14 v8 M124 14 v8"
      stroke="#0d1b2a"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {[0, 1, 2].map((r) =>
      [0, 1, 2].map((c) => (
        <rect
          key={`${r}-${c}`}
          x={99 + c * 11}
          y={35 + r * 8}
          width="7"
          height="4"
          rx="1"
          fill={r === 0 && c === 0 ? "#c0392b" : "#e3e8ec"}
        />
      )),
    )}
  </svg>
);
