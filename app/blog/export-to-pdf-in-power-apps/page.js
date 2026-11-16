// /app/blog/export-to-pdf-in-power-apps/page.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

import Contact from "@/components/Contact";
import { generateOrganizationSchema } from "@/utils/schemaGenerators";

import marcello from "@/public/team/marcello.webp";

import styles from "@/styles/exportToPdfInPowerAppsBlog.module.scss";

import HeroSvg from "./(svgs)/HeroSvg";
import FlowSvg from "./(svgs)/FlowSvg";
import DecisionSvg from "./(svgs)/DecisionSvg";
import AnatomySvg from "./(svgs)/AnatomySvg";
import MistakeSketch from "./(svgs)/Illustrations";
import {
  IconInfo,
  IconTip,
  IconWarn,
  IconBolt,
  IconFile,
  IconTable,
  IconCode,
  IconClock,
  IconLayers,
  IconPlay,
  IconCheck,
  IconArrow,
  IconPlus,
} from "./(svgs)/Icons";

// Keep these three constants in sync with layout.js
const PAGE_URL =
  "https://www.officeexperts.com.au/blog/export-to-pdf-in-power-apps";
const PAGE_TITLE = "Export to PDF in Power Apps | Office Experts";
const PAGE_DESCRIPTION =
  "Learn how to export to PDF in Power Apps with Power Automate. Build the HTML, add images, convert the file and link the PDF to your SharePoint record.";

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_HEADLINE = "Export to PDF in Power Apps - The Best Way to Do It!";
const BREADCRUMB_NAME = "Export to PDF in Power Apps";
const AUTHOR_NAME = "Marcello Brocchi";
const READING_TIME = "14 min read";
// The post has no hero photo (the hero is an SVG), so the video thumbnail is used for the
// Article schema image. Swap for a dedicated image in /public when you have one.
const HERO_IMAGE_PATH =
  "https://img.youtube.com/vi/_mgLYllGY-Y/maxresdefault.jpg";
const HERO_IMAGE_ALT =
  "Power Apps form turning into a PDF through Power Automate";

const DATE_PUBLISHED = "2025-04-14T09:00:00+10:00";
const DATE_MODIFIED = "2026-11-16T09:00:00+11:00"; // AEDT (+11:00) from the first Sunday in October

const VIDEO_ID = "_mgLYllGY-Y";
const YOUTUBE_CHANNEL = "https://www.youtube.com/@ChinoDoesStuff/featured";
const LINKEDIN_URL = "https://www.linkedin.com/in/marcellobrocchi";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Sydney",
  });

const SECTIONS = [
  { id: "introduction", label: "Introduction" },
  { id: "video", label: "Watch the video" },
  { id: "why", label: "Why Power Automate" },
  { id: "can", label: "What it can and can’t do" },
  { id: "choose", label: "Which method to use" },
  { id: "scenario", label: "The sample scenario" },
  { id: "build", label: "Building the flow" },
  { id: "test", label: "Testing the solution" },
  { id: "customise", label: "Customising the PDF" },
  { id: "challenges", label: "Key challenges" },
  { id: "mistakes", label: "Common mistakes" },
  { id: "help", label: "Get help" },
  { id: "faq", label: "FAQ" },
  { id: "conclusion", label: "Conclusion" },
  { id: "related", label: "Related reading" },
];

// ---------- code samples ----------
const htmlStructureCode = `<!-- Basic HTML structure for PDF -->
<h1>@{triggerOutputs()?['body/Title']}</h1>
<p>@{triggerOutputs()?['body/Description']}</p>`;

const imageTagCode = `<!-- Image tag for PDF with base64 encoding -->
<img src="data:@{outputs('Get_file_content')?['body/$content-type']};base64,@{outputs('Get_file_content')?['body/$content']}" style="width: 200px; margin: 20px 0;" />`;

const completeHtmlCode = `<!-- Complete HTML structure with image -->
<img src="data:@{outputs('Get_file_content')?['body/$content-type']};base64,@{outputs('Get_file_content')?['body/$content']}" style="width: 200px; margin: 20px 0;" />
<h1>@{triggerOutputs()?['body/Title']}</h1>
<p>@{triggerOutputs()?['body/Description']}</p>`;

const safeFileNameCode = `concat('Issue-', triggerOutputs()?['body/ID'], '.html')`;

const powerAutomateCode = `// Power Automate Flow Steps:

1. Trigger: When an item is created in SharePoint list
   - Site: [Your SharePoint Site]
   - List: Issues

2. Get file content (for logo/image)
   - Site: [Your SharePoint Site]
   - Library: Shared Documents
   - File: logo_small.png

3. Compose HTML content
   - Combine HTML structure with dynamic content from SharePoint
   - Include image with base64 encoding

4. Create HTML file in OneDrive
   - Folder: Root
   - Filename: concat(triggerOutputs()?['body/Title'], '.html')
   - Content: Output from Compose step

5. Convert file to PDF
   - File: ID from Create HTML file step
   - Target type: PDF

6. Create file in SharePoint
   - Site: [Your SharePoint Site]
   - Library: Issues Attachments
   - Filename: [Name from convert step]
   - File content: [Content from convert step]

7. Update file properties
   - Site: [Your SharePoint Site]
   - Library: Issues Attachments
   - ID: ID from Create file step
   - ParentID: ID from trigger (SharePoint list item ID)`;

