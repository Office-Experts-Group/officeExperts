// app/services/microsoft-office-365/app-and-custom-development/(components)/AppDevIntro.jsx
import Link from "next/link";

// Compiled CSS module (source: styles/appDevIntro.module.scss)
import styles from "@/styles/appDevIntro.module.scss";
// Each item is a problem people arrive with, so the copy matches what they search for
const problems = [
  {
    title: "A slow or outdated website",
    body: "We rebuild or optimise WordPress and legacy sites so they load quickly, work properly on mobile and increase conversions.",
  },
  {
    title: "Better search rankings",
    body: "Server-rendered pages, clean markup and structured data help your website appear first in search results, and give Google and other AI answer engines something to read and cite. ",
  },
  {
    title: "Databases that talk to each other",
    body: "We connect SQL Server, SharePoint, your CRM and any 3rd party applications through REST API's, so information is entered once and appears everywhere.",
    href: "/services/by-business-solution/database-development-and-solutions",
    linkText: "Database development and integration",
  },
  {
    title: "Getting your business mobile and in the cloud",
    body: "We turn the processes you already run into a mobile app, allowing realtime connectivity between teams in the field.",
    href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages",
    linkText: "Explore Power Pages",
  },
];

// Languages shown as chips in the dark tile
const languages = [
  "JavaScript",
  "Sass",
  "PHP",
  "HTML",
  ".NET",
  "VBA",
  "Python",
  "SQL",
];

const AppDevIntro = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Custom app development</span>
          <h2 className={styles.heading}>
            Stuck with a site, system or app that{" "}
            <span className={styles.accent}>no longer fits?</span>
          </h2>
          <p className={styles.text}>
            Most people come to us when something is already costing them time
            or customers. We start by working out why it is under-performing,
            then build the fix: a new application, a rebuilt website or a
            smarter connection between the systems you already own. Since 2000
            we have done this for Australian organisations, with developers
            across the Microsoft suite, modern web frameworks and AI.
          </p>

          <ul className={styles.problems}>
            {problems.map((item) => (
              <li key={item.title} className={styles.problem}>
                <h3 className={styles.problemTitle}>{item.title}</h3>
                <p className={styles.problemBody}>{item.body}</p>
                {item.href && (
                  <Link href={item.href} className={styles.link}>
                    {item.linkText}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.tileContainer}>
          <div className={styles.tiles}>
            <div className={styles.tile}>
              <span className={styles.label}>Experience</span>
              <span className={styles.value}>Since 2000</span>
              <p className={styles.tileText}>
                Building software for Australian organisations
              </p>
            </div>

            <div className={`${styles.tile} ${styles.accentTile}`}>
              <span className={styles.label}>Team</span>
              <span className={styles.value}>25+</span>
              <p className={styles.tileText}>
                Developers working across the country
              </p>
            </div>

            <div className={`${styles.tile} ${styles.wide}`}>
              <span className={styles.label}>Coverage</span>
              <span className={styles.value}>Australia-wide</span>
              <p className={styles.tileText}>
                Delivered by remote access or onsite
              </p>
            </div>

            <div className={`${styles.tile} ${styles.wide} ${styles.dark}`}>
              <span className={styles.label}>Languages</span>
              <span className={styles.value}>Custom Code</span>
              <ul className={styles.chips}>
                {languages.map((language) => (
                  <li key={language} className={styles.chip}>
                    {language}
                  </li>
                ))}
                <li className={`${styles.chip} ${styles.more}`}>
                  and much more
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevIntro;
