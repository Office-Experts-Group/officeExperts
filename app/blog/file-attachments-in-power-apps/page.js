// /app/blog/file-attachments-in-power-apps/page.js
import Image from "next/image";
import Link from "next/link";

import Contact from "@/components/Contact";
import { generateOrganizationSchema } from "@/utils/schemaGenerators";
import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";

import marcello from "@/public/team/marcello.webp";
import styles from "@/styles/fileAttachmentsInPowerAppsBlog.module.scss";

import HeroSvg from "./(svgs)/HeroSvg";
import AttachFlowSvg from "./(svgs)/AttachFlowSvg";
import DecisionSvg from "./(svgs)/DecisionSvg";
import {
  SketchOrder,
  SketchLimits,
  SketchReset,
  SketchErrors,
  SketchFilter,
} from "./(svgs)/MistakeSketches";
import {
  IconAlert,
  IconArrow,
  IconBolt,
  IconCheck,
  IconClock,
  IconDoc,
  IconEye,
  IconFolder,
  IconHelp,
  IconLayers,
  IconLink,
  IconPaperclip,
  IconShield,
  IconSpinner,
  IconUpload,
} from "./(svgs)/Icons";

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with layout.js.
const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/blog/file-attachments-in-power-apps`;
const PAGE_TITLE = "File Attachments in Power Apps: Best Way | Office Experts";
const PAGE_DESCRIPTION =
  "Learn how to upload multiple files from Power Apps straight into a SharePoint document library using the Power Apps V2 trigger in Power Automate.";
const PAGE_HEADLINE =
  "File Attachments in Power Apps - The Best Way to Do Them";
const BREADCRUMB_NAME = "File Attachments in Power Apps";
const AUTHOR_NAME = "Marcello Brocchi";
const READING_TIME = 13; // minutes, from the visible word count (about 3,200 words at 238 wpm)
// The video thumbnail is the only real hero image this post has.
const HERO_IMAGE_URL = "https://i.ytimg.com/vi/yC0W5am6M3Q/maxresdefault.jpg";
const VIDEO_ID = "yC0W5am6M3Q";
const DATE_PUBLISHED = "2025-04-10T09:00:00+10:00";
// +11:00 (AEDT) from the first Sunday in October to the first Sunday in April.
const DATE_MODIFIED = "2026-11-16T09:00:00+11:00";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Sydney",
  });

/* ───────────── content ───────────── */

const TOC = [
  ["intro", "Introduction"],
  ["video", "Watch the video"],
  ["why", "Why this approach is better"],
  ["limits", "What works and what doesn’t"],
  ["choose", "Which option to use"],
  ["build", "Step by step"],
  ["how", "How it works together"],
  ["view", "Viewing attached files"],
  ["alternatives", "Other options"],
  ["best", "Best practices"],
  ["extend", "Advanced customisations"],
  ["mistakes", "Common mistakes"],
  ["faq", "FAQ"],
  ["conclusion", "Conclusion"],
];

const GLANCE = [
  {
    Icon: IconUpload,
    value: "1 click",
    label: "Save everything",
    text: "The record and every attached file go up in a single Save.",
  },
  {
    Icon: IconFolder,
    value: "Library",
    label: "Not list attachments",
    text: "Files live in a SharePoint document library, so you keep real document management.",
  },
  {
    Icon: IconLink,
    value: "2 inputs",
    label: "All the flow needs",
    text: "A file and a ParentId. No Base64, no JSON wrangling.",
  },
];

const REASONS = [
  {
    Icon: IconBolt,
    title: "Simpler implementation",
    text: "No need for complex Base64 encoding or JSON manipulation. The flow receives a real file and needs a single expression to save it.",
  },
  {
    Icon: IconLayers,
    title: "Multiple file support",
    text: "Easily handle multiple attachments in a single save operation. A ForAll loop sends each file to the flow in turn.",
  },
  {
    Icon: IconUpload,
    title: "Better user experience",
    text: "Users can attach all files and save the record in one step.",
  },
  {
    Icon: IconFolder,
    title: "Document library storage",
    text: "Files are saved to a SharePoint document library instead of list attachments, providing better management options such as extra columns, views and versioning.",
  },
  {
    Icon: IconLink,
    title: "Relationship preservation",
    text: "Maintains the relationship between files and records through a ParentId column.",
  },
];

const COMPARE = [
  [
    "V2 trigger and a document library (this guide)",
    "A document library, linked to the record by ParentId",
    "Several files per record, with real document management",
    "Needs a small flow and a ParentId column",
  ],
  [
    "Built-in list attachments",
    "Attached to the list item itself",
    "Small, simple forms with a few files",
    "Fewer document library features, such as views and extra columns",
  ],
  [
    "Older Base64 and JSON flows",
    "Wherever the flow saves them",
    "Existing apps that already use the pattern",
    "More expressions to build, test and maintain",
  ],
];

const WORKS = [
  "Several files per save, sent one after another from a single button.",
  "Files land in a document library that you control.",
  "Each file is linked back to its record by ParentId.",
  "Extra columns on the library can be filled in by the flow.",
  "Users never leave the form.",
];

const PLAN_FOR = [
  "Files upload after the record is saved, so the record exists even if an upload fails.",
  "Each file is a separate flow run, so big batches take longer to finish.",
  "Size and count limits come from the control’s settings and from SharePoint itself. Check the current limits for your tenant.",
  "Users need a connection to SharePoint and to the flow, so this isn’t an offline pattern.",
  "The attachment control has to be borrowed from a form (see step 1).",
];

const ALTERNATIVES = [
  {
    Icon: IconPaperclip,
    title: "Built-in list attachments",
    best: "Small forms where a few files per item is enough.",
    trade:
      "Files sit inside the list item, so you give up document library features.",
  },
  {
    Icon: IconLayers,
    title: "Dataverse file column",
    best: "Apps that are already built on Dataverse tables.",
    trade:
      "Storage and licensing differ from SharePoint, so check the details before you commit.",
  },
  {
    Icon: IconShield,
    title: "External blob storage",
    best: "Very large files, or files that other systems need to read.",
    trade: "More to build, secure and maintain than a SharePoint library.",
  },
];

const WALKTHROUGH = [
  {
    Icon: IconShield,
    title: "Set sensible limits",
    text: "Be aware of SharePoint’s file size limits and set MaxAttachmentSize accordingly.",
    steps: [
      "Set MaxAttachments and MaxAttachmentSize to the numbers you want.",
      "Tell users the limits on the screen, before they pick files.",
      "Where the control can’t restrict file types, check the extension in the flow.",
    ],
  },
  {
    Icon: IconSpinner,
    title: "Add progress indicators",
    text: "For a better user experience, add a loading spinner during file uploads.",
    steps: [
      "Set a variable such as varUploading to true before the loop.",
      "Show a spinner while the variable is true.",
      "Set the variable back to false after the loop finishes.",
    ],
  },
  {
    Icon: IconAlert,
    title: "Handle errors",
    text: "Consider adding error handling to deal with upload failures.",
    steps: [
      "Wrap the ForAll loop in IfError.",
      "Show a clear message when a file doesn’t upload.",
      "Let the user try again, and check the flow’s run history for the cause.",
    ],
  },
  {
    Icon: IconShield,
    title: "Check permissions",
    text: "Ensure users have appropriate permissions to the SharePoint document library.",
    steps: [
      "Give users the access they need to add files, and no more.",
      "Remember the flow runs under a connection, so confirm whose.",
      "Test with an ordinary user, not just an administrator.",
    ],
  },
];

const EXTEND = [
  [IconShield, "Add file type validation in your flow"],
  [IconDoc, "Create custom thumbnails for different file types"],
  [IconLayers, "Implement version control for updated files"],
  [IconAlert, "Add the ability to delete attachments"],
  [IconEye, "Create a preview capability for common file types"],
];

const MISTAKES = [
  {
    Sketch: SketchOrder,
    title: "Uploading before the record exists",
    text: "If the flow runs before Patch has finished, there is no ID to use as the ParentId. The file lands in the library with nothing connecting it to a record.",
    instead:
      "Run Patch first, capture the ID in a variable, then loop over the attachments.",
  },
  {
    Sketch: SketchLimits,
    title: "Leaving the control on its defaults",
    text: "An unrestricted control lets someone attach a 400 MB video to a quick request, and the failure shows up later in the flow, not in the app.",
    instead:
      "Set MaxAttachments and MaxAttachmentSize to the numbers you actually want, and say so on the screen.",
  },
  {
    Sketch: SketchReset,
    title: "Forgetting to reset the control",
    text: "The attachment control keeps its files after Save. Open the form again and the same files are still queued, ready to be uploaded twice.",
    instead:
      "Reset the control after a successful save, along with your other inputs.",
  },
  {
    Sketch: SketchErrors,
    title: "Assuming every upload worked",
    text: "A flow can fail for one file and succeed for the rest. Without error handling, the user sees the happy ending anyway.",
    instead:
      "Wrap the loop in IfError and tell users what failed, so they can try again.",
  },
  {
    Sketch: SketchFilter,
    title: "Showing the whole library",
    text: "A gallery pointed at the library with no filter shows every file for every record.",
    instead: "Filter by ParentId so each record only shows its own files.",
  },
];

const CHECKLIST = [
  "The library has a Number column called ParentId",
  "The flow has ParentId and File inputs, in the order the app calls them",
  "The flow ends with Respond to Power Apps",
  "MaxAttachments and MaxAttachmentSize are set",
  "Save runs Patch first and captures the new ID",
  "ForAll calls the flow once for each attachment",
  "The control and the other inputs are reset after saving",
  "Upload errors are caught and shown to the user",
  "The gallery filters the library by ParentId",
  "A test user can add files, and can’t see more than they should",
];

const FAQS = [
  {
    q: "Can I upload more than one file at a time?",
    a: "Yes. The ForAll loop in the Save button calls the flow once for every item in the attachment control, so users can attach several files and click Save once. Set MaxAttachments to cap how many they can add.",
  },
  {
    q: "Why can’t I find the attachment control in the Insert menu?",
    a: "It only appears inside an edit form, which is why step 1 borrows it. Add a form, connect it to any SharePoint list, cut the attachment control out of its data card, delete the form, and paste the control onto your screen.",
  },
  {
    q: "Do I need a premium licence for this?",
    a: "It depends on your plan and the connectors you use. The SharePoint connector is a standard connector, but licensing changes over time, so confirm the current rules with Microsoft or your licensing partner before you build.",
  },
  {
    q: "How do I show the files that belong to a record?",
    a: "Add a gallery connected to your document library and filter it where ParentId equals the current record’s ID. Add an icon or button on each row so users can open the file.",
  },
  {
    q: "What happens if one of the uploads fails?",
    a: "The record is already saved by then, so wrap the ForAll loop in IfError, tell the user what failed and let them try again. Open the flow’s run history in Power Automate to see which step went wrong.",
  },
];

const RELATED_CASE_STUDY_SLUGS = [
  "building-consultants-inspection-crm",
  "manufacturing-project-setup-automation",
];
const relatedCaseStudies = RELATED_CASE_STUDY_SLUGS.map(getCaseStudyBySlug)
  .filter(Boolean)
  .map((s) => ({
    href: `/case-studies/${s.slug}`,
    tag: "Case study",
    title: s.title,
    text: s.truncatedDescription,
  }));
const RELATED = [
  {
    href: "/blog/export-to-pdf-in-power-apps",
    tag: "Blog",
    title: "Export to PDF in Power Apps",
    text: "Another Power Apps how-to from Marcello, this time on getting data out of your app as a PDF.",
  },
  ...relatedCaseStudies,
];

/* ───────────── code samples ───────────── */

const attachmentControlCode = `// After adding a Form control and selecting the attachment control:
// Cut the attachment control and delete the form
// Then paste the attachment control directly into your app

