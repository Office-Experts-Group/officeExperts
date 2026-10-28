// /app/blog/document-rebranding/page.js
import Image from "next/image";
import Link from "next/link";

import Contact from "@/components/Contact";
import RelatedLinks from "@/components/RelatedLinks";
import dan from "@/public/team/dan.webp";
import styles from "@/styles/documentRebrandingBlog.module.scss";

import HeroSvg from "./(svgs)/HeroSvg";
import MapSvg from "./(svgs)/MapSvg";
import DecisionSvg from "./(svgs)/DecisionSvg";
import AnatomySvg from "./(svgs)/AnatomySvg";
import {
  BrokenLinksSketch,
  TeamsSketch,
  VersionsSketch,
  EmbeddedSketch,
  RushSketch,
} from "./(svgs)/Illustrations";
import {
  IconFolder,
  IconUsers,
  IconShield,
  IconPalette,
  IconSearch,
  IconLayers,
  IconReplace,
  IconBlocks,
  IconFile,
  IconBulb,
  IconCheck,
  IconArrow,
} from "./(svgs)/Icons";

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with layout.js
const PAGE_URL = "https://www.officeexperts.com.au/blog/document-rebranding";
const PAGE_TITLE = "Document Rebranding Without Starting Over | Office Experts";
const PAGE_DESCRIPTION =
  "Rebrand your business documents without rebuilding them. Update logos, colours and details while keeping your structure, wording and workflow.";

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_HEADLINE =
  "How to Rebrand Your Business Documents Without Starting From Scratch";
const BREADCRUMB_NAME = "Document Rebranding";
const AUTHOR_NAME = "Daniel Thomas";
const READING_TIME = "12 min read";
const WORD_COUNT = 2800;
const HERO_IMAGE_PATH = "/logo.png";
const HERO_IMAGE_ALT = "Office Experts logo";
// Published 29 Oct 2025 (AEDT, +11:00). Modified is set by hand when content changes.
const DATE_PUBLISHED = "2025-10-29T09:00:00+11:00";
const DATE_MODIFIED = "2026-10-28T00:00:00+11:00";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-AU", {
    timeZone: "Australia/Sydney",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}#website` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      inLanguage: "en-AU",
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
      description: PAGE_DESCRIPTION,
      author: { "@type": "Person", name: AUTHOR_NAME },
      publisher: { "@id": `${SITE_URL}#organization` },
      mainEntityOfPage: { "@id": PAGE_URL },
      image: `${SITE_URL}${HERO_IMAGE_PATH}`,
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: "Document Rebranding",
      keywords: ["document rebranding"],
      wordCount: WORD_COUNT,
      inLanguage: "en-AU",
    },
  ],
};

/* ---------------------------------------------------------------- data */

const TOC = [
  { id: "pain", label: "The pain of rebranding" },
  { id: "why", label: "Why it feels overwhelming" },
  { id: "audit", label: "Audit before you act" },
  { id: "strategy", label: "What carries across" },
  { id: "choose", label: "Which approach fits" },
  { id: "tools", label: "Tools and techniques" },
  { id: "implementation", label: "Implementation strategy" },
  { id: "options", label: "Three ways to run it" },
  { id: "practice", label: "Measuring success" },
  { id: "mistakes", label: "Common pitfalls" },
  { id: "help", label: "Professional help" },
  { id: "faq", label: "FAQ" },
  { id: "conclusion", label: "Conclusion" },
];

const GLANCE = [
  {
    value: "1 template",
    label: "Update the master first",
    text: "Every new document inherits the change.",
  },
  {
    value: "5 phases",
    label: "Audit to governance",
    text: "A staged rollout beats a big-bang switch.",
  },
  {
    value: "1,000+ files",
    label: "Time to get help",
    text: "Past this size, scripts beat manual edits.",
  },
];

const TRIGGERS = [
  "Mergers and acquisitions",
  "Visual identity refreshes",
  "New taglines or positioning",
  "Company name changes",
  "New signatories after leadership changes",
];

