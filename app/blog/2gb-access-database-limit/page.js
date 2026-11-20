// /app/blog/2gb-access-database-limit/page.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

import Contact from "@/components/Contact";
import { generateOrganizationSchema } from "@/utils/schemaGenerators";
import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";
import scott from "@/public/team/scott.webp";
import styles from "@/styles/twoGbAccessLimitBlog.module.scss";

import HeroSvg from "./(svgs)/HeroSvg";
import AnatomySvg from "./(svgs)/AnatomySvg";
import GaugeSvg from "./(svgs)/GaugeSvg";
import DecisionSvg from "./(svgs)/DecisionSvg";
import GrowthSvg from "./(svgs)/GrowthSvg";
import {
  BackupSketch,
  CompactSketch,
  EmbedSketch,
  WaitSketch,
  TestSketch,
} from "./(svgs)/MistakeSketches";
import {
  IconDatabase,
  IconPaperclip,
  IconTrash,
  IconWrench,
  IconAlert,
  IconClock,
  IconShield,
  IconArrowRight,
  IconCheck,
  IconBulb,
  IconQuote,
  IconCloud,
  IconServer,
  IconRefresh,
  IconGauge,
  IconArchive,
  IconLayers,
  IconHammer,
  IconPlus,
  IconLock,
  IconTrendUp,
  IconCompass,
} from "./(svgs)/Icons";

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with layout.js.
const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/blog/2gb-access-database-limit`;
const PAGE_TITLE = "2GB Access Database Limit: Survival Guide | Office Experts";
const PAGE_DESCRIPTION =
  "Access database hit the 2GB limit? Learn the warning signs, emergency fixes that buy time, and how to migrate to SQL Server or Azure SQL for good.";
const PAGE_HEADLINE =
  "Your Access Database Just Hit 2GB... Now What? A Survival Guide";
const BREADCRUMB_NAME = "2GB Access Database Limit Guide";
const AUTHOR_NAME = "Scott Robinson";
const WORD_COUNT = 3710;
const READING_TIME = "16 min read";
const READING_TIME_ISO = "PT16M";
const HERO_IMAGE_PATH = "/blog/2gb/stop.webp";
const HERO_IMAGE_ALT = "Stop sign showing the Access 2GB database limit";
const DATE_PUBLISHED = "2025-12-02T09:00:00+10:00";
const DATE_MODIFIED = "2026-11-20T09:00:00+11:00";

const getImageSource = (post) => {
  if (post.youtubeId) {
    return `https://img.youtube.com/vi/${post.youtubeId}/maxresdefault.jpg`;
  } else if (post.imagePath) {
    return post.imagePath;
  }
  // Fallback image if neither youtubeId nor imagePath is available
  return "/blog/fallback.webp";
};

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Sydney",
  });

const TOC = [
  { id: "introduction", label: "Imprisoned by your database" },
  { id: "why", label: "Why it happens" },
  { id: "warning-signs", label: "Warning signs" },
  { id: "triage", label: "Immediate triage" },
  { id: "options", label: "Choose your path" },
  { id: "migration", label: "Migration roadmap" },
  { id: "prevention", label: "Best practices" },
  { id: "mistakes", label: "Common mistakes" },
  { id: "help", label: "When to get help" },
  { id: "faq", label: "FAQs" },
  { id: "conclusion", label: "Conclusion" },
  { id: "related", label: "Related reading" },
];

const GLANCE = [
  {
    value: "2GB",
    label: "Hard ceiling",
    text: "Per Access file, with no setting to raise it.",
  },
  {
    value: "1.5GB",
    label: "Start planning",
    text: "The warning signs usually show well before the wall.",
  },
  {
    value: "2 to 4 weeks",
    label: "Simple migration",
    text: "Complex databases with heavy VBA can take 6 to 12 weeks.",
  },
];

const REASONS = [
  {
    Icon: IconDatabase,
    title: "Data accumulation over time",
    text: "Transaction logs that never get cleared, historical data that keeps building and years of records without archiving. None of it is wrong. It just adds up.",
  },
  {
    Icon: IconPaperclip,
    title: "Attachments and OLE objects",
    text: "Images and PDFs stored inside the database are the fastest way to fill a file. One scanned document per record multiplies quickly.",
  },
  {
    Icon: IconTrash,
    title: "Hidden bloat",
    text: "Deleted records that don’t actually free up space, temporary objects that stick around, query results that get cached and form and report design changes that add up over time.",
  },
  {
    Icon: IconWrench,
    title: "The “Compact and Repair” misconception",
    text: "Many businesses assume that regularly running Compact and Repair prevents the 2GB issue. Compacting reclaims bloat and helps performance, but it doesn’t solve the core issue: your live data is simply growing too large for Access to handle.",
  },
];

const SIGNS = [
  {
    Icon: IconGauge,
    title: "Database file size creeping past 1.5GB",
    text: "You’re in the danger zone.",
  },
  {
    Icon: IconClock,
    title: "Slower performance",
    text: "Especially with reports or complex queries.",
  },
  {
    Icon: IconAlert,
    title: "“Out of memory” or “Not enough disk space” errors",
    text: "Even when you have plenty of both.",
  },
  {
    Icon: IconRefresh,
    title: "Compact and Repair taking longer each time",
    text: "The operation becomes increasingly sluggish.",
  },
  {
    Icon: IconShield,
    title: "Random corruption warnings",
    text: "Including “database needs to be repaired” messages.",
  },
  {
    Icon: IconLock,
    title: "Forms or reports failing to save changes",
    text: "Design changes quietly refuse to stick.",
  },
];

const PRACTICES = [
  {
    Icon: IconGauge,
    title: "Monitor file size monthly",
    steps: [
      "Set up alerts at 1GB and 1.5GB.",
      "Track the growth rate to predict future issues.",
      "Review monthly to catch problems early.",
    ],
  },
  {
    Icon: IconWrench,
    title: "Schedule regular maintenance",
    steps: [
      "Schedule Compact and Repair operations.",
      "Archive old data systematically, quarterly or annually.",
      "Clean up temporary objects regularly.",
      "Review and optimise queries periodically.",
    ],
  },
  {
    Icon: IconLayers,
    title: "Design with scale in mind",
    steps: [
      "Store attachments externally from day one.",
      "Use proper data types. Avoid memo fields when short text will do.",
      "Implement data retention policies.",
      "Split databases from the start if more than one person uses them.",
    ],
  },
  {
    Icon: IconCompass,
    title: "Plan for the future",
    steps: [
      "Even on SQL Server, monitor database growth.",
      "Keep modernisation on your technology roadmap.",
      "Stay current with Microsoft’s platform direction.",
      "Budget for eventual upgrades and migrations.",
    ],
  },
];

