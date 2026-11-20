// /app/blog/access-vs-excel/(svgs)/HeroSvg.jsx
// Hero illustration: a flat sheet with flagged cells feeding linked tables and a report.
// Hex values map to tokens: #111820 $dark-bg, #18232e $dark-surface, #1a2a3a $dark-mid,
// #046999 $accent, #6fc3e8 $accent-on-dark, #ffffff $white.
// Sits directly on the dark hero background (no panel).

const COLS = [40, 100, 160, 220];
const ROWS = [104, 137, 170, 203, 236, 269];
const FLAGGED = ["1-2", "3-1", "4-3"];
const DUPES = [3, 4];
const BARS = [
  [34, 22, 40, 28],
  [26, 38, 30, 36],
  [40, 24, 32, 20],
  [30, 36, 22, 40],
  [30, 36, 22, 40],
  [24, 30, 38, 26],
];

const Avatar = ({ cx, cy }) => (
  <g>
    <circle
      cx={cx}
      cy={cy}
      r="22"
      fill="#1a2a3a"
      stroke="#6fc3e8"
      strokeWidth="1.6"
    />
    <circle cx={cx} cy={cy - 6} r="6.5" fill="#6fc3e8" />
    <path
      d={`M${cx - 12} ${cy + 15} C${cx - 12} ${cy + 5}, ${cx + 12} ${cy + 5}, ${cx + 12} ${cy + 15}`}
      fill="#6fc3e8"
    />
  </g>
);

const Table = ({ x, y, name }) => (
  <g>
    <rect
      x={x}
      y={y}
      width="130"
      height="108"
      rx="12"
      fill="#18232e"
      stroke="#6fc3e8"
      strokeOpacity="0.6"
    />
    <path
      d={`M${x} ${y + 30} V${y + 12} a12 12 0 0 1 12 -12 H${x + 118} a12 12 0 0 1 12 12 V${y + 30} Z`}
      fill="#046999"
    />
    <text x={x + 14} y={y + 21} fontSize="14" fontWeight="700" fill="#ffffff">
      {name}
    </text>
    {[50, 72, 94].map((dy, i) => (
      <g key={dy}>
        <circle
          cx={x + 18}
          cy={y + dy}
          r="4.5"
          fill={i === 0 ? "#6fc3e8" : "none"}
          stroke="#6fc3e8"
          strokeWidth="1.4"
        />
        <rect
          x={x + 32}
          y={y + dy - 4}
          width={[70, 54, 62][i]}
          height="8"
          rx="4"
          fill="#ffffff"
          fillOpacity="0.35"
        />
      </g>
    ))}
  </g>
);

