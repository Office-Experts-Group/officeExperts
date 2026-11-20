// /app/services/microsoft-access/access-database-optimisation-and-repair/(svgs)/AorCausesDiagram.jsx
// Anatomy of a split Access database. Each cause in the picker lights up its own layer
// through the data-layer attribute (CSS in aorCauses.module.scss, no JavaScript).
// Sits on $dark-surface. Hex values -> tokens:
//   #111820 $dark-bg, #18232e $dark-surface, #1a2a3a $dark-mid, #046999 $accent,
//   #6fc3e8 $accent-on-dark, #c0392b $replace-x, #ffffff $white,
//   white alphas $white-88 / $white-65 / $white-35 / $white-18 / $white-12 / $white-08
import React from "react";

const W88 = "rgba(255,255,255,0.88)";
const W65 = "rgba(255,255,255,0.65)";
const W35 = "rgba(255,255,255,0.35)";
const W18 = "rgba(255,255,255,0.18)";
const W12 = "rgba(255,255,255,0.12)";
const HI = "#6fc3e8";

// A dashed outline that the CSS fades in around the active layer.
const Halo = ({ x, y, w, h }) => (
  <rect
    data-halo=""
    x={x}
    y={y}
    width={w}
    height={h}
    rx="14"
    fill="none"
    stroke={HI}
    strokeWidth="2"
    strokeDasharray="6 5"
    opacity="0"
  />
);

