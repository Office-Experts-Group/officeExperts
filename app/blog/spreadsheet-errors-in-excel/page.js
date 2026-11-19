// /app/blog/spreadsheet-errors-in-excel/page.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

import Contact from "@/components/Contact";
import { generateOrganizationSchema } from "@/utils/schemaGenerators";
import styles from "@/styles/spreadsheetErrorsBlog.module.scss";
import dan from "@/public/team/dan.webp";

import HeroSvg from "./(svgs)/HeroSvg";
import ErrorTravelSvg from "./(svgs)/ErrorTravelSvg";
import RiskFlowSvg from "./(svgs)/RiskFlowSvg";
import {
  SketchHardCoded,
  SketchVersions,
  SketchLayout,
  SketchLocks,
  SketchOwner,
} from "./(svgs)/MistakeSketches";
import {
  IconBrokenLink,
  IconPerson,
  IconEye,
  IconGauge,
  IconHash,
  IconCopy,
  IconTag,
  IconLock,
  IconSearch,
  IconRefresh,
  IconCalendar,
  IconCheck,
  IconWarn,
  IconArrow,
} from "./(svgs)/Icons";

// Keep these constants in sync with layout.js.
const PAGE_URL =
  "https://www.officeexperts.com.au/blog/spreadsheet-errors-in-excel";
const PAGE_TITLE = "Preventing Spreadsheet Errors in Excel | Office Experts";
const PAGE_DESCRIPTION =
  "Learn why 88% of spreadsheets contain errors, how to spot the warning signs, and practical ways to prevent costly Excel mistakes in your business.";

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_HEADLINE =
  "The Hidden Risk of Spreadsheet Errors in Your Business — and How to Prevent Them";
const BREADCRUMB_NAME = "Spreadsheet Error Prevention";
const AUTHOR_NAME = "Daniel Thomas";
const READING_TIME = 12;
const WORD_COUNT = 2750;
const HERO_IMAGE_PATH = "/logo.png";
const DATE_PUBLISHED = "2025-07-23T09:00:00+10:00";
// Updated by hand when the content really changes (AEDT, +11:00).
const DATE_MODIFIED = "2026-11-18T09:00:00+11:00";

const formatDate = (iso) =>
  new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Sydney",
  }).format(new Date(iso));

const TOC = [
  ["imprisoned", "Imprisoned by your own cells"],
  ["why", "Why errors are so common"],
  ["signs", "Signs of a problem"],
  ["risk", "How risky is your file?"],
  ["prevent", "How to prevent errors"],
  ["tools", "Choosing the right tool"],
  ["mistakes", "Common mistakes"],
  ["checklist", "Pre-share checklist"],
  ["help", "When to get help"],
  ["faq", "FAQ"],
  ["conclusion", "Conclusion"],
];

const GLANCE = [
  {
    value: "88%",
    label: "of spreadsheets contain errors",
    line: "A widely cited research finding, and most are never noticed.",
  },
  {
    value: "1 person",
    label: "who really understands the file",
    line: "A single point of failure is the most common warning sign.",
  },
  {
    value: "5 habits",
    label: "that prevent most costly mistakes",
    line: "Structure, protection, auditing, automation and regular reviews.",
  },
];

const CASES = [
  [
    "JP Morgan, 2012",
    "A trading loss of roughly US$6 billion, widely reported to involve a spreadsheet copying error in a risk model.",
    "Models that guide big decisions need independent review.",
  ],
  [
    "Kodak",
    "A spreadsheet error reportedly overstated one employee’s severance by $11 million.",
    "Sense-check outputs against what you expect to see.",
  ],
  [
    "University of Toledo",
    "A single formula mistake led to a $2.4 million misprojection in tuition revenue.",
    "One bad formula can skew an entire budget.",
  ],
  [
    "Emerson Construction Company",
    "A $37 million government contract was nearly lost after one cell was overlooked in a bid estimate.",
    "Bid and quote workbooks need a second set of eyes.",
  ],
];

