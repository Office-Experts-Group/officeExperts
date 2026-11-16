// /app/blog/power-apps-with-sql-database/page.js
import Image from "next/image";
import Link from "next/link";

import Contact from "@/components/Contact";
import RelatedLinks from "@/components/RelatedLinks";
import { generateOrganizationSchema } from "@/utils/schemaGenerators";
import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";
import styles from "@/styles/powerAppsWithSqlDatabaseBlog.module.scss";

import marcello from "@/public/team/marcello.webp";

import HeroSvg from "./(svgs)/HeroSvg";
import ArchitectureSvg from "./(svgs)/ArchitectureSvg";
import DecisionSvg from "./(svgs)/DecisionSvg";
import SchemaSvg from "./(svgs)/SchemaSvg";
import { MistakeSketches } from "./(svgs)/Illustrations";
import {
  IconLink,
  IconGrowth,
  IconRules,
  IconShield,
  IconKey,
  IconUsers,
  IconForm,
  IconRefresh,
  IconCheck,
  IconBulb,
  IconInfo,
  IconDatabase,
  IconFlow,
  IconApp,
  IconArrow,
  IconPlus,
  IconExternal,
} from "./(svgs)/Icons";

// Keep these in sync with layout.js
const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/blog/power-apps-with-sql-database`;
const PAGE_TITLE =
  "Power Apps and SQL Database: Get Started | Office Experts";
const PAGE_DESCRIPTION =
  "Connect Power Apps to a Microsoft SQL database: set up Azure SQL, build linked tables, use stored procedures and Power Automate for an inventory app.";

const PAGE_HEADLINE =
  "Getting Started with Power Apps and Microsoft SQL Database";
const BREADCRUMB_NAME = "Getting Started with Power Apps and SQL Database";
const AUTHOR_NAME = "Marcello Brocchi";
const READING_TIME = "13 min read";
const HERO_IMAGE_PATH = "/logo.png"; // confirm, or swap for a real hero image
const HERO_IMAGE_ALT = "Office Experts Group logo";
const DATE_PUBLISHED = "2025-04-12T09:00:00+10:00"; // confirm: carried over from the old schema block
const DATE_MODIFIED = "2026-11-16T09:00:00+11:00"; // AEDT, set by hand

const formatDate = (iso) =>
  new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Sydney",
  }).format(new Date(iso));

const CASE_STUDY_SLUGS = [
  "film-crew-booking-system-access-nextjs-rebuild",
  "building-consultants-inspection-crm",
  "automated-proposal-generation-in-microsoft",
];

const caseStudyLinks = CASE_STUDY_SLUGS.map(getCaseStudyBySlug)
  .filter(Boolean)
  .map((s) => ({
    href: `/case-studies/${s.slug}`,
    title: s.title,
    description: s.truncatedDescription,
    image: s.image,
    linkText: s.linkText,
  }));

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
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}${HERO_IMAGE_PATH}`,
      },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      inLanguage: "en-AU",
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
      isPartOf: { "@id": `${PAGE_URL}#webpage` },
      mainEntityOfPage: { "@id": `${PAGE_URL}#webpage` },
      headline: PAGE_HEADLINE,
      description: PAGE_DESCRIPTION,
      image: `${SITE_URL}${HERO_IMAGE_PATH}`,
      author: { "@type": "Person", name: AUTHOR_NAME },
      publisher: { "@id": `${SITE_URL}#organization` },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      inLanguage: "en-AU",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const toc = [
  { id: "intro", label: "Introduction" },
  { id: "video", label: "Prefer to watch the video?" },
  { id: "why", label: "Why move beyond SharePoint lists" },
  { id: "map", label: "How the pieces fit together" },
  { id: "choose", label: "Which data source fits" },
  { id: "azure", label: "Set up your Azure SQL database" },
  { id: "tables", label: "Create your tables" },
  { id: "procedure", label: "Create a stored procedure" },
  { id: "flow", label: "Connect with Power Automate" },
  { id: "app", label: "Build your Power App" },
  { id: "mistakes", label: "Common mistakes to avoid" },
  { id: "beyond", label: "Beyond the basics" },
  { id: "takeaways", label: "Key takeaways" },
  { id: "help", label: "Get help" },
  { id: "faq", label: "FAQs" },
  { id: "conclusion", label: "Conclusion" },
];

const glance = [
  {
    value: "2",
    label: "linked tables",
    text: "Stock and Orders, joined by a foreign key.",
  },
  {
    value: "1",
    label: "stored procedure",
    text: "Joins them into one tidy result for your app.",
  },
  {
    value: "1",
    label: "flow",
    text: "Power Automate carries the data between app and database.",
  },
];

const reasons = [
  {
    Icon: IconLink,
    title: "Real relationships",
    text: "A foreign key makes the database check that every order belongs to a real stock item, instead of relying on lookup columns and good habits.",
  },
  {
    Icon: IconGrowth,
    title: "Room to grow",
    text: "Databases are built for large, busy tables with indexes, so a list that keeps growing stops being a worry.",
  },
  {
    Icon: IconRules,
    title: "Rules in one place",
    text: "Data types, constraints and procedures apply to every app and report that touches the data, not just the one you built first.",
  },
  {
    Icon: IconShield,
    title: "Finer security",
    text: "Firewall rules, database users and permissions give you more precise control over who and what can reach the data.",
  },
];

