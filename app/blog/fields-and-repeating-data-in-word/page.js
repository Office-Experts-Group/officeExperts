// /app/blog/fields-and-repeating-data-in-word/page.js
import Image from "next/image";
import Link from "next/link";

import Contact from "@/components/Contact";

import styles from "@/styles/fieldsAndRepeatingDataInWordBlog.module.scss";

import dan from "@/public/team/dan.webp";

import HeroSvg from "./(svgs)/HeroSvg";
import DecisionSvg from "./(svgs)/DecisionSvg";
import AnatomySvg from "./(svgs)/AnatomySvg";
import {
  RetypeSketch,
  BookmarkSketch,
  UpdateSketch,
  ComplexSketch,
  LockSketch,
} from "./(svgs)/Illustrations";
import {
  ClockIcon,
  ShieldIcon,
  LinkIcon,
  LayersIcon,
  CodeIcon,
  UsersIcon,
  CheckIcon,
  AlertIcon,
  BulbIcon,
  InfoIcon,
  ArrowIcon,
  FileIcon,
} from "./(svgs)/Icons";

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with layout.js.
const PAGE_URL =
  "https://www.officeexperts.com.au/blog/fields-and-repeating-data-in-word";
const PAGE_TITLE = "Fields and Repeating Data in Word | Office Experts";
const PAGE_DESCRIPTION =
  "Enter data once and repeat it everywhere in Word. Learn REF fields, bookmarks, document properties and content controls for reliable business templates.";
const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_HEADLINE =
  "Fields and Repeating Data in Word: Best Practices for Business Templates";
const BREADCRUMB_NAME = "Fields and Repeating Data in Word";
const AUTHOR_NAME = "Daniel Thomas";
const READING_TIME = "18 min";
const HERO_IMAGE_PATH = "/logo.png";
const HERO_IMAGE_ALT =
  "Diagram of one client name entered once and repeated in a header, body text and footer";
const DATE_PUBLISHED = "2025-07-24T09:00:00+10:00";
const DATE_MODIFIED = "2026-10-28T00:00:00+11:00";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Sydney",
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
      image: {
        "@type": "ImageObject",
        url: `${SITE_URL}${HERO_IMAGE_PATH}`,
        caption: HERO_IMAGE_ALT,
      },
      author: { "@type": "Person", name: AUTHOR_NAME },
      publisher: { "@id": `${SITE_URL}#organization` },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      mainEntityOfPage: { "@id": PAGE_URL },
      articleSection: "Word Templates",
      keywords: ["fields and repeating data in word"],
      inLanguage: "en-AU",
    },
  ],
};

const MACRO = `Sub UpdateAllFields()
    Dim rng As Range
    For Each rng In ActiveDocument.StoryRanges
        Do
            rng.Fields.Update
            Set rng = rng.NextStoryRange
        Loop Until rng Is Nothing
    Next rng
End Sub`;

const TOC = [
  ["intro", "Stop wasting time"],
  ["why", "Why it matters"],
  ["methods", "Core field types"],
  ["choose", "Which method to use"],
  ["build", "Step-by-step build"],
  ["recipes", "Best practice recipes"],
  ["roles", "Use cases by role"],
  ["mistakes", "Common pitfalls"],
  ["checklist", "Pre-share checklist"],
  ["impact", "Quantifying the impact"],
  ["rollout", "Implementation strategy"],
  ["help", "When to get help"],
  ["faq", "FAQ"],
  ["conclusion", "Conclusion"],
];

const GLANCE = [
  {
    value: "90%",
    label: "less manual typing",
    text: "Reported cut in data entry when templates reuse fields (Gitnux, FileCenter).",
  },
  {
    value: "$600bn",
    label: "lost to entry errors each year",
    text: "Estimated global cost in supply chain and procurement (Whale).",
  },
  {
    value: "30%",
    label: "of time spent searching",
    text: "Share of working time employees spend looking for documents (IDC).",
  },
];

const CHIPS = [
  "Client and employee names",
  "Contract and case numbers",
  "Dates of agreement",
  "Site addresses",
  "Project and equipment codes",
  "Quote totals",
];

const REASONS = [
  {
    Icon: ClockIcon,
    title: "Time back",
    text: "Enter a value once and every other occurrence follows. A contract with twenty repeats no longer needs twenty edits.",
  },
  {
    Icon: ShieldIcon,
    title: "Fewer errors",
    text: "No more mismatched names, dates or reference numbers between page one and the schedule at the back.",
  },
  {
    Icon: LinkIcon,
    title: "One source of truth",
    text: "The value lives in one place, so reviewers always know where a correction needs to be made.",
  },
  {
    Icon: UsersIcon,
    title: "Easier handover",
    text: "A new team member can complete a template without hunting for every occurrence of a client name.",
  },
];

