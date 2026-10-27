// /app/blog/pdf-to-word-conversion/page.js
import Image from "next/image";
import Link from "next/link";

import Contact from "@/components/Contact";
import styles from "@/styles/pdfToWordBlog.module.scss";
import aleisha from "@/public/team/aleisha.webp";

import HeroSvg from "./(svgs)/HeroSvg";
import LayoutModelSvg from "./(svgs)/LayoutModelSvg";
import DecisionSvg from "./(svgs)/DecisionSvg";
import AnatomySvg from "./(svgs)/AnatomySvg";
import {
  UploadSketch,
  ScanSketch,
  SpacingSketch,
  CheckSketch,
  SourceSketch,
} from "./(svgs)/ConversionIllustrations";
import { Icons } from "./(svgs)/Icons";

const PAGE_URL = "https://www.officeexperts.com.au/blog/pdf-to-word-conversion";
const PAGE_TITLE = "PDF to Word Conversion for Business | Office Experts";
const PAGE_DESCRIPTION =
  "Discover why professional PDF to Word conversion matters for business. Learn about accuracy, security, and formatting that free converters can’t deliver.";

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_HEADLINE = "PDF to Word Conversion That Works for Business";
const PAGE_ALT_HEADLINE =
  "Why Professional PDF to Word Conversion Matters More Than You Think";
const BREADCRUMB_NAME = "PDF to Word Conversion";
const AUTHOR_NAME = "Aleisha Robinson";
const READING_TIME = 16; // minutes, visible words / ~238
const WORD_COUNT = 3800; // visible words, approximate
const HERO_IMAGE_PATH = "/logo.png"; // confirm: swap for a real hero image if you add one
const HERO_IMAGE_ALT = "Office Experts logo";
const DATE_PUBLISHED = "2025-10-03T09:00:00+10:00";
const DATE_MODIFIED = "2026-10-28T00:00:00+11:00"; // set by hand when content really changes

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-AU", {
    timeZone: "Australia/Sydney",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const UPDATED_LABEL = formatDate(DATE_MODIFIED);

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
      alternativeHeadline: PAGE_ALT_HEADLINE,
      description: PAGE_DESCRIPTION,
      image: `${SITE_URL}${HERO_IMAGE_PATH}`,
      author: { "@type": "Person", name: AUTHOR_NAME },
      publisher: { "@id": `${SITE_URL}#organization` },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: "Document Conversion",
      wordCount: WORD_COUNT,
      timeRequired: `PT${READING_TIME}M`,
      keywords: ["PDF to Word conversion", "PDF to Word for business"],
      inLanguage: "en-AU",
    },
  ],
};

/* ---------- Data ---------- */

const GLANCE = [
  {
    value: "4",
    label: "What businesses need",
    text: "Accuracy, consistency, editability and security, every time.",
  },
  {
    value: "5",
    label: "Common failure points",
    text: "Text, tables, fonts, columns and images are where free tools slip.",
  },
  {
    value: "9",
    label: "Signs you need a professional",
    text: "A short checklist to decide if a free tool is enough.",
  },
];

const TOC = [
  { id: "intro", label: "Why it is harder than it looks" },
  { id: "needs", label: "What businesses really need" },
  { id: "problems", label: "Problems with free converters" },
  { id: "choose", label: "When a professional makes sense" },
  { id: "process", label: "How a professional conversion works" },
  { id: "advantage", label: "The professional advantage" },
  { id: "scenarios", label: "Business scenarios" },
  { id: "mistakes", label: "Risks of cutting corners" },
  { id: "faq", label: "FAQs" },
  { id: "conclusion", label: "In conclusion" },
];

const REASONS = [
  {
    icon: Icons.target,
    title: "Accuracy",
    text: "No broken layouts, missing text, or scrambled tables. Every element should transfer correctly and maintain its intended structure. A professional checks the result against the PDF page by page.",
  },
  {
    icon: Icons.palette,
    title: "Consistency",
    text: "Every document looks polished and on-brand, with fonts, colours, and formatting preserved exactly as intended, from the first page to the last.",
  },
  {
    icon: Icons.pencil,
    title: "Editability",
    text: "Files are easy to work with and modify, not just “unlocked” but properly structured for professional editing, so the next person can change a figure without breaking the page.",
  },
  {
    icon: Icons.lock,
    title: "Security",
    text: "Confidential documents are handled with care, privacy, and compliance with data protection regulations, and never left on a server you cannot identify.",
  },
];

const QUICK_TESTS = [
  "Accuracy test: print both versions and flip between them. Page breaks, totals and numbering should match.",
  "Consistency test: click a heading and check it uses a real Heading style rather than manual bold text.",
  "Editability test: add a sentence mid-paragraph and a row to a table. The layout should hold.",
  "Security test: ask where the file went, who could see it, and whether it was deleted afterwards.",
];

