// /app/services/microsoft-access/access-database-optimisation-and-repair/(svgs)/AorHeroSvg.jsx
// Hero illustration: a bloated, fragmented database file goes through compact and repair
// and comes out fast. It sits straight on the hero background (no panel).
// Hex values -> tokens:
//   #111820 $dark-bg, #18232e $dark-surface, #1a2a3a $dark-mid, #046999 $accent,
//   #6fc3e8 $accent-on-dark, #c0392b $replace-x, #ffffff $white,
//   white alphas $white-88 / $white-75 / $white-65 / $white-35 / $white-18 / $white-12 / $white-08
// Only the flow lines and the live dot are animated (classes come from the hero module).
import React from "react";

const W88 = "rgba(255,255,255,0.88)";
const W65 = "rgba(255,255,255,0.65)";
const W35 = "rgba(255,255,255,0.35)";
const W18 = "rgba(255,255,255,0.18)";
const W12 = "rgba(255,255,255,0.12)";
const W08 = "rgba(255,255,255,0.08)";

// u = used data, d = deleted gap, t = temporary object
const AOR_FRAGMENTS = ["uudtuudu", "udtuduut", "duutuduu"];

const AOR_GAUGE_ANGLES = [180, 150, 120, 90, 60, 30, 0];
const polar = (r, deg) => {
  const rad = (deg * Math.PI) / 180;
  return [480 + r * Math.cos(rad), 225 - r * Math.sin(rad)];
};
const AOR_TICKS = AOR_GAUGE_ANGLES.map((deg) => {
  const [x1, y1] = polar(94, deg);
  const [x2, y2] = polar(104, deg);
  return { x1, y1, x2, y2, deg };
});

