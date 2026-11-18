// /app/blog/custom-excel-shortcuts-with-macros/page.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

import CodeBlock from "@/components/CodeBlock";
import Contact from "@/components/Contact";
import { generateOrganizationSchema } from "@/utils/schemaGenerators";

import dan from "@/public/team/dan.webp";

import styles from "@/styles/customExcelShortcutsBlog.module.scss";

import AnatomySvg from "./(svgs)/AnatomySvg";
import DecisionSvg from "./(svgs)/DecisionSvg";
import HeroSvg from "./(svgs)/HeroSvg";
import {
  ArrowIcon,
  BoltIcon,
  BulbIcon,
  ChevronIcon,
  ClockIcon,
  InfoIcon,
  KeyboardIcon,
  ShieldIcon,
  WarnIcon,
} from "./(svgs)/Icons";
import { KeyCombo } from "./(svgs)/Keys";
import {
  BackupSketch,
  KeyClashSketch,
  RangeSketch,
  SaveFormatSketch,
  StorageSketch,
} from "./(svgs)/MistakeSketches";

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with layout.js.
const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/blog/custom-excel-shortcuts-with-macros`;
const PAGE_TITLE = "10 Custom Excel Shortcuts Using Macros | Office Experts";
const PAGE_DESCRIPTION =
  "Learn how to create your own Excel shortcuts using macros. 10 copy-and-paste VBA macros for Mac and Windows, each with a practical use case.";
const PAGE_HEADLINE =
  "10 Custom Excel Shortcuts Using Macros (With Practical Use Cases)";
const BREADCRUMB_NAME = "10 Custom Excel Shortcuts Using Macros";
const AUTHOR_NAME = "Daniel Thomas";
const READING_TIME = 13;
const WORD_COUNT = 3050;
const HERO_IMAGE_PATH = "/logo.png";
const HERO_IMAGE_ALT = "Office Experts Group Logo";
// 24 Jul 2025 is AEST (+10:00). 18 Nov 2026 is AEDT (+11:00).
const DATE_PUBLISHED = "2025-07-24T09:00:00+10:00";
const DATE_MODIFIED = "2026-11-18T09:00:00+11:00";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Sydney",
  });

const TOC = [
  { id: "getting-started", label: "Getting started" },
  { id: "choose", label: "Which shortcut first?" },
  { id: "highlight-row", label: "Highlight the active row" },
  { id: "clear-filters", label: "Clear all filters" },
  { id: "convert-to-values", label: "Formulas to values" },
  { id: "insert-timestamp", label: "Insert a timestamp" },
  { id: "format-as-table", label: "Format as table" },
  { id: "unmerge-cells", label: "Unmerge all cells" },
  { id: "consistent-font", label: "Consistent font and size" },
  { id: "autofit-columns", label: "Auto-fit all columns" },
  { id: "last-row", label: "Jump to last row" },
  { id: "save-with-timestamp", label: "Save and timestamp" },
  { id: "clashes", label: "Avoiding key clashes" },
  { id: "personal-macro-workbook", label: "Personal Macro Workbook" },
  { id: "mistakes", label: "Common mistakes" },
  { id: "get-help", label: "When to get help" },
  { id: "faq", label: "FAQs" },
  { id: "final-thoughts", label: "Final thoughts" },
];

const GLANCE = [
  {
    Icon: BoltIcon,
    value: "10",
    label: "Ready-to-use macros",
    text: "Copy the VBA, assign a key and you’re done.",
  },
  {
    Icon: KeyboardIcon,
    value: "2",
    label: "Platforms covered",
    text: "Mac and Windows key combinations shown for every macro.",
  },
  {
    Icon: ClockIcon,
    value: "1",
    label: "Keystroke per task",
    text: "Instead of five or six clicks, repeated dozens of times a day.",
  },
];

const RECORD_STEPS = [
  {
    title: "Open the Developer tab",
    text: (
      <>
        Go to <strong>Developer → Record Macro</strong>. If you can’t see the
        Developer tab, switch it on in Excel’s options (Customize Ribbon on
        Windows, Ribbon &amp; Toolbar on Mac).
      </>
    ),
  },
  {
    title: "Name your macro",
    text: (
      <>
        Pick a clear name with no spaces, for example <em>HighlightRow</em>.
      </>
    ),
  },
  {
    title: "Assign a shortcut key",
    text: (
      <>
        Type a letter in the Shortcut key box, for example{" "}
        <em>Cmd (Ctrl) + Shift + H</em>. Type the letter in uppercase to get
        Shift as part of the combination.
      </>
    ),
  },
  {
    title: "Perform the actions",
    text: "Do the task you want repeated, once and without detours. Excel records each step.",
  },
  {
    title: "Click Stop Recording",
    text: (
      <>
        Click <strong>Stop Recording</strong>, then test the macro on a spare
        sheet before you rely on it.
      </>
    ),
  },
];

const PASTE_STEPS = [
  {
    title: "Open the Visual Basic Editor",
    text: "Press Fn + Option + F11 on Mac or Alt + F11 on Windows.",
  },
  {
    title: "Insert a module and paste",
    text: "Choose Insert > Module, then paste the code for the macro you want.",
  },
  {
    title: "Assign the shortcut",
    text: "Back in Excel, press Alt + F8 on Windows (or open Developer > Macros), select the macro, click Options and type your shortcut letter.",
  },
  {
    title: "Save as a macro-enabled workbook",
    text: "Use File > Save As and choose Excel Macro-Enabled Workbook (.xlsm). A normal .xlsx file drops the macro.",
  },
];

const CHOOSE_ROWS = [
  {
    day: "Reviewing long data tables",
    build: "Highlight the active row, Jump to last row",
    why: "Keeps your place in transaction logs and audit sheets.",
  },
  {
    day: "Cleaning files from other teams",
    build: "Unmerge all cells, Consistent font, Auto-fit columns",
    why: "Removes the formatting that breaks sorting and formulas.",
  },
  {
    day: "Sending finished reports to clients",
    build: "Convert to values, Format as table, Save and timestamp",
    why: "Locks the numbers in and leaves you a backup.",
  },
  {
    day: "Logging approvals or QA checks",
    build: "Insert a timestamp",
    why: "Builds a time-stamped audit trail with no typing.",
  },
  {
    day: "Troubleshooting “rows are missing”",
    build: "Clear all filters",
    why: "Restores the full dataset in one keystroke.",
  },
];

const CLASH_ROWS = [
  {
    keys: "Ctrl + Shift + F",
    builtin: "Opens Format Cells on the Font tab",
    fix: "Swap the letter, or accept the override in this workbook.",
  },
  {
    keys: "Ctrl + Shift + U",
    builtin: "Expands or collapses the formula bar",
    fix: "Swap the letter if you use a tall formula bar.",
  },
  {
    keys: "Ctrl + Shift + A",
    builtin: "Inserts argument names while you type a formula",
    fix: "Swap the letter if you write formulas by hand.",
  },
];

const SHORTCUTS = [
  {
    id: "highlight-row",
    lead: "1. Highlight",
    accent: "the Active Row",
    mac: ["command", "shift", "h"],
    pc: ["Ctrl", "Shift", "H"],
    useCase:
      "When working with large data tables — like transaction logs or audit sheets — it’s easy to lose sight of the row you’re analysing. This shortcut quickly highlights the active row so you can focus visually and return to it after scrolling elsewhere. It’s particularly helpful during meetings, screen shares, or when comparing records line by line.",
    how: "The macro reads the row number of the active cell and fills the whole row with pale yellow. It doesn’t follow your cursor, so think of it as a quick marker rather than a permanent rule.",
    note: {
      type: "tip",
      text: "Change the three numbers in RGB(255, 255, 153) to use your own highlight colour. To remove a highlight, select the row and choose No Fill.",
    },
    name: "HighlightRow",
    code: `Sub HighlightRow()
    ' Colour the whole active row pale yellow
    Rows(ActiveCell.Row).Interior.Color = RGB(255, 255, 153)
