// /app/blog/access-database-slow-performance/page.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

import Contact from "@/components/Contact";
import { generateOrganizationSchema } from "@/utils/schemaGenerators";

import styles from "@/styles/accessDatabaseSlowPerformanceBlog.module.scss";

import scott from "@/public/team/scott.webp";

import HeroSvg from "./(svgs)/HeroSvg";
import SplitSvg from "./(svgs)/SplitSvg";
import DiagnoseSvg from "./(svgs)/DiagnoseSvg";
import QuerySvg from "./(svgs)/QuerySvg";
import {
  IndexSketch,
  CopySketch,
  CompactSketch,
  NetworkSketch,
} from "./(svgs)/Illustrations";
import {
  IconNetwork,
  IconSliders,
  IconDatabase,
  IconInfo,
  IconBulb,
  IconAlert,
  IconArrow,
  IconPlus,
  IconClock,
} from "./(svgs)/Icons";

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with layout.js
const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/blog/access-database-slow-performance`;
const PAGE_TITLE = "Access Database Running Slow? 7 Fixes | Office Experts";
const PAGE_DESCRIPTION =
  "Is your Access database slow? Find the 7 most common performance killers and the quick fixes that can restore speed in minutes. Advice from Australian experts.";
const PAGE_HEADLINE =
  "Access Database Running Slow? 7 Performance Killers (and How to Fix Them)";
const BREADCRUMB_NAME = "Access Database Running Slow?";
const AUTHOR_NAME = "Scott Robinson";
const READING_TIME = 16; // minutes, about 3,850 visible words divided by 238
const WORD_COUNT = 3850;
const HERO_IMAGE_PATH = "/logo.png";
const DATE_PUBLISHED = "2025-12-03T09:00:00+10:00";
const DATE_MODIFIED = "2026-11-20T09:00:00+11:00";

const formatDate = (iso) =>
  new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Sydney",
  }).format(new Date(iso));

const TOC = [
  ["intro", "Why speed matters"],
  ["why", "Why Access gets slow"],
  ["diagnose", "Find your cause"],
  ["killers", "The 7 performance killers"],
  ["mistakes", "Common mistakes"],
  ["outgrown", "When fixes aren’t enough"],
  ["plan", "Your action plan"],
  ["help", "When to call for help"],
  ["faq", "FAQs"],
  ["conclusion", "Conclusion"],
];

const GLANCE = [
  {
    value: "3–4",
    label: "Fixable mistakes",
    text: "Most slow databases trace back to a few habits, not to Access itself.",
  },
  {
    value: "5–10 min",
    label: "For many fixes",
    text: "Compact and Repair, indexes and antivirus exclusions are quick wins.",
  },
  {
    value: "2 GB",
    label: "Hard file limit",
    text: "The closer you get, the more every fix matters. Plan your exit early.",
  },
];

const REASONS = [
  {
    Icon: IconNetwork,
    title: "It’s a file, not a server",
    text: "With a shared .accdb file, each PC does the work itself and reads its data across the network. SQL Server filters the data on the server and sends back only the answer.",
  },
  {
    Icon: IconSliders,
    title: "Small design choices add up",
    text: "A missing index or a calculated field in a WHERE clause is invisible with 500 rows and painful with 500,000.",
  },
  {
    Icon: IconDatabase,
    title: "Growth sneaks up",
    text: "Databases slow down so gradually that people adapt. It’s usually a new user or a timed-out report that makes the problem obvious.",
  },
];

const WARNING_SIGNS = [
  "Forms take 10+ seconds to open",
  "Queries that used to run instantly now take minutes",
  "The database frequently “freezes” or shows “Not Responding”",
  "File size has grown past 500 MB",
  "Multiple users report slowness at the same time",
  "Compact and Repair takes longer each time",
  "Reports fail to complete or show #Error messages",
];

const TRIAGE = [
  {
    symptom: "Forms take 30+ seconds to open",
    first: ["#k1", "Network location (#1)"],
    then: ["#k2", "Indexes (#2)"],
  },
  {
    symptom: "Queries were fast, now they’re slow",
    first: ["#k3", "Inefficient queries (#3)"],
    then: ["#k4", "File bloat (#4)"],
  },
  {
    symptom: "Slowness gets worse over time in the same session",
    first: ["#k6", "Too many open forms (#6)"],
    then: null,
  },
  {
    symptom: "Random freezing, inconsistent slowness",
    first: ["#k7", "Antivirus and sync (#7)"],
    then: ["#k1", "Network issues (#1)"],
  },
  {
    symptom: "Database file is huge (1 GB+)",
    first: ["#k4", "File bloat (#4)"],
    then: ["#k5", "Memo and attachment fields (#5)"],
  },
];

const KILLER_CHIPS = [
  ["k1", "#1 Network share"],
  ["k2", "#2 Indexes"],
  ["k3", "#3 Queries and VBA"],
  ["k4", "#4 File bloat"],
  ["k5", "#5 Memo fields"],
  ["k6", "#6 Open forms"],
  ["k7", "#7 Antivirus and sync"],
];

const BAD_QUERY = `SELECT * FROM Orders
WHERE Year(OrderDate) = 2024`;

const GOOD_QUERY = `SELECT OrderID, OrderDate, Total
FROM Orders
WHERE OrderDate >= #1/1/2024#
  AND OrderDate < #1/1/2025#`;

const BAD_VBA = `Dim rs As DAO.Recordset
Set rs = CurrentDb.OpenRecordset("SELECT * FROM Customers")
Do Until rs.EOF
    rs.Edit
    rs!Status = "Active"
    rs.Update
    rs.MoveNext
Loop`;

const GOOD_VBA = `CurrentDb.Execute _
    "UPDATE Customers SET Status = 'Active'", _
    dbFailOnError`;

const OPEN_FORM_FILTERED = `' Open the form already filtered
DoCmd.OpenForm "frmOrders", , , "CustomerID = " & lngCustomerID`;

const IMAGE_PATH_CODE = `' ImagePath is a Short Text field holding the file path
Me.ImageControl.Picture = Me.ImagePath`;

