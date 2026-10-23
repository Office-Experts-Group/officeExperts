// app/copilot-and-ai-templates/(svgs)/BlueprintDocumentSvg.jsx
// Hero illustration: an AI-ready Word template drawn as a blueprint.
// Elements with className "bp-fill" are animated by aiTemplatesHero.module.scss
// (they "fill in" as if Copilot is completing the content controls).
// Colours are hard-coded hex values that mirror the globals.scss tokens.

const ACCENT = "#046999";
const ACCENT_LIGHT = "#e8f4fa";
const INK = "#0d1b2a";
const MUTED = "#9a9da1";

// Leader-line annotation on the left of the page
const Annotation = ({ label, y, toY }) => (
  <g>
    <text x="24" y={y} fontSize="11" fontWeight="600" fill={ACCENT}>
      {label}
    </text>
    <path
      d={`M${24 + label.length * 6.2} ${y - 4} H130 L172 ${toY}`}
      fill="none"
      stroke={ACCENT}
      strokeOpacity="0.45"
    />
    <circle cx="172" cy={toY} r="2.5" fill={ACCENT} />
  </g>
);

// Dashed content control with a titled tab, as Word shows them in design mode
const ContentControl = ({ x, y, w, h, title, tabW }) => (
  <g>
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx="3"
      fill={ACCENT_LIGHT}
      fillOpacity="0.55"
      stroke={ACCENT}
      strokeDasharray="4 3"
    />
    <rect x={x} y={y - 12} width={tabW} height="12" rx="2" fill={ACCENT} />
    <text x={x + 6} y={y - 3.5} fontSize="8" fontWeight="600" fill="#fff">
      {title}
    </text>
  </g>
);

// Bar that animates in; delay staggers the fill sequence
const FillBar = ({ x, y, w, h = 6, delay }) => (
  <rect
    className="bp-fill"
    x={x}
    y={y}
    width={w}
    height={h}
    rx="2"
    fill={ACCENT}
    fillOpacity="0.6"
    style={{ animationDelay: `${delay}s` }}
  />
);

