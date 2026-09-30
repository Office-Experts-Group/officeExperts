// app/services/business-analysis/(svgs)/SolutionPathsSvg.jsx

// ── SolutionPathsSvg ──────────────────────────────────────────────────────────
// Hero illustration: one discovery point fans out into a field of possible
// software solutions that keeps going past the edge of the frame (the
// "endless possibilities"), with one recommended route drawn through it.
// Colours mirror globals.scss tokens ($accent, $accent-light, $text-primary,
// $darkGrayText) because SCSS variables can't be read inside inline SVG.
// Plain classes (ba-draw, ba-pulse) are animated from
// businessAnalysisHero.module.scss via :global.

const ACCENT = "#046999";
const ORIGIN = { x: 92, y: 220 };
const TILE = { w: 124, h: 30 };
const NEAR_X = 236;
const FAR_X = 400;

// First ring of options, closest to discovery
const near = [
  { label: "Word template", y: 70 },
  { label: "Power App", y: 130 },
  { label: "Power Automate", y: 190 },
  { label: "SQL Server", y: 250, chosen: true },
  { label: "Python agent", y: 310 },
  { label: "Copilot", y: 370 },
];

// Second ring, slightly faded to suggest depth
const far = [
  { label: "Power BI", y: 100 },
  { label: "Excel model", y: 160 },
  { label: "Next.js portal", y: 220, chosen: true },
  { label: "SharePoint", y: 280 },
  { label: "Custom API", y: 340 },
];

// Which near options commonly combine with which far options (by y value)
const combos = [
  [70, 100], [130, 100], [130, 160], [190, 160], [190, 220],
  [250, 280], [310, 280], [310, 340], [370, 340],
];

// Smooth horizontal S-curve between two points
const curve = (x1, y1, x2, y2) => {
  const mid = (x1 + x2) / 2;
  return `M${x1} ${y1} C${mid} ${y1} ${mid} ${y2} ${x2} ${y2}`;
};

// Pill with a small marker dot and label; chosen tiles are filled in accent.
// Pass a fade value to push unchosen options back visually.
const renderTile = ({ label, y, chosen }, x, fade = 1) => (
  <g key={label} opacity={chosen ? 1 : fade}>
    <rect
      x={x}
      y={y - TILE.h / 2}
      width={TILE.w}
      height={TILE.h}
      rx={TILE.h / 2}
      fill={chosen ? ACCENT : "#ffffff"}
      stroke={chosen ? ACCENT : "rgba(4,105,153,0.3)"}
    />
    <circle cx={x + 15} cy={y} r="3" fill={chosen ? "#ffffff" : ACCENT} />
    <text
      x={x + 25}
      y={y + 4}
      fontSize="11"
      fontWeight="600"
      fill={chosen ? "#ffffff" : "#0d1b2a"}
    >
      {label}
    </text>
  </g>
);

export const SolutionPathsSvg = () => {
  const chosenNear = near.find((t) => t.chosen);
  const chosenFar = far.find((t) => t.chosen);

  return (
    <svg
      viewBox="0 0 600 440"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Dotted grid; IDs are prefixed to stay unique on the page */}
        <pattern id="baPathsGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill={ACCENT} opacity="0.14" />
        </pattern>
        {/* Branches fade out as they leave the frame: the options keep going */}
        <linearGradient id="baPathsFade" x1="524" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={ACCENT} stopOpacity="0.35" />
          <stop offset="1" stopColor={ACCENT} stopOpacity="0" />
        </linearGradient>
        <clipPath id="baPathsClip">
          <rect x="1" y="1" width="598" height="438" rx="10" />
        </clipPath>
      </defs>

      {/* Frame */}
      <rect x="1" y="1" width="598" height="438" rx="10" fill="#ffffff" stroke="rgba(0,0,0,0.08)" />

      <g clipPath="url(#baPathsClip)">
        <rect width="600" height="440" fill="url(#baPathsGrid)" />

        {/* Discovery → first ring */}
        <g fill="none" stroke={ACCENT} strokeWidth="1.25" opacity="0.28">
          {near.map((t) => (
            <path key={`o-${t.label}`} d={curve(ORIGIN.x + 22, ORIGIN.y, NEAR_X, t.y)} />
          ))}
          {/* First ring → second ring */}
          {combos.map(([a, b]) => (
            <path key={`c-${a}-${b}`} d={curve(NEAR_X + TILE.w, a, FAR_X, b)} />
          ))}
        </g>

        {/* Second ring → off the edge, fading out */}
        <g fill="none" stroke="url(#baPathsFade)" strokeWidth="1.25">
          {far.flatMap((t) => [
            <path key={`e1-${t.label}`} d={curve(FAR_X + TILE.w, t.y, 606, t.y - 26)} />,
            <path key={`e2-${t.label}`} d={curve(FAR_X + TILE.w, t.y, 606, t.y + 22)} />,
          ])}
        </g>

        {/* Recommended route, drawn in on load */}
        <g fill="none" stroke={ACCENT} strokeWidth="2.25" strokeLinecap="round">
          <path className="ba-draw" pathLength="1" d={curve(ORIGIN.x + 22, ORIGIN.y, NEAR_X, chosenNear.y)} />
          <path className="ba-draw" pathLength="1" d={curve(NEAR_X + TILE.w, chosenNear.y, FAR_X, chosenFar.y)} />
        </g>

        {/* Option tiles */}
        {near.map((t) => renderTile(t, NEAR_X))}
        {far.map((t) => renderTile(t, FAR_X, 0.8))}

        {/* Label for the recommended route */}
        <text
          x={FAR_X + 2}
          y={chosenFar.y - 22}
          fontSize="8.5"
          fontWeight="700"
          letterSpacing="1.5"
          fill={ACCENT}
        >
          RECOMMENDED
        </text>

        {/* Discovery origin with a soft pulse ring */}
        <circle className="ba-pulse" cx={ORIGIN.x} cy={ORIGIN.y} r="22" fill={ACCENT} opacity="0.18" />
        <circle cx={ORIGIN.x} cy={ORIGIN.y} r="22" fill={ACCENT} />
        {/* Magnifier glyph: analysis */}
        <g fill="none" stroke="#ffffff" strokeWidth="2.25" strokeLinecap="round">
          <circle cx={ORIGIN.x - 2} cy={ORIGIN.y - 2} r="7" />
          <line x1={ORIGIN.x + 3} y1={ORIGIN.y + 3} x2={ORIGIN.x + 9} y2={ORIGIN.y + 9} />
        </g>
        <text x={ORIGIN.x} y={ORIGIN.y + 42} fontSize="11" fontWeight="700" fill="#0d1b2a" textAnchor="middle">
          Discovery
        </text>
        <text x={ORIGIN.x} y={ORIGIN.y + 56} fontSize="9.5" fill="#777a7e" textAnchor="middle">
          your business
        </text>
      </g>
    </svg>
  );
};
