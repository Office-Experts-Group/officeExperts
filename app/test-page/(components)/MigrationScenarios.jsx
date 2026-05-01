// app/services/microsoft-office/upgrades-and-migration/(components)/MigrationScenarios.jsx

import Link from "next/link";
import styles from "../../../styles/migrationScenarios.module.css";

const scenarios = [
  {
    num: "01",
    title: "Excel-based systems that have become unmanageable",
    problem:
      "Multiple files passed between teams, manual data entry with no validation, formulas referencing other files that may or may not be open, and macros nobody wants to touch. The business depends on the output but nobody trusts it completely.",
    resolution:
      "We rebuild the logic as a structured application using Power Apps, store and manage the data properly in SQL Server or a cloud platform, and automate the processes that are currently manual. The output looks similar. The system underneath is completely different.",
    tag: "Excel",
    link: {
      href: "https://www.excelexperts.com.au/upgrades-and-migration",
      label: "Excel upgrade services",
    },
  },
  {
    num: "02",
    title: "Access databases pushing past their limits",
    problem:
      "Slow performance on larger datasets, crashes or data corruption in multi-user environments, and an interface that is frozen in a decade that has since passed. Access is capable software that has been around for decades, but it has clear limits around data volume, concurrent users, and integration.",
    resolution:
      "We migrate the backend to SQL Server or Azure, and modernise or rebuild the frontend as a web application or Power App. The data and logic survive. The constraints don't.",
    tag: "Access",
    link: {
      href: "https://www.accessexperts.com.au/upgrades-and-migration",
      label: "Access migration services",
    },
  },
  {
    num: "03",
    title: "Manual processes that should have been automated",
    problem:
      "Email-based approvals sitting in inboxes. Data someone copies from one system into another every morning. Reports assembled by hand from five different sources. These get added to job descriptions and quietly accepted as how things work.",
    resolution:
      "We map the process, identify where automation makes sense, and build it using Power Automate. Approvals become workflows. Data moves automatically. Notifications happen without anyone sending them.",
    tag: "Power Automate",
    link: {
      href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate",
      label: "Power Automate services",
    },
  },
  {
    num: "04",
    title: "Data scattered across systems with no clear picture",
    problem:
      "When data lives in multiple places with no structure connecting them, reporting becomes a project. By the time a report is finished, it is already out of date. Nobody is quite sure which version of the numbers is the right one.",
    resolution:
      "We centralise the data using Azure or SQL Server, build Power BI dashboards that pull from a single source, and where the volume warrants it, introduce Microsoft Fabric for more advanced analytics. Reporting that reflects what is actually happening now, not last week.",
    tag: "Power BI · Azure",
    link: {
      href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi",
      label: "Power BI reporting services",
    },
  },
  {
    num: "05",
    title: "Legacy systems never built for today",
    problem:
      "Some systems were not designed for remote access, modern browsers, or integration with anything built in the last five years. They do what they do, slowly, and cannot be extended without significant pain.",
    resolution:
      "We rebuild or extend these as modern web applications, connect them to the rest of the environment via APIs and cloud services, and where it makes sense, introduce AI capabilities through tools like Microsoft Copilot.",
    tag: "Custom Development",
    link: null,
  },
];

const MigrationScenarios = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Real-world scenarios</p>
        <h2 className={styles.heading}>Situations we see most often.</h2>
        <p className={styles.subheading}>
          The clients we work with aren&rsquo;t usually dealing with exotic
          problems. They&rsquo;re dealing with systems that made sense when they
          were built and have since become something nobody planned for.
        </p>
      </div>

      <div className={styles.scenarios}>
        {scenarios.map((s) => (
          <article key={s.num} className={styles.card}>
            <div className={styles.cardMeta}>
              <span className={styles.cardNum}>{s.num}</span>
              <span className={styles.cardTag}>{s.tag}</span>
            </div>

            <h3 className={styles.cardTitle}>{s.title}</h3>

            <div className={styles.cardSplit}>
              <div className={styles.cardProblem}>
                <p className={styles.splitLabel}>The situation</p>
                <p>{s.problem}</p>
              </div>

              {/* Inlined -- no sub-component declaration */}
              <div className={styles.cardDivider} aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9h12M11 5l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className={styles.cardResolution}>
                <p className={styles.splitLabel}>What we do</p>
                <p>{s.resolution}</p>
                {s.link && (
                  <Link href={s.link.href} className={styles.cardLink}>
                    {s.link.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.cta}>
        <div className={styles.ctaContent}>
          <p className={styles.ctaEyebrow}>
            What these scenarios have in common
          </p>
          <p className={styles.ctaHeading}>
            The system was built for a purpose. The business grew. The system
            didn&rsquo;t.
          </p>
          <p className={styles.ctaBody}>
            Complexity accumulated, risk increased, and now it&rsquo;s both
            essential and a problem at the same time. The specifics vary but the
            approach doesn&rsquo;t change much. We assess what&rsquo;s there,
            work out what needs to change and in what order, and build a path
            that doesn&rsquo;t require the business to stop while we do it.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <Link
            href="/contact-us/request-a-quote"
            className={styles.ctaPrimary}
          >
            Get a free assessment
          </Link>
          <Link href="#contact" className={styles.ctaSecondary}>
            Talk to an expert
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MigrationScenarios;
