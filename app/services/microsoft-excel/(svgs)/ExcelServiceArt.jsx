// /app/services/microsoft-excel/(svgs)/ExcelServiceArt.jsx
// Spot illustrations for the ExcelServices bento, one per tile, each drawn
// for its tile colour. Decorative: the tile text carries the meaning.
//
// Colours (hard-coded hex, matching globals.scss tokens):
//   #ffffff $white   #f7f8f9 $light-bg   #f2f3f5 $grayBGC   #e3e8ec $line
//   #d4d6d9 $line-strong   #046999 $accent   #e8f4fa $accent-light
//   #6fc3e8 $accent-on-dark   #034e72 $accent-dark   #111820 $dark-bg
//   #18232e $dark-surface   #1a2a3a $dark-mid   #0d1b2a $text-primary
//   #4a5568 $text-secondary   #9a9da1 $text-muted

const svgProps = {
  "aria-hidden": "true",
  focusable: "false",
  fontFamily: "aptos",
};

// Accent tile: a workbook with its own ribbon tab and a data entry form
export const CustomArt = () => (
  <svg viewBox="0 0 260 160" {...svgProps}>
    <rect x="10" y="14" width="214" height="134" rx="10" fill="#ffffff" />
    <text x="24" y="38" fontSize="14" fill="#4a5568">
      Home
    </text>
    <rect x="70" y="22" width="84" height="24" rx="6" fill="#e8f4fa" />
    <text
      x="112"
      y="39"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#046999"
    >
      Our tools
    </text>
    <path d="M10 50h214" stroke="#e3e8ec" />
    {/* Custom ribbon buttons */}
    {[24, 62, 100].map((x, i) => (
      <g key={x}>
        <rect
          x={x}
          y="58"
          width="30"
          height="28"
          rx="6"
          fill="#e8f4fa"
          stroke="#046999"
          strokeOpacity="0.4"
        />
        {i === 0 && (
          <path
            d={`M${x + 7} 66h16M${x + 7} 72h16M${x + 7} 78h10`}
            stroke="#046999"
            strokeWidth="2"
            strokeLinecap="round"
          />
        )}
        {i === 1 && (
          <path
            d={`M${x + 8} 80v-6M${x + 15} 80v-12M${x + 22} 80v-9`}
            stroke="#046999"
            strokeWidth="3"
            strokeLinecap="round"
          />
        )}
        {i === 2 && (
          <path
            d={`M${x + 8} 72l5 5 9-10`}
            fill="none"
            stroke="#046999"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </g>
    ))}
    <path d="M10 94h214" stroke="#e3e8ec" />
    {[110, 126].map((y) => (
      <path key={y} d={`M10 ${y}H140`} stroke="#f2f3f5" />
    ))}
    {[50, 90].map((x) => (
      <path key={x} d={`M${x} 94V148`} stroke="#f2f3f5" />
    ))}
    {/* Data entry form floating over the sheet */}
    <rect x="146" y="68" width="106" height="84" rx="10" fill="#034e72" />
    <rect
      x="158"
      y="82"
      width="82"
      height="12"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.3"
    />
    <rect
      x="158"
      y="102"
      width="82"
      height="12"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.3"
    />
    <rect x="158" y="124" width="44" height="16" rx="4" fill="#6fc3e8" />
  </svg>
);

// Dark tile: a VBA editor with a run button
export const VbaArt = () => (
  <svg viewBox="0 0 260 160" {...svgProps}>
    <rect
      x="10"
      y="12"
      width="240"
      height="136"
      rx="10"
      fill="#111820"
      stroke="#ffffff"
      strokeOpacity="0.12"
    />
    {[26, 38, 50].map((cx) => (
      <circle
        key={cx}
        cx={cx}
        cy="28"
        r="3.5"
        fill="#ffffff"
        fillOpacity="0.25"
      />
    ))}
    <circle cx="226" cy="30" r="12" fill="#046999" />
    <path d="M222 24l10 6-10 6z" fill="#ffffff" />
    <path d="M40 44V140" stroke="#ffffff" strokeOpacity="0.1" />
    {[
      { x: 50, text: "Sub TidyData()", tone: "#6fc3e8", dim: 1 },
      { x: 64, text: "For Each c In Rng", tone: "#ffffff", dim: 0.8 },
      { x: 64, text: "c.Value = Trim(c)", tone: "#ffffff", dim: 0.8 },
      { x: 50, text: "End Sub", tone: "#6fc3e8", dim: 1 },
    ].map((line, i) => (
      <g key={line.text}>
        <rect
          x="20"
          y={52 + i * 22}
          width="12"
          height="4"
          rx="2"
          fill="#ffffff"
          fillOpacity="0.2"
        />
        <text
          x={line.x}
          y={60 + i * 22}
          fontSize="14"
          fontFamily="monospace"
          fill={line.tone}
          fillOpacity={line.dim}
        >
          {line.text}
        </text>
      </g>
    ))}
    <rect x="114" y="113" width="2" height="16" fill="#6fc3e8" />
  </svg>
);

// Light tile: a formula bar with its function tooltip and the answer cell
export const FormulaArt = () => (
  <svg viewBox="0 0 260 160" {...svgProps}>
    <rect
      x="10"
      y="16"
      width="240"
      height="32"
      rx="8"
      fill="#ffffff"
      stroke="#e3e8ec"
    />
    <text x="22" y="37" fontSize="14" fontStyle="italic" fill="#9a9da1">
      fx
    </text>
    <path d="M42 22V42" stroke="#e3e8ec" />
    <text x="52" y="37" fontSize="14" fill="#0d1b2a">
      =XLOOKUP(A2,
    </text>
    <rect x="156" y="25" width="2" height="16" fill="#046999" />
    <rect x="40" y="56" width="204" height="30" rx="6" fill="#0d1b2a" />
    <path d="M60 56l6-6 6 6z" fill="#0d1b2a" />
    <text x="52" y="76" fontSize="14" fill="#ffffff">
      XLOOKUP(lookup_value, …)
    </text>
    {[0, 1, 2].flatMap((c) =>
      [0, 1].map((r) => {
        const x = 10 + c * 82;
        const y = 100 + r * 26;
        const hit = c === 2 && r === 0;
        return (
          <g key={`${c}-${r}`}>
            <rect
              x={x}
              y={y}
              width="78"
              height="22"
              rx="4"
              fill={hit ? "#e8f4fa" : "#ffffff"}
              stroke={hit ? "#046999" : "#e3e8ec"}
              strokeWidth={hit ? 2 : 1}
            />
            {hit ? (
              <text
                x={x + 70}
                y={y + 16}
                textAnchor="end"
                fontSize="14"
                fontWeight="700"
                fill="#046999"
              >
                $1,240
              </text>
            ) : (
              <rect
                x={x + 10}
                y={y + 8}
                width={30 + ((c + r) % 2) * 14}
                height="6"
                rx="3"
                fill="#d4d6d9"
              />
            )}
          </g>
        );
      }),
    )}
  </svg>
);

// Light wide tile: mixed files funnelled into one clean table
export const DataArt = () => (
  <svg viewBox="0 0 240 160" {...svgProps}>
    {["CSV", "XML", "JSON", "SQL"].map((label, i) => (
      <g key={label}>
        <rect
          x="8"
          y={18 + i * 32}
          width="58"
          height="26"
          rx="13"
          fill="#ffffff"
          stroke="#d4d6d9"
        />
        <text
          x="37"
          y={36 + i * 32}
          textAnchor="middle"
          fontSize="14"
          fontWeight="600"
          fill="#4a5568"
        >
          {label}
        </text>
        <path
          d={`M66 ${31 + i * 32}C86 ${31 + i * 32} 88 80 104 80`}
          fill="none"
          stroke="#046999"
          strokeOpacity="0.5"
          strokeWidth="1.4"
        />
      </g>
    ))}
    <path d="M100 58h24l-6 22 6 22h-24l6-22z" fill="#046999" />
    <path
      d="M126 80h10"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="140"
      y="26"
      width="94"
      height="108"
      rx="8"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <rect x="140" y="26" width="94" height="20" rx="8" fill="#046999" />
    <rect x="140" y="38" width="94" height="8" fill="#046999" />
    {[54, 70, 86, 102, 118].map((y, i) => (
      <g key={y}>
        {i % 2 === 1 && (
          <rect x="141" y={y - 4} width="92" height="16" fill="#f7f8f9" />
        )}
        <rect x="150" y={y} width="28" height="6" rx="3" fill="#d4d6d9" />
        <rect
          x={226 - (24 + (i % 3) * 6)}
          y={y}
          width={24 + (i % 3) * 6}
          height="6"
          rx="3"
          fill="#6fc3e8"
        />
      </g>
    ))}
  </svg>
);

// Dark mid wide tile: a pivot table beside the chart it drives
export const ReportArt = () => (
  <svg viewBox="0 0 240 160" {...svgProps}>
    <rect x="8" y="18" width="104" height="124" rx="8" fill="#18232e" />
    <rect x="8" y="18" width="104" height="22" rx="8" fill="#046999" />
    <rect x="8" y="32" width="104" height="8" fill="#046999" />
    {[50, 68, 86, 104].map((y, i) => (
      <g key={y}>
        <rect
          x="18"
          y={y}
          width={30 + (i % 2) * 10}
          height="6"
          rx="3"
          fill="#ffffff"
          fillOpacity="0.45"
        />
        <rect
          x={102 - (20 + i * 4)}
          y={y}
          width={20 + i * 4}
          height="6"
          rx="3"
          fill="#6fc3e8"
        />
      </g>
    ))}
    <path d="M16 118h88" stroke="#ffffff" strokeOpacity="0.25" />
    <rect
      x="18"
      y="126"
      width="34"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.85"
    />
    <rect x="66" y="126" width="36" height="6" rx="3" fill="#ffffff" />
    {[32, 46, 40, 62, 56, 78].map((h, i) => (
      <rect
        key={i}
        x={128 + i * 18}
        y={136 - h}
        width="12"
        height={h}
        rx="3"
        fill={i === 5 ? "#6fc3e8" : "#046999"}
      />
    ))}
    <polyline
      points="134,96 152,88 170,92 188,70 206,74 224,52"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.8"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M124 136h108" stroke="#ffffff" strokeOpacity="0.25" />
  </svg>
);
