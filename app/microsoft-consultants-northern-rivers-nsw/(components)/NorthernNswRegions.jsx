// app/microsoft-consultants-northern-nsw/(components)/NorthernNswRegions.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import { regions, nearby } from "../northernNswData";

import styles from "@/styles/northernNswRegions.module.scss";

// Organised by part of the region rather than by industry, so each block carries
// its own towns and its own local conditions. Wording describes what we can help
// with, not who we have worked for, and makes no claim of a local office.
const NorthernNswRegions = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Header ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Across the region</p>
          <h2 className={styles.heading}>
            Four parts of Northern NSW,{" "}
            <span className={styles.headingAccent}>
              four different economies.
            </span>
          </h2>
          <p className={styles.lead}>
            A café in Byron Bay and a cane grower near Maclean have very
            different problems. Here is where we tend to be asked for help in
            each part of the region.
          </p>
        </div>
      </AnimateOnScroll>

      {/* ── Region cards ── */}
      <ul className={styles.grid}>
        {regions.map((r, i) => (
          <li key={r.id} className={styles.item}>
            <AnimateOnScroll
              animation="fade-up"
              duration={0.55}
              delay={i * 0.05}
            >
              <article className={styles.card}>
                <h3 className={styles.name}>{r.name}</h3>
                <p className={styles.places}>{r.places}</p>
                <p className={styles.body}>{r.body}</p>

                {/* Optional sentence containing one inline link */}
                {r.extra && (
                  <p className={styles.body}>
                    {r.extra.before}
                    <Link href={r.extra.link.href} className={styles.link}>
                      {r.extra.link.label}
                    </Link>
                    {r.extra.after}
                  </p>
                )}

                <ul className={styles.uses} aria-label="Typical tools">
                  {r.uses.map((u) => (
                    <li key={u} className={styles.use}>
                      {u}
                    </li>
                  ))}
                </ul>
              </article>
            </AnimateOnScroll>
          </li>
        ))}
      </ul>

      {/* ── Neighbouring hubs ── */}
      <AnimateOnScroll animation="fade-up" duration={0.5} delay={0.05}>
        <nav className={styles.nearby} aria-label="Nearby locations">
          <p className={styles.nearbyLabel}>
            Working across the border or down the coast?
          </p>
          <ul className={styles.nearbyList}>
            {nearby.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className={styles.link}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </AnimateOnScroll>
    </div>
  </section>
);

export default NorthernNswRegions;
