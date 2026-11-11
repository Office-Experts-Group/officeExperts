// app/test-page/(svgs)/AustralasiaMapLightSvg.js
// Light-background version of AustralasiaMapSvg: same layout, connection lines,
// pulse rings and staggered node animation, recoloured for a white surface.
// Every node is a real link to its city hub, so the home page keeps passing
// authority to the location pages. Server component, no client JS.

import Link from "next/link";

const HQ = { x: 440, y: 310 };

const cities = [
  // ── Headquarters ─────────────────────────────────────────
  {
    id: "northern-rivers",
    label: "Northern Rivers NSW",
    href: "/microsoft-consultants-northern-rivers-nsw",
    x: HQ.x,
    y: HQ.y,
    type: "hq",
  },

  // ── Eastern seaboard ─────────────────────────────────────
  {
    id: "cairns",
    label: "Cairns",
    href: "/microsoft-consultants-cairns",
    x: 448,
    y: 60,
    type: "secondary",
    labelAnchor: "end",
    labelDx: -16,
    labelDy: 4,
  },
  {
    id: "brisbane",
    label: "Brisbane",
    href: "/microsoft-consultants-brisbane",
    x: 448,
    y: 192,
    type: "secondary",
    labelAnchor: "end",
    labelDx: -16,
    labelDy: 4,
  },
  {
    id: "gold-coast",
    label: "Gold Coast",
    href: "/microsoft-consultants-gold-coast",
    x: 446,
    y: 248,
    type: "tertiary",
    labelAnchor: "end",
    labelDx: -12,
    labelDy: 3.5,
  },
  {
    id: "central-coast",
    label: "Central Coast",
    href: "/microsoft-support-and-training-central-coast-nsw",
    x: 448,
    y: 375,
    type: "tertiary",
    labelAnchor: "end",
    labelDx: -12,
    labelDy: 3.5,
  },
  {
    id: "sydney",
    label: "Sydney",
    href: "/microsoft-consultants-sydney",
    x: 400,
    y: 420,
    type: "secondary",
    labelAnchor: "end",
    labelDx: -16,
    labelDy: 4,
  },
  {
    id: "wollongong",
    label: "Wollongong",
    href: "/microsoft-consultants-wollongong",
    x: 420,
    y: 468,
    type: "tertiary",
    labelAnchor: "end",
    labelDx: -12,
    labelDy: 3.5,
  },
  {
    id: "canberra",
    label: "Canberra",
    href: "/microsoft-consultants-canberra",
    x: 340,
    y: 448,
    type: "secondary",
    labelAnchor: "end",
    labelDx: -16,
    labelDy: 4,
  },

  // ── Melbourne ────────────────────────────────────────────
  {
    id: "melbourne",
    label: "Melbourne",
    href: "/microsoft-consultants-melbourne",
    x: 160,
    y: 510,
    type: "secondary",
    labelAnchor: "middle",
    labelDx: 0,
    labelDy: -16,
  },

  // ── Darwin ───────────────────────────────────────────────
  {
    id: "darwin",
    label: "Darwin",
    href: "/microsoft-consultants-darwin",
    x: 80,
    y: 60,
    type: "secondary",
    labelAnchor: "start",
    labelDx: 16,
    labelDy: 4,
  },

  // ── Perth ────────────────────────────────────────────────
  {
    id: "perth",
    label: "Perth",
    href: "/microsoft-consultants-perth",
    x: 38,
    y: 380,
    type: "secondary",
    labelAnchor: "start",
    labelDx: 16,
    labelDy: 4,
  },

  // ── Adelaide ─────────────────────────────────────────────
  {
    id: "adelaide",
    label: "Adelaide",
    href: "/microsoft-consultants-adelaide",
    x: 108,
    y: 470,
    type: "secondary",
    labelAnchor: "start",
    labelDx: 16,
    labelDy: 4,
  },
];

const hq = cities[0];
const nodes = cities.filter((c) => c.type !== "hq");
const secondary = nodes.filter((c) => c.type === "secondary");
const tertiary = nodes.filter((c) => c.type === "tertiary");

// Outer ring radius, inner dot radius and label size for each node type
const R = { hq: 22, secondary: 9, tertiary: 6 };
const DR = { hq: 8, secondary: 3.5, tertiary: 2.5 };
const FS = { secondary: 12, tertiary: 11 };

