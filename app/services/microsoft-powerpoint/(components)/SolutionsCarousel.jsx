// app/services/microsoft-powerpoint/(components)/SolutionsCarousel.jsx

import Link from "next/link";
// Client-side wrapper that fades each tile in as it enters the viewport
import AnimateOnScroll from "../../../../components/AnimateOnScroll";

// Compiled CSS from styles/solutionsCarousel.module.scss (shared with the other carousels)
import styles from "../../../../styles/solutionsCarousel.module.scss";
// Inline SVG icon components — each renders a stroke icon using currentColor
import { SlideTemplateIcon } from "../(svgs)/SlideTemplateIcon";
import { SlideRedesignIcon } from "../(svgs)/SlideRedesignIcon";
import { SlideAutomationIcon } from "../(svgs)/SlideAutomationIcon";
import { MortarboardIcon } from "../(svgs)/MortarboardIcon";
import { BrandingIcon } from "../(svgs)/BrandingIcon";
import { PresentationIcon } from "../(svgs)/PresentationIcon";

// ─────────────────────────────────────────────
// Solutions data — title, link and icon make up the tile face;
// "description" is shown in the hover/focus tooltip. It stays an
// array so an entry can take a second paragraph later.
// The first four are the PowerPoint service pages; the last two are
// case studies that show the work in practice.
// ─────────────────────────────────────────────
const solutionsData = [
  {
    title: "Custom Templates & Presentations",
    link: "/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations",
    Icon: SlideTemplateIcon,
    description: [
      "Professional PowerPoint templates with master slides that meet your brand guidelines and keep every corporate presentation consistent.",
    ],
  },
  {
    title: "Existing Presentation Redesign",
    link: "/services/microsoft-powerpoint/existing-presentation-redesign",
    Icon: SlideRedesignIcon,
    description: [
      "We transform your existing presentations into professional, on-brand templates, with master slides that make new presentations quick and easy to create.",
    ],
  },
  {
    title: "Automate Presentations With VBA",
    link: "/services/microsoft-powerpoint/automate-presentations-with-vba",
    Icon: SlideAutomationIcon,
    description: [
      "Link your data directly to your PowerPoint presentations with VBA, saving users valuable time and keeping every figure accurate.",
    ],
  },
  {
    title: "User Training & Assistance",
    link: "/services/microsoft-powerpoint/powerpoint-user-training-and-assistance",
    Icon: MortarboardIcon,
    description: [
      "Our PowerPoint experts show your users the best ways to build presentations, with practical guidance and helpful hints for everyday work.",
    ],
  },
  {
    title: "Branding Template Rollout",
    link: "/case-studies/advisory-branding-template-rollout",
    Icon: BrandingIcon,
    description: [
      "A case study in rolling out on-brand templates across an organisation, so every presentation and document stays consistent.",
    ],
  },
  {
    title: "Automated Review Decks",
    link: "/case-studies/retail-analytics-automated-review-deck-generator",
    Icon: PresentationIcon,
    description: [
      "A case study in generating review decks automatically from retail analytics data, removing hours of manual slide building.",
    ],
  },
];

const SolutionsCarousel = () => (
  <section className={styles.section}>
    {/* ── Opening header ── */}
    <div className={styles.header}>
      <p className={styles.eyebrow}>PowerPoint specialists</p>
      <h2 className={styles.heading}>
        Experts in <span className={styles.headingMuted}>PowerPoint.</span>
      </h2>
      <p className={styles.intro}>
        From brand-compliant templates and professional redesigns to
        presentations that build themselves from your data, we help your team
        create better presentations in less time. We also train your staff, so
        everyone gets the most out of PowerPoint.
      </p>
      <p className={styles.intro}>
        Unsure of what you need?{" "}
        <Link href="/contact-us">Speak with one of our consultants today.</Link>
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
