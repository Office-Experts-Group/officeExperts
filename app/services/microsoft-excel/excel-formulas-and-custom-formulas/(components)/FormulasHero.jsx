// /app/services/microsoft-excel/excel-formulas-and-custom-formulas/(components)/FormulasHero.jsx

import Link from "next/link";

import styles from "@/styles/formulasHero.module.scss";
import FormulasHeroSvg from "../(svgs)/FormulasHeroSvg";
import { ArrowIcon, CheckIcon } from "../(svgs)/FormulasIcons";

const FORMULAS_TRUST = [
  "VLOOKUP, XLOOKUP and INDEX/MATCH",
  "Custom formulas built with VBA",
  "Remote or onsite across Australia",
];

const FormulasHero = () => {
  return (
    <section
      id="frm-hero"
      className={styles.formulasHero}
      aria-labelledby="frm-hero-title"
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1 id="frm-hero-title" className={styles.heading}>
            Excel <span className={styles.accent}>Custom Formulas</span>
          </h1>
          <p className={styles.lede}>
            Stuck on a formula, or need one Excel doesn’t have? Our experts
            write, fix and speed up Excel formulas, and build custom formulas
            around the way your business works.
          </p>

          <div className={styles.actions}>
            <Link href="#contact" className="btn">
              Talk to a formula expert
            </Link>
            <Link href="#frm-approach" className={styles.secondaryLink}>
              How we approach formulas
              <ArrowIcon />
            </Link>
          </div>

          <ul className={styles.trust}>
            {FORMULAS_TRUST.map((item) => (
              <li key={item} className={styles.trustItem}>
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.art}>
          <FormulasHeroSvg flowClass={styles.flow} liveClass={styles.live} />
        </div>
      </div>
    </section>
  );
};

export default FormulasHero;
