// /app/services/(components)/CustomDevSection.jsx
// Custom development: a row of technology chips above a terminal style panel listing the services.
import styles from "@/styles/customDevSection.module.scss";
import ServiceLink from "./ServiceLink";
import { CustomDevIcon } from "../(svgs)/CustomDevIcon";

const CustomDevSection = ({ data }) => {
  const { eyebrow, title, intro, stack, lines } = data;

  return (
    <section
      id="custom-development"
      className={styles.section}
      aria-labelledby="custom-dev-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.icon}>
            <CustomDevIcon />
          </span>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="custom-dev-heading" className={styles.heading}>
            {title}
          </h2>
          <p className={styles.intro}>{intro}</p>
        </header>

        <ul className={styles.stack} aria-label="Technologies we work with">
          {stack.map((tech) => (
            <li key={tech} className={styles.chip}>
              {tech}
            </li>
          ))}
        </ul>

        <div className={styles.terminal}>
          {/* The three coloured dots in the title bar are drawn in CSS and hidden from assistive technology */}
          <div className={styles.bar} aria-hidden="true" />
          <ul className={styles.lines}>
            {lines.map((line) => (
              <li key={line.name} className={styles.line}>
                <h3 className={styles.lineTitle}>
                  <ServiceLink href={line.href} className={styles.lineLink}>
                    {line.name}
                  </ServiceLink>
                </h3>
                <span className={styles.lineText}>{line.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CustomDevSection;
