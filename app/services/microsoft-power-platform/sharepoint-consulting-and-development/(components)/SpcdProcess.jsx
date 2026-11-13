// /app/services/microsoft-power-platform/sharepoint-consulting-and-development/(components)/SpcdProcess.jsx
// Sticky split: the heading and a route of the five phases stay pinned on the
// left (as jump links) while the phase cards scroll past on the right. Plain
// CSS position: sticky, no client JavaScript.
import Link from "next/link";
import SpcdProcessArt from "../(svgs)/SpcdProcessArt";
import { SpcdArrowIcon, SpcdCheckIcon } from "../(svgs)/SpcdIcons";
import styles from "@/styles/spcdProcess.module.scss";

const SPCD_PHASES = [
  {
    id: "assessment",
    label: "Assessment",
    summary: "Understand before anything else.",
    body: "We audit the current environment before any work starts. That can include data volume, site structure, customisations, permissions and compliance requirements. For migrations, it includes mapping workflows, third-party integrations and content that needs restructuring before it moves.",
    note: "Surprises at this stage are manageable. Surprises during cutover are not.",
    outputs: [
      "Current environment audit report",
      "Workflow and integration inventory",
      "Content restructuring requirements",
      "Compliance gap analysis",
    ],
  },
  {
    id: "architecture",
    label: "Architecture & planning",
    summary: "Define what done looks like.",
    body: "The assessment informs the target state: what the environment should look like when the project is done, how it connects to the rest of Microsoft 365, and what the governance framework covers. The migration approach, timeline and phasing are locked in here.",
    note: "Work doesn’t start until there’s a shared picture of what done looks like.",
    outputs: [
      "Target architecture design",
      "Governance framework blueprint",
      "Migration approach and phasing plan",
      "Agreed timeline with milestones",
    ],
  },
  {
    id: "build",
    label: "Migration or build",
    summary: "Execute in confident stages.",
    body: "Migrations run in stages, with test runs beforehand to avoid problems down the track. Content is restructured in transit where needed, workflows are rebuilt in Power Automate, and branding is applied. For new implementations, this is where sites, libraries and the information architecture are built to the agreed design.",
    note: "Staged migrations make cutover a non-event, not a crisis.",
    outputs: [
      "Staged migration with test runs",
      "Content restructured in transit",
      "Workflows rebuilt in Power Automate",
      "Branded sites and library setup",
    ],
    link: {
      href: "/services/microsoft-power-platform/microsoft-power-automate",
      label: "Power Automate workflow services",
    },
  },
  {
    id: "validation",
    label: "Validation & testing",
    summary: "Verify before handover.",
    body: "Before handover we run functional equivalency checks, verify permissions and test performance. Throughout the build we favour the simplest design that will scale. The most complex route is rarely the best one.",
    note: "Permission checks are the step most projects under-resource. We give them the time they need.",
    outputs: [
      "Functional equivalency checks",
      "Permissions verification report",
      "Performance testing results",
      "Stakeholder sign-off documentation",
    ],
  },
  {
    id: "adoption",
    label: "Adoption & support",
    summary: "This doesn’t have to be the end.",
    body: "We can provide end-user training, admin handover documentation and ongoing managed support for organisations that want it. Copilot readiness work often lands here too, if it wasn’t part of the initial project. An environment that works well on day one but becomes a maintenance problem in two years is a project that wasn’t scoped properly.",
    note: "Governance set up at handover is what stops an environment drifting back into disorder.",
    outputs: [
      "End-user training sessions",
      "Admin handover documentation",
      "Copilot readiness remediation",
      "Ongoing managed support (optional)",
    ],
    link: {
      href: "/microsoft-support-and-training-australia",
      label: "Microsoft 365 support and training",
    },
  },
];

const SpcdProcess = () => {
  return (
    <section
      id="spcd-process"
      className={styles.spcdProcess}
      aria-labelledby="spcd-process-heading"
    >
      <div className={styles.inner}>
        {/* ── Pinned column ── */}
        <div className={styles.pinned}>
          <span className={styles.eyebrow}>How we work</span>
          <h2 id="spcd-process-heading" className={styles.heading}>
            How we approach a{" "}
            <span className={styles.accent}>SharePoint engagement.</span>
          </h2>
          <p className={styles.lede}>
            SharePoint projects vary a lot in scope. A tenant-to-tenant
            migration looks nothing like a greenfield intranet build. The
            process underneath stays the same, because the failure modes are
            usually the same: migrating without properly understanding what you
            have, or building without knowing what you&rsquo;re building toward.
          </p>

          <nav className={styles.route} aria-label="Engagement phases">
            <ol>
              {SPCD_PHASES.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#spcd-phase-${id}`} className={styles.routeLink}>
                    <SpcdProcessArt type={id} size={36} />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        {/* ── Scrolling phases ── */}
        <ol className={styles.phases}>
          {SPCD_PHASES.map(
            ({ id, label, summary, body, note, outputs, link }) => (
              <li key={id} id={`spcd-phase-${id}`} className={styles.phase}>
                <div className={styles.phaseHead}>
                  <SpcdProcessArt type={id} />
                  <div>
                    <h3 className={styles.phaseLabel}>{label}</h3>
                    <p className={styles.phaseSummary}>{summary}</p>
                  </div>
                </div>

                <p className={styles.phaseBody}>{body}</p>

                <div className={styles.outputs}>
                  <span className={styles.outputsLabel}>Deliverables</span>
                  <ul>
                    {outputs.map((o) => (
                      <li key={o}>
                        <SpcdCheckIcon className={styles.check} />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className={styles.phaseNote}>{note}</p>

                {link && (
                  <Link href={link.href} className={styles.phaseLink}>
                    {link.label}
                    <SpcdArrowIcon />
                  </Link>
                )}
              </li>
            ),
          )}
        </ol>
      </div>
    </section>
  );
};

export default SpcdProcess;