const IMPACTS = [
  {
    Icon: IconFolder,
    title: "Old versions keep circulating",
    text: "Clients and partners receive documents in two different brands and start to wonder which is current.",
  },
  {
    Icon: IconUsers,
    title: "Teams recreate instead of update",
    text: "Staff rebuild documents rather than update templates, which multiplies the work and the errors.",
  },
  {
    Icon: IconShield,
    title: "Legal and compliance risk",
    text: "Outdated company details on official documents can undermine contracts and regulated paperwork.",
  },
  {
    Icon: IconPalette,
    title: "Brand inconsistency",
    text: "Mismatched logos, colours and fonts chip away at professional credibility.",
  },
];

const INVENTORY = {
  head: ["Category", "Examples", "Typical priority"],
  rows: [
    [
      "Critical business documents",
      "Contracts, NDAs, service agreements",
      "First: legal accuracy matters",
    ],
    [
      "Customer-facing materials",
      "Proposals, quotes, invoices",
      "First: shapes brand perception",
    ],
    [
      "Internal templates",
      "Letterheads, memo templates, HR forms",
      "Early: high daily use",
    ],
    [
      "Marketing collateral",
      "Case studies, one-pagers, presentations",
      "Second: update as reused",
    ],
    [
      "Operational documents",
      "SOPs, checklists, reports",
      "Second: check compliance ones first",
    ],
  ],
};

const VISUAL_ELEMENTS = [
  "Company logos and secondary marks",
  "Colour palettes (primary, secondary, accent)",
  "Typography (headers, body text, captions)",
  "Design elements (dividers, borders, icons)",
];

const WRITTEN_ELEMENTS = [
  "Company legal name",
  "Taglines and positioning statements",
  "Contact information (addresses, phone numbers, websites)",
  "Email signatures and social media handles",
  "ABN or business registration numbers (if changed)",
];

const PRIORITIES = [
  "Critical business documents that require legal accuracy",
  "Customer-facing materials that shape brand perception",
  "High-use templates accessed daily",
  "Compliance-driven documents with regulatory requirements",
];

const TOOLS = [
  {
    Icon: IconLayers,
    title: "Word Styles",
    text: "Your most powerful rebranding tool. Modify the underlying style once and every paragraph using it updates. Right-click the style in the Styles pane, choose Modify, then change fonts, colours and spacing.",
  },
  {
    Icon: IconReplace,
    title: "Find and Replace",
    text: "Press Ctrl+H for text updates such as company names, addresses or taglines. Wildcards help with patterns. It will not touch images or logos, and it can miss headers, footers and text boxes, so review critical documents by hand.",
  },
  {
    Icon: IconPalette,
    title: "Document Themes",
    text: "Themes control colours, fonts and effects across a whole document. Go to Design > Colors and Fonts, customise them to your brand, then save the theme so it can be applied in seconds.",
  },
  {
    Icon: IconBlocks,
    title: "Building Blocks (Quick Parts)",
    text: "Store reusable branded content such as cover pages, signature blocks and disclaimers. Blocks are inserted as content, so editing one later does not change documents that already contain it. They keep new documents consistent.",
  },
  {
    Icon: IconFile,
    title: "Document Properties",
    text: "Bind repeating details such as company name and address to document properties so they can be updated from one place within a document. Menu names vary a little between Word versions, so test in your own build.",
  },
];

const TOOL_TABLE = {
  head: ["Tool", "Best for", "Watch out for"],
  rows: [
    [
      "Styles",
      "Fonts, colours and spacing across a document",
      "Direct formatting that overrides the style",
    ],
    [
      "Themes",
      "Brand palette and font pairs, applied in seconds",
      "Hard-coded colours that ignore the theme",
    ],
    [
      "Find and Replace",
      "Names, addresses, taglines, phone numbers",
      "Headers, footers and text boxes; images",
    ],
    [
      "Building Blocks",
      "Cover pages, signature blocks, disclaimers",
      "Old copies already inserted in documents",
    ],
    [
      "Document Properties",
      "Repeating details inside one document",
      "Properties that were typed rather than bound",
    ],
  ],
};

