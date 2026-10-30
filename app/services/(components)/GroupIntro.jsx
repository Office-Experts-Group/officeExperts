// /app/services/(components)/GroupIntro.jsx
// Opening block of the page body: introduces the service offering and lists the main ways we help,
// then gives a one line overview of each service area.
// The overview tiles are anchor links that jump to the matching section further down the page.
import Link from "next/link";
import styles from "@/styles/groupIntro.module.scss";
import ServiceLink from "./ServiceLink";
import { ArrowIcon } from "../(svgs)/ArrowIcon";
import { AiAgentsIcon } from "../(svgs)/AiAgentsIcon";
import { PowerPlatformIcon } from "../(svgs)/PowerPlatformIcon";
import { ExcelIcon } from "../(svgs)/ExcelIcon";
import { WordIcon } from "../(svgs)/WordIcon";
import { AccessIcon } from "../(svgs)/AccessIcon";
import { PowerPointIcon } from "../(svgs)/PowerPointIcon";
import { CustomDevIcon } from "../(svgs)/CustomDevIcon";
import { Microsoft365Icon } from "../(svgs)/Microsoft365Icon";

const services = [
  {
    name: "Custom Development & Integrations",
    href: "/services/app-and-custom-development",
  },
  { name: "Process Automation", href: "/services/business-process-automation" },
  { name: "Upgrades & Migrations", href: "/services/upgrades-and-migration" },
  { name: "Business Analysis", href: "/services/business-analysis" },
  {
    name: "Training & Support",
    href: "/microsoft-support-and-training-australia",
  },
];

// "target" is the id of the section further down the page
const overview = [
  {
    target: "ai-and-automation",
    Icon: AiAgentsIcon,
    label: "AI and automation",
    text: "Custom AI agents, Copilot and automated workflows.",
  },
  {
    target: "power-platform",
    Icon: PowerPlatformIcon,
    label: "Power Platform",
    text: "Apps, flows, reports and portals on the Microsoft Power Platform.",
  },
  {
    target: "excel",
    Icon: ExcelIcon,
    label: "Excel",
    text: "Spreadsheets, formulas, VBA and reporting.",
  },
  {
    target: "word",
    Icon: WordIcon,
    label: "Word",
    text: "Templates, forms, rebranding and document automation.",
  },
  {
    target: "access-and-databases",
    Icon: AccessIcon,
    label: "Access and databases",
    text: "Access, SQL Server and cloud databases.",
  },
  {
    target: "powerpoint",
    Icon: PowerPointIcon,
    label: "PowerPoint",
    text: "Presentation templates, redesign and automation.",
  },
  {
    target: "custom-development",
    Icon: CustomDevIcon,
    label: "Custom development",
    text: "Web apps, add-ins, integrations and mobile apps.",
  },
  {
    target: "microsoft-365",
    Icon: Microsoft365Icon,
    label: "Microsoft 365 and support",
    text: "Microsoft 365, ongoing support and training.",
  },
];

// Row numbers are generated from the position in the list, so "01", "02" and so on
const formatNumber = (index) => String(index + 1).padStart(2, "0");

const GroupIntro = () => (
  <section className={styles.section} aria-labelledby="group-intro-heading">
    <div className={styles.inner}>
      <div className={styles.top}>
        {/* ── Left: what we offer ── */}
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Office Experts</span>
          <h2 id="group-intro-heading" className={styles.heading}>
            Microsoft Consulting and Custom Software Solutions{" "}
            <span className={styles.accent}>for Your Business</span>
          </h2>
          <p className={styles.text}>
            Whether it is a spreadsheet that keeps breaking, a document process
            that eats hours, or a system that no longer talks to the rest of
            your business, we design, build and repair the Microsoft solutions
            your team relies on every day.
          </p>
          <p className={styles.text}>
            Our consultants work across Excel, Word, Access, PowerPoint,
            Microsoft 365 and the Power Platform, with custom code and AI where
            it is the better fit. We recommend the simplest solution that solves
            the problem, then deliver and support it remotely or on-site across
            Australia.
          </p>
        </div>

        {/* ── Right: the main ways we help ── */}
        <div className={styles.listWrap}>
          <p className={styles.listTitle}>What we do</p>
          <ul className={styles.services}>
            {services.map((service, index) => (
              <li key={service.href} className={styles.service}>
                <ServiceLink href={service.href} className={styles.serviceLink}>
                  <span className={styles.serviceMeta}>
                    <span className={styles.serviceNum}>
                      {formatNumber(index)}
                    </span>
                    <span className={styles.serviceDot} aria-hidden="true" />
                  </span>
                  <h3 className={styles.serviceTitle}>{service.name}</h3>
                  <span className={styles.serviceArrow}>
                    <ArrowIcon />
                  </span>
                </ServiceLink>
              </li>
            ))}
          </ul>
          {/* "btn" is the global button class, styles.cta only places it */}
          <Link href="#contact" className={`btn ${styles.cta}`}>
            Get a free consultation
          </Link>
        </div>
      </div>

      {/* ── Service overview ── */}
      <div className={styles.overviewWrap}>
        <h3 className={styles.overviewTitle}>What we do</h3>
        <ul className={styles.overview}>
          {overview.map(({ target, Icon, label, text }) => (
            <li key={target}>
              <a href={`#${target}`} className={styles.item}>
                <span className={styles.itemIcon}>
                  <Icon />
                </span>
                <span className={styles.itemTitle}>{label}</span>
                <span className={styles.itemText}>{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default GroupIntro;
