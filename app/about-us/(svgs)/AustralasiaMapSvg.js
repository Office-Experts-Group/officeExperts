// app/about-us/(svgs)/GoodToKnowSvg.js

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
    labelAnchor: "middle",
    labelDx: 0,
    labelDy: -28,
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
    type: "tertiary",
    labelAnchor: "end",
    labelDx: -12,
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
    id: "sydney",
    label: "Sydney",
    x: 400,
    y: 420,
    type: "secondary",
    labelAnchor: "end",
    labelDx: -16,
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

  // ── Melbourne ────────────────────────────────────────────
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

const R = { hq: 22, secondary: 9, tertiary: 6 };
const DR = { hq: 8, secondary: 3.5, tertiary: 2.5 };
const FS = { hq: 10, secondary: 9.5, tertiary: 8.5 };

// ── Dark-background palette ───────────────────────────────
const COLOR = "rgba(4,105,153,1)";
const COLOR_MID = "rgba(4,105,153,0.75)";
const COLOR_DIM = "rgba(4,105,153,0.45)";
const NODE_FILL = "transparent";
const TEXT_SEC = "rgba(255,255,255,0.65)";
const TEXT_TER = "rgba(255,255,255,0.38)";
const TEXT_HQ = "rgba(255,255,255,0.88)";
const TEXT_HQ_SUB = "rgba(255,255,255,0.45)";

export const AustralasiaMapSvg = () => (
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
      <radialGradient id="hq-glow-dark" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#046999" stopOpacity="0.30" />
        <stop offset="100%" stopColor="#046999" stopOpacity="0" />
      </radialGradient>

      <style>{`
        @keyframes dash-travel-dark {
          to { stroke-dashoffset: -40; }
        }
        @keyframes pulse-hq-dark-1 {
          0%   { r: 22px; opacity: 0.55; }
          100% { r: 54px; opacity: 0;    }
        }
        @keyframes pulse-hq-dark-2 {
          0%   { r: 22px; opacity: 0.28; }
          100% { r: 72px; opacity: 0;    }
        }
        @keyframes node-appear-dark {
          from { opacity: 0; transform: scale(0.3); }
          to   { opacity: 1; transform: scale(1);   }
        }
        .gtk-conn     { stroke-dasharray: 5 5; animation: dash-travel-dark 2s   linear infinite; }
        .gtk-conn-ter { stroke-dasharray: 3 5; animation: dash-travel-dark 2.8s linear infinite; }
        .gtk-node     { transform-box: fill-box; transform-origin: center; animation: node-appear-dark 0.5s ease both; }
      `}</style>
    </defs>

    {/* ── Connection lines ── */}
    {connections.map((c, i) => (
      <line
        key={i}
        className={c.type === "tertiary" ? "gtk-conn-ter" : "gtk-conn"}
        x1={c.x1}
        y1={c.y1}
        x2={c.x2}
        y2={c.y2}
        stroke="#046999"
        strokeWidth={c.type === "tertiary" ? "0.6" : "0.9"}
        strokeOpacity={c.type === "tertiary" ? "0.18" : "0.28"}
        style={{ animationDelay: `${i * -0.22}s` }}
      />
    ))}

    {/* ── HQ ambient glow ── */}
    <circle cx={HQ.x} cy={HQ.y} r="80" fill="url(#hq-glow-dark)" />

    {/* ── HQ pulse rings ── */}
    <circle
      cx={HQ.x}
      cy={HQ.y}
      r="22"
      fill="none"
      stroke="#046999"
      strokeWidth="1"
      strokeOpacity="0.5"
      style={{ animation: "pulse-hq-dark-1 2.6s ease-out infinite" }}
    />
    <circle
      cx={HQ.x}
      cy={HQ.y}
      r="22"
      fill="none"
      stroke="#046999"
      strokeWidth="0.7"
      strokeOpacity="0.28"
      style={{ animation: "pulse-hq-dark-2 2.6s ease-out 1s infinite" }}
    />

    {/* ── Tertiary nodes ── */}
    {cities
      .filter((c) => c.type === "tertiary")
      .map((city, i) => (
        <g
          key={city.id}
          className="gtk-node"
          style={{ animationDelay: `${0.6 + i * 0.08}s` }}
        >
          <circle
            cx={city.x}
            cy={city.y}
            r={R.tertiary}
            fill={NODE_FILL}
            stroke="#046999"
            strokeWidth="0.8"
            strokeOpacity="0.35"
          />
          <circle cx={city.x} cy={city.y} r={DR.tertiary} fill={COLOR_DIM} />
          <text
            x={city.x + city.labelDx}
            y={city.y + city.labelDy}
            textAnchor={city.labelAnchor}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize={FS.tertiary}
            fontWeight="500"
            fill={TEXT_TER}
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
          className="gtk-node"
          style={{ animationDelay: `${0.3 + i * 0.07}s` }}
        >
          <circle
            cx={city.x}
            cy={city.y}
            r={R.secondary}
            fill={NODE_FILL}
            stroke="#046999"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
          <circle cx={city.x} cy={city.y} r={DR.secondary} fill={COLOR_MID} />
          <text
            x={city.x + city.labelDx}
            y={city.y + city.labelDy}
            textAnchor={city.labelAnchor}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize={FS.secondary}
            fontWeight="600"
            fill={TEXT_SEC}
            letterSpacing="0.3"
          >
            {city.label}
          </text>
        </g>
      ))}

    {/* ── HQ node ── */}
    <g className="gtk-node" style={{ animationDelay: "0.05s" }}>
      {/* Dashed outer ring */}
      <circle
        cx={HQ.x}
        cy={HQ.y}
        r={R.hq + 5}
        fill="none"
        stroke="#046999"
        strokeWidth="1"
        strokeOpacity="0.25"
        strokeDasharray="3 3"
      />
      <circle
        cx={HQ.x}
        cy={HQ.y}
        r={R.hq}
        fill={NODE_FILL}
        stroke="#046999"
        strokeWidth="2"
      />
      <circle cx={HQ.x} cy={HQ.y} r={DR.hq} fill={COLOR} />
      <text
        x={HQ.x}
        y={HQ.y - R.hq - 14}
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize={FS.hq}
        fontWeight="700"
        fill={TEXT_HQ}
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
        fill={TEXT_HQ_SUB}
        letterSpacing="1.8"
      >
        HEAD OFFICE
      </text>
    </g>
  </svg>
);
