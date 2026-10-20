// app/(components)/SolutionsCarousel.jsx

import Link from "next/link";
// Client-side wrapper that fades each tile in as it enters the viewport
import AnimateOnScroll from "../../components/AnimateOnScroll";

// Compiled CSS from styles/solutionsCarousel.module.scss
import styles from "@/styles/solutionsCarousel.module.scss";
// Inline SVG icon components — each renders a stroke icon using currentColor
import { BusinessAnalysisIcon } from "../(svgs)/BusinessAnalysisIcon";
import { AiAgentIcon } from "../(svgs)/AiAgentIcon";
import { EmailTriageIcon } from "../(svgs)/EmailTriageIcon";
import { CopilotIcon } from "../(svgs)/CopilotIcon";
import { AutomationIcon } from "../(svgs)/AutomationIcon";
import { MacroIcon } from "../(svgs)/MacroIcon";
import { DashboardIcon } from "../(svgs)/DashboardIcon";
import { DatabaseIcon } from "../(svgs)/DatabaseIcon";
import { WebAppIcon } from "../(svgs)/WebAppIcon";
import { MigrationIcon } from "../(svgs)/MigrationIcon";
import { PresentationIcon } from "../(svgs)/PresentationIcon";
import { HeadsetIcon } from "../(svgs)/HeadsetIcon";

// ─────────────────────────────────────────────
// Solutions data — title, link and icon make up the tile face;
// "description" is shown in the hover/focus tooltip. It stays an
// array so an entry can take a second paragraph later.
// Order runs from strategy (analysis) through AI, Microsoft 365,
// automation, development and web apps, to upgrades, templates and support.
// ─────────────────────────────────────────────
const solutionsData = [
  {
    title: "Business Analysis",
    link: "/services/business-analysis",
    Icon: BusinessAnalysisIcon,
    description: [
      "We start by understanding how your business actually works. Our analysts map your processes, find the bottlenecks and recommend the right mix of Microsoft tools, AI and custom software.",
    ],
  },
  {
    title: "AI Agent Development",
    link: "/services/ai-agent-development",
    Icon: AiAgentIcon,
    description: [
      "Custom AI agents that read, draft, check and route your business information, built securely around the Microsoft tools your team already uses.",
    ],
  },
  {
    title: "AI Email Triage",
    link: "/services/ai-email-triage",
    Icon: EmailTriageIcon,
    description: [
      "Sort, prioritise and respond to high-volume inboxes automatically. AI classifies each email, extracts the key details and sends it to the right person or system.",
    ],
  },
  {
    title: "Microsoft 365 & Copilot",
    link: "/services/microsoft-office-365/copilot",
    Icon: CopilotIcon,
    description: [
      "Get real value from Microsoft 365 and Copilot. We handle setup, migration, custom development, governance and training, so your team uses the tools with confidence.",
    ],
  },
  {
    title: "Business Process Automation",
    link: "/services/microsoft-office-365/business-process-automation",
    Icon: AutomationIcon,
    description: [
      "Replace manual, repetitive work with automated workflows across Word, Excel, Outlook, SharePoint and Power Platform. Fewer errors, faster turnaround.",
    ],
  },
  {
    title: "VBA & Macro Development",
    link: "/services/by-business-solution/vba-macro-development",
    Icon: MacroIcon,
    description: [
      "Automate importing, exporting, formatting and processing across Word, Excel, Access, PowerPoint and Outlook. We also fix, document and modernise macros you already rely on.",
    ],
  },
  {
    title: "Dashboards & Reporting",
    link: "/services/by-business-solution/dashboards",
    Icon: DashboardIcon,
    description: [
      "Turn scattered spreadsheets and databases into clear, live dashboards using Excel, Power Query, Power Pivot and Power BI, so decisions are based on current data.",
    ],
  },
  {
    title: "Database & SQL Server",
    link: "/services/by-business-solution/database-development-and-solutions",
    Icon: DatabaseIcon,
    description: [
      "Design, build and integrate databases in Access and SQL Server, with user-friendly interfaces and secure connections to Office, Azure and your other systems.",
    ],
  },
  {
    title: "Web Apps & Custom Software",
    link: "/services/microsoft-office-365/app-and-custom-development",
    Icon: WebAppIcon,
    description: [
      "Custom web applications and integrated software built with Next.js, .NET and Azure. We can move desktop databases and spreadsheets online with proper security and user access.",
    ],
  },
  {
    title: "Upgrades & Migration",
    link: "/services/microsoft-office/upgrades-and-migration",
    Icon: MigrationIcon,
    description: [
      "Moving to a new version of Office or Microsoft 365? We resolve compatibility issues with macros, templates and databases so everything keeps working after the move.",
    ],
  },
  {
    title: "PowerPoint Templates & Automation",
    link: "/services/microsoft-powerpoint",
    Icon: PresentationIcon,
    description: [
      "On-brand PowerPoint templates, presentation redesigns and automated report decks, so every presentation is consistent and built in a fraction of the time.",
    ],
  },
  {
    title: "Support & Training",
    link: "/microsoft-support-and-training-australia",
    Icon: HeadsetIcon,
    description: [
      "Ongoing support and practical training for Microsoft Office and Microsoft 365, delivered by screen sharing, on site or in workshops, across Australia.",
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
        We work across every area of Microsoft, from Word, Excel, Access,
        PowerPoint and Outlook to Microsoft 365, SharePoint, Power Platform and
        Azure. We also build AI agents and custom web apps, so you can solve a
        problem with one team rather than several.
      </p>
      <p className={styles.intro}>
        Every project begins with a full business analysis. We look at how your
        people, data and processes fit together, then deliver integrated
        software solutions that work as one system, from the first workflow to
        the final report.
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
