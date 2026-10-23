// app/copilot-and-ai-templates/(svgs)/TemplateLayersSvg.jsx
// Exploded view of an AI-ready template: four stacked layers with the
// style foundation at the bottom. Each layer's glyphs are drawn in a 0–100
// unit square and mapped onto the rhombus with an SVG matrix transform.

const ACCENT = "#046999";
const ACCENT_LIGHT = "#e8f4fa";
const INK = "#0d1b2a";
const SECONDARY = "#4a5568";
const MUTED = "#9a9da1";

const SPACING = 88; // vertical gap between layers
const TOP = 30; // y of the top layer's upper corner

// Top to bottom. Drawn in reverse so upper layers overlap lower ones.
const layers = [
  {
    label: "Guidance",
    sub: "What to write, and what not to",
    glyphs: (
      <>
        <circle cx="16" cy="18" r="6" fill="none" stroke={ACCENT} strokeWidth="1.2" />
        {[16, 32, 46, 60].map((y, i) => (
          <line key={y} x1="28" y1={y + 2} x2={[80, 70, 76, 58][i]} y2={y + 2} stroke={MUTED} strokeWidth="2" strokeDasharray="4 3" />
        ))}
      </>
    ),
  },
  {
    label: "Content controls",
    sub: "Where AI writes",
    glyphs: (
      <>
        <rect x="12" y="14" width="76" height="22" rx="2" fill="none" stroke={ACCENT} strokeWidth="1.2" strokeDasharray="3 2" />
        <rect x="12" y="48" width="76" height="34" rx="2" fill="none" stroke={ACCENT} strokeWidth="1.2" strokeDasharray="3 2" />
      </>
    ),
  },
  {
    label: "Locked zones",
    sub: "Where AI can't",
    glyphs: (
      <rect x="12" y="48" width="76" height="36" rx="2" fill="url(#tl-hatch)" stroke={MUTED} strokeWidth="1" />
    ),
  },
  {
    label: "Styles",
    sub: "The foundation AI reads",
    glyphs: (
      <>
        <rect x="14" y="14" width="42" height="8" rx="1.5" fill={INK} />
        {[30, 40, 50].map((y, i) => (
          <rect key={y} x="14" y={y} width={[70, 62, 66][i]} height="4" rx="1.5" fill={MUTED} />
        ))}
        <rect x="14" y="62" width="34" height="6" rx="1.5" fill={ACCENT} />
        <rect x="14" y="74" width="60" height="4" rx="1.5" fill={MUTED} />
      </>
    ),
  },
];

export const TemplateLayersSvg = () => (
  <svg
    viewBox="0 0 600 420"
    xmlns="http://www.w3.org/2000/svg"
    fontFamily="inherit"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="tl-hatch"
        width="5"
        height="5"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(45)"
      >
        <line x1="0" y1="0" x2="0" y2="5" stroke={MUTED} strokeOpacity="0.5" strokeWidth="1.5" />
      </pattern>
    </defs>

    {[...layers].reverse().map((layer, ri) => {
      const i = layers.length - 1 - ri;
      const y = TOP + i * SPACING;
      const isBase = i === layers.length - 1;
      return (
        <g key={layer.label}>
          {/* Layer plane */}
          <polygon
            points={`60,${y + 50} 220,${y} 380,${y + 50} 220,${y + 100}`}
            fill={isBase ? ACCENT_LIGHT : "#fff"}
            stroke={ACCENT}
            strokeOpacity={isBase ? 0.8 : 0.4}
            strokeWidth={isBase ? 1.5 : 1}
          />
          {/* Map 0–100 glyph space onto the plane */}
          <g transform={`matrix(1.6 -0.5 1.6 0.5 60 ${y + 50})`}>{layer.glyphs}</g>

          {/* Leader and label */}
          <line x1="380" y1={y + 50} x2="408" y2={y + 50} stroke={ACCENT} strokeOpacity="0.5" />
          <circle cx="380" cy={y + 50} r="2.5" fill={ACCENT} />
          <text x="416" y={y + 48} fontSize="13" fontWeight="700" fill={INK}>
            {layer.label}
          </text>
          <text x="416" y={y + 64} fontSize="10.5" fill={SECONDARY}>
            {layer.sub}
          </text>
        </g>
      );
    })}
  </svg>
);
