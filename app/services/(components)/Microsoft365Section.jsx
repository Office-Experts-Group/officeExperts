// /app/services/(components)/Microsoft365Section.jsx
// Microsoft 365, support and training: three open pillars with a coloured top rule and a large icon.
import styles from "@/styles/microsoft365Section.module.scss";
import ServiceLink from "./ServiceLink";
import { Microsoft365Icon } from "../(svgs)/Microsoft365Icon";
import { SupportIcon } from "../(svgs)/SupportIcon";
import { TrainingIcon } from "../(svgs)/TrainingIcon";

// Pillar icons keyed by the icon name in servicesData.js
const pillarIcons = {
  cloud: Microsoft365Icon,
  support: SupportIcon,
  training: TrainingIcon,
};

const Microsoft365Section = ({ data }) => {
  const { eyebrow, title, intro, pillars } = data;

  return (
    <section
      id="microsoft-365"
      className={styles.section}
      aria-labelledby="microsoft-365-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="microsoft-365-heading" className={styles.heading}>
            {title}
          </h2>
          <p className={styles.intro}>{intro}</p>
        </header>

        <div className={styles.pillars}>
          {pillars.map((pillar) => {
            const PillarIcon = pillarIcons[pillar.icon];
            return (
              <article key={pillar.title} className={styles.pillar}>
                <span className={styles.icon}>
                  <PillarIcon />
                </span>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <ul className={styles.list}>
                  {pillar.items.map((item) => (
                    <li key={item.name}>
                      <ServiceLink href={item.href} className={styles.link}>
                        {item.name}
                      </ServiceLink>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Microsoft365Section;