const METHODS = [
  {
    Icon: LinkIcon,
    title: "REF Fields + Bookmarks",
    how: "Create a bookmark at the original data point (such as the client name), then insert REF fields anywhere you want that data repeated. When the original value changes and fields are updated, every linked REF field follows.",
    best: "Short documents with scattered repeats like names, case numbers or employee details. Bookmark the client’s name at the top of a contract and use REF to insert it in the header, footer and body text.",
    watch:
      "Deleting or renaming the bookmark breaks every field that points to it.",
  },
  {
    Icon: FileIcon,
    title: "Built-in Document Properties",
    how: "Insert standard properties like Author, Title and Company, which are stored as metadata in the file. Edit them from the Info section of the File menu and they update wherever they appear.",
    best: "Company-wide templates where the same metadata appears on multiple pages. Add a Company property once and have it show in the header, cover page and signature block. In some Office setups, Company may even populate from the organisation’s Office profile.",
    watch:
      "Only a fixed list of properties is available, and values are plain text.",
  },
  {
    Icon: LayersIcon,
    title: "Custom Document Properties",
    how: "Define your own named values (such as MatterNumber or Department) in Advanced Properties, then display them with a DocProperty field.",
    best: "Templates used by a team where you want named values that are not part of Word’s standard list, without touching bookmarks in the body.",
    watch:
      "Values live in file properties rather than in the body, so people need to know where to edit them.",
  },
  {
    Icon: CodeIcon,
    title: "Content Controls + Mapped XML",
    how: "Content controls are form-like elements (text boxes, dropdowns) that can be linked to a custom XML data structure in your document. This lets you reuse rich content in several locations, including tables and complex paragraphs.",
    best: "Advanced documents with structured data like quotes, reports or multipage forms. For example, an invoice where the client name, address and quote items populate from mapped XML nodes.",
    watch:
      "The most powerful option and the most complex. Setup uses the Developer tab and the XML Mapping Pane.",
  },
];

const COMPARE = [
  [
    "Bookmark + REF",
    "Short repeats in one document",
    "Beginner",
    "Text only",
    "At the bookmark",
    "Deleted bookmarks",
  ],
  [
    "Built-in properties",
    "Company, title, author",
    "Beginner",
    "Plain text",
    "File > Info",
    "Limited property list",
  ],
  [
    "Custom properties",
    "Named values across a team",
    "Intermediate",
    "Plain text",
    "Advanced Properties",
    "Hidden from view",
  ],
  [
    "Content controls + XML",
    "Quotes, reports, multipage forms",
    "Advanced",
    "Rich text and tables",
    "Any bound control",
    "Setup complexity",
  ],
];

const STEPS = [
  {
    title: "Step 1: Plan Your Variables",
    body: [
      "Before you open Word, list out the pieces of information that appear multiple times in your document. Typical examples include employee or client names, dates of agreement, case numbers or reference IDs, site addresses and company names. A useful tip is to highlight repeated text in an existing document to identify field candidates.",
      "Give each variable a short name you can type without thinking, such as ClientName, ContractDate or SiteAddress. Bookmark names must start with a letter and cannot contain spaces.",
    ],
    tip: "Print one finished document and circle every value that appears twice or more. That circled list is your variable list.",
  },
  {
    title: "Step 2: Insert a Bookmark + REF Field",
    body: [
      "Use this method when you want to repeat short pieces of text like names or IDs. Start by highlighting the original piece of text (such as the client name), then go to Insert > Bookmark and name it something meaningful like “ClientName”. Next, place your cursor where you want the repeated value and press Ctrl+F9 to insert field brackets. Type “REF ClientName” inside the brackets and press F9 to update the field.",
      "To update all fields at once throughout your document, press Ctrl+A to select all content, then F9 to refresh every field simultaneously. Press Alt+F9 to toggle between field codes and field results.",
    ],
    tip: "Select the bookmarked text without its trailing space or paragraph mark, so the repeated value does not carry stray line breaks. Insert > Cross-reference > Bookmark is a menu alternative to typing the code.",
  },
  {
    title: "Step 3: Use Document Properties",
    body: [
      "This method works well when the same metadata (like company name or document title) is reused throughout. Go to Insert > Quick Parts > Document Property and choose a property such as Company, Author or Title. Type your data once, and it will appear identically wherever you insert the same property.",
      "As a pro tip, you can edit these properties from File > Info > Properties > Advanced Properties for centralised control. The Custom tab in the same dialog lets you add your own named values, which you display with Insert > Quick Parts > Field > DocProperty.",
    ],
    tip: "Check the properties each time you save a template as a new document, so an old client’s details are not carried into the next one.",
  },
  {
    title: "Step 4: Use XML Mapping + Content Controls",
    body: [
      "This advanced method is ideal when you need to reuse rich content like addresses, tables or lists. First, enable the Developer tab through File > Options > Customise Ribbon. Then go to Developer > XML Mapping Pane and choose a custom XML part that holds your data structure. Right-click a node (such as ClientName) and choose Insert Content Control > Plain Text. You can repeat this anywhere in the document to link the same data point.",
      "As a bonus, you can create repeatable tables (like quote line items) using a repeating XML node and rich content controls.",
    ],
    tip: "Writing a custom XML part from scratch usually needs a small XML file or an add-in. For simple cases, the pane also lists Word’s built-in parts, so you can start without writing any XML.",
  },
  {
    title: "Step 5: Keep Fields Updated",
    body: [
      "Always ensure fields are refreshed before sharing the document by selecting all with Ctrl+A and pressing F9 to update fields globally. For teams, you can also automate this with a simple macro that runs ActiveDocument.Fields.Update. A fuller version is in the recipes below.",
    ],
    tip: "Fields in headers and footers can lag behind the body. Opening Print Preview (File > Print) typically refreshes them.",
  },
];