const FORM_CLOSE_CODE = `' Close forms explicitly when done
Private Sub cmdClose_Click()
    DoCmd.Close acForm, Me.Name
    ' Don't just hide with Me.Visible = False
End Sub`;

const DIALOG_FORM_CODE = `' Instead of keeping forms open and hidden:
DoCmd.OpenForm "frmPopup", acNormal, , , , acDialog
' acDialog makes the code wait, and the form closes when done`;

const FORM_COUNT_CODE = `' Log how many forms are open during a long session
Debug.Print Forms.Count`;

const MISTAKES = [
  {
    Sketch: IndexSketch,
    title: "Indexing every field “just in case”",
    instead:
      "Index the fields you search, sort and join on. Every extra index slows down adding and editing records and adds to the file size.",
  },
  {
    Sketch: CopySketch,
    title: "Copying the whole file to each desktop",
    instead:
      "Split the database so everyone shares one set of tables, with a separate front-end copy each. Whole-file copies drift apart and lose data.",
  },
  {
    Sketch: CompactSketch,
    title: "Compacting a shared back-end while people are in it",
    instead:
      "Take a backup, get everyone out, then compact. An interrupted compact on a shared file can damage it.",
  },
  {
    Sketch: NetworkSketch,
    title: "Buying a faster PC but keeping the wobbly network",
    instead:
      "Fix the path to the data first: a wired connection, a back-end close to the users, or a remote session for off-site staff.",
  },
];

const CHECKLIST = [
  "Backed up before making any change",
  "Timed the slow task before and after",
  "Back-end on the server, a front-end copy on each PC",
  "Primary keys in place and join fields indexed",
  "Compact and Repair run when nobody is connected",
  "Antivirus and sync exclusions agreed with IT",
  "Forms close explicitly and subforms are limited",
  "Files stored as paths, not attachments or OLE objects",
];

const PLAN = [
  {
    kind: "planNow",
    priority: "Priority 1",
    title: "Do today",
    items: [
      "Run Compact and Repair (after a backup)",
      "Check whether the database is on a network share",
      "Add antivirus exclusions",
      "Check tables have primary keys and join fields are indexed",
    ],
  },
  {
    kind: "planWeek",
    priority: "Priority 2",
    title: "This week",
    items: [
      "Split the database if more than one person uses it",
      "Review and add foreign key indexes",
      "Remove or archive old data",
      "Replace memo and attachment fields with the file path approach",
    ],
  },
  {
    kind: "planMonth",
    priority: "Priority 3",
    title: "This month",
    items: [
      "Audit and optimise your slowest queries",
      "Put proper form closing procedures in place",
      "Consider SQL Server if you’re approaching 1.5 GB",
    ],
  },
];

const CADENCE = [
  ["Weekly", "Compact and Repair, at a quiet time"],
  ["Monthly", "Check file size growth"],
  ["Quarterly", "Review query performance"],
  ["Annually", "Check Access still meets your needs"],
];

const FAQS = [
  {
    q: "Why has my Access database suddenly become slow?",
    a: "Something has usually changed: more users, more data, a move to WiFi or VPN, a new antivirus policy, or the file landing in a OneDrive or Dropbox folder. Match your symptoms to the diagnosis table above, then start with the cheapest fix for that cause.",
  },
  {
    q: "Is Access slow over WiFi or VPN?",
    a: "It is much more sensitive to network quality than a server database, because each PC reads the data across the network itself. A split database helps, but for off-site staff a remote desktop session to a machine on the same network as the back-end is usually more reliable than linking over VPN.",
  },
  {
    q: "How big can an Access database get before it slows down?",
    a: "There’s no single size at which it becomes slow, but the hard limit is 2 GB per file. We’d review any database past 500 MB and plan an upgrade path well before 1.5 GB. Our guide to the 2 GB limit explains your options.",
    link: ["/blog/2gb-access-database-limit", "the 2 GB limit"],
  },
  {
    q: "Will splitting the database make it faster?",
    a: "For databases used by more than one person, usually yes. A split database also reduces corruption risk and makes updates easier, because you can replace a front-end without touching the data. It won’t fix poorly designed queries or missing indexes, so treat it as one step rather than the whole fix.",
  },
  {
    q: "Does Compact and Repair really make a difference?",
    a: "It reclaims the space left behind by deleted records and temporary objects, and it rebuilds the file’s internal structures. If the file shrinks by more than about 20%, you had bloat, and you’ll often notice a general improvement. Always back up first.",
  },
  {
    q: "When should we move to SQL Server?",
    a: "Consider it when the file regularly approaches the 2 GB limit, 10 or more people need access at once, or fixes only help temporarily. You can keep your Access forms and reports and move only the data, which is usually far less disruptive than a full rebuild.",
    link: ["/services/sql-server-and-access-integration", "SQL Server"],
  },
];

const RELATED = [
  {
    href: "/blog/2gb-access-database-limit",
    kicker: "Access limits",
    title: "The 2 GB Access database limit",
    text: "What happens as you approach the ceiling and the options for staying under it.",
  },
  {
    href: "/blog/why-dropbox-fails-with-access-databases",
    kicker: "File sync",
    title: "Why Dropbox and Access don’t mix",
    text: "How cloud sync interferes with file locking, and what to do instead.",
  },
  {
    href: "/blog/your-access-database-needs-a-cloud-strategy",
    kicker: "Cloud",
    title: "Your Access database needs a cloud strategy",
    text: "Azure SQL and other ways to give Access a modern, remote-friendly back-end.",
  },
];

function Callout({ Icon, label, children }) {
  return (
    <div className={styles.callout}>
      <span className={styles.calloutIcon}>
        <Icon />
      </span>
      <div className={styles.calloutBody}>
        <span className={styles.calloutLabel}>{label}</span>
        <div className={styles.calloutText}>{children}</div>
      </div>
    </div>
  );
}

function ProTip({ children }) {
  return (
    <div className={styles.proTip}>
      <span className={styles.proTipLabel}>Pro tip</span>
      <p className={styles.proTipText}>{children}</p>
    </div>
  );
}