const STEPS = [
  {
    title: "Create your rebranding kit",
    text: "Before you update anything, assemble the assets you will need: new logo files in multiple formats (PNG, SVG, EPS), colour codes in HEX, RGB and CMYK, font licences and installation files, the brand guidelines document and approved templates for each document type.",
    tip: "Get the font licences sorted early. A missing font is the most common reason a new template looks different on another person’s machine.",
  },
  {
    title: "Update master templates first",
    text: "Your master templates are the foundation. Prioritise high-use documents that generate the most output, legal documents requiring exact compliance, customer-facing materials and templates used across departments. Update styles rather than rebuilding documents, test thoroughly before rollout and use clear naming for new versions.",
    tip: "Build one reference document that uses every style once. It becomes your visual test for every template that follows.",
  },
  {
    title: "Train your team",
    text: "Even perfect templates fail if staff do not know how to use them. Show how to access the new templates, which elements should never be changed, how to update fields and Building Blocks, and where to get help when something looks wrong.",
    tip: "Keep the session short and record it. New starters can watch it later.",
  },
  {
    title: "Establish governance",
    text: "Long-term success needs ownership. Assign template ownership to specific people, create an approval process for changes, set up a central repository (SharePoint or Teams) and schedule quarterly reviews.",
    tip: "Name one owner per template family. Shared ownership usually means no ownership.",
  },
  {
    title: "Roll out in phases",
    text: "Start with critical legal and customer-facing documents, move to internal templates and operational documents, and update archived documents only if they will be reused. Tell stakeholders the schedule so nobody is surprised by a changed template.",
    tip: "Keep the old template available but clearly archived for a short overlap, then remove it.",
  },
];

const OPTIONS = [
  {
    tag: "Option 1",
    title: "Do it in-house",
    best: "A modest library, and staff who are confident with Word styles and templates.",
    tradeoff:
      "Time. Someone has to own the work alongside their day job, and gaps show up late.",
  },
  {
    tag: "Option 2",
    title: "Experts build, you roll out",
    best: "You want solid master templates built properly, then your own team handles the rollout.",
    tradeoff:
      "You still need an internal owner for training, version control and governance.",
  },
  {
    tag: "Option 3",
    title: "Fully managed project",
    best: "Large libraries, macro-heavy documents, system integrations or tight compliance deadlines.",
    tradeoff:
      "Higher upfront cost, offset by fewer errors and a much shorter timeline.",
  },
];

const WALKTHROUGH = [
  {
    title: "Tracking completion",
    steps: [
      "List every document needing updates in one master spreadsheet.",
      "Record status (not started, in progress, completed), owner and deadline.",
      "Capture sign-off so completed means checked, not just edited.",
    ],
  },
  {
    title: "Monitoring template compliance",
    steps: [
      "Sample documents at random from different departments.",
      "Check for old branding and the correct template in use.",
      "Give feedback and retrain where gaps appear.",
    ],
  },
  {
    title: "Quarterly reviews and updates",
    steps: [
      "Ask whether any documents need updating.",
      "Collect feedback from the people using the templates.",
      "Update templates as needs change, then announce the new version.",
    ],
  },
  {
    title: "Closing out old versions",
    steps: [
      "Archive superseded templates in a separate, read-only folder.",
      "Use version history in SharePoint or OneDrive.",
      "Say clearly which version is current wherever staff look for it.",
    ],
  },
];

const MISTAKES = [
  {
    title: "Broken Links and References",
    Sketch: BrokenLinksSketch,
    text: "Updating documents can break image links pointing at old logo files, cross-references to headings that changed, navigation bookmarks and hyperlinks to old company websites.",
    fix: "Update cross-references after text changes, test every hyperlink before distribution, and keep a link inventory for critical documents.",
  },
  {
    title: "Inconsistent Application Across Teams",
    Sketch: TeamsSketch,
    text: "Without governance, each team updates in its own way and the result is a patchwork of near-matches.",
    fix: "Use one central template repository, assign template owners, publish clear update guidelines and audit regularly.",
  },
  {
    title: "Version Control Chaos",
    Sketch: VersionsSketch,
    text: "One of the biggest post-rebranding headaches is old versions continuing to circulate.",
    fix: "Use clear file naming (for example v2.0_NewBrand), archive old versions separately and rely on SharePoint or OneDrive version history.",
  },
  {
    title: "Overlooking Embedded Content",
    Sketch: EmbeddedSketch,
    text: "Charts with old colour schemes, tables with outdated formatting, headers and footers with old contact details, and text boxes with old taglines are easy to miss.",
    fix: "Work from a checklist that names every place branding can hide, and tick it off per document.",
  },
  {
    title: "Rushing the Rollout",
    Sketch: RushSketch,
    text: "The pressure to finish quickly often leads to mistakes that are slower to fix than the time saved.",
    fix: "Test every template, run staff training, collect feedback and roll out in phases rather than all at once.",
  },
];

