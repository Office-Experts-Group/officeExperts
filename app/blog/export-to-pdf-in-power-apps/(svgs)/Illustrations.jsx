// /app/blog/export-to-pdf-in-power-apps/(svgs)/Illustrations.jsx
// Five "Avoid" vs "Do this" sketches for the common mistakes cards. Decorative spot art.
// Hex values map to tokens: #9a9da1 $text-muted, #4a5568 $text-secondary,
// #f7f8f9 $light-bg, #046999 $accent, #e8f4fa $accent-light, #0d1b2a $text-primary,
// #ffffff $white.
import React from "react";

const SLATE = "#9a9da1";
const SLATE_TEXT = "#4a5568";
const ACCENT = "#046999";
const TINT = "#e8f4fa";
const INK = "#0d1b2a";

function Panel({ x, good, label, children }) {
  return (
    <g transform={`translate(${x} 8)`}>
      <rect
        x="0"
        y="0"
        width="164"
        height="152"
        rx="12"
        fill={good ? TINT : "#f7f8f9"}
        stroke={good ? ACCENT : SLATE}
        strokeWidth="1.5"
        strokeDasharray={good ? undefined : "6 5"}
      />
      <text
        x="14"
        y="26"
        fontSize="14"
        fontWeight="700"
        fill={good ? ACCENT : SLATE_TEXT}
      >
        {label}
      </text>
      {children}
    </g>
  );
}

function Tile({ x, y, label, good, w = 44, h = 56 }) {
  const stroke = good ? ACCENT : SLATE;
  return (
    <g>
      <path
        d={`M${x} ${y} h${w - 14} l14 14 v${h - 14} h-${w} z`}
        fill={good ? "#ffffff" : "#eceff1"}
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d={`M${x + w - 14} ${y} v14 h14`}
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {label ? (
        <text
          x={x + w / 2}
          y={y + h - 12}
          fontSize="14"
          fontWeight="700"
          fill={good ? INK : SLATE_TEXT}
          textAnchor="middle"
        >
          {label}
        </text>
      ) : null}
    </g>
  );
}

function Arrow({ x1, x2, y, good }) {
  const c = good ? ACCENT : SLATE;
  return (
    <g>
      <path
        d={`M${x1} ${y} H${x2 - 6}`}
        stroke={c}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path d={`M${x2 - 8} ${y - 5} l8 5 -8 5 z`} fill={c} />
    </g>
  );
}

function ImageSketch() {
  return (
    <>
      <Panel x={8} label="Avoid">
        <rect
          x="40"
          y="44"
          width="84"
          height="94"
          rx="6"
          fill="#ffffff"
          stroke={SLATE}
          strokeDasharray="4 4"
        />
        <rect
          x="52"
          y="56"
          width="60"
          height="38"
          rx="4"
          fill="#eceff1"
          stroke={SLATE}
          strokeDasharray="4 3"
        />
        <path
          d="M60 64 L104 86 M104 64 L60 86"
          stroke={SLATE}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect x="52" y="104" width="56" height="6" rx="3" fill="#cfd3d6" />
        <rect x="52" y="118" width="40" height="6" rx="3" fill="#cfd3d6" />
      </Panel>
      <Panel x={188} good label="Do this">
        <rect
          x="40"
          y="44"
          width="84"
          height="94"
          rx="6"
          fill="#ffffff"
          stroke={ACCENT}
        />
        <rect
          x="52"
          y="56"
          width="60"
          height="38"
          rx="4"
          fill={TINT}
          stroke={ACCENT}
          strokeOpacity="0.5"
        />
        <path
          d="M52 94 l20 -22 12 12 8 -8 20 18 z"
          fill={ACCENT}
          fillOpacity="0.75"
        />
        <circle cx="98" cy="68" r="4" fill={ACCENT} fillOpacity="0.6" />
        <rect x="52" y="104" width="60" height="22" rx="11" fill={ACCENT} />
        <text
          x="82"
          y="120"
          fontSize="14"
          fontWeight="700"
          fill="#ffffff"
          textAnchor="middle"
        >
          base64
        </text>
      </Panel>
    </>
  );
}

function CleanupSketch() {
  return (
    <>
      <Panel x={8} label="Avoid">
        <Tile x={26} y={48} />
        <Tile x={42} y={56} />
        <Tile x={58} y={64} />
        <Tile x={74} y={72} label=".html" />
      </Panel>
      <Panel x={188} good label="Do this">
        <Tile x={18} y={58} label=".html" good />
        <Arrow x1={70} x2={96} y={90} good />
        <path
          d="M108 74 h40 l-4 54 h-32 z"
          fill="#ffffff"
          stroke={ACCENT}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M104 74 h48"
          stroke={ACCENT}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M120 68 h16"
          stroke={ACCENT}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M120 86 v32 M128 86 v32 M136 86 v32"
          stroke={ACCENT}
          strokeOpacity="0.55"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </Panel>
    </>
  );
}

