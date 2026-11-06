// /services/microsoft-word/document-automation/(svgs)/AutomationVisual.jsx
//
// Decorative hero illustration: a messy, badly formatted Word page. A cursor
// clicks "Run automation" on a custom ribbon, every element snaps into place,
// the page gets a tick, and the finished document goes out as PDF and email.
//
// Pure SVG + CSS keyframes, so it stays a server component. Resting styles are
// the FINISHED state; the keyframes supply the mess. prefers-reduced-motion
// switches the animations off and shows the finished document.
import styles from "@/styles/automationVisual.module.scss";

// Page elements. dx/dy/rot: how far out of place each starts.
// box: x, y, w, h of the dashed "error" outline shown while it's misaligned.
const ELEMENTS = [
  { id: "header", dx: -26, dy: -18, rot: -7, delay: 0, box: [166, 118, 228, 46] },
  { id: "heading", dx: 34, dy: -10, rot: 5, delay: 0.08, box: [166, 170, 162, 24] },
  { id: "para", dx: -36, dy: 8, rot: -4, delay: 0.16, box: [166, 196, 228, 44] },
  { id: "table", dx: 42, dy: 14, rot: 8, delay: 0.24, box: [166, 244, 228, 76] },
  { id: "figure", dx: -30, dy: 22, rot: -10, delay: 0.32, box: [166, 324, 112, 70] },
  { id: "side", dx: 30, dy: 30, rot: 6, delay: 0.4, box: [278, 328, 116, 44] },
  { id: "footer", dx: -18, dy: 24, rot: 3, delay: 0.48, box: [166, 404, 228, 27] },
];

const TOOLS = [
  "M-8 -6H8M-8 0H4M-8 6H8", // align
  "M-8 -6H8V6H-8ZM-8 0H8M0 -6V6", // table
  "M-8 -6H8V6H-8ZM-8 4L-3 -1L2 4L5 1L8 4", // image
  "M-8 -6H8M-8 -1H8M-8 4H2", // header
  "M-6 -7H6V7H-6ZM-6 0H6", // page break
];

const INPUTS = [
  { label: "Client data", y: 196, icon: "M-6 -5H6V5H-6ZM-6 0H6M0 -5V5" },
  { label: "Clauses", y: 252, icon: "M-6 -5H6M-6 0H6M-6 5H2" },
];

const OUTPUTS = [
  { label: "PDF", y: 300, delay: 0, icon: "M-5 -7H3L6 -4V7H-5ZM-2 0H3M-2 3H3" },
  { label: "Email", y: 352, delay: 0.25, icon: "M-7 -5H7V5H-7ZM-7 -5L0 1L7 -5" },
];

const PageElement = ({ id }) => {
  switch (id) {
    case "header":
      return (
        <>
          <rect className={styles.logo} x="172" y="124" width="24" height="24" rx="6" />
          <rect className={styles.barStrong} x="204" y="128" width="110" height="7" rx="3.5" />
          <rect className={styles.bar} x="204" y="140" width="70" height="5" rx="2.5" />
          <path className={styles.rule} d="M172 158H388" />
        </>
      );
    case "heading":
      return <rect className={styles.barHeading} x="172" y="176" width="150" height="12" rx="4" />;
    case "para":
      return (
        <>
          <rect className={styles.bar} x="172" y="202" width="216" height="6" rx="3" />
          <rect className={styles.bar} x="172" y="215" width="204" height="6" rx="3" />
          <rect className={styles.bar} x="172" y="228" width="176" height="6" rx="3" />
        </>
      );
    case "table":
      return (
        <>
          <rect className={styles.frame} x="172" y="250" width="216" height="64" rx="6" />
          <path
            className={styles.tableHead}
            d="M178 250H382A6 6 0 0 1 388 256V270H172V256A6 6 0 0 1 178 250Z"
          />
          <path className={styles.rule} d="M172 292H388M244 250V314M316 250V314" />
        </>
      );
    case "figure":
      return (
        <>
          <rect className={styles.frame} x="172" y="330" width="100" height="58" rx="6" />
          <rect className={styles.barAccent} x="186" y="364" width="12" height="16" rx="2" />
          <rect className={styles.barAccent} x="204" y="352" width="12" height="28" rx="2" />
          <rect className={styles.barAccent} x="222" y="344" width="12" height="36" rx="2" />
          <rect className={styles.barAccent} x="240" y="356" width="12" height="24" rx="2" />
        </>
      );
    case "side":
      return (
        <>
          <rect className={styles.bar} x="284" y="334" width="104" height="6" rx="3" />
          <rect className={styles.bar} x="284" y="347" width="96" height="6" rx="3" />
          <rect className={styles.bar} x="284" y="360" width="80" height="6" rx="3" />
        </>
      );
    case "footer":
    default:
      return (
        <>
          <path className={styles.rule} d="M172 410H388" />
          <rect className={styles.bar} x="172" y="420" width="90" height="5" rx="2.5" />
          <rect className={styles.bar} x="364" y="420" width="24" height="5" rx="2.5" />
        </>
      );
  }
};

