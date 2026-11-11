// app/services/cloud-based-solutions-with-azure/(components)/AzureSharePoint.jsx
// SharePoint and Microsoft 365. Replaces PageSegment5, updated from "Office 365" to Microsoft 365
// and expanded with the document management, approvals and list work we actually deliver.
// The id keeps the original capital P so existing links to #sharePoint-solutions still work.
import Link from "next/link";

// SCSS module (source: styles/azureSharePoint.module.scss)
import styles from "@/styles/azureSharePoint.module.scss";
// Custom illustration: a document library with version history and an approval flow
import { SharePointLibrarySvg } from "../(svgs)/SharePointLibrarySvg";

const capabilities = [
  {
    title: "Document management",
    text: "Libraries with version history, metadata and retention rules, so the version people open is always the right one.",
  },
  {
    title: "Automated approvals",
    text: "Power Automate flows that route documents and requests for sign-off, and record who approved what and when.",
  },
  {
    title: "Lists and simple apps",
    text: "SharePoint lists with Power Apps front ends for registers, requests and lightweight databases inside Microsoft 365.",
  },
];

const AzureSharePoint = () => {
  return (
    <section className={styles.section} id="sharePoint-solutions">
      <div className={styles.inner}>
        {/* ── Left: content ── */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>SharePoint and Microsoft 365</span>
          <h2 className={styles.heading}>
            SharePoint does more than{" "}
            <span className={styles.accent}>store your documents</span>
          </h2>
          <p className={styles.intro}>
            SharePoint comes with most Microsoft 365 business plans, yet many
            organisations only use it as a shared drive. Set up properly, it
            captures who changed a document, which version is current and what it
            relates to, then automates the business processes around it.
          </p>

          <dl className={styles.capabilities}>
            {capabilities.map((item) => (
              <div key={item.title} className={styles.capability}>
                <dt>{item.title}</dt>
                <dd>{item.text}</dd>
              </div>
            ))}
          </dl>

          <p className={styles.closing}>
            Still running files from a local server? We can move your business to
            Microsoft 365 for a truly mobile office, with the cost depending on
            your requirements. Our{" "}
            <Link href="https://www.powerplatformexperts.com.au/sharepoint-consulting-and-development">
              SharePoint consulting and development
            </Link>{" "}
            team and{" "}
            <Link href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps">
              Power Apps developers
            </Link>{" "}
            handle the build.
          </p>
        </div>

        {/* ── Right: illustration ── */}
        <div className={styles.visual}>
          <SharePointLibrarySvg />
        </div>
      </div>
    </section>
  );
};

export default AzureSharePoint;
