// /app/services/microsoft-power-platform/power-automate/(svgs)/PautoAgentLoopSvg.jsx
// Informative diagram for the dark agents section: the loop an agent runs.
// Colours: #6fc3e8 $accent-on-dark, #046999 $accent, #034e72 $accent-dark,
// #18232e $dark-surface, #1a2a3a $dark-mid, #111820 $dark-bg, #ffffff $white
// (text at 75% opacity = $white-75).

const CX = 260;
const CY = 220;
const R = 140;

const polar = (deg, r = R) => {
  const a = (deg * Math.PI) / 180;
  return [CX + r * Math.cos(a), CY + r * Math.sin(a)];
};

// A clockwise arc with an arrowhead, between two angles on the loop
const arc = (from, to) => {
  const [sx, sy] = polar(from);
  const [ex, ey] = polar(to);
  const a = (to * Math.PI) / 180;
  const tx = -Math.sin(a);
  const ty = Math.cos(a);
  const nx = Math.cos(a);
  const ny = Math.sin(a);
  const tip = [ex + tx * 9, ey + ty * 9];
  const b1 = [ex - tx * 3 + nx * 7, ey - ty * 3 + ny * 7];
  const b2 = [ex - tx * 3 - nx * 7, ey - ty * 3 - ny * 7];
  return (
    <g key={from}>
      <path
        d={`M${sx.toFixed(1)} ${sy.toFixed(1)}A${R} ${R} 0 0 1 ${ex.toFixed(1)} ${ey.toFixed(1)}`}
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeDasharray="2 7"
      />
      <polygon
        points={`${tip[0].toFixed(1)},${tip[1].toFixed(1)} ${b1[0].toFixed(1)},${b1[1].toFixed(1)} ${b2[0].toFixed(1)},${b2[1].toFixed(1)}`}
        fill="#6fc3e8"
      />
    </g>
  );
};

const Node = ({ deg, children }) => {
  const [x, y] = polar(deg);
  return (
    <g transform={`translate(${x.toFixed(1)} ${y.toFixed(1)})`}>
      <circle r="38" fill="#18232e" stroke="#6fc3e8" strokeWidth="2" />
      <circle r="46" fill="none" stroke="#6fc3e8" strokeOpacity="0.2" />
      {children}
    </g>
  );
};

const glyph = {
  fill: "none",
  stroke: "#6fc3e8",
  strokeWidth: 2.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const PautoAgentLoopSvg = () => (
  <svg
    viewBox="0 0 680 520"
    role="img"
    aria-labelledby="pauto-agent-title pauto-agent-desc"
    fontFamily="aptos"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="pauto-agent-title">The loop a Copilot Studio agent runs</title>
    <desc id="pauto-agent-desc">
      The agent watches your inbox, stock levels and renewal dates, applies your
      business rules to decide what matters, acts on routine cases, and passes
      only genuine exceptions to your team. The loop then repeats without a
      trigger.
    </desc>

    <g transform="translate(80 60)">
      {arc(-70, -20)}
      {arc(20, 70)}
      {arc(110, 160)}
      {arc(200, 250)}

      {/* centre */}
      <circle
        cx={CX}
        cy={CY}
        r="64"
        fill="#1a2a3a"
        stroke="#ffffff"
        strokeOpacity="0.12"
      />
      <path
        d="M252 190a16 16 0 1 0 17 20 12.5 12.5 0 0 1-17-20z"
        fill="#6fc3e8"
      />
      <path
        d="M282 192l1.6 4 4 1.6-4 1.6-1.6 4-1.6-4-4-1.6 4-1.6z"
        fill="#ffffff"
        opacity="0.85"
      />
      <text
        x={CX}
        y="242"
        fontSize="16"
        fontWeight="700"
        fill="#ffffff"
        textAnchor="middle"
      >
        Always on
      </text>
      <text
        x={CX}
        y="260"
        fontSize="14"
        fill="#ffffff"
        fillOpacity="0.75"
        textAnchor="middle"
      >
        no trigger needed
      </text>

      {/* watch (top) */}
      <Node deg={-90}>
        <path
          d="M-20 0s7-12 20-12 20 12 20 12-7 12-20 12S-20 0-20 0z"
          {...glyph}
        />
        <circle r="5.5" fill="#6fc3e8" />
      </Node>
      <text
        x={CX}
        y="4"
        fontSize="16"
        fontWeight="700"
        fill="#ffffff"
        textAnchor="middle"
      >
        Watch
      </text>
      <text
        x={CX}
        y="22"
        fontSize="14"
        fill="#ffffff"
        fillOpacity="0.75"
        textAnchor="middle"
      >
        Inbox, stock, renewals
      </text>

      {/* decide (right) */}
      <Node deg={0}>
        <circle cx="-12" cy="0" r="4" fill="#6fc3e8" />
        <circle
          cx="14"
          cy="-12"
          r="4"
          fill="none"
          stroke="#6fc3e8"
          strokeWidth="2.4"
        />
        <circle
          cx="14"
          cy="12"
          r="4"
          fill="none"
          stroke="#6fc3e8"
          strokeWidth="2.4"
        />
        <path
          d="M-8 0c8 0 8-12 18-12M-8 0c8 0 8 12 18 12"
          {...glyph}
          strokeWidth="2"
        />
      </Node>
      <text
        x="458"
        y="216"
        fontSize="16"
        fontWeight="700"
        fill="#ffffff"
        textAnchor="start"
      >
        Decide
      </text>
      <text
        x="458"
        y="236"
        fontSize="14"
        fill="#ffffff"
        fillOpacity="0.75"
        textAnchor="start"
      >
        Your rules apply
      </text>

      {/* act (bottom) */}
      <Node deg={90}>
        <path d="M4 -18l-16 22h12l-4 16 18-24h-12z" {...glyph} />
      </Node>
      <text
        x={CX}
        y="430"
        fontSize="16"
        fontWeight="700"
        fill="#ffffff"
        textAnchor="middle"
      >
        Act
      </text>
      <text
        x={CX}
        y="448"
        fontSize="14"
        fill="#ffffff"
        fillOpacity="0.75"
        textAnchor="middle"
      >
        Updates, orders, emails
      </text>

      {/* escalate (left) */}
      <Node deg={180}>
        <circle cy="-8" r="7" {...glyph} strokeWidth="2.2" />
        <path d="M-13 14a13 10 0 0 1 26 0z" {...glyph} strokeWidth="2.2" />
        <path d="M14 -14v-6M11 -16l3-4 3 4" {...glyph} strokeWidth="1.8" />
      </Node>
      <text
        x="62"
        y="216"
        fontSize="16"
        fontWeight="700"
        fill="#ffffff"
        textAnchor="end"
      >
        Escalate
      </text>
      <text
        x="62"
        y="236"
        fontSize="14"
        fill="#ffffff"
        fillOpacity="0.75"
        textAnchor="end"
      >
        Real exceptions
      </text>
    </g>
  </svg>
);

export default PautoAgentLoopSvg;
