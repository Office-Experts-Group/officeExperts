// app/copilot-and-ai-templates/(components)/AiTemplatesComparison.jsx

// Compiled CSS module (source: styles/aiTemplatesComparison.module.scss)
import styles from "../../../styles/aiTemplatesComparison.module.css";

// Tenant boundary diagram: what stays inside Microsoft 365 and what leaves
import { DataBoundarySvg } from "../(svgs)/DataBoundarySvg";

// Column order matches the <thead> below. Kept as a real <table> (not cards)
// because answer engines lift comparison tables well.
const columns = [
  "Microsoft 365 Copilot (paid licence)",
  "Free Copilot Chat",
  "ChatGPT for Word / Claude for Word",
];

const rows = [
  {
    label: "What it can see",
    values: [
      "Your open document plus the emails, files, chats and meetings you already have permission to access in Microsoft 365",
      "The web and what you paste in, with no deep link to your files",
      "The open document, plus connected sources you or your admin approve",
    ],
  },
  {
    label: "Where your data goes",
    values: [
      "Stays within Microsoft 365 under enterprise data protection terms",
      "Enterprise data protection applies to prompts and responses",
      "Sent to the AI provider under that provider's plan terms",
    ],
  },
  {
    label: "Training on your data",
    values: [
      "No",
      "No",
      "Not by default on business and enterprise plans; check personal plans carefully",
    ],
  },
  {
    label: "Admin control",
    values: [
      "Full tenant controls, Purview sensitivity labels and DLP for prompts",
      "Tenant-level on or off",
      "Two layers: Microsoft 365 add-in policy and the AI provider's workspace settings",
    ],
  },
  {
    label: "Inside Word",
    values: [
      "Native sidebar, agentic editing and drafting from templates",
      "Chat only, not built into document editing",
      "Sidebar add-in; edits appear as tracked changes",
    ],
  },
  {
    label: "Biggest risk",
    values: [
      "Surfaces everything users can technically access, including old overshared files",
      "Staff pasting confidential content in",
      "Staff on personal plans, and data leaving your Microsoft environment",
    ],
  },
  {
    label: "Best for",
    values: [
      "Organisations with clean permissions that want AI grounded in their own content",
      "Light use and piloting",
      "Specific drafting and review tasks with an approved provider",
    ],
  },
];

const AiTemplatesComparison = () => {
  return (
    <section className={styles.section} id="copilot-vs-chatgpt">
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <div className={styles.intro}>
            <h2 className={styles.heading}>
              Microsoft 365 Copilot vs other{" "}
              <span className={styles.accent}>AI tools in Word</span>
            </h2>
            <p className={styles.lead}>
              There are currently a few different ways to use AI inside Word,
              and they don't all see your document the same way. The model
              matters less than you'd think, since Microsoft 365 Copilot now
              offers OpenAI's GPT and Anthropic's Claude models inside the
              tenant. What matters is what the AI can see, where your data goes,
              and who controls it.
            </p>
          </div>
          <div className={styles.visual}>
            <DataBoundarySvg />
          </div>
        </div>

        {/* tabIndex lets keyboard users scroll the table on narrow screens */}
        <div
          className={styles.tableWrap}
          tabIndex={0}
          role="region"
          aria-label="Comparison of AI options in Microsoft Word"
        >
          <table className={styles.table}>
            <thead>
              <tr>
                <td />
                {columns.map((col, i) => (
                  <th
                    key={col}
                    scope="col"
                    className={i === 0 ? styles.featured : undefined}
                  >
                    {col}
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
                      className={i === 0 ? styles.featured : undefined}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.summary}>
          <p className={styles.body}>
            For most Australian businesses already on Microsoft 365, a paid
            Copilot licence is the safest place to start, because your documents
            never leave your environment and your existing security and
            compliance settings still apply. But that grounding cuts both ways:
            Copilot sees everything a user can see. If your SharePoint
            permissions are a decade's worth of “share with everyone”, Copilot
            will find it. Third-party add-ins can be excellent for particular
            tasks, but they need a clear policy on which plans staff may use and
            what they may send.
          </p>
          <p className={styles.rule}>
            Whichever you choose, the AI can only be as reliable as the template
            and data underneath it. We build templates that work across all
            three, so you're not locked in.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AiTemplatesComparison;
