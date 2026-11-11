// app/services/cloud-backup-with-onedrive/(components)/OneDriveSetup.jsx
// What a proper OneDrive setup covers. Sticky header and Known Folder Move illustration on the
// left, unordered cards on the right (none of these depend on each other, so no numbers).
// Server component. The id is the target of a link in OneDriveRecoveryWindows.
import Link from "next/link";

// SCSS module (source: styles/oneDriveSetup.module.scss)
import styles from "@/styles/oneDriveSetup.module.scss";
// Decorative illustration stored with the route
import { KnownFolderSvg } from "../(svgs)/KnownFolderSvg";

// Each body is JSX so it can carry inline links
const items = [
  {
    tag: "Protect",
    title: "Known Folder Move",
    body: (
      <>
        Desktop, Documents and Pictures are redirected into OneDrive silently
        through Intune or Group Policy, so files people save &ldquo;to the
        desktop&rdquo; are protected without anyone changing habits.
      </>
    ),
  },
  {
    tag: "Sync",
    title: "Files On-Demand and sync health",
    body: (
      <>
        Files show in File Explorer without filling the hard drive, and we
        check the sync reports for devices that quietly stopped syncing weeks
        ago.
      </>
    ),
  },
  {
    tag: "Share",
    title: "Sharing and access rules",
    body: (
      <>
        Sensible defaults for external sharing, expiring &ldquo;anyone&rdquo;
        links and sensitivity labels, so client files don&rsquo;t leak through
        a link someone forgot about.
      </>
    ),
  },
  {
    tag: "Back up",
    title: "Microsoft 365 Backup policies",
    body: (
      <>
        Protection policies for the OneDrive accounts and SharePoint sites that
        matter, with a{" "}
        <Link href="#recovery-windows">recovery window</Link> matched to your
        record-keeping obligations.
      </>
    ),
  },
  {
    tag: "Offboard",
    title: "Leavers and unlicensed accounts",
    body: (
      <>
        A documented handover that moves a leaver&rsquo;s files to their
        manager or a SharePoint library before the licence is removed, now that{" "}
        <Link href="#onedrive-2026">unlicensed OneDrives are enforced</Link>.
      </>
    ),
  },
  {
    tag: "Replace",
    title: "New laptops and Windows 11",
    body: (
      <>
        Known Folder Move plus Windows settings backup and restore (formerly
        Windows Backup for Organizations) gets a replacement PC working with
        the user&rsquo;s files and settings in minutes, not a day.
      </>
    ),
  },
];

const OneDriveSetup = () => {
  return (
    <section
      id="onedrive-setup"
      className={styles.section}
      aria-labelledby="setup-heading"
    >
      <div className={styles.inner}>
        <div className={styles.lead}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>What we set up</span>
            <h2 id="setup-heading" className={styles.heading}>
              OneDrive configured for the way{" "}
              <span className={styles.accent}>your team works</span>
            </h2>
            <p className={styles.intro}>
              Most businesses we see have OneDrive switched on but never
              configured. These are the settings that decide whether it
              protects you or just stores things.
            </p>
          </header>
          <div className={styles.visual} aria-hidden="true">
            <KnownFolderSvg />
          </div>
        </div>

        <ul className={styles.cards}>
          {items.map(({ tag, title, body }) => (
            <li key={title} className={styles.card}>
              <span className={styles.cardTag}>{tag}</span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardText}>{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OneDriveSetup;