const FAILURES = [
  {
    icon: Icons.columns,
    title: "Text misalignment",
    text: "Paragraphs that were perfectly aligned in the PDF appear jumbled or incorrectly spaced",
  },
  {
    icon: Icons.table,
    title: "Broken tables",
    text: "Complex tables lose their structure, with cells merging incorrectly or borders disappearing",
  },
  {
    icon: Icons.type,
    title: "Font substitution",
    text: "Original fonts are replaced with default alternatives, changing the document’s appearance",
  },
  {
    icon: Icons.layers,
    title: "Column collapse",
    text: "Multi-column layouts become single columns or overlap unexpectedly",
  },
  {
    icon: Icons.image,
    title: "Image displacement",
    text: "Pictures and graphics move to incorrect positions or lose their relationship with surrounding text",
  },
];

const SCAN_ISSUES = [
  {
    icon: Icons.scan,
    title: "No OCR capability",
    text: "The output remains as images, making the text completely uneditable",
  },
  {
    icon: Icons.search,
    title: "Poor OCR quality",
    text: "Basic optical character recognition produces text riddled with errors, missing characters, or incorrect formatting",
  },
  {
    icon: Icons.type,
    title: "Font embedding issues",
    text: "Poorly embedded or missing fonts result in character substitution or gaps in the text",
  },
];

const SECURITY_ISSUES = [
  {
    icon: Icons.clock,
    title: "Unclear data retention",
    text: "How long does the service keep your files? Are they truly deleted after conversion?",
  },
  {
    icon: Icons.file,
    title: "Server location",
    text: "Where are your documents stored during processing? Different countries have different data protection laws",
  },
  {
    icon: Icons.users,
    title: "Third-party access",
    text: "Who else might have access to your uploaded documents?",
  },
  {
    icon: Icons.warning,
    title: "Malware and phishing risks",
    text: "Some free services may expose users to security threats",
  },
  {
    icon: Icons.scale,
    title: "Regulatory compliance",
    text: "Industries with strict data handling requirements (healthcare, legal, finance) may violate regulations by using unsecured conversion services",
  },
];

const QUOTES = {
  smallpdf: {
    text: "“Common frustrations with converting from PDF to Word include misaligned text, broken layouts, unsupported fonts, and tables/columns not transferring properly.”",
    source: "Smallpdf",
    href: "https://smallpdf.com",
  },
  docflyLayout: {
    text: "“PDFs often use absolute positioning (like fixed placements of text, images, etc.), which is very different from the flowing layout model that Word uses. That difference is what causes many formatting discrepancies post-conversion.”",
    source: "DocFly",
    href: "https://docfly.com",
  },
  updf: {
    text: "“If a PDF is scanned (i.e. image-only text) or uses poorly embedded fonts, conversion tools often cannot render the text as editable; instead, the output may just be images or suffer from missing characters.”",
    source: "UPDF",
    href: "https://updf.com",
  },
  dev: {
    text: "“Free online converters can introduce risks when uploading confidential or sensitive data. Legal, compliance, and data-retention issues arise when using services whose privacy policies are vague or insufficient.”",
    source: "DEV Community",
    href: "https://dev.to",
  },
  cyber: {
    text: "“Online PDF editors and converters can pose security risks including malware, phishing, and other threats when uploading documents to third-party services.”",
    source: "Cyber Security News",
    href: "https://cybersecuritynews.com",
  },
  docflyErrors: {
    text: "“Even good tools can introduce small errors—maybe a misplaced line or a substituted font—that can accumulate, especially in long documents. What seems minor (a font change, an odd spacing) can affect professionalism.”",
    source: "DocFly",
    href: "https://docfly.com",
  },
  rsweb: {
    text: "“Many users expect the converted document to look exactly like the PDF, but in practice the difference in formatting engines (fixed layouts in PDFs vs flowing, editable layout in Word) often means imperfections are inevitable.”",
    source: "RS Web Solutions",
    href: "https://rswebsols.com",
  },
};

const SIGNS = [
  "The document contains sensitive or confidential information",
  "Accuracy and brand consistency are critical to your business",
  "Complex formatting, tables, or graphics need to be preserved",
  "You need a reusable template, not just a one-off conversion",
  "The document will be used for client-facing or regulatory purposes",
  "You’re converting multiple documents and need consistent results",
  "Previous conversion attempts have failed or produced poor results",
  "The PDF contains scanned content requiring high-quality OCR",
  "You need the conversion completed securely without uploading to third-party services",
];

const ROUTES = [
  {
    route: "Free online converter",
    best: "Simple, text-only files that are not sensitive",
    watch: "Layout drift, weak OCR, unclear data handling, file size limits",
    control: "None. One click, take what you get",
  },
  {
    route: "Word’s built-in PDF open",
    best: "Mostly text documents that you only need to reuse in part",
    watch:
      "Results vary with how the PDF was built, and complex pages often need heavy clean-up",
    control: "Low. You fix problems by hand",
  },
  {
    route: "Desktop PDF software with OCR",
    best: "Occasional scans where you can proofread carefully yourself",
    watch: "Still needs manual rebuilding of tables, styles and numbering",
    control: "Medium. Depends on your time and Word skills",
  },
  {
    route: "Professional rebuild",
    best: "Confidential, client-facing, complex or reusable documents",
    watch:
      "Costs more than a free tool, so keep it for files where quality matters",
    control: "High. Styles, templates and checks included",
  },
];

