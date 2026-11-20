// /app/services/microsoft-access/access-database-optimisation-and-repair/(components)/AorHero.jsx
import React from "react";
import Link from "next/link";

import AorHeroSvg from "../(svgs)/AorHeroSvg";
import {
  ArrowIcon,
  ExperienceIcon,
  RestoredIcon,
  AustraliaIcon,
} from "../(svgs)/AorIcons";

import styles from "@/styles/aorHero.module.scss";

const AOR_TRUST = [
  { icon: <ExperienceIcon />, text: "25+ years fixing Access databases" },
  { icon: <RestoredIcon />, text: "Hundreds of databases restored" },
  { icon: <AustraliaIcon />, text: "Support Australia-wide" },
];

const AorHero = () => {
  return (
    <section className={styles.aorHero} aria-labelledby="aor-hero-heading">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1 id="aor-hero-heading" className={styles.title}>
            Optimising &amp; Repairing{" "}
            <span className={styles.accent}>Slow Databases</span>
          </h1>
          <p className={styles.lede}>
            Is your Access database crawling, crashing or showing strange
            errors? We find out why, then fix it. That might mean trimming a
            bloated file, repairing corruption, tuning slow queries and code, or
            moving the data to a stronger backend once Access has done all it
            can. You keep the database your team already knows. It just stops
            getting in the way.
          </p>
          <div className={styles.actions}>
            <Link href="#contact" className="btn">
              Get my database checked
            </Link>
            <Link href="#aor-services" className={styles.arrowLink}>
              See how we fix slow databases <ArrowIcon />
            </Link>
          </div>
          <ul className={styles.trust}>
            {AOR_TRUST.map((item) => (
              <li key={item.text}>
                <span className={styles.trustIcon}>{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.visual}>
          <AorHeroSvg flowClass={styles.flow} liveClass={styles.live} />
        </div>
      </div>
    </section>
  );
};

export default AorHero;
