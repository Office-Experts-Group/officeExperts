// /app/blog/microsoft-word-for-mac/page.js
import Image from "next/image";
import Link from "next/link";

import Contact from "@/components/Contact";
import { generateOrganizationSchema } from "@/utils/schemaGenerators";
import styles from "@/styles/microsoftWordForMacBlog.module.scss";

import rochelle from "@/public/team/rochelle.webp";

import HeroSvg from "./(svgs)/HeroSvg";
import CarryOverSvg from "./(svgs)/CarryOverSvg";
import DecisionSvg from "./(svgs)/DecisionSvg";
import TemplateAnatomySvg from "./(svgs)/TemplateAnatomySvg";
import {
  SketchAssume,
  SketchMacro,
  SketchFonts,
  SketchAddin,
  SketchShare,
} from "./(svgs)/MistakeSketches";
import {
  IconCode,
  IconLayers,
  IconPlug,
  IconShield,
  IconUsers,
  IconBulb,
  IconInfo,
  IconCheck,
  IconCloud,
  IconMonitor,
  IconGlobe,
  IconTag,
  IconRefresh,
  IconArrowRight,
  IconChevron,
  IconDoc,
  IconAlert,
  IconQuoteMark,
} from "./(svgs)/Icons";

// Keep these constants in sync with layout.js (no shared config file).
const PAGE_URL = "https://www.officeexperts.com.au/blog/microsoft-word-for-mac";
const PAGE_TITLE = "Word for Mac: Features and Limitations | Office Experts";
const PAGE_DESCRIPTION =
  "The real differences between Word for Mac and Windows: missing features, VBA limits, workarounds, and whether Word for Mac is right for you.";

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_HEADLINE = "Microsoft Word for Mac: What You Need to Know";
const BREADCRUMB_NAME = "Microsoft Word for Mac";
const AUTHOR_NAME = "Rochelle Robinson";
const READING_MINUTES = 13;
const WORD_COUNT = 3050;
const HERO_IMAGE_PATH = "/logo.png";
const HERO_IMAGE_ALT = "Office Experts logo";

// +11:00 is AEDT (first Sunday in October to first Sunday in April).
// datePublished is the original 2025-12-13T09:00:00+10:00 instant expressed
// in AEDT. dateModified is set by hand and must not be in the future.
const DATE_PUBLISHED = "2025-12-13T10:00:00+11:00";
const DATE_MODIFIED = "2026-10-28T07:00:00+11:00";

function formatDate(iso) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Sydney",
  }).format(new Date(iso));
}

const TOC = [
  { id: "dilemma", label: "The Mac user’s dilemma" },
  { id: "differences", label: "What’s actually different" },
  { id: "same", label: "What works the same" },
  { id: "why", label: "Why the limitations exist" },
  { id: "scenarios", label: "Real-world pain points" },
  { id: "choose", label: "Who should use Word for Mac" },
  { id: "test", label: "How to test a template" },
  { id: "hybrid", label: "Hybrid setups and alternatives" },
  { id: "pricing", label: "Pricing" },
  { id: "tips", label: "Tips for Mac Word users" },
  { id: "mistakes", label: "Common mistakes" },
  { id: "outlook", label: "Future outlook" },
  { id: "help", label: "When to get help" },
  { id: "faq", label: "FAQs" },
  { id: "takeaways", label: "Key takeaways" },
];

const GLANCE = [
  {
    value: "2016",
    label: "Word for Mac rebuilt",
    text: "A rewrite, so some Windows-only technology never made the trip.",
  },
  {
    value: "4",
    label: "Gaps that matter most",
    text: "VBA macros, mail merge, developer tools and add-ins.",
  },
  {
    value: "Same price",
    label: "Mac or Windows",
    text: "Microsoft 365 costs the same on either platform.",
  },
];

const DIFFERENCES = [
  {
    area: "VBA macros and automation",
    windows: "Full VBA support with macro recorder",
    mac: "Limited VBA, no macro recorder since 2016",
    impact: "Can’t record or easily create automation",
    workaround: (
      <>
        Use AppleScript,{" "}
        <Link href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate">
          Power Automate
        </Link>
        , or run Windows virtually
      </>
    ),
  },
  {
    area: "Mail merge",
    windows: (
      <>
        Robust{" "}
        <Link href="/services/microsoft-word/mail-merge">mail merge</Link> with
        multiple data sources
      </>
    ),
    mac: "Basic functionality, fewer options, reported bugs",
    impact: "Bulk document generation is harder",
    workaround: "Use third-party tools or Numbers/Excel integration",
  },
  {
    area: "Developer tools",
    windows: "Full Developer tab with XML mapping, form controls",
    mac: "Reduced developer features, limited content controls",
    impact: "Can’t build complex document systems",
    workaround: "Use Windows for template development",
  },
  {
    area: "Add-in compatibility",
    windows: "Broad third-party add-in support",
    mac: "Many add-ins unavailable or limited",
    impact: "Workflow integrations may not work",
    workaround: "Check Mac compatibility before purchasing",
  },
];

