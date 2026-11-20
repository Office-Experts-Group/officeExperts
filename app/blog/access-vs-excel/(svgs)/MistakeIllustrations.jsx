// /app/blog/access-vs-excel/(svgs)/MistakeIllustrations.jsx
// Five "Avoid" vs "Do this" sketches for the common mistakes cards. Decorative: the card text
// carries the meaning, so each SVG is aria-hidden.
// Hex values map to tokens: #046999 $accent, #e8f4fa $accent-light, #ffffff $white.
// Slate shades (#f1f5f9, #cbd5e1, #94a3b8, #475569) are the neutral "avoid" palette and
// #c0392b is $replace-x, used only for tiny warning accents.

const SLATE = "#94a3b8";
const SLATE_LIGHT = "#cbd5e1";
const ACCENT = "#046999";

const Frame = ({ children }) => (
  <>
    <rect
      x="10"
      y="10"
      width="225"
      height="170"
      rx="14"
      fill="#f1f5f9"
      stroke={SLATE}
      strokeWidth="1.5"
      strokeDasharray="6 5"
    />
    <rect x="24" y="22" width="68" height="26" rx="13" fill={SLATE_LIGHT} />
    <text
      x="58"
      y="40"
      fontSize="14"
      fontWeight="700"
      fill="#475569"
      textAnchor="middle"
    >
      Avoid
    </text>
    <rect
      x="285"
      y="10"
      width="225"
      height="170"
      rx="14"
      fill="#e8f4fa"
      stroke={ACCENT}
      strokeOpacity="0.45"
      strokeWidth="1.5"
    />
    <rect x="299" y="22" width="82" height="26" rx="13" fill={ACCENT} />
    <text
      x="340"
      y="40"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      Do this
    </text>
    <path
      d="M242 95 H272"
      stroke={ACCENT}
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path d="M268 88 L280 95 L268 102 Z" fill={ACCENT} />
    {children}
  </>
);

const Svg = ({ className, children }) => (
  <svg
    className={className}
    viewBox="0 0 520 190"
    fontFamily="aptos"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Frame>{children}</Frame>
  </svg>
);

const Cyl = ({ cx, y, w = 44, h = 56, fill = ACCENT }) => (
  <g stroke={fill} strokeWidth="2" fill="none" strokeLinejoin="round">
    <ellipse cx={cx} cy={y} rx={w / 2} ry="9" fill="#ffffff" />
    <path
      d={`M${cx - w / 2} ${y} V${y + h - 9} C${cx - w / 2} ${y + h} ${cx + w / 2} ${y + h} ${cx + w / 2} ${y + h - 9} V${y}`}
      fill="#ffffff"
    />
    <path
      d={`M${cx - w / 2} ${y + h / 2 - 4} C${cx - w / 2} ${y + h / 2 + 5} ${cx + w / 2} ${y + h / 2 + 5} ${cx + w / 2} ${y + h / 2 - 4}`}
    />
  </g>
);

const MiniSheet = ({ x, y, w = 56, h = 44, stroke = ACCENT, rows = 3 }) => (
  <g>
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx="6"
      fill="#ffffff"
      stroke={stroke}
      strokeWidth="1.6"
    />
    <path d={`M${x} ${y + 12} H${x + w}`} stroke={stroke} strokeWidth="1.6" />
    {Array.from({ length: rows - 1 }).map((_, i) => (
      <path
        key={i}
        d={`M${x} ${y + 12 + ((h - 12) / rows) * (i + 1)} H${x + w}`}
        stroke={stroke}
        strokeOpacity="0.5"
      />
    ))}
    <path
      d={`M${x + w / 2} ${y + 12} V${y + h}`}
      stroke={stroke}
      strokeOpacity="0.5"
    />
  </g>
);

/* 1. Excel used as a database */
export const SketchDatabase = ({ className }) => (
  <Svg className={className}>
    <rect
      x="34"
      y="62"
      width="104"
      height="104"
      rx="6"
      fill="#ffffff"
      stroke={SLATE}
      strokeWidth="1.6"
    />
    {[78, 90, 102, 114, 126, 138, 150].map((y) => (
      <path key={y} d={`M34 ${y} H138`} stroke={SLATE_LIGHT} />
    ))}
    <path d="M86 62 V166" stroke={SLATE_LIGHT} />
    <path d="M138 62 V166" stroke={SLATE} />
    <rect x="148" y="66" width="6" height="96" rx="3" fill={SLATE_LIGHT} />
    <rect x="148" y="70" width="6" height="12" rx="3" fill={SLATE} />
    <path
      d="M200 96 a14 14 0 1 1 -4 -10"
      stroke="#c0392b"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M192 82 L198 88 L204 80"
      stroke="#c0392b"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <MiniSheet x={303} y={66} w={64} h={48} />
    <path
      d="M370 90 H392"
      stroke={ACCENT}
      strokeWidth="2"
      strokeDasharray="4 4"
    />
    <Cyl cx={430} y={76} />
    <path
      d="M335 122 V150 H430 V138"
      stroke={ACCENT}
      strokeWidth="2"
      fill="none"
      strokeDasharray="4 4"
    />
  </Svg>
);

