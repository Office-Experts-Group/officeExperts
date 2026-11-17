// /app/blog/power-apps-pdf-function/page.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

import Contact from "@/components/Contact";
import { generateOrganizationSchema } from "@/utils/schemaGenerators";
import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";

import marcello from "@/public/team/marcello.webp";

import styles from "@/styles/powerAppsPdfFunctionBlog.module.scss";

import HeroSvg from "./(svgs)/HeroSvg";
import FlowSvg from "./(svgs)/FlowSvg";
import DecisionSvg from "./(svgs)/DecisionSvg";
import AnatomySvg from "./(svgs)/AnatomySvg";
import {
  LiveScreenSketch,
  UnsupportedSketch,
  FileNameSketch,
  LongListSketch,
  PermissionSketch,
} from "./(svgs)/Illustrations";
import {
  IconReport,
  IconCertificate,
  IconForm,
  IconInvoice,
  IconWorkOrder,
  IconBulb,
  IconInfo,
  IconWarn,
  IconCheck,
  IconArrow,
  IconDevice,
  IconToggle,
  IconLayers,
  IconClock,
  IconChat,
} from "./(svgs)/Icons";

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with layout.js.
const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/blog/power-apps-pdf-function`;
const PAGE_TITLE = "Power Apps PDF Function: Export to PDF | Office Experts";
const PAGE_DESCRIPTION =
  "How the Power Apps PDF function works: turn it on, save PDFs to SharePoint, set page size and margins, and avoid the pitfalls that catch most makers out.";
const PAGE_HEADLINE =
  "Power Apps PDF Function - The Best Way to Export to PDF?";
const BREADCRUMB_NAME = "Power Apps PDF Function";
const AUTHOR_NAME = "Marcello Brocchi";
const AUTHOR_LINKEDIN = "https://www.linkedin.com/in/marcellobrocchi/";
const YOUTUBE_CHANNEL = "https://www.youtube.com/@ChinoDoesStuff/featured";
const YOUTUBE_EMBED =
  "https://www.youtube.com/embed/BiOCK1jDOMo?si=MZOdygQP0ZkibR4D";
const READING_TIME = "11 min read";
// The video thumbnail is the only real image for this post, so it is the Article image.
const HERO_IMAGE_URL = "https://i.ytimg.com/vi/BiOCK1jDOMo/maxresdefault.jpg";
// datePublished is unchanged from the original post. Edit dateModified by hand
// when the content changes. +11:00 is AEDT (first Sunday in October to the
// first Sunday in April), +10:00 is AEST.
const DATE_PUBLISHED = "2025-04-08T09:00:00+10:00";
const DATE_MODIFIED = "2026-11-16T09:00:00+11:00";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Sydney",
  });

const TOC = [
  { id: "intro", title: "Introduction" },
  { id: "video", title: "Prefer to watch the video?" },
  { id: "why", title: "Why use the PDF function?" },
  { id: "how", title: "How the PDF function works" },
  { id: "limits", title: "What it can and can’t do" },
  { id: "choose", title: "Which route should your PDF take?" },
  { id: "build", title: "Creating a PDF export button" },
  { id: "customise", title: "Customising your PDFs" },
  { id: "viewer", title: "Using the PDF viewer control" },
  { id: "tips", title: "Tips for better PDF generation" },
  { id: "uses", title: "Use cases for PDF generation" },
  { id: "mistakes", title: "Common mistakes to avoid" },
  { id: "help", title: "When to get help" },
  { id: "faq", title: "Frequently asked questions" },
  { id: "conclusion", title: "Conclusion" },
];

const GLANCE = [
  {
    value: "1 formula",
    label: "Screen to PDF",
    line: "PDF(Screen1) is all it takes to make a first PDF.",
  },
  {
    value: "5 settings",
    label: "Page control",
    line: "Size, DPI, Margin, Orientation and ExpandContainers.",
  },
  {
    value: "Experimental",
    label: "Status today",
    line: "Off by default, and not meant for production use yet.",
  },
];

const WHY_CARDS = [
  {
    Icon: IconLayers,
    title: "Your layout is the PDF",
    text: "What users see in the app is what lands on the page, so there’s no second template to design and keep in step.",
  },
  {
    Icon: IconCheck,
    title: "One formula, no conversion",
    text: "You don’t need an HTML template or a document-conversion step just to make the file. A flow is only needed if you want to store it.",
  },
  {
    Icon: IconChat,
    title: "Fits the connectors you use",
    text: "The result is a file you can pass to the Outlook connector or a Power Automate flow, like any other file.",
  },
  {
    Icon: IconClock,
    title: "Quick to try",
    text: "Switch it on, point it at a screen or container, and you can have a first PDF in a few minutes.",
  },
];

const WORKS_WELL = [
  "Screens, containers and vertical galleries",
  "Vertical and horizontal layout containers",
  "Passing the file to an Outlook email or a flow",
  "Using it in OnSelect, OnVisible, OnHidden or any other behaviour property",
  "Tall content, when ExpandContainers is set to true",
];

const WATCH_OUT = [
  "Only the screen that is currently showing can be exported",
  "Charts, maps and Power BI tiles aren’t supported",
  "Nested galleries aren’t supported",
  "Fillable PDFs aren’t supported",
  "Non-Latin text and bold or italic styles may not render correctly with some fonts",
  "The PDF is generated on the user’s device, so very large files or many large images can crash the app, mostly on mobile",
];

const OPTION_ROWS = [
  {
    name: "Size",
    does: "The page size, for example “A4”, “A3” or “Letter”.",
    fallback: "Letter in the US and Canada, A4 elsewhere",
  },
  {
    name: "DPI",
    does: "The resolution. It must be greater than 0, and content that doesn’t fit inside the margins may end up at a higher effective DPI.",
    fallback: "96",
  },
  {
    name: "Margin",
    does: "The page margin, written with a unit such as in, cm, mm, pt or px.",
    fallback: "0.5 inch (12.7 mm) on every side",
  },
  {
    name: "Orientation",
    does: "“Portrait” or “Landscape”.",
    fallback: "Portrait",
  },
  {
    name: "ExpandContainers",
    does: "When true, expands screens, containers and scrollable controls so all of their content shows. Nested galleries still aren’t supported.",
    fallback: "false",
  },
];

const TIP_CARDS = [
  {
    title: "Design PDF-specific layouts",
    text: "Build the report area for paper, not for tapping.",
    steps: [
      "Choose a dedicated container, or a dedicated screen you navigate to before calling PDF().",
      "Take out buttons, menus and input controls from that area.",
      "Size it for A4 portrait or landscape so it isn’t squashed to fit.",
    ],
  },
  {
    title: "Plan for long content",
    text: "Real records are longer than the sample you built with.",
    steps: [
      "Use a single vertical gallery for the rows.",
      "Set ExpandContainers to true so every row shows.",
      "Test with the longest record you have, not the tidiest.",
    ],
  },
  {
    title: "Show that something’s happening",
    text: "PDF generation can take a few seconds.",
    steps: [
      "Set a variable such as varBusy to true before you call PDF().",
      "Show a spinner or message while it’s true.",
      "Set it back to false once the file is saved or opened.",
    ],
  },
  {
    title: "Test on real devices",
    text: "Output can vary with the device running the app.",
    steps: [
      "Try a phone or tablet as well as a laptop.",
      "Use compressed images and keep the layout lean.",
      "Check fonts, especially non-Latin text, bold and italic.",
    ],
  },
];

const USE_CASES = [
  {
    Icon: IconReport,
    title: "Reports and documentation",
    text: "Create professional reports that users can download and share, straight from the data they’re looking at.",
  },
  {
    Icon: IconCertificate,
    title: "Certificates and confirmations",
    text: "Generate certificates of completion or booking confirmations the moment someone finishes a task.",
  },
  {
    Icon: IconForm,
    title: "Forms and agreements",
    text: "Turn a completed form into a PDF record for the file. It’s a static copy, not a fillable form.",
  },
  {
    Icon: IconInvoice,
    title: "Invoices and receipts",
    text: "Produce clean invoices and receipts that can be downloaded or emailed to the customer.",
  },
  {
    Icon: IconWorkOrder,
    title: "Work orders and instructions",
    text: "Give field teams a printable work order or set of instructions with the job details already filled in.",
  },
];

const MISTAKES = [
  {
    Sketch: LiveScreenSketch,
    habit: "Exporting the live working screen",
    why: "Menus, buttons and inputs end up on the page, and the layout is built for a phone or a mouse, not paper.",
    fix: "Build a dedicated report container or screen sized for A4.",
  },
  {
    Sketch: UnsupportedSketch,
    habit: "Putting charts, maps or Power BI tiles on the page",
    why: "Microsoft lists these as unsupported, so they’re likely to be missing or wrong in the PDF.",
    fix: "Show the figures as labels or a gallery of rows instead.",
  },
  {
    Sketch: FileNameSketch,
    habit: "Calling Now() twice for the file name",
    why: "Each call returns a new time, so the saved file and the link you open can differ by a second or two.",
    fix: "Store the name in a variable once and reuse it.",
  },
  {
    Sketch: LongListSketch,
    habit: "Letting a fixed-height list cut rows off",
    why: "Rows below the visible area are easy to lose, and nobody notices until a customer does.",
    fix: "Use one vertical gallery and set ExpandContainers to true.",
  },
  {
    Sketch: PermissionSketch,
    habit: "Saving the PDF where users can’t open it",
    why: "It works for you as the owner, then fails for everyone else with a permissions error.",
    fix: "Save to a library your audience can already read, and test with a normal user account.",
  },
];

const CHECKLIST = [
  "The PDF function is switched on in the app",
  "The button sits on the screen being exported",
  "The export area has no charts, maps or Power BI tiles",
  "The longest realistic record still fits",
  "Page size and orientation match how it will be printed",
  "The file name is built once and reused",
  "The flow saves to a library users can open",
  "It has been tested on a phone or tablet as well as a laptop",
  "A loading message shows while the PDF is generated",
  "Someone knows the feature is experimental and has a fallback",
];

const FAQS = [
  {
    q: "Is the Power Apps PDF function ready for production?",
    a: "Microsoft labels it experimental and says experimental features aren’t meant for production use. It’s switched off by default. It suits prototypes and internal tools you can test thoroughly, but for anything critical keep a fallback, such as a Power Automate document flow, in your plan.",
  },
  {
    q: "Can the PDF function create fillable PDFs?",
    a: "No. Microsoft lists fillable PDFs as not supported. The function produces a static PDF of what’s on the screen, so use it for records, reports and confirmations rather than forms people complete in a PDF reader.",
  },
  {
    q: "Why is my chart or map missing from the PDF?",
    a: "Charts, maps and Power BI tiles aren’t supported by the function. Show the same figures as labels or a gallery of rows, and keep any visual-only content out of the area you export.",
  },
  {
    q: "Why did my app slow down or crash while making a PDF?",
    a: "The PDF is generated on the device running the app, so large files, or many or large images, can cause problems, particularly on phones. Compress images, keep the layout lean and test on a typical user device before you roll it out.",
  },
  {
    q: "Can I email the PDF without saving it first?",
    a: "Yes. The function returns a file you can pass straight to an action connector, such as the Office 365 Outlook connector, or to a Power Automate flow. You only need SharePoint when you want a stored copy.",
  },
];

// ---------------------------------------------------------------------------
// Code samples
// ---------------------------------------------------------------------------
const onSelectCode = `// 1. Build the file name once, so the saved file and the opened link always match
Set(
    varFileName,
    "PDF_" & Text(Now(), "yyyymmdd_hhmmss") & "_export.pdf"
);