const SAME_LIST = [
  "Basic formatting, styles and tables",
  "Track Changes and collaboration",
  "Cloud integration (OneDrive, SharePoint)",
  "PDF export and printing",
  "Most everyday document tasks",
];

const REASONS = [
  {
    Icon: IconLayers,
    title: "A different codebase",
    text: "Word for Mac was completely rewritten in 2016. It is not the Windows code ported across, so features do not arrive on both platforms at the same time, or at all.",
  },
  {
    Icon: IconPlug,
    title: "Windows-only technologies",
    text: "Technologies such as COM and ActiveX are built around Windows and do not translate to macOS.",
  },
  {
    Icon: IconShield,
    title: "Apple’s sandboxing",
    text: "Apple’s security requirements restrict what an app can reach outside its own container. That hits any macro or add-in that reads files or talks to other processes.",
  },
  {
    Icon: IconUsers,
    title: "Development priorities",
    text: "A smaller Mac user base means lower development priority for niche, power-user features.",
  },
];

const SCENARIOS = [
  {
    title: "“The template my firm uses doesn’t work”",
    problem: (
      <>
        <strong>Problem -</strong>{" "}
        <Link href="/services/microsoft-word/corporate-global-template-solution">
          Corporate templates built on Windows
        </Link>{" "}
        with macros and controls just falling apart and crashing all over the
        shop.
      </>
    ),
    solutionsLabel: "Solutions for Mac users...",
    solutions: [
      "Request a simplified, Mac-compatible version",
      "Use Parallels or VMware to run Windows",
      "Rebuild the template using Mac-compatible features",
      "Use cloud-based document assembly tools",
    ],
    tip: "Ask the template owner which features are Windows-only. A handful of controls often cause most of the failures.",
  },
  {
    title: "“I need to automate repetitive tasks”",
    problem: (
      <>
        <strong>Problem -</strong> No macro recorder, limited{" "}
        <Link href="https://www.excelexperts.com.au/vba-macro-development">
          VBA development ability
        </Link>
        , developer tools and inability to create the custom application
        required.
      </>
    ),
    solutionsLabel: "Solutions...",
    solutions: [
      "Learn AppleScript for Mac automation",
      "Use Power Automate (cloud-based)",
      "Keyboard Maestro or similar Mac automation tools",
      <>
        Consider whether the task can be done in{" "}
        <Link href="https://www.excelexperts.com.au">Excel</Link> instead
      </>,
    ],
    tip: "Write the task down step by step first. A clear process is easier to rebuild in any tool.",
  },
  {
    title: "“Macros from colleagues don’t work”",
    problem: (
      <>
        <strong>Problem -</strong> VBA macros with serious compatibility issues
        between Windows and Mac platforms, causing shared documents with
        automation to fail unexpectedly.
      </>
    ),
    solutionsLabel: "Solutions...",
    solutions: [
      "Ask for a macro-free version",
      "Run Windows in a virtual machine",
      "Use web services or APIs instead of local macros",
      "Maintain one Windows machine for macro tasks",
    ],
    tip: "Ask senders to include a plain .docx copy alongside any macro-enabled file.",
  },
  {
    title: "“Missing add-ins I need”",
    problem: (
      <>
        <strong>Problem -</strong> Windows-only add-ins are simply impossible to
        replicate on the Mac.
      </>
    ),
    solutionsLabel: "Solutions...",
    solutions: [
      "Check for Mac alternatives (often exist)",
      "Use web-based equivalents",
      "Contact the add-in vendor about Mac support",
      "Evaluate whether a Windows machine is necessary",
    ],
    tip: "Read the vendor’s system requirements before you buy, not after.",
  },
];

const OUTCOMES = [
  {
    Icon: IconCheck,
    title: "Word for Mac works if...",
    text: "Word for Mac is well-suited for users whose needs are basic to intermediate, who don’t require automation or macros, and who value a native Mac experience. If file compatibility with Windows users is your primary concern and you work mostly with simple documents, Word for Mac will serve you well.",
  },
  {
    Icon: IconMonitor,
    title: "You are going to need Windows Word if...",
    text: "You’ll need to stick with Windows Word if you depend on macros and VBA, or if advanced mail merge is essential to your workflow. Windows Word is also necessary if you develop templates for others, your industry standard is Windows-based, or you need specific Windows-only add-ins that aren’t available on the Mac platform.",
  },
  {
    Icon: IconRefresh,
    title: "Consider a hybrid approach if...",
    text: "Many professionals find success with a hybrid approach, especially if you’re mostly Mac-based but occasionally need Windows-specific features. This strategy offers flexibility without forcing you to abandon your preferred platform entirely. Some teams also find it practical to keep one dedicated Windows machine in the office for tasks that absolutely require native Windows features, such as developing templates for others or running critical macros.",
  },
];