const compareHead = ["", "SharePoint list", "Dataverse", "Azure SQL database"];
const compareRows = [
  {
    label: "Best for",
    cells: [
      "Simple data and small teams already in Microsoft 365",
      "Apps that live entirely inside the Power Platform",
      "Data shared with other systems, larger tables, or existing SQL skills",
    ],
  },
  {
    label: "Relationships",
    cells: [
      "Lookup columns, with limited enforcement",
      "Built-in tables and relationships",
      "Foreign keys, constraints and joins in SQL",
    ],
  },
  {
    label: "Security model",
    cells: [
      "SharePoint permissions",
      "Dataverse security roles",
      "Firewall rules, database users and permissions",
    ],
  },
  {
    label: "Skills needed",
    cells: ["Low", "Medium", "SQL knowledge helps a lot"],
  },
  {
    label: "Licensing",
    cells: [
      "Often covered by Microsoft 365 for standard use",
      "Usually needs premium Power Apps licensing",
      "SQL Server connector is generally premium, plus Azure costs",
    ],
  },
];

const azureSteps = [
  {
    title: "Find SQL databases",
    text: "In the Azure Portal, search for “SQL databases” and select Create (older versions of the portal say Add).",
  },
  {
    title: "Choose a resource group",
    text: "Select an existing resource group or create a new one.",
    tip: "A dedicated resource group keeps everything for this project together and makes clean-up easy.",
  },
  {
    title: "Name your database",
    text: "Give your database a name (for example, “ChinoDB”).",
  },
  {
    title: "Create a SQL server",
    text: "Create a new SQL server (for example, “ChinoDBSRV”). The server name becomes part of the address you connect to.",
    tip: "Server names have to be unique across Azure, so pick something distinctive.",
  },
  {
    title: "Set the admin credentials",
    text: "Set up the server admin login and password.",
    tip: "Treat this login as a setup tool. Your app gets its own limited user later in this guide.",
  },
  {
    title: "Create it",
    text: "Take the default options for the other settings and click Create.",
    tip: "While you’re learning, choose a low-cost compute tier. You can scale up later.",
  },
];

const firewallSteps = [
  {
    title: "Open your SQL server",
    text: "Navigate to your SQL server in the Azure Portal.",
  },
  {
    title: "Open Networking",
    text: "Click on “Networking” under “Security”.",
  },
  {
    title: "Allow Azure services",
    text: "Set “Allow Azure services and resources to access this server” to “Yes”.",
    tip: "This setting admits connections from Azure services generally, not only yours. It suits learning, and it’s worth reviewing before production.",
  },
  {
    title: "Add your client IP",
    text: "Add your client IP address so you can connect from your desktop.",
    tip: "Remove your IP again when you no longer need it.",
  },
];

const flowSteps = [
  {
    title: "Create an instant flow",
    text: "Create a new instant flow with the Power Apps trigger.",
  },
  {
    title: "Add Execute stored procedure",
    text: "Add an “Execute stored procedure” action from the SQL Server connector.",
    tip: "If you see more than one version of the action, choose the newest (V2).",
  },
  {
    title: "Point it at GetOrders",
    text: "Configure it to connect to your database and call the “GetOrders” procedure.",
    tip: "Create the connection with the limited app user from the previous section, not the admin login.",
  },
  {
    title: "Parse the response",
    text: "Add a “Parse JSON” action to format the response.",
    tip: "Run the flow once, copy the JSON output, and use Generate from sample to build the schema for you.",
  },
  {
    title: "Respond to Power Apps",
    text: "Add a “Respond to PowerApps” action to return the data.",
    tip: "If the action only offers simple outputs, return the rows as text with string() and convert them in the app with ParseJSON.",
  },
];

const appSteps = [
  {
    title: "Create a blank canvas app",
    text: "Start from a blank canvas app.",
  },
  {
    title: "Add a gallery control",
    text: "The gallery will list your orders.",
  },
  {
    title: "Add a button to refresh data from SQL",
    text: "The button runs the flow and loads the results.",
  },
];

const mistakes = [
  {
    title: "Connecting with the admin login",
    why: "One leaked or over-trusted login then opens the whole server.",
    fix: "Create a dedicated database user for the app and grant only what it needs, such as EXECUTE on GetOrders.",
  },
  {
    title: "Skipping the foreign key",
    why: "Without it, nothing stops an order pointing at a stock item that doesn’t exist.",
    fix: "Declare the FOREIGN KEY so the database refuses orphan rows for every app and report.",
  },
  {
    title: "Opening the firewall to everyone",
    why: "A wide-open rule is convenient while testing and easy to forget.",
    fix: "Allow only the Azure services you need and your own IP address, and remove old test IPs.",
  },
  {
    title: "Pulling the whole table into the app",
    why: "Every extra row makes the app slower and the screen harder to use.",
    fix: "Join, filter and sort in the stored procedure, and return only what the screen shows.",
  },
  {
    title: "Storing dates and numbers as text",
    why: "Text sorts alphabetically, so “10” lands before “9” and dates drift out of order.",
    fix: "Use real data types such as datetime and int so sorting, filtering and maths behave.",
  },
];

