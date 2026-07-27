// app/services/activex-vbscript-migration/(components)/MigrationReplaces.jsx

import Link from "next/link";

import AnimateOnScroll from "../../../../components/AnimateOnScroll";
import ScrollLine from "./ScrollLine";
import styles from "../../../../styles/activexReplaces.module.css";

// Cross-site links, kept in one place so URLs are easy to maintain.
const LINKS = {
  excelVba: "https://www.excelexperts.com.au",
  wordContentControls: "https://www.wordexperts.com.au",
  access: "https://www.accessexperts.com.au",
  powerApps:
    "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps",
  powerAutomate:
    "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate",
};

// Category filtering has been removed — the list is short enough that
// filter tabs added interaction cost without helping anyone find anything.
const rows = [
  {
    id: "activex-controls",
    before:
      "An Excel or Word document with ActiveX buttons, date pickers, and dropdown controls that once let staff interact directly with the file.",
    after: (
      <>
        Controls rebuilt using native Content Controls and{" "}
        <Link href={LINKS.excelVba} className={styles.inlineLink}>
          VBA
        </Link>{" "}
        UserForms, technologies Microsoft continues to support, so the same
        interactivity keeps working without a security warning in sight.
      </>
    ),
    tag: "Content Controls · VBA",
    tagHref: LINKS.wordContentControls,
  },
  {
    id: "vbs-automation",
    before:
      "A scheduled task calling an external .vbs script to move files, process backups, or trigger a nightly job.",
    after: (
      <>
        Automation rewritten in PowerShell or, where it makes sense to modernise
        further,{" "}
        <Link href={LINKS.powerAutomate} className={styles.inlineLink}>
          Power Automate
        </Link>
        , keeping the same schedule and outcome on technology that isn't being
        retired out from under you.
      </>
    ),
    tag: "PowerShell · Power Automate",
    tagHref: LINKS.powerAutomate,
  },
  {
    id: "access-objects",
    before:
      "An Access database with forms or reports containing embedded ActiveX objects that now render as flat, unusable images.",
    after: (
      <>
        Forms and reports rebuilt with native Access controls, or migrated to a{" "}
        <Link href={LINKS.powerApps} className={styles.inlineLink}>
          Power Apps
        </Link>{" "}
        front end where the business has outgrown the desktop entirely.
      </>
    ),
    tag: "Access · Power Apps",
    tagHref: LINKS.access,
  },
  {
    id: "undocumented-system",
    before:
      "A business-critical spreadsheet or database built years ago, with the original developer long gone and no documentation to work from.",
    after: (
      <>
        A full audit of the existing logic before a single line changes, so we
        understand exactly what the system does before we touch how it does it.
      </>
    ),
    tag: "Audit · Rebuild",
    tagHref: LINKS.excelVba,
  },
  {
    id: "trust-center",
    before:
      "IT re-enabling ActiveX through the Trust Center or Group Policy just to keep an old form working, quietly widening a known security gap.",
    after: (
      <>
        The form or control rebuilt properly, so Trust Center settings and Group
        Policy can stay locked down the way they're meant to be, rather than
        loosened as a workaround.
      </>
    ),
    tag: "Security Hardening",
    tagHref: LINKS.excelVba,
  },
];

// ─────────────────────────────────────────────
// Single comparison row
// ─────────────────────────────────────────────
const Row = ({ row, index }) => (
  <AnimateOnScroll animation="fade-up" duration={0.55} delay={index * 0.06}>
    <div className={styles.row}>
      {/* ── Before cell ── */}
      <div className={styles.cell}>
        <div className={styles.cellHeader}>
          <span className={styles.xIcon} aria-label="Before — at risk">
            ✕
          </span>
          <span className={styles.cellLabel}>At Risk</span>
        </div>
        <p className={styles.cellText}>{row.before}</p>
      </div>

      {/* ── Divider arrow ── */}
      <div className={styles.arrow} aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="16"
            cy="16"
            r="15"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
          />
          <path
            d="M10 16h12M18 12l4 4-4 4"
            stroke="#046999"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* ── After cell ── */}
      <div className={styles.cell}>
        <div className={styles.cellHeader}>
          <span className={styles.checkIcon} aria-label="After — modernised">
            ✓
          </span>
          <span className={styles.cellLabel}>Modernised</span>
          <Link
            href={row.tagHref}
            className={styles.tagPill}
            aria-label={`Learn more about ${row.tag}`}
          >
            {row.tag}
          </Link>
        </div>
        <p className={styles.cellText}>{row.after}</p>
      </div>
    </div>
  </AnimateOnScroll>
);

// ─────────────────────────────────────────────
// Main component — plain server component, no
// client-side state or filtering required
// ─────────────────────────────────────────────
const MigrationReplaces = () => {
  return (
    <section className={styles.section} id="what-changes">
      {/* ── Section header ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Before &amp; After</span>
          <h2 className={styles.title}>
            What migration <span className={styles.accentText}>actually</span>{" "}
            looks like.
          </h2>
          <p className={styles.intro}>
            Everyone talks about "modernisation". Very few people show you what
            it actually involves. Below are the specific ActiveX and VBScript
            setups we encounter most often in real Australian businesses, broken
            down honestly: what's at risk, why, and precisely what supported
            technology takes its place once we've rebuilt it.
          </p>
        </div>
      </AnimateOnScroll>

      {/* ── Comparison rows, with the scroll line running behind them ── */}
      <div className={styles.rowStack}>
        <ScrollLine />
        {rows.map((row, i) => (
          <Row key={row.id} row={row} index={i} />
        ))}
      </div>
    </section>
  );
};

export default MigrationReplaces;
