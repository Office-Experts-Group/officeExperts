// /app/blog/microsoft-access-on-mac/page.js
import Image from "next/image";
import Link from "next/link";

import Contact from "@/components/Contact";
import { generateOrganizationSchema } from "@/utils/schemaGenerators";
import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";
import styles from "@/styles/microsoftAccessOnMacBlog.module.scss";
import scott from "@/public/team/scott.webp";

import HeroSvg from "./(svgs)/HeroSvg";
import ChooserSvg from "./(svgs)/ChooserSvg";
import MigrationMapSvg from "./(svgs)/MigrationMapSvg";
import SetupAnatomySvg from "./(svgs)/SetupAnatomySvg";
import {
  SketchBootCamp,
  SketchViewer,
  SketchSync,
  SketchRam,
  SketchMigrate,
} from "./(svgs)/MistakeSketches";
import {
  ArrowRightIcon,
  BoxIcon,
  BuildingIcon,
  BulbIcon,
  ChevronIcon,
  CheckIcon,
  CloudIcon,
  CoinIcon,
  DatabaseIcon,
  GaugeIcon,
  GridIcon,
  InfoIcon,
  LaptopIcon,
  LayersIcon,
  LockIcon,
  MinusIcon,
  QuoteIcon,
  RefreshIcon,
  ServerIcon,
  ShieldIcon,
  TargetIcon,
  UsersIcon,
  WarningIcon,
} from "./(svgs)/Icons";

// Keep these three in sync with layout.js
const PAGE_URL =
  "https://www.officeexperts.com.au/blog/microsoft-access-on-mac";
const PAGE_TITLE = "Microsoft Access on Mac: 5 Solutions | Office Experts";
const PAGE_DESCRIPTION =
  "Discover practical solutions for running Microsoft Access on Mac. Compare Parallels, cloud hosting, Boot Camp, file viewers, and migration alternatives.";

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_HEADLINE =
  "Can You Run Microsoft Access on Mac? 5 Solutions That Actually Work";
const BREADCRUMB_NAME = "Microsoft Access on Mac";
const AUTHOR_NAME = "Scott Robinson";
const READING_TIME = 25; // minutes, visible words / 238
const WORD_COUNT = 6050;
const HERO_IMAGE_PATH = "/logo.png";
const HERO_IMAGE_ALT = "Office Experts Group logo";
const DATE_PUBLISHED = "2025-12-17T09:00:00+11:00";
const DATE_MODIFIED = "2026-11-20T09:00:00+11:00"; // AEDT (+11:00) until the first Sunday of April

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Sydney",
  });

// Sister-site Access pages stay absolute until the Access wave moves them
const AE = "https://www.accessexperts.com.au";

// ───────────────────────── Small helpers ─────────────────────────
const A = ({ href, children, rel }) => {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={styles.inlineLink}>
        {children}
      </Link>
    );
  }
  if (href.startsWith(AE)) {
    return (
      <a href={href} className={styles.inlineLink}>
        {children}
      </a>
    );
  }
  return (
    <a
      href={href}
      className={styles.inlineLink}
      target="_blank"
      rel={rel || "noopener noreferrer"}
    >
      {children}
    </a>
  );
};

const Anchor = ({ id, children }) => (
  <a href={`#${id}`} className={styles.inlineLink}>
    {children}
  </a>
);

const P = ({ children }) => <p className={styles.para}>{children}</p>;
const H3 = ({ children }) => <h3 className={styles.h3}>{children}</h3>;

const Section = ({ id, title, children }) => (
  <section
    id={id}
    className={styles.section}
    aria-labelledby={`mac-${id}-heading`}
  >
    <h2 id={`mac-${id}-heading`} className={styles.sectionTitle}>
      {title}
    </h2>
    {children}
  </section>
);

const Callout = ({ tone = "accent", label, Icon = InfoIcon, children }) => (
  <aside
    className={`${styles.callout} ${tone === "slate" ? styles.calloutSlate : ""}`}
  >
    <span className={styles.calloutIcon}>
      <Icon />
    </span>
    <div className={styles.calloutBody}>
      <span className={styles.calloutLabel}>{label}</span>
      <p className={styles.calloutText}>{children}</p>
    </div>
  </aside>
);

const ProTip = ({ children }) => (
  <div className={styles.proTip}>
    <span className={styles.proTipChip}>
      <BulbIcon />
    </span>
    <div>
      <span className={styles.proTipLabel}>Pro tip</span>
      <p className={styles.proTipText}>{children}</p>
    </div>
  </div>
);

const Facts = ({ best, cost, speed }) => (
  <div className={styles.facts}>
    {[
      { Icon: TargetIcon, label: "Best for", value: best },
      { Icon: CoinIcon, label: "Cost", value: cost },
      { Icon: GaugeIcon, label: "Performance", value: speed },
    ].map(({ Icon, label, value }) => (
      <div className={styles.fact} key={label}>
        <span className={styles.factIcon}>
          <Icon />
        </span>
        <div>
          <span className={styles.factLabel}>{label}</span>
          <span className={styles.factValue}>{value}</span>
        </div>
      </div>
    ))}
  </div>
);

