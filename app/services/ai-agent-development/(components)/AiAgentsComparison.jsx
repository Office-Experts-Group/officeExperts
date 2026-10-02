// app/services/ai-agent-development/(components)/AiAgentsComparison.jsx
import Link from "next/link";

// Compiled CSS module (source: styles/aiAgentsComparison.module.scss)
import styles from "../../../../styles/aiAgentsComparison.module.css";

// Ordered as a spectrum (native → hybrid → custom) so the header can be drawn
// as one continuous line with three stops. Kept as a real <table> because
// answer engines lift comparison tables well.
const columns = [
  { name: "Microsoft-native", note: "Inside your tenant" },
  { name: "Hybrid", note: "Prototype, then move in" },
  { name: "Custom-coded", note: "No platform limits" },
];

const rows = [
  {
    label: "Built with",
    values: [
      "Copilot Studio, Power Automate, Power Apps and Microsoft Foundry",
      "Custom code first, then rebuilt on Azure inside your tenant",
      "Python and JavaScript, with any model: OpenAI, Claude or Relevance.ai",
    ],
  },
  {
    label: "Where it runs",
    values: [
      "Inside your Microsoft 365 tenant",
      "Starts outside, finishes inside your Azure tenant",
      "Wherever suits the job, including outside Microsoft",
    ],
  },
  {
    label: "Best for",
    values: [
      "Processes that live in SharePoint, Outlook, Teams and Word",
      "Proving value quickly before committing to tenant infrastructure",
      "Complex orchestration, outside research and non-Microsoft systems",
    ],
  },
  {
    label: "Data control",
    values: [
      "Your existing Microsoft security, permissions and governance",
      "Full tenant control once migrated, with Entra ID sign-in",
      "Agreed per project: which provider, which region, what's retained",
    ],
  },
  {
    label: "Licensing",
    values: [
      "Your Microsoft licences, plus Copilot Studio or Power Platform capacity",
      "Model usage while prototyping, then Azure consumption",
      "Model and hosting usage, with no extra per-user Microsoft licences",
    ],
  },
  {
    label: "First version",
    values: [
      "Fastest when your data already lives in Microsoft 365",
      "Quick to prototype, with a planned migration step",
      "Quick for standalone tasks, longer as more systems connect",
    ],
  },
  {
    label: "Flexibility",
    values: [
      "Bounded by Microsoft's connectors and platform",
      "Flexible early, standardised later",
      "Anything with an API",
    ],
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
const AiAgentsComparison = () => {
  return (
    <section className={styles.section} id="copilot-studio-vs-custom">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.heading}>
            Copilot Studio or custom-coded?<br></br>
            <span className={styles.accent}>
              We build both, and tell you which fits.
            </span>
          </h2>
          <p className={styles.lead}>
            Most AI agencies only write custom code. Most Microsoft partners
            only deploy Copilot Studio. We do both, so the recommendation comes
            from your process, not from what we happen to sell.
          </p>
        </header>

        {/* tabIndex lets keyboard users scroll the table on narrow screens */}
        <div
          className={styles.tableWrap}
          tabIndex={0}
          role="region"
          aria-label="Comparison of Microsoft-native, hybrid and custom-coded AI agents"
        >
          <table className={styles.table}>
            <thead>
              <tr>
                <td />
                {columns.map((col) => (
                  <th key={col.name} scope="col" className={styles.colHead}>
                    {/* Stop marker on the spectrum line (drawn in SCSS) */}
                    <span className={styles.stop} aria-hidden="true" />
                    <span className={styles.colName}>{col.name}</span>
                    <span className={styles.colNote}>{col.note}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">
                    {/* Wrapper lets the label scale on hover without resizing the cell */}
                    <span className={styles.rowLabel}>{row.label}</span>
                  </th>
                  {row.values.map((value, i) => (
                    <td key={`${row.label}-${i}`}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={styles.footnote}>
          Our Microsoft-native agents build on{" "}
          <a
            href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate"
            className={styles.link}
          >
            Power Automate
          </a>
          ,{" "}
          <a
            href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps"
            className={styles.link}
          >
            Power Apps
          </a>{" "}
          and{" "}
          <a
            href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/ai-integrations"
            className={styles.link}
          >
            Power Platform AI integrations
          </a>
          .<br></br>
          Custom and hybrid agents draw on our{" "}
          <Link
            href="/services/microsoft-office-365/app-and-custom-development"
            className={styles.link}
          >
            custom app development
          </Link>
          ,{" "}
          <Link href="/microsoft-365-api-integration" className={styles.link}>
            Microsoft 365 API integration
          </Link>{" "}
          and{" "}
          <Link
            href="/services/by-business-solution/cloud-based-solutions-with-azure"
            className={styles.link}
          >
            Azure hosting
          </Link>{" "}
          work.
        </p>
      </div>
    </section>
  );
};

export default AiAgentsComparison;