const STEPS = [
  {
    title: "List what the template relies on",
    text: "Ask the author, or open the file and look for macros, custom ribbon tabs, content controls, mail merge fields and add-ins. Each one is a risk on Mac.",
    tip: "A macro-enabled file usually has a .docm or .dotm extension. A plain .docx or .dotx cannot carry macros.",
  },
  {
    title: "Open a copy, never the original",
    text: "Save a copy to a test folder on your Mac and open that. If anything is altered on save, the master file stays untouched.",
    tip: "Put TEST in the file name so nobody mistakes the copy for the live version.",
  },
  {
    title: "Try the everyday actions",
    text: "Apply styles, insert a table, update a cross-reference, fill in each content control and export to PDF. Note anything that does nothing or throws an error.",
    tip: "Keep a short list. Three or four real failures are more useful than a feeling that it “seems off”.",
  },
  {
    title: "Compare the output side by side",
    text: "Export a PDF on the Mac and on a Windows machine, then compare pagination, fonts, numbering, and header and footer content.",
    tip: "Page breaks that move are often a font substitution rather than a fault in the template.",
  },
  {
    title: "Decide what to do about each failure",
    text: "Sort every issue into one of four buckets: remove it, rebuild it for Mac, run it on Windows, or replace it with cloud automation.",
    tip: "Rebuilding is cheaper when it is planned. Emergency fixes before a deadline cost more.",
  },
  {
    title: "Write down the result",
    text: "Record which platform each person should use for which job, and share it. It stops the same question coming back every month.",
    tip: "Put the rule at the top of the template’s instructions page.",
  },
];

const METHODS = [
  {
    Icon: IconMonitor,
    title: "Run Windows in a virtual machine",
    text: "Parallels Desktop or VMware lets you run Windows alongside macOS, so you can open the full Windows build of Word when a file needs it.",
    best: "Occasional macro or template work",
  },
  {
    Icon: IconCloud,
    title: "Automate in the cloud",
    text: (
      <>
        Cloud services such as{" "}
        <Link href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate">
          Power Automate
        </Link>{" "}
        handle automation tasks that don’t require local VBA macros.
      </>
    ),
    best: "Repeatable workflows between apps",
  },
  {
    Icon: IconCode,
    title: "Keep one Windows machine",
    text: "A dedicated Windows machine in the office is practical for tasks that absolutely require native Windows features, such as developing templates for others or running critical macros.",
    best: "Teams that share macro-driven templates",
  },
  {
    Icon: IconGlobe,
    title: "Use Word for the web",
    text: "Handy for quick edits and review from any device. It is a browser tool, so it does not run VBA macros and is not a substitute for the desktop app.",
    best: "Light edits, review and sharing",
  },
];

const OTHER_TOOLS = [
  "Pages (Apple’s word processor) for Mac-only workflows",
  <>
    <Link href="/blog/google-docs-vs-microsoft-word">
      Google Docs for a cloud-first approach
    </Link>
  </>,
  "Cloud-based document assembly tools",
  "Specialised tools for specific tasks (InDesign for publishing, etc.)",
];

const PRICE_SAME = [
  "Microsoft 365 subscriptions: same cost for Mac or PC",
  "Office 2021 perpetual: separate Mac version, similar price",
  "No discount for a “lesser” feature set",
];

const PRICE_PAYING_FOR = [
  "Native Mac application",
  "Regular updates and improvements",
  "Cloud integration",
  "Cross-platform file compatibility",
  "Support from Microsoft",
];

const TIP_CARDS = [
  {
    title: "Best practices",
    items: [
      "Save in .docx format (best compatibility)",
      "Use standard fonts (Arial, Calibri, Times New Roman)",
      "Avoid macros if sharing with others",
      "Test complex documents on both platforms",
      "Keep Word updated (monthly updates)",
    ],
  },
  {
    title: "Optimisation",
    items: [
      "Close unused documents to free memory",
      "Disable auto-save if working on large files",
      "Clear the recent file list periodically",
    ],
  },
  {
    title: "Collaboration",
    items: [
      "Use OneDrive for seamless sync",
      "Enable AutoSave for cloud documents",
      "Use Comments instead of Track Changes for simple feedback",
      "Share cloud links rather than emailing files",
    ],
  },
  {
    title: "When a file misbehaves",
    items: [
      "Save a copy before you change anything",
      "Use “Recover Text from Any File” for corrupted docs",
      "Paste the recovered text into a fresh document and reapply your styles",
      "If it keeps happening, ask for help",
    ],
  },
];

