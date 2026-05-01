// app/services/microsoft-office/upgrades-and-migration/(components)/MigrationProblem.jsx

import Link from "next/link";
import styles from "../../../styles/migrationProblem.module.css";

const signs = [
  {
    title: "Spreadsheets doing the job of a database",
    body: "Critical business data split across multiple Excel files, with no structure, no validation, and no way to scale.",
    link: {
      href: "#stack",
      label: "Excel upgrade options",
    },
  },
  {
    title: "Legacy apps that keep breaking",
    body: "Access databases and VBA-driven tools that struggle after every Office update, or worse, quietly produce wrong results that nobody notices.",
    link: {
      href: "https://www.accessexperts.com.au/upgrades-and-migration",
      label: "Access migration options",
    },
  },
  {
    title: "Data stuck in silos",
    body: "Information spread across SharePoint, email threads, local drives, and third-party tools, with no reliable 'single source of truth'.",
    link: null,
  },
  {
    title: "Manual work that should have been automated years ago",
    body: "Staff copying data between systems, chasing email approvals, running the same reports by hand every week.",
    link: {
      href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate",
      label: "Power Automate Solutions",
    },
  },
  {
    title: "No real visibility",
    body: "Decision-makers working from outdated snapshots. Reports that take too long to build and are out of date the moment they're finished.",
    link: null,
  },
  {
    title: "Fear of changing anything",
    body: "The system is so embedded, so poorly documented and perhaps designed by someone that no longer works for the business, now nobody knows what touching it will break.",
    link: null,
  },
];

const MigrationProblem = () => {
  return (
    <section className={styles.section}>
      {/* ── Top: editorial intro ── */}
      <div className={styles.intro}>
        <div className={styles.introLeft}>
          <p className={styles.eyebrow}>Why businesses get stuck</p>
          <h2 className={styles.heading}>
            Most systems don&rsquo;t fail suddenly.
          </h2>
        </div>
        <div className={styles.introRight}>
          <p>
            They get harder to manage, harder to trust, and harder to change.
            Like a frog in boiling water too often we see outdated systems
            gradually reaching bottlenecks, until they&rsquo;re too fragile to
            touch and too important to replace.
          </p>
          <p>
            It usually starts with a spreadsheet. A small database. An internal
            tool someone built because nothing else existed at the time. Then
            the business grows, requirements shift, and the quick fixes pile up.
            Nobody wants to break what everyone relies on, so it stays held
            together with workarounds and a patchwork of bandaid solutions.
          </p>
          <p>
            We see this constantly across organisations using{" "}
            <Link
              href="https://www.excelexperts.com.au"
              className={styles.inlineLink}
            >
              Microsoft Excel
            </Link>
            ,{" "}
            <Link
              href="https://www.accessexperts.com.au"
              className={styles.inlineLink}
            >
              Access
            </Link>
            , SharePoint, and 365 environments that were never really integrated
            in the first place.
          </p>
        </div>
      </div>

      {/* ── Signs grid ── */}
      <div className={styles.signsBlock}>
        <p className={styles.signsLabel}>
          Signs your system is working against you
        </p>
        <ol className={styles.signs}>
          {signs.map((sign, i) => (
            <li key={sign.title} className={styles.sign}>
              <span className={styles.signNum}>0{i + 1}</span>
              <div className={styles.signContent}>
                <h3>{sign.title}</h3>
                <p>{sign.body}</p>
                {sign.link && (
                  <Link href={sign.link.href} className={styles.signLink}>
                    {sign.link.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* ── Closer: the actual problem ── */}
      <div className={styles.closer}>
        <div className={styles.closerInner}>
          <p className={styles.closerEyebrow}>The actual problem</p>
          <p className={styles.closerText}>
            It&rsquo;s rarely just a software issue. The tools have been pushed
            beyond what they were designed for, and the platforms that could
            have replaced the pain points such as Power Platform, Azure or SQL
            Server were never adopted. Left too long, these issues don&rsquo;t
            just slow teams down. They make it harder to grow, harder to adapt,
            and harder to compete.
          </p>
          <p className={styles.closerSub}>
            The good news is that most of these systems don&rsquo;t need to be
            thrown away. They just need the right approach to evolve into a
            cohesive unit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MigrationProblem;
