// app/services/cloud-backup-with-onedrive/(components)/OneDriveFaq.jsx
// Frequently asked questions as native <details> elements, so they open and close with no
// client-side JavaScript. The FAQPage JSON-LD is built from the same array, keeping the
// visible answers and the structured data identical. Server component.

// SCSS module (source: styles/oneDriveFaq.module.scss)
import styles from "@/styles/oneDriveFaq.module.scss";

// Plain-text answers, because the same strings go into the JSON-LD below
const faqs = [
  {
    q: "Is OneDrive a backup?",
    a: "Not on its own. OneDrive is a sync service: it keeps one copy of each file identical across your devices and the cloud, so deletions and ransomware damage sync too. It includes a recycle bin (93 days), Files Restore (30 days) and version history, which cover everyday mistakes. For a true backup you need separate point-in-time copies, such as Microsoft 365 Backup or a third-party backup service.",
  },
  {
    q: "What is the difference between OneDrive and SharePoint?",
    a: "OneDrive is for files that belong to one person, like drafts and personal working documents. SharePoint, which also sits behind Teams, is for files that belong to the business, like client folders, projects and templates. Keeping business files in SharePoint means they stay put when a staff member leaves.",
  },
  {
    q: "How much does Microsoft 365 Backup cost?",
    a: "Microsoft 365 Backup is billed at US$0.15 per GB of protected data per month, pay-as-you-go through an Azure subscription. Restores are free. You choose which OneDrive accounts, SharePoint sites and mailboxes to protect, so the cost depends on how much data you include and the recovery window you set.",
  },
  {
    q: "What happens to a OneDrive when a staff member leaves?",
    a: "Since July 2026, an unlicensed OneDrive becomes read-only on day 60 and is archived on day 93. Unless it is re-licensed, billed as archive storage or its files are moved elsewhere, it is at risk of deletion after 12 unpaid months, even if a retention policy applies. The safest approach is to hand the files to a manager or move them into SharePoint before the licence is removed.",
  },
  {
    q: "Can OneDrive protect us from ransomware?",
    a: "It helps, but it isn't enough on its own. Files Restore can roll a whole OneDrive back to any point in the last 30 days. Microsoft 365 Backup adds restore points every 10 minutes for the past 14 days, then weekly, kept separately from the live data. Combined with the other Essential Eight controls, that gives you a reliable way back.",
  },
  {
    q: "How much OneDrive storage does each user get?",
    a: "Most Microsoft 365 business plans include 1 TB per user. Some plans let organisations with five or more licences raise this to 5 TB. Beyond that, extra space now comes from the paid OneDrive Extra Storage add-on or pay-as-you-go storage, and accounts previously expanded past 5 TB go read-only between November 2026 and February 2027 unless storage is bought.",
  },
  {
    q: "Do we need a Copilot licence to use Copilot in OneDrive?",
    a: "Yes. Copilot features in OneDrive for work accounts, including agents that answer questions across up to 20 files, need a Microsoft 365 Copilot licence. Holding at least one Copilot licence also unlocks SharePoint Advanced Management, which helps find overshared files before Copilot can surface them.",
  },
  {
    q: "Can you move our file server, Dropbox or Google Drive into OneDrive?",
    a: "Yes. We migrate from office file servers, NAS drives, Google Drive, Dropbox, Box, Egnyte and older SharePoint into OneDrive, SharePoint and Teams. Every migration starts with an audit and a pilot group, so problems like long file paths and permissions are sorted before the bulk move.",
  },
];

// FAQPage structured data built from the questions above
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const OneDriveFaq = () => {
  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Questions</span>
          <h2 id="faq-heading" className={styles.heading}>
            OneDrive backup{" "}
            <span className={styles.accent}>questions, answered</span>
          </h2>
          <p className={styles.intro}>
            The things businesses ask us most before they change how files are
            stored and protected.
          </p>
        </header>

        <div className={styles.list}>
          {faqs.map(({ q, a }) => (
            <details key={q} className={styles.item}>
              <summary className={styles.question}>
                {q}
                <span className={styles.icon} aria-hidden="true" />
              </summary>
              <p className={styles.answer}>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OneDriveFaq;
