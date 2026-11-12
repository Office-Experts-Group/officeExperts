// /about-us/(svgs)/AboutHeroSvg.jsx
// Hero illustration: the Office Experts logo hub orbited by the Office apps (inner ring) and the
// wider platforms we build on (outer ring). Glyphs are plain lettering, not
// Microsoft product icons. All motion is CSS-only and switched off for
// prefers-reduced-motion, so this stays a server component.
import styles from "@/styles/aboutHeroSvg.module.scss";

// Centre of the 520 x 530 viewBox
const CX = 260;
const CY = 260;

// Converts a ring radius + angle (degrees, 0 = 3 o'clock) into x/y coordinates
const polar = (radius, deg) => {
  const rad = (deg * Math.PI) / 180;
  return {
    x: +(CX + radius * Math.cos(rad)).toFixed(1),
    y: +(CY + radius * Math.sin(rad)).toFixed(1),
  };
};

// Inner ring — the five core Office apps, evenly spaced from 12 o'clock
const innerNodes = [
  { glyph: "W", label: "Word", deg: -90 },
  { glyph: "X", label: "Excel", deg: -18 },
  { glyph: "O", label: "Outlook", deg: 54 },
  { glyph: "P", label: "PowerPoint", deg: 126 },
  { glyph: "A", label: "Access", deg: 198 },
].map((node) => ({ ...node, ...polar(135, node.deg) }));

// Outer ring — offset 36° so each node sits between two inner nodes
const outerNodes = [
  { glyph: "AI", label: "AI agents", deg: -54, highlight: true },
  { glyph: "Py", label: "Python", deg: 18 },
  { glyph: "SQL", label: "SQL & Azure", deg: 90 },
  { glyph: "JS", label: "JavaScript", deg: 162 },
  { glyph: "PP", label: "Power Platform", deg: 234 },
].map((node) => ({ ...node, ...polar(215, node.deg) }));

// Each outer node links back to the two inner nodes either side of it
const outerLinks = outerNodes.flatMap((outer, i) => [
  { from: innerNodes[i], to: outer },
  { from: innerNodes[(i + 1) % innerNodes.length], to: outer },
]);

// ── Office Experts logo mark (centre hub) ──
// Clockwise arc path around (0, 0) — angles in degrees, 0 = 3 o'clock
const arc = (radius, start, end) => {
  const toPoint = (deg) => {
    const rad = (deg * Math.PI) / 180;
    return `${(radius * Math.cos(rad)).toFixed(2)} ${(radius * Math.sin(rad)).toFixed(2)}`;
  };
  return `M ${toPoint(start)} A ${radius} ${radius} 0 0 1 ${toPoint(end)}`;
};

// Four quadrants of the logo ring. Each stops 1.5° short of the quarter so the
// white base ring shows through as the hairline separators in the real logo.
const ringSegments = [
  { colour: "red", start: 180, end: 270 },
  { colour: "yellow", start: 270, end: 360 },
  { colour: "green", start: 0, end: 90 },
  { colour: "blue", start: 90, end: 180 },
].map((seg) => ({ ...seg, d: arc(42, seg.start + 1.5, seg.end - 1.5) }));

// Classic arrow pointer with its tip at (0, 0), matching the cursor in the logo
const CURSOR_PATH = "M0 0V16l3.6-3.4 2.6 6 2.4-1-2.6-5.9H11z";

export const AboutHeroSvg = () => (
  <svg
    className={styles.svg}
    viewBox="0 0 520 530"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Slowly rotating dashed orbit rings */}
    <circle className={styles.orbitOuter} cx={CX} cy={CY} r="215" />
    <circle className={styles.orbit} cx={CX} cy={CY} r="135" />

    {/* Static connector lines */}
    {innerNodes.map((node) => (
      <line
        key={`hub-${node.label}`}
        className={styles.line}
        x1={CX}
        y1={CY}
        x2={node.x}
        y2={node.y}
      />
    ))}
    {outerLinks.map(({ from, to }) => (
      <line
        key={`link-${from.label}-${to.label}`}
        className={styles.line}
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
      />
    ))}

    {/* Travelling data pulses — same lines with a short animated dash, staggered */}
    {innerNodes.map((node, i) => (
      <line
        key={`pulse-hub-${node.label}`}
        className={styles.pulse}
        style={{ animationDelay: `${i * 0.8}s` }}
        x1={CX}
        y1={CY}
        x2={node.x}
        y2={node.y}
      />
    ))}
    {outerLinks.map(({ from, to }, i) => (
      <line
        key={`pulse-link-${from.label}-${to.label}`}
        className={styles.pulse}
        style={{ animationDelay: `${0.4 + i * 0.55}s` }}
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
      />
    ))}

    {/* Outer ring nodes */}
    {outerNodes.map((node, i) => (
      <g key={node.label} transform={`translate(${node.x} ${node.y})`}>
        {/* Nested group so the CSS float transform doesn't override the translate */}
        <g className={styles.float} style={{ animationDelay: `${i * -1.3}s` }}>
          <circle
            className={node.highlight ? styles.nodeAi : styles.nodeOuter}
            r="24"
          />
          <text
            className={`${styles.glyph} ${styles.glyphSmall} ${node.highlight ? styles.glyphOnAccent : ""}`}
            textAnchor="middle"
            dominantBaseline="central"
          >
            {node.glyph}
          </text>
          <text className={styles.label} y="42" textAnchor="middle">
            {node.label}
          </text>
        </g>
      </g>
    ))}

    {/* Inner ring nodes */}
    {innerNodes.map((node, i) => (
      <g key={node.label} transform={`translate(${node.x} ${node.y})`}>
        <g className={styles.float} style={{ animationDelay: `${i * -1.1}s` }}>
          <rect
            className={styles.nodeInner}
            x="-26"
            y="-26"
            width="52"
            height="52"
            rx="14"
          />
          <text
            className={styles.glyph}
            textAnchor="middle"
            dominantBaseline="central"
          >
            {node.glyph}
          </text>
          <text className={styles.label} y="44" textAnchor="middle">
            {node.label}
          </text>
        </g>
      </g>
    ))}

    {/* Centre hub — dark disc with an expanding halo behind the logo */}
    <circle className={styles.halo} cx={CX} cy={CY} r="72" />
    <circle className={styles.hub} cx={CX} cy={CY} r="72" />

    {/* Office Experts logo mark, drawn around the hub centre */}
    <g transform={`translate(${CX} ${CY})`}>
      <circle className={styles.ringBase} r="42" />
      {ringSegments.map(({ colour, d }) => (
        <path
          key={colour}
          className={`${styles.ringSegment} ${styles[colour]}`}
          d={d}
        />
      ))}

      {/* Cursor tip sits inside the ring, lower right, as in the logo.
          Inner group carries the CSS "click" so it doesn't override the translate/scale */}
      <g transform="translate(18 14) scale(2.9)">
        <g className={styles.cursorClick}>
          <path className={styles.cursor} d={CURSOR_PATH} />
        </g>
      </g>
      {/* Ripple that fires from the cursor tip on each click */}
      <circle className={styles.clickRipple} cx="18" cy="14" r="7" />
    </g>
  </svg>
);