const goLiveChecklist = [
  "The app connects with a limited database user, not the admin login",
  "Firewall rules allow only what you need, and old test IPs are gone",
  "Every relationship has a FOREIGN KEY constraint",
  "Columns use proper data types",
  "Stored procedures return only the rows and columns the app needs",
  "You’ve tested empty results and a large number of rows",
  "Passwords live in a password manager, not in screenshots or flow notes",
  "You’ve confirmed licensing for everyone who will use the app",
];

const beyond = [
  {
    Icon: IconForm,
    title: "Create/Edit Forms",
    text: "Screens to add and update stock items and orders. Call a stored procedure or flow for each save, so the rules stay in SQL.",
  },
  {
    Icon: IconRules,
    title: "Data Validation",
    text: "Ensuring data integrity before saving to SQL. Check in the app for fast feedback, and again in the database as the safety net.",
  },
  {
    Icon: IconRefresh,
    title: "Automatic Reordering",
    text: "Triggering orders when stock levels fall below thresholds. A scheduled flow can compare StockLevel with a minimum and raise the order.",
  },
  {
    Icon: IconUsers,
    title: "User Authentication",
    text: "Ensuring only authorised users can access certain functions. Control who can open the app, and keep the database user’s permissions tight.",
  },
];

const takeaways = [
  {
    Icon: IconDatabase,
    title: "Use Stored Procedures",
    text: "They’re the key to working effectively with SQL, especially with related tables.",
  },
  {
    Icon: IconFlow,
    title: "Power Automate is Your Bridge",
    text: "Use it to connect Power Apps with SQL stored procedures, especially when a process has several steps.",
  },
  {
    Icon: IconKey,
    title: "Secure Your Database",
    text: "Create specific database users for your apps rather than using admin credentials.",
  },
  {
    Icon: IconApp,
    title: "Plan Your Data Model",
    text: "A well-designed database schema makes app development much easier.",
  },
  {
    Icon: IconRules,
    title: "Learn SQL Basics",
    text: "Understanding SQL queries and joins will dramatically expand what you can do with Power Apps.",
  },
];

const helpLinks = [
  {
    href: "/services/database-development-and-solutions",
    label: "Database development and solutions",
  },
  {
    href: "/services/sql-server-and-access-integration",
    label: "SQL Server and Access integration",
  },
  {
    href: "/services/microsoft-power-platform/microsoft-power-apps",
    label: "Power Apps development",
  },
  {
    href: "/services/business-process-automation",
    label: "Business process automation",
  },
];

const faqs = [
  {
    q: "Do I need a premium licence to use SQL with Power Apps?",
    a: "The SQL Server connector is generally classed as a premium connector, which usually means the people using the app need a Power Apps or Power Automate plan that includes premium connectors. Licensing changes over time, so confirm with Microsoft or your licensing partner before you build.",
  },
  {
    q: "Can Power Apps call a SQL stored procedure without Power Automate?",
    a: "Yes. Microsoft documents calling SQL Server stored procedures directly from Power Fx through the SQL Server connector. A flow is still a good bridge when a process has several steps, such as saving a record, emailing someone and updating a second system.",
  },
  {
    q: "Why use a stored procedure instead of connecting to the tables?",
    a: "Power Fx is great for simple queries but it can’t express everything SQL can. A stored procedure (or a view) lets the database do the joins, filtering and sorting, so the app receives one tidy result. Procedures are also the usual place for create, update and delete logic.",
  },
  {
    q: "Can I use an on-premises SQL Server instead of Azure SQL?",
    a: "Yes, but the connection is different. An on-premises SQL Server is normally reached through an on-premises data gateway, and the firewall steps in this guide won’t apply. Your IT team will need to set up and maintain the gateway.",
  },
  {
    q: "Is it safe to use the admin login in my app?",
    a: "No. Create a dedicated database user with the minimum permissions the app needs. As a rule, the connection’s credentials are shared by everyone who uses the app, so control who can open the app and what that database user is allowed to do.",
  },
];

/* ------------------------------------------------------------------ */
/* Small helpers                                                       */
/* ------------------------------------------------------------------ */

const Callout = ({ Icon, label, children }) => (
  <aside className={styles.callout}>
    <span className={styles.calloutIcon}>
      <Icon />
    </span>
    <div className={styles.calloutBody}>
      <p className={styles.calloutLabel}>{label}</p>
      <p className={styles.calloutText}>{children}</p>
    </div>
  </aside>
);

const CodeBlock = ({ code, language }) => (
  <figure className={styles.code}>
    <figcaption className={styles.codeHead}>
      <span className={styles.codeDots} aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className={styles.codeLang}>{language}</span>
    </figcaption>
    <pre tabIndex={0}>
      <code>{code}</code>
    </pre>
  </figure>
);

