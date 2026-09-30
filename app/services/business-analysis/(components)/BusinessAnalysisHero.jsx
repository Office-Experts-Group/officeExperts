// app/services/business-analysis/(components)/BusinessAnalysisHero.jsx

// Next.js client-side navigation for internal routes
import Image from "next/image";
import Link from "next/link";

// Compiled CSS module (source: styles/businessAnalysisHero.module.scss)
import styles from "../../../../styles/businessAnalysisHero.module.css";

// Illustration
import solutions from "../../../../public/solutions.webp";

// Verifiable facts only (see content notes: no invented stats)
const facts = [
  "Operating since 2000",
  "Five specialist teams",
  "Australia-wide",
];

const BusinessAnalysisHero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* ── Left: content ── */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            Understanding Real Business Requirements
          </span>

          <h2 className={styles.heading}>
            Our value isn't just building the solution.{" "}
            <span className={styles.accent}>It's knowing what to build.</span>
          </h2>

          <p className={styles.lead}>
            In 2026 anyone can generate an app, website or even a software
            solution in a matter of days or even hours. What AI can&apos;t do is
            sit with your team, untangle how work really moves through your
            business, and tell you which of the many dozen possible solutions
            will still be working in three years. That&apos;s what we&apos;ve
            been doing since 2000.
          </p>

          <div className={styles.actions}>
            <Link href="#contact" className={`btn ${styles.primary}`}>
              Book a discovery session
            </Link>
            {/* In-page anchor to the proof section, so a plain <a> */}
            <a href="#proof" className={styles.secondary}>
              See what we&apos;ve built
            </a>
          </div>

          <ul className={styles.facts}>
            {facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>

        <div className={styles.image}>
          <Image
            src={solutions}
            alt="Business analysis illustration"
            width={900}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessAnalysisHero;
