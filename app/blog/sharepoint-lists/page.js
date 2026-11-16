// /app/blog/sharepoint-lists/page.js
import Image from "next/image";
import Link from "next/link";

import Contact from "@/components/Contact";
import { generateOrganizationSchema } from "@/utils/schemaGenerators";
import marcello from "@/public/team/marcello.webp";
import styles from "@/styles/sharepointListsBlog.module.scss";

import HeroSvg from "./(svgs)/HeroSvg";
import RelationshipSvg from "./(svgs)/RelationshipSvg";
import DecisionSvg from "./(svgs)/DecisionSvg";
import ScreensSvg from "./(svgs)/ScreensSvg";
import {
  KeySketch,
  FilterSketch,
  RefreshSketch,
  OrphanSketch,
  VariableSketch,
} from "./(svgs)/MistakeSketches";
import {
  IconInfo,
  IconBulb,
  IconWarning,
  IconCheck,
  IconMinus,
  IconArrow,
  IconDatabase,
  IconLink,
  IconLayers,
} from "./(svgs)/Icons";

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with layout.js
const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/blog/sharepoint-lists`;
const PAGE_TITLE = "SharePoint Lists as a Relational Database | Office Experts";
const PAGE_DESCRIPTION =
  "Use SharePoint lists like a relational database in Power Apps. Link parent and child lists with an ID, filter related records and avoid common mistakes.";
const PAGE_HEADLINE =
  "Use SharePoint Lists Just Like a Relational Database in Power Apps";
const BREADCRUMB_NAME = "SharePoint Lists as a Relational Database";
const AUTHOR_NAME = "Marcello Brocchi";
const READING_TIME = "14 min";
const HERO_IMAGE_PATH = "/logo.png";
const HERO_IMAGE_ALT = "Office Experts logo";
const DATE_PUBLISHED = "2025-04-10T09:00:00+10:00";
const DATE_MODIFIED = "2026-11-16T09:00:00+11:00";

const VIDEO_ID = "Bea5aP-OpZg";
const VIDEO_THUMBNAIL = `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
const CHANNEL_URL = "https://www.youtube.com/@ChinoDoesStuff/featured";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Sydney",
  });

const TOC = [
  { id: "intro", label: "Introduction" },
  { id: "video", label: "Watch the video" },
  { id: "approach", label: "The approach" },
  { id: "why", label: "Why relate lists" },
  { id: "scope", label: "What works and what doesn’t" },
  { id: "choose", label: "Which method to use" },
  { id: "build", label: "Build it step by step" },
  { id: "advanced", label: "Advanced techniques" },
  { id: "examples", label: "Real-world uses" },
  { id: "limits", label: "Limitations" },
  { id: "practice", label: "Best practice" },
  { id: "mistakes", label: "Common mistakes" },
  { id: "help", label: "When to get help" },
  { id: "faq", label: "FAQs" },
  { id: "conclusion", label: "Conclusion" },
];

/* ───────────────────────── Code samples ───────────────────────── */

const createListsCode = `Issues list
  Title         Single line of text (default)
  Description   Multiple lines of text

Actions list
  Title         Single line of text (default)
  Description   Multiple lines of text
  IssueId       Number, 0 decimal places   <- the link back to the parent

SharePoint adds an ID column to every list automatically.
That ID is the primary key for each record.`;

const dataConnectionCode = `// In Power Apps: Data > Add data > SharePoint
// Connect, then enter your site address:
https://yourtenant.sharepoint.com/sites/yoursite

// Tick both lists: Issues and Actions`;

const filteringCode = `// Items property of the Actions gallery on the View Issue screen
Filter(
    Actions,
    IssueId = Gallery_Issues.Selected.ID
)

// Newest first: sort the filtered results by ID, highest to lowest
Sort(
    Filter(
        Actions,
        IssueId = Gallery_Issues.Selected.ID
    ),
    ID,
    SortOrder.Descending
)`;

const savingChildRecordsCode = `// OnSelect of the Save button on the New Action screen
Patch(
    Actions,
    Defaults(Actions),
    {
        Title: txtActionTitle.Text,
        Description: txtActionDescription.Text,
        IssueId: Gallery_Issues.Selected.ID  // this line creates the relationship
    }
);

// Then go back to the parent record
Navigate(ViewIssueScreen, ScreenTransition.Cover)`;

const cascadeCode = `// Delete the child Actions first, then the parent Issue
ForAll(
    Filter(Actions, IssueId = Gallery_Issues.Selected.ID),
    Remove(Actions, ThisRecord)
);
Remove(Issues, Gallery_Issues.Selected)`;

const variableCode = `// OnSelect of the icon inside the Issues gallery
Set(varIssue, ThisItem);
Navigate(ViewIssueScreen, ScreenTransition.Cover)

// Items of the Actions gallery
Sort(
    Filter(Actions, IssueId = varIssue.ID),
    ID,
    SortOrder.Descending
)

// OnSelect of the Save button
IfError(
    Patch(
        Actions,
        Defaults(Actions),
        {
            Title: txtActionTitle.Text,
            Description: txtActionDescription.Text,
            IssueId: varIssue.ID
        }
    ),
    Notify("The action could not be saved. Please try again.", NotificationType.Error),
    Reset(txtActionTitle);
    Reset(txtActionDescription);
    Navigate(ViewIssueScreen, ScreenTransition.Cover)
)`;

