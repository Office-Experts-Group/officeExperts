// /app/blog/power-bi-for-financial-services/(svgs)/MistakeSketches.jsx
// Five small "Avoid" (slate, dashed, messy) versus "Do this" (accent, clean)
// sketches, one per common mistake. Decorative: the card text carries the advice.
// Colours (hard-coded): #046999 $accent, #e8f4fa $accent-light, #0d1b2a $text-primary,
// #4a5568 $text-secondary, #ffffff $white, slate #64748b / #94a3b8 / #f1f5f9 for "Avoid",
// #e57368 small alert accent.

import React from "react";

const ACCENT = "#046999";
const LIGHT = "#e8f4fa";
const INK = "#0d1b2a";
const SLATE = "#64748b";
const SLATE_LIGHT = "#94a3b8";
const SLATE_BG = "#f1f5f9";
const FLAG = "#e57368";

const Sketch = ({ children }) => (
  <svg
    viewBox="0 0 400 150"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    fontFamily="aptos"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    {children}
  </svg>
);

// Left panel (messy) and right panel (clean) frames with their labels.
const Frames = () => (
  <>
    <rect
      x="4"
      y="10"
      width="190"
      height="130"
      rx="12"
      fill={SLATE_BG}
      stroke={SLATE}
      strokeWidth="1.5"
      strokeDasharray="6 4"
    />
    <text x="16" y="32" fontSize="14" fontWeight="700" fill={SLATE}>
      Avoid
    </text>
    <rect
      x="206"
      y="10"
      width="190"
      height="130"
      rx="12"
      fill={LIGHT}
      stroke={ACCENT}
      strokeWidth="1.5"
    />
    <text x="218" y="32" fontSize="14" fontWeight="700" fill={ACCENT}>
      Do this
    </text>
  </>
);

const Person = ({ cx, cy, color }) => (
  <g fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round">
    <circle cx={cx} cy={cy} r="5" />
    <path d={`M${cx - 8} ${cy + 16}c0-6 3.5-9 8-9s8 3 8 9`} />
  </g>
);

const Lock = ({ x, y, color }) => (
  <g fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round">
    <rect x={x} y={y + 4} width="10" height="8" rx="1.5" />
    <path d={`M${x + 2} ${y + 4}V${y + 2.5}a3 3 0 0 1 6 0V${y + 4}`} />
  </g>
);

// 1. Building every report at once versus one focused dashboard
export const SketchEverything = () => (
  <Sketch>
    <Frames />
    <g
      transform="translate(4 10)"
      stroke={SLATE_LIGHT}
      fill="#ffffff"
      strokeWidth="1.2"
    >
      {[
        [12, 40, 50, 30, -4],
        [50, 50, 60, 34, 3],
        [104, 38, 40, 26, 6],
        [138, 56, 40, 34, -5],
        [20, 78, 56, 30, 2],
        [82, 86, 50, 26, -3],
        [128, 92, 48, 22, 4],
      ].map(([x, y, w, h, r], i) => (
        <g key={i} transform={`rotate(${r} ${x + w / 2} ${y + h / 2})`}>
          <rect x={x} y={y} width={w} height={h} rx="4" />
          <rect
            x={x + 6}
            y={y + 7}
            width={w * 0.5}
            height="4"
            rx="2"
            fill={SLATE_LIGHT}
            stroke="none"
          />
          <rect
            x={x + 6}
            y={y + 15}
            width={w * 0.7}
            height="4"
            rx="2"
            fill={SLATE_LIGHT}
            stroke="none"
            opacity="0.6"
          />
        </g>
      ))}
      <circle cx="58" cy="52" r="3.5" fill={FLAG} stroke="none" />
      <circle cx="150" cy="104" r="3.5" fill={FLAG} stroke="none" />
    </g>
    <g transform="translate(206 10)">
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x={14 + i * 56}
            y="40"
            width="48"
            height="28"
            rx="6"
            fill="#ffffff"
            stroke={ACCENT}
            strokeOpacity="0.5"
          />
          <rect
            x={20 + i * 56}
            y="47"
            width="20"
            height="4"
            rx="2"
            fill={ACCENT}
            opacity="0.5"
          />
          <rect
            x={20 + i * 56}
            y="55"
            width="28"
            height="7"
            rx="2"
            fill={INK}
          />
        </g>
      ))}
      <rect
        x="14"
        y="76"
        width="160"
        height="46"
        rx="6"
        fill="#ffffff"
        stroke={ACCENT}
        strokeOpacity="0.5"
      />
      {[16, 26, 20, 32, 28, 36].map((bh, i) => (
        <rect
          key={i}
          x={26 + i * 25}
          y={114 - bh}
          width="14"
          height={bh}
          rx="3"
          fill={ACCENT}
          opacity={0.45 + i * 0.1}
        />
      ))}
    </g>
  </Sketch>
);