End Sub`,
  },
  {
    id: "clear-filters",
    lead: "2. Clear",
    accent: "All Filters",
    mac: ["command", "shift", "c"],
    pc: ["Ctrl", "Shift", "C"],
    useCase:
      "Imagine you’re reviewing a heavily filtered sales report. You’re not sure which columns have filters applied, but your data looks incomplete. Instead of hunting through each column filter menu, this shortcut instantly restores the full dataset. It’s also great during troubleshooting when users say, “Some rows are missing.”",
    how: "ShowAllData reveals every hidden row on the active sheet. The error handling means nothing breaks if no filter is applied, and the filter buttons stay in place so you can filter again straight away.",
    note: {
      type: "warn",
      text: "If you filter inside an Excel Table and the filter doesn’t clear, test the macro on a copy of your file first, as tables can behave differently.",
    },
    name: "ClearFilters",
    code: `Sub ClearFilters()
    ' Show every row again, ignoring the error if no filter is active
    On Error Resume Next
    ActiveSheet.ShowAllData
    On Error GoTo 0
End Sub`,
  },
  {
    id: "convert-to-values",
    lead: "3. Convert",
    accent: "Formulas to Values",
    mac: ["command", "shift", "v"],
    pc: ["Ctrl", "Shift", "V"],
    useCase:
      "You have just finished preparing financial forecasts with complex formulas referencing external files. Before sending the sheet to a client or saving for archival, you want to convert everything to static values to avoid reference errors. Select the range, hit the shortcut, and done. No paste special needed.",
    how: "Setting a range’s Value to itself swaps each formula for the number or text it currently shows. Anything outside your selection is left alone.",
    note: {
      type: "warn",
      text: "This can’t be undone, because running a macro clears Excel’s undo history. Run the backup macro (number 10) first, and if part of your selection is an array formula, Excel may refuse to change it.",
    },
    name: "ConvertToValues",
    code: `Sub ConvertToValues()
    ' Replace formulas in the selection with their results
    If TypeName(Selection) <> "Range" Then Exit Sub
    Selection.Value = Selection.Value
