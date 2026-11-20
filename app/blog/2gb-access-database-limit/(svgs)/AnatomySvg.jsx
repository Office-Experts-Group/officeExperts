// /app/blog/2gb-access-database-limit/(svgs)/AnatomySvg.jsx
// Annotated "what fills a 2GB file" bar. Proportions are illustrative.
// Hex values map to tokens: #046999 = $accent, #e8f4fa = $accent-light,
// #0d1b2a = $text-primary, #4a5568 = $text-secondary, #c0392b = $replace-x.

const SEGMENTS = [
  {
    n: 1,
    w: 258,
    fill: "#046999",
    name: "Live table data",
    note: "Your actual records, growing daily",
    fix: "Archive old",
  },
  {
    n: 2,
    w: 163,
    fill: "#3a8fb7",
    name: "Attachments and OLE",
    note: "Images and PDFs stored in the file",
    fix: "Link instead",
  },
  {
    n: 3,
    w: 136,
    fill: "url(#tgb-anat-hatch)",
    name: "Deleted-record bloat",
    note: "Space left behind until you compact",
    fix: "Compact",
  },
  {
    n: 4,
    w: 54,
    fill: "#9fb3c4",
    name: "Temp and scratch tables",
    note: "Make-table and import leftovers",
    fix: "Delete",
  },
  {
    n: 5,
    w: 69,
    fill: "#cfe7f3",
    name: "Forms, reports and code",
    note: "Design changes add up over time",
    fix: "Tidy up",
  },
];

const BAR_X = 40;
const BAR_Y = 86;
const BAR_H = 56;

export default function AnatomySvg() {
  let cursor = BAR_X;
  const placed = SEGMENTS.map((s) => {
    const item = { ...s, x: cursor };
    cursor += s.w;
    return item;
  });

  return (
    <svg
      viewBox="0 0 760 420"
      role="img"
      aria-labelledby="tgb-anat-title tgb-anat-desc"
      fontFamily="aptos"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="tgb-anat-title">What typically fills a 2GB Access file</title>
      <desc id="tgb-anat-desc">
        A horizontal bar representing a full 2GB file, split into five parts:
        live table data, attachments and OLE objects, deleted-record bloat,
        temporary tables, and forms, reports and code. Each part has a numbered
        pin and a typical fix. Proportions are illustrative.
      </desc>

      <defs>
        <pattern
          id="tgb-anat-hatch"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <rect width="8" height="8" fill="#e2e8f0" />
          <line x1="0" y1="0" x2="0" y2="8" stroke="#94a3b8" strokeWidth="2" />
        </pattern>
        <clipPath id="tgb-anat-clip">
          <rect x={BAR_X} y={BAR_Y} width="680" height={BAR_H} rx="12" />
        </clipPath>
      </defs>

      <text x={BAR_X} y="28" fill="#4a5568" fontSize="14">
        Illustrative make-up of a file at the limit
      </text>

      <g clipPath="url(#tgb-anat-clip)">
        {placed.map((s) => (
          <rect
            key={s.n}
            x={s.x}
            y={BAR_Y}
            width={s.w}
            height={BAR_H}
            fill={s.fill}
          />
        ))}
        {placed.slice(1).map((s) => (
          <path
            key={`sep-${s.n}`}
            d={`M${s.x} ${BAR_Y}V${BAR_Y + BAR_H}`}
            stroke="#ffffff"
            strokeWidth="2"
          />
        ))}
      </g>
      <rect
        x={BAR_X}
        y={BAR_Y}
        width="680"
        height={BAR_H}
        rx="12"
        fill="none"
        stroke="#0d1b2a"
        strokeOpacity="0.2"
      />

      {/* numbered pins */}
      {placed.map((s) => {
        const cx = s.x + s.w / 2;
        return (
          <g key={`pin-${s.n}`}>
            <path
              d={`M${cx} 66V${BAR_Y}`}
              stroke="#0d1b2a"
              strokeOpacity="0.35"
              strokeWidth="1.5"
            />
            <circle cx={cx} cy="54" r="13" fill="#0d1b2a" />
            <text
              x={cx}
              y="59"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="14"
              fontWeight="700"
            >
              {s.n}
            </text>
          </g>
        );
      })}

      {/* limit marker */}
      <path
        d={`M${BAR_X + 680} ${BAR_Y - 8}V${BAR_Y + BAR_H + 8}`}
        stroke="#c0392b"
        strokeWidth="3"
      />
      <text
        x={BAR_X + 680}
        y={BAR_Y + BAR_H + 28}
        textAnchor="end"
        fill="#c0392b"
        fontSize="14"
        fontWeight="700"
      >
        2GB limit
      </text>
      <text x={BAR_X} y={BAR_Y + BAR_H + 28} fill="#4a5568" fontSize="14">
        0
      </text>

      {/* legend rows */}
      {placed.map((s, i) => {
        const y = 202 + i * 40;
        return (
          <g key={`row-${s.n}`}>
            <rect
              x={BAR_X}
              y={y}
              width="680"
              height="34"
              rx="8"
              fill={i % 2 === 0 ? "#f7f8f9" : "#ffffff"}
            />
            <circle cx={BAR_X + 22} cy={y + 17} r="12" fill="#0d1b2a" />
            <text
              x={BAR_X + 22}
              y={y + 22}
              textAnchor="middle"
              fill="#ffffff"
              fontSize="14"
              fontWeight="700"
            >
              {s.n}
            </text>
            <rect
              x={BAR_X + 46}
              y={y + 9}
              width="16"
              height="16"
              rx="4"
              fill={s.fill}
              stroke="#0d1b2a"
              strokeOpacity="0.2"
            />
            <text
              x={BAR_X + 74}
              y={y + 22}
              fill="#0d1b2a"
              fontSize="15"
              fontWeight="700"
            >
              {s.name}
            </text>
            <text x={BAR_X + 262} y={y + 22} fill="#4a5568" fontSize="14">
              {s.note}
            </text>
            <rect
              x={BAR_X + 560}
              y={y + 5}
              width="112"
              height="24"
              rx="12"
              fill="#e8f4fa"
              stroke="#046999"
              strokeOpacity="0.28"
            />
            <text
              x={BAR_X + 616}
              y={y + 22}
              textAnchor="middle"
              fill="#046999"
              fontSize="14"
              fontWeight="700"
            >
              {s.fix}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
