// /app/services/microsoft-power-platform/sharepoint-consulting-and-development/(components)/SpcdMigration.jsx
// End-of-support timeline as a horizontal track. On narrow screens the track
// scrolls sideways with scroll-snap rather than squashing the cards.
//
// Dates checked 13 November 2026: SharePoint Server 2016 and 2019 left extended
// support on 14 July 2026 and Microsoft offers no Extended Security Updates for
// SharePoint. Re-check before publishing if this page sits for a while.
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { SpcdMilestoneGlyph, SpcdReasonArt } from "../(svgs)/SpcdMigrationArt";
import styles from "@/styles/spcdMigration.module.scss";

const SPCD_MILESTONES = [
  {
    id: "sp2013",
    glyph: "server",
    date: "April 2023",
    status: "past",
    label: "SharePoint 2013",
    event: "Extended support ended",
    detail:
      "Still found in plenty of server rooms. It hasn’t had a security patch since 2023.",
  },
  {
    id: "exchange",
    glyph: "mail",
    date: "October 2025",
    status: "past",
    label: "Exchange Server 2016 & 2019",
    event: "End of support",
    detail:
      "Many organisations running SharePoint on-premises run Exchange beside it. If yours is still there too, it’s part of the same conversation.",
  },
  {
    id: "sp2016-2019",
    glyph: "serverOff",
    date: "14 July 2026",
    status: "critical",
    label: "SharePoint 2016 & 2019",
    event: "End of extended support",
    detail:
      "The final security update shipped that day. InfoPath Forms Services and SharePoint Designer 2013 reached end of support at the same time.",
  },
  {
    id: "now",
    glyph: "pin",
    date: "Now",
    status: "current",
    label: "Where many organisations sit",
    event: "Running unsupported",
    detail:
      "There’s no paid Extended Security Updates program for SharePoint, so new vulnerabilities on 2016 and 2019 stay open. The supported paths are SharePoint Online or Subscription Edition.",
  },
  {
    id: "next",
    glyph: "spark",
    date: "Next",
    status: "next",
    label: "Copilot and agents",
    event: "Ready to build on",
    detail:
      "A clean, governed SharePoint Online environment is what Copilot and SharePoint agents work from. Migrating well puts you in position for both.",
  },
];

const SPCD_REASONS = [
  {
    art: "safetyNet",
    heading: "No safety net to buy",
    body: "With no paid extension available, there’s nothing that buys more time. A planned migration is the only way to close the gap.",
  },
  {
    art: "testing",
    heading: "Pre-migration testing time",
    body: "Staged migrations with proper test runs take time. Organisations that rush cutover find their problems during it, not before.",
  },
  {
    art: "schedule",
    heading: "Scheduling flexibility",
    body: "Migration projects take time to scope and run properly. Booking in early means you choose the timeline rather than having it chosen for you.",
  },
  {
    art: "copilot",
    heading: "Copilot readiness",
    body: "Getting onto SharePoint Online means your environment can be structured and governed in time for a Copilot rollout, instead of standing in its way.",
  },
];

const SpcdMigration = () => {
  return (
    <section
      id="spcd-migration"
      className={styles.spcdMigration}
      aria-labelledby="spcd-migration-heading"
    >
      <div className={styles.inner}>
        <AnimateOnScroll animation="fade-up">
          <header className={styles.header}>
            <div>
              <span className={styles.eyebrow}>End-of-support timelines</span>
              <h2 id="spcd-migration-heading" className={styles.heading}>
                Why businesses are migrating{" "}
                <span className={styles.accent}>now.</span>
              </h2>
            </div>
            <p className={styles.lede}>
              Microsoft&rsquo;s support for SharePoint Server 2016 and 2019
              ended on 14 July 2026, and unlike Windows Server there&rsquo;s no
              paid Extended Security Updates program to stretch it out. If
              you&rsquo;re still running SharePoint on-premises, every
              vulnerability found from here stays unpatched. That doesn&rsquo;t
              call for panic, but it does call for a plan, and putting one
              together costs nothing.
            </p>
          </header>
        </AnimateOnScroll>

        {/* ── Horizontal timeline ── */}
        <div
          className={styles.track}
          role="region"
          aria-label="SharePoint end-of-support timeline"
          tabIndex={0}
        >
          <ol className={styles.timeline}>
            {SPCD_MILESTONES.map(
              ({ id, glyph, date, status, label, event, detail }) => (
                <li
                  key={id}
                  className={`${styles.milestone} ${styles[`milestone_${status}`]}`}
                >
                  <div className={styles.node} aria-hidden="true">
                    <SpcdMilestoneGlyph type={glyph} />
                  </div>
                  <div className={styles.card}>
                    <div className={styles.cardTop}>
                      <span className={styles.date}>{date}</span>
                      {status === "current" && (
                        <span className={styles.herePill}>You are here</span>
                      )}
                    </div>
                    <h3 className={styles.cardLabel}>{label}</h3>
                    <span className={styles.cardEvent}>{event}</span>
                    <p className={styles.cardDetail}>{detail}</p>
                  </div>
                </li>
              ),
            )}
          </ol>
        </div>

        {/* ── Reasons ── */}
        <h3 className={styles.reasonsLabel}>
          Why a planned move beats waiting
        </h3>
        <ul className={styles.reasons}>
          {SPCD_REASONS.map(({ art, heading, body }) => (
            <li key={art} className={styles.reason}>
              <SpcdReasonArt type={art} />
              <h4 className={styles.reasonHeading}>{heading}</h4>
              <p className={styles.reasonBody}>{body}</p>
            </li>
          ))}
        </ul>

        {/* ── Bottom note ── */}
        <div className={styles.note}>
          <p>
            Running Exchange or other Microsoft servers on-premises as well? We
            handle the{" "}
            <Link href="/services/microsoft-office-365">
              broader Microsoft&nbsp;365 migration
            </Link>{" "}
            too, with one team and one coordinated timeline so the projects
            don&rsquo;t compete.
          </p>
          <Link href="#contact" className={styles.cta}>
            Start a migration conversation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpcdMigration;
