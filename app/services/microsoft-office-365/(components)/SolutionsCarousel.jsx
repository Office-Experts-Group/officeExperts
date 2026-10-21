// app/services/microsoft-office-365/(components)/SolutionsCarousel.jsx

import Link from "next/link";
// Client-side wrapper that fades each tile in as it enters the viewport
import AnimateOnScroll from "@/components/AnimateOnScroll";

// Compiled CSS from styles/solutionsCarousel.module.scss (shared with the homepage carousel)
import styles from "@/styles/solutionsCarousel.module.scss";
// Inline SVG icon components — each renders a stroke icon using currentColor
import { CloudBackupIcon } from "../(svgs)/CloudBackupIcon";
import { CopilotIcon } from "../(svgs)/CopilotIcon";
import { AutomationIcon } from "../(svgs)/AutomationIcon";
import { RemoteDataIcon } from "../(svgs)/RemoteDataIcon";
import { PuzzleIcon } from "../(svgs)/PuzzleIcon";
import { ApiIntegrationIcon } from "../(svgs)/ApiIntegrationIcon";
import { CloudNetworkIcon } from "../(svgs)/CloudNetworkIcon";
import { GlobeIcon } from "../(svgs)/GlobeIcon";
import { AiAgentIcon } from "../(svgs)/AiAgentIcon";
import { EmailTriageIcon } from "../(svgs)/EmailTriageIcon";
import { DashboardIcon } from "../(svgs)/DashboardIcon";
import { MigrationIcon } from "../(svgs)/MigrationIcon";

// ─────────────────────────────────────────────
// Solutions data — title, link and icon make up the tile face;
// "description" is shown in the hover/focus tooltip. It stays an
// array so an entry can take a second paragraph later.
// Order: core Microsoft 365 services first, then the wider
// development, AI and migration services that build on them.
// ─────────────────────────────────────────────
const solutionsData = [
  {
    title: "Cloud Backup with OneDrive",
    link: "/services/cloud-backup-with-onedrive",
    Icon: CloudBackupIcon,
    description: [
      "Need important documents backed up off site, shared with colleagues and customers, or available on every device? We set up OneDrive so your files are protected and reachable wherever your team works.",
    ],
  },
  {
    title: "Microsoft Copilot",
    link: "/services/copilot",
    Icon: CopilotIcon,
    description: [
      "Get real value from Copilot with the right setup, data governance, training and custom solutions for the way your team works.",
    ],
  },
  {
    title: "Business Process Automation",
    link: "/services/business-process-automation",
    Icon: AutomationIcon,
    description: [
      "Are paper forms delaying your processes, or internal requests getting lost? We replace them with digital forms and automated workflows that keep every request visible and moving.",
    ],
  },
  {
    title: "Remote Data Gathering",
    link: "/services/remote-data-gathering-from-any-device",
    Icon: RemoteDataIcon,
    description: [
      "Let staff complete forms while offsite and collect information from your clients on any device, with the data going straight into your Microsoft 365 systems.",
    ],
  },
  {
    title: "App & Custom Development",
    link: "/services/app-and-custom-development",
    Icon: PuzzleIcon,
    description: [
      "Custom applications that integrate with SharePoint lists and libraries, and custom branding for your corporate intranet site.",
    ],
  },
  {
    title: "Microsoft 365 API Integration",
    link: "/services/microsoft-365-api-integration",
    Icon: ApiIntegrationIcon,
    description: [
      "Connect Microsoft 365 to your line-of-business systems through the Graph API and other integrations, so data flows between your tools without re-keying.",
    ],
  },
  {
    title: "Azure Cloud Solutions",
    link: "/services/cloud-based-solutions-with-azure",
    Icon: CloudNetworkIcon,
    description: [
      "Cloud and web enable your documents, workbooks and databases with Azure, with secure hosting, authentication and scaling built in.",
    ],
  },
  {
    title: "Online Solutions",
    link: "/services/online-solutions",
    Icon: GlobeIcon,
    description: [
      "Need your Office files connected to a database or available online? We integrate Word, Excel and Access with Microsoft 365, SharePoint and other online systems.",
    ],
  },
  {
    title: "AI Agent Development",
    link: "/services/ai-agent-development",
    Icon: AiAgentIcon,
    description: [
      "Custom AI agents that read, draft, check and route your business information, built securely around the Microsoft 365 tools your team already uses.",
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
    title: "Dashboards & Reporting",
    link: "/services/dashboards",
    Icon: DashboardIcon,
    description: [
      "Turn scattered spreadsheets and data sources into clear, live dashboards, so decisions are based on current information.",
    ],
  },
  {
    title: "Upgrades & Migration",
    link: "/services/upgrades-and-migration",
    Icon: MigrationIcon,
    description: [
      "Moving to Microsoft 365 or a new Office version? We resolve compatibility issues with macros, templates and databases so everything keeps working after the move.",
    ],
  },
];

const SolutionsCarousel = () => (
  <section className={styles.section}>
    {/* ── Opening header ── */}
    <div className={styles.header}>
      <p className={styles.eyebrow}>Microsoft 365 services</p>
      <h2 className={styles.heading}>
        Dive deeper into{" "}
        <span className={styles.headingMuted}>our services.</span>
      </h2>
      <p className={styles.intro}>
        Microsoft 365 is far more than email and the Office apps. We help you
        back up and share files securely, automate forms and approvals, gather
        data from any device, build custom apps on SharePoint and put Copilot
        and AI to work, all as part of one integrated solution.
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