const STEPS = [
  {
    title: "Audit the PDF",
    text: "We check how the PDF was made: real text, scanned images or a mix, which fonts are embedded, and which pages carry tables, columns or forms. This decides the method before a single word is moved.",
    tip: "Send the original source file as well, even if it is out of date. It can answer questions the PDF cannot.",
  },
  {
    title: "Recover the text",
    text: "Text-based pages are extracted directly. Scanned pages go through OCR, then the result is proofread against the page image so that errors are caught before they spread.",
    tip: "Numbers, part codes, names and dates are where OCR slips most often. Check those first.",
  },
  {
    title: "Rebuild the structure",
    text: "Headings, lists, tables and columns are rebuilt with Word’s own tools rather than held in place with text boxes, tabs and spaces. This is what makes the file editable in practice.",
    tip: "Open the Navigation Pane. If the headings appear there, the structure is real.",
  },
  {
    title: "Apply styles and branding",
    text: "Fonts, colours, spacing and logo placement are applied as styles, so a change in one place updates the whole document and matches your brand guidelines.",
    tip: "Supply brand guidelines and licensed font files up front. Missing fonts are the most common surprise.",
  },
  {
    title: "Add fields and templates",
    text: "Page numbers, cross-references, contents lists and content controls are set up so they update by themselves. For recurring documents, the result is saved as a reusable template.",
    tip: "Decide which sections change each time. Those become the placeholders.",
  },
  {
    title: "Check and hand over",
    text: "The finished file is compared side by side with the PDF, tested by editing, and checked in print and PDF export so that what you receive is ready to use.",
    tip: "Open the file on a second computer before sign-off. It is the quickest way to spot a missing font.",
  },
];

const METHODS = [
  {
    kicker: "Structure",
    title: "Rebuilt Layouts and Complex Formatting",
    text: "Professional conversion doesn’t just extract text, it reconstructs the entire document structure.",
    items: [
      "Tables are rebuilt with proper cell structure, borders, and alignment",
      "Graphics and images are positioned correctly with proper text wrapping",
      "Headers, footers, and page numbers maintain consistency",
      "Multi-column layouts preserve their intended visual hierarchy",
      "Styles and formatting are applied systematically, not ad-hoc",
    ],
  },
  {
    kicker: "Reuse",
    title: "Template Creation for Recurring Documents",
    text: null, // custom paragraph with link, see markup
    items: [
      "Proposals and quotes: templates with placeholders for client information, pricing, and terms",
      "Reports: standardised formatting, headers, and section structures",
      "Contracts: ensure legal language and clauses remain consistent",
      "Marketing materials: preserve branding while allowing content updates",
    ],
  },
  {
    kicker: "Identity",
    title: "Brand Consistency and Professional Polish",
    text: "Professional conversion services understand that documents represent your business. Branding is another critical element, preserving fonts, logos, and style guides so that every converted document reflects your organisation’s identity.",
    items: [
      "Company fonts and typography",
      "Brand colours and visual identity",
      "Logo placement and quality",
      "Style guides and formatting standards",
      "Regulatory disclaimers and legal language",
    ],
  },
];

const SCENARIOS = [
  {
    icon: Icons.scale,
    title: "Contracts and Legal Agreements",
    text: "With contracts and legal agreements, even small formatting errors can introduce ambiguity that undermines the integrity of the document.",
    steps: [
      "Clause numbering remains accurate and sequential",
      "Tables of contents and cross-references work correctly",
      "Signature blocks and legal language preserve exact formatting",
      "Terms and conditions maintain their intended structure",
      "Cross-references and bookmarks function properly",
    ],
  },
  {
    icon: Icons.chart,
    title: "Reports and Proposals",
    text: "With reports and proposals, presentation matters just as much as content. Polished, accurate documents build credibility with clients and stakeholders, while a poorly converted one can harm your brand.",
    steps: [
      "Executive summaries maintain professional formatting",
      "Charts and graphs transfer correctly with proper legends",
      "Appendices and references remain properly linked",
      "Headers and footers provide consistent navigation",
      "Table of contents and index entries update correctly",
    ],
  },
  {
    icon: Icons.users,
    title: "HR Documents and Policies",
    text: "Policies, onboarding documents, and forms are often reused across a single organisation, and turning these into editable templates saves significant time while ensuring every employee sees a consistent version.",
    steps: [
      <>
        <Link href="/services/microsoft-word/fill-in-forms">
          Employee forms
        </Link>{" "}
        with proper field controls and protection
      </>,
      "Policy documents with standardised formatting and styles",
      "Training materials that maintain visual consistency",
      "Compliance documentation with required legal language",
      "Onboarding packages with automated employee information",
    ],
  },
  {
    icon: Icons.megaphone,
    title: "Marketing and Sales Collateral",
    text: "Marketing departments face similar challenges; brochures, proposals, and branded materials rely heavily on design.",
    steps: [
      "Product sheets with precise image placement and layout",
      "Sales presentations with branded templates and themes",
      "Case studies that maintain professional multi-column layout",
      "Marketing brochures with complex designs and graphics",
      "Pitch decks with consistent corporate identity",
    ],
  },
];

