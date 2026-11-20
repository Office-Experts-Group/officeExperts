// /app/services/microsoft-access/sql-server-solutions/(components)/SqlsHero.jsx
import React from "react";

import styles from "@/styles/sqlsHero.module.scss";
import SqlsHeroSvg from "../(svgs)/SqlsHeroSvg";
import {
  SqlsArrowIcon,
  SqlsLayersIcon,
  SqlsPeopleIcon,
  SqlsPinIcon,
} from "../(svgs)/SqlsIcons";

const SQLS_TRUST = [
  {
    text: "Remote or on site across Australia and New Zealand",
    Icon: SqlsPinIcon,
  },
  { text: "25+ consultants", Icon: SqlsPeopleIcon },
  { text: "Your Access forms and reports stay", Icon: SqlsLayersIcon },
];

const SqlsHero = () => (
  <section
    id="sqls-hero"
    className={styles.sqlsHero}
    aria-labelledby="sqls-hero-heading"
  >
    <div className={styles.inner}>
      <div className={styles.copy}>
        <h1 id="sqls-hero-heading" className={styles.title}>
          SQL Server Backend <span className={styles.accent}>Solutions</span>
        </h1>
        <p className={styles.lede}>
          Keep the Access forms and reports your team already knows. We move the
          data behind them into SQL Server, so your database stays fast, secure
          and backed up as more people and more records pile on.
        </p>

        <div className={styles.actions}>
          <a href="#contact" className="btn">
            Talk to a SQL Server specialist
          </a>
          <a href="#sqls-migration" className={styles.arrowLink}>
            See how a migration works <SqlsArrowIcon />
          </a>
        </div>

        <ul className={styles.trust}>
          {SQLS_TRUST.map(({ text, Icon }) => (
            <li key={text}>
              <Icon />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.art}>
        <SqlsHeroSvg
          className={styles.svg}
          flowClass={styles.flow}
          liveClass={styles.live}
        />
      </div>
    </div>
  </section>
);

export default SqlsHero;