const Chip = ({ x, y, label, icon }) => (
  <>
    <rect className={styles.chip} x={x} y={y} width="104" height="38" rx="10" />
    <path className={styles.chipIcon} d={icon} transform={`translate(${x + 20} ${y + 19})`} />
    <text className={styles.chipText} x={x + 34} y={y + 23}>
      {label}
    </text>
  </>
);

const AutomationVisual = () => (
  <div className={styles.visual}>
    <svg className={styles.svg} viewBox="0 0 560 480" role="img" aria-labelledby="av-title">
      <title id="av-title">
        A badly formatted Word document being automatically formatted with one
        click, then sent out as a PDF and an email
      </title>

      <defs>
        <pattern id="av-dots" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="1" className={styles.gridDot} />
        </pattern>
        <radialGradient id="av-fade-grad">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="#000" />
        </radialGradient>
        <mask id="av-fade">
          <rect width="560" height="480" fill="url(#av-fade-grad)" />
        </mask>
        <radialGradient id="av-glow-grad">
          <stop offset="0%" className={styles.glowStopInner} />
          <stop offset="100%" className={styles.glowStopOuter} />
        </radialGradient>
      </defs>

      <rect width="560" height="480" fill="url(#av-dots)" mask="url(#av-fade)" />
      <circle cx="280" cy="280" r="210" fill="url(#av-glow-grad)" className={styles.glow} />

      {/* Custom ribbon */}
      <rect className={styles.ribbon} x="40" y="24" width="480" height="56" rx="14" />
      {TOOLS.map((d, i) => {
        const x = 56 + i * 48;
        return (
          <g key={d}>
            <rect className={styles.tool} x={x} y="36" width="36" height="32" rx="8" />
            <path className={styles.toolIcon} d={d} transform={`translate(${x + 18} 52)`} />
          </g>
        );
      })}
      <path className={styles.rule} d="M300 36V68" />
      <rect className={styles.runBtn} x="316" y="34" width="188" height="36" rx="10" />
      <path className={styles.runIcon} d="M-4 -6L6 0L-4 6Z" transform="translate(338 52)" />
      <text className={styles.runText} x="352" y="56">
        Run automation
      </text>

      {/* Inputs feeding the document */}
      {INPUTS.map((c) => (
        <g key={c.label}>
          <path
            className={styles.connector}
            d={`M126 ${c.y + 19}H150`}
            pathLength="1"
          />
          <Chip x={22} y={c.y} label={c.label} icon={c.icon} />
        </g>
      ))}

      {/* The page */}
      <rect className={styles.page} x="150" y="104" width="260" height="352" rx="12" />

      {ELEMENTS.map((el) => {
        const [bx, by, bw, bh] = el.box;
        return (
          <g
            key={el.id}
            className={styles.element}
            style={{
              "--dx": `${el.dx}px`,
              "--dy": `${el.dy}px`,
              "--rot": `${el.rot}deg`,
              "--delay": `${el.delay}s`,
            }}
          >
            <rect className={styles.flag} x={bx} y={by} width={bw} height={bh} rx="6" />
            <PageElement id={el.id} />
          </g>
        );
      })}

      {/* Formatted tick */}
      <g transform="translate(410 104)">
        <g className={styles.badge}>
          <circle className={styles.badgeCircle} r="18" />
          <path className={styles.badgeCheck} d="M-7 0L-2 5L8 -5" />
        </g>
      </g>

      {/* Outputs */}
      {OUTPUTS.map((c) => (
        <g key={c.label}>
          <path
            className={`${styles.connector} ${styles.connectorOut}`}
            d={`M410 ${c.y + 19}H432`}
            pathLength="1"
            style={{ "--delay": `${c.delay}s` }}
          />
          <g className={styles.output} style={{ "--delay": `${c.delay}s` }}>
            <Chip x={432} y={c.y} label={c.label} icon={c.icon} />
          </g>
        </g>
      ))}

      {/* Click ripple + cursor, both resting on the Run button */}
      <circle className={styles.ripple} cx="420" cy="58" r="20" />
      <g className={styles.cursor}>
        <path
          className={styles.cursorShape}
          transform="translate(420 58)"
          d="M0 0L0 17L4.5 13L7.5 20L10.5 18.8L7.6 12L13 12Z"
        />
      </g>
    </svg>
  </div>
);

export default AutomationVisual;
