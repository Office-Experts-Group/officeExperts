// /app/blog/convert-canva-to-word/page.js
import Link from "next/link";
import Image from "next/image";

import Contact from "@/components/Contact";
import { generateOrganizationSchema } from "@/utils/schemaGenerators";

import styles from "@/styles/canvaToWordBlog.module.scss";

import HeroSvg from "./(svgs)/HeroSvg";
import TransferMapSvg from "./(svgs)/TransferMapSvg";
import DecisionSvg from "./(svgs)/DecisionSvg";
import TemplateAnatomySvg from "./(svgs)/TemplateAnatomySvg";
import {
  FlatImageSketch,
  FontsSketch,
  SpacesSketch,
  StylesSketch,
  TextBoxesSketch,
} from "./(svgs)/MistakeIllustrations";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CheckIcon,
  CrossIcon,
  EditIcon,
  LayersIcon,
  LightbulbIcon,
  ListIcon,
  LockIcon,
  PrinterIcon,
  TemplateIcon,
  UsersIcon,
} from "./(svgs)/Icons";

import dan from "@/public/team/dan.webp";

// Keep these three in sync with layout.js (no shared config file).
const PAGE_URL = "https://www.officeexperts.com.au/blog/convert-canva-to-word";
const PAGE_TITLE = "How to Convert Canva to a Word Template | Office Experts";
const PAGE_DESCRIPTION =
  "Convert a Canva design into an editable Microsoft Word template that keeps your fonts, colours and brand. A step-by-step guide from Office Experts.";

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_HEADLINE =
  "How to Convert a Canva Design into a Microsoft Word Template";
const BREADCRUMB_NAME = "Canva to Word Template";
const AUTHOR_NAME = "Daniel Thomas";
const READING_TIME = "9 min read";
const HERO_IMAGE_PATH = "/canva-to-word.webp";
const HERO_IMAGE_ALT = "Canva to Word Template";

// Published date is kept. dateModified is set by hand when the content really
// changes (never new Date()). 2026-10-27 is in AEDT (+11:00).
const DATE_PUBLISHED = "2025-04-14T09:00:00+10:00";
const DATE_MODIFIED = "2026-10-27T09:00:00+11:00";

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
    generateOrganizationSchema(),
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
      image: [`${SITE_URL}${HERO_IMAGE_PATH}`],
      author: { "@type": "Person", name: AUTHOR_NAME },
      publisher: { "@id": `${SITE_URL}#organization` },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      inLanguage: "en-AU",
      isPartOf: { "@id": PAGE_URL },
      mainEntityOfPage: { "@id": PAGE_URL },
    },
  ],
};

const toc = [
  { id: "why", label: "Why convert?" },
  { id: "transfer", label: "What transfers" },
  { id: "choose", label: "Choose a method" },
  { id: "manual", label: "Option A: rebuild" },
  { id: "export", label: "Options B and C" },
  { id: "brand", label: "Keep your brand consistent" },
  { id: "mistakes", label: "Common mistakes" },
  { id: "help", label: "When to get help" },
  { id: "faq", label: "FAQ" },
];

const glance = [
  {
    value: "3",
    label: "ways to convert",
    text: "Rebuild, export or open the PDF, and how to choose.",
  },
  {
    value: "6",
    label: "steps to rebuild",
    text: "A repeatable process for matching a Canva layout in Word.",
  },
  {
    value: ".dotx",
    label: "reusable template",
    text: "One file your whole team can start new documents from.",
  },
];

const reasons = [
  {
    Icon: EditIcon,
    title: "Editable by anyone",
    text: "You need editable documents for clients or team members.",
  },
  {
    Icon: BriefcaseIcon,
    title: "Word is where the work happens",
    text: "Your business operates primarily in Word (policies, letters, proposals).",
  },
  {
    Icon: LockIcon,
    title: "Locked-in branding",
    text: "You want to lock branding and formatting for consistency.",
  },
  {
    Icon: UsersIcon,
    title: "Not everyone has Canva",
    text: "Not everyone on your team uses or has access to Canva.",
  },
  {
    Icon: PrinterIcon,
    title: "Print and compliance",
    text: "Printing or compliance requirements demand Word format.",
  },
];

