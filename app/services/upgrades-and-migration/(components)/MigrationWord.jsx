// app/services/upgrades-and-migration/(components)/MigrationWord.jsx
// Word-specific upgrade content, merged in from the old Word Experts
// upgrades page. Server component: no client JavaScript needed.

import Link from "next/link";
import styles from "@/styles/migrationWord.module.scss";

// Word's version history, oldest first. Shown as a timeline because each
// era leaves behind a different kind of legacy problem.
const eras = [
  {
    version: "Word 97–2003",
    format: ".doc / .dot",
    breaks:
      "Custom toolbars and menus get pushed into the Add-ins tab, documents open in Compatibility Mode, and legacy form fields behave differently.",
  },
  {
    version: "Word 2007–2010",
    format: ".docx / .dotm",
    breaks:
      "The ribbon arrives. Old menu customisations stop making sense, and ribbon code written for one version needs reworking for the next.",
  },
  {
    version: "Word 2013–2021",
    format: "32-bit to 64-bit",
    breaks:
      "64-bit Office becomes the default install. VBA Declare statements without PtrSafe and 32-bit ActiveX controls fail to compile or load.",
  },
  {
    version: "Microsoft 365",
    format: "Cloud and co-authoring",
    breaks:
      "Macros and ActiveX don't run in Word for the web, co-authoring needs modern files, and templates on mapped network drives disappear for remote staff.",
  },
];

// What we actually do on a Word upgrade. Unordered, so no numbering.
const fixes = [
  {
    title: "Template conversion and rebuilds",
    body: "Old .dot templates converted to .dotx or .dotm and rebuilt on proper styles, so they stop drifting out of shape after every update.",
    link: {
      href: "/services/microsoft-word/word-template-conversions",
      label: "Word template conversions",
    },
  },
  {
    title: "Macro and VBA remediation",
    body: "Code made 64-bit safe, deprecated ActiveX controls replaced, and macros tested against the versions your staff actually use.",
    link: {
      href: "/services/activex-vbscript-migration",
      label: "ActiveX and VBScript migration",
    },
  },
  {
    title: "Bulk document library conversion",
    body: "Thousands of legacy .doc files converted to .docx with custom migration scripts, then checked for layout shifts rather than assumed fine.",
    link: null,
  },
  {
    title: "Ribbons and add-ins rebuilt",
    body: "Custom toolbars from older versions rebuilt as modern ribbon tabs, so the tools your team relies on don't vanish on upgrade day.",
    link: {
      href: "/services/microsoft-word/custom-toolbars-and-ribbons",
      label: "Custom Word ribbons",
    },
  },
  {
    title: "Templates delivered through SharePoint and Teams",
    body: "Workgroup templates moved off network drives and published centrally, so every staff member opens the current version, wherever they work.",
    link: null,
  },
  {
    title: "Integrations kept working",
    body: "Mail merges and document generation that pull from Access, Excel or SQL Server re-tested and reconnected after the move.",
    link: {
      href: "/services/microsoft-word/mail-merge",
      label: "Word mail merge solutions",
    },
  },
];

// Small diagonal arrow used on card links, matching the sibling components
const ArrowIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MigrationWord = () => {
  return (
    <section
      className={styles.section}
      id="word"
      aria-labelledby="word-heading"
    >
      <div className={styles.inner}>
        {/* ── Header ── */}
        <header className={styles.header}>
          <p className={styles.eyebrow}>Microsoft Word upgrades</p>
          <h2 id="word-heading" className={styles.heading}>
            Word is the part of an upgrade{" "}
            <span className={styles.accent}>nobody plans for.</span>
          </h2>
          <div className={styles.intro}>
            <p>
              Most organisations have Word templates, macros and document
              libraries built across several versions of Office. They keep
              working until the day IT rolls out Microsoft 365, moves files to
              SharePoint or switches staff to 64-bit, and then formatting
              breaks, macros stop running and branded templates quietly fall
              apart.
            </p>
            <p>
              Our Word specialists have been fixing exactly this since 2000. We
              test your documents across versions before the upgrade, fix what
              will break, and leave you with templates built to last, whether
              you&rsquo;re coming from Word 2003 or moving across from{" "}
              <Link
                href="/services/microsoft-word/word-template-conversions"
                className={styles.inlineLink}
              >
                Google Docs to Word
              </Link>
              .
            </p>
          </div>
        </header>

        {/* ── Version timeline: chronological, so order matters here ── */}
        <ol className={styles.timeline}>
          {eras.map((era) => (
            <li key={era.version} className={styles.era}>
              <span className={styles.format}>{era.format}</span>
              <h3 className={styles.version}>{era.version}</h3>
              <p>{era.breaks}</p>
            </li>
          ))}
        </ol>

        {/* ── What we fix ── */}
        <ul className={styles.fixes}>
          {fixes.map((fix) => (
            <li key={fix.title} className={styles.fix}>
              <h3>{fix.title}</h3>
              <p>{fix.body}</p>
              {fix.link && (
                <Link href={fix.link.href} className={styles.fixLink}>
                  {fix.link.label}
                  <ArrowIcon />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MigrationWord;
