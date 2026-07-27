// app/services/activex-vbscript-migration/(components)/MigrationHero.jsx

import Link from "next/link";
import styles from "../../../../styles/activexHero.module.css";

// Rollout milestones shown in the status strip. Kept as data so the
// dates are easy to update if Microsoft revises the timeline again.
const milestones = [
  { date: "Oct 2024", label: "Office 2024 — ActiveX disabled by default" },
  { date: "Apr 2025", label: "Microsoft 365 — ActiveX disabled by default" },
  { date: "Ongoing", label: "VBScript being removed from Windows" },
];

const MigrationHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        {/* ── Left: headline block ── */}
        <div className={styles.content}>
          <p className={styles.eyebrow}>ActiveX &amp; VBScript Migration</p>

          <h1 className={styles.heading}>
            Your old macros are about to hit a{" "}
            <span className={styles.accent}>wall.</span>
          </h1>

          <p className={styles.lead}>
            Microsoft has disabled ActiveX controls by default across Word,
            Excel, PowerPoint and Visio, and VBScript is being retired from
            Windows entirely. If your business runs on older
            controls or scripts, this affects you.
          </p>

          <p className={styles.body}>
            We audit what you have, work out exactly what will break and
            when, and rebuild it properly using supported, modern
            technology, without losing the functionality your team relies
            on every day.
          </p>

          <div className={styles.ctas}>
            <Link
              href="/contact-us/request-a-quote"
              className={styles.ctaPrimary}
            >
              Get a free compatibility check
            </Link>
            <Link href="#contact" className={styles.ctaSecondary}>
              Talk to an expert
            </Link>
          </div>
        </div>

        {/* ── Right: mock deprecation notice card ── */}
        {/* Deliberately styled to echo the real Office "blocked content"
            banner, giving the hero a topical, recognisable visual hook. */}
        <div className={styles.notice} aria-hidden="true">
          <div className={styles.noticeBar}>
            <span className={styles.noticeDot} />
            Security Notice
          </div>
          <p className={styles.noticeTitle}>
            Microsoft has blocked this content
          </p>
          <p className={styles.noticeText}>
            ActiveX controls have been disabled by your administrator. This
            object will be shown as a static image.
          </p>

          <div className={styles.timeline}>
            {milestones.map((m) => (
              <div key={m.label} className={styles.timelineRow}>
                <span className={styles.timelineDate}>{m.date}</span>
                <span className={styles.timelineLabel}>{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MigrationHero;