const MISTAKES = [
  {
    Sketch: SketchAssume,
    title: "Assuming a Windows file will behave the same",
    fix: "Test a copy on your Mac first, using the steps above, before a deadline depends on it.",
  },
  {
    Sketch: SketchMacro,
    title: "Sending macro-enabled files to Mac users",
    fix: "Avoid macros when sharing with others. Send a plain .docx, or explain what a Mac user will lose.",
  },
  {
    Sketch: SketchFonts,
    title: "Using unusual fonts",
    fix: "Stick to Arial, Calibri or Times New Roman for files that move between platforms.",
  },
  {
    Sketch: SketchAddin,
    title: "Buying an add-in before checking Mac support",
    fix: "Check the vendor’s Mac compatibility before purchasing.",
  },
  {
    Sketch: SketchShare,
    title: "Emailing copies instead of sharing a link",
    fix: "Share a OneDrive link so everyone works on a single version.",
  },
];

const CHECKLIST = [
  "Saved as .docx",
  "Macros removed, or their loss explained",
  "Standard fonts only",
  "Previewed as a PDF",
  "Tracked changes and comments reviewed",
  "Opened once on a Windows machine",
  "Cloud link used instead of attachments",
  "Hidden comments and personal details checked",
];

const OUTLOOK = [
  "Regular feature updates continue",
  "Some parity improvements announced",
  "But the full Windows feature set is unlikely",
  "Focus on “90% of users” needs",
];

const FAQS = [
  {
    q: "Does Word for Mac support macros?",
    a: "It supports VBA, but with limits. Mac apps are sandboxed, which restricts file access and communication across processes, and some commands available on Windows are missing. Macro recording has also been limited, so macros written on Windows often need testing or rewriting on a Mac.",
  },
  {
    q: "Can I open and edit Word documents created on Windows?",
    a: "Yes. Standard .docx files open on both platforms, and basic formatting, styles, tables and Track Changes carry across. Problems appear when a file relies on macros, ActiveX or other Windows-only controls, or add-ins.",
  },
  {
    q: "Is mail merge available in Word for Mac?",
    a: "Yes, but it is more basic, with fewer options and fewer data sources than on Windows. For bulk document generation, consider third-party tools or Numbers or Excel integration, or run the merge on a Windows machine.",
  },
  {
    q: "Do I need a Windows PC as well as my Mac?",
    a: "Not always. If you work with standard documents, you probably don’t. If you depend on macros, build templates for others or need Windows-only add-ins, plan access to Windows through a virtual machine or a dedicated machine.",
  },
  {
    q: "Which fonts are safest for shared documents?",
    a: "Arial, Calibri and Times New Roman are the safest choices for files that move between platforms. Other fonts may be substituted when a file is opened on a machine that does not have them installed.",
  },
];

const DECISION_FRAMEWORK = [
  "Test your critical workflows on Mac before committing",
  "Identify deal-breaker features early",
  "Budget for Windows access if needed",
  "Don’t assume all Windows features transfer",
];

const RELATED = [
  {
    href: "/blog/google-docs-vs-microsoft-word",
    tag: "Blog",
    title: "Google Docs vs Microsoft Word",
  },
  {
    href: "/blog/convert-canva-to-word",
    tag: "Blog",
    title: "How to convert Canva designs to Word",
  },
  {
    href: "/services/microsoft-word/corporate-global-template-solution",
    tag: "Service",
    title: "Corporate and global Word template solutions",
  },
];

function Callout({ Icon, label, children }) {
  return (
    <div className={styles.callout}>
      <span className={styles.calloutIcon}>
        <Icon />
      </span>
      <div>
        <span className={styles.calloutLabel}>{label}</span>
        <p className={styles.calloutText}>{children}</p>
      </div>
    </div>
  );
}

