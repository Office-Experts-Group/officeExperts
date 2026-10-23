// app/copilot-and-ai-templates/(svgs)/RogueDocumentSvg.jsx
// The hero's document redrawn without a foundation, on the dark palette:
// misread headings, a broken table, an overwritten clause, and an AI that
// still reports "done". Colours mirror globals.scss ($dark-surface, $replace-x).

const RED = "#c0392b";
const SURFACE = "#18232e";
const ACCENT = "#046999";

// Annotation in the same leader-line language as the hero blueprint
const Note = ({ x, y, label, to, anchor = "start" }) => (
  <g>
    <text x={x} y={y} fontSize="11" fontWeight="600" fill="#fff" fillOpacity="0.6" textAnchor={anchor}>
      {label}
    </text>
    <path d={`M${to[0]} ${to[1]} L${to[2]} ${to[3]}`} stroke={RED} strokeOpacity="0.7" />
    <circle cx={to[2]} cy={to[3]} r="2.5" fill={RED} />
  </g>
);

// Small "x" error marker
const Cross = ({ cx, cy }) => (
  <g>
    <circle cx={cx} cy={cy} r="9" fill={RED} fillOpacity="0.18" stroke={RED} />
    <path d={`M${cx - 3.5} ${cy - 3.5}l7 7m0-7l-7 7`} stroke={RED} strokeWidth="1.6" strokeLinecap="round" />
  </g>
);

export const RogueDocumentSvg = () => (
  <svg
    viewBox="0 0 520 460"
    xmlns="http://www.w3.org/2000/svg"
    fontFamily="inherit"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="rg-hatch"
        width="6"
        height="6"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(45)"
      >
        <line x1="0" y1="0" x2="0" y2="6" stroke="#fff" strokeOpacity="0.12" strokeWidth="2" />
      </pattern>
    </defs>

    {/* Whole page sits slightly off-square: nothing is quite aligned */}
    <g transform="rotate(-4 250 240)">
      <rect x="140" y="30" width="240" height="400" rx="6" fill={SURFACE} stroke="#fff" strokeOpacity="0.18" />

      {/* "Heading" that is really Normal + a stray duplicate in the wrong style */}
      <rect x="166" y="62" width="130" height="12" rx="2" fill="#fff" fillOpacity="0.75" />
      <rect x="182" y="82" width="90" height="8" rx="2" fill={RED} fillOpacity="0.55" />

      {/* Body lines with inconsistent indents */}
      {[
        [164, 106, 190],
        [178, 116, 150],
        [158, 126, 206],
        [190, 136, 120],
      ].map(([x, y, w]) => (
        <rect key={y} x={x} y={y} width={w} height="5" rx="2" fill="#fff" fillOpacity="0.28" />
      ))}

      {/* Broken table: rows drift and a cell runs off the page */}
      {[
        [164, 166, 0],
        [172, 184, 10],
        [158, 202, -6],
      ].map(([x, y, shift]) => (
        <g key={y}>
          <rect x={x} y={y} width="62" height="18" fill="none" stroke="#fff" strokeOpacity="0.25" />
          <rect x={x + 62 + shift} y={y} width="62" height="18" fill="none" stroke="#fff" strokeOpacity="0.25" />
        </g>
      ))}
      <rect x="300" y="184" width="104" height="18" fill={RED} fillOpacity="0.12" stroke={RED} strokeOpacity="0.7" />

      {/* Locked clause that has been written over */}
      <rect x="164" y="250" width="190" height="56" rx="3" fill="url(#rg-hatch)" stroke={RED} strokeDasharray="4 3" />
      {[262, 274, 286].map((y, i) => (
        <rect key={y} x={172 + i * 6} y={y} width={150 - i * 22} height="5" rx="2" fill={RED} fillOpacity="0.5" />
      ))}

      {/* Content dumped at the end of the document */}
      {[340, 352, 364, 376, 388].map((y, i) => (
        <rect key={y} x="164" y={y} width={[196, 150, 180, 120, 170][i]} height="5" rx="2" fill="#fff" fillOpacity="0.18" />
      ))}

      <Cross cx={396} cy={176} />
      <Cross cx={150} cy={278} />

      <Note x={24} y={72} label="Styled as Normal" to={[130, 68, 166, 68]} />
      <Note x={24} y={216} label="Rows out of line" to={[130, 212, 158, 206]} />
      <Note x={24} y={336} label="Clause overwritten" to={[142, 332, 164, 300]} />
      <Note x={400} y={372} label="Dumped at the end" to={[396, 368, 344, 366]} />
    </g>

    {/* The AI, perfectly square and perfectly confident */}
    <g>
      <rect x="318" y="392" width="176" height="42" rx="21" fill={ACCENT} />
      <path d="M338 413l5 5 10-10" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="362" y="418" fontSize="12.5" fontWeight="600" fill="#fff">
        Done, all fixed!
      </text>
    </g>
  </svg>
);
