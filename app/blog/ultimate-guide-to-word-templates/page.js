// /app/blog/ultimate-guide-to-word-templates/page.js
import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/ultimateGuideToWordTemplatesBlog.module.scss";
import Contact from "@/components/Contact";

// TODO: confirm the original post's author and that this file exists in public/team/
import dan from "@/public/team/dan.webp";

import HeroSvg from "./(svgs)/HeroSvg";
import AnatomySvg from "./(svgs)/AnatomySvg";
import HierarchySvg from "./(svgs)/HierarchySvg";
import DecisionSvg from "./(svgs)/DecisionSvg";
import {
  NormalSketch,
  CopySketch,
  NamingSketch,
  SharedSketch,
  TestingSketch,
} from "./(svgs)/MistakeSketches";
import {
  IconLayout,
  IconStyles,
  IconText,
  IconBrand,
  IconToolbar,
  IconMacro,
  IconLayers,
  IconClock,
  IconShield,
  IconUser,
  IconGroup,
  IconGlobe,
  IconPlug,
  IconDocument,
  IconChart,
  IconContract,
  IconInvoice,
  IconCalendar,
  IconMegaphone,
  IconBook,
  IconMail,
  IconFolder,
  IconBulb,
  IconWarning,
  IconCheck,
  IconArrow,
  IconSearch,
} from "./(svgs)/Icons";

// Keep these three in sync with layout.js
const PAGE_URL =
  "https://www.officeexperts.com.au/blog/ultimate-guide-to-word-templates";
const PAGE_TITLE =
  "Ultimate Guide to Microsoft Word Templates | Office Experts";
const PAGE_DESCRIPTION =
  "What is a Word template? Types, benefits, template hierarchy and management tips from Australia’s Word specialists, plus a guide to choosing the right one.";

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_HEADLINE = "The Ultimate Guide to Microsoft Word Templates";
const BREADCRUMB_NAME = "Ultimate Guide to Word Templates";
const AUTHOR_NAME = "Dan"; // TODO: confirm full name as shown on the original post
const READING_TIME = "10 min read"; // about 2,400 visible words / 238
const HERO_IMAGE_PATH = "/blog/word-template.webp";
const HERO_IMAGE_ALT =
  "A master Word template producing a letter, a report and an invoice";
// TODO: copy datePublished from the original post. Left empty so the schema
// omits it rather than inventing a date.
const DATE_PUBLISHED = "2026-01-28T00:00:00+11:00";
const DATE_MODIFIED = "2026-10-28T00:00:00+11:00";

function formatDate(iso) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Sydney",
  }).format(new Date(iso));
}

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
      ...(DATE_PUBLISHED && { datePublished: DATE_PUBLISHED }),
      dateModified: DATE_MODIFIED,
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
      description: PAGE_DESCRIPTION,
      image: `${SITE_URL}${HERO_IMAGE_PATH}`,
      author: { "@type": "Person", name: AUTHOR_NAME },
      publisher: { "@id": `${SITE_URL}#organization` },
      inLanguage: "en-AU",
      ...(DATE_PUBLISHED && { datePublished: DATE_PUBLISHED }),
      dateModified: DATE_MODIFIED,
    },
  ],
};

/* ---------- data ---------- */

const glance = [
  { value: "5", label: "Template types", line: "From Normal.dotm to add-ins" },
  {
    value: "3",
    label: "Core benefits",
    line: "Consistency, speed and quality",
  },
  {
    value: "4",
    label: "Levels of precedence",
    line: "Who wins when names clash",
  },
];

const contents = [
  { id: "what", label: "What is a Word template?" },
  { id: "benefits", label: "Top 3 benefits" },
  { id: "types", label: "Types of Word templates" },
  { id: "hierarchy", label: "Template hierarchy" },
  { id: "choose", label: "Which type do you need?" },
  { id: "uses", label: "Common uses" },
  { id: "diy", label: "DIY vs professional" },
  { id: "manage", label: "Template management" },
  { id: "mistakes", label: "Common mistakes" },
  { id: "help", label: "When to get help" },
  { id: "faq", label: "FAQ" },
  { id: "conclusion", label: "Conclusion" },
];