function TriggerSketch() {
  return (
    <>
      <Panel x={8} label="Avoid">
        <rect
          x="14"
          y="76"
          width="56"
          height="30"
          rx="6"
          fill="#ffffff"
          stroke={SLATE}
          strokeDasharray="4 4"
        />
        <rect x="22" y="88" width="38" height="6" rx="3" fill="#cfd3d6" />
        <Arrow x1={74} x2={96} y={58} />
        <Arrow x1={74} x2={96} y={91} />
        <Arrow x1={74} x2={96} y={124} />
        <rect
          x="100"
          y="44"
          width="52"
          height="28"
          rx="5"
          fill="#eceff1"
          stroke={SLATE}
        />
        <rect
          x="100"
          y="77"
          width="52"
          height="28"
          rx="5"
          fill="#eceff1"
          stroke={SLATE}
        />
        <rect
          x="100"
          y="110"
          width="52"
          height="28"
          rx="5"
          fill="#eceff1"
          stroke={SLATE}
        />
        <g fontSize="14" fontWeight="700" fill={SLATE_TEXT} textAnchor="middle">
          <text x="126" y="63">
            PDF
          </text>
          <text x="126" y="96">
            PDF
          </text>
          <text x="126" y="129">
            PDF
          </text>
        </g>
      </Panel>
      <Panel x={188} good label="Do this">
        <rect
          x="14"
          y="76"
          width="56"
          height="30"
          rx="6"
          fill="#ffffff"
          stroke={ACCENT}
        />
        <rect
          x="22"
          y="88"
          width="38"
          height="6"
          rx="3"
          fill={ACCENT}
          fillOpacity="0.55"
        />
        <Arrow x1={74} x2={96} y={91} good />
        <rect
          x="100"
          y="77"
          width="52"
          height="28"
          rx="5"
          fill="#ffffff"
          stroke={ACCENT}
        />
        <text
          x="126"
          y="96"
          fontSize="14"
          fontWeight="700"
          fill={INK}
          textAnchor="middle"
        >
          PDF
        </text>
      </Panel>
    </>
  );
}

function FilenameSketch() {
  return (
    <>
      <Panel x={8} label="Avoid">
        <rect
          x="12"
          y="50"
          width="140"
          height="40"
          rx="8"
          fill="#ffffff"
          stroke={SLATE}
          strokeDasharray="4 4"
        />
        <text x="22" y="75" fontSize="14" fontWeight="700" fill={SLATE_TEXT}>
          Q1/Q2: plan?.pdf
        </text>
        <text x="14" y="122" fontSize="14" fill={SLATE_TEXT}>
          Not allowed: / ? :
        </text>
      </Panel>
      <Panel x={188} good label="Do this">
        <rect
          x="12"
          y="50"
          width="140"
          height="40"
          rx="8"
          fill="#ffffff"
          stroke={ACCENT}
        />
        <text x="22" y="75" fontSize="14" fontWeight="700" fill={INK}>
          Issue-42-plan.pdf
        </text>
        <text x="14" y="122" fontSize="14" fill={ACCENT}>
          Clean and unique
        </text>
      </Panel>
    </>
  );
}

function SizeSketch() {
  return (
    <>
      <Panel x={8} label="Avoid">
        <rect
          x="34"
          y="44"
          width="96"
          height="94"
          rx="6"
          fill="#ffffff"
          stroke={SLATE}
          strokeDasharray="4 4"
        />
        <rect
          x="18"
          y="56"
          width="128"
          height="58"
          rx="4"
          fill="#cfd3d6"
          stroke={SLATE}
          strokeDasharray="4 3"
        />
        <text
          x="82"
          y="91"
          fontSize="14"
          fontWeight="700"
          fill={SLATE_TEXT}
          textAnchor="middle"
        >
          8 MB photo
        </text>
        <rect x="46" y="122" width="48" height="6" rx="3" fill="#cfd3d6" />
      </Panel>
      <Panel x={188} good label="Do this">
        <rect
          x="34"
          y="44"
          width="96"
          height="94"
          rx="6"
          fill="#ffffff"
          stroke={ACCENT}
        />
        <rect
          x="46"
          y="56"
          width="36"
          height="28"
          rx="4"
          fill={TINT}
          stroke={ACCENT}
          strokeOpacity="0.5"
        />
        <path
          d="M46 84 l12 -14 8 8 5 -5 11 11 z"
          fill={ACCENT}
          fillOpacity="0.75"
        />
        <text x="46" y="104" fontSize="14" fontWeight="700" fill={ACCENT}>
          200 px logo
        </text>
        <rect
          x="46"
          y="116"
          width="72"
          height="6"
          rx="3"
          fill={ACCENT}
          fillOpacity="0.3"
        />
      </Panel>
    </>
  );
}

const SKETCHES = {
  image: ImageSketch,
  cleanup: CleanupSketch,
  trigger: TriggerSketch,
  filename: FilenameSketch,
  size: SizeSketch,
};

export default function MistakeSketch({ kind }) {
  const Sketch = SKETCHES[kind];
  if (!Sketch) return null;
  return (
    <svg
      viewBox="0 0 360 168"
      xmlns="http://www.w3.org/2000/svg"
      fontFamily="aptos"
      aria-hidden="true"
      focusable="false"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <Sketch />
    </svg>
  );
}