const RECIPES = [
  {
    title: "Refresh every field",
    steps: [
      "Press Ctrl+A to select the whole document.",
      "Press F9 to update the fields.",
      "Open Print Preview to refresh headers and footers.",
    ],
  },
  {
    title: "Name things clearly",
    steps: [
      "Use meaningful names such as ClientName, not bm1.",
      "Write names in CamelCase because spaces are not allowed.",
      "Record each name in a short template guide for your team.",
    ],
  },
  {
    title: "Lock the structure",
    steps: [
      "Open Review > Restrict Editing.",
      "Choose “Filling in forms” where it suits the template.",
      "Add short prompts like “Enter client name here”.",
    ],
  },
  {
    title: "Automate the refresh",
    steps: [
      "Save the template as macro-enabled (.dotm).",
      "Add the macro below and run it on open or before print.",
      "Confirm your IT team’s macro security settings allow it.",
    ],
    code: true,
  },
];

const ROLES = [
  {
    Icon: UsersIcon,
    title: "HR Teams: Onboarding Forms & Employment Letters",
    text: "New starter forms often require the employee’s name, start date, role and manager’s name repeated in various sections. Manually filling this in for each new hire is time-consuming and error-prone. The solution involves using Bookmarks + REF fields to enter the employee’s name and start date once, then reflecting it consistently in the header and footer, policy acknowledgment sections and approval pages. Document Properties like Author or Company ensure the HR team’s details are automatically filled in.",
    setup: [
      "Bookmark name and start date",
      "Company as a document property",
      "Lock the policy wording",
    ],
  },
  {
    Icon: ShieldIcon,
    title: "Legal Teams: Contracts & Agreements",
    text: "Legal documents must reflect precise names, contract numbers and dates throughout the text, footers and annexes. A mismatch, even in one instance, can create legal exposure. Setting up a REF-based system propagates client names and contract IDs throughout the document, while more structured documents can use Content Controls mapped to XML for multi-party agreements, auto-filled annex data and clause referencing.",
    setup: [
      "Bookmark parties and contract ID",
      "Refresh before every issue",
      "Map controls for annex data",
    ],
  },
  {
    Icon: FileIcon,
    title: "Admin & Finance Teams: Invoices & Quotations",
    text: "Each invoice or quote must include repeated data like customer names, addresses and line items, where copy-paste makes the process fragile. Using Content Controls + Mapped XML creates intelligent forms where client information appears in both the header and the summary, itemised tables generate from XML nodes, and total figures reflect across the document without duplication.",
    setup: [
      "Map customer details once",
      "Use a repeating node for line items",
      "Keep totals in one place",
    ],
  },
  {
    Icon: CheckIcon,
    title: "Operations Teams: Field Forms & Checklists",
    text: "Site inspection reports and maintenance logs often include repeating identifiers like equipment ID, project codes or site locations. Inserting document-level fields like Bookmarks or XML-mapped codes ensures the same identifier appears in the header and footer, table captions and final report summaries. This gives clear traceability, especially when forms are used across multiple departments or subcontractors.",
    setup: [
      "Bookmark equipment or site IDs",
      "Repeat in captions and footers",
      "Restrict editing to form fields",
    ],
  },
];

