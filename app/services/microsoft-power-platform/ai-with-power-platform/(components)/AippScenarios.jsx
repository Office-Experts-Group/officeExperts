// /app/services/microsoft-power-platform/ai-with-power-platform/(components)/AippScenarios.jsx
// Standout section: sticky split scroll. The layer diagram stays pinned on
// the left while the real-world scenarios scroll past on the right.
import Link from "next/link";

import AippStackSvg from "../(svgs)/AippStackSvg";
import {
  AippKnowledgeIcon,
  AippApprovalsIcon,
  AippReportingIcon,
  AippGovernanceIcon,
  AippTriageIcon,
} from "../(svgs)/AippScenarioArt";
import { AippDownArrowIcon, AippPlusIcon } from "../(svgs)/AippIcons";

import styles from "@/styles/aippScenarios.module.scss";

const AIPP_SCENARIOS = [
  {
    id: "knowledge-search",
    title: "Finding the right policy fast",
    Icon: AippKnowledgeIcon,
    tag: "Copilot Studio · SharePoint",
    situation:
      "Policies, SOPs and pricing rules live somewhere in SharePoint, but nobody can find the current version quickly. Staff ask a manager instead, or guess.",
    resolution: (
      <>
        An internal knowledge agent built in{" "}
        <Link href="/services/copilot">Copilot Studio</Link> that answers in
        plain English, cites the source document, and respects the same
        SharePoint permissions already in place.
      </>
    ),
  },
  {
    id: "approvals-automation",
    title: "Approvals that stop waiting in inboxes",
    Icon: AippApprovalsIcon,
    tag: "Power Automate · AI Builder",
    situation:
      "Invoices, leave requests or purchase orders sit in an inbox waiting for a person to read them, decide, and manually update three different systems.",
    resolution: (
      <>
        A{" "}
        <Link href="/services/microsoft-power-platform/microsoft-power-automate">
          Power Automate
        </Link>{" "}
        flow with an AI step that reads the incoming document, extracts the
        relevant data, and either actions it automatically or routes it to the
        right person to approve.
      </>
    ),
  },
  {
    id: "request-triage",
    title: "Requests sorted before anyone reads them",
    Icon: AippTriageIcon,
    tag: "Power Automate · Dataverse · Teams",
    situation:
      "Requests arrive by email and web form, one person reads each one, sorts it by hand and forwards it on. Anything urgent waits its turn.",
    resolution: (
      <>
        A flow with an AI step that classifies each request, pulls out the key
        details, files it in the right list or table and notifies the right
        person in Teams. If a shared inbox is the whole problem, see our{" "}
        <Link href="/services/ai-email-triage">AI email triage</Link>.
      </>
    ),
  },
  {
    id: "readable-reporting",
    title: "Straight answers from a report",
    Icon: AippReportingIcon,
    tag: "Power BI · Copilot Studio",
    situation:
      "The dashboards exist and the data is accurate, but anyone who isn’t fluent in the report can’t get a straight answer without asking someone else first.",
    resolution: (
      <>
        An agent connected to the underlying{" "}
        <Link href="/services/microsoft-power-platform/microsoft-power-bi">
          Power BI
        </Link>{" "}
        dataset so staff can ask a plain-English question, such as what refunds
        looked like last quarter in Victoria, and get an answer instead of a
        request to learn the report.
      </>
    ),
  },
  {
    id: "data-governance",
    title: "AI you can defend to compliance",
    Icon: AippGovernanceIcon,
    tag: "Azure · Dataverse · Governance",
    situation:
      "The business is in finance, legal, health or government. Generic AI tools would work technically, but nobody can confirm what happens to the data once it leaves the building.",
    resolution: (
      <>
        A solution designed on{" "}
        <Link href="/services/cloud-based-solutions-with-azure">Azure</Link> and
        Dataverse from the outset, keeping data inside your tenant boundary,
        applying row-level security to agent permissions, and logging every
        query for audit.
      </>
    ),
  },
];

const AippScenarios = () => {
  return (
    <section
      id="aipp-scenarios"
      className={styles.aippScenarios}
      aria-labelledby="aipp-scenarios-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Real-world scenarios</span>
          <h2 id="aipp-scenarios-heading" className={styles.heading}>
            The problems AI and Power Automate{" "}
            <span className={styles.accent}>actually solve.</span>
          </h2>
          <p className={styles.intro}>
            Not hypothetical use cases. These are the situations that come up
            most often when we sit down with a business and ask where the time
            is really going, and what we build in response.
          </p>
        </header>

        <div className={styles.split}>
          <div className={styles.pinCol}>
            <figure className={styles.pin}>
              <div className={styles.stack}>
                <AippStackSvg />
              </div>
              <figcaption className={styles.pinCaption}>
                Every scenario sits on the same five layers. We build the middle
                two and connect them to what you already have.
              </figcaption>
            </figure>
          </div>

          <ul className={styles.list}>
            {AIPP_SCENARIOS.map(
              ({ id, Icon, tag, title, situation, resolution }, index) => (
                <li key={id} className={styles.item}>
                  <details
                    id={`aipp-scenario-${id}`}
                    className={styles.card}
                    open={index === 0}
                  >
                    <summary className={styles.summary}>
                      <div className={styles.icon}>
                        <Icon />
                      </div>
                      <div className={styles.summaryText}>
                        <span className={styles.tag}>{tag}</span>
                        <h3 className={styles.cardTitle}>{title}</h3>
                      </div>
                      <span className={styles.toggle}>
                        <span className={styles.toggleMore}>Read more</span>
                        <span className={styles.toggleLess}>Show less</span>
                        <AippPlusIcon className={styles.toggleIcon} />
                      </span>
                    </summary>
                    <div className={styles.body}>
                      <div className={styles.block}>
                        <span className={styles.label}>The situation</span>
                        <p className={styles.text}>{situation}</p>
                      </div>
                      <div className={styles.divider} aria-hidden="true">
                        <AippDownArrowIcon />
                      </div>
                      <div className={`${styles.block} ${styles.blockBuild}`}>
                        <span className={styles.label}>What we build</span>
                        <p className={styles.text}>{resolution}</p>
                      </div>
                    </div>
                  </details>
                </li>
              ),
            )}
          </ul>
        </div>

        <div className={styles.foot}>
          <p className={styles.footNote}>
            None of this requires replacing what you already run on. Every
            scenario above sits on top of Microsoft 365, Power Platform or Azure
            you likely already have.
          </p>
          <Link href="#contact" className={styles.footCta}>
            Talk through your scenario
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AippScenarios;
