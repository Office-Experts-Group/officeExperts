// /app/blog/word-desktop-vs-web/page.js
import Image from "next/image";
import Link from "next/link";

import Contact from "@/components/Contact";
import { generateOrganizationSchema } from "@/utils/schemaGenerators";
import styles from "@/styles/wordDesktopVsWebBlog.module.scss";

import rochelle from "@/public/team/rochelle.webp";

import HeroSvg from "./(svgs)/HeroSvg";
import CapabilitySvg from "./(svgs)/CapabilitySvg";
import CollabSvg from "./(svgs)/CollabSvg";
import DecisionSvg from "./(svgs)/DecisionSvg";
import { personaSvgs } from "./(svgs)/PersonaSvgs";
import { mistakeSketches } from "./(svgs)/MistakeSketches";
import { icons } from "./(svgs)/Icons";

// Keep these three in sync with layout.js
const PAGE_URL = "https://www.officeexperts.com.au/blog/word-desktop-vs-web";
const PAGE_TITLE = "Word Desktop vs Web: Is 365 Worth It? | Office Experts";
const PAGE_DESCRIPTION =
  "Word for web or desktop? See what the free version can and can’t do, how co-authoring works, what each plan costs, and which option suits you.";

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_HEADLINE =
  "Word Desktop vs Web: Do You Really Need to Pay for Microsoft 365?";
const BREADCRUMB_NAME = "Word Desktop vs Web";
const AUTHOR_NAME = "Rochelle Robinson";
const READING_TIME = "14 min read";
const HERO_IMAGE_PATH = "/blog/desktop/desktop-or-web.webp";
const HERO_IMAGE_ALT =
  "Word for web and Word for desktop shown side by side, linked to one shared document";
const DATE_PUBLISHED = "2025-01-29T10:00:00+11:00";
const DATE_MODIFIED = "2026-10-28T00:00:00+11:00";

const formatDate = (iso) =>
  new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Sydney",
  }).format(new Date(iso));

const MS_BROWSER_URL =
  "https://support.microsoft.com/en-us/office/differences-between-using-a-document-in-the-browser-and-in-word-90fac46c-2b8e-4fa1-b997-4e55ce4ed754";
const MS_COAUTHOR_URL =
  "https://support.microsoft.com/en-us/office/document-collaboration-and-co-authoring-ee1509b4-1f6e-401e-b04a-782d26f564a4";
const HTG_URL =
  "https://www.howtogeek.com/prefer-the-word-desktop-app-to-the-online-version/";

const WORD = "/services/microsoft-word";

const toc = [
  { id: "intro", label: "Free or paid?" },
  { id: "web", label: "What is Word for web?" },
  { id: "compare", label: "Feature comparison" },
  { id: "desktop", label: "What desktop adds" },
  { id: "collaboration", label: "Desktop collaboration" },
  { id: "scenarios", label: "Real-world scenarios" },
  { id: "pricing", label: "Pricing breakdown" },
  { id: "choose", label: "How to choose" },
  { id: "hybrid", label: "Hybrid strategy" },
  { id: "myths", label: "Common myths" },
  { id: "trial", label: "Test before buying" },
  { id: "mistakes", label: "Common mistakes" },
  { id: "help", label: "When to get help" },
  { id: "faq", label: "FAQ" },
  { id: "conclusion", label: "Conclusion" },
];

const glance = [
  {
    value: "$0",
    label: "Word for web",
    text: "Free with a Microsoft account, plus 5GB of OneDrive storage.",
  },
  {
    value: "$19",
    label: "Business Standard",
    text: "Per user, per month. Includes the desktop apps and is our pick for team collaboration.",
  },
  {
    value: "80%",
    label: "The 80% test",
    text: "If the web version covered 80% or more of your work, stay free or buy the Basic plan.",
  },
];

const quotes = {
  browser: {
    text: "Microsoft Office Web App lets you make basic edits and formatting changes to your document in a web browser. For more advanced features, use Word Web App’s Open in Word command.",
    cite: "Microsoft Support",
    href: MS_BROWSER_URL,
  },
  macros: {
    text: "While you can view, edit, print, and share documents containing macros in Word for the web, only the desktop app allows you to create and run them. As Microsoft says, ‘In Word for the web, you have to step through such tasks manually.’",
    cite: "How-To Geek",
    href: HTG_URL,
  },
  locked: {
    text: "When you open a shared document in a desktop or mobile app, it doesn’t matter if you’re connected or not, you can keep working. When you’re working in Word, the paragraph you’re working in is locked so that no one can overwrite what you’re working on.",
    cite: "Microsoft Support",
    href: MS_COAUTHOR_URL,
  },
};

const webUsers = [
  "Students with basic needs",
  "Casual users writing personal letters and simple documents",
  "People accessing documents from several devices on the go",
  "Anyone making quick mobile edits and reviews",
  "Those supplementing a desktop version",
];

