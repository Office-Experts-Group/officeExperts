// app/test-page/(svgs)/LockedDocumentSvg.jsx

// Paths drawn around 0,0 so they can be positioned with translate()
const STAR_PATH =
  "M0-8l2.35 4.76 5.25.77-3.8 3.7.9 5.23L0 3.97l-4.7 2.49.9-5.23-3.8-3.7 5.25-.77z";
const HEART_PATH =
  "M0 6s-7-4.4-7-9a3.6 3.6 0 0 1 7-1.2A3.6 3.6 0 0 1 7-3c0 4.6-7 9-7 9z";

// Red cross badge pinned to the top-right corner of each rejected tile
const RejectBadge = () => (
  <g transform="translate(86 -4)">
    <circle r="12" fill="#c0392b" />
    <path
      d="M-4.5-4.5l9 9M4.5-4.5l-9 9"
      stroke="#fff"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </g>
);

// White tile that floats in place. `delay` offsets each tile's animation
// so they don't bob in unison.
const RejectedTile = ({ x, y, delay, children }) => (
  <g transform={`translate(${x} ${y})`}>
    <g className={`lfFloat ${delay ? `lfDelay${delay}` : ""}`}>
      <rect
        width="92"
        height="58"
        rx="12"
        fill="#fff"
        stroke="#e2e8f0"
        filter="url(#lfShadow)"
      />
      {children}
      <RejectBadge />
    </g>
  </g>
);

// Three identical shapes spaced across a tile (used for stars and hearts)
const ShapeRow = ({ d, fill }) => (
  <g fill={fill}>
    {[24, 46, 68].map((cx) => (
      <path key={cx} d={d} transform={`translate(${cx} 30)`} />
    ))}
  </g>
);

// Small padlock for the locked-element chips. Uses currentColor so the
// chip's text colour in SCSS also colours the icon.
export const LockIconSvg = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
    <path
      d="M5 7V5a3 3 0 0 1 6 0v2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <rect x="3" y="7" width="10" height="8" rx="2" fill="currentColor" />
  </svg>
);

export const LockedDocumentSvg = () => (
  <svg
    viewBox="0 0 520 440"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="A branded document secured by a padlock, with Comic Sans, creative numbering, heart bullets, star bullets and rogue colours all rejected"
  >
    <defs>
      <filter id="lfShadow" x="-20%" y="-20%" width="140%" height="150%">
        <feDropShadow
          dx="0"
          dy="8"
          stdDeviation="10"
          floodColor="#0d1b2a"
          floodOpacity=".12"
        />
      </filter>
    </defs>

    {/* Soft backdrop */}
    <circle cx="270" cy="220" r="190" fill="#046999" opacity=".07" />

    {/* On-brand document */}
    <g transform="rotate(-4 265 205)" filter="url(#lfShadow)">
      <rect x="150" y="50" width="230" height="310" rx="16" fill="#fff" />
      <path
        d="M166 50h198a16 16 0 0 1 16 16v34H150V66a16 16 0 0 1 16-16z"
        fill="#046999"
      />
      <rect
        x="172"
        y="70"
        width="90"
        height="10"
        rx="5"
        fill="#fff"
        opacity=".9"
      />
      <rect x="172" y="124" width="130" height="12" rx="6" fill="#0d1b2a" />

      <g fill="#cbd5e1">
        <rect x="172" y="148" width="186" height="8" rx="4" />
        <rect x="172" y="164" width="170" height="8" rx="4" />
        <rect x="172" y="180" width="150" height="8" rx="4" />
        <rect x="196" y="208" width="140" height="8" rx="4" />
        <rect x="196" y="232" width="120" height="8" rx="4" />
        <rect x="196" y="256" width="150" height="8" rx="4" />
        <rect x="172" y="290" width="186" height="8" rx="4" />
        <rect x="172" y="306" width="120" height="8" rx="4" />
      </g>

      {/* Consistent, approved numbered list */}
      {[1, 2, 3].map((n) => {
        const cy = 188 + n * 24;
        return (
          <g key={n}>
            <circle cx="180" cy={cy} r="8" fill="#046999" />
            <text
              x="180"
              y={cy + 3.5}
              fill="#fff"
              fontFamily="Arial, sans-serif"
              fontSize="10"
              fontWeight="700"
              textAnchor="middle"
            >
              {n}
            </text>
          </g>
        );
      })}
    </g>

    {/* Padlock. The shackle drops into place once on load. */}
    <ellipse cx="375" cy="404" rx="58" ry="8" fill="#0d1b2a" opacity=".12" />
    <g transform="translate(320 262)">
      <g className="lfShackle">
        <path
          d="M24 44V30a31 31 0 0 1 62 0v14"
          fill="none"
          stroke="#034d70"
          strokeWidth="13"
          strokeLinecap="round"
        />
      </g>
      <rect y="40" width="110" height="92" rx="18" fill="#046999" />
      <circle cx="55" cy="78" r="11" fill="#fff" />
      <rect x="51" y="82" width="8" height="24" rx="4" fill="#fff" />
    </g>

    {/* Rejected off-brand formatting */}
    <RejectedTile x={30} y={70}>
      <text
        x="46"
        y="39"
        textAnchor="middle"
        fontFamily="'Comic Sans MS', 'Comic Sans', cursive"
        fontSize="26"
        fill="#7c3aed"
      >
        Aa
      </text>
    </RejectedTile>

    <RejectedTile x={22} y={170} delay={1}>
      <text
        x="46"
        y="35"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="15"
        fontStyle="italic"
        fill="#0d1b2a"
      >
        1) b. IV
      </text>
    </RejectedTile>

    <RejectedTile x={36} y={272} delay={2}>
      <ShapeRow d={HEART_PATH} fill="#ec4899" />
    </RejectedTile>

    <RejectedTile x={404} y={40} delay={3}>
      <ShapeRow d={STAR_PATH} fill="#f59e0b" />
    </RejectedTile>

    <RejectedTile x={414} y={146} delay={4}>
      <rect x="15" y="17" width="14" height="24" rx="3" fill="#ef4444" />
      <rect x="31" y="17" width="14" height="24" rx="3" fill="#f59e0b" />
      <rect x="47" y="17" width="14" height="24" rx="3" fill="#22c55e" />
      <rect x="63" y="17" width="14" height="24" rx="3" fill="#a855f7" />
    </RejectedTile>
  </svg>
);
