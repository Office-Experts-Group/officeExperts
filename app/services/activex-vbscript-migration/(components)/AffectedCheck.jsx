// app/services/activex-vbscript-migration/(components)/AffectedCheck.jsx

import Image from "next/image";
import AnimateOnScroll from "../../../../components/AnimateOnScroll";
import styles from "../../../../styles/activexAffectedCheck.module.css";

import activeX from "../../../../public/activex.webp";
import vbScript from "../../../../public/vbScript.webp";

const IconActiveX = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M7 12h3M7 15h6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="16.5" cy="9" r="1.4" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const IconScript = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M8 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M10 9l2 3-2 3"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconDatabase = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <ellipse
      cx="12"
      cy="6"
      rx="7"
      ry="2.6"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M5 6v12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M5 12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>
);

const IconWarning = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 4.5l8.5 14.5H3.5L12 4.5z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M12 10v4.2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="12" cy="17" r="0.9" fill="currentColor" />
  </svg>
);

const IconOrphan = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M5.5 20a6.5 6.5 0 0 1 13 0"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M4 4l16 16"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const IconStatic = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect
      x="3.5"
      y="4.5"
      width="17"
      height="12"
      rx="1.6"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M3.5 19.5h17"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const AffectedCheck = () => (
  <section className={styles.section}>
    <div className={styles.header}>
      <p className={styles.eyebrow}>Is this affecting you?</p>
      <h2 className={styles.heading}>
        If any of this looks familiar,{" "}
        <span className={styles.headingMuted}>it&rsquo;s time to act.</span>
      </h2>
      <p className={styles.intro}>
        Most businesses don&rsquo;t realise they&rsquo;re affected until
        something stops working. Check out the items below to see if your at
        risk.
      </p>
    </div>

    <div className={styles.bento} role="list">
      {/* Box 1 — wide, dark tone */}

      <div className={`${styles.box} ${styles.boxOne}`} role="listitem">
        <span className={styles.iconWrap}>
          <IconActiveX />
        </span>
        <p className={styles.cardText}>
          Excel or Word documents with clickable buttons, date pickers, or
          dropdowns built using ActiveX controls
        </p>
      </div>

      {/* Box 2 — tall, accent tone */}
      <div className={`${styles.box} ${styles.boxTwo}`} role="listitem">
        <span className={styles.iconWrap}>
          <IconScript />
        </span>
        <p className={styles.cardText}>
          Scheduled tasks or automation that call an external .vbs file to
          process, move, or back up data
        </p>
      </div>

      {/* Box 3 — small, light tone */}
      <div className={`${styles.box} ${styles.boxThree}`} role="listitem">
        <span className={styles.iconWrap}>
          <IconDatabase />
        </span>
        <p className={styles.cardText}>
          Access databases with forms or reports containing embedded ActiveX
          objects
        </p>
      </div>

      <div className={`${styles.box} ${styles.boxImage2}`} role="listitem">
        <Image src={vbScript} height="100%" width="100%" alt="vbscript logo" />
      </div>

      {/* Box 4 — small, dark tone */}
      <div className={`${styles.box} ${styles.boxFour}`} role="listitem">
        <span className={styles.iconWrap}>
          <IconWarning />
        </span>
        <p className={styles.cardText}>
          Staff seeing a blocked content or security notice banner when opening
          older Office files
        </p>
      </div>

      <div className={`${styles.box} ${styles.boxImage}`} role="listitem">
        <Image src={activeX} height="80%" width="100%" alt="activex logo" />
      </div>

      {/* Box 5 — wide, light tone */}
      <div className={`${styles.box} ${styles.boxFive}`} role="listitem">
        <span className={styles.iconWrap}>
          <IconOrphan />
        </span>
        <p className={styles.cardText}>
          A system built years ago by someone no longer with the business, and
          nobody left who understands it
        </p>
      </div>

      {/* Box 6 — small, accent tone */}
      <div className={`${styles.box} ${styles.boxSix}`} role="listitem">
        <span className={styles.iconWrap}>
          <IconStatic />
        </span>
        <p className={styles.cardText}>
          Reports or dashboards that used to refresh automatically now sitting
          blank or out of date
        </p>
      </div>
    </div>
  </section>
);

export default AffectedCheck;