const Steps = ({ steps }) => (
  <ol className={styles.steps}>
    {steps.map((s, i) => (
      <li key={s.title} className={styles.step}>
        <span className={styles.stepBadge} aria-hidden="true">
          {i + 1}
        </span>
        <div className={styles.stepBody}>
          <p className={styles.stepTitle}>{s.title}</p>
          <p className={styles.stepText}>{s.text}</p>
          {s.tip && (
            <p className={styles.tip}>
              <span className={styles.tipLabel}>
                <IconBulb />
                Pro tip
              </span>
              {s.tip}
            </p>
          )}
        </div>
      </li>
    ))}
  </ol>
);

const Diagram = ({ children, caption }) => (
  <figure className={styles.diagram}>
    <div className={styles.diagramScroll}>
      <div className={styles.diagramInner}>{children}</div>
    </div>
    <figcaption className={styles.diagramCaption}>{caption}</figcaption>
  </figure>
);

/* ------------------------------------------------------------------ */
/* Code samples                                                        */
/* ------------------------------------------------------------------ */

const azureSetupCode = `// Azure SQL Server Configuration
// 1. Create SQL Server
Server name: your-server-name.database.windows.net
Server admin login: YourAdminUsername
Password: YourSecurePassword

// 2. Configure Firewall
- Set "Allow Azure services and resources to access this server" to YES
- Add your client IP address for local development`;

const sqlTableCreationCode = `-- Create Stock Table
CREATE TABLE Stock (
    ID int IDENTITY(1,1) PRIMARY KEY,
    Name varchar(100) NOT NULL,
    Description varchar(255),
    StockLevel int
);

-- Create Orders Table
CREATE TABLE Orders (
    ID int IDENTITY(1,1) PRIMARY KEY,
    StockID int NOT NULL,
    OrderDate datetime,
    Amount int,
    Description varchar(255),
    CONSTRAINT FK_Orders_Stock FOREIGN KEY (StockID) REFERENCES Stock (ID)
);`;

const insertDataCode = `-- Insert sample stock items
INSERT INTO Stock (Name, Description, StockLevel)
VALUES
    ('Resistor', '10K Ohm Resistor', 50),
    ('Capacitor', '10uF Electrolytic Capacitor', 30),
    ('Diode', '1N4007 Diode', 25);

-- Insert sample orders
INSERT INTO Orders (StockID, OrderDate, Amount, Description)
VALUES
    (1, GETDATE(), 20, 'Monthly resistor order'),
    (2, GETDATE(), 15, 'Low stock capacitor order'),
    (3, GETDATE(), 30, 'Diode replacement order'),
    (1, DATEADD(day, -7, GETDATE()), 25, 'Emergency resistor order');`;

const storedProcedureCode = `CREATE PROCEDURE GetOrders
AS
BEGIN
    SET NOCOUNT ON;

    SELECT
        t2.Name AS StockName,
        t2.Description AS StockDescription,
        t1.Amount AS OrderedAmount,
        t1.Description AS OrderDescription,
        t1.OrderDate AS OrderDate
    FROM Orders t1
    JOIN Stock t2 ON t1.StockID = t2.ID
    ORDER BY t1.OrderDate DESC;
END`;

const appUserCode = `-- Run in your database (not master). Adjust to your security policy.
CREATE USER PowerAppsUser WITH PASSWORD = 'Use-a-long-random-password-here';

-- Give the app user only what it needs
GRANT EXECUTE ON OBJECT::dbo.GetOrders TO PowerAppsUser;`;

const powerAutomateStepsCode = `// Power Automate Flow Steps:

1. Trigger: PowerApps
   - Initialize flow from Power Apps

2. Execute Stored Procedure
   - Server name: your-server-name.database.windows.net
   - Database name: YourDatabaseName
   - Procedure name: GetOrders

3. Parse JSON
   - Content: Body from Execute Stored Procedure step
   - Schema: (Use the output schema from a test run)

4. Respond to PowerApps
   - Return the parsed JSON result to Power Apps`;

const powerAppsGalleryCode = `// Power Apps Gallery Setup

// 1. Create a variable to store SQL data
Set(
    SQLOrderData,
    PowerAutomateFlow.Run('GetOrders').ResultSet.Table1
);

// 2. Set Gallery.Items property
Gallery1.Items = SQLOrderData;

// 3. In gallery controls, use ThisItem properties:
// - ThisItem.StockName
// - ThisItem.StockDescription
// - ThisItem.OrderedAmount
// - ThisItem.OrderDescription
// - ThisItem.OrderDate`;