const AorCausesDiagram = () => (
  <svg
    viewBox="0 0 780 290"
    role="img"
    aria-labelledby="aor-causes-diagram-title aor-causes-diagram-desc"
    fontFamily="aptos"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    <title id="aor-causes-diagram-title">
      Where slowdowns come from in a typical Access database
    </title>
    <desc id="aor-causes-diagram-desc">
      A PC with limited memory runs the front end, which holds the forms,
      queries and VBA code. It talks over a network to the back end, which holds
      the tables and indexes and the data file itself. The file can grow too
      large or become corrupted.
    </desc>

    {/* ── memory and the PC ── */}
    <g data-layer="memory">
      <Halo x="14" y="44" w="172" h="226" />
      <rect
        x="24"
        y="60"
        width="152"
        height="104"
        rx="10"
        fill="#111820"
        stroke={W35}
        strokeWidth="1.5"
      />
      <rect x="34" y="70" width="132" height="84" rx="5" fill="#18232e" />
      <text x="44" y="90" fontSize="14" fill={W65}>
        Memory in use
      </text>
      {[
        [48, 112, 30],
        [66, 104, 38],
        [84, 98, 44],
        [102, 92, 50],
        [120, 88, 54],
      ].map(([x, y, h]) => (
        <rect
          key={x}
          x={x}
          y={150 - h}
          width="12"
          height={h}
          rx="3"
          fill={HI}
          opacity={h > 50 ? 1 : 0.7}
        />
      ))}
      <rect x="138" y="97" width="16" height="53" rx="3" fill="#c0392b" />
      <rect x="86" y="164" width="28" height="12" fill={W18} />
      <rect x="64" y="176" width="72" height="8" rx="4" fill={W35} />
      <rect
        x="44"
        y="206"
        width="112"
        height="28"
        rx="4"
        fill="#1a2a3a"
        stroke={W35}
      />
      {[54, 76, 98, 120].map((x) => (
        <rect key={x} x={x} y="212" width="16" height="12" rx="2" fill={W18} />
      ))}
      <path
        d="M52 234v6M64 234v6M76 234v6M88 234v6M100 234v6M112 234v6M124 234v6M136 234v6"
        stroke={HI}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text x="100" y="262" fontSize="15" fill={W88} textAnchor="middle">
        Your PC and memory
      </text>
    </g>

    {/* ── front end ── */}
    <rect
      x="224"
      y="40"
      width="260"
      height="222"
      rx="14"
      fill="#111820"
      stroke={W18}
      strokeWidth="1.5"
    />
    <text x="240" y="62" fontSize="15" fontWeight="700" fill={W88}>
      Front end: forms &amp; code
    </text>

    <g data-layer="queries">
      <Halo x="230" y="70" w="146" h="112" />
      <Halo x="230" y="184" w="260" h="74" />
      {/* form window */}
      <rect
        x="238"
        y="78"
        width="130"
        height="96"
        rx="8"
        fill="#18232e"
        stroke={W18}
      />
      <path d="M238 94H368" stroke={W18} />
      <circle cx="248" cy="86" r="2.5" fill={W35} />
      <circle cx="257" cy="86" r="2.5" fill={W35} />
      <rect
        x="248"
        y="102"
        width="110"
        height="16"
        rx="4"
        fill="none"
        stroke={W35}
      />
      <path
        d="M342 108l4 4 4-4"
        fill="none"
        stroke={W65}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="248" y="126" width="110" height="12" rx="3" fill={W12} />
      <rect x="248" y="146" width="70" height="8" rx="3" fill={W12} />
      <rect x="248" y="159" width="90" height="8" rx="3" fill={W12} />
      {/* query strip */}
      <rect
        x="238"
        y="192"
        width="238"
        height="58"
        rx="8"
        fill="#1a2a3a"
        stroke={W18}
      />
      <path
        d="M250 202h26l-10 12v12l-7-4v-8z"
        fill="none"
        stroke={HI}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <rect
        x="292"
        y="202"
        width="120"
        height="7"
        rx="3.5"
        fill={HI}
        opacity="0.85"
      />
      <rect x="292" y="217" width="84" height="7" rx="3.5" fill={W35} />
      <rect x="292" y="232" width="150" height="7" rx="3.5" fill={W35} />
      <circle
        cx="450"
        cy="206"
        r="9"
        fill="none"
        stroke={W65}
        strokeWidth="1.8"
      />
      <path
        d="M457 213l6 6"
        stroke={W65}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </g>

    <g data-layer="vba">
      <Halo x="372" y="70" w="118" h="112" />
      <rect
        x="380"
        y="78"
        width="96"
        height="96"
        rx="8"
        fill="#18232e"
        stroke={W18}
      />
      <rect x="390" y="90" width="38" height="7" rx="3.5" fill={HI} />
      <rect x="398" y="103" width="62" height="7" rx="3.5" fill={W35} />
      <rect x="398" y="116" width="44" height="7" rx="3.5" fill={W35} />
      <path
        d="M398 129q4-5 8 0t8 0 8 0 8 0"
        fill="none"
        stroke="#c0392b"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <rect x="390" y="138" width="30" height="7" rx="3.5" fill={HI} />
      <path
        d="M452 150a9 9 0 1 1-3 6.5"
        fill="none"
        stroke={W65}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M446 148l4 5 5-5z" fill={W65} />
    </g>

    {/* ── network ── */}
    <path d="M484 150H556" stroke={W35} strokeWidth="2" strokeDasharray="4 5" />
    <circle cx="505" cy="150" r="3.5" fill={HI} />
    <circle cx="520" cy="150" r="3.5" fill={HI} opacity="0.6" />
    <circle cx="535" cy="150" r="3.5" fill={HI} opacity="0.3" />
    <text x="520" y="136" fontSize="14" fill={W65} textAnchor="middle">
      Network
    </text>

    {/* ── back end ── */}
    <rect
      x="556"
      y="40"
      width="200"
      height="222"
      rx="14"
      fill="#111820"
      stroke={W18}
      strokeWidth="1.5"
    />
    <text x="570" y="62" fontSize="15" fontWeight="700" fill={W88}>
      Back end: data file
    </text>

    <g data-layer="design">
      <Halo x="562" y="70" w="188" h="102" />
      {[570, 626, 682].map((x, i) => (
        <g key={x}>
          <rect
            x={x}
            y="78"
            width="52"
            height="52"
            rx="6"
            fill="#18232e"
            stroke={W18}
          />
          <rect x={x} y="78" width="52" height="11" rx="6" fill={W12} />
          <path d={`M${x} 101h52M${x} 114h52M${x + 20} 89v41`} stroke={W12} />
          {i === 1 && (
            <g
              transform="translate(626 78)"
              fill="none"
              stroke={HI}
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <circle cx="14" cy="22" r="5" />
              <path d="M19 22h14M28 22v5M33 22v4" />
            </g>
          )}
        </g>
      ))}
      <path d="M622 104h4M678 104h4" stroke={W35} strokeWidth="1.5" />
      <text x="570" y="158" fontSize="14" fill={W65}>
        Tables &amp; indexes
      </text>
    </g>

    <g data-layer="file">
      <Halo x="562" y="176" w="188" h="48" />
      <text x="570" y="196" fontSize="14" fill={W65}>
        File size
      </text>
      <rect x="570" y="204" width="172" height="12" rx="6" fill={W12} />
      <rect x="570" y="204" width="128" height="12" rx="6" fill={HI} />
      <rect x="698" y="204" width="44" height="12" rx="6" fill="#c0392b" />
    </g>

    <g data-layer="corruption">
      <Halo x="562" y="226" w="188" h="30" />
      <path
        d="M572 231h14l6 6v16a2 2 0 0 1-2 2h-18a2 2 0 0 1-2-2v-20a2 2 0 0 1 2-2z"
        fill="#18232e"
        stroke={W35}
      />
      <path
        d="M570 238l7 4-5 4 7 4"
        fill="none"
        stroke="#c0392b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="604" y="249" fontSize="14" fill={W65}>
        Errors &amp; crashes
      </text>
    </g>
  </svg>
);

export default AorCausesDiagram;
