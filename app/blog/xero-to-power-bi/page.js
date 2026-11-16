// /app/blog/xero-to-power-bi/page.js
import Image from "next/image";
import Link from "next/link";

import { generateOrganizationSchema } from "@/utils/schemaGenerators";
import Contact from "@/components/Contact";
import RelatedLinks from "@/components/RelatedLinks";
import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";
import styles from "@/styles/xeroToPowerBiBlog.module.scss";
import scott from "@/public/team/scott.webp";

import HeroSvg from "./(svgs)/HeroSvg";
import FlowSvg from "./(svgs)/FlowSvg";
import DecisionSvg from "./(svgs)/DecisionSvg";
import {
  SketchToken,
  SketchUrl,
  SketchRate,
  SketchVolume,
  SketchSchema,
} from "./(svgs)/MistakeSketches";
import {
  IconError,
  IconClock,
  IconLayers,
  IconMerge,
  IconInfo,
  IconBulb,
  IconShield,
  IconKey,
  IconLock,
  IconUsers,
  IconGlobe,
  IconList,
  IconMapPin,
  IconCheck,
  IconChevron,
  IconQuote,
} from "./(svgs)/Icons";

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with layout.js.
const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/blog/xero-to-power-bi`;
const PAGE_TITLE = "Live Xero & MYOB Data in Power BI | Office Experts";
const PAGE_DESCRIPTION =
  "Stop exporting CSVs. See how to feed live Xero and MYOB data into Power BI with OData feeds like OdataLink, with setup steps, costs and common pitfalls.";
const PAGE_HEADLINE =
  "How to Get Live MYOB & Xero Data into Power BI — No More Manual Exports";
const BREADCRUMB_NAME = "Xero to Power BI";
const AUTHOR_NAME = "Scott Robinson";
const READING_TIME = "11 min";
const WORD_COUNT = 2500;
const HERO_IMAGE_PATH = "/logo.png"; // confirm this exists in the Office Experts /public folder
const HERO_IMAGE_ALT = "Office Experts";
const DATE_PUBLISHED = "2025-11-20T09:00:00+10:00";
const DATE_MODIFIED = "2026-11-17T06:00:00+11:00"; // AEDT, update by hand when content changes

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Sydney",
  });

// ── Related case studies, built from caseStudies.js by slug ──
const CASE_STUDY_SLUGS = [
  "golf-supplier-sales-data-consolidation",
  "retail-power-bi-partner-reporting-security",
  "financial-services-ai-risk-compliance-automation",
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

const msOdataDocs =
  "https://learn.microsoft.com/en-us/power-query/connectors/odata-feed";

const extProps = {
  rel: "nofollow noreferrer noopener",
  target: "_blank",
};

// ── Page data ──
const TOC = [
  { id: "introduction", label: "Introduction" },
  { id: "why", label: "Why live data matters" },
  { id: "odata", label: "What is OData?" },
  { id: "odatalink", label: "Meet OdataLink" },
  { id: "choose", label: "Choosing an approach" },
  { id: "setup", label: "Step-by-step setup" },
  { id: "security", label: "Security checklist" },
  { id: "pitfalls", label: "Pitfalls and fixes" },
  { id: "cost", label: "Cost and licensing" },
  { id: "help", label: "When to get help" },
  { id: "faq", label: "FAQ" },
  { id: "conclusion", label: "Conclusion" },
];

const GLANCE = [
  {
    value: "Scheduled",
    label: "Refresh, not re-export",
    line: "Reports update on a schedule you set, from the same source every time.",
  },
  {
    value: "Built in",
    label: "Power BI’s OData connector",
    line: "No custom code is needed on the Power BI side.",
  },
  {
    value: "Free pilot",
    label: "Start with one file",
    line: "OdataLink’s free tier connects limited data models from a single file.",
  },
];

const REASONS = [
  {
    Icon: IconError,
    title: "Fewer manual errors",
    text: "Every copy and paste is a chance for a misplaced decimal, a forgotten filter or a shifted column. A feed removes those steps.",
  },
  {
    Icon: IconClock,
    title: "Fresher numbers",
    text: "A customer payment, a disputed invoice or a large expense appears at the next refresh, not the next time someone runs an export.",
  },
  {
    Icon: IconLayers,
    title: "One source of truth",
    text: "Everyone reads the same dataset, so there are no competing spreadsheets with slightly different totals.",
  },
  {
    Icon: IconMerge,
    title: "Multi-entity reporting",
    text: "If you run several Xero or MYOB files, one connection can pull them into a single view and spare you the manual consolidation.",
  },
];

const FEATURES = [
  {
    title: "Prebuilt endpoints",
    text: "Invoices, contacts, accounts, bank transactions, payroll and more, so there are no queries to write from scratch.",
  },
  {
    title: "Multi-file consolidation",
    text: "Combine several Xero organisations or MYOB company files into unified endpoints.",
  },
  {
    title: "Security",
    text: "TLS encryption and OAuth authentication.",
  },
  {
    title: "Role-based access controls",
    text: "Restrict which data models different users can see.",
  },
];

const COMPARISON = [
  {
    approach: "Native Xero or MYOB apps",
    bestFor: "Quick dashboards, single file",
    consider: "Limited flexibility, may lack consolidation features",
    effort: "Low",
  },
  {
    approach: "OdataLink",
    bestFor: "Multi-entity consolidation, minimal technical overhead",
    consider: "Subscription costs for advanced features",
    effort: "Low to medium",
  },
  {
    approach: "Custom SQL pipeline (Azure Data Factory)",
    bestFor: "Highly customised ETL, enterprise-scale integration",
    consider: "Higher development time, ongoing maintenance",
    effort: "High",
  },
  {
    approach: "CData connectors",
    bestFor: "Multi-platform integration beyond Power BI",
    consider: "Additional licensing costs",
    effort: "Medium",
  },
];

const STEPS = [
  {
    title: "Pick one reporting question",
    body: (
      <>
        Start with a report your team already builds by hand every month, such
        as overdue invoices by customer or sales by month. A narrow first target
        makes it obvious whether the feed is working.
      </>
    ),
    tip: "Choose a report with a number you can check against Xero or MYOB’s own screens.",
  },
  {
    title: "Connect your Xero or MYOB file",
    body: (
      <>
        Sign in to OdataLink and authorise access to your accounting file
        through the prompts it gives you. Access is granted through OAuth, so
        you are not handing over a password.
      </>
    ),
    tip: "Use a dedicated user with the minimum permissions rather than a personal login that could leave with the person.",
  },
  {
    title: "Choose the data models you need",
    body: (
      <>
        Enable only the endpoints your report needs, for example invoices,
        contacts and accounts. Leave payroll and bank transactions off unless
        the report genuinely uses them.
      </>
    ),
    tip: "Fewer endpoints means faster refreshes and fewer rate-limit problems.",
  },
  {
    title: "Copy the feed URL",
    body: (
      <>
        OdataLink gives you an OData feed URL for the data you have enabled.
        Check its setup guide for the exact URL format and the authentication
        method it expects, because those details are specific to the service.
      </>
    ),
    tip: "Store the URL somewhere your team can find it, not in one person’s notes.",
  },
  {
    title: "Connect Power BI to the feed",
    body: (
      <>
        In Power BI Desktop, choose Home &gt; Get data &gt; OData feed, paste
        the URL, pick the authentication method OdataLink specifies and select
        the tables you want. Open them in the Power Query editor to tidy column
        names and types. Our{" "}
        <Link href="/services/power-query" className={styles.inlineLink}>
          Power Query
        </Link>{" "}
        team does this every day if you want help shaping messy data.
      </>
    ),
    tip: "Keep the connection step simple and do the filtering in Power Query after the data loads.",
  },
  {
    title: "Model, publish and schedule the refresh",
    body: (
      <>
        Relate your invoice table to lookup tables such as contacts, accounts
        and dates (a star schema), build your visuals, then publish to the Power
        BI service. Enter the feed credentials there and set a scheduled
        refresh.
      </>
    ),
    tip: "Turn on refresh-failure alerts and send them to two people, so a failed refresh is never silent.",
  },
];

const REPORTS = [
  {
    title: "Aged receivables by customer",
    text: "Who owes what, and for how long, refreshed before your credit-control calls.",
  },
  {
    title: "Profit and loss by month and entity",
    text: "Side-by-side results across several companies without a manual consolidation.",
  },
  {
    title: "Cash position and upcoming payments",
    text: "Bank balances and what is due in the next few weeks, in one view.",
  },
  {
    title: "Sales by customer and product",
    text: "See which customers and lines are growing and which are slipping.",
  },
  {
    title: "Expense trends by account",
    text: "Spot creeping costs early instead of at the end of the quarter.",
  },
];

const PILOT = [
  {
    when: "Week one",
    text: "Connect one file, enable two or three data models and load them into Power BI Desktop.",
  },
  {
    when: "Week two",
    text: "Reconcile the totals against Xero or MYOB for a closed month and fix any mismatches.",
  },
  {
    when: "Week three",
    text: "Publish, schedule the refresh and share the report with two reviewers.",
  },
  {
    when: "Week four",
    text: "Measure the hours saved against the manual routine and decide whether to scale up.",
  },
];

const SECURITY = [
  {
    Icon: IconKey,
    title: "OAuth authentication",
    text: "No raw passwords stored; limited, revocable access.",
  },
  {
    Icon: IconLock,
    title: "TLS encryption",
    text: "All data encrypted in transit.",
  },
  {
    Icon: IconUsers,
    title: "Role-based access control",
    text: "Restrict which users see which endpoints. For example, the sales team sees invoices but not payroll.",
  },
  {
    Icon: IconGlobe,
    title: "IP allowlisting",
    text: "Restrict access to approved locations.",
  },
  {
    Icon: IconList,
    title: "Audit logging",
    text: "Track who accessed what data and when.",
  },
  {
    Icon: IconMapPin,
    title: "Data residency",
    text: "Confirm where data is processed, especially for compliance requirements.",
  },
];

const MISTAKES = [
  {
    Sketch: SketchToken,
    title: "Relying on a personal login that quietly expires",
    instead: (
      <>
        OAuth tokens expire, and Power BI doesn’t always handle renewal
        gracefully. Use a service account with stable credentials and monitor
        scheduled refreshes for failures.{" "}
        <Link href={msOdataDocs} className={styles.inlineLink} {...extProps}>
          Microsoft’s OData Feed connector documentation
        </Link>{" "}
        covers authentication options and known limitations.
      </>
    ),
  },
  {
    Sketch: SketchUrl,
    title: "Packing every filter into one giant URL",
    instead: (
      <>
        Power BI’s OData connector restricts URL length. Keep queries simple at
        the connection stage and do the complex filtering within Power Query
        after the data loads.
      </>
    ),
  },
  {
    Sketch: SketchRate,
    title: "Pulling every table, all day long",
    instead: (
      <>
        Accounting platforms impose rate limits to prevent overloading. Pull
        only the tables and fields you need, and schedule refreshes during
        off-peak hours.
      </>
    ),
  },
  {
    Sketch: SketchVolume,
    title: "Pushing years of history through the feed",
    instead: (
      <>
        Live connections aren’t always ideal for historical analysis involving
        years of transactions. Use a hybrid approach: live feeds for current
        data (the last 90 days) and archived older data in SQL that Power BI
        queries separately. Incremental refresh may also help, depending on your
        Power BI licence.
      </>
    ),
  },
  {
    Sketch: SketchSchema,
    title: "Building a model that breaks when a column moves",
    instead: (
      <>
        Accounting platforms occasionally update field names. Monitor release
        notes and build resilience into your data model, handling missing
        columns gracefully rather than failing outright.
      </>
    ),
  },
];

const CHECKLIST = [
  "One closed month’s totals match the Xero or MYOB report",
  "Scheduled refresh runs and failure alerts reach two people",
  "Only the endpoints the report needs are enabled",
  "Access to payroll and bank data matches who should see it",
  "Credentials sit with a dedicated account, not an individual",
  "The report shows when the data was last refreshed",
  "The old CSV export routine is retired once the report is trusted",
  "Someone owns the connection and knows how to re-authorise it",
];

const COSTS = [
  {
    item: "OdataLink",
    text: "The free tier connects limited data models from a single file, which is useful for testing. Paid plans unlock additional endpoints, multiple files and consolidation features.",
  },
  {
    item: "Xero and MYOB apps",
    text: "Some third-party connectors carry their own subscription fees, separate from your accounting software subscription.",
  },
  {
    item: "Power BI",
    text: (
      <>
        Desktop is free. Sharing via the Power BI service requires Pro licences
        (per user per month) or Premium capacity.{" "}
        <Link
          href="https://powerbi.microsoft.com/en-au/pricing/"
          className={styles.inlineLink}
          {...extProps}
        >
          Microsoft’s Power BI pricing page
        </Link>{" "}
        outlines current options.
      </>
    ),
  },
  {
    item: "Additional infrastructure",
    text: "If you archive to Azure SQL or use Azure Data Factory, expect usage-based cloud costs that scale with volume.",
  },
];

const FAQS = [
  {
    q: "Do I need OdataLink to get Xero or MYOB data into Power BI?",
    a: (
      <>
        No. Xero and MYOB don’t natively expose their data as OData feeds, but
        there are several routes: marketplace apps, a custom SQL pipeline or
        other connectors. OdataLink is a lighter option when you want ready-made
        feeds without building a pipeline yourself.
      </>
    ),
  },
  {
    q: "Is the data really live?",
    a: (
      <>
        In practice it is current as of the last refresh. Power BI’s OData Feed
        connector loads data on a schedule rather than querying the source on
        every click, so choose a refresh frequency that suits your reporting.
        Check Microsoft’s documentation for the refresh limits that apply to
        your licence.
      </>
    ),
  },
  {
    q: "Can I combine several Xero organisations or MYOB files in one report?",
    a: (
      <>
        Yes. OdataLink describes multi-file consolidation across several Xero
        organisations or MYOB company files, so they arrive as unified
        endpoints. Confirm the plan you need on their site, as multi-file
        features are on the paid tiers.
      </>
    ),
  },
  {
    q: "Does the same feed work in Excel?",
    a: (
      <>
        Generally yes. Excel can connect to OData feeds using similar methods,
        so the same feed can populate a workbook with data that refreshes. If
        your team still lives in Excel, that can be a gentle first step before
        moving to Power BI.
      </>
    ),
  },
  {
    q: "Is it safe to connect my accounting data to Power BI?",
    a: (
      <>
        It can be, provided the connection uses OAuth and TLS, access is limited
        to the data each person needs, and the Power BI workspace is shared
        carefully. Work through the security checklist above with your vendor
        and decide who can see payroll and bank data before you publish.
      </>
    ),
  },
  {
    q: "How long does a pilot take?",
    a: (
      <>
        For a single file and one report, a few hours is realistic once your
        accounts are connected. The time goes mostly into choosing the right
        data models and checking the totals, not into the connection itself.
      </>
    ),
  },
];

const Callout = ({ Icon, label, children }) => (
  <aside className={styles.callout}>
    <span className={styles.calloutIcon} aria-hidden="true">
      <Icon />
    </span>
    <div className={styles.calloutBody}>
      <p className={styles.calloutLabel}>{label}</p>
      <p className={styles.calloutText}>{children}</p>
    </div>
  </aside>
);

export default function XeroToPowerBIBlogPost() {
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
        headline: PAGE_HEADLINE,
        alternativeHeadline:
          "Connect real-time accounting data to Power BI with OData feeds",
        description: PAGE_DESCRIPTION,
        image: `${SITE_URL}${HERO_IMAGE_PATH}`,
        author: { "@type": "Person", name: AUTHOR_NAME },
        publisher: { "@id": `${SITE_URL}#organization` },
        mainEntityOfPage: { "@id": `${PAGE_URL}#webpage` },
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
        articleSection: "Power BI",
        keywords: ["Xero Power BI", "MYOB Power BI", "OData feed Power BI"],
        wordCount: WORD_COUNT,
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
        {/* ── Hero ── */}
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <h1 className={styles.heroTitle}>
                How to Get Live MYOB &amp; Xero Data into Power BI{" "}
                <span className={styles.accentOnDark}>
                  — No More Manual Exports
                </span>
              </h1>
              <p className={styles.lede}>
                If your finance team still exports CSV files from Xero or MYOB
                every time a report needs updating, you’re losing hours that
                could go to analysis. Here’s how to connect your accounting data
                to Power BI through an OData feed, what it costs, how to set it
                up and where it tends to go wrong.
              </p>
              <div className={styles.byline}>
                <span className={styles.avatar} aria-hidden="true">
                  <Image src={scott} alt={AUTHOR_NAME} width={38} height={38} />
                </span>
                <span>
                  By <strong>{AUTHOR_NAME}</strong>
                </span>
                <span className={styles.dot} aria-hidden="true" />
                <span>Updated {formatDate(DATE_MODIFIED)}</span>
                <span className={styles.dot} aria-hidden="true" />
                <span>{READING_TIME} read</span>
              </div>
            </div>
            <div className={styles.heroArt}>
              <HeroSvg className={styles.heroSvg} />
            </div>
          </div>
        </header>

        {/* ── At a glance ── */}
        <section className={styles.glance} aria-label="At a glance">
          {GLANCE.map((g) => (
            <div className={styles.glanceCard} key={g.value}>
              <p className={styles.glanceValue}>{g.value}</p>
              <p className={styles.glanceLabel}>{g.label}</p>
              <p className={styles.glanceLine}>{g.line}</p>
            </div>
          ))}
        </section>

        <div className={styles.layout}>
          <nav className={styles.toc} aria-label="Contents">
            <p className={styles.tocTitle}>In this guide</p>
            <ul>
              {TOC.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`}>{t.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <article className={styles.article}>
            {/* ── Introduction ── */}
            <section id="introduction" className={styles.section}>
              <h2>
                <span className={styles.accent}>Introduction</span>
              </h2>
              <p>
                If your finance team is still exporting CSV files from Xero or
                MYOB every time they need to update a report, you’re losing
                valuable time. Download the data, clean it up in Excel, paste it
                into Power BI, refresh, repeat. It works, but it’s slow,
                error-prone, and increasingly out of step with what modern
                business intelligence tools can offer.
              </p>
              <p>
                By connecting your accounting software directly to Power BI
                through a live data feed, you can eliminate the export-import
                cycle entirely. Your dashboards stay current, your numbers stay
                consistent, and your team can focus on analysis rather than data
                wrangling.
              </p>
              <p>
                In this guide, we’ll walk you through how to achieve this using
                OData feeds, specifically through OdataLink, which acts as a
                bridge between Xero or MYOB and Power BI. We’ll also compare the
                alternatives, show you the setup step by step, and flag the
                problems that catch most teams out.
              </p>
              <Callout Icon={IconInfo} label="What “live” means here">
                Power BI’s OData Feed connector loads data when a report
                refreshes, so “live” means as current as your last scheduled
                refresh, not updating second by second. For month-end, cash-flow
                and sales reporting that is usually plenty. Check Microsoft’s
                documentation for the refresh limits that apply to your licence.
              </Callout>
            </section>

            {/* ── Why live data matters ── */}
            <section id="why" className={styles.section}>
              <h2>
                Why Live Accounting{" "}
                <span className={styles.accent}>Data Matters</span>
              </h2>
              <p>
                Manual data handling introduces opportunities for mistakes at
                every step. A misplaced decimal, a forgotten filter, a
                copy-paste error in the wrong column. Research consistently
                shows that a significant percentage of spreadsheets contain
                errors, and when those spreadsheets inform business decisions,
                the consequences can be costly. We’ve written before about{" "}
                <a
                  href="https://www.excelexperts.com.au/blog/spreadsheet-errors-in-excel"
                  className={styles.inlineLink}
                >
                  the hidden risks of spreadsheet errors
                </a>
                , and the same principles apply here.
              </p>
              <p>
                Beyond error risk, there’s the problem of stale data. A customer
                payment comes in, an invoice gets disputed, a large expense hits
                the account, and none of it shows up in your dashboard until
                someone runs another export.
              </p>

              <ul className={styles.reasons}>
                {REASONS.map(({ Icon, title, text }) => (
                  <li key={title} className={styles.reasonCard}>
                    <span className={styles.badge} aria-hidden="true">
                      <Icon />
                    </span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </li>
                ))}
              </ul>

              <figure className={styles.pullQuote}>
                <span className={styles.quoteIcon} aria-hidden="true">
                  <IconQuote />
                </span>
                <blockquote>
                  <p>
                    “Organisations using real-time financial dashboards gain
                    faster decision-making capabilities, improved accuracy, and
                    better forecasting.”
                  </p>
                </blockquote>
                <figcaption>
                  —{" "}
                  <a
                    href="https://cricfohub.com/the-advantages-of-using-financial-dashboards-for-real-time-insights/"
                    className={styles.inlineLink}
                    {...extProps}
                  >
                    CFO Hub
                  </a>
                </figcaption>
              </figure>

              <p>
                When data flows automatically from source to dashboard, you
                create a single source of truth. No more competing spreadsheets
                with slightly different numbers. For businesses running multiple
                Xero or MYOB files, an automated connection can pull from
                multiple sources into a single unified view, eliminating the
                administrative burden of manual consolidation.
              </p>
            </section>

            {/* ── What is OData ── */}
            <section id="odata" className={styles.section}>
              <h2>
                Quick Technical Primer:{" "}
                <span className={styles.accent}>What Is OData</span>
              </h2>
              <p>
                OData (Open Data Protocol) is a standardised way for
                applications to share data over the web. What makes it
                particularly useful is that it’s queryable. Rather than
                downloading an entire database and filtering it locally, you can
                ask for exactly what you need, such as only the unpaid invoices
                from the last 90 days.
              </p>
              <p>
                Power BI has a built-in OData Feed connector, meaning it’s ready
                to work with any data source that speaks this language. You
                point it at an OData endpoint, authenticate, and Power BI
                handles the rest.{" "}
                <a
                  href={msOdataDocs}
                  className={styles.inlineLink}
                  {...extProps}
                >
                  Microsoft’s documentation
                </a>{" "}
                covers the connector in detail. The same applies to Excel: OData
                feeds can populate workbooks with live data using similar
                connection methods.
              </p>
              <p>
                The catch is that Xero and MYOB don’t natively expose their data
                as OData feeds. That’s where a middle layer comes in.
              </p>

              <figure className={styles.diagram}>
                <div className={styles.diagramScroll}>
                  <div className={styles.diagramInnerWide}>
                    <FlowSvg />
                  </div>
                </div>
                <figcaption>
                  The middle layer turns your accounting files into OData feeds
                  that Power BI can read.
                </figcaption>
              </figure>
            </section>

            {/* ── OdataLink ── */}
            <section id="odatalink" className={styles.section}>
              <h2>
                Meet the Middle Layer:{" "}
                <span className={styles.accent}>OdataLink</span>
              </h2>
              <p>
                <a
                  href="https://odatalink.com/"
                  className={styles.inlineLink}
                  {...extProps}
                >
                  OdataLink
                </a>{" "}
                connects to your Xero or MYOB account, extracts the data you
                need, and exposes it as standardised OData feeds that Power BI
                or Excel can consume directly. Think of it as “ODBC for cloud
                accounting.”
              </p>

              <h3>Key features</h3>
              <ul className={styles.features}>
                {FEATURES.map((f) => (
                  <li key={f.title}>
                    <span className={styles.tick} aria-hidden="true">
                      <IconCheck />
                    </span>
                    <span>
                      <strong>{f.title}.</strong> {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              <p>
                OdataLink offers both free and paid tiers, so you can start with
                a pilot project before scaling up. The{" "}
                <a
                  href="https://odatalink.com/get-myob-data-in-power-bi/"
                  className={styles.inlineLink}
                  {...extProps}
                >
                  MYOB integration page
                </a>{" "}
                and{" "}
                <a
                  href="https://odatalink.com/powerful/"
                  className={styles.inlineLink}
                  {...extProps}
                >
                  Xero integration page
                </a>{" "}
                on their site provide more detail on what’s included at each
                level.
              </p>
              <Callout Icon={IconBulb} label="Check before you commit">
                Feature lists, endpoints and plan limits change over time.
                Confirm what is included on OdataLink’s own pages before you
                choose a plan.
              </Callout>
            </section>

            {/* ── Choosing an approach ── */}
            <section id="choose" className={styles.section}>
              <h2>
                Alternatives and{" "}
                <span className={styles.accent}>Complementary Connectors</span>
              </h2>
              <p>
                OdataLink isn’t the only option. Here’s how the main approaches
                compare:
              </p>

              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope="col">Approach</th>
                      <th scope="col">Best for</th>
                      <th scope="col">Considerations</th>
                      <th scope="col">Effort to start</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map((r) => (
                      <tr key={r.approach}>
                        <th scope="row">{r.approach}</th>
                        <td>{r.bestFor}</td>
                        <td>{r.consider}</td>
                        <td>{r.effort}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Xero offers its own{" "}
                <a
                  href="https://apps.xero.com/sg/collection/integrate-xero-with-power-bi"
                  className={styles.inlineLink}
                  {...extProps}
                >
                  Power BI integrations through the Xero App Marketplace
                </a>
                . MYOB lists OdataLink as a{" "}
                <a
                  href="https://www.myob.com/au/apps/odatalink"
                  className={styles.inlineLink}
                  {...extProps}
                >
                  verified integration partner in its app marketplace
                </a>
                .
              </p>

              <h3>Which approach should you use?</h3>
              <p>
                The right answer depends less on the tool and more on how many
                files you report across, how much transformation your data needs
                and who will maintain it. A native app is fastest for one tidy
                file. A custom pipeline gives you the most control but needs a
                developer on call. A feed layer such as OdataLink sits in the
                middle. Work down these three questions. Most small and
                mid-sized businesses land on the bottom box.
              </p>
              <figure className={styles.diagram}>
                <div className={styles.diagramScroll}>
                  <div className={styles.diagramInner}>
                    <DecisionSvg />
                  </div>
                </div>
                <figcaption>
                  A quick decision flow for choosing how to connect Xero or MYOB
                  to Power BI.
                </figcaption>
              </figure>

              <p>
                Often the best solution involves a combination: OdataLink for
                live accounting feeds, SQL for historical archiving, and Power
                BI for the presentation layer.
              </p>
            </section>

            {/* ── Step by step ── */}
            <section id="setup" className={styles.section}>
              <h2>
                How to Connect Xero or MYOB{" "}
                <span className={styles.accent}>to Power BI, Step by Step</span>
              </h2>
              <p>
                This is the shape of a typical first project using OdataLink.
                Exact screens and options vary, so treat it as a map and follow
                the vendor’s own setup guide for the fine detail.
              </p>
              <ol className={styles.steps}>
                {STEPS.map((s, i) => (
                  <li key={s.title}>
                    <span className={styles.stepBadge} aria-hidden="true">
                      {i + 1}
                    </span>
                    <div className={styles.stepBody}>
                      <h3>{s.title}</h3>
                      <p>{s.body}</p>
                      <p className={styles.tip}>
                        <span className={styles.tipIcon} aria-hidden="true">
                          <IconBulb />
                        </span>
                        <span>
                          <strong>Pro tip:</strong> {s.tip}
                        </span>
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <h3>Get the data model right</h3>
              <p>
                Treat invoices as the centre of your model and relate lookup
                tables to it: contacts, accounts and a date table. Build a
                proper date table in Power BI rather than relying on invoice
                dates alone, so month-on-month and financial-year comparisons
                work (the Australian financial year runs from 1 July to 30
                June). Format money columns as currency, hide technical columns,
                and keep one model per business question rather than one giant
                model for everything.
              </p>

              <h3>Reports worth building first</h3>
              <p>
                These are the reports finance teams most often rebuild by hand,
                so they make good first targets.
              </p>
              <ul className={styles.features}>
                {REPORTS.map((r) => (
                  <li key={r.title}>
                    <span className={styles.tick} aria-hidden="true">
                      <IconCheck />
                    </span>
                    <span>
                      <strong>{r.title}.</strong> {r.text}
                    </span>
                  </li>
                ))}
              </ul>

              <h3>A four-week pilot plan</h3>
              <ul className={styles.pilot}>
                {PILOT.map((p) => (
                  <li key={p.when}>
                    <span className={styles.insteadPill}>{p.when}</span>
                    <span>{p.text}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── Security ── */}
            <section id="security" className={styles.section}>
              <h2>
                Security and{" "}
                <span className={styles.accent}>Governance Checklist</span>
              </h2>
              <p>
                When connecting live accounting data to external tools, security
                is essential. Here are some of the things to look for:
              </p>
              <ul className={styles.securityList}>
                {SECURITY.map(({ Icon, title, text }) => (
                  <li key={title}>
                    <span className={styles.badgeSmall} aria-hidden="true">
                      <Icon />
                    </span>
                    <span>
                      <strong>{title}.</strong> {text}
                    </span>
                  </li>
                ))}
              </ul>
              <Callout Icon={IconShield} label="Red flag">
                If a vendor can’t clearly explain how they address each of these
                points, that’s a red flag. Also decide in advance who revokes
                access when a team member leaves, and who can see payroll data
                in the Power BI workspace.
              </Callout>
            </section>

            {/* ── Pitfalls ── */}
            <section id="pitfalls" className={styles.section}>
              <h2>
                Common Pitfalls and{" "}
                <span className={styles.accent}>Troubleshooting</span>
              </h2>
              <p>
                Most problems with accounting feeds fall into five groups. Each
                one has a simple habit to drop and a better habit to adopt.
              </p>
              <ol className={styles.mistakes}>
                {MISTAKES.map(({ Sketch, title, instead }, i) => (
                  <li key={title} className={styles.mistakeCard}>
                    <div className={styles.mistakeHead}>
                      <span className={styles.mistakeNum} aria-hidden="true">
                        {i + 1}
                      </span>
                      <h3>{title}</h3>
                    </div>
                    <div className={styles.sketch}>
                      <Sketch />
                    </div>
                    <div className={styles.insteadRow}>
                      <span className={styles.insteadPill}>Instead</span>
                      <p>{instead}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <h3>Before you share the report</h3>
              <ul className={styles.checklist}>
                {CHECKLIST.map((c) => (
                  <li key={c}>
                    <span className={styles.tick} aria-hidden="true">
                      <IconCheck />
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── Cost ── */}
            <section id="cost" className={styles.section}>
              <h2>
                Cost and{" "}
                <span className={styles.accent}>Licensing Considerations</span>
              </h2>
              <p>
                There are usually four places where cost shows up. Confirm
                current pricing with each vendor, as plans change.
              </p>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope="col">Item</th>
                      <th scope="col">What to expect</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COSTS.map((c) => (
                      <tr key={c.item}>
                        <th scope="row">{c.item}</th>
                        <td>{c.text}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Callout Icon={IconBulb} label="Our advice">
                Start with a pilot. Connect one file using OdataLink’s free
                tier, build a few key reports, and measure time saved. Once
                validated, scale up with confidence.
              </Callout>
            </section>

            {/* ── Help CTA ── */}
            <section id="help" className={styles.section}>
              <div className={styles.cta}>
                <div className={styles.ctaCopy}>
                  <h2>
                    When to{" "}
                    <span className={styles.accentOnDark}>Get Help</span>
                  </h2>
                  <p>
                    A single file and one report is a fair job for a confident
                    Power BI user. It’s worth bringing in a hand when you’re
                    consolidating several entities, restricting who sees what,
                    archiving history in SQL, or chasing refresh failures. Our{" "}
                    <Link
                      href="/services/dashboards"
                      className={`${styles.inlineLink} ${styles.ctaLink}`}
                    >
                      dashboard and reporting team
                    </Link>{" "}
                    can design the model, security and refresh with you.
                  </p>
                </div>
                <a href="#contact" className="btn">
                  Talk to our team
                </a>
              </div>
            </section>

            {/* ── FAQ ── */}
            <section id="faq" className={styles.section}>
              <h2>
                Frequently{" "}
                <span className={styles.accent}>Asked Questions</span>
              </h2>
              <div className={styles.faq}>
                {FAQS.map((f) => (
                  <details key={f.q}>
                    <summary>
                      <span>{f.q}</span>
                      <span className={styles.chevron} aria-hidden="true">
                        <IconChevron />
                      </span>
                    </summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* ── Conclusion ── */}
            <section id="conclusion" className={styles.section}>
              <h2>
                <span className={styles.accent}>Conclusion</span>
              </h2>
              <p>
                Moving from manual CSV exports to live accounting data in Power
                BI is no longer just for large enterprises. Tools like OdataLink
                have made it accessible to small and mid-sized Australian
                businesses. A few hours of setup can save dozens of hours each
                month and eliminate version-control headaches.
              </p>
              <p>
                Getting it right does require care: authentication
                configuration, thoughtful data model selection, and proper
                security controls. For businesses with complex requirements,
                architecture decisions matter.
              </p>
              <p>
                At Office Experts, we’ve helped clients across Australia
                implement automated, real-time financial dashboards. Whether you
                need a simple connection for a single Xero file or consolidated
                reporting across multiple MYOB entities,{" "}
                <Link href="/contact-us" className={styles.inlineLink}>
                  get in touch with our team
                </Link>{" "}
                to start the conversation.
              </p>

              <div className={styles.author}>
                <span className={styles.avatarLarge} aria-hidden="true">
                  <Image src={scott} alt={AUTHOR_NAME} width={56} height={56} />
                </span>
                <div>
                  <p className={styles.authorLabel}>About the author</p>
                  <p className={styles.authorName}>{AUTHOR_NAME}</p>
                  <p className={styles.authorBio}>
                    Scott has been programming and developing across the entire
                    Microsoft suite for over 25 years. Now managing a team of
                    developers and designers at Office Experts Group, he
                    specialises in helping organisations leverage Power Platform
                    to transform their operations.
                  </p>
                </div>
              </div>
            </section>
          </article>
        </div>

        <RelatedLinks
          theme="dark"
          heading="Related"
          headingAccent="case studies"
          text="Real projects where we turned scattered data into automated, trustworthy reporting."
          links={caseStudyLinks}
        />
      </div>

      <Contact />
    </>
  );
}