const MISTAKES = [
  {
    Sketch: BackupSketch,
    habit: "Fixing it with no backup",
    fix: "Copy the file first, then work on the copy. Screenshot every error so you can see what changed.",
  },
  {
    Sketch: CompactSketch,
    habit: "Treating Compact and Repair as the cure",
    fix: "Use it to reclaim space, then archive old data or plan the move to SQL Server so the file stops growing back.",
  },
  {
    Sketch: EmbedSketch,
    habit: "Embedding files in the database",
    fix: "Keep documents and images in a network folder or SharePoint, and store only the file path in Access.",
  },
  {
    Sketch: WaitSketch,
    habit: "Waiting until the file goes read-only",
    fix: "Set size alerts at 1GB and 1.5GB and start planning at 1.5GB. Rushed migrations always cost more than planned ones.",
  },
  {
    Sketch: TestSketch,
    habit: "Migrating without testing on a copy",
    fix: "Migrate a copy first, test every form, report and query, then schedule the real cut-over.",
  },
];

const COSTS = [
  {
    Icon: IconClock,
    title: "Productivity loss",
    text: "Staff spending hours on manual workarounds.",
  },
  {
    Icon: IconShield,
    title: "Data integrity risks",
    text: "Corruption becomes more likely as you push the limits.",
  },
  {
    Icon: IconServer,
    title: "Business continuity",
    text: "Critical systems failing at the worst possible time.",
  },
  {
    Icon: IconTrendUp,
    title: "Opportunity cost",
    text: "Unable to grow or take on new business.",
  },
  {
    Icon: IconAlert,
    title: "Emergency costs",
    text: "Rush migrations always cost more than planned ones.",
  },
];

const CHECKLIST = [
  "Backup taken, and a restore tested",
  "File size and growth rate recorded",
  "Attachments moved out, or planned for",
  "Every table has a primary key",
  "Queries and VBA reviewed for Access-only features",
  "Migration trialled on a copy",
  "Users and permissions mapped",
  "Downtime window agreed and communicated",
  "Old Access file kept read-only as a fallback",
  "Size monitoring set up after go-live",
];

const KEY_TAKEAWAYS = [
  "The 2GB limit is a hard ceiling. There’s no way to increase it.",
  "Warning signs appear well before you hit the wall.",
  "Quick fixes buy time but aren’t permanent solutions.",
  "SQL Server or Azure SQL is the right move for most businesses.",
  "Your Access investment isn’t wasted. Forms and reports transfer over.",
  "Professional migration ensures a smooth transition and minimises risk.",
  "Prevention through monitoring prevents future crises.",
];

const CASE_STUDY_SLUGS = [
  "film-crew-booking-system-access-nextjs-rebuild",
  "automated-proposal-generation-in-microsoft",
];

const caseStudyCards = CASE_STUDY_SLUGS.map(getCaseStudyBySlug)
  .filter(Boolean)
  .map((s) => ({
    href: `/case-studies/${s.slug}`,
    kind: "Case study",
    title: s.title,
    description: s.truncatedDescription,
    imagePath: s.image,
  }));

const ARTICLE_CARDS = [
  {
    href: "/blog/power-apps-with-sql-database",
    kind: "Article",
    title: "Power Apps with a SQL database",
    description:
      "How a SQL back end can power modern apps on top of the data you already hold.",
    youtubeId: "awsNLPGNI4w",
  },
  {
    href: "/blog/access-database-slow-performance",
    kind: "Article",
    title: "Why your Access database is slow",
    description:
      "Practical fixes for sluggish forms, queries and reports before size becomes the problem.",
    imagePath: "/blog/slow/performance.webp",
  },
];

const RELATED = [...caseStudyCards, ...ARTICLE_CARDS];

const FAQS = [
  {
    q: "Can I increase the Access 2GB limit?",
    a: (
      <>
        No. The 2GB ceiling applies to each .accdb or .mdb file and there’s no
        setting to raise it. You can only reduce what’s inside the file or move
        the data somewhere with more room, such as SQL Server.
      </>
    ),
  },
  {
    q: "Will Compact and Repair fix a database that hit 2GB?",
    a: (
      <>
        It reclaims the space left behind by deleted records and temporary
        objects, so it can bring a bloated file back under the limit. It can’t
        help if your live data is genuinely that large, and it needs the file to
        open in the first place. Treat it as a way to buy time, not a cure.
      </>
    ),
  },
  {
    q: "Do I lose my forms, reports and VBA if I move to SQL Server?",
    a: (
      <>
        Usually not. A typical migration moves only the tables to SQL Server,
        while Access stays on as the front end linked to them. Some VBA and
        queries need adjusting, which is why we always migrate a copy first. Our{" "}
        <Link
          href="/services/sql-server-and-access-integration"
          className={styles.inlineLink}
        >
          SQL Server and Access integration
        </Link>{" "}
        work is built around keeping what already works.
      </>
    ),
  },
  {
    q: "Is SQL Server Express enough?",
    a: (
      <>
        For many small and mid-sized databases, yes. Express has its own
        per-database size cap (10GB at the time of writing, so check Microsoft’s
        current documentation), which is still several times what Access allows.
        If you expect to outgrow it, plan for a paid edition or Azure SQL from
        the start.
      </>
    ),
  },
  {
    q: "How long does a migration take, and what does it cost?",
    a: (
      <>
        Simple databases typically take two to four weeks. Complex databases
        with heavy VBA and intricate relationships can take six to twelve. Costs
        depend on that scope plus licensing: SQL Server Express is free, while
        Azure SQL is usage-based. A{" "}
        <Link href="/contact-us" className={styles.inlineLink}>
          free database health check
        </Link>{" "}
        gives you a firm scope before you commit.
      </>
    ),
  },
];

