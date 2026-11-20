// /app/blog/microsoft-access-alternatives-guide/page.js
import Image from "next/image";
import Link from "next/link";

import { generateOrganizationSchema } from "@/utils/schemaGenerators";
import Contact from "@/components/Contact";
import dan from "@/public/team/dan.webp";
import styles from "@/styles/microsoftAccessAlternativesGuideBlog.module.scss";

import HeroSvg from "./(svgs)/HeroSvg";
import ArchitectureSvg from "./(svgs)/ArchitectureSvg";
import RemoteSvg from "./(svgs)/RemoteSvg";
import DecisionSvg from "./(svgs)/DecisionSvg";
import MistakeSketch from "./(svgs)/MistakeSketches";
import {
  IconSpeed,
  IconUsers,
  IconCloud,
  IconLayout,
  IconDatabase,
  IconLayers,
  IconAlert,
  IconShield,
  IconPhone,
  IconCode,
  IconBox,
  IconUnlock,
  IconCompass,
  IconClock,
  IconSearch,
  IconPlug,
  IconChart,
  IconSpark,
  IconArrow,
  IconPlus,
} from "./(svgs)/Icons";

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with layout.js.
const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/blog/microsoft-access-alternatives-guide`;
const PAGE_TITLE = "Microsoft Access Alternatives 2026 | Office Experts";
const PAGE_DESCRIPTION =
  "Thinking of replacing Microsoft Access? Compare SQL Server, Azure and Power Apps, and see when keeping your Access front-end is the smarter move.";
const PAGE_HEADLINE =
  "Microsoft Access Alternatives 2026: Choosing the Right Database Solution";
const BREADCRUMB_NAME = "Microsoft Access Alternatives Guide";
const AUTHOR_NAME = "Daniel Thomas";
const READING_TIME = "18 min read";
const HERO_IMAGE_PATH = "/logo.png";
const DATE_PUBLISHED = "2026-01-15T00:00:00.000Z";
const DATE_MODIFIED = "2026-11-20T00:00:00+11:00";

// Link targets (relative, final Office Experts URLs)
const URL_SQL = "/services/sql-server-and-access-integration";
const URL_AZURE = "/services/cloud-based-solutions-with-azure";
const URL_POWER_APPS = "/services/microsoft-power-platform/power-apps";
const URL_POWER_BI =
  "/services/microsoft-power-platform/power-bi-data-integration";
const URL_MIGRATION = "/services/upgrades-and-migration";
const URL_DATABASE_DEV = "/services/database-development-and-solutions";
const URL_OPTIMISE =
  "https://www.accessexperts.com.au/access-database-optimisation-and-repair";
const URL_BLOG_2GB = "/blog/2gb-access-database-limit";
const URL_BLOG_CLOUD = "/blog/your-access-database-needs-a-cloud-strategy";
const URL_BLOG_PLATFORM = "/blog/using-power-platform-with-access-database";
const URL_BLOG_POWER_APPS_SQL = "/blog/power-apps-with-sql-database";
const URL_CASE_FILM =
  "/case-studies/film-crew-booking-system-access-nextjs-rebuild";
const URL_MS_SPECS =
  "https://support.microsoft.com/en-us/office/access-specifications-0cf3c66f-9cf2-4e32-9568-98c1025bb47c";

function formatDate(iso) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Sydney",
  }).format(new Date(iso));
}

// Inline links in article copy always carry styles.inlineLink
function L({ href, children }) {
  return (
    <Link href={href} className={styles.inlineLink}>
      {children}
    </Link>
  );
}

function Ext({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={styles.inlineLink}
    >
      {children}
    </a>
  );
}

function Callout({ Icon, label, children }) {
  return (
    <aside className={styles.callout}>
      <span className={styles.calloutIcon}>
        <Icon />
      </span>
      <div className={styles.calloutBody}>
        <span className={styles.calloutLabel}>{label}</span>
        <div className={styles.calloutText}>{children}</div>
      </div>
    </aside>
  );
}

const TOC = [
  { id: "is-access-the-problem", label: "Is Access the problem?" },
  { id: "problem-slow", label: "Access is too slow" },
  { id: "problem-users", label: "Multiple users" },
  { id: "problem-remote", label: "Remote access" },
  { id: "does-access-need-replacing", label: "Replace or modernise?" },
  { id: "migration-motivation", label: "Your situation" },
  { id: "real-alternatives", label: "Alternatives for 2026" },
  { id: "alt-sql-server", label: "SQL Server back-end" },
  { id: "alt-power-platform", label: "Power Platform" },
  { id: "alt-custom-web", label: "Web application" },
  { id: "alt-saas", label: "SaaS platforms" },
  { id: "alt-opensource", label: "Open source" },
  { id: "common-mistakes", label: "Migration mistakes" },
  { id: "decision-framework", label: "Decision framework" },
  { id: "faq", label: "FAQ" },
  { id: "conclusion", label: "Conclusion" },
];

const GLANCE = [
  {
    value: "2 GB",
    label: "Access file limit",
    line: "Microsoft caps a single Access file. Moving the data to SQL Server or Azure SQL lifts that cap.",
  },
  {
    value: "Keep it",
    label: "Your Access front-end",
    line: "Forms, reports and VBA can often stay exactly as they are while the data moves.",
  },
  {
    value: "5 routes",
    label: "Compared honestly",
    line: "From staying put to a full rebuild, with the trade-offs of each.",
  },
];

const QUICK_PICKS = [
  { href: "#problem-slow", text: "Access feels slow" },
  { href: "#problem-users", text: "We need more users" },
  { href: "#problem-remote", text: "We need remote access" },
  { href: "#migration-motivation", text: "IT says we must change" },
];

const REMOTE_METHODS = [
  {
    Icon: IconDatabase,
    title: "Azure SQL back-end",
    tag: "Our usual recommendation",
    featured: true,
    text: "Move only the data to Azure SQL and keep your Access front-end on each PC. Your data lives securely in the cloud and staff keep the forms and reports they already know.",
  },
  {
    Icon: IconLayout,
    title: "Azure Virtual Desktop",
    tag: "Fast when set up well",
    text: "Staff connect to a hosted Windows desktop that runs Access. It can feel very quick, especially when the database and the virtual machine sit on the same Azure server.",
  },
  {
    Icon: IconLayers,
    title: "Terminal Server",
    tag: "The older cousin",
    text: "The same idea on a server you host or rent. It works, but it is an ongoing service to look after, so weigh it against the Azure SQL approach before committing.",
  },
];

const SITUATIONS = [
  {
    Icon: IconLayers,
    title: "“We’ve outgrown Access”",
    symptoms: [
      "Regularly hitting the 2 GB database limit",
      "20+ users need concurrent access",
      "Staff need mobile or web access",
      "Performance degrading despite optimisation",
    ],
    best: (
      <>
        Azure SQL (cloud) or SQL Server (on-premises) as the back-end, keeping
        your Access front-end. This resolves most “outgrown” issues without a
        full rebuild. From there, you can progressively add web interfaces or
        Power Apps if and when you need them.
      </>
    ),
  },
  {
    Icon: IconShield,
    title: "“IT says we must”",
    symptoms: [
      "Corporate policy change requiring cloud-only solutions",
      "Security or compliance requirements",
      "Strategic decision to eliminate desktop databases",
      "Microsoft 365 migration removing desktop apps",
    ],
    best: (
      <>
        Azure SQL Database as the back-end first, then Power Apps with Dataverse
        if the mandate really does mean no desktop front-end. Cloud-hosted
        Access works as an interim step.
      </>
    ),
  },
  {
    Icon: IconSpark,
    title: "“We want something more modern”",
    symptoms: [
      "Desire for a better user interface",
      "Modern integration requirements (Slack, Teams, mobile apps)",
      "Need better reporting and dashboards",
      "Seeking an improved user experience",
    ],
    best: (
      <>
        Access with Power BI for reporting, then Power Platform or a modern web
        application where you truly need a new interface.
      </>
    ),
  },
  {
    Icon: IconAlert,
    title: "“Access keeps breaking”",
    symptoms: [
      "Frequent database corruption",
      "Performance problems",
      "Multi-user conflicts",
      "Data integrity issues",
    ],
    best: (
      <>
        This is almost always a setup or design problem, <em>not</em> an Access
        problem. Repair and optimise before you migrate anything.
      </>
    ),
  },
];

const OVERVIEW_ROWS = [
  [
    "SQL Server or Azure SQL back-end",
    "Yes",
    "Minimal",
    "Not by itself; easy to add later",
    "Medium to high",
  ],
  [
    "Power Platform (Power Apps and Dataverse)",
    "No, new interface",
    "Significant",
    "Yes",
    "Medium to high",
  ],
  ["Custom web application", "No, full rebuild", "Extensive", "Yes", "High"],
  ["SaaS or low-code platform", "No", "Moderate", "Yes", "Low to medium"],
  [
    "Open-source tools",
    "No",
    "Moderate to significant",
    "Depends on the tool",
    "Medium to high",
  ],
];

const MISTAKES = [
  {
    kind: "rush",
    title: "Migrating too quickly",
    problem:
      "Rushing into migration without proper planning leads to scope creep, delays and failed projects.",
    fix: "Invest in a professional database assessment first. It prevents expensive mistakes, provides a clear roadmap, and often reveals that migration isn’t necessary at all.",
  },
  {
    kind: "training",
    title: "Underestimating user training",
    problem:
      "A technically successful migration becomes a business failure if users can’t or won’t use the new system.",
    fix: "Budget 10–20 hours of training per user for significant interface changes, and plan it from day one. The less your interface changes, the easier the transition.",
  },
  {
    kind: "data",
    title: "Ignoring data quality issues",
    problem:
      "Migrating poor-quality data to a new system doesn’t fix the underlying problems. It just moves them to a new platform.",
    fix: "Clean your data before migration. Address duplicate records, inconsistent formatting and missing information in your current Access database first.",
  },
  {
    kind: "needs",
    title: "Choosing technology over business needs",
    problem:
      "Selecting a solution because it’s “modern” or “trendy” rather than because it fits your actual business requirements.",
    fix: "Start with business requirements, then evaluate technologies. The newest platform isn’t always the right platform.",
  },
  {
    kind: "complexity",
    title: "Underestimating complexity",
    problem:
      "That “simple” Access database actually contains years of accumulated business logic, custom calculations and special cases that aren’t documented anywhere except in the head of a developer who left three years ago.",
    fix: "Add a 30–50% buffer to your initial time estimates, and map the business logic before you rebuild it. Complex logic takes longer to rebuild than it seems.",
  },
];

const ASSESS_QUESTIONS = [
  "What specific problems are you experiencing with Access?",
  "Are these problems truly Access limitations or configuration issues?",
  "How many concurrent users need database access?",
  "What’s your current and projected database size?",
  "Do you need mobile or web access?",
  "What’s your timeline?",
  "How disruptive can the migration be to operations?",
  "Who knows how the business rules in your VBA actually work?",
];

const STAY_IF = [
  "Under 15 concurrent users on the current Access back-end",
  "Database under 1.5 GB, with room to grow",
  "Performance problems can be solved through optimisation",
  "Remote access through Azure Virtual Desktop or Terminal Server is acceptable, or you’re moving to an Azure SQL back-end for cloud access",
  "A full platform rebuild isn’t on the cards",
];

const CHANGE_IF = [
  "Consistently hitting the 2 GB Access limit",
  "You need 20+ concurrent users (though an Azure SQL back-end often solves this without a full platform change)",
  "You require native mobile apps or a true web front-end, not just remote access",
  "An IT mandate or compliance requirements demand change",
  "Integration needs are genuinely enterprise-scale",
];

const MATCH_ROWS = [
  [
    "Need more capacity, keep the interface",
    "SQL Server or Azure SQL + Access front-end",
    "Minimal disruption, proven solution",
  ],
  [
    "Need mobile or web, Microsoft 365 users",
    "Power Platform",
    "Native integration, modern interface",
  ],
  [
    "Unique requirements, long-term strategic build",
    "Custom web application",
    "Maximum flexibility and control",
  ],
  [
    "Simple needs, small team",
    "SaaS platform (Airtable and similar)",
    "Quick setup, low barrier to entry",
  ],
  [
    "Technical team, wants full control",
    "Open-source solution",
    "No licence fees, full control of the stack",
  ],
];

const PRE_MIGRATION = [
  "List every table, query, form, report and macro in use",
  "Write down the business rules hiding in VBA and queries",
  "Remove duplicates and fix inconsistent data",
  "Decide who owns the data and who signs off the move",
  "Pick a small pilot group of users to test first",
  "Plan backups and a clear way to roll back",
  "Agree what “finished” looks like before work starts",
  "Book training before go-live, not after",
];

const FAQS = [
  {
    q: "What is the best alternative to Microsoft Access in 2026?",
    a: (
      <>
        It depends on what is actually going wrong. For most teams the best move
        is to keep Access as the front-end and move the data to{" "}
        <L href={URL_SQL}>SQL Server or Azure SQL</L>. If staff genuinely need
        native mobile or browser-only apps, Power Apps or a custom web
        application come into play. A short assessment is the quickest way to
        find the right fit.
      </>
    ),
  },
  {
    q: "Can I still use Microsoft Access in 2026?",
    a: (
      <>
        Yes. Microsoft still ships Access with Microsoft 365 and Office 2021,
        and it works with tools such as <L href={URL_POWER_BI}>Power BI</L>,
        Azure and SharePoint. Check Microsoft’s own documentation for the
        version and support status that applies to you. In many cases,
        modernising an existing Access database is a better move than replacing
        it.
      </>
    ),
  },
  {
    q: "Can Microsoft Access connect to SQL Server?",
    a: (
      <>
        Yes. Access connects to SQL Server and Azure SQL through linked tables,
        so you keep the familiar interface while the data sits on a far more
        scalable engine. It is often the most practical migration path, with
        minimal retraining. Some tables, queries and data types usually need
        attention along the way, which is where{" "}
        <L href={URL_SQL}>experienced help</L> pays off.
      </>
    ),
  },
  {
    q: "Will my users need retraining after migration?",
    a: (
      <>
        It depends on the route. A SQL back-end with your existing Access
        front-end needs very little retraining. Moving to Power Apps or a custom
        web application changes the interface completely, so plan proper
        training, and start it before go-live.
      </>
    ),
  },
  {
    q: "What are the main limitations of Microsoft Access?",
    a: (
      <>
        A single Access file is capped at 2 GB (see{" "}
        <Ext href={URL_MS_SPECS}>Microsoft’s specifications</Ext>), the desktop
        app runs on Windows only, and it has no native web or mobile front-end.
        Performance with many users depends heavily on design, which is why a
        well-built split database copes far better than a single shared file.
        Many of these limits can be solved with a SQL back-end before you need a
        full migration. Our <L href={URL_BLOG_2GB}>guide to the 2 GB limit</L>{" "}
        goes deeper.
      </>
    ),
  },
  {
    q: "Is SQL Server better than Access?",
    a: (
      <>
        They do different jobs. SQL Server is built for large data volumes,
        security and many simultaneous users. Access is still excellent for fast
        development and for building forms and reports on top of data. That is
        why the pairing, SQL Server behind and Access in front, works so well
        for many Australian businesses.
      </>
    ),
  },
];

const TAKEAWAYS = [
  {
    Icon: IconClock,
    title: "Don’t rush",
    text: "Many “Access problems” aren’t Access problems at all. They’re configuration or design issues that can be resolved without migrating to a new platform.",
  },
  {
    Icon: IconSearch,
    title: "Assess first",
    text: "A professional database assessment prevents costly mistakes and gives you a clear, evidence-based roadmap.",
  },
  {
    Icon: IconUsers,
    title: "Plan for training",
    text: "User adoption determines success. The less your interface changes, the easier the transition, which is one reason the Access front-end plus SQL back-end approach is so popular.",
  },
  {
    Icon: IconPlug,
    title: "Consider hybrid approaches",
    text: "A SQL Server back-end with an Access front-end, especially on Azure, often provides the best balance of capability and continuity.",
  },
  {
    Icon: IconCompass,
    title: "Think long-term",
    text: "Migrating to Azure SQL now means you can add Power Apps, web interfaces and mobile apps later, without starting from scratch again.",
  },
];

const RELATED = [
  {
    href: URL_BLOG_2GB,
    title: "The 2 GB Access database limit",
    text: "What the limit means, and your options when you reach it.",
  },
  {
    href: URL_BLOG_CLOUD,
    title: "Your Access database needs a cloud strategy",
    text: "Why moving the data to the cloud is a sensible first step.",
  },
  {
    href: URL_BLOG_PLATFORM,
    title: "Using Power Platform with an Access database",
    text: "How Power Apps and Power Automate can sit alongside Access.",
  },
  {
    href: URL_BLOG_POWER_APPS_SQL,
    title: "Power Apps with a SQL database",
    text: "Building a mobile or web front end on top of SQL data.",
  },
];

const OPTIONS = [
  {
    id: "alt-sql-server",
    Icon: IconDatabase,
    featured: true,
    title: "SQL Server back-end with your current Access front-end",
    tag: "Our usual starting point",
    intro: (
      <>
        <p>
          This is the most popular modernisation path for Australian businesses,
          and for good reason. You move your data to SQL Server (on premises or{" "}
          <L href={URL_AZURE}>Azure SQL in the cloud</L>) whilst keeping your
          existing Access forms and reports exactly as they are. You and your
          staff will notice that things run better and smoother, but your front
          end can remain identical.
        </p>
        <p>
          Once your data is on Azure SQL, you also unlock a whole ecosystem of
          modern capabilities: Power Apps for web or mobile access, Power BI for
          real-time dashboards, and custom web interfaces that connect directly
          to the same database. You don’t have to use any of these immediately,
          but now the option is there when you need it.
        </p>
      </>
    ),
    whatItIs: [
      "Migrate data tables to SQL Server or Azure SQL Database",
      "Keep Access forms and reports, linked to the SQL back-end",
      "Or later rebuild the interface with .NET, web technologies or Power Apps",
      "Retain business logic and processes",
    ],
    bestFor: [
      "Businesses already on Windows Server infrastructure",
      "Organisations needing 20 to 100+ concurrent users",
      "Companies with complex business logic built in Access",
      "Teams who want an upgrade without retraining",
    ],
    strengths: [
      "Minimal user retraining if you keep the Access front-end",
      "Far more capacity for data and users than a single Access file",
      "Enterprise-grade security and backup capabilities",
      "Leverages your existing Access forms and VBA code",
      "Proven, mature technology stack",
    ],
    tradeoffs: [
      "Needs a SQL Server licence or an Azure subscription",
      "Requires IT infrastructure or an Azure setup",
      "Data structures often need changes, so professional help is wise",
      "Ongoing database administration is needed",
      "Still Windows-only if you keep the Access front-end",
    ],
    extra: (
      <p>
        <L href={URL_SQL}>Learn more about SQL Server migration</L>, or see how{" "}
        <L href={URL_AZURE}>cloud-based solutions with Azure</L> fit in.
      </p>
    ),
  },
  {
    id: "alt-power-platform",
    Icon: IconPhone,
    title: "Microsoft Power Platform (Power Apps + Dataverse)",
    tag: "When mobile and web are essential",
    intro: (
      <p>
        Microsoft’s low-code platform is a common choice when people want web
        and mobile apps. <L href={URL_POWER_APPS}>Power Apps</L> provides the
        interfaces, whilst Dataverse can handle data storage in the cloud. Power
        Apps can also sit on top of the Azure SQL database you may already have
        moved to, so the two routes are not mutually exclusive.
      </p>
    ),
    whatItIs: [
      "Power Apps for creating web and mobile applications",
      "Dataverse for cloud-based data storage",
      "Power Automate for workflow automation",
      "Part of the Microsoft 365 ecosystem",
    ],
    bestFor: [
      "Organisations already on Microsoft 365",
      "Teams requiring native mobile and web access",
      "Businesses wanting to stay in the Microsoft ecosystem",
    ],
    strengths: [
      "Native mobile and web applications",
      "Integration with Microsoft 365 (SharePoint, Teams, Outlook)",
      "No server infrastructure to run yourself",
      "Low-code development enables faster changes",
      "Modern interface out of the box",
      "Microsoft support and regular updates",
    ],
    tradeoffs: [
      "Licensing rules vary by plan, so check what yours includes",
      "Less flexibility than custom coding",
      "Dataverse has capacity and API request limits",
      "Not suited to migrating complex VBA logic",
      "Steeper learning curve than Access",
      "The platform is still evolving and features change often",
    ],
    extra: (
      <>
        <h4>When it makes sense</h4>
        <p>
          Power Platform makes most sense when your Microsoft 365 plan already
          covers the Power Apps use you need (check with Microsoft or your
          licensing partner), mobile access is critical, the business logic is
          simple to moderate, and you want Microsoft’s support and ecosystem
          integration.
        </p>
        <p>
          <L href={URL_BLOG_PLATFORM}>Learn about Power Platform with Access</L>{" "}
          or read about{" "}
          <L href={URL_BLOG_POWER_APPS_SQL}>Power Apps with a SQL database</L>.
        </p>
      </>
    ),
  },
  {
    id: "alt-custom-web",
    Icon: IconCode,
    title: "Custom web application (full rebuild)",
    tag: "Maximum flexibility",
    intro: (
      <p>
        A complete rebuild using modern web technologies provides maximum
        flexibility and control, but it is the biggest change of all the
        options. It suits genuinely unusual requirements, not a simple wish for
        a fresher look. See how we approached a real{" "}
        <L href={URL_CASE_FILM}>Access to Next.js rebuild</L>, or talk to us
        about <L href={URL_DATABASE_DEV}>custom database development</L>.
      </p>
    ),
    whatItIs: [
      "A modern front-end framework (React, Angular, Vue.js)",
      "A back-end API (Node.js, .NET Core, Python/Django)",
      "A database (PostgreSQL, MySQL, SQL Server)",
      "Cloud hosting (AWS, Azure, Google Cloud)",
    ],
    bestFor: [
      "Complex, unique business requirements",
      "Organisations needing complete control and flexibility",
      "Long-term strategic solution requirements",
      "Companies wanting a fully modern experience",
    ],
    strengths: [
      "Completely customised to your workflow",
      "Modern, responsive design for any device",
      "True cross-platform web and mobile access",
      "No vendor lock-in, because you own the code",
      "Can scale with proper architecture",
      "Latest technologies and best practices",
    ],
    tradeoffs: [
      "A large project that needs careful planning",
      "A long timeline (often many months)",
      "Requires ongoing maintenance and support",
      "Complete user retraining is necessary",
      "Risk of scope creep and project delays",
      "Needs an experienced development team",
    ],
  },
  {
    id: "alt-saas",
    Icon: IconBox,
    title: "SaaS and low-code platforms (Airtable, Knack, Caspio)",
    tag: "Simple needs, small teams",
    intro: (
      <p>
        Cloud-based database platforms provide quick setup and modern interfaces
        without much coding, though they may lack the power and customisation of
        other options.
      </p>
    ),
    popular: [
      {
        name: "Airtable",
        href: "https://www.airtable.com/",
        text: "Spreadsheet-database hybrid with a friendly interface",
      },
      {
        name: "Knack",
        href: "https://www.knack.com/",
        text: "No-code database with form builders",
      },
      {
        name: "Caspio",
        href: "https://www.caspio.com/",
        text: "Low-code platform for business applications",
      },
      {
        name: "Zoho Creator",
        href: "https://www.zoho.com/creator/",
        text: "Integrated with the Zoho ecosystem",
      },
      {
        name: "QuickBase",
        href: "https://www.quickbase.com/",
        text: "Enterprise-focused low-code platform",
      },
    ],
    whatItIs: [
      "Hosted database and app builder in one",
      "Forms, views and automations configured in the browser",
      "Subscription model, with plans and limits set by the vendor",
    ],
    bestFor: [
      "Simple to moderate database needs",
      "Small teams (under 20 users)",
      "Businesses wanting fast deployment",
      "Organisations without in-house IT resources",
    ],
    strengths: [
      "Quick setup (days, not months)",
      "No infrastructure needed",
      "Modern, intuitive interfaces",
      "Regular updates and new features",
      "Built-in collaboration features",
      "No-code or low-code configuration",
    ],
    tradeoffs: [
      "Limited customisation compared to custom development",
      "Vendor lock-in makes it hard to migrate away later",
      "May not handle complex business logic",
      "Data is stored on third-party servers",
      "Record limits and usage restrictions apply",
    ],
    extra: (
      <>
        <h4>When it makes sense</h4>
        <p>
          SaaS platforms work well when your needs are straightforward, you want
          to get up and running quickly, you don’t have complex business logic,{" "}
          <em>and</em> you’re comfortable with subscription pricing. They’re
          less suitable for complex workflows, sensitive data requiring
          on-premises storage, or highly customised business processes. Plans
          and limits change often, so always check each vendor’s website for the
          current position.
        </p>
      </>
    ),
  },
  {
    id: "alt-opensource",
    Icon: IconUnlock,
    title: "Open-source solutions (LibreOffice Base, PostgreSQL)",
    tag: "Full control, more technical",
    intro: (
      <p>
        For small businesses and organisations that simply want complete
        control, open-source alternatives can provide some powerful capabilities
        without licence fees.
      </p>
    ),
    popular: [
      {
        name: "LibreOffice Base",
        href: "https://www.libreoffice.org/discover/base/",
        text: "A direct Access alternative with a familiar interface",
      },
      {
        name: "PostgreSQL",
        href: "https://www.postgresql.org/",
        text: "Enterprise-grade open-source database",
      },
      {
        name: "MySQL",
        href: "https://www.mysql.com/",
        text: "Popular web application database",
      },
      {
        name: "MariaDB",
        href: "https://mariadb.org/",
        text: "MySQL fork with additional features",
      },
    ],
    whatItIs: [
      "Free database engines and desktop tools",
      "Self-hosted, so you control where the data lives",
      "A front-end usually has to be built or adopted separately",
    ],
    bestFor: [
      "Teams with IT expertise in-house",
      "Organisations wanting to avoid vendor lock-in",
      "Projects needing complete data control",
    ],
    strengths: [
      "No licence fees",
      "Complete control over your data",
      "Large community support",
      "Can self-host for data sovereignty",
    ],
    tradeoffs: [
      "Requires technical expertise",
      "No official support (community-based only)",
      "May lack the polish of commercial products",
      "Fewer integrations and third-party tools",
    ],
    extra: (
      <p>
        Open-source solutions work best when you have IT expertise in-house,
        want to avoid vendor lock-in, or need complete data control.
      </p>
    ),
  },
];

const articleSchema = {
  "@type": "Article",
  "@id": `${PAGE_URL}#article`,
  headline: PAGE_HEADLINE,
  description: PAGE_DESCRIPTION,
  image: `${SITE_URL}${HERO_IMAGE_PATH}`,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  inLanguage: "en-AU",
  author: { "@type": "Person", name: AUTHOR_NAME },
  publisher: { "@id": `${SITE_URL}#organization` },
  mainEntityOfPage: { "@id": `${PAGE_URL}#webpage` },
};

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
    articleSchema,
  ],
};

