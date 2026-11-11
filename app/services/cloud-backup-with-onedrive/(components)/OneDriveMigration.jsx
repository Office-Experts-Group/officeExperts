// app/services/cloud-backup-with-onedrive/(components)/OneDriveMigration.jsx
// Moving file servers and other cloud storage into OneDrive and SharePoint: supported sources,
// where files should land, and the migration process (sequential, so numbered).
// Server component. The id is linked from the hero's quick links.
import Link from "next/link";

// SCSS module (source: styles/oneDriveMigration.module.scss)
import styles from "@/styles/oneDriveMigration.module.scss";
// Decorative illustration stored with the route
import { MigrationSourcesSvg } from "../(svgs)/MigrationSourcesSvg";

// Sources we migrate from, shown as chips
const sources = [
  "Office file servers",
  "NAS drives",
  "Google Drive",
  "Dropbox",
  "Box",
  "Egnyte",
  "Older SharePoint",
];

// Where files should end up. Bodies are JSX so they can carry inline links.
const destinations = [
  {
    label: "OneDrive",
    title: "Files that belong to a person",
    body: (
      <>
        Drafts, personal working files and anything not ready to share. When
        someone leaves, these are reviewed and handed over, not kept forever.
      </>
    ),
  },
  {
    label: "SharePoint and Teams",
    title: "Files that belong to the business",
    body: (
      <>
        Client folders, projects, templates and policies that outlive any one
        staff member. We design these with our{" "}
        <Link href="https://www.powerplatformexperts.com.au/sharepoint-consulting-and-development">
          SharePoint consulting
        </Link>{" "}
        team so the structure still makes sense in five years.
      </>
    ),
  },
];

// Migration process. Order matters, so these are numbered.
const steps = [
  {
    title: "Audit",
    text: "We map what you have, who uses it and what can be archived. Often half the data hasn't been opened in years.",
  },
  {
    title: "Design",
    text: "Sites, libraries and permissions planned around how work actually flows, using security groups rather than one-off access.",
  },
  {
    title: "Pilot",
    text: "One team moves first, so long file paths, blocked characters and permission gaps surface early.",
  },
  {
    title: "Migrate and support",
    text: "The bulk move runs out of hours, sync clients point to the new locations, and we stay on hand for the first weeks.",
  },
];

const OneDriveMigration = () => {
  return (
    <section
      id="onedrive-migration"
      className={styles.section}
      aria-labelledby="migration-heading"
    >
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>Moving to OneDrive</span>
            <h2 id="migration-heading" className={styles.heading}>
              Off the server, out of Dropbox,{" "}
              <span className={styles.accent}>into Microsoft 365</span>
            </h2>
            <div className={styles.body}>
              <p>
                Plenty of businesses still run a file server in the comms
                cupboard, or a Dropbox account someone set up years ago. We
                move it all into Microsoft 365 using Microsoft&rsquo;s Migration
                Manager, which now handles file shares, Google Drive, Dropbox,
                Box and Egnyte. When version history and complex sharing need
                to come across intact, we use specialist tools instead.
              </p>
              <p>
                Migration is one part of our wider{" "}
                <Link href="/services/upgrades-and-migration">
                  upgrades and migration
                </Link>{" "}
                work across the whole Microsoft stack.
              </p>
            </div>
            <ul className={styles.chips} aria-label="Sources we migrate from">
              {sources.map((source) => (
                <li key={source} className={styles.chip}>
                  {source}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.visual} aria-hidden="true">
            <MigrationSourcesSvg />
          </div>
        </div>

        {/* ── OneDrive or SharePoint ── */}
        <div className={styles.split}>
          {destinations.map(({ label, title, body }) => (
            <article key={label} className={styles.option}>
              <span className={styles.optionLabel}>{label}</span>
              <h3 className={styles.optionTitle}>{title}</h3>
              <p className={styles.optionText}>{body}</p>
            </article>
          ))}
        </div>

        {/* ── Process ── */}
        <div className={styles.process}>
          <h3 className={styles.processTitle}>How a migration runs</h3>
          <ol className={styles.steps}>
            {steps.map(({ title, text }, i) => (
              <li key={title} className={styles.step}>
                <span className={styles.stepNum} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className={styles.stepTitle}>{title}</h4>
                <p className={styles.stepText}>{text}</p>
              </li>
            ))}
          </ol>
          <p className={styles.footnote}>
            One exception: an Access database back end should never live in a
            synced OneDrive or SharePoint folder, as it can corrupt. We move the
            data to{" "}
            <Link href="/services/sql-server-and-access-integration">
              SQL Server or Azure
            </Link>{" "}
            and keep the Access forms your team already knows.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OneDriveMigration;
