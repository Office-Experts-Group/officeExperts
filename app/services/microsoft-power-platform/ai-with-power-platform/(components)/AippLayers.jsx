// /app/services/microsoft-power-platform/ai-with-power-platform/(components)/AippLayers.jsx
import Link from "next/link";

import { AippAgentArt, AippFlowArt, AippDataArt } from "../(svgs)/AippLayerArt";
import { AippArrowIcon } from "../(svgs)/AippIcons";

import styles from "@/styles/aippLayers.module.scss";

const AippLayers = () => {
  return (
    <section
      id="aipp-layers"
      className={styles.aippLayers}
      aria-labelledby="aipp-layers-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>What we build</span>
          <h2 id="aipp-layers-heading" className={styles.heading}>
            Three ways AI fits{" "}
            <span className={styles.accent}>inside your Power Platform.</span>
          </h2>
        </header>

        <div className={styles.bento}>
          {/* agents: tall feature tile */}
          <article
            className={`${styles.tile} ${styles.accentTile} ${styles.tileAgents}`}
          >
            <div className={styles.art}>
              <AippAgentArt />
            </div>
            <span className={styles.tag}>
              Copilot Studio · SharePoint · Dataverse
            </span>
            <h3 className={styles.tileHeading}>Agents your staff can ask</h3>
            <p className={styles.tileBody}>
              Purpose-built agents that answer staff questions from your own
              documents and data, point to the source of every answer, and only
              show what each person is already allowed to see. They’re built in
              Copilot Studio, so they can sit in Teams, SharePoint or your
              intranet without a separate system to run.
            </p>
            <ul className={styles.points}>
              <li>
                <AippArrowIcon size={13} />
                <span>Knowledge sources chosen with you, not scraped</span>
              </li>
              <li>
                <AippArrowIcon size={13} />
                <span>Existing SharePoint permissions respected</span>
              </li>
              <li>
                <AippArrowIcon size={13} />
                <span>A clear hand-off to a person when it can’t answer</span>
              </li>
            </ul>
            <p className={styles.pointsLabel}>What we set up</p>
            <ul className={styles.points}>
              <li>
                <AippArrowIcon size={13} />
                <span>
                  Instructions and tone that match how you talk to staff
                </span>
              </li>
              <li>
                <AippArrowIcon size={13} />
                <span>
                  Where the agent lives: Teams, SharePoint or intranet
                </span>
              </li>
              <li>
                <AippArrowIcon size={13} />
                <span>Test questions to check answers before launch</span>
              </li>
              <li>
                <AippArrowIcon size={13} />
                <span>Handover and training so your team can maintain it</span>
              </li>
            </ul>
            <Link
              href="/services/ai-agent-development"
              className={styles.tileLink}
            >
              Need a code-first or multi-agent build? See AI agent development{" "}
              <AippArrowIcon />
            </Link>
          </article>

          {/* flows */}
          <article
            className={`${styles.tile} ${styles.darkTile} ${styles.tileFlows}`}
          >
            <div className={styles.art}>
              <AippFlowArt />
            </div>
            <span className={styles.tag}>
              Power Automate · AI Builder · Power Apps
            </span>
            <h3 className={styles.tileHeading}>
              AI steps inside your workflows
            </h3>
            <p className={styles.tileBody}>
              A flow that reads an incoming email, invoice or form, pulls out
              the details, decides what to do, and writes the result to a
              SharePoint list, a Dataverse table or a Teams message. Anything
              that needs a person goes to a person for approval.
            </p>
            <Link href="/services/ai-email-triage" className={styles.tileLink}>
              Working through a busy shared inbox? See AI email triage{" "}
              <AippArrowIcon />
            </Link>
          </article>

          {/* data */}
          <article
            className={`${styles.tile} ${styles.lightTile} ${styles.tileData}`}
          >
            <div className={styles.art}>
              <AippDataArt />
            </div>
            <span className={styles.tag}>
              Azure · Dataverse · Data governance
            </span>
            <h3 className={styles.tileHeading}>AI on data you can defend</h3>
            <p className={styles.tileBody}>
              For finance, legal, health and government, where data residency
              and audit logging are non-negotiable. We design the data layer
              first, so data stays inside your tenant, access follows row-level
              security and queries can be logged. Microsoft’s platform is built
              with security in mind, which is a big part of why it’s long been
              trusted for business systems.
            </p>
            <Link
              href="/services/cloud-based-solutions-with-azure"
              className={styles.tileLink}
            >
              See our Azure cloud solutions <AippArrowIcon />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AippLayers;