const MISTAKES = [
  {
    Sketch: RetypeSketch,
    title: "Retyping instead of linking",
    fix: "Enter the value once as a bookmark, property or control, and insert fields everywhere else. If you catch yourself typing a name twice, make it a variable.",
  },
  {
    Sketch: BookmarkSketch,
    title: "Broken Links (Deleted Bookmarks)",
    fix: "If you delete or rename a bookmark that a REF field relies on, the field breaks and displays an error. Edit bookmarked text in place instead, use Restrict Editing to prevent accidental deletion, and name bookmarks clearly (ClientName, not bm1).",
  },
  {
    Sketch: UpdateSketch,
    title: "Unupdated Fields",
    fix: "Word doesn’t always auto-refresh fields, especially when printing or saving. Use Ctrl+A then F9 before sharing, printing or exporting. You can add a macro to automate this, and turn on the option to update fields before printing under File > Options > Display.",
  },
  {
    Sketch: ComplexSketch,
    title: "Overcomplication (Too Much XML)",
    fix: "Mapped XML is powerful but can overwhelm users unfamiliar with the Developer tab or custom schemas. Use it only for advanced templates like quotes, reports or forms with structured data. For basic needs, stick with bookmarks and document properties, because simplicity often scales better in shared documents.",
  },
  {
    Sketch: LockSketch,
    title: "User Errors (Field Tampering)",
    fix: "Fields and bookmarks can be overwritten or deleted by team members unaware of how they work. Use Restrict Editing with form-filling mode to lock down layout and prevent structural changes, and add short prompts such as “Enter client name here.”",
  },
];

const CHECKLIST = [
  "Every repeated value has one source: a bookmark, property or control.",
  "Bookmarks have clear names and none have been deleted.",
  "Ctrl+A then F9 has been run with no “Error! Reference source not found”.",
  "Headers and footers have been checked in Print Preview.",
  "Field codes are toggled back to results (Alt+F9).",
  "Document properties are reviewed so no old client details remain.",
  "Tracked changes and comments are resolved.",
  "Editing restrictions are on for the template where they are used.",
  "Paper size is A4 and the proofing language is English (Australia).",
  "The file is saved under a new name, not over the template.",
];

const ROLLOUT = [
  {
    title: "Audit Existing Templates",
    text: "Start by identifying which documents are reused frequently and contain repeated information. Common candidates include employment contracts, offer letters, service agreements, invoices, procurement forms and policy sign-off sheets. Look for documents where the same name, date, ID or contact information appears more than once. These are prime automation targets.",
  },
  {
    title: "Build a Prototype",
    text: "Choose one high-usage template and convert it using Bookmarks + REF fields or Document Properties. Test it internally with sample data, use Ctrl+A then F9 to check all fields update, and lock non-editable sections to preserve structure. This becomes your template “proof of concept.”",
  },
  {
    title: "Train Your Team",
    text: "Even the best templates fall short if staff don’t know how to use them. A short 30-minute workshop or how-to guide should cover how to enter data once and update fields, why not to delete bookmarks, when to use Quick Parts versus Content Controls, and the Ctrl+A then F9 refresh step. As a bonus, include a macro to auto-update fields on open.",
  },
  {
    title: "Establish Governance",
    text: "Set up version control so templates don’t drift or become outdated. Store official templates in a shared folder or intranet, apply read-only permissions for end users, assign a “template owner” per department, and schedule quarterly reviews. This avoids duplicate or inconsistent documents spreading across teams.",
  },
  {
    title: "Scale Across Departments",
    text: "Once you’ve proven success in one area, expand the approach. HR can roll out automated onboarding documents, Legal can deploy standardised NDAs and contracts, Operations can use structured field forms, and Finance can template quotes and invoices with repeating line items. Each team gains time back, reduces risk and improves delivery quality.",
  },
];

