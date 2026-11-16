// /app/blog/power-bi-for-financial-services/(svgs)/HeroSvg.jsx
// Hero illustration: scattered spreadsheets with flagged cells, feeding a star
// schema data model, feeding a secure dashboard. Sits directly on the dark hero.
// Colours (hard-coded): #111820 $dark-bg, #18232e $dark-surface, #1a2a3a $dark-mid,
// #046999 $accent, #6fc3e8 $accent-on-dark, #ffffff $white, #e57368 small alert accent.

import React from "react";

const FLAG = "#e57368";
const ACCENT = "#046999";
const ACCENT_ON_DARK = "#6fc3e8";

// One scattered spreadsheet: header row, grid, number bars and flagged cells.
const Sheet = ({ x, y, rot, flags }) => {
  const colW = 42;
  const headH = 20;
  const rowH = 18;
  const w = colW * 3;
  const h = headH + rowH * 5;
  const bars = [
    [22, 14, 26],
    [16, 24, 12],
    [26, 18, 20],
    [12, 28, 16],
    [24, 14, 22],
  ];
  const isFlag = (c, r) => flags.some(([fc, fr]) => fc === c && fr === r);

  return (
    <g transform={`translate(${x} ${y}) rotate(${rot} ${w / 2} ${h / 2})`}>
      <rect
        width={w}
        height={h}
        rx="6"
        fill="#18232e"
        stroke="#ffffff"
        strokeOpacity="0.22"
      />
      <rect width={w} height={headH} rx="6" fill="#1f3a50" />
      <rect y="10" width={w} height="10" fill="#1f3a50" />
      {[1, 2].map((i) => (
        <line
          key={`v${i}`}
          x1={colW * i}
          y1="0"
          x2={colW * i}
          y2={h}
          stroke="#ffffff"
          strokeOpacity="0.14"
        />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={`h${i}`}
          x1="0"
          y1={headH + rowH * i}
          x2={w}
          y2={headH + rowH * i}
          stroke="#ffffff"
          strokeOpacity="0.14"
        />
      ))}
      {[0, 1, 2].map((c) => (
        <rect
          key={`hd${c}`}
          x={colW * c + 8}
          y="7"
          width="22"
          height="6"
          rx="3"
          fill={ACCENT_ON_DARK}
          opacity="0.8"
        />
      ))}
      {bars.map((row, r) =>
        row.map((bw, c) => {
          const cx = colW * c;
          const cy = headH + rowH * r;
          return (
            <g key={`${r}-${c}`}>
              {isFlag(c, r) && (
                <>
                  <rect
                    x={cx + 1}
                    y={cy + 1}
                    width={colW - 2}
                    height={rowH - 2}
                    fill={FLAG}
                    opacity="0.22"
                  />
                  <path
                    d={`M${cx + colW - 9} ${cy + 1}H${cx + colW - 1}V${cy + 9}z`}
                    fill={FLAG}
                  />
                </>
              )}
              <rect
                x={cx + 8}
                y={cy + 6}
                width={Math.min(bw, colW - 16)}
                height="6"
                rx="3"
                fill="#ffffff"
                opacity="0.38"
              />
            </g>
          );
        }),
      )}
    </g>
  );
};

const Lookup = ({ x, y }) => (
  <g>
    <rect
      x={x}
      y={y}
      width="56"
      height="38"
      rx="6"
      fill="#18232e"
      stroke={ACCENT_ON_DARK}
      strokeOpacity="0.6"
    />
    <rect
      x={x + 8}
      y={y + 8}
      width="28"
      height="5"
      rx="2.5"
      fill={ACCENT_ON_DARK}
    />
    <rect
      x={x + 8}
      y={y + 18}
      width="38"
      height="4"
      rx="2"
      fill="#ffffff"
      opacity="0.35"
    />
    <rect
      x={x + 8}
      y={y + 26}
      width="30"
      height="4"
      rx="2"
      fill="#ffffff"
      opacity="0.35"
    />
  </g>
);