End Sub`,
  },
  {
    id: "insert-timestamp",
    lead: "4. Insert",
    accent: "Timestamp in Active Cell",
    mac: ["command", "shift", "t"],
    pc: ["Ctrl", "Shift", "T"],
    useCase:
      "Great for task tracking, approval logs, and QA checklists. Every time you update or review a row of data, use this shortcut to insert the exact date and time. It creates a transparent, time-stamped audit trail — no need to type anything manually or remember formulas like =NOW().",
    how: "Unlike =NOW(), which keeps recalculating every time the sheet changes, the value this macro writes is fixed. That’s exactly what an audit trail needs. The code also applies an Australian day/month/year format.",
    note: {
      type: "tip",
      text: 'Want the date only? Change the format to "dd/mm/yyyy" and use Date instead of Now.',
    },
    name: "InsertTimestamp",
    code: `Sub InsertTimestamp()
    ' Write a fixed date and time (unlike =NOW(), it never changes)
    ActiveCell.Value = Now
    ActiveCell.NumberFormat = "dd/mm/yyyy hh:mm"
End Sub`,
  },
  {
    id: "format-as-table",
    lead: "5. Format",
    accent: "as Table",
    mac: ["command", "shift", "q"],
    pc: ["Ctrl", "Shift", "Q"],
    useCase:
      "Working with structured data? Excel Tables come with built-in filter buttons, dynamic ranges for formulas, and visual styling. Instead of navigating through the ribbon to apply table formatting, this shortcut converts any selected range into a proper table — especially handy when preparing reports for clients or managers.",
    how: "The macro assumes your selection includes a header row and needs at least two rows. If you select a single cell it does nothing rather than guess. It lets Excel choose the table name, so you can run it on many sheets without a name clash.",
    note: {
      type: "warn",
      text: "Excel can’t create a table over cells that already sit inside one, so select a range outside any existing table.",
    },
    name: "FormatAsTable",
    code: `Sub FormatAsTable()
    ' Turn the selected range into an Excel Table
    Dim tbl As ListObject
    If Selection.Rows.Count < 2 Then Exit Sub
    Set tbl = ActiveSheet.ListObjects.Add(xlSrcRange, Selection, , xlYes)
    tbl.TableStyle = "TableStyleMedium2"
End Sub`,
  },
  {
    id: "unmerge-cells",
    lead: "6. Unmerge",
    accent: "All Cells in Sheet",
    mac: ["command", "shift", "u"],
    pc: ["Ctrl", "Shift", "U"],
    useCase:
      "You receive a spreadsheet from another department, and it’s full of merged cells that break sorting, filtering, and formulas. One press of this shortcut instantly clears all merged formatting so you can reshape the data into something usable. It’s a lifesaver for data cleanup and importing into databases or Power BI.",
    how: "Only the top-left cell of each merged area keeps its value once it’s unmerged, so you’ll usually need to fill the blank cells down afterwards. The macro covers the whole sheet, not just your selection.",
    note: {
      type: "tip",
      text: "Run it on a copy of the sheet if the merged layout carries meaning, such as report headings you still want to keep.",
    },
    name: "UnmergeAll",
    code: `Sub UnmergeAll()
    ' Unmerge every merged cell on the active sheet
    ActiveSheet.Cells.UnMerge