const SIGNS = [
  {
    Icon: IconBrokenLink,
    title: "Broken links or #REF! errors",
    text: "These are not just technical annoyances. They often signal broken logic, missing data, or structural flaws in how spreadsheets are built and maintained.",
  },
  {
    Icon: IconPerson,
    title: "Single point of failure",
    text: "If there’s only one person who truly understands how a spreadsheet works, that’s a major risk. What happens if they go on leave or leave the business altogether?",
  },
  {
    Icon: IconEye,
    title: "Unreviewed critical decisions",
    text: "Are you using Excel files to make budgeting, staffing, or compliance decisions without a second set of eyes? A lack of peer review opens the door to costly mistakes.",
  },
  {
    Icon: IconGauge,
    title: "Performance issues",
    text: "Does the file take ages to open or update? That’s often a sign of bloated formulas, inefficient design, or hidden data issues.",
  },
  {
    Icon: IconHash,
    title: "Numbers typed over formulas",
    text: "A total that looks right but holds a typed number instead of a formula will never update when the data changes, and nothing on screen tells you.",
  },
  {
    Icon: IconCopy,
    title: "Final, final2 and FINAL_v7",
    text: "Several copies of the same workbook in circulation means nobody can say for certain which one has the right numbers.",
  },
];

const PREVENT = [
  {
    Icon: IconTag,
    title: "Implement consistent naming conventions and data validation",
    text: "A standardised naming system helps others (and future you!) understand spreadsheet logic quickly. Name tabs and inputs the same way every time, and use data validation drop-downs so a date field can only ever hold a date.",
    tip: "Keep assumptions such as tax rates or margins in one labelled Inputs tab and point every formula at them.",
  },
  {
    Icon: IconLock,
    title: "Lock sensitive cells and protect critical formulas",
    text: "Prevent accidental overwrites by locking down the most important formulas and reference cells. Unlock only the cells people are meant to type into, then protect the sheet. Protection stops accidents rather than determined users, so keep a backup copy as well.",
    tip: "Colour input cells consistently, for example pale yellow, so people know where it’s safe to type.",
  },
  {
    Icon: IconSearch,
    title: "Use Excel’s built-in auditing tools",
    text: "Excel offers advanced tools like the Formula Auditing toolbar, Error Checking, and Trace Precedents/Dependents. Run Error Checking from the Formulas tab, then trace any total that matters back to its source.",
    tip: "Press Ctrl + ` to show every formula on a sheet at once. Typed-over numbers stand out straight away.",
  },
  {
    Icon: IconRefresh,
    title: "Automate and document recurring tasks",
    text: "If you run the same report every week or reconcile data monthly, automate the workflow with Power Query, VBA, or scripts. A repeatable process doesn’t depend on someone remembering every copy-and-paste step.",
    tip: "Add a Read me tab with the file’s purpose, owner, data sources and the date it was last reviewed.",
  },
  {
    Icon: IconCalendar,
    title: "Schedule regular spreadsheet audits",
    text: "Just like financial audits, spreadsheet audits can identify hidden errors, inefficiencies, and risks. Review the files that drive decisions every quarter, and the rest once a year. Ask someone who didn’t build the file to test it.",
    tip: "Test with an easy case where you already know the answer, then an extreme one such as zero or a negative number.",
  },
];

const MISTAKES = [
  {
    Sketch: SketchHardCoded,
    title: "Typing numbers inside formulas",
    text: "A formula like =B2*1.1 hides an assumption. When the rate changes, nobody knows which formulas to update.",
    instead:
      "Put each assumption in its own labelled cell, then point formulas at it.",
  },
  {
    Sketch: SketchVersions,
    title: "Saving copies as final, final2 and FINAL_v7",
    text: "Versions scattered across email and shared drives mean people quietly work from different numbers.",
    instead:
      "Keep one master file in SharePoint or OneDrive, where version history is built in, and log changes on a Read me tab.",
  },
  {
    Sketch: SketchLayout,
    title: "Merged cells, blank rows and mixed data",
    text: "They look tidy to a person but trip up sorting, filtering, pivot tables and Power Query.",
    instead:
      "Use one header row, one record per row and one type of data per column.",
  },
  {
    Sketch: SketchLocks,
    title: "Leaving every cell unlocked",
    text: "Anyone can overwrite a formula with a number, and the sheet looks exactly the same afterwards.",
    instead:
      "Lock formula cells, leave input cells open and mark them clearly.",
  },
  {
    Sketch: SketchOwner,
    title: "Letting one person hold all the knowledge",
    text: "When that person is on leave or moves on, the workbook becomes a black box.",
    instead:
      "Record the purpose, data sources and owner on a Read me tab, and make sure a second person can run the file.",
  },
];