function Callout({ Icon, label, children }) {
  return (
    <div className={styles.callout} role="note">
      <span className={styles.calloutIcon}>
        <Icon />
      </span>
      <div className={styles.calloutBody}>
        <p className={styles.calloutLabel}>{label}</p>
        <p className={styles.calloutText}>{children}</p>
      </div>
    </div>
  );
}

function Quote({ href, source, children }) {
  return (
    <figure className={styles.quote}>
      <span className={styles.quoteIcon}>
        <IconQuote />
      </span>
      <blockquote className={styles.quoteBody}>
        <p className={styles.quoteText}>{children}</p>
      </blockquote>
      <figcaption className={styles.quoteSource}>
        <Link
          href={href}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className={styles.inlineLink}
        >
          {source}
        </Link>
      </figcaption>
    </figure>
  );
}

function ProTip({ children }) {
  return (
    <p className={styles.proTip}>
      <span className={styles.proTipLabel}>
        <IconBulb />
        Pro tip
      </span>
      <span className={styles.proTipText}>{children}</span>
    </p>
  );
}

function Figure({ caption, children }) {
  return (
    <figure className={styles.diagram}>
      <div className={styles.diagramScroll}>
        <div className={styles.diagramInner}>{children}</div>
      </div>
      {caption && (
        <figcaption className={styles.figCaption}>{caption}</figcaption>
      )}
    </figure>
  );
}