const moreFieldsCode = `<p><strong>Priority:</strong> @{triggerOutputs()?['body/Priority/Value']}</p>
<p><strong>Reported by:</strong> @{triggerOutputs()?['body/Author/DisplayName']}</p>`;

const stylingCode = `<style>
  body { font-family: Arial, sans-serif; color: #1a1a1a; }
  h1 { font-size: 22pt; margin-bottom: 4pt; }
  p { font-size: 11pt; line-height: 1.5; }
</style>`;

const tableCode = `<table style="border-collapse: collapse; width: 100%;">
  <tr>
    <th style="background: #046999; color: #fff; padding: 6px; text-align: left;">Field</th>
    <th style="background: #046999; color: #fff; padding: 6px; text-align: left;">Value</th>
  </tr>
  <tr>
    <td style="border: 1px solid #ccc; padding: 6px;">Priority</td>
    <td style="border: 1px solid #ccc; padding: 6px;">@{triggerOutputs()?['body/Priority/Value']}</td>
  </tr>
</table>`;

const conditionalCode = `@{if(equals(triggerOutputs()?['body/Priority/Value'], 'High'), '<p><strong>Urgent: action within 24 hours</strong></p>', '')}`;

const lineBreakCode = `replace(triggerOutputs()?['body/Description'], decodeUriComponent('%0A'), '<br>')`;

const launchCode = `Launch(
  First(Filter('Issues Attachments', ParentID = ThisItem.ID)).'Link to item'
)`;

// ---------- small helpers ----------
function Code({ label, children }) {
  return (
    <figure className={styles.code}>
      <figcaption className={styles.codeLabel}>{label}</figcaption>
      <pre className={styles.codePre}>
        <code>{children}</code>
      </pre>
    </figure>
  );
}

