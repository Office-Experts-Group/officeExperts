// app/microsoft-consultants-sydney/(components)/SydneyMap.js
import React from "react";

// ─────────────────────────────────────────────────────────────
// ViewBox: 500 × 560
// Adapted from MelbourneMap — primary node changed to Sydney,
// Melbourne demoted to secondary, Richmond removed.
// ─────────────────────────────────────────────────────────────

const HQ = { x: 440, y: 310 };

const cities = [
  // ── Headquarters ─────────────────────────────────────────
  {
    id: "northern-rivers",
    label: "Northern Rivers NSW",
    sublabel: "Head Office",
    x: HQ.x,
    y: HQ.y,
    type: "hq",
    labelAnchor: "end",
    labelDx: -30,
    labelDy: -10,
  },

  // ── Page subject — Sydney as primary ─────────────────────
  {
    id: "sydney",
    label: "Sydney",
    sublabel: "Our consultants",
    x: 400,
    y: 420,
    type: "primary",
    labelAnchor: "end",
    labelDx: -24,
    labelDy: 6,
  },

  // ── Eastern seaboard ─────────────────────────────────────
  {
    id: "cairns",
    label: "Cairns",
    x: 448,
    y: 60,
    type: "secondary",
    labelAnchor: "end",
    labelDx: -16,
    labelDy: -4,
  },
  {
    id: "brisbane",
    label: "Brisbane",
    x: 448,
    y: 192,
    type: "secondary",
    labelAnchor: "end",
    labelDx: -16,
    labelDy: -4,
  },
  {
    id: "gold-coast",
    label: "Gold Coast",
    x: 446,
    y: 248,
    type: "secondary",
    labelAnchor: "end",
    labelDx: -16,
    labelDy: -4,
  },
  {
    id: "central-coast",
    label: "Central Coast",
    x: 448,
    y: 375,
    type: "tertiary",
    labelAnchor: "end",
    labelDx: -12,
    labelDy: -4,
  },
  {
    id: "wollongong",
    label: "Wollongong",
    x: 420,
    y: 468,
    type: "tertiary",
    labelAnchor: "end",
    labelDx: -12,
    labelDy: -4,
  },
  {
    id: "canberra",
    label: "Canberra",
    x: 340,
    y: 448,
    type: "secondary",
    labelAnchor: "end",
    labelDx: -16,
    labelDy: -4,
  },

  // ── Melbourne — now secondary ────────────────────────────
  {
    id: "melbourne",
    label: "Melbourne",
    x: 160,
    y: 510,
    type: "secondary",
    labelAnchor: "middle",
    labelDx: 0,
    labelDy: -14,
  },

  // ── Darwin ───────────────────────────────────────────────
  {
    id: "darwin",
    label: "Darwin",
    x: 80,
    y: 60,
    type: "secondary",
    labelAnchor: "start",
    labelDx: 16,
    labelDy: -4,
  },

  // ── Perth ────────────────────────────────────────────────
  {
    id: "perth",
    label: "Perth",
    x: 38,
    y: 380,
    type: "secondary",
    labelAnchor: "start",
    labelDx: 16,
    labelDy: -4,
  },

  // ── Adelaide ─────────────────────────────────────────────
  {
    id: "adelaide",
    label: "Adelaide",
    x: 108,
    y: 470,
    type: "secondary",
    labelAnchor: "start",
    labelDx: 16,
    labelDy: -4,
  },
];

// All connections radiate from HQ
const connections = cities
  .filter((c) => c.id !== "northern-rivers")
  .map((c) => ({ x1: HQ.x, y1: HQ.y, x2: c.x, y2: c.y, type: c.type }));

const R = { hq: 22, primary: 16, secondary: 9, tertiary: 6 };
const DR = { hq: 8, primary: 6, secondary: 3.5, tertiary: 2.5 };
const FS = { hq: 10, primary: 11, secondary: 9.5, tertiary: 8.5 };