const contains = [
  "Predefined page layouts",
  "Custom styles and formatting",
  "Standard text and boilerplate content",
  "Company logos and branding elements",
  "Custom toolbars and menus",
  "Macros and automation scripts",
];

const benefits = [
  {
    n: "01",
    Icon: IconLayers,
    title: "Consistency Across Your Organisation",
    tag: "Brand",
    paras: [
      "Perhaps the most significant advantage of templates is ensuring consistency in your corporate communications. With properly implemented templates, every document that leaves your organisation, whether it’s a letter, report, or contract, maintains the same professional appearance, reinforcing your brand identity and projecting a cohesive image to clients and partners.",
      "Every department can access the same templates, ensuring that documents created by different team members still maintain the same style, layout, and branding elements.",
    ],
  },
  {
    n: "02",
    Icon: IconClock,
    title: "Improved Efficiency and Productivity",
    tag: "Time",
    paras: [
      "Templates dramatically reduce the time spent on document creation. Instead of formatting each new document from scratch, users can simply select the appropriate template and focus on the content. Consider just some of these efficiency benefits:",
    ],
    bullets: [
      "Standardised elements like headers, footers, and logo placements are already in place, saving you and your team countless hours ‘copy-pasting’ from previous projects.",
      "Styles for headings, paragraphs, and other text elements are predefined. Brand recognition can be subtle, but consistent documentation is intuitively a green flag of professionalism to potential and existing clients.",
      "Commonly used text blocks can be included as AutoText entries, with just the click of a button predefined content can be added.",
      "Document-specific settings like margins, orientation, and paper size are preset.",
    ],
    after:
      "This streamlined process allows your team to produce professional documents in a fraction of the time, freeing them to focus on more valuable tasks.",
  },
  {
    n: "03",
    Icon: IconShield,
    title: "Reduced Errors and Higher Quality Output",
    tag: "Quality",
    paras: [
      "When using templates, there are significantly fewer opportunities for formatting errors or inconsistencies. The structure is already established, meaning users only need to add their specific content without worrying about design elements.",
      "Templates can also include built-in validation and restrictions that prevent users from making undesirable changes to the document structure. This results in fewer mistakes and higher-quality output across all your organisational documents.",
    ],
  },
];

const compareRows = [
  [
    "Normal.dotm",
    "Every time Word opens",
    "The default for all new blank documents",
    "Left alone, with a backup",
  ],
  [
    "User template",
    "When you pick it",
    "Your own repeat document types",
    "Individuals and consultants",
  ],
  [
    "Workgroup template",
    "When you pick it",
    "Shared, consistent team documents",
    "Teams and departments",
  ],
  [
    "Global template",
    "Automatically, from STARTUP",
    "Extra tools for every document",
    "Organisation-wide macros",
  ],
  [
    "Add-in template",
    "Automatically, like a global",
    "Extending Word with new features",
    "Specialised tools",
  ],
];

const useCases = [
  { Icon: IconMail, label: "Business letters and correspondence" },
  { Icon: IconChart, label: "Reports and proposals" },
  { Icon: IconContract, label: "Contracts and legal documents" },
  { Icon: IconInvoice, label: "Invoices and purchase orders" },
  { Icon: IconCalendar, label: "Meeting agendas and minutes" },
  { Icon: IconMegaphone, label: "Marketing materials" },
  { Icon: IconBook, label: "Training manuals and documentation" },
];

const diyItems = [
  "Simple, single-purpose templates",
  "Small teams with limited document variety",
  "Basic formatting needs without complex automation",
];

const proItems = [
  "Advanced automation through custom macros",
  "Integration with company data systems",
  "Comprehensive template management systems",
  "Sophisticated document assembly functionality",
  "Cross-platform compatibility",
  "Ongoing maintenance and updates",
];

const practices = [
  {
    title: "Centralise storage",
    text: "Keep templates in a dedicated, accessible location.",
    tip: "Use a network share or a collaboration platform like SharePoint, and point Word’s workgroup templates location at it.",
  },
  {
    title: "Implement version control",
    text: "Track changes and updates to templates.",
    tip: "Include version numbers in template names or properties, for example Corporate-Letter-v2.3.dotx.",
  },
  {
    title: "Document usage guidelines",
    text: "Create clear instructions for users.",
    tip: "Maintain a template registry documenting purpose, owner, and update history.",
  },
  {
    title: "Establish approval processes",
    text: "Determine who can create or modify templates.",
    tip: "Use clear naming conventions with prefix codes for types or departments, for example FIN-Invoice-Template.dotx.",
  },
  {
    title: "Regular maintenance",
    text: "Review and update templates periodically.",
    tip: "Always test templates across different Word versions and platforms before deployment, and back up the collection before significant changes.",
  },
];

