// /app/services/(components)/AccessSection.jsx
// Access and databases: a real data table, with a dark header row like a database view.
// On small screens the table collapses to stacked rows (handled in the stylesheet).
import styles from "../../../styles/accessSection.module.scss";
import ServiceLink from "./ServiceLink";
import { AccessIcon } from "../(svgs)/AccessIcon";

const AccessSection = ({ data }) => {
  const { eyebrow, title, intro, site, columns, rows } = data;

  return (
    <section
      id="access-and-databases"
      className={styles.section}
      aria-labelledby="access-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.icon}>
            <AccessIcon />
          </span>
          <div>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h2 id="access-heading" className={styles.heading}>
              {title}
            </h2>
            <p className={styles.intro}>{intro}</p>
          </div>
        </header>

        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">{columns.service}</th>
              <th scope="col">{columns.helps}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <th scope="row" className={styles.name}>
                  <ServiceLink href={row.href} className={styles.link}>
                    {row.name}
                  </ServiceLink>
                </th>
                <td className={styles.helps}>{row.helps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AccessSection;