/* 2. Duplicated data across spreadsheets */
export const SketchDuplicates = ({ className }) => (
  <Svg className={className}>
    <g transform="rotate(-6 70 110)">
      <rect
        x="34"
        y="70"
        width="70"
        height="56"
        rx="6"
        fill="#ffffff"
        stroke={SLATE}
        strokeWidth="1.6"
      />
      <path
        d="M34 84 H104 M34 100 H104 M34 114 H104 M69 84 V126"
        stroke={SLATE_LIGHT}
      />
    </g>
    <g transform="rotate(5 130 110)">
      <rect
        x="94"
        y="84"
        width="70"
        height="56"
        rx="6"
        fill="#ffffff"
        stroke={SLATE}
        strokeWidth="1.6"
      />
      <path
        d="M94 98 H164 M94 114 H164 M94 128 H164 M129 98 V140"
        stroke={SLATE_LIGHT}
      />
    </g>
    <g transform="rotate(-3 170 130)">
      <rect
        x="140"
        y="104"
        width="70"
        height="56"
        rx="6"
        fill="#ffffff"
        stroke="#c0392b"
        strokeWidth="1.6"
      />
      <path
        d="M140 118 H210 M140 134 H210 M140 148 H210 M175 118 V160"
        stroke={SLATE_LIGHT}
      />
    </g>
    <text x="46" y="168" fontSize="14" fontWeight="700" fill="#475569">
      v1
    </text>
    <text x="104" y="168" fontSize="14" fontWeight="700" fill="#475569">
      v2
    </text>
    <Cyl cx={397} y={88} />
    <MiniSheet x={316} y={64} w={52} h={40} />
    <MiniSheet x={426} y={64} w={52} h={40} />
    <MiniSheet x={371} y={150} w={52} h={24} rows={2} />
    <path
      d="M368 86 L385 94 M426 86 L409 94 M397 150 V144"
      stroke={ACCENT}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

/* 3. Skipping data validation */
export const SketchValidation = ({ className }) => (
  <Svg className={className}>
    <rect
      x="40"
      y="62"
      width="150"
      height="100"
      rx="8"
      fill="#ffffff"
      stroke={SLATE}
      strokeWidth="1.6"
    />
    {[0, 1, 2, 3].map((i) => (
      <path key={i} d={`M40 ${87 + i * 25} H190`} stroke={SLATE_LIGHT} />
    ))}
    <path d="M115 62 V162" stroke={SLATE_LIGHT} />
    <text x="52" y="80" fontSize="14" fill="#475569">
      12/3
    </text>
    <text x="127" y="105" fontSize="14" fill="#475569">
      N/A
    </text>
    <text x="52" y="130" fontSize="14" fill="#475569">
      tbc
    </text>
    <rect
      x="124"
      y="136"
      width="56"
      height="20"
      rx="4"
      fill="#c0392b"
      fillOpacity="0.14"
      stroke="#c0392b"
    />
    <path
      d="M132 146 H160"
      stroke="#c0392b"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="304"
      y="64"
      width="150"
      height="34"
      rx="8"
      fill="#ffffff"
      stroke={ACCENT}
      strokeWidth="1.8"
    />
    <rect
      x="316"
      y="77"
      width="60"
      height="8"
      rx="4"
      fill={ACCENT}
      fillOpacity="0.4"
    />
    <path
      d="M426 78 L433 86 L440 78"
      stroke={ACCENT}
      strokeWidth="2.2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="304"
      y="104"
      width="150"
      height="62"
      rx="8"
      fill="#ffffff"
      stroke={ACCENT}
      strokeOpacity="0.5"
    />
    <rect
      x="304"
      y="112"
      width="150"
      height="14"
      fill={ACCENT}
      fillOpacity="0.14"
    />
    <rect x="316" y="116" width="66" height="6" rx="3" fill={ACCENT} />
    <rect
      x="316"
      y="134"
      width="82"
      height="6"
      rx="3"
      fill={ACCENT}
      fillOpacity="0.4"
    />
    <rect
      x="316"
      y="150"
      width="54"
      height="6"
      rx="3"
      fill={ACCENT}
      fillOpacity="0.4"
    />
    <circle cx="436" cy="119" r="9" fill={ACCENT} />
    <path
      d="M431.5 119.5 L435 123 L441 116"
      stroke="#ffffff"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

/* 4. Not backing up files properly */
export const SketchBackup = ({ className }) => (
  <Svg className={className}>
    <g transform="rotate(-5 80 90)">
      <rect
        x="34"
        y="66"
        width="86"
        height="40"
        rx="6"
        fill="#ffffff"
        stroke={SLATE}
        strokeWidth="1.6"
      />
      <text x="44" y="91" fontSize="14" fill="#475569">
        final_v7
      </text>
    </g>
    <g transform="rotate(4 150 130)">
      <rect
        x="104"
        y="108"
        width="96"
        height="40"
        rx="6"
        fill="#ffffff"
        stroke="#c0392b"
        strokeWidth="1.6"
      />
      <text x="114" y="133" fontSize="14" fill="#475569">
        final_v7b
      </text>
    </g>
    <path
      d="M60 140 L72 152 M72 140 L60 152"
      stroke="#c0392b"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M326 108 a22 22 0 0 1 2 -43 a28 28 0 0 1 53 -6 a24 24 0 0 1 12 49 Z"
      fill="#ffffff"
      stroke={ACCENT}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle
      cx="470"
      cy="78"
      r="20"
      fill="#ffffff"
      stroke={ACCENT}
      strokeWidth="2"
    />
    <path
      d="M470 66 V78 L479 84"
      stroke={ACCENT}
      strokeWidth="2.2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <rect
          x={310 + i * 6}
          y={126 + i * 14}
          width="150"
          height="12"
          rx="6"
          fill="#ffffff"
          stroke={ACCENT}
          strokeOpacity={1 - i * 0.25}
        />
        <rect
          x={322 + i * 6}
          y={130 + i * 14}
          width={[70, 56, 42][i]}
          height="4"
          rx="2"
          fill={ACCENT}
          fillOpacity={0.7 - i * 0.15}
        />
      </g>
    ))}
  </Svg>
);

