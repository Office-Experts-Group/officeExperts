// app/microsoft-consultants-northern-nsw/(components)/NorthernNswPlatforms.jsx
import React from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";
// Shared link wrapper from the services hub: next/link for Office Experts paths,
// a normal anchor for the specialist sister domains
import ServiceLink from "../../services/(components)/ServiceLink";

import { platforms } from "../northernNswData";

import styles from "@/styles/northernNswPlatforms.module.scss";

// One numbered row per Microsoft platform, each with deep links to the most
// relevant pages. AI and custom agents have their own section below.
const NorthernNswPlatforms = () => (
  <section className={styles.section} id="platforms">
    <div className={styles.inner}>
      {/* ── Header ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>What we do</p>
          <h2 className={styles.heading}>
            Every Microsoft platform,{" "}
            <span className={styles.headingAccent}>one team to call.</span>
          </h2>
          <p className={styles.lead}>
            Most Northern NSW businesses use two or three of these at once, and
            the problems usually sit in the gaps between them. Start with
            whichever platform is causing the pain.
          </p>
        </div>
      </AnimateOnScroll>

      {/* ── Platform rows ── */}
      <ol className={styles.rows}>
        {platforms.map((p, i) => (
          <li key={p.id} className={styles.row}>
            <AnimateOnScroll
              animation="fade-up"
              duration={0.55}
              delay={i * 0.03}
            >
              <div className={styles.rowInner}>
                <span className={styles.num} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className={styles.main}>
                  <h3 className={styles.name}>
                    <ServiceLink href={p.href} className={styles.nameLink}>
                      {p.name}
                    </ServiceLink>
                  </h3>
                  <p className={styles.text}>{p.text}</p>
                </div>

                <ul className={styles.links} aria-label={`${p.name} services`}>
                  {p.links.map((l) => (
                    <li key={l.label}>
                      <ServiceLink href={l.href} className={styles.link}>
                        {l.label}
                      </ServiceLink>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default NorthernNswPlatforms;
