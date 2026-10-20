// app/services/by-business-solution/sql-server-and-access-integration/(components)/SqlBenefits.jsx

// Link handles both internal routes and absolute cross-site URLs, so it is used for both
import Link from "next/link";

// Compiled CSS module (source: styles/sqlBenefits.module.scss)
import styles from "@/styles/sqlBenefits.module.scss";
// One line icon per benefit
import {
  SecurityIcon,
  ReliabilityIcon,
  PerformanceIcon,
  ManagementIcon,
} from "../(svgs)/SqlBenefitIcons";

// An unordered ruled list, not numbered steps: these benefits have no sequence.
// A point can be a plain string or JSX when it carries an internal link.
const benefits = [
  {
    title: "Security",
    Icon: SecurityIcon,
    summary:
      "Keep your data secure and centralised, with access controlled at the server rather than in a file anyone can copy.",
    points: [
      "Windows authentication, role-based access and encrypted connections.",
      "Centralised storage means no more data on local drives or shared folders, reducing the risk of accidental loss or theft.",
      "Built-in auditing and security logging help meet business and government data protection requirements.",
    ],
  },
  {
    title: "Reliability",
    Icon: ReliabilityIcon,
    summary:
      "SQL Server removes the database corruption and crashes that plague Access. Your data stays secure, accurate and accessible, even during unexpected power loss or network failures.",
    points: [
      "Transaction-safe operations (ACID compliance) keep your data accurate through power loss or network failure.",
      "Automatic backups and recovery tools protect against data loss.",
      "Transaction logging makes it possible to roll back errors or recover data from a specific point in time.",
      <>
        No more “Database has been corrupted” messages or downtime from bloated
        Access files. Already seeing them? We also offer{" "}
        <Link href="https://www.accessexperts.com.au/access-database-optimisation-and-repair">
          Access database repair and optimisation
        </Link>
        .
      </>,
    ],
  },
  {
    title: "Performance",
    Icon: PerformanceIcon,
    summary:
      "Handle more data, more users and more work without the slowdowns that come with a shared Access file.",
    points: [
      "SQL Server processes queries on the server and sends only the results to Access, which reduces network traffic.",
      "Supports tens or even hundreds of users working concurrently, compared with Access, which begins to slow or corrupt after 10 to 20 users.",
      <>
        Handles databases from a few megabytes to multiple terabytes, well
        beyond the{" "}
        <Link href="https://www.accessexperts.com.au/blog/2gb-access-database-limit">
          2GB Access database limit
        </Link>
        .
      </>,
      <>
        Forms and reports that can take minutes to load now open in seconds. Not
        sure why yours are slow?{" "}
        <Link href="https://www.accessexperts.com.au/blog/access-database-slow-performance">
          Read why Access databases slow down
        </Link>
        .
      </>,
    ],
  },
  {
    title: "Management",
    Icon: ManagementIcon,
    summary:
      "SQL Server Management Studio (SSMS) gives you centralised control of every database operation from one interface, turning administration from a chore into a streamlined process.",
    points: [
      "Schedule automated maintenance tasks.",
      "Monitor performance metrics in real time and adjust tuning parameters without disrupting daily operations.",
      "Built-in auditing and change tracking record data changes, giving you the accountability and compliance documentation needed for regulatory requirements and internal governance.",
    ],
  },
];

const SqlBenefits = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Sticks beside the list on desktop while the rows scroll past */}
        <header className={styles.header}>
          <span className={styles.eyebrow}>Why upgrade</span>
          <h2 className={styles.heading}>
            What you gain with a{" "}
            <span className={styles.accent}>SQL Server backend</span>
          </h2>
          <p className={styles.lead}>
            Access stays as the front end your team already knows. SQL Server
            does the heavy lifting behind it, delivering faster performance,
            stronger data protection and improved reliability.
          </p>
        </header>

        <ul className={styles.list}>
          {benefits.map(({ title, Icon, summary, points }) => (
            <li key={title} className={styles.row}>
              <span className={styles.icon}>
                <Icon />
              </span>
              <div className={styles.content}>
                <h3 className={styles.rowTitle}>{title}</h3>
                <p className={styles.summary}>{summary}</p>
                <ul className={styles.points}>
                  {points.map((point, i) => (
                    <li key={i} className={styles.point}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SqlBenefits;