/* ───────────────────────── Page data ───────────────────────── */

const REASONS = [
  {
    Icon: IconDatabase,
    title: "No repeated data",
    text: "Each issue is stored once. Actions point to it by ID, so fixing an issue title in one place fixes it everywhere it appears.",
  },
  {
    Icon: IconLink,
    title: "Clean, focused screens",
    text: "A gallery shows only the actions for the issue you’re looking at, instead of a long list you have to scan.",
  },
  {
    Icon: IconLayers,
    title: "Room to grow",
    text: "Add Comments, Reviews or Attachments later with another list and another ID column. You don’t have to redesign what you’ve already built.",
  },
];

const WORKS = [
  "One-to-many relationships, such as one project with many tasks",
  "Filtering a gallery down to the related records with a delegable formula",
  "Parent and child screens in the same app",
  "Deeper chains, such as issues, actions and comments",
  "Many-to-many links, by adding a third “junction” list that holds two ID columns",
];

const DOESNT = [
  "Enforced referential integrity when you use a plain number column",
  "Automatic cascade deletes when you use a plain number column",
  "Server-side joins, so combining columns from two lists happens in the app and is limited by delegation",
  "Very large lists, unless the linking column is indexed and every filter is delegable",
];

const COMPARE_HEAD = [
  "",
  "Number column (this guide)",
  "Lookup column",
  "Dataverse or SQL Server",
];

const COMPARE_ROWS = [
  [
    "Setup effort",
    "Add one Number column",
    "Add a Lookup column that points at the parent list",
    "Build tables and relationships on a separate platform",
  ],
  [
    "Parent name visible in SharePoint views",
    "No, only the ID",
    "Yes, the lookup can show the parent’s title",
    "Yes, through relationships and views",
  ],
  [
    "Filtering in Power Apps",
    "Equality on a number, which is delegable",
    "Filter on the lookup’s ID, and test for delegation warnings",
    "Relationship queries, with delegation depending on the source",
  ],
  [
    "Integrity and cascade deletes",
    "None, so you handle them in the app",
    "SharePoint can restrict or cascade deletes on lookup columns, so check your settings",
    "Built in and configurable",
  ],
  [
    "Best for",
    "Simple apps, quick builds, small teams",
    "Apps where people also use the SharePoint list directly",
    "Large volumes, strict rules, complex reporting",
  ],
];

const REAL_WORLD = [
  { name: "Project management", parent: "Projects", child: "Tasks" },
  { name: "Customer service", parent: "Cases", child: "Notes" },
  { name: "Inventory management", parent: "Products", child: "Stock levels" },
  { name: "Event planning", parent: "Events", child: "Attendees" },
  { name: "HR processes", parent: "Employees", child: "Training records" },
];

const WALKTHROUGHS = [
  {
    title: "Keep the selected parent in a variable",
    steps: [
      "Run Set(varIssue, ThisItem) when the user opens an issue.",
      "Use varIssue.ID in your Filter and in your Patch.",
      "Every screen now reads one value, whichever screen it’s on.",
    ],
  },
  {
    title: "Check that every save worked",
    steps: [
      "Wrap Patch in IfError so a failure doesn’t go unnoticed.",
      "Show a Notify message that tells the user what to do next.",
      "Only navigate away once the save has succeeded.",
    ],
  },
  {
    title: "Index the linking column",
    steps: [
      "Open the Actions list settings in SharePoint.",
      "Choose Indexed columns, then create a new index.",
      "Pick IssueId. Filters on large lists have a much easier time.",
    ],
  },
  {
    title: "Test with realistic volumes",
    steps: [
      "Add a few hundred test rows before you hand the app over.",
      "Watch the formula bar for delegation warnings.",
      "Fix every warning before real data goes in.",
    ],
  },
];

const MISTAKES = [
  {
    Sketch: KeySketch,
    title: "Linking records by title instead of by ID",
    fix: "Store the parent’s ID in a Number column. Titles get edited, retyped and duplicated, and every change breaks the link. An ID never changes.",
  },
  {
    Sketch: FilterSketch,
    title: "Filtering in the app instead of in SharePoint",
    fix: "Use delegable operations such as equals on a number column, so SharePoint does the filtering and sends back only what the screen needs.",
  },
  {
    Sketch: RefreshSketch,
    title: "Forgetting to refresh after adding a column",
    fix: "Refresh the data source from the Data pane, or remove and re-add it, so Power Apps sees the new column before you reference it.",
  },
  {
    Sketch: OrphanSketch,
    title: "Deleting a parent and leaving orphans",
    fix: "Delete the child records first, then the parent. A number column won’t do this for you, so build it into the delete button.",
  },
  {
    Sketch: VariableSketch,
    title: "Reading a gallery’s selection from another screen",
    fix: "Copy the selected record into a variable once, then use the variable everywhere. It survives screen changes and is easier to debug.",
  },
];

