// /app/blog/20-advanced-excel-shortcuts/page.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

import Contact from "@/components/Contact";
import { generateOrganizationSchema } from "@/utils/schemaGenerators";

import styles from "@/styles/advancedExcelShortcutsBlog.module.scss";

import dan from "@/public/team/dan.webp";

import HeroSvg from "./(svgs)/HeroSvg";
import { KeySprite, KeyCombo } from "./(svgs)/KeyCaps";
import ModifierMapSvg from "./(svgs)/ModifierMapSvg";
import PickShortcutSvg from "./(svgs)/PickShortcutSvg";
import {
  ArrowIcon,
  ChevronIcon,
  GridIcon,
  InfoIcon,
  KeyboardIcon,
  LaptopIcon,
  SlidersIcon,
  TipIcon,
} from "./(svgs)/Icons";

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with layout.js.
const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/blog/20-advanced-excel-shortcuts`;
const PAGE_TITLE = "20 Advanced Excel Shortcuts to Save Time | Office Experts";
const PAGE_DESCRIPTION =
  "Learn 20 advanced Excel shortcuts for Mac and Windows, from filters and AutoSum to Paste Special, and save hours on everyday spreadsheet work.";
const PAGE_HEADLINE =
  "20 Advanced Excel Shortcuts That Will Supercharge Your Workflow";
const BREADCRUMB_NAME = "20 Advanced Excel Shortcuts";
const AUTHOR_NAME = "Daniel Thomas";
const READING_TIME = "8 min";
const READING_TIME_ISO = "PT8M";
const WORD_COUNT = 1900;
const HERO_IMAGE_PATH = "/logo.png"; // confirm it exists in OE /public
const DATE_PUBLISHED = "2025-07-24T09:00:00+10:00";
const DATE_MODIFIED = "2026-11-18T09:00:00+11:00";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Sydney",
  });
}

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
      mainEntityOfPage: { "@id": `${PAGE_URL}#webpage` },
      headline: PAGE_HEADLINE,
      alternativeHeadline:
        "Master These Mac and Windows Excel Shortcuts for Maximum Productivity",
      description: PAGE_DESCRIPTION,
      image: `${SITE_URL}${HERO_IMAGE_PATH}`,
      author: { "@type": "Person", name: AUTHOR_NAME },
      publisher: { "@id": `${SITE_URL}#organization` },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: "Excel Tips",
      keywords: ["Excel shortcuts", "Excel keyboard shortcuts"],
      wordCount: WORD_COUNT,
      timeRequired: READING_TIME_ISO,
      inLanguage: "en-AU",
    },
  ],
};

const TOC = [
  { id: "intro", label: "Master Excel like a pro" },
  { id: "keys", label: "Mac and Windows keys" },
  { id: "data", label: "Data entry and editing" },
  { id: "formatting", label: "Formatting, totals and charts" },
  { id: "selecting", label: "Selecting and moving" },
  { id: "auditing", label: "Auditing and naming" },
  { id: "which", label: "Which to learn first" },
  { id: "mistakes", label: "Common mistakes" },
  { id: "practice", label: "A one-week plan" },
  { id: "help", label: "Get help for your team" },
  { id: "faq", label: "FAQs" },
  { id: "wrapping-up", label: "Wrapping up" },
];