const FAQS = [
  {
    q: "What is the difference between a bookmark and a field?",
    a: "A bookmark marks a piece of content so it can be referred to. A field is an instruction that displays something, such as the content of a bookmark. A REF field is the field that pulls a bookmark’s content into another place.",
  },
  {
    q: "Why does my REF field show “Error! Reference source not found”?",
    a: "The bookmark the field points to has been deleted, renamed or mistyped. Check the name in the field code (Alt+F9) against Insert > Bookmark, recreate the bookmark if needed, then press F9.",
  },
  {
    q: "Can I use these fields in headers and footers?",
    a: "Yes. REF and DocProperty fields work in headers and footers. They can lag behind the body, so open Print Preview or update them before you share the document.",
  },
  {
    q: "Do these techniques work on every version of Word?",
    a: "Bookmarks, REF fields and document properties have been part of desktop Word for a long time. Developer tab features such as XML mapping vary between versions and platforms, and Word for the web has more limited support for editing fields, so test your template on the versions your team uses.",
  },
  {
    q: "When should I use mail merge instead?",
    a: "Mail merge suits one template filled from a list of many records, such as letters to a hundred clients. Fields suit one document where the same few values repeat. Many teams use both.",
  },
];

const RELATED = [
  {
    href: "/services/microsoft-word/remove-repetition-and-increase-productivity",
    title: "Remove repetition and increase productivity",
    text: "How we cut repeated typing out of Word documents.",
  },
  {
    href: "/services/microsoft-word/fill-in-forms",
    title: "Fill-in forms",
    text: "Forms that guide people through completing a document.",
  },
  {
    href: "/services/microsoft-word/quick-parts",
    title: "Quick Parts",
    text: "Reusable building blocks for faster documents.",
  },
  {
    href: "/blog/convert-canva-to-word",
    title: "Convert Canva to Word",
    text: "Turn a Canva design into an editable Word template.",
  },
];

const Callout = ({ Icon, label, children }) => (
  <div className={styles.callout}>
    <span className={styles.calloutRings} aria-hidden="true" />
    <span className={styles.calloutIcon}>
      <Icon />
    </span>
    <div className={styles.calloutBody}>
      <p className={styles.calloutLabel}>{label}</p>
      <p className={styles.calloutText}>{children}</p>
    </div>
  </div>
);

const Heading = ({ lead, accent }) => (
  <h2>
    {lead ? `${lead} ` : ""}
    <span className={styles.accent}>{accent}</span>
  </h2>
);