const CHECKLIST = [
  "The linking column is a Number with 0 decimal places",
  "The linking column is required, so no orphan can be saved",
  "The linking column is indexed on lists that will grow",
  "Every Filter on a list is free of delegation warnings",
  "The selected parent is stored in a variable",
  "Patch is wrapped in IfError, with a clear message",
  "Deleting a parent also removes its children",
  "Someone other than the builder has tried to break it",
];

const FAQS = [
  {
    q: "Can SharePoint lists really replace a relational database?",
    a: (
      <>
        <p>
          For small to medium parent-child data, they can do the job well. You
          get one-to-many relationships, filtered galleries and connected
          screens. What you don’t get is enforced integrity, automatic cascades
          or server-side joins when you use a number column.
        </p>
        <p>
          If those matter to you, or your data is large, a platform built for
          relational data is the better home.
        </p>
      </>
    ),
  },
  {
    q: "Should I use a number column or a lookup column?",
    a: (
      <>
        <p>
          A number column is the simplest to build, easiest to read in a formula
          and delegable for equality filters. A lookup column helps when people
          also work in the SharePoint list directly, because it can show the
          parent’s title and SharePoint can apply relationship rules to it.
        </p>
        <p>
          If you’re unsure, start with the number column and move to a lookup
          only when you have a reason. Test delegation either way.
        </p>
      </>
    ),
  },
  {
    q: "Will filtering by IssueId work with thousands of records?",
    a: (
      <>
        <p>
          Filtering by equality on a number column is delegable, so SharePoint
          does the work and Power Apps isn’t limited to the first few hundred or
          thousand rows it would load locally. On lists that keep growing, index
          the IssueId column in SharePoint as well.
        </p>
        <p>
          Delegation rules and list thresholds can change, so check the warning
          messages in your own app and confirm the current limits in Microsoft’s
          documentation.
        </p>
      </>
    ),
  },
  {
    q: "How do I stop orphaned child records?",
    a: (
      <>
        <p>
          With a number column, SharePoint won’t stop you deleting a parent that
          still has children, so the app has to do it. Delete the child records
          first, then the parent, or hide the delete button until a parent has
          no children.
        </p>
        <p>
          With a lookup column, SharePoint can restrict or cascade deletes
          itself. Check the relationship settings on the column.
        </p>
      </>
    ),
  },
  {
    q: "When should I move to Dataverse or SQL Server?",
    a: (
      <>
        <p>
          Consider it when you need strict integrity, many relationships, very
          large volumes or complex reporting. Licensing is part of that
          decision. At the time of writing the SharePoint connector is a
          standard connector and Dataverse can need different licences, but
          licensing changes, so confirm it with Microsoft before you commit.
        </p>
        <p>
          If you’d like an outside opinion, our team can{" "}
          <Link
            href="/services/microsoft-power-platform/microsoft-power-apps"
            className={styles.inlineLink}
          >
            review your Power Apps design
          </Link>{" "}
          and recommend a platform.
        </p>
      </>
    ),
  },
];

/* ───────────────────────── Small helpers ───────────────────────── */

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
      <span className={styles.proTipLabel}>
        <IconBulb />
        Pro tip
      </span>
      <div className={styles.proTipText}>{children}</div>
    </div>
  );
}

function Code({ label, code }) {
  return (
    <figure className={styles.code}>
      <figcaption className={styles.codeLabel}>{label}</figcaption>
      <pre tabIndex={0}>
        <code>{code}</code>
      </pre>
    </figure>
  );
}

function Diagram({ children, caption, wide }) {
  return (
    <figure className={styles.diagram}>
      <div className={styles.diagramScroll}>
        <div
          className={
            wide
              ? `${styles.diagramInner} ${styles.diagramInnerWide}`
              : styles.diagramInner
          }
        >
          {children}
        </div>
      </div>
      <figcaption className={styles.figCaption}>{caption}</figcaption>
    </figure>
  );
}

/* ───────────────────────── Page ───────────────────────── */

