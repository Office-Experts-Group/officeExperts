// /app/blog/access-vs-excel/page.js
import Image from "next/image";
import Link from "next/link";

import Contact from "@/components/Contact";
import { generateOrganizationSchema } from "@/utils/schemaGenerators";

import styles from "@/styles/accessVsExcelBlog.module.scss";

import dan from "@/public/team/dan.webp";

import HeroSvg from "./(svgs)/HeroSvg";
import DecisionSvg from "./(svgs)/DecisionSvg";
import HybridSvg from "./(svgs)/HybridSvg";
import {
  SketchDatabase,
  SketchDuplicates,
  SketchValidation,
  SketchBackup,
  SketchDesign,
} from "./(svgs)/MistakeIllustrations";
import {
  IconArrow,
  IconBulb,
  IconCalc,
  IconChart,
  IconCheck,
  IconDashboard,
  IconDatabase,
  IconGrid,
  IconInfo,
  IconLayers,
  IconLink,
  IconList,
  IconPhone,
  IconPlus,
  IconServer,
  IconShield,
  IconUsers,
} from "./(svgs)/Icons";

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with layout.js.
const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = "https://www.officeexperts.com.au/blog/access-vs-excel";
const PAGE_TITLE = "Microsoft Access vs Excel: Which to Use | Office Experts";
const PAGE_DESCRIPTION =
  "Learn when to use Microsoft Access, Excel or both for your business data: key differences, a decision guide, common mistakes and how to move safely.";
const PAGE_HEADLINE =
  "Microsoft Access vs. Excel: When to Use Which for Your Data Management";
const BREADCRUMB_NAME = "Microsoft Access vs. Excel";
const AUTHOR_NAME = "Daniel Thomas";
const READING_TIME = 13;
const WORD_COUNT = 3165;
const HERO_IMAGE_PATH = "/logo.png";
const HERO_IMAGE_ALT = "Office Experts logo";
const DATE_PUBLISHED = "2025-10-23T09:00:00+10:00";
// Update by hand when the content really changes. +11:00 is AEDT (first Sunday of October
// to first Sunday of April), otherwise +10:00. Never a future date.
const DATE_MODIFIED = "2026-11-20T09:00:00+11:00";

const MS_ACCESS_OR_EXCEL =
  "https://support.microsoft.com/en-us/excel/using-access-or-excel-to-manage-your-data";
const MS_TOP_10 =
  "https://support.microsoft.com/en-us/excel/top-10-reasons-to-use-access-with-excel";
const ACCESS_JUMPSTART =
  "https://www.accessjumpstart.com/when-to-use-access-excel-or-both/";
const AE_HOME = "https://www.accessexperts.com.au";
const AE_2GB =
  "https://www.accessexperts.com.au/blog/2gb-access-database-limit";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-AU", {
    timeZone: "Australia/Sydney",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