const CHECKLIST = [
  "New logo in the header, footer and cover page",
  "Brand colours and fonts come from the theme or styles",
  "Company legal name and ABN are correct",
  "Addresses, phone numbers and websites are current",
  "Email signature and social handles are updated",
  "Hyperlinks and cross-references are tested",
  "Charts, tables and text boxes match the new brand",
  "Document properties and metadata are updated",
  "File name carries the new version number",
  "Old versions are archived, not left in circulation",
];

const HELP_SIGNS = [
  "A document library with over 1,000 files",
  "VBA or macro-heavy documents requiring code updates",
  "Documents integrated with other systems (CRM, databases)",
  "Tight deadlines with compliance requirements",
  "No internal resources with the technical skills",
];

const FAQS = [
  {
    q: "How long does a document rebrand take?",
    a: "It depends on the size of your library and how well the templates are built. Updating the master templates is usually the quickest part. Rolling out, training staff and cleaning up archives take longer, which is why a phased plan works better than a single deadline.",
  },
  {
    q: "Do I need to update every old document?",
    a: "No. Update archived documents only if they will be reused. Focus on the templates people use every day and the documents customers and regulators see.",
  },
  {
    q: "Can Find and Replace change my logo?",
    a: "No. Find and Replace works on text. Logos live in headers, footers, cover pages and Building Blocks, so swap them once in the master template. For large libraries, a script can replace them across many files.",
  },
  {
    q: "What is the difference between a theme and a style?",
    a: "A theme defines the brand palette, fonts and effects. A style applies them to a role, such as Heading 1 or Body Text. Change the theme and the styles that use it follow, as long as nobody has hard-coded colours over the top.",
  },
  {
    q: "Will changing the template update documents that already exist?",
    a: "Not automatically. Existing documents keep their own copy of the styles, and results depend on how each document was built. Test on a few real documents first, and plan to update or recreate those that matter.",
  },
];

const RELATED = [
  {
    href: "/blog/ultimate-guide-to-word-templates",
    eyebrow: "Blog",
    title: "The ultimate guide to Word templates",
  },
  {
    href: "/blog/word-templates-for-legal-firms",
    eyebrow: "Blog",
    title: "Word templates for legal firms",
  },
  {
    href: "/services/microsoft-word/brand-template",
    eyebrow: "Service",
    title: "Brand templates for Microsoft Word",
  },
];

const CASE_STUDY_LINKS = [
  {
    href: "/case-studies/advisory-branding-template-rollout",
    linkText: "View the template suite rebrand",
    title:
      "Rebranding a full Word template suite to lock a new brand in, not just apply it",
    description:
      "While updating its branding, the client’s Word templates kept breaking, with formatting corruption and staff freely overriding brand elements. We rebuilt the suite from a single Master Template with eleven sub-templates, added a custom Formatting tab that locks down font and font-size controls, and built branded Quick Parts for cover pages and other template elements.",
    image: "/case-studies/red-fox-advisory-brand-templatesLg.png",
    imageAlt: "Branded Word template suite built from a single Master Template",
  },
  {
    href: "/case-studies/environmental-consultancy-word-template-rebuild",
    linkText: "See how we did it",
    title:
      "Rebuilding a beautifully designed template that Word itself couldn’t cope with",
    description:
      "The client’s new Word templates looked exactly right, but hadn’t been built the way Word needs to be built, which made them inefficient to use and prone to formatting errors. We rebuilt the entire suite on proper styles, headings and page structure, keeping the approved design intact.",
    image:
      "/case-studies/environmental-consultancy-word-template-rebuildLg.png",
    imageAlt: "Word template suite rebuilt on proper styles and page structure",
  },
];

/* ------------------------------------------------------------- helpers */

