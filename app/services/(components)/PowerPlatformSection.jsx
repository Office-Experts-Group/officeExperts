// /app/services/(components)/PowerPlatformSection.jsx
// Power Platform: four large product tiles, then a ruled multi-column list for the supporting services.
import styles from "@/styles/powerPlatformSection.module.scss";
import ServiceLink from "./ServiceLink";
import { PowerPlatformIcon } from "../(svgs)/PowerPlatformIcon";
import { PowerAppsIcon } from "../(svgs)/PowerAppsIcon";
import { PowerAutomateIcon } from "../(svgs)/PowerAutomateIcon";
import { PowerBiIcon } from "../(svgs)/PowerBiIcon";
import { PowerPagesIcon } from "../(svgs)/PowerPagesIcon";

const tiles = [
  {
    name: "Power Apps",
    Icon: PowerAppsIcon,
    href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps",
    description: "Business apps for the way your team really works.",
    support: {
      name: "Power Apps support",
      href: "https://www.powerplatformexperts.com.au/power-apps-support",
    },
  },
  {
    name: "Power Automate",
    Icon: PowerAutomateIcon,
    href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate",
    description:
      "Flows that move data and approvals without anyone chasing them.",
    support: {
      name: "Power Automate support",
      href: "https://www.powerplatformexperts.com.au/power-automate-support",
    },
  },
  {
    name: "Power BI",
    Icon: PowerBiIcon,
    href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi",
    description: "Reports and dashboards your people will actually open.",
    support: {
      name: "Power BI support",
      href: "https://www.powerplatformexperts.com.au/power-bi-support",
    },
  },
  {
    name: "Power Pages",
    Icon: PowerPagesIcon,
    href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages",
    description: "Secure portals for customers, partners and suppliers.",
    support: {
      name: "Power Pages support",
      href: "https://www.powerplatformexperts.com.au/power-pages-support",
    },
  },
];

const more = [
  {
    name: "Power Platform overview",
    href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform",
  },
  {
    name: "Power Platform assessment",
    href: "https://www.powerplatformexperts.com.au/power-platform-assessment",
  },
  {
    name: "Power Platform support",
    href: "https://www.powerplatformexperts.com.au/power-platform-support",
  },
  {
    name: "Microsoft Fabric",
    href: "https://www.powerplatformexperts.com.au/microsoft-fabric",
  },
  {
    name: "SharePoint consulting and development",
    href: "https://www.powerplatformexperts.com.au/sharepoint-consulting-and-development",
  },
  {
    name: "Power BI data integration",
    href: "https://www.powerplatformexperts.com.au/power-bi-data-integration",
  },
  {
    name: "Excel to Power BI migration",
    href: "https://www.powerplatformexperts.com.au/excel-to-power-bi-migration",
  },
  { name: "Power Query", href: "/services/power-query" },
  { name: "Power Pivot", href: "/services/power-pivot" },
  { name: "Dashboards", href: "/services/dashboards" },
];

const PowerPlatformSection = () => (
  <section
    id="power-platform"
    className={styles.section}
    aria-labelledby="power-platform-heading"
  >
    <div className={styles.inner}>
      <header className={styles.header}>
        <div>
          <span className={styles.eyebrow}>Power Platform</span>
          <h2 id="power-platform-heading" className={styles.heading}>
            Power Platform and <span className={styles.accent}>data</span>
          </h2>
          <p className={styles.intro}>
            Apps, automation, reporting and websites on the Microsoft Power
            Platform, plus the data work underneath them. Delivered by our
            dedicated Power Platform team.
          </p>
        </div>
        {/* Large faint icon on wide screens, purely decorative */}
        <span className={styles.watermark}>
          <PowerPlatformIcon />
        </span>
      </header>

      <div className={styles.tiles}>
        {tiles.map(({ name, Icon, href, description, support }) => (
          <article key={name} className={styles.tile}>
            <span className={styles.tileIcon}>
              <Icon />
            </span>
            <h3 className={styles.tileTitle}>
              <ServiceLink href={href} className={styles.tileLink}>
                {name}
              </ServiceLink>
            </h3>
            <p className={styles.tileText}>{description}</p>
            <ServiceLink href={support.href} className={styles.support}>
              {support.name}
            </ServiceLink>
          </article>
        ))}
      </div>

      <h3 className={styles.moreTitle}>Data, integration and support</h3>
      <ul className={styles.more}>
        {more.map((item) => (
          <li key={item.name} className={styles.moreItem}>
            <ServiceLink href={item.href} className={styles.moreLink}>
              {item.name}
            </ServiceLink>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default PowerPlatformSection;