// 2. Turn the current screen into a PDF
Set(
    varPDF,
    PDF(ViewIssue) // the screen to convert
);

// 3. Save the PDF to SharePoint with the SaveFileToSharePoint flow
SaveFileToSharePoint.Run(
    varFileName,
    {
        file: {
            contentBytes: varPDF,
            name: varFileName
        }
    }
);

// 4. Open the saved PDF in a new browser tab
Launch(
    "https://yoursharepoint.com/sites/yoursite/Shared%20Documents/" & varFileName
);`;

const syntaxCode = `PDF( ScreenOrControl [, { Size, DPI, Margin, Orientation, ExpandContainers } ] )`;

const pdfOptionsCode = `// A whole screen, with page settings
PDF(
    Screen1,
    {
        Size: "A4",
        DPI: 150,
        Margin: "20mm",
        Orientation: "Portrait"
    }
)

// One container only, landscape, with long content expanded
PDF(
    Container1,
    {
        Size: "A3",
        Orientation: "Landscape",
        ExpandContainers: true
    }
)`;

const viewerCode = `// PDF viewer control, Document property
varPDF`;

const emailCode = `// Email the PDF as an attachment, no SharePoint needed
Office365Outlook.SendEmailV2(
    "someone@example.com",
    "Your inspection report",
    "Your report is attached.",
    {
        Attachments: Table(
            {
                Name: "Inspection report.pdf",
                ContentBytes: varPDF
            }
        )
    }
);`;

// ---------------------------------------------------------------------------
// Case study card (pulled from caseStudies.js, never copied by hand)
// ---------------------------------------------------------------------------
const caseStudy = getCaseStudyBySlug("manufacturing-project-setup-automation");

const RELATED = [
  {
    type: "Blog",
    href: "/blog/file-attachments-in-power-apps",
    title: "File attachments in Power Apps",
    text: "Build the file upload flow that the SharePoint route in this guide relies on.",
    cta: "Read the file attachments guide",
  },
  {
    type: "Blog",
    href: "/blog/export-to-pdf-in-power-apps",
    title: "Export to PDF in Power Apps",
    text: "Another look at getting PDFs out of a Power Apps app.",
    cta: "Read the export to PDF guide",
  },
  caseStudy && {
    type: "Case study",
    href: `/case-studies/${caseStudy.slug}`,
    title: caseStudy.title,
    text: caseStudy.truncatedDescription,
    cta: caseStudy.linkText,
  },
].filter(Boolean);

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------
const articleSchema = {
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
      image: HERO_IMAGE_URL,
      author: {
        "@type": "Person",
        name: AUTHOR_NAME,
        url: AUTHOR_LINKEDIN,
      },
      publisher: { "@id": `${SITE_URL}#organization` },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      inLanguage: "en-AU",
      mainEntityOfPage: { "@id": `${PAGE_URL}#webpage` },
      video: {
        "@type": "VideoObject",
        name: PAGE_HEADLINE,
        description:
          "A video walkthrough of the Power Apps PDF function: what it does, how to switch it on and how to save the result to SharePoint.",
        thumbnailUrl: HERO_IMAGE_URL,
        uploadDate: DATE_PUBLISHED,
        duration: "PT13M33S",
        embedUrl: YOUTUBE_EMBED,
        contentUrl: "https://www.youtube.com/watch?v=BiOCK1jDOMo",
      },
    },
  ],
};

