// app/microsoft-consultants-northern-nsw/(components)/NorthernNswIntro.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import { ways } from "../northernNswData";

import styles from "@/styles/northernNswIntro.module.scss";

const NorthernNswIntro = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Left: who we help and why ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Northern NSW</p>
          <h2 className={styles.headline}>
            Microsoft expertise for Northern NSW,{" "}
            <span className={styles.accentText}>
              from the place we started.
            </span>
          </h2>

          <p className={styles.text}>
            Northern NSW runs on small and medium businesses: growers and
            packers, builders and tradies, clinics, schools, caf&eacute;s and
            studios, and the people who keep them invoiced, rostered and
            compliant. When the spreadsheet only one person understands, the
            database nobody dares touch or the inbox that swallows every morning
            starts to slow things down, that is where we come in.
          </p>
          <p className={styles.text}>
            Office Experts Group has been building and fixing Microsoft
            solutions since 2000, and this is where it began. Today{" "}
            <Link href="/meet-the-team" className={styles.link}>
              our consultants
            </Link>{" "}
            work right across Australia, so a business in Byron Bay, Grafton or
            Armidale is matched with the specialist who suits the job.
          </p>

          <a href="#contact" className="btn">
            Book a free assessment
          </a>
        </div>
      </AnimateOnScroll>

      {/* ── Right: how the work is delivered ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.08}>
        <aside
          className={styles.ways}
          aria-label="How we work with Northern NSW"
        >
          <p className={styles.waysTitle}>How we work with you</p>
          <ul className={styles.list}>
            {ways.map((w) => (
              <li key={w.id} className={styles.way}>
                <h3 className={styles.wayTitle}>{w.title}</h3>
                <p className={styles.wayText}>{w.text}</p>
              </li>
            ))}
          </ul>
        </aside>
      </AnimateOnScroll>
    </div>
  </section>
);

export default NorthernNswIntro;
