// /app/services/microsoft-power-platform/power-bi-data-integration/(components)/PbdiCustom.jsx
import Link from "next/link";
import styles from "@/styles/pbdiCustom.module.scss";
import PbdiRouteArt, { PbdiReviewArt } from "../(svgs)/PbdiRouteArt";
import { PbdiArrowIcon } from "../(svgs)/PbdiIcons";

const PBDI_REVIEW_ITEMS = [
  { kind: "databases", label: "Databases" },
  { kind: "spreadsheets", label: "Spreadsheets" },
  { kind: "cloud", label: "Cloud platforms" },
  { kind: "tools", label: "Third-party tools" },
];

const PBDI_ROUTES = [
  {
    kind: "builtin",
    tile: "lightTile",
    title: "Out-of-the-box connectors",
    body: "Power BI supports hundreds of ready-made connectors for common sources such as Excel, SQL Server, SharePoint and Salesforce. When your sources are standard, this is the quickest and most affordable route.",
    bestFor: "Your data lives in common, well-supported systems.",
    link: {
      href: "/services/microsoft-power-platform/excel-to-power-bi-migration",
      text: "Move Excel reporting into Power BI",
    },
  },
  {
    kind: "pipeline",
    tile: "paleTile",
    title: "Pipelines and dataflows",
    body: (
      <>
        When data needs cleaning, joining or reshaping before you can report on
        it, we build repeatable pipelines with{" "}
        <Link href="/services/power-query">Power Query</Link>, dataflows and{" "}
        <Link href="/services/cloud-based-solutions-with-azure">
          Azure Data Factory
        </Link>
        .
      </>
    ),
    bestFor: "Several sources need to line up before they can be reported on.",
    link: {
      href: "/services/power-pivot",
      text: "Power Pivot data modelling",
    },
  },
  {
    kind: "custom",
    tile: "accentTile",
    title: "Custom connectors and APIs",
    body: (
      <>
        For large or complex systems, our programmers build API integrations and
        custom connectors for legacy systems, SaaS platforms and
        industry-specific tools. Got an old Access database? See how to{" "}
        <a href="https://www.accessexperts.com.au/integrate-access-with-power-bi">
          integrate Access with Power BI
        </a>
        , or how we{" "}
        <Link href="/case-studies/film-crew-booking-system-access-nextjs-rebuild">
          moved a locked-away Access 2000 database onto Azure SQL
        </Link>
        .
      </>
    ),
    bestFor: "A system has no connector, or its data is locked away.",
    link: {
      href: "/services/3rd-party-application-or-office-integration",
      text: "Third-party application integration",
    },
  },
];

const PbdiCustom = () => (
  <section
    id="pbdi-custom"
    className={styles.pbdiCustom}
    aria-labelledby="pbdi-custom-heading"
  >
    <div className={styles.inner}>
      <div className={styles.top}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Built around your systems</p>
          <h2 id="pbdi-custom-heading" className={styles.heading}>
            Customised{" "}
            <span className={styles.accent}>integration solutions</span>
          </h2>
          <p>
            We create integrations tailored to your business. We start by
            identifying and assessing your current data sources, often a mix of
            databases, spreadsheets, cloud platforms and third-party tools, and
            map how they fit together.
          </p>
          <p>
            Then we pick the simplest route that works, from ready-made
            connectors through to fully custom builds. Here’s how the options
            step up.
          </p>
        </div>

        <div className={styles.review}>
          <p className={styles.reviewLabel}>What we review first</p>
          <ul className={styles.reviewList}>
            {PBDI_REVIEW_ITEMS.map(({ kind, label }) => (
              <li key={kind} className={styles.reviewItem}>
                <PbdiReviewArt kind={kind} />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className={styles.stairs}>
        {PBDI_ROUTES.map(({ kind, tile, title, body, bestFor, link }) => (
          <li key={kind} className={`${styles.step} ${styles[tile]}`}>
            <div className={`${styles.art} ${styles[`${kind}Art`]}`}>
              <PbdiRouteArt kind={kind} />
            </div>
            <h3 className={styles.stepTitle}>{title}</h3>
            <p className={styles.stepText}>{body}</p>
            <p className={styles.bestFor}>
              <span className={styles.bestLabel}>Best when</span>
              {bestFor}
            </p>
            <Link href={link.href} className={styles.stepLink}>
              {link.text} <PbdiArrowIcon />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default PbdiCustom;
