// /app/blog/power-bi-licensing-costs/(svgs)/BreakEvenSvg.jsx
// Break-even chart: per-user Pro cost vs a flat annual capacity cost. Uses the approximate AUD
// list prices quoted in the article ($13.60 per user per month, $6,858 per month for P1).
// Hex values: #046999 $accent, #e8f4fa $accent-light, #0b2433 $ink, #4a5568 $text-secondary,
// #e3e8ec $line, #d4d6d9 $line-strong, #f7f8f9 $light-bg.

const LEFT = 84;
const RIGHT = 724;
const TOP = 44;
const BOTTOM = 330;
const MAX_USERS = 700;
const MAX_COST = 120000;
const PRO_PER_USER = 163.2; // 13.60 x 12
const CAPACITY = 82296; // 6,858 x 12

const px = (users) => LEFT + (users * (RIGHT - LEFT)) / MAX_USERS;
const py = (cost) => BOTTOM - (cost * (BOTTOM - TOP)) / MAX_COST;
const round = (n) => Math.round(n * 10) / 10;

const crossUsers = CAPACITY / PRO_PER_USER; // about 504
const crossX = round(px(crossUsers));
const crossY = round(py(CAPACITY));

const BreakEvenSvg = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 760 440"
    role="img"
    aria-labelledby="pbl-be-title pbl-be-desc"
    fontFamily="aptos, 'Segoe UI', Arial, sans-serif"
  >
    <title id="pbl-be-title">
      Pro licences versus Premium capacity: annual cost by number of viewers
    </title>
    <desc id="pbl-be-desc">
      A line chart. The cost of Pro licences rises steadily with the number of
      viewers, from $8,160 a year for 50 viewers to about $82,000 at roughly 500
      viewers. Premium capacity is a flat $82,296 a year. The two lines cross at
      about 500 viewers. Needing Premium-only features moves the crossover to
      fewer users.
    </desc>

    {/* shaded regions either side of the crossover */}
    <rect
      x={LEFT}
      y={TOP}
      width={crossX - LEFT}
      height={BOTTOM - TOP}
      fill="#e8f4fa"
    />
    <rect
      x={crossX}
      y={TOP}
      width={RIGHT - crossX}
      height={BOTTOM - TOP}
      fill="#f7f8f9"
    />

    {/* grid and y labels */}
    {[0, 20000, 40000, 60000, 80000, 100000, 120000].map((v) => (
      <g key={v}>
        <path
          d={`M${LEFT} ${round(py(v))}H${RIGHT}`}
          stroke="#d4d6d9"
          strokeWidth={v === 0 ? 2 : 1}
        />
        <text
          x={LEFT - 10}
          y={round(py(v)) + 5}
          textAnchor="end"
          fontSize="14"
          fill="#4a5568"
        >
          {v === 0 ? "$0" : `$${v / 1000}k`}
        </text>
      </g>
    ))}

    {/* x labels */}
    {[0, 100, 200, 300, 400, 500, 600, 700].map((u) => (
      <text
        key={u}
        x={round(px(u))}
        y={BOTTOM + 24}
        textAnchor="middle"
        fontSize="14"
        fill="#4a5568"
      >
        {u}
      </text>
    ))}
    <text
      x={(LEFT + RIGHT) / 2}
      y={BOTTOM + 50}
      textAnchor="middle"
      fontSize="15"
      fontWeight="700"
      fill="#0b2433"
    >
      Number of people viewing reports
    </text>
    <text
      transform="translate(18 187) rotate(-90)"
      textAnchor="middle"
      fontSize="15"
      fontWeight="700"
      fill="#0b2433"
    >
      Annual cost (AUD)
    </text>

    {/* region labels */}
    <text
      x={LEFT + 12}
      y={TOP + 22}
      fontSize="15"
      fontWeight="700"
      fill="#046999"
    >
      Pro seats cheaper
    </text>
    <text
      x={crossX + 12}
      y={TOP + 22}
      fontSize="15"
      fontWeight="700"
      fill="#4a5568"
    >
      Capacity cheaper
    </text>

    {/* lines */}
    <path
      d={`M${LEFT} ${round(py(CAPACITY))}H${RIGHT}`}
      stroke="#0b2433"
      strokeWidth="3"
      strokeDasharray="9 6"
    />
    <path
      d={`M${LEFT} ${BOTTOM}L${RIGHT} ${round(py(PRO_PER_USER * MAX_USERS))}`}
      stroke="#046999"
      strokeWidth="4"
      strokeLinecap="round"
    />

    {/* labelled points on the Pro line */}
    {[
      { u: 100, label: "100 users: $16,320", dx: 14, dy: 26 },
      { u: 300, label: "300 users: $48,960", dx: 14, dy: 42 },
    ].map((p) => (
      <g key={p.u}>
        <circle
          cx={round(px(p.u))}
          cy={round(py(PRO_PER_USER * p.u))}
          r="6"
          fill="#ffffff"
          stroke="#046999"
          strokeWidth="3"
        />
        <text
          x={round(px(p.u)) + p.dx}
          y={round(py(PRO_PER_USER * p.u)) + p.dy}
          fontSize="14"
          fill="#0b2433"
        >
          {p.label}
        </text>
      </g>
    ))}

    {/* capacity label and crossover */}
    <text
      x={LEFT + 12}
      y={round(py(CAPACITY)) - 10}
      fontSize="14"
      fill="#0b2433"
    >
      Premium capacity (P1): $82,296 a year
    </text>
    <circle
      cx={crossX}
      cy={crossY}
      r="8"
      fill="#ffffff"
      stroke="#0b2433"
      strokeWidth="3"
    />
    <path
      d={`M${crossX - 6} ${crossY - 12}L${crossX - 22} ${crossY - 30}`}
      stroke="#0b2433"
      strokeWidth="2"
    />
    <text
      x={crossX - 28}
      y={crossY - 36}
      textAnchor="end"
      fontSize="15"
      fontWeight="700"
      fill="#0b2433"
    >
      Crossover: about 500 users
    </text>

    {/* legend */}
    <path
      d="M84 398h36"
      stroke="#046999"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <text x="128" y="403" fontSize="14" fill="#0b2433">
      Pro licences ($13.60 per user per month)
    </text>
    <path
      d="M440 398h36"
      stroke="#0b2433"
      strokeWidth="3"
      strokeDasharray="9 6"
    />
    <text x="484" y="403" fontSize="14" fill="#0b2433">
      Premium capacity, flat price
    </text>
    <text x="84" y="428" fontSize="14" fill="#4a5568">
      Needing Premium-only features moves the crossover to the left.
    </text>
  </svg>
);

export default BreakEvenSvg;
