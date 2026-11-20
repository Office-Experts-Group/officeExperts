// /app/blog/access-vs-excel/(svgs)/HybridSvg.jsx
// Annotated hybrid setup: Access holds the records, Excel reports on them.
// Hex values map to tokens: #046999 $accent, #e8f4fa $accent-light, #0d1b2a $text-primary,
// #4a5568 $text-secondary, #f7f8f9 $light-bg, #ffffff $white.

const MiniTable = ({ x, y, name }) => (
  <g>
    <rect
      x={x}
      y={y}
      width="116"
      height="76"
      rx="10"
      fill="#ffffff"
      stroke="#046999"
      strokeOpacity="0.5"
    />
    <path
      d={`M${x} ${y + 26} V${y + 10} a10 10 0 0 1 10 -10 H${x + 106} a10 10 0 0 1 10 10 V${y + 26} Z`}
      fill="#046999"
    />
    <text x={x + 10} y={y + 18} fontSize="14" fontWeight="700" fill="#ffffff">
      {name}
    </text>
    <rect
      x={x + 10}
      y={y + 38}
      width="62"
      height="7"
      rx="3.5"
      fill="#046999"
      fillOpacity="0.28"
    />
    <rect
      x={x + 10}
      y={y + 55}
      width="84"
      height="7"
      rx="3.5"
      fill="#046999"
      fillOpacity="0.28"
    />
  </g>
);

const Person = ({ cx, cy }) => (
  <g>
    <circle
      cx={cx}
      cy={cy}
      r="11"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.4"
    />
    <circle cx={cx} cy={cy - 3} r="3.4" fill="#046999" />
    <path
      d={`M${cx - 6} ${cy + 7} C${cx - 6} ${cy + 1.5}, ${cx + 6} ${cy + 1.5}, ${cx + 6} ${cy + 7}`}
      fill="#046999"
    />
  </g>
);

const Pin = ({ cx, cy, n }) => (
  <g>
    <circle cx={cx} cy={cy} r="13" fill="#0d1b2a" />
    <text
      x={cx}
      y={cy + 5}
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      {n}
    </text>
  </g>
);

const NOTES = [
  {
    n: 1,
    x: 10,
    y: 334,
    lines: [
      "Staff enter records through Access",
      "forms, with rules on every field.",
    ],
  },
  {
    n: 2,
    x: 350,
    y: 334,
    lines: [
      "Each fact lives in one table,",
      "linked by keys and never copied.",
    ],
  },
  {
    n: 3,
    x: 10,
    y: 396,
    lines: ["A saved query shapes the data", "your reports actually need."],
  },
  {
    n: 4,
    x: 350,
    y: 396,
    lines: [
      "Excel refreshes pivot tables and",
      "charts from that saved query.",
    ],
  },
];