const SHORTCUT_GROUPS = [
  {
    id: "data",
    heading: "Data entry and",
    accent: "editing",
    intro:
      "These shortcuts cut the repetitive typing, clicking and re-formatting that eats into a working day.",
    shortcuts: [
      {
        title: "Toggle Filters On/Off",
        description:
          "Quickly enable or disable filters on a dataset with a single stroke. Perfect for when you’re analysing columns on the fly.",
        mac: ["command", "shift", "f"],
        pc: "Ctrl + Shift + L",
        tip: "Click inside your data first. Recent versions of Excel for Mac also accept Control + Shift + L.",
      },
      {
        title: "Insert Today’s Date",
        description:
          "Speed up your data entry. Hit this combo in a cell to timestamp your work instantly.",
        mac: ["control", "semicolon"],
        pc: "Ctrl + ;",
        tip: "It enters a fixed date, unlike the TODAY function, so it will not change tomorrow.",
      },
      {
        title: "Copy Value From Above",
        description:
          "Need to duplicate a value down a column? This shortcut pulls the cell above into your current selection.",
        mac: ["control", "shift", "quote"],
        pc: 'Ctrl + Shift + "',
      },
      {
        title: "Open Data Validation Dropdown",
        description:
          "If you’ve used dropdown lists in your sheet, this shortcut opens them without needing the mouse.",
        mac: ["option", "down"],
        pc: "Alt + Down Arrow",
        tip: "Use the arrow keys to pick an entry and press Return or Enter to confirm it.",
      },
      {
        title: "New Line in the Same Cell",
        description:
          "Insert line breaks within a single cell, ideal for multi-line notes or addresses.",
        mac: ["control", "option", "return"],
        pc: "Alt + Enter",
        tip: "Turn on Wrap Text if the extra line does not show.",
      },
      {
        title: "Paste Special",
        description:
          "From values-only to transposed formats, this shortcut opens the powerful Paste Special dialog in a flash.",
        mac: ["control", "command", "v"],
        pc: "Ctrl + Alt + V",
        tip: "Choose Values to keep the numbers and drop the formulas behind them.",
      },
      {
        title: "Repeat Last Action",
        description:
          "Just inserted a row? Changed formatting? Repeat it instantly. On Windows that’s F4. A serious time-saver.",
        mac: ["command", "y"],
        pc: "F4",
        tip: "Click a new cell or row first, then repeat the action.",
      },
    ],
  },
  {
    id: "formatting",
    heading: "Formatting, totals and",
    accent: "charts",
    intro: "Format a report and add up a column without leaving the keyboard.",
    shortcuts: [
      {
        title: "AutoSum Selected Range",
        description:
          "Select a group of numbers, press this shortcut, and Excel will insert a SUM formula immediately.",
        mac: ["command", "shift", "t"],
        pc: "Alt + =",
        tip: "Select the cell under or beside the numbers and Excel guesses the range for you.",
      },
      {
        title: "Format as Currency",
        description:
          "Apply currency formatting without lifting your hands off the keyboard.",
        mac: ["control", "shift", "dollar"],
        pc: "Ctrl + Shift + $",
      },
      {
        title: "Format as Percentage",
        description: "Apply percentage formatting instantly.",
        mac: ["control", "shift", "percent"],
        pc: "Ctrl + Shift + %",
        tip: "Apply it to decimals such as 0.18 and Excel shows 18%.",
      },
      {
        title: "Open Format Cells Dialog",
        description:
          "Gives you full control over number formats, alignment, borders, and more, instantly.",
        mac: ["command", "1"],
        pc: "Ctrl + 1",
      },
      {
        title: "Create Chart from Selection",
        description:
          "Select a range of data and instantly create a chart on the same sheet.",
        mac: ["function", "option", "f1"],
        pc: "Alt + F1",
        tip: "On Windows, F11 puts the chart on its own sheet instead.",
      },
    ],
  },
  {
    id: "selecting",
    heading: "Selecting and",
    accent: "moving around",
    intro:
      "Big workbooks are quicker to handle when you stop scrolling and start jumping.",
    shortcuts: [
      {
        title: "Select Current Region",
        description:
          "Automatically selects the current data block you’re working in. Great for structured datasets.",
        mac: ["control", "shift", "star"],
        pc: "Ctrl + *",
        tip: "The region stops at blank rows and columns, so tidy gaps first.",
      },
      {
        title: "Select to End of Data",
        description:
          "Holding Shift and an arrow key selects one cell at a time. Add Command (Ctrl on Windows) and you’ll jump to the last filled cell in that direction. Perfect for large datasets.",
        mac: ["command", "shift", "arrow"],
        pc: "Ctrl + Shift + Arrow Key",
      },
      {
        title: "Select Entire Table",
        description:
          "One of the most underused power moves. Click inside a formatted table and press it once to select the data, then again to include the headers.",
        mac: ["command", "a"],
        pc: "Ctrl + A",
        tip: "A third press selects the whole worksheet.",
      },
      {
        title: "Switch Worksheets Left",
        description:
          "Effortlessly move between tabs without touching your mouse.",
        mac: ["option", "left"],
        pc: "Ctrl + Page Up",
      },
      {
        title: "Switch Worksheets Right",
        description: "Move to the next worksheet tab quickly.",
        mac: ["option", "right"],
        pc: "Ctrl + Page Down",
      },
      {
        title: "Return to Active Cell",
        description:
          "Ever scrolled away and lost track of your cursor? This shortcut jumps you back instantly.",
        mac: ["control", "delete"],
        pc: "Ctrl + Backspace",
      },
    ],
  },
  {
    id: "auditing",
    heading: "Auditing and",
    accent: "naming",
    intro:
      "Two shortcuts that make other people’s spreadsheets, and your own, far easier to check.",
    shortcuts: [
      {
        title: "Toggle Formula View",
        description:
          "Want to audit your spreadsheet? This toggles between showing values and formulas in one go.",
        mac: ["control", "backTick"],
        pc: "Ctrl + `",
        tip: "Press it again to switch back before you print or share.",
      },
      {
        title: "Define Named Ranges",
        description:
          "Take control of complex formulas by creating named ranges from selected cells. Select a block with labels in the first row or column, press the shortcut, and Excel names each row or column for you.",
        mac: ["command", "shift", "f3"],
        pc: "Ctrl + Shift + F3",
        tip: "Name the ranges your formulas use most, then read the formulas like sentences.",
      },
    ],
  },
];