// ---------------------------------------------------------------------------
// Small local helpers
// ---------------------------------------------------------------------------
const Section = ({ id, lead, accent, children }) => (
  <section id={id} className={styles.section} aria-labelledby={`${id}-heading`}>
    <h2 id={`${id}-heading`} className={styles.h2}>
      {lead}
      {lead ? " " : null}
      <span className={styles.accent}>{accent}</span>
    </h2>
    {children}
  </section>
);

const Callout = ({ Icon, label, tone = "info", children }) => (
  <aside
    className={`${styles.callout} ${tone === "warn" ? styles.calloutWarn : ""}`}
  >
    <svg
      className={styles.calloutRings}
      viewBox="0 0 120 120"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="120" cy="0" r="30" fill="none" stroke="currentColor" />
      <circle cx="120" cy="0" r="55" fill="none" stroke="currentColor" />
      <circle cx="120" cy="0" r="80" fill="none" stroke="currentColor" />
    </svg>
    <span className={styles.calloutIcon}>
      <Icon />
    </span>
    <div className={styles.calloutBody}>
      <p className={styles.calloutLabel}>{label}</p>
      <div className={styles.calloutText}>{children}</div>
    </div>
  </aside>
);

const Diagram = ({ caption, children }) => (
  <figure className={styles.diagram}>
    <div className={styles.diagramScroll}>
      <div className={styles.diagramInner}>{children}</div>
    </div>
    <figcaption className={styles.figcaption}>{caption}</figcaption>
  </figure>
);

