// /services/microsoft-word/document-automation/(components)/AutomationImpact.jsx
import styles from "@/styles/automationImpact.module.scss";

// Before/after pairs laid out as a bento grid.
// area: which grid slot the tile takes (a = tall left, b = wide top right,
// c and d = small bottom right). DOM order matches visual reading order,
// and phones fall back to that order in a single column.
// variant: tile colour. metric: optional headline figure (decorative, the
// before/after text below says the same thing for screen readers).
const scenarios = [
  {
    title: "Client proposals",
    area: "A",
    variant: "Dark",
    metric: { before: "25 min", after: "Seconds" },
    // Time-per-document bars, only on the tall tile (width is a % of the track)
    compare: [
      { label: "Manual", value: "25 min", width: 100 },
      { label: "Automated", value: "Seconds", width: 4 },
    ],
    before:
      "Manually copying client names, addresses and project details into each new proposal, taking 25 minutes per document.",
    after:
      "A single data-entry form populates every field across the entire document in seconds.",
  },
  {
    title: "Brand consistency",
    area: "B",
    variant: "Light",
    before:
      "Each staff member applies their own formatting interpretation, producing inconsistent documents sent to clients.",
    after:
      "A locked template enforces brand standards. Every document looks identical, regardless of who creates it.",
  },
  {
    title: "Landscape pages",
    area: "C",
    variant: "Accent",
    metric: { after: "1 click" },
    before:
      "Inserting a landscape page mid-document breaks the header, footer and page numbering every time.",
    after:
      "One button click inserts a correctly formatted landscape section with matching header and footer automatically.",
  },
  {
    title: "Monthly reports",
    area: "D",
    variant: "Light",
    before:
      "Compiling monthly reports means copying data from multiple spreadsheets, reformatting tables and re-checking page numbers.",
    after:
      "A macro pulls the data, builds the tables and outputs a finished, print-ready document.",
  },
];

const CrossIcon = () => (
  <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
    <circle
      cx="8"
      cy="8"
      r="7.25"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M5.5 5.5l5 5M10.5 5.5l-5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
    <circle cx="8" cy="8" r="8" fill="currentColor" />
    <path
      d="M4.75 8.25l2.1 2.1 4.4-4.6"
      fill="none"
      stroke="var(--check-tick, #fff)"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
    <path
      d="M8 3v10M4 9l4 4 4-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AutomationImpact = () => (
  <section className={styles.wrapper}>
    <div className={styles.inner}>
      <div className={styles.header}>
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

      <div className={styles.bento}>
        {scenarios.map(
          ({ title, area, variant, metric, compare, before, after }) => (
            <article
              key={title}
              className={`${styles.tile} ${styles[`tile${variant}`]} ${styles[`area${area}`]}`}
            >
              <h3 className={styles.tileTitle}>{title}</h3>

              {metric && (
                <div className={styles.highlight} aria-hidden="true">
                  <p className={styles.metric}>
                    {metric.before && (
                      <s className={styles.metricBefore}>{metric.before}</s>
                    )}
                    <span className={styles.metricAfter}>{metric.after}</span>
                  </p>

                  {compare && (
                    <div className={styles.compare}>
                      <span className={styles.compareCaption}>
                        Time per document
                      </span>
                      {compare.map((row, i) => (
                        <div key={row.label} className={styles.compareRow}>
                          <span className={styles.compareLabel}>
                            {row.label}
                          </span>
                          <span className={styles.compareTrack}>
                            <span
                              className={
                                i === 0 ? styles.fillBefore : styles.fillAfter
                              }
                              style={{ width: `${row.width}%` }}
                            />
                          </span>
                          <span className={styles.compareValue}>
                            {row.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className={styles.flow}>
                <div className={styles.state}>
                  <span
                    className={`${styles.stateLabel} ${styles.labelBefore}`}
                  >
                    <CrossIcon />
                    Before
                  </span>
                  <p className={styles.beforeText}>{before}</p>
                </div>

                <span className={styles.divider} aria-hidden="true">
                  <ArrowIcon />
                </span>

                <div className={styles.state}>
                  <span className={`${styles.stateLabel} ${styles.labelAfter}`}>
                    <CheckIcon />
                    After
                  </span>
                  <p className={styles.afterText}>{after}</p>
                </div>
              </div>
            </article>
          ),
        )}
      </div>
    </div>
  </section>
);

export default AutomationImpact;
