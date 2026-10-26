// app/services/upgrades-and-migration/(components)/MigrationScenarios.jsx
// Bento grid of the situations we see most often. Server component.

import Link from "next/link";
import styles from "@/styles/migrationScenarios.module.scss";

// Custom icons, one per scenario, stored in the route's (svgs) folder
import { SpreadsheetIcon } from "../(svgs)/SpreadsheetIcon";
import { DatabaseIcon } from "../(svgs)/DatabaseIcon";
import { WorkflowIcon } from "../(svgs)/WorkflowIcon";
import { DataHubIcon } from "../(svgs)/DataHubIcon";
import { LegacyAppIcon } from "../(svgs)/LegacyAppIcon";
import { ArrowUpRightIcon } from "../(svgs)/ArrowUpRightIcon";

// tone: "accent" or "dark" gives an inverse tile, anything else is a white tile.
// wide: spans two thirds of the row on desktop and splits the copy into columns.
const scenarios = [
  {
    icon: SpreadsheetIcon,
    tone: "accent",
    wide: true,
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
    icon: DatabaseIcon,
    title: "Access databases pushing past their limits",
    problem:
      "Slow performance on larger datasets, crashes or corruption in multi-user environments, and an interface frozen in a decade that has since passed. Access is capable, but it has clear limits on data volume, concurrent users and integration.",
    resolution:
      "We migrate the back end to SQL Server or Azure, and modernise or rebuild the front end as a web application or Power App. The data and logic survive. The constraints don't.",
    tag: "Access",
    link: {
      href: "/services/sql-server-and-access-integration",
      label: "SQL Server Upgrades",
    },
  },
  {
    icon: WorkflowIcon,
    title: "Manual processes that should have been automated",
    problem:
      "Approvals sitting in inboxes, data copied between systems every morning, and reports assembled by hand from five sources, quietly accepted as how things work.",
    resolution:
      "We map the process and build it in Power Automate. Approvals become workflows and data moves without anyone touching it.",
    tag: "Power Automate",
    link: {
      href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate",
      label: "Power Automate services",
    },
  },
  {
    icon: DataHubIcon,
    title: "Data scattered across systems with no clear picture",
    problem:
      "When data lives in several places with nothing connecting them, reporting becomes a project, and nobody is sure which version of the numbers is right.",
    resolution:
      "We centralise the data in Azure or SQL Server and build Power BI dashboards from a single source, adding Microsoft Fabric where the volume warrants it.",
    tag: "Power BI · Azure",
    link: {
      href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi",
      label: "Power BI reporting services",
    },
  },
  {
    icon: LegacyAppIcon,
    tone: "dark",
    title: "Legacy systems never built for today",
    problem:
      "Systems not designed for remote access, modern browsers or integration with anything built in the last five years. They do what they do, slowly.",
    resolution:
      "We rebuild them as modern web applications, connect them through APIs and cloud services, and add AI with tools like Microsoft Copilot where it makes sense.",
    tag: "Custom Development",
    link: {
      href: "/services/app-and-custom-development",
      label: "App and custom development",
    },
  },
];

// Builds the tile's class list from its tone and width
const tileClass = ({ tone, wide }) =>
  [
    styles.tile,
    wide && styles.wide,
    tone === "accent" && styles.toneAccent,
    tone === "dark" && styles.toneDark,
  ]
    .filter(Boolean)
    .join(" ");

const MigrationScenarios = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Real-world scenarios</p>
        <h2 className={styles.heading}>
          Situations we see <span className={styles.accent}>most often.</span>
        </h2>
        <p className={styles.subheading}>
          The clients we work with aren&rsquo;t usually dealing with exotic
          problems. They&rsquo;re dealing with systems that made sense when they
          were built and have since become something nobody planned for.
        </p>
      </div>

      <ul className={styles.bento}>
        {scenarios.map((s) => {
          // Capitalised so JSX treats it as a component
          const Icon = s.icon;

          return (
            <li key={s.title} className={tileClass(s)}>
              <div className={styles.tileTop}>
                <span className={styles.icon}>
                  <Icon />
                </span>
                <span className={styles.tag}>{s.tag}</span>
              </div>

              <h3 className={styles.tileTitle}>{s.title}</h3>

              <div className={styles.body}>
                <div>
                  <p className={styles.label}>The situation</p>
                  <p>{s.problem}</p>
                </div>
                <div>
                  <p className={styles.label}>What we do</p>
                  <p>{s.resolution}</p>
                </div>
              </div>

              {s.link && (
                <Link href={s.link.href} className={styles.tileLink}>
                  {s.link.label}
                  <ArrowUpRightIcon />
                </Link>
              )}
            </li>
          );
        })}
      </ul>

      <div className={styles.cta}>
        <div className={styles.ctaContent}>
          <p className={styles.ctaEyebrow}>
            What these scenarios have in common
          </p>
          <p className={styles.ctaHeading}>
            The system was built for a purpose.
            <span className={styles.accent}> The business grew.</span> The
            system didn&rsquo;t.
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