function ProsCons({ pros, cons }) {
  return (
    <div className={styles.prosCons}>
      <div className={styles.prosBox}>
        <h4 className={styles.prosTitle}>Pros</h4>
        <ul className={styles.tickList}>
          {pros.map((p) => (
            <li key={p}>
              <span className={styles.tickIcon}>
                <IconCheck />
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.consBox}>
        <h4 className={styles.consTitle}>Cons</h4>
        <ul className={styles.dashList}>
          {cons.map((c) => (
            <li key={c}>
              <span className={styles.dashIcon} aria-hidden="true" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function TwoGBAccessLimitBlogPost() {
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
        mainEntityOfPage: { "@id": `${PAGE_URL}#webpage` },
        headline: PAGE_HEADLINE,
        alternativeHeadline:
          "The 2GB Access Database Limit: Warning Signs, Emergency Fixes, and Migration Solutions",
        description: PAGE_DESCRIPTION,
        image: `${SITE_URL}${HERO_IMAGE_PATH}`,
        author: {
          "@type": "Person",
          name: AUTHOR_NAME,
          url: `${SITE_URL}/meet-the-team`,
        },
        publisher: { "@id": `${SITE_URL}#organization` },
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
        articleSection: "Access Database Management",
        keywords: ["Access 2GB limit", "Access to SQL Server migration"],
        wordCount: WORD_COUNT,
        timeRequired: READING_TIME_ISO,
        inLanguage: "en-AU",
        about: [
          {
            "@type": "Thing",
            name: "Microsoft Access",
            sameAs: "https://en.wikipedia.org/wiki/Microsoft_Access",
          },
          {
            "@type": "Thing",
            name: "SQL Server",
            sameAs: "https://en.wikipedia.org/wiki/Microsoft_SQL_Server",
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
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <h1 className={styles.title}>
                Your Access Database Just Hit 2GB...{" "}
                <span className={styles.accent}>
                  Now What? A Survival Guide
                </span>
              </h1>
              <p className={styles.heroLede}>
                The 2GB limit hits without warning. Here’s why it happens, how
                to spot it coming, the emergency steps that buy you time and the
                permanent fixes, including migration to SQL Server or Azure.
              </p>
              <div className={styles.byline}>
                <span className={styles.avatar} aria-hidden="true">
                  <Image src={scott} alt={AUTHOR_NAME} width={38} height={38} />
                </span>
                <div className={styles.bylineText}>
                  <span className={styles.bylineName}>By {AUTHOR_NAME}</span>
                  <span className={styles.bylineMeta}>
                    Updated {formatDate(DATE_MODIFIED)} · {READING_TIME}
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.heroArt}>
              <HeroSvg />
            </div>
          </div>
        </div>

        {/* At a glance */}
        <div className={styles.glanceGrid}>
          {GLANCE.map((g) => (
            <div key={g.label} className={styles.glanceCard}>
              <p className={styles.glanceValue}>{g.value}</p>
              <p className={styles.glanceLabel}>{g.label}</p>
              <p className={styles.glanceText}>{g.text}</p>
            </div>
          ))}
        </div>

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
            {/* Introduction */}
            <section
              id="introduction"
              className={styles.section}
              aria-labelledby="introduction-heading"
            >
              <h2 id="introduction-heading">
                Imprisoned by{" "}
                <span className={styles.accent}>Your Own Database</span>
              </h2>
              <p>
                The dreaded moment arrives without warning: “Cannot update.
                Database or object is read-only.” Or perhaps: “The database
                needs to be repaired.” Your Microsoft Access database, the core
                of your entire business, has hit the wall. The 2GB wall.
              </p>
              <p>
                For businesses relying on Access databases, this isn’t just a
                technical hiccup. It’s a crisis that can bring operations to a
                grinding halt. Spreadsheet and database errors have a long
                record of causing outsized damage. The 2012 “London Whale”
                trading losses at JP Morgan, reported at around $6 billion, were
                partly blamed on spreadsheet modelling errors. Access isn’t
                Excel, but a business-critical database that stops accepting
                changes can be just as costly.
              </p>
              <p>
                The good news? You’re not alone, and there are solutions. This
                guide walks you through what has happened, the immediate steps
                that buy you time, and the permanent solutions that make sure it
                never happens again.
              </p>

              <Callout
                Icon={IconAlert}
                label="If your database is down right now"
              >
                Skip straight to{" "}
                <a href="#triage" className={styles.inlineLink}>
                  immediate triage
                </a>
                . Make a backup first, then work through the steps in order. If
                the file won’t open or won’t compact,{" "}
                <a href="#help" className={styles.inlineLink}>
                  get help
                </a>{" "}
                before you try anything else.
              </Callout>

              <Quote
                href="https://support.microsoft.com/en-us/office/access-specifications-0cf3c66f-9cf2-4e32-9568-98c1025bb47c"
                source="Microsoft Support, Access Specifications"
              >
                “Total size for an Access database (.accdb or .mdb), including
                all database objects and data… 2 gigabytes, minus the space
                needed for system objects.”
              </Quote>
            </section>

            {/* Why it happens */}
            <section
              id="why"
              className={styles.section}
              aria-labelledby="why-heading"
            >
              <h2 id="why-heading">
                Understanding the{" "}
                <span className={styles.accent}>2GB Limit Crisis</span>
              </h2>
              <p>
                The 2GB limit creeps up on businesses for several reasons, and
                more often than not the causes are hidden below the surface.
                Access keeps your tables, queries, forms, reports, macros and
                code in a single file, and that one file is what can’t grow past
                2GB. Here’s what typically fills a file that’s approaching the
                limit.
              </p>

              <Figure caption="Proportions are illustrative. Yours will differ, but most full files contain a mix of all five.">
                <AnatomySvg />
              </Figure>

              <div className={styles.reasonGrid}>
                {REASONS.map((r) => (
                  <div key={r.title} className={styles.reasonCard}>
                    <span className={styles.badge}>
                      <r.Icon />
                    </span>
                    <h3 className={styles.cardHeading}>{r.title}</h3>
                    <p className={styles.cardText}>{r.text}</p>
                  </div>
                ))}
              </div>

              <Quote
                href="https://support.microsoft.com/en-us/office/compact-and-repair-a-database-6ee60f16-aed0-40ac-bf22-85fa9f4005b2"
                source="Microsoft Support, Compact and Repair a Database"
              >
                “As your database file fills up with the remains of temporary
                and deleted objects, its performance can degrade. Objects may
                open more slowly, queries may take longer than normal to run,
                and typical operations generally seem to take longer.”
              </Quote>
            </section>

            {/* Warning signs */}
            <section
              id="warning-signs"
              className={styles.section}
              aria-labelledby="warning-signs-heading"
            >
              <h2 id="warning-signs-heading">
                Warning signs{" "}
                <span className={styles.accent}>before you hit the wall</span>
              </h2>
              <p>
                Smart businesses watch for these red flags before reaching the
                critical limit.
              </p>

              <ul className={styles.signGrid}>
                {SIGNS.map((s) => (
                  <li key={s.title} className={styles.signCard}>
                    <span className={styles.badgeSmall}>
                      <s.Icon />
                    </span>
                    <div>
                      <p className={styles.signTitle}>{s.title}</p>
                      <p className={styles.signText}>{s.text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <p>
                To check where you stand, find the file in File Explorer, right
                click it and choose Properties. Then read which zone it falls
                into.
              </p>

              <Figure caption="Act on the zone you’re in, not the one you’d like to be in.">
                <GaugeSvg />
              </Figure>

              <p>
                Why start planning at 1.5GB? Compact and Repair works by
                building a fresh copy of the file, so it needs spare disk space
                and time. Both get harder to find as the file grows, and a
                migration takes weeks to do properly.
              </p>

              <Quote
                href="https://stackoverflow.com/questions/3294135/which-affects-access-database-performance-more-thousands-of-tables-or-millions"
                source="Database Administrators Stack Exchange"
              >
                “If you’re approaching that limit (within 50% of it, I’d say),
                you really need to have an upsizing path in mind.”
              </Quote>
            </section>

            {/* Triage */}
            <section
              id="triage"
              className={styles.section}
              aria-labelledby="triage-heading"
            >
              <h2 id="triage-heading">
                Immediate Triage...{" "}
                <span className={styles.accent}>What to Do Right Now</span>
              </h2>
              <p>
                Work through these four steps in order. The aim is to protect
                your data first, then buy breathing room while you choose a
                permanent fix.
              </p>

              <ol className={styles.timeline}>
                <li className={styles.timelineItem}>
                  <span className={styles.stepBadge} aria-hidden="true">
                    1
                  </span>
                  <div className={styles.stepBody}>
                    <h3>Step 1: Don’t panic (but act fast)</h3>
                    <p>
                      First things first:{" "}
                      <strong>make a backup immediately.</strong> Even if the
                      database is showing corruption warnings, create a copy
                      before attempting any fixes. Don’t try to “fix” things
                      without a safety net. Ask everyone to close the database
                      so nobody writes to it while you work.
                    </p>
                    <p>Then document the following:</p>
                    <ul>
                      <li>Current file size</li>
                      <li>Any error messages (take screenshots)</li>
                      <li>When the problem first appeared</li>
                      <li>What users were doing at the time</li>
                    </ul>
                    <ProTip>
                      Copy the file in File Explorer rather than opening it in
                      Access first. If other people still have it open, wait
                      until they’ve closed it so the copy is consistent.
                    </ProTip>
                  </div>
                </li>

                <li className={styles.timelineItem}>
                  <span className={styles.stepBadge} aria-hidden="true">
                    2
                  </span>
                  <div className={styles.stepBody}>
                    <h3>Step 2: Emergency Compact and Repair</h3>
                    <p>
                      If your database is still opening (even slowly), run
                      Compact and Repair.
                    </p>
                    <ol>
                      <li>Close the database completely.</li>
                      <li>Open Access but don’t open your database.</li>
                      <li>
                        Go to{" "}
                        <em>Database Tools → Compact and Repair Database</em>.
                      </li>
                      <li>
                        Select your database file, then save the compacted copy
                        under a new name so the original stays untouched.
                      </li>
                    </ol>
                    <p>
                      This might buy you days or weeks, but it’s not a solution.
                      If Compact and Repair fails, you’re in more serious
                      trouble and should{" "}
                      <a href="#help" className={styles.inlineLink}>
                        contact a professional immediately
                      </a>
                      .
                    </p>
                    <ProTip>
                      If it won’t compact, create a new blank database and
                      import your tables, queries, forms, reports, macros and
                      modules into it. Importing builds a fresh file and often
                      sheds bloat, so it’s a useful rescue route.
                    </ProTip>
                  </div>
                </li>

                <li className={styles.timelineItem}>
                  <span className={styles.stepBadge} aria-hidden="true">
                    3
                  </span>
                  <div className={styles.stepBody}>
                    <h3>Step 3: Quick space savers (temporary relief)</h3>
                    <div className={styles.saverGrid}>
                      <div className={styles.saverCard}>
                        <span className={styles.badgeSmall}>
                          <IconArchive />
                        </span>
                        <h4>Archive old data</h4>
                        <p>
                          <Link
                            href="/services/microsoft-excel"
                            className={styles.inlineLink}
                          >
                            Export historical records to Excel
                          </Link>{" "}
                          or another Access database. Create an “Archive” table
                          structure and move records older than two to three
                          years, or whatever makes sense for your business.
                          Document what you removed and where it went.
                        </p>
                      </div>
                      <div className={styles.saverCard}>
                        <span className={styles.badgeSmall}>
                          <IconPaperclip />
                        </span>
                        <h4>Remove attachments and OLE objects</h4>
                        <p>
                          Images and documents stored inside the database are
                          major space consumers. Store files in a file system (a
                          network folder or SharePoint), keep only the file path
                          in Access and link to the external files rather than
                          embedding them.
                        </p>
                      </div>
                      <div className={styles.saverCard}>
                        <span className={styles.badgeSmall}>
                          <IconTrash />
                        </span>
                        <h4>Delete unused objects</h4>
                        <p>
                          Look for old queries that aren’t used any more, backup
                          tables that have accumulated, temporary tables that
                          were never cleaned up and unused forms and reports.
                        </p>
                      </div>
                      <div className={styles.saverCard}>
                        <span className={styles.badgeSmall}>
                          <IconRefresh />
                        </span>
                        <h4>Clear temp data and caches</h4>
                        <p>
                          MSysCompactError (created when a compact hits errors)
                          can go once you’ve read it and have a backup. Remove
                          any temporary or scratch tables you created for
                          testing.
                        </p>
                      </div>
                    </div>
                    <Callout
                      Icon={IconAlert}
                      label="Deleting doesn’t shrink the file"
                    >
                      Access doesn’t hand space back when you delete records or
                      objects. Run Compact and Repair again after every
                      clean-up, otherwise the file stays the same size.
                    </Callout>
                  </div>
                </li>

                <li className={styles.timelineItem}>
                  <span className={styles.stepBadge} aria-hidden="true">
                    4
                  </span>
                  <div className={styles.stepBody}>
                    <h3>Step 4: Assess your breathing room</h3>
                    <p>After the clean-up:</p>
                    <ul>
                      <li>Check the file size again.</li>
                      <li>Estimate the growth rate from historical data.</li>
                      <li>Calculate how long before you hit 2GB again.</li>
                    </ul>
                    <p>
                      For example, if the file is now 1.6GB and grows by about
                      50MB a month, you have roughly eight months (400MB ÷
                      50MB). If it grows by 200MB a month, you have two. Then
                      match your file size to the zones in the gauge above to
                      decide how urgent the next step is.
                    </p>
                    <ProTip>
                      Use the growth figure to set the deadline for choosing a
                      permanent fix. Write it down and share it, because “we’ll
                      look at it later” is how files hit the wall.
                    </ProTip>
                  </div>
                </li>
              </ol>
            </section>

            {/* Options */}
            <section
              id="options"
              className={styles.section}
              aria-labelledby="options-heading"
            >
              <h2 id="options-heading">
                Long-term solutions:{" "}
                <span className={styles.accent}>Choose Your Path</span>
              </h2>
              <p>
                There’s no single right answer. The best option depends on how
                fast your data grows, how many people use the database and how
                much budget and downtime you can handle. Start with the flow
                below, then read the detail on the options it points to.
              </p>

              <Figure caption="Most businesses end up at the solid blue box.">
                <DecisionSvg />
              </Figure>

              <h3 className={styles.subHeading}>
                The five options at a glance
              </h3>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope="col">Option</th>
                      <th scope="col">Removes the 2GB ceiling?</th>
                      <th scope="col">Typical effort</th>
                      <th scope="col">Best for</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Split front end and back end</th>
                      <td>No</td>
                      <td>Days</td>
                      <td>Buying time and steadier multi-user use</td>
                    </tr>
                    <tr>
                      <th scope="row">Archive strategy</th>
                      <td>No</td>
                      <td>Days</td>
                      <td>Clear time-based data and rare historical queries</td>
                    </tr>
                    <tr>
                      <th scope="row">SQL Server or Express</th>
                      <td>Yes, with a far higher ceiling</td>
                      <td>2 to 4 weeks simple, 6 to 12 complex</td>
                      <td>Most businesses hitting the wall</td>
                    </tr>
                    <tr>
                      <th scope="row">Azure SQL Database</th>
                      <td>Yes</td>
                      <td>Similar to SQL Server</td>
                      <td>Microsoft 365 users and remote teams</td>
                    </tr>
                    <tr>
                      <th scope="row">Complete rebuild</th>
                      <td>Yes</td>
                      <td>Months</td>
                      <td>Systems that need change beyond size</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className={styles.tableNote}>
                SQL Server editions have their own limits. Check Microsoft’s
                current documentation before you commit.
              </p>

              <div className={styles.optionStack}>
                {/* Option 1 */}
                <div className={styles.optionCard}>
                  <div className={styles.optionHead}>
                    <span className={styles.badge}>
                      <IconLayers />
                    </span>
                    <h3>
                      Option 1: Split database architecture (temporary bridge)
                    </h3>
                  </div>
                  <p>
                    <strong>What it is:</strong> Separate the front end (forms,
                    reports, queries) from the back end (tables containing your
                    data).
                  </p>
                  <ProsCons
                    pros={[
                      "Reduces file size pressure on the front end",
                      "Easier to manage multiple users",
                      "Can be done relatively quickly",
                      "Each user gets their own front-end copy",
                    ]}
                    cons={[
                      "The back end still has the 2GB limit",
                      "Adds complexity to your setup",
                      "Not a permanent solution for growing databases",
                      "Network performance can still be an issue",
                    ]}
                  />
                  <p>
                    Some teams stretch this further by spreading tables across
                    several back-end files. It works as a stop-gap, but
                    relationships can’t be enforced between tables stored in
                    different files, so it adds risk.
                  </p>
                  <p>
                    <strong>Best for:</strong> Buying 6 to 12 months whilst
                    planning a proper migration, or for databases that are close
                    to 2GB but won’t grow much more.
                  </p>
                </div>

                {/* Option 2 */}
                <div className={styles.optionCard}>
                  <div className={styles.optionHead}>
                    <span className={styles.badge}>
                      <IconArchive />
                    </span>
                    <h3>Option 2: Archive strategy (manual split)</h3>
                  </div>
                  <p>
                    <strong>What it is:</strong> Keep the current year in your
                    active database and move historical data to archive
                    databases organised by year or period.
                  </p>
                  <ProsCons
                    pros={[
                      "Can be implemented quickly",
                      "Familiar Access interface maintained",
                      "Low cost, with no new software needed",
                      "Simple to understand and manage",
                    ]}
                    cons={[
                      "Reporting across time periods becomes difficult",
                      "Manual process to manage archives",
                      "Still hits the limit eventually",
                      "Multiple databases to back up and maintain",
                    ]}
                  />
                  <p>
                    <strong>Best for:</strong> Databases with clear time-based
                    data divisions, situations where historical queries are
                    rare, or very budget-conscious scenarios.
                  </p>
                </div>

                {/* Option 3 */}
                <div
                  className={`${styles.optionCard} ${styles.optionFeatured}`}
                >
                  <div className={styles.optionHead}>
                    <span className={styles.badge}>
                      <IconServer />
                    </span>
                    <h3>Option 3: Migrate to SQL Server (best for most)</h3>
                    <span className={styles.pill}>Recommended</span>
                  </div>
                  <p>
                    <strong>What it is:</strong>{" "}
                    <Link
                      href="/services/sql-server-and-access-integration"
                      className={styles.inlineLink}
                    >
                      Move your data tables to SQL Server
                    </Link>
                    , or SQL Server Express (free), and keep Access as the
                    front-end interface.
                  </p>
                  <ProsCons
                    pros={[
                      "No practical size limit (SQL Server handles terabytes)",
                      "Better performance with large datasets",
                      "Proper multi-user support with fewer conflicts",
                      "Maintains the familiar Access interface",
                      "Can keep existing forms, reports and VBA code",
                      "Enterprise-grade security and backup options",
                    ]}
                    cons={[
                      "Requires server setup and maintenance",
                      "Ongoing licensing costs (though SQL Express is free)",
                      "Some VBA code may need adjustment",
                      "Learning curve for database administrators",
                    ]}
                  />
                  <h4 className={styles.miniHeading}>Cost reality</h4>
                  <ul className={styles.costReality}>
                    <li>
                      <strong>SQL Server Express:</strong> Free. It has a
                      per-database cap (10GB at the time of writing), which is
                      still five times what Access offers.
                    </li>
                    <li>
                      <strong>SQL Server Standard:</strong> Paid licensing but
                      far greater capacity.
                    </li>
                    <li>
                      <strong>Azure SQL:</strong> A pay-as-you-go cloud option.
                    </li>
                  </ul>
                  <p>
                    <strong>Best for:</strong> Most businesses hitting the 2GB
                    wall, those needing room to grow, and professional or
                    enterprise environments.
                  </p>
                </div>

                {/* Option 4 */}
                <div className={styles.optionCard}>
                  <div className={styles.optionHead}>
                    <span className={styles.badge}>
                      <IconCloud />
                    </span>
                    <h3>Option 4: Azure SQL Database (cloud-first)</h3>
                  </div>
                  <p>
                    <strong>What it is:</strong> Move your database to
                    Microsoft’s{" "}
                    <Link
                      href="/services/cloud-based-solutions-with-azure"
                      className={styles.inlineLink}
                    >
                      cloud database platform
                    </Link>
                    , accessing it via Access or modern applications.
                  </p>
                  <ProsCons
                    pros={[
                      "No server hardware to maintain",
                      "Automatic backups and high availability built in",
                      "Scales easily as you grow",
                      "Access from anywhere with an internet connection",
                      "Works with Power Platform (Power Apps, Power BI)",
                      "Enterprise security managed by Microsoft",
                    ]}
                    cons={[
                      "Monthly recurring cost",
                      "Requires a stable internet connection",
                      "Migration complexity similar to SQL Server",
                      "Potential latency for some operations",
                    ]}
                  />
                  <p>
                    <strong>Best for:</strong> Businesses already using
                    Microsoft 365, remote or distributed teams, those wanting
                    modern cloud infrastructure, and future{" "}
                    <Link
                      href="/services/microsoft-power-platform/power-apps"
                      className={styles.inlineLink}
                    >
                      Power Apps
                    </Link>{" "}
                    integration plans.
                  </p>
                </div>

                {/* Option 5 */}
                <div className={styles.optionCard}>
                  <div className={styles.optionHead}>
                    <span className={styles.badge}>
                      <IconHammer />
                    </span>
                    <h3>Option 5: Complete rebuild (when it makes sense)</h3>
                  </div>
                  <p>
                    <strong>What it is:</strong> Rebuild your application using{" "}
                    <Link
                      href="/services/microsoft-power-platform/power-apps"
                      className={styles.inlineLink}
                    >
                      Power Apps
                    </Link>
                    , a{" "}
                    <Link
                      href="/services/app-and-custom-development"
                      className={styles.inlineLink}
                    >
                      custom web app
                    </Link>
                    , or another modern platform.
                  </p>
                  <ProsCons
                    pros={[
                      "Modern, mobile-friendly interface",
                      "Cloud-native capabilities",
                      "Better suited for very large or complex needs",
                      "Future-proof technology stack",
                    ]}
                    cons={[
                      "Expensive and time-consuming",
                      "Requires retraining staff",
                      "Loses your existing investment in Access development",
                      "Longer implementation timeline",
                    ]}
                  />
                  <p>
                    <strong>Best for:</strong> Access systems that are already
                    outdated or problematic beyond just size, major business
                    process changes needed anyway, or when you have the budget
                    and timeline for proper modernisation.
                  </p>
                </div>
              </div>
            </section>

            {/* Migration */}
            <section
              id="migration"
              className={styles.section}
              aria-labelledby="migration-heading"
            >
              <h2 id="migration-heading">
                Migration roadmap:{" "}
                <span className={styles.accent}>SQL Server/Azure Path</span>
              </h2>
              <p>
                Here’s how a typical Access to SQL Server or Azure SQL migration
                runs. Treat the weeks as a guide. The real timeline depends on
                how much VBA and how many queries your database carries.
              </p>

              <ol className={styles.timeline}>
                <li className={styles.timelineItem}>
                  <span className={styles.stepBadge} aria-hidden="true">
                    1
                  </span>
                  <div className={styles.stepBody}>
                    <h3>Phase 1: Planning (week 1)</h3>
                    <ul>
                      <li>
                        Audit current database structure and dependencies.
                      </li>
                      <li>
                        Identify any Access-specific features that need special
                        handling.
                      </li>
                      <li>Test the migration on a copy of your database.</li>
                      <li>
                        Choose SQL Express (free, local) or Azure SQL (cloud).
                      </li>
                      <li>
                        Plan the downtime window and communicate with users.
                      </li>
                      <li>Document current processes and workflows.</li>
                    </ul>
                    <ProTip>
                      Time the test migration. It tells you how long the real
                      one will take and which queries need attention.
                    </ProTip>
                  </div>
                </li>

                <li className={styles.timelineItem}>
                  <span className={styles.stepBadge} aria-hidden="true">
                    2
                  </span>
                  <div className={styles.stepBody}>
                    <h3>Phase 2: Backend migration (week 2)</h3>
                    <ul>
                      <li>Set up the SQL Server or Azure SQL environment.</li>
                      <li>
                        Use SQL Server Migration Assistant (SSMA) for Access.
                        Older guides mention the Upsizing Wizard, which isn’t
                        included in recent versions of Access.
                      </li>
                      <li>
                        <Link
                          href="/services/upgrades-and-migration"
                          className={styles.inlineLink}
                        >
                          Migrate tables, relationships and indexes
                        </Link>
                        .
                      </li>
                      <li>Test data integrity and completeness.</li>
                      <li>Set up proper indexes for performance.</li>
                      <li>Configure security and user permissions.</li>
                    </ul>
                    <ProTip>
                      Give every table a primary key before you migrate. Linked
                      tables without a unique key are often read-only and slow.
                    </ProTip>
                  </div>
                </li>

                <li className={styles.timelineItem}>
                  <span className={styles.stepBadge} aria-hidden="true">
                    3
                  </span>
                  <div className={styles.stepBody}>
                    <h3>Phase 3: Frontend adaptation (weeks 2 to 3)</h3>
                    <ul>
                      <li>
                        Link the Access front end to the new SQL back end.
                      </li>
                      <li>Test all forms and reports thoroughly.</li>
                      <li>
                        Adjust VBA code that doesn’t work with SQL Server.
                      </li>
                      <li>
                        Fix any query syntax differences (Access SQL versus
                        T-SQL).
                      </li>
                      <li>Optimise performance and connection settings.</li>
                      <li>Create training materials for users.</li>
                    </ul>
                    <ProTip>
                      Let SQL Server do the heavy lifting with views and
                      pass-through queries. Queries that join local and linked
                      tables can drag a lot of data across the network.
                    </ProTip>
                  </div>
                </li>

                <li className={styles.timelineItem}>
                  <span className={styles.stepBadge} aria-hidden="true">
                    4
                  </span>
                  <div className={styles.stepBody}>
                    <h3>Phase 4: Testing and rollout (weeks 3 to 4)</h3>
                    <ul>
                      <li>Conduct user acceptance testing with key staff.</li>
                      <li>Train staff on any workflow changes.</li>
                      <li>Set up proper backup procedures.</li>
                      <li>Go live with support ready for issues.</li>
                      <li>Monitor performance and user feedback.</li>
                      <li>Document the new system architecture.</li>
                    </ul>
                    <ProTip>
                      Keep the old Access file read-only as a fallback for a
                      short time after go-live, then archive it.
                    </ProTip>
                  </div>
                </li>
              </ol>

              <Callout Icon={IconClock} label="Reality check">
                Simple databases take 2 to 4 weeks. Complex databases with heavy
                VBA code and intricate relationships can take 6 to 12 weeks.
                Always include contingency time in your planning.
              </Callout>

              <h3 className={styles.subHeading}>Common migration gotchas</h3>
              <p>Be prepared for these common challenges.</p>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope="col">Gotcha</th>
                      <th scope="col">What can happen</th>
                      <th scope="col">What to do</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">AutoNumber fields</th>
                      <td>Become identity columns, which work differently</td>
                      <td>Check seeds and relationships after migrating</td>
                    </tr>
                    <tr>
                      <th scope="row">Query syntax</th>
                      <td>Some Access SQL won’t run in T-SQL unchanged</td>
                      <td>
                        Rewrite as views or pass-through queries, then test
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Performance</th>
                      <td>
                        What was fast in Access can be slow on SQL Server (and
                        vice versa)
                      </td>
                      <td>Index join and filter columns, then measure</td>
                    </tr>
                    <tr>
                      <th scope="row">Connection strings</th>
                      <td>Hard-coded connections break when servers change</td>
                      <td>Manage them centrally with proper error handling</td>
                    </tr>
                    <tr>
                      <th scope="row">User permissions</th>
                      <td>Work completely differently in SQL Server</td>
                      <td>Plan logins and roles before go-live</td>
                    </tr>
                    <tr>
                      <th scope="row">Date and time handling</th>
                      <td>Differences in how dates are stored and formatted</td>
                      <td>Test boundary dates and regional settings</td>
                    </tr>
                    <tr>
                      <th scope="row">Yes/No fields with blanks</th>
                      <td>Nulls in Yes/No columns can confuse linked tables</td>
                      <td>Set a default value and fill in existing blanks</td>
                    </tr>
                    <tr>
                      <th scope="row">Attachment and OLE fields</th>
                      <td>Don’t map cleanly to SQL Server columns</td>
                      <td>Move files out first and store only the path</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Prevention */}
            <section
              id="prevention"
              className={styles.section}
              aria-labelledby="prevention-heading"
            >
              <h2 id="prevention-heading">
                Best practices{" "}
                <span className={styles.accent}>Going Forward</span>
              </h2>
              <p>
                Whichever path you choose, a few habits keep you from facing the
                same crisis twice. The simplest is to watch the number. If you
                record the file size every month, the alerts below take care of
                the rest.
              </p>

              <Figure caption="An example file that crosses 1GB in June and 1.5GB in October. With alerts set, the October crossing is a plan, not a surprise.">
                <GrowthSvg />
              </Figure>

              <div className={styles.walkGrid}>
                {PRACTICES.map((p) => (
                  <div key={p.title} className={styles.walkCard}>
                    <div className={styles.walkHead}>
                      <span className={styles.badge}>
                        <p.Icon />
                      </span>
                      <h3>{p.title}</h3>
                    </div>
                    <ol className={styles.miniSteps}>
                      {p.steps.map((s, i) => (
                        <li key={s}>
                          <span className={styles.miniNum} aria-hidden="true">
                            {i + 1}
                          </span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </section>

            {/* Mistakes */}
            <section
              id="mistakes"
              className={styles.section}
              aria-labelledby="mistakes-heading"
            >
              <h2 id="mistakes-heading">
                Common mistakes <span className={styles.accent}>to avoid</span>
              </h2>
              <p>
                These five habits turn a manageable problem into an expensive
                one. Each has a simple alternative.
              </p>

              <div className={styles.mistakeGrid}>
                {MISTAKES.map((m, i) => {
                  const Sketch = m.Sketch;
                  return (
                    <div key={m.habit} className={styles.mistakeCard}>
                      <span className={styles.mistakeNum} aria-hidden="true">
                        {i + 1}
                      </span>
                      <h3>{m.habit}</h3>
                      <div className={styles.sketch}>
                        <Sketch />
                      </div>
                      <p className={styles.instead}>
                        <span className={styles.insteadPill}>Instead</span>
                        <span>{m.fix}</span>
                      </p>
                    </div>
                  );
                })}
              </div>

              <h3 className={styles.subHeading}>The real cost of inaction</h3>
              <p>
                Some businesses are tempted to “make do” with workarounds rather
                than investing in a proper solution. Here’s what that actually
                costs:
              </p>
              <ul className={styles.costList}>
                {COSTS.map((c) => (
                  <li key={c.title}>
                    <span className={styles.badgeSmall}>
                      <c.Icon />
                    </span>
                    <span>
                      <strong>{c.title}.</strong> {c.text}
                    </span>
                  </li>
                ))}
              </ul>

              <h3 className={styles.subHeading}>
                Before you migrate: a checklist
              </h3>
              <ul className={styles.checklist}>
                {CHECKLIST.map((c) => (
                  <li key={c}>
                    <span className={styles.tickIcon}>
                      <IconCheck />
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Help */}
            <section
              id="help"
              className={styles.section}
              aria-labelledby="help-heading"
            >
              <h2 id="help-heading">
                When to <span className={styles.accent}>get help</span>
              </h2>
              <div className={styles.ctaBand}>
                <div className={styles.ctaCopy}>
                  <h3 className={styles.ctaTitle}>
                    Not sure which path fits your database?
                  </h3>
                  <p className={styles.ctaText}>
                    Call us straight away if Compact and Repair fails, the file
                    won’t open, you’re seeing read-only or repair errors, or
                    you’re within a few hundred megabytes of the limit. We offer
                    a free database health check and migration consultation, so
                    you’ll know exactly where you stand.
                  </p>
                  <div className={styles.ctaActions}>
                    <a href="#contact" className={styles.ctaButton}>
                      Book a database health check
                    </a>
                    <Link
                      href="/services/database-development-and-solutions"
                      className={styles.ctaLink}
                    >
                      Our Access database services
                      <IconArrowRight />
                    </Link>
                  </div>
                </div>
                <span className={styles.ctaIcon} aria-hidden="true">
                  <IconDatabase />
                </span>
              </div>
            </section>

            {/* FAQ */}
            <section
              id="faq"
              className={styles.section}
              aria-labelledby="faq-heading"
            >
              <h2 id="faq-heading">
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
                    <div className={styles.faqBody}>
                      <p>{f.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section
              id="conclusion"
              className={styles.section}
              aria-labelledby="conclusion-heading"
            >
              <h2 id="conclusion-heading">
                Conclusion:{" "}
                <span className={styles.accent}>Act Now, Not Later</span>
              </h2>
              <p>
                The 2GB limit is real, and it has ended countless Access
                databases’ useful lives. But it doesn’t have to end yours.
              </p>

              <h3 className={styles.subHeading}>Key takeaways</h3>
              <ul className={styles.tickList}>
                {KEY_TAKEAWAYS.map((k) => (
                  <li key={k}>
                    <span className={styles.tickIcon}>
                      <IconCheck />
                    </span>
                    <span>{k}</span>
                  </li>
                ))}
              </ul>

              <h3 className={styles.subHeading}>Next steps</h3>
              <ol>
                <li>Check your current database file size right now.</li>
                <li>
                  If it’s over 1.5GB, start planning migration within 30 days.
                </li>
                <li>
                  Don’t wait until you hit the wall. Prevention is cheaper.
                </li>
                <li>
                  <Link href="/contact-us" className={styles.inlineLink}>
                    Contact us for a free database health check and migration
                    consultation
                  </Link>
                  .
                </li>
              </ol>

              <div className={styles.authorBox}>
                <span
                  className={`${styles.avatar} ${styles.avatarLarge}`}
                  aria-hidden="true"
                >
                  <Image src={scott} alt={AUTHOR_NAME} width={56} height={56} />
                </span>
                <div>
                  <h4 className={styles.authorTitle}>About the author</h4>
                  <p className={styles.authorName}>{AUTHOR_NAME}</p>
                  <p className={styles.authorBio}>
                    Scott founded Office Experts Group, an Australian Microsoft
                    consultancy, in 2000. With decades of experience in design,
                    programming and consulting, he helps businesses get more
                    from their Microsoft technology.
                  </p>
                </div>
              </div>
            </section>

            {/* Related */}
            <section
              id="related"
              className={styles.section}
              aria-labelledby="related-heading"
            >
              <h2 id="related-heading">
                Related <span className={styles.accent}>reading</span>
              </h2>
              <div className={styles.relatedGrid}>
                {RELATED.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className={styles.relatedCard}
                  >
                    <span className={styles.relatedMedia}>
                      <Image
                        src={getImageSource(r)}
                        alt={r.title}
                        fill
                        sizes="(min-width: 820px) 400px, 100vw"
                      />
                    </span>
                    <span className={styles.relatedBody}>
                      <span className={styles.relatedKind}>{r.kind}</span>
                      <span className={styles.relatedTitle}>{r.title}</span>
                      <span className={styles.relatedText}>
                        {r.description}
                      </span>
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
