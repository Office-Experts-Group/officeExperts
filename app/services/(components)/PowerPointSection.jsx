// /app/services/(components)/PowerPointSection.jsx
// PowerPoint and Publisher: each service is a 16:9 "slide", with Publisher as a dashed extra slide.
import styles from "@/styles/powerPointSection.module.scss";
import ServiceLink from "./ServiceLink";
import { PowerPointIcon } from "../(svgs)/PowerPointIcon";

const PowerPointSection = ({ data }) => {
  const { eyebrow, title, intro, slides, extra } = data;

  return (
    <section
      id="powerpoint"
      className={styles.section}
      aria-labelledby="powerpoint-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.icon}>
            <PowerPointIcon />
          </span>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="powerpoint-heading" className={styles.heading}>
            {title}
          </h2>
          <p className={styles.intro}>{intro}</p>
        </header>

        <div className={styles.slides}>
          {slides.map((slide) => (
            <article key={slide.name} className={styles.slide}>
              <h3 className={styles.slideTitle}>
                <ServiceLink href={slide.href} className={styles.slideLink}>
                  {slide.name}
                </ServiceLink>
              </h3>
              <p className={styles.slideText}>{slide.description}</p>
            </article>
          ))}

          {/* Publisher gets a dashed outline so it reads as a related extra rather than a PowerPoint service */}
          <article className={`${styles.slide} ${styles.extra}`}>
            <h3 className={styles.slideTitle}>
              <ServiceLink href={extra.href} className={styles.slideLink}>
                {extra.name}
              </ServiceLink>
            </h3>
            <p className={styles.slideText}>{extra.description}</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PowerPointSection;