const works = [
  "Layout replication",
  "Fonts (if available in Word)",
  "Colours and spacing",
  "Logos and images",
];

const doesnt = [
  "Canva elements like animations",
  "Complex text layering or effects",
  "Interactive buttons or links (unless re-added)",
];

const translation = [
  {
    canva: "Brand kit colours",
    word: "Theme colours",
    where: "Design > Colors > Customize Colors",
  },
  {
    canva: "Brand kit fonts",
    word: "Theme fonts",
    where: "Design > Fonts > Customize Fonts",
  },
  {
    canva: "Custom page size",
    word: "Page size",
    where: "Layout > Size > More Paper Sizes",
  },
  {
    canva: "Columns and grids",
    word: "Tables or columns",
    where: "Insert > Table, or Layout > Columns",
  },
  {
    canva: "Layered shapes and text",
    word: "Shapes and text boxes (sparingly)",
    where: "Insert > Shapes, Insert > Text Box",
  },
  {
    canva: "Logos and graphics",
    word: "Pictures (PNG or SVG)",
    where: "Insert > Pictures",
  },
  {
    canva: "Clickable buttons",
    word: "Hyperlinks",
    where: "Insert > Link",
  },
];

const methods = [
  {
    name: "Option A: Rebuild in Word",
    accuracy: "Highest",
    editing: "Fully editable, with styles and content controls",
    best: "Branded, multi-page or shared templates",
  },
  {
    name: "Option B: Canva export",
    accuracy: "Medium",
    editing: "Editable text, but layout can shift",
    best: "Simple, text-heavy designs",
  },
  {
    name: "Option C: PDF opened in Word",
    accuracy: "Low to medium",
    editing: "Editable text, but graphics and spacing often shift",
    best: "One-off documents",
  },
];

const manualSteps = [
  {
    title: "Export from Canva",
    points: [
      "Download as a high-res PDF or PNG for reference",
      "If possible, note the exact fonts, colours and measurements used",
    ],
    tip: "Copy the hex codes for each brand colour while you are in Canva. You will convert them to RGB values in step 5.",
  },
  {
    title: "Open Microsoft Word",
    points: [
      "Start with a blank document or pre-made layout that’s similar",
      "Set the page size to match your Canva design",
    ],
    tip: "For Australian print, choose A4 rather than Letter. If Canva shows the size in pixels, the next step explains the conversion.",
  },
  {
    title: "Set margins and layout",
    points: [
      "Match sizes from your Canva file",
      "Go to Layout > Margins > Custom Margins to set precise measurements",
    ],
    tip: "Canva counts custom sizes in pixels at 96 per inch. Divide by 96 for inches, or by 3.78 for millimetres. A4 (210 × 297 mm) is roughly 794 × 1123 px.",
  },
  {
    title: "Recreate the structure",
    points: [
      "Use tables, shapes and text boxes",
      "Insert logos or images from Canva",
      "Use Insert > Pictures to add your exported images",
    ],
    tip: "Reach for tables first. A table keeps columns aligned when the text changes, while stacked text boxes drift apart as soon as someone types.",
  },
  {
    title: "Apply fonts and colours",
    points: [
      "Use your brand guidelines",
      "To match exact colours, use Format > Font Color > More Colors > Custom and enter RGB values",
    ],
    tip: "Set the same colours and fonts as theme colours and theme fonts instead (see the Design tab walkthrough below) so every new element picks them up automatically.",
  },
  {
    title: "Lock formatting",
    points: [
      "Use Word’s Styles and Content Controls to prevent unwanted changes",
      "This makes the template more usable for others",
    ],
    tip: "Do this last. Locking too early makes it harder to adjust the layout as you refine it.",
  },
];