export default function HybridSvg({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 680 450"
      fontFamily="aptos"
      role="img"
      aria-labelledby="avx-hybrid-title avx-hybrid-desc"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="avx-hybrid-title">
        Access as the back end, Excel as the report layer
      </title>
      <desc id="avx-hybrid-desc">
        Staff enter data through Access forms into linked customer, order and
        product tables. A saved query shapes the data. Excel connects to that
        query and refreshes its pivot table and charts.
      </desc>

      {/* access back end */}
      <rect
        x="10"
        y="40"
        width="290"
        height="248"
        rx="16"
        fill="#e8f4fa"
        stroke="#046999"
        strokeOpacity="0.3"
      />
      <text x="28" y="66" fontSize="16" fontWeight="700" fill="#046999">
        Access back end
      </text>
      <Pin cx={190} cy={58} n="1" />
      <Person cx={226} cy={58} />
      <Person cx={250} cy={58} />
      <Person cx={274} cy={58} />

      <MiniTable x={24} y={84} name="Customers" />
      <MiniTable x={166} y={84} name="Orders" />
      <MiniTable x={24} y={190} name="Products" />
      <path d="M140 122 H166" stroke="#046999" strokeWidth="2" />
      <path d="M146 115 V129" stroke="#046999" strokeWidth="2" />
      <path
        d="M166 122 L154 115 M166 122 L154 122 M166 122 L154 129"
        stroke="#046999"
        strokeWidth="2"
      />
      <path d="M82 160 V190" stroke="#046999" strokeWidth="2" />
      <path d="M75 170 H89" stroke="#046999" strokeWidth="2" />
      <path
        d="M82 190 L75 178 M82 190 L82 178 M82 190 L89 178"
        stroke="#046999"
        strokeWidth="2"
      />
      <path
        d="M224 160 V190"
        stroke="#046999"
        strokeWidth="2"
        strokeDasharray="5 4"
      />

      <rect
        x="166"
        y="190"
        width="116"
        height="76"
        rx="10"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.6"
        strokeDasharray="6 4"
      />
      <text x="176" y="212" fontSize="14" fontWeight="700" fill="#046999">
        Saved query
      </text>
      <rect
        x="176"
        y="226"
        width="70"
        height="6"
        rx="3"
        fill="#046999"
        fillOpacity="0.28"
      />
      <rect
        x="176"
        y="238"
        width="90"
        height="6"
        rx="3"
        fill="#046999"
        fillOpacity="0.28"
      />
      <rect
        x="176"
        y="250"
        width="54"
        height="6"
        rx="3"
        fill="#046999"
        fillOpacity="0.28"
      />
      <Pin cx={282} cy={190} n="3" />
      <Pin cx={140} cy={84} n="2" />

      {/* link */}
      <path
        d="M306 164 H370"
        stroke="#046999"
        strokeWidth="2.4"
        strokeDasharray="6 6"
        strokeLinecap="round"
      />
      <path d="M368 157 L382 164 L368 171 Z" fill="#046999" />
      <text
        x="338"
        y="146"
        fontSize="14"
        fontWeight="700"
        fill="#046999"
        textAnchor="middle"
      >
        Connect
      </text>
      <text
        x="338"
        y="192"
        fontSize="14"
        fontWeight="700"
        fill="#4a5568"
        textAnchor="middle"
      >
        Refresh
      </text>

      {/* excel report */}
      <rect
        x="390"
        y="40"
        width="280"
        height="248"
        rx="16"
        fill="#ffffff"
        stroke="#046999"
        strokeOpacity="0.3"
      />
      <text x="408" y="66" fontSize="16" fontWeight="700" fill="#046999">
        Excel report
      </text>
      <Pin cx={646} cy={58} n="4" />
      <rect x="408" y="80" width="244" height="22" rx="6" fill="#046999" />
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={420 + i * 80}
          y="87"
          width="48"
          height="8"
          rx="4"
          fill="#ffffff"
          fillOpacity="0.85"
        />
      ))}
      {[102, 124, 146].map((y, r) => (
        <g key={y}>
          <rect
            x="408"
            y={y}
            width="244"
            height="22"
            fill={r % 2 === 0 ? "#f7f8f9" : "#ffffff"}
          />
          {[0, 1, 2].map((i) => (
            <rect
              key={i}
              x={420 + i * 80}
              y={y + 7}
              width={[40, 52, 34][(i + r) % 3]}
              height="8"
              rx="4"
              fill="#0d1b2a"
              fillOpacity="0.2"
            />
          ))}
        </g>
      ))}
      <rect
        x="408"
        y="80"
        width="244"
        height="88"
        rx="6"
        fill="none"
        stroke="#046999"
        strokeOpacity="0.25"
      />

      {[26, 44, 34, 58, 70].map((h, i) => (
        <rect
          key={i}
          x={414 + i * 26}
          y={272 - h}
          width="18"
          height={h}
          rx="4"
          fill="#046999"
          fillOpacity={i === 4 ? 1 : 0.4}
        />
      ))}
      <path
        d="M423 248 L449 234 L475 242 L501 218 L527 206"
        stroke="#0d1b2a"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="560"
        y="184"
        width="92"
        height="40"
        rx="9"
        fill="#e8f4fa"
        stroke="#046999"
        strokeOpacity="0.3"
      />
      <rect x="572" y="198" width="44" height="8" rx="4" fill="#046999" />
      <rect x="560" y="232" width="92" height="40" rx="9" fill="#046999" />
      <rect x="572" y="246" width="44" height="8" rx="4" fill="#ffffff" />

      {/* notes */}
      {NOTES.map((note) => (
        <g key={note.n}>
          <Pin cx={note.x + 14} cy={note.y} n={String(note.n)} />
          <text x={note.x + 38} y={note.y + 1} fontSize="14" fill="#0d1b2a">
            {note.lines[0]}
          </text>
          <text x={note.x + 38} y={note.y + 23} fontSize="14" fill="#0d1b2a">
            {note.lines[1]}
          </text>
        </g>
      ))}
    </svg>
  );
}