// Fix common errors by setting these properties:
BorderColor: Black
Items: // Remove the reference to Parent.Default
Tooltip: ""
DisplayMode: DisplayMode.Edit

// Additional configurations to consider:
MaxAttachments: 10  // Set your desired maximum number of attachments
MaxAttachmentSize: 10  // Size in MB (check the current maximum for your setup)`;

const flowTriggerCode = `// In Power Automate, use the Power Apps trigger (V2)
// Define two inputs in your Power Apps trigger.
// Power Apps passes values in the order you add them,
// so keep this order in step with the Run() call in your app.

// Input 1: Parent ID input
Type: Number
Name: ParentId  // To associate the file with your record

// Input 2: File input
Type: File
Name: File  // The name you'll reference in your flow`;

const createFileCode = `// After the trigger, add "Create file" action
// Select SharePoint and "Create file"

Site Address: https://yourtenant.sharepoint.com/sites/yoursite
Folder Path: /YourDocumentLibrary
File Content: @triggerBody()['file']['contentBytes']
File Name: @{triggerBody()['file']['name']}

// Then add "Update file properties" action
Site Address: https://yourtenant.sharepoint.com/sites/yoursite
Library Name: YourDocumentLibrary
Id: @outputs('Create_file')?['body/ItemId']  // Item ID from the previous action
ParentId: @{triggerBody()['ParentId']}

// Finally, add "Respond to PowerApps" action
// No response values needed

// Tip: pick each value from the dynamic content list rather than typing it.
// The internal names can differ from the input names you chose.`;