const walkthroughs = [
  {
    Icon: ListIcon,
    title: "Use Word Styles",
    intro:
      "Set up Styles once so Heading 1, Heading 2 and Body text look right everywhere.",
    steps: [
      "Go to the Home tab in Word",
      "Right-click on a style in the Styles gallery",
      "Select “Modify”",
      "Set font, size, colour and spacing",
      "Check “New documents based on this template”",
      "Click “OK” to save changes",
    ],
  },
  {
    Icon: LockIcon,
    title: "Add content controls",
    intro: "Create fillable areas while protecting the rest of your design.",
    steps: [
      "Enable the Developer tab: File > Options > Customize Ribbon > tick “Developer”",
      "Place the cursor where you want a control",
      "Go to Developer > Controls",
      "Choose the right control (Rich Text, Plain Text and so on)",
      "Click “Properties” to set restrictions",
      "Optional: click “Group” to prevent deletion",
    ],
  },
  {
    Icon: TemplateIcon,
    title: "Save as a Word template (.dotx)",
    intro:
      "A .dotx opens as a fresh copy every time, so the original is never overwritten.",
    steps: [
      "Click File > Save As",
      "Select a location (the Templates folder is recommended)",
      "In “Save as type”, select “Word Template (*.dotx)”",
      "Name your template and click Save",
      "To use it later: File > New > Personal",
      "Your template appears in the gallery",
    ],
  },
  {
    Icon: LayersIcon,
    title: "Set theme colours and fonts",
    intro:
      "Define your brand once on the Design tab and every new table, shape and heading follows it.",
    steps: [
      "Go to Design > Colors > Customize Colors",
      "Enter your brand RGB values for the accent colours",
      "Go to Design > Fonts > Customize Fonts and pick heading and body fonts",
      "Save it with Design > Themes > Save Current Theme",
    ],
  },
];

const brandTips = [
  "Match line spacing, font size and colour codes exactly",
  "Save brand assets in your header and footer for a consistent appearance",
  "Use section breaks and page layout settings consistently",
  "Lock or restrict editing if sharing templates externally",
  "Add alt text to logos and images, then run Review > Check Accessibility",
  "If a Canva font isn’t in Word, install it, choose a close match, or embed fonts when saving (File > Options > Save) where the licence allows",
];

const mistakes = [
  {
    avoid: "Stacking text boxes over a background image",
    instead:
      "Build the layout with tables and keep brand elements in the header.",
    Visual: TextBoxesSketch,
  },
  {
    avoid: "Aligning text with spaces and tabs",
    instead: "Use table cells, tab stops or paragraph indents.",
    Visual: SpacesSketch,
  },
  {
    avoid: "Pasting the whole design in as one flat image",
    instead:
      "Rebuild text as real text. Keep images for logos and photos only.",
    Visual: FlatImageSketch,
  },
  {
    avoid: "Relying on fonts your readers don’t have",
    instead:
      "Install the font, pick a close system font, or embed fonts when saving.",
    Visual: FontsSketch,
  },
  {
    avoid: "Formatting by hand instead of using Styles",
    instead: "Define Heading and Body styles, then apply them consistently.",
    Visual: StylesSketch,
  },
];

const checklist = [
  "Page size and margins match the design",
  "Theme colours and fonts are set",
  "Headings use the built-in Heading styles",
  "Logos and images have alt text",
  "Fillable areas use content controls",
  "Review > Check Accessibility shows no errors",
  "Saved as .dotx and tested via File > New > Personal",
  "Opened on another computer to confirm fonts and layout hold",
];

const helpSigns = [
  "Have a multi-page branded document",
  "Need fillable sections or interactivity",
  "Want to restrict editing to protect your brand",
  "Need compatibility across devices and screen readers",
];