// Small helpers so every paragraph, heading and inline link carries the right class.
const L = ({ href, children }) =>
  href.startsWith("/") ? (
    <Link href={href} className={styles.inlineLink}>
      {children}
    </Link>
  ) : (
    <a
      href={href}
      className={styles.inlineLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );

const P = ({ children }) => <p className={styles.p}>{children}</p>;

const Section = ({ id, title, children }) => (
  <section id={id} className={styles.section} aria-labelledby={`${id}-heading`}>
    <h2 id={`${id}-heading`} className={styles.h2}>
      {title}
    </h2>
    {children}
  </section>
);

const Callout = ({ Icon, label, children }) => (
  <div className={styles.callout} role="note">
    <span className={styles.calloutIcon}>
      <Icon />
    </span>
    <div className={styles.calloutBody}>
      <span className={styles.calloutLabel}>{label}</span>
      <p className={styles.calloutText}>{children}</p>
    </div>
  </div>
);

const TickList = ({ items, single }) => (
  <ul className={`${styles.checklist} ${single ? styles.checklistOne : ""}`}>
    {items.map((item) => (
      <li key={item} className={styles.checkItem}>
        <span className={styles.tick}>
          <IconCheck />
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Accent = ({ children }) => (
  <>
    {" "}
    <span className={styles.accent}>{children}</span>
  </>
);

// ── Content ─────────────────────────────────────────────────────────────────

const TOC = [
  { id: "overview", label: "Excel and Access in Microsoft 365" },
  { id: "compare", label: "Access vs Excel at a glance" },
  { id: "excel", label: "When Excel is the better choice" },
  { id: "access", label: "When Access is the smarter option" },
  { id: "decide", label: "Which one should you use?" },
  { id: "together", label: "Using Access and Excel together" },
  { id: "moving", label: "How to move from Excel to Access" },
  { id: "alternatives", label: "Other options worth knowing" },
  { id: "mistakes", label: "Common mistakes businesses make" },
  { id: "help", label: "When to bring in expert help" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "summary", label: "Summary" },
];

const GLANCE = [
  {
    value: "1,048,576",
    label: "Rows per Excel worksheet",
    text: "That is the hard limit. Speed and reliability usually suffer well before you reach it.",
  },
  {
    value: "2 GB",
    label: "Access file size limit",
    text: "Per database file. Larger systems can keep their data in SQL Server instead.",
  },
  {
    value: "Both",
    label: "The answer for many teams",
    text: "Store the records in Access, then analyse and present them in Excel.",
  },
];

const COMPARE_ROWS = [
  ["Purpose", "Data analysis and calculations", "Data storage and management"],
  [
    "Best for",
    "Spreadsheets, charts and reports",
    "Multi-user databases and applications",
  ],
  [
    "Data shape",
    "Flat lists on one or more sheets",
    "Related tables linked by keys",
  ],
  [
    "Data entry",
    "Free-form: any cell can hold anything",
    "Forms and field rules control what goes in",
  ],
  [
    "Data integrity",
    "Data validation helps, but relationships between lists are not enforced",
    "Validation rules plus enforced relationships between tables",
  ],
  [
    "Size",
    "Up to 1,048,576 rows per worksheet, but it usually slows well before that",
    "Copes with far more records than a worksheet, up to 2 GB per file",
  ],
  [
    "Several people at once",
    "Co-authoring suits small shared workbooks, not heavy record entry",
    "Designed for a shared data environment",
  ],
  [
    "Reporting",
    "Pivot tables, charts and what-if analysis",
    "Built-in reports and saved queries",
  ],
  [
    "Learning curve",
    "Easy to start, intuitive interface",
    "Moderate, but scalable and structured",
  ],
  [
    "Platform and plans",
    "In every Microsoft 365 plan, on Windows, Mac and the web",
    "Only in certain Microsoft 365 plans, on Windows desktop",
  ],
];

const EXCEL_REASONS = [
  {
    Icon: IconCalc,
    title: "Financial analysis and forecasting",
    text: "Build cash flow models, budget forecasts and ROI projections, then change an assumption and watch every figure update.",
  },
  {
    Icon: IconGrid,
    title: "Quick data manipulation",
    text: "Sort, filter and run what-if analysis without any set-up. When the question is new and you need the answer today, Excel is hard to beat.",
  },
  {
    Icon: IconChart,
    title: "Visual dashboards",
    text: (
      <>
        Present KPIs and metrics with pivot tables and charts. Our{" "}
        <L href="/services/dashboards">dashboard work</L> often starts here
        before moving to Power BI.
      </>
    ),
  },
  {
    Icon: IconUsers,
    title: "Collaboration within Microsoft 365",
    text: "Share reports through OneDrive or Teams so colleagues see the latest version instead of an emailed copy.",
  },
];

const ACCESS_REASONS = [
  {
    Icon: IconDatabase,
    title: "To manage large or complex datasets",
    text: (
      <>
        Access copes with far more records than a worksheet before things slow
        down. Each file has a 2 GB limit, and bigger systems can keep their data
        in SQL Server through{" "}
        <L href="/services/sql-server-and-access-integration">
          SQL Server and Access integration
        </L>
        .
      </>
    ),
  },
  {
    Icon: IconLink,
    title: "Relational data structures",
    text: "Link tables, such as customers and their transactions, so every fact is stored once and stays consistent everywhere it is used.",
  },
  {
    Icon: IconUsers,
    title: "Multi-user access",
    text: "Let several staff view and update records at the same time, working through forms instead of raw cells.",
  },
  {
    Icon: IconShield,
    title: "Data validation and integrity",
    text: "Set rules on every field and enforce relationships between tables, so incorrect or orphaned entries are stopped at the door.",
  },
  {
    Icon: IconLayers,
    title: "Integration and scalability",
    text: (
      <>
        Connect with SQL Server, SharePoint or{" "}
        <L href="/services/microsoft-power-platform/power-apps">Power Apps</L>{" "}
        for more advanced business systems as your needs grow.
      </>
    ),
  },
];

const DECISION_ROWS = [
  [
    "A monthly cash flow forecast for a small team",
    "Excel",
    "Flexible formulas and quick what-if changes matter more than structure.",
  ],
  [
    "Customer, order and invoice records",
    "Access",
    "Linked tables keep one record per customer and stop details drifting.",
  ],
  [
    "Timesheets entered by many staff every day",
    "Access",
    "Forms, field rules and simultaneous entry suit repeated record keeping.",
  ],
  [
    "A board pack with charts from last month’s figures",
    "Excel",
    "Pivot tables and charts are built for exactly this.",
  ],
  [
    "A tracker that has split into a dozen near-identical files",
    "Access",
    "You need one source of truth. SharePoint or SQL Server may also fit.",
  ],
  [
    "Regular reporting on data that already lives in Access",
    "Both",
    "Connect Excel to a saved query and refresh instead of copying data out.",
  ],
];

const STEPS = [
  {
    title: "Audit your workbooks",
    text: "List every workbook and sheet. Mark which ones hold records (customers, orders, jobs) and which only hold calculations. Records are the candidates for Access. Calculations usually stay in Excel.",
    tip: "Search for file names containing “final”, “v2” or “copy”. They usually hold the same data in several places.",
  },
  {
    title: "Clean the data in Excel first",
    text: "Use one header row, remove merged cells and blank rows, and make dates and numbers consistent. A tidy sheet imports cleanly. A messy one imports its mess.",
    tip: "Fix spelling variants of customer or product names before the import, not after it.",
  },
  {
    title: "Split the data into tables",
    text: (
      <>
        Give each “thing” you track its own table, such as customers, orders and
        products, and add a unique ID to every row. If the same customer details
        repeat on many rows, they belong in a customers table. Access includes a
        Table Analyzer wizard that can suggest the split, and our{" "}
        <L href="/services/database-development-and-solutions">
          database development team
        </L>{" "}
        can design it with you.
      </>
    ),
    tip: "Sketch the tables on paper first. Ten minutes of drawing saves hours of rework.",
  },
  {
    title: "Import into Access",
    text: (
      <>
        In Access, go to External Data &gt; New Data Source &gt; From File &gt;
        Excel and follow the wizard. Menu names vary slightly between versions.
      </>
    ),
    tip: "Import from a copy of the workbook and keep the original untouched until your totals match.",
  },
  {
    title: "Set relationships and rules",
    text: (
      <>
        Open Database Tools &gt; Relationships and link the tables on their IDs.
        Switch on referential integrity, mark required fields and choose the
        right data type for each column.
      </>
    ),
    tip: "Write rules that match how the business really works, such as “a delivery date cannot be earlier than the order date”.",
  },
  {
    title: "Build forms and saved queries",
    text: "Create forms for data entry and saved queries for the questions you ask most often, such as sales by month or open jobs by owner. Staff then work in friendly forms, not in raw tables.",
    tip: "Name queries after the report they feed, for example qryMonthlySales, so they are easy to find later.",
  },
  {
    title: "Reconnect Excel for reporting",
    text: (
      <>
        In Excel, choose Data &gt; Get Data &gt; From Database &gt; From
        Microsoft Access Database, pick your saved query and load it. From then
        on, Data &gt; Refresh All brings the latest records into your pivot
        tables and charts. If your old workbooks rely on macros, have them
        reviewed first. Our{" "}
        <L href="/services/vba-macro-development">VBA macro team</L> can help.
      </>
    ),
    tip: "Point Excel at a saved query rather than a raw table, so reports keep working when the table structure grows.",
  },
];

const METHODS = [
  {
    Icon: IconServer,
    title: "Access with a SQL Server back end",
    text: "Keep the Access forms and reports your team already knows, but store the data in SQL Server for bigger volumes and stronger security.",
    bestFor: "Best for an Access system that is outgrowing its file",
    href: "/services/sql-server-and-access-integration",
    link: "SQL Server and Access integration",
  },
  {
    Icon: IconList,
    title: "SharePoint lists",
    text: "Simple shared lists with permissions that sit naturally inside Microsoft 365 and Teams. They suit light tracking more than complex data.",
    bestFor: "Best for light tracking with a few related lists",
    href: "/blog/sharepoint-lists",
    link: "how SharePoint lists work",
  },
  {
    Icon: IconPhone,
    title: "Power Apps on SQL or Dataverse",
    text: "Web and mobile apps built over a proper data store. Licensing varies by plan, so check what your organisation already holds.",
    bestFor: "Best for staff in the field or without Access",
    href: "/blog/power-apps-with-sql-database",
    link: "Power Apps with a SQL database",
  },
  {
    Icon: IconDashboard,
    title: "Power BI over either one",
    text: "Interactive dashboards that sit on top of Excel or Access data and refresh on a schedule, for people who want answers rather than workbooks.",
    bestFor: "Best for leaders who want live dashboards",
    href: "/services/microsoft-power-platform/power-bi",
    link: "Power BI services",
  },
];

const MISTAKES = [
  {
    Sketch: SketchDatabase,
    title: "Using Excel as a database",
    text: "Thousands of records in one workbook lead to slow performance, errors and arguments about who changed what.",
    instead:
      "Keep the records in Access (or SQL Server) and let Excel report on them.",
  },
  {
    Sketch: SketchDuplicates,
    title: "Duplicating data across spreadsheets",
    text: "Every copy drifts away from the others, so month-end turns into a reconciliation exercise.",
    instead:
      "Hold one central copy under central control and link every report to it.",
  },
  {
    Sketch: SketchValidation,
    title: "Skipping data validation",
    text: "Without rules, incorrect entries and broken formulas creep in and quietly spoil the results.",
    instead:
      "Use drop-down lists, data types and required fields: data validation in Excel, field rules in Access.",
  },
  {
    Sketch: SketchBackup,
    title: "Not backing up files properly",
    text: "Emailed copies and files called “final_v7” risk data loss and version conflicts.",
    instead:
      "Store files on OneDrive or SharePoint with version history, and back up the Access back end on a schedule.",
  },
  {
    Sketch: SketchDesign,
    title: "Building Access without a design",
    text: "Businesses that move to Access sometimes skip normalising their data or defining clear relationships, so even a powerful tool becomes hard to maintain or scale. Others treat Access as an island and miss out on automation and reporting.",
    instead:
      "Plan the tables and relationships first, then connect Access to Excel, Power BI or SharePoint.",
  },
];

const CHECKLIST = [
  "You know how many people will add or edit the data.",
  "You can name the main “things” you track, such as customers and orders.",
  "You know whether the same information sits in more than one file today.",
  "You have a back-up and version history you actually trust.",
  "Someone has confirmed that your Microsoft 365 plan includes Access.",
  "Your reports need to refresh without copying and pasting.",
  "You know which workbooks rely on macros.",
  "Someone will look after the system when its builder moves on.",
];

const FAQS = [
  {
    q: "Can Excel replace Access?",
    a: (
      <>
        For a small, simple list that one person maintains, yes. Once several
        people need to edit records, tables need to link to each other, or you
        want rules that stop bad data, a database is the safer home. Many
        businesses keep Excel for analysis and add Access (or SQL Server) for
        storage.
      </>
    ),
  },
  {
    q: "Is Access still a current Microsoft product?",
    a: (
      <>
        Microsoft’s own guidance on choosing between the two still covers Access
        for Microsoft 365 and Access 2024, so it remains a current product. It
        is included only in certain plans and runs on Windows desktop, so check
        your licence and devices before you commit.
      </>
    ),
  },
  {
    q: "Can several people use the same Excel workbook?",
    a: (
      <>
        Yes, through co-authoring on OneDrive or SharePoint, and it works well
        for small shared workbooks. It is not designed as a record-entry system,
        though. Heavy simultaneous editing of large lists, with no forms or
        field rules, tends to get messy quickly.
      </>
    ),
  },
  {
    q: "Can I link Excel to an Access database so reports update automatically?",
    a: (
      <>
        Yes. In Excel, use Data &gt; Get Data &gt; From Database &gt; From
        Microsoft Access Database, choose a table or saved query, then refresh
        whenever you need the latest figures. Menu names vary a little between
        versions. The{" "}
        <a href="#moving" className={styles.inlineLink}>
          step-by-step guide above
        </a>{" "}
        shows where this fits in a full move.
      </>
    ),
  },
  {
    q: "What do I do when an Access database nears the 2 GB limit?",
    a: (
      <>
        Common options are archiving old records, splitting the database into a
        front end and a back end, or moving the back end to SQL Server while
        keeping your Access forms and reports. Our Access team explains the
        options in{" "}
        <L href={AE_2GB}>their guide to the 2 GB Access database limit</L>.
      </>
    ),
  },
];

const RELATED = [
  {
    href: "/blog/power-apps-with-sql-database",
    title: "Power Apps with a SQL database",
    text: "See how a proper database back end can power apps for your whole team.",
  },
  {
    href: "/blog/sharepoint-lists",
    title: "SharePoint lists",
    text: "A lightweight option for shared tracking inside Microsoft 365.",
  },
  {
    href: "/blog/power-bi-licensing-costs",
    title: "Power BI licensing costs",
    text: "Planning to move from workbooks to dashboards? Start with the costs.",
  },
];

// ── Page ────────────────────────────────────────────────────────────────────

const AccessVsExcelBlogPost = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationSchema(),
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        isPartOf: { "@id": `${SITE_URL}#website` },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        mainEntity: { "@id": `${PAGE_URL}#article` },
        inLanguage: "en-AU",
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${SITE_URL}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: BREADCRUMB_NAME,
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${PAGE_URL}#article`,
        mainEntityOfPage: { "@id": `${PAGE_URL}#webpage` },
        headline: PAGE_HEADLINE,
        description: PAGE_DESCRIPTION,
        image: `${SITE_URL}${HERO_IMAGE_PATH}`,
        author: { "@type": "Person", name: AUTHOR_NAME },
        publisher: { "@id": `${SITE_URL}#organization` },
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
        articleSection: "Access Development",
        keywords: ["Microsoft Access vs Excel"],
        wordCount: WORD_COUNT,
        timeRequired: `PT${READING_TIME}M`,
        inLanguage: "en-AU",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className={styles.page}>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <div>
              <h1 className={styles.heroTitle}>
                Microsoft Access vs. Excel:
                <Accent>When to Use Which for Your Data Management</Accent>
              </h1>
              <p className={styles.heroLede}>
                Excel and Access both handle business data, but they solve
                different problems. This plain-English guide shows when to use
                each, how to use them together, and how to avoid the mistakes we
                see most often.
              </p>
              <div className={styles.byline}>
                <span className={styles.avatar} aria-hidden="true">
                  <Image src={dan} alt={AUTHOR_NAME} width={38} height={38} />
                </span>
                <div className={styles.bylineText}>
                  <span>
                    By <strong>{AUTHOR_NAME}</strong>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>
                    Updated{" "}
                    <time dateTime={DATE_MODIFIED}>
                      {formatDate(DATE_MODIFIED)}
                    </time>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{READING_TIME} min read</span>
                </div>
              </div>
            </div>
            <div className={styles.heroArt}>
              <HeroSvg className={styles.heroSvg} />
            </div>
          </div>
        </header>

        <section className={styles.glance} aria-label="At a glance">
          {GLANCE.map((g) => (
            <div key={g.label} className={styles.glanceCard}>
              <p className={styles.glanceValue}>{g.value}</p>
              <p className={styles.glanceLabel}>{g.label}</p>
              <p className={styles.glanceText}>{g.text}</p>
            </div>
          ))}
        </section>

        <div className={styles.layout}>
          <nav className={styles.toc} aria-label="Contents">
            <p className={styles.tocTitle}>In this article</p>
            <ul>
              {TOC.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`}>{t.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <article className={styles.article}>
            <Section
              id="overview"
              title={
                <>
                  Excel and Access in the Microsoft 365
                  <Accent>Ecosystem</Accent>
                </>
              }
            >
              <P>
                There is an overwhelming number of possibilities within the
                Microsoft ecosystem, and choosing the right tool (or combination
                of tools) is a decisive factor in how you handle your data and
                business workflows. Both Excel and Access are powerful business
                tools, but they solve different types of problems.
              </P>

              <div className={styles.toolGrid}>
                <div className={styles.toolCard}>
                  <div className={styles.toolHead}>
                    <span className={styles.chip}>
                      <IconGrid />
                    </span>
                    <h3 className={styles.toolName}>Excel</h3>
                  </div>
                  <p className={styles.cardText}>
                    Excel is designed primarily for{" "}
                    <strong>data analysis</strong>, financial modelling and
                    visual reporting. It is ideal for working with flat datasets
                    that need regular manipulation, calculations or charting.
                  </p>
                </div>
                <div className={styles.toolCardDark}>
                  <div className={styles.toolHead}>
                    <span className={styles.chip}>
                      <IconDatabase />
                    </span>
                    <h3 className={styles.toolName}>Access</h3>
                  </div>
                  <p className={styles.cardText}>
                    Access is a <strong>relational database system</strong>. It
                    helps you store, organise and connect structured data across
                    multiple tables, and suits managing customers, orders and
                    inventory where relationships matter.
                  </p>
                </div>
              </div>

              <P>
                Both tools integrate with other Microsoft products, such as{" "}
                <L href="/services/microsoft-power-platform/power-bi">
                  Power BI
                </L>
                , <strong>SharePoint</strong> and <strong>Teams</strong>,
                allowing you to extend their capabilities and use others without
                a major system overhaul.
              </P>

              <Callout Icon={IconInfo} label="Microsoft’s own guidance">
                Microsoft’s support article draws the same line. Access is the
                better fit for managing data: keeping it organised, easy to
                search and available to several people at once. Excel is the
                better fit for analysing it, with complex calculations, what-if
                scenarios and polished charts. Read the full article,{" "}
                <L href={MS_ACCESS_OR_EXCEL}>
                  Using Access or Excel to manage your data
                </L>
                .
              </Callout>
            </Section>

            <Section
              id="compare"
              title={
                <>
                  Access vs Excel<Accent>at a glance</Accent>
                </>
              }
            >
              <P>
                The table below sets the two side by side. No single row decides
                the question on its own. What matters is which rows describe
                your data and your team.
              </P>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <caption>Comparison of Excel and Access</caption>
                  <thead>
                    <tr>
                      <th scope="col">Feature</th>
                      <th scope="col">Excel</th>
                      <th scope="col">Access</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARE_ROWS.map(([feature, excel, access]) => (
                      <tr key={feature}>
                        <th scope="row">{feature}</th>
                        <td>{excel}</td>
                        <td>{access}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            <Section
              id="excel"
              title={
                <>
                  When Excel is the<Accent>Better Choice</Accent>
                </>
              }
            >
              <P>
                Excel remains one of the most widely used business applications
                in Australia. It offers speed, flexibility and familiarity for
                anyone who needs to analyse data or create reports on the fly.
                You should most likely choose Excel when your focus is on:
              </P>

              <div className={styles.reasonGrid}>
                {EXCEL_REASONS.map(({ Icon, title, text }) => (
                  <div key={title} className={styles.reasonCard}>
                    <span className={styles.badge}>
                      <Icon />
                    </span>
                    <h3 className={styles.reasonTitle}>{title}</h3>
                    <p className={styles.cardText}>{text}</p>
                  </div>
                ))}
              </div>

              <P>
                Excel is particularly effective for <strong>small teams</strong>{" "}
                or <strong>limited datasets</strong>, typically those under a
                few hundred thousand rows, where simplicity and agility are the
                main goal. It is also the ideal front-end tool for{" "}
                <strong>presenting and interpreting data</strong>, especially
                when paired with Power BI for interactive dashboards.
              </P>
              <P>
                A single worksheet can hold 1,048,576 rows, but that is a
                ceiling, not a target. Workbooks with heavy formulas, lookups
                across many sheets or lots of formatting can turn slow and
                fragile long before they get anywhere near it. However, as your
                data becomes more interconnected or needs several people to edit
                it at once, Excel’s flat-file structure starts to show its
                limits.
              </P>
              <P>
                If you want to get more out of the tool itself, our team offers{" "}
                <L href="/services/microsoft-excel">
                  Excel consulting and development
                </L>
                , <L href="/services/power-query">Power Query</L> and{" "}
                <L href="/services/vba-macro-development">
                  VBA macro development
                </L>
                .
              </P>

              <Callout Icon={IconBulb} label="Rule of thumb">
                If you spend more time cleaning, copying and reconciling data
                than analysing it, Excel is probably doing a job that belongs to
                a database.
              </Callout>
            </Section>

            <Section
              id="access"
              title={
                <>
                  When Microsoft Access is the
                  <Accent>Smarter Option</Accent>
                </>
              }
            >
              <P>
                If your organisation handles several types of related
                information, such as clients, suppliers, orders and products,{" "}
                <strong>Microsoft Access</strong> provides a more structured and
                reliable foundation. Access is the smarter choice when you need:
              </P>

              <ul className={styles.rowList}>
                {ACCESS_REASONS.map(({ Icon, title, text }) => (
                  <li key={title} className={styles.row}>
                    <span className={styles.rowIcon}>
                      <Icon />
                    </span>
                    <div>
                      <h3 className={styles.rowTitle}>{title}</h3>
                      <p className={styles.cardText}>{text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <P>
                Independent Access trainers make the same point. Once data
                structures become more complex, with large datasets, many users
                and related tables, the choice shifts towards Access rather than
                Excel (see{" "}
                <L href={ACCESS_JUMPSTART}>when to use Access, Excel or both</L>
                ).
              </P>

              <Callout Icon={IconInfo} label="Check your licence first">
                Access is only included in certain Microsoft 365 plans, and it
                runs on Windows desktop rather than on Mac or in the browser.
                Confirm your plan and your team’s devices before you commit to
                an Access-based system.
              </Callout>

              <P>
                Access is not a free pass, either. A poorly designed database
                gets slow and hard to maintain just like an overgrown
                spreadsheet. Our Access team covers the practical side in{" "}
                <L href={AE_2GB}>
                  how to handle the Access 2 GB database limit
                </L>
                , and offers <L href={AE_HOME}>Access database development</L>{" "}
                if you would like a hand.
              </P>
            </Section>

            <Section
              id="decide"
              title={
                <>
                  Which One Should You<Accent>Use?</Accent>
                </>
              }
            >
              <P>
                Not sure where your own data sits? Work down the questions in
                the diagram and stop at the first Yes. If a spreadsheet is
                already doing a database’s job, expect Access to win.
              </P>

              <figure className={styles.diagram}>
                <div className={styles.diagramScroll}>
                  <div
                    className={`${styles.diagramInner} ${styles.diagramInnerNarrow}`}
                  >
                    <DecisionSvg className={styles.diagramSvg} />
                  </div>
                </div>
                <figcaption className={styles.caption}>
                  Four questions, in order. The dark box shows the answer many
                  teams end up with.
                </figcaption>
              </figure>

              <h3 className={styles.h3}>
                Scenarios you are likely to recognise
              </h3>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <caption>Which tool to start with, by scenario</caption>
                  <thead>
                    <tr>
                      <th scope="col">Scenario</th>
                      <th scope="col">Start with</th>
                      <th scope="col">Why</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DECISION_ROWS.map(([scenario, tool, why]) => (
                      <tr key={scenario}>
                        <th scope="row">{scenario}</th>
                        <td>
                          <strong>{tool}</strong>
                        </td>
                        <td>{why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <P>
                If your situation fits rows on both sides, that is normal. It is
                usually a sign that you need both tools, each doing the job it
                is best at.
              </P>
            </Section>

            <Section
              id="together"
              title={
                <>
                  Using Access and Excel<Accent>Together</Accent>
                </>
              }
            >
              <P>
                Although this article may seem to be pitting the two tools
                against each other, that is far from the real picture. You do
                not always have to choose between Excel and Access. In fact, the
                two work beautifully together.
              </P>
              <P>
                A common setup for Australian SMEs is to use{" "}
                <strong>Access as the back-end database</strong> (storing all
                business records securely) and{" "}
                <strong>Excel as the front-end analysis tool</strong> (for
                dashboards, pivot tables and reports). By linking Access tables
                or queries into Excel, your reports update when the database
                changes, with no copying and pasting between files. This hybrid
                approach gives your business the{" "}
                <strong>best of both worlds</strong>:
              </P>
              <TickList
                single
                items={[
                  "The stability and scalability of a relational database.",
                  "The flexibility and visual capabilities of Excel.",
                ]}
              />
              <P>
                It also means everyone works from the same source of truth,
                which reduces duplication and saves time during reporting
                periods.
              </P>

              <figure className={styles.diagram}>
                <div className={styles.diagramScroll}>
                  <div className={styles.diagramInner}>
                    <HybridSvg className={styles.diagramSvg} />
                  </div>
                </div>
                <figcaption className={styles.caption}>
                  Staff work in Access. Reports live in Excel and refresh from a
                  saved query.
                </figcaption>
              </figure>

              <Callout Icon={IconLink} label="Microsoft makes the same case">
                Microsoft’s “top 10 reasons” article argues that if you store
                your data in Access and connect to it from Excel, you gain the
                benefits of both. See{" "}
                <L href={MS_TOP_10}>Top 10 reasons to use Access with Excel</L>.
              </Callout>
            </Section>

            <Section
              id="moving"
              title={
                <>
                  How to Move From Excel to<Accent>Access</Accent>
                </>
              }
            >
              <P>
                Moving does not mean switching everything off and starting
                again. Work through these steps and your Excel reports can keep
                running throughout. Back up every file before you begin.
              </P>

              <ol className={styles.steps}>
                {STEPS.map((step, i) => (
                  <li key={step.title} className={styles.step}>
                    <span className={styles.stepBadge} aria-hidden="true">
                      {i + 1}
                    </span>
                    <div className={styles.stepBody}>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.cardText}>{step.text}</p>
                      <div className={styles.proTip}>
                        <span className={styles.proTipIcon}>
                          <IconBulb />
                        </span>
                        <p className={styles.proTipText}>
                          <strong>Pro tip:</strong> {step.tip}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>

              <P>
                For a larger or riskier move, our{" "}
                <L href="/services/upgrades-and-migration">
                  upgrades and migration service
                </L>{" "}
                handles the planning, the testing and the hand-over. You can
                also see how we approached a{" "}
                <L href="/case-studies/community-services-excel-consolidation-rebuild">
                  community services Excel consolidation and rebuild
                </L>
                .
              </P>
            </Section>

            <Section
              id="alternatives"
              title={
                <>
                  Other Options<Accent>Worth Knowing About</Accent>
                </>
              }
            >
              <P>
                Access and Excel are not the only choices. Depending on how many
                people use the data and where they work, one of these may fit
                better, or sit alongside them.
              </P>
              <div className={styles.methodGrid}>
                {METHODS.map(({ Icon, title, text, bestFor, href, link }) => (
                  <div key={title} className={styles.methodCard}>
                    <div className={styles.methodHead}>
                      <span className={styles.chip}>
                        <Icon />
                      </span>
                      <h3 className={styles.methodTitle}>{title}</h3>
                    </div>
                    <p className={styles.cardText}>
                      {text} Learn more about <L href={href}>{link}</L>.
                    </p>
                    <p className={styles.bestFor}>{bestFor}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section
              id="mistakes"
              title={
                <>
                  Common Mistakes Businesses<Accent>Make</Accent>
                </>
              }
            >
              <P>
                Many businesses unknowingly push Excel beyond its intended
                limits. Others move to Access and skip the groundwork. These are
                the five habits we see most often, and what to do instead.
              </P>

              <div className={styles.mistakeList}>
                {MISTAKES.map(({ Sketch, title, text, instead }, i) => (
                  <div key={title} className={styles.mistakeCard}>
                    <div className={styles.mistakeHead}>
                      <span className={styles.mistakeNum} aria-hidden="true">
                        {i + 1}
                      </span>
                      <h3 className={styles.mistakeTitle}>{title}</h3>
                    </div>
                    <p className={styles.cardText}>{text}</p>
                    <Sketch className={styles.sketch} />
                    <div className={styles.instead}>
                      <span className={styles.insteadPill}>Instead</span>
                      <p className={styles.insteadText}>{instead}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className={styles.h3}>A quick checklist before you decide</h3>
              <div className={styles.checkPanel}>
                <TickList items={CHECKLIST} />
              </div>
            </Section>

            <Section
              id="help"
              title={
                <>
                  When to Bring in<Accent>Expert Help</Accent>
                </>
              }
            >
              <div className={styles.ctaBand}>
                <div>
                  <p className={styles.ctaText}>
                    If your spreadsheets are slowing you down, a short
                    conversation can tell you whether Access, Excel or both is
                    the right fit. We design, build and repair Access databases
                    and Excel solutions for Australian businesses. You can also
                    browse our{" "}
                    <L href="/services/microsoft-excel">Excel services</L>.
                  </p>
                </div>
                <Link href="#contact" className={styles.ctaButton}>
                  Talk to our team
                </Link>
              </div>
            </Section>

            <Section
              id="faq"
              title={
                <>
                  Frequently Asked<Accent>Questions</Accent>
                </>
              }
            >
              <div className={styles.faqList}>
                {FAQS.map((f) => (
                  <details key={f.q} className={styles.faq}>
                    <summary>
                      {f.q}
                      <span className={styles.faqIcon}>
                        <IconPlus />
                      </span>
                    </summary>
                    <div className={styles.faqAnswer}>
                      <p className={styles.p}>{f.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </Section>

            <Section
              id="summary"
              title={
                <>
                  Summary: Choosing the Right Tool
                  <Accent>for Your Business</Accent>
                </>
              }
            >
              <P>
                Ultimately, the right choice depends on your data structure,
                team size and growth goals.
              </P>
              <TickList
                single
                items={[
                  "If you need fast, flexible analysis and reporting, Excel is hard to beat.",
                  "If you need structured, multi-user data management, Access offers greater power and stability.",
                  "And for many Australian businesses, using both tools together delivers the most efficient and scalable solution.",
                ]}
              />
              <P>
                By choosing the right tool, or combination of tools, your
                business can save time, improve accuracy and make smarter
                decisions with confidence.
              </P>

              <div className={styles.authorBox}>
                <span className={styles.avatarLarge} aria-hidden="true">
                  <Image src={dan} alt={AUTHOR_NAME} width={56} height={56} />
                </span>
                <div>
                  <h3 className={styles.authorName}>{AUTHOR_NAME}</h3>
                  <p className={styles.authorBio}>
                    Daniel is a developer at the Office Experts Group, an
                    Australian Microsoft consultancy established in 2000, and a
                    curious mind in the world of programming, design and SEO. If
                    you have any questions, please get in contact via the form
                    below.
                  </p>
                </div>
              </div>

              <div className={styles.related}>
                <h2 className={styles.h2}>
                  Keep<Accent>reading</Accent>
                </h2>
                <div className={styles.relatedGrid}>
                  {RELATED.map((r) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      className={styles.relatedCard}
                    >
                      <h3 className={styles.relatedTitle}>{r.title}</h3>
                      <p className={styles.relatedText}>{r.text}</p>
                      <span className={styles.relatedMore}>
                        Read more <IconArrow width="16" height="16" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </Section>
          </article>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default AccessVsExcelBlogPost;