const CHECKLIST = [
  "Totals reconcile to the source data or last month’s report",
  "No #REF!, #N/A or #DIV/0! errors are showing",
  "Inputs and assumptions sit in one labelled place",
  "No numbers are typed over formulas (check with Ctrl + `)",
  "Links to other workbooks work, or have been removed",
  "Formulas are locked and input cells are clearly marked",
  "Hidden sheets, rows and columns are intentional and noted",
  "Someone else has tested it with a known answer",
  "File name, version and owner are recorded on a Read me tab",
  "A backup copy was saved before the final edit",
];

const FAQS = [
  {
    q: "How common are spreadsheet errors?",
    a: (
      <>
        Research is often cited as finding errors in around 88% of spreadsheets.
        The exact figure depends on how an error is defined and which
        spreadsheets were studied, but the broad message is consistent: most
        spreadsheets that people rely on contain at least one mistake, and most
        are never found.
      </>
    ),
  },
  {
    q: "What is the most common type of spreadsheet error?",
    a: (
      <>
        Mistakes made while building a spreadsheet are typically the most
        common, particularly formulas that don’t cover the full range, numbers
        typed over formulas and broken links between files. Data-entry slips and
        wrong assumptions follow. Most are invisible because the sheet still
        shows a plausible number.
      </>
    ),
  },
  {
    q: "Can Excel check my formulas for me?",
    a: (
      <>
        Partly. Error Checking flags obvious problems such as inconsistent
        formulas and numbers stored as text, and Trace Precedents and Trace
        Dependents show where a figure comes from. Some editions of Microsoft
        365 and Office also include the Inquire add-in, which can compare
        workbooks and map links. None of these can tell you whether the logic
        itself is right, so a human review still matters.
      </>
    ),
  },
  {
    q: "When should we move from a spreadsheet to Power BI or a database?",
    a: (
      <>
        Consider it when many people need to enter data at once, the file takes
        minutes to open, reports are rebuilt by hand every week, or the numbers
        feed decisions that need an audit trail. Our{" "}
        <Link
          href="/services/microsoft-power-platform/excel-to-power-bi-migration"
          className={styles.inlineLink}
        >
          Excel to Power BI migration
        </Link>{" "}
        and{" "}
        <Link
          href="/services/database-development-and-solutions"
          className={styles.inlineLink}
        >
          database development
        </Link>{" "}
        services cover both routes.
      </>
    ),
  },
  {
    q: "What does a spreadsheet health check involve?",
    a: (
      <>
        Typically a review of the workbook’s structure, formulas, links, hidden
        content, protection and documentation, followed by a prioritised list of
        fixes. The aim is to find the errors that matter most first, and to make
        the file easier for someone else to understand and maintain.
      </>
    ),
  },
];

const RELATED = [
  {
    href: "/blog/xero-to-power-bi",
    title: "Xero to Power BI",
    text: "Connecting accounting data to Power BI for reporting.",
  },
  {
    href: "/blog/sharepoint-lists",
    title: "SharePoint lists",
    text: "A shared, structured option when a spreadsheet is really a list.",
  },
  {
    href: "/blog/power-apps-with-sql-database",
    title: "Power Apps with a SQL database",
    text: "When many people enter data, a proper database and form can replace a shared workbook.",
  },
];