export default function HeroSvg() {
  return (
    <svg
      viewBox="0 0 600 500"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="pbifs-hero-title pbifs-hero-desc"
      fontFamily="aptos"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="pbifs-hero-title">
        Scattered spreadsheets becoming a secure Power BI dashboard
      </title>
      <desc id="pbifs-hero-desc">
        Three spreadsheets with flagged cells feed a star schema data model made
        of a central table and four lookup tables. The model feeds a dashboard
        with KPI tiles, a bar chart, a trend line and a donut chart, protected
        by a shield badge.
      </desc>

      <defs>
        <marker
          id="pbifs-hero-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto"
        >
          <path d="M0 0L10 5L0 10z" fill={ACCENT_ON_DARK} />
        </marker>
        <linearGradient id="pbifs-hero-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={ACCENT_ON_DARK} stopOpacity="0.4" />
          <stop offset="1" stopColor={ACCENT_ON_DARK} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Stage 1: scattered spreadsheets */}
      <Sheet
        x={8}
        y={52}
        rot={-3}
        flags={[
          [1, 1],
          [2, 3],
        ]}
      />
      <Sheet
        x={20}
        y={200}
        rot={2}
        flags={[
          [0, 2],
          [1, 4],
          [2, 0],
        ]}
      />
      <Sheet
        x={6}
        y={350}
        rot={-2}
        flags={[
          [2, 1],
          [0, 3],
        ]}
      />

      {/* Flow from sheets into the model */}
      <g
        fill="none"
        stroke={ACCENT_ON_DARK}
        strokeWidth="2"
        strokeDasharray="5 6"
        strokeLinecap="round"
        markerEnd="url(#pbifs-hero-arrow)"
      >
        <path d="M140 107C185 107 180 224 207 226" />
        <path d="M152 255C175 255 185 236 207 236" />
        <path d="M138 405C185 405 180 248 207 246" />
      </g>

      {/* Stage 2: star schema data model */}
      <g stroke={ACCENT_ON_DARK} strokeOpacity="0.55" strokeWidth="2">
        <line x1="248" y1="156" x2="248" y2="205" />
        <line x1="248" y1="267" x2="248" y2="316" />
        <line x1="286" y1="222" x2="300" y2="174" />
        <line x1="286" y1="250" x2="300" y2="298" />
      </g>
      <Lookup x={220} y={118} />
      <Lookup x={220} y={316} />
      <Lookup x={296} y={140} />
      <Lookup x={296} y={296} />
      <rect
        x="210"
        y="205"
        width="76"
        height="62"
        rx="8"
        fill={ACCENT}
        stroke={ACCENT_ON_DARK}
        strokeOpacity="0.6"
      />
      <rect
        x="222"
        y="217"
        width="40"
        height="6"
        rx="3"
        fill="#ffffff"
        opacity="0.9"
      />
      {[231, 241, 251].map((ly) => (
        <g key={ly}>
          <circle cx="226" cy={ly + 3} r="2.5" fill={ACCENT_ON_DARK} />
          <rect
            x="234"
            y={ly + 1}
            width={ly === 241 ? 34 : 42}
            height="4"
            rx="2"
            fill="#ffffff"
            opacity="0.5"
          />
        </g>
      ))}

      {/* Flow from model to dashboard */}
      <path
        d="M290 236H368"
        fill="none"
        stroke={ACCENT_ON_DARK}
        strokeWidth="2"
        strokeDasharray="5 6"
        strokeLinecap="round"
        markerEnd="url(#pbifs-hero-arrow)"
      />

      {/* Stage 3: dashboard tiles */}
      {[372, 492].map((tx, i) => (
        <g key={tx}>
          <rect
            x={tx}
            y="40"
            width="108"
            height="70"
            rx="10"
            fill="#ffffff"
            fillOpacity="0.06"
            stroke="#ffffff"
            strokeOpacity="0.14"
          />
          <rect
            x={tx + 14}
            y="54"
            width="46"
            height="6"
            rx="3"
            fill="#ffffff"
            opacity="0.4"
          />
          <rect
            x={tx + 14}
            y="70"
            width={i === 0 ? 58 : 48}
            height="16"
            rx="4"
            fill="#ffffff"
            opacity="0.9"
          />
          <path
            d={`M${tx + 14} 100h28`}
            stroke={ACCENT_ON_DARK}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d={`M${tx + 84} 92l8-8 6 6`}
            fill="none"
            stroke={ACCENT_ON_DARK}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ))}

      <rect
        x="372"
        y="126"
        width="228"
        height="150"
        rx="10"
        fill="#ffffff"
        fillOpacity="0.06"
        stroke="#ffffff"
        strokeOpacity="0.14"
      />
      <rect
        x="388"
        y="140"
        width="64"
        height="6"
        rx="3"
        fill="#ffffff"
        opacity="0.4"
      />
      <line
        x1="388"
        y1="254"
        x2="584"
        y2="254"
        stroke="#ffffff"
        strokeOpacity="0.25"
      />
      {[34, 52, 44, 68, 58, 82, 96].map((bh, i) => (
        <rect
          key={i}
          x={388 + i * 29.6}
          y={254 - bh}
          width="18"
          height={bh}
          rx="3"
          fill={i === 6 ? "#ffffff" : ACCENT_ON_DARK}
          opacity={i === 6 ? 0.95 : 0.55 + i * 0.05}
        />
      ))}
      <line
        x1="388"
        y1="188"
        x2="584"
        y2="188"
        stroke="#ffffff"
        strokeOpacity="0.5"
        strokeDasharray="4 4"
      />

      <rect
        x="372"
        y="292"
        width="138"
        height="120"
        rx="10"
        fill="#ffffff"
        fillOpacity="0.06"
        stroke="#ffffff"
        strokeOpacity="0.14"
      />
      <rect
        x="386"
        y="306"
        width="48"
        height="6"
        rx="3"
        fill="#ffffff"
        opacity="0.4"
      />
      <path
        d="M386 386L410 370L432 376L456 348L478 354L496 326V398H386z"
        fill="url(#pbifs-hero-area)"
      />
      <path
        d="M386 386L410 370L432 376L456 348L478 354L496 326"
        fill="none"
        stroke={ACCENT_ON_DARK}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="496" cy="326" r="5" fill="#ffffff" />

      <rect
        x="522"
        y="292"
        width="78"
        height="120"
        rx="10"
        fill="#ffffff"
        fillOpacity="0.06"
        stroke="#ffffff"
        strokeOpacity="0.14"
      />
      <g transform="rotate(-90 561 342)" fill="none" strokeWidth="9">
        <circle
          cx="561"
          cy="342"
          r="22"
          stroke="#ffffff"
          strokeOpacity="0.12"
        />
        <circle
          cx="561"
          cy="342"
          r="22"
          stroke={ACCENT_ON_DARK}
          strokeDasharray="78 138"
        />
        <circle
          cx="561"
          cy="342"
          r="22"
          stroke={ACCENT}
          strokeDasharray="40 138"
          strokeDashoffset="-80"
        />
        <circle
          cx="561"
          cy="342"
          r="22"
          stroke="#ffffff"
          strokeOpacity="0.6"
          strokeDasharray="14 138"
          strokeDashoffset="-122"
        />
      </g>
      {[0, 1].map((i) => (
        <g key={i}>
          <circle
            cx="540"
            cy={384 + i * 12}
            r="3"
            fill={i === 0 ? ACCENT_ON_DARK : ACCENT}
          />
          <rect
            x="548"
            y={382 + i * 12}
            width={i === 0 ? 34 : 26}
            height="4"
            rx="2"
            fill="#ffffff"
            opacity="0.4"
          />
        </g>
      ))}

      {/* Security badge */}
      <g transform="translate(-14 0)">
        <circle
          cx="588"
          cy="34"
          r="22"
          fill={ACCENT}
          stroke="#111820"
          strokeWidth="4"
        />
        <path
          d="M588 22l11 4v8c0 7-5 11-11 13-6-2-11-6-11-13v-8l11-4z"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M583 34l4 4 7-8"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Stage labels */}
      <g fill="#ffffff" fillOpacity="0.78" fontSize="15" textAnchor="middle">
        <text x="76" y="488">
          Spreadsheets
        </text>
        <text x="248" y="488">
          Data model
        </text>
        <text x="486" y="488">
          Dashboard
        </text>
      </g>
    </svg>
  );
}
