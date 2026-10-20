// /app/services/(components)/WordSection.jsx
// Word: each group of services is styled as a sheet of paper with a folded corner.
// Each item is one link. Its short description opens on hover or keyboard focus (pure CSS, so it stays server rendered).
import styles from "@/styles/wordSection.module.scss";
import ServiceLink from "./ServiceLink";
import { WordIcon } from "../(svgs)/WordIcon";
import { ArrowIcon } from "../(svgs)/ArrowIcon";

const WordSection = ({ data }) => {
  const { eyebrow, title, intro, site, groups } = data;

  return (
    <section
      id="word"
      className={styles.section}
      aria-labelledby="word-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.icon}>
            <WordIcon />
          </span>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="word-heading" className={styles.heading}>
            Word Design and Document Solutions
          </h2>
          <p className={styles.intro}>{intro}</p>
        </header>

        <div className={styles.sheets}>
          {groups.map((group) => (
            <article key={group.title} className={styles.sheet}>
              <h3 className={styles.sheetTitle}>{group.title}</h3>
              <ul className={styles.sheetList}>
                {group.items.map((item) => (
                  <li key={item.name} className={styles.sheetItem}>
                    <ServiceLink href={item.href} className={styles.sheetLink}>
                      <span className={styles.sheetHead}>
                        <h4 className={styles.sheetName}>{item.name}</h4>
                        <span className={styles.sheetArrow}>
                          <ArrowIcon />
                        </span>
                      </span>
                      <div className={styles.sheetDesc}>
                        <p className={styles.sheetText}>{item.description}</p>
                      </div>
                    </ServiceLink>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WordSection;
