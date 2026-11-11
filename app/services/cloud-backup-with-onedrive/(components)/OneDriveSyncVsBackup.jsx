// app/services/cloud-backup-with-onedrive/(components)/OneDriveSyncVsBackup.jsx
// First content section, replacing the old PageSegmentMain. Explains why OneDrive sync on its
// own isn't a backup, lists the gaps we see most often and illustrates sync against
// point-in-time backup. Server component. The id is the target of the hero's quick links.
import Link from "next/link";

// SCSS module (source: styles/oneDriveSyncVsBackup.module.scss)
import styles from "@/styles/oneDriveSyncVsBackup.module.scss";
// Decorative illustration stored with the route
import { SyncVsBackupSvg } from "../(svgs)/SyncVsBackupSvg";

// The ways we most often see businesses lose files despite having OneDrive
const gaps = [
  "A folder deleted months ago, noticed after the recycle bin has emptied",
  "Ransomware on one laptop, synced straight up to the cloud copy",
  "A former employee's OneDrive lost after their licence was removed",
];

const OneDriveSyncVsBackup = () => {
  return (
    <section
      id="sync-vs-backup"
      className={styles.section}
      aria-labelledby="sync-heading"
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Sync is not backup</span>
          <h2 id="sync-heading" className={styles.heading}>
            OneDrive mirrors your files.{" "}
            <span className={styles.accent}>Mistakes included.</span>
          </h2>

          <div className={styles.body}>
            <p>
              OneDrive&rsquo;s job is to keep one copy of each file identical
              everywhere. That&rsquo;s exactly what you want when staff work
              from home, the office and their phones. It also means a folder
              deleted on one laptop disappears from every device, and files
              scrambled by ransomware sync up to the cloud just as faithfully
              as good ones.
            </p>
            <p>
              Microsoft looks after the platform, while your content is your
              responsibility. The Australian Cyber Security Centre lists{" "}
              <a href="https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/small-business-cyber-security/small-business-cloud-security-guide/technical-example-regular-backups">
                regular backups of Microsoft 365
              </a>{" "}
              as part of the Essential Eight, and the built-in recycle bin and
              version history only go back so far. They are great for everyday
              slips, but they run on fixed time limits and can be emptied.
            </p>
            <p>
              So we treat OneDrive as two jobs: sync that works on every
              device, and a separate, tested way back when something goes
              wrong. Most of the time that starts with a short{" "}
              <Link href="/services/business-analysis">
                business analysis session
              </Link>{" "}
              to work out which files would actually hurt to lose.
            </p>
          </div>

          <div className={styles.gaps}>
            <h3 className={styles.gapsTitle}>Gaps we find most often</h3>
            <ul className={styles.gapList}>
              {gaps.map((gap) => (
                <li key={gap} className={styles.gap}>
                  <span className={styles.cross} aria-hidden="true">
                    &times;
                  </span>
                  {gap}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className={styles.figure}>
          <div className={styles.visual} aria-hidden="true">
            <SyncVsBackupSvg />
          </div>
          <figcaption className={styles.caption}>
            Sync keeps one copy everywhere. Backup keeps earlier copies you can
            roll back to.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default OneDriveSyncVsBackup;