function Quote({ href, source, children }) {
  return (
    <figure className={styles.quote}>
      <IconQuoteMark className={styles.quoteIcon} />
      <blockquote>
        <p className={styles.quoteText}>“{children}”</p>
      </blockquote>
      <figcaption className={styles.quoteSource}>
        <Link href={href} target="_blank" rel="nofollow noopener noreferrer">
          Source: {source}
        </Link>
      </figcaption>
    </figure>
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

function TickList({ items }) {
  return (
    <ul className={styles.tickList}>
      {items.map((item, i) => (
        <li key={i}>
          <IconCheck className={styles.tick} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function WordForMacBlogPost() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationSchema(),
      {
        "@type": "WebPage",
        "@id": PAGE_URL,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        isPartOf: { "@id": `${SITE_URL}#website` },
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        inLanguage: "en-AU",
        potentialAction: [{ "@type": "ReadAction", target: [PAGE_URL] }],
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
        mainEntityOfPage: { "@id": PAGE_URL },
        headline: PAGE_HEADLINE,
        alternativeHeadline:
          "Word Mac vs Windows: Missing Features, VBA Limitations, and Workarounds",
        description: PAGE_DESCRIPTION,
        image: {
          "@type": "ImageObject",
          url: `${SITE_URL}${HERO_IMAGE_PATH}`,
          width: 1200,
          height: 630,
          caption: HERO_IMAGE_ALT,
        },
        author: { "@type": "Person", name: AUTHOR_NAME },
        publisher: { "@id": `${SITE_URL}#organization` },
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
        articleSection: "Microsoft Word",
        wordCount: WORD_COUNT,
        timeRequired: `PT${READING_MINUTES}M`,
        keywords: ["Microsoft Word for Mac", "Word for Mac limitations"],
        inLanguage: "en-AU",
        about: [
          {
            "@type": "Thing",
            name: "Microsoft Word",
            sameAs: "https://en.wikipedia.org/wiki/Microsoft_Word",
          },
          {
            "@type": "Thing",
            name: "macOS",
            sameAs: "https://en.wikipedia.org/wiki/MacOS",
          },
        ],
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
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div>
              <h1 className={styles.heroTitle}>
                Microsoft Word for Mac:{" "}
                <span className={styles.accent}>What You Need to Know</span>
              </h1>
              <p className={styles.lede}>
                Word for Mac looks like Word for Windows, but under the surface
                it is a different product. Here is what is missing, why, and how
                to work around it, so you can choose the right setup before a
                template or macro lets you down.
              </p>
              <div className={styles.authorRow}>
                <span className={styles.avatar} aria-hidden="true">
                  <Image
                    src={rochelle}
                    alt={AUTHOR_NAME}
                    width={38}
                    height={38}
                  />
                </span>
                <div className={styles.authorMeta}>
                  <span className={styles.authorName}>By {AUTHOR_NAME}</span>
                  <span className={styles.metaLine}>
                    Updated {formatDate(DATE_MODIFIED)} · {READING_MINUTES} min
                    read
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.heroArt}>
              <HeroSvg />
            </div>
          </div>
        </section>

        {/* At a glance */}
        <section className={styles.glance} aria-label="At a glance">
          <div className={styles.glanceGrid}>
            {GLANCE.map((g) => (
              <div key={g.label} className={styles.glanceCard}>
                <span className={styles.glanceValue}>{g.value}</span>
                <span className={styles.glanceLabel}>{g.label}</span>
                <p className={styles.glanceText}>{g.text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.layout}>
          <nav className={styles.toc} aria-label="Contents">
            <span className={styles.tocTitle}>Contents</span>
            <ol className={styles.tocList}>
              {TOC.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={styles.tocLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className={styles.article}>
            {/* Introduction */}
            <section id="dilemma" className={styles.section}>
              <h2>
                The Mac User’s <span className={styles.accent}>Dilemma</span>
              </h2>
              <p>
                You bought a nice new Mac, or perhaps you changed companies and
                some of your colleagues are Mac users? Your existing Word
                documents are now failing in unexpected ways. Colleagues or
                clients on their PCs send templates that break on your machine.
                Macros fail, add-ins don’t install, and features are missing.
              </p>
              <p>
                The reality is simple... Word for Mac is NOT the same as Word
                for Windows. Microsoft rebuilt Word for Mac from scratch in
                2016. Some features will never come to Mac due to technical
                limitations. Understanding these gaps helps you work around
                them, or avoid them completely.
              </p>
              <p>
                None of this makes Word for Mac a bad product. For most everyday
                writing it is excellent, and a document saved as a .docx opens
                on either platform. The trouble starts when a document depends
                on automation, custom controls or add-ins that were built for
                Windows. This guide separates the two groups so you can see
                which one you are in.
              </p>
              <Quote
                href="https://learn.microsoft.com/en-us/office/vba/api/overview/office-mac"
                source="Microsoft Learn"
              >
                Unlike other versions of Office apps that support VBA, Office
                2016 for Mac apps are sandboxed. Sandboxing restricts the apps
                from accessing resources outside the app container. This affects
                any add-ins or macros that involve file access or communication
                across processes.
              </Quote>
            </section>

            {/* Differences */}
            <section id="differences" className={styles.section}>
              <h2>
                What’s Actually{" "}
                <span className={styles.accent}>Different?</span>
              </h2>
              <p>
                Four areas cause most of the problems. Each follows the same
                pattern: Windows does it fully, Mac does it with limits, and
                there is usually a workaround.
              </p>

              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope="col">Area</th>
                      <th scope="col">Windows</th>
                      <th scope="col">Mac</th>
                      <th scope="col">Impact and workaround</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DIFFERENCES.map((row) => (
                      <tr key={row.area}>
                        <td>{row.area}</td>
                        <td>{row.windows}</td>
                        <td>{row.mac}</td>
                        <td>
                          <span className={styles.cellLine}>
                            <strong>Impact -</strong> {row.impact}
                          </span>
                          <span className={styles.cellLine}>
                            <strong>Workaround...</strong> {row.workaround}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <Callout Icon={IconInfo} label="About the macro recorder">
                Macro recording on Mac has been limited since the 2016 rebuild.
                Microsoft has changed Word for Mac over time, so check the
                Developer options in your current version before ruling it out.
              </Callout>

              <Quote
                href="https://wordmvp.com/Mac/MacWordVBA.html"
                source="Word MVP"
              >
                Visual Basic for Applications (VBA) in all versions of Word for
                Mac is based on Visual Basic (VB) v5. VBA in Word 97 for Windows
                is also based on VB5, but later versions of Word for Windows use
                VB6 as the basis for VBA. This means that there are some
                commands and functions that are available in Word 2000, Word
                2002 and Word XP that just are not available on the Mac.
              </Quote>

              <h3>Where a Windows-built template usually breaks</h3>
              <p>
                When a template fails on a Mac, it is almost always one of five
                features. Knowing where to look turns a vague “it doesn’t work”
                into a short, fixable list.
              </p>
              <Diagram caption="Five common failure points in a template built on Windows. Numbers 1 to 5 match the callouts around the document.">
                <TemplateAnatomySvg />
              </Diagram>
            </section>

            {/* What works the same */}
            <section id="same" className={styles.section}>
              <h2>
                What Works the <span className={styles.accent}>Same?</span>
              </h2>
              <p>
                The good news is that the everyday core carries across well.
                Most of what people do in Word every day behaves the same on
                both platforms.
              </p>
              <Diagram caption="Features on the top four rows carry across. The bottom four are where Windows-built files run into trouble.">
                <CarryOverSvg />
              </Diagram>
              <TickList items={SAME_LIST} />
              <p>
                If your documents stay inside that list, you will rarely notice
                you are on a different platform. It is only when a file leans on
                the second half of the diagram that the differences show up.
              </p>
            </section>

            {/* Why */}
            <section id="why" className={styles.section}>
              <h2>
                Why These Limitations{" "}
                <span className={styles.accent}>Exist</span>
              </h2>
              <p>
                Understanding why Word for Mac differs from its Windows
                counterpart is about understanding (or at least giving some
                credit to) the complex engineering and business realities that
                shape software development. The gap between platforms isn’t due
                to laziness or oversight; it’s the result of fundamentally
                different operating system architectures, security models, and
                strategic priorities that make perfect parity nearly impossible
                to achieve.
              </p>
              <h3>Technical reasons</h3>
              <div className={styles.reasonGrid}>
                {REASONS.map(({ Icon, title, text }) => (
                  <div key={title} className={styles.reasonCard}>
                    <span className={styles.reasonIcon}>
                      <Icon />
                    </span>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p className={styles.cardText}>{text}</p>
                  </div>
                ))}
              </div>
              <p>
                There is a design philosophy at work too. The Mac version leans
                towards visual simplicity, while the Windows version is geared
                toward heavy functionality and complex tasks. Neither is wrong,
                but they suit different jobs.
              </p>
            </section>

            {/* Scenarios */}
            <section id="scenarios" className={styles.section}>
              <h2>
                Real-World Pain Points{" "}
                <span className={styles.accent}>&amp; Solutions</span>
              </h2>
              <p>
                These are the four situations we hear about most. Each has a
                practical way through.
              </p>
              <div className={styles.scenarioList}>
                {SCENARIOS.map((s, i) => (
                  <div key={s.title} className={styles.scenario}>
                    <div className={styles.scenarioHead}>
                      <span className={styles.scenarioNum}>
                        Scenario {i + 1}
                      </span>
                      <h3 className={styles.cardTitle}>{s.title}</h3>
                    </div>
                    <div className={styles.scenarioBody}>
                      <p className={styles.cardText}>{s.problem}</p>
                      <div>
                        <span className={styles.solutionsLabel}>
                          {s.solutionsLabel}
                        </span>
                        <TickList items={s.solutions} />
                      </div>
                    </div>
                    <p className={styles.scenarioTip}>
                      <IconBulb className={styles.tipIcon} />
                      <span>
                        <strong>Pro tip:</strong> {s.tip}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
              <Quote
                href="https://learn.microsoft.com/en-us/office/vba/api/overview/office-mac"
                source="Microsoft Learn"
              >
                Office 2016 for Mac supports ribbon customization using Ribbon
                XML. Note that there are some differences in ribbon support in
                Office 2016 for Mac and Office for Windows.
              </Quote>
            </section>

            {/* Choose */}
            <section id="choose" className={styles.section}>
              <h2>
                Who Should (and Shouldn’t){" "}
                <span className={styles.accent}>Use Word for Mac</span>
              </h2>
              <p>
                Use the flow below to find your starting point, then read the
                three outcomes that follow.
              </p>
              <Diagram caption="Answer yes or no at each step. The solid box is the recommended outcome if you answer no to all three.">
                <DecisionSvg />
              </Diagram>
              <div className={styles.outcomeList}>
                {OUTCOMES.map(({ Icon, title, text }) => (
                  <div key={title} className={styles.outcome}>
                    <span className={styles.outcomeIcon}>
                      <Icon />
                    </span>
                    <div>
                      <h3 className={styles.cardTitle}>{title}</h3>
                      <p className={styles.cardText}>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Quote
                href="https://gosoftwarebuy.com/microsoft-office-for-mac-vs-windows-whats-the-difference"
                source="Go Software Buy"
              >
                The Mac version prioritizes visual design and simplicity, while
                the Windows version is geared toward heavy functionality and
                complex tasks.
              </Quote>
            </section>

            {/* How to test */}
            <section id="test" className={styles.section}>
              <h2>
                How to Test a Windows Template{" "}
                <span className={styles.accent}>on Your Mac</span>
              </h2>
              <p>
                Before you commit to a Mac-only workflow, spend an hour on this
                check. It turns guesswork into a clear list of what works and
                what doesn’t.
              </p>
              <ol className={styles.steps}>
                {STEPS.map((step, i) => (
                  <li key={step.title} className={styles.step}>
                    <span className={styles.stepNum}>{i + 1}</span>
                    <div>
                      <h3 className={styles.cardTitle}>{step.title}</h3>
                      <p className={styles.cardText}>{step.text}</p>
                      <p className={styles.proTip}>
                        <IconBulb className={styles.tipIcon} />
                        <span>
                          <strong>Pro tip:</strong> {step.tip}
                        </span>
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* Hybrid */}
            <section id="hybrid" className={styles.section}>
              <h2>
                Hybrid Setups{" "}
                <span className={styles.accent}>and Alternatives</span>
              </h2>
              <p>
                If you’re mostly Mac-based but occasionally need
                Windows-specific features, you don’t have to give up your
                preferred platform. Running a virtual machine solution like
                Parallels Desktop is a common workaround. Alternatively, you can
                leverage cloud services such as Power Automate for automation
                tasks that don’t require local VBA macros. Here are the four
                options we see most often.
              </p>
              <div className={styles.methodGrid}>
                {METHODS.map(({ Icon, title, text, best }) => (
                  <div key={title} className={styles.method}>
                    <span className={styles.methodIcon}>
                      <Icon />
                    </span>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p className={styles.cardText}>{text}</p>
                    <span className={styles.bestFor}>Best for: {best}</span>
                  </div>
                ))}
              </div>
              <Callout Icon={IconAlert} label="Check before you rely on it">
                Licensing, IT policy and Microsoft’s terms differ between
                organisations, so confirm that a virtual machine or shared
                Windows machine is allowed in your environment before you build
                a process around it.
              </Callout>
              <h3>Alternatives to consider</h3>
              <TickList items={OTHER_TOOLS} />
            </section>

            {/* Pricing */}
            <section id="pricing" className={styles.section}>
              <h2>
                Pricing: Is Mac Version{" "}
                <span className={styles.accent}>Cheaper?</span>
              </h2>
              <div className={styles.priceGrid}>
                <div className={`${styles.priceCard} ${styles.priceDark}`}>
                  <span className={styles.priceIcon}>
                    <IconTag />
                  </span>
                  <h3 className={styles.cardTitle}>Same price as Windows</h3>
                  <ul className={styles.priceList}>
                    {PRICE_SAME.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.priceCard}>
                  <span className={styles.priceIcon}>
                    <IconDoc />
                  </span>
                  <h3 className={styles.cardTitle}>What you’re paying for</h3>
                  <ul className={styles.priceList}>
                    {PRICE_PAYING_FOR.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p>
                In short, you are not paying less for fewer features. Pricing
                follows the product tier rather than the platform, so the real
                extra cost is any Windows access you need for the tasks a Mac
                can’t do. Prices change, so confirm current figures on
                Microsoft’s site before you buy.
              </p>
              <Quote
                href="https://gosoftwarebuy.com/microsoft-office-for-mac-vs-windows-whats-the-difference"
                source="Go Software Buy"
              >
                If you’re looking to buy MS Office for Mac, expect Word, Excel,{" "}
                <Link href="/services/microsoft-powerpoint">PowerPoint</Link>,
                Outlook, and OneNote. Teams is also available, but Publisher and{" "}
                <Link href="https://www.accessexperts.com.au">Access</Link> are
                not.
              </Quote>
            </section>

            {/* Tips */}
            <section id="tips" className={styles.section}>
              <h2>
                Tips for Mac <span className={styles.accent}>Word Users</span>
              </h2>
              <div className={styles.walkGrid}>
                {TIP_CARDS.map((card) => (
                  <div key={card.title} className={styles.walkCard}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <ol className={styles.walkSteps}>
                      {card.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </section>

            {/* Mistakes */}
            <section id="mistakes" className={styles.section}>
              <h2>
                Common Mistakes <span className={styles.accent}>to Avoid</span>
              </h2>
              <p>
                Most Mac and Windows problems come from the same handful of
                habits. Here are five to drop, with what to do instead.
              </p>
              <div className={styles.mistakeList}>
                {MISTAKES.map(({ Sketch, title, fix }, i) => (
                  <div key={title} className={styles.mistake}>
                    <span className={styles.mistakeNum} aria-hidden="true">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className={styles.cardTitle}>{title}</h3>
                      <div className={styles.mistakeSketch}>
                        <Sketch />
                      </div>
                      <div className={styles.instead}>
                        <span className={styles.insteadPill}>Instead</span>
                        <p className={styles.cardText}>{fix}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.checklist}>
                <h3 className={styles.cardTitle}>
                  Before you share a document
                </h3>
                <ul className={styles.checkItems}>
                  {CHECKLIST.map((item) => (
                    <li key={item}>
                      <span className={styles.checkBox}>
                        <IconCheck />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Outlook */}
            <section id="outlook" className={styles.section}>
              <h2>
                Future <span className={styles.accent}>Outlook</span>
              </h2>
              <h3>Microsoft’s Mac commitment</h3>
              <TickList items={OUTLOOK} />
              <p>
                In practice, expect Word for Mac to keep improving while staying
                a different product. Plan around the gaps that exist today
                rather than waiting for a feature that may never arrive.
              </p>
            </section>

            {/* CTA */}
            <section id="help" className={styles.section}>
              <div className={styles.cta}>
                <div>
                  <h2>
                    Not sure which setup{" "}
                    <span className={styles.accent}>suits your team?</span>
                  </h2>
                  <p className={styles.ctaText}>
                    If you depend on shared templates, macros or add-ins, we can
                    review how they behave on Mac and Windows and recommend the
                    simplest fix. Office Experts Group is an Australian
                    Microsoft consultancy, established in 2000.
                  </p>
                </div>
                <div className={styles.ctaActions}>
                  <Link href="/contact-us" className={styles.btnPrimary}>
                    Talk to a Word expert
                    <IconArrowRight />
                  </Link>
                  <Link
                    href="/services/microsoft-word/corporate-global-template-solution"
                    className={styles.btnGhost}
                  >
                    Corporate template solutions
                  </Link>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className={styles.section}>
              <h2>
                Frequently Asked{" "}
                <span className={styles.accent}>Questions</span>
              </h2>
              <div className={styles.faq}>
                {FAQS.map((item) => (
                  <details key={item.q} className={styles.faqItem}>
                    <summary className={styles.faqSummary}>
                      <span>{item.q}</span>
                      <IconChevron className={styles.faqChevron} />
                    </summary>
                    <p className={styles.faqAnswer}>{item.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Takeaways */}
            <section id="takeaways" className={styles.section}>
              <h2>
                Key <span className={styles.accent}>Takeaways</span>
              </h2>
              <p>
                Word for Mac is an excellent choice for existing Mac users who
                value the native macOS experience and work primarily with
                standard documents. However, power users transitioning from
                Windows or those with advanced automation needs will quickly
                notice the platform’s limitations, particularly around VBA
                macros, developer tools, and certain add-in compatibility.
              </p>
              <p>
                The good news is that practical workarounds exist for many
                common scenarios (virtual machines, cloud-based automation tools
                like Power Automate, etc). Most importantly, understanding these
                gaps upfront prevents the frustration of discovering
                deal-breaker limitations after you’ve already committed to a
                Mac-only workflow. By knowing what Word for Mac can and cannot
                do before you invest time and resources, you can make informed
                decisions about whether to go Mac-only, maintain hybrid access,
                or stick with Windows for mission-critical document work.
              </p>
              <h3>Decision framework</h3>
              <TickList
                items={[
                  ...DECISION_FRAMEWORK,
                  <>
                    <Link href="/contact-us">Contact a professional</Link> if
                    you’re unsure of your requirements
                  </>,
                ]}
              />

              <div className={styles.authorBox}>
                <span
                  className={`${styles.avatar} ${styles.avatarLarge}`}
                  aria-hidden="true"
                >
                  <Image
                    src={rochelle}
                    alt={AUTHOR_NAME}
                    width={56}
                    height={56}
                  />
                </span>
                <div>
                  <h3 className={styles.authorBoxTitle}>
                    About the author: {AUTHOR_NAME}
                  </h3>
                  <p className={styles.authorText}>
                    Rochelle is Office Experts’ leading Word designer, with over
                    20 years of experience creating custom templates, ribbons,
                    and automation for businesses, government, and professional
                    services.
                  </p>
                </div>
              </div>
            </section>

            {/* Related */}
            <section className={styles.related} aria-label="Related reading">
              <h2 className={styles.relatedTitle}>Related reading</h2>
              <div className={styles.relatedGrid}>
                {RELATED.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className={styles.relatedCard}
                  >
                    <span className={styles.relatedTag}>{r.tag}</span>
                    <span className={styles.relatedName}>{r.title}</span>
                    <IconArrowRight className={styles.relatedArrow} />
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