const SharePointListsBlogPost = () => {
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
        isPartOf: { "@id": `${SITE_URL}#website` },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        mainEntity: { "@id": `${PAGE_URL}#article` },
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
        description: PAGE_DESCRIPTION,
        image: `${SITE_URL}${HERO_IMAGE_PATH}`,
        author: { "@type": "Person", name: AUTHOR_NAME },
        publisher: { "@id": `${SITE_URL}#organization` },
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
        inLanguage: "en-AU",
        isPartOf: { "@id": `${PAGE_URL}#webpage` },
        mainEntityOfPage: { "@id": `${PAGE_URL}#webpage` },
        video: {
          "@type": "VideoObject",
          name: PAGE_HEADLINE,
          description:
            "In this tutorial, Marcello gives you a quick introduction to using SharePoint lists as a data source in Power Apps and how they can work as a relational database.",
          thumbnailUrl: VIDEO_THUMBNAIL,
          uploadDate: DATE_PUBLISHED,
          duration: "PT33M38S",
          embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
          contentUrl: `https://www.youtube.com/watch?v=${VIDEO_ID}`,
        },
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
        {/* ── Hero ── */}
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <h1 className={styles.title}>
                Use SharePoint Lists Just Like a{" "}
                <span className={styles.accent}>
                  Relational Database in Power Apps
                </span>
              </h1>
              <p className={styles.lede}>
                Link SharePoint lists with a single ID column, show only the
                related records in Power Apps and build parent-child apps
                without needing Dataverse or SQL Server.
              </p>
              <div className={styles.authorRow}>
                <span className={styles.avatar} aria-hidden="true">
                  <Image
                    src={marcello}
                    alt={AUTHOR_NAME}
                    width={38}
                    height={38}
                  />
                </span>
                <span className={styles.authorMeta}>
                  <span className={styles.authorName}>By {AUTHOR_NAME}</span>
                  <span className={styles.metaLine}>
                    Updated{" "}
                    <time dateTime={DATE_MODIFIED}>
                      {formatDate(DATE_MODIFIED)}
                    </time>{" "}
                    · {READING_TIME} read
                  </span>
                </span>
              </div>
            </div>
            <div className={styles.heroArt}>
              <HeroSvg />
            </div>
          </div>
        </header>

        {/* ── At a glance ── */}
        <div className={styles.glanceWrap}>
          <div className={styles.glance}>
            <div className={styles.glanceCard}>
              <span className={styles.glanceValue}>2 lists</span>
              <span className={styles.glanceLabel}>Parent and child</span>
              <span className={styles.glanceText}>
                Issues and Actions, built from scratch.
              </span>
            </div>
            <div className={styles.glanceCard}>
              <span className={styles.glanceValue}>1 column</span>
              <span className={styles.glanceLabel}>Does the linking</span>
              <span className={styles.glanceText}>
                A number column called IssueId is the only link you add.
              </span>
            </div>
            <div className={styles.glanceCard}>
              <span className={styles.glanceValue}>34 min</span>
              <span className={styles.glanceLabel}>Video walkthrough</span>
              <span className={styles.glanceText}>
                The same build, shown on screen from start to finish.
              </span>
            </div>
          </div>
        </div>

        {/* ── Contents + article ── */}
        <div className={styles.layout}>
          <nav className={styles.toc} aria-label="Contents">
            <span className={styles.tocTitle}>On this page</span>
            <ul className={styles.tocList}>
              {TOC.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <article className={styles.article}>
            {/* Introduction */}
            <section id="intro" className={styles.section}>
              <h2>
                <span className={styles.accent}>Introduction</span>
              </h2>
              <p>
                While SharePoint lists aren’t technically relational databases,
                with the right approach you can implement parent-child
                relationships and create connected data structures that work
                remarkably well in Power Apps. This capability lets you build
                more sophisticated apps without needing SQL Server or Dataverse
                licences.
              </p>
              <p>
                In this guide, I’ll show you how to structure, connect and
                manage related data across SharePoint lists. We’ll build a
                simple but practical example: an issue tracking system where
                each issue can have multiple related actions.
              </p>
              <p>
                The same pattern sits behind many of the{" "}
                <Link
                  href="/services/microsoft-power-platform/microsoft-power-apps"
                  className={styles.inlineLink}
                >
                  Power Apps solutions
                </Link>{" "}
                we build for clients at Office Experts: a handful of SharePoint
                lists, one number column that links them and a Power Apps front
                end that makes the data easy to work with. If you’ve ever ended
                up with columns called Action1, Action2 and Action3 in a single
                list, this is the cleaner alternative.
              </p>
              <Callout Icon={IconInfo} label="What you’ll learn">
                How to link two lists with an ID, show only related records in a
                gallery, save new child records, handle deletes and decide when
                this approach stops being the right one.
              </Callout>
            </section>

            {/* Video */}
            <section id="video" className={styles.section}>
              <h2>
                Prefer to{" "}
                <span className={styles.accent}>watch the video?</span>
              </h2>
              <p>
                Head over to my YouTube channel{" "}
                <a
                  href={CHANNEL_URL}
                  className={styles.inlineLink}
                  rel="nofollow noreferrer noopener"
                >
                  Chino Does Stuff
                </a>{" "}
                to watch the video tutorial. There you’ll find a variety of
                videos with loads of tricks and tips on the entire Power
                Platform suite.
              </p>
              <div className={styles.videoFrame}>
                <iframe
                  className={styles.videoEmbed}
                  src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                  title="Use SharePoint Lists just like a Relational Database in Power Apps"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <p>
                The video runs for about 34 minutes. The written steps below
                follow the same order, so you can pause at any point and jump to
                the matching part of this article.
              </p>
            </section>

            {/* Approach */}
            <section id="approach" className={styles.section}>
              <h2>
                Understanding{" "}
                <span className={styles.accent}>the approach</span>
              </h2>
              <p>
                To create relationships between SharePoint lists, we’ll use a
                classic database technique: adding a foreign key column that
                references the primary key of another table. In SharePoint
                terms:
              </p>
              <ul>
                <li>
                  The automatically generated ID column in SharePoint lists
                  serves as our primary key
                </li>
                <li>
                  We’ll add a custom number column in the “child” list to store
                  the ID of the related “parent” record
                </li>
                <li>
                  In Power Apps, we’ll use this relationship to filter and
                  create related records
                </li>
              </ul>
              <p>
                This creates a one-to-many relationship, where one record in the
                parent list can relate to many records in the child list.
              </p>
              <Diagram caption="The IssueId column in the child list stores the ID of one parent record.">
                <RelationshipSvg />
              </Diagram>
              <p>
                Think of the IssueId column as a sticky note on each action that
                says “I belong to issue 1”. Nothing in SharePoint enforces it,
                so the app (and you) must keep it honest. That’s what the rest
                of this guide covers.
              </p>
            </section>

            {/* Why */}
            <section id="why" className={styles.section}>
              <h2>
                Why relate{" "}
                <span className={styles.accent}>SharePoint lists at all?</span>
              </h2>
              <p>
                Without a relationship, the usual workaround is to cram
                everything into one list. That works for a week, then falls
                apart as the repeated columns pile up and nobody trusts the
                data. A second list with a clear link solves it.
              </p>
              <div className={styles.reasonGrid}>
                {REASONS.map(({ Icon, title, text }) => (
                  <div key={title} className={styles.reasonCard}>
                    <span className={styles.reasonIcon}>
                      <Icon />
                    </span>
                    <h3 className={styles.reasonTitle}>{title}</h3>
                    <p className={styles.reasonText}>{text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Scope */}
            <section id="scope" className={styles.section}>
              <h2>
                What works{" "}
                <span className={styles.accent}>and what doesn’t</span>
              </h2>
              <p>
                It helps to be honest about where this approach shines and where
                it needs help from you.
              </p>
              <div className={styles.splitGrid}>
                <div className={styles.splitPanel}>
                  <h3 className={styles.splitTitle}>What works well</h3>
                  <ul className={styles.splitList}>
                    {WORKS.map((item) => (
                      <li key={item}>
                        <span className={styles.splitIconYes}>
                          <IconCheck />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`${styles.splitPanel} ${styles.splitPanelMuted}`}
                >
                  <h3 className={styles.splitTitle}>What you don’t get</h3>
                  <ul className={styles.splitList}>
                    {DOESNT.map((item) => (
                      <li key={item}>
                        <span className={styles.splitIconNo}>
                          <IconMinus />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Choose */}
            <section id="choose" className={styles.section}>
              <h2>
                Which relationship method{" "}
                <span className={styles.accent}>should you use?</span>
              </h2>
              <p>
                A number column that stores the parent’s ID is the method this
                guide builds, but it isn’t your only option. SharePoint also
                offers lookup columns, and when your needs outgrow lists you can
                move to a database platform. Answer two questions to see where
                you land.
              </p>
              <Diagram caption="Two questions pick the method. Most small apps end up at the number column.">
                <DecisionSvg />
              </Diagram>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <caption className={styles.srOnly}>
                    Comparison of three ways to relate data
                  </caption>
                  <thead>
                    <tr>
                      {COMPARE_HEAD.map((head, i) => (
                        <th key={i} scope="col">
                          {head || "Compare"}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARE_ROWS.map((row) => (
                      <tr key={row[0]}>
                        <th scope="row">{row[0]}</th>
                        {row.slice(1).map((cell) => (
                          <td key={cell}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Callout Icon={IconBulb} label="Not sure? Start simple">
                The number column is the easiest method to build and to debug.
                Choose a lookup column when people will also live in the
                SharePoint list, and plan for a database platform when you need
                strict rules or large volumes. Confirm lookup behaviour in a
                test list before relying on it.
              </Callout>
            </section>

            {/* Build */}
            <section id="build" className={styles.section}>
              <h2>
                Build it <span className={styles.accent}>step by step</span>
              </h2>
              <p>
                Follow the five steps below. Each one matches a section of the
                video, and every formula can be pasted into your own app once
                you’ve renamed the controls.
              </p>
              <ol className={styles.steps}>
                <li className={styles.step}>
                  <span className={styles.stepBadge}>1</span>
                  <h3 className={styles.stepTitle}>
                    Set up the SharePoint lists
                  </h3>
                  <p>
                    We’ll start by creating two SharePoint lists to store our
                    data:
                  </p>
                  <ol>
                    <li>
                      <strong>Issues list</strong>: the parent list that stores
                      the main issues
                    </li>
                    <li>
                      <strong>Actions list</strong>: the child list that stores
                      actions related to each issue
                    </li>
                  </ol>
                  <p>Here’s how to structure each list:</p>
                  <Code
                    label="SharePoint list columns"
                    code={createListsCode}
                  />
                  <p>
                    The key to our implementation is the{" "}
                    <strong>IssueId</strong> column in the Actions list. This
                    number column stores the ID of the related issue, creating
                    our parent-child relationship.
                  </p>
                  <h4 className={styles.stepSub}>
                    Important notes about SharePoint IDs
                  </h4>
                  <p>
                    SharePoint automatically creates an ID column for every
                    list:
                  </p>
                  <ul>
                    <li>
                      IDs are unique within each list and increment
                      automatically
                    </li>
                    <li>
                      The ID column isn’t shown in the default view, but you can
                      add it
                    </li>
                    <li>
                      IDs aren’t reused, even after items are deleted (similar
                      to database identity columns)
                    </li>
                    <li>
                      IDs are always of type Number, making them efficient for
                      filtering and relationships
                    </li>
                  </ul>
                  <ProTip>
                    Call the column IssueId rather than Issue or Parent. A name
                    that says what it holds makes formulas easy to read months
                    later. Set decimal places to 0 and make the column required,
                    so an action can’t be saved without a parent.
                  </ProTip>
                </li>

                <li className={styles.step}>
                  <span className={styles.stepBadge}>2</span>
                  <h3 className={styles.stepTitle}>
                    Connect to SharePoint in Power Apps
                  </h3>
                  <p>
                    Now let’s create a Power App and connect it to our
                    SharePoint lists:
                  </p>
                  <Code label="Add the data source" code={dataConnectionCode} />
                  <p>
                    After connecting, you’ll have access to both the Issues and
                    Actions lists within your app, including all their columns.
                  </p>
                  <Callout Icon={IconWarning} label="Added a column later?">
                    Power Apps keeps its own picture of each list’s columns. If
                    you add a column in SharePoint after connecting, refresh the
                    data source from the Data pane, or remove and re-add it. The
                    Refresh function reloads rows, but it may not pick up a new
                    column.
                  </Callout>
                </li>

                <li className={styles.step}>
                  <span className={styles.stepBadge}>3</span>
                  <h3 className={styles.stepTitle}>
                    Build the basic app structure
                  </h3>
                  <p>Our app needs several screens:</p>
                  <ol>
                    <li>
                      <strong>Main screen</strong>: shows a gallery of issues
                    </li>
                    <li>
                      <strong>New Issue screen</strong>: a form to create a new
                      issue
                    </li>
                    <li>
                      <strong>View Issue screen</strong>: shows issue details
                      and related actions
                    </li>
                    <li>
                      <strong>New Action screen</strong>: a form to create a new
                      action related to the current issue
                    </li>
                  </ol>
                  <p>
                    For the main screen, create a gallery connected to the
                    Issues list. Add a plus button to navigate to the New Issue
                    screen, and an edit icon in each item to navigate to the
                    View Issue screen.
                  </p>
                  <h4 className={styles.stepSub}>Main screen example</h4>
                  <p>On your main screen:</p>
                  <ol>
                    <li>
                      Add a gallery connected to the Issues list
                      (Gallery_Issues)
                    </li>
                    <li>Display the Title and ID in each gallery item</li>
                    <li>Add a button that navigates to the New Issue screen</li>
                    <li>
                      Add an icon in each gallery item that navigates to the
                      View Issue screen and selects the current item
                    </li>
                  </ol>
                  <Diagram
                    wide
                    caption="How the four screens connect. Saving a new action returns you to the issue you came from."
                  >
                    <ScreensSvg />
                  </Diagram>
                </li>

                <li className={styles.step}>
                  <span className={styles.stepBadge}>4</span>
                  <h3 className={styles.stepTitle}>
                    Create the Issue detail screen
                  </h3>
                  <p>
                    The Issue detail screen is where the parent-child
                    relationship becomes visible. This screen should show:
                  </p>
                  <ol>
                    <li>The details of the selected issue</li>
                    <li>A gallery of related actions</li>
                    <li>A button to add a new action for this issue</li>
                  </ol>
                  <p>
                    The key is filtering the Actions gallery to show only
                    actions related to the current issue:
                  </p>
                  <Code
                    label="Power Fx: filter the related records"
                    code={filteringCode}
                  />
                  <p>
                    This filter checks the IssueId column in the Actions list
                    and only shows records where it matches the ID of the
                    currently selected issue.
                  </p>
                  <ProTip>
                    Sort by ID rather than adding a date column just for
                    ordering. IDs only ever go up, so highest to lowest gives
                    you newest first without extra work.
                  </ProTip>
                </li>

                <li className={styles.step}>
                  <span className={styles.stepBadge}>5</span>
                  <h3 className={styles.stepTitle}>Create related records</h3>
                  <p>
                    When creating a new action, we need to save both the action
                    details and its relationship to the parent issue:
                  </p>
                  <Code
                    label="Power Fx: save a child record"
                    code={savingChildRecordsCode}
                  />
                  <p>
                    This Patch function saves a new record to the Actions list
                    and sets the IssueId field to the ID of the currently
                    selected issue, creating the relationship between them.
                  </p>
                  <ProTip>
                    Reset the form controls after saving, for example
                    Reset(txtActionTitle), so the next action starts with a
                    blank form.
                  </ProTip>
                </li>
              </ol>
            </section>

            {/* Advanced */}
            <section id="advanced" className={styles.section}>
              <h2>
                Advanced <span className={styles.accent}>techniques</span>
              </h2>

              <h3>Delegation considerations</h3>
              <p>
                When working with SharePoint lists in Power Apps, delegation is
                an important concept to understand. Delegation determines
                whether operations happen at the data source or in the app.
              </p>
              <p>
                The good news is that filtering by ID and IssueId (both number
                fields) is delegable to SharePoint, meaning SharePoint handles
                the filtering server-side. That helps you get correct results
                even with large lists.
              </p>
              <p>For best performance:</p>
              <ul>
                <li>
                  Always filter using delegable operations when possible (=,
                  &lt;, &gt;)
                </li>
                <li>
                  Use number fields for relationships, as they’re delegable for
                  these operators
                </li>
                <li>
                  Consider using the Sort function to organise your data
                  (sorting on a column such as ID is also delegable)
                </li>
              </ul>
              <Callout Icon={IconInfo} label="Check it in your own app">
                Delegation support can differ between data sources and change
                between releases. Treat any delegation warning in the formula
                bar as a to-do item, and re-test after big Power Apps updates.
              </Callout>

              <h3>Creating one-to-many-to-many relationships</h3>
              <p>
                You can extend this pattern to create deeper relationships. For
                example, you could add a Comments list related to Actions, where
                each action can have multiple comments.
              </p>
              <p>To implement this, you would:</p>
              <ol>
                <li>Create a Comments list with an ActionId column</li>
                <li>
                  Filter the Comments gallery based on the selected action
                </li>
                <li>
                  When saving a comment, set its ActionId to the selected
                  action’s ID
                </li>
              </ol>
              <p>
                Each extra level repeats the same three moves, so once you’ve
                built two levels the third takes minutes.
              </p>

              <h3>Cascading deletes</h3>
              <p>
                With a plain number column, SharePoint doesn’t support automatic
                cascading deletes. If you delete a parent record, the related
                child records remain orphaned.
              </p>
              <p>
                If cascading deletes are important for your app, you’ll need to
                implement them manually:
              </p>
              <ol>
                <li>
                  Before deleting a parent record, find all related child
                  records
                </li>
                <li>
                  Delete the child records using Remove() or ForAll() with
                  Remove()
                </li>
                <li>Then delete the parent record</li>
              </ol>
              <Code
                label="Power Fx: delete children, then the parent"
                code={cascadeCode}
              />
              <Callout
                Icon={IconWarning}
                label="Lookup columns behave differently"
              >
                If you use a lookup column instead of a number column,
                SharePoint can restrict or cascade deletes for you through the
                column’s relationship settings. Confirm the options available on
                your site before you rely on them, and test with a copy of your
                data first.
              </Callout>
            </section>

            {/* Examples */}
            <section id="examples" className={styles.section}>
              <h2>
                Real-world <span className={styles.accent}>application</span>
              </h2>
              <p>This pattern can be applied to many real-world scenarios:</p>
              <ul className={styles.pairList}>
                {REAL_WORLD.map((item) => (
                  <li key={item.name} className={styles.pairItem}>
                    <strong className={styles.pairName}>{item.name}</strong>
                    <span className={styles.pairChips}>
                      <span className={styles.pairChip}>{item.parent}</span>
                      <span className={styles.pairArrow}>
                        <IconArrow />
                      </span>
                      <span
                        className={`${styles.pairChip} ${styles.pairChipChild}`}
                      >
                        {item.child}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              <p>
                The pattern remains the same: create a column in the child list
                that references the ID of the parent record, then use filtering
                in Power Apps to show only the related records. We used exactly
                this structure in our{" "}
                <Link
                  href="/case-studies/building-consultants-inspection-crm"
                  className={styles.inlineLink}
                >
                  building inspection CRM case study
                </Link>
                , where enquiries, quotes and follow-ups all sit in connected
                SharePoint lists.
              </p>
            </section>

            {/* Limits */}
            <section id="limits" className={styles.section}>
              <h2>
                Limitations{" "}
                <span className={styles.accent}>and considerations</span>
              </h2>
              <p>
                While this approach works well for many scenarios, it does have
                some limitations compared to true relational databases:
              </p>
              <ul>
                <li>
                  No referential integrity with a number column (orphaned
                  records are possible)
                </li>
                <li>
                  No cascading operations (they must be implemented manually)
                </li>
                <li>
                  No joins (relationships must be managed through filtering)
                </li>
                <li>
                  Performance can degrade with very large lists (more than about
                  5,000 items), unless the linking column is indexed
                </li>
                <li>
                  Complex queries across multiple relationships may hit
                  delegation limits
                </li>
              </ul>
              <p>
                For complex enterprise applications with many relationships and
                large data volumes, you might want to consider Dataverse or a
                SQL Server database instead. Our guide on{" "}
                <Link
                  href="/blog/power-apps-with-sql-database"
                  className={styles.inlineLink}
                >
                  using Power Apps with a SQL database
                </Link>{" "}
                covers that route.
              </p>
            </section>

            {/* Best practice */}
            <section id="practice" className={styles.section}>
              <h2>
                Best practice{" "}
                <span className={styles.accent}>for related lists</span>
              </h2>
              <p>
                These four habits turn a working demo into an app you can leave
                running with real users.
              </p>
              <div className={styles.walkGrid}>
                {WALKTHROUGHS.map((card) => (
                  <div key={card.title} className={styles.walkCard}>
                    <h3 className={styles.walkTitle}>{card.title}</h3>
                    <ol className={styles.miniSteps}>
                      {card.steps.map((step, i) => (
                        <li key={step}>
                          <span className={styles.miniNum}>{i + 1}</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
              <p>
                Here’s how the first two habits look together. The icon stores
                the selected issue in a variable, the gallery and the save
                button both read it, and the save is wrapped in an error check:
              </p>
              <Code
                label="Power Fx: variable plus error handling"
                code={variableCode}
              />
            </section>

            {/* Mistakes */}
            <section id="mistakes" className={styles.section}>
              <h2>
                Common mistakes <span className={styles.accent}>to avoid</span>
              </h2>
              <p>
                These five come up again and again when we’re asked to repair a
                Power Apps and SharePoint build.
              </p>
              <ol className={styles.mistakeList}>
                {MISTAKES.map(({ Sketch, title, fix }, i) => (
                  <li key={title} className={styles.mistakeCard}>
                    <div className={styles.mistakeHead}>
                      <span className={styles.mistakeNum} aria-hidden="true">
                        {i + 1}
                      </span>
                      <h3 className={styles.mistakeTitle}>{title}</h3>
                    </div>
                    <div className={styles.mistakeSketch}>
                      <Sketch />
                    </div>
                    <p className={styles.mistakeFix}>
                      <span className={styles.insteadPill}>Instead</span>
                      {fix}
                    </p>
                  </li>
                ))}
              </ol>
              <h3>Before you publish the app</h3>
              <ul className={styles.checklist}>
                {CHECKLIST.map((item) => (
                  <li key={item}>
                    <span className={styles.checkIcon}>
                      <IconCheck />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Help */}
            <section id="help" className={styles.section}>
              <div className={styles.ctaBand}>
                <div className={styles.ctaCopy}>
                  <h2 className={styles.ctaTitle}>
                    Need a hand with{" "}
                    <span className={styles.accent}>connected Power Apps?</span>
                  </h2>
                  <p className={styles.ctaText}>
                    Our developers build and repair Power Apps on SharePoint
                    every week. Tell us what you’re trying to build and we’ll
                    tell you honestly whether lists are enough. We also support{" "}
                    <Link
                      href="/services/microsoft-office-365"
                      className={styles.inlineLink}
                    >
                      Microsoft 365 and SharePoint
                    </Link>{" "}
                    more broadly.
                  </p>
                </div>
                <a href="#contact" className="btn">
                  Talk to our team
                </a>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className={styles.section}>
              <h2>
                Frequently asked{" "}
                <span className={styles.accent}>questions</span>
              </h2>
              <div className={styles.faq}>
                {FAQS.map((item) => (
                  <details key={item.q} className={styles.faqItem}>
                    <summary>{item.q}</summary>
                    <div className={styles.faqAnswer}>{item.a}</div>
                  </details>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className={styles.section}>
              <h2>
                <span className={styles.accent}>Conclusion</span>
              </h2>
              <p>
                SharePoint lists can indeed be used effectively as a relational
                database for Power Apps. By creating linked lists with
                appropriate columns to establish relationships, you can build
                sophisticated multi-table applications without needing
                additional licences or more complex database platforms.
              </p>
              <p>
                This approach is perfect for departmental apps, team tools and
                solutions where simplicity and accessibility are priorities. The
                ability to create, view and manage related records gives your
                users a cohesive experience while leveraging the familiar and
                accessible SharePoint environment.
              </p>
              <p>
                With these techniques, you can build powerful, data-driven
                applications that feel like they’re connected to a full
                relational database, all while staying within the SharePoint and
                Power Apps ecosystem.
              </p>
              <p>
                If you’d like to see more Power Apps development tips and
                techniques, please head over to the{" "}
                <a
                  href={CHANNEL_URL}
                  className={styles.inlineLink}
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
                <div>
                  <span className={styles.authorBoxLabel}>
                    About the author
                  </span>
                  <p className={styles.authorBio}>
                    {AUTHOR_NAME} is a lead developer at Office Experts Group,
                    an Australian Microsoft consultancy established in 2000. He
                    specialises in computer science and Power Platform
                    integration, and is the founder of the YouTube channel{" "}
                    <a
                      href={CHANNEL_URL}
                      className={styles.inlineLink}
                      rel="nofollow noreferrer noopener"
                    >
                      Chino Does Stuff
                    </a>
                    . If you have any questions, please get in contact using the
                    form below.
                  </p>
                </div>
              </div>
            </section>

            {/* Related */}
            <section id="related" className={styles.section}>
              <h2>
                Related <span className={styles.accent}>reading</span>
              </h2>
              <div className={styles.related}>
                <Link
                  href="/blog/power-apps-with-sql-database"
                  className={styles.relatedCard}
                >
                  <span className={styles.relatedLabel}>Blog</span>
                  <span className={styles.relatedTitle}>
                    Power Apps with a SQL database
                  </span>
                  <span className={styles.relatedMore}>
                    Read the guide <IconArrow />
                  </span>
                </Link>
                <Link
                  href="/blog/file-attachments-in-power-apps"
                  className={styles.relatedCard}
                >
                  <span className={styles.relatedLabel}>Blog</span>
                  <span className={styles.relatedTitle}>
                    File attachments in Power Apps
                  </span>
                  <span className={styles.relatedMore}>
                    Read the guide <IconArrow />
                  </span>
                </Link>
                <Link
                  href="/case-studies/building-consultants-inspection-crm"
                  className={styles.relatedCard}
                >
                  <span className={styles.relatedLabel}>Case study</span>
                  <span className={styles.relatedTitle}>
                    Building inspection CRM on SharePoint
                  </span>
                  <span className={styles.relatedMore}>
                    See the project <IconArrow />
                  </span>
                </Link>
              </div>
            </section>
          </article>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default SharePointListsBlogPost;
