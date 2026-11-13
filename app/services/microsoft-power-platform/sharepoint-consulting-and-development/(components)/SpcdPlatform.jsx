// /app/services/microsoft-power-platform/sharepoint-consulting-and-development/(components)/SpcdPlatform.jsx
// Standout section: a full-bleed dark band with one large annotated
// illustration of a SharePoint library. The callouts sit either side of it on
// wide screens and below it on smaller ones. Each callout's glyph matches a pin
// on the illustration.
import Link from "next/link";
import SpcdPlatformSvg from "../(svgs)/SpcdPlatformSvg";
import { SpcdFeatureIcon } from "../(svgs)/SpcdIcons";
import styles from "@/styles/spcdPlatform.module.scss";

const SPCD_FEATURES = [
  {
    glyph: "versions",
    title: "Version control & metadata",
    body: "Libraries track every change and who made it. Files are findable because they carry metadata, not just a filename buried three folders deep.",
    side: "left",
  },
  {
    glyph: "coauthor",
    title: "Co-authoring in real time",
    body: "Several people work in the same document at once. No more emailing versions back and forth, and no more overwriting each other’s changes.",
    side: "left",
  },
  {
    glyph: "comms",
    title: "Central communications hub",
    body: "Communication sites give staff one place for news, policies and department information. One source of truth, not twelve different shared drives.",
    side: "right",
  },
  {
    glyph: "approvals",
    title: "Automated approvals & routing",
    body: "Plug in Power Automate and document approvals, notifications and follow-up tasks run in the background without anyone chasing them.",
    side: "right",
  },
];

const Callout = ({ glyph, title, body }) => (
  <li className={styles.callout}>
    <span className={styles.calloutIcon}>
      <SpcdFeatureIcon type={glyph} />
    </span>
    <h3 className={styles.calloutTitle}>{title}</h3>
    <p className={styles.calloutBody}>{body}</p>
  </li>
);

const SpcdPlatform = () => {
  const left = SPCD_FEATURES.filter((f) => f.side === "left");
  const right = SPCD_FEATURES.filter((f) => f.side === "right");

  return (
    <section
      id="spcd-platform"
      className={styles.spcdPlatform}
      aria-labelledby="spcd-platform-heading"
    >
      {/* ── Offset header ── */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.eyebrow}>The platform</span>
          <h2 id="spcd-platform-heading" className={styles.heading}>
            More than <span className={styles.accent}>file storage.</span>
          </h2>
        </div>
        <div className={styles.headerRight}>
          <p className={styles.lede}>
            SharePoint gets written off as a glorified shared drive more often
            than it deserves. That reputation comes from poorly set-up
            environments: default settings, no structure, and files dropped
            wherever made sense at the time.
          </p>
          <p className={styles.lede}>
            A properly built SharePoint does a lot more. And beyond the
            day-to-day benefits, there&rsquo;s a bigger reason to get it right:
            Microsoft&nbsp;365 Copilot draws its answers from your SharePoint
            content. If your environment is disorganised or full of outdated
            files,{" "}
            <Link href="#spcd-copilot" className={styles.inlineLink}>
              the AI output reflects that
            </Link>
            .
          </p>
        </div>
      </div>

      {/* ── Full-bleed annotated band ── */}
      <div className={styles.band}>
        <div className={styles.bandInner}>
          <ul className={`${styles.callouts} ${styles.calloutsLeft}`}>
            {left.map((f) => (
              <Callout key={f.glyph} {...f} />
            ))}
          </ul>

          <figure className={styles.figure}>
            <div className={styles.diagramScroll}>
              <div className={styles.diagramInner}>
                <SpcdPlatformSvg />
              </div>
            </div>
            <figcaption className={styles.caption}>
              Each marker matches the feature with the same icon.
            </figcaption>
          </figure>

          <ul className={`${styles.callouts} ${styles.calloutsRight}`}>
            {right.map((f) => (
              <Callout key={f.glyph} {...f} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SpcdPlatform;
