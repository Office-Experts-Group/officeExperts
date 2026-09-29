// app/services/ai-email-triage/(components)/EmailTriageIntro.jsx
import styles from "../../../../styles/emailTriageIntro.module.css";

// The three examples from the brief, shown as "email in → how AI reads it".
// `tone` maps to a colour modifier class in the SCSS module.
const examples = [
  {
    from: "A customer",
    subject: "The invoice you sent is wrong",
    reading: "Billing dispute · High",
    action: "Routed to Accounts with the invoice number extracted",
    tone: "billing",
  },
  {
    from: "A client",
    subject: "Our site is down",
    reading: "Outage · Urgent",
    action: "Escalated straight to the support team in Teams",
    tone: "urgent",
  },
  {
    from: "A supplier",
    subject: "Our spring product newsletter",
    reading: "Newsletter · Low",
    action: "Filed and summarised for later",
    tone: "later",
  },
];

const EmailTriageIntro = () => {
  return (
    <section className={styles.section} id="what-is-ai-email-triage">
      <div className={styles.inner}>
        {/* ── Centred definition ── */}
        <header className={styles.header}>
          <h2 className={styles.heading}>
            What is <span className={styles.accent}>AI email triage?</span>
          </h2>
          <p className={styles.definition}>
            Email triage is the job of deciding what each incoming email is, how
            urgent it is, and who should deal with it. In most businesses that
            job falls to a person who opens the shared inbox every morning and
            works through it by hand.
          </p>
        </header>

        {/* ── Examples: unordered, each shows an email and how AI reads it ── */}
        <ul className={styles.examples}>
          {examples.map((example) => (
            <li
              key={example.subject}
              className={`${styles.example} ${styles[example.tone]}`}
            >
              <div className={styles.email}>
                <span className={styles.from}>From: {example.from}</span>
                <p className={styles.subject}>“{example.subject}”</p>
              </div>
              <div className={styles.reading}>
                <span className={styles.tag}>{example.reading}</span>
                <p className={styles.action}>{example.action}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* ── Supporting copy in two columns ── */}
        <div className={styles.body}>
          <p className={styles.text}>
            AI email triage hands that first pass to artificial intelligence.
            Outlook rules and Copilot prioritisation are excellent when the
            criteria are fixed and known, such as a particular sender, a keyword
            or a set of named clients. AI triage works differently: a language
            model reads each email the way a person would, so it can pick up
            intent even when the wording changes every time. It then takes
            action: categorising, moving, flagging, creating a task, logging a
            record or alerting the right team.
          </p>
          <p className={styles.rule}>
            The result is a shared inbox that sorts itself, faster responses on
            the emails that count, and staff who spend their day on work rather
            than on the inbox.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailTriageIntro;
