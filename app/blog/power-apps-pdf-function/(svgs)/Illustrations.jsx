// /app/blog/power-apps-pdf-function/(svgs)/Illustrations.jsx
// Five small "Avoid" vs "Do this" sketches for the common-mistakes cards.
// Avoid panels are slate, dashed and a little messy. Do panels are accent and clean.
// Decorative only, so every sketch is aria-hidden.
// Hex values and the tokens they match:
//   #046999 $accent          #e8f4fa $accent-light     #0d1b2a $text-primary
//   #4a5568 $text-secondary  #9a9da1 $text-muted       #f7f8f9 $light-bg
//   #e3e8ec $line            #ffffff $white            #c0392b $replace-x
import React from "react";

const SLATE = "#9a9da1";
const SLATE_DARK = "#4a5568";
const ACCENT = "#046999";
const TINT = "#e8f4fa";
const INK = "#0d1b2a";

const Sketch = ({ children }) => (
  <svg
    viewBox="0 0 360 160"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    fontFamily="aptos"
  >
    {children}
  </svg>
);

// x offset 0 = Avoid panel, 180 = Do panel
const AvoidFrame = () => (
  <g>
    <rect
      x="8"
      y="8"
      width="164"
      height="144"
      rx="10"
      fill="#f7f8f9"
      stroke={SLATE}
      strokeDasharray="5 4"
    />
    <text x="20" y="28" fontSize="14" fontWeight="700" fill={SLATE_DARK}>
      Avoid
    </text>
  </g>
);

const DoFrame = () => (
  <g>
    <rect
      x="188"
      y="8"
      width="164"
      height="144"
      rx="10"
      fill="#ffffff"
      stroke={ACCENT}
      strokeOpacity="0.4"
    />
    <text x="200" y="28" fontSize="14" fontWeight="700" fill={ACCENT}>
      Do this
    </text>
  </g>
);

const Doc = ({ x, y, fill, stroke }) => (
  <g>
    <path
      d={`M${x} ${y}h24l12 12v34h-36z`}
      fill={fill}
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d={`M${x + 24} ${y}v12h12`}
      fill="none"
      stroke={stroke}
      strokeWidth="1.5"
    />
    <path
      d={`M${x + 8} ${y + 24}h20M${x + 8} ${y + 32}h14`}
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </g>
);

/* 1. Converting the live working screen instead of a PDF-only layout */
export const LiveScreenSketch = () => (
  <Sketch>
    <AvoidFrame />
    <rect x="20" y="38" width="140" height="12" rx="3" fill="#cbd2d9" />
    {[0, 1, 2].map((i) => (
      <rect
        key={i}
        x={20 + i * 44}
        y="58"
        width="38"
        height="14"
        rx="7"
        fill={SLATE}
        opacity="0.6"
      />
    ))}
    <rect
      x="20"
      y="80"
      width="78"
      height="16"
      rx="4"
      fill="none"
      stroke={SLATE}
    />
    <rect
      x="108"
      y="80"
      width="34"
      height="16"
      rx="8"
      fill="none"
      stroke={SLATE}
    />
    <circle cx="134" cy="88" r="5" fill={SLATE} />
    <path
      d="M20 106h138v34H20z"
      fill="#e1e5e9"
      stroke={SLATE}
      strokeDasharray="3 3"
    />
    <rect x="28" y="114" width="90" height="6" rx="3" fill={SLATE} />
    <rect
      x="28"
      y="126"
      width="60"
      height="6"
      rx="3"
      fill={SLATE}
      opacity="0.6"
    />

    <DoFrame />
    <rect x="200" y="38" width="140" height="16" rx="4" fill={ACCENT} />
    {[0, 1, 2].map((i) => (
      <rect
        key={i}
        x="200"
        y={62 + i * 20}
        width="140"
        height="14"
        rx="3"
        fill={TINT}
      />
    ))}
    <rect x="270" y="126" width="70" height="12" rx="6" fill={INK} />
  </Sketch>
);

/* 2. Charts, maps and Power BI tiles on the PDF screen */
export const UnsupportedSketch = () => (
  <Sketch>
    <AvoidFrame />
    <g fill={SLATE} opacity="0.65">
      <rect x="24" y="96" width="16" height="38" rx="2" />
      <rect x="46" y="76" width="16" height="58" rx="2" />
      <rect x="68" y="88" width="16" height="46" rx="2" />
      <rect x="90" y="62" width="16" height="72" rx="2" />
    </g>
    <path
      d="M24 70l22-10 22 12 22-16"
      fill="none"
      stroke={SLATE_DARK}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M138 58a14 14 0 0 1 14 14c0 10-14 26-14 26s-14-16-14-26a14 14 0 0 1 14-14z"
      fill="none"
      stroke={SLATE_DARK}
      strokeWidth="1.8"
    />
    <circle cx="138" cy="72" r="4" fill={SLATE_DARK} />
    <path
      d="M26 138L154 46"
      stroke="#c0392b"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.8"
    />

    <DoFrame />
    <rect x="200" y="38" width="140" height="16" rx="4" fill={ACCENT} />
    {[0, 1, 2, 3].map((i) => (
      <g key={i}>
        <rect
          x="200"
          y={60 + i * 20}
          width="140"
          height="16"
          fill={i % 2 ? "#f7f8f9" : "#ffffff"}
          stroke="#e3e8ec"
        />
        <rect
          x="208"
          y={66 + i * 20}
          width={58 - i * 6}
          height="5"
          rx="2.5"
          fill={SLATE_DARK}
          opacity="0.7"
        />
        <rect
          x="300"
          y={66 + i * 20}
          width="32"
          height="5"
          rx="2.5"
          fill={INK}
        />
      </g>
    ))}
  </Sketch>
);