// state: full | basic | limited | none
const matrix = [
  {
    group: "Document creation",
    rows: [
      [
        "Text, paragraph and list formatting",
        ["basic", "Core formatting"],
        ["full", "Every option"],
      ],
      [
        "Styles and templates",
        ["limited", "Fewer style options"],
        ["full", "Complete style and template system"],
      ],
      [
        "Tables",
        ["basic", "Simple tables"],
        ["full", "Advanced table formatting"],
      ],
      [
        "Headers, footers, backgrounds, watermarks",
        ["limited", "Limited, no backgrounds"],
        ["full", "Full layout tools"],
      ],
      [
        "Fonts",
        ["limited", "Fewer available"],
        ["full", "Everything installed"],
      ],
    ],
  },
  {
    group: "Automation and productivity",
    rows: [
      [
        "Macros",
        ["none", "Cannot create or run"],
        ["full", "Windows fully, Mac limited"],
      ],
      ["Mail merge", ["none", ""], ["full", "Bulk documents"]],
      ["Add-ins", ["none", "Cannot install"], ["full", "Thousands available"]],
      ["Developer tools and form controls", ["none", ""], ["full", ""]],
    ],
  },
  {
    group: "Long and complex documents",
    rows: [
      [
        "Table of contents, cross-references, index",
        ["limited", "Reduced"],
        ["full", "Automated"],
      ],
      [
        "Bibliography and citations",
        ["limited", "Reduced citation tools"],
        ["full", "Full management"],
      ],
      [
        "Documents of 100+ pages",
        ["limited", "Performance issues"],
        ["full", "Handled well"],
      ],
    ],
  },
  {
    group: "Collaboration",
    rows: [
      [
        "Real-time co-authoring",
        ["basic", "Basic"],
        ["full", "Greater functionality via SharePoint or OneDrive"],
      ],
      ["Comments and @mentions", ["full", "Available"], ["full", "Available"]],
      [
        "Track changes and compare",
        ["limited", "Limited, no compare"],
        ["full", "Advanced"],
      ],
      ["Merge or combine documents", ["none", ""], ["full", ""]],
    ],
  },
  {
    group: "Access and files",
    rows: [
      [
        "Works on any device",
        ["full", "Any browser, including Chromebooks"],
        ["basic", "Devices with the app installed"],
      ],
      [
        "Working offline",
        ["limited", "Limited, needs a login"],
        ["full", "Syncs when you reconnect"],
      ],
      [
        "Local files and network drives",
        ["none", "Must upload first"],
        ["full", "Opens directly"],
      ],
      [
        "Save as PDF",
        ["limited", "Print-to-PDF workaround"],
        ["full", "Advanced PDF tools"],
      ],
    ],
  },
];

const pillClass = {
  full: styles.pillFull,
  basic: styles.pillBasic,
  limited: styles.pillLimited,
  none: styles.pillNone,
};
const pillLabel = {
  full: "Full",
  basic: "Basic",
  limited: "Limited",
  none: "Not available",
};

const collabNeeds = [
  [
    "Strong internet connection",
    "Reliable internet ensures smooth real-time syncing between collaborators.",
  ],
  [
    "Good hardware",
    "Adequate processing power and RAM handle large documents efficiently.",
  ],
  [
    "Files in SharePoint or OneDrive",
    "Documents must be stored in SharePoint or OneDrive (not local drives) for co-authoring to work.",
  ],
  [
    "Microsoft 365 subscription",
    "All collaborators who use the desktop app need an active Microsoft 365 subscription with desktop apps.",
  ],
];

const scenarios = [
  {
    art: "student",
    name: "Scenario 1: University student",
    needs: "Essays, basic reports, collaboration with classmates.",
    best: "Word for web (free).",
    why: "Basic formatting is sufficient, simple collaboration is adequate, and it saves money for more instant noodles.",
    upgrade:
      "You are writing a thesis or dissertation. Desktop handles citations and large documents far better.",
  },
  {
    art: "business",
    name: "Scenario 2: Small business owner",
    needs: "Letters, invoices, basic documents.",
    best: "Microsoft 365 Business Basic ($9 per user per month, web and mobile).",
    why: "Professional email is included and basic needs are met. It is low cost considering the benefits over the free version.",
    upgrade:
      "You need mail merge for customer communications or complex templates.",
  },
  {
    art: "legal",
    name: "Scenario 3: Legal professional",
    needs:
      "Large documents, precise formatting, templates, mail merge, and collaboration on contracts.",
    best: "Microsoft 365 with desktop apps (Business Standard or higher, $19 per user per month).",
    why: "Advanced features are essential, document quality is critical, automation is needed, and complex legal documents need a stable collaboration environment.",
    strategy:
      "Use desktop Word opened from SharePoint for all collaborative work on complex documents.",
    links: true,
  },
  {
    art: "marketing",
    name: "Scenario 4: Marketing team",
    needs:
      "Collaborative editing on proposals, presentations and complex documents.",
    best: "Microsoft 365 subscription (Business Standard, which includes desktop and web).",
    why: "Desktop provides a stable collaboration environment for complex marketing materials whilst keeping full feature access.",
    strategy:
      "Use desktop Word opened from SharePoint or OneDrive for all collaborative work. Keep the web version as a backup for quick mobile reviews only.",
  },
  {
    art: "writer",
    name: "Scenario 5: Freelance writer",
    needs: "Long documents, reliable offline access, professional formatting.",
    best: "Microsoft 365 Personal ($16 per month) or Office Home & Business 2024 ($379 one-time).",
    why: "Desktop features are essential for professional work, and 1TB of OneDrive storage is valuable.",
    strategy: "Keep the web version as a backup for mobile edits.",
  },
];