const mistakes = [
  {
    Sketch: NormalSketch,
    title: "Editing Normal.dotm directly",
    fix: "Create separate templates for specific purposes, and keep a backup of the original file if you do change Normal.dotm.",
  },
  {
    Sketch: CopySketch,
    title: "Copying from old documents",
    fix: "Start from the template so styles, headers and footers come from one master instead of whatever the last file contained.",
  },
  {
    Sketch: NamingSketch,
    title: "Vague names and no versions",
    fix: "Use prefix codes and version numbers so people can tell what a template is for and which one is current.",
  },
  {
    Sketch: SharedSketch,
    title: "Keeping templates on one laptop",
    fix: "Store shared templates in a workgroup location so updates only need to be made in one place.",
  },
  {
    Sketch: TestingSketch,
    title: "Skipping testing before rollout",
    fix: "Test across the Word versions and platforms your people actually use before you deploy.",
  },
];

const checklist = [
  "Every template has a clear name, an owner and a version",
  "Templates sit in one shared, backed-up location",
  "Styles are used for headings and body text, not manual formatting",
  "Branding elements are in the template, not pasted in by hand",
  "Macros are documented and tested before release",
  "Users know where to find templates and who to ask",
  "Normal.dotm has not been changed without a backup",
  "A review date is set for the next template update",
];

const helpScenarios = [
  {
    Icon: IconDocument,
    title: "Complex documents",
    text: "Documents with multiple sections, references, or calculations",
  },
  {
    Icon: IconShield,
    title: "Regulatory requirements",
    text: "Documents that must meet strict compliance standards, such as government forms",
  },
  {
    Icon: IconBrand,
    title: "Brand overhauls",
    text: "Major changes to corporate identity requiring template redesigns",
  },
  {
    Icon: IconGlobe,
    title: "Cross-platform needs",
    text: "Templates that need to work across different versions or systems",
  },
  {
    Icon: IconPlug,
    title: "Integration requirements",
    text: "Templates that need to pull data from other systems",
  },
];

const faqs = [
  {
    q: "What is the difference between .dotx and .dotm?",
    a: "Both are Word template formats. A .dotx file holds formatting, styles and content, while a .dotm file is the macro-enabled version, so it can also carry macros and automation scripts.",
  },
  {
    q: "Where does Word save my templates?",
    a: "When you save a document as a template, Word places it in your default template location, typically Documents\\Custom Office Templates. These appear under the Personal tab when you choose File > New. Workgroup templates use the shared location set in Word’s options.",
  },
  {
    q: "Is it safe to change Normal.dotm?",
    a: "It is powerful but risky, because changes affect every new blank document. Most experts recommend creating separate templates for specific purposes, and if you do change Normal.dotm, keep a backup of the original.",
  },
  {
    q: "How many templates does an organisation need?",
    a: "It depends on how many document types you produce. A common approach is one template per document type, such as letters, reports and invoices, managed from a single shared location with clear names and versions.",
  },
  {
    q: "Do templates behave the same on every version of Word?",
    a: "Not always. Features such as macros and add-ins can differ between versions and platforms, which is why we recommend testing templates on the versions your people use before rolling them out.",
  },
];

const related = [
  {
    href: "/blog/word-templates-for-legal-firms",
    title: "Word templates for legal firms",
    text: "How templates support consistency and compliance in legal documents.",
  },
  {
    href: "/blog/fields-and-repeating-data-in-word",
    title: "Fields and repeating data in Word",
    text: "Stop retyping the same details across your documents.",
  },
  {
    href: "/blog/convert-canva-to-word",
    title: "Convert Canva to Word",
    text: "Turn a Canva design into an editable Word document.",
  },
];

/* ---------- helpers ---------- */

function Accent({ children }) {
  return <span className={styles.accent}>{children}</span>;
}

