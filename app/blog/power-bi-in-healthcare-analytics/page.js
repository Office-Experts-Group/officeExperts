// /app/blog/power-bi-in-healthcare-analytics/page.js
import Image from "next/image";
import Link from "next/link";

import Contact from "@/components/Contact";
import { generateOrganizationSchema } from "@/utils/schemaGenerators";
import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";
import styles from "@/styles/powerBiInHealthcareAnalyticsBlog.module.scss";

import scott from "@/public/team/scott.webp";

import HeroSvg from "./(svgs)/HeroSvg";
import DataFlowSvg from "./(svgs)/DataFlowSvg";
import DecisionSvg from "./(svgs)/DecisionSvg";
import {
  FocusSketch,
  ChampionSketch,
  WarehouseSketch,
  DefinitionSketch,
  AccessSketch,
} from "./(svgs)/Illustrations";
import {
  PlugIcon,
  LayersIcon,
  ShieldIcon,
  GridIcon,
  TickIcon,
  MinusIcon,
  BulbIcon,
  ArrowIcon,
  PlusIcon,
  InfoIcon,
  AlertIcon,
  ClipboardIcon,
  LockIcon,
  TargetIcon,
} from "./(svgs)/Icons";

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with layout.js.
const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/blog/power-bi-in-healthcare-analytics`;
const PAGE_TITLE = "Power BI in Healthcare Analytics | Office Experts";
const PAGE_DESCRIPTION =
  "See how healthcare providers use Power BI dashboards to reduce readmissions, improve patient flow and protect patient data, and how to start well.";
const PAGE_HEADLINE =
  "Power BI in Healthcare Analytics: Transforming Patient Outcomes with Data";
const BREADCRUMB_NAME = "Power BI in Healthcare Analytics";
const AUTHOR_NAME = "Scott Robinson";
const READING_TIME = "13 min read";
const HERO_IMAGE_PATH = "/logo.png"; // confirm this file exists in the OE /public folder
const HERO_IMAGE_ALT = "Office Experts logo";
const DATE_PUBLISHED = "2025-10-03T09:00:00+10:00";
// Update by hand when content really changes. +11:00 is AEDT (first Sunday in
// October to first Sunday in April), otherwise +10:00. Never a future date.
const DATE_MODIFIED = "2026-11-17T00:00:00+11:00";

const formatDate = (iso) =>
  new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Sydney",
  }).format(new Date(iso));

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
        "How healthcare providers use Power BI to improve care and reduce costs",
      description: PAGE_DESCRIPTION,
      image: `${SITE_URL}${HERO_IMAGE_PATH}`,
      author: { "@type": "Person", name: AUTHOR_NAME },
      publisher: { "@id": `${SITE_URL}#organization` },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      mainEntityOfPage: { "@id": `${PAGE_URL}#webpage` },
      articleSection: "Healthcare analytics",
      keywords: "power bi healthcare analytics",
      inLanguage: "en-AU",
    },
  ],
};

// ─── Small helpers ──────────────────────────────────────────────────────────

const A = ({ href, children }) => (
  <Link href={href} className={styles.inlineLink}>
    {children}
  </Link>
);

const Heading = ({ id, lead, accent }) => (
  <h2 id={`${id}-heading`}>
    {lead ? <>{lead} </> : null}
    <span className={styles.accent}>{accent}</span>
  </h2>
);

const Callout = ({ Icon, label, children }) => (
  <div className={styles.callout}>
    <svg
      className={styles.rings}
      viewBox="0 0 120 120"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="60" cy="60" r="16" />
      <circle cx="60" cy="60" r="30" />
      <circle cx="60" cy="60" r="44" />
    </svg>
    <span className={styles.calloutChip}>
      <Icon />
    </span>
    <div>
      <span className={styles.calloutLabel}>{label}</span>
      <p className={styles.calloutText}>{children}</p>
    </div>
  </div>
);