const MISTAKES = [
  {
    title: "Uploading confidential files to a free site",
    text: "Contracts, HR records and client data are routinely dropped into free tools without a second thought. Once a file leaves your network, you rarely know where it is stored or for how long.",
    instead:
      "Convert on a machine you control, or use a provider that handles the file under a confidentiality agreement.",
    Sketch: UploadSketch,
  },
  {
    title: "Running a scan without proper OCR",
    text: "A scanned PDF is a photograph of text. Without OCR the output is just pictures. With weak OCR it is text full of wrong characters that look right at a glance.",
    instead:
      "Run quality OCR, then proofread figures, names and dates against the page.",
    Sketch: ScanSketch,
  },
  {
    title: "Faking layout with spaces, tabs and manual breaks",
    text: "Many converters hold text in place with strings of spaces and hard returns. It looks right until someone edits a word and everything jumps.",
    instead:
      "Use paragraph styles, tab stops and real tables so the layout adjusts as the content changes.",
    Sketch: SpacingSketch,
  },
  {
    title: "Skipping the side-by-side check",
    text: "A quick glance misses a dropped row, a lost footnote or a changed figure. Small errors survive into the version that people sign.",
    instead:
      "Compare page by page against the PDF, with a second reader for contracts and financials.",
    Sketch: CheckSketch,
  },
  {
    title: "Converting a PDF when the source file exists",
    text: "If the PDF was exported from a Word, layout or design file, going back to that file avoids the conversion altogether.",
    instead:
      "Ask the author for the source file first, and convert only when it has been lost.",
    Sketch: SourceSketch,
  },
];

const PRE_SHARE = [
  "Page count and page breaks match the PDF",
  "Headings use real styles (check the Navigation Pane)",
  "Tables have true cells, not tabbed text",
  "Fonts match your brand or are installed where needed",
  "Numbers, names and dates match the original",
  "Images sit in the right place and wrap correctly",
  "Headers, footers and page numbers repeat correctly",
  "Cross-references and contents lists update",
  "Document properties carry the right title and author",
  "The file opens and prints correctly on a second computer",
];

const DIY_STEPS = [
  "Make a copy of the PDF and work on the copy, never the original.",
  "In Word, use File > Open and choose the PDF. Word will warn you that it is about to convert the file.",
  "Check the first page against the PDF before reading anything else. If the layout is already badly off, the rest will not improve.",
  "Look at tables, columns and images next, then at headers, footers and page numbers.",
  "Save as a new .docx, switch on Show/Hide (¶) to spot manual breaks, and tidy up before anyone else edits the file.",
];

const BRIEF = [
  "The PDF itself, plus the original source file if anyone still has it",
  "How the document will be used: printed, emailed, edited by a team or reused as a template",
  "Your brand guidelines, logo files and licensed fonts",
  "Whether the content is confidential, and any handling terms you need to follow",
  "How many pages and documents are involved, and whether any are scanned",
  "Who will edit the file next, and how comfortable they are with Word",
];

const FAQS = [
  {
    q: "Can I convert a PDF to Word for free?",
    a: "Yes. For a simple, text-only file that is not sensitive, a free converter or Word’s own PDF open is often good enough. The trade-offs appear with complex layouts, scanned pages, confidential content and documents that will be reused, where fixing the output can take longer than a proper conversion.",
  },
  {
    q: "Why does my converted Word document look different from the PDF?",
    a: "A PDF fixes every element at exact positions on the page, while Word reflows content using styles, tables and sections. A converter has to guess how to turn fixed positions back into that structure, and those guesses are where fonts, tables, columns and images drift.",
  },
  {
    q: "Can a scanned PDF be turned into editable Word text?",
    a: "Yes, with optical character recognition (OCR). Accuracy depends on the quality of the scan and the OCR software, so the output should always be proofread against the original, especially figures, names and dates.",
  },
  {
    q: "Is it safe to upload a confidential PDF to a free converter?",
    a: "It depends on the provider’s terms, which are often vague about retention, storage location and third-party access. For confidential documents, check your own contractual and privacy obligations first, and prefer a conversion that is done securely without uploading to an unknown service.",
  },
  {
    q: "Can a professional conversion double as a template?",
    a: "Yes. Instead of a one-off file, the document can be rebuilt with styles, placeholders and content controls so your team can reuse it. See our page on reusable Word document template creation for how that works.",
  },
];

