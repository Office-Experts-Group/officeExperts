// /app/blog/access-database-slow-performance/(svgs)/Illustrations.jsx
// Four small "Avoid" versus "Do this" sketches for the common mistakes cards.
// Avoid panels are slate with a dashed frame. Do panels use the accent.
// Hex to token: #046999 $accent, #e8f4fa $accent-light, #f4f6f8 $light-bg,
// #8a97a3 slate, #c0392b $replace-x (tiny accent only).
import React from "react";

const SLATE = "#8a97a3";
const ACCENT = "#046999";

function Panels({ children }) {
  return (
    <svg
      viewBox="0 0 380 170"
      aria-hidden="true"
      focusable="false"
      fontFamily="aptos, sans-serif"
    >
      {children}
    </svg>
  );
}

function Frames() {
  return (
    <>
      <rect
        x="4"
        y="4"
        width="180"
        height="162"
        rx="12"
        fill="#f4f6f8"
        stroke={SLATE}
        strokeWidth="1.5"
        strokeDasharray="5 4"
      />
      <text x="18" y="28" fontSize="14" fontWeight="700" fill="#5d6b78">
        Avoid
      </text>
      <rect
        x="196"
        y="4"
        width="180"
        height="162"
        rx="12"
        fill="#e8f4fa"
        stroke={ACCENT}
        strokeWidth="1.5"
      />
      <text x="210" y="28" fontSize="14" fontWeight="700" fill={ACCENT}>
        Do this
      </text>
    </>
  );
}

function Cyl({ x, y, w = 36, h = 40, fill, stroke, dash }) {
  return (
    <g>
      <path
        d={`M${x} ${y + 8}v${h - 16}a${w / 2} 8 0 0 0 ${w} 0v${-(h - 16)}`}
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
        strokeDasharray={dash}
      />
      <ellipse
        cx={x + w / 2}
        cy={y + 8}
        rx={w / 2}
        ry="8"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
        strokeDasharray={dash}
      />
    </g>
  );
}

function Pc({ x, y, stroke, fill = "#ffffff" }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width="34"
        height="24"
        rx="4"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
      />
      <rect x={x + 13} y={y + 24} width="8" height="4" fill={stroke} />
      <rect x={x + 8} y={y + 28} width="18" height="3" rx="1.5" fill={stroke} />
    </g>
  );
}

/* 1. Indexing every field */
export function IndexSketch() {
  const cols = [0, 1, 2, 3, 4];
  return (
    <Panels>
      <Frames />
      {cols.map((i) => (
        <g
          key={`a${i}`}
          transform={`rotate(${i % 2 ? 2 : -2} ${27 + i * 30} 100)`}
        >
          <rect
            x={16 + i * 30}
            y="62"
            width="22"
            height="84"
            rx="4"
            fill="#ffffff"
            stroke={SLATE}
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
          <rect
            x={16 + i * 30}
            y="46"
            width="22"
            height="12"
            rx="3"
            fill="#c9d1d8"
            stroke={SLATE}
          />
        </g>
      ))}
      {cols.map((i) => (
        <g key={`b${i}`}>
          <rect
            x={208 + i * 30}
            y="62"
            width="22"
            height="84"
            rx="4"
            fill="#ffffff"
            stroke={ACCENT}
            strokeWidth="1.5"
          />
          {i === 1 || i === 3 ? (
            <rect
              x={208 + i * 30}
              y="46"
              width="22"
              height="12"
              rx="3"
              fill={ACCENT}
            />
          ) : null}
        </g>
      ))}
    </Panels>
  );
}

