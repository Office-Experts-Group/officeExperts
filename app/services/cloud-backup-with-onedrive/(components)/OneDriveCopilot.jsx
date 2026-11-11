// app/services/cloud-backup-with-onedrive/(components)/OneDriveCopilot.jsx
// Copilot working inside OneDrive, and why sharing and permissions need cleaning up first.
// Copy and points on the left, permissions-filter illustration on the right. Server component.
// The id is linked from the hero's quick links.
import Link from "next/link";

// SCSS module (source: styles/oneDriveCopilot.module.scss)
import styles from "@/styles/oneDriveCopilot.module.scss";
// Decorative illustration stored with the route
import { CopilotFilesSvg } from "../(svgs)/CopilotFilesSvg";

const points = [
  {
    title: "Agents in OneDrive",
    text: "Group up to 20 files into an agent, saved as an .agent file you can share with colleagues, and ask it questions across the whole project. Needs a Microsoft 365 Copilot licence.",
  },
  {
    title: "Oversharing reports",
    text: "SharePoint Advanced Management is included once you hold a Microsoft 365 Copilot licence, and shows which OneDrive and SharePoint content is shared far wider than it should be.",
  },
  {
    title: "A tidy library first",
    text: "Copilot gives better answers from one current version of a document than from ten years of duplicates named final-v3.",
  },
];

const OneDriveCopilot = () => {
  return (
    <section
      id="onedrive-copilot"
      className={styles.section}
      aria-labelledby="copilot-heading"
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>Copilot and your files</span>
            <h2 id="copilot-heading" className={styles.heading}>
              Copilot reads what your staff can reach.{" "}
              <span className={styles.accent}>
                Make sure that&rsquo;s the right stuff.
              </span>
            </h2>
          </header>

          <div className={styles.body}>
            <p>
              Microsoft 365 Copilot now works directly where files live. In
              OneDrive, staff can summarise a document from its preview,
              compare several files at once, or build an agent that answers
              questions across a whole project folder.
            </p>
            <p>
              Copilot never ignores permissions, but it does make poor
              permissions very easy to find. A spreadsheet shared with
              &ldquo;anyone in the organisation&rdquo; years ago becomes the
              answer to someone&rsquo;s casual question. Before Copilot is
              switched on, we clean up sharing links and review who can see
              what.
            </p>
          </div>

          <ul className={styles.points}>
            {points.map(({ title, text }) => (
              <li key={title} className={styles.point}>
                <h3 className={styles.pointTitle}>{title}</h3>
                <p className={styles.pointText}>{text}</p>
              </li>
            ))}
          </ul>

          <div className={styles.links}>
            <Link href="/services/copilot" className={styles.link}>
              Our Copilot readiness service
            </Link>
            <Link href="/services/ai-agent-development" className={styles.link}>
              Custom AI agents for your files
            </Link>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <CopilotFilesSvg />
        </div>
      </div>
    </section>
  );
};

export default OneDriveCopilot;