const RELATED = [
  {
    tag: "Blog",
    title: "Convert Canva to Word",
    text: "What carries across when a Canva design becomes a Word document, and how to choose the right route.",
    href: "/blog/convert-canva-to-word",
  },
  {
    tag: "Service",
    title: "Word document template creation",
    text: "Turn recurring documents into reusable, on-brand Word templates.",
    href: "/services/microsoft-word/word-document-template-creation",
  },
  {
    tag: "Service",
    title: "Fill-in forms in Word",
    text: "Editable forms with proper field controls and protection.",
    href: "/services/microsoft-word/fill-in-forms",
  },
];

/* ---------- Local helpers ---------- */

function Callout({ icon: Ico, label, children }) {
  return (
    <aside className={styles.callout}>
      <span className={styles.calloutIcon}>
        <Ico />
      </span>
      <div>
        <p className={styles.calloutLabel}>{label}</p>
        <p className={styles.calloutText}>{children}</p>
      </div>
    </aside>
  );
}

function QuoteCard({ quote }) {
  return (
    <figure className={styles.quoteCard}>
      <span className={styles.quoteIcon}>
        <Icons.quote />
      </span>
      <blockquote cite={quote.href}>
        <p>{quote.text}</p>
      </blockquote>
      <figcaption>
        <a href={quote.href} target="_blank" rel="noopener noreferrer nofollow">
          {quote.source}
        </a>
      </figcaption>
    </figure>
  );
}

