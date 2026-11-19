// /app/blog/excel-problems-on-mac/(svgs)/HeroSvg.jsx
// Hero illustration: a laptop spreadsheet that has crashed, and a card showing it fixed.
// Sits directly on the hero background (no panel). Hex values match these tokens:
// $dark-bg #111820, $dark-surface #18232e, $dark-mid #1a2a3a, $accent #046999,
// $accent-on-dark #6fc3e8, $white #ffffff, $replace-x #c0392b (error accent only).
// The only animated graphic on the page: pass module classes in as props.

const COLS = [124, 192, 260, 328, 396, 464];
const ROWS = [116, 146, 176, 206, 236, 266];
const LETTERS = ["A", "B", "C", "D", "E"];
const BARS = [
  [0, 0, 44],
  [1, 0, 30],
  [2, 0, 38],
  [3, 0, 24],
  [4, 0, 40],
  [0, 1, 34],
  [1, 1, 46],
  [3, 1, 36],
  [4, 1, 28],
  [0, 2, 42],
  [2, 2, 30],
  [4, 2, 44],
  [1, 3, 38],
  [2, 3, 26],
  [3, 3, 40],
  [0, 4, 30],
  [3, 4, 44],
  [4, 4, 32],
];

const HeroSvg = ({ flowClass = "", liveClass = "" }) => (
  <svg
    viewBox="0 0 560 440"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="epm-hero-title epm-hero-desc"
    fontFamily="aptos"
  >
    <title id="epm-hero-title">
      A crashed Excel spreadsheet on a Mac laptop, then fixed
    </title>
    <desc id="epm-hero-desc">
      A laptop shows a spreadsheet with an error box saying Excel quit
      unexpectedly. A dashed arrow leads to a card that says back to work,
      showing the problem has been fixed.
    </desc>

    {/* laptop body */}
    <rect
      x="70"
      y="40"
      width="420"
      height="270"
      rx="16"
      fill="#18232e"
      stroke="#2f4a60"
      strokeWidth="2"
    />
    <rect x="88" y="58" width="384" height="234" rx="8" fill="#111820" />
    <rect
      x="30"
      y="310"
      width="500"
      height="20"
      rx="10"
      fill="#1a2a3a"
      stroke="#2f4a60"
      strokeWidth="2"
    />
    <rect x="236" y="310" width="88" height="8" rx="4" fill="#111820" />

    {/* ribbon */}
    <rect x="88" y="58" width="384" height="34" rx="8" fill="#1a2a3a" />
    <circle cx="106" cy="75" r="4" fill="#2f4a60" />
    <circle cx="120" cy="75" r="4" fill="#2f4a60" />
    <circle cx="134" cy="75" r="4" fill="#2f4a60" />
    <rect x="160" y="70" width="70" height="10" rx="5" fill="#2f4a60" />
    <rect x="240" y="70" width="46" height="10" rx="5" fill="#2f4a60" />
    <g stroke="#6fc3e8" strokeWidth="2" strokeLinecap="round" opacity="0.9">
      <line x1="446" y1="64" x2="446" y2="68" />
      <line x1="452" y1="68" x2="450" y2="70" opacity="0.8" />
      <line x1="454" y1="75" x2="450" y2="75" opacity="0.65" />
      <line x1="452" y1="82" x2="450" y2="80" opacity="0.5" />
      <line x1="446" y1="86" x2="446" y2="82" opacity="0.4" />
      <line x1="440" y1="82" x2="442" y2="80" opacity="0.3" />
      <line x1="438" y1="75" x2="442" y2="75" opacity="0.25" />
      <line x1="440" y1="68" x2="442" y2="70" opacity="0.2" />
    </g>

    {/* grid */}
    <rect x="88" y="92" width="384" height="24" fill="#18232e" />
    <rect x="88" y="92" width="36" height="174" fill="#18232e" />
    <g stroke="#2a3f52" strokeWidth="1">
      {COLS.map((x) => (
        <line key={x} x1={x} y1="92" x2={x} y2="266" />
      ))}
      {ROWS.map((y) => (
        <line key={y} x1="88" y1={y} x2="472" y2={y} />
      ))}
      <line x1="88" y1="92" x2="472" y2="92" />
    </g>
    <g fill="#7f95a8" fontSize="14" textAnchor="middle">
      {LETTERS.map((l, i) => (
        <text key={l} x={COLS[i] + 34} y="109">
          {l}
        </text>
      ))}
      {[1, 2, 3, 4, 5].map((n, i) => (
        <text key={n} x="106" y={ROWS[i] + 20}>
          {n}
        </text>
      ))}
    </g>
    {BARS.map(([c, r, w]) => (
      <rect
        key={`${c}-${r}`}
        x={COLS[c + 1] + 8}
        y={ROWS[r] + 10}
        width={w}
        height="9"
        rx="4.5"
        fill="#3a566e"
      />
    ))}
    <rect
      x="260"
      y="146"
      width="68"
      height="30"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
    />

    {/* status bar */}
    <rect x="88" y="270" width="384" height="22" rx="0" fill="#1a2a3a" />
    <circle className={liveClass} cx="104" cy="281" r="4" fill="#6fc3e8" />
    <text x="116" y="286" fontSize="14" fill="#7f95a8">
      Ready
    </text>

    {/* error dialog (before) */}
    <rect
      x="168"
      y="138"
      width="224"
      height="118"
      rx="12"
      fill="#18232e"
      stroke="#2f4a60"
      strokeWidth="1.5"
    />
    <path d="M198 158 213 184h-30z" fill="#c0392b" />
    <text
      x="198"
      y="180"
      fontSize="15"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      !
    </text>
    <text x="226" y="172" fontSize="15" fontWeight="700" fill="#ffffff">
      Excel quit
    </text>
    <text x="226" y="192" fontSize="15" fontWeight="700" fill="#ffffff">
      unexpectedly
    </text>
    <rect
      x="184"
      y="212"
      width="88"
      height="30"
      rx="6"
      fill="#1a2a3a"
      stroke="#2f4a60"
    />
    <text x="228" y="232" fontSize="14" fill="#c9d6e0" textAnchor="middle">
      Ignore
    </text>
    <rect x="284" y="212" width="88" height="30" rx="6" fill="#046999" />
    <text
      x="328"
      y="232"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      Reopen
    </text>

    {/* flow from problem to fix */}
    <path
      className={flowClass}
      d="M392 197 C432 197 448 215 448 256"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeDasharray="6 6"
      strokeLinecap="round"
    />
    <path
      d="M440 249 448 262 456 249"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* fixed card (after) */}
    <rect x="360" y="262" width="176" height="112" rx="14" fill="#046999" />
    <circle cx="390" cy="292" r="16" fill="#ffffff" fillOpacity="0.18" />
    <path
      d="M382 292 388 298 399 285"
      fill="none"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text x="376" y="338" fontSize="17" fontWeight="700" fill="#ffffff">
      Back to work
    </text>
    <text x="376" y="358" fontSize="14" fill="#ffffff" fillOpacity="0.88">
      Fixed in a few steps
    </text>

    {/* tool chips */}
    <circle
      cx="48"
      cy="118"
      r="26"
      fill="#18232e"
      stroke="#2f4a60"
      strokeWidth="1.5"
    />
    <g
      transform="translate(36 106)"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2.4-.6-.6-2.4 2.8-2.8z" />
    </g>
    <circle
      cx="518"
      cy="104"
      r="24"
      fill="#18232e"
      stroke="#2f4a60"
      strokeWidth="1.5"
    />
    <g
      transform="translate(506 92)"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 4v5h-5" />
    </g>
  </svg>
);

export default HeroSvg;
