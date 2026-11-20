// /app/services/microsoft-access/access-database-optimisation-and-repair/(svgs)/AorIntroDiagram.jsx
// Informative diagram: how an Access file grows and fragments, and what compact and repair does.
// Hex values -> tokens:
//   #ffffff $white, #046999 $accent, #c0392b $replace-x, #0d1b2a $text-primary,
//   #4a5568 $text-secondary, #9a9da1 $text-muted, #d4d6d9 $line-strong, #e3e8ec $line
import React from "react";

const CELL_W = 24;
const CELL_H = 16;
const GAP = 5;

// u = your data, d = gap left by a deleted record, t = temporary object, . = empty slot
const AOR_STAGES = [
  { x: 24, w: 150, h: 70, cols: 4, pad: 14, cells: "uuuuuu..", bar: 38 },
  {
    x: 268,
    w: 190,
    h: 126,
    cols: 6,
    pad: 11,
    cells: "uduutuuudtudtuuudutuuudtuutudu".slice(0, 30),
    bar: 176,
    bloated: true,
  },
  {
    x: 552,
    w: 190,
    h: 84,
    cols: 6,
    pad: 11,
    cells: "uuuuuuuuuuuuuuuu..",
    bar: 96,
  },
];

const renderCell = (kind, x, y, w, key) => {
  if (kind === "u")
    return (
      <rect
        key={key}
        x={x}
        y={y}
        width={w}
        height={CELL_H}
        rx="3"
        fill="#046999"
      />
    );
  if (kind === "d")
    return (
      <rect
        key={key}
        x={x}
        y={y}
        width={w}
        height={CELL_H}
        rx="3"
        fill="none"
        stroke="#c0392b"
        strokeWidth="1.5"
        strokeDasharray="3 2"
      />
    );
  if (kind === "t")
    return (
      <rect
        key={key}
        x={x}
        y={y}
        width={w}
        height={CELL_H}
        rx="3"
        fill="#9a9da1"
        opacity="0.45"
      />
    );
  return (
    <rect
      key={key}
      x={x}
      y={y}
      width={w}
      height={CELL_H}
      rx="3"
      fill="none"
      stroke="#d4d6d9"
      strokeDasharray="2 3"
    />
  );
};

const AorIntroDiagram = () => (
  <svg
    viewBox="0 0 770 320"
    role="img"
    aria-labelledby="aor-intro-diagram-title aor-intro-diagram-desc"
    fontFamily="aptos"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    <title id="aor-intro-diagram-title">
      How an Access file bloats and what compact and repair does
    </title>
    <desc id="aor-intro-diagram-desc">
      Three file blocks left to right. A new file is small and tidy. After a
      year of use the file is large, with gaps left by deleted records and
      temporary objects. After compact and repair the data is packed tightly and
      the file is smaller.
    </desc>

    {AOR_STAGES.map((stage, s) => (
      <g key={stage.x}>
        <rect
          x={stage.x}
          y="50"
          width={stage.w}
          height={stage.h}
          rx="12"
          fill="#ffffff"
          stroke={stage.bloated ? "#c0392b" : "#d4d6d9"}
          strokeWidth="1.5"
        />
        {stage.cells.split("").map((kind, i) => {
          const col = i % stage.cols;
          const row = Math.floor(i / stage.cols);
          const w = stage.cols === 4 ? 26 : CELL_W;
          const gap = stage.cols === 4 ? 6 : GAP;
          return renderCell(
            kind,
            stage.x + stage.pad + 2 + col * (w + gap),
            62 + row * (CELL_H + GAP),
            w,
            `${s}-${i}`,
          );
        })}
        {/* file size bar */}
        <text x={stage.x} y="204" fontSize="14" fill="#9a9da1">
          File size
        </text>
        <rect
          x={stage.x}
          y="212"
          width={stage.w}
          height="10"
          rx="5"
          fill="#e3e8ec"
        />
        <rect
          x={stage.x}
          y="212"
          width={stage.bar}
          height="10"
          rx="5"
          fill={stage.bloated ? "#c0392b" : "#046999"}
        />
      </g>
    ))}

    {/* stage headings */}
    <text
      x="99"
      y="32"
      fontSize="16"
      fontWeight="700"
      fill="#0d1b2a"
      textAnchor="middle"
    >
      Day one
    </text>
    <text
      x="363"
      y="32"
      fontSize="16"
      fontWeight="700"
      fill="#0d1b2a"
      textAnchor="middle"
    >
      A year later
    </text>
    <text
      x="647"
      y="32"
      fontSize="16"
      fontWeight="700"
      fill="#0d1b2a"
      textAnchor="middle"
    >
      After compact &amp; repair
    </text>

    <text x="99" y="256" fontSize="14" fill="#4a5568" textAnchor="middle">
      Small and tidy
    </text>
    <text x="363" y="256" fontSize="14" fill="#4a5568" textAnchor="middle">
      Bloated, with gaps
    </text>
    <text x="647" y="256" fontSize="14" fill="#4a5568" textAnchor="middle">
      Smaller, packed tight
    </text>

    {/* arrows between the stages */}
    <g stroke="#046999" strokeWidth="2" strokeLinecap="round" fill="none">
      <path d="M186 128H254M248 122l6 6-6 6" />
      <path d="M470 128H538M532 122l6 6-6 6" />
    </g>
    <text x="220" y="100" fontSize="14" fill="#4a5568" textAnchor="middle">
      Months
    </text>
    <text x="220" y="116" fontSize="14" fill="#4a5568" textAnchor="middle">
      of use
    </text>
    <text x="504" y="100" fontSize="14" fill="#4a5568" textAnchor="middle">
      Compact
    </text>
    <text x="504" y="116" fontSize="14" fill="#4a5568" textAnchor="middle">
      &amp; repair
    </text>

    {/* badge on the repaired file */}
    <circle cx="738" cy="54" r="14" fill="#046999" />
    <path
      d="M731 54l5 5 9-10"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* legend */}
    <g>
      <rect x="24" y="288" width="16" height="16" rx="3" fill="#046999" />
      <text x="48" y="301" fontSize="14" fill="#4a5568">
        Your data
      </text>
      <rect
        x="170"
        y="288"
        width="16"
        height="16"
        rx="3"
        fill="none"
        stroke="#c0392b"
        strokeWidth="1.5"
        strokeDasharray="3 2"
      />
      <text x="194" y="301" fontSize="14" fill="#4a5568">
        Gaps left by deleted records
      </text>
      <rect
        x="440"
        y="288"
        width="16"
        height="16"
        rx="3"
        fill="#9a9da1"
        opacity="0.45"
      />
      <text x="464" y="301" fontSize="14" fill="#4a5568">
        Temporary objects
      </text>
    </g>
  </svg>
);

export default AorIntroDiagram;