End Sub`,
  },
  {
    id: "consistent-font",
    lead: "7. Apply",
    accent: "Consistent Font & Size",
    mac: ["command", "shift", "f"],
    pc: ["Ctrl", "Shift", "F"],
    useCase:
      "You’ve just copied data from different sources, and now your worksheet is a visual mess — different fonts, sizes, and formatting. This shortcut standardises everything to a clean, readable style. Ideal for preparing deliverables, consolidating data, or simply making your workbook look professional.",
    how: "The macro formats the cells you’ve selected, so press Ctrl + A (Cmd + A on Mac) first to cover the whole sheet.",
    note: {
      type: "tip",
      text: "Swap Calibri and 11 for your organisation’s house font and size, and every sheet you run it on will match.",
    },
    name: "StandardizeFont",
    code: `Sub StandardizeFont()
    ' Apply one font and size to the selected cells
    With Selection.Font
        .Name = "Calibri"
        .Size = 11
    End With
End Sub`,
  },
  {
    id: "autofit-columns",
    lead: "8. Auto-Fit",
    accent: "All Columns",
    mac: ["command", "shift", "a"],
    pc: ["Ctrl", "Shift", "A"],
    useCase:
      "Whenever data is imported or pasted in, columns are often too narrow (cutting off content) or too wide. This shortcut instantly resizes all columns to fit their contents — no need to double-click column headers one by one. Great for polishing spreadsheets before sharing or printing.",
    how: "Auto-fit sizes each column to its longest entry. One very long cell can therefore make a column enormous.",
    note: {
      type: "warn",
      text: "If a single long note stretches a column, select just the columns you want and use Home > Format > AutoFit Column Width instead.",
    },
    name: "AutoFitColumns",
    code: `Sub AutoFitColumns()
    ' Resize every column on the active sheet to fit its contents
    ActiveSheet.Cells.EntireColumn.AutoFit
End Sub`,
  },
  {
    id: "last-row",
    lead: "9. Jump to",
    accent: "Last Row in Sheet",
    mac: ["command", "shift", "j"],
    pc: ["Ctrl", "Shift", "J"],
    useCase:
      "In a growing list — like inventory, sales, or time logs — it’s often necessary to jump directly to the last row to add a new entry or review the latest one. This shortcut skips the scroll and lands you exactly where the action is happening.",
    how: "The macro looks up from the very bottom of column A to find the last filled cell. If column A has gaps, change the 1 in the code to the number of a column that always has data (2 for column B, and so on).",
    note: {
      type: "tip",
      text: "Pair this with the timestamp macro: jump to the last row, move one cell down, and log your entry in two keystrokes.",
    },
    name: "GoToLastRow",
    code: `Sub GoToLastRow()
    ' Jump to the last used row in column A
    Dim lastRow As Long
    lastRow = Cells(Rows.Count, 1).End(xlUp).Row
    Cells(lastRow, 1).Select
End Sub`,
  },
  {
    id: "save-with-timestamp",
    lead: "10. Save and",
    accent: "Timestamp the Workbook",
    mac: ["command", "shift", "s"],
    pc: ["Ctrl", "Shift", "S"],
    useCase:
      "Before running risky changes (like mass find-and-replace or data transformations), use this shortcut to instantly create a backup version of your file with the current timestamp. It’s an insurance policy that takes less than a second. Also helpful for keeping periodic snapshots of work during long projects.",
    how: "SaveCopyAs writes a copy without changing the file you’re working in, so you carry on as normal. The copy keeps the same file type and sits in the same folder, named Backup_ followed by the date and time. The folder separator is looked up from Excel, so the same code runs on Mac and Windows.",
    note: {
      type: "warn",
      text: "Save the workbook once before using this, so it has a folder to copy into. If the file lives on OneDrive or SharePoint, or you’re on a Mac, test it first, as Excel may handle the folder path or ask for permission differently.",
    },
    name: "SaveWithTimestamp",
    code: `Sub SaveWithTimestamp()
    ' Save a timestamped backup copy next to the current file
    Dim backupPath As String
    Dim fileType As String
    If ThisWorkbook.Path = "" Then
        MsgBox "Save the workbook once before making a backup."
        Exit Sub
    End If
    fileType = Mid(ThisWorkbook.Name, InStrRev(ThisWorkbook.Name, "."))
    backupPath = ThisWorkbook.Path & Application.PathSeparator & _
        "Backup_" & Format(Now, "yyyymmdd_hhmmss") & fileType
    ThisWorkbook.SaveCopyAs backupPath
    MsgBox "Backup saved to: " & backupPath
