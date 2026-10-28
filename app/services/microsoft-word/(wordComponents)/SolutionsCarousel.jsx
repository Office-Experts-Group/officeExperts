// app/(components)/SolutionsCarousel.jsx

import Link from "next/link";
// Client-side wrapper that fades each tile in as it enters the viewport
import AnimateOnScroll from "@/components/AnimateOnScroll";

// Compiled CSS from styles/solutionsCarousel2.module.scss
import styles from "@/styles/solutionsCarouselWord.module.scss";

// Inline SVG icon components — each renders a stroke icon using currentColor
import { ShieldIcon } from "../(svgs)/ShieldIcon";
import { CodeIcon } from "../(svgs)/CodeIcon";
import { InstitutionIcon } from "../(svgs)/InstitutionIcon";
import { OrgChartIcon } from "../(svgs)/OrgChartIcon";
import { RefreshIcon } from "../(svgs)/RefreshIcon";
import { PopupIcon } from "../(svgs)/PopupIcon";
import { ChecklistIcon } from "../(svgs)/ChecklistIcon";
import { UpgradeIcon } from "../(svgs)/UpgradeIcon";
import { CloudIcon } from "../(svgs)/CloudIcon";
import { SwapIcon } from "../(svgs)/SwapIcon";
import { SlidersIcon } from "../(svgs)/SlidersIcon";
import { GraduationIcon } from "../(svgs)/GraduationIcon";

// ─────────────────────────────────────────────
// Solutions data — title, link and icon make up the tile face;
// "description" is shown in the hover/focus tooltip. It stays an
// array so an entry can take a second paragraph later.
// ─────────────────────────────────────────────
const solutionsData = [
  {
    title: "Corporate Identity",
    link: "/services/microsoft-word/corporate-identity",
    Icon: ShieldIcon,
    description: [
      "Protect your corporate identity with Word templates that keep branding, fonts, colours and formatting consistent. Staff can focus on writing content instead of worrying about document design.",
    ],
  },
  {
    title: "VBA & Macro Development",
    link: "/services/vba-macro-development",
    Icon: CodeIcon,
    description: [
      "Automate repetitive tasks such as importing, exporting, formatting and processing data. We develop Word VBA solutions that work with CSV, XML, SQL, JSON and many other data sources.",
    ],
  },
  {
    title: "Government Departments",
    link: "/services/microsoft-word/government-departments",
    Icon: InstitutionIcon,
    description: [
      "Create accessible Word templates that protect branding while giving staff the flexibility to generate approved documents and sub-templates from a central master template.",
    ],
  },
  {
    title: "Companies and Organisations",
    link: "/services/microsoft-word/companies-and-organisations",
    Icon: OrgChartIcon,
    description: [
      "Maintain complete control over your corporate identity while allowing staff to create reports and documents in-house. Built-in controls help ensure documents always follow your company standards.",
    ],
  },
  {
    title: "Remove Repetition and Increase Productivity",
    link: "/services/microsoft-word/remove-repetition-and-increase-productivity",
    Icon: RefreshIcon,
    description: [
      "Reduce repetitive work by letting users insert common content with a click and automatically reuse key information throughout a document. Your team spends less time formatting and more time producing content.",
    ],
  },
  {
    title: "Popup Forms",
    link: "/services/microsoft-word/popup-forms",
    Icon: PopupIcon,
    description: [
      "Popup forms make data entry faster and more accurate by guiding users through the information they need to enter while protecting the structure of the document.",
    ],
  },
  {
    title: "Fill In Forms",
    link: "/services/microsoft-word/fill-in-forms",
    Icon: ChecklistIcon,
    description: [
      "Create easy-to-use fill-in forms with dropdown lists, checkboxes and protected fields. Staff or clients can complete documents quickly without accidentally changing the layout.",
    ],
  },
  {
    title: "Upgrading Word For 2026",
    link: "/services/upgrades-and-migration",
    Icon: UpgradeIcon,
    description: [
      "Upgrading Word can introduce issues with page layouts, tables, images and macros. We can identify and resolve compatibility problems so your documents continue to work as expected.",
    ],
  },
  {
    title: "Online Solutions",
    link: "/services/online-solutions",
    Icon: CloudIcon,
    description: [
      "Need your Word documents connected to a database or available online? We can integrate Word with Microsoft 365, SharePoint and other online systems.",
    ],
  },
  {
    title: "Convert Adobe To Word",
    link: "/services/microsoft-word/word-template-conversions",
    Icon: SwapIcon,
    description: [
      "Convert documents created in InDesign, Illustrator, PDF and other design applications into professional Word templates that are easy for your staff to edit and maintain.",
    ],
  },
  {
    title: "Custom Toolbars and Ribbons",
    link: "/services/microsoft-word/custom-toolbars-and-ribbons",
    Icon: SlidersIcon,
    description: [
      "Create custom Word ribbons and toolbars that put your most-used features one click away, from page layouts and section breaks to commonly used text and document tools.",
    ],
  },
  {
    title: "Help and Training",
    link: "/microsoft-support-and-training-australia",
    Icon: GraduationIcon,
    description: [
      "We provide Word training, remote support and practical documentation to help your staff work more efficiently. When you need assistance, we're available through screen sharing, with video and PDF guides also available.",
    ],
  },
];

const SolutionsCarousel = () => (
  <section className={styles.section}>
    {/* ── Opening header ── */}
    <div className={styles.header}>
      <p className={styles.eyebrow}>With over 25 years experience</p>
      <h2 className={styles.heading}>
        No problems...{" "}
        <span className={styles.headingMuted}>only solutions.</span>
      </h2>
      <p className={styles.intro}>
        Whether you need a professionally designed template, want to automate
        repetitive tasks, improve document consistency across your organisation,
        or modernise older Word systems, our consultants can help. Browse our
        services below to see how we help businesses get more from Microsoft
        Word.
      </p>
      <p className={styles.intro} style={{ marginTop: "1rem" }}>
        Unsure of what you need?{" "}
        <Link href="#contact">Speak with one of our consultants today.</Link>
      </p>
    </div>

    {/* ── Solution tiles ── */}
    <ul className={styles.grid}>
      {solutionsData.map((solution, i) => {
        const { Icon } = solution;
        // Stable id so the link can reference its tooltip for screen readers
        const tooltipId = `solution-tooltip-${i}`;

        return (
          // The <li> is the positioning container for the tooltip and is
          // lifted above neighbouring tiles while hovered or focused
          <li key={solution.link} className={styles.cell}>
            <AnimateOnScroll
              animation="fade-up"
              duration={0.55}
              delay={i * 0.05}
            >
              <Link
                href={solution.link}
                className={styles.tile}
                aria-describedby={tooltipId}
              >
                <span className={styles.tileIcon} aria-hidden="true">
                  <Icon />
                </span>
                <h3 className={styles.tileTitle}>{solution.title}</h3>
              </Link>
            </AnimateOnScroll>

            {/* Sits outside the link so it isn't scaled with the tile.
                Always in the server-rendered HTML, so crawlers still index it. */}
            <div id={tooltipId} role="tooltip" className={styles.tooltip}>
              {solution.description.map((paragraph, j) => (
                <p key={j}>{paragraph}</p>
              ))}
            </div>
          </li>
        );
      })}
    </ul>

    {/* ── CTA ── */}
    <div className={styles.linkWrapper}>
      <Link href="/services" className={styles.cta}>
        View all our services
        <span className={styles.ctaArrow} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Link>
    </div>
  </section>
);

export default SolutionsCarousel;
