// /app/services/microsoft-excel/(svgs)/ExcelSignArt.jsx
// Spot illustrations for ExcelSigns, one per tile, each drawn for the tile
// colour it sits on. Decorative: the tile text carries the meaning.
//
// Colours (hard-coded hex, matching globals.scss tokens):
//   #ffffff $white   #f7f8f9 $light-bg   #e3e8ec $line   #d4d6d9 $line-strong
//   #046999 $accent  #e8f4fa $accent-light  #6fc3e8 $accent-on-dark
//   #034e72 $accent-dark  #111820 $dark-bg  #18232e $dark-surface
//   #1a2a3a $dark-mid  #0d1b2a $text-primary  #4a5568 $text-secondary
//   #c53030 $error   #fff5f5 $error-bg

const svgProps = {
  "aria-hidden": "true",
  focusable: "false",
  fontFamily: "aptos",
};

// Light tile: a workbook stuck on "Opening…"
export const SlowArt = () => (
  <svg viewBox="0 0 260 160" {...svgProps}>
    <rect
      x="16"
      y="18"
      width="216"
      height="126"
      rx="12"
      fill="#ffffff"
      stroke="#e3e8ec"
    />
    <path d="M16 42h216" stroke="#e3e8ec" />
    {[30, 40, 50].map((cx) => (
      <circle key={cx} cx={cx} cy="30" r="3.5" fill="#d4d6d9" />
    ))}
    {[60, 104, 148, 192].map((x) => (
      <path key={x} d={`M${x} 42V144`} stroke="#f2f3f5" />
    ))}
    {[64, 86, 108, 130].map((y) => (
      <path key={y} d={`M16 ${y}H232`} stroke="#f2f3f5" />
    ))}
    <rect
      x="46"
      y="66"
      width="156"
      height="58"
      rx="10"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <text x="62" y="90" fontSize="14" fontWeight="600" fill="#0d1b2a">
      Opening…
    </text>
    <rect x="62" y="102" width="124" height="8" rx="4" fill="#e3e8ec" />
    <rect x="62" y="102" width="38" height="8" rx="4" fill="#046999" />
    <circle
      cx="224"
      cy="32"
      r="20"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <path
      d="M224 20v12l8 5"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Dark tile: one person tangled up in every formula
export const OneOwnerArt = () => {
  const cells = [
    [172, 22],
    [204, 50],
    [168, 78],
    [210, 104],
    [176, 128],
  ];
  return (
    <svg viewBox="0 0 260 160" {...svgProps}>
      {cells.map(([x, y], i) => (
        <path
          key={i}
          d={`M96 ${66 + i * 4}C${130 + i * 6} ${20 + i * 30} ${140 - i * 4} ${y + 30 - i * 12} ${x} ${y + 9}`}
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.3"
          strokeWidth="1.4"
        />
      ))}
      {cells.map(([x, y], i) => (
        <rect
          key={`c${i}`}
          x={x}
          y={y}
          width="34"
          height="18"
          rx="4"
          fill="#1a2a3a"
          stroke="#6fc3e8"
          strokeOpacity="0.7"
        />
      ))}
      <circle
        cx="66"
        cy="70"
        r="30"
        fill="#1a2a3a"
        stroke="#6fc3e8"
        strokeWidth="1.6"
      />
      <circle cx="66" cy="62" r="9" fill="#6fc3e8" />
      <path d="M50 86a16 13 0 0 1 32 0z" fill="#6fc3e8" />
      <rect x="28" y="112" width="76" height="28" rx="14" fill="#6fc3e8" />
      <text
        x="66"
        y="131"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#111820"
      >
        Ask Sam
      </text>
    </svg>
  );
};

// Accent tile: a grid full of errors
export const ErrorsArt = () => {
  const errors = {
    "1-0": "#REF!",
    "2-2": "#VALUE!",
    "0-3": "#N/A",
  };
  return (
    <svg viewBox="0 0 260 160" {...svgProps}>
      {[0, 1, 2].flatMap((c) =>
        [0, 1, 2, 3].map((r) => {
          const x = 14 + c * 76;
          const y = 34 + r * 30;
          const err = errors[`${c}-${r}`];
          return (
            <g key={`${c}-${r}`}>
              <rect
                x={x}
                y={y}
                width="72"
                height="26"
                rx="4"
                fill="#ffffff"
                fillOpacity={err ? 1 : 0.14}
              />
              {err ? (
                <>
                  <path d={`M${x} ${y}h9l-9 9z`} fill="#c53030" />
                  <text
                    x={x + 36}
                    y={y + 18}
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#c53030"
                  >
                    {err}
                  </text>
                </>
              ) : (
                <rect
                  x={x + 30 - ((c + r) % 3) * 6}
                  y={y + 10}
                  width={28 + ((c + r) % 3) * 6}
                  height="6"
                  rx="3"
                  fill="#ffffff"
                  fillOpacity="0.5"
                />
              )}
            </g>
          );
        }),
      )}
      <path
        d="M240 4l16 26h-32z"
        fill="#ffffff"
        stroke="#034e72"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M240 13v8"
        stroke="#046999"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="240" cy="25.5" r="1.6" fill="#046999" />
    </svg>
  );
};

// Light wide tile: three sheets copied into one by hand
export const CopyPasteArt = () => (
  <svg viewBox="0 0 240 160" {...svgProps}>
    {[18, 60, 102].map((y, i) => (
      <g key={y}>
        <rect
          x="10"
          y={y}
          width="70"
          height="36"
          rx="6"
          fill="#ffffff"
          stroke="#e3e8ec"
        />
        <path d={`M10 ${y + 12}h70M34 ${y + 12}v24`} stroke="#e3e8ec" />
        <rect
          x="40"
          y={y + 19}
          width={30 - i * 4}
          height="6"
          rx="3"
          fill={["#046999", "#6fc3e8", "#034e72"][i]}
        />
        <path
          d={`M84 ${y + 18}C110 ${y + 18} 116 ${50 + i * 22} 140 ${50 + i * 22}`}
          fill="none"
          stroke="#046999"
          strokeWidth="1.4"
          strokeDasharray="4 4"
        />
      </g>
    ))}
    <rect
      x="144"
      y="22"
      width="86"
      height="112"
      rx="8"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <path d="M144 38h86" stroke="#e3e8ec" />
    {[
      { y: 44, w: 60, c: "#046999" },
      { y: 58, w: 44, c: "#6fc3e8" },
      { y: 72, w: 66, c: "#034e72" },
      { y: 86, w: 38, c: "#6fc3e8" },
      { y: 100, w: 54, c: "#046999" },
    ].map((row) => (
      <rect
        key={row.y}
        x="154"
        y={row.y}
        width={row.w}
        height="8"
        rx="2"
        fill={row.c}
        fillOpacity="0.85"
      />
    ))}
    {[
      { x: 92, w: 44, label: "Ctrl" },
      { x: 142, w: 30, label: "V" },
    ].map((key) => (
      <g key={key.label}>
        <rect
          x={key.x}
          y="120"
          width={key.w}
          height="30"
          rx="6"
          fill="#ffffff"
          stroke="#d4d6d9"
        />
        <path
          d={`M${key.x + 3} 147h${key.w - 6}`}
          stroke="#d4d6d9"
          strokeWidth="2"
        />
        <text
          x={key.x + key.w / 2}
          y="140"
          textAnchor="middle"
          fontSize="14"
          fontWeight="600"
          fill="#0d1b2a"
        >
          {key.label}
        </text>
      </g>
    ))}
  </svg>
);

// Dark mid wide tile: which version is the real one?
export const VersionsArt = () => (
  <svg viewBox="0 0 240 160" {...svgProps}>
    {[
      { x: 10, y: 18, name: "Report_final.xlsx" },
      { x: 20, y: 62, name: "Report_final_v2.xlsx" },
      { x: 30, y: 106, name: "Report_FINAL_v7.xlsx" },
    ].map((file, i) => (
      <g key={file.name}>
        <rect
          x={file.x}
          y={file.y}
          width="196"
          height="36"
          rx="8"
          fill="#18232e"
          stroke={i === 2 ? "#6fc3e8" : "#ffffff"}
          strokeOpacity={i === 2 ? 1 : 0.18}
        />
        <rect
          x={file.x + 10}
          y={file.y + 9}
          width="14"
          height="18"
          rx="2"
          fill="#046999"
        />
        <text
          x={file.x + 32}
          y={file.y + 23}
          fontSize="14"
          fill="#ffffff"
          fillOpacity={i === 2 ? 1 : 0.65}
        >
          {file.name}
        </text>
      </g>
    ))}
    <circle cx="222" cy="22" r="14" fill="#6fc3e8" />
    <text
      x="222"
      y="28"
      textAnchor="middle"
      fontSize="16"
      fontWeight="700"
      fill="#111820"
    >
      ?
    </text>
  </svg>
);
