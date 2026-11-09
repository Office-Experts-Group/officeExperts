// app/services/power-pivot/(svgs)/RowLimitSvg.jsx
// Decorative illustration for the intro: a worksheet stopping at Excel's row limit,
// with the Power Pivot Data Model sitting beneath it with no worksheet limit.
// Colours are hex values of the globals.scss tokens ($light-bg, $line, $text-muted,
// $text-primary, $accent) because SVG attributes cannot read SCSS variables.

// Cell fill widths for the four visible example rows (one value per column)
const rows = [
  [52, 64, 40],
  [60, 36, 56],
  [44, 58, 48],
  [64, 42, 36],
];

// Bar heights for the compressed column visual inside the model
const columns = [34, 48, 26, 52, 40, 30, 50, 36, 44, 28, 46];

export const RowLimitSvg = () => (
  <svg
    viewBox="0 0 520 408"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    role="presentation"
  >
    <rect width="520" height="408" rx="24" fill="#f7f8f9" />

    {/* Worksheet window */}
    <rect x="32" y="32" width="456" height="180" rx="14" fill="#ffffff" stroke="#e3e8ec" />
    <path d="M32 56V46a14 14 0 0 1 14-14h428a14 14 0 0 1 14 14v10z" fill="#f2f3f5" />
    <g stroke="#e3e8ec">
      <path d="M76 32V212M196 32V212M316 32V212M436 32V212" />
      <path d="M32 82H488M32 108H488M32 134H488M32 160H488M32 186H488" />
    </g>

    {/* Row numbers, then an ellipsis and the final row */}
    <g fontSize="11" fill="#9a9da1" textAnchor="middle">
      <text x="54" y="73">1</text>
      <text x="54" y="99">2</text>
      <text x="54" y="125">3</text>
      <text x="54" y="151">4</text>
      <text x="54" y="177">⋮</text>
      <text x="54" y="203">1,048,576</text>
    </g>

    {/* Placeholder cell contents */}
    <g fill="#e3e8ec">
      {rows.map((cells, r) =>
        cells.map((w, c) => (
          <rect
            key={`${r}-${c}`}
            x={92 + c * 120}
            y={64 + r * 26}
            width={w}
            height="8"
            rx="4"
          />
        )),
      )}
      <rect x="92" y="194" width="48" height="8" rx="4" />
    </g>

    {/* The limit marker */}
    <path d="M32 235H488" stroke="#9a9da1" strokeDasharray="5 5" />
    <rect x="130" y="222" width="260" height="26" rx="13" fill="#0d1b2a" />
    <text x="260" y="239" fontSize="10" fontWeight="700" letterSpacing="1.5" fill="#ffffff" textAnchor="middle">
      WORKSHEET LIMIT: 1,048,576 ROWS
    </text>

    {/* Data Model block */}
    <rect x="32" y="262" width="456" height="126" rx="14" fill="#046999" />
    <text x="52" y="290" fontSize="14" fontWeight="700" fill="#ffffff">
      Power Pivot Data Model
    </text>
    <text x="468" y="290" fontSize="10" fontWeight="700" letterSpacing="1.5" fill="#ffffff" fillOpacity="0.65" textAnchor="end">
      NO WORKSHEET LIMIT
    </text>
    <g fill="#ffffff">
      {columns.map((h, i) => (
        <rect
          key={i}
          x={52 + i * 38}
          y={372 - h}
          width="24"
          height={h}
          rx="4"
          fillOpacity={0.3 + (i % 4) * 0.2}
        />
      ))}
    </g>
  </svg>
);
