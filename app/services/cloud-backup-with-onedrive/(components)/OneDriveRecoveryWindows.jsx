// app/services/cloud-backup-with-onedrive/(components)/OneDriveRecoveryWindows.jsx
// The ways to get a file back in Microsoft 365, each with who can use it, how far back it
// reaches and what it fixes. A bar per row shows the reach against a two-year scale.
// Server component. The id is the target of links in the hero and OneDriveSetup.
import Link from "next/link";

// SCSS module (source: styles/oneDriveRecoveryWindows.module.scss)
import styles from "@/styles/oneDriveRecoveryWindows.module.scss";

// `width` is the reach as a share of two years (730 days): 93 days ≈ 13%, 30 days ≈ 4%.
// Rows with no fixed time limit use `fill` instead, which maps to a .dotted or .fade class.
const layers = [
  {
    name: "Version history",
    who: "Staff",
    fill: "dotted",
    value: "Per file",
    note: "Earlier saved versions of each document",
    fixes:
      "A bad edit, an overwritten paragraph or the wrong spreadsheet saved over a good one.",
  },
  {
    name: "Recycle bin",
    who: "Staff, then admins",
    width: "13%",
    value: "93 days",
    note: "Across the first and second-stage bins",
    fixes:
      "Files or folders deleted by accident and noticed within three months.",
  },
  {
    name: "Files Restore",
    who: "Staff or admins",
    width: "4%",
    value: "30 days",
    note: "A whole OneDrive, back to any point in time",
    fixes:
      "Rolling a OneDrive back to before a mass deletion, a sync gone wrong or a ransomware hit.",
  },
  {
    name: "Microsoft 365 Backup",
    who: "Admins",
    width: "100%",
    value: "Up to 2 years",
    note: "10-minute restore points for 14 days, then weekly",
    fixes:
      "Recovery after the built-in windows close, bulk rollback across many accounts, or a single folder from any restore point.",
  },
  {
    name: "Retention policies",
    who: "Compliance admins",
    fill: "fade",
    value: "As set",
    note: "Preserved copies found through eDiscovery",
    fixes:
      "Keeping records for legal and compliance reasons. Useful, but slow to restore from and not a backup.",
  },
];

const OneDriveRecoveryWindows = () => {
  return (
    <section
      id="recovery-windows"
      className={styles.section}
      aria-labelledby="recovery-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Recovery windows</span>
          <h2 id="recovery-heading" className={styles.heading}>
            How far back can you{" "}
            <span className={styles.accent}>actually go?</span>
          </h2>
          <p className={styles.intro}>
            Microsoft 365 gives you several ways to get files back, each with
            its own time limit and its own owner. Knowing which one covers which
            problem is the difference between a five-minute fix and a lost
            project.
          </p>
        </header>

        <div>
          <p className={styles.scale}>
            Bar length shows how far back each option reaches, on a two-year
            scale.
          </p>
          <ul className={styles.list}>
            {layers.map(({ name, who, width, fill, value, note, fixes }) => (
              <li key={name} className={styles.row}>
                <div className={styles.meta}>
                  <h3 className={styles.name}>{name}</h3>
                  <span className={styles.who}>{who}</span>
                </div>

                <div className={styles.detail}>
                  {/* --w sets the bar length; styles[fill] adds the dotted or fade pattern */}
                  <div className={styles.track} aria-hidden="true">
                    <span
                      className={`${styles.fill} ${fill ? styles[fill] : ""}`}
                      style={width ? { "--w": width } : undefined}
                    />
                  </div>
                  <p className={styles.fixes}>{fixes}</p>
                </div>

                <div className={styles.window}>
                  <span className={styles.value}>{value}</span>
                  <span className={styles.note}>{note}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className={styles.footer}>
          Microsoft 365 Backup is billed at US$0.15 per GB of protected data per
          month through an Azure subscription, and restores are free. We size
          the policy around the{" "}
          <Link href="#onedrive-setup">accounts and sites that matter</Link>, so
          you aren&rsquo;t paying to protect ten years of stale archives.
        </p>
      </div>
    </section>
  );
};

export default OneDriveRecoveryWindows;
