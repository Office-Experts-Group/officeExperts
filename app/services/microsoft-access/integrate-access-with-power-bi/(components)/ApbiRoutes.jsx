// /app/services/microsoft-access/integrate-access-with-power-bi/(components)/ApbiRoutes.jsx
// Standout section: CSS-only tabs (radio inputs), so there is no client JavaScript.
import Link from "next/link";

import {
  ApbiRouteDirectArt,
  ApbiRouteSqlArt,
  ApbiRouteBlendArt,
} from "../(svgs)/ApbiRoutesArt";
import { ArrowIcon } from "../(svgs)/ApbiIcons";

import styles from "@/styles/apbiRoutes.module.scss";

const APBI_ROUTES = [
  {
    id: "direct",
    radio: styles.radioDirect,
    tab: styles.tabDirect,
    panel: styles.panelDirect,
    label: "Connect directly",
    Art: ApbiRouteDirectArt,
    title: "Connect Power BI straight to your Access file",
    paragraphs: [
      "Power BI Desktop includes a connector for Access. We point it at your tables and saved queries, shape the data, build the report and publish it to the Power BI service for your team.",
      "To keep that report fresh without anyone opening Desktop, the Power BI service refreshes it on a schedule. Because an Access file normally lives on your own network, that usually means installing an on-premises data gateway on a machine that can reach the file, along with an Access Database Engine driver that matches it.",
    ],
    best: "One team, a modest database and a handful of reports. It is the quickest route to a first dashboard.",
    watch:
      "Power BI imports a copy of the data on each refresh rather than reading it live. The gateway machine and the Access file both need to be on and reachable when a refresh runs, and driver versions (32-bit or 64-bit) have to line up. That mismatch is a common reason a first refresh fails.",
    link: {
      href: "/services/microsoft-power-platform/power-bi",
      text: "Power BI consulting",
    },
  },
  {
    id: "sql",
    radio: styles.radioSql,
    tab: styles.tabSql,
    panel: styles.panelSql,
    label: "Move the back end to SQL Server",
    Art: ApbiRouteSqlArt,
    title: "Move the back end to SQL Server, then report from there",
    paragraphs: [
      "If your database is large, slow or used by many people at once, a SQL Server back end is the stronger foundation. We split the database, move the tables to SQL Server or Azure SQL, and relink Access so your forms and reports carry on as before.",
      "Power BI then connects to SQL Server using standard, well-supported connectors. Refresh becomes more dependable, the Access file size limit stops mattering, and depending on your set-up you can decide how fresh the data needs to be.",
    ],
    best: "The file is heading towards its 2 GB limit, plenty of people use it, or reports need to be fresher than an overnight copy.",
    watch:
      "This is a small migration project in its own right, so it needs planning, testing and a way back. It does pay off beyond reporting, because the same SQL back end can support other tools later.",
    link: {
      href: "/services/sql-server-and-access-integration",
      text: "SQL Server and Access integration",
    },
  },
  {
    id: "blend",
    radio: styles.radioBlend,
    tab: styles.tabBlend,
    panel: styles.panelBlend,
    label: "Blend Access with other data",
    Art: ApbiRouteBlendArt,
    title: "Blend Access with the rest of your data",
    paragraphs: [
      "Few businesses keep everything in one place. Orders may sit in Access, targets in Excel, projects in SharePoint lists and invoices in an online accounting tool. Power BI can pull them into one model, so a single dashboard answers questions that no one system can.",
      "Most of the effort is in the tidy-up. We agree the common keys, such as customer or job numbers, fix the mismatches, and build one model that every report draws from, so two people never end up quoting two different totals.",
    ],
    best: "Your numbers are spread across several tools, or different teams want different reports from the same data.",
    watch:
      "Sources can only be joined when they share an identifier, so some clean-up usually has to happen first. Some online services also limit how often their data can be refreshed.",
    link: {
      href: "/services/microsoft-power-platform/power-bi-data-integration",
      text: "Power BI data integration",
    },
  },
];

const ApbiRoutes = () => (
  <section
    id="apbi-routes"
    className={styles.apbiRoutes}
    aria-labelledby="apbi-routes-heading"
  >
    <div className={styles.inner}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Choose your route</p>
        <h2 id="apbi-routes-heading" className={styles.heading}>
          Three ways to connect{" "}
          <span className={styles.accent}>Access to Power BI</span>
        </h2>
        <p className={styles.lede}>
          There isn’t one right way to connect Access to Power BI. The best
          route depends on how big your database is, how many people use it and
          whether you plan to keep Access as the back end. Pick a route to see
          how it works and when we would recommend it.
        </p>
      </header>

      <fieldset className={styles.tabs}>
        <legend className={styles.legend}>Choose a connection route</legend>

        {APBI_ROUTES.map(({ id, radio }, i) => (
          <input
            key={id}
            type="radio"
            name="apbi-route"
            id={`apbi-route-${id}`}
            className={`${styles.radio} ${radio}`}
            defaultChecked={i === 0}
          />
        ))}

        <div className={styles.tabList}>
          {APBI_ROUTES.map(({ id, tab, label }) => (
            <label
              key={id}
              htmlFor={`apbi-route-${id}`}
              className={`${styles.tab} ${tab}`}
            >
              {label}
            </label>
          ))}
        </div>

        <div className={styles.panels}>
          {APBI_ROUTES.map(
            ({ id, panel, Art, title, paragraphs, best, watch, link }) => (
              <article key={id} className={`${styles.panel} ${panel}`}>
                <div className={styles.copy}>
                  <h3 className={styles.title}>{title}</h3>
                  {paragraphs.map((text) => (
                    <p key={text} className={styles.text}>
                      {text}
                    </p>
                  ))}
                  <p className={styles.note}>
                    <strong>Best when:</strong> {best}
                  </p>
                  <p className={styles.note}>
                    <strong>Watch for:</strong> {watch}
                  </p>
                  <Link href={link.href} className={styles.link}>
                    {link.text} <ArrowIcon />
                  </Link>
                </div>
                <figure className={styles.figure}>
                  <div className={styles.diagramScroll}>
                    <div className={styles.diagramInner}>
                      <Art />
                    </div>
                  </div>
                </figure>
              </article>
            ),
          )}
        </div>
      </fieldset>

      <p className={styles.after}>
        Not sure which one fits? We look at your database first and recommend a
        route in plain English. The{" "}
        <a href="#apbi-fit" className={styles.inline}>
          decision guide below
        </a>{" "}
        compares them side by side.
      </p>
    </div>
  </section>
);

export default ApbiRoutes;