function Callout({ Icon, label, children }) {
  return (
    <aside className={styles.callout}>
      <span className={styles.calloutIcon}>
        <Icon />
      </span>
      <div>
        <p className={styles.calloutLabel}>{label}</p>
        <p className={styles.calloutText}>{children}</p>
      </div>
    </aside>
  );
}

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
      primaryImageOfPage: `${SITE_URL}${HERO_IMAGE_PATH}`,
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
      headline: PAGE_HEADLINE,
      alternativeHeadline:
        "88% of Spreadsheets Contain Errors: Prevention Guide",
      description: PAGE_DESCRIPTION,
      image: `${SITE_URL}${HERO_IMAGE_PATH}`,
      author: { "@type": "Person", name: AUTHOR_NAME },
      publisher: { "@id": `${SITE_URL}#organization` },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: "Excel Tips",
      wordCount: WORD_COUNT,
      timeRequired: `PT${READING_TIME}M`,
      keywords: ["spreadsheet errors", "Excel errors", "spreadsheet audit"],
      inLanguage: "en-AU",
      mainEntityOfPage: { "@id": `${PAGE_URL}#webpage` },
      about: [
        {
          "@type": "Thing",
          name: "Spreadsheet Management",
          sameAs: "https://en.wikipedia.org/wiki/Spreadsheet",
        },
        {
          "@type": "Thing",
          name: "Microsoft Excel",
          sameAs: "https://en.wikipedia.org/wiki/Microsoft_Excel",
        },
        {
          "@type": "Thing",
          name: "Data Validation",
          sameAs: "https://en.wikipedia.org/wiki/Data_validation",
        },
      ],
      mentions: [
        {
          "@type": "Organization",
          name: "JP Morgan",
          sameAs: "https://en.wikipedia.org/wiki/JPMorgan_Chase",
        },
        {
          "@type": "Organization",
          name: "Kodak",
          sameAs: "https://en.wikipedia.org/wiki/Eastman_Kodak",
        },
      ],
      audience: {
        "@type": "Audience",
        audienceType: "Business Professionals",
        geographicArea: { "@type": "Country", name: "Australia" },
      },
    },
  ],
};

