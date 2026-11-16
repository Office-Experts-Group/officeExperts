// /app/services/microsoft-power-platform/ai-with-power-platform/(components)/AippRoute.jsx
import Link from "next/link";

import {
  AippCopilotRouteArt,
  AippPlatformRouteArt,
  AippCodeRouteArt,
  AippInboxRouteArt,
} from "../(svgs)/AippRouteArt";
import { AippArrowIcon } from "../(svgs)/AippIcons";

import styles from "@/styles/aippRoute.module.scss";

const AIPP_ROUTES = [
  {
    id: "copilot",
    Art: AippCopilotRouteArt,
    goal: "Get more out of the Microsoft 365 Copilot you already license",
    start: "Copilot services",
    href: "/services/copilot",
    fit: "Rollout, configuration, permissions review and role-based training for your teams.",
  },
  {
    id: "platform",
    Art: AippPlatformRouteArt,
    goal: "Put AI inside your forms, flows, apps and reports, working on your own data",
    start: "This page: AI with Power Platform",
    href: null,
    fit: "Reading documents, routine decisions, staff Q&A on SharePoint and Dataverse, and governed data.",
  },
  {
    id: "agents",
    Art: AippCodeRouteArt,
    goal: "Build something bespoke, such as multi-agent systems, custom models or API-heavy builds",
    start: "AI agent development",
    href: "/services/ai-agent-development",
    fit: "Larger or more specialised builds that go beyond what low-code does comfortably.",
  },
  {
    id: "inbox",
    Art: AippInboxRouteArt,
    goal: "Sort, summarise and answer a busy shared inbox",
    start: "AI email triage",
    href: "/services/ai-email-triage",
    fit: "Teams whose work arrives mainly by email.",
  },
];

const AippRoute = () => {
  return (
    <section
      id="aipp-route"
      className={styles.aippRoute}
      aria-labelledby="aipp-route-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Which service fits</span>
          <h2 id="aipp-route-heading" className={styles.heading}>
            Not sure where to start?{" "}
            <span className={styles.accent}>Start with your goal.</span>
          </h2>
          <p className={styles.body}>
            We offer several AI services, and they suit different jobs. This is
            how we’d point you, and where this page ends and the others begin.
          </p>
        </header>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <caption className={styles.visuallyHidden}>
              AI services and when to start with each
            </caption>
            <thead>
              <tr>
                <th scope="col">If your goal is to…</th>
                <th scope="col">Start with</th>
                <th scope="col">Best for</th>
              </tr>
            </thead>
            <tbody>
              {AIPP_ROUTES.map(({ id, Art, goal, start, href, fit }) => (
                <tr key={id} className={href ? undefined : styles.currentRow}>
                  <th scope="row" className={styles.goalCell}>
                    <span className={styles.rowIcon}>
                      <Art />
                    </span>
                    <span className={styles.goalText}>{goal}</span>
                  </th>
                  <td data-label="Start with" className={styles.startCell}>
                    {href ? (
                      <Link href={href} className={styles.startLink}>
                        {start} <AippArrowIcon />
                      </Link>
                    ) : (
                      <span className={styles.here}>{start}</span>
                    )}
                  </td>
                  <td data-label="Best for">{fit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AippRoute;
