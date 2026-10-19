// app/services/by-business-solution/database-development-and-solutions/(components)/DatabaseChooser.jsx
// Decision matrix comparing the four platforms we build on, with a dot scale for growth headroom.
// Folds in the old SharePoint segment (now SharePoint lists and Dataverse with Power Apps).
// A real <table> so the comparison is readable by screen readers and answer engines.
import Link from "next/link";

// Compiled CSS module (source: styles/databaseChooser.module.scss)
import styles from "../../../../../styles/databaseChooser.module.scss";
// Column headings, each linking to the page that covers that platform in depth
const platforms = [
  { name: "Microsoft Access", href: "https://www.accessexperts.com.au" },
  {
    name: "Access + SQL Server or Azure",
    href: "/services/by-business-solution/sql-server-and-access-integration",
  },
  {
    name: "SharePoint, Dataverse + Power Apps",
    href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps",
  },
  {
    name: "Web database + custom app",
    href: "/services/microsoft-office-365/app-and-custom-development",
  },
];

// One entry per row; `values` lines up with the platform columns above
const rows = [
  {
    label: "People at once",
    values: [
      "Up to about 10 to 15",
      "Hundreds",
      "Organisation-wide",
      "Unlimited, including the public",
    ],
  },
  {
    label: "Works from",
    values: [
      "Office network",
      "Office, remote and cloud",
      "Anywhere via Microsoft 365",
      "Any browser or phone",
    ],
  },
  {
    label: "Licensing",
    values: [
      "Included in many Microsoft 365 plans, free Runtime",
      "SQL Server Express is free, Azure SQL is billed monthly",
      "Microsoft 365, premium licences for Dataverse",
      "Hosting and usage based",
    ],
  },
  {
    label: "Best for",
    values: [
      "Small teams replacing spreadsheets",
      "Growing databases that keep their Access forms",
      "Approvals, lists and forms inside Microsoft 365",
      "Customer portals, mobile apps and resellable products",
    ],
  },
];

// Growth headroom on a 1 to 4 scale, shown as dots
const scale = [1, 2, 3, 4];

const DatabaseChooser = () => {
  return (
    <section className={styles.section} id="choosing-a-database">
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Choosing the right platform</span>
          <h2 className={styles.heading}>
            Which database{" "}
            <span className={styles.accent}>fits your business?</span>
          </h2>
          <p>
            There is no single right answer. The best platform depends on how
            many people use it, where they work from, what it needs to connect
            to and who looks after it afterwards. Here is how the options we
            build on compare. If your team already lives in Microsoft 365,{" "}
            <Link
              href="https://www.powerplatformexperts.com.au/sharepoint-consulting-and-development"
              className={styles.link}
            >
              SharePoint lists and Power Apps
            </Link>{" "}
            are often the quickest win.
          </p>
        </header>

        {/* Wrapper scrolls sideways on small screens so the table keeps its shape */}
        <div className={styles.scroller}>
          <table className={styles.table}>
            <thead>
              <tr>
                <td aria-hidden="true" />
                {platforms.map((p) => (
                  <th key={p.name} scope="col">
                    <Link href={p.href} className={styles.link}>
                      {p.name}
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {row.values.map((value, i) => (
                    <td key={platforms[i].name}>{value}</td>
                  ))}
                </tr>
              ))}
              <tr>
                <th scope="row">Room to grow</th>
                {scale.map((level) => (
                  <td key={level}>
                    {/* Visually hidden text gives screen readers the rating */}
                    <span className={styles.srOnly}>{level} out of 4</span>
                    <span className={styles.dots} aria-hidden="true">
                      {scale.map((n) => (
                        <i
                          key={n}
                          className={n <= level ? styles.filled : undefined}
                        />
                      ))}
                    </span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DatabaseChooser;