function Callout({ Icon, label, children }) {
  return (
    <aside className={styles.callout}>
      <span className={styles.calloutChip}>
        <Icon />
      </span>
      <div className={styles.calloutBody}>
        <p className={styles.calloutLabel}>{label}</p>
        <p className={styles.calloutText}>{children}</p>
      </div>
    </aside>
  );
}

function DataTable({ caption, head, rows }) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <caption className={styles.srOnly}>{caption}</caption>
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Diagram({ children, caption }) {
  return (
    <figure className={styles.diagram}>
      <div className={styles.diagramScroll}>
        <div className={styles.diagramInner}>{children}</div>
      </div>
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
}

/* ---------------------------------------------------------------- page */

export default function DocumentRebrandingBlogPost() {
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
            <div className={styles.heroCopy}>
              <h1 className={styles.title}>
                How to Rebrand Your Business Documents Without Starting{" "}
                <span className={styles.accent}>From Scratch</span>
              </h1>
              <p className={styles.lede}>
                A company rebrand does not mean rebuilding every contract,
                proposal and template. Here is how to update the look and the
                details while keeping the structure, wording and workflow that
                already work.
              </p>
              <div className={styles.authorRow}>
                <span className={styles.avatar} aria-hidden="true">
                  <Image src={dan} alt={AUTHOR_NAME} width={38} height={38} />
                </span>
                <div className={styles.authorText}>
                  <span className={styles.authorName}>By {AUTHOR_NAME}</span>
                  <span className={styles.authorMeta}>
                    Updated {formatDate(DATE_MODIFIED)} · {READING_TIME}
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.heroArt}>
              <HeroSvg />
            </div>
          </div>
        </header>

        {/* At a glance */}
        <section className={styles.glance} aria-label="At a glance">
          {GLANCE.map((g) => (
            <div key={g.value} className={styles.glanceCard}>
              <p className={styles.glanceValue}>{g.value}</p>
              <p className={styles.glanceLabel}>{g.label}</p>
              <p className={styles.glanceText}>{g.text}</p>
            </div>
          ))}
        </section>

        <div className={styles.layout}>
          <nav className={styles.toc} aria-label="Contents">
            <p className={styles.tocTitle}>In this guide</p>
            <ol className={styles.tocList}>
              {TOC.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ol>
          </nav>

          <article className={styles.article}>
            {/* Pain */}
            <section id="pain" className={styles.section}>
              <h2>
                The Pain of{" "}
                <span className={styles.accent}>Document Rebranding</span>
              </h2>
              <p>
                If you’ve ever faced a company rebrand, you know the sinking
                feeling that comes with it: hundreds, maybe thousands of
                documents that need updating. Letterheads, contracts, proposals,
                templates, forms and reports all bearing your old logo, outdated
                colours and previous company details.
              </p>
              <p>
                The knee-jerk reaction? Start from scratch. Rebuild everything.
                It’s a costly, time-consuming mistake that most businesses don’t
                need to make.
              </p>
              <p>
                The reality is that manual document updates are expensive, prone
                to errors, and create massive inconsistencies across your
                organisation. With the right knowledge and assistance you can
                modernise your brand presence without completely discarding
                years of carefully crafted templates and documents.
              </p>
              <p>
                This guide follows the order we would do the job in: audit,
                choose an approach, update the templates, roll out in phases and
                keep it consistent. It is written around Word, where most of the
                pain sits, but the thinking applies to any template-driven file.
              </p>
              <Callout Icon={IconBulb} label="The short version">
                Change the styles, themes and details that carry your brand.
                Leave the structure, approved wording and workflow alone.
              </Callout>
            </section>

            {/* Why */}
            <section id="why" className={styles.section}>
              <h2>
                Why Document Rebranding Feels Overwhelming{" "}
                <span className={styles.accent}>(But Doesn’t Have To Be)</span>
              </h2>
              <p>
                Document rebranding typically happens during major business
                transitions:
              </p>
              <ul className={styles.chipList}>
                {TRIGGERS.map((t) => (
                  <li key={t} className={styles.chip}>
                    {t}
                  </li>
                ))}
              </ul>
              <h3>The “Start From Scratch” Trap</h3>
              <p>
                Many businesses fall into this trap because they assume their
                existing documents are too complex to update efficiently. The
                truth is that your document structure, formatting, legal
                language, approved content and workflow logic can all stay
                intact while you update only the visual and textual brand
                elements.
              </p>
              <h3>Real Business Impact of Poor Execution</h3>
              <p>
                When rebranding is handled poorly, the consequences extend far
                beyond aesthetics. Here is what tends to go wrong.
              </p>
              <div className={styles.reasonGrid}>
                {IMPACTS.map(({ Icon, title, text }) => (
                  <div key={title} className={styles.reasonCard}>
                    <span className={styles.reasonIcon}>
                      <Icon />
                    </span>
                    <h4 className={styles.cardTitle}>{title}</h4>
                    <p className={styles.cardText}>{text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Audit */}
            <section id="audit" className={styles.section}>
              <h2>
                Audit Before You Act:{" "}
                <span className={styles.accent}>
                  What Actually Needs to Change?
                </span>
              </h2>
              <p>
                Before touching a single document, you need a clear inventory of
                what you’re working with and what actually needs updating.
              </p>
              <h3>Identifying Your Document Inventory</h3>
              <p>
                Start by sorting documents into five groups. The table shows
                what usually sits in each and where to start.
              </p>
              <DataTable
                caption="Document inventory categories and priorities"
                head={INVENTORY.head}
                rows={INVENTORY.rows}
              />
              <div className={styles.twoCol}>
                <div className={styles.listCard}>
                  <h3 className={styles.listTitle}>
                    Visual Elements to Update
                  </h3>
                  <ul className={styles.tickList}>
                    {VISUAL_ELEMENTS.map((v) => (
                      <li key={v}>{v}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.listCard}>
                  <h3 className={styles.listTitle}>
                    Written Elements to Update
                  </h3>
                  <ul className={styles.tickList}>
                    {WRITTEN_ELEMENTS.map((w) => (
                      <li key={w}>{w}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <h3>Creating a Priority List</h3>
              <p>
                Not all documents need immediate attention. Prioritise in this
                order:
              </p>
              <ol className={styles.prioList}>
                {PRIORITIES.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ol>
            </section>

            {/* Strategy and map */}
            <section id="strategy" className={styles.section}>
              <h2>
                The Smart Rebranding Strategy:{" "}
                <span className={styles.accent}>
                  Leverage What Already Works
                </span>
              </h2>
              <p>
                Most of a document is not branding at all. Heading levels,
                numbering, approved legal wording, headers, footers, section
                breaks and pagination do their job whatever logo sits on top.
                The diagram shows what carries across and what actually changes.
              </p>
              <Diagram caption="Only logos, colours, fonts and company details change. Structure and approved wording carry across.">
                <MapSvg />
              </Diagram>
              <h3>Start with Your Master Templates</h3>
              <p>
                Your templates are the foundation of all future documents.
                Update these first and new documents are consistent from day
                one. Focus on styles rather than rebuilding entire documents,
                test before rollout, and name new versions clearly.
              </p>
              <h3>Preserve Your Existing Structure</h3>
              <p>
                Keep your formatting hierarchy, headers, footers and section
                breaks, and maintain version control while you update only the
                branding elements.
              </p>
            </section>

            {/* Decision */}
            <section id="choose" className={styles.section}>
              <h2>
                Which Approach{" "}
                <span className={styles.accent}>Should You Take?</span>
              </h2>
              <p>
                Two questions decide most projects: how big and complicated is
                the library, and are the templates built the way Word expects?
              </p>
              <Diagram caption="Start at the top. The highlighted outcome is the right fit for most teams.">
                <DecisionSvg />
              </Diagram>
              <p>
                If the templates look right but misbehave when edited, they are
                usually missing proper styles. That is a rebuild job, not a
                rebrand job, and doing it first saves time on everything after.
                The thresholds here are guides, not rules. A small library full
                of macros can need more specialist time than a large, simple
                one.
              </p>
            </section>

            {/* Tools */}
            <section id="tools" className={styles.section}>
              <h2>
                Technical Implementation:{" "}
                <span className={styles.accent}>Tools and Techniques</span>
              </h2>
              <p>
                Understanding what Word can and cannot do makes rebranding
                faster and more reliable.
              </p>
              <div className={styles.methodGrid}>
                {TOOLS.map(({ Icon, title, text }) => (
                  <div key={title} className={styles.methodCard}>
                    <span className={styles.methodIcon}>
                      <Icon />
                    </span>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p className={styles.cardText}>{text}</p>
                  </div>
                ))}
              </div>
              <h3>Which tool for which job</h3>
              <DataTable
                caption="Word rebranding tools compared"
                head={TOOL_TABLE.head}
                rows={TOOL_TABLE.rows}
              />
              <Callout Icon={IconSearch} label="Check the details">
                Feature names and menu paths change between Word versions and
                between desktop and web. Try each technique on a copy of a real
                document before you apply it to a library.
              </Callout>
            </section>

            {/* Implementation timeline */}
            <section id="implementation" className={styles.section}>
              <h2>
                Implementation Strategy{" "}
                <span className={styles.accent}>for Business Teams</span>
              </h2>
              <ol className={styles.timeline}>
                {STEPS.map((s, i) => (
                  <li key={s.title} className={styles.step}>
                    <span className={styles.stepBadge}>{i + 1}</span>
                    <div className={styles.stepBody}>
                      <h3>{s.title}</h3>
                      <p>{s.text}</p>
                      <p className={styles.tip}>
                        <span className={styles.tipLabel}>Pro tip</span>
                        {s.tip}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* Options */}
            <section id="options" className={styles.section}>
              <h2>
                Three Ways to{" "}
                <span className={styles.accent}>Run the Project</span>
              </h2>
              <p>
                There is no single right way to staff a rebrand. Here is how the
                three common routes compare.
              </p>
              <div className={styles.optionGrid}>
                {OPTIONS.map((o) => (
                  <div key={o.title} className={styles.optionCard}>
                    <span className={styles.optionTag}>{o.tag}</span>
                    <h3 className={styles.cardTitle}>{o.title}</h3>
                    <p className={styles.optionLabel}>Best when</p>
                    <p className={styles.cardText}>{o.best}</p>
                    <p className={styles.optionLabel}>Trade-off</p>
                    <p className={styles.cardText}>{o.tradeoff}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Practice */}
            <section id="practice" className={styles.section}>
              <h2>
                Measuring Success and{" "}
                <span className={styles.accent}>Maintaining Consistency</span>
              </h2>
              <p>
                A well-built branded template puts the brand in a few places
                that are easy to maintain. Once those are in place, the work is
                keeping them that way.
              </p>
              <Diagram caption="Five places where a well-built template carries the brand.">
                <AnatomySvg />
              </Diagram>
              <div className={styles.walkGrid}>
                {WALKTHROUGH.map((w, i) => (
                  <div key={w.title} className={styles.walkCard}>
                    <span className={styles.walkNum}>{i + 1}</span>
                    <h3 className={styles.cardTitle}>{w.title}</h3>
                    <ol className={styles.miniSteps}>
                      {w.steps.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </section>

            {/* Mistakes */}
            <section id="mistakes" className={styles.section}>
              <h2>
                Common Pitfalls{" "}
                <span className={styles.accent}>and How to Avoid Them</span>
              </h2>
              <div className={styles.mistakeList}>
                {MISTAKES.map(({ title, Sketch, text, fix }, i) => (
                  <div key={title} className={styles.mistakeCard}>
                    <div className={styles.mistakeCopy}>
                      <span className={styles.mistakeNum}>{i + 1}</span>
                      <h3>{title}</h3>
                      <p className={styles.cardText}>{text}</p>
                      <p className={styles.insteadRow}>
                        <span className={styles.insteadPill}>Instead</span>
                        {fix}
                      </p>
                    </div>
                    <div className={styles.sketch}>
                      <Sketch />
                    </div>
                  </div>
                ))}
              </div>
              <h3>Before you share a rebranded document</h3>
              <ul className={styles.checklist}>
                {CHECKLIST.map((c) => (
                  <li key={c}>
                    <span className={styles.checkIcon}>
                      <IconCheck />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </section>

            {/* Help */}
            <section id="help" className={styles.section}>
              <h2>
                When to Get{" "}
                <span className={styles.accent}>Professional Help</span>
              </h2>
              <p>
                While many businesses can handle basic rebranding internally,
                certain scenarios warrant professional assistance. Consider
                getting expert help when you are dealing with:
              </p>
              <ul className={styles.tickList}>
                {HELP_SIGNS.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <div className={styles.ctaBand}>
                <p className={styles.ctaText}>
                  Office Experts specialises in large-scale{" "}
                  <Link href="/services/microsoft-word/document-rebranding-services">
                    document transformation projects
                  </Link>
                  . Our team can audit your existing documents,{" "}
                  <Link href="/services/microsoft-word/corporate-global-template-solution">
                    create master templates
                  </Link>{" "}
                  optimised for your workflows, implement automated solutions
                  for recurring updates,{" "}
                  <Link href="/microsoft-support-and-training-australia">
                    train your staff on best practices
                  </Link>
                  , and provide ongoing support and{" "}
                  <Link href="/services/microsoft-word/government-departments">
                    governance frameworks
                  </Link>
                  .
                </p>
                <div className={styles.ctaActions}>
                  <Link href="/contact-us" className={styles.btnPrimary}>
                    Book a document audit
                  </Link>
                  <Link
                    href="/services/microsoft-word/document-rebranding-services"
                    className={styles.btnGhost}
                  >
                    Document rebranding services
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
              <div className={styles.faqList}>
                {FAQS.map((f) => (
                  <details key={f.q} className={styles.faq}>
                    <summary>{f.q}</summary>
                    <p className={styles.faqBody}>{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className={styles.section}>
              <h2>
                Conclusion:{" "}
                <span className={styles.accent}>
                  Rebranding Doesn’t Mean Rebuilding
                </span>
              </h2>
              <p>
                The fear of document rebranding is often worse than the reality.
                When approached strategically, you can modernise your brand
                presence without discarding years of hard work.
              </p>
              <p>
                Smart rebranding preserves your document structure, approved
                language and workflow logic, while updating only what needs to
                change: logos, colours, fonts and company details. This approach
                saves time and money, reduces errors and inconsistencies,
                maintains legal and compliance standards, and empowers teams to
                work efficiently throughout the transition.
              </p>
              <p>
                Your documents represent significant organisational investment.
                They embody institutional knowledge, approved processes and
                legal protection. Treat them as valuable assets worth preserving
                and enhancing, not obstacles to be discarded.
              </p>
              <p>
                Whether you’re undergoing a merger, refreshing your visual
                identity or simply updating outdated materials, the principles
                stay the same: audit before acting, leverage existing tools,
                prioritise strategically, implement systematically and govern
                consistently. If you’re facing a document rebranding project and
                need expert guidance, Office Experts is here to help.{" "}
                <Link href="/contact-us">Contact us</Link> for a document audit
                and a rebranding strategy tailored to your business.
              </p>

              <div className={styles.authorBox}>
                <span className={styles.avatarLarge} aria-hidden="true">
                  <Image src={dan} alt={AUTHOR_NAME} width={56} height={56} />
                </span>
                <div>
                  <h3 className={styles.authorBoxName}>About {AUTHOR_NAME}</h3>
                  <p className={styles.cardText}>
                    {AUTHOR_NAME} is a developer at Office Experts Group, an
                    Australian Microsoft consultancy established in 2000, with a
                    curious mind for programming, design and SEO. If you have
                    any questions, get in touch using the form below.
                  </p>
                </div>
              </div>
            </section>

            {/* Related */}
            <section id="related" className={styles.section}>
              <h2>
                Related <span className={styles.accent}>Reading</span>
              </h2>
              <div className={styles.relatedGrid}>
                {RELATED.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className={styles.relatedCard}
                  >
                    <span className={styles.relatedEyebrow}>{r.eyebrow}</span>
                    <span className={styles.relatedTitle}>{r.title}</span>
                    <span className={styles.relatedArrow}>
                      <IconArrow />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </article>
        </div>
      </div>

      <RelatedLinks
        theme="dark"
        eyebrow="See it in practice"
        heading="Document rebranding projects designed by Office Experts"
        links={CASE_STUDY_LINKS}
      />
      <Contact />
    </>
  );
}