const SpreadsheetErrorBlogPost = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className={styles.page}>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <h1 className={styles.h1}>
                The Hidden Risk of{" "}
                <span className={styles.heroAccent}>
                  Spreadsheet Errors in Your Business
                </span>{" "}
              </h1>
              <p className={styles.heroLede}>
                Spreadsheets quietly run pricing, payroll, forecasts and
                compliance reporting in most businesses. Research suggests
                nearly nine in ten contain errors, and most are never found.
                Here’s why it happens, how to spot the warning signs, and the
                practical habits that stop small slips becoming expensive ones.
              </p>
              <div className={styles.authorRow}>
                <span className={styles.avatar} aria-hidden="true">
                  <Image src={dan} alt={AUTHOR_NAME} width={38} height={38} />
                </span>
                <div className={styles.authorText}>
                  <span className={styles.authorName}>By {AUTHOR_NAME}</span>
                  <span className={styles.authorMeta}>
                    Updated {formatDate(DATE_MODIFIED)} · {READING_TIME} min
                    read
                  </span>
                </div>
              </div>
            </div>
            <HeroSvg className={styles.heroSvg} />
          </div>
        </header>

        <section className={styles.glance} aria-label="At a glance">
          <ul className={styles.glanceGrid}>
            {GLANCE.map((g) => (
              <li key={g.value} className={styles.glanceCard}>
                <span className={styles.glanceValue}>{g.value}</span>
                <span className={styles.glanceLabel}>{g.label}</span>
                <span className={styles.glanceLine}>{g.line}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className={styles.layout}>
          <nav className={styles.toc} aria-label="Contents">
            <p className={styles.tocTitle}>In this article</p>
            <ul>
              {TOC.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <article className={styles.article}>
            {/* ───────── Introduction ───────── */}
            <section
              id="imprisoned"
              className={styles.section}
              aria-labelledby="imprisoned-heading"
            >
              <h2 id="imprisoned-heading" className={styles.h2}>
                Imprisoned by Your{" "}
                <span className={styles.accent}>Own Cells</span>
              </h2>
              <p>
                Spreadsheets are the backbone of decision-making in countless
                organisations, from calculating financial projections to
                tracking customer orders, inventory, payroll, and everything in
                between. But here’s a fun fact: research shows that{" "}
                <strong>88% of spreadsheets contain errors!</strong>
              </p>
              <p>
                These aren’t just minor typos or formatting issues. In many
                cases, they’re critical errors that can lead to poor decisions,
                regulatory breaches, or massive financial losses. Most
                businesses don’t even know these errors exist until it’s too
                late. Sometimes a tiny mistake can have major consequences. In
                2012, JP Morgan’s trading loss of roughly US$6 billion was
                widely reported to involve a spreadsheet copying error in a risk
                model.
              </p>

              <Callout Icon={IconWarn} label="A costly slip">
                A simple spreadsheet error at Kodak reportedly led to an $11
                million overstatement in severance… for just one lucky employee.
                It’s unclear what happened to the person who made the mistake,
                but their own severance was likely far less generous.
              </Callout>

              <p>
                So… why is this still happening in 2026? Mostly because
                spreadsheets are often developed without formal processes, and
                tested by their creators but never reviewed by anyone else.
                Crucially, they evolve over time with little documentation and
                band-aids covering old wounds. They become essential tools… yet
                sit quietly in the background, trusted without question.
              </p>
              <p>
                In this article, we’ll uncover just how dangerous spreadsheet
                errors can be, why they’re so common, and what your business can
                do to avoid the hidden risks before they spiral out of control.
                You’ll also get a quick way to rate your own files, a guide to
                picking the right tool, and a checklist to run before you share
                anything important.
              </p>
            </section>

            {/* ───────── Why errors are common ───────── */}
            <section
              id="why"
              className={styles.section}
              aria-labelledby="why-heading"
            >
              <h2 id="why-heading" className={styles.h2}>
                Why Spreadsheet Errors Are{" "}
                <span className={styles.accent}>So Common</span>
              </h2>
              <p>
                Spreadsheets are incredibly powerful tools, but they’re also
                incredibly easy to get wrong. One reason they’re so prone to
                error, to put it bluntly, is that the barrier to entry is low.
                Anyone with a computer can start building{" "}
                <a
                  href="/services/microsoft-excel/excel-formulas-and-custom-formulas"
                  className={styles.inlineLink}
                >
                  formulas
                </a>
                ,{" "}
                <a
                  href="/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions"
                  className={styles.inlineLink}
                >
                  pivot tables
                </a>
                , and{" "}
                <Link href="/services/dashboards" className={styles.inlineLink}>
                  dashboards
                </Link>
                . But without proper training, most people rely on guesswork,
                trial and error, or copying formulas from other spreadsheets
                without fully understanding them.
              </p>
              <p>
                Over time, as the spreadsheets evolve, what started as a simple
                calculation grows into a sprawling file with dozens of
                interlinked tabs, hidden assumptions, and outdated logic. Often,
                there’s no clear documentation, naming conventions, or guidance
                for future users. As a result, changes made months or years
                prior become a ticking time bomb. At this point, no one
                remembers how the spreadsheet even works.
              </p>
              <p>
                Unlike software development, spreadsheets rarely use version
                control or audit trails. There’s no way to see who changed what,
                when, or why. Mistakes can be made and overwritten without
                anyone noticing.
              </p>

              <figure className={styles.diagram}>
                <div className={styles.diagramScroll}>
                  <div className={styles.diagramInner}>
                    <ErrorTravelSvg />
                  </div>
                </div>
                <figcaption>
                  One small slip rarely stays small. Each stage of a workbook
                  passes the error on and makes it harder to spot.
                </figcaption>
              </figure>

              <p>
                Most commonly, many businesses rely on a single “Excel
                champion”: a team member who understands the system inside and
                out. But when that person leaves or changes roles, the
                organisation is left with a mysterious entity, a labyrinth of
                hidden functions and formulas of unknown origin and purpose.
                Even well-meaning replacements may struggle to untangle the
                logic. Starting all over again might be unrealistic, so it’s
                guesswork and band-aid time again.
              </p>
              <p>
                These conditions make even simple spreadsheets vulnerable to
                silent, compounding errors. Consider the case of the University
                of Toledo, where a single formula mistake led to a $2.4 million
                misprojection in tuition revenue. Or the Emerson Construction
                Company, which nearly lost a $37 million government contract due
                to overlooking a single cell in their bid estimate.
              </p>

              <h3 className={styles.h3}>Real-world cases at a glance</h3>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope="col">Case</th>
                      <th scope="col">What was reported</th>
                      <th scope="col">The lesson</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CASES.map(([name, what, lesson]) => (
                      <tr key={name}>
                        <th scope="row">{name}</th>
                        <td>{what}</td>
                        <td>{lesson}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className={styles.note}>
                These cases are as widely reported. We haven’t independently
                verified the figures, so treat them as illustrations of the risk
                rather than audited facts.
              </p>
            </section>

            {/* ───────── Signs ───────── */}
            <section
              id="signs"
              className={styles.section}
              aria-labelledby="signs-heading"
            >
              <h2 id="signs-heading" className={styles.h2}>
                Signs You Might Have a{" "}
                <span className={styles.accent}>Spreadsheet Problem</span>
              </h2>
              <p>
                Spreadsheet issues often go unnoticed until they trigger a
                crisis. But with a bit of awareness, it’s possible to spot the
                red flags early and take corrective action. Here are some
                telltale signs that your organisation might have a spreadsheet
                problem:
              </p>
              <ul className={styles.signsGrid}>
                {SIGNS.map(({ Icon, title, text }) => (
                  <li key={title} className={styles.signCard}>
                    <span className={styles.iconBadge}>
                      <Icon />
                    </span>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p>{text}</p>
                  </li>
                ))}
              </ul>
              <p>
                If any of these points sound familiar, it’s time for a thorough
                audit, or even a professional{" "}
                <a href="#help" className={styles.inlineLink}>
                  spreadsheet health check
                </a>
                .
              </p>
            </section>

            {/* ───────── Risk decision aid ───────── */}
            <section
              id="risk"
              className={styles.section}
              aria-labelledby="risk-heading"
            >
              <h2 id="risk-heading" className={styles.h2}>
                How Risky Is{" "}
                <span className={styles.accent}>Your Spreadsheet?</span>
              </h2>
              <p>
                Not every workbook needs the same level of care. A personal
                to-do list can stay messy. A pricing model that sets your quotes
                can’t. Answer three quick questions about a file to see how much
                attention it deserves.
              </p>
              <figure className={styles.diagram}>
                <div className={styles.diagramScroll}>
                  <div className={styles.diagramInnerNarrow}>
                    <RiskFlowSvg />
                  </div>
                </div>
                <figcaption>
                  Start at the top and follow the answers down. The highlighted
                  outcome is where most high-risk files end up.
                </figcaption>
              </figure>
              <p>
                If you land on “rebuild”, that doesn’t always mean starting from
                scratch. Often the logic can be kept and moved onto a stronger
                base. See how we did this for{" "}
                <Link
                  href="/case-studies/community-services-excel-consolidation-rebuild"
                  className={styles.inlineLink}
                >
                  a community services provider with a 400MB linked spreadsheet
                </Link>
                , and for{" "}
                <Link
                  href="/case-studies/food-manufacturer-excel-costing-workbook"
                  className={styles.inlineLink}
                >
                  a food manufacturer’s costing workbooks
                </Link>
                .
              </p>
            </section>

            {/* ───────── Prevention ───────── */}
            <section
              id="prevent"
              className={styles.section}
              aria-labelledby="prevent-heading"
            >
              <h2 id="prevent-heading" className={styles.h2}>
                How to Prevent Costly{" "}
                <span className={styles.accent}>Spreadsheet Errors</span>
              </h2>
              <p>
                So that’s the bad news. The good news is that spreadsheet errors
                are preventable, with the right structure, tools, and mindset.
                Here are some strategies to reduce your risk and improve
                accuracy in your next project:
              </p>
              <div className={styles.preventGrid}>
                {PREVENT.map(({ Icon, title, text, tip }) => (
                  <div key={title} className={styles.preventCard}>
                    <span className={styles.iconBadge}>
                      <Icon />
                    </span>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p>{text}</p>
                    <p className={styles.proTip}>
                      <strong>Pro tip:</strong> {tip}
                    </p>
                  </div>
                ))}
              </div>
              <p>
                For the automation step, our{" "}
                <Link
                  href="/services/microsoft-excel/data-manipulation"
                  className={styles.inlineLink}
                >
                  Excel data manipulation
                </Link>{" "}
                and{" "}
                <Link
                  href="/services/power-query"
                  className={styles.inlineLink}
                >
                  Power Query
                </Link>{" "}
                work is a good place to start.
              </p>
            </section>

            {/* ───────── Tools ───────── */}
            <section
              id="tools"
              className={styles.section}
              aria-labelledby="tools-heading"
            >
              <h2 id="tools-heading" className={styles.h2}>
                Choosing the <span className={styles.accent}>Right Tool</span>
              </h2>
              <p>
                Sometimes the best way to prevent a spreadsheet error is to stop
                asking a spreadsheet to do a job it wasn’t built for. Excel is
                brilliant for analysis and flexible modelling. It’s less suited
                to shared data entry, heavy reporting and long-lived processes.
              </p>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope="col">Your situation</th>
                      <th scope="col">Best fit</th>
                      <th scope="col">Why</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        One person, a small one-off calculation
                      </th>
                      <td>Excel as it is</td>
                      <td>
                        Fast and flexible. Add labelled inputs and a notes tab
                        and you’re done.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        The same report rebuilt every week or month
                      </th>
                      <td>
                        <Link
                          href="/services/power-query"
                          className={styles.inlineLink}
                        >
                          Power Query
                        </Link>
                      </td>
                      <td>
                        Repeats the same clean-up steps on refresh, with no
                        manual copy and paste.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Many files feeding one summary</th>
                      <td>
                        Power Query and{" "}
                        <Link
                          href="/services/power-pivot"
                          className={styles.inlineLink}
                        >
                          Power Pivot
                        </Link>
                      </td>
                      <td>
                        Combines the files into one model you can slice any way.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        Reports shared with managers or clients
                      </th>
                      <td>
                        <Link
                          href="/services/dashboards"
                          className={styles.inlineLink}
                        >
                          Dashboards
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/services/microsoft-power-platform/power-bi"
                          className={styles.inlineLink}
                        >
                          Power BI
                        </Link>
                      </td>
                      <td>One source of truth, with access you control.</td>
                    </tr>
                    <tr>
                      <th scope="row">Many people typing in data</th>
                      <td>
                        <Link
                          href="/services/database-development-and-solutions"
                          className={styles.inlineLink}
                        >
                          A database
                        </Link>{" "}
                        or{" "}
                        <Link
                          href="/services/microsoft-power-platform/power-apps"
                          className={styles.inlineLink}
                        >
                          Power Apps
                        </Link>
                      </td>
                      <td>Forms with validation, and several users at once.</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        A repeated process with many manual steps
                      </th>
                      <td>
                        <Link
                          href="/services/vba-macro-development"
                          className={styles.inlineLink}
                        >
                          VBA and macros
                        </Link>
                      </td>
                      <td>
                        Automates the steps, as long as the code is documented.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                If the file is staying in Excel, well-built formulas and pivot
                tables remove a lot of risk too. And if your team would rather
                build the skills in-house, we also run{" "}
                <Link
                  href="/microsoft-support-and-training-australia"
                  className={styles.inlineLink}
                >
                  Microsoft support and training
                </Link>{" "}
                across Australia.
              </p>
            </section>

            {/* ───────── Mistakes ───────── */}
            <section
              id="mistakes"
              className={styles.section}
              aria-labelledby="mistakes-heading"
            >
              <h2 id="mistakes-heading" className={styles.h2}>
                Common Mistakes That{" "}
                <span className={styles.accent}>Let Errors Through</span>
              </h2>
              <p>
                Most spreadsheet errors come from a handful of habits. Here are
                the five we see most often, and what to do instead.
              </p>
              <div className={styles.mistakeList}>
                {MISTAKES.map(({ Sketch, title, text, instead }) => (
                  <div key={title} className={styles.mistakeCard}>
                    <Sketch className={styles.sketch} />
                    <div className={styles.mistakeBody}>
                      <h3 className={styles.cardTitle}>{title}</h3>
                      <p>{text}</p>
                      <p className={styles.fix}>
                        <span className={styles.insteadPill}>Instead</span>
                        {instead}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ───────── Checklist ───────── */}
            <section
              id="checklist"
              className={styles.section}
              aria-labelledby="checklist-heading"
            >
              <h2 id="checklist-heading" className={styles.h2}>
                Before You Share a Spreadsheet:{" "}
                <span className={styles.accent}>A Quick Checklist</span>
              </h2>
              <p>
                Run through this list before a workbook goes to a client, a
                regulator or the board. It takes five minutes and catches most
                of the problems described above.
              </p>
              <ul className={styles.checklist}>
                {CHECKLIST.map((item) => (
                  <li key={item}>
                    <span className={styles.tick}>
                      <IconCheck />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ───────── Help ───────── */}
            <section
              id="help"
              className={styles.ctaBand}
              aria-labelledby="help-heading"
            >
              <h2 id="help-heading" className={styles.ctaHeading}>
                When to Get <span className={styles.ctaAccent}>Help</span>
              </h2>
              <p>
                If a spreadsheet drives pricing, payroll, forecasts or
                compliance reporting and you can’t explain exactly how it works,
                a second pair of eyes is cheap insurance. A professional
                spreadsheet health check typically reviews the structure,
                formulas, links, protection and documentation, then gives you a
                prioritised list of fixes. For files that have outgrown Excel,
                we can rebuild the logic with Power Query, Power BI or a proper
                database.
              </p>
              <div className={styles.ctaActions}>
                <a href="#contact" className="btn">
                  Talk to an Excel expert
                </a>
                <Link
                  href="/services/microsoft-excel/data-manipulation"
                  className={styles.ctaLink}
                >
                  See our Excel data manipulation services
                  <IconArrow />
                </Link>
              </div>
            </section>

            {/* ───────── FAQ ───────── */}
            <section
              id="faq"
              className={styles.section}
              aria-labelledby="faq-heading"
            >
              <h2 id="faq-heading" className={styles.h2}>
                Frequently Asked{" "}
                <span className={styles.accent}>Questions</span>
              </h2>
              <div className={styles.faqList}>
                {FAQS.map(({ q, a }) => (
                  <details key={q} className={styles.faqItem}>
                    <summary>{q}</summary>
                    <p>{a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* ───────── Conclusion ───────── */}
            <section
              id="conclusion"
              className={styles.section}
              aria-labelledby="conclusion-heading"
            >
              <h2 id="conclusion-heading" className={styles.h2}>
                <span className={styles.accent}>Conclusion</span>
              </h2>
              <p>
                Spreadsheet errors are far more common than most businesses
                realise, and the consequences can be severe. From minor
                reporting mistakes to multi-million-dollar losses, the risks are
                real, persistent, and often hidden in plain sight.
              </p>
              <p>
                But these risks are not inevitable. With the right practices,
                tools, and expert guidance, they can be dramatically reduced or
                even eliminated. If there is one thing to take from this article
                it is that{" "}
                <strong>prevention is ALWAYS better than the cure.</strong> A
                solid foundation in your spreadsheet design can really future
                proof your documents and streamline your business. Start small:
                pick the one spreadsheet your business would struggle to live
                without and run it through the checklist above.
              </p>

              <div className={styles.authorBox}>
                <span className={styles.avatarLarge} aria-hidden="true">
                  <Image src={dan} alt={AUTHOR_NAME} width={56} height={56} />
                </span>
                <div>
                  <h3 className={styles.authorBoxTitle}>About the Author</h3>
                  <p>
                    {AUTHOR_NAME} is a developer at Office Experts, a curious
                    mind in the world of programming, design and SEO. If you
                    have any questions, please feel free to{" "}
                    <a href="#contact" className={styles.inlineLink}>
                      get in contact via the form below
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>

            {/* ───────── Related reading ───────── */}
            <section
              id="related"
              className={styles.section}
              aria-labelledby="related-heading"
            >
              <h2 id="related-heading" className={styles.h2}>
                Related <span className={styles.accent}>Reading</span>
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
                    <span className={styles.relatedArrow}>
                      Read more
                      <IconArrow />
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
};

export default SpreadsheetErrorBlogPost;
