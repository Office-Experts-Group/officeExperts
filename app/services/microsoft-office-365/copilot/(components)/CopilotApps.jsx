// app/services/microsoft-office-365/copilot/(components)/CopilotApps.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/copilotApps.module.css";

// ─────────────────────────────────────────────
// App data — each entry maps to a card with anchor id
// matching the links in CopilotIntro's app panel
// ─────────────────────────────────────────────
const apps = [
  {
    id: "word",
    index: "01",
    title: "Microsoft Word",
    tag: "Documents & Drafting",
    description:
      "For inspiration, correcting grammar or even final drafts, many people are already using LLM's to help with document creation, but Copilot integrated into Word not just saves time copy and pasting text from one window to another. Copilot is a fully context aware partner that can be taught to follow your own document standards. If your business has the right templates and tools in place, Copilot creates meaningful, useable material, not just more Ai slop.",
    highlight:
      "When your business already relies on branded templates or advanced document systems, our consultants ensure Copilot enhances the process rather than destroying it.",
    href: "https://www.wordexperts.com.au",
    linkText: "Word experts",
  },
  {
    id: "excel",
    index: "02",
    title: "Microsoft Excel",
    tag: "Data & Analysis",
    description:
      "Copilot makes advanced spreadsheet work far more approachable for everyday users. Staff can ask questions in simple English to do what once only advanced 'power user's' could accomplish. Copilot, could you analyse trends from last months sales? Create monthly reports based on the data for our shareholders? Yes now it can, excel spreadsheets are now fully ingestible, editable and even created out of thin air by Ai.",
    highlight:
      "Our Excel specialists help businesses integrate Copilot into existing dashboards, reporting systems, and macro-driven workbooks. We set the parameters and functionality to allow advanced functionality without needing to constantly reach out for an industry expert.",
    href: "https://www.excelexperts.com.au",
    linkText: "Excel experts",
  },
  {
    id: "power-platform",
    index: "03",
    title: "Microsoft Power Platform",
    tag: "Automation & Intelligence",
    description:
      "Copilot across Power BI, Power Apps, and Power Automate dramatically accelerates development and reduces build time more then any legacy application could. Teams can generate workflows, build dashboards, create applications, and connect data sources using conversational prompts instead of traditional coding methods. Long hours of coding and debugging are replaced now with a few easy prompts and a few clicks.",
    highlight:
      "Letting Copilot loose on your data without the right preparation is like putting a bull in a China shop. With great power comes great responsibility. Our Power Platform team ensure that Copilot is used in a way that is both effective and safe.",
    href: "https://www.powerplatformexperts.com.au",
    linkText: "Power Platform experts",
  },
  {
    id: "outlook",
    index: "04",
    title: "Microsoft Outlook",
    tag: "Email & Productivity",
    description:
      "For most of us, the dreaded email inbox consumes a significant part of the workday. Copilot in Outlook helps reduce that burden by summarising conversations, drafting responses, extracting action items, and highlighting the messages that genuinely require attention. Futher integrations can automatically triage emails to the right people or even respond with accuracy built on accumulated knowledge of your team.",
    highlight:
      "When combined with a well-structured Microsoft 365 environment, Copilot can help teams communicate more consistently while cutting down time spent managing inboxes.",
    href: "/services/microsoft-office-365",
    linkText: "Microsoft 365 services",
  },
  {
    id: "teams",
    index: "05",
    title: "Microsoft Teams",
    tag: "Meetings & Collaboration",
    description:
      "Besides emails, Teams is the next app we find ourselves spending hours of each day communicating with. Copilot transforms Teams meetings into searchable, actionable records of work. It can capture decisions, generate summaries, track follow-up tasks, and help staff catch up on missed discussions without replaying entire meetings or relying on scattered notes.",
    highlight:
      "Our Microsoft 365 consultants help businesses integrate Copilot into Teams so that the information discussed can be summarised, centralised and available for quick reference. Teams is not going anywhere soon, and Copilot can help make it a central hub of information, rather then a glorified digital boardroom.",
    href: "/services/microsoft-office-365",
    linkText: "Microsoft 365 services",
  },
];

const CopilotApps = () => (
  <section className={styles.section} id="copilot-apps">
    {/* ── Section header ── */}
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Copilot in action</span>
        <h2 className={styles.title}>
          What Microsoft 365 Copilot{" "}
          <span className={styles.accent}>actually does.</span>
        </h2>
        <p className={styles.subtitle}>
          So we know that Copilot runs in the heart of the existing Office apps.
          But if it&rsquo;s not just a chatbot sitting in a corner, how does it
          work?
        </p>
      </div>
    </AnimateOnScroll>

    {/* ── App cards ── */}
    <div className={styles.list}>
      {apps.map((app) => (
        <AnimateOnScroll
          key={app.id}
          animation="fade-up"
          duration={0.55}
          delay={0.05}
        >
          {console.log(app.id)}
          <article
            className={
              app.id !== "power-platform" && app.id !== "outlook"
                ? styles.card
                : styles.accentCard
            }
            id={app.id}
            style={{ scrollMarginTop: "150px" }}
          >
            {/* Card header row */}
            <div className={styles.cardTop}>
              <div className={styles.cardMeta}>
                <span className={styles.cardIndex}>{app.index}</span>
                <span className={styles.cardTag}>{app.tag}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className={styles.cardTitle}>{app.title}</h3>

            {/* Body copy */}
            <p className={styles.cardBody}>{app.description}</p>

            {/* Optional highlight callout */}
            {app.highlight && (
              <div className={styles.cardHighlight}>
                <div className={styles.highlightBar} aria-hidden="true" />
                <p className={styles.highlightText}>{app.highlight}</p>
              </div>
            )}

            {/* Link to expert site */}
            <Link href={app.href} className={styles.cardLink}>
              {app.linkText}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 7h8M7 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </article>
        </AnimateOnScroll>
      ))}
    </div>
  </section>
);

export default CopilotApps;