function CodePair({
  avoidLabel = "Avoid",
  useLabel = "Use instead",
  avoid,
  use,
}) {
  return (
    <div className={`${styles.pair} ${styles.pairStack}`}>
      <div className={`${styles.pairCard} ${styles.pairAvoid}`}>
        <span className={styles.pairTag}>{avoidLabel}</span>
        <pre className={styles.code}>
          <code>{avoid}</code>
        </pre>
      </div>
      <div className={`${styles.pairCard} ${styles.pairUse}`}>
        <span className={styles.pairTag}>{useLabel}</span>
        <pre className={styles.code}>
          <code>{use}</code>
        </pre>
      </div>
    </div>
  );
}

function Diagram({ caption, children }) {
  return (
    <figure className={styles.diagram}>
      <div className={styles.diagramScroll}>
        <div className={styles.diagramInner}>{children}</div>
      </div>
      <figcaption className={styles.diagramCaption}>{caption}</figcaption>
    </figure>
  );
}

const AccessSlowPerformanceBlogPost = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationSchema(),
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        inLanguage: "en-AU",
        isPartOf: { "@id": `${SITE_URL}#website` },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        mainEntity: { "@id": `${PAGE_URL}#article` },
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
        articleSection: "Access Database Performance",
        wordCount: WORD_COUNT,
        timeRequired: `PT${READING_TIME}M`,
        keywords: [
          "access database slow performance",
          "speed up access database",
          "access database performance tuning",
        ],
        inLanguage: "en-AU",
        about: [
          {
            "@type": "Thing",
            name: "Microsoft Access",
            sameAs: "https://en.wikipedia.org/wiki/Microsoft_Access",
          },
          {
            "@type": "Thing",
            name: "Database Performance",
            sameAs: "https://en.wikipedia.org/wiki/Database_tuning",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className={styles.page}>
        {/* Hero */}
        <header className={styles.hero}>
          <div className={styles.heroGrid}>
            <div>
              <h1 className={styles.title}>
                Access Database Running Slow?{" "}
                <span className={styles.accent}>
                  7 Performance Killers (and How to Fix Them)
                </span>
              </h1>
              <p className={styles.heroLede}>
                Forms that take a minute to open, queries that used to be
                instant and the odd “Not Responding” freeze are rarely a sign
                that Access has failed. In most cases a handful of fixable
                habits are to blame, and many of the fixes take 5 to 10 minutes.
                This guide covers the seven most common culprits, how to spot
                each one and exactly what to change.
              </p>
              <div className={styles.byline}>
                <span className={styles.avatar} aria-hidden="true">
                  <Image src={scott} alt={AUTHOR_NAME} width={38} height={38} />
                </span>
                <span>
                  By <span className={styles.bylineName}>{AUTHOR_NAME}</span>
                </span>
                <span className={styles.bylineMeta}>
                  <IconClock />
                  Updated {formatDate(DATE_MODIFIED)}
                </span>
                <span className={styles.bylineMeta}>
                  {READING_TIME} min read
                </span>
              </div>
            </div>
            <div className={styles.heroArt}>
              <HeroSvg flowClass={styles.flow} spinClass={styles.spin} />
            </div>
          </div>
        </header>

        {/* At a glance */}
        <ul className={styles.glance} aria-label="At a glance">
          {GLANCE.map((g) => (
            <li key={g.label} className={styles.glanceCard}>
              <span className={styles.glanceValue}>{g.value}</span>
              <span className={styles.glanceLabel}>{g.label}</span>
              <p className={styles.glanceText}>{g.text}</p>
            </li>
          ))}
        </ul>

        <div className={styles.layout}>
          <nav className={styles.toc} aria-label="Contents">
            <p className={styles.tocTitle}>In this guide</p>
            <ul>
              {TOC.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <article className={styles.article}>
            {/* Intro */}
            <section id="intro" className={styles.section}>
              <h2>
                When speed <span className={styles.accent}>matters</span>
              </h2>
              <p>
                It’s 9am Monday morning. You open your Access database to pull
                the weekly sales report, and… nothing happens. The screen
                freezes. The mouse cursor shows that spinning wheel. Two minutes
                later, the database finally opens… but only to freeze again when
                you try to run a query!
              </p>
              <p>
                This isn’t just annoying, it’s costing your business money every
                single day. Staff lose time waiting for databases to respond.
                Reports that should take 30 seconds now take 10 minutes. Some
                businesses assume “Access is just slow”, but that’s rarely true.
              </p>
              <p>
                Most Access slowness comes from 3–4 fixable mistakes. Many of
                these fixes take 5–10 minutes to implement. You don’t always
                need to migrate to SQL Server or rebuild from scratch. This
                guide covers the 7 most common performance killers and shows you
                how to fix them.
              </p>
              <Callout Icon={IconBulb} label="The short version">
                Start with where the file lives, whether your tables are indexed
                and when you last ran Compact and Repair. Those three checks
                solve a large share of slow databases before you touch a single
                query.
              </Callout>
              <p>
                Microsoft’s own{" "}
                <a
                  className={styles.inlineLink}
                  href="https://support.microsoft.com/en-us/office/help-access-run-faster-f6827763-bb5c-4f48-8457-7a14addab6be"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  guidance on making Access run faster
                </a>{" "}
                says that indexing commonly used fields can improve performance
                more than the other tips in its article. We’ve built on that
                idea: do the cheap, high-impact things first, and only think
                about a rebuild once the basics are in place.
              </p>
            </section>

            {/* Why */}
            <section id="why" className={styles.section}>
              <h2>
                Understanding why Access{" "}
                <span className={styles.accent}>gets slow</span>
              </h2>
              <p>
                Access databases aren’t inherently slow, they’re mostly abused
                and misused! The file-based architecture means different rules
                apply compared to SQL Server. Network placement, design choices
                and data volume all matter. Most “slow Access” complaints trace
                back to the same 7 culprits.
              </p>
              <ul className={styles.reasons}>
                {REASONS.map(({ Icon, title, text }) => (
                  <li key={title} className={styles.reason}>
                    <span className={styles.iconBadge}>
                      <Icon />
                    </span>
                    <span className={styles.reasonTitle}>{title}</span>
                    <p className={styles.reasonText}>{text}</p>
                  </li>
                ))}
              </ul>
              <h3>Warning signs your database is in trouble</h3>
              <ul className={styles.signList}>
                {WARNING_SIGNS.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </section>

            {/* Diagnose */}
            <section id="diagnose" className={styles.section}>
              <h2>
                Find out which killer is{" "}
                <span className={styles.accent}>slowing you down</span>
              </h2>
              <p>
                You don’t need to read all seven sections before you act. Match
                your symptoms to the likely cause below, then jump to that
                section.
              </p>
              <Diagram caption="Follow the solid line first. If that fix doesn’t help, try the dashed one.">
                <DiagnoseSvg />
              </Diagram>

              <div
                className={styles.tableWrap}
                role="region"
                aria-label="Symptoms and the killers to check"
                tabIndex={0}
              >
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope="col">Symptom</th>
                      <th scope="col">Check first</th>
                      <th scope="col">Then check</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TRIAGE.map((row) => (
                      <tr key={row.symptom}>
                        <th scope="row">{row.symptom}</th>
                        <td>
                          <a className={styles.inlineLink} href={row.first[0]}>
                            {row.first[1]}
                          </a>
                        </td>
                        <td>
                          {row.then ? (
                            <a className={styles.inlineLink} href={row.then[0]}>
                              {row.then[1]}
                            </a>
                          ) : (
                            "Close and reopen Access to confirm"
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3>Before you change anything</h3>
              <ol className={styles.stepList}>
                <li>
                  Copy the database file and keep the copy somewhere safe.
                </li>
                <li>
                  Pick one slow task, such as opening the sales form or running
                  the weekly report, and time it with a stopwatch.
                </li>
                <li>Change one thing at a time so you know what worked.</li>
                <li>Time the same task again and write down the difference.</li>
              </ol>
              <p>
                Keep your stopwatch notes. They’re useful evidence if you later
                need to make the case for moving to SQL Server, and they stop
                you chasing a fix that only felt faster.
              </p>
            </section>

            {/* Killers */}
            <section id="killers" className={styles.section}>
              <h2>
                The 7 <span className={styles.accent}>performance killers</span>
              </h2>
              <p>
                Each killer below follows the same pattern: why it hurts, the
                symptoms to look for and the fix. Jump straight to the one that
                matches your symptoms.
              </p>
              <ul className={styles.jump}>
                {KILLER_CHIPS.map(([id, label]) => (
                  <li key={id}>
                    <a href={`#${id}`}>{label}</a>
                  </li>
                ))}
              </ul>

              <ol className={styles.timeline}>
                {/* 1 */}
                <li id="k1" className={styles.step}>
                  <span className={styles.stepBadge} aria-hidden="true">
                    1
                  </span>
                  <h3>
                    Performance Killer #1: The Database Lives on a Network Share
                  </h3>
                  <p>
                    <strong>Why it’s deadly…</strong> Access wasn’t designed for
                    file sharing across networks. Each PC does the work itself,
                    so a query can pull far more data across the network than
                    you’d expect. Record-locking creates constant file access
                    conflicts, and WiFi connections make all of this worse.
                  </p>
                  <Diagram caption="Splitting separates the tables from the forms, queries and reports, so each user opens a local front-end and only the rows they ask for travel.">
                    <SplitSvg />
                  </Diagram>
                  <span className={styles.subLabel}>The symptoms</span>
                  <ul className={styles.tickList}>
                    <li>Slowness increases with more users</li>
                    <li>Performance is worse for remote or WiFi users</li>
                    <li>
                      Random “database is in an inconsistent state” errors
                    </li>
                  </ul>
                  <span className={styles.subLabel}>Three levels of fix</span>
                  <ul className={styles.methods}>
                    <li className={`${styles.method} ${styles.methodQuick}`}>
                      <span className={styles.methodTag}>Quick fix</span>
                      <span className={styles.methodName}>
                        Move it to a local drive
                      </span>
                      <span className={styles.methodText}>
                        Only suitable for single-user access.
                      </span>
                    </li>
                    <li className={`${styles.method} ${styles.methodProper}`}>
                      <span className={styles.methodTag}>Proper fix</span>
                      <span className={styles.methodName}>
                        Split the database
                      </span>
                      <span className={styles.methodText}>
                        A front-end and back-end architecture.
                      </span>
                    </li>
                    <li className={`${styles.method} ${styles.methodBest}`}>
                      <span className={styles.methodTag}>Best fix</span>
                      <span className={styles.methodName}>
                        Move the back-end to SQL Server
                      </span>
                      <span className={styles.methodText}>
                        Or Azure SQL, keeping your Access forms and reports.
                      </span>
                    </li>
                  </ul>
                  <span className={styles.subLabel}>Implementation steps</span>
                  <ol className={styles.stepList}>
                    <li>Create a backup of your current database.</li>
                    <li>
                      Use Database Tools &gt; Move Data &gt; Access Database to
                      run the Database Splitter.
                    </li>
                    <li>Place the back-end file on the server.</li>
                    <li>
                      Give each user their own front-end copy on their local
                      machine, and check the table links point at the server.
                    </li>
                    <li>Test with two users at once before rolling it out.</li>
                  </ol>
                  <p>
                    <a
                      className={styles.inlineLink}
                      href="https://www.fmsinc.com/microsoftaccess/Performance.html"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      FMS Inc
                    </a>{" "}
                    makes the same point: keeping the application objects in one
                    file and the tables in another improves both performance and
                    maintainability.{" "}
                    <a
                      className={styles.inlineLink}
                      href="https://www.kzsoftware.com/articles/PreventAccessDatabaseCorruption"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      KZ Software
                    </a>{" "}
                    describes Access as the canary in the coal mine: it’s often
                    the first application to complain when a network has even
                    minor trouble. If you’d like help,{" "}
                    <Link
                      className={styles.inlineLink}
                      href="/services/sql-server-and-access-integration"
                    >
                      SQL Server and Access integration
                    </Link>{" "}
                    is what we do every week.
                  </p>
                  <p>
                    Splitting has a second benefit that’s easy to miss. When the
                    forms, queries and reports live in a front-end, you can fix
                    a bug or add a report and roll out a new copy without
                    touching anyone’s data. Backups get simpler too, because you
                    protect one tables-only file instead of a database that
                    changes every time someone edits a form.
                  </p>
                  <ProTip>
                    Keep the back-end on a wired connection, in the same site as
                    most users. For staff working off-site, a remote desktop
                    session to a machine on the same network as the back-end is
                    usually more reliable than linking tables over a VPN.
                  </ProTip>
                </li>

                {/* 2 */}
                <li id="k2" className={styles.step}>
                  <span className={styles.stepBadge} aria-hidden="true">
                    2
                  </span>
                  <h3>Performance Killer #2: Missing or Broken Indexes</h3>
                  <p>
                    <strong>Why it’s deadly…</strong> Without a usable index,
                    Access may have to read every row in a table to find a
                    match. On a small table you’ll never notice. On a table with
                    tens of thousands of rows, the same search can take many
                    seconds. Indexes damaged by corruption can act as though
                    they don’t exist.
                  </p>
                  <Diagram caption="A filter that wraps the field in a function can’t use the index. A plain date range can.">
                    <QuerySvg />
                  </Diagram>
                  <span className={styles.subLabel}>The symptoms</span>
                  <ul className={styles.tickList}>
                    <li>Queries slow down as data grows</li>
                    <li>Sorting and filtering take forever</li>
                    <li>Forms with combo boxes lag when opening</li>
                  </ul>
                  <span className={styles.subLabel}>How to identify it</span>
                  <p>
                    Open any table in Design View and click the Indexes button.
                    Look for:
                  </p>
                  <ul className={styles.tickList}>
                    <li>Tables with no primary key</li>
                    <li>
                      Foreign key fields (the ones used in relationships and
                      joins) without an index
                    </li>
                    <li>
                      Frequently searched or sorted fields without an index
                    </li>
                  </ul>
                  <span className={styles.subLabel}>The fix</span>
                  <ol className={styles.stepList}>
                    <li>Open the table in Design View.</li>
                    <li>
                      Select the field used in relationships (for example
                      CustomerID).
                    </li>
                    <li>
                      In Field Properties, set Indexed to “Yes (Duplicates OK)”.
                    </li>
                    <li>Save the table.</li>
                  </ol>
                  <Callout Icon={IconInfo} label="Rule of thumb">
                    Index fields you search or sort by, not fields you just
                    display. Don’t index everything: each index speeds up
                    reading but slows down adding and editing records, and adds
                    to the file size.
                  </Callout>
                  <p>
                    Microsoft’s guidance also recommends giving every table a
                    primary key. A table without one is like an engine running
                    on half its cylinders.
                  </p>
                  <ProTip>
                    If indexes seem to be ignored after a crash or a corruption
                    scare, run Compact and Repair first, then check the index
                    list again.
                  </ProTip>
                </li>

                {/* 3 */}
                <li id="k3" className={styles.step}>
                  <span className={styles.stepBadge} aria-hidden="true">
                    3
                  </span>
                  <h3>
                    Performance Killer #3: Inefficient Queries and VBA Code
                  </h3>
                  <p>
                    <strong>Why it’s deadly…</strong> Recordsets opened as the
                    wrong type, queries that pull an entire table when you only
                    need ten rows, VBA loops that update one row at a time
                    instead of running a single UPDATE query, and calculated
                    fields in WHERE clauses all make Access do far more work
                    than necessary.
                  </p>
                  <span className={styles.subLabel}>The symptoms</span>
                  <ul className={styles.tickList}>
                    <li>Reports run slower as data grows</li>
                    <li>Forms freeze when loading combo boxes</li>
                    <li>Action queries take minutes to complete</li>
                  </ul>
                  <span className={styles.subLabel}>Common query mistakes</span>
                  <CodePair avoid={BAD_QUERY} use={GOOD_QUERY} />
                  <p>
                    <strong>Why is the first one bad?</strong> It calculates
                    Year() for every row, so Access can’t use the index on
                    OrderDate. <strong>What’s the difference?</strong> The date
                    range lets Access use the index, which is usually much
                    faster. Asking for only the fields you need helps too.
                  </p>
                  <span className={styles.subLabel}>
                    A problematic VBA example
                  </span>
                  <CodePair avoid={BAD_VBA} use={GOOD_VBA} />
                  <p>
                    The loop touches every record one at a time. The single
                    UPDATE statement hands the whole job to the database engine
                    in one go.
                  </p>
                  <span className={styles.subLabel}>The fix</span>
                  <ul className={styles.tickList}>
                    <li>
                      Run the Performance Analyzer (Database Tools &gt; Analyze
                      Performance) to flag obvious design problems
                    </li>
                    <li>
                      Replace row-by-row VBA loops with SQL UPDATE statements
                    </li>
                    <li>
                      Use appropriate recordset types (snapshot for read-only)
                    </li>
                    <li>Avoid SELECT * when you only need specific fields</li>
                    <li>
                      Filter early: open forms and reports with a WHERE
                      condition instead of loading every record
                    </li>
                    <li>Base combo boxes on small queries, not whole tables</li>
                  </ul>
                  <CodePair
                    avoidLabel="Loads everything"
                    useLabel="Loads what’s needed"
                    avoid={`DoCmd.OpenForm "frmOrders"`}
                    use={OPEN_FORM_FILTERED}
                  />
                  <ProTip>
                    Time the query before and after. If it’s a saved query, copy
                    its SQL into a new query to experiment without touching the
                    original.{" "}
                    <Link
                      className={styles.inlineLink}
                      href="/services/vba-macro-development"
                    >
                      Our VBA specialists
                    </Link>{" "}
                    can review code that’s still slow.
                  </ProTip>
                </li>

                {/* 4 */}
                <li id="k4" className={styles.step}>
                  <span className={styles.stepBadge} aria-hidden="true">
                    4
                  </span>
                  <h3>Performance Killer #4: Bloated Database File</h3>
                  <p>
                    <strong>Why it’s deadly…</strong> Deleted records don’t free
                    up space, temporary objects accumulate and the database
                    fragments like a hard drive. That slows down everything, not
                    just specific operations.{" "}
                    <a
                      className={styles.inlineLink}
                      href="https://support.microsoft.com/en-us/office/help-access-run-faster-f6827763-bb5c-4f48-8457-7a14addab6be"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      Microsoft explains
                    </a>{" "}
                    that Compact and Repair removes the space left behind by
                    deleted or temporary objects, which can help the database
                    run faster.
                  </p>
                  <span className={styles.subLabel}>The symptoms</span>
                  <ul className={styles.tickList}>
                    <li>File size is 1 GB+ but the data seems smaller</li>
                    <li>Compact and Repair reduces file size by 30% or more</li>
                    <li>General sluggishness across all operations</li>
                  </ul>
                  <span className={styles.subLabel}>How to check</span>
                  <ol className={styles.stepList}>
                    <li>
                      Check the current file size (right-click the file, then
                      Properties).
                    </li>
                    <li>Run Compact and Repair.</li>
                    <li>Check the file size again.</li>
                    <li>If it shrank by more than 20%, you had bloat.</li>
                  </ol>
                  <span className={styles.subLabel}>And now the fix</span>
                  <p>
                    Go to File &gt; Info &gt; Compact &amp; Repair Database.
                  </p>
                  <Callout Icon={IconAlert} label="Before you compact">
                    Make a backup first, and never compact a shared back-end
                    while other people are connected. If the process is
                    interrupted, the file can be damaged.
                  </Callout>
                  <span className={styles.subLabel}>Prevention</span>
                  <ul className={styles.tickList}>
                    <li>
                      Turn on Compact on Close (File &gt; Options &gt; Current
                      Database) for front-end copies. Avoid it on a shared
                      back-end.
                    </li>
                    <li>
                      Schedule a regular manual compact of the back-end at a
                      quiet time (weekly or monthly)
                    </li>
                    <li>
                      Archive old data regularly: export records older than 2–3
                      years and keep them in a separate archive database
                    </li>
                  </ul>
                  <span className={styles.subLabel}>For severe bloat</span>
                  <ol className={styles.stepList}>
                    <li>Create a new blank database.</li>
                    <li>Import all objects from the old database.</li>
                    <li>This rebuilds everything from scratch.</li>
                  </ol>
                  <ProTip>
                    Keep a note of the file size after each compact. A file that
                    keeps growing even after you’ve archived old data usually
                    points to attachments or OLE objects (killer #5).
                  </ProTip>
                </li>

                {/* 5 */}
                <li id="k5" className={styles.step}>
                  <span className={styles.stepBadge} aria-hidden="true">
                    5
                  </span>
                  <h3>Performance Killer #5: Large Memo/Long Text Fields</h3>
                  <p>
                    <strong>Why it’s deadly…</strong> Long Text (memo) fields
                    can be much heavier than they look, and Access may load more
                    of them than you expect even when a form shows only the
                    first 50 characters. Images and attachments stored in tables
                    bloat the file size, and OLE Object fields are among the
                    worst offenders for performance.
                  </p>
                  <span className={styles.subLabel}>The symptoms</span>
                  <ul className={styles.tickList}>
                    <li>Forms with memo fields load slowly</li>
                    <li>
                      The database file is huge compared to the visible data
                    </li>
                    <li>Scrolling through records is choppy</li>
                  </ul>
                  <span className={styles.subLabel}>
                    The fix for images and documents
                  </span>
                  <div className={styles.pair}>
                    <div className={`${styles.pairCard} ${styles.pairAvoid}`}>
                      <span className={styles.pairTag}>Don’t store</span>
                      <p className={styles.pairText}>
                        The file itself in an Attachment or OLE Object field.
                      </p>
                    </div>
                    <div className={`${styles.pairCard} ${styles.pairUse}`}>
                      <span className={styles.pairTag}>Do store</span>
                      <p className={styles.pairText}>
                        The file in a network folder, and its path in a Short
                        Text field such as{" "}
                        <strong>\\server\images\photo123.jpg</strong>.
                      </p>
                    </div>
                  </div>
                  <pre className={styles.code}>
                    <code>{IMAGE_PATH_CODE}</code>
                  </pre>
                  <p>
                    Remember to back up the image folder as well as the
                    database.
                  </p>
                  <span className={styles.subLabel}>
                    For long text that must stay in the database
                  </span>
                  <ul className={styles.tickList}>
                    <li>Split it into a separate table loaded on demand</li>
                    <li>Create a “Details” table linked by ID</li>
                    <li>
                      Load it only when the user clicks a “View Details” button
                    </li>
                  </ul>
                </li>

                {/* 6 */}
                <li id="k6" className={styles.step}>
                  <span className={styles.stepBadge} aria-hidden="true">
                    6
                  </span>
                  <h3>
                    Performance Killer #6: Too Many Open Forms and Objects
                  </h3>
                  <p>
                    <strong>Why it’s deadly…</strong> Each open form consumes
                    memory. Subforms multiply the problem, and hidden forms
                    still use resources. Access’s memory handling is limited
                    compared with modern apps, so a form-heavy session gets
                    heavier the longer it runs.
                  </p>
                  <span className={styles.subLabel}>The symptoms</span>
                  <ul className={styles.tickList}>
                    <li>The database gets slower the longer it’s open</li>
                    <li>Performance improves after closing and reopening</li>
                    <li>
                      “Out of memory” errors on computers with plenty of RAM
                    </li>
                  </ul>
                  <span className={styles.subLabel}>
                    The fix: in form design
                  </span>
                  <pre className={styles.code}>
                    <code>{FORM_CLOSE_CODE}</code>
                  </pre>
                  <span className={styles.subLabel}>For popup forms</span>
                  <pre className={styles.code}>
                    <code>{DIALOG_FORM_CODE}</code>
                  </pre>
                  <span className={styles.subLabel}>For subforms</span>
                  <ul className={styles.tickList}>
                    <li>Limit subforms on main forms to 2–3 maximum</li>
                    <li>
                      Use tab controls to separate subforms. Access generally
                      waits to load a subform on a tab until you open that tab
                    </li>
                    <li>
                      Consider “Details” buttons instead of automatic subforms
                    </li>
                  </ul>
                  <ProTip>
                    To confirm this is your problem, run the line below from the
                    Immediate window or a button every so often during a long
                    session. A number that keeps climbing means forms aren’t
                    being closed.
                  </ProTip>
                  <pre className={styles.code}>
                    <code>{FORM_COUNT_CODE}</code>
                  </pre>
                </li>

                {/* 7 */}
                <li id="k7" className={styles.step}>
                  <span className={styles.stepBadge} aria-hidden="true">
                    7
                  </span>
                  <h3>
                    Performance Killer #7: Antivirus and Windows Search Indexing
                  </h3>
                  <p>
                    <strong>Why it’s deadly…</strong> Antivirus software can
                    scan every read and write to the file. Windows Search may
                    keep re-indexing the .accdb. OneDrive and Dropbox sync can
                    interfere with file locking. These issues compound with
                    network-shared databases, where even small amounts of packet
                    loss can hurt, as{" "}
                    <a
                      className={styles.inlineLink}
                      href="https://www.kzsoftware.com/articles/PreventAccessDatabaseCorruption"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      KZ Software
                    </a>{" "}
                    points out.
                  </p>
                  <span className={styles.subLabel}>The symptoms</span>
                  <ul className={styles.tickList}>
                    <li>
                      Random pauses that don’t correlate with user actions
                    </li>
                    <li>Worse performance during backup hours</li>
                    <li>Inconsistent slowness (fast sometimes, slow others)</li>
                  </ul>
                  <span className={styles.subLabel}>The fix: antivirus</span>
                  <p>Add these to your antivirus exclusions:</p>
                  <ul className={styles.tickList}>
                    <li>The database file: C:\Databases\*.accdb</li>
                    <li>The database folder: C:\Databases\</li>
                    <li>
                      The Access executable, for example C:\Program
                      Files\Microsoft Office\root\Office16\MSACCESS.EXE (your
                      path may differ)
                    </li>
                  </ul>
                  <Callout Icon={IconInfo} label="Agree it with IT">
                    Exclusions trade scanning coverage for speed. Agree the
                    folders with whoever manages your security, and keep the
                    excluded folder limited to your database files.
                  </Callout>
                  <span className={styles.subLabel}>Windows Search</span>
                  <ol className={styles.stepList}>
                    <li>Open Control Panel &gt; Indexing Options.</li>
                    <li>Choose Modify and untick the database locations.</li>
                    <li>Under Advanced &gt; File Types, remove .accdb.</li>
                  </ol>
                  <span className={styles.subLabel}>OneDrive and Dropbox</span>
                  <ul className={styles.tickList}>
                    <li>Never run Access databases from sync folders</li>
                    <li>
                      Move the database outside OneDrive and Dropbox folders
                    </li>
                    <li>
                      See the related article:{" "}
                      <Link
                        className={styles.inlineLink}
                        href="/blog/why-dropbox-fails-with-access-databases"
                      >
                        Why Dropbox and Access don’t mix
                      </Link>
                    </li>
                  </ul>
                </li>
              </ol>
            </section>

            {/* Mistakes */}
            <section id="mistakes" className={styles.section}>
              <h2>
                Common <span className={styles.accent}>mistakes</span> when
                tuning Access
              </h2>
              <p>
                Some well-meant fixes don’t help, and a few make things worse.
                These are the four we see most often.
              </p>
              <ul className={styles.mistakes}>
                {MISTAKES.map(({ Sketch, title, instead }, i) => (
                  <li key={title} className={styles.mistake}>
                    <span className={styles.mistakeNum} aria-hidden="true">
                      {i + 1}
                    </span>
                    <h3>{title}</h3>
                    <Sketch />
                    <span className={styles.insteadPill}>Instead</span>
                    <p className={styles.mistakeText}>{instead}</p>
                  </li>
                ))}
              </ul>
              <div className={styles.checkCard}>
                <h3>Before you call it fixed</h3>
                <ul className={`${styles.tickList} ${styles.twoCol}`}>
                  {CHECKLIST.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Outgrown */}
            <section id="outgrown" className={styles.section}>
              <h2>
                When fixes <span className={styles.accent}>aren’t enough</span>
              </h2>
              <h3>Signs you’ve outgrown Access</h3>
              <ul className={`${styles.tickList} ${styles.twoCol}`}>
                <li>The database regularly approaches the 2 GB limit</li>
                <li>10+ concurrent users need access</li>
                <li>Performance fixes only help temporarily</li>
                <li>Data volume is growing rapidly</li>
              </ul>
              <h3>Better long-term solutions</h3>
              <div
                className={styles.tableWrap}
                role="region"
                aria-label="Long-term options compared"
                tabIndex={0}
              >
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope="col">Option</th>
                      <th scope="col">Best for</th>
                      <th scope="col">What changes for your team</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">SQL Server back-end</th>
                      <td>Larger data volumes and better multi-user support</td>
                      <td>
                        The familiar Access interface stays; the data moves to a
                        server.{" "}
                        <Link
                          className={styles.inlineLink}
                          href="/services/sql-server-and-access-integration"
                        >
                          SQL Server and Access integration
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Azure SQL Database</th>
                      <td>
                        Remote access without a VPN and a back-end that grows
                        with you
                      </td>
                      <td>
                        Access links to a cloud database. Backup options and
                        costs vary by plan, so check current Microsoft details.{" "}
                        <Link
                          className={styles.inlineLink}
                          href="/blog/your-access-database-needs-a-cloud-strategy"
                        >
                          Explore cloud strategy options
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Power Apps and Dataverse</th>
                      <td>
                        Mobile-friendly screens and a full move to the cloud
                      </td>
                      <td>
                        A new interface built on the Microsoft Power Platform.{" "}
                        <Link
                          className={styles.inlineLink}
                          href="/blog/using-power-platform-with-access-database"
                        >
                          Discover hybrid Access solutions
                        </Link>{" "}
                        or read about{" "}
                        <Link
                          className={styles.inlineLink}
                          href="/services/microsoft-power-platform/power-apps"
                        >
                          Power Apps consulting
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Callout Icon={IconAlert} label="Don’t wait">
                Don’t wait for a catastrophic failure. If you’re seeing warning
                signs, it’s time to upgrade your back-end before you lose
                critical data. See the{" "}
                <Link
                  className={styles.inlineLink}
                  href="/services/upgrades-and-migration"
                >
                  upgrades and migration
                </Link>{" "}
                service for how we approach it.
              </Callout>
            </section>

            {/* Plan */}
            <section id="plan" className={styles.section}>
              <h2>
                Your immediate{" "}
                <span className={styles.accent}>action plan</span>
              </h2>
              <p>
                Work through these in order. Priority 1 fits in the next 30
                minutes.
              </p>
              <div className={styles.plan}>
                {PLAN.map((p) => (
                  <div key={p.title} className={styles.planRow}>
                    <div className={`${styles.planWhen} ${styles[p.kind]}`}>
                      <span className={styles.planPriority}>{p.priority}</span>
                      <span className={styles.planTitle}>{p.title}</span>
                    </div>
                    <div className={styles.planBody}>
                      <ul className={styles.tickList}>
                        {p.items.map((it) => (
                          <li key={it}>{it}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <h3>Monitoring performance going forward</h3>
              <p>Set calendar reminders so slowness never creeps back:</p>
              <ul className={styles.cadence}>
                {CADENCE.map(([when, what]) => (
                  <li key={when} className={styles.cadenceItem}>
                    <span className={styles.cadenceWhen}>
                      <IconClock />
                      {when}
                    </span>
                    <span className={styles.cadenceText}>{what}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Help */}
            <section id="help" className={styles.section}>
              <h2>
                When to <span className={styles.accent}>call for help</span>
              </h2>
              <div className={styles.help}>
                <div className={`${styles.helpCard} ${styles.helpDiy}`}>
                  <h3>DIY fixes work for…</h3>
                  <ul className={styles.tickList}>
                    <li>Single-user or small team databases</li>
                    <li>File sizes under 500 MB</li>
                    <li>Basic queries and forms</li>
                  </ul>
                </div>
                <div className={`${styles.helpCard} ${styles.helpPro}`}>
                  <h3>Professional help is needed for…</h3>
                  <ul className={styles.tickList}>
                    <li>
                      Business-critical databases (you can’t afford downtime)
                    </li>
                    <li>Complex VBA and query optimisation</li>
                    <li>
                      <Link
                        className={styles.inlineLink}
                        href="/services/upgrades-and-migration"
                      >
                        Migration to SQL Server or the cloud
                      </Link>
                    </li>
                    <li>Database recovery from corruption</li>
                  </ul>
                </div>
              </div>
              <div className={styles.ctaBand}>
                <h3>
                  Fix it now with{" "}
                  <span className={styles.accent}>simple changes</span>
                </h3>
                <p className={styles.ctaText}>
                  The question isn’t whether to fix performance issues, it’s
                  whether to fix them now with simple changes or later with
                  expensive emergency migrations. Tell us what’s slow and we’ll
                  point you at the changes that will make the biggest
                  difference.
                </p>
                <div className={styles.ctaActions}>
                  <a href="#contact" className="btn">
                    Talk to an Access expert
                  </a>
                  <Link
                    href="/services/database-development-and-solutions"
                    className={styles.ctaLink}
                  >
                    Database development and solutions
                    <IconArrow />
                  </Link>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className={styles.section}>
              <h2>
                Frequently asked{" "}
                <span className={styles.accent}>questions</span>
              </h2>
              <div className={styles.faq}>
                {FAQS.map((f) => (
                  <details key={f.q} className={styles.faqItem}>
                    <summary>
                      {f.q}
                      <span className={styles.faqIcon} aria-hidden="true">
                        <IconPlus />
                      </span>
                    </summary>
                    <div className={styles.faqBody}>
                      <p>
                        {f.a}
                        {f.link ? (
                          <>
                            {" "}
                            <Link
                              className={styles.inlineLink}
                              href={f.link[0]}
                            >
                              Read more about {f.link[1]}
                            </Link>
                            .
                          </>
                        ) : null}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className={styles.section}>
              <h2>
                <span className={styles.accent}>Conclusion</span>
              </h2>
              <h3>Key takeaways</h3>
              <ul className={styles.tickList}>
                <li>
                  Most Access slowness is fixable without expensive migrations
                </li>
                <li>The 7 performance killers explain most speed complaints</li>
                <li>Quick wins (indexes, compact, antivirus) take minutes</li>
                <li>
                  Structural issues (network location, split database) take
                  hours
                </li>
                <li>Know when to move beyond Access entirely</li>
              </ul>
              <h3>The real cost of ignoring performance</h3>
              <ul className={styles.tickList}>
                <li>
                  Staff time lost waiting, multiplied across every user, every
                  day
                </li>
                <li>Business decisions delayed by slow reporting</li>
                <li>Risk of corruption from bloated, stressed databases</li>
                <li>
                  Eventually hitting the{" "}
                  <Link
                    className={styles.inlineLink}
                    href="/blog/2gb-access-database-limit"
                  >
                    2 GB wall
                  </Link>
                </li>
              </ul>

              <div className={styles.authorBox}>
                <span className={styles.avatarLarge} aria-hidden="true">
                  <Image src={scott} alt={AUTHOR_NAME} width={56} height={56} />
                </span>
                <div>
                  <h3>About the author</h3>
                  <p>
                    {AUTHOR_NAME} founded Office Experts Group in 2000, an
                    Australian Microsoft consultancy. With decades of experience
                    in design, programming and consulting, he helps businesses
                    get the full potential out of Microsoft solutions.
                  </p>
                </div>
              </div>
            </section>

            {/* Related */}
            <section
              className={styles.section}
              aria-labelledby="related-heading"
            >
              <h2 id="related-heading">
                Related <span className={styles.accent}>reading</span>
              </h2>
              <ul className={styles.related}>
                {RELATED.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className={styles.relatedCard}>
                      <span className={styles.relatedKicker}>{r.kicker}</span>
                      <span className={styles.relatedTitle}>{r.title}</span>
                      <span className={styles.relatedText}>{r.text}</span>
                      <span className={styles.relatedMore}>
                        Read the article
                        <IconArrow />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default AccessSlowPerformanceBlogPost;
