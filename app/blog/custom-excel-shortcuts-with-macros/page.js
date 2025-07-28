import React from "react";
import Image from "next/image";
import Link from "next/link";

import CodeBlock from "../../../components/CodeBlock";
import Contact from "../../../components/Contact";

import styles from "../../../styles/blogPost.module.scss";

import dan from "../../../public/blog/dan.webp";

const CustomExcelShortcutsBlogPost = () => {
  const renderKeyImage = (keyName) => {
    return (
      <Image
        src={`/blog/keys/${keyName}.webp`}
        alt={keyName}
        width={findWidth(keyName)}
        height={60}
        className={styles.keyImage}
      />
    );
  };

  const findWidth = (keyname) => {
    if (keyname === "command" || keyname === "delete") {
      return "80";
    } else if (
      keyname === "arrow" ||
      keyname === "return" ||
      keyname === "shift"
    ) {
      return "100";
    } else if (keyname === "space") {
      return "140";
    } else {
      return "60";
    }
  };

  const renderShortcutKeys = (macKeys, pcShortcut) => {
    return (
      <div className={styles.shortcutKeys}>
        <div className={styles.keyCombo}>
          {macKeys.map((key, index) => (
            <React.Fragment key={key}>
              {renderKeyImage(key)}
              {index < macKeys.length - 1 && (
                <span className={styles.plus}>+</span>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className={styles.pcVersion}>{pcShortcut}</div>
      </div>
    );
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id":
      "https://www.excelexperts.com.au/blog/custom-excel-shortcuts-with-macros",

    // Basic article info
    headline:
      "10 Custom Excel Shortcuts Using Macros (With Practical Use Cases)",
    alternativeHeadline:
      "Create Your Own Excel Shortcuts to Automate Repetitive Tasks",
    description:
      "Learn how to create your own Excel shortcuts using macros to automate repetitive tasks. Discover 10 practical custom shortcuts that will supercharge your productivity and save you hours of work.",

    // Author information
    author: {
      "@type": "Person",
      name: "Daniel Thomas",
    },

    // Publisher information
    publisher: {
      "@type": "Organization",
      name: "Excel Experts",
      url: "https://www.excelexperts.com.au",
      logo: {
        "@type": "ImageObject",
        url: "https://www.excelexperts.com.au/logo.png",
        width: 400,
        height: 400,
      },
    },

    // Dates
    datePublished: "2025-07-24T09:00:00+10:00",
    dateModified: "2025-07-24T09:00:00+10:00",

    // Article structure
    articleSection: "Excel Tips",
    articleBody:
      "If you've been using Excel for years, you know that keyboard shortcuts are a game-changer. But did you know you can create your own shortcuts to automate repetitive tasks using macros?",

    // Content metrics
    wordCount: 1500,
    timeRequired: "PT7M",

    // Keywords and topics
    keywords: [
      "Excel shortcuts",
      "Excel macros",
      "VBA shortcuts",
      "Excel automation",
    ],

    // Main entity
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.excelexperts.com.au/blog/custom-excel-shortcuts-with-macros",
      url: "https://www.excelexperts.com.au/blog/custom-excel-shortcuts-with-macros",
      name: "10 Custom Excel Shortcuts Using Macros (With Practical Use Cases)",
      description:
        "Learn how to create custom Excel shortcuts using macros for maximum productivity",
      inLanguage: "en-AU",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.excelexperts.com.au",
        name: "Excel Experts",
        url: "https://www.excelexperts.com.au",
      },
    },

    // Language and region
    inLanguage: "en-AU",
    contentRating: "General",

    // Audience
    audience: {
      "@type": "Audience",
      audienceType: "Business Professionals",
      geographicArea: {
        "@type": "Country",
        name: "Australia",
      },
    },
  };

  // Macro code samples
  const gettingStartedCode = `// After adding a Form control and selecting the attachment control:
// Cut the attachment control and delete the form
// Then paste the attachment control directly into your app

// Fix common errors by setting these properties:
1. Go to Developer > Record Macro
2. Name your macro (e.g., HighlightRow)
3. Assign a shortcut key (e.g., Ctrl + Shift + H)
4. Perform the actions you want the macro to repeat
5. Click Stop Recording

// You can also fine-tune or write macros directly in the Visual Basic Editor (Alt + F11).`;

  const highlightRowCode = `Sub HighlightRow()
    Rows(ActiveCell.Row).Interior.Color = RGB(255, 255, 153)
End Sub`;

  const clearFiltersCode = `Sub ClearFilters()
    On Error Resume Next
    ActiveSheet.ShowAllData
End Sub`;

  const convertToValuesCode = `Sub ConvertToValues()
    Selection.Value = Selection.Value
End Sub`;

  const insertTimestampCode = `Sub InsertTimestamp()
    ActiveCell.Value = Now
End Sub`;

  const formatAsTableCode = `Sub FormatAsTable()
    If Selection.Rows.Count > 1 Then
        ActiveSheet.ListObjects.Add(xlSrcRange, Selection, , xlYes).Name = "Table1"
    End If
End Sub`;

  const unmergeAllCode = `Sub UnmergeAll()
    Cells.UnMerge
End Sub`;

  const standardizeFontCode = `Sub StandardizeFont()
    With Selection.Font
        .Name = "Calibri"
        .Size = 11
    End With
End Sub`;

  const autoFitColumnsCode = `Sub AutoFitColumns()
    Cells.EntireColumn.AutoFit
End Sub`;

  const goToLastRowCode = `Sub GoToLastRow()
    Dim lastRow As Long
    lastRow = Cells(Rows.Count, 1).End(xlUp).Row
    Cells(lastRow, 1).Select
End Sub`;

  const saveWithTimestampCode = `Sub SaveWithTimestamp()
    Dim path As String
    path = ThisWorkbook.Path & "\" & _
           "Backup_" & Format(Now, "yyyymmdd_hhmmss") & ".xlsx"
    ThisWorkbook.SaveCopyAs path
    MsgBox "Backup saved to: " & path
End Sub`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className={styles.head}></div>
      <div className={styles.blogContainer}>
        <div className={styles.preface}>
          <div>
            <p>Author: Daniel Thomas</p>
            <p>Reading time: 7min</p>
          </div>
        </div>
        <h1 className={styles.blogTitle}>
          10 Custom Excel Shortcuts Using Macros (With Practical Use Cases)
        </h1>

        <div className={styles.blogContent}>
          <h2>🔧 Getting Started: How to Create a Macro With a Shortcut</h2>
          <p>
            If you've been using Excel for years, you know that keyboard
            shortcuts are a game-changer. But did you know you can{" "}
            <strong>create your own shortcuts</strong> to automate repetitive
            tasks using <strong>macros</strong>? With just a few clicks, you can
            assign keyboard shortcuts to common workflows and supercharge your
            productivity.
          </p>
          <p>
            Below are <strong>10 custom Excel macros</strong>, each with a{" "}
            <strong>real-world use case</strong> and a suggested keyboard
            shortcut you can assign.
          </p>

          <ol>
            <li>
              Go to <strong>Developer → Record Macro</strong>
            </li>
            <li>
              Name your macro (e.g., <em>HighlightRow</em>)
            </li>
            <li>
              Assign a shortcut key (e.g., <em>Cmd (Ctrl) + Shift + H</em>)
            </li>
            <li>Perform the actions you want the macro to repeat</li>
            <li>
              Click <strong>Stop Recording</strong>
            </li>
          </ol>

          <p>
            You can also fine-tune or write macros directly in the Visual Basic
            Editor — just press <strong>Fn + Option + F11</strong> on Mac or{" "}
            <strong>Alt + F11</strong> on Windows. Once you're comfortable in
            the editor, you can go beyond simple recordings and start crafting
            smarter, more dynamic automations. And when you pair those macros
            with custom keyboard shortcuts, you unlock an incredibly efficient
            way to execute repetitive tasks with a single keystroke.
          </p>
          <p>
            With a bit of creativity, this combination doesn't just save time —
            it can streamline your entire workflow, reduce errors, and bring
            real polish to the way you work in Excel. In this article, I'll
            share commonly used shortcuts along with their macro code — but keep
            in mind, the practical applications are virtually endless.
          </p>

          <h2>1. Highlight the Active Row</h2>
          <div className={styles.shortcutSection}>
            <div className={styles.flex}>
              <div className={styles.shortcutKeys}>
                <div className={styles.keyCombo}>
                  {["command", "shift", "h"].map((key, index) => (
                    <React.Fragment key={key}>
                      {renderKeyImage(key)}
                      {index < ["command", "shift", "h"].length - 1 && (
                        <span className={styles.plus}>+</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <div className={styles.pcVersion}>Ctrl + Shift + H</div>
              </div>
              <div className={styles.shortcutDescription}>
                <p>
                  <strong>Use Case</strong>: When working with large data tables
                  — like transaction logs or audit sheets — it's easy to lose
                  sight of the row you're analysing. This shortcut quickly
                  highlights the active row so you can focus visually and return
                  to it after scrolling elsewhere. It's particularly helpful
                  during meetings, screen shares, or when comparing records line
                  by line.
                </p>
              </div>
            </div>
          </div>

          <CodeBlock code={highlightRowCode} language="vba" />

          <h2>2. Clear All Filters</h2>
          <div className={styles.shortcutSection}>
            <div className={styles.flex}>
              <div className={styles.shortcutKeys}>
                <div className={styles.keyCombo}>
                  {["command", "shift", "c"].map((key, index) => (
                    <React.Fragment key={key}>
                      {renderKeyImage(key)}
                      {index < ["command", "shift", "c"].length - 1 && (
                        <span className={styles.plus}>+</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <div className={styles.pcVersion}>Ctrl + Shift + C</div>
              </div>
              <div className={styles.shortcutDescription}>
                <p>
                  <strong>Use Case</strong>: Imagine you're reviewing a heavily
                  filtered sales report. You're not sure which columns have
                  filters applied, but your data looks incomplete. Instead of
                  hunting through each column filter menu, this shortcut
                  instantly restores the full dataset. It's also great during
                  troubleshooting when users say, “Some rows are missing.”
                </p>
              </div>
            </div>
          </div>

          <CodeBlock code={clearFiltersCode} language="vba" />

          <h2>3. Convert Formulas to Values</h2>
          <div className={styles.shortcutSection}>
            <div className={styles.flex}>
              {renderShortcutKeys(
                ["command", "shift", "v"],
                "Ctrl + Shift + V"
              )}
              <div className={styles.shortcutDescription}>
                <p>
                  <strong>Use Case</strong>: You have just finished preparing
                  financial forecasts with complex formulas referencing external
                  files. Before sending the sheet to a client or saving for
                  archival, you want to convert everything to static values to
                  avoid reference errors. Select the range, hit the shortcut,
                  and done. No paste special needed.
                </p>
              </div>
            </div>
          </div>

          <CodeBlock code={convertToValuesCode} language="vba" />

          <h2>4. Insert Timestamp in Active Cell</h2>
          <div className={styles.shortcutSection}>
            <div className={styles.flex}>
              {renderShortcutKeys(
                ["command", "shift", "t"],
                "Ctrl + Shift + T"
              )}
              <div className={styles.shortcutDescription}>
                <p>
                  <strong>Use Case</strong>: Great for task tracking, approval
                  logs, and QA checklists. Every time you update or review a row
                  of data, use this shortcut to insert the exact date and time.
                  It creates a transparent, time-stamped audit trail — no need
                  to type anything manually or remember formulas like =NOW().
                </p>
              </div>
            </div>
          </div>

          <CodeBlock code={insertTimestampCode} language="vba" />

          <h2>5. Format as Table</h2>
          <div className={styles.shortcutSection}>
            <div className={styles.flex}>
              {renderShortcutKeys(
                ["command", "shift", "q"],
                "Ctrl + Shift + Q"
              )}
              <div className={styles.shortcutDescription}>
                <p>
                  <strong>Use Case</strong>: Working with structured data? Excel
                  Tables come with built-in filter buttons, dynamic ranges for
                  formulas, and visual styling. Instead of navigating through
                  the ribbon to apply table formatting, this shortcut converts
                  any selected range into a proper table — especially handy when
                  preparing reports for clients or managers.
                </p>
              </div>
            </div>
          </div>

          <CodeBlock code={formatAsTableCode} language="vba" />

          <h2>6. Unmerge All Cells in Sheet</h2>
          <div className={styles.shortcutSection}>
            <div className={styles.flex}>
              {renderShortcutKeys(
                ["command", "shift", "u"],
                "Ctrl + Shift + U"
              )}
              <div className={styles.shortcutDescription}>
                <p>
                  <strong>Use Case</strong>: You receive a spreadsheet from
                  another department, and it's full of merged cells that break
                  sorting, filtering, and formulas. One press of this shortcut
                  instantly clears all merged formatting so you can reshape the
                  data into something usable. It's a lifesaver for data cleanup
                  and importing into databases or Power BI.
                </p>
              </div>
            </div>
          </div>

          <CodeBlock code={unmergeAllCode} language="vba" />

          <h2>7. Apply Consistent Font & Size</h2>
          <div className={styles.shortcutSection}>
            <div className={styles.flex}>
              {renderShortcutKeys(
                ["command", "shift", "f"],
                "Ctrl + Shift + F"
              )}
              <div className={styles.shortcutDescription}>
                <p>
                  <strong>Use Case</strong>: You've just copied data from
                  different sources, and now your worksheet is a visual mess —
                  different fonts, sizes, and formatting. This shortcut
                  standardises everything to a clean, readable style. Ideal for
                  preparing deliverables, consolidating data, or simply making
                  your workbook look professional.
                </p>
              </div>
            </div>
          </div>

          <CodeBlock code={standardizeFontCode} language="vba" />

          <h2>8. Auto-Fit All Columns</h2>
          <div className={styles.shortcutSection}>
            <div className={styles.flex}>
              {renderShortcutKeys(
                ["command", "shift", "a"],
                "Ctrl + Shift + A"
              )}
              <div className={styles.shortcutDescription}>
                <p>
                  <strong>Use Case</strong>: Whenever data is imported or pasted
                  in, columns are often too narrow (cutting off content) or too
                  wide. This shortcut instantly resizes all columns to fit their
                  contents — no need to double-click column headers one by one.
                  Great for polishing spreadsheets before sharing or printing.
                </p>
              </div>
            </div>
          </div>

          <CodeBlock code={autoFitColumnsCode} language="vba" />

          <h2>9. Jump to Last Row in Sheet</h2>
          <div className={styles.shortcutSection}>
            <div className={styles.flex}>
              {renderShortcutKeys(
                ["command", "shift", "j"],
                "Ctrl + Shift + J"
              )}
              <div className={styles.shortcutDescription}>
                <p>
                  <strong>Use Case</strong>: In a growing list — like inventory,
                  sales, or time logs — it's often necessary to jump directly to
                  the last row to add a new entry or review the latest one. This
                  shortcut skips the scroll and lands you exactly where the
                  action is happening.
                </p>
              </div>
            </div>
          </div>

          <CodeBlock code={goToLastRowCode} language="vba" />

          <h2>10. Save and Timestamp the Workbook</h2>
          <div className={styles.shortcutSection}>
            <div className={styles.flex}>
              {renderShortcutKeys(
                ["command", "shift", "s"],
                "Ctrl + Shift + S"
              )}
              <div className={styles.shortcutDescription}>
                <p>
                  <strong>Use Case</strong>: Before running risky changes (like
                  mass find-and-replace or data transformations), use this
                  shortcut to instantly create a backup version of your file
                  with the current timestamp. It's an insurance policy that
                  takes less than a second. Also helpful for keeping periodic
                  snapshots of work during long projects.
                </p>
              </div>
            </div>
          </div>

          <CodeBlock code={saveWithTimestampCode} language="vba" />

          <h2>🔄 Bonus Tip: Use Personal Macro Workbook</h2>
          <p>
            To use your macros in <strong>any workbook</strong>, save them in
            the <strong>Personal Macro Workbook</strong>. Excel will
            automatically load them every time you open Excel.
          </p>

          <h2>Final Thoughts</h2>
          <p>
            Creating your own shortcuts with macros is like unlocking a secret
            level in Excel. What might take five or six clicks — repeated dozens
            of times a day — can be reduced to a single keystroke. These
            automations are invaluable for professionals who work with large
            volumes of data or follow strict reporting workflows — from analysts
            and accountants to consultants and operations managers.
          </p>
          <p>
            The beauty of combining macros with shortcuts is that it scales with
            your needs. Start small with one or two time-savers, then gradually
            create a toolkit of personalised automations tailored to your role
            and your team. Over time, it becomes second nature — and you'll
            wonder how you ever worked without them.
          </p>

          <div className={styles.about}>
            <div>
              <h4>About the Author</h4>
              <p>
                Daniel is a developer at Excel Experts, a curious mind into the
                world of programming, design and SEO. If you have any questions,
                please feel free to get in contact via the form below.
              </p>
            </div>
            <div className={styles.authorImage}>
              <Image src={dan} alt="Daniel Thomas" width={80} height={80} />
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default CustomExcelShortcutsBlogPost;