function Callout({ Icon, label, children }) {
  return (
    <div className={styles.callout}>
      <span className={styles.calloutChip}>
        <Icon />
      </span>
      <div>
        <p className={styles.calloutLabel}>{label}</p>
        <div className={styles.calloutText}>{children}</div>
      </div>
    </div>
  );
}

function Diagram({ children }) {
  return (
    <div className={styles.diagram}>
      <div className={styles.diagramScroll}>
        <div className={styles.diagramInner}>{children}</div>
      </div>
    </div>
  );
}

function PathChip({ children }) {
  return <code className={styles.pathChip}>{children}</code>;
}

/* ---------- page ---------- */

export default function UltimateGuideToWordTemplatesPage() {
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
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                What is a <Accent>Word Template?</Accent>
              </h1>
              <p className={styles.lede}>
                Benefits, types and implementation: everything you need to know
                about Microsoft Word templates, and how to choose the right one
                for your organisation.
              </p>
              <div className={styles.authorRow}>
                <span className={styles.avatar} aria-hidden="true">
                  <Image src={dan} alt={AUTHOR_NAME} width={38} height={38} />
                </span>
                <span>
                  By {AUTHOR_NAME}
                  <span className={styles.authorMeta}>
                    Updated {formatDate(DATE_MODIFIED)} · {READING_TIME}
                  </span>
                </span>
              </div>
            </div>
            <div className={styles.heroArt}>
              <HeroSvg />
            </div>
          </div>
        </header>

        {/* AT A GLANCE */}
        <section className={styles.glance} aria-label="At a glance">
          {glance.map((g) => (
            <div key={g.label} className={styles.glanceCard}>
              <span className={styles.glanceValue}>{g.value}</span>
              <span className={styles.glanceLabel}>{g.label}</span>
              <span className={styles.glanceLine}>{g.line}</span>
            </div>
          ))}
        </section>

        <div className={styles.layout}>
          <nav className={styles.toc} aria-label="Contents">
            <p className={styles.tocTitle}>In this guide</p>
            <ol>
              {contents.map((c) => (
                <li key={c.id}>
                  <a href={`#${c.id}`}>{c.label}</a>
                </li>
              ))}
            </ol>
          </nav>

          <article className={styles.article}>
            {/* INTRO */}
            <section className={styles.intro}>
              <p className={styles.kicker}>
                Benefits, Types, and Implementation
              </p>
              <h2 className={styles.h2}>
                The Ultimate Guide to <Accent>Microsoft Word Templates</Accent>
              </h2>
              <p className={styles.leadParagraph}>
                In today’s fast-paced business environment, efficiency and
                consistency are key to maintaining professional standards across
                your organisation. Microsoft Word templates offer a powerful
                solution for standardising documents while saving valuable time.
                In this comprehensive guide, we’ll explore what Word templates
                are, their benefits, and how to implement them effectively in
                your organisation.
              </p>
            </section>

            {/* WHAT */}
            <section id="what" className={styles.section}>
              <h2 className={styles.h2}>
                What Is a <Accent>Word Template?</Accent>
              </h2>
              <p>
                A Word template is essentially a blueprint for creating new
                documents with predefined formatting, styles, and content.
                Unlike regular documents, templates serve as master copies that
                determine the basic structure and appearance of any document
                created from them.
              </p>
              <p>
                Templates are saved with a specific file extension (.dotx or
                .dotm for macro-enabled templates) and often contain:
              </p>

              <div className={styles.anatomy}>
                <div className={styles.anatomyList}>
                  {contains.map((c, i) => {
                    const icons = [
                      IconLayout,
                      IconStyles,
                      IconText,
                      IconBrand,
                      IconToolbar,
                      IconMacro,
                    ];
                    const Icon = icons[i];
                    return (
                      <div key={c} className={styles.anatomyItem}>
                        <span className={styles.badge}>
                          <Icon />
                        </span>
                        <span>{c}</span>
                      </div>
                    );
                  })}
                </div>
                <Diagram>
                  <AnatomySvg />
                </Diagram>
              </div>

              <p>
                When you create a new document based on a template, Word makes a
                copy of that template, allowing you to add your specific content
                while maintaining the consistent structure defined by the
                template. Templates are crucial when dealing with large-scale
                document creation, as they save time and ensure consistency and{" "}
                <Link href="/services/microsoft-word/corporate-identity">
                  brand consistency
                </Link>
                .
              </p>
            </section>

            {/* BENEFITS */}
            <section id="benefits" className={styles.section}>
              <h2 className={styles.h2}>
                The Top 3 Benefits of <Accent>Using Word Templates</Accent>
              </h2>
              <div className={styles.ledger}>
                {benefits.map((b) => (
                  <div key={b.n} className={styles.ledgerRow}>
                    <div className={styles.ledgerSide}>
                      <span className={styles.bigNumber}>{b.n}</span>
                      <span className={styles.ledgerTag}>
                        <b.Icon />
                        {b.tag}
                      </span>
                    </div>
                    <div className={styles.ledgerBody}>
                      <h3>{b.title}</h3>
                      {b.paras.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                      {b.bullets && (
                        <ul className={styles.tickList}>
                          {b.bullets.map((t) => (
                            <li key={t}>
                              <IconCheck />
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {b.after && <p>{b.after}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* TYPES */}
            <section id="types" className={styles.section}>
              <h2 className={styles.h2}>
                Types of <Accent>Word Templates</Accent>
              </h2>
              <p>
                Microsoft Word recognises several different types of templates,
                each serving a specific purpose in document creation and
                management. Understanding these template types can help you
                implement the right solution for your organisation’s document
                needs.
              </p>

              <p className={styles.tableTitle}>The five types at a glance</p>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>When it loads</th>
                      <th>Best for</th>
                      <th>Typical users</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compareRows.map((r) => (
                      <tr key={r[0]}>
                        <th scope="row">{r[0]}</th>
                        <td>{r[1]}</td>
                        <td>{r[2]}</td>
                        <td>{r[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.dossiers}>
                {/* Normal.dotm */}
                <div className={styles.dossier}>
                  <div className={styles.dossierTab}>
                    <span className={styles.badge}>
                      <IconFolder />
                    </span>
                    <h3>Normal.dotm</h3>
                    <span className={styles.loads}>Loads on every start</span>
                  </div>
                  <div className={styles.dossierBody}>
                    <p>
                      This is the default template that loads automatically
                      whenever Word is opened. Any changes made to Normal.dotm
                      will affect all new blank documents created in Word,
                      making it a powerful but potentially risky template to
                      modify.
                    </p>
                    <p>
                      The Normal.dotm template contains default paragraph
                      styles, font selections, margin settings, and other
                      document formatting options that appear when you create a
                      new blank document. It’s stored in a specific location on
                      your computer, typically:
                    </p>
                    <PathChip>
                      C:\Users\[YourUsername]\AppData\Roaming\Microsoft\Templates
                    </PathChip>
                    <Callout Icon={IconWarning} label="Best practice">
                      <p>
                        Rather than modifying Normal.dotm directly, most experts
                        recommend creating separate templates for specific
                        purposes. If you do modify Normal.dotm, always keep a
                        backup of the original file.
                      </p>
                    </Callout>
                  </div>
                </div>

                {/* User */}
                <div className={styles.dossier}>
                  <div className={styles.dossierTab}>
                    <span className={styles.badge}>
                      <IconUser />
                    </span>
                    <h3>User Templates</h3>
                    <span className={styles.loads}>Loaded when needed</span>
                  </div>
                  <div className={styles.dossierBody}>
                    <p>
                      These are custom templates created or modified by users
                      for specific document types. They can be loaded manually
                      when needed and are typically stored in the User Templates
                      folder.
                    </p>
                    <p>
                      User templates are ideal for individual productivity
                      enhancement. For example, a consultant might create
                      several report templates with different designs, each
                      saved as a separate user template for easy access.
                    </p>
                    <p>
                      When you save a document as a template (.dotx or .dotm),
                      Word automatically places it in your default template
                      location:
                    </p>
                    <PathChip>
                      C:\Users\[YourUsername]\Documents\Custom Office Templates
                    </PathChip>
                    <p>
                      These templates will appear under the “Personal” tab when
                      you select File &gt; New in Word. User templates can
                      include custom styles, macros, AutoText entries, and
                      pre-defined content blocks.
                    </p>
                  </div>
                </div>

                {/* Workgroup */}
                <div className={styles.dossier}>
                  <div className={styles.dossierTab}>
                    <span className={styles.badge}>
                      <IconGroup />
                    </span>
                    <h3>Workgroup Templates</h3>
                    <span className={styles.loads}>Shared by a team</span>
                  </div>
                  <div className={styles.dossierBody}>
                    <p>
                      Similar to User Templates but designed to be shared across
                      a team or department. These are stored in a centralised
                      location accessible to all members of the workgroup.
                    </p>
                    <p>
                      Workgroup templates are essential for maintaining
                      consistency across teams. They’re typically stored on a
                      network share or in a collaboration platform like
                      SharePoint. The location is defined in Word’s options:
                    </p>
                    <ol className={styles.pathSteps}>
                      <li>
                        <span>1</span>
                        Go to File &gt; Options &gt; Advanced
                      </li>
                      <li>
                        <span>2</span>
                        Scroll down to General section
                      </li>
                      <li>
                        <span>3</span>
                        Click “File Locations”
                      </li>
                      <li>
                        <span>4</span>
                        Select “Workgroup templates” and modify the path
                      </li>
                    </ol>
                    <p className={styles.miniHeading}>
                      Benefits of Workgroup Templates
                    </p>
                    <ul className={styles.tickList}>
                      {[
                        "Ensures consistent branding across a team",
                        "Centralises template management",
                        "Simplifies template updates (changes only need to be made in one location)",
                        "Creates organised folder structure for different document categories",
                      ].map((t) => (
                        <li key={t}>
                          <IconCheck />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                    <p>
                      Each subfolder in the Workgroup Templates directory will
                      appear as a separate tab in the New Document dialog,
                      providing an organised system for template management.
                    </p>
                  </div>
                </div>

                {/* Global */}
                <div className={styles.dossier}>
                  <div className={styles.dossierTab}>
                    <span className={styles.badge}>
                      <IconGlobe />
                    </span>
                    <h3>Global Templates</h3>
                    <span className={styles.loads}>Loads from STARTUP</span>
                  </div>
                  <div className={styles.dossierBody}>
                    <p>
                      These templates load automatically whenever Word is opened
                      and must be saved in your startup folder. They’re
                      particularly useful for organisation-wide standards and
                      tools.
                    </p>
                    <p>
                      Unlike other templates, global templates don’t serve as
                      the basis for new documents. Instead, they provide
                      additional functionality that’s available to all
                      documents. Key characteristics include:
                    </p>
                    <ul className={styles.tickList}>
                      {[
                        "They load automatically when Word starts",
                        "They remain loaded in the background",
                        "They can contain macros, custom toolbars, and AutoText entries accessible to all documents",
                      ].map((t) => (
                        <li key={t}>
                          <IconCheck />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                    <p>
                      To create a global template, save a template file (.dotm)
                      to Word’s startup folder:
                    </p>
                    <PathChip>
                      C:\Users\[YourUsername]\AppData\Roaming\Microsoft\Word\STARTUP
                    </PathChip>
                    <p className={styles.miniHeading}>
                      Common Uses for Global Templates
                    </p>
                    <div className={styles.chips}>
                      {[
                        "Company-wide macros and automation tools",
                        "Custom ribbon interfaces with specialised commands",
                        "Standardised building blocks and quick parts",
                        "Custom proofing tools and autocorrect entries",
                      ].map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Add-in */}
                <div className={styles.dossier}>
                  <div className={styles.dossierTab}>
                    <span className={styles.badge}>
                      <IconPlug />
                    </span>
                    <h3>Add-in Templates</h3>
                    <span className={styles.loads}>Loaded like a global</span>
                  </div>
                  <div className={styles.dossierBody}>
                    <p>
                      These are specialised global templates designed to extend
                      Word’s functionality. They’re loaded automatically,
                      similar to global templates, but are specifically
                      developed as add-ins.
                    </p>
                    <p>
                      Add-in templates can significantly extend Word’s
                      capabilities through{" "}
                      <Link href="/services/microsoft-word/custom-toolbars-and-ribbons">
                        custom ribbons
                      </Link>
                      , task panes, and advanced functionality. Microsoft’s COM
                      add-in architecture allows developers to create
                      sophisticated tools that integrate seamlessly with Word.
                    </p>
                    <p>
                      Many third-party solutions leverage add-in templates to
                      provide specialised functionality for:
                    </p>
                    <div className={styles.chips}>
                      {[
                        "Legal document drafting",
                        "Medical reporting",
                        "Academic writing and citation management",
                        "Corporate compliance and document management",
                      ].map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* HIERARCHY */}
            <section id="hierarchy" className={styles.section}>
              <h2 className={styles.h2}>
                Template Hierarchy and <Accent>Conflict Resolution</Accent>
              </h2>
              <p>
                When multiple templates are loaded, Word follows a specific
                hierarchy to resolve conflicts (such as macros or styles with
                the same name):
              </p>
              <Diagram>
                <HierarchySvg />
              </Diagram>
              <ol className={styles.hierarchyList}>
                <li>
                  <strong>Document-specific elements</strong> - Any macros,
                  styles, or customisations stored directly in the document take
                  precedence
                </li>
                <li>
                  <strong>Attached template</strong> - Elements from the
                  template the document is based on
                </li>
                <li>
                  <strong>Normal.dotm</strong> - Default settings from the
                  Normal template
                </li>
                <li>
                  <strong>Global templates</strong> - Elements from any active
                  global templates (checked in alphabetical order)
                </li>
              </ol>
              <Callout Icon={IconSearch} label="Troubleshooting">
                <p>
                  Understanding this hierarchy is crucial when troubleshooting
                  template conflicts or when designing a comprehensive template
                  system for your organisation. If a style or macro behaves
                  unexpectedly, work down the list to find which level is
                  supplying it.
                </p>
              </Callout>
            </section>

            {/* CHOOSE */}
            <section id="choose" className={styles.section}>
              <h2 className={styles.h2}>
                Which Type Do <Accent>You Need?</Accent>
              </h2>
              <p>
                If you are not sure where to start, answer three questions. The
                flow below points you to the template type that usually fits. It
                is a rule of thumb, not a rulebook, and larger organisations
                often use several types together.
              </p>
              <Diagram>
                <DecisionSvg />
              </Diagram>
              <p>
                Most organisations that care about brand consistency end up with
                workgroup templates for everyday documents, a global or add-in
                template for shared tools, and a tightly controlled Normal.dotm.
              </p>
            </section>

            {/* USES */}
            <section id="uses" className={styles.section}>
              <h2 className={styles.h2}>
                Common Uses for <Accent>Word Templates</Accent>
              </h2>
              <p>
                The versatility of Word templates makes them applicable to
                virtually any type of document your organisation regularly
                produces:
              </p>
              <div className={styles.uses}>
                {useCases.map(({ Icon, label }) => (
                  <div key={label} className={styles.useTile}>
                    <span className={styles.badge}>
                      <Icon />
                    </span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* DIY */}
            <section id="diy" className={styles.section}>
              <h2 className={styles.h2}>
                Creating vs. <Accent>Professional Implementation</Accent>
              </h2>
              <p>
                While creating basic templates in Word is relatively
                straightforward, developing comprehensive template systems that
                fully leverage Word’s capabilities requires significant
                expertise. Consider these factors when deciding between DIY
                template creation and professional implementation:
              </p>
              <div className={styles.split}>
                <div className={styles.splitLight}>
                  <h3>DIY Template Creation</h3>
                  <ul className={styles.tickList}>
                    {diyItems.map((t) => (
                      <li key={t}>
                        <IconCheck />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.splitDark}>
                  <h3>Professional Template Development</h3>
                  <ul className={styles.tickList}>
                    {proItems.map((t) => (
                      <li key={t}>
                        <IconCheck />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p>
                Professional template developers bring expertise in not just
                Word’s capabilities but also in information architecture and
                business process optimisation. They can create templates that
                not only look professional but also streamline complex document
                workflows.
              </p>
            </section>

            {/* MANAGE */}
            <section id="manage" className={styles.section}>
              <h2 className={styles.h2}>
                Best Practices for <Accent>Template Management</Accent>
              </h2>
              <p>
                Whether you create templates yourself or work with
                professionals, proper management is essential. When working with
                multiple template types, consider these professional guidelines:
              </p>
              <ol className={styles.timeline}>
                {practices.map((p, i) => (
                  <li key={p.title}>
                    <span className={styles.step}>{i + 1}</span>
                    <div>
                      <h3>{p.title}</h3>
                      <p>{p.text}</p>
                      <p className={styles.proTip}>
                        <IconBulb />
                        <span>
                          <strong>Pro tip:</strong> {p.tip}
                        </span>
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* MISTAKES */}
            <section id="mistakes" className={styles.section}>
              <h2 className={styles.h2}>
                Common Template <Accent>Mistakes</Accent>
              </h2>
              <p>
                Most template problems come from a handful of habits. Here are
                the five we see most often, and what to do instead.
              </p>
              <div className={styles.mistakes}>
                {mistakes.map((m, i) => (
                  <div key={m.title} className={styles.mistakeCard}>
                    <span className={styles.outlineNumber}>{i + 1}</span>
                    <h3>{m.title}</h3>
                    <div className={styles.sketch}>
                      <m.Sketch />
                    </div>
                    <p className={styles.insteadRow}>
                      <span className={styles.insteadPill}>Instead</span>
                      {m.fix}
                    </p>
                  </div>
                ))}
              </div>

              <div className={styles.checklist}>
                <h3>Before you roll out a template</h3>
                <ul>
                  {checklist.map((t) => (
                    <li key={t}>
                      <IconCheck />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* HELP */}
            <section id="help" className={styles.section}>
              <div className={styles.ctaBand}>
                <h2 className={styles.h2}>
                  When to Consider{" "}
                  <Link href="/services/microsoft-word/corporate-global-template-solution">
                    <Accent>Professional Template Services</Accent>
                  </Link>
                </h2>
                <p>
                  While you may be able to create basic templates internally,
                  certain scenarios warrant bringing in professional expertise:
                </p>
                <div className={styles.helpGrid}>
                  {helpScenarios.map(({ Icon, title, text }) => (
                    <div key={title} className={styles.helpItem}>
                      <span className={styles.badgeDark}>
                        <Icon />
                      </span>
                      <div>
                        <strong>{title}</strong>
                        <span> - {text}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className={styles.ctaText}>
                  Need expert assistance developing custom Word templates for
                  your organisation? Our team specialises in creating
                  professional, automated templates that save time and ensure
                  consistency.
                </p>
                <Link href="/contact-us" className={styles.ctaButton}>
                  Contact our Word Template Experts
                  <IconArrow />
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className={styles.section}>
              <h2 className={styles.h2}>
                Frequently Asked <Accent>Questions</Accent>
              </h2>
              <div className={styles.faq}>
                {faqs.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* CONCLUSION */}
            <section id="conclusion" className={styles.section}>
              <h2 className={styles.h2}>
                <Accent>Conclusion</Accent>
              </h2>
              <p>
                Microsoft Word templates offer powerful capabilities for
                enhancing productivity, ensuring consistency, and maintaining
                quality across your organisational documents. While basic
                template creation is accessible to most users, maximising the
                full potential of Word’s template functionality often requires
                professional expertise.
              </p>
              <p>
                By implementing a thoughtful template strategy, whether
                developed internally or with professional assistance, your
                organisation can realise significant time savings while
                presenting a consistent, professional image in all
                communications.
              </p>

              <div className={styles.authorBox}>
                <span className={styles.avatarLarge} aria-hidden="true">
                  <Image src={dan} alt={AUTHOR_NAME} width={56} height={56} />
                </span>
                <div>
                  <p className={styles.authorName}>Written by {AUTHOR_NAME}</p>
                  <p>
                    Office Experts Group is an Australian Microsoft consultancy,
                    established in 2000, helping organisations get more from
                    Word and the rest of Microsoft Office.
                  </p>
                </div>
              </div>
            </section>

            {/* RELATED */}
            <section className={styles.section} aria-label="Related reading">
              <h2 className={styles.h2}>
                Keep <Accent>Reading</Accent>
              </h2>
              <div className={styles.related}>
                {related.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className={styles.relatedCard}
                  >
                    <strong>{r.title}</strong>
                    <span>{r.text}</span>
                    <IconArrow />
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
