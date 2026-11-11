// app/services/cloud-backup-with-onedrive/(components)/OneDriveHero.jsx
// Page hero, replacing the shared ServiceHero. Dark background so the transparent site header
// stays readable, with the H1, a short lede, CTAs, an illustration and quick links down the page.
// Server component.
import Link from "next/link";

// SCSS module (source: styles/oneDriveHero.module.scss)
import styles from "@/styles/oneDriveHero.module.scss";
// Decorative illustration stored with the route
import { CloudSyncHeroSvg } from "../(svgs)/CloudSyncHeroSvg";

// Anchor links to the main sections further down this page
const jumpLinks = [
  { label: "Sync vs backup", href: "#sync-vs-backup" },
  { label: "Recovery windows", href: "#recovery-windows" },
  { label: "What changed in 2026", href: "#onedrive-2026" },
  { label: "Copilot and your files", href: "#onedrive-copilot" },
  { label: "Migration", href: "#onedrive-migration" },
];

const OneDriveHero = () => {
  return (
    <section className={styles.hero} aria-labelledby="onedrive-hero-heading">
      <div className={styles.inner}>
        {/* ── Left: headline and copy ── */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>Microsoft 365 · OneDrive</span>

          <h1 id="onedrive-hero-heading" className={styles.heading}>
            OneDrive Cloud Backup{" "}
            <span className={styles.accent}>for Australian Businesses</span>
          </h1>

          <p className={styles.lede}>
            OneDrive keeps every file your team saves in sync across laptops,
            phones and the web. On its own, it isn&rsquo;t a backup. We set
            OneDrive up properly, add Microsoft 365 Backup where you need it,
            and make sure a deleted folder, a ransomware hit or a departing
            staff member never costs you your files.
          </p>

          <div className={styles.actions}>
            <Link href="#contact" className="btn">
              Book a OneDrive health check
            </Link>
            <Link href="#onedrive-2026" className={styles.secondary}>
              See what changed in 2026
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <p className={styles.proof}>
            Microsoft consultants since 2000, with 25+ developers across
            Australia.
          </p>
        </div>

        {/* ── Right: illustration ── */}
        <div className={styles.visual} aria-hidden="true">
          <CloudSyncHeroSvg />
        </div>

        {/* ── Quick links, full width under both columns ── */}
        <nav className={styles.jump} aria-label="On this page">
          <span className={styles.jumpLabel}>On this page</span>
          {jumpLinks.map(({ label, href }) => (
            <a key={href} href={href} className={styles.jumpLink}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default OneDriveHero;
