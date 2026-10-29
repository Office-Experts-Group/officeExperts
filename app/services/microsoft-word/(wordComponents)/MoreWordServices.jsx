// app/(wordComponents)/MoreWordServices.jsx

import Link from "next/link";
// Client-side wrapper that fades each tile in as it enters the viewport
import AnimateOnScroll from "@/components/AnimateOnScroll";

// Shares the grid, tile and tooltip styles with SolutionsCarousel so both
// sets of tiles always look identical
import styles from "@/styles/solutionsCarouselWord.module.scss";

// Inline SVG icon components — each renders a stroke icon using currentColor
import { TemplateIcon } from "../(svgs)/TemplateIcon";
import { PaletteIcon } from "../(svgs)/PaletteIcon";
import { GlobeIcon } from "../(svgs)/GlobeIcon";
import { SparklesIcon } from "../(svgs)/SparklesIcon";
import { PaintRollerIcon } from "../(svgs)/PaintRollerIcon";
import { AccessibilityIcon } from "../(svgs)/AccessibilityIcon";
import { BlocksIcon } from "../(svgs)/BlocksIcon";
import { MailIcon } from "../(svgs)/MailIcon";
import { DocumentMigrateIcon } from "../(svgs)/DocumentMigrateIcon";

// ─────────────────────────────────────────────
// The Word service pages that aren't in SolutionsCarousel. Same shape as
// that component's data: title, link and icon make up the tile face and
// "description" is shown in the hover/focus tooltip.
// ─────────────────────────────────────────────
const moreServicesData = [
  {
    title: "Word Template Creation",
    link: "/services/microsoft-word/word-document-template-creation",
    Icon: TemplateIcon,
    description: [
      "Have professional Word templates designed and built for your business, with styles, layouts and automation set up so staff can create consistent documents quickly.",
    ],
  },
  {
    title: "Brand Template",
    link: "/services/microsoft-word/brand-template",
    Icon: PaletteIcon,
    description: [
      "A Word template built around your brand guidelines, with approved fonts, colours, logos and styles ready to use from the very first document.",
    ],
  },
  {
    title: "Corporate Global Templates",
    link: "/services/microsoft-word/corporate-global-template-solution",
    Icon: GlobeIcon,
    description: [
      "One central template solution for organisations with multiple offices or departments. Keep every document on brand while still allowing for local details such as addresses, contacts and logos.",
    ],
  },
  {
    title: "AI-Ready Word Templates",
    link: "/services/microsoft-word/ai-ready-word-templates",
    Icon: SparklesIcon,
    description: [
      "Structure your templates with clean styles, headings and content controls so tools like Microsoft Copilot can read and use your documents more reliably.",
    ],
  },
  {
    title: "Document Rebranding",
    link: "/services/microsoft-word/document-rebranding-services",
    Icon: PaintRollerIcon,
    description: [
      "Update your existing Word documents to a new logo, colours and fonts quickly and accurately, without staff having to reformat each file by hand.",
    ],
  },
  {
    title: "Accessibility",
    link: "/services/microsoft-word/accessibility",
    Icon: AccessibilityIcon,
    description: [
      "Create Word documents and templates that meet accessibility requirements, with correct heading structure, alt text and reading order so everyone can use them.",
    ],
  },
  {
    title: "Quick Parts",
    link: "/services/microsoft-word/quick-parts",
    Icon: BlocksIcon,
    description: [
      "Insert approved text, tables, signatures and other building blocks with a click. Quick Parts keep wording consistent and save staff from retyping common content.",
    ],
  },
  {
    title: "Mail Merge",
    link: "/services/microsoft-word/mail-merge",
    Icon: MailIcon,
    description: [
      "Produce personalised letters, emails, labels and certificates in bulk from Excel or other data sources, with layouts that stay consistent every time.",
    ],
  },
  {
    title: "Google Docs To Word",
    link: "/services/microsoft-word/google-docs-to-word-migration",
    Icon: DocumentMigrateIcon,
    description: [
      "Move your Google Docs into Microsoft Word with styles, layouts and templates rebuilt properly, so your team can edit and maintain them with confidence.",
    ],
  },
];

// Server component with no state of its own. WordServicesToggle receives it
// as children, so these links are in the server-rendered HTML for crawlers
// even while the panel is collapsed.
const MoreWordServices = () => (
  <ul className={styles.grid}>
    {moreServicesData.map((service, i) => {
      const { Icon } = service;
      // Prefixed so these ids never clash with the tooltip ids in SolutionsCarousel
      const tooltipId = `more-solution-tooltip-${i}`;

      return (
        // The <li> is the positioning container for the tooltip and is
        // lifted above neighbouring tiles while hovered or focused
        <li key={service.link} className={styles.cell}>
          <AnimateOnScroll animation="fade-up" duration={0.55} delay={i * 0.05}>
            <Link
              href={service.link}
              className={styles.tile}
              aria-describedby={tooltipId}
            >
              <span className={styles.tileIcon} aria-hidden="true">
                <Icon />
              </span>
              <h3 className={styles.tileTitle}>{service.title}</h3>
            </Link>
          </AnimateOnScroll>

          {/* Sits outside the link so it isn't scaled with the tile */}
          <div id={tooltipId} role="tooltip" className={styles.tooltip}>
            {service.description.map((paragraph, j) => (
              <p key={j}>{paragraph}</p>
            ))}
          </div>
        </li>
      );
    })}
  </ul>
);

export default MoreWordServices;