const powerAppsSaveCode = `// In your Save button's OnSelect property:
// First save your record and capture the ID
Set(
    RecId,
    Patch(
        YourDataSource,
        Defaults(YourDataSource),
        {
            Title: txtTitle.Text,
            Description: txtDescription.Text,
            Priority: rdoPriority.Selected.Value
        }
    ).ID  // Extract just the ID from the returned record
);

// Then loop through all attachments and save each one
ForAll(
    FileAttachments.Attachments,
    SaveFileToSharePoint.Run(
        RecId,  // Parent ID from the saved record
        {
            file: {
                contentBytes: Value,  // File content
                name: Name           // File name
            }
        }
    )
);

// Reset controls and navigate back
Reset(txtTitle);
Reset(txtDescription);
Reset(rdoPriority);
Reset(FileAttachments);
Navigate(Home, ScreenTransition.None);`;

const viewFilesCode = `// Gallery Items property
Filter(YourDocumentLibrary, ParentId = CurrentRecord.ID)

// Open icon, OnSelect property
// (check the name of your library's link column, it is often 'Link to item')
Launch(ThisItem.'Link to item')`;

const progressErrorCode = `// Save button: progress indicator and error handling together
Set(varUploading, true);
IfError(
    ForAll(
        FileAttachments.Attachments,
        SaveFileToSharePoint.Run(
            RecId,
            { file: { contentBytes: Value, name: Name } }
        )
    ),
    Notify("One or more files did not upload. Please try again.", NotificationType.Error)
);
Set(varUploading, false);`;