// 2. Skipping data quality versus checking the data first
export const SketchDataQuality = () => (
  <Sketch>
    <Frames />
    <g transform="translate(4 10)">
      <rect
        x="14"
        y="42"
        width="80"
        height="72"
        rx="5"
        fill="#ffffff"
        stroke={SLATE_LIGHT}
      />
      {[0, 1, 2].map((r) => (
        <line
          key={r}
          x1="14"
          x2="94"
          y1={60 + r * 18}
          y2={60 + r * 18}
          stroke={SLATE_LIGHT}
          opacity="0.6"
        />
      ))}
      <line
        x1="54"
        x2="54"
        y1="42"
        y2="114"
        stroke={SLATE_LIGHT}
        opacity="0.6"
      />
      {[
        [14, 60],
        [54, 78],
        [54, 96],
        [14, 42],
      ].map(([x, y], i) => (
        <g key={i}>
          <rect
            x={x + 1}
            y={y + 1}
            width="39"
            height="17"
            fill={FLAG}
            opacity="0.2"
          />
          <path d={`M${x + 31} ${y + 1}h8v8z`} fill={FLAG} />
        </g>
      ))}
      <path
        d="M100 78h18"
        stroke={SLATE}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="3 3"
      />
      <rect
        x="122"
        y="42"
        width="56"
        height="72"
        rx="5"
        fill="#ffffff"
        stroke={SLATE_LIGHT}
      />
      <path
        d="M130 100l8-34 8 26 8-40 8 36 8-22"
        fill="none"
        stroke={SLATE}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </g>
    <g transform="translate(206 10)">
      <rect
        x="14"
        y="42"
        width="80"
        height="72"
        rx="5"
        fill="#ffffff"
        stroke={ACCENT}
        strokeOpacity="0.5"
      />
      {[0, 1, 2].map((r) => (
        <line
          key={r}
          x1="14"
          x2="94"
          y1={60 + r * 18}
          y2={60 + r * 18}
          stroke={ACCENT}
          opacity="0.2"
        />
      ))}
      <line x1="54" x2="54" y1="42" y2="114" stroke={ACCENT} opacity="0.2" />
      {[0, 1, 2, 3].map((r) => (
        <g key={r}>
          <rect
            x="20"
            y={49 + r * 18}
            width="26"
            height="4"
            rx="2"
            fill={INK}
            opacity="0.55"
          />
          <path
            d={`M68 ${51 + r * 18}l4 4 8-9`}
            fill="none"
            stroke={ACCENT}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ))}
      <path
        d="M100 78h18"
        stroke={ACCENT}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M114 73l5 5-5 5"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="122"
        y="42"
        width="56"
        height="72"
        rx="5"
        fill="#ffffff"
        stroke={ACCENT}
        strokeOpacity="0.5"
      />
      <path
        d="M130 100C140 90 146 80 154 76S168 62 172 56"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="172" cy="56" r="3.5" fill={ACCENT} />
    </g>
  </Sketch>
);

// 3. One view for everyone versus role-based views with row-level security
export const SketchOneView = () => (
  <Sketch>
    <Frames />
    <g transform="translate(4 10)">
      <rect
        x="62"
        y="64"
        width="66"
        height="50"
        rx="6"
        fill="#ffffff"
        stroke={SLATE_LIGHT}
      />
      <rect x="70" y="72" width="30" height="5" rx="2.5" fill={SLATE_LIGHT} />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={72 + i * 12}
          y={104 - (10 + (i % 3) * 8)}
          width="8"
          height={10 + (i % 3) * 8}
          rx="2"
          fill={SLATE_LIGHT}
        />
      ))}
      <Person cx={30} cy={56} color={SLATE} />
      <Person cx={160} cy={56} color={SLATE} />
      <Person cx={95} cy={40} color={SLATE} />
      <g stroke={SLATE_LIGHT} strokeWidth="1.3" strokeDasharray="3 3">
        <line x1="40" y1="64" x2="64" y2="80" />
        <line x1="150" y1="64" x2="126" y2="80" />
        <line x1="95" y1="60" x2="95" y2="64" />
      </g>
    </g>
    <g transform="translate(206 10)">
      {[0, 1, 2].map((i) => {
        const x = 14 + i * 58;
        const widths = [30, 22, 36];
        return (
          <g key={i}>
            <Person cx={x + 24} cy={50} color={ACCENT} />
            <rect
              x={x}
              y="72"
              width="48"
              height="44"
              rx="6"
              fill="#ffffff"
              stroke={ACCENT}
              strokeOpacity="0.5"
            />
            <rect
              x={x + 7}
              y="80"
              width={widths[i]}
              height="5"
              rx="2.5"
              fill={ACCENT}
              opacity="0.55"
            />
            {[0, 1, 2].map((b) => (
              <rect
                key={b}
                x={x + 8 + b * 12}
                y={108 - (8 + ((b + i) % 3) * 6)}
                width="8"
                height={8 + ((b + i) % 3) * 6}
                rx="2"
                fill={ACCENT}
                opacity="0.6"
              />
            ))}
            <Lock x={x + 36} y={64} color={ACCENT} />
          </g>
        );
      })}
    </g>
  </Sketch>
);