export const BlueprintDocumentSvg = () => (
  <svg
    viewBox="0 0 560 480"
    xmlns="http://www.w3.org/2000/svg"
    fontFamily="inherit"
    aria-hidden="true"
  >
    <defs>
      <pattern id="bp-grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M20 0H0V20" fill="none" stroke={ACCENT} strokeOpacity="0.08" />
      </pattern>
      <pattern
        id="bp-hatch"
        width="6"
        height="6"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(45)"
      >
        <line x1="0" y1="0" x2="0" y2="6" stroke={MUTED} strokeOpacity="0.35" strokeWidth="2" />
      </pattern>
      <filter id="bp-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor={ACCENT} floodOpacity="0.12" />
      </filter>
    </defs>

    {/* ── Blueprint grid ── */}
    <rect width="560" height="480" rx="12" fill="url(#bp-grid)" />

    {/* ── Page ── */}
    <rect
      x="150"
      y="30"
      width="260"
      height="420"
      rx="6"
      fill="#fff"
      stroke={ACCENT}
      strokeOpacity="0.3"
      filter="url(#bp-shadow)"
    />

    {/* Letterhead */}
    <rect x="176" y="54" width="40" height="12" rx="2" fill={ACCENT} />
    <rect x="330" y="54" width="54" height="4" rx="2" fill={MUTED} fillOpacity="0.5" />
    <rect x="344" y="62" width="40" height="4" rx="2" fill={MUTED} fillOpacity="0.5" />

    {/* Heading 1 + body text */}
    <rect x="176" y="90" width="150" height="12" rx="2" fill={INK} />
    <rect x="176" y="114" width="208" height="5" rx="2" fill={MUTED} fillOpacity="0.45" />
    <rect x="176" y="124" width="190" height="5" rx="2" fill={MUTED} fillOpacity="0.45" />
    <rect x="176" y="134" width="200" height="5" rx="2" fill={MUTED} fillOpacity="0.45" />

    {/* Content control 1 */}
    <ContentControl x={172} y={162} w={216} h={30} title="Client name" tabW={60} />
    <FillBar x={182} y={174} w={120} delay={0.3} />

    {/* Heading 2 */}
    <rect x="176" y="208" width="110" height="9" rx="2" fill={ACCENT} />

    {/* Content control 2 */}
    <ContentControl x={172} y={238} w={216} h={52} title="Scope of work" tabW={70} />
    <FillBar x={182} y={248} w={190} delay={0.7} />
    <FillBar x={182} y={260} w={170} delay={0.85} />
    <FillBar x={182} y={272} w={130} delay={1} />

    {/* Content control 3: fee table */}
    <ContentControl x={172} y={312} w={216} h={50} title="Fee schedule" tabW={64} />
    <rect x="180" y="319" width="200" height="10" rx="1" fill={ACCENT} fillOpacity="0.18" />
    {[329, 341].map((y) => (
      <line key={y} x1="180" y1={y} x2="380" y2={y} stroke={ACCENT} strokeOpacity="0.25" />
    ))}
    {[246, 314].map((x) => (
      <line key={x} x1={x} y1="319" x2={x} y2="354" stroke={ACCENT} strokeOpacity="0.25" />
    ))}
    <FillBar x={186} y={333} w={50} h={5} delay={1.25} />
    <FillBar x={252} y={333} w={40} h={5} delay={1.35} />
    <FillBar x={320} y={333} w={44} h={5} delay={1.45} />
    <FillBar x={186} y={345} w={42} h={5} delay={1.55} />
    <FillBar x={320} y={345} w={52} h={5} delay={1.65} />

    {/* Locked clause */}
    <rect
      x="172"
      y="378"
      width="216"
      height="52"
      rx="3"
      fill="url(#bp-hatch)"
      stroke={MUTED}
      strokeOpacity="0.55"
    />
    <rect x="182" y="398" width="12" height="10" rx="2" fill={INK} fillOpacity="0.7" />
    <path d="M184.5 398v-3a3.5 3.5 0 0 1 7 0v3" fill="none" stroke={INK} strokeOpacity="0.7" strokeWidth="1.6" />
    <rect x="204" y="392" width="160" height="4" rx="2" fill={MUTED} fillOpacity="0.6" />
    <rect x="204" y="401" width="170" height="4" rx="2" fill={MUTED} fillOpacity="0.6" />
    <rect x="204" y="410" width="120" height="4" rx="2" fill={MUTED} fillOpacity="0.6" />

    {/* ── Left annotations ── */}
    <Annotation label="Heading 1" y={100} toY={96} />
    <Annotation label="Body text" y={132} toY={126} />
    <Annotation label="Table style" y={340} toY={336} />
    <Annotation label="Locked clause" y={408} toY={404} />

    {/* ── AI node and connectors to each content control ── */}
    {[177, 264, 337].map((y) => (
      <g key={y}>
        <path
          d={`M462 250 C 430 250, 420 ${y}, 392 ${y}`}
          fill="none"
          stroke={ACCENT}
          strokeOpacity="0.6"
          strokeDasharray="3 4"
        />
        <circle cx="392" cy={y} r="3" fill={ACCENT} />
      </g>
    ))}
    <circle cx="490" cy="250" r="30" fill={ACCENT} />
    <path
      d="M490 234c1.8 9.5 5.5 13.2 15 15-9.5 1.8-13.2 5.5-15 15-1.8-9.5-5.5-13.2-15-15 9.5-1.8 13.2-5.5 15-15z"
      fill="#fff"
    />
    <text x="490" y="300" fontSize="12" fontWeight="700" fill={INK} textAnchor="middle">
      Copilot
    </text>
    <text x="490" y="315" fontSize="10" fill="#4a5568" textAnchor="middle">
      fills the controls
    </text>
  </svg>
);
