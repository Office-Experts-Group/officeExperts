import React from "react";
import Image from "next/image";
import Link from "next/link";

import Contact from "../../../components/Contact";

import styles from "../../../styles/blogPost.module.scss";

import dan from "../../../public/blog/dan.webp";

const ExcelShortcutsBlogPost = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://www.excelexperts.com.au/blog/20-advanced-excel-shortcuts",

    // Basic article info
    headline: "20 Advanced Excel Shortcuts That Will Supercharge Your Workflow",
    alternativeHeadline:
      "Master These Mac Excel Shortcuts for Maximum Productivity",
    description:
      "Master 20 advanced Excel shortcuts for Mac that will transform your productivity. From data analysis to formatting, these keyboard shortcuts will save you hours and impress your team.",

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
      "If you've mastered the basics of Excel and want to take your productivity to the next level, it's time to go beyond copy-paste and Cmd + Z...",

    // Content metrics
    wordCount: 1200,
    timeRequired: "PT6M",

    // Keywords and topics
    keywords: ["Excel shortcuts"],

    // Main entity
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.excelexperts.com.au/blog/20-advanced-excel-shortcuts",
      url: "https://www.excelexperts.com.au/blog/20-advanced-excel-shortcuts",
      name: "20 Advanced Excel Shortcuts That Will Supercharge Your Workflow",
      description:
        "Master advanced Excel shortcuts for Mac to boost productivity",
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

  const shortcuts = [
    {
      id: 1,
      title: "Toggle Filters On/Off",
      description:
        "Quickly enable or disable filters on a dataset with a single stroke. Perfect for when you're analysing columns on the fly.",
      macKeys: ["command", "shift", "l"],
      pcShortcut: "Ctrl + Shift + L",
    },
    {
      id: 2,
      title: "Insert Today's Date",
      description:
        "Speed up your data entry. Hit this combo in a cell to timestamp your work instantly.",
      macKeys: ["command", "semicolon"],
      pcShortcut: "Ctrl + ;",
    },
    {
      id: 3,
      title: "Copy Value From Above",
      description:
        "Need to duplicate a value down a column? This shortcut pulls the cell above into your current selection.",
      macKeys: ["command", "shift", "quote"],
      pcShortcut: 'Ctrl + Shift + "',
    },
    {
      id: 4,
      title: "AutoSum Selected Range",
      description:
        "Select a group of numbers, press this shortcut, and Excel will insert a SUM formula immediately.",
      macKeys: ["command", "shift", "t"],
      pcShortcut: "Alt + =",
    },
    {
      id: 5,
      title: "Format as Currency",
      description:
        "Apply currency formatting without lifting your hands off the keyboard.",
      macKeys: ["command", "shift", "dollar"],
      pcShortcut: "Ctrl + Shift + $",
    },
    {
      id: 6,
      title: "Format as Percentage",
      description: "Apply percentage formatting instantly.",
      macKeys: ["command", "shift", "percent"],
      pcShortcut: "Ctrl + Shift + %",
    },
    {
      id: 7,
      title: "Select Current Region",
      description:
        "Automatically selects the current data block you're working in. Great for structured datasets.",
      macKeys: ["command", "shift", "star"],
      pcShortcut: "Ctrl + *",
    },
    {
      id: 8,
      title: "Repeat Last Action",
      description:
        "Just inserted a row? Changed formatting? Press F4 to do it again instantly. A serious time-saver.",
      macKeys: ["command", "f4"],
      pcShortcut: "F4",
    },
    {
      id: 9,
      title: "Open Format Cells Dialog",
      description:
        "Gives you full control over number formats, alignment, borders, and more — instantly.",
      macKeys: ["command", "1"],
      pcShortcut: "Ctrl + 1",
    },
    {
      id: 10,
      title: "Select to End of Data",
      description:
        "Holding Shift and an arrow key selects one cell at a time. Add command, and you'll jump to the last filled cell in that direction. Perfect for large datasets.",
      macKeys: ["command", "shift", "arrow"],
      pcShortcut: "Ctrl + Shift + Arrow Key",
    },
    {
      id: 11,
      title: "Select Entire Table",
      description:
        "One of the most underused power moves. With one click, highlight the entire table — headers and all.",
      macKeys: ["command", "shift", "space"],
      pcShortcut: "Ctrl + Shift + Spacebar",
    },
    {
      id: 12,
      title: "Open Data Validation Dropdown",
      description:
        "If you've used dropdown lists in your sheet, this shortcut opens them without needing the mouse.",
      macKeys: ["option", "down"],
      pcShortcut: "Alt + Down Arrow",
    },
    {
      id: 13,
      title: "Toggle Formula View",
      description:
        "Want to audit your spreadsheet? This toggles between showing values and formulas in one go.",
      macKeys: ["command", "backTick"],
      pcShortcut: "Ctrl + `",
    },
    {
      id: 14,
      title: "New Line in the Same Cell",
      description:
        "Insert line breaks within a single cell — ideal for multi-line notes or addresses.",
      macKeys: ["option", "return"],
      pcShortcut: "Alt + Enter",
    },
    {
      id: 15,
      title: "Switch Worksheets Left",
      description:
        "Effortlessly move between tabs without touching your mouse.",
      macKeys: ["command", "function", "up"],
      pcShortcut: "Ctrl + Page Up",
    },
    {
      id: 16,
      title: "Switch Worksheets Right",
      description: "Move to the next worksheet tab quickly.",
      macKeys: ["command", "function", "down"],
      pcShortcut: "Ctrl + Page Down",
    },
    {
      id: 17,
      title: "Define Named Ranges",
      description:
        "Take control of complex formulas by creating named ranges from selected cells.",
      macKeys: ["command", "f3"],
      pcShortcut: "Ctrl + F3",
    },
    {
      id: 18,
      title: "Return to Active Cell",
      description:
        "Ever scrolled away and lost track of your cursor? This shortcut jumps you back instantly.",
      macKeys: ["command", "delete"],
      pcShortcut: "Ctrl + Backspace",
    },
    {
      id: 19,
      title: "Create Chart from Selection",
      description:
        "Select a range of data and instantly create a chart on the same sheet.",
      macKeys: ["function", "option", "f1"],
      pcShortcut: "Alt + F1",
    },
    {
      id: 20,
      title: "Paste Special",
      description:
        "From values-only to transposed formats, this shortcut opens the powerful Paste Special dialog in a flash.",
      macKeys: ["command", "option", "v"],
      pcShortcut: "Ctrl + Alt + V",
    },
  ];

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

  const renderShortcut = (shortcut) => {
    return (
      <div className={styles.shortcutRow} key={shortcut.id}>
        <div className={styles.shortcutKeys}>
          <div className={styles.keyCombo}>
            {shortcut.macKeys.map((key, index) => (
              <React.Fragment key={key}>
                {renderKeyImage(key)}
                {index < shortcut.macKeys.length - 1 && (
                  <span className={styles.plus}>+</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className={styles.pcVersion}>{shortcut.pcShortcut}</div>
        </div>
        <div className={styles.shortcutContent}>
          <h3>{shortcut.title}</h3>
          <p>{shortcut.description}</p>
        </div>
      </div>
    );
  };

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
            <p>Reading time: 6min</p>
          </div>
        </div>
        <h1 className={styles.blogTitle}>
          20 Advanced Excel Shortcuts That Will Supercharge Your Workflow
        </h1>

        <div className={styles.blogContent}>
          <h2>Master Excel Like a Pro</h2>
          <p>
            If you've mastered the basics of Excel and want to take your
            productivity to the next level, it's time to go beyond copy-paste
            and Cmd + Z. Excel is a powerhouse of hidden shortcuts designed for
            speed, precision, and efficiency. Whether you're managing data,
            building dashboards, or preparing reports for clients, these 20
            advanced keyboard shortcuts will save you hours and seriously
            impress your team.
          </p>
          <p>Let's jump in.</p>

          <div className={styles.shortcutsTable}>
            {shortcuts.map(renderShortcut)}
          </div>

          <h2>Wrapping Up</h2>
          <p>
            Mastering these advanced Excel shortcuts isn't just about speed —
            it's about working smarter. If you find yourself repeating the same
            actions or fumbling through menus, chances are there's a shortcut
            that can help.
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

export default ExcelShortcutsBlogPost;