const chooseFree = [
  "Documents are simple (letters, memos, basic reports)",
  "You access from many different devices on the go",
  "Budget is extremely tight",
  "You are supplementing a desktop version",
  "You are a student with basic needs",
];
const choosePaid = [
  "You work with large or complex documents",
  "Professional formatting is important",
  "You need automation (mail merge, macros)",
  "Your team collaborates on complex documents",
  "Offline access is essential",
  "Your industry requires desktop features",
  "You need add-ins or developer tools",
];

const coSteps = [
  {
    title: "Put the file in the cloud",
    text: "Save or upload the document to a SharePoint library or OneDrive folder your team can reach. Avoid local drives and mapped network drives for co-authored files.",
    tip: "Use a team site library for shared work, so access does not depend on one person’s account.",
  },
  {
    title: "Share it with the right permissions",
    text: "Share the file or folder with the people who need to edit, and give everyone else view-only or comment access.",
    tip: "Give review-only colleagues comment access. It keeps formatting safe and still collects their feedback.",
  },
  {
    title: "Open it in desktop Word",
    text: "Open the file from SharePoint or OneDrive (or from the browser using the option to open in the desktop app) so Word works on the shared cloud copy. Exact wording varies by version.",
    tip: "Check AutoSave or the save status before you start, so you know changes are reaching the cloud.",
  },
  {
    title: "Agree the ground rules",
    text: "Decide who writes, who formats and who reviews. Apply styles for headings and body text so edits stay consistent, and use comments for questions rather than typing notes into the text.",
    tip: "A good template does most of this work for you. See our approach to a corporate template system below.",
    link: true,
  },
  {
    title: "Review and finish",
    text: "Use track changes and compare to review what changed, resolve the comments, then share the final version as a link or export it as a PDF.",
    tip: "Keep a dated final copy before you start the next round, so you can always go back.",
  },
];

const chooseSub = [
  "You want always-current features",
  "1TB of cloud storage is valuable",
  "You use multiple devices",
  "You need mobile app access",
];

const hybridDesktop = [
  "Creating complex documents",
  "Professional collaboration (via SharePoint or OneDrive)",
  "Formatting and layout",
  "Mail merge and automation",
  "Working offline",
  "Final polishing",
];
const hybridWeb = [
  "Quick edits on the go",
  "Mobile device access",
  "Reviewing and commenting",
  "Accessing from shared or public computers",
  "When desktop isn’t available",
];

const myths = [
  [
    "“Web version is just a limited trial”",
    "It’s a permanent, free product, just with fewer features.",
  ],
  [
    "“Subscription means I don’t own my software”",
    "You own your documents. The subscription is for app access and services.",
  ],
  [
    "“One-time purchase is always cheaper”",
    "Not always. Over three or more years a subscription is often better value once storage and updates are counted, though the maths depends on the plan.",
  ],
  [
    "“Web version requires constant internet”",
    "Recent browsers offer offline editing, though it is limited.",
  ],
];

const trial = [
  {
    title: "Week 1 to 2: try the web version",
    items: [
      "Use it for all your normal tasks",
      "Note which features you miss",
      "Test basic collaboration with colleagues",
      "Evaluate your offline access needs",
    ],
    tip: "Keep a running list. Write down every time you wish you had a feature, and what the task was. That list is your real requirement.",
  },
  {
    title: "Week 3 to 4: trial Microsoft 365",
    items: [
      "Sign up for a one-month trial, where one is on offer",
      "Compare the desktop experience on the same tasks",
      "Test collaboration via SharePoint or OneDrive",
      "Test specific features such as mail merge",
      "Decide if it is worth the cost",
    ],
    tip: "Repeat the exact tasks from your list. A fair test uses your own documents, not sample files.",
  },
  {
    title: "Decision point",
    items: [
      "If the web version was sufficient 80% or more of the time, stay free or buy a Basic plan",
      "If desktop features or professional collaboration were essential, invest in a Business Standard subscription",
    ],
    tip: "Count the hours the missing features cost you. If a month of lost time costs more than a month of subscription, the decision is made.",
  },
];

const mistakes = [
  {
    title: "Co-authoring a file that lives on a local drive",
    text: "A file saved on one computer cannot be co-authored. Colleagues end up emailing copies, and the changes have to be merged by hand.",
    fix: "Save the document in SharePoint or OneDrive first, then open it in desktop Word from there.",
  },
  {
    title: "Buying a plan and expecting desktop apps",
    text: "Business Basic covers web and mobile apps only. Staff who expect the desktop ribbon, macros or mail merge find them missing after purchase.",
    fix: "Check the plan description for desktop apps before you buy. Business Standard includes them.",
  },
  {
    title: "Using a home licence for business work",
    text: "Office Home 2024 is for non-commercial use. It is an easy mistake to make when the price is lower, and a hard one to unpick later.",
    fix: "Choose Office Home & Business 2024 or a business subscription for commercial work, and confirm terms with Microsoft.",
  },
];

