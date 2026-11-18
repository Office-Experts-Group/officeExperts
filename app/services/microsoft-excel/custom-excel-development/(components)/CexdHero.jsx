// /app/services/microsoft-excel/custom-excel-development/(components)/CexdHero.jsx
import Link from "next/link";

import styles from "@/styles/cexdHero.module.scss";

import { CexdArrowIcon, CexdChevronIcon } from "../(svgs)/CexdIcons";
import {
  CexdUiIcon,
  CexdMacroIcon,
  CexdIntegrationsIcon,
  CexdWorkbookIcon,
  CexdAddinIcon,
} from "../(svgs)/CexdServiceIcons";

const CEXD_HERO_SERVICES = [
  {
    id: "ui",
    title: "Custom user interface development",
    tag: "Bespoke UI",
    desc: "Web portals, dashboards, and custom apps that connect your business to the cloud, supporting field reporting and remote client interactions.",
    href: "/services/online-solutions",
    linkText: "Explore online solutions",
    Icon: CexdUiIcon,
  },
  {
    id: "macros",
    title: "VBA macro development",
    tag: "Automation",
    desc: "Tailor built macros to eliminate repetitive manual tasks. Turn hours into one-click report generation and automation that happens in the background.",
    href: "/services/vba-macro-development",
    linkText: "See VBA macro development",
    Icon: CexdMacroIcon,
  },
  {
    id: "integrations",
    title: "Office & third-party integrations",
    tag: "Connectivity",
    desc: "Connect all your software with your existing systems, SQL databases, SharePoint, REST APIs, and third-party applications.",
    href: "/services/3rd-party-application-or-office-integration",
    linkText: "See integration services",
    Icon: CexdIntegrationsIcon,
  },
  {
    id: "workbooks",
    title: "Custom workbooks & templates",
    tag: "Tailored builds",
    desc: "Purpose-built workbooks with protected structures, branded layouts, and guided data entry that enforce consistency across your files.",
    href: "/case-studies/food-manufacturer-excel-costing-workbook",
    linkText: "See a costing workbook we built",
    Icon: CexdWorkbookIcon,
  },
  {
    id: "addins",
    title: "Add-in development",
    tag: "Office extensions",
    desc: "Custom Excel, Word, and Outlook add-ins that add functionality available globally across every workbook or document your team opens.",
    href: "/services/add-in-creation",
    linkText: "See add-in development",
    Icon: CexdAddinIcon,
  },
];

const CEXD_HERO_STATS = [
  { value: "25+", label: "Years experience" },
  { value: "100%", label: "Custom built" },
  { value: "AU-wide", label: "Remote & on-site" },
];

const CexdHero = () => {
  return (
    <section
      className={styles.cexdHero}
      id="cexd-hero"
      aria-labelledby="cexd-hero-heading"
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1 id="cexd-hero-heading" className={styles.heading}>
            Custom Excel development,{" "}
            <span className={styles.accent}>built for your business.</span>
          </h1>

          <div className={styles.lede}>
            <p>
              Every business has its unique processes, reporting requirements,
              and system integrations. When standard software falls short, our
              consultants develop custom Microsoft solutions to fit your
              organisation.
            </p>
            <p>
              We can help with automated reporting and data pipelines from
              third-party applications, VBA macros and custom add-ins, or
              virtually any programmable application that cannot be solved with
              the standard tools.
            </p>
          </div>

          <div className={styles.ctaRow}>
            <Link href="#contact" className="btn">
              Book a free consultation
            </Link>
            <Link href="#cexd-services" className={styles.ctaSecondary}>
              See what we build
              <CexdArrowIcon />
            </Link>
          </div>

          <dl className={styles.stats}>
            {CEXD_HERO_STATS.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt className={styles.statLabel}>{stat.label}</dt>
                <dd className={styles.statValue}>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.listWrap}>
          <p className={styles.listLabel}>What we design &amp; build</p>
          <ul className={styles.list}>
            {CEXD_HERO_SERVICES.map((service, index) => (
              <li key={service.id} className={styles.item}>
                <details
                  className={styles.details}
                  name="cexd-hero-services"
                  open={index === 0}
                >
                  <summary className={styles.summary}>
                    <span className={styles.itemIcon}>
                      <service.Icon />
                    </span>
                    <span className={styles.itemHead}>
                      <span className={styles.itemTitle}>{service.title}</span>
                      <span className={styles.itemTag}>{service.tag}</span>
                    </span>
                    <span className={styles.toggle} aria-hidden="true">
                      <CexdChevronIcon />
                    </span>
                  </summary>
                  <div className={styles.panel}>
                    <p>{service.desc}</p>
                    <Link href={service.href} className={styles.link}>
                      {service.linkText}
                      <CexdArrowIcon />
                    </Link>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CexdHero;
