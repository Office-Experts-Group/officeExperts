// /app/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions/(components)/PivotServices.jsx
import React from "react";
import Link from "next/link";

import {
  PivotTablesArt,
  PowerQueryArt,
  PowerPivotArt,
  DashboardsArt,
  VbaArt,
  PowerBiArt,
} from "../(svgs)/PivotServiceArt";
import { PivotArrowIcon } from "../(svgs)/PivotIcons";
import styles from "@/styles/pivotServices.module.scss";

// tile = colour variant, span = bento size (wide 4 cols, narrow 2, half 3)
const PIVOT_SERVICES = [
  {
    id: "pivot-tables",
    heading: "Pivot Tables",
    description:
      "Slice, group and aggregate large datasets in seconds with no formulas required. We design the field layout, calculated fields, and conditional formatting, then hand it over as a template your team can refresh.",
    chips: ["Calculated fields", "Custom groupings", "Shared pivot caches"],
    Art: PivotTablesArt,
    tile: "accentTile",
    span: "wide",
  },
  {
    id: "power-query",
    heading: "Power Query",
    description:
      "Automate the data preparation that happens before every report. We connect to your files, databases, SharePoint lists and APIs, clean and reshape the data, and reduce the whole process to a one-click refresh.",
    link: { href: "/services/power-query", text: "Power Query" },
    chips: [
      "SQL, SharePoint & API sources",
      "Dedup & normalisation",
      "M language transforms",
    ],
    Art: PowerQueryArt,
    tile: "darkTile",
    span: "narrow",
  },
  {
    id: "powerpivot",
    heading: "PowerPivot & Data Modelling",
    description:
      "Extend Excel to handle millions of rows from multiple sources. We build DAX measures, KPIs and table relationships that go beyond what standard pivot tables can do.",
    link: { href: "/services/power-pivot", text: "PowerPivot" },
    chips: [
      "Data Model relationships",
      "DAX measures & KPIs",
      "Time intelligence",
    ],
    Art: PowerPivotArt,
    tile: "lightTile",
    span: "narrow",
  },
  {
    id: "dashboards",
    heading: "Excel Dashboards",
    description:
      "All your key metrics on one screen, auto-refreshing from your data source. We design interactive dashboards with slicers, KPI tiles and conditional indicators, so your team needs no Excel skills to use them.",
    link: { href: "/services/dashboards", text: "Dashboards" },
    chips: ["Auto-refresh", "Slicer interactivity", "SharePoint embedding"],
    Art: DashboardsArt,
    tile: "surfaceTile",
    span: "wide flip",
  },
  {
    id: "vba",
    heading: "VBA Reporting Automation",
    description:
      "For workflows that need to do more than refresh, we can automate reports, email them on a schedule, or apply consistent formatting rules. VBA wraps around pivot tables and Power Query to create one-click reporting systems.",
    link: {
      href: "https://www.excelexperts.com.au/vba-macro-development",
      text: "VBA Automation",
    },
    chips: [
      "Scheduled report generation",
      "Outlook email distribution",
      "One-click automation",
    ],
    Art: VbaArt,
    tile: "tintTile",
    span: "half",
  },
  {
    id: "power-bi",
    heading: "Power BI",
    description:
      "When reports need to be shared live across a team or opened on mobile, Power BI is the right tool. Our Power Platform team works with us to build Power BI solutions, and in some situations it is a better fit than Excel.",
    link: {
      href: "/services/microsoft-power-platform/power-bi",
      text: "Power BI Support",
    },
    chips: [
      "Live web dashboards",
      "Mobile access",
      "Excel-to-Power BI migration",
    ],
    Art: PowerBiArt,
    tile: "deepTile",
    span: "half",
  },
];

const PivotServices = () => (
  <section
    className={styles.pivotServices}
    id="services"
    aria-labelledby="pvt-services-heading"
  >
    <div className={styles.inner}>
      <header className={styles.header}>
        <div className={styles.headerMain}>
          <span className={styles.eyebrow}>What We Build</span>
          <h2 id="pvt-services-heading" className={styles.heading}>
            The full reporting <span className={styles.accent}>toolkit.</span>
          </h2>
        </div>
        {/* <div className={styles.headerAside}>
          <p className={styles.intro}>
            From a single pivot table through to an automated reporting
            pipeline, we find the tool to solve your problem.
          </p>
          <Link href="#contact" className={styles.cta}>
            Discuss your project
          </Link>
        </div> */}
      </header>

      <ul className={styles.grid}>
        {PIVOT_SERVICES.map(
          ({ id, heading, description, chips, link, Art, tile, span }) => (
            <li
              key={id}
              id={id}
              className={[
                styles.tile,
                styles[tile],
                ...span.split(" ").map((s) => styles[s]),
              ].join(" ")}
            >
              <div className={styles.art}>
                <Art />
              </div>
              <div className={styles.text}>
                <h3 className={styles.tileHeading}>{heading}</h3>
                <p className={styles.tileDesc}>{description}</p>
                <ul className={styles.chips} aria-label={`${heading} features`}>
                  {chips.map((chip) => (
                    <li key={chip} className={styles.chip}>
                      {chip}
                    </li>
                  ))}
                </ul>
                {link && (
                  <Link href={link.href} className={styles.learnMore}>
                    {link.text} <PivotArrowIcon />
                  </Link>
                )}
              </div>
            </li>
          ),
        )}
      </ul>
    </div>
  </section>
);

export default PivotServices;
