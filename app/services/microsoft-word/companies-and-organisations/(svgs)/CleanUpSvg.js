// /services/microsoft-word/companies-and-organisations/(svgs)/CleanUpSvg.js
// Decorative before/after: a document corrupted by pasted formatting, then the same page
// on-brand. Hex values come from globals.scss ($replace-x is the "before" red).

// Mismatched text runs on the "before" page: different colours, weights and sizes on purpose
const MESSY_LINES = [
  { y: 70, w: 150, h: 5, fill: "#454545" },
  { y: 82, w: 120, h: 8, fill: "#c0392b" },
  { y: 98, w: 154, h: 5, fill: "#a0a2a6" },
  { y: 110, w: 96, h: 9, fill: "#046999", opacity: 0.45 },
];

// Consistent lines on the "after" page
const CLEAN_LINES = [
  { y: 100, w: 150 },
  { y: 114, w: 140 },
  { y: 128, w: 110 },
];

export const CleanUpSvg = () => (
  <svg
    viewBox="0 0 520 270"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <filter id="cu-shadow" x="-10%" y="-10%" width="120%" height="125%">
        <feDropShadow
          dx="0"
          dy="8"
          stdDeviation="10"
          floodColor="#0d1b2a"
          floodOpacity="0.12"
        />
      </filter>
    </defs>

    {/* ── Before: slightly crooked, mixed fonts and colours ── */}
    <g transform="rotate(-4 115 130)">
      <rect
        x="20"
        y="20"
        width="190"
        height="220"
        rx="8"
        fill="#fff"
        stroke="#e2e6ea"
        filter="url(#cu-shadow)"
      />
      <text
        x="38"
        y="52"
        fontFamily="Georgia, serif"
        fontSize="17"
        fontWeight="700"
        fill="#c0392b"
      >
        Quarterly Report
      </text>
      {MESSY_LINES.map((line) => (
        <rect
          key={line.y}
          x="38"
          y={line.y}
          width={line.w}
          height={line.h}
          rx="2.5"
          fill={line.fill}
          opacity={line.opacity ?? 1}
        />
      ))}
      <rect x="38" y="134" width="70" height="14" fill="#c0392b" opacity="0.8" />
      <rect x="108" y="134" width="80" height="14" fill="#454545" opacity="0.55" />
      <rect x="38" y="148" width="150" height="34" fill="none" stroke="#c0392b" strokeDasharray="3 3" />
      <rect x="38" y="196" width="140" height="5" rx="2.5" fill="#a0a2a6" />
      <rect x="38" y="208" width="100" height="11" rx="2.5" fill="#046999" opacity="0.4" />
      <circle cx="204" cy="28" r="14" fill="#c0392b" />
      <path
        d="M198 22l12 12M210 22l-12 12"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </g>

    {/* ── Arrow ── */}
    <path
      d="M232 130h58M278 118l14 12-14 12"
      fill="none"
      stroke="#046999"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* ── After: on-brand ── */}
    <rect
      x="310"
      y="20"
      width="200"
      height="220"
      rx="8"
      fill="#fff"
      stroke="#e2e6ea"
      filter="url(#cu-shadow)"
    />
    <path d="M310 56V28a8 8 0 0 1 8-8h184a8 8 0 0 1 8 8v28z" fill="#046999" />
    <rect x="330" y="30" width="18" height="18" rx="4" fill="#fff" opacity="0.9" />
    <rect x="356" y="34" width="70" height="6" rx="3" fill="#fff" />
    <rect x="356" y="44" width="44" height="4" rx="2" fill="#fff" opacity="0.6" />
    <rect x="330" y="76" width="120" height="12" rx="3" fill="#0d1b2a" />
    {CLEAN_LINES.map((line) => (
      <rect
        key={line.y}
        x="330"
        y={line.y}
        width={line.w}
        height="5"
        rx="2.5"
        fill="#e2e6ea"
      />
    ))}
    <rect x="330" y="148" width="160" height="56" rx="4" fill="#fff" stroke="#e2e6ea" />
    <path d="M330 164v-12a4 4 0 0 1 4-4h152a4 4 0 0 1 4 4v12z" fill="#046999" />
    <path d="M330 184h160M410 164v40" stroke="#e2e6ea" fill="none" />
    <rect x="342" y="172" width="50" height="4" rx="2" fill="#d5dbe1" />
    <rect x="422" y="172" width="50" height="4" rx="2" fill="#d5dbe1" />
    <rect x="342" y="192" width="40" height="4" rx="2" fill="#d5dbe1" />
    <rect x="422" y="192" width="56" height="4" rx="2" fill="#d5dbe1" />
    <rect x="330" y="220" width="130" height="5" rx="2.5" fill="#e2e6ea" />
    <circle cx="500" cy="236" r="16" fill="#046999" stroke="#fff" strokeWidth="3" />
    <path
      d="M492 236l6 6 11-12"
      fill="none"
      stroke="#fff"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* ── Labels ── */}
    <text
      x="115"
      y="264"
      textAnchor="middle"
      fill="#a0a2a6"
      fontSize="9"
      fontWeight="700"
      letterSpacing="2"
    >
      BEFORE
    </text>
    <text
      x="410"
      y="264"
      textAnchor="middle"
      fill="#a0a2a6"
      fontSize="9"
      fontWeight="700"
      letterSpacing="2"
    >
      AFTER
    </text>
  </svg>
);
