// app/services/by-business-solution/database-development-and-solutions/(components)/SqlServerAzure.jsx
// SQL Server and Azure SQL back ends. A dark "health check" console lists the signs that an
// Access back end has been outgrown, each with a small meter, beside the explanation of what changes.
// Consolidates the old SQL Server, Visual Studio and Azure segments, which repeated each other.
import Link from "next/link";

// Compiled CSS module (source: styles/sqlServerAzure.module.scss)
import styles from "../../../../../styles/sqlServerAzure.module.scss";
const ACCESS_SITE = "https://www.accessexperts.com.au";

// `level` sets the meter fill (1 to 4), purely visual
const signals = [
  { label: "File size creeping towards the 2GB limit", level: 4 },
  { label: "More than 10 to 15 people working at once", level: 3 },
  { label: "Staff need the data from home or other sites", level: 3 },
  { label: "The database is shared through Dropbox or OneDrive", level: 4 },
  { label: "Slow forms and constant compact and repair", level: 2 },
];

// Specialist articles on Access Experts that go deeper on each signal above
const reading = [
  {
    href: `${ACCESS_SITE}/blog/2gb-access-database-limit`,
    text: "The 2GB Access database limit explained",
  },
  {
    href: `${ACCESS_SITE}/blog/access-database-slow-performance`,
    text: "Why your Access database is slow",
  },
  {
    href: `${ACCESS_SITE}/blog/why-dropbox-fails-with-access-databases`,
    text: "Why Dropbox fails with Access databases",
  },
  {
    href: `${ACCESS_SITE}/blog/your-access-database-needs-a-cloud-strategy`,
    text: "Your Access database needs a cloud strategy",
  },
];

const SqlServerAzure = () => {
  return (
    <section className={styles.section} id="sql-server-and-azure">
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>SQL Server and Azure SQL</span>
          <h2 className={styles.heading}>
            When Access needs a{" "}
            <span className={styles.accent}>stronger back end</span>
          </h2>
          <p>
            Access is a great front end, but its native file format has limits.
            Keeping the familiar Access forms and moving the data into SQL
            Server, on your own network or in Azure, removes those limits
            without retraining staff or rebuilding from scratch.
          </p>
        </header>

        <div className={styles.grid}>
          {/* ── Dark health check console (decorative meters, text is readable) ── */}
          <div className={styles.console}>
            <div className={styles.consoleBar}>
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <p>Database health check</p>
            </div>
            <ul className={styles.signals}>
              {signals.map((signal) => (
                <li key={signal.label} className={styles.signal}>
                  <span>{signal.label}</span>
                  {/* Four segment meter, filled up to the signal's level */}
                  <span className={styles.meter} aria-hidden="true">
                    {[1, 2, 3, 4].map((n) => (
                      <i
                        key={n}
                        className={n <= signal.level ? styles.on : undefined}
                      />
                    ))}
                  </span>
                </li>
              ))}
            </ul>
            <p className={styles.consoleNote}>
              Two or more of these usually means it is time to move the back
              end.
            </p>
          </div>

          {/* ── What changes ── */}
          <div className={styles.changes}>
            <div className={styles.change}>
              <h3>On your network or in the cloud</h3>
              <p>
                We connect Access to SQL Server on your own server, or host the
                data in Azure SQL Database so it is backed up, secured and
                available from anywhere with an internet connection.
              </p>
            </div>

            <div className={styles.change}>
              <h3>Heavy lifting moves to the server</h3>
              <p>
                Queries, views and stored procedures run on SQL Server rather
                than across the network, so forms stay quick with hundreds of
                users and millions of rows. See how we build{" "}
                <Link
                  href={`${ACCESS_SITE}/sql-server-backend-business-solutions`}
                  className={styles.link}
                >
                  SQL Server back-end solutions
                </Link>
                .
              </p>
            </div>

            <div className={styles.change}>
              <h3>One database, many front ends</h3>
              <p>
                Once the data lives in SQL Server it can feed{" "}
                <Link
                  href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi"
                  className={styles.link}
                >
                  Power BI reports
                </Link>
                , Power Apps, a customer portal or a{" "}
                <Link
                  href="/services/microsoft-dot-net"
                  className={styles.link}
                >
                  .NET desktop application
                </Link>{" "}
                for organisations that can't install Access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SqlServerAzure;
