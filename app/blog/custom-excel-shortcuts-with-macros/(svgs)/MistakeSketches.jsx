// /app/blog/custom-excel-shortcuts-with-macros/(svgs)/MistakeSketches.jsx
//
// Five small "Avoid" vs "Do this" sketches for the common-mistakes cards.
// Decorative (aria-hidden): each card heading carries the meaning.
// Colours (hard-coded): avoid = #8a93a0 slate, #f7f8f9 $light-bg,
// #4a5568 $text-secondary. do = #046999 $accent, #e8f4fa $accent-light.

import React from "react";

const AVOID = { stroke: "#8a93a0", fill: "#f7f8f9", text: "#4a5568" };
const DO = { stroke: "#046999", fill: "#e8f4fa", text: "#046999" };
const INK = "#0d1b2a";

function Frame({ children }) {
  return (
    <svg
      viewBox="0 0 360 168"
      fontFamily="aptos, sans-serif"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

function Panel({ kind, children }) {
  const avoid = kind === "avoid";
  const c = avoid ? AVOID : DO;
  const x = avoid ? 4 : 184;
  return (
    <g>
      <rect
        x={x}
        y="4"
        width="172"
        height="160"
        rx="14"
        fill={c.fill}
        stroke={c.stroke}
        strokeWidth="1.5"
        strokeDasharray={avoid ? "6 5" : undefined}
      />
      <text
        x={x + 86}
        y="28"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        letterSpacing="1.5"
        fill={c.text}
      >
        {avoid ? "AVOID" : "DO THIS"}
      </text>
      {children}
    </g>
  );
}

function Caption({ cx, y = 148, kind, children }) {
  return (
    <text
      x={cx}
      y={y}
      textAnchor="middle"
      fontSize="14"
      fontWeight="600"
      fill={kind === "avoid" ? AVOID.text : DO.text}
    >
      {children}
    </text>
  );
}

function File({ x, y, w = 52, h = 64, kind, label }) {
  const c = kind === "avoid" ? AVOID : DO;
  const fold = 12;
  return (
    <g>
      <path
        d={`M${x} ${y}h${w - fold}l${fold} ${fold}v${h - fold}h-${w}z`}
        fill="#ffffff"
        stroke={c.stroke}
        strokeWidth="2"
        strokeDasharray={kind === "avoid" ? "5 4" : undefined}
        strokeLinejoin="round"
      />
      {label ? (
        <text
          x={x + w / 2}
          y={y + h / 2 + 10}
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill={INK}
        >
          {label}
        </text>
      ) : null}
    </g>
  );
}

function Badge({ cx, cy, good }) {
  const c = good ? DO.stroke : AVOID.stroke;
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r="11"
        fill={good ? "#046999" : "#ffffff"}
        stroke={c}
        strokeWidth="2"
      />
      {good ? (
        <path
          d={`M${cx - 5} ${cy}l3.5 3.5L${cx + 5} ${cy - 4}`}
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d={`M${cx - 4} ${cy - 4}l8 8M${cx + 4} ${cy - 4}l-8 8`}
          stroke={c}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      )}
    </g>
  );
}

function Mini({ x, y, w = 40, h = 52, kind, children }) {
  const c = kind === "avoid" ? AVOID : DO;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="8"
        fill="#ffffff"
        stroke={c.stroke}
        strokeWidth="2"
        strokeDasharray={kind === "avoid" ? "5 4" : undefined}
      />
      {children}
    </g>
  );
}

/* 1. Save as .xlsx instead of .xlsm */
export function SaveFormatSketch() {
  return (
    <Frame>
      <Panel kind="avoid">
        <File x={64} y={44} kind="avoid" label=".xlsx" />
        <Badge cx={122} cy={50} />
        <Caption cx={90} kind="avoid">
          macro lost
        </Caption>
      </Panel>
      <Panel kind="do">
        <File x={244} y={44} kind="do" label=".xlsm" />
        <Badge cx={302} cy={50} good />
        <Caption cx={270} kind="do">
          macro kept
        </Caption>
      </Panel>
    </Frame>
  );
}

/* 2. A shortcut Excel already uses */
export function KeyClashSketch() {
  const cap = (x, y, letter, kind) => {
    const c = kind === "avoid" ? AVOID : DO;
    return (
      <g>
        <rect
          x={x}
          y={y}
          width="56"
          height="56"
          rx="11"
          fill="#ffffff"
          stroke={c.stroke}
          strokeWidth="2"
          strokeDasharray={kind === "avoid" ? "5 4" : undefined}
        />
        <text
          x={x + 28}
          y={y + 38}
          textAnchor="middle"
          fontSize="26"
          fontWeight="700"
          fill={INK}
        >
          {letter}
        </text>
      </g>
    );
  };
  return (
    <Frame>
      <Panel kind="avoid">
        <rect
          x="26"
          y="44"
          width="112"
          height="40"
          rx="8"
          fill="#ffffff"
          stroke={AVOID.stroke}
          strokeWidth="2"
          strokeDasharray="5 4"
        />
        <text x="82" y="69" textAnchor="middle" fontSize="14" fill={AVOID.text}>
          Excel’s own
        </text>
        {cap(106, 74, "U", "avoid")}
        <Caption cx={90} kind="avoid">
          clash
        </Caption>
      </Panel>
      <Panel kind="do">
        {cap(242, 56, "K", "do")}
        <Caption cx={270} kind="do">
          free letter
        </Caption>
      </Panel>
    </Frame>
  );
}