/* 5. Building Access without a design */
export const SketchDesign = ({ className }) => (
  <Svg className={className}>
    <rect
      x="30"
      y="64"
      width="176"
      height="98"
      rx="6"
      fill="#ffffff"
      stroke={SLATE}
      strokeWidth="1.6"
    />
    <path
      d="M30 84 H206 M30 104 H206 M30 124 H206 M30 144 H206 M92 64 V162 M150 64 V162"
      stroke={SLATE_LIGHT}
    />
    {[94, 114, 134, 154].map((y) => (
      <g key={y}>
        <rect x="38" y={y - 4} width="42" height="7" rx="3.5" fill={SLATE} />
        <rect
          x="100"
          y={y - 4}
          width="34"
          height="7"
          rx="3.5"
          fill={SLATE_LIGHT}
        />
        <rect
          x="158"
          y={y - 4}
          width="40"
          height="7"
          rx="3.5"
          fill={SLATE_LIGHT}
        />
      </g>
    ))}
    <rect
      x="30"
      y="64"
      width="62"
      height="98"
      rx="6"
      fill="#c0392b"
      fillOpacity="0.1"
    />
    <rect
      x="304"
      y="66"
      width="86"
      height="40"
      rx="8"
      fill="#ffffff"
      stroke={ACCENT}
      strokeWidth="1.8"
    />
    <path d="M304 82 H390" stroke={ACCENT} strokeWidth="1.8" />
    <rect
      x="314"
      y="92"
      width="44"
      height="6"
      rx="3"
      fill={ACCENT}
      fillOpacity="0.4"
    />
    <rect
      x="410"
      y="66"
      width="86"
      height="96"
      rx="8"
      fill="#ffffff"
      stroke={ACCENT}
      strokeWidth="1.8"
    />
    <path d="M410 82 H496" stroke={ACCENT} strokeWidth="1.8" />
    {[96, 114, 132, 150].map((y) => (
      <rect
        key={y}
        x="420"
        y={y - 3}
        width="50"
        height="6"
        rx="3"
        fill={ACCENT}
        fillOpacity="0.4"
      />
    ))}
    <path d="M390 86 H410" stroke={ACCENT} strokeWidth="2" />
    <path d="M396 80 V92" stroke={ACCENT} strokeWidth="2" />
    <path
      d="M410 86 L400 79 M410 86 L400 86 M410 86 L400 93"
      stroke={ACCENT}
      strokeWidth="2"
    />
    <path
      d="M347 106 V124"
      stroke={ACCENT}
      strokeWidth="2"
      strokeDasharray="4 4"
    />
    <rect
      x="316"
      y="124"
      width="62"
      height="38"
      rx="8"
      fill="#ffffff"
      stroke={ACCENT}
      strokeWidth="1.6"
      strokeDasharray="6 4"
    />
    <rect
      x="326"
      y="139"
      width="42"
      height="7"
      rx="3.5"
      fill={ACCENT}
      fillOpacity="0.4"
    />
  </Svg>
);
