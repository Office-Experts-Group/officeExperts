// /app/services/microsoft-power-platform/sharepoint-consulting-and-development/(components)/SpcdCopilot.jsx
import Link from "next/link";
import SpcdCopilotSvg from "../(svgs)/SpcdCopilotSvg";
import SpcdCopilotArt from "../(svgs)/SpcdCopilotArt";
import styles from "@/styles/spcdCopilot.module.scss";

const SPCD_BLOCKERS = [
  {
    art: "oversharing",
    label: "Oversharing",
    detail:
      "Content open to far more people than intended. Copilot respects permissions, so if a file is shared with everyone, anyone can be shown it in an answer.",
  },
  {
    art: "outdated",
    label: "Outdated & duplicate files",
    detail:
      "Copilot can treat old documents as current. If your libraries haven’t been reviewed in years, neither have the answers Copilot gives.",
  },
  {
    art: "classic",
    label: "Classic SharePoint sites",
    detail:
      "Content in old classic sites and deep folder trees tends to be harder for Copilot to find and use well. Modern sites with clear structure and metadata give it far more to work with.",
  },
];

const SPCD_TOOLS = [
  {
    art: "adminAgent",
    label: "SharePoint Admin Agent",
    body: "An AI assistant for SharePoint admins that helps with governance work like spotting oversharing, ownerless sites and site sprawl. It relies on Microsoft 365 Copilot licensing, so we check that first.",
  },
  {
    art: "autoTag",
    label: "AI metadata tagging",
    body: "Autofill columns and AI document processing classify and tag content, so organisation doesn’t depend on every user doing it consistently. We confirm which features your licences include.",
  },
];

const SpcdCopilot = () => {
  return (
    <section
      id="spcd-copilot"
      className={styles.spcdCopilot}
      aria-labelledby="spcd-copilot-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Microsoft 365 Copilot</span>
          <h2 id="spcd-copilot-heading" className={styles.heading}>
            Is your SharePoint{" "}
            <span className={styles.accent}>ready for Copilot?</span>
          </h2>
          <p className={styles.lede}>
            Microsoft&nbsp;365 Copilot doesn&rsquo;t have its own knowledge
            base. It reads yours. When someone asks Copilot a question, it pulls
            answers from the SharePoint content that person has access to. What
            comes back is only as good as what&rsquo;s there.
          </p>
        </header>

        <div className={styles.body}>
          <figure className={styles.figure}>
            <div className={styles.diagramScroll}>
              <div className={styles.diagramInner}>
                <SpcdCopilotSvg />
              </div>
            </div>
          </figure>

          <div className={styles.blockerCol}>
            <h3 className={styles.colLabel}>What we find during assessments</h3>
            <ul className={styles.blockers}>
              {SPCD_BLOCKERS.map(({ art, label, detail }) => (
                <li key={art} className={styles.blocker}>
                  <SpcdCopilotArt type={art} />
                  <div>
                    <h4 className={styles.blockerLabel}>{label}</h4>
                    <p className={styles.blockerDetail}>{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className={styles.toolsLabel}>Tools we use to fix it</h3>
        <ul className={styles.tools}>
          {SPCD_TOOLS.map(({ art, label, body }) => (
            <li key={art} className={styles.tool}>
              <SpcdCopilotArt type={art} />
              <h4 className={styles.toolTitle}>{label}</h4>
              <p className={styles.toolBody}>{body}</p>
            </li>
          ))}
          <li className={`${styles.tool} ${styles.accentTile}`}>
            <SpcdCopilotArt type="assessment" />
            <h4 className={styles.toolTitle}>Copilot readiness assessment</h4>
            <p className={styles.toolBody}>
              We audit your environment, identify what&rsquo;s blocking a clean
              rollout, and produce a remediation plan before Copilot goes live.
            </p>
            <Link href="#contact" className={`btn ${styles.toolCta}`}>
              Book an assessment
            </Link>
          </li>
        </ul>

        <p className={styles.footnote}>
          Planning the rollout itself? See our{" "}
          <Link href="/services/copilot">
            Microsoft&nbsp;365 Copilot services
          </Link>{" "}
          or{" "}
          <Link href="/services/ai-agent-development">
            AI agent development
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default SpcdCopilot;
