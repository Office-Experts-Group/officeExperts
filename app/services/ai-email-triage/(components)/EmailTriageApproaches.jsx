// app/services/ai-email-triage/(components)/EmailTriageApproaches.jsx
import Link from "next/link";

// Compiled CSS module (source: styles/emailTriageApproaches.module.scss)
import styles from "../../../../styles/emailTriageApproaches.module.css";

// One standalone icon per approach
import { CopilotInboxSvg } from "../(svgs)/CopilotInboxSvg";
import { FlowTriageSvg } from "../(svgs)/FlowTriageSvg";
import { CustomCodeSvg } from "../(svgs)/CustomCodeSvg";

// Three alternatives, not a sequence, so unordered cards.
// `link.external` marks cross-site links (sister sites), which use a plain <a>.
const approaches = [
  {
    id: "copilot",
    Icon: CopilotInboxSvg,
    title: "Copilot in Outlook",
    tag: "Built-in Microsoft tools",
    bestFor: "Individuals and managers drowning in their own inbox.",
    paragraphs: [
      "If your team already has Microsoft 365 Copilot licences, much of the personal triage is already switched on. It just needs configuring. Copilot's Prioritise feature scores new mail as high, normal or low priority as it arrives, and can be taught your own rules in plain English, such as emails from key clients or those mentioning a particular project. It can also carry out triage actions on request (flag, pin, archive, mark as read) across several emails at once.",
      "Microsoft is now extending Copilot in Outlook into agentic territory, where it works through the inbox continuously: surfacing what needs a reply, drafting follow-ups and suggesting rules.",
    ],
    points: [
      "No build required, just configuration and training",
      "Works per person, on each user's own inbox",
      "Requires a Microsoft 365 Copilot licence per user",
      "Limited control over what happens after an email is prioritised",
    ],
    note: "We help you roll this out properly: licence planning, writing effective prioritisation instructions, and training staff to use it.",
    link: {
      href: "/services/microsoft-office-365",
      label: "Microsoft Office 365 services",
    },
  },
  {
    id: "power-automate",
    Icon: FlowTriageSvg,
    title: "Power Automate with AI Builder",
    tag: "The Power Platform route",
    bestFor: "Shared mailboxes such as info@, accounts@, support@ or orders@.",
    paragraphs: [
      "This is the workhorse approach for team inboxes. A Power Automate cloud flow watches a shared mailbox, and each new email is passed to an AI Builder prompt or classification model. The model returns a category, a priority and any key details it can extract, such as a customer number, an invoice amount or a due date.",
      "The flow then does the rest: moves the email to the right folder, applies an Outlook category, posts an alert to a Teams channel, adds a row to SharePoint or Excel, or creates a record in Dataverse.",
    ],
    points: [
      "Predictable, rule-based flow with AI doing the reading",
      "One flow can triage an entire shared mailbox for the whole team",
      "Every decision can be logged for reporting and audit",
      "Licensed through Power Automate rather than a Copilot licence for every user",
    ],
    link: {
      href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate",
      label: "Power Automate and AI Builder consulting",
      external: true,
    },
  },
  {
    id: "custom-agents",
    Icon: CustomCodeSvg,
    title: "Custom-coded AI agents",
    tag: "Python and JavaScript",
    bestFor:
      "Complex or high-volume inboxes, non-Microsoft systems, or when you want full control of the logic and the AI model.",
    paragraphs: [
      "When off-the-shelf tools hit their limits, our programmers build a fully custom AI agent in Python and JavaScript. It isn't tied to a platform or a licence tier: we write exactly the logic your process needs, choose the AI model that suits the job, and connect it to whatever mailboxes and systems you run.",
      "Custom agents don't have to live inside your Microsoft 365 tenant. We can host them in your own Azure subscription, another cloud or on your own servers, and connect to Microsoft 365, Gmail or any IMAP mailbox, plus your CRM, ERP or practice management system through their APIs.",
    ],
    points: [
      "Fully bespoke code, with no platform or connector limits",
      "Your choice of AI model, including OpenAI, Anthropic or Azure OpenAI",
      "Hosted wherever suits your security and compliance needs",
      "No per-user licences; you pay for hosting and model usage",
      "Human-in-the-loop approval built in wherever you need it",
    ],
    link: {
      href: "/case-studies/internal-ai-proposal-assistant-azure-migration",
      label: "Case study: our custom AI proposal assistant",
    },
  },
];

// Renders the optional "learn more" link. Internal routes use next/link for
// client-side navigation; sister-site URLs are a plain anchor.
const CardLink = ({ link }) => {
  if (!link) return null;

  if (link.external) {
    return (
      <a href={link.href} className={styles.cardLink}>
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} className={styles.cardLink}>
      {link.label}
    </Link>
  );
};

const EmailTriageApproaches = () => {
  return (
    <section className={styles.section} id="approaches">
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Three approaches</span>
          <h2 className={styles.heading}>
            Three ways to{" "}
            <span className={styles.accent}>automate email triage</span>
          </h2>
          <p className={styles.lead}>
            There's no single “right” way to triage email with AI. The best
            approach depends on your inbox volume, how many people share the
            mailbox, what should happen to each email once it's sorted, and
            which systems and licences you already have. Two approaches use
            Microsoft 365 tools; the third is fully custom code.
          </p>
        </header>

        <ul className={styles.cards}>
          {approaches.map(({ id, Icon, ...card }) => (
            <li key={id} className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.icon}>
                  <Icon />
                </span>
                <span className={styles.tag}>{card.tag}</span>
              </div>

              <h3 className={styles.cardTitle}>{card.title}</h3>

              <p className={styles.bestFor}>
                <strong>Best for:</strong> {card.bestFor}
              </p>

              {card.paragraphs.map((text) => (
                <p key={text.slice(0, 24)} className={styles.body}>
                  {text}
                </p>
              ))}

              <ul className={styles.points}>
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              {card.note && <p className={styles.note}>{card.note}</p>}

              <CardLink link={card.link} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EmailTriageApproaches;
