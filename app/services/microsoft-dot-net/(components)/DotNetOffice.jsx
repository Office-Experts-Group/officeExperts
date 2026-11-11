// app/services/microsoft-dot-net/(components)/DotNetOffice.jsx
// VSTO add-ins and Office integration: where the group's Office and .NET expertise overlap.
// Compares VSTO, Office web add-ins and VBA, and flags the new Outlook for Windows change.
// Server component. The id "vsto-add-ins" is linked from DotNetIntro.
import Link from "next/link";

// SCSS module from the shared styles directory
import styles from "@/styles/dotNetOffice.module.scss";
// Decorative Office window with an add-in task pane, stored with the route
import { OfficeAddinSvg } from "../(svgs)/OfficeAddinSvg";

// Three ways to extend Office. `facts` share the same labels so the cards line up.
const options = [
  {
    name: "VSTO add-ins",
    summary:
      "Compiled .NET code running inside desktop Office, with full access to the document and the PC.",
    facts: [
      { label: "Runs in", value: "Desktop Office on Windows" },
      { label: "Built with", value: "C# or VB.NET on .NET Framework 4.8" },
      {
        label: "Best for",
        value:
          "Heavy document processing, deep automation and existing add-ins that work well",
      },
    ],
  },
  {
    name: "Office web add-ins",
    summary:
      "Web-based add-ins that load in a task pane, deployed to everyone from the Microsoft 365 admin centre.",
    facts: [
      { label: "Runs in", value: "Office on Windows, Mac and the web, plus the new Outlook" },
      {
        label: "Built with",
        value: "JavaScript or TypeScript, often with an ASP.NET Core back end",
      },
      {
        label: "Best for",
        value: "Organisation-wide tools and anything that must work in the new Outlook",
      },
    ],
  },
  {
    name: "VBA macros",
    summary: (
      <>
        Automation stored inside a document, template or workbook. Our{" "}
        <Link href="/services/vba-macro-development">VBA developers</Link>{" "}
        handle this end of the spectrum.
      </>
    ),
    facts: [
      { label: "Runs in", value: "Desktop Office, mainly on Windows" },
      { label: "Built with", value: "VBA inside the file itself" },
      {
        label: "Best for",
        value: "Quick automation in a single template or workbook",
      },
    ],
  },
];

const DotNetOffice = () => {
  return (
    <section
      id="vsto-add-ins"
      className={styles.section}
      aria-labelledby="vsto-heading"
    >
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.visual} aria-hidden="true">
            <OfficeAddinSvg />
          </div>

          <header className={styles.header}>
            <span className={styles.eyebrow}>VSTO and Office add-ins</span>
            <h2 id="vsto-heading" className={styles.heading}>
              Where .NET meets{" "}
              <span className={styles.accent}>Word, Excel and Outlook</span>
            </h2>
            <p className={styles.intro}>
              VSTO (Visual Studio Tools for Office) add-ins are .NET code that
              runs inside Microsoft Office, adding custom ribbons, task panes
              and automation. They are a big part of our work because they sit
              exactly where our Office and .NET experience overlaps, from{" "}
              <Link href="/services/microsoft-word">
                Word template and document automation
              </Link>{" "}
              to Excel tools that crunch data the built-in features can&rsquo;t.
            </p>
            <p className={styles.intro}>
              Microsoft still supports VSTO, with .NET Framework 4.8 as its last
              major version, so a working add-in doesn&rsquo;t need replacing.
              VSTO can&rsquo;t be built on modern .NET, though, which shapes
              what we recommend for new work.
            </p>
          </header>
        </div>

        {/* ── Options ── */}
        <div className={styles.options}>
          {options.map(({ name, summary, facts }) => (
            <article key={name} className={styles.option}>
              <h3 className={styles.optionName}>{name}</h3>
              <p className={styles.optionSummary}>{summary}</p>
              <dl className={styles.facts}>
                {facts.map(({ label, value }) => (
                  <div key={label} className={styles.fact}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        {/* ── New Outlook warning ── */}
        <div className={styles.outlook}>
          <div className={styles.outlookText}>
            <h3 className={styles.outlookTitle}>Moving to the new Outlook?</h3>
            <p>
              The new Outlook for Windows only loads web add-ins, so COM and
              VSTO add-ins stop working once your staff switch over. We rebuild
              Outlook VSTO add-ins as web add-ins, keeping the server-side .NET
              logic where it still makes sense, and can run both side by side
              during the changeover.
            </p>
          </div>
          <Link href="#contact" className={styles.outlookBtn}>
            Review my Outlook add-ins
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DotNetOffice;