/* 3. No backup, no undo */
export function BackupSketch() {
  return (
    <Frame>
      <Panel kind="avoid">
        <rect
          x="22"
          y="46"
          width="72"
          height="56"
          rx="8"
          fill="#ffffff"
          stroke={AVOID.stroke}
          strokeWidth="2"
          strokeDasharray="5 4"
        />
        <path
          d="M22 65h72M22 83h72M46 46v56M70 46v56"
          stroke={AVOID.stroke}
          strokeWidth="1.5"
        />
        <path
          d="M112 78h26a12 12 0 0 1 0 24h-10M120 70l-8 8 8 8"
          fill="none"
          stroke={AVOID.stroke}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M108 106 154 60"
          stroke="#c0392b"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <Caption cx={90} kind="avoid">
          no undo
        </Caption>
      </Panel>
      <Panel kind="do">
        <File x={202} y={46} w={40} h={52} kind="do" />
        <path
          d="M250 72h20M264 66l6 6-6 6"
          fill="none"
          stroke={DO.stroke}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <File x={278} y={46} w={40} h={52} kind="do" />
        <text x="222" y="118" textAnchor="middle" fontSize="14" fill={DO.text}>
          file
        </text>
        <text x="298" y="118" textAnchor="middle" fontSize="14" fill={DO.text}>
          backup
        </text>
        <Caption cx={270} kind="do">
          backup first
        </Caption>
      </Panel>
    </Frame>
  );
}

/* 4. Hard-coded ranges */
export function RangeSketch() {
  const rows = [0, 1, 2, 3];
  const grid = (x0, kind, covered) => {
    const c = kind === "avoid" ? AVOID : DO;
    return (
      <g>
        {rows.map((r) => (
          <g key={r}>
            <rect
              x={x0}
              y={44 + r * 18}
              width="108"
              height="14"
              rx="3"
              fill="#ffffff"
              stroke={c.stroke}
              strokeWidth="1.2"
              strokeOpacity={r < covered ? 1 : 0.5}
            />
            <rect
              x={x0 + 8}
              y={48 + r * 18}
              width={30 + (r % 2) * 14}
              height="6"
              rx="3"
              fill={c.stroke}
              fillOpacity={r < covered ? 0.9 : 0.4}
            />
          </g>
        ))}
        <rect
          x={x0 - 4}
          y="40"
          width="116"
          height={covered * 18 + 4}
          rx="6"
          fill="none"
          stroke={c.stroke}
          strokeWidth="2.2"
          strokeDasharray={kind === "avoid" ? "5 4" : undefined}
        />
      </g>
    );
  };
  return (
    <Frame>
      <Panel kind="avoid">
        {grid(36, "avoid", 2)}
        <Caption cx={90} kind="avoid">
          misses rows
        </Caption>
      </Panel>
      <Panel kind="do">
        {grid(216, "do", 4)}
        <Caption cx={270} kind="do">
          covers them all
        </Caption>
      </Panel>
    </Frame>
  );
}

/* 5. Every macro copied into every workbook */
export function StorageSketch() {
  const code = (cx, cy, kind) => (
    <text
      x={cx}
      y={cy}
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill={kind === "avoid" ? AVOID.text : DO.text}
    >
      {"</>"}
    </text>
  );
  return (
    <Frame>
      <Panel kind="avoid">
        {[22, 68, 114].map((x) => (
          <Mini key={x} x={x} y={46} w={44} kind="avoid">
            {code(x + 22, 76, "avoid")}
          </Mini>
        ))}
        <Caption cx={90} kind="avoid">
          3 copies to fix
        </Caption>
      </Panel>
      <Panel kind="do">
        <Mini x={248} y={38} w={44} h={40} kind="do">
          {code(270, 63, "do")}
        </Mini>
        <path
          d="M270 78v14M222 92h96M222 92v8M270 92v8M318 92v8"
          fill="none"
          stroke={DO.stroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {[204, 252, 300].map((x) => (
          <rect
            key={x}
            x={x}
            y="100"
            width="36"
            height="26"
            rx="5"
            fill="#ffffff"
            stroke={DO.stroke}
            strokeWidth="2"
          />
        ))}
        <Caption cx={270} kind="do">
          1 copy, everywhere
        </Caption>
      </Panel>
    </Frame>
  );
}
