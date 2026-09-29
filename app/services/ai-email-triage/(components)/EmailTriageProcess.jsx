// app/services/ai-email-triage/(components)/EmailTriageProcess.jsx

// Compiled CSS module (source: styles/emailTriageProcess.module.scss)
import styles from "../../../../styles/emailTriageProcess.module.css";

// Genuinely sequential, so this is the one numbered list on the page
const steps = [
  {
    title: "An email arrives",
    body: "In a personal inbox or a shared mailbox such as accounts@ or support@.",
  },
  {
    title: "AI reads the message",
    body: "The subject, body and, where needed, attachments are passed to a language model that understands intent, not just keywords.",
  },
  {
    title: "The email is classified",
    body: "Into your own business categories (for example new enquiry, quote request, complaint, invoice, supplier update or spam) with a priority level.",
  },
  {
    title: "Key details are extracted",
    body: "Names, account numbers, amounts, dates and deadlines are pulled out as structured data.",
  },
  {
    title: "Action is taken",
    body: "The email is moved, categorised, assigned or escalated, and the right person is alerted in Outlook or Teams.",
  },
  {
    title: "Everything is logged",
    body: "Every decision is recorded so you can report on volumes, response times and accuracy, and fine-tune the categories over time.",
  },
];

const EmailTriageProcess = () => {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Step by step</span>
          <h2 className={styles.heading}>How AI email triage works</h2>
        </header>

        <ol className={styles.steps}>
          {steps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              {/* Visual number only; the <ol> already conveys order */}
              <span className={styles.stepNum} aria-hidden="true">
                {i + 1}
              </span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default EmailTriageProcess;
