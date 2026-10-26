// /services/microsoft-word/document-automation/(components)/AutomationImpact.jsx
import styles from "@/styles/automationImpact.module.scss";

// Before/after pairs showing what automation changes in day-to-day document work
const scenarios = [
  {
    before:
      "Manually copying client names, addresses and project details into each new proposal, taking 25 minutes per document.",
    after:
      "A single data-entry form populates every field across the entire document in seconds.",
  },
  {
    before:
      "Inserting a landscape page mid-document breaks the header, footer and page numbering every time.",
    after:
      "One button click inserts a correctly formatted landscape section with matching header and footer automatically.",
  },
  {
    before:
      "Each staff member applies their own formatting interpretation, producing inconsistent documents sent to clients.",
    after:
      "A locked template enforces brand standards. Every document looks identical, regardless of who creates it.",
  },
  {
    before:
      "Compiling monthly reports means copying data from multiple spreadsheets, reformatting tables and re-checking page numbers.",
    after:
      "A macro pulls the data, builds the tables and outputs a finished, print-ready document.",
  },
];

const AutomationImpact = () => (
  <section className={styles.wrapper}>
    <div className={styles.inner}>
      <div className={styles.headerCol}>
        <p className={styles.eyebrow}>Real Business Outcomes</p>
        <h2 className={styles.heading}>
          What Automation{" "}
          <span className={styles.accent}>Actually Looks Like</span>
        </h2>
        <p className={styles.subheading}>
          Document automation might sound like a buzzword that will
          overcomplicate your existing system, but it is most often built with
          the standard tools already inside Microsoft Word. We use VBA macros to
          run multi-step tasks at the click of a button, Building Blocks to
          insert pre-formatted content instantly, Content Controls to guide
          users through structured data entry, and field codes to keep dates,
          titles and page numbers current. Implemented correctly, the result is
          easy to use, frees up time and quickly becomes an essential part of
          your workplace.
        </p>
      </div>
    </div>

    <div className={styles.scenarioList}>
      {scenarios.map(({ before, after }, i) => (
        <div key={i} className={styles.scenario}>
          {/* Decorative spine: number plus a connecting line to the next row (hidden from screen readers) */}
          <div className={styles.spine} aria-hidden="true">
            <div className={styles.spineNumber}>{i + 1}</div>
            {i < scenarios.length - 1 && <div className={styles.spineLine} />}
          </div>

          <div className={styles.panels}>
            <div className={styles.beforePanel}>
              <span className={styles.stateLabel} data-type="before">
                Before
              </span>
              <p className={styles.panelText}>{before}</p>
            </div>
            <div className={styles.afterPanel}>
              <span className={styles.stateLabel} data-type="after">
                After
              </span>
              <p className={styles.panelText}>{after}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default AutomationImpact;
