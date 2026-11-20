// /app/blog/access-database-slow-performance/(svgs)/SplitSvg.jsx
// One shared file versus a split front-end / back-end database.
// Hex to token: #046999 $accent, #e8f4fa $accent-light, #0d1b2a $text-primary,
// #4a5568 $text-secondary, #f7f8f9 $light-bg, #c0392b $replace-x (tiny accent only).
import React from "react";

const PCS_LEFT = [30, 140, 250];
const PCS_RIGHT = [415, 525, 635];

function Pc({ x, line2 }) {
  return (
    <g>
      <rect
        x={x}
        y="90"
        width="100"
        height="64"
        rx="8"
        fill="#ffffff"
        stroke="#8a97a3"
        strokeWidth="2"
      />
      <text
        x={x + 50}
        y={line2 ? 116 : 128}
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#0d1b2a"
      >
        User
      </text>
      {line2 ? (
        <text
          x={x + 50}
          y="136"
          textAnchor="middle"
          fontSize="14"
          fill="#046999"
        >
          Front-end
        </text>
      ) : null}
      <rect x={x + 40} y="154" width="20" height="8" fill="#8a97a3" />
      <rect x={x + 30} y="162" width="40" height="4" rx="2" fill="#8a97a3" />
    </g>
  );
}

export default function SplitSvg() {
  return (
    <svg
      viewBox="0 0 760 450"
      role="img"
      aria-labelledby="asp-split-title asp-split-desc"
      fontFamily="aptos, sans-serif"
    >
      <title id="asp-split-title">
        One shared file compared with a split database
      </title>
      <desc id="asp-split-desc">
        On the left, three users all open one Access file on a server, so whole
        tables cross the network and performance drops as users join. On the
        right, each user has their own front-end copy and links to a back-end
        file that holds only the tables, so only the rows you ask for travel.
      </desc>

      {/* Left panel */}
      <rect
        x="10"
        y="10"
        width="355"
        height="430"
        rx="16"
        fill="#f4f6f8"
        stroke="#dfe5ea"
      />
      <text x="30" y="44" fontSize="17" fontWeight="700" fill="#0d1b2a">
        One shared file
      </text>
      <text x="30" y="66" fontSize="14" fill="#4a5568">
        Everything runs from the server
      </text>
      {PCS_LEFT.map((x) => (
        <Pc key={x} x={x} />
      ))}
      <line
        x1="80"
        y1="168"
        x2="110"
        y2="290"
        stroke="#8a97a3"
        strokeWidth="3"
      />
      <line
        x1="190"
        y1="168"
        x2="187"
        y2="290"
        stroke="#8a97a3"
        strokeWidth="3"
      />
      <line
        x1="300"
        y1="168"
        x2="265"
        y2="290"
        stroke="#8a97a3"
        strokeWidth="3"
      />
      <rect
        x="62"
        y="201"
        width="250"
        height="42"
        rx="21"
        fill="#ffffff"
        stroke="#8a97a3"
        strokeWidth="2"
      />
      <text x="187" y="227" textAnchor="middle" fontSize="14" fill="#0d1b2a">
        Whole tables cross the network
      </text>
      <rect
        x="40"
        y="290"
        width="285"
        height="96"
        rx="12"
        fill="#ffffff"
        stroke="#8a97a3"
        strokeWidth="2"
      />
      <text x="58" y="320" fontSize="15" fontWeight="700" fill="#0d1b2a">
        Database.accdb
      </text>
      <text x="58" y="346" fontSize="14" fill="#4a5568">
        Forms, queries, reports
      </text>
      <text x="58" y="366" fontSize="14" fill="#4a5568">
        and tables, all in one file
      </text>
      <rect
        x="60"
        y="396"
        width="265"
        height="40"
        rx="20"
        fill="#fdecea"
        stroke="#f1b9b2"
      />
      <text
        x="192"
        y="421"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#8a2f25"
      >
        Slows down as users join
      </text>

      {/* Right panel */}
      <rect
        x="395"
        y="10"
        width="355"
        height="430"
        rx="16"
        fill="#e8f4fa"
        stroke="#bcd9e8"
      />
      <text x="415" y="44" fontSize="17" fontWeight="700" fill="#0d1b2a">
        Split database
      </text>
      <text x="415" y="66" fontSize="14" fill="#4a5568">
        Tables on server, forms on PCs
      </text>
      {PCS_RIGHT.map((x) => (
        <Pc key={x} x={x} line2 />
      ))}
      <line
        x1="465"
        y1="168"
        x2="495"
        y2="290"
        stroke="#046999"
        strokeWidth="2"
        strokeDasharray="5 4"
      />
      <line
        x1="575"
        y1="168"
        x2="572"
        y2="290"
        stroke="#046999"
        strokeWidth="2"
        strokeDasharray="5 4"
      />
      <line
        x1="685"
        y1="168"
        x2="650"
        y2="290"
        stroke="#046999"
        strokeWidth="2"
        strokeDasharray="5 4"
      />
      <rect
        x="452"
        y="201"
        width="240"
        height="42"
        rx="21"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="2"
      />
      <text x="572" y="227" textAnchor="middle" fontSize="14" fill="#0d1b2a">
        Only the rows you ask for
      </text>
      <rect x="425" y="290" width="285" height="96" rx="12" fill="#046999" />
      <text x="443" y="320" fontSize="15" fontWeight="700" fill="#ffffff">
        Back-end.accdb
      </text>
      <text x="443" y="346" fontSize="14" fill="#e8f4fa">
        Tables only, on the server
      </text>
      <text x="443" y="366" fontSize="14" fill="#e8f4fa">
        or SQL Server later
      </text>
      <rect
        x="445"
        y="396"
        width="265"
        height="40"
        rx="20"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="2"
      />
      <text
        x="577"
        y="421"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#046999"
      >
        Stays quick as users join
      </text>
    </svg>
  );
}