const MISTAKES = [
  {
    Icon: LaptopIcon,
    title: "Pressing the Windows keys on a Mac",
    text: "Ctrl on Windows is not always Command on a Mac. Some combinations use Control, and Alt becomes Option. The Mac keys on this page already allow for that.",
  },
  {
    Icon: KeyboardIcon,
    title: "Forgetting the Fn key",
    text: "On many Mac keyboards the F-keys control brightness and volume. Hold fn with the F-key, or change the keyboard setting in macOS so F-keys act as standard function keys.",
  },
  {
    Icon: GridIcon,
    title: "Running shortcuts on data with gaps",
    text: "Select Current Region, filters and Select to End of Data all stop at blank rows and columns. Remove the gaps first and the shortcuts behave.",
  },
  {
    Icon: SlidersIcon,
    title: "Fighting a macOS shortcut",
    text: "Some system shortcuts can grab a combination before Excel sees it. If one does nothing, check System Settings > Keyboard > Keyboard Shortcuts for a clash.",
  },
];

const PLAN = [
  {
    title: "Day one: totals and formats",
    text: "Practise AutoSum and Format Cells on any report you already have open. They are the two you will use most often.",
  },
  {
    title: "Day two: filters and big ranges",
    text: "Toggle filters, then use Select to End of Data to grab whole columns without scrolling.",
  },
  {
    title: "Day three: Paste Special and Repeat",
    text: "Paste values instead of formulas, then repeat your last formatting change on other cells.",
  },
  {
    title: "Day four: moving and checking",
    text: "Switch worksheets from the keyboard and use Formula View to audit a sheet you did not build.",
  },
  {
    title: "Day five: the small time-savers",
    text: "Add today’s date, copy a value from above and start new lines in cells. Small savings add up across a week.",
  },
];

const FAQS = [
  {
    q: "Do these shortcuts work in Excel for the web?",
    a: "Some do, but not all. A web browser can intercept certain combinations before Excel sees them. For the most reliable results, use the desktop app, and test the shortcuts you rely on before you build a habit around them.",
  },
  {
    q: "Why doesn’t a shortcut work on my Mac?",
    a: "The usual causes are a missing fn key on a function-key shortcut, a macOS system shortcut using the same keys, or a slightly different shortcut in your version of Excel. Check the keyboard settings in System Settings first.",
  },
  {
    q: "Are the shortcuts the same in every version of Excel?",
    a: "Most of these have been stable for years, but menus and a few key combinations differ between versions, and between Mac and Windows. If one does not work, check the shortcut list in your version’s help.",
  },
  {
    q: "Which shortcut saves the most time?",
    a: "It depends on your work, but many people notice Paste Special, Select to End of Data and Repeat Last Action first, because they replace several mouse clicks every time.",
  },
  {
    q: "Can I create my own shortcuts?",
    a: (
      <>
        You can assign a key combination to a macro, and on Windows you can put
        commands on the Quick Access Toolbar and call them with Alt and a
        number. If you want repetitive work automated properly, our{" "}
        <Link
          href="/services/vba-macro-development"
          className={styles.inlineLink}
        >
          VBA and macro development
        </Link>{" "}
        team can build it for you.
      </>
    ),
  },
];

