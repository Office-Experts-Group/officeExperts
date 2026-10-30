// /app/services/(components)/ExcelSection.jsx
// Excel: split layout with a sticky intro on the left and a list of expanding service rows on the right.
// Each row is one link. The description opens on hover or keyboard focus (pure CSS, so it stays server rendered).
// The row numbers and dots are drawn in CSS, so they are decorative and not read by screen readers.
import styles from "@/styles/excelSection.module.scss";
import ServiceLink from "./ServiceLink";
import { ExcelIcon } from "../(svgs)/ExcelIcon";
import { ArrowIcon } from "../(svgs)/ArrowIcon";

const items = [
  {
    name: "Custom design and development",
    href: "https://www.excelexperts.com.au/custom-design-and-development",
    description:
      "Workbooks designed around your process, not the other way round.",
  },
  {
    name: "Formulas and custom functions",
    href: "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas",
    description:
      "Complex calculations made reliable, plus functions Excel does not have.",
  },
  {
    name: "VBA and macro development",
    href: "https://www.excelexperts.com.au/vba-macro-development",
    description: "Automate repetitive work and build tools inside Excel.",
  },
  {
    name: "Pivot tables, charts and reporting",
    href: "https://www.excelexperts.com.au/pivot-tables-charts-and-reporting-solutions",
    description: "Reporting that updates itself and reads clearly.",
  },
  {
    name: "Data manipulation",
    href: "https://www.excelexperts.com.au/data-manipulation",
    description: "Clean, combine and reshape messy data.",
  },
  {
    name: "Add-in development",
    href: "https://www.excelexperts.com.au/add-in-development",
    description: "Packaged tools your whole team can install.",
  },
  {
    name: "Excel support",
    href: "https://www.excelexperts.com.au/excel-support",
    description: "Help when a workbook is broken or behaving badly.",
  },
  {
    name: "Upgrades and migration",
    href: "https://www.excelexperts.com.au/upgrades-and-migration",
    description: "Move legacy spreadsheets to current versions safely.",
  },
];

const ExcelSection = () => (
  <section id="excel" className={styles.section} aria-labelledby="excel-heading">
    <div className={styles.inner}>
      <div className={styles.intro}>
        <span className={styles.icon}>
          <ExcelIcon />
        </span>
        <span className={styles.eyebrow}>Spreadsheets</span>
        <h2 id="excel-heading" className={styles.heading}>
          Excel development and <span className={styles.accent}>support</span>
        </h2>
        <p className={styles.text}>
          From a single smart formula to a full reporting system, our Excel
          specialists build spreadsheets that are fast, accurate and hard to
          break.
        </p>
        <ServiceLink
          href="https://www.excelexperts.com.au"
          className={styles.siteLink}
        >
          Visit Excel Experts
        </ServiceLink>
      </div>

      <ul className={styles.rows}>
        {items.map((item) => (
          <li key={item.name} className={styles.row}>
            <ServiceLink href={item.href} className={styles.rowLink}>
              <span className={styles.rowMeta} aria-hidden="true" />
              <div className={styles.rowContent}>
                <h3 className={styles.rowTitle}>{item.name}</h3>
                <div className={styles.rowDesc}>
                  <p className={styles.rowText}>{item.description}</p>
                </div>
              </div>
              <span className={styles.rowArrow}>
                <ArrowIcon />
              </span>
            </ServiceLink>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ExcelSection;