const Code = ({ label, code }) => (
  <figure className={styles.code}>
    <figcaption className={styles.codeLabel}>{label}</figcaption>
    <pre tabIndex={0}>
      <code>{code}</code>
    </pre>
  </figure>
);

const ProTip = ({ children }) => (
  <p className={styles.proTip}>
    <span className={styles.proTipIcon}>
      <IconBulb />
    </span>
    <span>
      <strong>Pro tip:</strong> {children}
    </span>
  </p>
);

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
const PowerAppsPDFBlogPost = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className={styles.page}>
        {/* ---------------------------------------------------------- Hero */}
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <h1 className={styles.title}>
                Power Apps PDF Function{" "}
                <span className={styles.accent}>
                  - The Best Way to Export to PDF?
                </span>
              </h1>
              <p className={styles.lede}>
                Microsoft’s PDF function turns a Power Apps screen into a PDF
                file with a single formula. Here’s how to switch it on, save the
                result to SharePoint, tune the page layout and avoid the
                problems that catch most makers out.
              </p>
              <div className={styles.authorRow}>
                <span className={styles.avatar} aria-hidden="true">
                  <Image
                    src={marcello}
                    alt={AUTHOR_NAME}
                    width={44}
                    height={44}
                  />
                </span>
                <div>
                  <p className={styles.authorName}>By {AUTHOR_NAME}</p>
                  <p className={styles.meta}>
                    Updated{" "}
                    <time dateTime={DATE_MODIFIED}>
                      {formatDate(DATE_MODIFIED)}
                    </time>
                    {" · "}
                    {READING_TIME}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.heroArt}>
              <HeroSvg />
            </div>
          </div>
        </header>

        {/* ----------------------------------------------------- At a glance */}
        <section className={styles.glance} aria-label="At a glance">
          {GLANCE.map((item) => (
            <div key={item.value} className={styles.glanceCard}>
              <p className={styles.glanceValue}>{item.value}</p>
              <p className={styles.glanceLabel}>{item.label}</p>
              <p className={styles.glanceLine}>{item.line}</p>
            </div>
          ))}
        </section>

        {/* ------------------------------------------------ Contents + article */}
        <div className={styles.layout}>
          <nav className={styles.toc} aria-label="Contents">
            <p className={styles.tocTitle}>On this page</p>
            <ul>
              {TOC.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
              ))}
            </ul>
          </nav>

          <article className={styles.article}>
            {/* ------------------------------------------------ Introduction */}
            <Section id="intro" accent="Introduction">
              <p>
                Microsoft has added a new PDF generation capability to Power
                Apps, making it easier than ever to create PDF documents
                directly from your applications. While the feature is still
                labelled experimental, it’s available now and is a real
                improvement on the workarounds makers have relied on until now.
              </p>
              <p>
                In this guide you’ll learn how to enable and use the PDF
                function, create PDFs from your screens or containers, and give
                users a smooth way to view and download what they generate.
                We’ve also added the settings, limits and mistakes we’ve run
                into, so you can decide whether it’s ready for your app.
              </p>
              <Callout Icon={IconInfo} label="Before you start">
                <p>
                  Microsoft says experimental features aren’t meant for
                  production use and may have restricted functionality. Test the
                  PDF function properly, and keep a fallback in mind, before you
                  put it in front of customers.
                </p>
              </Callout>
            </Section>

            {/* ----------------------------------------------------- Video */}
            <Section id="video" lead="Prefer to watch" accent="the video?">
              <p>
                Head over to my YouTube channel{" "}
                <a href={YOUTUBE_CHANNEL} rel="nofollow noreferrer noopener">
                  Chino Does Stuff
                </a>{" "}
                to watch the video tutorial. You’ll find a variety of videos
                there, with loads of tricks and tips on the entire Power
                Platform suite.
              </p>
              <div className={styles.video}>
                <iframe
                  src={YOUTUBE_EMBED}
                  title="Power Apps PDF Function - The Best Way to Export to PDF? (video)"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </Section>

            {/* -------------------------------------------------------- Why */}
            <Section id="why" lead="Why use the" accent="PDF function?">
              <p>
                Getting a PDF out of a canvas app has usually meant building a
                second copy of the layout somewhere else, such as a Word
                template or an HTML page inside a flow, then converting it. That
                works, but it’s a lot of moving parts for what is often a
                one-page summary.
              </p>
              <p>
                The PDF function takes a different route. You point it at a
                screen or container that already exists, and it hands back a
                file.
              </p>
              <div className={styles.reasonGrid}>
                {WHY_CARDS.map(({ Icon, title, text }) => (
                  <div key={title} className={styles.reasonCard}>
                    <span className={styles.badge}>
                      <Icon />
                    </span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
              <Callout Icon={IconWarn} label="When it may not suit" tone="warn">
                <p>
                  Long, many-page documents, or documents that must be fillable,
                  are usually better served by a document-generation flow. Our{" "}
                  <Link
                    className={styles.inlineLink}
                    href="/blog/export-to-pdf-in-power-apps"
                  >
                    guide to exporting to PDF in Power Apps
                  </Link>{" "}
                  looks at another way to approach it.
                </p>
              </Callout>
            </Section>

            {/* -------------------------------------------------------- How */}
            <Section id="how" lead="How the" accent="PDF function works">
              <p>
                The PDF function is straightforward. It converts a screen or
                control into a PDF document and returns the file, which you can
                keep in a variable or hand to another action. Microsoft’s
                documentation describes the output as held in memory.
              </p>
              <p>The basic syntax is:</p>
              <Code label="Syntax" code={syntaxCode} />
              <p>The first argument is what to convert. It can be:</p>
              <ul className={styles.plainList}>
                <li>A screen</li>
                <li>
                  A container, including vertical and horizontal layout
                  containers
                </li>
                <li>A vertical gallery</li>
              </ul>
              <p>
                The second argument is an optional record of settings, covered
                below. The function returns a file you can use to:
              </p>
              <ul className={styles.plainList}>
                <li>Preview the PDF in a PDF viewer control</li>
                <li>Save the PDF to SharePoint or other storage with a flow</li>
                <li>Email the PDF as an attachment</li>
                <li>Open or download the PDF on the user’s device</li>
              </ul>
              <Diagram caption="What goes into PDF() and where the result can go.">
                <FlowSvg />
              </Diagram>
            </Section>

            {/* ------------------------------------------------------ Limits */}
            <Section
              id="limits"
              lead="What the PDF function"
              accent="can and can’t do"
            >
              <p>
                Knowing the edges early saves rework. These come from
                Microsoft’s current documentation for the experimental feature,
                so check it again if you’re reading this a while after we
                updated it.
              </p>
              <div className={styles.splitLists}>
                <div className={styles.listCard}>
                  <h3>
                    <span className={styles.listIcon}>
                      <IconCheck />
                    </span>
                    Works well
                  </h3>
                  <ul>
                    {WORKS_WELL.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={`${styles.listCard} ${styles.listCardMuted}`}>
                  <h3>
                    <span className={styles.listIcon}>
                      <IconWarn />
                    </span>
                    Watch out for
                  </h3>
                  <ul>
                    {WATCH_OUT.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>

            {/* ------------------------------------------------------ Choose */}
            <Section
              id="choose"
              lead="Which route should"
              accent="your PDF take?"
            >
              <p>
                Making the PDF is only half the job. What happens to it next
                decides what you need to build around it. Answer two questions
                before you start.
              </p>
              <Diagram caption="Decision flow: pick the route before you build.">
                <DecisionSvg />
              </Diagram>
              <p>
                For most apps we start with the SharePoint route, because the
                PDF is still there after the app closes and anyone with access
                can open it again. That’s the route we build below.
              </p>
            </Section>

            {/* ------------------------------------------------------- Build */}
            <Section id="build" lead="Creating a" accent="PDF export button">
              <p>
                Let’s build a solution that creates a PDF and lets users view
                and download it. We’ll use a flow to save the PDF to SharePoint
                and then open it in a new browser tab.
              </p>

              <ol className={styles.timeline}>
                <li>
                  <span className={styles.stepBadge} aria-hidden="true">
                    1
                  </span>
                  <div className={styles.stepBody}>
                    <h3>Enabling the experimental PDF function</h3>
                    <p>
                      Because the PDF function is still experimental, you’ll
                      need to switch it on in the app you’re editing:
                    </p>
                    <ol className={styles.miniList}>
                      <li>Open your Power App in the maker portal.</li>
                      <li>Select Settings (the gear icon).</li>
                      <li>Select “Upcoming features”.</li>
                      <li>Go to the “Experimental” tab.</li>
                      <li>Find the PDF function and toggle it to “On”.</li>
                      <li>Save your changes.</li>
                    </ol>
                    <p>
                      Once it’s on, the PDF function and the PDF viewer control
                      are available in your app.
                    </p>
                    <ProTip>
                      Turn it on in each app that will use the function. If the
                      formula isn’t recognised, check the setting first.
                    </ProTip>
                  </div>
                </li>

                <li>
                  <span className={styles.stepBadge} aria-hidden="true">
                    2
                  </span>
                  <div className={styles.stepBody}>
                    <h3>Adding the button</h3>
                    <p>
                      Add a button to the screen you want to export and give it
                      an icon that suggests a PDF. The function can only export
                      the screen that’s currently showing, so the button needs
                      to live on that screen.
                    </p>
                    <ProTip>
                      Disable the button, or show a spinner, while the PDF is
                      being generated so nobody taps it twice.
                    </ProTip>
                  </div>
                </li>

                <li>
                  <span className={styles.stepBadge} aria-hidden="true">
                    3
                  </span>
                  <div className={styles.stepBody}>
                    <h3>Connecting to SharePoint for PDF storage</h3>
                    <p>
                      The formula in the next step calls a flow named
                      SaveFileToSharePoint. It’s a standard Power Automate flow
                      that saves a file to a SharePoint document library. If you
                      don’t already have one, you’ll need to create it.
                    </p>
                    <p>
                      For detailed instructions on building a file upload flow,
                      see our guide to{" "}
                      <Link
                        className={styles.inlineLink}
                        href="/blog/file-attachments-in-power-apps"
                      >
                        file attachments in Power Apps
                      </Link>
                      , which walks through the same kind of flow step by step.
                    </p>
                    <p>The flow should:</p>
                    <ul className={styles.tickList}>
                      <li>
                        Accept an ID parameter and a file object with
                        contentBytes and name properties
                      </li>
                      <li>
                        Use the “Create file” action to save the file to a
                        SharePoint document library
                      </li>
                      <li>Return the URL of the saved file (optional)</li>
                    </ul>
                    <ProTip>
                      If you can, have the flow return the saved file’s URL and
                      launch that, so you never have to build the link by hand.
                    </ProTip>
                  </div>
                </li>

                <li>
                  <span className={styles.stepBadge} aria-hidden="true">
                    4
                  </span>
                  <div className={styles.stepBody}>
                    <h3>Writing the OnSelect formula</h3>
                    <p>Add this to the button’s OnSelect property:</p>
                    <Code label="OnSelect" code={onSelectCode} />
                    <p>This formula does four things:</p>
                    <ul className={styles.tickList}>
                      <li>Builds the file name once, so it can be reused</li>
                      <li>
                        Creates a PDF from the current screen and stores it in a
                        variable
                      </li>
                      <li>Uses the flow to save the PDF to SharePoint</li>
                      <li>
                        Opens the saved PDF in a new browser tab with the Launch
                        function
                      </li>
                    </ul>
                    <ProTip>
                      Swap in your own library address. Spaces in the path need
                      to be encoded, such as %20 for a space in “Shared
                      Documents”.
                    </ProTip>
                  </div>
                </li>

                <li>
                  <span className={styles.stepBadge} aria-hidden="true">
                    5
                  </span>
                  <div className={styles.stepBody}>
                    <h3>Testing with real content</h3>
                    <p>
                      Run it with your longest real record and open the PDF from
                      a normal user account, not just your own. Check the page
                      breaks, the fonts and that the file opens from the link.
                    </p>
                    <ProTip>
                      Try it on a phone as well as a laptop. The PDF is made on
                      the device running the app, so results can differ.
                    </ProTip>
                  </div>
                </li>
              </ol>

              <h3 className={styles.h3}>Prefer to email the PDF?</h3>
              <p>
                If nobody needs a stored copy, skip SharePoint. The PDF can go
                straight into an email as an attachment through the Office 365
                Outlook connector:
              </p>
              <Code label="Email instead" code={emailCode} />
            </Section>

            {/* --------------------------------------------------- Customise */}
            <Section id="customise" lead="Customising" accent="your PDFs">
              <p>
                The PDF function also accepts an optional record that changes
                the page. Here are two examples:
              </p>
              <Code label="PDF settings" code={pdfOptionsCode} />
              <p>
                You can choose to convert only a specific container instead of
                an entire screen, which gives you more control over what appears
                in the PDF. These are the settings available:
              </p>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope="col">Setting</th>
                      <th scope="col">What it does</th>
                      <th scope="col">Default</th>
                    </tr>
                  </thead>
                  <tbody>
                    {OPTION_ROWS.map((row) => (
                      <tr key={row.name}>
                        <th scope="row">{row.name}</th>
                        <td data-label="What it does">{row.does}</td>
                        <td data-label="Default">{row.fallback}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className={styles.note}>
                Setting names and defaults are taken from Microsoft’s
                documentation at the time of writing. The feature is
                experimental, so confirm them against the current documentation.
              </p>
              <p>
                In Australia, set Size to “A4” yourself if you want to be sure,
                rather than relying on the default. A higher DPI than the
                default can mean bigger files and more strain on the device, so
                raise it only when you’ve tested the result.
              </p>
            </Section>

            {/* ----------------------------------------------------- Viewer */}
            <Section id="viewer" lead="Using the" accent="PDF viewer control">
              <p>
                If you want to show a preview of the PDF before saving or
                downloading it, you can use the PDF viewer control. Add it to
                your screen and set its Document property to the variable that
                holds the PDF:
              </p>
              <Code label="Document property" code={viewerCode} />
              <Callout Icon={IconWarn} label="Limitations" tone="warn">
                <p>
                  When we first tested it, the PDF viewer control was very
                  basic, with no controls for zooming, downloading or printing.
                  Check what the current version offers before you rely on it.
                  If users need to read, download or print the file, opening it
                  in a new browser tab, as in the SharePoint route above, gives
                  them their browser’s own PDF tools.
                </p>
                <p>
                  Also note that a PDF viewer control placed inside the area you
                  export appears as a black shape in the generated file. Target
                  a container or gallery instead of the whole screen to leave it
                  out.
                </p>
              </Callout>
            </Section>

            {/* -------------------------------------------------------- Tips */}
            <Section id="tips" lead="Tips for better" accent="PDF generation">
              <p>
                To get the best results from the PDF function, design the page
                before you write the formula. A screen built for PDF output
                looks quite different from one built for tapping.
              </p>
              <Diagram caption="A screen designed to become one A4 page.">
                <AnatomySvg />
              </Diagram>
              <div className={styles.walkGrid}>
                {TIP_CARDS.map((card) => (
                  <div key={card.title} className={styles.walkCard}>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    <ol>
                      {card.steps.map((step, i) => (
                        <li key={step}>
                          <span className={styles.miniNum} aria-hidden="true">
                            {i + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </Section>

            {/* -------------------------------------------------------- Uses */}
            <Section id="uses" lead="Use cases for" accent="PDF generation">
              <p>
                The PDF function opens up many possibilities for Power Apps:
              </p>
              <ul className={styles.featureRows}>
                {USE_CASES.map(({ Icon, title, text }) => (
                  <li key={title}>
                    <span className={styles.badge}>
                      <Icon />
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Section>

            {/* ---------------------------------------------------- Mistakes */}
            <Section id="mistakes" lead="Common mistakes" accent="to avoid">
              <p>
                These are the slips we see most often when a first PDF export
                goes from a demo to real use.
              </p>
              <div className={styles.mistakeGrid}>
                {MISTAKES.map(({ Sketch, habit, why, fix }, i) => (
                  <article key={habit} className={styles.mistakeCard}>
                    <span className={styles.mistakeNum} aria-hidden="true">
                      {i + 1}
                    </span>
                    <h3>{habit}</h3>
                    <p>{why}</p>
                    <div className={styles.sketch}>
                      <Sketch />
                    </div>
                    <p className={styles.instead}>
                      <span className={styles.insteadPill}>Instead</span>
                      {fix}
                    </p>
                  </article>
                ))}
              </div>

              <h3 className={styles.h3}>Check before you share the app</h3>
              <ul className={styles.checklist}>
                {CHECKLIST.map((item) => (
                  <li key={item}>
                    <span className={styles.checkIcon}>
                      <IconCheck />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            {/* ------------------------------------------------------- Help */}
            <Section id="help" lead="When to" accent="get help">
              <div className={styles.cta}>
                <div className={styles.ctaCopy}>
                  <h3>Need a hand with Power Apps PDFs?</h3>
                  <p>
                    A first PDF export is quick. A reliable one, with the right
                    layout, a storage flow and the right permissions, takes a
                    little more care. Our Power Platform team can build it with
                    you or for you, and train your people to maintain it.
                  </p>
                  <div className={styles.ctaActions}>
                    <a href="#contact" className="btn">
                      Talk to our team
                    </a>
                    <Link
                      href="/services/microsoft-power-platform/power-apps"
                      className={styles.ctaLink}
                    >
                      Power Apps services <IconArrow />
                    </Link>
                  </div>
                </div>
                <span className={styles.ctaIcon} aria-hidden="true">
                  <IconDevice />
                </span>
              </div>
              <p>
                If you’d rather learn it yourself,{" "}
                <Link
                  className={styles.inlineLink}
                  href="/microsoft-support-and-training-australia"
                >
                  Microsoft support and training
                </Link>{" "}
                covers Power Platform too, and{" "}
                <Link
                  className={styles.inlineLink}
                  href="/services/business-process-automation"
                >
                  business process automation
                </Link>{" "}
                is where we help when the PDF is one step in a longer workflow.
              </p>
            </Section>

            {/* --------------------------------------------------------- FAQ */}
            <Section id="faq" lead="Frequently asked" accent="questions">
              <div className={styles.faq}>
                {FAQS.map((item) => (
                  <details key={item.q} className={styles.faqItem}>
                    <summary>{item.q}</summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </Section>

            {/* ---------------------------------------------------- Conclusion */}
            <Section id="conclusion" accent="Conclusion">
              <p>
                The new PDF function in Power Apps is a welcome addition that
                makes it much easier to generate PDF documents directly from
                your apps. While it’s still experimental, it works well for the
                right jobs and gives you a cleaner, more integrated solution
                than the older workarounds.
              </p>
              <p>
                By combining the PDF function with a SharePoint storage flow and
                the Launch function, you can give users a smooth way to create,
                view and download PDFs from your Power Apps.
              </p>
              <p>
                As the feature moves out of experimental status, we can expect
                more capabilities and better integration with the rest of the
                Power Platform. In the meantime, this approach is a practical
                solution for PDF generation needs, as long as you plan for the
                limits above.
              </p>
              <p>
                If you’d like to see more Power Apps tips and techniques, head
                over to the{" "}
                <a href={YOUTUBE_CHANNEL} rel="nofollow noreferrer noopener">
                  YouTube channel
                </a>{" "}
                and leave a comment there. I actively monitor and respond to all
                YouTube comments!
              </p>

              <div className={styles.authorBox}>
                <span className={styles.avatarLarge} aria-hidden="true">
                  <Image
                    src={marcello}
                    alt={AUTHOR_NAME}
                    width={56}
                    height={56}
                  />
                </span>
                <div>
                  <p className={styles.authorBoxLabel}>About the author</p>
                  <p className={styles.authorBoxName}>{AUTHOR_NAME}</p>
                  <p className={styles.authorBoxText}>
                    Marcello is a lead developer at Office Experts Group, an
                    Australian Microsoft consultancy established in 2000. He
                    specialises in computer science and Power Platform
                    integration, and is the founder of the YouTube channel{" "}
                    <a
                      href={YOUTUBE_CHANNEL}
                      rel="nofollow noreferrer noopener"
                    >
                      ChinoDoesStuff
                    </a>
                    . If you have any questions, please get in touch using the
                    form below, or find him on{" "}
                    <a
                      href={AUTHOR_LINKEDIN}
                      rel="nofollow noreferrer noopener"
                    >
                      LinkedIn
                    </a>
                    .
                  </p>
                </div>
              </div>
            </Section>

            {/* ---------------------------------------------------- Related */}
            <Section id="related" lead="Keep" accent="reading">
              <div className={styles.relatedGrid}>
                {RELATED.map((item) => (
                  <article key={item.href} className={styles.relatedCard}>
                    <p className={styles.relatedType}>{item.type}</p>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <Link href={item.href} className={styles.relatedLink}>
                      {item.cta} <IconArrow />
                    </Link>
                  </article>
                ))}
              </div>
            </Section>
          </article>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default PowerAppsPDFBlogPost;