export default function Page() {
  return (
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
                Microsoft Access Alternatives 2026:{" "}
                <span className={styles.accentOnDark}>
                  Choosing the Right Database Solution
                </span>
              </h1>
              <p className={styles.heroLede}>
                Hitting limits, or being pushed to change? Before you commit to
                a migration, here is an honest look at your options, including
                the one most people overlook: keeping Access and upgrading what
                sits behind it.
              </p>
              <div className={styles.author}>
                <span className={styles.avatar} aria-hidden="true">
                  <Image src={dan} alt={AUTHOR_NAME} width={44} height={44} />
                </span>
                <span className={styles.authorText}>
                  <span className={styles.authorName}>By {AUTHOR_NAME}</span>
                  <span className={styles.authorMeta}>
                    Updated{" "}
                    <time dateTime={DATE_MODIFIED}>
                      {formatDate(DATE_MODIFIED)}
                    </time>{" "}
                    · {READING_TIME}
                  </span>
                </span>
              </div>
            </div>
            <div className={styles.heroArt}>
              <HeroSvg flowClass={styles.flow} liveClass={styles.live} />
            </div>
          </div>
        </header>

        {/* At a glance */}
        <section className={styles.glance} aria-label="At a glance">
          {GLANCE.map((g) => (
            <div key={g.label} className={styles.glanceCard}>
              <span className={styles.glanceValue}>{g.value}</span>
              <span className={styles.glanceLabel}>{g.label}</span>
              <span className={styles.glanceLine}>{g.line}</span>
            </div>
          ))}
        </section>

        <div className={styles.layout}>
          <nav className={styles.toc} aria-label="Contents">
            <span className={styles.tocTitle}>Contents</span>
            <ul>
              {TOC.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`}>{t.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <article className={styles.article}>
            {/* Introduction */}
            <section id="introduction">
              <p>
                <strong>You’ve been using Microsoft Access for years</strong>,
                and it’s served you well. But now you’re hitting limitations, or
                your IT department is pushing for change, or maybe you’re
                reading about the plethora of modern alternatives and wondering
                if it’s time to move on? Before you jump ship and invest in a
                migration, let’s take a deep dive into your options.
              </p>
              <p>
                This article covers everything you need to know about Microsoft
                Access alternatives in 2026, including when Access is still the
                right choice, real alternatives with honest pros and cons,
                migration pathways that actually work, and how to make the best
                decision for your specific situation.
              </p>

              <Callout Icon={IconCompass} label="Our honest starting point">
                Sometimes the answer <em>is</em> to migrate away from Access.
                But just as often, the best solution is to modernise or optimise
                your existing Access database rather than replace it entirely.
                In our experience, the most useful move is usually to keep the
                Access front-end your team already knows and upgrade what sits
                behind it.
              </Callout>

              <div className={styles.quickPick}>
                <span className={styles.quickPickTitle}>
                  Short on time? Jump to your problem
                </span>
                <ul>
                  {QUICK_PICKS.map((q) => (
                    <li key={q.href}>
                      <a href={q.href}>
                        {q.text}
                        <IconArrow width="18" height="18" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Is Access the problem? */}
            <section id="is-access-the-problem">
              <h2>
                Is Access really{" "}
                <span className={styles.accent}>the problem?</span>
              </h2>
              <p>
                Before we dive into alternatives, we need to address something
                important. Many of the “Access problems” businesses experience
                aren’t actually Access problems at all. They’re database design
                problems, configuration problems, or a fundamental
                misunderstanding of how to use Microsoft Access in 2026.
              </p>
              <h3 className={styles.subhead}>
                Common “Access problems”{" "}
                <span className={styles.accent}>
                  that aren’t actually Access problems
                </span>
              </h3>

              <div className={styles.problemGrid}>
                <div className={styles.problemCard}>
                  <span className={styles.badge}>
                    <IconSpeed />
                  </span>
                  <h3 id="problem-slow">“Access is too slow”</h3>
                  <p>
                    If your Access database crawls along like an old dial-up
                    modem, the issue is most likely poor database design.
                    Unindexed tables, inefficient queries, and bloated databases
                    from years of accumulated data are the usual culprits.
                  </p>
                  <div className={styles.fix}>
                    <span className={styles.fixLabel}>
                      What usually fixes it
                    </span>
                    <p>
                      Database optimisation can restore performance
                      dramatically. We’ve seen forms that took 30 seconds to
                      load reduced to under 2 seconds through proper indexing
                      and query optimisation. Before committing to a migration,
                      consider whether{" "}
                      <L href={URL_OPTIMISE}>
                        professional optimisation and repair
                      </L>{" "}
                      could solve the problem. It often can, and it is a much
                      smaller job.
                    </p>
                  </div>
                </div>

                <div className={styles.problemCard}>
                  <span className={styles.badge}>
                    <IconUsers />
                  </span>
                  <h3 id="problem-users">
                    “Access can’t handle multiple users”
                  </h3>
                  <p>
                    This one catches a lot of people out. Access <em>is</em>{" "}
                    often capable of handling 10 to 15 concurrent users with a
                    proper front-end and back-end split and sensible network
                    configuration. If you’re hitting conflicts with fewer users
                    than that, the problem is almost certainly your database
                    architecture, not Access itself.
                  </p>
                  <div className={styles.fix}>
                    <span className={styles.fixLabel}>
                      What usually fixes it
                    </span>
                    <p>
                      A{" "}
                      <L href={URL_SQL}>
                        SQL Server back-end with your existing Access front-end
                      </L>{" "}
                      can support far greater numbers of concurrent users whilst
                      keeping the interface your team already knows. This hybrid
                      approach is a much smaller change than a complete rebuild,
                      and your staff won’t need retraining.
                    </p>
                  </div>
                </div>

                <div className={`${styles.problemCard} ${styles.problemWide}`}>
                  <span className={styles.badge}>
                    <IconCloud />
                  </span>
                  <h3 id="problem-remote">“We can’t access it remotely”</h3>
                  <p>
                    True, you can’t simply open an Access database over the
                    internet like a web app, but this doesn’t mean you need to
                    rebuild everything from scratch. The most effective solution
                    for most businesses is migrating the <em>back-end data</em>{" "}
                    to <L href={URL_AZURE}>Azure SQL in the cloud</L>, whilst
                    keeping your familiar Access front-end exactly as it is.
                    Your data lives securely in the cloud; your staff continue
                    using the same forms and reports they already know.
                  </p>
                  <p>
                    Azure Virtual Desktop and Terminal Server are also worth
                    knowing about. They can deliver excellent performance,
                    especially when the database and the virtual machine are
                    hosted on the same Azure server. The diagram shows why:
                    Access runs fastest when it sits right next to its data.
                  </p>

                  <figure className={styles.diagram}>
                    <div className={styles.diagramScroll}>
                      <div className={styles.diagramInner}>
                        <RemoteSvg />
                      </div>
                    </div>
                    <figcaption>
                      Remote Access over a VPN pulls data across the link.
                      Keeping Access and the data together in Azure avoids it.
                    </figcaption>
                  </figure>

                  <div className={styles.methodGrid}>
                    {REMOTE_METHODS.map((m) => (
                      <div
                        key={m.title}
                        className={`${styles.methodCard} ${
                          m.featured ? styles.methodFeatured : ""
                        }`}
                      >
                        <span className={styles.methodIcon}>
                          <m.Icon />
                        </span>
                        <h4>{m.title}</h4>
                        <span className={styles.methodTag}>{m.tag}</span>
                        <p>{m.text}</p>
                      </div>
                    ))}
                  </div>

                  <p>
                    <strong>The big bonus?</strong> Once your data is in the
                    cloud on Azure SQL, you’re not locked into Access forever.
                    You can layer on <L href={URL_POWER_APPS}>Power Apps</L>,
                    build web interfaces, create mobile apps, or connect to
                    Power BI dashboards, all talking to the same database. It’s
                    a genuine modernisation pathway, not just a band-aid fix.
                  </p>
                </div>

                <div className={`${styles.problemCard} ${styles.problemWide}`}>
                  <span className={styles.badge}>
                    <IconLayout />
                  </span>
                  <h3 id="problem-modern">“Access isn’t modern”</h3>
                  <p>
                    The interface might look dated, but current Microsoft 365
                    versions of Access integrate well with modern tools. You can
                    connect Access to Power BI for dashboards, Azure for cloud
                    data storage, and SharePoint for collaboration.
                  </p>
                  <div className={styles.fix}>
                    <span className={styles.fixLabel}>
                      What usually fixes it
                    </span>
                    <p>
                      Modern integration rather than replacement. Keep your
                      robust database engine whilst adding contemporary
                      reporting and collaboration features through{" "}
                      <L href={URL_POWER_BI}>Power BI integration</L>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Replace or modernise */}
            <section id="does-access-need-replacing">
              <h2>
                Does Access really need replacing…{" "}
                <span className={styles.accent}>or just modernising?</span>
              </h2>
              <p>
                Honestly, the vast majority of businesses that come to us
                thinking they need to replace Access actually don’t. What they
                need is a smarter way to run it. That might mean moving the
                back-end data to SQL Server, hosting it in the cloud, or adding
                modern reporting through Power BI. None of that means throwing
                away the Access front-end your team has used for years.
              </p>

              <figure className={styles.diagram}>
                <div className={styles.diagramScroll}>
                  <div className={styles.diagramInner}>
                    <ArchitectureSvg />
                  </div>
                </div>
                <figcaption>
                  Keep the front-end, upgrade the back-end, and add new
                  interfaces later on the same data.
                </figcaption>
              </figure>

              <p>
                That said, there are genuine situations where Access truly isn’t
                the right tool anymore:
              </p>
              <div className={styles.tileGrid}>
                <div className={styles.tile}>
                  <span className={styles.badge}>
                    <IconShield />
                  </span>
                  <h3>IT department mandate</h3>
                  <p>
                    Compliance requirements, security policies, or strategic
                    decisions may force the issue regardless of Access’s
                    technical capabilities.
                  </p>
                </div>
                <div className={styles.tile}>
                  <span className={styles.badge}>
                    <IconUsers />
                  </span>
                  <h3>Scalability beyond 20+ concurrent users</h3>
                  <p>
                    Upgrading the back-end to SQL Server (on-premises or Azure)
                    overcomes this limitation whilst preserving your Access
                    front-end.
                  </p>
                </div>
                <div className={styles.tile}>
                  <span className={styles.badge}>
                    <IconChart />
                  </span>
                  <h3>Complex reporting and analytics needs</h3>
                  <p>
                    If you need real-time dashboards and advanced analytics,
                    connecting your database to{" "}
                    <L href={URL_POWER_BI}>Power BI</L> is often the answer. Not
                    a full migration.
                  </p>
                </div>
                <div className={styles.tile}>
                  <span className={styles.badge}>
                    <IconPlug />
                  </span>
                  <h3>Integration with enterprise systems</h3>
                  <p>
                    Connecting Access to ERP, CRM, or other enterprise
                    applications becomes significantly simpler once your data is
                    hosted in Azure SQL.
                  </p>
                </div>
              </div>
            </section>

            {/* Understanding your situation */}
            <section id="migration-motivation">
              <h2>
                Understanding{" "}
                <span className={styles.accent}>your situation</span>
              </h2>
              <p>
                Most people arrive at this question from one of four places.
                Find the one that sounds like you.
              </p>
              <div className={styles.situationGrid}>
                {SITUATIONS.map((s) => (
                  <div key={s.title} className={styles.situation}>
                    <div className={styles.situationHead}>
                      <span className={styles.badge}>
                        <s.Icon />
                      </span>
                      <h3>{s.title}</h3>
                    </div>
                    <span className={styles.miniLabel}>Symptoms</span>
                    <ul className={styles.dotList}>
                      {s.symptoms.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    <div className={styles.best}>
                      <span className={styles.miniLabel}>
                        Best starting point
                      </span>
                      <p>{s.best}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Callout Icon={IconSearch} label="Recommended first step">
                <L href={URL_MIGRATION}>A professional database assessment</L>{" "}
                to identify the root cause before committing to migration. This
                upfront investment frequently prevents far more costly decisions
                down the track. If corruption or speed is the issue,{" "}
                <L href={URL_OPTIMISE}>optimisation and repair</L> comes first.
              </Callout>
            </section>

            {/* Alternatives */}
            <section id="real-alternatives">
              <h2>
                The best Microsoft Access alternatives{" "}
                <span className={styles.accent}>for 2026</span>
              </h2>
              <p>
                Here are the five realistic routes, in the order we usually
                suggest looking at them. The first keeps your Access front-end.
                The rest replace it. This table shows how they compare at a
                glance.
              </p>

              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope="col">Option</th>
                      <th scope="col">Keeps Access front-end?</th>
                      <th scope="col">User retraining</th>
                      <th scope="col">Mobile and web</th>
                      <th scope="col">Migration complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {OVERVIEW_ROWS.map((r) => (
                      <tr key={r[0]}>
                        <th scope="row">{r[0]}</th>
                        <td>{r[1]}</td>
                        <td>{r[2]}</td>
                        <td>{r[3]}</td>
                        <td>{r[4]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {OPTIONS.map((o) => (
                <div
                  key={o.id}
                  className={`${styles.option} ${
                    o.featured ? styles.optionFeatured : ""
                  }`}
                >
                  <div className={styles.optionHead}>
                    <span className={styles.optionIcon}>
                      <o.Icon />
                    </span>
                    <div className={styles.optionTitleWrap}>
                      <h3 id={o.id}>{o.title}</h3>
                      <span className={styles.optionTag}>{o.tag}</span>
                    </div>
                  </div>
                  <div className={styles.optionBody}>
                    {o.intro}

                    {o.popular && (
                      <>
                        <h4>Popular options</h4>
                        <ul className={styles.popularList}>
                          {o.popular.map((p) => (
                            <li key={p.name}>
                              <Ext href={p.href}>{p.name}</Ext>
                              <span> {p.text}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    <div className={styles.optionCols}>
                      <div>
                        <h4>What it is</h4>
                        <ul className={styles.dotList}>
                          {o.whatItIs.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4>Best for</h4>
                        <ul className={styles.dotList}>
                          {o.bestFor.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className={styles.prosCons}>
                      <div className={styles.pros}>
                        <h4>What works well</h4>
                        <ul className={styles.arrowList}>
                          {o.strengths.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.cons}>
                        <h4>What to weigh up</h4>
                        <ul className={styles.diamondList}>
                          {o.tradeoffs.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {o.extra}
                  </div>
                </div>
              ))}
            </section>

            {/* Common mistakes */}
            <section id="common-mistakes">
              <h2>
                Common migration{" "}
                <span className={styles.accent}>mistakes to avoid</span>
              </h2>
              <p>
                Whichever route you choose, the same handful of mistakes sink
                projects. Each one has a simple counter-move.
              </p>
              <div className={styles.mistakeGrid}>
                {MISTAKES.map((m, i) => (
                  <div key={m.kind} className={styles.mistake}>
                    <span className={styles.mistakeNumber} aria-hidden="true">
                      {i + 1}
                    </span>
                    <h3>{m.title}</h3>
                    <p>
                      <strong>The problem:</strong> {m.problem}
                    </p>
                    <div className={styles.sketch}>
                      <MistakeSketch kind={m.kind} />
                    </div>
                    <span className={styles.insteadPill}>Instead</span>
                    <p>{m.fix}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Decision framework */}
            <section id="decision-framework">
              <h2>
                Your migration{" "}
                <span className={styles.accent}>decision framework</span>
              </h2>
              <p>
                Work through three steps. By the end you should know whether to
                modernise, migrate, or simply fix what you have.
              </p>

              <ol className={styles.steps}>
                <li className={styles.step}>
                  <span className={styles.stepBadge} aria-hidden="true">
                    1
                  </span>
                  <div className={styles.stepBody}>
                    <h3>Assess your current situation</h3>
                    <p>Answer these questions honestly.</p>
                    <ul className={styles.questionList}>
                      {ASSESS_QUESTIONS.map((q) => (
                        <li key={q}>{q}</li>
                      ))}
                    </ul>
                  </div>
                </li>

                <li className={styles.step}>
                  <span className={styles.stepBadge} aria-hidden="true">
                    2
                  </span>
                  <div className={styles.stepBody}>
                    <h3>Determine if modernisation or migration is needed</h3>
                    <p>
                      Start with the flow below, then compare the two lists. If
                      you keep landing on the 2 GB limit, our{" "}
                      <L href={URL_BLOG_2GB}>guide to the 2 GB limit</L>{" "}
                      explains your options.
                    </p>

                    <figure className={styles.diagram}>
                      <div className={styles.diagramScroll}>
                        <div className={styles.diagramInner}>
                          <DecisionSvg />
                        </div>
                      </div>
                      <figcaption>
                        A quick yes/no route to the right starting point.
                      </figcaption>
                    </figure>

                    <div className={styles.splitPanels}>
                      <div className={styles.stayPanel}>
                        <h4>
                          Stay with Access (optimise or modernise the back-end)
                          if…
                        </h4>
                        <ul className={styles.arrowList}>
                          {STAY_IF.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.changePanel}>
                        <h4>Consider a broader platform change if…</h4>
                        <ul className={styles.diamondListOnDark}>
                          {CHANGE_IF.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                <li className={styles.step}>
                  <span className={styles.stepBadge} aria-hidden="true">
                    3
                  </span>
                  <div className={styles.stepBody}>
                    <h3>Match requirements to solutions</h3>
                    <div className={styles.tableWrap}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th scope="col">Your situation</th>
                            <th scope="col">Best alternative</th>
                            <th scope="col">Why</th>
                          </tr>
                        </thead>
                        <tbody>
                          {MATCH_ROWS.map((r) => (
                            <tr key={r[0]}>
                              <th scope="row">{r[0]}</th>
                              <td>{r[1]}</td>
                              <td>{r[2]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className={styles.proTip}>
                      <span>Pro tip</span> If two rows fit you, start with the
                      smaller change. Moving the data first keeps every other
                      option open.
                    </p>
                  </div>
                </li>
              </ol>

              <h3 className={styles.subhead}>
                Before you commit:{" "}
                <span className={styles.accent}>a pre-migration checklist</span>
              </h3>
              <ul className={styles.checkGrid}>
                {PRE_MIGRATION.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>

            {/* Get help */}
            <section id="get-help" className={styles.ctaBand}>
              <div className={styles.ctaCopy}>
                <h2>
                  Not sure which way to go?{" "}
                  <span className={styles.accentOnDark}>
                    Get a second opinion.
                  </span>
                </h2>
                <p>
                  A short review of your Access database usually shows whether
                  you need a repair, a modernisation or a migration. If
                  migration really is the answer, we’ll tell you honestly.
                </p>
                <div className={styles.ctaActions}>
                  <a href="#contact" className={styles.ctaButton}>
                    Talk to an Access expert
                  </a>
                  <L href={URL_SQL}>
                    <span className={styles.ctaLinkText}>
                      See SQL Server back-end options
                      <IconArrow width="18" height="18" />
                    </span>
                  </L>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2>
                Frequently asked{" "}
                <span className={styles.accent}>questions</span>
              </h2>
              <div className={styles.faqList}>
                {FAQS.map((f) => (
                  <details key={f.q} className={styles.faqItem}>
                    <summary>
                      <span>{f.q}</span>
                      <span className={styles.faqIcon}>
                        <IconPlus />
                      </span>
                    </summary>
                    <div className={styles.faqAnswer}>{f.a}</div>
                  </details>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion">
              <h2>
                The bottom line on{" "}
                <span className={styles.accent}>
                  Microsoft Access alternatives
                </span>
              </h2>
              <p>
                <L href={URL_BLOG_CLOUD}>Microsoft Access isn’t dead</L>, but
                it’s not always running the way it should. The “best”
                alternative depends entirely on your specific business needs,
                timeline, technical expertise, and long-term goals.
              </p>
              <p>
                For most businesses, the answer isn’t to replace Access. It’s to
                modernise it. Moving your data to a{" "}
                <L href={URL_SQL}>SQL Server back-end</L> (whether hosted on
                your own infrastructure or in Azure) is often a far smaller
                project than a full migration, and your team keeps the interface
                they already know. From there, the door is open to add web
                interfaces, Power Apps, mobile access, and more, all on your own
                timeline.
              </p>
              <p>
                When migration genuinely is the right answer, we’ll tell you
                honestly. But we’ve found that most people simply need a
                professional eye on the problem, and a clear, practical path
                forward.
              </p>

              <h3 className={styles.subhead}>
                Key <span className={styles.accent}>takeaways</span>
              </h3>
              <div className={styles.takeaways}>
                {TAKEAWAYS.map((t) => (
                  <div key={t.title} className={styles.takeaway}>
                    <span className={styles.badge}>
                      <t.Icon />
                    </span>
                    <div>
                      <h4>{t.title}</h4>
                      <p>{t.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Callout Icon={IconSpark} label="From our experience">
                After 25+ years specialising in Access databases across
                Australia, we’ve learned that the best migration is sometimes no
                migration at all. Other times, it’s a complete rebuild. The key
                is making an informed decision based on your specific situation,
                not industry hype or vendor pressure.
              </Callout>

              <div className={styles.authorBox}>
                <span className={styles.avatarLarge}>
                  <Image src={dan} alt={AUTHOR_NAME} width={56} height={56} />
                </span>
                <div>
                  <span className={styles.authorBoxTitle}>
                    About the author, {AUTHOR_NAME}
                  </span>
                  <p>
                    Daniel is a developer at the Office Experts Group, a curious
                    mind into the world of programming, design and SEO. If you
                    have any questions, please feel free to get in contact via
                    the form below.
                  </p>
                </div>
              </div>
            </section>

            {/* Related reading */}
            <section id="related" aria-label="Related reading">
              <h2>
                Related <span className={styles.accent}>reading</span>
              </h2>
              <div className={styles.relatedGrid}>
                {RELATED.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className={styles.relatedCard}
                  >
                    <span className={styles.relatedTitle}>{r.title}</span>
                    <span className={styles.relatedText}>{r.text}</span>
                    <span className={styles.relatedMore}>
                      Read the article
                      <IconArrow width="18" height="18" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </article>
        </div>
      </div>

      <Contact />
    </>
  );
}
