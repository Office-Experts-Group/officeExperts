// /app/services/microsoft-power-platform/(components)/PphIntro.jsx
import styles from "@/styles/pphIntro.module.scss";

import PphLifecycle from "./PphLifecycle";
import Link from "next/link";

const PphIntro = () => (
  <>
    <section
      id="pph-intro"
      className={styles.pphIntro}
      aria-labelledby="pph-intro-heading"
    >
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.head}>
            <p className={styles.eyebrow}>Custom design and development</p>
            <h2 id="pph-intro-heading" className={styles.heading}>
              Microsoft Power Platform{" "}
              <span className={styles.accent}>consulting services</span>
            </h2>
          </div>

          <div className={styles.text}>
            <p>
              You don’t need to know exactly what you need before you call us.
              Tell us what’s slowing your business down, and our consultants
              will take it from there.
            </p>
            <p>
              We start with a
              <Link href="/services/business-analysis"> business analysis</Link>
              . We look at how your team works today, where time is being lost
              and what you already have in place. Then we design a solution
              using Microsoft’s Power Platform that suits your budget and the
              complexity of your business, whether that’s a single app, an
              automated workflow or a full system that connects them all.
            </p>
          </div>
        </div>
      </div>
    </section>
    <PphLifecycle />
  </>
);

export default PphIntro;
