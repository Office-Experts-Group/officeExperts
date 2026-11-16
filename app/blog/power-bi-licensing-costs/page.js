// /app/blog/power-bi-licensing-costs/page.js
import Image from "next/image";
import Link from "next/link";

import Contact from "@/components/Contact";
import { generateOrganizationSchema } from "@/utils/schemaGenerators";
import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";

import scott from "@/public/team/scott.webp";
import styles from "@/styles/powerBiLicensingCostsBlog.module.scss";

import HeroSvg from "./(svgs)/HeroSvg";
import LadderSvg from "./(svgs)/LadderSvg";
import BreakEvenSvg from "./(svgs)/BreakEvenSvg";
import DecisionSvg from "./(svgs)/DecisionSvg";
import {
  ViewerSketch,
  RefreshSketch,
  GatewaySketch,
  ComplianceSketch,
  SprawlSketch,
} from "./(svgs)/CostSketches";
import {
  EveryoneSketch,
  ScaleSketch,
  ComplianceSketchTimeline,
  AuditSketch,
  GatewayPlanSketch,
} from "./(svgs)/MistakeSketches";
import {
  IconUsers,
  IconLayers,
  IconMail,
  IconTable,
  IconBulb,
  IconInfo,
  IconSearch,
  IconCalc,
  IconCalendar,
  IconCheck,
  IconArrow,
} from "./(svgs)/Icons";

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with layout.js
const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/blog/power-bi-licensing-costs`;
const PAGE_TITLE = "Power BI Licensing Costs: Hidden Expenses | Office Experts";
const PAGE_DESCRIPTION =
  "Power BI licensing costs often creep up. Learn the hidden expenses, the break-even points and the licence mix that stops your Australian business overpaying.";
const PAGE_HEADLINE =
  "Power BI Licensing Costs Spiraling? The Hidden Expenses Killing Your ROI";
const BREADCRUMB_NAME = "Power BI Licensing Costs";
const AUTHOR_NAME = "Scott Robinson";
const READING_TIME = 16;
const WORD_COUNT = 3700;
const HERO_IMAGE_PATH = "/logo.png"; // confirm it exists in the OE /public folder
const HERO_IMAGE_ALT = "Office Experts Logo";
const DATE_PUBLISHED = "2025-12-04T09:00:00+10:00";
// Set by hand when the content changes. +11:00 (AEDT) from the first Sunday in October to the first Sunday in April.
const DATE_MODIFIED = "2026-11-17T00:00:00+11:00";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Sydney",
  });

const CASE_STUDY_SLUGS = [
  "retail-power-bi-partner-reporting-security",
  "retail-analytics-automated-review-deck-generator",
];

const caseStudyCards = CASE_STUDY_SLUGS.map(getCaseStudyBySlug)
  .filter(Boolean)
  .map((s) => ({
    href: `/case-studies/${s.slug}`,
    kind: "Case study",
    title: s.title,
    description: s.truncatedDescription,
    linkText: s.linkText,
  }));

const RELATED = [
  ...caseStudyCards,
  {
    href: "/blog/xero-to-power-bi",
    kind: "Blog",
    title: "Connecting Xero to Power BI",
    description:
      "How finance teams pull accounting data into Power BI, and what to plan for before you start.",
    linkText: "Read the Xero to Power BI guide",
  },
];

const TOC = [
  { id: "intro", label: "The hidden complexity" },
  { id: "why", label: "Why licensing confuses everyone" },
  { id: "costs", label: "Five hidden costs" },
  { id: "breakeven", label: "Break-even analysis" },
  { id: "choose", label: "Which licence mix fits?" },
  { id: "strategies", label: "Smart licensing strategies" },
  { id: "mistakes", label: "Common mistakes" },
  { id: "healthcheck", label: "Licensing health check" },
  { id: "help", label: "When professional help pays" },
  { id: "faq", label: "Questions answered" },
  { id: "next", label: "Taking action" },
  { id: "related", label: "Related reading" },
];

const GLANCE = [
  {
    value: "6+",
    label: "Licence types",
    text: "Free, Pro, Premium Per User, capacity SKUs and Fabric overlap in confusing ways.",
  },
  {
    value: "8",
    label: "Refreshes a day on Pro",
    text: "Needing more than that usually means moving up a tier. Check Microsoft’s current limits.",
  },
  {
    value: "~500",
    label: "Viewers at the crossover",
    text: "Roughly where capacity beats Pro seats on price alone, and sooner if you need Premium features.",
  },
];

const COST_FIGURES = [
  { value: "$8,160", label: "50 Pro licences, per year" },
  { value: "$16,320", label: "100 Pro licences, per year" },
  { value: "$82,296", label: "Premium capacity (P1), per year" },
  { value: "400 to 500", label: "Typical break-even, varies by need" },
];

const TABLE_ROWS = [
  {
    scenario: "Under 50 users, basic reporting",
    licence: "Pro",
    cost: "$8,000 to $15,000",
    watch: "Hitting the limit on scheduled refreshes",
  },
  {
    scenario: "50 to 400 users, advanced features needed",
    licence: "Premium Per User",
    cost: "$18,000 to $144,000",
    watch: "Viewers of Premium Per User content may need that licence too",
  },
  {
    scenario: "400+ users or compliance requirements",
    licence: "Premium capacity",
    cost: "$82,296 to $300,000+",
    watch: "Buying a bigger capacity than you use",
  },
  {
    scenario: "Full data platform with ML and AI needs",
    licence: "Fabric",
    cost: "$100,000 to $500,000+",
    watch: "Usage that grows as more workloads share the capacity",
  },
];

const MISTAKES = [
  {
    Sketch: EveryoneSketch,
    title: "Giving everyone a Pro licence “just in case”",
    text: "It feels safe, but most organisations have a handful of people who build reports and a long tail who only look. Paying builder rates for viewers is the fastest way to overspend.",
    instead:
      "Separate creators from viewers, then price each group on its own.",
  },
  {
    Sketch: ScaleSketch,
    title: "Pricing the pilot as if it were the rollout",
    text: "A proof of concept with ten users says very little about the bill for two hundred. Refresh needs, data sources and compliance all grow with the audience.",
    instead:
      "Cost the full audience, refresh needs and data sources before you build.",
  },
  {
    Sketch: ComplianceSketchTimeline,
    title: "Finding the compliance requirements after launch",
    text: "A security review that lands after deployment can force a change of licence tier and a rework of reports that were already trained into the business.",
    instead: "Ask security and risk for their requirements at the start.",
  },
  {
    Sketch: AuditSketch,
    title: "Never reviewing who still uses a licence",
    text: "Seats assigned during a pilot or a busy project quietly keep billing. Nobody notices because each one is small.",
    instead: "Review last-used dates every quarter and remove idle seats.",
  },
  {
    Sketch: GatewayPlanSketch,
    title: "Forgetting the infrastructure around the licence",
    text: "The licence is only one line. Gateway servers, hosting, patching and support time all land on a different budget, which is why they get missed.",
    instead:
      "Add gateway servers, hosting and support time to the licence cost.",
  },
];

const CHECKLIST = [
  "Export your user list from the Power BI admin portal and note when each licence was last used",
  "Reassign or remove licences nobody has touched for a period you are comfortable with, such as 90 days",
  "Count how many people create reports and how many only view them",
  "List every report that needs more than eight refreshes a day",
  "Confirm security, audit and compliance requirements with the people who own them",
  "Map every data source and mark the ones that need a gateway",
  "If you have Premium or Fabric capacity, review how much of it is actually used",
  "Price at least one alternative mix against what you pay today",
  "Record renewal dates and who owns the Microsoft agreement",
];

const FAQS = [
  {
    q: "How much does Power BI cost for a small business?",
    a: "For a team under about 50 users with straightforward reporting, Pro licences are usually the most economical place to start. At the approximate price quoted in this guide, $13.60 AUD per user per month, a ten-person analytics team costs around $1,632 a year. Check Microsoft’s current pricing before you budget, and remember that gateway servers and any compliance requirements sit on top.",
  },
  {
    q: "Does everyone who views a report need a Pro licence?",
    a: "On Pro, generally yes. People who view shared content need a licence as well as the people who build it. Larger capacities can change that, because Microsoft’s published terms have let viewers use content without individual Pro licences once the capacity is big enough. The rules differ by SKU and change over time, so confirm the current terms before you rely on them.",
  },
  {
    q: "What is the difference between Premium Per User and Premium capacity?",
    a: "Premium Per User is priced per person and unlocks Premium features for that person. Premium capacity is a reserved block of computing power with a fixed monthly price that serves many viewers. Per-user plans tend to suit smaller groups that need advanced features, while capacity tends to suit larger audiences or strict compliance needs.",
  },
  {
    q: "Is Microsoft Fabric replacing Power BI Premium?",
    a: "Microsoft has been steering capacity purchases towards Fabric F SKUs, and Power BI is part of the Fabric platform. How that affects an existing Premium agreement depends on your contract and Microsoft’s published timelines, so check with your Microsoft partner.",
    link: {
      href: "/services/microsoft-power-platform/microsoft-fabric",
      text: "Our Fabric page explains how it fits with Power BI.",
    },
  },
  {
    q: "How often should we review our Power BI licences?",
    a: "Quarterly is a good rhythm for most organisations, with an extra review whenever headcount, reporting needs or compliance obligations change. A quick check of who has used their licence recently often finds savings on its own.",
  },
];

const STRATEGIES = [
  {
    Icon: IconUsers,
    title: "Hybrid licensing",
    body: (
      <>
        A hybrid strategy typically works best. Use Pro licences for report
        creators and power users who need collaboration features, Premium
        capacity for broad viewing access, and evaluate carefully whether
        Premium Per User makes sense for your middle tier of users who need some
        advanced features but not full Premium capacity.
      </>
    ),
  },
  {
    Icon: IconLayers,
    title: "Workspace-based licensing",
    body: (
      <>
        Not every workspace needs Premium capabilities. By using Premium
        workspaces for reports that require advanced features and Pro workspaces
        for simpler departmental reporting, you can reduce the total Premium
        capacity you need while still meeting all your requirements.
      </>
    ),
  },
  {
    Icon: IconMail,
    title: "Change how you distribute",
    body: (
      <>
        Some businesses reduce licence requirements by changing how they share
        information. Scheduled PDF or{" "}
        <InlineLink href="/services/microsoft-powerpoint">
          PowerPoint
        </InlineLink>{" "}
        exports can reach people who don’t need interactive access. You
        sacrifice interactivity, but it is perfectly adequate when users just
        need to see the current state of their metrics. What your setup allows
        depends on your licence and capacity, so confirm that before you design
        around it.
      </>
    ),
  },
  {
    Icon: IconTable,
    title: "Excel with Power Query",
    body: (
      <>
        For analytical users with needs beyond viewing reports,{" "}
        <InlineLink href="https://www.excelexperts.com.au">Excel</InlineLink>{" "}
        with <InlineLink href="/services/power-query">Power Query</InlineLink>{" "}
        is an interesting alternative. Power Query is included in Excel for
        Microsoft 365, so many organisations have no extra licence to buy.
        Analysts can build their own data models locally and publish summary
        information to{" "}
        <InlineLink href="/services/microsoft-power-platform/microsoft-power-bi">
          Power BI
        </InlineLink>
        , reducing the number of Pro licences needed.
      </>
    ),
  },
];

function InlineLink({ href, children }) {
  return (
    <Link href={href} className={styles.inlineLink}>
      {children}
    </Link>
  );
}

function Callout({ Icon, label, children }) {
  return (
    <aside className={styles.callout}>
      <span className={styles.calloutIcon}>
        <Icon />
      </span>
      <div className={styles.calloutBody}>
        <p className={styles.calloutLabel}>{label}</p>
        <div className={styles.calloutText}>{children}</div>
      </div>
    </aside>
  );
}

function ProTip({ children }) {
  return (
    <p className={styles.proTip}>
      <span className={styles.proTipIcon}>
        <IconBulb />
      </span>
      <span>
        <strong>Pro tip:</strong> {children}
      </span>
    </p>
  );
}

function CostHeading({ Sketch, id, children }) {
  return (
    <div className={styles.costHead}>
      <Sketch className={styles.costSketch} />
      <h3 id={id}>{children}</h3>
    </div>
  );
}

const PowerBILicensingBlogPost = () => {
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
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
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
        articleSection: "Power BI",
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
        {/* HERO */}
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <h1 className={styles.title}>
                Power BI Licensing Costs Spiraling?{" "}
                <span className={styles.accent}>
                  The Hidden Expenses Killing Your ROI
                </span>
              </h1>
              <p className={styles.lede}>
                Power BI is a brilliant platform, right up until the licensing
                invoice arrives. This guide explains in plain English where the
                extra costs hide, how to find your break-even point and how to
                pay only for what your team really uses.
              </p>
              <div className={styles.meta}>
                <span className={styles.avatar} aria-hidden="true">
                  <Image src={scott} alt={AUTHOR_NAME} width={56} height={56} />
                </span>
                <p className={styles.metaText}>
                  <span className={styles.metaName}>By {AUTHOR_NAME}</span>
                  <span>
                    Updated{" "}
                    <time dateTime={DATE_MODIFIED}>
                      {formatDate(DATE_MODIFIED)}
                    </time>
                  </span>
                  <span>{READING_TIME} min read</span>
                </p>
              </div>
            </div>
            <div className={styles.heroArt}>
              <HeroSvg className={styles.heroSvg} />
            </div>
          </div>
        </header>

        {/* AT A GLANCE */}
        <section className={styles.glance} aria-label="At a glance">
          <ul className={styles.glanceList}>
            {GLANCE.map((g) => (
              <li key={g.label} className={styles.glanceCard}>
                <p className={styles.glanceValue}>{g.value}</p>
                <p className={styles.glanceLabel}>{g.label}</p>
                <p className={styles.glanceText}>{g.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className={styles.layout}>
          <nav className={styles.toc} aria-label="Contents">
            <p className={styles.tocLabel}>In this guide</p>
            <ul>
              {TOC.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`}>{t.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <article className={styles.article}>
            {/* INTRO */}
            <section id="intro" className={styles.section}>
              <h2>
                The hidden complexity{" "}
                <span className={styles.accent}>behind Power BI pricing</span>
              </h2>
              <p>
                Power BI has transformed how Australian businesses visualise and
                analyse their data. It’s a genuinely powerful platform that can
                deliver remarkable insights and drive better decision-making
                across organisations of all sizes. However, there’s one aspect
                that consistently catches businesses off guard. The licensing
                costs rarely match initial expectations.
              </p>
              <p>
                The challenge isn’t that Power BI is expensive, it’s that the
                pricing model is fundamentally different from traditional
                software licensing. Microsoft is notorious for complicated
                pricing across its whole platform, and Power BI is a good
                example. Unlike applications where you simply multiply users by
                a per-seat cost, Power BI’s licensing depends on how you’re
                using it, who’s accessing reports, how often data refreshes,
                what features you need and whether you face compliance
                requirements.
              </p>
              <p>
                Research suggests that roughly 40% of organisations overpay for
                their Power BI implementation due to choosing the wrong licence
                mix. Some pay for Premium capacity when Pro licences would
                suffice. Others try to make Pro work when they genuinely need
                Premium, creating frustration and workarounds that cost far more
                than the licence difference.{" "}
                <InlineLink href="/services/microsoft-power-platform/power-bi-support">
                  The key is understanding which situation you’re actually in
                  before you commit
                </InlineLink>
                .
              </p>
              <p>
                This guide is written for the people who end up owning the bill:
                finance leads, IT managers and the analyst who built the first
                dashboard and is now being asked why it costs so much. By the
                end you will know where the hidden costs sit, how to calculate
                your own break-even point, which licence mix suits your
                situation and how to audit what you already pay for.
              </p>
              <Callout
                Icon={IconInfo}
                label="Check the numbers before you budget"
              >
                <p>
                  Dollar figures in this guide are approximate Australian dollar
                  list prices at the time of writing. Microsoft changes prices,
                  limits and product names often, so confirm current details on
                  Microsoft’s pricing pages or with your Microsoft partner
                  before you commit to anything.
                </p>
              </Callout>
            </section>

            {/* WHY IT CONFUSES */}
            <section id="why" className={styles.section}>
              <h2>
                Why Power BI licensing{" "}
                <span className={styles.accent}>confuses everyone</span>
              </h2>
              <p>
                Power BI offers at least six different licence types, each with
                overlapping features and confusing names. There’s Power BI Free
                (which isn’t useful for business), Power BI Pro (which sounds
                professional but has significant limitations), Premium Per User
                (which sounds premium but isn’t the same as Premium) and Premium
                capacity (which comes in multiple flavours with cryptic names
                like P1, P2, EM3 and A SKUs).
              </p>
              <figure className={styles.diagram}>
                <div className={styles.diagramScroll}>
                  <div className={styles.diagramInner}>
                    <LadderSvg className={styles.svg} />
                  </div>
                </div>
                <figcaption>
                  The licence ladder. Names and availability change, so treat
                  this as a map and not a price list.
                </figcaption>
              </figure>
              <p>
                Microsoft also keeps changing the names and restructuring the
                offerings. What was Premium Gen1 became Premium Gen2, which is
                now being rolled into something called{" "}
                <InlineLink href="/services/microsoft-power-platform/microsoft-fabric">
                  Fabric
                </InlineLink>
                , with F SKUs. Microsoft has been steering new capacity
                purchases that way, so check which options you can actually buy
                today. This constant evolution means that advice from even 12
                months ago might be outdated.
              </p>
              <p>
                The real complexity comes from how Power BI determines what
                licence you need. It’s not just about who views reports, it’s
                about how you’re sharing them, how often your data refreshes,
                whether you need to meet compliance requirements and what
                features your reports use. A dashboard that works perfectly on
                one licence type might require a completely different (and more
                expensive) licence if you add a single feature or change how
                it’s shared.
              </p>
              <p>
                A simple way to think about it: Pro and Premium Per User are
                priced per person, so your bill grows with headcount. Capacity
                options are priced per reserved block of computing power, so
                your bill is mostly fixed no matter how many people look at a
                report. Every decision in this guide comes back to which of
                those two shapes suits your business.
              </p>
            </section>

            {/* FIVE HIDDEN COSTS */}
            <section id="costs" className={styles.section}>
              <h2>
                The five hidden costs{" "}
                <span className={styles.accent}>nobody warns you about</span>
              </h2>
              <p>
                None of these costs is hidden on Microsoft’s price list. They
                are hidden because nobody connects them to a dashboard request
                until the invoice lands.
              </p>

              <div className={styles.cost}>
                <CostHeading Sketch={ViewerSketch} id="viewer-trap">
                  The viewer trap
                </CostHeading>
                <p>
                  This is where most businesses get caught. Your development
                  team builds beautiful dashboards, and naturally, they want to
                  share them. The CEO wants to see sales performance. The
                  finance team wants access to cost analysis. Department heads
                  want their team KPIs. Before you know it, you need to give 50,
                  100 or 200 people access to view these reports.
                </p>
                <p>
                  Here’s where it gets expensive. On Pro, every single person
                  who views a shared report needs a Power BI Pro licence (about
                  $13.60 AUD per user per month), or you need to move to Premium
                  capacity (starting at about $6,858 AUD per month). For 50
                  viewers on Pro licences, you’re looking at $8,160 per year.
                  For 100 viewers, that jumps to $16,320. But Premium capacity
                  costs $82,296 per year regardless of user count.
                </p>
                <ul className={styles.costFigures}>
                  {COST_FIGURES.map((c) => (
                    <li key={c.label}>
                      <span className={styles.costFigureValue}>{c.value}</span>
                      <span className={styles.costFigureLabel}>{c.label}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  The mathematics seem simple, but they’re not. Most businesses
                  assume they should stick with Pro licences because the numbers
                  look better. But Premium capacity includes features that Pro
                  doesn’t, and once you factor in those requirements, the
                  break-even point shifts dramatically. The typical crossover
                  happens somewhere between 400 and 500 users, but this varies
                  wildly based on your specific needs.
                </p>
                <ProTip>
                  count viewers, not builders. Price the handful of people who
                  create reports separately from the long tail of people who
                  only look.
                </ProTip>
              </div>

              <div className={styles.cost}>
                <CostHeading Sketch={RefreshSketch} id="refresh-requirements">
                  The real-time refresh requirements
                </CostHeading>
                <p>
                  When businesses first explore Power BI, they often build
                  dashboards that pull data once or twice a day. This works fine
                  with Pro licences, which currently allow up to eight scheduled
                  refreshes per day. But then someone asks a reasonable
                  question: “Can we see this updated every hour?” or “Can we get
                  real-time inventory levels?”
                </p>
                <p>
                  The moment you need more than eight refreshes per day, you
                  have to step up. That might be Premium Per User, which allows
                  more frequent refreshes, Premium capacity, or a different way
                  of connecting to the data altogether. A retail business in
                  Melbourne learned this the hard way. They started with Pro
                  licences for their ten-person analytics team, costing $1,632
                  per year. Everything worked perfectly until they built a
                  dashboard tracking hourly sales across their stores. That
                  single requirement pushed them to price Premium capacity at
                  $82,296 per year!
                </p>
                <p>
                  Before you accept a jump like that, compare the cheaper
                  routes. Premium Per User can cover a small group that needs
                  frequent refreshes. DirectQuery or live connections can show
                  current data without scheduled refreshes at all, although they
                  come with their own performance and design trade-offs. Limits
                  differ by licence, so confirm the current numbers with
                  Microsoft.
                </p>
              </div>

              <div className={styles.cost}>
                <CostHeading Sketch={GatewaySketch} id="gateway">
                  The gateway infrastructure nobody mentions
                </CostHeading>
                <p>
                  If your data lives on-premises, in local{" "}
                  <InlineLink href="/blog/power-apps-with-sql-database">
                    SQL Server databases
                  </InlineLink>
                  , file servers or legacy systems, you’ll need something called
                  a Power BI gateway to connect your cloud-based Power BI
                  service to that data. Microsoft provides the gateway software
                  for free, which sounds great. What they don’t emphasise is
                  everything else you need to make it work.
                </p>
                <p>
                  The gateway needs a Windows machine that stays switched on and
                  connected, and Microsoft recommends a dedicated server for
                  production use. It shouldn’t be installed on a domain
                  controller, so you’re usually looking at additional server
                  infrastructure. If you’re running this on-premises, that’s the
                  cost of the server hardware and Windows Server licensing. If
                  you’re hosting it in Azure or another cloud platform, you’re
                  paying for virtual machine hosting continuously. Someone also
                  has to patch it, monitor it and fix it when it goes offline.
                </p>
                <p>
                  The alternative is moving to a cloud-first data architecture
                  using Azure SQL Database, Dataverse or other cloud data
                  sources, which our{" "}
                  <InlineLink href="/services/cloud-based-solutions-with-azure">
                    cloud and Azure solutions
                  </InlineLink>{" "}
                  team does regularly. This removes the gateway requirement for
                  those sources, but it means overhauling how your data is
                  stored and accessed, which isn’t always feasible or
                  cost-effective in the short term.
                </p>
                <ProTip>
                  list every data source behind your reports and mark the ones
                  that sit on-premises. That list is the shopping list for your
                  gateway.
                </ProTip>
              </div>

              <div className={styles.cost}>
                <CostHeading Sketch={ComplianceSketch} id="compliance">
                  Compliance and security requirements
                </CostHeading>
                <p>
                  Australian businesses in regulated industries face an
                  additional licensing challenge. Financial services firms
                  subject to APRA regulations, healthcare organisations handling
                  patient data, or companies dealing with government contracts
                  in protected security zones can discover that Pro licences
                  alone don’t meet their compliance requirements.
                </p>
                <p>
                  Premium capacity adds enterprise-grade features such as extra
                  security controls and governance tools that Pro alone may not
                  cover. Once a security or compliance review identifies these
                  requirements, there’s often no workaround. You’re moving to a
                  higher tier, and that $82,296 annual cost can become
                  non-negotiable regardless of your user count or other needs.
                </p>
                <p>
                  The frustrating part is that these requirements exist from day
                  one, but many businesses don’t identify them until they’re
                  already deeply invested in a Pro-based deployment. A financial
                  services firm in Melbourne deployed Power BI Pro across their
                  business, trained 50 staff members, built dozens of reports,
                  and then had their annual security audit reveal that they
                  needed Premium for audit logging capabilities. The CFO wasn’t
                  thrilled about that conversation.
                </p>
                <ProTip>
                  ask your security or risk team for their requirements before
                  the pilot, not after the rollout. A one-page checklist is
                  enough.
                </ProTip>
              </div>

              <div className={styles.cost}>
                <CostHeading Sketch={SprawlSketch} id="sprawl">
                  Licence sprawl and unused seats
                </CostHeading>
                <p>
                  The fifth cost is the quietest. Licences get assigned during a
                  pilot, a project or an onboarding rush, and then nobody
                  removes them. People change roles, contractors finish and a
                  handful of users never open a report at all. On per-user
                  plans, every one of those seats keeps billing.
                </p>
                <p>
                  Sprawl is also the cheapest cost to fix. An export of your
                  user list from the Power BI admin portal, matched against when
                  each person last used the service, will usually show seats you
                  can reassign or remove straight away. The health check later
                  in this guide shows how.
                </p>
              </div>
            </section>

            {/* BREAK-EVEN */}
            <section id="breakeven" className={styles.section}>
              <h2>
                The break-even analysis{" "}
                <span className={styles.accent}>that actually matters</span>
              </h2>
              <p>
                Understanding Power BI licensing ultimately comes down to
                knowing your break-even points. The challenge is that there
                isn’t a single break-even calculation, there are several,
                depending on your specific requirements and user patterns.
              </p>
              <figure className={styles.diagram}>
                <div className={styles.diagramScroll}>
                  <div className={styles.diagramInner}>
                    <BreakEvenSvg className={styles.svg} />
                  </div>
                </div>
                <figcaption>
                  Pro seats against Premium capacity, using the approximate
                  prices quoted in this guide.
                </figcaption>
              </figure>
              <p>
                The chart uses simple arithmetic. A Pro licence at about $13.60
                a month costs $163.20 a year, and capacity at about $6,858 a
                month costs $82,296 a year. Dividing one by the other gives
                roughly 504 users. Add in the features that only Premium offers
                and the crossover usually lands somewhere between 400 and 500.
              </p>
              <div className={styles.tableWrap}>
                <table>
                  <caption className={styles.srOnly}>
                    Indicative annual cost by licensing scenario, in Australian
                    dollars
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Scenario</th>
                      <th scope="col">Best licence type</th>
                      <th scope="col">Annual cost range (AUD)</th>
                      <th scope="col">Watch out for</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TABLE_ROWS.map((r) => (
                      <tr key={r.scenario}>
                        <th scope="row">{r.scenario}</th>
                        <td>{r.licence}</td>
                        <td>{r.cost}</td>
                        <td>{r.watch}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                The real break-even analysis needs to account for your specific
                mix of requirements. A business with 300 users might choose
                Premium capacity over Premium Per User licences because they
                need frequent data refreshes. Another with 600 users might stick
                with a hybrid approach, using Pro for most viewers and a Premium
                workspace for report creators. The “right” answer depends on
                your unique combination of user count, feature requirements,
                compliance needs and data architecture.
              </p>
            </section>

            {/* CHOOSE */}
            <section id="choose" className={styles.section}>
              <h2>
                Which licence mix{" "}
                <span className={styles.accent}>fits your business?</span>
              </h2>
              <p>
                Use the flow below as a first filter. It won’t replace a proper
                calculation, but it will tell you which direction to calculate
                in.
              </p>
              <figure className={styles.diagram}>
                <div className={styles.diagramScroll}>
                  <div className={styles.diagramInner}>
                    <DecisionSvg className={styles.svg} />
                  </div>
                </div>
                <figcaption>
                  A three-question filter for choosing a starting point.
                </figcaption>
              </figure>
              <p>
                If you land on Pro, the work is making that choice stick:
                separate creators from viewers and review seats regularly. If
                you land on Premium Per User or capacity, price a few sizes
                before you sign, because the jump between tiers can be large. If
                you land on Fabric, involve whoever owns your wider data
                platform, because Fabric capacity is shared with other
                workloads.
              </p>
              <p>
                If you would rather have someone model this for you, our{" "}
                <InlineLink href="/services/dashboards">
                  dashboard and reporting
                </InlineLink>{" "}
                team can build the calculation around your actual users,
                refreshes and data sources.
              </p>
            </section>

            {/* STRATEGIES */}
            <section id="strategies" className={styles.section}>
              <h2>
                Smart licensing{" "}
                <span className={styles.accent}>strategies</span>
              </h2>
              <p>
                The most effective licensing approach is generally about using
                the right licence type for each user’s actual needs. These four
                strategies work on their own or together.
              </p>
              <ul className={styles.methods}>
                {STRATEGIES.map((s) => (
                  <li key={s.title} className={styles.method}>
                    <span className={styles.badge}>
                      <s.Icon />
                    </span>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </li>
                ))}
              </ul>
              <p>
                A fifth option worth pricing is Fabric capacity. Microsoft’s
                published terms have allowed viewers on larger capacities to
                read reports without individual Pro licences, which changes the
                maths for big audiences. The size threshold and terms change, so
                ask your Microsoft partner for the current rules before you plan
                around it.
              </p>
              <ProTip>
                write the licence each report needs next to the report’s name.
                When someone asks for a new feature, you can see straight away
                whether it changes the bill.
              </ProTip>
            </section>

            {/* MISTAKES */}
            <section id="mistakes" className={styles.section}>
              <h2>
                Common licensing <span className={styles.accent}>mistakes</span>
              </h2>
              <p>
                Most overspends trace back to one of five habits. Each card
                shows the habit on the left and the fix on the right.
              </p>
              <ul className={styles.mistakes}>
                {MISTAKES.map((m) => (
                  <li key={m.title} className={styles.mistake}>
                    <h3>{m.title}</h3>
                    <div className={styles.sketch}>
                      <m.Sketch />
                    </div>
                    <p className={styles.mistakeText}>{m.text}</p>
                    <p className={styles.instead}>
                      <span className={styles.insteadPill}>Instead</span>
                      {m.instead}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            {/* HEALTH CHECK */}
            <section id="healthcheck" className={styles.section}>
              <h2>
                Your Power BI licensing{" "}
                <span className={styles.accent}>health check</span>
              </h2>
              <p>
                Set aside an hour. These steps are the ones that most often
                reveal savings, and none of them needs a specialist.
              </p>
              <ul className={styles.checklist}>
                {CHECKLIST.map((c) => (
                  <li key={c}>
                    <span className={styles.tick}>
                      <IconCheck />
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <p>
                Write the answers down in a simple table: licence type, number
                of seats, monthly cost, owner and renewal date. That one page is
                the baseline every future decision is measured against.
              </p>
            </section>

            {/* WHEN PROFESSIONAL HELP PAYS */}
            <section id="help" className={styles.section}>
              <h2>
                When professional help{" "}
                <span className={styles.accent}>pays for itself</span>
              </h2>
              <p>
                For smaller deployments with under 50 users and straightforward
                requirements, businesses can usually navigate Power BI licensing
                successfully on their own. The calculations are relatively
                simple, the stakes are lower and mistakes are easier to correct
                without massive financial impact.
              </p>
              <p>
                Once you cross into 100+ users, involve multiple departments,
                face compliance requirements or operate across hybrid
                on-premises and cloud environments, professional licensing
                optimisation can often pay for itself within 3 to 6 months. A
                proper audit identifies unused licences, right-sizes Premium
                capacity, optimises the mix of licence types and establishes
                monitoring to prevent future waste.
              </p>
              <p>
                A healthcare provider in Brisbane engaged{" "}
                <InlineLink href="/services/microsoft-power-platform/power-platform-support">
                  professional help
                </InlineLink>{" "}
                for a licensing audit after their Power BI costs seemed
                unexpectedly high. The audit revealed they were paying for
                Premium Per User licences for 200 users who actually just needed
                viewing access. Migration to a Premium capacity model with Pro
                licences for creators saved them $47,000 annually. The audit
                cost was recovered in the first month, and the savings continue
                every year.
              </p>
              <div className={styles.ctaBand}>
                <div className={styles.ctaCopy}>
                  <h3>Not sure which licence mix fits?</h3>
                  <p>
                    Send us your user numbers and refresh needs and we’ll show
                    you where the savings are.
                  </p>
                </div>
                <div className={styles.ctaActions}>
                  <Link href="/contact-us" className="btn">
                    Book a licensing review
                  </Link>
                  <Link
                    href="/services/microsoft-power-platform/power-bi-support"
                    className={styles.ctaLink}
                  >
                    Explore Power BI support <IconArrow />
                  </Link>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className={styles.section}>
              <h2>
                Power BI licensing{" "}
                <span className={styles.accent}>questions answered</span>
              </h2>
              <div className={styles.faqList}>
                {FAQS.map((f) => (
                  <details key={f.q} className={styles.faq}>
                    <summary>{f.q}</summary>
                    <p>
                      {f.a}
                      {f.link ? (
                        <>
                          {" "}
                          <InlineLink href={f.link.href}>
                            {f.link.text}
                          </InlineLink>
                        </>
                      ) : null}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* CONCLUSION */}
            <section id="next" className={styles.section}>
              <h2>
                Taking action before costs{" "}
                <span className={styles.accent}>spiral further</span>
              </h2>
              <p>
                Power BI licensing doesn’t have to be confusing or result in
                massive unexpected costs. The businesses that succeed are those
                that invest time understanding their actual requirements before
                committing to a licensing approach, audit their usage regularly
                to identify optimisation opportunities, and adjust their
                strategy as their needs evolve rather than simply accepting
                whatever licence structure they started with.
              </p>
              <ol className={styles.timeline}>
                <li>
                  <span className={styles.timelineBadge}>
                    <IconSearch />
                  </span>
                  <div>
                    <h3>This week</h3>
                    <p>
                      Start by auditing your current licence assignments. Export
                      your user list from the Power BI admin portal and check
                      when each licence was last accessed. Review your Premium
                      capacity utilisation if you have it. Identify any
                      compliance requirements that might affect your licensing
                      choices. These steps take less than an hour but often
                      reveal immediate opportunities to reduce costs.
                    </p>
                  </div>
                </li>
                <li>
                  <span className={styles.timelineBadge}>
                    <IconCalc />
                  </span>
                  <div>
                    <h3>This month</h3>
                    <p>
                      Complete a proper cost calculation based on your actual
                      usage patterns and requirements. Count how many users
                      genuinely create reports versus just viewing them.
                      Determine your real data refresh needs. Assess whether you
                      need any Premium-only features. Compare your current spend
                      against what an optimised approach would cost. The
                      difference often surprises people.
                    </p>
                  </div>
                </li>
                <li>
                  <span className={styles.timelineBadge}>
                    <IconCalendar />
                  </span>
                  <div>
                    <h3>Every quarter</h3>
                    <p>
                      Treat licensing as an ongoing optimisation opportunity,
                      not a one-time decision at deployment. Microsoft releases
                      new licence types, changes pricing and modifies features
                      regularly. Your business needs evolve, user counts change
                      and requirements shift. Regular quarterly or annual
                      reviews ensure you’re not paying for more than you need
                      while still meeting all your actual requirements.
                    </p>
                  </div>
                </li>
              </ol>
              <p>
                Don’t wait for the next surprise bill or the awkward CFO
                conversation. Whether you handle it yourself or engage
                professional help, getting your Power BI licensing right can
                save thousands to tens of thousands of dollars annually while
                ensuring you have the capabilities you actually need.
              </p>

              <div className={styles.author}>
                <span className={styles.avatarLarge} aria-hidden="true">
                  <Image src={scott} alt={AUTHOR_NAME} width={80} height={80} />
                </span>
                <div>
                  <h3>About the author</h3>
                  <p className={styles.authorName}>{AUTHOR_NAME}</p>
                  <p>
                    Scott founded Office Experts Group in 2000 and has since
                    established himself as one of Australia’s foremost
                    authorities on Microsoft technologies. With decades of
                    experience in design, programming and consulting, he
                    continues to help businesses unlock the full potential of
                    Microsoft solutions including the Power Platform.
                  </p>
                </div>
              </div>
            </section>

            {/* RELATED */}
            <section id="related" className={styles.section}>
              <h2>
                Related <span className={styles.accent}>reading</span>
              </h2>
              <ul className={styles.related}>
                {RELATED.map((r) => (
                  <li key={r.href} className={styles.relatedCard}>
                    <p className={styles.relatedKind}>{r.kind}</p>
                    <h3>{r.title}</h3>
                    <p>{r.description}</p>
                    <Link href={r.href} className={styles.relatedLink}>
                      {r.linkText} <IconArrow />
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

export default PowerBILicensingBlogPost;
