// app/services/ai-email-triage/(components)/EmailTriageSuite.jsx
import Link from "next/link";

// Compiled CSS module (source: styles/emailTriageSuite.module.scss)
import styles from "../../../../styles/emailTriageSuite.module.css";

// Triaged email at the centre, feeding the Microsoft 365 apps listed below
import { SuiteHubSvg } from "../(svgs)/SuiteHubSvg";

const destinations = [
  {
    name: "Teams",
    body: "instant alerts with an adaptive card, so urgent messages are seen immediately",
  },
  {
    name: "SharePoint and Lists",
    body: "a searchable register of every request, complaint or order",
  },
  {
    name: "Excel and Power BI",
    body: "dashboards showing email volumes, categories and response times",
  },
  {
    name: "Dataverse and Dynamics 365",
    body: "cases, contacts and records created automatically",
  },
  {
    name: "Planner and To Do",
    body: "tasks assigned to the right person with the email attached",
  },
  {
    name: "Your line-of-business systems",
    body: "through standard or custom connectors, or direct API integration",
  },
];

const EmailTriageSuite = () => {
  return (
    <section className={styles.section} id="microsoft-365-integration">
      <div className={styles.inner}>
        {/* ── Left: SVG (hidden on phones) ── */}
        <div className={styles.visual}>
          <SuiteHubSvg />
        </div>

        {/* ── Right: content ── */}
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Triage that shares data{" "}
            <span className={styles.accent}>across the board</span>
          </h2>
          <p className={styles.lead}>
            Sorting email is useful. Turning email into data your business can
            act on is where the real value is. Whether it runs on the Power
            Platform or as a custom-coded agent, that data can be cleaned and
            directed to the rest of your applications.
          </p>

          <ul className={styles.list}>
            {destinations.map((item) => (
              <li key={item.name} className={styles.item}>
                <strong>{item.name}</strong> – {item.body}
              </li>
            ))}
          </ul>

          <p className={styles.closing}>
            This is the difference between a stand-alone AI email app and a
            Microsoft specialist. We connect triage to the systems you already
            use rather than adding another platform to manage.
          </p>

          {/* Mixed internal (next/link) and sister-site (plain <a>) links */}
          <nav
            className={styles.links}
            aria-label="Related automation services"
          >
            <a
              href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform"
              className={styles.link}
            >
              Power Platform services
            </a>
            <Link
              href="/services/microsoft-office-365/business-process-automation"
              className={styles.link}
            >
              Business process automation
            </Link>
            {/* Outbound counterpart to triage (brief's required internal link) */}
            <a
              href="https://www.wordexperts.com.au/mail-merge"
              className={styles.link}
            >
              Automated outbound email with mail merge
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default EmailTriageSuite;
