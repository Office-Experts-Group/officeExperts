// app/services/power-pivot/(components)/PowerPivotSigns.jsx
// Bento grid of the everyday spreadsheet problems a Power Pivot model removes.
// Each tile pairs a symptom with its fix. Server component, no client JavaScript required.

// Compiled CSS module (source: styles/powerPivotSigns.module.scss)
import styles from "@/styles/powerPivotSigns.module.scss";

// One tile per problem. `tone` sets the tile colour and `motif` is a decorative visual
// (hidden from assistive tech). The grid placement is handled by :nth-child in the SCSS,
// so keep the order: tall accent, wide light, dark, light, wide accent.
const tiles = [
  {
    tone: styles.toneAccent,
    motif: (
      <>
        <span className={styles.numeral}>1,048,576</span>
        <span className={styles.numeralLabel}>
          rows, then the worksheet stops
        </span>
      </>
    ),
    before: "The workbook freezes, or runs into the 1,048,576-row limit",
    after: "The Data Model holds far more data and stays responsive",
  },
  {
    tone: styles.toneLight,
    motif: (
      <code className={styles.formula}>=VLOOKUP(A2, Prices!A:D, 4, FALSE)</code>
    ),
    before: "VLOOKUP and INDEX/MATCH columns stitch the tables together",
    after: "Relationships join the tables with no helper columns",
  },
  {
    tone: styles.toneDark,
    motif: <span className={styles.chip}>[Total Sales]</span>,
    before: "Every report carries its own copy of the formulas",
    after: "Each measure is defined once and shared by every pivot table",
  },
  {
    tone: styles.toneLight,
    motif: <span className={styles.chip}>&#8635; Refresh</span>,
    before: "Month end means copying, pasting and double-checking",
    after: "Refresh the model and every report updates",
  },
  {
    tone: styles.toneAccent,
    motif: (
      <span className={styles.avatars}>
        <i />
        <i />
        <i />
      </span>
    ),
    before: "Only one person really understands the workbook",
    after: "A structured model the whole team can slice and explore",
  },
];

const PowerPivotSigns = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Is it time to switch?</span>
          <h2 className={styles.heading}>
            When regular pivot tables{" "}
            <span className={styles.accent}>stop being enough.</span>
          </h2>
          <p>
            Standard pivot tables work well on a single clean table. These are
            the signs your reporting has outgrown them.
          </p>
        </header>

        <div className={styles.grid}>
          {tiles.map(({ tone, motif, before, after }) => (
            <article key={before} className={`${styles.tile} ${tone}`}>
              <div className={styles.motif} aria-hidden="true">
                {motif}
              </div>

              <div className={styles.copy}>
                <div className={styles.problem}>
                  <span className={styles.label}>
                    <span aria-hidden="true">&#10005;</span> Spreadsheet today
                  </span>
                  <p>{before}</p>
                </div>
                <div className={styles.fix}>
                  <span className={styles.label}>
                    <span aria-hidden="true">&#10003;</span> With a Power Pivot
                    model
                  </span>
                  <p>{after}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PowerPivotSigns;