/* 2. Copying the file instead of splitting it */
export function CopySketch() {
  const xs = [26, 76, 126];
  return (
    <Panels>
      <Frames />
      {xs.map((x, i) => (
        <g key={`a${x}`}>
          <Pc x={x} y="46" stroke={SLATE} />
          <line
            x1={x + 17}
            y1="78"
            x2={x + 17}
            y2="100"
            stroke={SLATE}
            strokeWidth="2"
            strokeDasharray="3 3"
          />
          <Cyl
            x={x + 2}
            y="100"
            w={30}
            h={38}
            fill={["#e6eaee", "#d4dae0", "#eef0f2"][i]}
            stroke={SLATE}
            dash="4 3"
          />
        </g>
      ))}
      <text
        x="60"
        y="124"
        textAnchor="middle"
        fontSize="16"
        fontWeight="700"
        fill="#c0392b"
      >
        ≠
      </text>
      <text
        x="110"
        y="124"
        textAnchor="middle"
        fontSize="16"
        fontWeight="700"
        fill="#c0392b"
      >
        ≠
      </text>
      {[218, 268, 318].map((x) => (
        <Pc key={`b${x}`} x={x} y="46" stroke={ACCENT} />
      ))}
      <path
        d="M235 78L278 106M285 78V102M335 78L292 106"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Cyl x={267} y={104} w={36} h={42} fill={ACCENT} stroke={ACCENT} />
    </Panels>
  );
}

/* 3. Compacting a shared back-end while people are connected */
export function CompactSketch() {
  return (
    <Panels>
      <Frames />
      {[
        [34, 62],
        [150, 62],
        [150, 128],
      ].map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <line
            x1={cx}
            y1={cy}
            x2="90"
            y2="100"
            stroke={SLATE}
            strokeWidth="2"
            strokeDasharray="3 3"
          />
          <circle
            cx={cx}
            cy={cy}
            r="9"
            fill="#ffffff"
            stroke={SLATE}
            strokeWidth="2"
          />
        </g>
      ))}
      <Cyl
        x={72}
        y={86}
        w={36}
        h={44}
        fill="#e6eaee"
        stroke={SLATE}
        dash="4 3"
      />
      <path
        d="M90 42l15 26H75L90 42z"
        fill="#fdecea"
        stroke="#c0392b"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <text
        x="90"
        y="64"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#c0392b"
      >
        !
      </text>
      <Cyl x={278} y={90} w={36} h={44} fill={ACCENT} stroke={ACCENT} />
      <rect
        x="330"
        y="78"
        width="26"
        height="22"
        rx="4"
        fill="#ffffff"
        stroke={ACCENT}
        strokeWidth="2"
      />
      <path
        d="M335 78v-6a8 8 0 0 1 16 0v6"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2"
      />
      <path
        d="M215 70h22a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-22a3 3 0 0 1-3-3V73a3 3 0 0 1 3-3z"
        fill="#ffffff"
        stroke={ACCENT}
        strokeWidth="2"
      />
      <path
        d="M219 88l5 5 9-10"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Panels>
  );
}

/* 4. New PC, same wobbly network */
export function NetworkSketch() {
  return (
    <Panels>
      <Frames />
      <Pc x={16} y={78} stroke={SLATE} />
      <Cyl
        x={134}
        y={74}
        w={36}
        h={44}
        fill="#e6eaee"
        stroke={SLATE}
        dash="4 3"
      />
      <path
        d="M54 92q7-14 14 0t14 0t14 0t14 0"
        fill="none"
        stroke={SLATE}
        strokeWidth="2"
        strokeDasharray="3 3"
      />
      <path
        d="M62 66a22 22 0 0 1 36 0M69 73a13 13 0 0 1 22 0"
        fill="none"
        stroke={SLATE}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="80" cy="80" r="2.5" fill={SLATE} />
      <Pc x={208} y={78} stroke={ACCENT} />
      <Cyl x={326} y={74} w={36} h={44} fill={ACCENT} stroke={ACCENT} />
      <line
        x1="248"
        y1="92"
        x2="322"
        y2="92"
        stroke={ACCENT}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle
        cx="246"
        cy="92"
        r="4"
        fill="#ffffff"
        stroke={ACCENT}
        strokeWidth="2"
      />
      <circle
        cx="324"
        cy="92"
        r="4"
        fill="#ffffff"
        stroke={ACCENT}
        strokeWidth="2"
      />
    </Panels>
  );
}