const RELATED = [
  {
    href: "/services/microsoft-excel/data-manipulation",
    title: "Excel data manipulation",
    text: "Clean, reshape and combine messy data without doing it by hand.",
  },
  {
    href: "/services/power-query",
    title: "Power Query",
    text: "Automate repeat imports and clean-ups so the shortcuts are for the fun parts.",
  },
  {
    href: "/services/vba-macro-development",
    title: "VBA and macro development",
    text: "Turn a multi-step routine into a single button or key combination.",
  },
];

function Callout({ Icon, label, children }) {
  return (
    <aside className={styles.callout}>
      <svg
        className={styles.calloutRings}
        viewBox="0 0 160 160"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="80" cy="80" r="28" />
        <circle cx="80" cy="80" r="52" />
        <circle cx="80" cy="80" r="76" />
      </svg>
      <span className={styles.calloutIcon}>
        <Icon />
      </span>
      <div className={styles.calloutBody}>
        <span className={styles.calloutLabel}>{label}</span>
        <p>{children}</p>
      </div>
    </aside>
  );
}

function ShortcutCard({ shortcut }) {
  return (
    <li className={styles.shortcut}>
      <div className={styles.shortcutKeys}>
        <span className={styles.platformLabel}>Mac</span>
        <KeyCombo
          keys={shortcut.mac}
          className={styles.keyCombo}
          keyClassName={styles.keyCap}
          plusClassName={styles.plus}
        />
        <span className={styles.pcVersion}>
          <span className={styles.platformLabel}>Windows</span>
          {shortcut.pc}
        </span>
      </div>
      <div className={styles.shortcutBody}>
        <h3>{shortcut.title}</h3>
        <p>{shortcut.description}</p>
        {shortcut.tip && (
          <div className={styles.proTip}>
            <TipIcon />
            <span>
              <strong>Pro tip:</strong> {shortcut.tip}
            </span>
          </div>
        )}
      </div>
    </li>
  );
}