/* 3. Calling Now() twice, so the saved name and the opened URL differ */
export const FileNameSketch = () => (
  <Sketch>
    <AvoidFrame />
    <Doc x={26} y={44} fill="#eceff2" stroke={SLATE} />
    <Doc x={110} y={44} fill="#eceff2" stroke={SLATE} />
    <text
      x="87"
      y="76"
      fontSize="20"
      fontWeight="700"
      fill="#c0392b"
      textAnchor="middle"
    >
      ≠
    </text>
    <text x="44" y="112" fontSize="14" fill={SLATE_DARK} textAnchor="middle">
      …07.pdf
    </text>
    <text x="128" y="112" fontSize="14" fill={SLATE_DARK} textAnchor="middle">
      …09.pdf
    </text>
    <text x="90" y="138" fontSize="14" fill={SLATE_DARK} textAnchor="middle">
      Two Now() calls
    </text>

    <DoFrame />
    <Doc x={206} y={44} fill={TINT} stroke={ACCENT} />
    <Doc x={290} y={44} fill={TINT} stroke={ACCENT} />
    <text
      x="268"
      y="76"
      fontSize="20"
      fontWeight="700"
      fill={ACCENT}
      textAnchor="middle"
    >
      =
    </text>
    <text x="224" y="112" fontSize="14" fill={INK} textAnchor="middle">
      …07.pdf
    </text>
    <text x="308" y="112" fontSize="14" fill={INK} textAnchor="middle">
      …07.pdf
    </text>
    <text x="270" y="138" fontSize="14" fill={ACCENT} textAnchor="middle">
      One variable
    </text>
  </Sketch>
);

/* 4. A fixed-height list that cuts rows off */
export const LongListSketch = () => (
  <Sketch>
    <AvoidFrame />
    <rect
      x="20"
      y="38"
      width="140"
      height="62"
      rx="6"
      fill="none"
      stroke={SLATE}
    />
    {[0, 1, 2].map((i) => (
      <rect
        key={i}
        x="28"
        y={44 + i * 18}
        width="116"
        height="13"
        rx="3"
        fill="#cbd2d9"
      />
    ))}
    <rect x="150" y="44" width="4" height="30" rx="2" fill={SLATE} />
    {[0, 1].map((i) => (
      <rect
        key={i}
        x="28"
        y={106 + i * 18}
        width="116"
        height="13"
        rx="3"
        fill="#cbd2d9"
        opacity="0.35"
      />
    ))}
    <path
      d="M20 100h140"
      stroke="#c0392b"
      strokeWidth="1.5"
      strokeDasharray="4 3"
      opacity="0.8"
    />

    <DoFrame />
    <rect
      x="200"
      y="38"
      width="140"
      height="104"
      rx="6"
      fill="none"
      stroke={ACCENT}
      strokeOpacity="0.5"
    />
    {[0, 1, 2, 3, 4].map((i) => (
      <rect
        key={i}
        x="208"
        y={44 + i * 19}
        width="124"
        height="14"
        rx="3"
        fill={i % 2 ? "#f7f8f9" : TINT}
      />
    ))}
  </Sketch>
);

/* 5. Saving the PDF where the people who need it cannot open it */
export const PermissionSketch = () => (
  <Sketch>
    <AvoidFrame />
    <path
      d="M24 66h24l6 8h40v42H24z"
      fill="#eceff2"
      stroke={SLATE}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <rect x="46" y="88" width="20" height="16" rx="3" fill={SLATE_DARK} />
    <path
      d="M50 88v-4a6 6 0 0 1 12 0v4"
      fill="none"
      stroke={SLATE_DARK}
      strokeWidth="2"
    />
    <path
      d="M100 96h14"
      stroke={SLATE}
      strokeWidth="1.5"
      strokeDasharray="3 3"
    />
    <circle
      cx="140"
      cy="84"
      r="9"
      fill="none"
      stroke={SLATE}
      strokeWidth="1.5"
      strokeDasharray="3 2"
    />
    <path
      d="M124 114a16 16 0 0 1 32 0"
      fill="none"
      stroke={SLATE}
      strokeWidth="1.5"
      strokeDasharray="3 2"
    />

    <DoFrame />
    <path
      d="M204 66h24l6 8h40v42h-70z"
      fill={TINT}
      stroke={ACCENT}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <rect
      x="228"
      y="88"
      width="22"
      height="16"
      rx="3"
      fill={ACCENT}
      opacity="0.25"
    />
    <path
      d="M232 96l4 4 8-8"
      fill="none"
      stroke={ACCENT}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {[300, 322].map((cx) => (
      <g key={cx}>
        <circle cx={cx} cy="82" r="8" fill={ACCENT} opacity="0.85" />
        <path
          d={`M${cx - 14} 112a14 14 0 0 1 28 0z`}
          fill={ACCENT}
          opacity="0.85"
        />
      </g>
    ))}
    <path d="M282 96h6" stroke={ACCENT} strokeWidth="1.5" />
  </Sketch>
);
