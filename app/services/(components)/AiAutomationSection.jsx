// /app/services/(components)/AiAutomationSection.jsx
// AI and automation: dark section with a "bento" layout, one large featured tile and smaller tiles beside it.
import styles from "@/styles/aiAutomationSection.module.scss";
import ServiceLink from "./ServiceLink";
import { AiAgentsIcon } from "../(svgs)/AiAgentsIcon";

const AiAutomationSection = ({ data }) => {
  const { eyebrow, title, intro, featured, items } = data;

  return (
    <section
      id="ai-and-automation"
      className={styles.section}
      aria-labelledby="ai-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="ai-heading" className={styles.heading}>
            {title}
          </h2>
          <p className={styles.intro}>{intro}</p>
        </header>

        <div className={styles.bento}>
          {/* Featured tile spans two columns and two rows on wide screens */}
          <article className={styles.featured}>
            <span className={styles.icon}>
              <AiAgentsIcon />
            </span>
            <h3 className={styles.featuredTitle}>{featured.name}</h3>
            <p className={styles.featuredText}>{featured.description}</p>
            <ServiceLink href={featured.href} className={styles.featuredLink}>
              Explore AI agent development
            </ServiceLink>
          </article>

          {items.map((item) => (
            <article key={item.name} className={styles.tile}>
              <h3 className={styles.tileTitle}>
                <ServiceLink href={item.href} className={styles.tileLink}>
                  {item.name}
                </ServiceLink>
              </h3>
              <p className={styles.tileText}>{item.description}</p>

              {/* Optional secondary link to the specialist site covering the same topic */}
              {item.also && (
                <p className={styles.also}>
                  Also see{" "}
                  <ServiceLink
                    href={item.also.href}
                    className={styles.alsoLink}
                  >
                    {item.also.name}
                  </ServiceLink>
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiAutomationSection;