const faqs = [
  [
    "Is Word for the web really free?",
    "Yes. It is free with a Microsoft account, and it stores files in OneDrive (free 5GB). It has fewer features than the desktop app, so it suits simple documents and quick edits best.",
  ],
  [
    "Can I use desktop Word without a subscription?",
    "Yes, through a one-time purchase such as Office Home 2024 or Office Home & Business 2024. These do not include OneDrive storage or ongoing updates, and the Home edition is for non-commercial use. Confirm current terms with Microsoft.",
  ],
  [
    "Do all collaborators need Microsoft 365 to co-author?",
    "Per Microsoft, users who co-author in a desktop app need Microsoft 365 desktop apps. People who only review or make quick edits can often join through the web version, so it helps to plan who needs which tool.",
  ],
  [
    "Will my macros and templates work in Word for the web?",
    "You can view, edit, print and share documents that contain macros in the web version, but only the desktop app can create and run them. Custom ribbons and add-ins also depend on the desktop app, so test your own templates before relying on the web version.",
  ],
  [
    "Is Business Basic enough for a small team?",
    "It can be, if your team works mostly in the browser or on mobile and does not need mail merge, macros or complex templates. If staff will build or heavily format long documents, Business Standard is the safer choice.",
  ],
];

const takeaways = [
  [
    "Web version is legitimately useful",
    "Not just a teaser for desktop. It suits many casual users, and it is good for mobile access and simple edits.",
  ],
  [
    "Desktop is worth paying for if",
    "Professional work demands it, automation saves you time, offline access is critical, complex documents are routine, or you need professional collaboration.",
  ],
  [
    "Subscription usually makes sense",
    "Better value over two to three years, with cloud storage included and always-current features.",
  ],
  [
    "Hybrid approach is valid",
    "Desktop for professional work and collaboration, web as a backup for mobile and quick access. Use the right tool for the right task.",
  ],
];

const related = [
  {
    href: "/blog/convert-canva-to-word",
    title: "Convert Canva to Word",
    text: "How to move a design into an editable Word document.",
  },
  {
    href: "/blog/pdf-to-word-conversion",
    title: "PDF to Word conversion",
    text: "Get editable text and layout out of a PDF without starting again.",
  },
  {
    href: WORD + "/remove-repetition-and-increase-productivity",
    title: "Remove repetition",
    text: "Automation ideas that give hours back to busy Word users.",
  },
];

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
      isPartOf: { "@id": SITE_URL + "#website" },
      breadcrumb: { "@id": PAGE_URL + "#breadcrumb" },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      inLanguage: "en-AU",
    },
    {
      "@type": "BreadcrumbList",
      "@id": PAGE_URL + "#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: SITE_URL + "/blog",
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
      "@id": PAGE_URL + "#article",
      headline: PAGE_HEADLINE,
      alternativeHeadline:
        "Free Word Online vs Desktop: Complete Feature Comparison for Business",
      description: PAGE_DESCRIPTION,
      image: SITE_URL + HERO_IMAGE_PATH,
      author: { "@type": "Person", name: AUTHOR_NAME },
      publisher: { "@id": SITE_URL + "#organization" },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      mainEntityOfPage: { "@id": PAGE_URL },
      articleSection: "Microsoft Word",
      keywords: [
        "Word desktop vs web",
        "Microsoft 365 collaboration",
        "SharePoint collaboration",
      ],
      about: [
        {
          "@type": "Thing",
          name: "Microsoft Word",
          sameAs: "https://en.wikipedia.org/wiki/Microsoft_Word",
        },
        {
          "@type": "Thing",
          name: "Microsoft 365",
          sameAs: "https://en.wikipedia.org/wiki/Microsoft_365",
        },
      ],
      inLanguage: "en-AU",
    },
  ],
};

function Icon({ name }) {
  const C = icons[name];
  return C ? <C /> : null;
}

function Callout({ icon = "info", label, children }) {
  return (
    <div className={styles.callout}>
      <span className={styles.calloutIcon}>
        <Icon name={icon} />
      </span>
      <div>
        <span className={styles.calloutLabel}>{label}</span>
        <p className={styles.calloutText}>{children}</p>
      </div>
    </div>
  );
}

function PullQuote({ q }) {
  return (
    <figure className={styles.pullQuote}>
      <blockquote>
        <p className={styles.quoteText}>{q.text}</p>
      </blockquote>
      <figcaption className={styles.quoteCite}>
        <Link href={q.href} target="_blank" rel="nofollow noopener noreferrer">
          {q.cite}
        </Link>
      </figcaption>
    </figure>
  );
}

function Diagram({ children, caption }) {
  return (
    <div className={styles.diagram}>
      <div className={styles.diagramScroll}>
        <div className={styles.diagramInner}>{children}</div>
      </div>
      {caption ? <p className={styles.diagramCaption}>{caption}</p> : null}
    </div>
  );
}

function ProTip({ children }) {
  return (
    <div className={styles.proTip}>
      <Icon name="bulb" />
      <span>
        <strong>Pro tip:</strong> {children}
      </span>
    </div>
  );
}