const AorHeroSvg = ({ flowClass = "", liveClass = "" }) => (
  <svg
    viewBox="0 0 600 450"
    role="img"
    aria-labelledby="aor-hero-title aor-hero-desc"
    fontFamily="aptos"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    <title id="aor-hero-title">A slow database file being fixed</title>
    <desc id="aor-hero-desc">
      A bloated, fragmented database file is compacted and repaired. A speed
      gauge then reads fast and a form opens in seconds.
    </desc>

    {/* faint rings for depth */}
    <circle cx="300" cy="235" r="222" fill="none" stroke={W08} />
    <circle
      cx="300"
      cy="235"
      r="158"
      fill="none"
      stroke={W08}
      strokeDasharray="3 7"
    />
    <circle cx="300" cy="235" r="96" fill="none" stroke={W08} />

    {/* warning chip */}
    <rect
      x="28"
      y="20"
      width="176"
      height="34"
      rx="17"
      fill="rgba(192,57,43,0.16)"
      stroke="#c0392b"
    />
    <path
      d="M50 29l9 16H41z"
      fill="none"
      stroke="#c0392b"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M50 34v5"
      stroke="#c0392b"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="50" cy="42" r="1" fill="#c0392b" />
    <text x="70" y="42" fontSize="15" fill={W88}>
      Slow &amp; bloated
    </text>

    {/* database file */}
    <text x="120" y="78" fontSize="15" fill={W65} textAnchor="middle">
      orders.accdb
    </text>
    <path
      d="M45 108V228A75 22 0 0 0 195 228V108"
      fill="#18232e"
      stroke={W35}
      strokeWidth="1.5"
    />
    <path d="M45 148A75 22 0 0 0 195 148" fill="none" stroke={W18} />
    <path d="M45 188A75 22 0 0 0 195 188" fill="none" stroke={W18} />
    <ellipse
      cx="120"
      cy="108"
      rx="75"
      ry="22"
      fill="#1a2a3a"
      stroke={W35}
      strokeWidth="1.5"
    />
    <ellipse cx="120" cy="108" rx="46" ry="11" fill="none" stroke={W12} />
    {/* leftovers on the face of the file */}
    <g>
      <rect x="60" y="138" width="22" height="10" rx="3" fill="#046999" />
      <rect
        x="90"
        y="138"
        width="18"
        height="10"
        rx="3"
        fill="none"
        stroke="#c0392b"
        strokeDasharray="3 2"
      />
      <rect x="116" y="138" width="28" height="10" rx="3" fill={W18} />
      <rect x="152" y="138" width="26" height="10" rx="3" fill="#046999" />

      <rect x="58" y="178" width="30" height="10" rx="3" fill={W18} />
      <rect x="96" y="178" width="20" height="10" rx="3" fill="#046999" />
      <rect
        x="124"
        y="178"
        width="18"
        height="10"
        rx="3"
        fill="none"
        stroke="#c0392b"
        strokeDasharray="3 2"
      />
      <rect x="150" y="178" width="28" height="10" rx="3" fill="#046999" />

      <rect x="60" y="218" width="26" height="10" rx="3" fill="#046999" />
      <rect
        x="94"
        y="218"
        width="22"
        height="10"
        rx="3"
        fill="none"
        stroke="#c0392b"
        strokeDasharray="3 2"
      />
      <rect x="124" y="218" width="26" height="10" rx="3" fill="#046999" />
      <rect x="158" y="218" width="20" height="10" rx="3" fill={W18} />
    </g>
    <rect
      x="70"
      y="264"
      width="100"
      height="28"
      rx="14"
      fill="#111820"
      stroke={W18}
    />
    <text
      x="120"
      y="283"
      fontSize="15"
      fill="#6fc3e8"
      textAnchor="middle"
      fontWeight="700"
    >
      1.9 GB
    </text>

    {/* fragmentation map */}
    <g>
      {AOR_FRAGMENTS.map((row, r) =>
        row.split("").map((cell, c) => {
          const x = 39 + c * 21;
          const y = 312 + r * 21;
          if (cell === "u")
            return (
              <rect
                key={`${r}-${c}`}
                x={x}
                y={y}
                width="16"
                height="16"
                rx="3"
                fill="#046999"
              />
            );
          if (cell === "d")
            return (
              <rect
                key={`${r}-${c}`}
                x={x}
                y={y}
                width="16"
                height="16"
                rx="3"
                fill="none"
                stroke="#c0392b"
                strokeDasharray="3 2"
              />
            );
          return (
            <rect
              key={`${r}-${c}`}
              x={x}
              y={y}
              width="16"
              height="16"
              rx="3"
              fill={W18}
            />
          );
        }),
      )}
    </g>
    <text x="120" y="400" fontSize="14" fill={W65} textAnchor="middle">
      Gaps and leftovers
    </text>

    {/* flow lines into the repair gear and out to the gauge */}
    <path
      className={flowClass}
      d="M200 190C232 190 234 238 252 244"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      className={flowClass}
      d="M206 336C240 336 262 306 278 294"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      className={flowClass}
      d="M350 248C372 248 382 238 396 232"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* compact and repair gear */}
    <g transform="translate(300 250)">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <rect
          key={deg}
          x="-6"
          y="-60"
          width="12"
          height="16"
          rx="3"
          fill="#046999"
          transform={`rotate(${deg})`}
        />
      ))}
      <circle r="49" fill="#046999" stroke="#6fc3e8" strokeWidth="2" />
      <circle r="27" fill="#111820" stroke="#6fc3e8" />
      <path
        d="M-10 -4A11 11 0 1 1 -6 9"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path d="M-17 -6l7-4 2 8z" fill="#ffffff" />
    </g>
    <text x="300" y="338" fontSize="15" fill={W88} textAnchor="middle">
      Compact &amp; repair
    </text>

    {/* speed gauge */}
    <path
      d="M398 225A82 82 0 0 1 439 154"
      fill="none"
      stroke="#c0392b"
      strokeWidth="12"
    />
    <path
      d="M439 154A82 82 0 0 1 521 154"
      fill="none"
      stroke={W35}
      strokeWidth="12"
    />
    <path
      d="M521 154A82 82 0 0 1 562 225"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="12"
    />
    {AOR_TICKS.map((t) => (
      <line
        key={t.deg}
        x1={t.x1}
        y1={t.y1}
        x2={t.x2}
        y2={t.y2}
        stroke={W35}
        strokeWidth="2"
        strokeLinecap="round"
      />
    ))}
    <line
      x1="480"
      y1="225"
      x2="530"
      y2="186"
      stroke="#ffffff"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle cx="480" cy="225" r="10" fill="#ffffff" />
    <circle cx="480" cy="225" r="4" fill="#111820" />
    <text x="480" y="262" fontSize="15" fill={W88} textAnchor="middle">
      Fast again
    </text>

    {/* form window that now opens quickly */}
    <rect
      x="395"
      y="288"
      width="170"
      height="110"
      rx="12"
      fill="#18232e"
      stroke={W18}
    />
    <path d="M395 314H565" stroke={W12} />
    <circle cx="410" cy="301" r="3.5" fill={W35} />
    <circle cx="423" cy="301" r="3.5" fill={W35} />
    <circle cx="436" cy="301" r="3.5" fill={W35} />
    <circle
      className={liveClass}
      cx="548"
      cy="301"
      r="8"
      fill="#6fc3e8"
      opacity="0.35"
    />
    <circle cx="548" cy="301" r="4" fill="#6fc3e8" />
    <rect
      x="409"
      y="324"
      width="142"
      height="18"
      rx="4"
      fill="none"
      stroke={W35}
    />
    <path
      d="M536 330l5 5 5-5"
      fill="none"
      stroke={W65}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="409" y="350" width="142" height="14" rx="4" fill={W08} />
    <rect x="409" y="374" width="142" height="8" rx="4" fill={W12} />
    <rect x="409" y="374" width="142" height="8" rx="4" fill="#6fc3e8" />
    <text x="480" y="424" fontSize="15" fill={W88} textAnchor="middle">
      Form opens in seconds
    </text>
  </svg>
);

export default AorHeroSvg;
