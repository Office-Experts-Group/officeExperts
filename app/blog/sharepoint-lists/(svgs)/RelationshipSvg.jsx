// /app/blog/sharepoint-lists/(svgs)/RelationshipSvg.jsx
// Parent list, child list and the key that links them.
// Hard-coded hex values and the tokens they match:
//   #046999 $accent, #e8f4fa $accent-light, #0d1b2a $text-primary,
//   #4a5568 $text-secondary, #f7f8f9 $light-bg, #ffffff $white,
//   #d4d6d9 $line-strong, #e3e8ec $line

const LEFT = {
  x: 20,
  y: 40,
  w: 290,
  title: "Issues (parent list)",
  rows: [
    { name: "ID", tag: "Primary key" },
    { name: "Title" },
    { name: "Description" },
  ],
};

const RIGHT = {
  x: 410,
  y: 40,
  w: 290,
  title: "Actions (child list)",
  rows: [
    { name: "ID", tag: "Primary key" },
    { name: "IssueId", tag: "Foreign key", hot: true },
    { name: "Title" },
    { name: "Description" },
  ],
};

const HEADER_H = 44;
const ROW_H = 44;

function ListBox({ box }) {
  const { x, y, w, title, rows } = box;
  const h = HEADER_H + rows.length * ROW_H;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="14"
        fill="#ffffff"
        stroke="#d4d6d9"
      />
      <path
        d={`M${x} ${y + HEADER_H} V${y + 14} Q${x} ${y} ${x + 14} ${y} H${
          x + w - 14
        } Q${x + w} ${y} ${x + w} ${y + 14} V${y + HEADER_H} Z`}
        fill="#046999"
      />
      <text x={x + 16} y={y + 28} fontSize="16" fontWeight="700" fill="#ffffff">
        {title}
      </text>
      {rows.map((row, i) => {
        const y0 = y + HEADER_H + i * ROW_H;
        return (
          <g key={row.name}>
            {row.hot && (
              <rect
                x={x + 1}
                y={y0}
                width={w - 2}
                height={ROW_H}
                fill="#e8f4fa"
              />
            )}
            {i > 0 && (
              <line x1={x} x2={x + w} y1={y0} y2={y0} stroke="#e3e8ec" />
            )}
            <text
              x={x + 16}
              y={y0 + 27}
              fontSize="16"
              fontWeight="600"
              fill="#0d1b2a"
            >
              {row.name}
            </text>
            {row.tag && (
              <g>
                <rect
                  x={x + w - 16 - 104}
                  y={y0 + 9}
                  width="104"
                  height="26"
                  rx="13"
                  fill={row.hot ? "#046999" : "#f7f8f9"}
                  stroke={row.hot ? "#046999" : "#d4d6d9"}
                />
                <text
                  x={x + w - 16 - 52}
                  y={y0 + 27}
                  fontSize="14"
                  fontWeight="600"
                  textAnchor="middle"
                  fill={row.hot ? "#ffffff" : "#4a5568"}
                >
                  {row.tag}
                </text>
              </g>
            )}
          </g>
        );
      })}
    </g>
  );
}

export default function RelationshipSvg() {
  return (
    <svg
      viewBox="0 0 720 372"
      role="img"
      aria-labelledby="sp-map-title sp-map-desc"
      fontFamily="aptos"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="sp-map-title">How the IssueId column links two lists</title>
      <desc id="sp-map-desc">
        The Issues list has an ID primary key. The Actions list has its own ID
        plus an IssueId foreign key that stores the ID of one issue. One issue
        can have many actions.
      </desc>

      <ListBox box={LEFT} />
      <ListBox box={RIGHT} />

      {/* Link from the issue ID to the action IssueId */}
      <path
        d="M310 106 C 353 106, 353 150, 396 150"
        fill="none"
        stroke="#046999"
        strokeWidth="2.5"
      />
      <circle cx="310" cy="106" r="5" fill="#046999" />
      <path
        d="M396 150 L410 138 M396 150 L410 150 M396 150 L410 162"
        fill="none"
        stroke="#046999"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M324 96 V116"
        fill="none"
        stroke="#046999"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <text x="322" y="88" fontSize="14" fontWeight="600" fill="#4a5568">
        one
      </text>
      <text
        x="402"
        y="184"
        fontSize="14"
        fontWeight="600"
        textAnchor="end"
        fill="#4a5568"
      >
        many
      </text>

      {/* Plain-English summary */}
      <rect
        x="20"
        y="284"
        width="680"
        height="68"
        rx="14"
        fill="#e8f4fa"
        stroke="#046999"
        strokeOpacity="0.28"
      />
      <text x="40" y="312" fontSize="16" fill="#0d1b2a">
        One Issue can have many Actions. Each Action stores the ID of one Issue
      </text>
      <text x="40" y="336" fontSize="16" fill="#0d1b2a">
        in its IssueId column. That column is the only link between the lists.
      </text>
    </svg>
  );
}