const FieldsAndRepeatingDataPage = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <h1 className={styles.title}>
              Fields and Repeating Data in Word:{" "}
              <span className={styles.accent}>
                Best Practices for Business Templates
              </span>
            </h1>
            <p className={styles.lede}>
              Enter a name, date or reference once and have it appear everywhere
              it belongs. Here is how to choose the right field type, build it,
              and keep it reliable.
            </p>
            <div className={styles.authorRow}>
              <span className={styles.avatar} aria-hidden="true">
                <Image src={dan} alt={AUTHOR_NAME} width={38} height={38} />
              </span>
              <div className={styles.authorMeta}>
                <span className={styles.authorName}>By {AUTHOR_NAME}</span>
                <span className={styles.authorSub}>
                  Updated {formatDate(DATE_MODIFIED)} · {READING_TIME} read
                </span>
              </div>
            </div>
          </div>
          <div className={styles.heroArt}>
            <HeroSvg />
          </div>
        </div>
      </header>

      <div className={styles.glance}>
        {GLANCE.map((g) => (
          <div key={g.label} className={styles.glanceCard}>
            <span className={styles.glanceValue}>{g.value}</span>
            <span className={styles.glanceLabel}>{g.label}</span>
            <p className={styles.glanceText}>{g.text}</p>
          </div>
        ))}
      </div>

      <div className={styles.layout}>
        <nav className={styles.toc} aria-label="Contents">
          <p className={styles.tocTitle}>Contents</p>
          <ol className={styles.tocList}>
            {TOC.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <article className={styles.article}>
          <section id="intro" className={styles.section}>
            <Heading lead="Stop Wasting Time on" accent="Copy-Paste Chaos" />
            <p>
              Every week, business professionals waste hours copying the same
              names, dates and client details into contracts, HR forms, invoices
              and reports. This tedious process isn’t just time-consuming, it’s
              genuinely risky. A single copy-paste mistake in a legal agreement
              or procurement document can snowball into costly errors,
              especially in high-stakes workflows. According to a report by
              Whale, data entry errors in supply chain and procurement cost
              businesses over <strong>$600 billion globally each year</strong>.
            </p>
            <p>
              The good news is that Microsoft Word has the tools to fix this.
              When used correctly, fields in Word transform static templates
              into smart, self-updating documents that do the heavy lifting for
              you. We’ll walk you through how to build reliable, reusable
              templates using Word’s fields, from quick wins like REF fields and
              document properties to advanced features like XML mapping and
              content controls.
            </p>
            <p>
              This guide covers what each field type does, how to choose between
              them, a step-by-step build for each, the mistakes that break
              templates, and how to roll the approach out across a team. By the
              end you will know which method fits each of your templates and how
              to keep it working.
            </p>
            <Callout Icon={BulbIcon} label="Short on time?">
              Bookmark the value once, insert a REF field wherever it repeats,
              then press Ctrl+A and F9 before you send. That single habit
              removes most copy-paste errors.
            </Callout>
          </section>

          <section id="why" className={styles.section}>
            <Heading
              lead="Why Repeating Data Fields Matter in"
              accent="Business Templates"
            />
            <p>
              Repetition is built into the nature of organisations. Business
              templates reuse employee names, client addresses, contract
              numbers, dates and countless other details. While these elements
              are essential, the way they’re typically handled is often far from
              efficient. Manually entering the same information in multiple
              places not only consumes valuable time, and hence money, but most
              importantly opens the door to inconsistencies and costly errors.
            </p>
            <p>
              According to IDC research, employees spend nearly{" "}
              <strong>30% of their time simply searching for documents</strong>.
              When you combine this with the manual re-entry of data across
              forms, contracts and reports, the inefficiency quickly compounds.
            </p>
            <p>
              The risks extend far beyond mere appearance issues. A Whale
              industry report found that{" "}
              <strong>
                data entry errors in supply chain and procurement operations
                cost businesses over $600 billion each year
              </strong>
              . This staggering figure highlights how something as seemingly
              small as inconsistent document data can cascade into larger
              operational failures.
            </p>
            <p>
              Repeating data fields offer a simple, scalable solution to these
              challenges. By using Word’s built-in tools like bookmarks, REF
              fields, document properties and content controls, you only need to
              enter critical data once, and it updates dynamically throughout
              the document. This approach{" "}
              <Link href="/services/microsoft-word/remove-repetition-and-increase-productivity">
                reduces task repetition
              </Link>{" "}
              and virtually eliminates accidental inconsistencies, and the
              unfortunately inevitable mistakes that come with being a mere
              mortal.
            </p>
            <div className={styles.reasons}>
              {REASONS.map(({ Icon, title, text }) => (
                <div key={title} className={styles.reasonCard}>
                  <span className={styles.badge}>
                    <Icon />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <h3>What counts as repeating data?</h3>
            <p>
              Anything that appears more than once and has to stay identical.
              The usual suspects are:
            </p>
            <ul className={styles.chips}>
              {CHIPS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>

          <section id="methods" className={styles.section}>
            <Heading lead="Core Field Types for" accent="Repeated Data" />
            <p>
              Word provides several built-in tools to automate and repeat data
              accurately throughout a document. Each offers a different balance
              of simplicity, flexibility and control, making them suitable for
              different levels of user expertise and document complexity.
            </p>
            <div className={styles.methods}>
              {METHODS.map(({ Icon, title, how, best, watch }) => (
                <div key={title} className={styles.methodCard}>
                  <div className={styles.methodHead}>
                    <span className={styles.badge}>
                      <Icon />
                    </span>
                    <h3>{title}</h3>
                  </div>
                  <dl className={styles.methodMeta}>
                    <dt>How it works</dt>
                    <dd>{how}</dd>
                    <dt>Best for</dt>
                    <dd>{best}</dd>
                    <dt>Watch out</dt>
                    <dd>{watch}</dd>
                  </dl>
                </div>
              ))}
            </div>
            <Callout Icon={InfoIcon} label="Quick comparison">
              Each method trades off between ease, flexibility and power. Choose
              the simplest one that meets your template needs: REF + Bookmark
              for basic repetition, Document Properties for metadata
              consistency, and Content Controls + XML for complex structured
              documents.
            </Callout>
          </section>

          <section id="choose" className={styles.section}>
            <Heading lead="Which Method" accent="Should You Use?" />
            <p>
              Start with the simplest method that does the job. You can move a
              template to a more powerful method later, but you cannot easily
              untangle one that was over-built on day one.
            </p>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>Best for</th>
                    <th>Skill level</th>
                    <th>Content</th>
                    <th>Edited at</th>
                    <th>Main risk</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, i) =>
                        i === 0 ? (
                          <th key={cell} scope="row">
                            {cell}
                          </th>
                        ) : (
                          <td key={cell}>{cell}</td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={styles.diagram}>
              <div className={styles.diagramScroll}>
                <div className={styles.diagramInner}>
                  <DecisionSvg />
                </div>
              </div>
            </div>
            <p className={styles.caption}>
              Answer from the top. The first yes decides your method.
            </p>
          </section>

          <section id="build" className={styles.section}>
            <Heading
              lead="Step-by-Step:"
              accent="Building Repeating Fields in Templates"
            />
            <p>
              Whether you’re building a simple HR form or a multi-page contract,
              setting up repeating fields properly is the foundation of a
              reliable, time-saving Word template. The following steps will
              guide you through each method.
            </p>
            <ol className={styles.timeline}>
              {STEPS.map((s, i) => (
                <li key={s.title} className={styles.step}>
                  <span className={styles.stepNum} aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3>{s.title}</h3>
                  {s.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  <p className={styles.tip}>
                    <strong>Pro tip:</strong> {s.tip}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section id="recipes" className={styles.section}>
            <Heading
              lead="Best Practice Recipes for"
              accent="Reliable Fields"
            />
            <p>
              Most field problems come down to naming, updating and protecting.
              The diagram shows what a single REF field is made of, and the
              recipes below turn the good habits into repeatable steps.
            </p>
            <div className={styles.diagram}>
              <div className={styles.diagramScroll}>
                <div className={styles.diagramInner}>
                  <AnatomySvg />
                </div>
              </div>
            </div>
            <div className={styles.walk}>
              {RECIPES.map((r, i) => (
                <div key={r.title} className={styles.walkCard}>
                  <h3>
                    <span className={styles.walkNum}>{i + 1}</span> {r.title}
                  </h3>
                  <ol className={styles.miniSteps}>
                    {r.steps.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ol>
                  {r.code && <pre className={styles.code}>{MACRO}</pre>}
                </div>
              ))}
            </div>
            <Callout Icon={AlertIcon} label="Test before you rely on it">
              Run the macro on a copy first and confirm it behaves with your own
              headers, footers and sections.
            </Callout>
          </section>

          <section id="roles" className={styles.section}>
            <Heading lead="Real-World Use Cases" accent="by Role" />
            <p>
              The true power of repeating fields becomes obvious when applied to
              real business scenarios. Here’s how teams across departments can
              save hours and reduce costly mistakes by using smart templates.
            </p>
            <div className={styles.roles}>
              {ROLES.map(({ Icon, title, text, setup }) => (
                <div key={title} className={styles.roleCard}>
                  <span className={styles.badge}>
                    <Icon />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <ul className={styles.tickList}>
                    {setup.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Callout Icon={CheckIcon} label="Efficiency fact">
              According to Gitnux and FileCenter, automation using reusable
              fields can result in a 90% reduction in manual data entry.
            </Callout>
          </section>

          <section id="mistakes" className={styles.section}>
            <Heading lead="Common Pitfalls &amp;" accent="How to Avoid Them" />
            <p>
              Even with the best intentions, many teams struggle with Word’s
              field tools, not because the tools are flawed, but because of a
              few avoidable missteps. Here’s how to protect your templates and
              avoid the headaches that come from broken or misused fields.
            </p>
            <div className={styles.mistakes}>
              {MISTAKES.map(({ Sketch, title, fix }, i) => (
                <div key={title} className={styles.mistakeCard}>
                  <span className={styles.mistakeNum} aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3>{title}</h3>
                  <div className={styles.sketch}>
                    <Sketch />
                  </div>
                  <span className={styles.insteadPill}>Instead</span>
                  <p>{fix}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="checklist" className={styles.section}>
            <Heading lead="Pre-Share" accent="Checklist" />
            <p>
              Run through this list before a document leaves your hands. It
              takes two minutes and catches almost everything.
            </p>
            <ul className={styles.checklist}>
              {CHECKLIST.map((c) => (
                <li key={c}>
                  <span className={styles.checkChip} aria-hidden="true">
                    <CheckIcon />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </section>

          <section id="impact" className={styles.section}>
            <Heading lead="Quantifying" accent="the Impact" />
            <p>
              Implementing reusable fields isn’t just a nice-to-have, it
              delivers measurable gains in speed, accuracy and efficiency.
              According to studies published by Gitnux and FileCenter,
              automating data entry with fields can cut manual typing by up to{" "}
              <strong>90%</strong>.
            </p>
            <p>
              Using fields instead of copy-paste not only saves time, it
              prevents mistakes. From mismatched names to forgotten updates,
              traditional document editing is error-prone. Research shows that
              automation tools like field references reduce these errors by over{" "}
              <strong>70%</strong>.
            </p>
            <p>
              A case study featured on Edocgen found that organisations
              implementing automated templates saw a{" "}
              <strong>36% increase in employee productivity</strong>, thanks to
              faster turnarounds and fewer document revisions. By automating
              document creation and reducing back-and-forth edits, companies
              also saw a <strong>20-30% drop in overhead costs</strong>,
              particularly in admin-heavy processes like procurement, HR and
              compliance reporting.
            </p>
            <Callout Icon={InfoIcon} label="Read the numbers with care">
              These figures come from vendor and industry sources and are best
              treated as indicative. Time a few of your own documents before and
              after, and you will have a number your leadership team can trust.
            </Callout>
            <blockquote className={styles.quote}>
              <p>
                Repeating text fields are one of those underappreciated gems,
                bridging convenience and precision.
              </p>
              <cite>techcommunity.microsoft.com</cite>
            </blockquote>
          </section>

          <section id="rollout" className={styles.section}>
            <Heading
              lead="Implementation Strategy for"
              accent="Business Teams"
            />
            <p>
              Knowing the benefits is one thing. Putting them into practice
              across your business is where the real transformation happens.
              Whether you’re an HR manager, legal assistant or IT lead, these
              steps will guide your team from clunky documents to clean,
              automated templates.
            </p>
            <div className={styles.rollout}>
              {ROLLOUT.map((r, i) => (
                <div key={r.title} className={styles.rolloutCard}>
                  <span className={styles.rolloutNum} aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3>
                    Step {i + 1}: {r.title}
                  </h3>
                  <p>{r.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="help" className={styles.section}>
            <div className={styles.cta}>
              <span className={styles.calloutRings} aria-hidden="true" />
              <div className={styles.ctaText}>
                <h2>
                  Want templates that{" "}
                  <span className={styles.accent}>just work?</span>
                </h2>
                <p>
                  Office Experts Group is an Australian Microsoft consultancy
                  established in 2000. We build and fix Word templates so your
                  team enters data once and gets accurate documents every time.
                </p>
              </div>
              <div className={styles.ctaActions}>
                <Link
                  href="/services/microsoft-word/word-document-template-creation"
                  className={styles.btnPrimary}
                >
                  Word template services <ArrowIcon />
                </Link>
                <a href="#contact" className={styles.btnGhost}>
                  Ask us a question
                </a>
              </div>
            </div>
          </section>

          <section id="faq" className={styles.section}>
            <Heading lead="Frequently Asked" accent="Questions" />
            <div className={styles.faq}>
              {FAQS.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="conclusion" className={styles.section}>
            <Heading lead="Conclusion &amp;" accent="Next Steps" />
            <p>
              In today’s business environment, efficiency isn’t a luxury, it’s a
              necessity. Every time a document is manually updated or
              duplicated, there’s an opportunity for error, delay or
              inconsistency. Fortunately, Microsoft Word offers tools that, when
              used well, can eliminate these friction points entirely.
            </p>
            <p>
              Fields and repeating data techniques transform ordinary templates
              into smart, scalable systems. Whether it’s REF fields linking key
              information across a contract or mapped content controls
              automating complex tables, these tools bring a new level of
              control to everyday document creation.
            </p>
            <p>
              Across HR, legal, operations and finance, adopting best practices
              in template design not only reduces manual work, but also fosters
              confidence in every document your business produces. With fewer
              mistakes, cleaner handoffs and faster turnaround times, teams can
              spend less time correcting and more time creating.
            </p>
            <p>
              Ultimately, the strength of a business often shows in the quality
              of its paperwork. When that paperwork is accurate, consistent and
              effortlessly maintained, it signals a culture of professionalism
              and precision. Fields might be small features, but their impact is
              anything but.
            </p>
            <div className={styles.authorBox}>
              <span className={styles.avatarLarge} aria-hidden="true">
                <Image src={dan} alt={AUTHOR_NAME} width={56} height={56} />
              </span>
              <div>
                <h4>About the Author</h4>
                <p>
                  {AUTHOR_NAME} is a developer at Office Experts Group, an
                  Australian Microsoft consultancy established in 2000. He is
                  curious about programming, design and SEO. If you have any
                  questions, please get in contact via the form below.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <Heading lead="Related" accent="Reading" />
            <div className={styles.related}>
              {RELATED.map((r) => (
                <Link key={r.href} href={r.href} className={styles.relatedCard}>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                  <span className={styles.relatedMore}>
                    Read more <ArrowIcon />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </div>
    </div>
    <div id="contact">
      <Contact />
    </div>
  </>
);

export default FieldsAndRepeatingDataPage;
