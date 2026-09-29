// app/services/ai-email-triage/(components)/EmailTriageSecurity.jsx

// Compiled CSS module (source: styles/emailTriageSecurity.module.scss)
import styles from "../../../../styles/emailTriageSecurity.module.css";

// Tenant boundary diagram: solution inside, third-party AI tools outside
import { TenantShieldSvg } from "../(svgs)/TenantShieldSvg";

const safeguards = [
  {
    title: "Your data stays where you decide",
    body: "Copilot and Power Automate solutions run inside your Microsoft 365 tenant under your existing security, compliance and data loss prevention policies. Custom agents are hosted in your own Azure subscription or another environment you control, and only call the AI models you approve.",
  },
  {
    title: "Least-privilege access",
    body: "Flows and agents only get access to the mailboxes and data they genuinely need, and triggers are narrowed so they only fire on relevant mail.",
  },
  {
    title: "Human in the loop",
    body: "AI can draft, suggest and sort, but anything that goes out to a customer, or changes a record of consequence, can require a person's approval first.",
  },
  {
    title: "Transparent and auditable",
    body: "Every classification is logged, so you can see why an email was sorted the way it was and correct it.",
  },
  {
    title: "Privacy-aware design",
    body: "We design with the Australian Privacy Principles in mind and document how automated decisions are made, which matters more as Australian privacy obligations around automated decision-making tighten.",
  },
];

const EmailTriageSecurity = () => {
  return (
    <section className={styles.section} id="security">
      <div className={styles.inner}>
        {/* ── Top: intro + tenant diagram ── */}
        <div className={styles.topRow}>
          <div className={styles.intro}>
            <h2 className={styles.heading}>
              Secure, governed and{" "}
              <span className={styles.accent}>in your control</span>
            </h2>
            <p className={styles.lead}>
              Email is full of personal and commercially sensitive information,
              so how AI handles it matters. Every solution we build is designed
              with governance in mind.
            </p>
          </div>

          <div className={styles.visual}>
            <TenantShieldSvg />
          </div>
        </div>

        {/* ── Safeguards (unordered) ── */}
        <ul className={styles.grid}>
          {safeguards.map((item) => (
            <li key={item.title} className={styles.feature}>
              <h3 className={styles.featureTitle}>{item.title}</h3>
              <p className={styles.featureBody}>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EmailTriageSecurity;