function IconRows({ items }) {
  return (
    <ul className={styles.iconRows}>
      {items.map(({ icon: Ico, title, text }) => (
        <li key={title}>
          <span className={styles.rowBadge}>
            <Ico />
          </span>
          <div>
            <p className={styles.rowTitle}>{title}</p>
            <p className={styles.rowText}>{text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function TickList({ items, columns }) {
  return (
    <ul className={columns ? styles.checkGrid : styles.tickList}>
      {items.map((item) => (
        <li key={typeof item === "string" ? item : item.key}>
          <span className={styles.tick}>
            <Icons.check />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Diagram({ children, caption }) {
  return (
    <figure className={styles.diagram}>
      <div className={styles.diagramScroll}>
        <div className={styles.diagramInner}>{children}</div>
      </div>
      <figcaption className={styles.diagramCaption}>{caption}</figcaption>
    </figure>
  );
}

/* ---------- Page ---------- */

export default function PDFToWordBlogPost() {
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
                PDF to Word Conversion That{" "}
                <span className={styles.accent}>Works for Business</span>
              </h1>
              <p className={styles.lede}>
                Every day, thousands of people search for “PDF to Word”. It’s
                one of the most common document-related queries online, because
                PDFs are everywhere!
              </p>
              <div className={styles.authorRow}>
                <span className={styles.avatar} aria-hidden="true">
                  <Image
                    src={aleisha}
                    alt={AUTHOR_NAME}
                    width={38}
                    height={38}
                  />
                </span>
                <div className={styles.authorMeta}>
                  <span className={styles.authorName}>By {AUTHOR_NAME}</span>
                  <span className={styles.authorDate}>
                    Updated {UPDATED_LABEL} · {READING_TIME} min read
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
          <div className={styles.glanceGrid}>
            {GLANCE.map((g) => (
              <div key={g.label} className={styles.glanceCard}>
                <span className={styles.glanceValue}>{g.value}</span>
                <span className={styles.glanceLabel}>{g.label}</span>
                <span className={styles.glanceText}>{g.text}</span>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.layout}>
          <nav className={styles.toc} aria-label="Contents">
            <p className={styles.tocTitle}>In this guide</p>
            <ol className={styles.tocList}>
              {TOC.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`}>{t.label}</a>
                </li>
              ))}
            </ol>
          </nav>

          <article className={styles.article}>
            {/* Intro */}
            <section id="intro" className={styles.section}>
              <h2>
                Why PDF to Word Is Harder{" "}
                <span className={styles.accent}>Than It Looks</span>
              </h2>
              <p>
                While many searches lead to free online tools, businesses often
                need more than a quick conversion. They need accuracy, security,
                and results that preserve the integrity of their documents.
              </p>
              <p>
                The reason is built into the two formats. A PDF is a finished
                picture of a page: every word, line and image is fixed at exact
                coordinates so it looks identical on any screen or printer. A
                Word document is the opposite. It is a set of instructions
                (styles, tables, sections and fields) that Word lays out again
                every time the content changes. Converting from one to the other
                means turning a drawing back into a structure, and no tool can
                know for certain what structure the original author had in mind.
              </p>
              <p>
                This guide explains what a good conversion looks like, where
                free converters tend to fail, how to decide which route suits a
                particular document, and what a professional rebuild involves.
                It is written for organisations that depend on their documents
                looking right: proposals, contracts, policies, reports, forms
                and marketing collateral.
              </p>
              <Callout icon={Icons.info} label="The short version">
                If a document is confidential, complex, client-facing or going
                to be reused, treat conversion as a rebuild rather than a
                one-click export. For a simple, personal file, a free tool is
                usually fine.
              </Callout>
            </section>

            {/* Needs */}
            <section id="needs" className={styles.section}>
              <h2>
                What Businesses Really Need from{" "}
                <span className={styles.accent}>PDF to Word Conversion</span>
              </h2>
              <p>
                For organisations, converting a PDF to Word isn’t just about
                unlocking text, it’s about ensuring that the document remains
                professional, editable, and ready for business use. Four
                essential features of a professional conversion are:
              </p>
              <div className={styles.reasonGrid}>
                {REASONS.map(({ icon: Ico, title, text }) => (
                  <div key={title} className={styles.reasonCard}>
                    <span className={styles.iconBadge}>
                      <Ico />
                    </span>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p className={styles.cardText}>{text}</p>
                  </div>
                ))}
              </div>
              <h3>Four quick tests for any converted file</h3>
              <p>
                You do not need special software to judge a conversion. These
                four checks take a few minutes and show quickly whether a file
                is ready for business use:
              </p>
              <TickList items={QUICK_TESTS} />
            </section>

            {/* Problems */}
            <section id="problems" className={styles.section}>
              <h2>
                The Hidden Problems with{" "}
                <span className={styles.accent}>Free PDF Converters</span>
              </h2>
              <p>
                Free online converters seem convenient, but they come with
                significant limitations that can impact your business documents.
                Understanding these challenges helps explain why professional
                conversion services deliver superior results.
              </p>

              <h3>Formatting and Layout Challenges</h3>
              <p>
                One of the most common frustrations is how conversion tools
                handle document structure. PDFs use absolute positioning: text,
                images, and tables are placed at fixed locations on the page.
                Word documents, on the other hand, use a flowing layout model
                where content adjusts dynamically.
              </p>
              <QuoteCard quote={QUOTES.smallpdf} />
              <p>
                This fundamental difference in how PDFs and Word documents
                handle layout is what causes many formatting discrepancies. When
                a converter tries to translate fixed positioning into Word’s
                flowing format, some things survive the trip and some do not.
              </p>
              <Diagram caption="What usually carries across from a PDF, and what often needs rebuilding by hand.">
                <LayoutModelSvg />
              </Diagram>
              <p>
                When positioning is translated badly, five problems appear again
                and again:
              </p>
              <IconRows items={FAILURES} />
              <QuoteCard quote={QUOTES.docflyLayout} />

              <h3>Scanned and Image-Based PDFs</h3>
              <p>
                The challenge becomes even greater with scanned documents or
                PDFs created from images. These files don’t contain actual text,
                just pictures of text. Free converters typically handle these in
                problematic ways:
              </p>
              <IconRows items={SCAN_ISSUES} />
              <QuoteCard quote={QUOTES.updf} />
              <Callout icon={Icons.scan} label="Ten-second check">
                Open the PDF and try to select a single sentence with your
                cursor. If you can highlight words, the file contains real text.
                If the whole page highlights as one block, or nothing
                highlights, it is a scan and will need OCR.
              </Callout>

              <h3>Security, Privacy, and Compliance Risks</h3>
              <p>
                Perhaps the most serious concern with free online converters is
                what happens to your documents after you upload them. Many
                businesses don’t realise the risks they’re taking when they use
                these services with confidential information.
              </p>
              <QuoteCard quote={QUOTES.dev} />
              <IconRows items={SECURITY_ISSUES} />
              <QuoteCard quote={QUOTES.cyber} />
              <p>
                For Australian organisations, obligations under the Privacy Act
                1988 and any confidentiality terms in your client contracts
                still apply when a third party processes a file on your behalf.
                If you are unsure whether a service meets those obligations,
                check with your legal or compliance team before uploading.
              </p>

              <h3>The Reality of “Good Enough”</h3>
              <p>
                Even when free converters produce what appears to be acceptable
                results, small errors can accumulate to create larger problems.
                A font change here, an odd spacing issue there, these might seem
                minor, but they affect the professional appearance of your
                documents.
              </p>
              <QuoteCard quote={QUOTES.docflyErrors} />
              <p>
                For client-facing documents, proposals, or legal agreements,
                these “minor” issues can undermine credibility and create doubt
                about your attention to detail.
              </p>
              <QuoteCard quote={QUOTES.rsweb} />
              <p>
                Imperfection is a fair expectation from any automatic tool. The
                practical question is who finds and fixes it, and when: you,
                late on a deadline, or a specialist before the document ever
                reaches a client.
              </p>
            </section>

            {/* Choose */}
            <section id="choose" className={styles.section}>
              <h2>
                When Professional Conversion{" "}
                <span className={styles.accent}>Makes Sense</span>
              </h2>
              <p>
                Not every PDF to Word conversion requires professional services.
                Free tools work fine for simple, personal documents. But
                consider professional conversion when:
              </p>
              <TickList items={SIGNS} columns />

              <h3>A quick way to decide</h3>
              <p>
                If you would rather not count ticks, three questions cover most
                cases. Start at the top and follow the arrows.
              </p>
              <Diagram caption="Confidential, complex or reusable files point to a professional route. Everything else can usually be done yourself.">
                <DecisionSvg />
              </Diagram>

              <h3>Four routes compared</h3>
              <p>
                There is more than one way to get from PDF to Word, and each has
                a place. Here is an honest comparison:
              </p>
              <div className={styles.tableWrap}>
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Route</th>
                      <th scope="col">Best for</th>
                      <th scope="col">Watch out for</th>
                      <th scope="col">Control of the result</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ROUTES.map((r) => (
                      <tr key={r.route}>
                        <th scope="row">{r.route}</th>
                        <td>{r.best}</td>
                        <td>{r.watch}</td>
                        <td>{r.control}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Callout icon={Icons.file} label="Before you convert anything">
                Ask whoever made the PDF for the original Word, layout or design
                file. A source file will always beat a conversion, and it can
                save the whole exercise.
              </Callout>

              <h3>If you want to try it yourself first</h3>
              <p>
                For a simple file it is reasonable to give Word a go before
                paying anyone. A careful first attempt also tells you quickly
                whether the document is one of the tricky ones. Menu names can
                differ slightly between Word versions, but the approach is the
                same:
              </p>
              <TickList items={DIY_STEPS} />
              <p>
                If you are still fixing problems an hour later, that is useful
                information. It usually means the document belongs in the
                professional column of the table above.
              </p>
            </section>

            {/* Process */}
            <section id="process" className={styles.section}>
              <h2>
                How a Professional Conversion{" "}
                <span className={styles.accent}>Works</span>
              </h2>
              <p>
                A professional conversion is a short project rather than a
                button. Here is what the process typically looks like, and the
                one thing you can do at each stage to get a better result.
              </p>
              <ol className={styles.timeline}>
                {STEPS.map((s, i) => (
                  <li key={s.title} className={styles.step}>
                    <span className={styles.stepNum}>{i + 1}</span>
                    <h3 className={styles.stepTitle}>{s.title}</h3>
                    <p className={styles.stepText}>{s.text}</p>
                    <p className={styles.proTip}>
                      <span className={styles.proTipLabel}>Pro tip</span>
                      <span>{s.tip}</span>
                    </p>
                  </li>
                ))}
              </ol>

              <h3>What to have ready before you ask for a quote</h3>
              <p>
                The more a converter knows about the destination of the
                document, the better the rebuild. Having these details to hand
                makes the first conversation quicker and the quote more
                accurate:
              </p>
              <TickList items={BRIEF} />
              <Callout icon={Icons.clock} label="Quote from a sample">
                Time and cost depend on page count, how complex the layouts are
                and whether pages are scanned. A good provider will happily
                quote from one or two representative pages rather than guessing
                from a description.
              </Callout>
            </section>

            {/* Advantage */}
            <section id="advantage" className={styles.section}>
              <h2>
                Beyond Conversion - The{" "}
                <span className={styles.accent}>Professional Advantage</span>
              </h2>
              <p>
                Free converters provide a quick, one-click solution, but they
                stop short of delivering the kind of results businesses really
                need. Professional services go much further by tailoring the
                outcome to match both the content and the purpose of the
                document.
              </p>
              <Diagram caption="Six things to look for in a properly rebuilt Word page.">
                <AnatomySvg />
              </Diagram>
              <div className={styles.methodGrid}>
                {METHODS.map((m, i) => (
                  <div key={m.title} className={styles.methodCard}>
                    <div className={styles.methodHead}>
                      <span className={styles.methodKicker}>{m.kicker}</span>
                      <h3 className={styles.methodTitle}>{m.title}</h3>
                    </div>
                    <div className={styles.methodBody}>
                      {i === 1 ? (
                        <p className={styles.methodText}>
                          Rather than producing a single, static file,
                          professional services often create{" "}
                          <Link href="/services/microsoft-word/word-document-template-creation">
                            reusable Word templates
                          </Link>{" "}
                          that save your team time and maintain consistency
                          across all future documents.
                        </p>
                      ) : (
                        <p className={styles.methodText}>{m.text}</p>
                      )}
                      <TickList items={m.items} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Scenarios */}
            <section id="scenarios" className={styles.section}>
              <h2>
                Common Business Scenarios Where{" "}
                <span className={styles.accent}>Professionals Add Value</span>
              </h2>
              <p>
                The right level of care depends on what the document has to do.
                These four scenarios come up most often, along with what a
                careful conversion checks in each.
              </p>
              <div className={styles.walkGrid}>
                {SCENARIOS.map(({ icon: Ico, title, text, steps }) => (
                  <div key={title} className={styles.walkCard}>
                    <div className={styles.walkHead}>
                      <span className={styles.iconBadge}>
                        <Ico />
                      </span>
                      <h3 className={styles.walkTitle}>{title}</h3>
                    </div>
                    <p className={styles.walkText}>{text}</p>
                    <ol className={styles.walkSteps}>
                      {steps.map((s, i) => (
                        <li key={i}>
                          <span className={styles.miniNum}>{i + 1}</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </section>

            {/* Mistakes */}
            <section id="mistakes" className={styles.section}>
              <h2>
                Risks of <span className={styles.accent}>Cutting Corners</span>
              </h2>
              <p>
                For personal or one-off tasks, free PDF to Word converters can
                be convenient and the best option for you. But for professional
                use, they often introduce formatting errors, limit file sizes,
                or compromise security. Fixing those mistakes can cost more time
                (and reputation) than it’s worth.
              </p>
              <p>
                The risks extend beyond just appearance. When documents
                represent your organisation to clients, partners, or regulators,
                quality matters. A poorly converted contract could create legal
                ambiguity. A proposal with formatting errors might cost you a
                client.
              </p>
              <p>
                The security implications of uploading sensitive business
                documents to unknown servers should not be underestimated. Many
                free services have vague privacy policies, unclear data
                retention practices, and servers located in jurisdictions with
                different data protection standards.
              </p>

              <h3>Five mistakes we see most often</h3>
              <ol className={styles.mistakeList}>
                {MISTAKES.map(({ title, text, instead, Sketch }, i) => (
                  <li key={title} className={styles.mistakeCard}>
                    <div className={styles.mistakeCopy}>
                      <span className={styles.mistakeNum} aria-hidden="true">
                        {i + 1}
                      </span>
                      <h4 className={styles.mistakeTitle}>{title}</h4>
                      <p className={styles.mistakeText}>{text}</p>
                      <p className={styles.insteadRow}>
                        <span className={styles.instead}>Instead</span>
                        <span>{instead}</span>
                      </p>
                    </div>
                    <div className={styles.sketch}>
                      <Sketch />
                    </div>
                  </li>
                ))}
              </ol>

              <h3>Before you share a converted document</h3>
              <p>
                Run through this list once. It takes about ten minutes and
                catches most problems.
              </p>
              <TickList items={PRE_SHARE} columns />
            </section>

            {/* CTA */}
            <aside className={styles.ctaBand}>
              <h2>
                Got a PDF that needs to{" "}
                <span className={styles.accent}>work properly?</span>
              </h2>
              <p>
                Send us the file and tell us how it will be used. We will tell
                you honestly whether a free tool will do or whether it needs a
                rebuild.
              </p>
              <div className={styles.ctaButtons}>
                <a href="#get-in-touch" className={styles.btnPrimary}>
                  Talk to our team
                </a>
                <Link
                  href="/services/microsoft-word/word-document-template-creation"
                  className={styles.btnGhost}
                >
                  See template creation
                </Link>
              </div>
            </aside>

            {/* FAQ */}
            <section id="faq" className={styles.section}>
              <h2>
                Frequently Asked{" "}
                <span className={styles.accent}>Questions</span>
              </h2>
              <div className={styles.faq}>
                {FAQS.map((f) => (
                  <details key={f.q}>
                    <summary>
                      <span>{f.q}</span>
                      <span className={styles.chev}>
                        <Icons.chevron />
                      </span>
                    </summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className={styles.section}>
              <h2>
                In <span className={styles.accent}>Conclusion</span>
              </h2>
              <p>
                Converting PDF to Word might seem like a simple task, but the
                difference between adequate and excellent results often comes
                down to understanding what businesses truly need. Free
                converters serve a purpose for quick, simple conversions, but
                they fall short when accuracy, security, and professionalism
                matter.
              </p>
              <p>
                Professional conversion services don’t just unlock your PDF,
                they rebuild it as a properly structured, editable Word document
                that maintains your brand standards and serves your business
                needs. For documents that represent your organisation, that
                difference matters.
              </p>
              <p>
                Whether it’s ensuring legal documents remain precise,
                maintaining brand consistency across proposals, or creating
                templates that save your team hours of work, professional PDF to
                Word conversion delivers value that free tools simply cannot
                match.
              </p>

              <div className={styles.authorBox}>
                <span className={styles.avatarLarge}>
                  <Image
                    src={aleisha}
                    alt={AUTHOR_NAME}
                    width={56}
                    height={56}
                  />
                </span>
                <div>
                  <h3 className={styles.authorBoxTitle}>About the Author</h3>
                  <p className={styles.authorBoxText}>
                    {AUTHOR_NAME} is a designer at Office Experts. Over the
                    years she has reformatted, converted, and edited documents
                    of all shapes and sizes! If you have any questions, please
                    feel free to get in contact via the form below. Office
                    Experts Group is an Australian Microsoft consultancy,
                    established in 2000.
                  </p>
                </div>
              </div>
            </section>

            {/* Related */}
            <section className={styles.related} aria-label="Related reading">
              <p className={styles.relatedTitle}>Keep reading</p>
              <div className={styles.relatedGrid}>
                {RELATED.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className={styles.relatedCard}
                  >
                    <span className={styles.relatedTag}>{r.tag}</span>
                    <span className={styles.relatedName}>{r.title}</span>
                    <span className={styles.relatedText}>{r.text}</span>
                    <span className={styles.relatedArrow}>
                      <Icons.arrow />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </article>
        </div>
      </div>

      <div id="get-in-touch">
        <Contact />
      </div>
    </>
  );
}
