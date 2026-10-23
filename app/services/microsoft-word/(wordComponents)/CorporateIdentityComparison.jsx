// app/services/microsoft-word/(wordComponents)/CorporateIdentityComparison.jsx
import styles from "@/styles/corporateIdentityComparison.module.scss";

// Displays the two annotated ribbon images below the meters
import TabComparison from "../corporate-identity/(components)/TabComparison";

// Total formatting controls audited on the Word Home ribbon
const TOTAL = 32;

// Locked controls for each approach
const meters = [
  { key: "ms", name: "Microsoft Restricted Editing", locked: 23 },
  { key: "oeg", name: "Office Experts governed template", locked: 4 },
];

const CorporateIdentityComparison = () => {
  return (
    <section className={styles.section}>
      <div className={styles.meters}>
        {meters.map((meter) => (
          <div
            key={meter.key}
            className={`${styles.meter} ${styles[`meter_${meter.key}`]}`}
          >
            <div className={styles.meterTop}>
              <span className={styles.meterName}>{meter.name}</span>
              <span className={styles.meterValue}>
                {meter.locked} of {TOTAL}
              </span>
            </div>
            {/* --fill sets the bar width as a percentage of TOTAL */}
            <div className={styles.meterTrack}>
              <div
                className={styles.meterFill}
                style={{ "--fill": `${(meter.locked / TOTAL) * 100}%` }}
              />
            </div>
            <span className={styles.meterCaption}>
              formatting controls locked
            </span>
          </div>
        ))}
      </div>

      <TabComparison />
    </section>
  );
};

export default CorporateIdentityComparison;