function Callout({ Icon, label, children }) {
  return (
    <aside className={styles.callout}>
      <span className={styles.calloutIcon}>
        <Icon />
      </span>
      <div className={styles.calloutBody}>
        <p className={styles.calloutLabel}>{label}</p>
        <div className={styles.calloutText}>{children}</div>
      </div>
    </aside>
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

function Tip({ children }) {
  return (
    <p className={styles.proTip}>
      <span className={styles.proTipIcon}>
        <IconTip />
      </span>
      <span className={styles.proTipText}>
        <strong>Pro tip:</strong> {children}
      </span>
    </p>
  );
}

// ---------- data arrays ----------
const REASONS = [
  {
    Icon: IconLayers,
    title: "Data stays in one place",
    text: "The PDF is built from the saved record, so the document always matches what is stored in SharePoint.",
  },
  {
    Icon: IconBolt,
    title: "It runs in the background",
    text: "The flow runs in the cloud once the record is saved, so users can carry on working in the app.",
  },
  {
    Icon: IconCode,
    title: "The template is just HTML",
    text: "Change the layout with ordinary web skills. No special report designer is needed.",
  },
];

const WORKS_WELL = [
  "Record-based documents such as issue reports, job sheets and inspection summaries",
  "Layouts made of headings, text, tables and one or two images",
  "PDFs stored next to the record in SharePoint, ready to open from your app",
  "Automatic creation as soon as a record is saved",
];

const LESS_SUITED = [
  "Pixel-perfect branded layouts with repeating headers and footers on every page",
  "Long, data-heavy reports that run to many pages (a paginated report suits these better)",
  "PDFs needed the instant a user taps a button. The file appears once the flow finishes, which can take a little while",
  "Heavy design work such as complex multi-column layouts",
];

const COMPARE_ROWS = [
  {
    method: "HTML to PDF flow (this guide)",
    best: "Record-based documents with text, tables and images",
    control: "Good. Anything HTML and simple CSS can do",
    effort: "Low to medium",
    note: "Uses the SharePoint and OneDrive connectors. Confirm against your licence.",
  },
  {
    method: "Word template flow",
    best: "Documents that need headers, footers and strict branding",
    control: "High. Word controls the layout",
    effort: "Medium",
    note: "Depends on which Word actions you use. Check whether any are premium.",
  },
  {
    method: "Power Apps PDF function",
    best: "A quick copy of what is on screen",
    control: "Follows the screen layout",
    effort: "Low",
    note: "Built into Power Apps. Check current limits on Microsoft Learn.",
  },
  {
    method: "Paginated report",
    best: "Long, data-heavy reports with page breaks",
    control: "High",
    effort: "High",
    note: "Usually needs Power BI Premium or Fabric capacity. Confirm before planning.",
  },
];

const FIELD_ROWS = [
  {
    name: "Title",
    type: "Single line of text",
    use: "The PDF heading and file name",
  },
  {
    name: "Description",
    type: "Multiple lines of text",
    use: "The body text of the PDF",
  },
  {
    name: "ID",
    type: "Number (automatic)",
    use: "Links the PDF back to the item",
  },
  { name: "Created By", type: "Person", use: "Optional extra for the PDF" },
];

const STEPS = [
  {
    title: "Step 1: Create a New Cloud Flow",
    body: (
      <>
        <p>
          Start by creating a new cloud flow in Power Automate with a SharePoint
          trigger:
        </p>
        <ol>
          <li>
            Navigate to Power Automate and select “Create” &gt; “Cloud flow”
          </li>
          <li>Choose the “When an item is created” trigger for SharePoint</li>
          <li>Select your SharePoint site and the “Issues” list</li>
        </ol>
        <Tip>
          Name the flow something you can search for later, such as “Issues –
          create PDF”. It saves hunting when you have ten flows that all start
          with “When an item is created”.
        </Tip>
      </>
    ),
  },
  {
    title: "Step 2: Get an Image for Your PDF (Optional)",
    body: (
      <>
        <p>
          If you want to include images in your PDF (like a company logo),
          you’ll need to retrieve that image file first:
        </p>
        <ol>
          <li>Add a “Get file content” action from SharePoint</li>
          <li>Select your SharePoint site and document library</li>
          <li>Enter the file path to your image (e.g., “logo_small.png”)</li>
        </ol>
        <p>
          This step retrieves the binary content of your image file, which we’ll
          encode into the HTML later.
        </p>
        <Tip>
          Keep the image small. A logo about 200 pixels wide is plenty for a
          document, and larger files slow the flow down. Leave the action name
          as “Get file content”, because the expressions in the next step refer
          to it.
        </Tip>
      </>
    ),
  },
  {
    title: "Step 3: Compose Your HTML Content",
    body: (
      <>
        <p>
          Now, we need to create the HTML structure that will become our PDF:
        </p>
        <ol>
          <li>Add a “Compose” action to your flow</li>
          <li>
            In the “Inputs” field, create the HTML structure using values from
            your SharePoint item
          </li>
        </ol>
        <p>For a basic structure with just text, you could use:</p>
        <Code label="HTML">{htmlStructureCode}</Code>
        <p>
          The tricky part is adding an image. To include an image in your PDF,
          you’ll need to encode it as a base64 string directly in your HTML:
        </p>
        <Code label="HTML">{imageTagCode}</Code>
        <p>Combining these, your complete HTML might look like:</p>
        <Code label="HTML">{completeHtmlCode}</Code>
        <Tip>
          Build in layers. Get the text working first, add the image second and
          the styling last. If something breaks, you’ll know which layer caused
          it.
        </Tip>
      </>
    ),
  },
  {
    title: "Step 4: Create a Temporary HTML File",
    body: (
      <>
        <p>Before converting to PDF, we need to save our HTML as a file:</p>
        <ol>
          <li>Add a “Create file” action for OneDrive</li>
          <li>
            Select the root folder of your OneDrive (or any folder you prefer)
          </li>
          <li>
            For the file name, use a dynamic expression:{" "}
            <code className={styles.inlineCode}>
              {"concat(triggerOutputs()?['body/Title'], '.html')"}
            </code>
          </li>
          <li>For the file content, use the output from your Compose step</li>
        </ol>
        <p>
          This creates a temporary HTML file in OneDrive, which we’ll then
          convert to PDF.
        </p>
        <Tip>
          Titles can contain characters that file names don’t allow, such as / ?
          : or *. If your users type free text, build the name from the item ID
          instead: <code className={styles.inlineCode}>{safeFileNameCode}</code>
        </Tip>
      </>
    ),
  },
  {
    title: "Step 5: Convert the HTML File to PDF",
    body: (
      <>
        <p>Now comes the magic step - converting our HTML to PDF:</p>
        <ol>
          <li>Add a “Convert file” action from OneDrive</li>
          <li>
            For the “File”, select the ID from the previous “Create file” step
          </li>
          <li>Set the target format to “PDF”</li>
        </ol>
        <p>
          This step handles the conversion from HTML to PDF, giving us a
          properly formatted document.
        </p>
        <Tip>
          Test your real layout early. The converter may not draw a page exactly
          as a web browser does, so check tables and spacing with real data
          before you build the rest.
        </Tip>
      </>
    ),
  },
  {
    title: "Step 6: Save the PDF to SharePoint",
    body: (
      <>
        <p>
          Now that we have our PDF, let’s save it to SharePoint where our Power
          App can access it:
        </p>
        <ol>
          <li>Add a “Create file” action for SharePoint</li>
          <li>
            Select your SharePoint site and a document library (e.g., “Issues
            Attachments”)
          </li>
          <li>For the file name, use the file name from the Convert step</li>
          <li>
            For the file content, use the file content from the Convert step
          </li>
        </ol>
        <Tip>
          If the Convert step doesn’t offer a file name in the dynamic content
          list, build one yourself with{" "}
          <code className={styles.inlineCode}>
            {"concat(triggerOutputs()?['body/Title'], '.pdf')"}
          </code>
          , or use the item ID version from Step 4 with a .pdf ending.
        </Tip>
      </>
    ),
  },
  {
    title: "Step 7: Link the PDF to Your SharePoint Item",
    body: (
      <>
        <p>
          Finally, we need to associate this PDF with our original SharePoint
          item:
        </p>
        <ol>
          <li>Add an “Update file properties” action for SharePoint</li>
          <li>Select your SharePoint site and document library</li>
          <li>For the ID, use the ID from the previous “Create file” step</li>
          <li>
            Add a property: “ParentID” = ID from the trigger (SharePoint list
            item ID)
          </li>
        </ol>
        <p>
          This creates a relationship between your PDF and the SharePoint item,
          making it appear as an attachment.
        </p>
        <Tip>
          “ParentID” is a column on the document library that holds the ID of
          the list item the PDF belongs to. If your library doesn’t have one
          yet, add it (a number column suits an item ID) before you build this
          step.
        </Tip>
      </>
    ),
  },
];

const CUSTOMISE_CARDS = [
  {
    Icon: IconFile,
    title: "Add more fields",
    text: "Include any field from your SharePoint item in the HTML.",
    steps: [
      "Open the Compose action",
      "Add the dynamic content for the field",
      "Wrap it in a label so readers know what it is",
    ],
    code: moreFieldsCode,
    codeLabel: "HTML (example columns)",
  },
  {
    Icon: IconCode,
    title: "Improve styling",
    text: "Add CSS to your HTML to control fonts, colours and layout.",
    steps: [
      "Add a style block at the top of the HTML",
      "Stick to simple rules for fonts, colours and spacing",
      "Check the PDF after each change",
    ],
    code: stylingCode,
    codeLabel: "HTML",
  },
  {
    Icon: IconTable,
    title: "Add tables",
    text: "Format data in tables for better readability.",
    steps: [
      "Use a table for any list of values",
      "Give the header row a background colour",
      "Keep columns to what fits across an A4 page",
    ],
    code: tableCode,
    codeLabel: "HTML (example columns)",
  },
  {
    Icon: IconBolt,
    title: "Add conditional content",
    text: "Use Power Automate expressions to show or hide content based on conditions.",
    steps: [
      "Put an if() expression inside the HTML",
      "Test both outcomes with real records",
      "Keep long logic in its own Compose action",
    ],
    code: conditionalCode,
    codeLabel: "Expression (example column)",
  },
];

const MISTAKES = [
  {
    kind: "image",
    title: "Linking to an image instead of embedding it",
    fix: "Embed the image as base64, using the content type and file content from Get file content. A web link may not resolve when the file is converted.",
  },
  {
    kind: "cleanup",
    title: "Leaving temporary HTML files behind",
    fix: "Add a OneDrive Delete file action once the PDF is safely in SharePoint, so the temporary files don’t pile up.",
  },
  {
    kind: "trigger",
    title: "Making a new PDF on every edit",
    fix: "Use the “When an item is created” trigger, or add a trigger condition if you also need to cover edits.",
  },
  {
    kind: "filename",
    title: "Building file names from raw titles",
    fix: "Include the item ID and avoid characters that file names don’t allow, so one odd title can’t break the flow.",
  },
  {
    kind: "size",
    title: "Using huge images and heavy CSS",
    fix: "Resize logos before you upload them and keep the styling simple. Big files slow the run and complex CSS may not convert cleanly.",
  },
];

const CHECKLIST = [
  "The flow triggers once per new record, not on every edit",
  "The logo or image displays in the PDF",
  "Special characters in a title don’t break the file name",
  "A very long description still reads well across pages",
  "Empty optional fields don’t leave odd gaps",
  "The PDF lands in the right library",
  "ParentID shows the correct item ID",
  "The temporary HTML file is deleted or accounted for",
  "A second person can open the PDF from the app",
  "The flow owner is a person or account that will still be around next year",
];

const FAQS = [
  {
    q: "Does Power Apps have a built-in Export to PDF button?",
    a: (
      <>
        Not for exporting a formatted record. Power Apps does have a PDF
        function that can turn what’s on screen into a PDF, and we look at it in{" "}
        <Link href="/blog/power-apps-pdf-function">a separate post</Link>. For a
        document built from saved data, with a layout you control, a Power
        Automate flow is usually the more flexible option.
      </>
    ),
  },
  {
    q: "Do I need a premium licence to build this flow?",
    a: "This method uses the SharePoint and OneDrive for Business connectors, which Microsoft has historically listed as standard. Licensing changes over time, so check each connector in your flow against your organisation’s plan before you roll it out. Premium connectors are marked as such in the flow editor.",
  },
  {
    q: "Can users trigger the PDF from a button instead?",
    a: "Yes. Instead of the SharePoint trigger, you can start the flow from the app with a Power Apps trigger and pass in the record ID. That suits cases where users decide when a PDF is needed. The remaining steps stay much the same, except the flow needs a Get item action to read the record.",
  },
  {
    q: "Why isn’t my image showing in the PDF?",
    a: "Check three things. First, open the flow run history and confirm the Get file content action returned data. Second, make sure the content type is included in the image tag. Third, check the image isn’t very large. A missing content type is a likely culprit.",
  },
  {
    q: "Can I add page numbers, headers or footers?",
    a: "A simple HTML to PDF conversion gives you limited control over page furniture such as repeating headers and footers. If you need those, look at the Word template route in the decision guide above, where Word controls the layout. Test your own layout before you commit to either approach.",
  },
  {
    q: "Whose OneDrive holds the temporary file?",
    a: "The flow uses the OneDrive connection you set up, so the temporary HTML file is created in that account’s OneDrive. Many teams use a dedicated service account so the flow doesn’t depend on one staff member. Check licensing and security rules for service accounts in your organisation first.",
  },
];

const RELATED = [
  {
    href: "/blog/file-attachments-in-power-apps",
    title: "File attachments in Power Apps",
    text: "Working with files in your apps, including where they are stored and how to show them.",
  },
  {
    href: "/blog/power-apps-pdf-function",
    title: "The Power Apps PDF function",
    text: "A look at the built-in PDF function and when it is the right tool.",
  },
  {
    href: "/blog/sharepoint-lists",
    title: "SharePoint lists",
    text: "Get your list design right before you build apps and flows on top of it.",
  },
];

// ---------- schema ----------
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
      image: HERO_IMAGE_PATH,
      author: { "@type": "Person", name: AUTHOR_NAME },
      publisher: { "@id": `${SITE_URL}#organization` },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      mainEntityOfPage: { "@id": `${PAGE_URL}#webpage` },
      inLanguage: "en-AU",
      video: { "@id": `${PAGE_URL}#video` },
    },
    {
      "@type": "VideoObject",
      "@id": `${PAGE_URL}#video`,
      name: PAGE_HEADLINE,
      description:
        "Exporting data to PDF from Power Apps is a common requirement in business applications. Learn the streamlined approach using Power Automate.",
      thumbnailUrl: HERO_IMAGE_PATH,
      uploadDate: DATE_PUBLISHED,
      duration: "PT18M4S",
      embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
      contentUrl: `https://www.youtube.com/watch?v=${VIDEO_ID}`,
    },
  ],
};

export default function ExportToPdfInPowerAppsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className={styles.page}>
        {/* ---------- hero ---------- */}
        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <h1 className={styles.heroTitle}>
              Export to PDF in Power Apps{" "}
              <span className={styles.accent}>- The Best Way to Do It!</span>
            </h1>
            <p className={styles.heroLede}>
              Power Apps doesn’t have a built-in “Export to PDF” button for your
              record data. This guide shows the method we use: save a record,
              let Power Automate turn it into a formatted PDF, and link the file
              back to the record in SharePoint.
            </p>
            <div className={styles.authorRow}>
              <span className={styles.avatar} aria-hidden="true">
                <Image
                  src={marcello}
                  alt={AUTHOR_NAME}
                  width={38}
                  height={38}
                />
              </span>
              <span className={styles.authorText}>
                <span className={styles.authorName}>By {AUTHOR_NAME}</span>
                <span className={styles.authorMeta}>
                  Updated {formatDate(DATE_MODIFIED)} · {READING_TIME}
                </span>
              </span>
            </div>
          </div>
          <div className={styles.heroArt}>
            <HeroSvg flowClass={styles.flow} liveClass={styles.live} />
          </div>
        </header>

        {/* ---------- at a glance ---------- */}
        <section className={styles.glance} aria-label="At a glance">
          <div className={styles.glanceCard}>
            <span className={styles.glanceValue}>7</span>
            <span className={styles.glanceLabel}>Flow actions</span>
            <span className={styles.glanceText}>
              From trigger to a PDF linked to the record.
            </span>
          </div>
          <div className={styles.glanceCard}>
            <span className={styles.glanceValue}>HTML</span>
            <span className={styles.glanceLabel}>Your PDF template</span>
            <span className={styles.glanceText}>
              Text, tables and images from your record.
            </span>
          </div>
          <div className={styles.glanceCard}>
            <span className={styles.glanceValue}>18 min</span>
            <span className={styles.glanceLabel}>Video walkthrough</span>
            <span className={styles.glanceText}>
              Watch the whole build on YouTube.
            </span>
          </div>
        </section>

        {/* ---------- contents + article ---------- */}
        <div className={styles.layout}>
          <nav className={styles.toc} aria-labelledby="pdf-toc-heading">
            <p className={styles.tocTitle} id="pdf-toc-heading">
              In this guide
            </p>
            <ul className={styles.tocList}>
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <article className={styles.article}>
            {/* introduction */}
            <section className={styles.section} id="introduction">
              <h2>
                <span className={styles.accent}>Introduction</span>
              </h2>
              <p>
                Exporting data to PDF from Power Apps is a common requirement in
                business applications. Inspection reports, job sheets,
                signed-off forms and customer summaries all end up as a PDF at
                some point. While Power Apps doesn’t have a built-in “Export to
                PDF” function for a saved record, we can achieve this
                functionality by combining Power Apps with Power Automate (Flow)
                to create professional-looking PDF exports of your app data.
              </p>
              <p>
                In this guide, I’ll show you a streamlined approach to PDF
                exports, including how to:
              </p>
              <ul>
                <li>
                  Set up a Flow triggered when a record is saved in SharePoint
                </li>
                <li>
                  Create HTML content dynamically based on your record data
                </li>
                <li>Include images in your PDF exports (the tricky part!)</li>
                <li>Convert the HTML to a PDF file</li>
                <li>Link the PDF back to your original record</li>
              </ul>
              <p>
                Along the way you’ll also find a decision aid to check this is
                the right method for you, a tip for each step, a list of common
                mistakes and a short checklist to run before you go live.
              </p>
            </section>

            {/* video */}
            <section className={styles.section} id="video">
              <h2>
                Prefer to Watch{" "}
                <span className={styles.accent}>the Video?</span>
              </h2>
              <p>
                Head over to my YouTube channel{" "}
                <a href={YOUTUBE_CHANNEL} rel="nofollow noreferrer noopener">
                  Chino Does Stuff
                </a>{" "}
                to watch the video tutorial. There you will see a variety of
                videos with loads of tricks and tips on the entire Power
                Platform suite.
              </p>
              <div className={styles.videoWrap}>
                <iframe
                  className={styles.videoEmbed}
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?si=3OuyiaFX5r1sfORy`}
                  title="Export to PDF in Power Apps video tutorial"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </section>

            {/* why */}
            <section className={styles.section} id="why">
              <h2>
                Why Power Apps{" "}
                <span className={styles.accent}>needs Power Automate</span>
              </h2>
              <p>
                Power Apps is excellent at capturing data. A PDF is a different
                kind of thing: a document with a fixed layout, page breaks and
                images. Building that from a canvas screen is awkward, but Power
                Automate is made for exactly this kind of job. It can take the
                saved record, merge it into a template, create a file and store
                it where your app can find it.
              </p>
              <p>
                The pattern in this guide is simple: a record is saved, a flow
                builds an HTML version of it, the HTML is converted to PDF and
                the PDF is saved back to SharePoint.
              </p>
              <div className={styles.reasonGrid}>
                {REASONS.map(({ Icon, title, text }) => (
                  <div className={styles.reasonCard} key={title}>
                    <span className={styles.reasonBadge}>
                      <Icon />
                    </span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* can and can't */}
            <section className={styles.section} id="can">
              <h2>
                What this method can{" "}
                <span className={styles.accent}>and can’t do</span>
              </h2>
              <p>
                It helps to know where the method shines and where another
                approach may serve you better.
              </p>
              <div className={styles.fitGrid}>
                <div className={styles.fitPanel}>
                  <h3>Works well for</h3>
                  <ul className={styles.fitList}>
                    {WORKS_WELL.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.fitPanel}>
                  <h3>Less suited to</h3>
                  <ul className={styles.fitList}>
                    {LESS_SUITED.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* choose */}
            <section className={styles.section} id="choose">
              <h2>
                Which PDF method{" "}
                <span className={styles.accent}>should you use?</span>
              </h2>
              <p>
                There isn’t one right way to make a PDF from Power Apps. Answer
                the questions below to see which route suits your document.
              </p>
              <Diagram caption="Which PDF method should you use? Start at the top and follow the answers.">
                <DecisionSvg />
              </Diagram>
              <p>
                If you ended up on the HTML to PDF flow, the rest of this guide
                is for you. Here is how the four routes compare side by side.
              </p>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <caption className={styles.visuallyHidden}>
                    Comparison of four ways to create a PDF from Power Apps
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Method</th>
                      <th scope="col">Best for</th>
                      <th scope="col">Layout control</th>
                      <th scope="col">Setup effort</th>
                      <th scope="col">Licence note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARE_ROWS.map((row) => (
                      <tr key={row.method}>
                        <th scope="row">{row.method}</th>
                        <td>{row.best}</td>
                        <td>{row.control}</td>
                        <td>{row.effort}</td>
                        <td>{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Callout Icon={IconInfo} label="Check your licensing">
                <p>
                  Connector licensing and product limits change over time.
                  Before you commit to a method, check each connector and
                  feature against your organisation’s current Microsoft
                  licensing.
                </p>
              </Callout>
            </section>

            {/* scenario */}
            <section className={styles.section} id="scenario">
              <h2>
                The Sample <span className={styles.accent}>Scenario</span>
              </h2>
              <p>
                For this tutorial, we’ll use a simple “Issues Tracker” Power App
                that logs issues to a SharePoint list. When a new issue is
                created, our Flow will automatically generate a PDF export of
                that issue and attach it to the SharePoint item.
              </p>
              <p>
                The SharePoint list contains basic fields for our issue
                tracking:
              </p>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <caption className={styles.visuallyHidden}>
                    Fields in the Issues list and how the flow uses them
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Column</th>
                      <th scope="col">Type</th>
                      <th scope="col">Used for</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FIELD_ROWS.map((row) => (
                      <tr key={row.name}>
                        <th scope="row">{row.name}</th>
                        <td>{row.type}</td>
                        <td>{row.use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Your own list will have more columns. Start with these and add
                the rest once the basic flow works.
              </p>
            </section>

            {/* build */}
            <section className={styles.section} id="build">
              <h2>
                Building the{" "}
                <span className={styles.accent}>Power Automate Flow</span>
              </h2>
              <p>
                Let’s start by creating a Flow that will handle the PDF export
                process. This Flow will trigger whenever a new item is created
                in our SharePoint list.
              </p>
              <ol className={styles.timeline}>
                {STEPS.map((step, i) => (
                  <li className={styles.step} key={step.title}>
                    <span className={styles.stepBadge} aria-hidden="true">
                      {i + 1}
                    </span>
                    <div className={styles.stepBody}>
                      <h3>{step.title}</h3>
                      {step.body}
                    </div>
                  </li>
                ))}
              </ol>

              <Callout Icon={IconWarn} label="Tidy up the temporary file">
                <p>
                  The HTML file from Step 4 is only needed for the conversion.
                  Once the PDF is safely saved in SharePoint, add a OneDrive
                  “Delete file” action so the temporary files don’t build up.
                </p>
              </Callout>

              <h3 className={styles.subHeading}>Complete Flow Structure</h3>
              <p>Here’s a summary of the complete flow:</p>
              <Diagram caption="The complete flow, from a new list item to a linked PDF.">
                <FlowSvg />
              </Diagram>
              <Code label="Power Automate flow steps">{powerAutomateCode}</Code>
            </section>

            {/* test */}
            <section className={styles.section} id="test">
              <h2>
                Testing the <span className={styles.accent}>Solution</span>
              </h2>
              <p>Once your flow is set up, it’s time to test the solution:</p>
              <ol>
                <li>Open your Power App and create a new issue</li>
                <li>Enter a title and description, then save the record</li>
                <li>The flow should trigger automatically</li>
                <li>
                  After the flow completes, you should see a PDF attachment on
                  your SharePoint item
                </li>
              </ol>
              <p>
                Opening the PDF should show your formatted content, including
                any images you’ve included. If a run fails, open it in the
                flow’s run history. Power Automate shows which action stopped
                and what it received, which makes most problems quick to find.
              </p>
              <Callout Icon={IconClock} label="Give it a moment">
                <p>
                  The PDF isn’t created at the instant the record is saved. The
                  flow needs to finish first, so allow a short wait before you
                  look for the file.
                </p>
              </Callout>
            </section>

            {/* customise */}
            <section className={styles.section} id="customise">
              <h2>
                Customising Your{" "}
                <span className={styles.accent}>PDF Output</span>
              </h2>
              <p>You can enhance your PDF output in several ways:</p>
              <div className={styles.walkGrid}>
                {CUSTOMISE_CARDS.map(
                  ({ Icon, title, text, steps, code, codeLabel }) => (
                    <div className={styles.walkCard} key={title}>
                      <span className={styles.walkBadge}>
                        <Icon />
                      </span>
                      <h3>{title}</h3>
                      <p className={styles.walkText}>{text}</p>
                      <ol className={styles.walkSteps}>
                        {steps.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ol>
                      <Code label={codeLabel}>{code}</Code>
                    </div>
                  ),
                )}
              </div>
              <p>
                Remember that you’re essentially creating a web page that will
                be converted to PDF, so most HTML and CSS techniques will work.
                Do test anything fancy first.
              </p>
              <Callout Icon={IconTip} label="Line breaks in long text">
                <p>
                  A multi-line text column holds line breaks as plain
                  characters, which HTML ignores. If your description runs
                  together in the PDF, swap the line breaks for HTML breaks:
                </p>
                <Code label="Expression">{lineBreakCode}</Code>
              </Callout>

              <h3 className={styles.subHeading}>Showing the PDF in your app</h3>
              <p>
                Because every PDF carries the ID of its item, your Power App can
                find the right file later. Add the document library as a data
                source, filter it on the ParentID column and open the result
                from a button. Treat this as a starting point and check the
                column names in your own data source.
              </p>
              <Code label="Power Fx (example)">{launchCode}</Code>
            </section>

            {/* challenges */}
            <section className={styles.section} id="challenges">
              <h2>
                Key Challenges{" "}
                <span className={styles.accent}>and Solutions</span>
              </h2>
              <h3 className={styles.subHeading}>Including Images</h3>
              <p>
                The most challenging part of this solution is including images
                in your PDF. The key is to:
              </p>
              <ol>
                <li>Retrieve the image file using “Get file content”</li>
                <li>
                  Encode the image as a base64 string within an HTML image tag
                </li>
                <li>Include the content type to ensure proper rendering</li>
              </ol>
              <p>
                This approach works for most image types (PNG, JPEG, etc.) but
                be mindful of file sizes, as large images will increase
                processing time. The diagram below breaks the image tag into its
                parts.
              </p>
              <Diagram caption="The HTML in the Compose action, with each part of the image tag explained.">
                <AnatomySvg />
              </Diagram>

              <h3 className={styles.subHeading}>HTML Formatting</h3>
              <p>For best results with the PDF conversion:</p>
              <ul>
                <li>Use standard HTML elements (h1, p, table, etc.)</li>
                <li>Keep CSS simple and avoid complex layouts</li>
                <li>Test thoroughly to ensure proper rendering</li>
              </ul>
            </section>

            {/* mistakes */}
            <section className={styles.section} id="mistakes">
              <h2>
                Common <span className={styles.accent}>mistakes to avoid</span>
              </h2>
              <p>
                These are the slips that cause most of the “it worked in
                testing” surprises. Each one has a quick fix.
              </p>
              <div className={styles.mistakeGrid}>
                {MISTAKES.map((m, i) => (
                  <div className={styles.mistakeCard} key={m.title}>
                    <span className={styles.mistakeNumber} aria-hidden="true">
                      {i + 1}
                    </span>
                    <h3>{m.title}</h3>
                    <div className={styles.sketch}>
                      <MistakeSketch kind={m.kind} />
                    </div>
                    <p className={styles.fixRow}>
                      <span className={styles.fixPill}>Instead</span>
                      <span className={styles.fixText}>{m.fix}</span>
                    </p>
                  </div>
                ))}
              </div>

              <h3 className={styles.subHeading}>Before you go live</h3>
              <ul className={styles.checklist}>
                {CHECKLIST.map((item) => (
                  <li key={item}>
                    <span className={styles.checkIcon}>
                      <IconCheck />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* help */}
            <section className={styles.section} id="help">
              <div className={styles.ctaBand}>
                <span className={styles.ctaIcon}>
                  <IconPlay />
                </span>
                <h2>
                  Need a hand with PDF exports{" "}
                  <span className={styles.accent}>from Power Apps?</span>
                </h2>
                <p>
                  Our Power Platform team builds Power Apps and Power Automate
                  solutions for Australian businesses, including document
                  generation, SharePoint integration and reporting. Tell us what
                  you’re trying to produce and we’ll point you at the simplest
                  route.
                </p>
                <div className={styles.ctaActions}>
                  <a className={styles.ctaButton} href="#contact">
                    Talk to our team
                  </a>
                  <Link
                    className={styles.ctaLink}
                    href="/services/microsoft-power-platform/microsoft-power-apps"
                  >
                    Power Apps services <IconArrow />
                  </Link>
                </div>
              </div>
            </section>

            {/* faq */}
            <section className={styles.section} id="faq">
              <h2>
                Frequently asked{" "}
                <span className={styles.accent}>questions</span>
              </h2>
              <div className={styles.faqList}>
                {FAQS.map((f) => (
                  <details className={styles.faqItem} key={f.q}>
                    <summary>
                      <span>{f.q}</span>
                      <span className={styles.faqIcon}>
                        <IconPlus />
                      </span>
                    </summary>
                    <div className={styles.faqAnswer}>
                      <p>{f.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* conclusion */}
            <section className={styles.section} id="conclusion">
              <h2>
                <span className={styles.accent}>Conclusion</span>
              </h2>
              <p>
                Exporting to PDF from Power Apps is straightforward once you
                understand the process. By leveraging Power Automate, we can
                create professional-looking PDF exports that include both text
                and images, providing a complete solution for document
                generation.
              </p>
              <p>This approach offers several advantages:</p>
              <ul>
                <li>Automatic PDF generation when records are created</li>
                <li>Full customisation of PDF content and appearance</li>
                <li>
                  Seamless integration with SharePoint for document storage
                </li>
                <li>Ability to include images and formatting in the PDF</li>
              </ul>
              <p>
                With these tools, you can enhance your Power Apps solutions with
                professional document generation capabilities, meeting the needs
                of business users who require formatted outputs from their
                applications.
              </p>
              <p>
                If you’d like to see more Power Platform development tutorials,
                please head over to the{" "}
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
                <div className={styles.authorBoxText}>
                  <p className={styles.authorBoxLabel}>About the author</p>
                  <p className={styles.authorBoxName}>{AUTHOR_NAME}</p>
                  <p className={styles.authorBoxBio}>
                    {AUTHOR_NAME} is a lead developer at Office Experts, an
                    Australian Microsoft consultancy established in 2000, and
                    the founder of the YouTube channel{" "}
                    <a
                      href={YOUTUBE_CHANNEL}
                      rel="nofollow noreferrer noopener"
                    >
                      ChinoDoesStuff
                    </a>
                    . If you have any questions, get in touch using the form
                    below, or find him on{" "}
                    <a href={LINKEDIN_URL} rel="nofollow noreferrer noopener">
                      LinkedIn
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>

            {/* related */}
            <section className={styles.section} id="related">
              <h2>
                Related <span className={styles.accent}>reading</span>
              </h2>
              <div className={styles.relatedGrid}>
                {RELATED.map((r) => (
                  <Link
                    className={styles.relatedCard}
                    href={r.href}
                    key={r.href}
                  >
                    <span className={styles.relatedTitle}>{r.title}</span>
                    <span className={styles.relatedText}>{r.text}</span>
                    <span className={styles.relatedMore}>
                      Read the post <IconArrow />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </article>
        </div>
      </main>
      <Contact />
    </>
  );
}