const Metrics = ({ title, items }) => (
  <div className={styles.metrics}>
    <span className={styles.metricsLabel}>{title}</span>
    <ul className={styles.chips}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const Diagram = ({ caption, children }) => (
  <figure className={styles.diagram}>
    <div className={styles.diagramScroll}>
      <div className={styles.diagramInner}>{children}</div>
    </div>
    <figcaption>{caption}</figcaption>
  </figure>
);

// ─── Data ───────────────────────────────────────────────────────────────────

const TOC = [
  { id: "challenge", label: "The data challenge" },
  { id: "why", label: "Why Power BI" },
  { id: "limits", label: "What it can and can’t do" },
  { id: "readmissions", label: "Reducing readmissions" },
  { id: "operations", label: "Operational efficiency" },
  { id: "population", label: "Population health" },
  { id: "compliance", label: "Compliance and quality" },
  { id: "choose", label: "Which dashboard first" },
  { id: "data", label: "Connecting your data" },
  { id: "start", label: "Getting started" },
  { id: "mistakes", label: "Common mistakes" },
  { id: "future", label: "The future" },
  { id: "help", label: "When to get help" },
  { id: "faq", label: "FAQs" },
  { id: "conclusion", label: "Conclusion" },
];

const GLANCE = [
  {
    value: "2 to 3",
    label: "Dashboards for a pilot",
    line: "Start with the measures that matter most, then add more once people trust the numbers.",
  },
  {
    value: "1 view",
    label: "Across your systems",
    line: "Bring records, lab results, scheduling and device data into one model people can filter.",
  },
  {
    value: "Role-based",
    label: "Access you can audit",
    line: "Row-level security and activity logs help keep patient data with the people who need it.",
  },
];

const REASONS = [
  {
    Icon: PlugIcon,
    title: "Connects to many sources",
    text: "Combine records, lab results, scheduling, finance and spreadsheets in one data model.",
  },
  {
    Icon: LayersIcon,
    title: "One shared view",
    text: "Emergency visits, lab results, medications and imaging findings can sit side by side, so teams work from the same information.",
  },
  {
    Icon: ShieldIcon,
    title: "Security you can audit",
    text: "Row-level security, workspace roles and activity logs help keep patient data with the people who need it.",
  },
  {
    Icon: GridIcon,
    title: "Fits Microsoft 365",
    text: "It works with Teams, SharePoint, Excel and your existing sign-in, so adoption is easier for staff who already use them.",
  },
];

const GOOD_FIT = [
  "Showing trends, targets and benchmarks across wards, clinics and sites",
  "Flagging patients or groups who need follow-up, using rules clinicians have agreed",
  "Giving managers near real-time views of beds, waits and staffing, as fresh as the data feed",
  "Letting clinicians explore their own data without waiting for a report",
  "Sharing the same numbers across teams, so meetings stop debating whose figures are right",
];

const NOT_FIT = [
  "Replacing your electronic medical record or a clinical decision support system",
  "Fixing poor data entry upstream. Dashboards expose messy data, they don’t cure it",
  "Making clinical predictions on its own. A risk model has to be built and validated, then Power BI displays the result",
  "Deciding your privacy position. Configuration and governance are still your responsibility",
];

const WALKTHROUGH = [
  {
    Icon: LockIcon,
    title: "Limit who sees what",
    steps: [
      "List the roles: clinician, ward manager, executive, analyst.",
      "Use row-level security so each role sees only its own sites or patients.",
      "Test every role with “View as” before you share.",
    ],
  },
  {
    Icon: ShieldIcon,
    title: "Keep names out of broad reports",
    steps: [
      "Build trend dashboards from de-identified or summarised data.",
      "Put patient-level drill-through on a separate page or report with tighter access.",
      "Avoid identifiers in exports and screenshots.",
    ],
  },
  {
    Icon: ClipboardIcon,
    title: "Label and log",
    steps: [
      "Apply sensitivity labels so protection follows the file.",
      "Review who can reach each workspace every quarter.",
      "Use the audit log to see who viewed or exported what.",
    ],
  },
  {
    Icon: TargetIcon,
    title: "Test before go-live",
    steps: [
      "Check a sample of numbers against the source system.",
      "Ask a clinician to confirm every definition.",
      "Have your privacy officer review the final design.",
    ],
  },
];

const CONNECTIONS = [
  {
    approach: "Reporting database or warehouse from your records vendor",
    works: "You want vendor-supported tables that clinicians already trust.",
    watch:
      "Licence terms, and some copies refresh overnight rather than during the day.",
  },
  {
    approach: (
      <>
        Your own data warehouse or a{" "}
        <A href="/services/microsoft-power-platform/microsoft-fabric">
          Microsoft Fabric
        </A>{" "}
        lakehouse
      </>
    ),
    works: "You combine several systems and need history over time.",
    watch:
      "Needs design and ongoing care. Start with only the tables you need.",
  },
  {
    approach: "Scheduled extracts (CSV or Excel)",
    works: "You’re proving an idea or running a small clinic.",
    watch: "Manual steps break easily and are hard to secure and audit.",
  },
  {
    approach: "Direct to the live clinical system",
    works: "Rarely recommended.",
    watch:
      "Can slow clinical systems and may breach vendor terms. Check before trying it.",
  },
];

const STEPS = [
  {
    title: "Choose one question worth answering",
    text: "Pick a problem a clinician or manager feels every week, such as discharge delays. Write it down in one sentence and agree who will use the answer.",
    tip: "If you can’t say who will act on a number, leave it off the first version.",
  },
  {
    title: "Map the data and who owns it",
    text: "List the systems involved, who looks after each one and how often the data changes. Confirm what your vendor allows you to extract.",
    tip: "Ask for a data dictionary early. Misunderstood fields cause most rework.",
  },
  {
    title: "Agree the definitions",
    text: "Settle what counts as a readmission, an admission or a discharge, and write it down. Clinicians and finance teams often define them differently.",
    tip: "Put the definition on the dashboard itself, in plain words.",
  },
  {
    title: "Build a small, secured pilot",
    text: "Build two or three focused pages in a governed workspace, with row-level security from day one. Connect through a warehouse or reporting copy, not the live system.",
    tip: "Show a clinician early and often. A rough page in week one beats a polished one in week eight.",
  },
  {
    title: "Review, then roll out",
    text: "Check the numbers against the source, train users and review how the dashboard is used after a few weeks. Add more dashboards only once people trust the first ones.",
    tip: "Look at who opens each page. Pages nobody uses are a sign to change or retire them.",
  },
];

const MISTAKES = [
  {
    Sketch: FocusSketch,
    title: "Building a wall of charts",
    instead:
      "Give each page one question and five or six visuals. Lead with the numbers people act on.",
  },
  {
    Sketch: ChampionSketch,
    title: "Building without a clinician",
    instead:
      "Name a clinical champion who reviews every draft and speaks for the people who will use it.",
  },
  {
    Sketch: WarehouseSketch,
    title: "Reporting straight from the live system",
    instead:
      "Read from a warehouse or reporting copy, so dashboards never slow clinical work.",
  },
  {
    Sketch: DefinitionSketch,
    title: "Letting every team define its own numbers",
    instead:
      "Agree one written definition per measure and show it on the dashboard.",
  },
  {
    Sketch: AccessSketch,
    title: "Giving everyone the same access",
    instead:
      "Use roles and row-level security, and keep patient-level detail on a separate, restricted page.",
  },
];

const CHECKLIST = [
  "Numbers match the source system for a sample of cases",
  "Each measure has a written definition on the page",
  "A clinical champion has signed off",
  "Row-level security is tested for every role",
  "Patient identifiers appear only where they’re needed",
  "The refresh schedule is shown and monitored",
  "Your privacy officer has reviewed the design",
  "Someone owns the dashboard after go-live",
];

const FAQS = [
  {
    q: "Can Power BI be used with patient data in Australia?",
    a: (
      <>
        It can be, when it’s configured and governed properly. Your obligations
        may include the Privacy Act 1988, the Australian Privacy Principles and
        state or territory health records laws. Confirm where your tenant’s data
        is stored and which security controls are switched on, and have your
        privacy officer or legal adviser review the design. This article isn’t
        legal advice.
      </>
    ),
  },
  {
    q: "Can Power BI connect to my electronic medical record?",
    a: (
      <>
        Usually indirectly. Most teams connect to a reporting database, data
        warehouse or approved extract provided by the records vendor, rather
        than to the live clinical system. What’s possible depends on your
        vendor, your contract and your version, so ask them early.
      </>
    ),
  },
  {
    q: "Can Power BI predict readmissions?",
    a: (
      <>
        Power BI displays predictions. It doesn’t create clinical risk models by
        itself. A model has to be built and clinically validated, either by your
        vendor or by a data science team using tools such as Microsoft Fabric or
        Azure Machine Learning. Power BI then shows the score next to the
        patient list.
      </>
    ),
  },
  {
    q: "How long does a first dashboard take?",
    a: (
      <>
        A focused pilot on one clean data source is often a matter of weeks
        rather than months. Most of the time goes into getting access to the
        data and agreeing definitions, not into drawing charts.
      </>
    ),
  },
  {
    q: "Will clinicians need training?",
    a: (
      <>
        A short walkthrough is usually enough when the dashboard answers a
        question they already have. Build with a clinical champion, keep each
        page focused and put definitions on the page, and adoption tends to
        follow.
      </>
    ),
  },
  {
    q: "What does Power BI cost?",
    a: (
      <>
        It depends on the licences you choose and how many people need to view
        or build reports. Our guide to{" "}
        <A href="/blog/power-bi-licensing-costs">Power BI licensing costs</A>{" "}
        explains the main options.
      </>
    ),
  },
];

const caseStudy = getCaseStudyBySlug(
  "healthcare-patient-form-followup-automation",
);

const RELATED = [
  caseStudy && {
    href: `/case-studies/${caseStudy.slug}`,
    type: "Case study",
    title: caseStudy.title,
    description: caseStudy.truncatedDescription,
  },
  {
    href: "/blog/power-bi-for-financial-services",
    type: "Article",
    title: "Power BI for financial services",
    description:
      "How finance teams use Power BI for reporting, analysis and decision-making.",
  },
  {
    href: "/blog/power-bi-licensing-costs",
    type: "Article",
    title: "Power BI licensing costs",
    description: "What Power BI costs and how its licensing options compare.",
  },
].filter(Boolean);

// ─── Page ───────────────────────────────────────────────────────────────────

const PowerBIHealthcareBlogPost = () => (
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
            <h1 className={styles.title}>
              Power BI in Healthcare Analytics:{" "}
              <span className={styles.accent}>
                Transforming Patient Outcomes with Data
              </span>
            </h1>
            <p className={styles.lede}>
              Hospitals and clinics hold more data than they can use. Power BI
              turns scattered records, lab results and scheduling data into live
              dashboards, so clinicians and managers can spot risk sooner, move
              patients through care faster and show they meet quality and
              privacy standards.
            </p>
            <div className={styles.authorRow}>
              <span className={styles.avatar} aria-hidden="true">
                <Image src={scott} alt={AUTHOR_NAME} width={38} height={38} />
              </span>
              <p className={styles.authorMeta}>
                <span className={styles.authorName}>By {AUTHOR_NAME}</span>
                <span className={styles.authorDetail}>
                  Updated{" "}
                  <time dateTime={DATE_MODIFIED}>
                    {formatDate(DATE_MODIFIED)}
                  </time>{" "}
                  · {READING_TIME}
                </span>
              </p>
            </div>
          </div>
          <div className={styles.heroArt}>
            <HeroSvg />
          </div>
        </div>
      </header>

      {/* At a glance */}
      <section className={styles.glance} aria-label="At a glance">
        <ul>
          {GLANCE.map(({ value, label, line }) => (
            <li key={label} className={styles.glanceCard}>
              <span className={styles.glanceValue}>{value}</span>
              <span className={styles.glanceLabel}>{label}</span>
              <span className={styles.glanceLine}>{line}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className={styles.layout}>
        <nav className={styles.toc} aria-label="Contents">
          <p className={styles.tocTitle}>Contents</p>
          <ul>
            {TOC.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <article className={styles.article}>
          {/* The data challenge */}
          <section
            id="challenge"
            className={styles.section}
            aria-labelledby="challenge-heading"
          >
            <Heading
              id="challenge"
              lead="The data challenge"
              accent="in healthcare"
            />
            <p>
              Healthcare organisations produce huge amounts of data. Industry
              estimates often suggest a typical organisation generates tens of
              petabytes a year and that the large majority is never used in
              decision-making. The exact figures vary by source, but the pattern
              is familiar: the information exists, yet it sits in separate
              systems and few people have time to pull it together.
            </p>
            <p>
              The pressure to use it is growing. Funding is moving toward
              value-based care, where providers are rewarded for quality and
              outcomes rather than the volume of services delivered. In
              Australia that shows up as activity-based funding, safety and
              quality standards and a steady rise in reporting requirements.
            </p>
            <p>
              Today’s hospitals and clinics collect information from electronic
              medical records, laboratory results, medical images, scheduling
              systems and sensor readings. Many struggle to turn that raw data
              into insight that improves patient care. That is the gap Power BI
              is good at closing.
            </p>
            <Callout Icon={InfoIcon} label="In plain English">
              Power BI is a reporting and dashboard tool. It doesn’t create new
              data. It brings together the data you already hold, so people can
              see it, question it and act on it.
            </Callout>
          </section>

          {/* Why Power BI */}
          <section
            id="why"
            className={styles.section}
            aria-labelledby="why-heading"
          >
            <Heading id="why" lead="Why Power BI" accent="for healthcare?" />
            <p>
              Most of the work in healthcare analytics is connecting data and
              presenting it clearly to people who aren’t analysts. Power BI
              handles both. It connects to a wide range of data sources and lets
              clinicians and managers filter and explore the results themselves.
            </p>
            <p>
              Major electronic medical record systems, including Epic, Oracle
              Health (formerly Cerner) and Meditech, can usually feed reporting
              through a reporting database or data warehouse that Power BI then
              reads. What’s available depends on your vendor and your contract,
              so check early. Done well, this breaks down the data silos that
              have traditionally split patient information across departments.
            </p>
            <ul className={styles.reasonGrid}>
              {REASONS.map(({ Icon, title, text }) => (
                <li key={title} className={styles.reasonCard}>
                  <span className={styles.badge}>
                    <Icon />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
            <p>
              When a clinician opens one dashboard instead of five systems, they
              spend less time hunting for information. Some organisations report
              fewer duplicate tests once teams share a single view, although
              results vary with how the dashboard is used and who acts on it.
            </p>
          </section>

          {/* What it can and can't do */}
          <section
            id="limits"
            className={styles.section}
            aria-labelledby="limits-heading"
          >
            <Heading
              id="limits"
              lead="What Power BI can"
              accent="and can’t do in healthcare"
            />
            <p>
              Being clear about the limits at the start saves a lot of
              frustration later.
            </p>
            <div className={styles.fitGrid}>
              <div className={styles.fitPanel}>
                <h3>A good fit</h3>
                <ul>
                  {GOOD_FIT.map((item) => (
                    <li key={item}>
                      <span className={styles.fitIcon}>
                        <TickIcon />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${styles.fitPanel} ${styles.fitPanelMuted}`}>
                <h3>Not its job</h3>
                <ul>
                  {NOT_FIT.map((item) => (
                    <li key={item}>
                      <span className={styles.fitIcon}>
                        <MinusIcon />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Callout Icon={AlertIcon} label="Important">
              Dashboards inform clinical and operational decisions. They don’t
              replace clinical judgement. Anything that could influence patient
              care should be reviewed by clinicians and your governance team
              before it goes live.
            </Callout>
          </section>

          {/* Readmissions */}
          <section
            id="readmissions"
            className={styles.section}
            aria-labelledby="readmissions-heading"
          >
            <Heading
              id="readmissions"
              lead="Real-world impact:"
              accent="reducing hospital readmissions"
            />
            <p>
              One of the most valuable uses of Power BI in healthcare is
              reducing hospital readmissions. High readmission rates can point
              to gaps in care and, under some funding models, carry financial
              penalties. A readmission dashboard helps by making risk visible
              before the patient leaves.
            </p>
            <p>
              A typical view lets care coordinators filter patients by age,
              diagnosis, other conditions and social factors such as living
              alone or distance from services. They can then prioritise
              follow-up calls and visits for the people most likely to return.
              Where a validated risk score exists, from your records vendor or a
              model your data team has built and clinicians have reviewed, Power
              BI can show that score beside each patient on the list.
            </p>
            <Metrics
              title="Measures to start with"
              items={[
                "30-day unplanned readmission rate",
                "Readmissions by diagnosis group",
                "Length of stay against expected",
                "Post-discharge follow-up completed",
                "High-risk patients awaiting follow-up",
              ]}
            />
            <Callout Icon={TargetIcon} label="Measure your baseline">
              Before you build anything, record your current readmission rate
              and exactly how it’s defined. Without that starting point you
              can’t show whether the dashboard made a difference.
            </Callout>
          </section>

          {/* Operations */}
          <section
            id="operations"
            className={styles.section}
            aria-labelledby="operations-heading"
          >
            <Heading
              id="operations"
              lead="Enhancing"
              accent="operational efficiency"
            />
            <p>
              Operations teams use Power BI to build a live view across wards,
              clinics and sometimes several sites. By combining the records
              system with rostering and bed management data, a single screen can
              show emergency department throughput, bed availability and
              staffing levels.
            </p>
            <p>
              The value is in catching bottlenecks early. If emergency waits
              exceed target, managers see it as it happens and can move staff.
              If a ward is nearing capacity, the team can coordinate discharges
              before patients start queuing. This replaces manual reports that
              ran hours or days behind real events. “Real time” usually means
              refreshed every few minutes, and depends on how often your source
              systems can provide data.
            </p>
            <Metrics
              title="Measures to start with"
              items={[
                "Emergency wait times by triage category",
                "Bed occupancy by ward",
                "Discharges before midday",
                "Theatre utilisation",
                "Staffing against demand",
              ]}
            />
            <p>
              Dashboards show you what’s happening. Automation can then act on
              it. For example, we built scheduled Power Automate flows for an
              allied health provider that{" "}
              <A href="/case-studies/healthcare-patient-form-followup-automation">
                remind patients, escalate overdue forms and close off completed
                ones
              </A>
              , so clinical staff stopped chasing paperwork by hand.
            </p>
          </section>

          {/* Population health */}
          <section
            id="population"
            className={styles.section}
            aria-labelledby="population-heading"
          >
            <Heading
              id="population"
              lead="Population health"
              accent="management"
            />
            <p>
              Providers use Power BI to build population health dashboards that
              track the quality measures that matter: HbA1c control for people
              with diabetes, blood pressure targets for people with hypertension
              and medication adherence across a range of conditions.
            </p>
            <p>
              These dashboards can drill down from group-level trends to the
              individual patients who have gaps in care, such as a missed
              screening or an overdue follow-up appointment. That turns a trend
              line into a call list a practice nurse or care coordinator can
              work through.
            </p>
            <Metrics
              title="Measures to start with"
              items={[
                "HbA1c in target range",
                "Blood pressure in target",
                "Overdue screenings",
                "Medication adherence",
                "Missed follow-up appointments",
              ]}
            />
            <p>
              Remote monitoring programs, where patients use wearable or home
              devices, can feed the same dashboards. They need careful clinical
              oversight and sensible alert thresholds, otherwise staff can be
              flooded with notifications. Keep identifiable drill-through behind
              tighter access than the trend pages, which brings us to privacy.
            </p>
          </section>

          {/* Compliance and quality */}
          <section
            id="compliance"
            className={styles.section}
            aria-labelledby="compliance-heading"
          >
            <Heading
              id="compliance"
              lead="Ensuring compliance"
              accent="and quality"
            />
            <p>
              Healthcare organisations face close scrutiny. In Australia that
              includes the Privacy Act 1988 and the Australian Privacy
              Principles, state and territory health records laws, and the
              quality requirements in frameworks such as the National Safety and
              Quality Health Service Standards. If you handle data about US
              patients, HIPAA may also apply. Check which obligations apply to
              you with your privacy officer or legal adviser.
            </p>
            <p>
              Power BI includes features that support these obligations, such as
              row-level security, sensitivity labels, workspace roles and audit
              logs. Compliance doesn’t come from the product alone, though. It
              comes from how you configure those features and govern who can use
              them.
            </p>
            <p>
              On the quality side, dashboards can bring together patient
              experience survey results, readmission rates by condition,
              incident trends and response times in one place, so quality teams
              spend less time compiling reports and more time acting on them.
            </p>
            <h3 className={styles.subheading}>
              Four habits that keep patient data safe
            </h3>
            <ul className={styles.walkGrid}>
              {WALKTHROUGH.map(({ Icon, title, steps }) => (
                <li key={title} className={styles.walkCard}>
                  <div className={styles.walkHead}>
                    <span className={styles.badge}>
                      <Icon />
                    </span>
                    <h4>{title}</h4>
                  </div>
                  <ol>
                    {steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </li>
              ))}
            </ul>
          </section>

          {/* Which dashboard first */}
          <section
            id="choose"
            className={styles.section}
            aria-labelledby="choose-heading"
          >
            <Heading
              id="choose"
              lead="Which dashboard should you"
              accent="build first?"
            />
            <p>
              Healthcare teams often try to build everything at once. A better
              approach is to start with the problem that’s costing you the most
              today. Use this flow to pick a first dashboard.
            </p>
            <Diagram caption="Decision flow: choosing your first healthcare dashboard.">
              <DecisionSvg />
            </Diagram>
            <p>
              If you’re not sure, a quality scorecard is a sensible start. It
              uses measures you already report, so the data is usually easier to
              find and agreeing the definitions is quicker. You can add flow or
              readmission views once people trust the first dashboard.
            </p>
          </section>

          {/* Connecting your data */}
          <section
            id="data"
            className={styles.section}
            aria-labelledby="data-heading"
          >
            <Heading
              id="data"
              lead="Connecting Power BI"
              accent="to your health data"
            />
            <p>
              Most of the effort in a first project goes into getting reliable
              data into a shape Power BI can use. The diagram shows the usual
              path: copy data from your clinical systems into a store, clean and
              join it, model it around the things you report on, then build
              dashboards on top.
            </p>
            <Diagram caption="From clinical systems to dashboards.">
              <DataFlowSvg />
            </Diagram>
            <p>
              There are several ways to connect. The right choice depends on
              your systems, your vendor’s terms and how fresh the data needs to
              be.
            </p>
            <div className={styles.tableWrap}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Approach</th>
                    <th scope="col">Works well when</th>
                    <th scope="col">Watch out for</th>
                  </tr>
                </thead>
                <tbody>
                  {CONNECTIONS.map(({ approach, works, watch }, i) => (
                    <tr key={i}>
                      <th scope="row">{approach}</th>
                      <td>{works}</td>
                      <td>{watch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              If you’re combining several systems or want to keep history over
              time, a warehouse or Fabric lakehouse is usually worth the extra
              setup. See our{" "}
              <A href="/services/microsoft-power-platform/power-bi-data-integration">
                Power BI data integration
              </A>{" "}
              page for how we approach it.
            </p>
          </section>

          {/* Getting started */}
          <section
            id="start"
            className={styles.section}
            aria-labelledby="start-heading"
          >
            <Heading
              id="start"
              lead="Getting started with Power BI"
              accent="in healthcare"
            />
            <p>
              Implementing Power BI doesn’t require a large upfront investment.
              Many successful projects begin with a focused pilot aimed at one
              specific problem. Most healthcare organisations already hold the
              foundations in their records systems, and Power BI can read from
              them directly or through a warehouse that consolidates several
              sources.
            </p>
            <p>
              A phased approach usually starts with two to three key dashboards
              built around high-impact measures. As people get comfortable and
              see results, you add more.
            </p>
            <ol className={styles.timeline}>
              {STEPS.map(({ title, text, tip }, i) => (
                <li key={title} className={styles.step}>
                  <span className={styles.stepBadge} aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <div className={styles.tip}>
                      <span className={styles.tipIcon}>
                        <BulbIcon />
                      </span>
                      <p>
                        <strong>Pro tip:</strong> {tip}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <p>
              If you’d like a hand, our{" "}
              <A href="/services/microsoft-power-platform/microsoft-power-bi">
                Power BI consulting
              </A>{" "}
              team and <A href="/services/dashboards">dashboard development</A>{" "}
              service can take you from first question to a working pilot.
            </p>
          </section>

          {/* Common mistakes */}
          <section
            id="mistakes"
            className={styles.section}
            aria-labelledby="mistakes-heading"
          >
            <Heading id="mistakes" lead="Common mistakes" accent="to avoid" />
            <p>
              Most failed dashboards fail for ordinary reasons. These five are
              worth designing out from the start.
            </p>
            <ul className={styles.mistakeList}>
              {MISTAKES.map(({ Sketch, title, instead }, i) => (
                <li key={title} className={styles.mistakeCard}>
                  <div className={styles.mistakeCopy}>
                    <span className={styles.mistakeNum} aria-hidden="true">
                      {i + 1}
                    </span>
                    <h3>{title}</h3>
                    <p>
                      <span className={styles.instead}>Instead</span>
                      {instead}
                    </p>
                  </div>
                  <div className={styles.mistakeArt}>
                    <Sketch />
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.checklistBox}>
              <h3>Before you share a healthcare dashboard</h3>
              <ul className={styles.checklist}>
                {CHECKLIST.map((item) => (
                  <li key={item}>
                    <span className={styles.checkIcon}>
                      <TickIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* The future */}
          <section
            id="future"
            className={styles.section}
            aria-labelledby="future-heading"
          >
            <Heading
              id="future"
              lead="The future of"
              accent="healthcare analytics"
            />
            <p>
              As healthcare becomes more data-driven, platforms like Power BI
              are turning into core infrastructure rather than optional extras.
              Machine learning models, built and validated separately, can feed
              predictions such as patient deterioration or unusual patterns in
              clinical workflows into dashboards that staff already use.
            </p>
            <p>
              AI features inside Power BI, such as Copilot for summarising and
              explaining reports, may also help non-technical users get answers
              faster. Availability and licensing vary, so test any AI feature on
              de-identified data and agree your governance rules first. Our{" "}
              <A href="/services/microsoft-power-platform/ai-integrations">
                AI integration work
              </A>{" "}
              covers how we approach that.
            </p>
            <p>
              The shift toward value-based care will only increase the need for
              solid analytics. Organisations that can measure and improve
              quality, manage population health and show positive outcomes will
              be better placed.
            </p>
          </section>

          {/* When to get help */}
          <section
            id="help"
            className={styles.section}
            aria-labelledby="help-heading"
          >
            <Heading
              id="help"
              lead="When to get help"
              accent="with healthcare dashboards"
            />
            <p>
              Many teams build their first dashboard on their own. Outside help
              pays off when the data sits in several systems, the privacy design
              needs care, or your analysts are already stretched.
            </p>
            <div className={styles.ctaBand}>
              <div>
                <p className={styles.bandTitle}>
                  Talk to a Power BI consultant
                </p>
                <p className={styles.bandText}>
                  Office Experts builds secure Power BI dashboards and data
                  models for Australian organisations. Tell us the question you
                  want to answer and we’ll suggest a sensible first step.
                </p>
              </div>
              <div className={styles.bandActions}>
                <a href="#contact" className="btn">
                  Talk to our team
                </a>
                <Link
                  href="/services/microsoft-power-platform/microsoft-power-bi"
                  className={styles.bandLink}
                >
                  See our Power BI services <ArrowIcon />
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section
            id="faq"
            className={styles.section}
            aria-labelledby="faq-heading"
          >
            <Heading id="faq" lead="Frequently asked" accent="questions" />
            <div className={styles.faqList}>
              {FAQS.map(({ q, a }) => (
                <details key={q} className={styles.faqItem}>
                  <summary>
                    <span>{q}</span>
                    <PlusIcon />
                  </summary>
                  <p className={styles.faqBody}>{a}</p>
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
            <Heading id="conclusion" accent="Conclusion" />
            <p>
              In an industry where decisions affect lives and outcomes shape
              funding, using data well has become a basic requirement. Power BI
              suits healthcare analytics because it connects separate data
              sources, presents them in a form people can use and supports
              timely decisions.
            </p>
            <p>
              From reducing readmissions and improving operational efficiency to
              managing chronic disease populations and meeting compliance
              requirements, it’s changing how healthcare organisations work.
            </p>
            <p>
              As healthcare produces ever more data, the organisations that do
              best will be the ones that turn information into insight, and
              insight into action.
            </p>
            <div className={styles.authorBox}>
              <span className={styles.avatarLarge} aria-hidden="true">
                <Image src={scott} alt={AUTHOR_NAME} width={56} height={56} />
              </span>
              <div>
                <h3>About the author</h3>
                <p>
                  {AUTHOR_NAME} has been programming and developing across the
                  entire Microsoft suite for over 25 years. Now managing a team
                  of developers and designers at Office Experts Group, an
                  Australian Microsoft consultancy established in 2000, he
                  specialises in helping organisations use the Power Platform to
                  transform their operations.
                </p>
              </div>
            </div>
          </section>

          {/* Related reading */}
          <section
            id="related"
            className={styles.section}
            aria-labelledby="related-heading"
          >
            <Heading id="related" lead="Related" accent="reading" />
            <ul className={styles.relatedGrid}>
              {RELATED.map(({ href, type, title, description }) => (
                <li key={href}>
                  <Link href={href} className={styles.relatedCard}>
                    <span className={styles.relatedType}>{type}</span>
                    <span className={styles.relatedTitle}>{title}</span>
                    <span className={styles.relatedText}>{description}</span>
                    <span className={styles.relatedMore}>
                      Read more <ArrowIcon />
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

export default PowerBIHealthcareBlogPost;