const directCallCode = `// Option B: call the stored procedure directly
// (add the SQL Server connection to the app first)
Set(
    SQLOrderData,
    ChinoDB.dboGetOrders().ResultSets.Table1
);`;

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const PowerAppsSQLBlogPost = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />

    <div className={styles.page}>
      {/* Hero */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <h1 className={styles.heroTitle}>
              Getting Started with Power Apps and{" "}
              <span className={styles.heroAccent}>Microsoft SQL Database</span>
            </h1>
            <p className={styles.lede}>
              Moving beyond SharePoint lists is one of the biggest steps in a
              Power Apps developer’s journey. This guide shows you how to set up
              an Azure SQL database, link two tables together, and show the
              results in a Power App, using a small stock and orders system as
              the example.
            </p>
            <div className={styles.authorRow}>
              <span className={styles.avatar} aria-hidden="true">
                <Image
                  src={marcello}
                  alt={AUTHOR_NAME}
                  width={44}
                  height={44}
                />
              </span>
              <p className={styles.authorMeta}>
                <span className={styles.authorName}>By {AUTHOR_NAME}</span>
                <span className={styles.authorSub}>
                  Updated{" "}
                  <time dateTime={DATE_MODIFIED}>
                    {formatDate(DATE_MODIFIED)}
                  </time>
                  {" · "}
                  {READING_TIME}
                </span>
              </p>
            </div>
          </div>
          <HeroSvg className={styles.heroSvg} />
        </div>
      </header>

      {/* At a glance */}
      <section className={styles.glance} aria-label="At a glance">
        {glance.map((g) => (
          <div key={g.label} className={styles.glanceCard}>
            <p className={styles.glanceValue}>
              {g.value}
              <span className={styles.glanceLabel}>{g.label}</span>
            </p>
            <p className={styles.glanceText}>{g.text}</p>
          </div>
        ))}
      </section>

      <div className={styles.layout}>
        <nav className={styles.toc} aria-label="Contents">
          <p className={styles.tocTitle}>In this guide</p>
          <ul className={styles.tocList}>
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`}>{t.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <article className={styles.article}>
          {/* Introduction */}
          <section
            id="intro"
            className={styles.section}
            aria-labelledby="intro-h"
          >
            <h2 id="intro-h">
              <span className={styles.accent}>Introduction</span>
            </h2>
            <p>
              Just as our prehistoric ancestors evolved by adopting tools like
              fire and stone axes, your journey as a Power Apps developer must
              also evolve. As your experience grows, you’ll need to reach
              further and build more complex applications. One of the most
              significant milestones in this evolution is moving beyond
              SharePoint lists and connecting your apps to enterprise-level
              storage solutions like Microsoft SQL Server.
            </p>
            <p>In this guide, I’ll walk you through the process of:</p>
            <ul>
              <li>Setting up an Azure SQL database</li>
              <li>Creating tables and relationships</li>
              <li>
                Connecting Power Apps to SQL using stored procedures and Power
                Automate
              </li>
              <li>
                Building a simple inventory and order management application
              </li>
            </ul>
            <p>
              Let’s take our first steps into this bigger world of
              enterprise-level data management!
            </p>
            <Callout Icon={IconInfo} label="What you’ll need">
              An Azure subscription (a free trial is a good place to start if
              one is available to you), SQL Server Management Studio on your
              computer, and access to Power Apps and Power Automate. The SQL
              Server connector is generally a premium connector, so check your
              licensing before you build anything you plan to roll out.
            </Callout>
          </section>

          {/* Video */}
          <section
            id="video"
            className={styles.section}
            aria-labelledby="video-h"
          >
            <h2 id="video-h">
              Prefer to Watch <span className={styles.accent}>the Video?</span>
            </h2>
            <p>
              Head over to my YouTube channel{" "}
              <a
                href="https://www.youtube.com/@ChinoDoesStuff/featured"
                rel="nofollow noreferrer noopener"
              >
                Chino Does Stuff
              </a>{" "}
              to watch the video tutorial, there you will see a variety of
              videos with loads of tricks and tips on the entire Power Platform
              suite.
            </p>
            <div className={styles.videoWrap}>
              <iframe
                className={styles.videoEmbed}
                src="https://www.youtube.com/embed/awsNLPGNI4w?si=hn-0Ak_weB4vWeBT"
                title="Getting started with Power Apps and Microsoft SQL Database (video tutorial)"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </section>

          {/* Why */}
          <section id="why" className={styles.section} aria-labelledby="why-h">
            <h2 id="why-h">
              Why move beyond{" "}
              <span className={styles.accent}>SharePoint lists?</span>
            </h2>
            <p>
              SharePoint lists are a fantastic place to start, and for plenty of
              apps they’re all you’ll ever need. (If you’re curious how far they
              can stretch, see{" "}
              <Link href="/blog/sharepoint-lists">
                using SharePoint lists like a relational database
              </Link>
              .) But sooner or later an app outgrows them, and a proper database
              starts to earn its keep.
            </p>
            <div className={styles.reasons}>
              {reasons.map(({ Icon, title, text }) => (
                <div key={title} className={styles.reasonCard}>
                  <span className={styles.badge}>
                    <Icon />
                  </span>
                  <h3 className={styles.reasonTitle}>{title}</h3>
                  <p className={styles.reasonText}>{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Map */}
          <section id="map" className={styles.section} aria-labelledby="map-h">
            <h2 id="map-h">
              How the pieces <span className={styles.accent}>fit together</span>
            </h2>
            <p>
              Three pieces do the work. The Power App is what people see. The
              Azure SQL database stores the data. Power Automate sits in the
              middle and carries requests and results between them. Power Apps
              can also talk to SQL directly, which we’ll cover below.
            </p>
            <Diagram caption="Two routes from the app to the data: through a flow, or directly.">
              <ArchitectureSvg />
            </Diagram>
            <p>
              Microsoft’s documentation describes calling SQL Server stored
              procedures straight from Power Fx, so a flow is no longer the only
              way in. We’ll still use one here, because a flow is the natural
              home for multi-step processes and it’s the approach shown in the
              video. Later on you’ll see the direct version too.
            </p>
            <div className={styles.twoLists}>
              <div className={styles.listPanel}>
                <p className={styles.listTitle}>Works well</p>
                <ul>
                  <li>
                    Reading tables and views straight into galleries and forms
                  </li>
                  <li>
                    Calling stored procedures for joins and business rules
                  </li>
                  <li>Using a flow when a process has several steps</li>
                  <li>
                    Keeping the rules in SQL, where every app can reuse them
                  </li>
                </ul>
              </div>
              <div className={styles.listPanel}>
                <p className={styles.listTitle}>Needs care</p>
                <ul>
                  <li>
                    Complex joins written in Power Fx. SQL is better at them
                  </li>
                  <li>Pulling very large tables whole into the app</li>
                  <li>
                    Shared connections, because users typically share one set of
                    credentials
                  </li>
                  <li>Premium licensing, so confirm before you build</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Choose */}
          <section
            id="choose"
            className={styles.section}
            aria-labelledby="choose-h"
          >
            <h2 id="choose-h">
              Which data source{" "}
              <span className={styles.accent}>fits your app?</span>
            </h2>
            <p>
              SQL isn’t always the right answer. Work through the two questions
              below, then check the comparison table for the detail.
            </p>
            <Diagram caption="A quick way to choose between SharePoint, Dataverse and Azure SQL.">
              <DecisionSvg />
            </Diagram>
            <div className={styles.tableWrap}>
              <table className={styles.compare}>
                <caption className={styles.srOnly}>
                  Comparing SharePoint lists, Dataverse and Azure SQL
                </caption>
                <thead>
                  <tr>
                    {compareHead.map((h, i) => (
                      <th key={h || "blank"} scope="col">
                        {i === 0 ? (
                          <span className={styles.srOnly}>Feature</span>
                        ) : (
                          h
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((r) => (
                    <tr key={r.label}>
                      <th scope="row">{r.label}</th>
                      {r.cells.map((c) => (
                        <td key={c}>{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={styles.note}>
              Licensing and limits change, so treat this table as a starting
              point and confirm the current details with Microsoft.
            </p>
          </section>

          {/* Azure */}
          <section
            id="azure"
            className={styles.section}
            aria-labelledby="azure-h"
          >
            <h2 id="azure-h">
              Setting Up Your{" "}
              <span className={styles.accent}>Azure SQL Database</span>
            </h2>
            <p>
              The first step is to set up an Azure SQL database. If you’re new
              to Azure, you can sign up for a free trial which gives you plenty
              of credits to explore the platform.
            </p>

            <h3>Creating a SQL Server and Database</h3>
            <p>In the Azure Portal:</p>
            <Steps steps={azureSteps} />

            <h3>Configuring Server Firewall Rules</h3>
            <p>
              Once your server and database are created, you need to configure
              the firewall:
            </p>
            <Steps steps={firewallSteps} />

            <CodeBlock code={azureSetupCode} language="Azure Portal" />

            <p>
              This firewall configuration is crucial as it allows Power Apps and
              Power Automate to connect to your database, while also letting you
              manage the database from your local computer.
            </p>
          </section>

          {/* Tables */}
          <section
            id="tables"
            className={styles.section}
            aria-labelledby="tables-h"
          >
            <h2 id="tables-h">
              Creating Your{" "}
              <span className={styles.accent}>Database Structure</span>
            </h2>
            <p>
              For this tutorial, we’ll create a simple inventory management
              system with two tables: a Stock table for inventory items and an
              Orders table for tracking restock orders.
            </p>

            <h3>Connecting to Your Database</h3>
            <p>
              To manage your database, you’ll need SQL Server Management Studio
              (SSMS):
            </p>
            <ol>
              <li>Download and install SQL Server Management Studio</li>
              <li>
                Connect to your database using the server name, admin username,
                and password
              </li>
            </ol>

            <h3>Creating Tables</h3>
            <p>We’ll create two tables with a simple relationship:</p>
            <CodeBlock code={sqlTableCreationCode} language="sql" />

            <p>Let’s break down what we’ve done:</p>
            <ul>
              <li>
                <strong>Stock Table:</strong> Stores inventory items with a
                name, description, and current stock level
              </li>
              <li>
                <strong>Orders Table:</strong> Tracks order history with
                references to stock items
              </li>
              <li>
                <strong>Relationships:</strong> The StockID in Orders refers to
                the ID in Stock, creating a one-to-many relationship. The
                FOREIGN KEY line is what makes the database enforce it
              </li>
            </ul>

            <Diagram caption="The two tables, annotated. One stock item can have many orders.">
              <SchemaSvg />
            </Diagram>

            <h3>Populating Sample Data</h3>
            <p>
              To make testing easier, let’s add some sample data to our tables:
            </p>
            <CodeBlock code={insertDataCode} language="sql" />
          </section>

          {/* Procedure */}
          <section
            id="procedure"
            className={styles.section}
            aria-labelledby="procedure-h"
          >
            <h2 id="procedure-h">
              Creating a <span className={styles.accent}>Stored Procedure</span>
            </h2>
            <p>
              Here’s where things get interesting. Power Fx can’t express
              everything SQL can, so rather than asking the app to stitch two
              related tables together, we’ll create a stored procedure that
              joins the data for us:
            </p>
            <CodeBlock code={storedProcedureCode} language="sql" />
            <p>
              This stored procedure joins the Orders and Stock tables, giving us
              a flattened view that’s perfect for displaying in Power Apps. Two
              small additions to the version in the video: SET NOCOUNT ON stops
              SQL sending row-count messages the app doesn’t need, and ORDER BY
              puts the newest orders first. Because every order must have a
              stock item, a plain JOIN is right. Use LEFT JOIN if orders could
              exist without one.
            </p>

            <h3>Giving the app its own database user</h3>
            <p>
              Before the flow connects, create a limited user so the app never
              needs the admin login:
            </p>
            <CodeBlock code={appUserCode} language="sql" />
            <Callout Icon={IconShield} label="Why bother">
              If the app’s credentials ever leak, the damage is limited to
              running GetOrders. With the admin login, it’s the whole server.
            </Callout>
          </section>

          {/* Flow */}
          <section
            id="flow"
            className={styles.section}
            aria-labelledby="flow-h"
          >
            <h2 id="flow-h">
              Connecting Power Apps to SQL{" "}
              <span className={styles.accent}>Using Power Automate</span>
            </h2>
            <p>
              Power Apps can now call SQL stored procedures directly, but Power
              Automate is still a reliable bridge between an app and a database,
              especially when a process has more than one step. Here we’ll use
              it as that bridge.
            </p>

            <h3>Creating a Power Automate Flow</h3>
            <p>Here’s how to set up the flow:</p>
            <Steps steps={flowSteps} />

            <CodeBlock code={powerAutomateStepsCode} language="portal" />

            <p>
              The key here is the “Parse JSON” step. When you execute the flow
              for the first time, you can copy the JSON output from the stored
              procedure execution and use it to generate the schema
              automatically.
            </p>
            <Callout Icon={IconInfo} label="Good to know">
              The “Execute stored procedure” action returns its rows inside a
              ResultSets object, under a name such as Table1. If your app
              doesn’t see the rows you expect, check the exact output names in
              your own flow’s test run.
            </Callout>
          </section>

          {/* App */}
          <section id="app" className={styles.section} aria-labelledby="app-h">
            <h2 id="app-h">
              Building Your <span className={styles.accent}>Power App</span>
            </h2>
            <p>
              With the database and flow set up, we can now build our Power App:
            </p>

            <h3>Create a New Canvas App</h3>
            <Steps steps={appSteps} />

            <h3>Setting Up Data Retrieval</h3>
            <p>Configure the button to call your flow and store the results:</p>
            <CodeBlock code={powerAppsGalleryCode} language="portal" />
            <p>
              The names after <code>.Run()</code> depend on how your flow
              responds, so use the suggestions in the formula bar to match your
              own flow. If you’d rather skip the flow, add the SQL Server
              connection to your app and call the procedure directly:
            </p>
            <CodeBlock code={directCallCode} language="portal" />
            <p>
              The connection name and procedure name will appear in the formula
              bar suggestions, so you don’t need to guess them.
            </p>

            <h3>Displaying the Data</h3>
            <p>In your gallery, add labels to display the data:</p>
            <ol>
              <li>Add a label for the stock name</li>
              <li>Add a label for the order description</li>
              <li>Add a label for the order amount</li>
              <li>Add a date picker (in view mode) for the order date</li>
            </ol>
          </section>

          {/* Mistakes */}
          <section
            id="mistakes"
            className={styles.section}
            aria-labelledby="mistakes-h"
          >
            <h2 id="mistakes-h">
              Common mistakes <span className={styles.accent}>to avoid</span>
            </h2>
            <p>
              Most problems with a first SQL-backed app come from the same
              handful of habits. Here’s what to avoid, and what to do instead.
            </p>
            <div className={styles.mistakes}>
              {mistakes.map((m, i) => {
                const Sketch = MistakeSketches[i];
                return (
                  <div key={m.title} className={styles.mistakeCard}>
                    <span className={styles.mistakeNum} aria-hidden="true">
                      {i + 1}
                    </span>
                    <h3 className={styles.mistakeTitle}>{m.title}</h3>
                    <p className={styles.mistakeWhy}>{m.why}</p>
                    <div className={styles.sketch}>
                      <Sketch />
                    </div>
                    <p className={styles.instead}>
                      <span className={styles.insteadPill}>Instead</span>
                      {m.fix}
                    </p>
                  </div>
                );
              })}
            </div>

            <h3>Before you go live</h3>
            <ul className={styles.checklist}>
              {goLiveChecklist.map((c) => (
                <li key={c}>
                  <span className={styles.checkChip}>
                    <IconCheck />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </section>

          {/* Beyond */}
          <section
            id="beyond"
            className={styles.section}
            aria-labelledby="beyond-h"
          >
            <h2 id="beyond-h">
              Beyond the Basics:{" "}
              <span className={styles.accent}>
                Creating a Complete Application
              </span>
            </h2>
            <p>
              While we’ve covered the fundamentals of connecting Power Apps to
              SQL, a complete application would include:
            </p>
            <ul className={styles.featureList}>
              {beyond.map(({ Icon, title, text }) => (
                <li key={title} className={styles.featureRow}>
                  <span className={styles.badge}>
                    <Icon />
                  </span>
                  <div>
                    <p className={styles.featureTitle}>{title}</p>
                    <p className={styles.featureText}>{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Takeaways */}
          <section
            id="takeaways"
            className={styles.section}
            aria-labelledby="takeaways-h"
          >
            <h2 id="takeaways-h">
              Key Takeaways for Working with{" "}
              <span className={styles.accent}>SQL in Power Apps</span>
            </h2>
            <p>
              As you continue to develop with SQL and Power Apps, remember these
              important points:
            </p>
            <ul className={styles.takeaways}>
              {takeaways.map(({ Icon, title, text }) => (
                <li key={title}>
                  <span className={styles.takeIcon}>
                    <Icon />
                  </span>
                  <div>
                    <p className={styles.takeTitle}>{title}</p>
                    <p className={styles.takeText}>{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Help */}
          <section
            id="help"
            className={styles.section}
            aria-labelledby="help-h"
          >
            <div className={styles.cta}>
              <h2 id="help-h">
                Want a hand with{" "}
                <span className={styles.ctaAccent}>Power Apps and SQL?</span>
              </h2>
              <p className={styles.ctaText}>
                Office Experts Group is an Australian Microsoft consultancy,
                established in 2000. If you’d like help designing the database,
                building the app or tidying up an existing one, tell us about
                your project.
              </p>
              <a href="#contact" className={`btn ${styles.ctaButton}`}>
                Talk to our team
              </a>
              <ul className={styles.ctaLinks}>
                {helpLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>
                      {l.label}
                      <IconArrow />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className={styles.section} aria-labelledby="faq-h">
            <h2 id="faq-h">
              Frequently asked <span className={styles.accent}>questions</span>
            </h2>
            <div className={styles.faq}>
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>
                    <span>{f.q}</span>
                    <span className={styles.faqIcon}>
                      <IconPlus />
                    </span>
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section
            id="conclusion"
            className={styles.section}
            aria-labelledby="conclusion-h"
          >
            <h2 id="conclusion-h">
              <span className={styles.accent}>Conclusion</span>
            </h2>
            <p>
              Moving from SharePoint lists to SQL databases is a significant
              evolution in your Power Apps journey. While there’s certainly a
              learning curve, the benefits are substantial:
            </p>
            <ul>
              <li>More sophisticated data relationships</li>
              <li>Better performance with large datasets</li>
              <li>
                Advanced data validation and business logic at the database
                level
              </li>
              <li>Enterprise-grade security and scalability</li>
            </ul>
            <p>
              This tutorial covered the core functionality of using SQL with
              Power Apps, but there’s much more to explore. In future tutorials,
              we’ll build on this foundation to create more complete
              applications with full CRUD (Create, Read, Update, Delete)
              capabilities.
            </p>
            <p>
              If you’d like to see more Power Apps development tutorials using
              SQL, please head over to the{" "}
              <a
                href="https://www.youtube.com/@ChinoDoesStuff/featured"
                rel="nofollow noreferrer noopener"
              >
                YouTube channel
              </a>{" "}
              and leave a comment there. I actively monitor and respond to all
              YouTube comments!
            </p>

            <div className={styles.authorBox}>
              <span className={styles.avatarLarge} aria-hidden="true">
                <Image
                  src={marcello}
                  alt={AUTHOR_NAME}
                  width={56}
                  height={56}
                />
              </span>
              <div className={styles.authorBoxText}>
                <p className={styles.authorBoxName}>About the author</p>
                <p className={styles.authorBoxBio}>
                  {AUTHOR_NAME} is a lead developer at Office Experts Group, an
                  expert in computer science and Power Platform integration, and
                  the founder of the YouTube channel{" "}
                  <a
                    href="https://www.youtube.com/@ChinoDoesStuff/featured"
                    rel="nofollow noreferrer noopener"
                  >
                    ChinoDoesStuff
                  </a>
                  . If you have any questions, please get in touch using the
                  form below.
                </p>
                <p className={styles.authorLinks}>
                  <a
                    href="https://www.linkedin.com/in/marcellobrocchi/"
                    rel="nofollow noreferrer noopener"
                  >
                    LinkedIn
                    <IconExternal />
                  </a>
                  <a
                    href="https://www.youtube.com/@ChinoDoesStuff/featured"
                    rel="nofollow noreferrer noopener"
                  >
                    YouTube
                    <IconExternal />
                  </a>
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>

    <RelatedLinks
      theme="dark"
      eyebrow="Case Studies"
      heading="Business app and database projects"
      headingAccent="from Office Experts"
      links={caseStudyLinks}
    />
    <Contact />
  </>
);

export default PowerAppsSQLBlogPost;
