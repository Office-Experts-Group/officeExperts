// app/services/cloud-backup-with-onedrive/(components)/OneDriveUpdates.jsx
// The 2026 changes to OneDrive and Microsoft 365 Backup that affect businesses, oldest first,
// each with a plain "what to do" action. Labelled by date rather than numbered, because these
// are independent changes, not steps. Server component. The id is linked from the hero.

// SCSS module (source: styles/oneDriveUpdates.module.scss)
import styles from "@/styles/oneDriveUpdates.module.scss";

const updates = [
  {
    date: "May 2026",
    title: "Single-file restores from Microsoft 365 Backup",
    body: "Granular file and folder restore is now generally available, so admins no longer have to roll back an entire OneDrive or SharePoint site to recover one folder.",
    action:
      "If you ruled out Microsoft 365 Backup because restores were all-or-nothing, it's worth another look.",
  },
  {
    date: "June 2026",
    title: "Standalone OneDrive plans retired",
    body: "OneDrive for Business Plan 1 stopped taking new sign-ups on 31 May 2026, and existing subscriptions can't be renewed from January 2027. A new OneDrive Extra Storage add-on, and pay-as-you-go storage, now cover users who need more space.",
    action:
      "Anyone on a standalone OneDrive plan needs moving to a Microsoft 365 suite before renewal.",
  },
  {
    date: "July 2026",
    title: "Unlicensed OneDrive accounts are enforced",
    body: "When a licence is removed, the OneDrive turns read-only on day 60 and is archived on day 93. Unless it's re-licensed, billed as archive storage (US$0.05 per GB per month) or its files are moved, it's at risk of deletion after 12 unpaid months, even with a retention policy on it.",
    action:
      "Find unlicensed accounts in the admin centre and fix the offboarding process that created them.",
  },
  {
    date: "Sep to Oct 2026",
    title: "Backup policies that cover everyone",
    body: "Full workload backup protects every OneDrive, site or mailbox with a single policy, including staff who join later. Recovery windows can also be set to 3 months, 6 months, 1 year or 2 years per policy.",
    action:
      "Choose a recovery window that matches how long your industry needs to keep records.",
  },
  {
    date: "Nov 2026 to Feb 2027",
    title: "A firm 5 TB ceiling per user",
    body: "OneDrive accounts that were expanded past 5 TB go read-only until they drop back below it, unless extra storage is bought. Large design, video and engineering archives rarely belong in one person's OneDrive anyway.",
    action:
      "Move shared project archives into SharePoint libraries, where the whole team owns them.",
  },
];

const OneDriveUpdates = () => {
  return (
    <section
      id="onedrive-2026"
      className={styles.section}
      aria-labelledby="updates-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>OneDrive in 2026</span>
          <h2 id="updates-heading" className={styles.heading}>
            What&rsquo;s changed,{" "}
            <span className={styles.accent}>and what to do about it</span>
          </h2>
          <p className={styles.intro}>
            OneDrive and Microsoft 365 Backup have changed more this year than
            in the five before it. If your setup dates from the rush to remote
            work, at least one of these will affect you.
          </p>
        </header>

        <ul className={styles.list}>
          {updates.map(({ date, title, body, action }) => (
            <li key={title} className={styles.item}>
              <span className={styles.date}>{date}</span>
              <div className={styles.text}>
                <h3 className={styles.itemTitle}>{title}</h3>
                <p className={styles.itemBody}>{body}</p>
              </div>
              <div className={styles.action}>
                <span className={styles.actionLabel}>What to do</span>
                <p className={styles.actionText}>{action}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OneDriveUpdates;
