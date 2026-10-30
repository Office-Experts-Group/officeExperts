// /app/services/(components)/Microsoft365Section.jsx
// Microsoft 365, support and training: three open pillars with a coloured top rule and a large icon.
import styles from "@/styles/microsoft365Section.module.scss";
import ServiceLink from "./ServiceLink";
import { Microsoft365Icon } from "../(svgs)/Microsoft365Icon";
import { SupportIcon } from "../(svgs)/SupportIcon";
import { TrainingIcon } from "../(svgs)/TrainingIcon";

const pillars = [
  {
    title: "Microsoft 365 and cloud",
    Icon: Microsoft365Icon,
    items: [
      {
        name: "Office upgrades and migration",
        href: "/services/upgrades-and-migration",
      },
      { name: "Microsoft 365", href: "/services/microsoft-office-365" },
      {
        name: "Cloud backup with OneDrive",
        href: "/services/cloud-backup-with-onedrive",
      },
    ],
  },
  {
    title: "Support",
    Icon: SupportIcon,
    items: [
      {
        name: "Excel support",
        href: "https://www.excelexperts.com.au/excel-support",
      },
      {
        name: "Access support",
        href: "https://www.accessexperts.com.au/access-support",
      },
      {
        name: "Power Platform support",
        href: "https://www.powerplatformexperts.com.au/power-platform-support",
      },
    ],
  },
  {
    title: "Training",
    Icon: TrainingIcon,
    items: [
      {
        name: "Word training",
        href: "/microsoft-support-and-training-australia",
      },
      {
        name: "PowerPoint training",
        href: "/microsoft-support-and-training-australia",
      },
    ],
  },
];

const Microsoft365Section = () => (
  <section
    id="microsoft-365"
    className={styles.section}
    aria-labelledby="microsoft-365-heading"
  >
    <div className={styles.inner}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>Everyday Microsoft</span>
        <h2 id="microsoft-365-heading" className={styles.heading}>
          Microsoft 365, support and{" "}
          <span className={styles.accent}>training</span>
        </h2>
        <p className={styles.intro}>
          Get the most from the Microsoft tools you already pay for, and have
          specialists on hand when something goes wrong.
        </p>
      </header>

      <div className={styles.pillars}>
        {pillars.map(({ title, Icon, items }) => (
          <article key={title} className={styles.pillar}>
            <span className={styles.icon}>
              <Icon />
            </span>
            <h3 className={styles.pillarTitle}>{title}</h3>
            <ul className={styles.list}>
              {items.map((item) => (
                <li key={item.name}>
                  <ServiceLink href={item.href} className={styles.link}>
                    {item.name}
                  </ServiceLink>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Microsoft365Section;
