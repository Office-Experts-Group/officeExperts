// app/services/ai-email-triage/(components)/EmailTriageUseCases.jsx

// Compiled CSS module (source: styles/emailTriageUseCases.module.scss)
import styles from "../../../../styles/emailTriageUseCases.module.css";

// Not a sequence, so rendered as unordered cards rather than numbered steps
const useCases = [
  {
    title: "Customer service inboxes",
    body: "Separate complaints from general questions, flag unhappy customers by tone, and route each email to the right team before anyone has opened it.",
  },
  {
    title: "Accounts payable",
    body: "Identify invoices, statements and payment queries, extract the key figures, and file each one to the right folder or hand the invoice to an automated processing flow.",
  },
  {
    title: "Sales and new enquiries",
    body: "Spot genuine leads in a crowded info@ mailbox and push them straight to the sales team or your CRM, so enquiries are answered in minutes, not days.",
  },
  {
    title: "Operations and orders",
    body: "Recognise purchase orders, delivery questions and change requests, and log them against the right job in SharePoint or Dataverse.",
  },
  {
    title: "HR and recruitment",
    body: "Sort applications, leave requests and policy questions, and save attachments such as résumés to the right location automatically.",
  },
  {
    title: "Executive and manager inboxes",
    body: "Use Copilot prioritisation so leaders see the handful of emails that need them today, with the rest summarised or filed.",
  },
];

const EmailTriageUseCases = () => {
  return (
    <section className={styles.section} id="use-cases">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.heading}>
            Where AI email triage makes{" "}
            <span className={styles.accent}>the biggest difference</span>
          </h2>
        </header>

        <ul className={styles.grid}>
          {useCases.map((item) => (
            <li key={item.title} className={styles.item}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemBody}>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EmailTriageUseCases;