const SydneyMap = () => (
  <svg
    viewBox="0 0 500 620"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Office Experts Group national coverage — Head Office Northern Rivers NSW"
    role="img"
    style={{
      width: "100%",
      height: "auto",
      display: "block",
      overflow: "visible",
    }}
  >
    <defs>
      <radialGradient id="hq-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#046999" stopOpacity="0.22" />
        <stop offset="100%" stopColor="#046999" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="syd-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#046999" stopOpacity="0.14" />
        <stop offset="100%" stopColor="#046999" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="bg-grad" cx="60%" cy="45%" r="65%">
        <stop offset="0%" stopColor="#e8f4fa" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#f7f8f9" stopOpacity="0" />
      </radialGradient>

      <style>{`
        @keyframes dash-travel {
          to { stroke-dashoffset: -40; }
        }
        @keyframes pulse-hq-1 {
          0%   { r: 22px; opacity: 0.55; }
          100% { r: 54px; opacity: 0;    }
        }
        @keyframes pulse-hq-2 {
          0%   { r: 22px; opacity: 0.28; }
          100% { r: 72px; opacity: 0;    }
        }
        @keyframes pulse-syd {
          0%   { r: 16px; opacity: 0.4; }
          100% { r: 40px; opacity: 0;   }
        }
        @keyframes node-appear {
          from { opacity: 0; transform: scale(0.3); }
          to   { opacity: 1; transform: scale(1);   }
        }
        .conn-line {
          stroke-dasharray: 5 5;
          animation: dash-travel 2s linear infinite;
        }
        .conn-line-tertiary {
          stroke-dasharray: 3 5;
          animation: dash-travel 2.8s linear infinite;
        }
        .city-node {
          transform-box: fill-box;
          transform-origin: center;
          animation: node-appear 0.5s ease both;
        }
      `}</style>
    </defs>

    {/* Background tint */}
    <rect width="500" height="620" fill="transparent" />

    {/* ── Connection lines ── */}
    {connections.map((c, i) => (
      <line
        key={i}
        className={c.type === "tertiary" ? "conn-line-tertiary" : "conn-line"}
        x1={c.x1}
        y1={c.y1}
        x2={c.x2}
        y2={c.y2}
        stroke="#046999"
        strokeWidth={c.type === "tertiary" ? "0.6" : "0.9"}
        strokeOpacity={c.type === "tertiary" ? "0.15" : "0.2"}
        style={{ animationDelay: `${i * -0.22}s` }}
      />
    ))}

    {/* ── Glow halos ── */}
    <circle cx={HQ.x} cy={HQ.y} r="80" fill="url(#hq-glow)" />
    <circle cx="400" cy="420" r="56" fill="url(#syd-glow)" />

    {/* ── HQ pulse rings ── */}
    <circle
      cx={HQ.x}
      cy={HQ.y}
      r="22"
      fill="none"
      stroke="#046999"
      strokeWidth="1"
      strokeOpacity="0.5"
      style={{ animation: "pulse-hq-1 2.6s ease-out infinite" }}
    />
    <circle
      cx={HQ.x}
      cy={HQ.y}
      r="22"
      fill="none"
      stroke="#046999"
      strokeWidth="0.7"
      strokeOpacity="0.28"
      style={{ animation: "pulse-hq-2 2.6s ease-out 1s infinite" }}
    />

    {/* ── Sydney pulse ring ── */}
    <circle
      cx="400"
      cy="420"
      r="16"
      fill="none"
      stroke="#046999"
      strokeWidth="1"
      strokeOpacity="0.35"
      style={{ animation: "pulse-syd 2.8s ease-out 0.5s infinite" }}
    />

    {/* ── Tertiary nodes ── */}
    {cities
      .filter((c) => c.type === "tertiary")
      .map((city, i) => (
        <g
          key={city.id}
          className="city-node"
          style={{ animationDelay: `${0.6 + i * 0.08}s` }}
        >
          <circle
            cx={city.x}
            cy={city.y}
            r={R.tertiary}
            fill="white"
            stroke="#046999"
            strokeWidth="0.8"
            strokeOpacity="0.3"
          />
          <circle
            cx={city.x}
            cy={city.y}
            r={DR.tertiary}
            fill="#046999"
            fillOpacity="0.4"
          />
          <text
            x={city.x + city.labelDx}
            y={city.y + city.labelDy}
            textAnchor={city.labelAnchor}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize={FS.tertiary}
            fontWeight="500"
            fill="#046999"
            fillOpacity="0.6"
            letterSpacing="0.3"
          >
            {city.label}
          </text>
        </g>
      ))}

    {/* ── Secondary nodes ── */}
    {cities
      .filter((c) => c.type === "secondary")
      .map((city, i) => (
        <g
          key={city.id}
          className="city-node"
          style={{ animationDelay: `${0.3 + i * 0.07}s` }}
        >
          <circle
            cx={city.x}
            cy={city.y}
            r={R.secondary}
            fill="white"
            stroke="#046999"
            strokeWidth="1"
            strokeOpacity="0.35"
          />
          <circle
            cx={city.x}
            cy={city.y}
            r={DR.secondary}
            fill="#046999"
            fillOpacity="0.55"
          />
          <text
            x={city.x + city.labelDx}
            y={city.y + city.labelDy}
            textAnchor={city.labelAnchor}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize={FS.secondary}
            fontWeight="600"
            fill="#046999"
            fillOpacity="0.72"
            letterSpacing="0.3"
          >
            {city.label}
          </text>
        </g>
      ))}

    {/* ── Sydney primary node ── */}
    <g className="city-node" style={{ animationDelay: "0.15s" }}>
      <circle
        cx="400"
        cy="420"
        r={R.primary}
        fill="white"
        stroke="#046999"
        strokeWidth="1.5"
      />
      <circle cx="400" cy="420" r={DR.primary} fill="#046999" />
      <text
        x="400"
        y={420 - R.primary - 10}
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize={FS.primary}
        fontWeight="700"
        fill="#046999"
        letterSpacing="0.6"
      >
        SYDNEY
      </text>
    </g>

    {/* ── Northern Rivers HQ node ── */}
    <g className="city-node" style={{ animationDelay: "0.05s" }}>
      <circle
        cx={HQ.x}
        cy={HQ.y}
        r={R.hq + 5}
        fill="none"
        stroke="#046999"
        strokeWidth="1"
        strokeOpacity="0.18"
        strokeDasharray="3 3"
      />
      <circle
        cx={HQ.x}
        cy={HQ.y}
        r={R.hq}
        fill="white"
        stroke="#046999"
        strokeWidth="2"
      />
      <circle cx={HQ.x} cy={HQ.y} r={DR.hq} fill="#046999" />
      <text
        x={HQ.x}
        y={HQ.y - R.hq - 14}
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize={FS.hq}
        fontWeight="700"
        fill="#046999"
        letterSpacing="0.6"
      >
        NORTHERN RIVERS NSW
      </text>
      <text
        x={HQ.x}
        y={HQ.y - R.hq - 4}
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="8.5"
        fontWeight="600"
        fill="#046999"
        fillOpacity="0.58"
        letterSpacing="1.8"
      >
        HEAD OFFICE
      </text>
    </g>
  </svg>
);

export default SydneyMap;
