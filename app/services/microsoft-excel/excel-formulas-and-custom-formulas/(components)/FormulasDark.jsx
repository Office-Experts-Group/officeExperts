// /app/services/microsoft-excel/excel-formulas-and-custom-formulas/(components)/FormulasDark.jsx

import Link from "next/link";

import styles from "@/styles/formulasDark.module.scss";
import {
  FormulasPerformanceArt,
  FormulasDesignArt,
  FormulasCustomArt,
} from "../(svgs)/FormulasPillarArt";

/* Three visual anchors that sit below the main paragraph */
const FORMULAS_PILLARS = [
  {
    Art: FormulasPerformanceArt,
    label: "Performance",
    note: "Correct formula structure prevents crashes, corruption and slow workbooks.",
  },
  {
    Art: FormulasDesignArt,
    label: "Formula Design",
    note: "The right formula in the right place keeps workbooks clean and auditable.",
  },
  {
    Art: FormulasCustomArt,
    label: "Custom Solutions",
    note: "Bespoke formulas and macros built around your exact workflow.",
  },
];

const FormulasDark = () => {
  return (
    <section
      id="frm-overview"
      className={styles.formulasDark}
      aria-labelledby="frm-overview-heading"
    >
      <div className={styles.inner}>
        <div className={styles.top}>
          <h2 id="frm-overview-heading" className={styles.heading}>
            VBA Solutions, <span className={styles.accent}>done properly.</span>
          </h2>

          <div className={styles.body}>
            <p>
              Formula intensive workbooks often lead to high maintenance and
              inaccurate results over their lifetime. In fact, workbooks that
              use formulas intensively can result in poor performance, and cause
              crashes and data corruption, so it matters that formulas are set
              up correctly and not overused. Often a few cleverly written macros
              can lead to a more manageable and workable workbook, saving you
              time, money and a few headaches over the long term.
            </p>
            <Link href="#contact">We can build you a custom solution.</Link>
          </div>
        </div>

        <ul className={styles.pillars}>
          {FORMULAS_PILLARS.map(({ Art, label, note }) => (
            <li key={label} className={styles.pillar}>
              <div className={styles.iconWrap}>
                <Art />
              </div>
              <h3 className={styles.pillarLabel}>{label}</h3>
              <p className={styles.pillarNote}>{note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FormulasDark;