const ProsCons = ({ shine, fall }) => (
  <div className={styles.pcGrid}>
    <div className={styles.pcShine}>
      <h4 className={styles.panelTitle}>Where it shines</h4>
      <ul className={styles.iconList}>
        {shine.map((item) => (
          <li key={item}>
            <span className={styles.iconChip}>
              <CheckIcon />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className={styles.pcFall}>
      <h4 className={styles.panelTitle}>Where it falls short</h4>
      <ul className={styles.iconList}>
        {fall.map((item) => (
          <li key={item}>
            <span className={`${styles.iconChip} ${styles.iconChipSlate}`}>
              <MinusIcon />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Timeline = ({ steps }) => (
  <ol className={styles.timeline}>
    {steps.map((s, i) => (
      <li className={styles.step} key={s.title}>
        <span className={styles.stepBadge}>{i + 1}</span>
        <div className={styles.stepBody}>
          <h4 className={styles.stepTitle}>{s.title}</h4>
          <p className={styles.stepText}>{s.text}</p>
        </div>
      </li>
    ))}
  </ol>
);

const TickList = ({ items }) => (
  <ul className={styles.tickList}>
    {items.map((item) => (
      <li key={item}>
        <span className={styles.iconChip}>
          <CheckIcon />
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Diagram = ({ caption, narrow, children }) => (
  <figure className={styles.diagram}>
    <div className={styles.diagramScroll}>
      <div className={narrow ? styles.diagramNarrow : styles.diagramInner}>
        {children}
      </div>
    </div>
    {caption ? (
      <figcaption className={styles.caption}>{caption}</figcaption>
    ) : null}
  </figure>
);

// ───────────────────────── Data ─────────────────────────
const TOC = [
  ["intro", "The short answer"],
  ["why", "Why Access is Windows-only"],
  ["runtime", "Access free Runtime"],
  ["choose", "Which solution to use"],
  ["parallels", "1. Parallels Desktop"],
  ["cloud", "2. Cloud hosting"],
  ["bootcamp", "3. Boot Camp"],
  ["viewers", "4. File viewers"],
  ["migrate", "5. Migrate to an alternative"],
  ["compare", "Comparing your options"],
  ["practice", "Best practices"],
  ["mistakes", "Common mistakes"],
  ["help", "When to get help"],
  ["faq", "FAQ"],
  ["bottom-line", "The bottom line"],
  ["related", "Keep reading"],
];

const GLANCE = [
  {
    value: "5",
    label: "Workable options",
    text: "From Parallels to a full migration.",
  },
  {
    value: "Intel only",
    label: "Boot Camp support",
    text: "Apple silicon Macs can’t use it.",
  },
  {
    value: "Free",
    label: "Access Runtime",
    text: "Run existing databases without design changes.",
  },
];

const REASONS = [
  {
    Icon: LayersIcon,
    title: "Deep Windows integration",
    text: (
      <>
        Access was built on Windows-specific technologies from day one. It
        relies on the Jet Database Engine (later replaced by ACE), the Windows
        Registry for configuration, COM objects for extensibility, and VBA
        macros that depend on Windows libraries. Porting it to macOS wouldn’t be
        a simple recompile. It would mean rebuilding the application from
        scratch.
      </>
    ),
  },
  {
    Icon: CloudIcon,
    title: "Microsoft’s strategic priorities",
    text: (
      <>
        Microsoft’s database strategy has shifted. They’re pushing organisations
        toward cloud solutions like{" "}
        <A href="/services/microsoft-power-platform/power-apps">Power Apps</A>,
        Dataverse and{" "}
        <A href={`${AE}/sql-server-backend-business-solutions`}>Azure SQL</A>,
        rather than desktop databases. Investing resources to port an
        application to a competitor’s platform (macOS) doesn’t align with their
        cloud-first roadmap or their business priorities.
      </>
    ),
  },
  {
    Icon: BuildingIcon,
    title: "Limited Mac market share in enterprise",
    text: (
      <>
        While consumer Mac adoption has skyrocketed, enterprise Windows
        deployment still dominates. This is especially true in industries where
        Access is commonly used (manufacturing, logistics, government). The
        business case for Mac Access development is weak.
      </>
    ),
  },
];

const PARALLELS_STEPS = [
  {
    title: "Purchase and install Parallels Desktop",
    text: "Download it from Parallels and choose the edition that suits one user or a managed team. Several editions exist, so check which one fits before you buy.",
  },
  {
    title: "Install Windows 11 ARM in the Parallels virtual machine",
    text: "Parallels can automate this on Apple silicon Macs. You will still need a valid Windows licence, so check what your organisation already owns.",
  },
  {
    title: "Install Microsoft Access (or standalone Access) in Windows",
    text: "Alternatively, you can use the free Access Runtime if you only need to run existing databases.",
  },
  {
    title: "Run Access as if you were on a Windows PC",
    text: "Open your database from inside Windows, or from a shared folder if you have one set up, and work as normal.",
  },
];

const BOOTCAMP_STEPS = [
  {
    title: "Verify you have an Intel-based Mac",
    text: "Open the Apple menu, choose About This Mac and check the processor. If it says Apple M1 or later, Boot Camp is not an option.",
  },
  {
    title: "Download the Windows ISO from Microsoft",
    text: "Apple lists which Windows versions each Intel Mac model supports, so check your model before you download.",
  },
  {
    title: "Launch Boot Camp Assistant",
    text: "It lives in Applications, then Utilities. It walks you through the rest and downloads the Windows support software.",
  },
  {
    title: "Partition your drive",
    text: "Allow a minimum of 64GB for Windows and Access. More is better if you will store databases in Windows.",
  },
  {
    title: "Install Windows and set up drivers",
    text: "The Mac restarts into the Windows installer. Boot Camp then installs the drivers for your keyboard, trackpad and display.",
  },
  {
    title: "Install Access and your databases in Windows",
    text: "Once Windows is running, install Access (or Runtime) and copy your databases across.",
  },
];

const PROVIDERS = [
  {
    Icon: CloudIcon,
    name: "Amazon WorkSpaces",
    text: "AWS’s managed desktop service, highly scalable.",
  },
  {
    Icon: ServerIcon,
    name: "Microsoft Azure Virtual Desktop",
    text: "Native Microsoft solution that integrates with Microsoft 365.",
  },
  {
    Icon: LayersIcon,
    name: "Citrix Virtual Apps and Desktops",
    text: "Enterprise-grade and feature-rich, but expensive.",
  },
  {
    Icon: LaptopIcon,
    name: "Windows 365 Cloud PC",
    text: "A personal cloud PC for each user. Check how licensing and an Access install fit your needs.",
  },
  {
    Icon: DatabaseIcon,
    name: "Apps4Rent and CloudDesktopOnline",
    text: "Specialised Access hosting providers.",
  },
];

const COST_ROWS = [
  ["1 user", "$150", "$900"],
  ["5 users", "$750", "$4,500"],
  ["10 users", "$1,500", "$9,000"],
  ["25 users", "$3,750", "$22,500"],
];

const ALTERNATIVES = [
  {
    Icon: DatabaseIcon,
    name: "FileMaker Pro (Claris FileMaker)",
    blurb:
      "FileMaker, owned by Apple’s Claris subsidiary, is often called “the Mac equivalent of Access.”",
    features: [
      "Native Mac, Windows, iOS and web deployment",
      "Drag-and-drop database design",
      "Custom app building without coding",
      "Strong reporting and automation capabilities",
    ],
    cost: "Starts at $32/user/month",
    best: "Organisations wanting a direct Access replacement with similar capabilities",
  },
  {
    Icon: GridIcon,
    name: "Airtable",
    blurb:
      "A cloud-based spreadsheet-database hybrid that’s extremely user-friendly.",
    features: [
      "Familiar spreadsheet interface",
      "Multiple views (Grid, Kanban, Calendar, Gallery)",
      "Real-time collaboration",
      "Extensive third-party integrations",
      "Mobile apps for iOS and Android",
    ],
    cost: "Free plan available, paid plans from $30/user/month",
    best: "Teams wanting easy collaboration without technical complexity",
  },
  {
    Icon: BoxIcon,
    name: "Ninox",
    blurb: "A modern cloud database with native Mac support.",
    features: [
      "Works offline and online",
      "Native Mac, iOS and web apps",
      "Customisable with templates",
      "Visual database builder",
      "Scripting for advanced users",
    ],
    cost: "Free trial, then plans start from $15/user/month",
    best: "Small to medium businesses wanting cloud flexibility with Mac-first design",
  },
  {
    Icon: LayersIcon,
    name: "Power Apps",
    accent: true,
    blurb:
      "Microsoft’s low-code app platform runs in a web browser, so Mac users can build and use apps without Windows.",
    features: [
      "Runs in a browser on Mac, with iOS and Android apps",
      "Connects to Dataverse, SQL Server, SharePoint and Excel",
      "Fits teams already on Microsoft 365",
      "Forms and workflows built with low-code tools",
    ],
    cost: "Depends on the licensing model, so confirm current pricing with Microsoft",
    best: "Teams already invested in Microsoft 365 that want to stay in that ecosystem",
  },
];

const WALKTHROUGHS = [
  {
    Icon: LaptopIcon,
    title: "For Parallels users",
    steps: [
      [
        "Allocate adequate RAM",
        "Give the Windows VM at least 8GB (16GB total Mac RAM recommended).",
      ],
      [
        "Use shared folders",
        "Enable seamless file access between Mac and Windows.",
      ],
      ["Take regular backups", "Snapshot your VM before major changes."],
      [
        "Optimise performance",
        "Close Mac apps you’re not using when running Access.",
      ],
    ],
  },
  {
    Icon: CloudIcon,
    title: "For cloud hosting candidates",
    steps: [
      [
        "Test performance first",
        "Most providers offer free trials, so test with your actual databases.",
      ],
      [
        "Verify data residency",
        "Ensure server locations comply with your data governance requirements.",
      ],
      ["Set up MFA", "Enable multi-factor authentication for security."],
      [
        "Check backups",
        "Ensure your provider backs up your databases automatically.",
      ],
      [
        "Document access requirements",
        "Have a clear process for adding and removing users.",
      ],
    ],
  },
  {
    Icon: RefreshIcon,
    title: "For migration candidates",
    steps: [
      ["Start with a pilot", "Choose one small database to migrate first."],
      [
        "Document everything",
        "Map all forms, queries and reports before starting.",
      ],
      [
        "Plan for retraining",
        "Budget time for your team to learn the new system.",
      ],
      [
        "Maintain Access temporarily",
        "Keep the old system running during the transition.",
      ],
      [
        "Consider hiring help",
        "Professional migration assistance often pays for itself.",
      ],
    ],
    help: true,
  },
  {
    Icon: ShieldIcon,
    title: "Whichever route you choose",
    dark: true,
    steps: [
      [
        "Split the database",
        "A front end (forms, reports, code) linked to a back end (tables) is far more stable for several users than one shared file.",
      ],
      [
        "Back up before you change anything",
        "Take a dated copy of the database, and snapshot the VM or cloud desktop too.",
      ],
      [
        "Test with a copy",
        "Run your busiest forms and reports on a copy to see how they behave in the new setup.",
      ],
      [
        "Write down who owns what",
        "Note who holds the Access and Windows licences, who maintains the database and who to call when something breaks.",
      ],
    ],
  },
];

const MISTAKES = [
  {
    Sketch: SketchBootCamp,
    title: "Assuming Boot Camp will work on any Mac",
    fix: (
      <>
        Check the chip first (Apple menu &gt; About This Mac). If it says Apple
        M1 or later, Boot Camp is out, so look at Parallels or cloud hosting.
      </>
    ),
  },
  {
    Sketch: SketchViewer,
    title: "Buying a file viewer and expecting to edit",
    fix: (
      <>
        Use a viewer only to get data out. Anything that needs design view, VBA
        or macros needs Access running in Windows.
      </>
    ),
  },
  {
    Sketch: SketchSync,
    title: "Keeping a shared Access file in a syncing folder",
    fix: (
      <>
        Sync tools can copy a half-written file or create conflict copies, which
        can damage a database. Keep the data file on a server share or a proper
        SQL back end. Our{" "}
        <A href={`${AE}/blog/why-dropbox-fails-with-access-databases`}>
          article on Dropbox and Access
        </A>{" "}
        explains why.
      </>
    ),
  },
  {
    Sketch: SketchRam,
    title: "Starving the virtual machine of memory",
    fix: (
      <>
        Give Windows at least 8GB on a Mac with 16GB or more, and close heavy
        Mac apps while you work in Access.
      </>
    ),
  },
  {
    Sketch: SketchMigrate,
    title: "Migrating before mapping the database",
    fix: (
      <>
        List every table, query, form, report and macro first. Then pick one
        small database as a pilot before you move the rest.
      </>
    ),
  },
];

const SITUATIONS = [
  {
    Icon: LaptopIcon,
    title: "A freelancer or consultant on a MacBook",
    text: "You need to open a client’s Access file a few times a month. Use the free Runtime inside Parallels if the file only needs to be used, or a full Access licence if you need to edit it. Use a viewer only if all you want is the data.",
  },
  {
    Icon: UsersIcon,
    title: "A team of ten with four Mac users",
    text: "Cloud hosting keeps everyone on the same setup and the same file, whatever device they use. Mac users connect with a remote desktop client, and nobody has to run Windows locally.",
  },
  {
    Icon: RefreshIcon,
    title: "A Mac-first organisation with an ageing Access system",
    text: "If most people are on Macs, the database is old and the business wants mobile access, plan a migration. Keep Access running through Parallels or a cloud desktop while you rebuild, so nothing stops.",
  },
];

const CHECKLIST = [
  "Check your Mac’s chip: Intel or Apple silicon",
  "Count how many people use the database and whether any work remotely",
  "Find out whether the database is split into a front end and a back end",
  "Note where the data file lives and how it is backed up",
  "List any VBA, linked tables, ODBC connections or Office integration",
  "Confirm who holds the Access and Windows licences",
  "Check data residency rules if you’re considering cloud hosting",
  "Test your chosen option with a copy of your real database",
  "Decide who will support the setup once it’s running",
  "Back up the database and the Mac before you start",
];

const HELP_WHEN = [
  [
    "Complex Access databases",
    "with extensive VBA code and interconnected forms",
  ],
  ["Business-critical applications", "where downtime isn’t acceptable"],
  ["Large teams", "requiring coordinated migration"],
  ["Compliance requirements", "needing careful data handling"],
  ["Limited IT resources", "within your organisation"],
];

const HELP_CAN = [
  "Assess your specific situation and recommend optimal solutions",
  "Handle technical setup and configuration",
  "Migrate data while preserving integrity",
  "Rebuild forms and reports in new systems",
  "Train your team on the new solution",
  "Provide ongoing support",
];

const FAQS = [
  {
    q: "Is there a Mac version of Microsoft Access?",
    a: [
      "No. Microsoft only makes Access for Windows, and its own support answers say the same. Every option in this guide either runs Windows on or alongside your Mac, or moves your data to a tool that runs on macOS.",
    ],
  },
  {
    q: "Can I open an Access file on a Mac without Windows?",
    a: [
      "You can open the data. Third-party viewers and tools such as LibreOffice Base can read some Access files, but they can’t run your forms, reports or VBA, and support for newer file formats and password-protected databases varies.",
      "Treat them as a way to get data out, not as a replacement for Access.",
    ],
  },
  {
    q: "Will Access run on a Mac with an M-series chip?",
    a: [
      "Yes, through virtualisation. Parallels Desktop runs Windows on Arm on Apple silicon Macs, and Windows can run x86 apps such as Access through its built-in emulation.",
      "Speed depends on your Mac’s memory and the size of your database, so test with your real file before you buy. Boot Camp isn’t available on these Macs.",
    ],
  },
  {
    q: "Is Access Runtime enough for staff who only use the database?",
    a: [
      "Often, yes. Runtime lets people use forms, reports and macros without a full Access licence, but they can’t change the design.",
      "It is still a Windows application, so Mac users need Parallels, Boot Camp or a cloud desktop to run it. Test your database with Runtime on a copy first.",
    ],
  },
  {
    q: "Should I move away from Access just because my team uses Macs?",
    a: [
      <>
        Not necessarily. If one or two people need Access occasionally,
        Parallels or a cloud desktop is usually far cheaper than rebuilding a
        working system. Migration makes sense when most of your team is on Macs,
        when you want mobile access, or when the database has outgrown Access
        anyway, for example because it’s hitting{" "}
        <A href={`${AE}/blog/2gb-access-database-limit`}>the 2GB limit</A>.
      </>,
      "If you’re not sure, a short assessment before you commit can save a lot of time.",
    ],
  },
];

const PICKS = [
  ["Need it now with full features?", "Parallels Desktop"],
  ["Team-based with remote access?", "Cloud hosting"],
  ["Budget-conscious with an Intel Mac?", "Boot Camp"],
  ["Just viewing data?", "File viewers"],
  ["Long-term Mac commitment?", "Migrate to an alternative"],
];

const CASE_STUDY_SLUGS = [
  "film-crew-booking-system-access-nextjs-rebuild",
  "research-organisation-access-kanban-planner",
];

const caseStudyCards = CASE_STUDY_SLUGS.map(getCaseStudyBySlug)
  .filter(Boolean)
  .map((s) => ({
    kind: "Case study",
    href: `/case-studies/${s.slug}`,
    title: s.title,
    text: s.truncatedDescription,
    linkText: s.linkText || "Read the case study",
  }));

const RELATED = [
  ...caseStudyCards,
  {
    kind: "Blog",
    href: "/blog/microsoft-word-for-mac",
    title: "Microsoft Word for Mac",
    text: "Another Microsoft app, another Mac question. See how Word on a Mac compares with the Windows version.",
    linkText: "Read the guide",
  },
];

// ───────────────────────── Schema ─────────────────────────
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
      description: PAGE_DESCRIPTION,
      image: `${SITE_URL}${HERO_IMAGE_PATH}`,
      author: { "@type": "Person", name: AUTHOR_NAME },
      publisher: { "@id": `${SITE_URL}#organization` },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      mainEntityOfPage: { "@id": `${PAGE_URL}#webpage` },
      articleSection: "Microsoft Access",
      keywords: [
        "Microsoft Access on Mac",
        "Access on Mac",
        "Parallels",
        "Boot Camp",
      ],
      inLanguage: "en-AU",
      wordCount: WORD_COUNT,
      timeRequired: `PT${READING_TIME}M`,
    },
  ],
};

// ───────────────────────── Page ─────────────────────────
export default function AccessOnMacBlogPost() {
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
            <div>
              <h1 className={styles.heroTitle}>
                Can You Run Microsoft Access on Mac?{" "}
                <span className={styles.accent}>
                  5 Solutions That Actually Work
                </span>
              </h1>
              <p className={styles.heroLede}>
                Access only runs on Windows, but a Mac doesn’t have to rule it
                out. Here are five ways to open, run or replace an Access
                database on a Mac, and how to pick the right one for your team.
              </p>
              <div className={styles.authorRow}>
                <span className={styles.avatar} aria-hidden="true">
                  <Image src={scott} alt={AUTHOR_NAME} width={38} height={38} />
                </span>
                <div className={styles.authorMeta}>
                  <span className={styles.authorName}>By {AUTHOR_NAME}</span>
                  <span className={styles.authorDetail}>
                    Updated {formatDate(DATE_MODIFIED)} · {READING_TIME} min
                    read
                  </span>
                </div>
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
            <div className={styles.glanceCard} key={g.label}>
              <span className={styles.glanceValue}>{g.value}</span>
              <span className={styles.glanceLabel}>{g.label}</span>
              <p className={styles.glanceText}>{g.text}</p>
            </div>
          ))}
        </section>

        <div className={styles.layout}>
          <nav className={styles.toc} aria-label="Contents">
            <p className={styles.tocLabel}>In this guide</p>
            <ul>
              {TOC.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <article className={styles.article}>
            {/* Introduction */}
            <Section
              id="intro"
              title={
                <>
                  Can you run Access{" "}
                  <span className={styles.accent}>on your Mac?</span>
                </>
              }
            >
              <P>
                You’re a Mac user who has just found out your new client uses
                Microsoft Access. Or perhaps you’ve joined a company where
                critical business systems run on Access databases, but you
                prefer working on a Mac. Maybe your team is split, some on
                Windows and others on Mac, and Access compatibility has suddenly
                become a real problem. The inventory tracking system, customer
                database or order management tool you need is built in Access,
                and it won’t open.
              </P>
              <P>
                The short answer is yes, you can run Microsoft Access on a Mac,
                but not natively. There is no Mac version of Access, so every
                working solution does one of three things: it runs Windows on
                your Mac, it runs Windows somewhere else and lets you connect to
                it, or it moves your data into a tool that does run on a Mac.
              </P>
              <P>
                This guide examines five genuine solutions for running Access on
                Mac, from virtualisation to cloud hosting to{" "}
                <A href={`${AE}/upgrades-and-migration`}>complete migration</A>.
                I’ll cover what works, what doesn’t and, most importantly, which
                option makes sense for your specific situation.
              </P>
              <P>
                If you’re in a hurry, jump to the{" "}
                <Anchor id="choose">decision flowchart</Anchor> or scan the{" "}
                <Anchor id="compare">comparison tables</Anchor>. If you’d like
                to understand the trade-offs first, start with why Access is
                Windows-only and read on from there.
              </P>
              <Callout label="Quick answer" Icon={InfoIcon}>
                For most individuals and small teams on a modern Mac, Parallels
                Desktop is the most practical option. For teams spread across
                devices and locations, cloud hosting is usually the better fit.
              </Callout>
            </Section>

            {/* Why */}
            <Section
              id="why"
              title={
                <>
                  Why Microsoft Access{" "}
                  <span className={styles.accent}>
                    Doesn’t (really) Exist for Mac
                  </span>
                </>
              }
            >
              <P>
                Access has never had a Mac version, and it isn’t for lack of
                asking. Three things keep it that way.
              </P>
              <div className={styles.reasonGrid}>
                {REASONS.map(({ Icon, title, text }) => (
                  <div className={styles.reasonCard} key={title}>
                    <span className={styles.reasonBadge}>
                      <Icon />
                    </span>
                    <h3 className={styles.reasonTitle}>{title}</h3>
                    <p className={styles.reasonText}>{text}</p>
                  </div>
                ))}
              </div>
              <P>
                Microsoft has confirmed through its official support channels
                that Access is Windows-only, and there is no sign of that
                changing. So if you need Access on a Mac, you need a workaround.
              </P>
              <div className={styles.quoteBox}>
                <span className={styles.quoteChip}>
                  <QuoteIcon />
                </span>
                <blockquote className={styles.quoteBlock}>
                  <p className={styles.quoteText}>
                    “Microsoft Access is not available for Microsoft 365 Apps
                    for Enterprise for Mac. It is only available for Windows
                    operating systems.”
                  </p>
                </blockquote>
                <cite className={styles.quoteCite}>
                  <A
                    href="https://learn.microsoft.com/en-us/answers/questions/5649510/is-ms-access-available-for-us-on-macbook-pro"
                    rel="nofollow noopener noreferrer"
                  >
                    Microsoft Support Documentation
                  </A>
                </cite>
              </div>
              <H3>What this means in practice</H3>
              <P>
                Access is really two things in one: a database engine that
                stores your data, and a development environment that holds your
                forms, reports and VBA code. Both need Windows. That’s why a
                “Mac-compatible Access” doesn’t exist, and why the options below
                either bring Windows to your Mac or replace Access entirely.
              </P>
            </Section>

            {/* Runtime */}
            <Section
              id="runtime"
              title={
                <>
                  Before We Start...{" "}
                  <span className={styles.accent}>
                    Have You Heard About Access Free Runtime?
                  </span>
                </>
              }
            >
              <P>
                Microsoft Access Runtime is a free version of Access that allows
                you to run existing Access databases without purchasing a
                Microsoft 365 subscription or standalone Access licence.
              </P>
              <P>
                Access Runtime includes the main functionality most end users
                need, such as viewing and editing data, running queries, using
                forms and reports, and{" "}
                <A href="/services/microsoft-excel/vba-macro-development">
                  executing macros
                </A>
                . The limitation? You cannot modify the database design (tables,
                queries, forms or reports).
              </P>
              <div className={styles.canGrid}>
                <div className={styles.canPanel}>
                  <h3 className={styles.panelTitle}>
                    What Runtime lets you do
                  </h3>
                  <ul className={styles.iconList}>
                    {[
                      "View and edit data",
                      "Run queries",
                      "Use forms and reports",
                      "Run macros that are already built in",
                      "Give staff access without a full licence",
                    ].map((t) => (
                      <li key={t}>
                        <span className={styles.iconChip}>
                          <CheckIcon />
                        </span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.cantPanel}>
                  <h3 className={styles.panelTitle}>What Runtime doesn’t</h3>
                  <ul className={styles.iconList}>
                    {[
                      "Change tables, queries, forms or reports",
                      "Open design view",
                      "Build new database objects",
                      "Run on a Mac by itself, because it’s still a Windows app",
                    ].map((t) => (
                      <li key={t}>
                        <span
                          className={`${styles.iconChip} ${styles.iconChipSlate}`}
                        >
                          <LockIcon />
                        </span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <P>
                Since Access Runtime is still a Windows application, you’ll need
                to use it within one of the Windows environments described in
                the solutions below (Parallels, Boot Camp or cloud hosting).
                However, instead of paying for Microsoft 365 with Access or a
                standalone Access licence (typically $239/year or $369
                one-time), you can download Runtime for free from{" "}
                <A href="https://support.microsoft.com/en-us/office/download-and-install-microsoft-365-access-runtime-185c5a32-8ba9-491e-ac76-91cbe3ea09c9">
                  Microsoft’s website
                </A>
                .
              </P>
              <Callout
                tone="slate"
                label="Check before you rely on it"
                Icon={WarningIcon}
              >
                Whether Runtime is enough depends on how your database was
                built. Some databases expect a full Access installation, for
                example if they open design view, link to other Office apps or
                use certain add-ins. Test your database with Runtime on a copy
                first.
              </Callout>
            </Section>

            {/* Choose */}
            <Section
              id="choose"
              title={
                <>
                  Which solution{" "}
                  <span className={styles.accent}>should you use?</span>
                </>
              }
            >
              <P>
                Choosing the best Access solution for your Mac environment
                depends on numerous factors: your database complexity, team
                size, budget, technical expertise and long-term business
                strategy. This flowchart covers the common cases. Follow the
                questions from the top and stop at the first “yes”.
              </P>
              <Diagram caption="Start at the top. Answer each question honestly rather than optimistically.">
                <ChooserSvg />
              </Diagram>
              <H3>Three common situations</H3>
              <div className={styles.considerList}>
                {SITUATIONS.map(({ Icon, title, text }) => (
                  <div className={styles.consider} key={title}>
                    <h4 className={styles.considerTitle}>
                      <Icon /> {title}
                    </h4>
                    <p className={styles.stepText}>{text}</p>
                  </div>
                ))}
              </div>
              <P>
                Not sure where you land? That’s common. Often the real question
                isn’t how to run Access on a Mac, but whether the database is
                worth keeping as it is. It may be that your problems could be
                resolved with some{" "}
                <A href={`${AE}/access-support`}>professional support</A>, and
                you never need to change platform at all.
              </P>
            </Section>

            {/* Solution 1 */}
            <Section
              id="parallels"
              title={
                <>
                  Solution 1:{" "}
                  <span className={styles.accent}>
                    Parallels Desktop (Recommended for Most Users)
                  </span>
                </>
              }
            >
              <Facts
                best="Individual users and small teams needing full Access functionality"
                cost="~$150-$225/year + Windows licence (~$40-$200) + Access licence"
                speed="Near-native speed, especially on Apple silicon Macs"
              />
              <H3>What is Parallels?</H3>
              <P>
                <A href="https://www.parallels.com/products/desktop/">
                  Parallels Desktop
                </A>{" "}
                is virtualisation software that runs Windows inside macOS.
                Unlike Boot Camp (which requires rebooting), Parallels lets you
                run Windows applications alongside Mac apps simultaneously. You
                can copy and paste between operating systems, drag files between
                Windows and Mac, and even add Windows applications to your Mac
                dock.
              </P>
              <P>
                For Access users, this means you get the complete Windows Access
                experience, including VBA macros, ODBC connections, form design
                and report generation, all whilst staying in macOS.
              </P>
              <H3>How it works</H3>
              <Timeline steps={PARALLELS_STEPS} />
              <ProTip>
                Opening a database from a Mac folder through shared folders can
                be slower than opening it from the Windows side. If an Access
                file feels sluggish, try keeping the working copy inside Windows
                and the backup on the Mac.
              </ProTip>
              <H3>Performance considerations</H3>
              <P>
                Parallels has been optimised heavily for Apple silicon (M1, M2,
                M3 and later chips). Access databases with thousands of records,
                complex forms and VBA automation run smoothly on modern Macs
                with 16GB or more of RAM. Windows 11 ARM includes x86/x64
                emulation, so even if Access isn’t ARM-native, it runs reliably
                through this translation layer.
              </P>
              <P>
                However, performance does depend on your Mac’s specs. Older
                Intel Macs may struggle with large databases or heavy VBA
                processing. Apple silicon Macs handle virtualisation remarkably
                well, often matching native Windows laptop performance.
              </P>
              <P>
                The easiest way to know how it will run on your Mac is to try
                it. Parallels has historically offered a free trial, so install
                it, load a copy of your real database and use it for a few days
                before you buy. Check the current trial terms on the Parallels
                website.
              </P>
              <H3>Other virtual machine apps</H3>
              <P>
                Parallels isn’t the only way to run Windows on a Mac. VMware
                Fusion and the open-source UTM app are common alternatives.
                Parallels tends to be the easiest for non-technical users
                because it automates the Windows install and blends into the Mac
                desktop. If you already have licences for another tool, check
                whether it supports Windows on Arm for your Mac. Licensing terms
                for these products change, so confirm current pricing and
                conditions before you commit.
              </P>
              <ProsCons
                shine={[
                  "Full Access functionality (forms, reports, VBA, macros)",
                  "No rebooting required, so you run Access alongside Mac apps",
                  "Seamless file sharing between Windows and Mac",
                  "Works on Apple silicon Macs (M1, M2, M3 and later)",
                  "Regularly updated to support the latest macOS and Windows versions",
                  "Can run other Windows-only software too (Publisher, specialised tools)",
                ]}
                fall={[
                  "Annual subscription cost plus Windows and Access licences",
                  "Needs 16GB or more of RAM for smooth performance",
                  "Consumes significant disk space (30-50GB for a Windows VM)",
                  "Battery drain on laptops from running two operating systems",
                  "Network database performance may lag compared to native Windows",
                ]}
              />
              <H3>Who should choose Parallels?</H3>
              <TickList
                items={[
                  "Individuals or small teams (2-10 people) using Access regularly",
                  "Users who need full Access features (VBA, design tools, advanced queries)",
                  "Organisations with modern Mac hardware (especially Apple silicon)",
                  "Businesses that also need other Windows software in their operations",
                  "Users comfortable with annual software subscriptions",
                ]}
              />
            </Section>

            {/* Solution 2 */}
            <Section
              id="cloud"
              title={
                <>
                  Solution 2:{" "}
                  <span className={styles.accent}>
                    Cloud Hosting (Remote Desktop Services)
                  </span>
                </>
              }
            >
              <Facts
                best="Teams, remote workers, or users needing multi-device access"
                cost="~$38-$113/user/month (varies by provider)"
                speed="Depends on internet speed, but often excellent for typical use"
              />
              <H3>How cloud hosting works</H3>
              <P>
                Rather than running Access on your Mac, you{" "}
                <A href={`${AE}/access-azure-cloud-based-solutions`}>
                  connect to a Windows server in the cloud
                </A>{" "}
                where Access is installed. You interact with{" "}
                <A href={`${AE}/access-online`}>
                  Access through a remote desktop connection
                </A>
                , either via a web browser or a dedicated remote desktop app.
                The Access application actually runs on a server in a data
                centre, and your Mac is just displaying the interface.
              </P>
              <H3>Popular cloud hosting providers</H3>
              <ul className={styles.providerList}>
                {PROVIDERS.map(({ Icon, name, text }) => (
                  <li className={styles.provider} key={name}>
                    <span className={styles.providerIcon}>
                      <Icon />
                    </span>
                    <div>
                      <span className={styles.providerName}>{name}</span>
                      <span className={styles.providerText}>{text}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <H3>Questions to ask a provider</H3>
              <TickList
                items={[
                  "Where are the servers located, and can I choose the region?",
                  "Is Access already installed, or do I supply the licence?",
                  "How often are backups taken, and how do I restore one?",
                  "What support is included, and how quickly do they respond?",
                  "Can I take my data and files with me if I leave?",
                ]}
              />
              <H3>Connecting from a Mac</H3>
              <P>
                On a Mac you connect with a remote desktop client or through a
                web browser, depending on the provider. For Microsoft’s own
                services, such as Azure Virtual Desktop and Windows 365, the
                Windows App (the successor to Microsoft Remote Desktop) is the
                usual client. Your provider will tell you which to use and how
                to set it up.
              </P>
              <H3>When cloud hosting makes sense</H3>
              <P>
                If multiple team members need Access, especially if some use
                Mac, some use Windows and some work remotely, cloud hosting
                eliminates compatibility issues. Everyone accesses the same
                centralised database through their browser or remote desktop
                client, regardless of the device.
              </P>
              <P>
                Cloud hosting also handles backups, security updates and server
                maintenance. Your IT burden decreases significantly compared to
                managing local installations. For a longer look at this
                approach, see our article on{" "}
                <A
                  href={`${AE}/blog/your-access-database-needs-a-cloud-strategy`}
                >
                  why your Access database needs a cloud strategy
                </A>
                .
              </P>
              <ProsCons
                shine={[
                  "Access from any device (Mac, Windows, iPad, even Chromebook)",
                  "No local software installation required",
                  "Automatic backups and disaster recovery included",
                  "Scales easily for teams (add and remove users quickly)",
                  "IT maintenance handled by the provider (updates, security patches)",
                  "Works on older or lower-spec Macs (processing happens server-side)",
                ]}
                fall={[
                  "Monthly per-user costs add up quickly for larger teams",
                  "Requires a stable internet connection (unusable offline)",
                  "Potential latency depending on server location and connection quality",
                  "Data stored externally (compliance considerations for some industries)",
                  "Less responsive than local applications (input lag on slower connections)",
                ]}
              />
              <H3>Security and compliance considerations</H3>
              <P>
                When hosting business data in the cloud, security becomes
                paramount. Reputable providers offer encryption in transit and
                at rest, multi-factor authentication and compliance
                certifications (ISO 27001, SOC 2, HIPAA if required).
              </P>
              <P>
                However, some industries or organisations have policies against
                cloud data storage. If your Access database contains sensitive
                information governed by strict data residency requirements,
                cloud hosting may not be permissible.
              </P>
              <H3>Cost analysis</H3>
              <P>
                For a team of 5 users at $75/user/month, annual cost reaches
                $4,500. Compare this to Parallels ($150/user/year) plus one-time
                Windows licences. Cloud hosting becomes cost-competitive for
                larger teams or when factoring in the reduced IT overheads
                (especially if this is not done in-house).
              </P>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope="col">Team size</th>
                      <th scope="col">Parallels subscription per year</th>
                      <th scope="col">Cloud hosting at $75/user/month</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COST_ROWS.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell) => (
                          <td key={cell}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className={styles.tableNote}>
                Illustrative only. Parallels figures exclude Windows and Access
                licences, and cloud prices often include the Windows licence.
              </p>
              <P>
                On sticker price alone, Parallels is cheaper at every team size.
                Cloud hosting earns its cost through what it removes: machines
                to maintain, backups to check and compatibility problems to
                chase. Work out what your time and your IT support are worth
                before you decide.
              </P>
            </Section>

            {/* Solution 3 */}
            <Section
              id="bootcamp"
              title={
                <>
                  Solution 3:{" "}
                  <span className={styles.accent}>
                    Boot Camp (Intel Macs Only)
                  </span>
                </>
              }
            >
              <Facts
                best="Intel Mac owners willing to reboot between operating systems"
                cost="Free (Boot Camp) + Windows licence (~$40-$200) + Access licence"
                speed="Native Windows performance (best possible)"
              />
              <H3>What is Boot Camp?</H3>
              <P>
                <A
                  href="https://support.apple.com/en-us/102622"
                  rel="nofollow noopener noreferrer"
                >
                  Boot Camp
                </A>{" "}
                is Apple’s built-in utility for Intel-based Macs that creates a
                separate Windows partition on your hard drive. When you start
                your Mac, you choose whether to boot into macOS or Windows. Once
                in Windows, your Mac is functionally a Windows PC, with full
                hardware access, native performance and no virtualisation
                overhead.
              </P>
              <H3>Critical limitation... not available on Apple silicon</H3>
              <P>
                <strong>
                  Boot Camp does not work on Apple silicon Macs (M1 and later).
                </strong>{" "}
                Apple discontinued Boot Camp support when transitioning to
                ARM-based processors. If you purchased a Mac in 2021 or later,
                it almost certainly has Apple silicon, making Boot Camp
                unavailable.
              </P>
              <P>
                Boot Camp remains functional on most Intel Macs sold up to 2020,
                and on a few later models, but as these machines age, Boot Camp
                becomes less relevant as a long-term solution.
              </P>
              <H3>Setup process</H3>
              <Timeline steps={BOOTCAMP_STEPS} />
              <ProTip>
                Before you partition anything, back up the Mac with Time
                Machine. Boot Camp changes how your drive is divided, and it’s
                much easier to recover from a mistake if you have a backup.
              </ProTip>
              <Callout
                tone="slate"
                label="Windows version matters"
                Icon={WarningIcon}
              >
                Boot Camp on Intel Macs is tied to the Windows versions Apple
                supports for your specific model, and Microsoft ended mainstream
                support for Windows 10 in October 2025. Check Apple’s support
                page for your model before you start, and weigh whether a setup
                tied to an older Windows version is worth the effort.
              </Callout>
              <ProsCons
                shine={[
                  "True native Windows performance (the fastest option)",
                  "No virtualisation overhead or battery drain",
                  "Free software (Boot Camp is included in macOS)",
                  "Full hardware access (GPU, all RAM, all CPU cores)",
                  "Best for large databases or intensive VBA processing",
                ]}
                fall={[
                  "Only works on Intel Macs (not available on Apple silicon)",
                  "Must reboot to switch between macOS and Windows",
                  "Cannot run Mac and Windows apps simultaneously",
                  "Disk space consumed by both operating systems",
                  "File sharing between operating systems is more cumbersome than with virtualisation",
                  "A dead-end solution as Apple phases out Intel Macs",
                ]}
              />
              <H3>When to consider Boot Camp</H3>
              <P>
                Boot Camp makes sense if you already own an Intel Mac, work
                primarily in Windows applications (beyond just Access), and
                don’t need to frequently switch between macOS and Windows. The
                reboot requirement is disruptive for users who need both
                operating systems throughout the day.
              </P>
              <P>
                However, as a long-term solution, Boot Camp is really not the
                answer. Apple has moved entirely to Apple silicon. When your
                current Intel Mac reaches end of life (and let’s face it, that’s
                likely within a few years), replacement options supporting Boot
                Camp won’t exist.
              </P>
            </Section>

            {/* Solution 4 */}
            <Section
              id="viewers"
              title={
                <>
                  Solution 4:{" "}
                  <span className={styles.accent}>
                    File Viewers and Limited Access Tools
                  </span>
                </>
              }
            >
              <Facts
                best="Viewing and exporting data only (no editing)"
                cost="$0-$75 (one-time purchase)"
                speed="Fast for viewing, but extremely limited functionality"
              />
              <P>
                Several third-party tools claim to open Access databases on Mac.
                However, these are typically read-only or have very limited
                editing capabilities.
              </P>
              <H3>Available options</H3>
              <ol className={styles.olist}>
                <li>
                  <span className={styles.strongLine}>MDB Viewer</span> (by
                  Eggerapps) - $28.50, can view and export data
                </li>
                <li>
                  <span className={styles.strongLine}>
                    Actual ODBC Driver for Access
                  </span>{" "}
                  (by Actual Technologies) - connects{" "}
                  <A href={`${AE}/blog/access-vs-excel`}>Excel</A> and FileMaker
                  to Access databases
                </li>
                <li>
                  <span className={styles.strongLine}>LibreOffice Base</span> -
                  free, but complex and with limited Access compatibility
                </li>
              </ol>
              <H3>Limitations</H3>
              <P>
                It’s crucial to understand what these tools can, and more
                importantly <strong>cannot</strong>, do.
              </P>
              <ul className={styles.list}>
                <li>
                  No design view access (can’t modify forms, reports or queries)
                </li>
                <li>No VBA macro support</li>
                <li>Limited or no write capability</li>
                <li>Cannot run Access applications, can only view raw data</li>
                <li>Password-protected databases are often not supported</li>
                <li>
                  They may struggle with large files, and{" "}
                  <A href={`${AE}/blog/2gb-access-database-limit`}>
                    the 2GB limit on Access databases
                  </A>{" "}
                  is a common reason files get that big
                </li>
              </ul>
              <H3>A safe routine for emergency data extraction</H3>
              <ol className={styles.olist}>
                <li>
                  Make a copy of the file and work on the copy, never the
                  original.
                </li>
                <li>Open the copy in your viewer of choice.</li>
                <li>Export each table you need to CSV.</li>
                <li>
                  Open the CSV files in Excel or Numbers and, if you can, check
                  the row counts against the original.
                </li>
              </ol>
              <ProTip>
                If you only need the data once, ask the person who sent the
                database to export it for you. They can produce a CSV or Excel
                file in a minute or two, and you never need to install anything
                on your Mac.
              </ProTip>
              <ProsCons
                shine={[
                  "Relatively inexpensive one-time purchase",
                  "No Windows installation required",
                  "Lightweight, so it doesn’t consume many system resources",
                  "Quick access to data for viewing and exporting",
                ]}
                fall={[
                  "Read-only or severely limited editing",
                  "Cannot run actual Access applications",
                  "No support for complex database features",
                  "Not suitable for business-critical database work",
                  "May struggle with large or complex database files",
                ]}
              />
              <P>
                As a good rule of thumb, file viewers serve just one purpose:
                emergency data extraction. If you receive an Access database and
                just need to export data to CSV or view the contents, these
                tools suffice. But they’re not viable for running an
                Access-dependent business operation.
              </P>
            </Section>

            {/* Solution 5 */}
            <Section
              id="migrate"
              title={
                <>
                  Solution 5:{" "}
                  <span className={styles.accent}>
                    Migrate to a Mac-Compatible Alternative (Long-Term Solution)
                  </span>
                </>
              }
            >
              <Facts
                best="Organisations ready to modernise and leave Access behind"
                cost="Varies widely (free to $225+/user/month)"
                speed="Native Mac performance (then highly dependent on your database choice)"
              />
              <H3>Why consider migration?</H3>
              <P>
                If your organisation is heavily invested in Mac hardware,
                continuing to rely on Access creates ongoing friction. Migration
                to a modern, cross-platform database solution might be the best
                option.
              </P>
              <TickList
                items={[
                  "Eliminate the need for workarounds",
                  "Provide better collaboration features",
                  "Enable mobile access (iPhone and iPad)",
                  "Reduce long-term costs",
                  "Future-proof your data management",
                ]}
              />
              <H3>Top Mac-compatible alternatives</H3>
              <ul className={styles.altList}>
                {ALTERNATIVES.map((alt) => (
                  <li className={styles.altRow} key={alt.name}>
                    <div
                      className={`${styles.altTile} ${alt.accent ? styles.altAccent : ""}`}
                    >
                      <alt.Icon />
                    </div>
                    <div className={styles.altBody}>
                      <h4 className={styles.altName}>{alt.name}</h4>
                      <p className={styles.altBlurb}>{alt.blurb}</p>
                      <div className={styles.altCols}>
                        <ul className={styles.altFeatures}>
                          {alt.features.map((f) => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                        <div className={styles.altMeta}>
                          <p>
                            <strong>Cost:</strong> {alt.cost}
                          </p>
                          <p>
                            <strong>Best for:</strong> {alt.best}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <P>
                If Power Apps interests you, our{" "}
                <A href="/services/microsoft-power-platform/power-apps">
                  Power Apps consulting
                </A>{" "}
                page explains how an Access database can be rebuilt as a
                browser-based app that works the same on every device.
              </P>
              <H3>A middle path: keep Access, move the data</H3>
              <P>
                Migration doesn’t have to mean abandoning Access completely.
                Many organisations keep the Access front end for the people who
                rely on it, and move the tables to SQL Server or Azure SQL. Mac
                users can then reach the same data through browser-based tools,
                reports and apps, without anyone rebuilding the forms that
                already work.
              </P>
              <P>
                It’s also a sensible first step if the database is growing or
                struggling with several users. Our{" "}
                <A href={`${AE}/sql-server-backend-business-solutions`}>
                  SQL Server back-end work
                </A>{" "}
                covers how the split is done, and a staged move lets you retire
                Access screens one at a time as Mac-friendly replacements are
                ready.
              </P>
              <H3>Migration considerations</H3>
              <P>
                Moving off Access is a rebuild as much as a transfer. The data
                moves across easily. The logic around it usually doesn’t.
              </P>
              <Diagram
                narrow
                caption="Data carries across. Logic and screens are rebuilt."
              >
                <MigrationMapSvg />
              </Diagram>
              <div className={styles.considerList}>
                <div className={styles.consider}>
                  <h4 className={styles.considerTitle}>
                    <DatabaseIcon /> Data migration
                  </h4>
                  <ul className={styles.considerItems}>
                    <li>
                      Most alternatives can import Access tables via CSV export
                    </li>
                    <li>Forms and reports must be rebuilt in the new system</li>
                    <li>VBA macros cannot be automatically converted</li>
                    <li>
                      <A href={`${AE}/3rd-party-product-integration`}>
                        Complex queries may need reconfiguration
                      </A>
                    </li>
                  </ul>
                </div>
                <div className={styles.consider}>
                  <h4 className={styles.considerTitle}>
                    <UsersIcon /> Training requirements
                  </h4>
                  <ul className={styles.considerItems}>
                    <li>Your team must learn a new software interface</li>
                    <li>
                      It’s a different paradigm from Access (especially cloud
                      platforms)
                    </li>
                    <li>
                      Budget time for the learning curve and reduced
                      productivity at first
                    </li>
                  </ul>
                </div>
                <div className={styles.consider}>
                  <h4 className={styles.considerTitle}>
                    <TargetIcon /> Feature parity
                  </h4>
                  <ul className={styles.considerItems}>
                    <li>
                      Ensure your chosen alternative supports your specific
                      requirements
                    </li>
                    <li>Test complex workflows before committing</li>
                    <li>
                      Some Access features may not have direct equivalents
                    </li>
                  </ul>
                </div>
              </div>
              <ProsCons
                shine={[
                  "Native Mac performance and integration",
                  "Modern, cloud-based collaboration",
                  "Better mobile support (iPhone and iPad apps)",
                  "Often more cost-effective long-term",
                  "Future-proof as Access becomes increasingly outdated",
                  "Easier onboarding for new employees (more intuitive interfaces)",
                ]}
                fall={[
                  "Significant upfront time investment for migration",
                  "Data and logic must be rebuilt, not just transferred",
                  "Potential productivity loss during the transition",
                  "May require training or consultant assistance",
                  "Not all Access features may be available in alternatives",
                ]}
              />
            </Section>

            {/* Compare */}
            <Section
              id="compare"
              title={
                <>
                  Comparing Your Options...{" "}
                  <span className={styles.accent}>
                    Which Solution is Right for You?
                  </span>
                </>
              }
            >
              <P>
                Choosing the best Access solution for your Mac environment
                depends on numerous factors. Consider your database complexity,
                team size, budget, technical expertise and long-term business
                strategy. Is it all worth it, or could your problems be resolved
                with some{" "}
                <A href={`${AE}/access-support`}>professional support</A>?
              </P>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope="col">Solution</th>
                      <th scope="col">Best for</th>
                      <th scope="col">Monthly cost</th>
                      <th scope="col">Setup complexity</th>
                      <th scope="col">Long-term viability</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Parallels Desktop</td>
                      <td>
                        Individual users, small teams, full Access features
                        needed
                      </td>
                      <td>$12-$19/user</td>
                      <td>Low</td>
                      <td>Good (works on Apple silicon)</td>
                    </tr>
                    <tr>
                      <td>Cloud hosting</td>
                      <td>Teams, remote workers, multiple device access</td>
                      <td>$38-$113/user</td>
                      <td>Low-Medium</td>
                      <td>Excellent (scalable, maintained)</td>
                    </tr>
                    <tr>
                      <td>Boot Camp</td>
                      <td>Intel Mac owners, heavy Windows usage</td>
                      <td>$0 (one-time licence)</td>
                      <td>Medium</td>
                      <td>Poor (Intel Macs being phased out)</td>
                    </tr>
                    <tr>
                      <td>File viewers</td>
                      <td>Read-only data access, exports only</td>
                      <td>$0-4/user</td>
                      <td>Very low</td>
                      <td>Limited (not for business operations)</td>
                    </tr>
                    <tr>
                      <td>Migration to an alternative</td>
                      <td>Mac-first organisations, modernisation ready</td>
                      <td>$15-$75/user</td>
                      <td>High</td>
                      <td>Excellent (future-proof)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <P>
                A quick guide to reading the first table. Setup complexity
                reflects how much technical work you’ll do yourself, or need
                help with, to get running. Long-term viability is our view of
                how long each approach is likely to stay supported and
                practical, not a guarantee. Monthly cost is per user and
                excludes Windows and Access licences unless noted.
              </P>
              <H3>What each option can actually do</H3>
              <P>
                Price isn’t the only difference. This table shows which Access
                features survive in each option, so you can match the choice to
                what your database really needs.
              </P>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope="col">Capability</th>
                      <th scope="col">Parallels</th>
                      <th scope="col">Cloud hosting</th>
                      <th scope="col">Boot Camp</th>
                      <th scope="col">File viewers</th>
                      <th scope="col">Migration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Design view and VBA editing</td>
                      <td>Yes</td>
                      <td>Yes, if the host installs full Access</td>
                      <td>Yes</td>
                      <td>No</td>
                      <td>Rebuilt in the new tool</td>
                    </tr>
                    <tr>
                      <td>Runs forms, reports and macros</td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>No</td>
                      <td>Rewritten, not converted</td>
                    </tr>
                    <tr>
                      <td>Works on Apple silicon</td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>No</td>
                      <td>Yes</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Needs a reboot to switch</td>
                      <td>No</td>
                      <td>No</td>
                      <td>Yes</td>
                      <td>No</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Works offline</td>
                      <td>Yes</td>
                      <td>No</td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>Depends on the tool</td>
                    </tr>
                    <tr>
                      <td>Windows licence needed</td>
                      <td>Yes</td>
                      <td>Usually included by the provider</td>
                      <td>Yes</td>
                      <td>No</td>
                      <td>No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className={styles.tableNote}>
                Prices are indicative. See the note on pricing at the end of
                this article.
              </p>
            </Section>

            {/* Best practice */}
            <Section
              id="practice"
              title={
                <>
                  Implementation{" "}
                  <span className={styles.accent}>Best Practices</span>
                </>
              }
            >
              <P>
                Whichever route you take, a few habits make the difference
                between a setup that quietly works and one that causes support
                calls. Here is what a healthy Parallels setup looks like, then a
                short checklist for each route.
              </P>
              <Diagram
                narrow
                caption="A Mac running Access inside a Windows virtual machine, with the four settings that matter most."
              >
                <SetupAnatomySvg />
              </Diagram>
              <div className={styles.walkGrid}>
                {WALKTHROUGHS.map((w) => (
                  <div
                    className={`${styles.walkCard} ${w.dark ? styles.walkDark : ""}`}
                    key={w.title}
                  >
                    <div className={styles.walkHead}>
                      <span className={styles.walkChip}>
                        <w.Icon />
                      </span>
                      <h3 className={styles.walkTitle}>{w.title}</h3>
                    </div>
                    <ol className={styles.walkSteps}>
                      {w.steps.map(([label, text], i) => (
                        <li className={styles.walkStep} key={label}>
                          <span className={styles.walkNum}>{i + 1}</span>
                          <p className={styles.walkText}>
                            <strong>{label}.</strong>{" "}
                            {w.help && label === "Consider hiring help" ? (
                              <>
                                <A
                                  href={`${AE}/access-database-optimisation-and-repair`}
                                >
                                  Professional migration assistance
                                </A>{" "}
                                often pays for itself.
                              </>
                            ) : (
                              text
                            )}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
              <H3>A note on licensing</H3>
              <P>
                Every option except a viewer or a replacement tool still needs
                valid Windows and Access licences, or Access Runtime where
                that’s enough. Microsoft’s licensing rules for virtual machines
                and hosted desktops can be strict and they change, so confirm
                what applies to your organisation with your Microsoft reseller
                before you buy anything. It’s a short conversation that can save
                an expensive surprise.
              </P>
            </Section>

            {/* Mistakes */}
            <Section
              id="mistakes"
              title={
                <>
                  Common{" "}
                  <span className={styles.accent}>mistakes to avoid</span>
                </>
              }
            >
              <P>
                Most Access-on-Mac problems come from the same handful of
                avoidable mistakes. Each one below shows what goes wrong and
                what to do instead.
              </P>
              <ol className={styles.mistakeList}>
                {MISTAKES.map(({ Sketch, title, fix }, i) => (
                  <li className={styles.mistake} key={title}>
                    <span className={styles.mistakeNum} aria-hidden="true">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className={styles.mistakeTitle}>{title}</h3>
                      <div className={styles.mistakeSketch}>
                        <Sketch />
                      </div>
                      <div className={styles.insteadRow}>
                        <span className={styles.insteadPill}>Instead</span>
                        <p className={styles.insteadText}>{fix}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
              <div className={styles.checklist}>
                <h3 className={styles.panelTitle}>Before you commit, check</h3>
                <ul className={styles.checkGrid}>
                  {CHECKLIST.map((item) => (
                    <li key={item}>
                      <span className={styles.iconChip}>
                        <CheckIcon />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Section>

            {/* Help */}
            <Section
              id="help"
              title={
                <>
                  When{" "}
                  <span className={styles.accent}>
                    Professional Help Makes Sense
                  </span>
                </>
              }
            >
              <P>
                Most of the solutions above can be set up independently. Our{" "}
                <A href="/services/sql-server-and-access-integration">
                  SQL Server and Access integration
                </A>{" "}
                and{" "}
                <A href="/services/database-development-and-solutions">
                  database development
                </A>{" "}
                teams step in when the stakes or the complexity are higher.
              </P>
              <div className={styles.ctaBand}>
                <h3 className={styles.ctaTitle}>
                  Some jobs are better{" "}
                  <span className={styles.accent}>handed to an expert</span>
                </h3>
                <div className={styles.ctaCols}>
                  <div>
                    <h4 className={styles.ctaColTitle}>
                      Consider expert help when you have
                    </h4>
                    <ul className={styles.ctaList}>
                      {HELP_WHEN.map(([strong, rest]) => (
                        <li key={strong}>
                          <span className={styles.iconChip}>
                            <CheckIcon />
                          </span>
                          <span>
                            <strong>{strong}</strong> {rest}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className={styles.ctaColTitle}>
                      Professional Access consultants can
                    </h4>
                    <ul className={styles.ctaList}>
                      {HELP_CAN.map((t) => (
                        <li key={t}>
                          <span className={styles.iconChip}>
                            <CheckIcon />
                          </span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={styles.ctaActions}>
                  <a href="#contact" className="btn">
                    Contact us for a free consultation
                  </a>
                  <a
                    href={`${AE}/is-access-right-for-your-company`}
                    className={styles.ctaLink}
                  >
                    Is Access right for your company? <ArrowRightIcon />
                  </a>
                </div>
              </div>
            </Section>

            {/* FAQ */}
            <Section
              id="faq"
              title={
                <>
                  Frequently{" "}
                  <span className={styles.accent}>asked questions</span>
                </>
              }
            >
              <P>
                These are the questions we hear most often from Mac users who
                have just met an Access database for the first time.
              </P>
              <div className={styles.faqList}>
                {FAQS.map((f) => (
                  <details className={styles.faqItem} key={f.q}>
                    <summary className={styles.faqQ}>
                      <span>{f.q}</span>
                      <span className={styles.faqChevron}>
                        <ChevronIcon />
                      </span>
                    </summary>
                    <div className={styles.faqA}>
                      {f.a.map((para, i) => (
                        <p className={styles.faqText} key={i}>
                          {para}
                        </p>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </Section>

            {/* Bottom line */}
            <Section
              id="bottom-line"
              title={
                <>
                  The <span className={styles.accent}>Bottom Line</span>
                </>
              }
            >
              <P>
                Can you run Microsoft Access on a Mac? Yes... but not natively.
                Your best option depends on your specific needs.
              </P>
              <ul className={styles.pickList}>
                {PICKS.map(([q, a]) => (
                  <li className={styles.pick} key={q}>
                    <span className={styles.pickQ}>{q}</span>
                    <span className={styles.pickArrow}>
                      <ArrowRightIcon />
                    </span>
                    <span className={styles.pickA}>{a}</span>
                  </li>
                ))}
              </ul>
              <P>
                The “best” solution varies by organisation. A startup might
                choose Airtable’s modern interface, while an enterprise with
                complex Access applications might opt for cloud hosting. The key
                is honestly assessing your requirements, budget and timeline.
              </P>
              <P>
                Remember: Access was designed in the 1990s for a Windows-only
                world. While workarounds exist, moving to a modern,
                cross-platform solution often makes more sense for Mac-centric
                organisations in 2026 and beyond.
              </P>
              <H3>Need help deciding?</H3>
              <P>
                <A href={`${AE}/is-access-right-for-your-company`}>
                  Choosing the right Access solution
                </A>{" "}
                for your Mac environment depends on numerous factors, from your
                database complexity, team size, budget and technical expertise
                to financial decisions that consider your long-term business
                strategy.
              </P>
              <P>
                At Office Experts, we’ve helped hundreds of organisations
                navigate these challenges. Whether you need help migrating your
                Access databases to Azure, or rewriting them in Power Apps, ASP
                or web-based solutions, our team of certified consultants can
                guide you through the process.
              </P>
              <P>
                <A href="/contact-us">Contact us for a free consultation</A> to
                discuss your specific situation and determine the best path
                forward for your organisation. We’ll give you an honest
                recommendation, even if that means a DIY solution is your best
                bet.
              </P>
              <div className={styles.disclaimer}>
                <p className={styles.disclaimerText}>
                  *All prices included in this article are in AUD and relevant
                  as of January 2026. Please check for the latest pricing at{" "}
                  <A href="https://www.microsoft.com/en-au">
                    Microsoft’s official website
                  </A>
                  .
                </p>
              </div>
              <div className={styles.authorBox}>
                <span
                  className={`${styles.avatar} ${styles.avatarLarge}`}
                  aria-hidden="true"
                >
                  <Image src={scott} alt={AUTHOR_NAME} width={56} height={56} />
                </span>
                <div>
                  <p className={styles.authorBoxTitle}>About the author</p>
                  <p className={styles.authorBoxName}>{AUTHOR_NAME}</p>
                  <p className={styles.authorBoxText}>
                    Scott founded Office Experts Group in 2000. With decades of
                    experience in design, programming and consulting, he helps
                    businesses unlock the full potential of Microsoft solutions.
                  </p>
                </div>
              </div>
            </Section>

            {/* Related reading */}
            <Section
              id="related"
              title={
                <>
                  Keep <span className={styles.accent}>reading</span>
                </>
              }
            >
              <div className={styles.relatedGrid}>
                {RELATED.map((r) => (
                  <Link
                    href={r.href}
                    className={styles.relatedCard}
                    key={r.href}
                  >
                    <span className={styles.relatedKind}>{r.kind}</span>
                    <h3 className={styles.relatedTitle}>{r.title}</h3>
                    <p className={styles.relatedText}>{r.text}</p>
                    <span className={styles.relatedMore}>
                      {r.linkText} <ArrowRightIcon />
                    </span>
                  </Link>
                ))}
              </div>
            </Section>
          </article>
        </div>
      </div>

      <Contact />
    </>
  );
}