const faqs = [
  {
    q: "Can I convert a Canva design to Word in one click?",
    a: "Sometimes, for simple designs. Canva can download some designs as a .docx file, but spacing, fonts and layout often shift, so plan to clean up the result. For an accurate, reusable result, rebuild the layout in Word (Option A).",
  },
  {
    q: "Will my Canva fonts work in Word?",
    a: "Only if the font is installed on the computer opening the document, or embedded in the file. Many Canva fonts don’t ship with Word. Install the font, choose a close match, or embed fonts when saving (File > Options > Save) if the font’s licence allows it.",
  },
  {
    q: "What’s the difference between .docx and .dotx?",
    a: "A .docx is a normal document. A .dotx is a template: opening it creates a new, untitled copy, so the original stays untouched. Save a .dotx for anything people will reuse, such as letterheads, proposals and service agreements.",
  },
  {
    q: "Can I make parts of the template fillable but protected?",
    a: "Yes. Content controls give you fillable fields such as text, dates and drop-downs. In each control’s Properties you can stop it being deleted or edited, and grouping controls helps protect the surrounding layout.",
  },
  {
    q: "Will the template behave the same on Mac and in Word for the web?",
    a: "Styles, tables and most content controls carry across, but some Developer tab features and font handling differ between platforms. Test the template on each version your team uses before you share it.",
  },
];

const related = [
  {
    href: "/blog/ultimate-guide-to-word-templates",
    kind: "Guide",
    title: "The ultimate guide to Word templates",
  },
  {
    href: "/blog/pdf-to-word-conversion",
    kind: "Guide",
    title: "PDF to Word conversion",
  },
  {
    href: "/blog/document-rebranding",
    kind: "Guide",
    title: "Document rebranding",
  },
  {
    href: "/services/microsoft-word/word-template-conversions",
    kind: "Service",
    title: "Word template conversions",
  },
];

// Small note box used in this post only (icon chip, label, text).
const Callout = ({ Icon, label, children }) => (
  <div className={styles.callout}>
    <span className={styles.calloutIcon}>
      <Icon />
    </span>
    <div className={styles.calloutBody}>
      <p className={styles.calloutLabel}>{label}</p>
      <p className={styles.calloutText}>{children}</p>
    </div>
  </div>
);