// 4. Governance as an afterthought versus a clear workspace structure with owners
export const SketchGovernance = () => (
  <Sketch>
    <Frames />
    <g
      transform="translate(4 10)"
      stroke={SLATE_LIGHT}
      fill="#ffffff"
      strokeWidth="1.2"
    >
      {[
        [16, 48, -6],
        [60, 62, 5],
        [108, 46, -3],
        [146, 64, 7],
        [30, 88, 4],
        [88, 92, -5],
        [140, 96, 3],
      ].map(([x, y, r], i) => (
        <g key={i} transform={`rotate(${r} ${x + 11} ${y + 14})`}>
          <path d={`M${x} ${y}h16l6 6v22H${x}z`} />
          <path d={`M${x + 16} ${y}v6h6`} fill="none" />
          <rect
            x={x + 4}
            y={y + 14}
            width="12"
            height="3"
            rx="1.5"
            fill={SLATE_LIGHT}
            stroke="none"
          />
        </g>
      ))}
      {[
        [40, 56],
        [128, 54],
        [78, 100],
      ].map(([x, y], i) => (
        <text
          key={i}
          x={x}
          y={y}
          fontSize="14"
          fontWeight="700"
          fill={FLAG}
          stroke="none"
        >
          ?
        </text>
      ))}
    </g>
    <g transform="translate(206 10)">
      <rect x="55" y="42" width="80" height="22" rx="6" fill={ACCENT} />
      <rect x="66" y="50" width="38" height="5" rx="2.5" fill="#ffffff" />
      <g stroke={ACCENT} strokeWidth="1.6" strokeOpacity="0.6" fill="none">
        <path d="M95 64v10M32 74h126M32 74v10M95 74v10M158 74v10" />
      </g>
      {[
        [12, "dataset"],
        [75, "report"],
        [138, "report"],
      ].map(([x], i) => (
        <g key={i}>
          <rect
            x={x}
            y="84"
            width="40"
            height="34"
            rx="6"
            fill="#ffffff"
            stroke={ACCENT}
            strokeOpacity="0.5"
          />
          <rect
            x={x + 7}
            y="92"
            width="22"
            height="5"
            rx="2.5"
            fill={ACCENT}
            opacity="0.55"
          />
          <rect
            x={x + 7}
            y="101"
            width="26"
            height="4"
            rx="2"
            fill={INK}
            opacity="0.3"
          />
          <circle cx={x + 32} cy="110" r="4" fill={ACCENT} />
        </g>
      ))}
    </g>
  </Sketch>
);

// 5. Launching with no owner or training versus a team with a feedback loop
export const SketchOwnership = () => (
  <Sketch>
    <Frames />
    <g transform="translate(4 10)">
      <rect
        x="52"
        y="42"
        width="86"
        height="52"
        rx="6"
        fill="#ffffff"
        stroke={SLATE_LIGHT}
        strokeDasharray="5 4"
      />
      <rect x="62" y="52" width="34" height="5" rx="2.5" fill={SLATE_LIGHT} />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={62 + i * 14}
          y={86 - (8 + (i % 3) * 7)}
          width="9"
          height={8 + (i % 3) * 7}
          rx="2"
          fill={SLATE_LIGHT}
          opacity="0.7"
        />
      ))}
      <Person cx={28} cy={108} color={SLATE_LIGHT} />
      <path
        d="M44 106c10-2 12-8 18-12"
        fill="none"
        stroke={SLATE_LIGHT}
        strokeWidth="1.4"
        strokeDasharray="3 4"
      />
      <text x="150" y="68" fontSize="14" fontWeight="700" fill={FLAG}>
        ?
      </text>
    </g>
    <g transform="translate(206 10)">
      <rect
        x="52"
        y="40"
        width="86"
        height="42"
        rx="6"
        fill="#ffffff"
        stroke={ACCENT}
        strokeOpacity="0.5"
      />
      <rect
        x="62"
        y="49"
        width="34"
        height="5"
        rx="2.5"
        fill={ACCENT}
        opacity="0.55"
      />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={62 + i * 14}
          y={74 - (8 + (i % 3) * 6)}
          width="9"
          height={8 + (i % 3) * 6}
          rx="2"
          fill={ACCENT}
          opacity="0.6"
        />
      ))}
      <Person cx={44} cy={96} color={ACCENT} />
      <Person cx={95} cy={96} color={ACCENT} />
      <Person cx={146} cy={96} color={ACCENT} />
      <path
        d="M20 108C10 70 24 52 46 50M170 108c10-38-4-56-26-58"
        fill="none"
        stroke={ACCENT}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeDasharray="4 4"
        opacity="0.7"
      />
    </g>
  </Sketch>
);
