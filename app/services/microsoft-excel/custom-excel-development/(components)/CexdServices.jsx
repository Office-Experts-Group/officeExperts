// /app/services/microsoft-excel/custom-excel-development/(components)/CexdServices.jsx
import Link from "next/link";

import styles from "@/styles/cexdServices.module.scss";

import { CexdArrowIcon } from "../(svgs)/CexdIcons";
import {
  CexdUiIcon,
  CexdMacroIcon,
  CexdIntegrationsIcon,
  CexdWorkbookIcon,
  CexdAddinIcon,
} from "../(svgs)/CexdServiceIcons";

const CEXD_SERVICES = [
  {
    id: "ui",
    tag: "Bespoke UI",
    title: "Custom user interface development",
    body: "Many Excel solutions start life as a spreadsheet and gradually grow into the cornerstone of your business. As more users become involved, ease of use becomes just as important as the calculations behind it. We develop custom UserForms, guided workflows, validation rules, and web-based interfaces that make data entry faster, more consistent, and less prone to errors.",
    Icon: CexdUiIcon,
  },
  {
    id: "macros",
    tag: "Automation",
    title: "VBA macro development",
    body: "Repetitive Excel tasks are the low-hanging fruit for automation. Whether it’s generating reports, importing data, formatting worksheets, or distributing files, VBA macros save you hours of manual work and improve consistency. Our code is structured, documented, and designed to be maintained long after the initial development is complete.",
    Icon: CexdMacroIcon,
    link: {
      href: "/services/vba-macro-development",
      text: "More about VBA macro development",
    },
  },
  {
    id: "integrations",
    tag: "Connectivity",
    title: "Office and third-party integrations",
    body: "Excel is usually just one part of a larger system. We develop integrations between Microsoft Office, databases, cloud platforms, and third-party applications to make sure information flows automatically between systems. From SQL Server and SharePoint to REST APIs and Microsoft 365 services.",
    Icon: CexdIntegrationsIcon,
    link: {
      href: "/services/3rd-party-application-or-office-integration",
      text: "More about Office and third-party integration",
    },
  },
  {
    id: "workbooks",
    tag: "Tailored builds",
    title: "Custom workbooks and templates",
    body: "A well-designed workbook should be easy to use, reliable, and simple to maintain. We build structured layouts, validation controls and protected areas with clear documentation. Whether you need a new workbook developed from scratch or an existing spreadsheet rebuilt, the result is a file your team can trust.",
    Icon: CexdWorkbookIcon,
    link: {
      href: "/case-studies/food-manufacturer-excel-costing-workbook",
      text: "See a custom costing workbook we built",
    },
  },
  {
    id: "addins",
    tag: "Office extensions",
    title: "Add-in development",
    body: "When functionality needs to be available across multiple workbooks or throughout an entire organisation, an Office add-in is usually the best solution. We develop custom add-ins for Excel, Word, Outlook, and Microsoft 365 that provide shared tools, ribbon commands, automation features, and business-specific functionality for your team.",
    Icon: CexdAddinIcon,
    link: {
      href: "/services/add-in-creation",
      text: "More about add-in development",
    },
  },
];

const CexdServices = () => (
  <section
    className={styles.cexdServices}
    id="cexd-services"
    aria-labelledby="cexd-services-heading"
  >
    <div className={styles.inner}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>What we build</span>
        <h2 id="cexd-services-heading" className={styles.heading}>
          Solutions for real{" "}
          <span className={styles.accent}>business challenges.</span>
        </h2>
        <p className={styles.subheading}>
          If you need to automate repetitive tasks, connect systems or improve
          your reporting, our consultants can help. Below are the most common
          types of custom Excel development services we provide.
        </p>
      </header>

      <div className={styles.rows}>
        {CEXD_SERVICES.map((service) => (
          <article key={service.id} className={styles.row}>
            <div className={styles.rowLead}>
              <span className={styles.icon}>
                <service.Icon />
              </span>
              <span className={styles.tag}>{service.tag}</span>
            </div>
            <div className={styles.rowBody}>
              <h3 className={styles.rowTitle}>{service.title}</h3>
              <p className={styles.rowText}>{service.body}</p>
              {service.link && (
                <Link href={service.link.href} className={styles.rowLink}>
                  {service.link.text}
                  <CexdArrowIcon />
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default CexdServices;
