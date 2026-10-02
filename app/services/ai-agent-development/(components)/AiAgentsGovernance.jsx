// app/services/ai-agent-development/(components)/AiAgentsGovernance.jsx

// Compiled CSS module (source: styles/aiAgentsGovernance.module.scss)
import styles from "../../../../styles/aiAgentsGovernance.module.css";

// TODO before go-live: confirm with the dev team which hosting and residency
// statements can be made. Copy below only claims what the case studies support
// (tenant hosting, Entra ID sign-in, audit trails, approval steps) and makes no
// blanket "data stays in Australia" promise.

// Rendered as a staggered stack. Not a sequence, so a <ul>.
// `--i` drives the indent of each layer in the SCSS.
const layers = [
  {
    name: "Hosting",
    body: "Agents can run inside your own Microsoft 365 or Azure tenant, under the security settings you already have.",
  },
  {
    name: "Identity",
    body: "Staff can sign in with Entra ID, using the same accounts and permissions they use every day.",
  },
  {
    name: "Audit trail",
    body: "Every agent action, finding and human edit can be logged, so you can show exactly how a decision was made.",
  },
  {
    name: "Approval",
    body: "You decide which steps need a person to sign off, and loosen that as the agent earns trust.",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
const AiAgentsGovernance = () => {
  return (
    <section className={styles.section} id="data-security">
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Your data stays where{" "}
            <span className={styles.accent}>you need it</span>
          </h2>
          <p className={styles.lead}>
            It's the first question most clients ask, and it should be. When an
            agent runs inside your tenant, your data stays inside the boundary
            and region you've already approved.
          </p>
          <p className={styles.lead}>
            When a custom agent calls an outside AI model, we spell out the
            provider, where it processes data and what's retained, before any
            code is written.
          </p>
        </div>

        {/* column-reverse in the SCSS draws Hosting at the base of the stack
            while keeping it first for screen readers */}
        <ul className={styles.stack} aria-label="Layers of control">
          {layers.map((layer, i) => (
            <li key={layer.name} className={styles.layer} style={{ "--i": i }}>
              <span className={styles.layerName}>{layer.name}</span>
              <p className={styles.layerBody}>{layer.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AiAgentsGovernance;