// ── Light-background palette (mirrors globals.scss) ───────
const ACCENT = "#046999"; // $accent
const DOT_HQ = "#046999";
const DOT_SEC = "rgba(4,105,153,0.85)";
const DOT_TER = "rgba(4,105,153,0.6)";
const NODE_FILL = "#ffffff"; // opaque so connection lines don't strike through nodes
const TEXT_HQ = "#0b2433"; // $ink
const TEXT_HQ_SUB = "#4a5568"; // $text-secondary
const TEXT_SEC = "#2f3b4c";
const TEXT_TER = "#5b6676";
const HALO = "#ffffff"; // keeps labels legible where a line passes behind them

const FONT = "system-ui, -apple-system, sans-serif";

// Shared label props. paintOrder draws the white halo behind the glyphs.
const labelProps = (city, size, weight, fill) => ({
  x: city.x + city.labelDx,
  y: city.y + city.labelDy,
  textAnchor: city.labelAnchor,
  fontFamily: FONT,
  fontSize: size,
  fontWeight: weight,
  fill,
  letterSpacing: "0.3",
  stroke: HALO,
  strokeWidth: 3,
  strokeLinejoin: "round",
  paintOrder: "stroke",
  className: "hl-label",
});

export const AustralasiaMapLightSvg = () => (
  <svg
    viewBox="0 36 520 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Office Experts Group national coverage, head office in Northern Rivers NSW"
    role="group"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    <defs>
      <radialGradient id="hl-hq-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={ACCENT} stopOpacity="0.16" />
        <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
      </radialGradient>

      <style>{`
        @keyframes hl-dash-travel {
          to { stroke-dashoffset: -40; }
        }
        /* Rings are scaled rather than animating "r", which Safari ignores */
        @keyframes hl-pulse-1 {
          from { transform: scale(1);    opacity: 0.5;  }
          to   { transform: scale(2.45); opacity: 0;    }
        }
        @keyframes hl-pulse-2 {
          from { transform: scale(1);    opacity: 0.28; }
          to   { transform: scale(3.27); opacity: 0;    }
        }
        @keyframes hl-node-appear {
          from { opacity: 0; transform: scale(0.3); }
          to   { opacity: 1; transform: scale(1);   }
        }
        .hl-conn     { stroke-dasharray: 5 5; animation: hl-dash-travel 2s   linear infinite; }
        .hl-conn-ter { stroke-dasharray: 3 5; animation: hl-dash-travel 2.8s linear infinite; }
        .hl-pulse    { transform-box: fill-box; transform-origin: center; }
        .hl-pulse-1  { animation: hl-pulse-1 2.6s ease-out infinite; }
        .hl-pulse-2  { animation: hl-pulse-2 2.6s ease-out 1s infinite; }
        .hl-node     { transform-box: fill-box; transform-origin: center; animation: hl-node-appear 0.5s ease both; }

        .hl-link     { cursor: pointer; outline: none; }
        .hl-ring, .hl-label { transition: stroke-opacity 0.2s ease, fill 0.2s ease; }
        .hl-link:hover .hl-label,
        .hl-link:focus-visible .hl-label { fill: ${ACCENT}; }
        .hl-link:hover .hl-ring,
        .hl-link:focus-visible .hl-ring  { stroke-opacity: 1; }
        .hl-link:focus-visible .hl-ring  { stroke-width: 2.5; }

        @media (prefers-reduced-motion: reduce) {
          .hl-conn, .hl-conn-ter, .hl-node { animation: none; }
          .hl-pulse { display: none; }
        }
      `}</style>
    </defs>

    {/* ── Connection lines (all radiate from HQ) ── */}
    {nodes.map((c, i) => (
      <line
        key={c.id}
        className={c.type === "tertiary" ? "hl-conn-ter" : "hl-conn"}
        x1={HQ.x}
        y1={HQ.y}
        x2={c.x}
        y2={c.y}
        stroke={ACCENT}
        strokeWidth={c.type === "tertiary" ? "0.7" : "1"}
        strokeOpacity={c.type === "tertiary" ? "0.3" : "0.4"}
        style={{ animationDelay: `${i * -0.22}s` }}
      />
    ))}

    {/* ── HQ ambient glow ── */}
    <circle cx={HQ.x} cy={HQ.y} r="80" fill="url(#hl-hq-glow)" />

    {/* ── HQ pulse rings ── */}
    <circle
      className="hl-pulse hl-pulse-1"
      cx={HQ.x}
      cy={HQ.y}
      r={R.hq}
      stroke={ACCENT}
      strokeWidth="1.2"
      vectorEffect="non-scaling-stroke"
    />
    <circle
      className="hl-pulse hl-pulse-2"
      cx={HQ.x}
      cy={HQ.y}
      r={R.hq}
      stroke={ACCENT}
      strokeWidth="0.9"
      vectorEffect="non-scaling-stroke"
    />

    {/* ── Tertiary nodes ── */}
    {tertiary.map((city, i) => (
      <g
        key={city.id}
        className="hl-node"
        style={{ animationDelay: `${0.6 + i * 0.08}s` }}
      >
        <Link
          href={city.href}
          className="hl-link"
          aria-label={`Microsoft consultants in ${city.label}`}
        >
          <circle
            className="hl-ring"
            cx={city.x}
            cy={city.y}
            r={R.tertiary}
            fill={NODE_FILL}
            stroke={ACCENT}
            strokeWidth="1"
            strokeOpacity="0.5"
          />
          <circle cx={city.x} cy={city.y} r={DR.tertiary} fill={DOT_TER} />
          <text {...labelProps(city, FS.tertiary, "500", TEXT_TER)}>
            {city.label}
          </text>
        </Link>
      </g>
    ))}

    {/* ── Secondary nodes ── */}
    {secondary.map((city, i) => (
      <g
        key={city.id}
        className="hl-node"
        style={{ animationDelay: `${0.3 + i * 0.07}s` }}
      >
        <Link
          href={city.href}
          className="hl-link"
          aria-label={`Microsoft consultants in ${city.label}`}
        >
          <circle
            className="hl-ring"
            cx={city.x}
            cy={city.y}
            r={R.secondary}
            fill={NODE_FILL}
            stroke={ACCENT}
            strokeWidth="1.2"
            strokeOpacity="0.6"
          />
          <circle cx={city.x} cy={city.y} r={DR.secondary} fill={DOT_SEC} />
          <text {...labelProps(city, FS.secondary, "600", TEXT_SEC)}>
            {city.label}
          </text>
        </Link>
      </g>
    ))}

    {/* ── HQ node ── */}
    <g className="hl-node" style={{ animationDelay: "0.05s" }}>
      <Link
        href={hq.href}
        className="hl-link"
        aria-label="Microsoft consultants in Northern NSW, our head office"
      >
        {/* Dashed outer ring */}
        <circle
          cx={HQ.x}
          cy={HQ.y}
          r={R.hq + 5}
          stroke={ACCENT}
          strokeWidth="1"
          strokeOpacity="0.35"
          strokeDasharray="3 3"
        />
        <circle
          className="hl-ring"
          cx={HQ.x}
          cy={HQ.y}
          r={R.hq}
          fill={NODE_FILL}
          stroke={ACCENT}
          strokeWidth="2"
        />
        <circle cx={HQ.x} cy={HQ.y} r={DR.hq} fill={DOT_HQ} />
        <text
          className="hl-label"
          x={HQ.x}
          y={HQ.y - R.hq - 14}
          textAnchor="middle"
          fontFamily={FONT}
          fontSize="11"
          fontWeight="700"
          fill={TEXT_HQ}
          letterSpacing="0.6"
          stroke={HALO}
          strokeWidth="3"
          strokeLinejoin="round"
          paintOrder="stroke"
        >
          NORTHERN RIVERS NSW
        </text>
        <text
          x={HQ.x}
          y={HQ.y - R.hq - 3}
          textAnchor="middle"
          fontFamily={FONT}
          fontSize="9"
          fontWeight="600"
          fill={TEXT_HQ_SUB}
          letterSpacing="1.8"
          stroke={HALO}
          strokeWidth="3"
          strokeLinejoin="round"
          paintOrder="stroke"
        >
          HEAD OFFICE
        </text>
      </Link>
    </g>
  </svg>
);