/* ───────────── schema ───────────── */

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
      image: HERO_IMAGE_URL,
      author: { "@type": "Person", name: AUTHOR_NAME },
      publisher: { "@id": `${SITE_URL}#organization` },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      inLanguage: "en-AU",
      mainEntityOfPage: { "@id": `${PAGE_URL}#webpage` },
      video: { "@id": `${PAGE_URL}#video` },
    },
    {
      "@type": "VideoObject",
      "@id": `${PAGE_URL}#video`,
      name: PAGE_HEADLINE,
      description:
        "In this video, Chino shows you how to upload files directly to a SharePoint Document Library using the new Power Apps V2 trigger. This method is the simplest way of doing this, and the files end up in a document library and not attached to a SharePoint list or some other blob storage which is ideal!",
      thumbnailUrl: HERO_IMAGE_URL,
      uploadDate: DATE_PUBLISHED,
      duration: "PT23M4S",
      embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
      contentUrl: `https://www.youtube.com/watch?v=${VIDEO_ID}`,
    },
  ],
};

/* ───────────── small helpers ───────────── */

const Section = ({ id, title, accent, children }) => (
  <section id={id} aria-labelledby={`${id}-heading`} className={styles.section}>
    <h2 id={`${id}-heading`} className={styles.h2}>
      {title && <>{title} </>}
      <span className={styles.accent}>{accent}</span>
    </h2>
    {children}
  </section>
);

const Callout = ({ Icon, label, children }) => (
  <aside className={styles.callout}>
    <svg
      className={styles.calloutRings}
      viewBox="0 0 120 120"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="#046999" strokeOpacity="0.14">
        <circle cx="120" cy="0" r="30" />
        <circle cx="120" cy="0" r="60" />
        <circle cx="120" cy="0" r="90" />
      </g>
    </svg>
    <span className={styles.calloutIcon}>
      <Icon />
    </span>
    <div className={styles.calloutBody}>
      <span className={styles.calloutLabel}>{label}</span>
      <div className={styles.calloutText}>{children}</div>
    </div>
  </aside>
);

const CodeBlock = ({ label, code }) => (
  <figure className={styles.code}>
    <figcaption className={styles.codeHead}>{label}</figcaption>
    <pre className={styles.codePre}>
      <code>{code}</code>
    </pre>
  </figure>
);

const Tip = ({ children }) => (
  <div className={styles.tip}>
    <IconBolt className={styles.tipIcon} />
    <div>
      <span className={styles.tipLabel}>Pro tip</span>
      <div className={styles.tipText}>{children}</div>
    </div>
  </div>
);

/* ───────────── page ───────────── */

export default function FileAttachmentsInPowerAppsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className={styles.page}>
        {/* hero */}
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <h1 className={styles.h1}>
                File Attachments in Power Apps:{" "}
                <span className={styles.accentOnDark}>
                  The Best Way to Do Them
                </span>
              </h1>
              <p className={styles.lede}>
                Upload one file or ten from a Power Apps form straight into a
                SharePoint document library, with one Save button and no Base64
                workarounds.
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
                <div className={styles.authorMeta}>
                  <span className={styles.authorName}>By {AUTHOR_NAME}</span>
                  <span className={styles.authorSub}>
                    Updated{" "}
                    <time dateTime={DATE_MODIFIED}>
                      {formatDate(DATE_MODIFIED)}
                    </time>{" "}
                    · {READING_TIME} min read
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.heroArt}>
              <HeroSvg />
            </div>
          </div>
        </header>

        {/* at a glance */}
        <ul className={styles.glance}>
          {GLANCE.map(({ Icon, value, label, text }) => (
            <li key={value} className={styles.glanceCard}>
              <span className={styles.glanceIcon}>
                <Icon />
              </span>
              <span className={styles.glanceValue}>{value}</span>
              <span className={styles.glanceLabel}>{label}</span>
              <span className={styles.glanceText}>{text}</span>
            </li>
          ))}
        </ul>

        <div className={styles.layout}>
          <nav className={styles.toc} aria-labelledby="toc-heading">
            <h2 id="toc-heading" className={styles.tocTitle}>
              In this guide
            </h2>
            <ul className={styles.tocList}>
              {TOC.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <article className={styles.article}>
            <Section id="intro" accent="Introduction">
              <p>
                If you’ve ever tried to implement file attachments in Power
                Apps, you know it can be surprisingly challenging. You would
                expect attaching files to be a straightforward process, but the
                traditional approaches often involve complex workarounds and
                multiple steps for users.
              </p>
              <p>
                The good news? Microsoft has significantly improved this process
                with a new action in Power Automate that makes uploading
                documents to SharePoint document libraries much simpler and more
                efficient. In this guide, I’ll show you:
              </p>
              <ul className={styles.tickList}>
                <li>How to add the file attachment control to your app</li>
                <li>
                  How to set up a Power Automate flow to handle file uploads
                </li>
                <li>
                  How to connect everything together for a seamless user
                  experience
                </li>
                <li>How to upload multiple files at once</li>
                <li>
                  How to show the files again, and the mistakes to avoid along
                  the way
                </li>
              </ul>
              <Callout Icon={IconBolt} label="In short">
                Save the record first and grab its ID. Then loop over the
                attachments and call one flow per file. The flow creates the
                file in a document library and stamps it with the record’s ID in
                a ParentId column.
              </Callout>
            </Section>

            <Section id="video" title="Prefer to" accent="watch the video?">
              <p>
                Head over to my YouTube channel{" "}
                <a
                  href="https://www.youtube.com/@ChinoDoesStuff/featured"
                  rel="nofollow noreferrer noopener"
                >
                  Chino Does Stuff
                </a>{" "}
                to watch the video tutorial. There you will see a variety of
                videos with loads of tricks and tips on the entire Power
                Platform suite.
              </p>
              <div className={styles.video}>
                <iframe
                  className={styles.videoEmbed}
                  src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                  title="File Attachments in Power Apps - The best way to do them"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </Section>

            <Section id="why" title="Why this approach is" accent="better">
              <p>
                Before diving into the implementation, let’s understand why this
                method is superior to older approaches:
              </p>
              <ul className={styles.reasons}>
                {REASONS.map(({ Icon, title, text }) => (
                  <li key={title} className={styles.reasonCard}>
                    <span className={styles.badge}>
                      <Icon />
                    </span>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <div className={styles.cardText}>{text}</div>
                  </li>
                ))}
              </ul>

              <h3 className={styles.h3}>How the options compare</h3>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <caption className={styles.visuallyHidden}>
                    Three ways to handle files in Power Apps
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Approach</th>
                      <th scope="col">Where files end up</th>
                      <th scope="col">Good fit</th>
                      <th scope="col">Trade-off</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARE.map(([a, b, c, d]) => (
                      <tr key={a}>
                        <th scope="row">{a}</th>
                        <td>{b}</td>
                        <td>{c}</td>
                        <td>{d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            <Section
              id="limits"
              title="What works, and what to"
              accent="plan for"
            >
              <p>
                No approach is perfect. Here is what this one handles well, and
                what you should allow for before you build.
              </p>
              <div className={styles.panels}>
                <div className={styles.panel}>
                  <h3 className={styles.panelTitle}>
                    <span className={styles.chip}>
                      <IconCheck />
                    </span>
                    Works well
                  </h3>
                  <ul className={styles.panelList}>
                    {WORKS.map((t) => (
                      <li key={t}>
                        <span className={styles.chipSmall}>
                          <IconCheck />
                        </span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${styles.panel} ${styles.panelMuted}`}>
                  <h3 className={styles.panelTitle}>
                    <span className={`${styles.chip} ${styles.chipSlate}`}>
                      <IconClock />
                    </span>
                    Plan for
                  </h3>
                  <ul className={styles.panelList}>
                    {PLAN_FOR.map((t) => (
                      <li key={t}>
                        <span
                          className={`${styles.chipSmall} ${styles.chipSlate}`}
                        >
                          <IconAlert />
                        </span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Callout Icon={IconHelp} label="Worth checking">
                Power Platform licensing and limits change over time. Confirm
                the connectors, run limits and file size limits that apply to
                your plan before you settle on a design.
              </Callout>
            </Section>

            <Section id="choose" title="Which option should you" accent="use?">
              <p>
                Not every app needs a flow. Follow the questions below to match
                the option to your situation. If you land on the solid box, the
                rest of this guide is for you.
              </p>
              <figure className={styles.diagram}>
                <div className={styles.diagramScroll}>
                  <div
                    className={`${styles.diagramInner} ${styles.diagramWide}`}
                  >
                    <DecisionSvg />
                  </div>
                </div>
                <figcaption className={styles.caption}>
                  Choosing between list attachments, a Dataverse file column and
                  the V2 trigger method.
                </figcaption>
              </figure>
            </Section>

            <Section
              id="build"
              title="File attachments in Power Apps,"
              accent="step by step"
            >
              <p>
                Here is the whole build in three steps: the control, the flow,
                then the button that joins them.
              </p>
              <ol className={styles.timeline}>
                <li className={styles.step}>
                  <span className={styles.stepBadge} aria-hidden="true">
                    1
                  </span>
                  <h3 className={styles.stepTitle}>
                    Add the file attachment control
                  </h3>
                  <p>
                    One quirk of Power Apps is that the file attachment control
                    isn’t directly available in the insert menu. Here’s how to
                    add it to your app:
                  </p>
                  <ol className={styles.subList}>
                    <li>Insert a Form control onto your screen</li>
                    <li>
                      Connect the form to any SharePoint list (it doesn’t matter
                      which one)
                    </li>
                    <li>Find the attachment control in the form</li>
                    <li>
                      Cut the attachment control (not the entire data card, just
                      the control)
                    </li>
                    <li>Delete the form</li>
                    <li>
                      Paste the attachment control directly onto your screen
                    </li>
                  </ol>
                  <p>
                    After pasting, you’ll need to fix some errors in the
                    control:
                  </p>
                  <CodeBlock
                    label="Attachment control properties"
                    code={attachmentControlCode}
                  />
                  <p>
                    The MaxAttachments and MaxAttachmentSize properties are
                    particularly important to configure based on your
                    requirements.
                  </p>
                  <Tip>
                    Set both limits on day one. Users then hit your limit in the
                    app, rather than a failure in the flow.
                  </Tip>
                </li>

                <li className={styles.step}>
                  <span className={styles.stepBadge} aria-hidden="true">
                    2
                  </span>
                  <h3 className={styles.stepTitle}>
                    Create the Power Automate flow
                  </h3>
                  <p>
                    Next, we’ll create a flow that receives files from Power
                    Apps and saves them to a SharePoint document library.
                  </p>
                  <h4 className={styles.h4}>Set up the document library</h4>
                  <p>
                    In SharePoint, create a document library to store your
                    attachments. Add a Number column called “ParentId”. This
                    will store the ID of the related record from your list.
                  </p>
                  <h4 className={styles.h4}>Create the flow</h4>
                  <p>
                    In Power Automate, create a new{" "}
                    <Link href="/services/microsoft-power-platform/power-automate">
                      Power Automate
                    </Link>{" "}
                    flow with these steps:
                  </p>
                  <ol className={styles.subList}>
                    <li>
                      <strong>Trigger:</strong> Use the “Power Apps (V2)”
                      trigger. This is crucial, as it supports direct file
                      inputs.
                    </li>
                    <li>
                      <strong>Create file in SharePoint:</strong> This action
                      saves the file to your document library.
                    </li>
                    <li>
                      <strong>Update file properties:</strong> This sets the
                      ParentId property to associate the file with your record.
                    </li>
                    <li>
                      <strong>Respond to Power Apps:</strong> This completes the
                      flow and returns control to your app.
                    </li>
                  </ol>
                  <CodeBlock
                    label="Power Apps (V2) trigger inputs"
                    code={flowTriggerCode}
                  />
                  <CodeBlock
                    label="Create file and update file properties"
                    code={createFileCode}
                  />
                  <p>
                    Save your flow with a descriptive name like “Save File to
                    SharePoint”.
                  </p>
                  <Tip>
                    A clear flow name matters. It’s the name you’ll see when you
                    add the flow to your app in step 3.
                  </Tip>
                </li>

                <li className={styles.step}>
                  <span className={styles.stepBadge} aria-hidden="true">
                    3
                  </span>
                  <h3 className={styles.stepTitle}>
                    Connect Power Apps to your flow
                  </h3>
                  <p>
                    Now we need to modify our app’s save button to handle both
                    the record creation and the file uploads:
                  </p>
                  <CodeBlock
                    label="Save button, OnSelect"
                    code={powerAppsSaveCode}
                  />
                  <p>Let’s break down what’s happening here:</p>
                  <ol className={styles.subList}>
                    <li>
                      First, we save our record to the data source using Patch()
                    </li>
                    <li>
                      We capture the ID of the newly created record in a
                      variable (RecId)
                    </li>
                    <li>
                      We use ForAll() to loop through each attachment in the
                      FileAttachments control
                    </li>
                    <li>
                      For each attachment, we call our flow, passing both the
                      record ID and the file details
                    </li>
                    <li>
                      Finally, we reset our form controls and navigate back to
                      the home screen
                    </li>
                  </ol>
                  <Tip>
                    Capture the ID with Set(RecId, Patch(…).ID). The flow then
                    only runs once the record exists, and every file gets a
                    ParentId to match.
                  </Tip>
                </li>
              </ol>
            </Section>

            <Section id="how" title="How it all works" accent="together">
              <p>When a user fills out your form and attaches files:</p>
              <figure className={styles.diagram}>
                <div className={styles.diagramScroll}>
                  <div
                    className={`${styles.diagramInner} ${styles.diagramFlow}`}
                  >
                    <AttachFlowSvg />
                  </div>
                </div>
                <figcaption className={styles.caption}>
                  The numbers match the list below.
                </figcaption>
              </figure>
              <ol className={styles.subList}>
                <li>They click the Save button</li>
                <li>The app saves the record data to your SharePoint list</li>
                <li>The app gets back the record ID</li>
                <li>For each attached file, the app calls your flow</li>
                <li>
                  The flow saves each file to the document library and sets the
                  ParentId property
                </li>
                <li>The files are now linked to your record by the ParentId</li>
              </ol>
              <p>
                This entire process happens seamlessly, and the user only needs
                to click Save once.
              </p>
            </Section>

            <Section id="view" title="Viewing attached" accent="files">
              <p>To display files associated with a record, you’ll need to:</p>
              <ol className={styles.subList}>
                <li>Create a gallery control on your view screen</li>
                <li>Connect it to your document library</li>
                <li>
                  Filter the gallery to show only files where ParentId matches
                  your current record’s ID
                </li>
                <li>Add an icon or button to open each file</li>
              </ol>
              <p>
                The formula for the gallery’s Items property would be something
                like the one below. Swap CurrentRecord.ID for whatever holds the
                selected record’s ID in your app, such as a gallery’s
                Selected.ID.
              </p>
              <CodeBlock label="View screen" code={viewFilesCode} />
            </Section>

            <Section
              id="alternatives"
              title="Other ways to handle"
              accent="attachments"
            >
              <p>
                This method is my first choice when files belong in a document
                library. These are the other routes, and when they make sense.
              </p>
              <ul className={styles.altList}>
                {ALTERNATIVES.map(({ Icon, title, best, trade }) => (
                  <li key={title} className={styles.altRow}>
                    <span className={styles.badge}>
                      <Icon />
                    </span>
                    <div className={styles.altBody}>
                      <h3 className={styles.cardTitle}>{title}</h3>
                      <div className={styles.altLine}>
                        <strong>Best for:</strong> {best}
                      </div>
                      <div className={styles.altLine}>
                        <strong>Trade-off:</strong> {trade}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Section>

            <Section
              id="best"
              title="Best practices and"
              accent="considerations"
            >
              <p>When implementing file attachments in Power Apps:</p>
              <ul className={styles.walk}>
                {WALKTHROUGH.map(({ Icon, title, text, steps }) => (
                  <li key={title} className={styles.walkCard}>
                    <span className={styles.badge}>
                      <Icon />
                    </span>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <div className={styles.cardText}>{text}</div>
                    <ul className={styles.miniSteps}>
                      {steps.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              <p>
                Progress and error handling work well together. Here is the save
                button from step 3 with both added:
              </p>
              <CodeBlock
                label="Save button with progress and error handling"
                code={progressErrorCode}
              />
            </Section>

            <Section id="extend" title="Advanced" accent="customisations">
              <p>This approach can be extended in several ways:</p>
              <ul className={styles.extend}>
                {EXTEND.map(([Icon, text]) => (
                  <li key={text} className={styles.extendTile}>
                    <span className={styles.chipSmall}>
                      <Icon />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="mistakes" title="Common mistakes" accent="to avoid">
              <p>
                These five come up again and again when file uploads misbehave.
                Each one is quick to fix once you know to look for it.
              </p>
              <ul className={styles.mistakes}>
                {MISTAKES.map(({ Sketch, title, text, instead }) => (
                  <li key={title} className={styles.mistake}>
                    <div className={styles.sketch}>
                      <Sketch />
                    </div>
                    <div className={styles.mistakeBody}>
                      <h3 className={styles.cardTitle}>{title}</h3>
                      <div className={styles.cardText}>{text}</div>
                      <div className={styles.instead}>
                        <span className={styles.insteadPill}>Instead</span>
                        <span>{instead}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <h3 className={styles.h3}>Before you share the app</h3>
              <ul className={styles.checklist}>
                {CHECKLIST.map((t) => (
                  <li key={t}>
                    <span className={styles.chipSmall}>
                      <IconCheck />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </Section>

            <section
              id="help"
              aria-labelledby="help-heading"
              className={`${styles.section} ${styles.cta}`}
            >
              <h2 id="help-heading" className={styles.ctaTitle}>
                Need a hand with{" "}
                <span className={styles.accentOnDark}>
                  file attachments in Power Apps?
                </span>
              </h2>
              <p className={styles.ctaText}>
                We build and fix Power Apps and Power Automate solutions for
                Australian organisations. If your upload flow is stuck, or you’d
                rather have an expert set it up properly the first time, get in
                touch.
              </p>
              <div className={styles.ctaActions}>
                <Link href="/contact-us" className="btn">
                  Talk to our Power Platform team
                </Link>
                <Link
                  href="/services/microsoft-power-platform/power-apps"
                  className={styles.ctaLink}
                >
                  See our Power Apps services <IconArrow />
                </Link>
              </div>
            </section>

            <Section id="faq" title="Frequently asked" accent="questions">
              <div className={styles.faq}>
                {FAQS.map(({ q, a }) => (
                  <details key={q} className={styles.faqItem}>
                    <summary className={styles.faqSummary}>{q}</summary>
                    <p className={styles.faqAnswer}>{a}</p>
                  </details>
                ))}
              </div>
            </Section>

            <Section id="conclusion" accent="Conclusion">
              <p>
                With Microsoft’s improved Power Apps V2 trigger in Power
                Automate, handling file attachments in Power Apps has become
                significantly easier. This approach provides a clean,
                user-friendly way to upload files to SharePoint and maintain
                their relationship with your app’s data.
              </p>
              <p>
                By using a document library instead of list attachments, you
                gain all the benefits of SharePoint’s document management
                capabilities while providing a seamless experience for your
                users.
              </p>
              <p>
                This method eliminates much of the complexity that was
                previously required for file uploads in Power Apps, making your
                apps more maintainable and user-friendly.
              </p>
              <p>
                If you’d like to see more Power Apps development tips and
                techniques, please head over to the{" "}
                <a
                  href="https://www.youtube.com/@ChinoDoesStuff/featured"
                  rel="nofollow noreferrer noopener"
                >
                  YouTube channel
                </a>{" "}
                and leave a comment there. I actively monitor and respond to all
                YouTube comments!
              </p>

              <div className={styles.authorBox}>
                <span className={styles.avatarLarge}>
                  <Image
                    src={marcello}
                    alt={AUTHOR_NAME}
                    width={56}
                    height={56}
                  />
                </span>
                <div>
                  <h3 className={styles.authorTitle}>About the author</h3>
                  <p className={styles.authorBio}>
                    {AUTHOR_NAME} is a lead developer at Office Experts Group,
                    an Australian Microsoft consultancy established in 2000. He
                    specialises in Power Platform integration and is the founder
                    of the YouTube channel{" "}
                    <a
                      href="https://www.youtube.com/@ChinoDoesStuff/featured"
                      rel="nofollow noreferrer noopener"
                    >
                      ChinoDoesStuff
                    </a>
                    . You can also find him on{" "}
                    <a
                      href="https://www.linkedin.com/in/marcellobrocchi/"
                      rel="nofollow noreferrer noopener"
                    >
                      LinkedIn
                    </a>
                    . If you have any questions, please feel free to{" "}
                    <Link href="/contact-us">get in contact</Link> using the
                    form below.
                  </p>
                </div>
              </div>
            </Section>

            <Section id="related" title="Keep" accent="reading">
              <ul className={styles.related}>
                {RELATED.map(({ href, tag, title, text }) => (
                  <li key={href} className={styles.relatedCard}>
                    <span className={styles.relatedTag}>{tag}</span>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <div className={styles.cardText}>{text}</div>
                    <Link href={href} className={styles.relatedLink}>
                      Read more <IconArrow />
                    </Link>
                  </li>
                ))}
              </ul>
            </Section>
          </article>
        </div>
      </div>

      <Contact />
    </>
  );
}
