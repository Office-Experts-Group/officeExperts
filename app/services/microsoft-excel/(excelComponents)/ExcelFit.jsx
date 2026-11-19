// /app/services/microsoft-excel/(components)/ExcelFit.jsx
// "Is Excel right for your needs?" (ranking heading from the old home page):
// what Excel does well, beside a decision table showing when to stay in
// Excel and when another tool from the Office Experts Group fits better.
// One semantic table for every screen size; below 767px each row stacks and
// shows its column names from data-label.

import Link from "next/link";

import styles from "@/styles/excelFit.module.scss";

import {
  AnalysisGlyph,
  CalcGlyph,
  ChartGlyph,
  DashboardGlyph,
  FormattingGlyph,
  ManipulationGlyph,
  RoleMeter,
} from "../(svgs)/ExcelFitArt";

const ExcelFit = () => {
  const strengths = [
    { label: "Data analysis", glyph: <AnalysisGlyph /> },
    { label: "Conditional formatting", glyph: <FormattingGlyph /> },
    { label: "Data manipulation", glyph: <ManipulationGlyph /> },
    { label: "Charting", glyph: <ChartGlyph /> },
    { label: "Calculations and statistical comparisons", glyph: <CalcGlyph /> },
    { label: "Powerful reporting dashboards", glyph: <DashboardGlyph /> },
  ];

  const rows = [
    {
      situation: "A small team working with numbers that change often",
      role: "The whole solution",
      filled: 4,
      advice: "A well-built custom workbook",
      href: "/services/microsoft-excel/custom-excel-development",
      linkText: "Custom Excel development",
    },
    {
      situation: "Several people entering data at the same time",
      role: "Reporting and analysis",
      filled: 2,
      advice: "A database (Access or SQL Server) with Excel on top",
      href: "/services/database-development-and-solutions",
      linkText: "Database development",
    },
    {
      situation: "Leaders want live dashboards they can open anywhere",
      role: "Preparing the data",
      filled: 2,
      advice: "Power BI, fed from your existing workbooks",
      href: "/services/microsoft-power-platform/excel-to-power-bi-migration",
      linkText: "Excel to Power BI",
    },
    {
      situation: "Staff collect information on phones or tablets",
      role: "Where the data lands",
      filled: 1,
      advice: "A Power Apps form feeding Excel or a database",
      href: "/services/microsoft-power-platform/power-apps",
      linkText: "Power Apps",
    },
    {
      situation: "The same steps repeat across email, files and systems",
      role: "One step in the process",
      filled: 1,
      advice: "Power Automate, or VBA inside Excel",
      href: "/services/microsoft-power-platform/power-automate",
      linkText: "Power Automate",
    },
    {
      situation: "Customers or staff need the data online",
      role: "The back office",
      filled: 1,
      advice: "An online solution built on your data",
      href: "/services/online-solutions",
      linkText: "Online solutions",
    },
  ];

  return (
    <section
      id="excel-fit"
      className={styles.excelFit}
      aria-labelledby="excel-fit-heading"
    >
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>Let us help</span>
          <h2 id="excel-fit-heading" className={styles.heading}>
            Is Excel right{" "}
            <span className={styles.accent}>for your needs?</span>
          </h2>
          <p className={styles.text}>
            Our Excel consultants can advise on every feature of Excel and{" "}
            <Link href="/services/vba-macro-development">
              VBA macro programming
            </Link>
            , and tell you honestly whether Excel is the right solution for your
            business. Because Office Experts also builds databases, Power BI
            reports and Power Apps, we’ve no reason to keep you in Excel if
            something else fits better.
          </p>

          <p className={styles.strengthsLabel}>Excel is a great choice for</p>
          <ul className={styles.strengths}>
            {strengths.map((item) => (
              <li key={item.label} className={styles.strength}>
                {item.glyph}
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <caption className={styles.caption}>
              When to stay in Excel, and when to add something else
            </caption>
            <thead>
              <tr>
                <th scope="col">Your situation</th>
                <th scope="col">Excel’s role</th>
                <th scope="col">What we’d suggest</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.situation}>
                  <th scope="row" data-label="Your situation">
                    {row.situation}
                  </th>
                  <td data-label="Excel’s role">
                    <span className={styles.role}>
                      <RoleMeter filled={row.filled} />
                      {row.role}
                    </span>
                  </td>
                  <td data-label="What we’d suggest">
                    <span className={styles.advice}>{row.advice}</span>
                    <Link href={row.href} className={styles.rowLink}>
                      {row.linkText}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ExcelFit;