End Sub`,
  },
];

const MISTAKES = [
  {
    Sketch: SaveFormatSketch,
    title: "Saving the file as .xlsx",
    fix: "Save as Excel Macro-Enabled Workbook (.xlsm), or keep the macro in your Personal Macro Workbook. A plain .xlsx drops the code without warning you twice.",
  },
  {
    Sketch: KeyClashSketch,
    title: "Picking a combination Excel already uses",
    fix: "Check the clash table above, then choose a letter nothing else claims. While the workbook is open, your macro wins over the built-in shortcut.",
  },
  {
    Sketch: BackupSketch,
    title: "Running destructive macros with no backup",
    fix: "Macros clear Excel’s undo history, so Ctrl + Z may not rescue you. Run the timestamped backup macro before anything that changes lots of cells.",
  },
  {
    Sketch: RangeSketch,
    title: "Hard-coding ranges like A1:D20",
    fix: "Use ActiveCell, Selection or End(xlUp) so the macro adapts when the data grows or shrinks, as the macros in this article do.",
  },
  {
    Sketch: StorageSketch,
    title: "Copying every macro into every workbook",
    fix: "Keep your everyday macros in the Personal Macro Workbook. You fix a bug once, and the improvement shows up in every file.",
  },
];

const FAQS = [
  {
    q: "Do these shortcuts work on both Mac and Windows?",
    a: (
      <>
        The macros use standard VBA, so they should run in desktop Excel on
        both. The key combinations differ slightly: on Mac, the Record Macro box
        may suggest Option + Cmd rather than Cmd + Shift, so use whatever the
        dialog offers. Test each macro on your own version before relying on it.
      </>
    ),
  },
  {
    q: "Can I use macros in Excel for the web?",
    a: "No. Excel for the web can’t run VBA macros, so open the file in the desktop app. The shortcuts only exist while the macro does.",
  },
  {
    q: "Do I need to know VBA to create my own shortcuts?",
    a: (
      <>
        Not to start. The macro recorder writes the code for you while you work.
        Typing or editing VBA simply lets you handle more situations, such as
        the last row of any list. If you’d rather not write code at all, our
        team can build{" "}
        <Link
          href="/services/microsoft-excel/custom-excel-development"
          className={styles.inlineLink}
        >
          custom Excel development
        </Link>{" "}
        around your process.
      </>
    ),
  },
  {
    q: "Why does my shortcut do nothing?",
    a: "The usual causes are that the workbook holding the macro isn’t open (unless it’s in your Personal Macro Workbook), macros are switched off, the file was saved as .xlsx, or the shortcut letter was entered in lowercase so it became Ctrl + letter instead of Ctrl + Shift + letter.",
  },
  {
    q: "Can I undo a macro?",
    a: "Usually not. Running a macro clears Excel’s undo history, so keep a backup. The timestamped save macro (number 10) takes less than a second and gives you a way back.",
  },
];

const RELATED = [
  {
    href: "/services/microsoft-excel/custom-excel-development",
    title: "Custom Excel development",
    text: "Automation, tools and reports built around the way your team works.",
  },
  {
    href: "/microsoft-support-and-training-australia",
    title: "Microsoft support and training",
    text: "Practical help and training for your team’s Microsoft tools.",
  },
  {
    href: "/blog",
    title: "More Office Experts guides",
    text: "Browse our how-to articles for Excel, Word and more.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: PAGE_HEADLINE,
      description: PAGE_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}#website` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}#article` },
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
      isPartOf: { "@id": `${PAGE_URL}#webpage` },
      mainEntityOfPage: { "@id": `${PAGE_URL}#webpage` },
      headline: PAGE_HEADLINE,
      alternativeHeadline:
        "Create Your Own Excel Shortcuts to Automate Repetitive Tasks",
      description: PAGE_DESCRIPTION,
      image: `${SITE_URL}${HERO_IMAGE_PATH}`,
      author: { "@type": "Person", name: AUTHOR_NAME },
      publisher: { "@id": `${SITE_URL}#organization` },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: "Excel Tips",
      keywords: [
        "Excel shortcuts",
        "Excel macros",
        "VBA shortcuts",
        "Excel automation",
      ],
      wordCount: WORD_COUNT,
      timeRequired: `PT${READING_TIME}M`,
      inLanguage: "en-AU",
    },
  ],
};

function Callout({ Icon, label, children }) {
  return (
    <aside className={styles.callout}>
      <span className={styles.chip}>
        <Icon />
      </span>
      <div>
        <span className={styles.calloutLabel}>{label}</span>
        <div className={styles.calloutText}>{children}</div>
      </div>
    </aside>
  );
}

function Note({ type, children }) {
  const warn = type === "warn";
  const Icon = warn ? WarnIcon : BulbIcon;
  return (
    <div className={`${styles.note} ${warn ? styles.noteWarn : ""}`.trim()}>
      <span className={styles.noteChip}>
        <Icon />
      </span>
      <div>
        <span className={styles.noteLabel}>
          {warn ? "Watch out" : "Pro tip"}
        </span>
        <span className={styles.noteText}>{children}</span>
      </div>
    </div>
  );
}