export default function HeroSvg({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 520"
      fontFamily="aptos"
      role="img"
      aria-labelledby="avx-hero-title avx-hero-desc"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="avx-hero-title">
        From a flat spreadsheet to linked tables and a live report
      </title>
      <desc id="avx-hero-desc">
        A grid with duplicated rows and flagged cells is moved into three linked
        database tables. Several people work on those tables at once, and a
        report built in a spreadsheet updates from them.
      </desc>

      {/* flat sheet */}
      <rect
        x="10"
        y="70"
        width="270"
        height="240"
        rx="14"
        fill="#18232e"
        stroke="#ffffff"
        strokeOpacity="0.22"
      />
      <path
        d="M10 104 V84 a14 14 0 0 1 14 -14 H266 a14 14 0 0 1 14 14 V104 Z"
        fill="#1a2a3a"
      />
      {["A", "B", "C", "D"].map((l, i) => (
        <text
          key={l}
          x={COLS[i] + 30}
          y="93"
          fontSize="14"
          fill="#ffffff"
          fillOpacity="0.65"
          textAnchor="middle"
        >
          {l}
        </text>
      ))}
      {ROWS.map((y, r) => (
        <g key={y}>
          <line
            x1="10"
            x2="280"
            y1={y + 33}
            y2={y + 33}
            stroke="#ffffff"
            strokeOpacity="0.12"
          />
          <text
            x="25"
            y={y + 22}
            fontSize="14"
            fill="#ffffff"
            fillOpacity="0.45"
            textAnchor="middle"
          >
            {r + 1}
          </text>
          {COLS.map((x, c) => {
            const flagged = FLAGGED.includes(`${r + 1}-${c + 1}`);
            const dupe = DUPES.includes(r + 1);
            return (
              <g key={x}>
                {flagged && (
                  <rect
                    x={x + 3}
                    y={y + 3}
                    width="54"
                    height="27"
                    rx="5"
                    fill="#f08a7e"
                    fillOpacity="0.2"
                    stroke="#f08a7e"
                    strokeWidth="1.4"
                  />
                )}
                {dupe && !flagged && (
                  <rect
                    x={x + 3}
                    y={y + 3}
                    width="54"
                    height="27"
                    rx="5"
                    fill="#6fc3e8"
                    fillOpacity="0.14"
                  />
                )}
                <rect
                  x={x + 10}
                  y={y + 12}
                  width={BARS[r][c]}
                  height="8"
                  rx="4"
                  fill="#ffffff"
                  fillOpacity={flagged ? 0.6 : 0.32}
                />
              </g>
            );
          })}
        </g>
      ))}
      {COLS.slice(1).map((x) => (
        <line
          key={x}
          x1={x}
          x2={x}
          y1="104"
          y2="310"
          stroke="#ffffff"
          strokeOpacity="0.12"
        />
      ))}
      <line
        x1="40"
        x2="40"
        y1="104"
        y2="310"
        stroke="#ffffff"
        strokeOpacity="0.12"
      />
      {[
        ["1-2", 100],
        ["3-1", 40],
        ["4-3", 160],
      ].map(([k, x]) => {
        const row = Number(k[0]);
        return (
          <g key={k}>
            <circle cx={x + 52} cy={ROWS[row - 1] + 6} r="9" fill="#f08a7e" />
            <text
              x={x + 52}
              y={ROWS[row - 1] + 11}
              fontSize="14"
              fontWeight="700"
              fill="#111820"
              textAnchor="middle"
            >
              !
            </text>
          </g>
        );
      })}
      <text
        x="10"
        y="340"
        fontSize="16"
        fontWeight="700"
        fill="#ffffff"
        fillOpacity="0.88"
      >
        Flat sheet
      </text>
      <text x="10" y="362" fontSize="14" fill="#ffffff" fillOpacity="0.65">
        Duplicates, typos, one editor at a time
      </text>

      {/* arrow from sheet to tables */}
      <path
        d="M288 190 H322"
        stroke="#6fc3e8"
        strokeWidth="2.4"
        strokeDasharray="6 6"
        strokeLinecap="round"
      />
      <path d="M320 182 L334 190 L320 198 Z" fill="#6fc3e8" />

      {/* linked tables */}
      <Table x={340} y={40} name="Customers" />
      <Table x={340} y={176} name="Products" />
      <Table x={510} y={96} name="Orders" />
      <path
        d="M470 94 H490 V140 H510"
        stroke="#6fc3e8"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M470 230 H490 V176 H510"
        stroke="#6fc3e8"
        strokeWidth="2"
        fill="none"
      />
      <path d="M476 87 V101" stroke="#6fc3e8" strokeWidth="2" />
      <path d="M476 223 V237" stroke="#6fc3e8" strokeWidth="2" />
      <path
        d="M510 140 L496 133 M510 140 L496 140 M510 140 L496 147"
        stroke="#6fc3e8"
        strokeWidth="2"
      />
      <path
        d="M510 176 L496 169 M510 176 L496 176 M510 176 L496 183"
        stroke="#6fc3e8"
        strokeWidth="2"
      />

      {/* people feeding the tables */}
      <Avatar cx={46} cy={430} />
      <Avatar cx={98} cy={430} />
      <Avatar cx={150} cy={430} />
      <path
        d="M178 418 C 258 418, 270 270, 330 250"
        stroke="#6fc3e8"
        strokeWidth="2.4"
        strokeDasharray="6 6"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M322 241 L336 250 L321 257 Z" fill="#6fc3e8" />
      <text
        x="10"
        y="486"
        fontSize="16"
        fontWeight="700"
        fill="#ffffff"
        fillOpacity="0.88"
      >
        Many people, one source
      </text>

      {/* report */}
      <path
        d="M405 290 V318"
        stroke="#6fc3e8"
        strokeWidth="2.4"
        strokeDasharray="6 6"
        strokeLinecap="round"
      />
      <path
        d="M572 210 V318"
        stroke="#6fc3e8"
        strokeWidth="2.4"
        strokeDasharray="6 6"
        strokeLinecap="round"
      />
      <path d="M398 312 L405 324 L412 312 Z" fill="#6fc3e8" />
      <path d="M565 312 L572 324 L579 312 Z" fill="#6fc3e8" />
      <rect
        x="340"
        y="328"
        width="295"
        height="140"
        rx="14"
        fill="#18232e"
        stroke="#ffffff"
        strokeOpacity="0.22"
      />
      <rect
        x="356"
        y="344"
        width="78"
        height="10"
        rx="5"
        fill="#ffffff"
        fillOpacity="0.4"
      />
      {[34, 56, 44, 76, 62, 90].map((h, i) => (
        <rect
          key={i}
          x={360 + i * 32}
          y={452 - h}
          width="20"
          height={h}
          rx="4"
          fill="#6fc3e8"
          fillOpacity={i === 5 ? 1 : 0.55}
        />
      ))}
      <path
        d="M370 424 L402 410 L434 418 L466 394 L498 402 L530 380"
        stroke="#ffffff"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="530" cy="380" r="4.5" fill="#ffffff" />
      <rect x="556" y="378" width="62" height="34" rx="8" fill="#046999" />
      <rect
        x="566"
        y="390"
        width="42"
        height="8"
        rx="4"
        fill="#ffffff"
        fillOpacity="0.85"
      />
      <rect
        x="556"
        y="420"
        width="62"
        height="34"
        rx="8"
        fill="#1a2a3a"
        stroke="#6fc3e8"
        strokeOpacity="0.6"
      />
      <rect x="566" y="432" width="30" height="8" rx="4" fill="#6fc3e8" />
      <text
        x="340"
        y="496"
        fontSize="16"
        fontWeight="700"
        fill="#ffffff"
        fillOpacity="0.88"
      >
        Report that refreshes itself
      </text>
    </svg>
  );
}