const WordDesktopVsWebBlogPost = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className={styles.page}>
        {/* ---------- hero ---------- */}
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <div>
              <h1 className={styles.heroTitle}>
                Word Desktop vs Web:{" "}
                <span className={styles.heroAccent}>
                  Do You Really Need to Pay for Microsoft 365?
                </span>
              </h1>
              <p className={styles.lede}>
                Microsoft offers Word for “free” through the web. But is it
                really enough for professional work? Here is what you gain, what
                you lose, and how to decide without wasting money.
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
                <span className={styles.authorMeta}>
                  <span>
                    By <strong>{AUTHOR_NAME}</strong>
                  </span>
                  <span>
                    Updated {formatDate(DATE_MODIFIED)} · {READING_TIME}
                  </span>
                </span>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <HeroSvg />
            </div>
          </div>
        </header>

        {/* ---------- at a glance ---------- */}
        <section className={styles.glance} aria-label="At a glance">
          {glance.map((g) => (
            <div key={g.label} className={styles.glanceCard}>
              <span className={styles.glanceValue}>{g.value}</span>
              <span className={styles.glanceLabel}>{g.label}</span>
              <p className={styles.glanceText}>{g.text}</p>
            </div>
          ))}
        </section>

        <div className={styles.layout}>
          <nav className={styles.toc} aria-label="Contents">
            <p className={styles.tocTitle}>In this article</p>
            <ul className={styles.tocList}>
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={"#" + t.id}>{t.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <article className={styles.article}>
            {/* ---------- intro ---------- */}
            <section id="intro" className={styles.section}>
              <h2>
                Free vs paid?{" "}
                <span className={styles.accent}>
                  The question every business asks
                </span>
              </h2>
              <p>
                Microsoft offers Word for “free” through the web. But is it
                really enough for professional work? Understanding what you lose
                helps you decide. For personal use, the free version will often
                suffice; small businesses can also get away without the
                subscription fee. But often there is a tipping point where users
                find themselves needing more features, or suffering through{" "}
                <Link
                  href={WORD + "/remove-repetition-and-increase-productivity"}
                >
                  tireless repetitive tasks
                </Link>
                .
              </p>
              <p>
                Can you skip the subscription? What do you actually get for
                paying? When is free Word sufficient? This guide answers each
                question with a plain comparison, real scenarios, a pricing
                breakdown and a simple way to test before you buy.
              </p>

              <Callout icon="bolt" label="The short answer">
                Free Word for web is genuinely useful for simple documents and
                quick edits. Pay for desktop Word when your documents are large
                or complex, when you rely on automation, or when a team
                collaborates on important files. Most professional teams land on
                Microsoft 365 Business Standard.
              </Callout>
            </section>

            {/* ---------- word for web ---------- */}
            <section id="web" className={styles.section}>
              <h2>
                What is <span className={styles.accent}>“Word for web”?</span>
              </h2>
              <p>
                Word for web is Microsoft’s browser-based version of Word. It’s
                free with a Microsoft account, works on any device with
                internet, and stores files in OneDrive (free 5GB). Real-time
                collaboration is built in, making it accessible for simple
                document collaboration needs.
              </p>
              <p>
                That convenience is the main reason it is popular. There is
                nothing to install, nothing to update, and a document is
                available wherever you can sign in. The trade-off is that the
                browser version carries a lighter toolset, and the gap shows up
                quickly once documents become long, heavily formatted or shared
                between many editors.
              </p>

              <PullQuote q={quotes.browser} />

              <h3>Who uses it?</h3>
              <div className={styles.splitLists}>
                <div className={styles.listCard}>
                  <h3>
                    <span className={styles.chip}>
                      <Icon name="web" />
                    </span>
                    Typical web users
                  </h3>
                  <ul className={styles.tickList}>
                    {webUsers.map((u) => (
                      <li key={u}>{u}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.listCard}>
                  <h3>
                    <span className={styles.chip}>
                      <Icon name="cloud" />
                    </span>
                    Cloud benefits
                  </h3>
                  <ul className={styles.tickList}>
                    <li>Auto-saves to OneDrive</li>
                    <li>Access anywhere with internet</li>
                    <li>No software to install or update</li>
                    <li>Works on Chromebooks and tablets</li>
                    <li>Share links with permissions, plus version history</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ---------- comparison ---------- */}
            <section id="compare" className={styles.section}>
              <h2>
                Feature <span className={styles.accent}>comparison</span>
              </h2>
              <p>
                The chart shows where the two versions sit on eight things
                people ask about most. They are close on sharing and device
                access, and far apart on formatting, automation, long documents,
                offline work and integrations.
              </p>

              <Diagram caption="Hollow dot: Word for web. Filled dot: Word for desktop.">
                <CapabilitySvg />
              </Diagram>

              <h3>Line by line</h3>
              <p>
                The table breaks each area into the features you are most likely
                to need. Where the web version offers a lighter version of a
                feature, it is marked Basic or Limited.
              </p>

              <div className={styles.matrixWrap}>
                <table className={styles.matrix}>
                  <thead>
                    <tr>
                      <th scope="col">Feature</th>
                      <th scope="col">Word for web</th>
                      <th scope="col">Word for desktop</th>
                    </tr>
                  </thead>
                  <tbody>
                    {matrix.map((g) => [
                      <tr key={g.group} className={styles.groupRow}>
                        <td colSpan={3}>{g.group}</td>
                      </tr>,
                      ...g.rows.map(([feature, web, desk]) => (
                        <tr key={g.group + feature}>
                          <td>{feature}</td>
                          <td>
                            <span
                              className={styles.pill + " " + pillClass[web[0]]}
                            >
                              {pillLabel[web[0]]}
                            </span>
                            {web[1] ? (
                              <span className={styles.note}>{web[1]}</span>
                            ) : null}
                          </td>
                          <td>
                            <span
                              className={styles.pill + " " + pillClass[desk[0]]}
                            >
                              {pillLabel[desk[0]]}
                            </span>
                            {desk[1] ? (
                              <span className={styles.note}>{desk[1]}</span>
                            ) : null}
                          </td>
                        </tr>
                      )),
                    ])}
                  </tbody>
                </table>
              </div>

              <p>
                Two limits come up again and again. The first is automation: the
                web version has no{" "}
                <Link href={WORD + "/mail-merge"}>mail merge</Link>, no macros
                or{" "}
                <Link
                  href={WORD + "/remove-repetition-and-increase-productivity"}
                >
                  automation
                </Link>
                , and it can’t install{" "}
                <Link
                  href="https://www.excelexperts.com.au/add-in-development"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  add-ins
                </Link>
                . The second is file handling: you can’t open local files
                directly (you must upload them), and there is no “Save As” to
                your computer (you must download).
              </p>

              <PullQuote q={quotes.macros} />
            </section>

            {/* ---------- desktop ---------- */}
            <section id="desktop" className={styles.section}>
              <h2>
                What desktop versions{" "}
                <span className={styles.accent}>offer</span>
              </h2>
              <p>
                Desktop Word is the full application: everything the table above
                marks Limited or Not available. For anyone producing documents
                as part of their job, that depth is what the subscription pays
                for. In practice it means a complete style and{" "}
                <Link href={WORD + "/corporate-global-template-solution"}>
                  template system
                </Link>
                , <Link href={WORD + "/quick-parts"}>Quick Parts</Link> and
                AutoText,{" "}
                <Link href={WORD + "/fill-in-forms"}>form controls</Link> for
                fillable documents,{" "}
                <Link href="/blog/pdf-to-word-conversion">
                  advanced PDF tools
                </Link>
                , tighter Outlook integration, and thousands of add-ins.
              </p>
            </section>

            {/* ---------- collaboration ---------- */}
            <section id="collaboration" className={styles.section}>
              <h2>
                Desktop collaboration:{" "}
                <span className={styles.accent}>the professional standard</span>
              </h2>
              <p>
                For professional teams working on complex documents, desktop
                Word opened from SharePoint or OneDrive provides the most stable
                and feature-rich collaboration environment. This approach
                combines the full power of desktop Word with real-time
                co-authoring capabilities.
              </p>

              <Diagram caption="One file in SharePoint or OneDrive, opened in whichever app suits each person.">
                <CollabSvg />
              </Diagram>

              <PullQuote q={quotes.locked} />

              <h3>Requirements for desktop collaboration</h3>
              <p>To get the best results when collaborating in desktop Word:</p>
              <ul className={styles.tickList}>
                {collabNeeds.map(([t, x]) => (
                  <li key={t}>
                    <strong>{t}.</strong> {x}
                  </li>
                ))}
              </ul>

              <h3>Setting up desktop co-authoring in five steps</h3>
              <ol className={styles.timeline}>
                {coSteps.map((s, i) => (
                  <li key={s.title} className={styles.step}>
                    <span className={styles.stepNum}>{i + 1}</span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    <ProTip>
                      {s.tip}
                      {s.link ? (
                        <>
                          {" "}
                          <Link
                            href={WORD + "/corporate-global-template-solution"}
                          >
                            Corporate template solutions
                          </Link>
                          .
                        </>
                      ) : null}
                    </ProTip>
                  </li>
                ))}
              </ol>
            </section>

            {/* ---------- scenarios ---------- */}
            <section id="scenarios" className={styles.section}>
              <h2>
                Real-world <span className={styles.accent}>scenarios</span>
              </h2>
              <p>
                Five common profiles show how the decision plays out. Find the
                one closest to you, then check what would make you upgrade.
              </p>
              <div className={styles.personaGrid}>
                {scenarios.map((s) => {
                  const Art = personaSvgs[s.art];
                  return (
                    <div key={s.name} className={styles.persona}>
                      <div className={styles.personaArt}>
                        <Art />
                      </div>
                      <h3 className={styles.personaName}>{s.name}</h3>
                      <dl className={styles.personaRows}>
                        <div>
                          <dt>Needs</dt>
                          <dd>
                            {s.needs}
                            {s.links ? (
                              <>
                                {" "}
                                <Link href={WORD + "/mail-merge"}>
                                  Mail merge
                                </Link>{" "}
                                is a regular requirement.
                              </>
                            ) : null}
                          </dd>
                        </div>
                        <div>
                          <dt>Best choice</dt>
                          <dd>{s.best}</dd>
                        </div>
                        <div>
                          <dt>Why</dt>
                          <dd>
                            {s.why}
                            {s.links ? (
                              <>
                                {" "}
                                See our{" "}
                                <Link
                                  href={
                                    WORD +
                                    "/remove-repetition-and-increase-productivity"
                                  }
                                >
                                  automation services
                                </Link>{" "}
                                for what is possible.
                              </>
                            ) : null}
                          </dd>
                        </div>
                        {s.upgrade ? (
                          <div>
                            <dt>I would upgrade if</dt>
                            <dd>{s.upgrade}</dd>
                          </div>
                        ) : null}
                        {s.strategy ? (
                          <div>
                            <dt>Collaboration strategy</dt>
                            <dd>{s.strategy}</dd>
                          </div>
                        ) : null}
                      </dl>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ---------- pricing ---------- */}
            <section id="pricing" className={styles.section}>
              <h2>
                Pricing <span className={styles.accent}>breakdown</span>
              </h2>
              <p>
                Prices below are in AUD as at the date in the note at the end of
                this article. Always confirm the current figures with Microsoft
                before you buy.
              </p>

              <div className={styles.tiers}>
                <div className={styles.tierFree}>
                  <span className={styles.bigPrice}>$0</span>
                  <div>
                    <h3 style={{ margin: "0 0 0.4rem" }}>
                      Free option: Word for web
                    </h3>
                    <p style={{ margin: 0 }}>
                      Includes 5GB of OneDrive storage. Best for casual users,
                      students and light editing.
                    </p>
                  </div>
                </div>

                <div className={styles.tier}>
                  <h3>Subscription: personal use</h3>
                  <div className={styles.plan}>
                    <strong>Microsoft 365 Personal</strong>
                    <span className={styles.price}>$16 per month</span>
                    <small>
                      $159 per year. 1 user, desktop apps, 1TB storage.
                    </small>
                  </div>
                  <div className={styles.plan}>
                    <strong>Microsoft 365 Family</strong>
                    <span className={styles.price}>$18 per month</span>
                    <small>
                      $179 per year. 6 users, desktop apps, 1TB each.
                    </small>
                  </div>
                </div>

                <div className={styles.tier}>
                  <h3>Subscription: business use</h3>
                  <div className={styles.plan}>
                    <strong>Business Basic</strong>
                    <span className={styles.price}>$9 per user per month</span>
                    <small>
                      Web and mobile apps only, 1TB storage, business email.
                    </small>
                  </div>
                  <div className={styles.plan + " " + styles.planHighlight}>
                    <strong>
                      Business Standard
                      <span className={styles.badge}>Recommended</span>
                    </strong>
                    <span className={styles.price}>$19 per user per month</span>
                    <small>
                      Desktop apps included, plus everything in Basic.
                      Recommended for professional collaboration.
                    </small>
                  </div>
                  <div className={styles.plan}>
                    <strong>Business Premium</strong>
                    <span className={styles.price}>$33 per user per month</span>
                    <small>Advanced security and device management.</small>
                  </div>
                </div>

                <div className={styles.tier} style={{ gridColumn: "1 / -1" }}>
                  <h3>One-time purchase</h3>
                  <div className={styles.plan}>
                    <strong>Office Home 2024</strong>
                    <span className={styles.price}>$219.99</span>
                    <small>
                      Desktop apps, no OneDrive, no updates. For non-commercial
                      use.
                    </small>
                  </div>
                  <div className={styles.plan}>
                    <strong>Office Home &amp; Business 2024</strong>
                    <span className={styles.price}>$379</span>
                    <small>
                      Includes Outlook. Available for commercial use.
                    </small>
                  </div>
                </div>
              </div>

              <p>
                On price alone a one-time purchase can be cheaper. The
                subscription’s case rests on what you get beyond the app: 1TB of
                storage, continuing updates and mobile access.
              </p>
            </section>

            {/* ---------- choose ---------- */}
            <section id="choose" className={styles.section}>
              <h2>
                How to <span className={styles.accent}>choose</span>
              </h2>
              <p>
                Work down the questions. The highlighted answer is the one we
                recommend for most professional teams.
              </p>
              <Diagram caption="Start at question 1 and follow Yes or No.">
                <DecisionSvg />
              </Diagram>

              <h3>Decision framework</h3>
              <div className={styles.splitLists}>
                <div className={styles.listCard}>
                  <h3>Choose the free web version if…</h3>
                  <ul className={styles.tickList}>
                    {chooseFree.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.listCard}>
                  <h3>Choose a paid desktop version if…</h3>
                  <ul className={styles.tickList}>
                    {choosePaid.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <h3>Choose a subscription over a one-time purchase if…</h3>
              <ul className={styles.tickList}>
                {chooseSub.map((i) => (
                  <li key={i}>{i}</li>
                ))}
                <li>
                  <Link href={WORD + "/training"}>Support</Link> and{" "}
                  <Link href={WORD + "/upgrades-and-migration"}>updates</Link>{" "}
                  matter
                </li>
              </ul>
            </section>

            {/* ---------- hybrid ---------- */}
            <section id="hybrid" className={styles.section}>
              <h2>
                Hybrid strategy:{" "}
                <span className={styles.accent}>best of both worlds?</span>
              </h2>
              <p>
                You do not have to choose one forever. Most paid plans include
                the web version too, so the question becomes which tool each job
                belongs in.
              </p>
              <h3>How to use both effectively</h3>
              <div className={styles.hybrid}>
                <div className={styles.hybridCol + " " + styles.hybridDesktop}>
                  <h3>
                    <span className={styles.chip}>
                      <Icon name="desktop" />
                    </span>
                    Use desktop for…
                  </h3>
                  <ul className={styles.tickList}>
                    {hybridDesktop.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.hybridCol + " " + styles.hybridWeb}>
                  <h3>
                    <span className={styles.chip}>
                      <Icon name="web" />
                    </span>
                    Use web for…
                  </h3>
                  <ul className={styles.tickList}>
                    {hybridWeb.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* ---------- myths ---------- */}
            <section id="myths" className={styles.section}>
              <h2>
                Common <span className={styles.accent}>misconceptions</span>
              </h2>
              <p>Four beliefs that lead people to the wrong choice.</p>
              <div className={styles.myths}>
                {myths.map(([m, r], i) => (
                  <div key={m} className={styles.myth}>
                    <div className={styles.mythSide + " " + styles.mythFalse}>
                      <span className={styles.mythTag}>Myth {i + 1}</span>
                      <p>{m}</p>
                    </div>
                    <div className={styles.mythSide + " " + styles.mythTrue}>
                      <span className={styles.mythTag}>Reality</span>
                      <p>{r}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ---------- trial ---------- */}
            <section id="trial" className={styles.section}>
              <h2>
                Migration path:{" "}
                <span className={styles.accent}>
                  starting free, upgrading later
                </span>
              </h2>
              <p>
                You can learn what you actually need by doing the work. Spend a
                month on each option, then decide with evidence rather than
                guesses.
              </p>
              <h3>How to test before buying</h3>
              <ol className={styles.timeline}>
                {trial.map((s, i) => (
                  <li key={s.title} className={styles.step}>
                    <span className={styles.stepNum}>{i + 1}</span>
                    <h3>{s.title}</h3>
                    <ul className={styles.plainList}>
                      {s.items.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                    <ProTip>{s.tip}</ProTip>
                  </li>
                ))}
              </ol>
            </section>

            {/* ---------- mistakes ---------- */}
            <section id="mistakes" className={styles.section}>
              <h2>
                Common <span className={styles.accent}>mistakes to avoid</span>
              </h2>
              <p>
                These three come up repeatedly when people choose between the
                web and desktop versions. Each one is cheap to avoid.
              </p>
              <div className={styles.mistakes}>
                {mistakes.map((m, i) => {
                  const Sketch = mistakeSketches[i];
                  return (
                    <div key={m.title} className={styles.mistake}>
                      <div>
                        <span className={styles.mistakeNum}>{i + 1}</span>
                        <h3>{m.title}</h3>
                        <p>{m.text}</p>
                        <p className={styles.mistakeText}>
                          <span className={styles.insteadPill}>Instead</span>
                          {m.fix}
                        </p>
                      </div>
                      <div className={styles.mistakeArt}>
                        <Sketch />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ---------- help ---------- */}
            <section id="help" className={styles.section}>
              <div className={styles.ctaBand}>
                <h3>Not sure which setup fits your team?</h3>
                <p>
                  We have designed Word templates, ribbons and automation for
                  businesses, government and professional services for over 20
                  years. We can help you choose the right plan, set up
                  SharePoint or OneDrive for co-authoring, and train your team
                  to get the most from desktop Word.
                </p>
                <div className={styles.ctaLinks}>
                  <Link href="/contact-us" className={styles.ctaPrimary}>
                    Talk to our team <Icon name="arrow" />
                  </Link>
                  <Link href={WORD + "/training"} className={styles.ctaGhost}>
                    Word training and support
                  </Link>
                </div>
              </div>
            </section>

            {/* ---------- faq ---------- */}
            <section id="faq" className={styles.section}>
              <h2>
                Frequently asked{" "}
                <span className={styles.accent}>questions</span>
              </h2>
              <div className={styles.faq}>
                {faqs.map(([q, a]) => (
                  <details key={q}>
                    <summary>{q}</summary>
                    <div className={styles.faqBody}>
                      <p>{a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* ---------- conclusion ---------- */}
            <section id="conclusion" className={styles.section}>
              <h2>
                Key <span className={styles.accent}>takeaways</span>
              </h2>
              <div className={styles.takeaways}>
                {takeaways.map(([t, x]) => (
                  <div key={t} className={styles.takeaway}>
                    <strong>{t}</strong>
                    <p>{x}</p>
                  </div>
                ))}
              </div>

              <h3>Final recommendation</h3>
              <p>
                For Australian businesses and professionals, a Microsoft 365
                subscription (Business Standard for teams) offers the best
                balance of features, flexibility and value. This provides
                desktop Word for professional collaboration via SharePoint or
                OneDrive, whilst maintaining web access as a convenient backup.
                Students and casual users can often thrive on the free web
                version for simple documents. Test your actual workflow before
                purchasing to avoid paying for features you don’t need.
              </p>

              <div className={styles.disclaimer}>
                <p>
                  *All prices included in this article are in AUD and relevant
                  as of January 2026. Please check for the latest pricing at{" "}
                  <Link
                    href="https://www.microsoft.com/en-au"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    Microsoft’s official website
                  </Link>
                  .
                </p>
              </div>

              <div className={styles.authorBox}>
                <span className={styles.avatarLarge}>
                  <Image
                    src={rochelle}
                    alt={AUTHOR_NAME}
                    width={56}
                    height={56}
                  />
                </span>
                <div>
                  <h4>About the author, {AUTHOR_NAME}</h4>
                  <p>
                    Rochelle is Office Experts Group’s leading Word designer
                    with over 20 years of experience creating custom templates,
                    ribbons, and automation for businesses, government, and
                    professional services.
                  </p>
                </div>
              </div>

              <h3 style={{ marginTop: "3rem" }}>Related reading</h3>
              <div className={styles.related}>
                {related.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className={styles.relatedCard}
                  >
                    <strong>{r.title}</strong>
                    <span>{r.text}</span>
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

export default WordDesktopVsWebBlogPost;
