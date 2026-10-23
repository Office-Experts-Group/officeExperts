// app/fill-in-forms/(components)/FormProtectionExplainer.jsx

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import styles from "../../../styles/formProtectionExplainer.module.css";

const FormProtectionExplainer = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* ── Left: copy answering the "why can't I edit it" style questions ── */}
        <AnimateOnScroll animation="fade-up" duration={0.6}>
          <div className={styles.copy}>
            <span className={styles.eyebrow}>Locking It Down</span>
            <h2 className={styles.heading}>
              Why does my form stop people typing{" "}
              <span className={styles.accent}>outside the fields?</span>
            </h2>
            <p className={styles.body}>
              A form only stays consistent if the layout underneath it
              can&rsquo;t be disturbed. That protection can be built two
              different ways in Word, and it matters which one your form
              uses, because they don&rsquo;t mix well together.
            </p>
            <p className={styles.body}>
              We build almost every form using modern{" "}
              <strong>content controls</strong> with the surrounding text{" "}
              <strong>grouped</strong>, rather than the older &ldquo;Restrict
              Editing &rarr; Filling in Forms&rdquo; method built for legacy
              form fields. It&rsquo;s the more reliable approach for
              documents opened across different versions of Word.
            </p>
          </div>
        </AnimateOnScroll>

        {/* ── Right: comparison diagram ── */}
        <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.15}>
          <div className={styles.diagram}>
            <div className={`${styles.method} ${styles.methodCurrent}`}>
              <span className={styles.methodBadge}>What we build</span>
              <h3 className={styles.methodTitle}>Content Controls</h3>
              <ul className={styles.methodList}>
                <li>Added from the Developer tab, one control per field</li>
                <li>
                  Locked individually so the layout can&rsquo;t be typed over
                </li>
                <li>Works reliably across recent versions of Word</li>
                <li>Can hold text, dates, drop-downs, images and more</li>
              </ul>
            </div>

            <div className={styles.methodDivider} aria-hidden="true">
              <span>vs</span>
            </div>

            <div className={styles.method}>
              <span className={styles.methodBadgeMuted}>Older approach</span>
              <h3 className={styles.methodTitleMuted}>Legacy Form Fields</h3>
              <ul className={styles.methodListMuted}>
                <li>Older technology, kept mainly for backward compatibility</li>
                <li>Protected using &ldquo;Restrict Editing&rdquo; document-wide</li>
                <li>
                  Breaks if it&rsquo;s ever mixed with content controls in the
                  same document
                </li>
                <li>Still the right fit for some legacy templates</li>
              </ul>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FormProtectionExplainer;