export default function ExcelShortcutsBlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <KeySprite />

      <div className={styles.page}>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <h1 className={styles.title}>
                20 Advanced Excel Shortcuts{" "}
                <span className={styles.accent}>
                  That Will Supercharge Your Workflow
                </span>
              </h1>
              <p className={styles.lede}>
                If you’ve mastered the basics of Excel and want to take your
                productivity to the next level, it’s time to go beyond
                copy-paste and Cmd + Z. These 20 advanced keyboard shortcuts
                will save you hours and seriously impress your team.
              </p>
              <div className={styles.authorRow}>
                <span className={styles.avatar} aria-hidden="true">
                  <Image src={dan} alt={AUTHOR_NAME} width={38} height={38} />
                </span>
                <div className={styles.authorMeta}>
                  <span className={styles.authorName}>By {AUTHOR_NAME}</span>
                  <span className={styles.authorDetail}>
                    Updated{" "}
                    <time dateTime={DATE_MODIFIED}>
                      {formatDate(DATE_MODIFIED)}
                    </time>{" "}
                    · {READING_TIME} read
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.heroArt}>
              <HeroSvg />
            </div>
          </div>
        </header>

        <section className={styles.glance} aria-label="At a glance">
          <div className={styles.glanceCard}>
            <span className={styles.glanceValue}>20</span>
            <span className={styles.glanceLabel}>Shortcuts</span>
            <p>
              Grouped by the job they do, so you can find the right one fast.
            </p>
          </div>
          <div className={styles.glanceCard}>
            <span className={styles.glanceValue}>2</span>
            <span className={styles.glanceLabel}>Keyboards</span>
            <p>Mac keys shown as keycaps, with the Windows keys beside them.</p>
          </div>
          <div className={styles.glanceCard}>
            <span className={styles.glanceValue}>5</span>
            <span className={styles.glanceLabel}>Days to stick</span>
            <p>A simple one-week plan to turn the list into habits.</p>
          </div>
        </section>

        <div className={styles.layout}>
          <nav className={styles.toc} aria-label="Contents">
            <span className={styles.tocTitle}>In this article</span>
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
              id="intro"
              className={styles.section}
              aria-labelledby="intro-heading"
            >
              <h2 id="intro-heading">
                Master Excel <span className={styles.accent}>Like a Pro</span>
              </h2>
              <p>
                If you’ve mastered the basics of Excel and want to take your
                productivity to the next level, it’s time to go beyond
                copy-paste and Cmd + Z. Excel is a powerhouse of hidden
                shortcuts designed for speed, precision, and efficiency. Whether
                you’re managing data, building dashboards, or preparing reports
                for clients, these 20 advanced keyboard shortcuts will save you
                hours and seriously impress your team.
              </p>
              <p>
                Let’s jump in. We’ve grouped the shortcuts by the job they do,
                and every one shows the Mac keys as keycaps with the Windows
                keys beside them.
              </p>
              <Callout Icon={InfoIcon} label="Before you start">
                Shortcuts can differ slightly between versions of Excel and
                between Mac and Windows. If one does not work, check the
                shortcut list in your version’s help, then see our common
                mistakes below.
              </Callout>
            </section>

            <section
              id="keys"
              className={styles.section}
              aria-labelledby="keys-heading"
            >
              <h2 id="keys-heading">
                Mac and Windows <span className={styles.accent}>keys</span>
              </h2>
              <p>
                Most people switch between the two keyboards at some point, so
                it helps to know how the keys line up. Windows Ctrl is usually
                Command on a Mac, but a handful of Excel shortcuts use Control
                instead.
              </p>
              <figure className={styles.diagram}>
                <div className={styles.diagramScroll}>
                  <div className={styles.diagramInner}>
                    <ModifierMapSvg />
                  </div>
                </div>
                <figcaption>
                  How common Windows keys translate to the Mac keyboard.
                </figcaption>
              </figure>
            </section>

            {SHORTCUT_GROUPS.map((group) => (
              <section
                key={group.id}
                id={group.id}
                className={styles.section}
                aria-labelledby={`${group.id}-heading`}
              >
                <h2 id={`${group.id}-heading`}>
                  {group.heading}{" "}
                  <span className={styles.accent}>{group.accent}</span>
                </h2>
                <p>{group.intro}</p>
                <ul className={styles.shortcutList}>
                  {group.shortcuts.map((shortcut) => (
                    <ShortcutCard key={shortcut.title} shortcut={shortcut} />
                  ))}
                </ul>
              </section>
            ))}

            <section
              id="which"
              className={styles.section}
              aria-labelledby="which-heading"
            >
              <h2 id="which-heading">
                Which shortcuts should you{" "}
                <span className={styles.accent}>learn first?</span>
              </h2>
              <p>
                Twenty is a lot to take in at once. Start with the group that
                matches the part of your day that feels slowest, and add the
                rest as those become automatic.
              </p>
              <figure className={styles.diagram}>
                <div className={styles.diagramScroll}>
                  <div className={styles.diagramInner}>
                    <PickShortcutSvg />
                  </div>
                </div>
                <figcaption>
                  Pick the problem, then learn the shortcuts beneath it.
                </figcaption>
              </figure>
            </section>

            <section
              id="mistakes"
              className={styles.section}
              aria-labelledby="mistakes-heading"
            >
              <h2 id="mistakes-heading">
                Common shortcut <span className={styles.accent}>mistakes</span>
              </h2>
              <p>
                When a shortcut seems broken, it’s usually one of these four
                things.
              </p>
              <div className={styles.mistakes}>
                {MISTAKES.map(({ Icon, title, text }) => (
                  <div key={title} className={styles.mistake}>
                    <span className={styles.mistakeIcon}>
                      <Icon />
                    </span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="practice"
              className={styles.section}
              aria-labelledby="practice-heading"
            >
              <h2 id="practice-heading">
                A one-week <span className={styles.accent}>practice plan</span>
              </h2>
              <p>
                Shortcuts only save time once your fingers know them. Spend ten
                minutes a day on a small group and they stick.
              </p>
              <ol className={styles.timeline}>
                {PLAN.map((step, index) => (
                  <li key={step.title} className={styles.step}>
                    <span className={styles.stepBadge} aria-hidden="true">
                      {index + 1}
                    </span>
                    <div className={styles.stepBody}>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className={styles.proTip}>
                <TipIcon />
                <span>
                  <strong>Pro tip:</strong> Keep this page open in a second tab
                  while you work, and tick off one shortcut each time you catch
                  yourself reaching for the mouse.
                </span>
              </div>
            </section>

            <section
              id="help"
              className={styles.section}
              aria-labelledby="help-heading"
            >
              <div className={styles.ctaBand}>
                <h2 id="help-heading" className={styles.ctaTitle}>
                  Want your whole team working{" "}
                  <span className={styles.accent}>faster in Excel?</span>
                </h2>
                <p className={styles.ctaText}>
                  Office Experts Group provides Microsoft{" "}
                  <Link
                    href="/microsoft-support-and-training-australia"
                    className={`${styles.inlineLink} ${styles.ctaInlineLink}`}
                  >
                    support and training across Australia
                  </Link>
                  , from keyboard habits to formulas, Power Query and
                  automation.
                </p>
                <div className={styles.ctaActions}>
                  <a href="#contact" className={styles.ctaButton}>
                    Talk to an expert
                  </a>
                  <Link
                    href="/microsoft-support-and-training-australia"
                    className={styles.ctaLink}
                  >
                    See support and training{" "}
                    <ArrowIcon width={16} height={16} />
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
                Excel shortcuts <span className={styles.accent}>FAQs</span>
              </h2>
              <div className={styles.faq}>
                {FAQS.map((item) => (
                  <details key={item.q} className={styles.faqItem}>
                    <summary className={styles.faqQuestion}>
                      {item.q}
                      <ChevronIcon className={styles.faqChevron} />
                    </summary>
                    <div className={styles.faqAnswer}>
                      <p>{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section
              id="wrapping-up"
              className={styles.section}
              aria-labelledby="wrapping-up-heading"
            >
              <h2 id="wrapping-up-heading">
                Wrapping <span className={styles.accent}>Up</span>
              </h2>
              <p>
                Mastering these advanced Excel shortcuts isn’t just about speed.
                It’s about working smarter. If you find yourself repeating the
                same actions or fumbling through menus, chances are there’s a
                shortcut that can help. And when the task is too big for a
                shortcut, our{" "}
                <Link
                  href="/services/microsoft-excel/data-manipulation"
                  className={styles.inlineLink}
                >
                  Excel data manipulation
                </Link>{" "}
                service can take it off your plate.
              </p>

              <div className={styles.authorBox}>
                <span className={styles.avatarLarge} aria-hidden="true">
                  <Image src={dan} alt={AUTHOR_NAME} width={48} height={48} />
                </span>
                <div>
                  <h4>About the Author</h4>
                  <p>
                    {AUTHOR_NAME} is a developer at Office Experts, a curious
                    mind into the world of programming, design and SEO. If you
                    have any questions, please feel free to get in contact via
                    the form below.
                  </p>
                </div>
              </div>
            </section>
          </article>
        </div>

        <section className={styles.related} aria-labelledby="related-heading">
          <h2 id="related-heading">
            Related <span className={styles.accent}>reading</span>
          </h2>
          <div className={styles.relatedGrid}>
            {RELATED.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.relatedCard}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className={styles.relatedMore}>
                  Read more <ArrowIcon width={16} height={16} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Contact />
    </>
  );
}