const CanvaToWordBlogPost = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />

    <div className={styles.page}>
      {/* Hero */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              How to Convert a Canva Design into a{" "}
              <span className={styles.accent}>Microsoft Word Template</span>
            </h1>
            <p className={styles.lede}>
              Love your Canva design but need it in Word for editing or
              printing? Here are the three ways to do it, how to pick the right
              one, and how to lock your branding in so the template stays
              on-brand.
            </p>

            <div className={styles.meta}>
              <span className={styles.avatar} aria-hidden="true">
                <Image src={dan} alt={AUTHOR_NAME} width={38} height={38} />
              </span>
              <div>
                <p className={styles.metaName}>By {AUTHOR_NAME}</p>
                <p className={styles.metaDates}>
                  Updated{" "}
                  <time dateTime={DATE_MODIFIED}>
                    {formatDate(DATE_MODIFIED)}
                  </time>{" "}
                  · {READING_TIME}
                </p>
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
        {glance.map((item) => (
          <div key={item.label} className={styles.glanceCard}>
            <p className={styles.glanceValue}>{item.value}</p>
            <p className={styles.glanceLabel}>{item.label}</p>
            <p className={styles.glanceText}>{item.text}</p>
          </div>
        ))}
      </section>

      <div className={styles.layout}>
        <aside className={styles.toc} aria-label="In this guide">
          <p className={styles.tocTitle}>In this guide</p>
          <ol>
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ol>
        </aside>

        <article className={styles.article}>
          {/* Introduction */}
          <section className={styles.section} id="introduction">
            <h2>
              <span className={styles.accent}>Introduction</span>
            </h2>
            <p>
              <strong>
                Love your Canva design but need it in Microsoft Word for editing
                or printing?
              </strong>{" "}
              You’re not alone. Many business owners and admin staff design
              their letterheads, invoices or proposals in Canva but eventually
              need a <strong>fully editable Word version</strong>. Whether it’s
              for compatibility, brand consistency or easier collaboration,
              converting a Canva design into a functional Word template is
              totally doable, and in this guide we’ll show you how.
            </p>
            <p>
              There is no single “convert” button that works for every design,
              so below you’ll find what carries across, how to choose between
              the three methods, and a step-by-step rebuild that keeps your
              brand intact.
            </p>
            <figure className={styles.figure}>
              <Image
                src={HERO_IMAGE_PATH}
                alt={HERO_IMAGE_ALT}
                width={600}
                height={400}
                sizes="(max-width: 766px) 100vw, 600px"
                className={styles.figureImg}
              />
            </figure>
          </section>

          {/* Why convert */}
          <section className={styles.section} id="why">
            <h2>
              Why Convert from{" "}
              <span className={styles.accent}>Canva to Word?</span>
            </h2>
            <p>
              There are several compelling reasons why you might need to turn
              your beautiful Canva designs into Microsoft Word templates:
            </p>
            <div className={styles.reasonGrid}>
              {reasons.map(({ Icon, title, text }) => (
                <div key={title} className={styles.reasonCard}>
                  <span className={styles.iconBadge}>
                    <Icon />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <Callout Icon={UsersIcon} label="Example">
              NDIS providers often need service agreement templates in Word, not
              PDF or Canva, for editable compliance use.
            </Callout>
          </section>

          {/* What transfers */}
          <section className={styles.section} id="transfer">
            <h2>
              Canva to Word: What You Can and{" "}
              <span className={styles.accent}>Can’t Do</span>
            </h2>
            <p>
              Before diving in, it’s important to set realistic expectations
              about what transfers well from Canva to Word and what doesn’t.
            </p>

            <figure className={styles.diagram}>
              <div className={styles.diagramScroll}>
                <div className={styles.diagramInner}>
                  <TransferMapSvg />
                </div>
              </div>
              <figcaption>
                What carries across from Canva to Word, and what has to be
                rebuilt or dropped.
              </figcaption>
            </figure>

            <div className={styles.splitLists}>
              <div className={styles.listCardGood}>
                <h3>What works</h3>
                <ul>
                  {works.map((item) => (
                    <li key={item}>
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.listCardBad}>
                <h3>What doesn’t</h3>
                <ul>
                  {doesnt.map((item) => (
                    <li key={item}>
                      <CrossIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h3 className={styles.subhead}>
              Canva elements and their Word equivalents
            </h3>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th scope="col">In Canva</th>
                    <th scope="col">Use in Word</th>
                    <th scope="col">Where to find it</th>
                  </tr>
                </thead>
                <tbody>
                  {translation.map((row) => (
                    <tr key={row.canva}>
                      <th scope="row">{row.canva}</th>
                      <td>{row.word}</td>
                      <td>{row.where}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout Icon={LightbulbIcon} label="Tip">
              Think of this as a redesign, not a 1:1 conversion. Focus on
              maintaining the visual identity and functionality rather than an
              exact replica.
            </Callout>
          </section>

          {/* Choose a method */}
          <section className={styles.section} id="choose">
            <h2>
              Which Method{" "}
              <span className={styles.accent}>Should You Use?</span>
            </h2>
            <p>
              There are three main ways to get a Canva design into Word. Two
              questions usually settle it: how complex is the layout, and will
              anyone else reuse the file?
            </p>

            <figure className={styles.diagram}>
              <div className={styles.diagramScroll}>
                <div className={styles.diagramInner}>
                  <DecisionSvg />
                </div>
              </div>
              <figcaption>
                A quick way to choose between the three methods.
              </figcaption>
            </figure>

            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th scope="col">Method</th>
                    <th scope="col">Accuracy</th>
                    <th scope="col">Editing</th>
                    <th scope="col">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {methods.map((m) => (
                    <tr key={m.name}>
                      <th scope="row">{m.name}</th>
                      <td>{m.accuracy}</td>
                      <td>{m.editing}</td>
                      <td>{m.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Option A */}
          <section className={styles.section} id="manual">
            <h2>
              Option A: Manual Recreation{" "}
              <span className={styles.accent}>(Recommended for Accuracy)</span>
            </h2>
            <p>
              Rebuilding the design in Word takes longer than exporting, but it
              gives you real text, real styles and a file that behaves like a
              proper Word document. Work through these six steps in order:
            </p>

            <ol className={styles.steps}>
              {manualSteps.map((step) => (
                <li key={step.title} className={styles.step}>
                  <h3>{step.title}</h3>
                  <ul>
                    {step.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <p className={styles.stepTip}>
                    <strong>Pro tip:</strong> {step.tip}
                  </p>
                </li>
              ))}
            </ol>

            <Callout Icon={TemplateIcon} label="Bonus">
              Save it as a <code>.dotx</code> Word Template file for reuse.
            </Callout>
          </section>

          {/* Options B and C */}
          <section className={styles.section} id="export">
            <h2>
              Option B: Canva’s Export-to-Word Feature{" "}
              <span className={styles.accent}>(Limited)</span>
            </h2>
            <div className={styles.methodGrid}>
              <div className={styles.methodCard}>
                <p className={styles.methodTag}>Option B</p>
                <h3>Export from Canva</h3>
                <ul>
                  <li>
                    Canva allows you to{" "}
                    <strong>
                      Download &gt; File type: Microsoft Word (.docx)
                    </strong>{" "}
                    for some designs
                  </li>
                  <li>This works for simple text-heavy designs</li>
                  <li>
                    Doesn’t always preserve spacing, layout or fonts correctly
                  </li>
                </ul>
                <p className={styles.methodNote}>
                  <strong>Note:</strong> This option is not ideal for complex
                  documents. Use it as a base, then clean up the formatting
                  issues that typically arise.
                </p>
              </div>
              <div className={styles.methodCard}>
                <p className={styles.methodTag}>Option C</p>
                <h3>Open the PDF in Word</h3>
                <ul>
                  <li>
                    Download your design from Canva as a PDF, then use File &gt;
                    Open in Word and choose the PDF
                  </li>
                  <li>
                    Word converts it into an editable document and may warn that
                    the layout won’t match exactly
                  </li>
                  <li>
                    Text usually stays editable, but graphics, backgrounds and
                    spacing often shift
                  </li>
                </ul>
                <p className={styles.methodNote}>
                  <strong>Note:</strong> Best for one-off documents. For
                  anything you’ll reuse, rebuild it as a template instead. Our{" "}
                  <Link href="/blog/pdf-to-word-conversion">
                    PDF to Word guide
                  </Link>{" "}
                  covers this route in more detail.
                </p>
              </div>
            </div>
          </section>

          {/* Brand consistency */}
          <section className={styles.section} id="brand">
            <h2>
              Tips for Keeping Your Brand{" "}
              <span className={styles.accent}>Consistent in Word</span>
            </h2>
            <p>
              One of the biggest challenges when converting from Canva to Word
              is maintaining brand consistency. A well-built template has five
              parts working together:
            </p>

            <figure className={styles.diagram}>
              <div className={styles.diagramScroll}>
                <div className={styles.diagramInner}>
                  <TemplateAnatomySvg />
                </div>
              </div>
              <figcaption>
                The anatomy of a brand-safe Word template.
              </figcaption>
            </figure>

            <p>
              By setting up proper Styles for Heading 1, Heading 2, Body text
              and so on, you ensure that formatting stays consistent throughout
              your document, and across every document based on your template.
              Content controls are especially useful when others will fill the
              template in, because they show exactly where information goes.
            </p>

            <div className={styles.walkGrid}>
              {walkthroughs.map(({ Icon, title, intro, steps }) => (
                <div key={title} className={styles.walkCard}>
                  <div className={styles.walkHead}>
                    <span className={styles.iconBadge}>
                      <Icon />
                    </span>
                    <h3>{title}</h3>
                  </div>
                  <p>{intro}</p>
                  <ol>
                    {steps.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>

            <h3 className={styles.subhead}>Other tips for brand consistency</h3>
            <ul className={styles.tickList}>
              {brandTips.map((tip) => (
                <li key={tip}>
                  <CheckIcon />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Mistakes */}
          <section className={styles.section} id="mistakes">
            <h2>
              Five Mistakes That{" "}
              <span className={styles.accent}>Break Converted Templates</span>
            </h2>
            <p>
              Most problems with converted templates trace back to the same few
              habits. Here is what to avoid, and what to do instead.
            </p>
            <div className={styles.mistakeGrid}>
              {mistakes.map(({ avoid, instead, Visual }, i) => (
                <div key={avoid} className={styles.mistakeCard}>
                  <div className={styles.mistakeHead}>
                    <span className={styles.mistakeNum} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3>{avoid}</h3>
                  </div>
                  <div className={styles.mistakeVisual}>
                    <Visual />
                  </div>
                  <p className={styles.mistakeFix}>
                    <span className={styles.fixTag}>Instead</span>
                    {instead}
                  </p>
                </div>
              ))}
            </div>

            <h3 className={styles.subhead}>Before you share the template</h3>
            <ul className={styles.checklist}>
              {checklist.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Professional help */}
          <section className={styles.section} id="help">
            <h2>
              When You Might Want{" "}
              <span className={styles.accent}>Professional Help</span>
            </h2>
            <p>
              Converting from Canva to Word can be time-consuming, especially
              for complex designs. Consider professional help if you:
            </p>
            <ul className={styles.tickList}>
              {helpSigns.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
              <li>
                <CheckIcon />
                <span>
                  Are{" "}
                  <Link href="/services/microsoft-word/corporate-global-template-solution">
                    creating templates that many people will use
                  </Link>
                </span>
              </li>
            </ul>

            <div className={styles.ctaBand}>
              <div>
                <h3>Let us build it for you</h3>
                <p>
                  At <strong>Office Experts</strong>, we specialise in turning
                  Canva or PDF designs into clean, editable, on-brand Word
                  templates for businesses, NDIS providers, consultants and
                  more.
                </p>
              </div>
              <div className={styles.ctaActions}>
                <Link href="/contact-us" className={styles.buttonPrimary}>
                  Talk to our Word team <ArrowRightIcon />
                </Link>
                <Link
                  href="/services/microsoft-word/brand-template"
                  className={styles.buttonGhost}
                >
                  See brand templates
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className={styles.section} id="faq">
            <h2>
              Frequently Asked <span className={styles.accent}>Questions</span>
            </h2>
            <div className={styles.faq}>
              {faqs.map((item) => (
                <details key={item.q} className={styles.faqItem}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className={styles.section} id="conclusion">
            <h2>
              <span className={styles.accent}>Conclusion</span>
            </h2>
            <p>
              Converting a Canva design into Microsoft Word isn’t just possible,
              it can be a smart move for your brand. With a little time and
              attention to detail (or help from professionals), you can create a
              branded template that works just as beautifully in Word as it does
              in Canva.
            </p>
            <p>
              The key is to focus on the function of the document in Word, not
              just its appearance. By understanding what elements transfer well
              and which need reimagining, you can create professional Word
              templates that maintain your brand identity while adding the
              editability and compatibility that Word provides.
            </p>
            <p>
              If you need professional support with Microsoft Word templates, be
              sure to get in touch with the team at{" "}
              <Link href="/">Office Experts</Link>.
            </p>

            <div className={styles.author}>
              <span className={styles.avatarLarge} aria-hidden="true">
                <Image src={dan} alt={AUTHOR_NAME} width={38} height={38} />
              </span>
              <div>
                <p className={styles.authorName}>{AUTHOR_NAME}</p>
                <p className={styles.authorBio}>
                  Office Experts Group is an Australian Microsoft consultancy
                  established in 2000, helping organisations build Word
                  templates and automate their documents.
                </p>
              </div>
            </div>
          </section>

          {/* Related reading */}
          <section className={styles.sectionLast} aria-label="Related reading">
            <h2>
              Related <span className={styles.accent}>Reading</span>
            </h2>
            <div className={styles.relatedGrid}>
              {related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.relatedCard}
                >
                  <span className={styles.relatedKind}>{item.kind}</span>
                  <span className={styles.relatedTitle}>{item.title}</span>
                  <ArrowRightIcon />
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

export default CanvaToWordBlogPost;
