// /app/services/(components)/CaseStudyCallout.jsx
// Proof strip: headline results from published case studies. Links to the /case-studies hub only.
import Image from "next/image";
import styles from "../../../styles/caseStudyCallout.module.css";
import ServiceLink from "./ServiceLink";

const CaseStudyCallout = ({ data }) => {
  const { eyebrow, title, stats, href, linkLabel, image } = data;

  return (
    <section className={styles.section} aria-labelledby="case-study-heading">
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="case-study-heading" className={styles.heading}>
            {title}
          </h2>
        </header>

        <ul className={styles.stats}>
          {stats.map((stat) => (
            <li key={stat.figure} className={styles.stat}>
              <strong className={styles.figure}>{stat.figure}</strong>
              <div className={styles.image}>
                <Image
                  src={stat.image}
                  alt={stat.figure}
                  width={175}
                  height={112.5}
                />
              </div>
              <span className={styles.caption}>{stat.caption}</span>
            </li>
          ))}
        </ul>

        <ServiceLink href={href} className={styles.button}>
          {linkLabel}
        </ServiceLink>
      </div>
    </section>
  );
};

export default CaseStudyCallout;
