// /app/blog/access-database-slow-performance/(svgs)/QuerySvg.jsx
// Reading every row versus jumping to matching rows through an index.
// Hex to token: #046999 $accent, #e8f4fa $accent-light, #0d1b2a $text-primary,
// #4a5568 $text-secondary, #f7f8f9 $light-bg. Amber (#b7791f) marks the scan.
import React from "react";

const ROWS = Array.from({ length: 9 }, (_, i) => i);
const HIT = [3, 4, 5];

export default function QuerySvg() {
  return (
    <svg
      viewBox="0 0 760 410"
      role="img"
      aria-labelledby="asp-query-title asp-query-desc"
      fontFamily="aptos, sans-serif"
    >
      <title id="asp-query-title">
        Reading every row compared with using an index
      </title>
      <desc id="asp-query-desc">
        On the left, a query that wraps the date field in the Year function
        cannot use the index, so Access reads every row in the Orders table. On
        the right, a plain date range uses the index to jump straight to the
        three matching rows.
      </desc>

      {/* Left panel: scan */}
      <rect
        x="10"
        y="10"
        width="355"
        height="390"
        rx="16"
        fill="#f4f6f8"
        stroke="#dfe5ea"
      />
      <text x="30" y="42" fontSize="17" fontWeight="700" fill="#0d1b2a">
        No usable index
      </text>
      <text x="30" y="64" fontSize="14" fill="#4a5568">
        Access reads every row
      </text>
      <rect x="40" y="82" width="285" height="30" rx="6" fill="#dfe5ea" />
      <text x="52" y="102" fontSize="14" fontWeight="700" fill="#0d1b2a">
        OrderID
      </text>
      <text x="140" y="102" fontSize="14" fontWeight="700" fill="#0d1b2a">
        OrderDate
      </text>
      <text x="248" y="102" fontSize="14" fontWeight="700" fill="#0d1b2a">
        Total
      </text>
      {ROWS.map((r) => (
        <g key={r}>
          <rect
            x="40"
            y={116 + r * 24}
            width="285"
            height="20"
            rx="4"
            fill="#fdf3e4"
            stroke="#f0cf9a"
          />
          <rect
            x="52"
            y={122 + r * 24}
            width="44"
            height="8"
            rx="4"
            fill="#d8b479"
          />
          <rect
            x="140"
            y={122 + r * 24}
            width="62"
            height="8"
            rx="4"
            fill="#d8b479"
          />
          <rect
            x="248"
            y={122 + r * 24}
            width="40"
            height="8"
            rx="4"
            fill="#d8b479"
          />
        </g>
      ))}
      <path
        d="M345 124V338"
        fill="none"
        stroke="#b7791f"
        strokeWidth="2.5"
        strokeDasharray="6 5"
        strokeLinecap="round"
      />
      <path
        d="M338 330l7 10 7-10"
        fill="none"
        stroke="#b7791f"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="40"
        y="350"
        width="285"
        height="42"
        rx="21"
        fill="#fdf3e4"
        stroke="#f0cf9a"
      />
      <text x="182" y="376" textAnchor="middle" fontSize="14" fill="#0d1b2a">
        Year(OrderDate) = 2024
      </text>

      {/* Right panel: index */}
      <rect
        x="395"
        y="10"
        width="355"
        height="390"
        rx="16"
        fill="#e8f4fa"
        stroke="#bcd9e8"
      />
      <text x="415" y="42" fontSize="17" fontWeight="700" fill="#0d1b2a">
        With an index on OrderDate
      </text>
      <text x="415" y="64" fontSize="14" fill="#4a5568">
        Access jumps to the matches
      </text>
      <rect x="415" y="82" width="115" height="30" rx="6" fill="#bcd9e8" />
      <text x="427" y="102" fontSize="14" fontWeight="700" fill="#0d1b2a">
        Index
      </text>
      <rect x="565" y="82" width="165" height="30" rx="6" fill="#bcd9e8" />
      <text x="577" y="102" fontSize="14" fontWeight="700" fill="#0d1b2a">
        Orders
      </text>
      {ROWS.map((r) => {
        const hit = HIT.includes(r);
        const y = 116 + r * 24;
        return (
          <g key={r}>
            <rect
              x="415"
              y={y}
              width="115"
              height="20"
              rx="4"
              fill={hit ? "#046999" : "#ffffff"}
              stroke={hit ? "#046999" : "#bcd9e8"}
            />
            <rect
              x="427"
              y={y + 6}
              width="60"
              height="8"
              rx="4"
              fill={hit ? "#e8f4fa" : "#bcd9e8"}
            />
            <rect
              x="565"
              y={y}
              width="165"
              height="20"
              rx="4"
              fill={hit ? "#d6ebf6" : "#ffffff"}
              stroke={hit ? "#046999" : "#bcd9e8"}
              strokeWidth={hit ? 1.5 : 1}
            />
            <rect
              x="577"
              y={y + 6}
              width="40"
              height="8"
              rx="4"
              fill={hit ? "#046999" : "#d4e3ec"}
            />
            <rect
              x="630"
              y={y + 6}
              width="70"
              height="8"
              rx="4"
              fill={hit ? "#7fb6d1" : "#d4e3ec"}
            />
            {hit ? (
              <>
                <path
                  d={`M532 ${y + 10}H557`}
                  fill="none"
                  stroke="#046999"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d={`M552 ${y + 5}l6 5-6 5`}
                  fill="none"
                  stroke="#046999"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </>
            ) : null}
          </g>
        );
      })}
      <rect
        x="415"
        y="350"
        width="315"
        height="42"
        rx="21"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="2"
      />
      <text x="572" y="376" textAnchor="middle" fontSize="14" fill="#0d1b2a">
        OrderDate &gt;= #1/1/2024#
      </text>
    </svg>
  );
}
