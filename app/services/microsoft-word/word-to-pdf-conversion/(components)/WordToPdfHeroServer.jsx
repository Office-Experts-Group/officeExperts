// app/word-to-pdf-conversion/(components)/WordToPdfHeroServer.jsx
import Link from "next/link";
import WordToPdfHero from "./WordToPdfHero";

import styles from "../../../styles/wordToPdfHero.module.css";

const WordToPdfHeroServer = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {/* ── Left column — headline, intro, visual, CTAs ── */}
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>With 25+ years experience</span>

          <h2 className={styles.heading}>
            Editable PDF forms,{" "}
            <span className={styles.accentWord}>
              built properly in Adobe Acrobat.
            </span>
          </h2>

          <div className={styles.body}>
            <p>
              A free online Word to PDF converter is probably going to do a
              reasonable job for a static, one-off document, some of the time...
              But it cannot turn that document into something a client or staff
              member can actually type into, tick, or sign on screen. That takes
              proper form-building work in Adobe Acrobat Pro.
            </p>
            <p>
              We build fillable, editable PDF forms from your existing Word
              documents, and design Word templates engineered to convert cleanly
              to PDF every time, so future conversions never need a second look.
            </p>
          </div>
          <div className={styles.ctaRow}>
            <Link href="#contact" className="btn">
              Get a free quote
            </Link>
            <Link href="#services" className={styles.ctaSecondary}>
              See how we build forms
            </Link>
          </div>
        </div>
        <WordToPdfHero />
      </div>
    </section>
  );
};

export default WordToPdfHeroServer;
