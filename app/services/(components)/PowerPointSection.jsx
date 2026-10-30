// /app/services/(components)/PowerPointSection.jsx
// PowerPoint and Publisher: each service is a 16:9 "slide", with Publisher as a dashed extra slide.
import styles from "@/styles/powerPointSection.module.scss";
import ServiceLink from "./ServiceLink";
import { PowerPointIcon } from "../(svgs)/PowerPointIcon";

const slides = [
  {
    name: "Custom templates and presentations",
    href: "/services/microsoft-powerpoint",
    description: "On-brand from the first slide.",
  },
  {
    name: "Presentation redesign",
    href: "/services/microsoft-powerpoint",
    description: "Give an existing deck a clean, consistent look.",
  },
  {
    name: "Automate with VBA",
    href: "/services/microsoft-powerpoint",
    description: "Generate decks from your data.",
  },
  {
    name: "Training and assistance",
    href: "/microsoft-support-and-training-australia",
    description: "Confident users, better presentations.",
  },
  {
    name: "PowerPoint overview",
    href: "/services/microsoft-powerpoint",
    description: "Everything we do in PowerPoint.",
  },
];

const PowerPointSection = () => (
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
        <span className={styles.eyebrow}>Presentations</span>
        <h2 id="powerpoint-heading" className={styles.heading}>
          PowerPoint and <span className={styles.accent}>Publisher</span>
        </h2>
        <p className={styles.intro}>
          Presentations that look professional and are easy for your whole team
          to update, from custom templates to fully automated decks.
        </p>
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
            <ServiceLink
              href="/services/microsoft-publisher"
              className={styles.slideLink}
            >
              Microsoft Publisher
            </ServiceLink>
          </h3>
          <p className={styles.slideText}>Publisher help and migration.</p>
        </article>
      </div>
    </div>
  </section>
);

export default PowerPointSection;
