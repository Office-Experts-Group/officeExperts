// /app/services/microsoft-access/integrate-access-with-power-bi/(components)/ApbiStrain.jsx
import {
  ApbiLimitedChartsArt,
  ApbiScaleArt,
  ApbiExportArt,
  ApbiShareArt,
} from "../(svgs)/ApbiStrainArt";

import styles from "@/styles/apbiStrain.module.scss";

const APBI_STRAINS = [
  {
    id: "charts",
    tile: styles.tileCharts,
    tone: styles.darkTile,
    Art: ApbiLimitedChartsArt,
    title: "Limited visualisation tools",
    text: "Charts and pivot tables in Access can only go so far. The moment someone asks for a map, a drill-through or this year against last year, the honest answer is usually “let me export that for you”.",
  },
  {
    id: "scale",
    tile: styles.tileScale,
    tone: styles.lightTile,
    Art: ApbiScaleArt,
    title: "Scalability issues",
    text: "Performance slows as the file grows and more people open it at once. An Access file also has a 2 GB ceiling, and most databases get sluggish well before they reach it.",
  },
  {
    id: "export",
    tile: styles.tileExport,
    tone: styles.accentTile,
    Art: ApbiExportArt,
    title: "Manual workflows",
    text: "Frequent exports to Excel or CSV just to analyse the data. Every export is a copy, and each copy starts going out of date the moment it is saved.",
  },
  {
    id: "share",
    tile: styles.tileShare,
    tone: styles.tintTile,
    Art: ApbiShareArt,
    title: "Difficulty sharing insights",
    text: "Data often stays locked on one computer or one network. Anyone without Access, or without the right drive mapped, waits for a screenshot or a PDF to arrive by email, and by then the question has usually moved on.",
  },
];

const ApbiStrain = () => (
  <section
    id="apbi-strain"
    className={styles.apbiStrain}
    aria-labelledby="apbi-strain-heading"
  >
    <div className={styles.inner}>
      <header className={styles.header}>
        <h2 id="apbi-strain-heading" className={styles.heading}>
          Why integrate Access{" "}
          <span className={styles.accent}>with Power BI?</span>
        </h2>
        <h3 className={styles.subhead}>
          Turning legacy data into visual dashboards
        </h3>
        <p className={styles.text}>
          Power BI extends the life and value of your Access database. It turns
          the data you already hold into interactive dashboards and regularly
          refreshed reports that can be shared securely within your team.
        </p>
      </header>

      <div className={styles.grid}>
        {APBI_STRAINS.map(({ id, tile, tone, Art, title, text }) => (
          <article key={id} className={`${styles.tile} ${tile} ${tone}`}>
            <div className={styles.art}>
              <Art />
            </div>
            <div className={styles.body}>
              <h3 className={styles.tileTitle}>{title}</h3>
              <p className={styles.tileText}>{text}</p>
            </div>
          </article>
        ))}
      </div>

      <p className={styles.closing}>
        For teams that depend on Access, these limits make it hard to get more
        from assets they already own. Bringing Power BI alongside opens up a
        much wider set of tools to visualise and use your business data.
      </p>
    </div>
  </section>
);

export default ApbiStrain;
