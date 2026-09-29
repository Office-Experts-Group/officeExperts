// app/services/ai-email-triage/(components)/EmailTriageComparison.jsx

// Compiled CSS module (source: styles/emailTriageComparison.module.scss)
import styles from "../../../../styles/emailTriageComparison.module.css";

// Same icons as the approach cards, so each column is instantly recognisable
import { CopilotInboxSvg } from "../(svgs)/CopilotInboxSvg";
import { FlowTriageSvg } from "../(svgs)/FlowTriageSvg";
import { CustomCodeSvg } from "../(svgs)/CustomCodeSvg";

// Column order matches every row's `values` array. `featured` highlights the
// custom column, the one clients can't get from an off-the-shelf tool.
const columns = [
  { name: "Copilot in Outlook", sub: "Built-in", Icon: CopilotInboxSvg },
  {
    name: "Power Automate + AI Builder",
    sub: "Power Platform",
    Icon: FlowTriageSvg,
  },
  {
    name: "Custom-coded agent",
    sub: "Python & JavaScript",
    Icon: CustomCodeSvg,
    featured: true,
  },
];

// Kept as a real <table> (not cards) because answer engines lift comparison
// tables well. `levels` (1–3) draws the effort meter alongside the text.
const rows = [
  {
    label: "Ideal inbox",
    values: [
      "Personal inbox",
      "Shared team mailbox",
      "Complex, high-volume or multi-system processes",
    ],
  },
  {
    label: "What it does",
    values: [
      "Prioritises and flags",
      "Classifies, extracts, files and routes",
      "Anything you can code: classifies, reasons, acts across any system, drafts replies",
    ],
  },
  {
    label: "Mailboxes",
    values: [
      "Each user's Outlook inbox",
      "Microsoft 365 mailboxes",
      "Microsoft 365, Gmail or any IMAP mailbox",
    ],
  },
  {
    label: "AI model",
    values: [
      "Microsoft Copilot",
      "Microsoft-managed via AI Builder",
      "Your choice, e.g. OpenAI, Anthropic or Azure OpenAI",
    ],
  },
  {
    label: "Where it runs",
    values: [
      "Inside your Microsoft 365 tenant",
      "Inside your Microsoft 365 tenant",
      "Your tenant, your Azure subscription, another cloud or on-premises",
    ],
  },
  {
    label: "Build effort",
    values: ["Configuration only", "Low to moderate", "Custom development"],
    levels: [1, 2, 3],
  },
  {
    label: "Cost model",
    values: [
      "Copilot licence per user",
      "Power Automate licensing (with AI Builder or prompt capacity)",
      "No per-user licences; hosting and AI model usage",
    ],
  },
  {
    label: "Reporting and audit",
    values: [
      "Limited",
      "Full, via flow logging",
      "Fully custom logging and dashboards",
    ],
  },
];

// Three-pip effort meter. Decorative, since the text beside it says the same.
const EffortMeter = ({ level }) => (
  <span className={styles.meter} aria-hidden="true">
    {[1, 2, 3].map((pip) => (
      <span
        key={pip}
        className={pip <= level ? `${styles.pip} ${styles.pipOn}` : styles.pip}
      />
    ))}
  </span>
);

const EmailTriageComparison = () => {
  return (
    <section className={styles.section} id="compare">
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Side by side</span>
          <h2 className={styles.heading}>
            Copilot vs Power Automate vs{" "}
            <span className={styles.accent}>custom-coded AI agents</span>
          </h2>
        </header>

        {/* Hint only shows at widths where the table scrolls */}
        <p className={styles.scrollHint} aria-hidden="true">
          Swipe to compare →
        </p>

        {/* tabIndex lets keyboard users scroll the table on narrow screens */}
        <div
          className={styles.tableWrap}
          tabIndex={0}
          role="region"
          aria-label="Comparison of AI email triage approaches"
        >
          <table className={styles.table}>
            <thead>
              <tr>
                <td className={styles.corner} />
                {columns.map(({ name, sub, Icon, featured }) => (
                  <th
                    key={name}
                    scope="col"
                    className={featured ? styles.featured : undefined}
                  >
                    <span className={styles.colIcon}>
                      <Icon />
                    </span>
                    <span className={styles.colName}>{name}</span>
                    <span className={styles.colSub}>{sub}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {row.values.map((value, i) => (
                    <td
                      key={`${row.label}-${i}`}
                      className={
                        columns[i].featured ? styles.featured : undefined
                      }
                    >
                      {row.levels && <EffortMeter level={row.levels[i]} />}
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={styles.rule}>
          Not sure which fits? That's exactly what our{" "}
          <a href="#contact" className={styles.inlineLink}>
            free consultation
          </a>{" "}
          is for.
        </p>
      </div>
    </section>
  );
};

export default EmailTriageComparison;
