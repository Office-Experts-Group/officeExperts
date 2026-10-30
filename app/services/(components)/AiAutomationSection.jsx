// /app/services/(components)/AiAutomationSection.jsx
// AI and automation: dark section with a "bento" layout, one large featured tile and smaller tiles beside it.
import styles from "@/styles/aiAutomationSection.module.scss";
import ServiceLink from "./ServiceLink";
import { AiAgentsIcon } from "../(svgs)/AiAgentsIcon";

// The smaller tiles beside the featured one. "also" is an optional link to a specialist site on the same topic
const items = [
  {
    name: "AI email triage",
    href: "/services/ai-email-triage",
    description:
      "Sort, summarise and route incoming email automatically, using Copilot, Power Automate or a custom agent.",
  },
  {
    name: "Microsoft Copilot",
    href: "/services/copilot",
    description:
      "Set up Copilot properly and make it genuinely useful across Word, Excel, Outlook and Teams.",
    also: {
      name: "Copilot and AI templates",
      href: "/services/microsoft-word/ai-ready-word-templates",
    },
  },
  {
    name: "AI integrations",
    href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/ai-integrations",
    description: "Add AI to your Power Apps and Power Automate solutions.",
  },
  {
    name: "Business process automation",
    href: "/services/business-process-automation",
    description:
      "Replace repetitive manual steps with workflows that run on their own.",
    also: {
      name: "Power Automate",
      href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate",
    },
  },
  {
    name: "Microsoft 365 API integration",
    href: "/services/microsoft-365-api-integration",
    description:
      "Connect Microsoft 365 data and documents to your other systems.",
    also: {
      name: "Word API integrations",
      href: "/services/microsoft-365-api-integration",
    },
  },
];

const AiAutomationSection = () => (
  <section
    id="ai-and-automation"
    className={styles.section}
    aria-labelledby="ai-heading"
  >
    <div className={styles.inner}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>Intelligent solutions</span>
        <h2 id="ai-heading" className={styles.heading}>
          AI and <span className={styles.accent}>automation</span>
        </h2>
        <p className={styles.intro}>
          We build AI into the way your business already works, from custom
          agents written in Python and JavaScript to Copilot and Power Platform
          solutions that live inside your Microsoft 365 tenant.
        </p>
      </header>

      <div className={styles.bento}>
        {/* Featured tile spans two columns and two rows on wide screens */}
        <article className={styles.featured}>
          <span className={styles.icon}>
            <AiAgentsIcon />
          </span>
          <h3 className={styles.featuredTitle}>AI agent development</h3>
          <p className={styles.featuredText}>
            Custom agents that read, decide and act across your documents,
            inboxes and systems. Built by our own programmers, and not tied to
            running inside your Microsoft tenant.
          </p>
          <ServiceLink
            href="/services/ai-agent-development"
            className={styles.featuredLink}
          >
            Explore AI agent development
          </ServiceLink>
        </article>

        {items.map((item) => (
          <article key={item.name} className={styles.tile}>
            <h3 className={styles.tileTitle}>
              <ServiceLink href={item.href} className={styles.tileLink}>
                {item.name}
              </ServiceLink>
            </h3>
            <p className={styles.tileText}>{item.description}</p>

            {item.also && (
              <p className={styles.also}>
                Also see{" "}
                <ServiceLink href={item.also.href} className={styles.alsoLink}>
                  {item.also.name}
                </ServiceLink>
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default AiAutomationSection;
