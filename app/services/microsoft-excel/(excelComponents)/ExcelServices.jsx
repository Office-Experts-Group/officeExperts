// /app/services/microsoft-excel/(components)/ExcelServices.jsx
// Excel service catalogue: a compact bento of the five main services (three
// tiles on top, two wide tiles below), then a row of smaller service links.
// Keeps id="excel-services" (the hero links here).
//
// Excel page links point at their planned /services/microsoft-excel/<slug>
// URLs. Change a href here if a page lands on a different slug.

import Link from "next/link";

import styles from "@/styles/excelServices.module.scss";

import {
  CustomArt,
  DataArt,
  FormulaArt,
  ReportArt,
  VbaArt,
} from "../(svgs)/ExcelServiceArt";
import {
  AddInIcon,
  ArrowIcon,
  CloudIcon,
  PlugIcon,
  TrainingIcon,
  UpgradeIcon,
} from "../(svgs)/ExcelIcons";

const ExcelServices = () => {
  const services = [
    {
      title: "Custom Excel development",
      text: "Custom workbooks with forms, protection and automation, designed with senior Australian experts for high-end Excel solutions.",
      href: "/services/microsoft-excel/custom-excel-development",
      linkText: "Custom Excel development",
      art: <CustomArt />,
      tone: styles.accentTile,
    },
    {
      title: "VBA and macro development",
      text: "Automate repetitive tasks or extend what Excel can do. Each of our Australian VBA developers has at least 15 years’ experience.",
      href: "/services/vba-macro-development",
      linkText: "VBA and macros",
      art: <VbaArt />,
      tone: styles.darkTile,
    },
    {
      title: "Formulas and troubleshooting",
      text: "Broken formulas fixed, complex ones written, and custom VBA functions when the built-in ones aren’t enough.",
      href: "/services/microsoft-excel/excel-formulas-and-custom-formulas",
      linkText: "Excel formulas",
      art: <FormulaArt />,
      tone: styles.lightTile,
    },
    {
      title: "Data manipulation",
      text: "Import, clean and combine data from CSV, XML, SQL, JSON and other workbooks, with Power Query or VBA doing the repetitive work the same way every time.",
      href: "/services/microsoft-excel/data-manipulation",
      linkText: "Data manipulation",
      art: <DataArt />,
      tone: styles.lightTile,
      wide: true,
    },
    {
      title: "Charts, pivot tables and reporting",
      text: "Clear visual reports from your data: pivot tables, automated charts and custom Excel dashboards, with Power Pivot where it helps.",
      href: "/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions",
      linkText: "Charts and reporting",
      art: <ReportArt />,
      tone: styles.midTile,
      wide: true,
    },
  ];

  const more = [
    {
      title: "Add-in development",
      text: "Add-ins for Excel and other Office apps, set up across your team.",
      href: "/services/add-in-creation",
      icon: <AddInIcon />,
    },
    {
      title: "Upgrades and migration",
      text: "Workbook and macro fixes before and after an Office upgrade.",
      href: "/services/upgrades-and-migration",
      icon: <UpgradeIcon />,
    },
    {
      title: "Online solutions",
      text: "Share spreadsheet data online with your staff or customers.",
      href: "/services/online-solutions",
      icon: <CloudIcon />,
    },
    {
      title: "Office and system integration",
      text: "Connect Excel to Word, Access, your CRM or accounting system.",
      href: "/services/3rd-party-application-or-office-integration",
      icon: <PlugIcon />,
    },
    {
      title: "Excel help and training",
      text: "Occasional guidance or ongoing support for your organisation.",
      href: "/microsoft-support-and-training-australia",
      icon: <TrainingIcon />,
    },
  ];

  return (
    <section
      id="excel-services"
      className={styles.excelServices}
      aria-labelledby="excel-services-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Our Excel services</span>
          <h2 id="excel-services-heading" className={styles.heading}>
            From quick fixes{" "}
            <span className={styles.accent}>to complete Excel systems</span>
          </h2>
          <p className={styles.lead}>
            Our Microsoft Excel programmers cover custom programming,
            development, databases and integration. Start with the service
            closest to your problem, or just tell us what’s going wrong and
            we’ll point you the right way.
          </p>
        </header>

        <ul className={styles.grid}>
          {services.map((service) => (
            <li
              key={service.title}
              className={`${styles.tile} ${service.tone} ${service.wide ? styles.wide : ""}`}
            >
              <div className={styles.art}>{service.art}</div>
              <div className={styles.body}>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.text}>{service.text}</p>
                <Link href={service.href} className={styles.tileLink}>
                  {service.linkText} <ArrowIcon />
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.more}>
          <h3 className={styles.moreHeading}>More ways we help with Excel</h3>
          <ul className={styles.moreList}>
            {more.map((item) => (
              <li key={item.title}>
                <Link href={item.href} className={styles.moreItem}>
                  <span className={styles.moreIcon}>{item.icon}</span>
                  <span className={styles.moreBody}>
                    <span className={styles.moreTitle}>
                      {item.title} <ArrowIcon />
                    </span>
                    <span className={styles.moreText}>{item.text}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExcelServices;