function Steps({ items }) {
  return (
    <ol className={styles.steps}>
      {items.map((item, i) => (
        <li key={item.title} className={styles.step}>
          <span className={styles.stepBadge} aria-hidden="true">
            {i + 1}
          </span>
          <div>
            <span className={styles.stepTitle}>{item.title}</span>
            <span className={styles.stepText}>{item.text}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}

function ShortcutKeys({ mac, pc }) {
  return (
    <div className={styles.keysPanel}>
      <span className={styles.keysLabel}>Mac</span>
      <KeyCombo
        keys={mac}
        className={styles.keyRow}
        capClass={styles.keyCap}
        plusClass={styles.plus}
      />
      <span className={styles.keysLabel}>Windows</span>
      <div
        className={styles.pcRow}
        role="group"
        aria-label={`Windows shortcut: ${pc.join(" plus ")}`}
      >
        {pc.map((key, i) => (
          <React.Fragment key={key}>
            <kbd className={styles.kbd}>{key}</kbd>
            {i < pc.length - 1 && (
              <span className={styles.plus} aria-hidden="true">
                +
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default function CustomExcelShortcutsBlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className={styles.page}>
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <h1 className={styles.title}>
                10 Custom Excel Shortcuts Using Macros{" "}
                <span className={styles.accent}>
                  (With Practical Use Cases)
                </span>
              </h1>
              <p className={styles.lede}>
                Keyboard shortcuts are a game-changer in Excel, but you can
                build your own too. Record or paste a macro, assign a key
                combination, and a task that took five or six clicks becomes a
                single keystroke.
              </p>
              <div className={styles.authorRow}>
                <span className={styles.avatar} aria-hidden="true">
                  <Image src={dan} alt={AUTHOR_NAME} width={38} height={38} />
                </span>
                <div className={styles.authorMeta}>
                  <span className={styles.authorName}>By {AUTHOR_NAME}</span>
                  <span className={styles.authorDate}>
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
              <HeroSvg flowClass={styles.flow} pulseClass={styles.pulse} />
            </div>
          </div>
        </div>

        <section className={styles.glance} aria-label="At a glance">
          <div className={styles.glanceGrid}>
            {GLANCE.map(({ Icon, value, label, text }) => (
              <div key={label} className={styles.glanceCard}>
                <span className={styles.glanceChip}>
                  <Icon />
                </span>
                <div>
                  <span className={styles.glanceValue}>{value}</span>
                  <span className={styles.glanceLabel}>{label}</span>
                  <span className={styles.glanceText}>{text}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.layout}>
          <nav className={styles.toc} aria-labelledby="toc-heading">
            <span id="toc-heading" className={styles.tocTitle}>
              In this guide
            </span>
            <ul>
              {TOC.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <article className={styles.article}>
            <section
              id="getting-started"
              className={styles.section}
              aria-labelledby="getting-started-heading"
            >
              <h2 id="getting-started-heading">
                Getting Started:{" "}
                <span className={styles.accent}>
                  How to Create a Macro With a Shortcut
                </span>
              </h2>
              <p>
                If you’ve been using Excel for years, you know that keyboard
                shortcuts are a game-changer. But did you know you can{" "}
                <strong>create your own shortcuts</strong> to automate
                repetitive tasks using <strong>macros</strong>? With just a few
                clicks, you can assign keyboard shortcuts to common workflows
                and supercharge your productivity.
              </p>
              <p>
                Below are <strong>10 custom Excel macros</strong>, each with a{" "}
                <strong>real-world use case</strong> and a suggested keyboard
                shortcut you can assign. Every one uses plain VBA, should run in
                desktop Excel on Mac and Windows, and can be pasted straight
                into your own workbook.
              </p>

              <h3>Record a macro and give it a shortcut</h3>
              <Steps items={RECORD_STEPS} />
              <Note type="tip">
                Record the smallest useful task you can. Short macros are easier
                to reuse, easier to fix, and easier to explain to a colleague.
              </Note>

              <p>
                You can also fine-tune or write macros directly in the Visual
                Basic Editor — just press <strong>Fn + Option + F11</strong> on
                Mac or <strong>Alt + F11</strong> on Windows. Once you’re
                comfortable in the editor, you can go beyond simple recordings
                and start crafting smarter, more dynamic automations. And when
                you pair those macros with custom keyboard shortcuts, you unlock
                an incredibly efficient way to execute repetitive tasks with a
                single keystroke.
              </p>
              <p>
                With a bit of creativity, this combination doesn’t just save
                time — it can streamline your entire workflow, reduce errors,
                and bring real polish to the way you work in Excel. In this
                article, I’ll share commonly used shortcuts along with their
                macro code — but keep in mind, the practical applications are
                virtually endless.
              </p>

              <figure className={styles.diagram}>
                <div className={styles.diagramScroll}>
                  <div className={styles.diagramInner}>
                    <AnatomySvg />
                  </div>
                </div>
                <figcaption>
                  Every macro in this article follows this shape. Only the
                  middle changes.
                </figcaption>
              </figure>

              <h3>Or paste in the macros from this article</h3>
              <Steps items={PASTE_STEPS} />

              <Callout Icon={InfoIcon} label="Mac keys">
                On a Mac, the Record Macro box may offer Option + Cmd as the
                default pairing rather than Cmd + Shift. Use whichever
                combination Excel shows you, and treat the Mac keys in this
                article as suggestions.
              </Callout>
              <Callout Icon={ShieldIcon} label="Stay safe">
                Macros run code on your computer. Only enable them in files you
                trust, and read any code before you paste it, including the code
                on this page.
              </Callout>
            </section>

            <section
              id="choose"
              className={styles.section}
              aria-labelledby="choose-heading"
            >
              <h2 id="choose-heading">
                Which shortcut should{" "}
                <span className={styles.accent}>you build first?</span>
              </h2>
              <p>
                You don’t need all ten on day one. Start with the one that
                matches the work that annoys you most.
              </p>
              <div
                className={styles.tableWrap}
                role="region"
                aria-label="Which shortcut to build first"
                tabIndex={0}
              >
                <table>
                  <thead>
                    <tr>
                      <th scope="col">If your day looks like…</th>
                      <th scope="col">Build these first</th>
                      <th scope="col">Why</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CHOOSE_ROWS.map((row) => (
                      <tr key={row.day}>
                        <th scope="row">{row.day}</th>
                        <td>{row.build}</td>
                        <td>{row.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {SHORTCUTS.map((item) => (
              <section
                key={item.id}
                id={item.id}
                className={styles.section}
                aria-labelledby={`${item.id}-heading`}
              >
                <h2 id={`${item.id}-heading`}>
                  {item.lead}{" "}
                  <span className={styles.accent}>{item.accent}</span>
                </h2>
                <div className={styles.shortcutTop}>
                  <ShortcutKeys mac={item.mac} pc={item.pc} />
                  <div className={styles.shortcutText}>
                    <p>
                      <strong>Use Case</strong>: {item.useCase}
                    </p>
                    <p>{item.how}</p>
                  </div>
                </div>
                <CodeBlock code={item.code} language="vba" title={item.name} />
                <Note type={item.note.type}>{item.note.text}</Note>
              </section>
            ))}

            <section
              id="clashes"
              className={styles.section}
              aria-labelledby="clashes-heading"
            >
              <h2 id="clashes-heading">
                Avoiding <span className={styles.accent}>shortcut clashes</span>
              </h2>
              <p>
                A macro shortcut overrides Excel’s own shortcut with the same
                keys for as long as that workbook is open. That’s harmless for
                most of the combinations above, but three of them collide with
                everyday Excel actions in current Windows versions.
              </p>
              <div
                className={styles.tableWrap}
                role="region"
                aria-label="Shortcut clashes"
                tabIndex={0}
              >
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Your shortcut</th>
                      <th scope="col">Excel normally uses it to…</th>
                      <th scope="col">What to do</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CLASH_ROWS.map((row) => (
                      <tr key={row.keys}>
                        <th scope="row">{row.keys}</th>
                        <td>{row.builtin}</td>
                        <td>{row.fix}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Add-ins and other macros can claim combinations too, so if a
                shortcut ever behaves oddly, change the letter and try again.
              </p>
            </section>

            <section
              id="personal-macro-workbook"
              className={styles.section}
              aria-labelledby="personal-macro-workbook-heading"
            >
              <h2 id="personal-macro-workbook-heading">
                Bonus Tip:{" "}
                <span className={styles.accent}>
                  Use Personal Macro Workbook
                </span>
              </h2>
              <p>
                To use your macros in <strong>any workbook</strong>, save them
                in the <strong>Personal Macro Workbook</strong>. Excel will
                automatically load them every time you open Excel.
              </p>
              <p>
                When you record a macro, set <strong>Store macro in</strong> to
                Personal Macro Workbook. For a macro you typed or pasted, copy
                the code into a module in that workbook. Excel creates the
                personal workbook the first time you record something into it.
              </p>
              <figure className={styles.diagram}>
                <div className={styles.diagramScroll}>
                  <div className={styles.diagramInner}>
                    <DecisionSvg />
                  </div>
                </div>
                <figcaption>
                  Where to store a macro, depending on who needs it.
                </figcaption>
              </figure>
            </section>

            <section
              id="mistakes"
              className={styles.section}
              aria-labelledby="mistakes-heading"
            >
              <h2 id="mistakes-heading">
                Common mistakes{" "}
                <span className={styles.accent}>
                  when building Excel shortcuts
                </span>
              </h2>
              <p>
                Most macro frustrations come from the same five habits. Here’s
                what to avoid, and what to do instead.
              </p>
              <div className={styles.mistakeGrid}>
                {MISTAKES.map(({ Sketch, title, fix }, i) => (
                  <div key={title} className={styles.mistake}>
                    <span className={styles.mistakeNum} aria-hidden="true">
                      {i + 1}
                    </span>
                    <h3>{title}</h3>
                    <div className={styles.sketch}>
                      <Sketch />
                    </div>
                    <span className={styles.instead}>Instead</span>
                    <span className={styles.mistakeFix}>{fix}</span>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="get-help"
              className={styles.section}
              aria-labelledby="get-help-heading"
            >
              <div className={styles.cta}>
                <div>
                  <h2 id="get-help-heading">
                    When to get help{" "}
                    <span className={styles.accent}>with Excel macros</span>
                  </h2>
                  <p>
                    Shortcuts like these are a great start. If you’re repeating
                    a job that a single macro can’t cover, or a process pulls
                    data from several files, our team can design it properly
                    with{" "}
                    <Link
                      href="/services/microsoft-excel/custom-excel-development"
                      className={styles.inlineLink}
                    >
                      custom Excel development
                    </Link>
                    .
                  </p>
                </div>
                <div className={styles.ctaActions}>
                  <a href="#contact" className="btn">
                    Talk to our team
                  </a>
                  <Link
                    href="/microsoft-support-and-training-australia"
                    className={styles.ctaLink}
                  >
                    Microsoft support and training
                    <ArrowIcon width="16" height="16" />
                  </Link>
                </div>
              </div>
            </section>

            <section
              id="faq"
              className={styles.section}
              aria-labelledby="faq-heading"
            >
              <h2 id="faq-heading">
                Frequently asked{" "}
                <span className={styles.accent}>questions</span>
              </h2>
              <div className={styles.faq}>
                {FAQS.map((item) => (
                  <details key={item.q}>
                    <summary>
                      <span>{item.q}</span>
                      <ChevronIcon />
                    </summary>
                    <div className={styles.faqAnswer}>
                      <p>{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section
              id="final-thoughts"
              className={styles.section}
              aria-labelledby="final-thoughts-heading"
            >
              <h2 id="final-thoughts-heading">
                Final <span className={styles.accent}>Thoughts</span>
              </h2>
              <p>
                Creating your own shortcuts with macros is like unlocking a
                secret level in Excel. What might take five or six clicks —
                repeated dozens of times a day — can be reduced to a single
                keystroke. These automations are invaluable for professionals
                who work with large volumes of data or follow strict reporting
                workflows — from analysts and accountants to consultants and
                operations managers.
              </p>
              <p>
                The beauty of combining macros with shortcuts is that it scales
                with your needs. Start small with one or two time-savers, then
                gradually create a toolkit of personalised automations tailored
                to your role and your team. Over time, it becomes second nature
                — and you’ll wonder how you ever worked without them.
              </p>

              <div className={styles.authorBox}>
                <span className={styles.avatarLarge} aria-hidden="true">
                  <Image src={dan} alt={AUTHOR_NAME} width={56} height={56} />
                </span>
                <div>
                  <span className={styles.authorBoxTitle}>
                    About the Author
                  </span>
                  <p>
                    {AUTHOR_NAME} is a developer at Office Experts, a curious
                    mind into the world of programming, design and SEO. If you
                    have any questions, please feel free to get in contact via
                    the form below.
                  </p>
                </div>
              </div>
            </section>

            <section
              className={styles.section}
              aria-labelledby="related-heading"
            >
              <h2 id="related-heading">
                Related <span className={styles.accent}>reading</span>
              </h2>
              <div className={styles.related}>
                {RELATED.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={styles.relatedCard}
                  >
                    <span className={styles.relatedTitle}>{item.title}</span>
                    <span className={styles.relatedText}>{item.text}</span>
                    <span className={styles.relatedMore}>
                      Read more
                      <ArrowIcon width="16" height="16" />
                    </span>
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
