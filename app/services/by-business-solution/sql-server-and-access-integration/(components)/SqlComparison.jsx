// app/services/by-business-solution/sql-server-and-access-integration/(components)/SqlComparison.jsx

// Link handles both internal routes and absolute cross-site URLs, so it is used for both
import Link from "next/link";

// Compiled CSS module (source: styles/sqlComparison.module.scss)
import styles from "@/styles/sqlComparison.module.scss";
// Explainer: whole tables over the network vs queries run on the server
import { AccessVsSqlSvg } from "../(svgs)/AccessVsSqlSvg";

// Column order matches the <thead> below. Kept as a real <table> (not cards)
// because answer engines lift comparison tables well.
const columns = [
  "Access only (file back end)",
  "Access with a SQL Server backend",
];

const rows = [
  {
    label: "Concurrent users",
    values: [
      "Begins to slow, or risks corruption, beyond 10 to 20 users",
      "Tens or even hundreds of users working at once",
    ],
  },
  {
    label: "Database size",
    values: [
      "2GB limit per Access database file",
      "From a few megabytes to multiple terabytes",
    ],
  },
  {
    label: "How queries run",
    values: [
      "Data is pulled across the network to each user's PC",
      "Queries run on the server and only the results are sent to Access",
    ],
  },
  {
    label: "Security",
    values: [
      "Anyone who can copy the file can open the data",
      "Windows authentication, role-based access and encrypted connections",
    ],
  },
  {
    label: "Reliability",
    values: [
      "Prone to corruption after crashes, power loss or network failures",
      "Transaction-safe, with automatic backups and recovery tools",
    ],
  },
  {
    label: "Remote and cloud access",
    values: [
      "Difficult outside your own network",
      "Deployed in-house or on Microsoft Azure for secure remote access",
    ],
  },
  {
    label: "Your forms and reports",
    values: [
      "Stay as they are",
      "Stay as they are, linked to the SQL Server tables",
    ],
  },
];

const SqlComparison = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <div className={styles.intro}>
            <h2 className={styles.heading}>
              Access on its own vs{" "}
              <span className={styles.accent}>Access with SQL Server</span>
            </h2>
            <p className={styles.lead}>
              Access is still an excellent front end for forms, reports and
              day-to-day work. The limits show up in the data layer. Here is
              what changes when your tables move to SQL Server.
            </p>
          </div>
          <div className={styles.visual}>
            <AccessVsSqlSvg />
          </div>
        </div>

        {/* tabIndex lets keyboard users scroll the table on narrow screens */}
        <div
          className={styles.tableWrap}
          tabIndex={0}
          role="region"
          aria-label="Comparison of an Access file back end and a SQL Server backend"
        >
          <table className={styles.table}>
            <thead>
              <tr>
                <td />
                {columns.map((col, i) => (
                  <th
                    key={col}
                    scope="col"
                    className={i === 0 ? styles.before : styles.after}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {row.values.map((value, i) => (
                    <td
                      key={`${row.label}-${i}`}
                      className={i === 0 ? styles.before : styles.after}
                    >
                      {/* The cross and tick icons are drawn by the SCSS on .value */}
                      <span className={styles.value}>{value}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.summary}>
          <p className={styles.body}>
            Because Access remains the front end, your team keeps the forms and
            reports they already use. If your database is already struggling,
            our Access specialists can review it and tell you whether SQL Server
            is the right fix, or whether a cleanup is all you need.
          </p>
          <p className={styles.rule}>
            Not sure Access is still the right tool?{" "}
            <Link href="https://www.accessexperts.com.au/is-access-right-for-your-company">
              Find out if Access is right for your company
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default SqlComparison;
