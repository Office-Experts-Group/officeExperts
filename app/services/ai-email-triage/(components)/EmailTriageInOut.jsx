// app/services/ai-email-triage/(components)/EmailTriageInOut.jsx

// Compiled CSS module (source: styles/emailTriageInOut.module.scss)
import styles from "../../../../styles/emailTriageInOut.module.css";

// Mail in → triage | mail merge → letters out
import { InboundOutboundSvg } from "../(svgs)/InboundOutboundSvg";

// Cross-links to the Word Experts Mail Merge page (sister site, so plain <a>).
// That page should carry a reciprocal "AI email triage" link back here.
const EmailTriageInOut = () => {
  return (
    <section className={styles.section} id="inbound-and-outbound">
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Triage the emails coming in.{" "}
            <span className={styles.accent}>Automate the emails going out.</span>
          </h2>
          <p className={styles.lead}>
            AI email triage handles the inbound side of email. Many of our
            clients pair it with automated outbound communication: personalised
            letters, statements and bulk emails generated from Excel, Access or
            Dataverse data using Word mail merge. Together they automate both
            ends of your email workload.
          </p>
          <a
            href="https://www.wordexperts.com.au/mail-merge"
            className={styles.cta}
          >
            Explore our Mail Merge services
          </a>
        </div>

        <div className={styles.visual}>
          <InboundOutboundSvg />
        </div>
      </div>
    </section>
  );
};

export default EmailTriageInOut;
