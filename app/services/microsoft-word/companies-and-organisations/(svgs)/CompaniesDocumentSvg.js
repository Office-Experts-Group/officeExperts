// /services/microsoft-word/companies-and-organisations/(svgs)/CompaniesDocumentSvg.js
// Decorative illustration: a branded Word page, its approved styles panel and a lock.
// Colours are the globals.scss palette written as hex, as SVG can't read Sass variables.

// Row positions for the table body, so the cell bars are generated rather than repeated by hand
const TABLE_ROWS = [249, 273, 297];
const TABLE_COLS = [
  { x: 76, w: 44 },
  { x: 161, w: 30 },
  { x: 246, w: 44 },
];

// Approved styles shown in the panel; the first is the "selected" style
const STYLES = [
  { label: "Heading 1", y: 168, weight: 800 },
  { label: "Normal", y: 202, weight: 600 },
  { label: "Table Grid", y: 236, weight: 600 },
];

// Brand colour swatches: accent, text-primary, gray and grayText from globals.scss
const SWATCHES = ["#046999", "#0d1b2a", "#454545", "#a0a2a6"];

export const CompaniesDocumentSvg = () => (
  <svg
    viewBox="0 0 520 460"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <filter id="cd-shadow" x="-10%" y="-10%" width="120%" height="125%">
        <feDropShadow
          dx="0"
          dy="10"
          stdDeviation="14"
          floodColor="#0d1b2a"
          floodOpacity="0.12"
        />
      </filter>
    </defs>

    {/* ── The page ── */}
    <rect
      x="40"
      y="30"
      width="300"
      height="400"
      rx="10"
      fill="#fff"
      stroke="#e2e6ea"
      filter="url(#cd-shadow)"
    />
    <path d="M40 94V40a10 10 0 0 1 10-10h280a10 10 0 0 1 10 10v54z" fill="#046999" />
    <rect x="62" y="50" width="24" height="24" rx="5" fill="#fff" opacity="0.9" />
    <rect x="96" y="55" width="96" height="7" rx="3.5" fill="#fff" />
    <rect x="96" y="67" width="60" height="5" rx="2.5" fill="#fff" opacity="0.6" />

    <rect x="62" y="118" width="170" height="14" rx="3" fill="#0d1b2a" />
    <rect x="62" y="140" width="90" height="8" rx="3" fill="#046999" opacity="0.6" />
    <rect x="62" y="162" width="256" height="6" rx="3" fill="#e2e6ea" />
    <rect x="62" y="178" width="244" height="6" rx="3" fill="#e2e6ea" />
    <rect x="62" y="194" width="200" height="6" rx="3" fill="#e2e6ea" />

    {/* ── Branded table ── */}
    <rect x="62" y="216" width="256" height="96" rx="4" fill="#fff" stroke="#e2e6ea" />
    <path d="M62 240V220a4 4 0 0 1 4-4h248a4 4 0 0 1 4 4v20z" fill="#046999" />
    <path
      d="M62 264h256M62 288h256M147 240v72M232 240v72"
      stroke="#e2e6ea"
      fill="none"
    />
    {TABLE_COLS.map((col) => (
      <rect
        key={`h${col.x}`}
        x={col.x}
        y="225"
        width={col.w}
        height="6"
        rx="3"
        fill="#fff"
        opacity="0.85"
      />
    ))}
    {TABLE_ROWS.map((y) =>
      TABLE_COLS.map((col) => (
        <rect
          key={`r${y}-${col.x}`}
          x={col.x}
          y={y}
          width={col.w - 6}
          height="6"
          rx="3"
          fill="#d5dbe1"
        />
      )),
    )}

    <rect x="62" y="334" width="256" height="6" rx="3" fill="#e2e6ea" />
    <rect x="62" y="350" width="236" height="6" rx="3" fill="#e2e6ea" />
    <rect x="62" y="366" width="150" height="6" rx="3" fill="#e2e6ea" />
    <path d="M62 396h256" stroke="#e2e6ea" />
    <rect x="62" y="406" width="60" height="5" rx="2.5" fill="#d5dbe1" />

    {/* ── Approved styles panel, overlapping the page edge ── */}
    <rect
      x="300"
      y="130"
      width="190"
      height="160"
      rx="10"
      fill="#fff"
      stroke="#e2e6ea"
      filter="url(#cd-shadow)"
    />
    <text
      x="316"
      y="154"
      fill="#a0a2a6"
      fontSize="9"
      fontWeight="700"
      letterSpacing="1.5"
    >
      APPROVED STYLES
    </text>
    {STYLES.map((style, i) => (
      <g key={style.label}>
        <rect
          x="314"
          y={style.y}
          width="162"
          height="28"
          rx="6"
          fill={i === 0 ? "#046999" : "#f2f3f5"}
        />
        <text
          x="328"
          y={style.y + 18}
          fill={i === 0 ? "#fff" : "#0d1b2a"}
          fontSize="12"
          fontWeight={style.weight}
        >
          {style.label}
        </text>
      </g>
    ))}

    {/* ── Lock badge: the brand is protected ── */}
    <circle
      cx="430"
      cy="350"
      r="46"
      fill="none"
      stroke="#046999"
      strokeDasharray="4 5"
      opacity="0.35"
    />
    <circle cx="430" cy="350" r="34" fill="#046999" />
    <path
      d="M421 346v-7a9 9 0 0 1 18 0v7"
      fill="none"
      stroke="#fff"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <rect x="415" y="346" width="30" height="22" rx="4" fill="#fff" />
    <circle cx="430" cy="355" r="3" fill="#046999" />

    {/* ── Approved colours ── */}
    <text
      x="372"
      y="412"
      fill="#a0a2a6"
      fontSize="8.5"
      fontWeight="700"
      letterSpacing="1.5"
    >
      APPROVED COLOURS
    </text>
    {SWATCHES.map((fill, i) => (
      <circle key={fill} cx={381 + i * 24} cy="432" r="9" fill={fill} />
    ))}
  </svg>
);
