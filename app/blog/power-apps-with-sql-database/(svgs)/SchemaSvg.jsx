// /app/blog/power-apps-with-sql-database/(svgs)/SchemaSvg.jsx
// Anatomy of the two tables: annotated Stock and Orders with numbered pins.
// Hex values map to tokens: #e8f4fa $accent-light, #046999 $accent,
// #0d1b2a $text-primary, #4a5568 $text-secondary, #ffffff $white.

const Table = ({ x, y, name, rows }) => {
  const rowH = 40;
  const headH = 40;
  const w = 240;
  const h = headH + rows.length * rowH;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="14"
        fill="#ffffff"
        stroke="#046999"
        strokeOpacity="0.4"
        strokeWidth="1.5"
      />
      <path
        d={`M${x} ${y + 14}a14 14 0 0 1 14-14h${w - 28}a14 14 0 0 1 14 14v${headH - 14}H${x}Z`}
        fill="#046999"
      />
      <text x={x + 18} y={y + 26} fontSize="17" fontWeight="700" fill="#ffffff">
        {name}
      </text>
      {rows.map((r, i) => {
        const ry = y + headH + i * rowH;
        return (
          <g key={r.n}>
            {r.hot && (
              <rect
                x={x + 6}
                y={ry + 4}
                width={w - 12}
                height={rowH - 8}
                rx="8"
                fill="#046999"
                fillOpacity="0.12"
              />
            )}
            {i > 0 && !rows[i - 1].hot && !r.hot && (
              <path
                d={`M${x + 14} ${ry}H${x + w - 14}`}
                stroke="#046999"
                strokeOpacity="0.15"
              />
            )}
            <text
              x={x + 30}
              y={ry + 25}
              fontSize="15"
              fontWeight={r.hot || r.key ? 700 : 400}
              fill={r.hot ? "#046999" : "#0d1b2a"}
            >
              {r.n}
            </text>
            <text
              x={x + w - 30}
              y={ry + 25}
              fontSize="14"
              fill="#4a5568"
              textAnchor="end"
            >
              {r.t}
            </text>
          </g>
        );
      })}
    </g>
  );
};

const Pin = ({ x, y, n }) => (
  <g>
    <circle cx={x} cy={y} r="13" fill="#0d1b2a" />
    <text
      x={x}
      y={y + 5}
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      {n}
    </text>
  </g>
);

const SchemaSvg = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 1000 352"
    role="img"
    aria-labelledby="pasql-schema-title pasql-schema-desc"
    fontFamily="aptos, sans-serif"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="pasql-schema-title">
      The Stock and Orders tables and how they are linked
    </title>
    <desc id="pasql-schema-desc">
      The Stock table has an ID primary key, a Name, a Description and a
      StockLevel. The Orders table has its own ID, a StockID foreign key that
      must match a Stock ID, an OrderDate, an Amount and a Description. One
      stock item can have many orders. Four numbered pins explain the primary
      key, data types, the foreign key and dates stored as dates.
    </desc>

    <Table
      x={242}
      y={24}
      name="Stock"
      rows={[
        { n: "ID", t: "int", key: true },
        { n: "Name", t: "varchar(100)" },
        { n: "Description", t: "varchar(255)" },
        { n: "StockLevel", t: "int" },
      ]}
    />
    <Table
      x={562}
      y={24}
      name="Orders"
      rows={[
        { n: "ID", t: "int", key: true },
        { n: "StockID", t: "int", hot: true },
        { n: "OrderDate", t: "datetime" },
        { n: "Amount", t: "int" },
        { n: "Description", t: "varchar(255)" },
      ]}
    />

    {/* Relationship: one Stock row to many Orders rows */}
    <path
      d="M482 84H508V124H552"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
    />
    <path
      d="M552 124 562 118M552 124 562 124M552 124 562 130"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <text
      x="522"
      y="190"
      fontSize="14"
      fontWeight="700"
      fill="#046999"
      textAnchor="middle"
    >
      one
    </text>
    <text
      x="522"
      y="208"
      fontSize="14"
      fontWeight="700"
      fill="#046999"
      textAnchor="middle"
    >
      to
    </text>
    <text
      x="522"
      y="226"
      fontSize="14"
      fontWeight="700"
      fill="#046999"
      textAnchor="middle"
    >
      many
    </text>

    {/* Pins and callouts: left */}
    <Pin x={242} y={84} n="1" />
    <text
      x={214}
      y={80}
      fontSize="15"
      fontWeight="700"
      fill="#0d1b2a"
      textAnchor="end"
    >
      Primary key
    </text>
    <text x={214} y={100} fontSize="14" fill="#4a5568" textAnchor="end">
      IDENTITY numbers
    </text>
    <text x={214} y={118} fontSize="14" fill="#4a5568" textAnchor="end">
      each row for you.
    </text>

    <Pin x={242} y={204} n="2" />
    <text
      x={214}
      y={200}
      fontSize="15"
      fontWeight="700"
      fill="#0d1b2a"
      textAnchor="end"
    >
      Real data types
    </text>
    <text x={214} y={220} fontSize="14" fill="#4a5568" textAnchor="end">
      int keeps numbers
    </text>
    <text x={214} y={238} fontSize="14" fill="#4a5568" textAnchor="end">
      as numbers.
    </text>

    {/* Pins and callouts: right */}
    <Pin x={802} y={124} n="3" />
    <text x={830} y={106} fontSize="15" fontWeight="700" fill="#0d1b2a">
      Foreign key
    </text>
    <text x={830} y={126} fontSize="14" fill="#4a5568">
      Must match a Stock
    </text>
    <text x={830} y={144} fontSize="14" fill="#4a5568">
      ID, or SQL rejects it.
    </text>

    <Pin x={802} y={164} n="4" />
    <text x={830} y={190} fontSize="15" fontWeight="700" fill="#0d1b2a">
      Dates as dates
    </text>
    <text x={830} y={210} fontSize="14" fill="#4a5568">
      datetime sorts and
    </text>
    <text x={830} y={228} fontSize="14" fill="#4a5568">
      filters correctly.
    </text>
  </svg>
);

export default SchemaSvg;
