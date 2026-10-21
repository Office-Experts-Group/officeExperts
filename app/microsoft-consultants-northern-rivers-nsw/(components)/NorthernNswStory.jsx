// app/microsoft-consultants-northern-nsw/(components)/NorthernNswStory.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import { milestones } from "../northernNswData";

import styles from "@/styles/northernNswStory.module.scss";

// TODO: if you want the story to name the founders or the town where it began,
// add it to the first paragraph below once confirmed. Nothing here is invented.
const NorthernNswStory = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Left: the story ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Where it started</p>
          <h2 className={styles.heading}>
            Two people, one idea,{" "}
            <span className={styles.headingAccent}>based in rural NSW.</span>
          </h2>
          <p className={styles.text}>
            Office Experts began right here in 2000 as a two-person team. One
            couple working together to help businesses get more from Microsoft
            Office. It has since grown into a national team of consultants and
            programmers, and into six specialist practices covering Excel, Word,
            Access, Power Platform, and the wider Office suite, with AI and
            custom agents now part of the work.
          </p>
          <p className={styles.text}>
            The approach has not changed. We listen to how the work really
            flows, fix the real problem rather than the symptom, and leave you
            able to run it yourself. Northern NSW is where the business began,
            and it matters to us.
          </p>
          <ul className={styles.links}>
            <li>
              <Link href="/about-us" className={styles.link}>
                About Office Experts Group
              </Link>
            </li>
            <li>
              <Link href="/client-testimonials" className={styles.link}>
                Read client testimonials
              </Link>
            </li>
          </ul>
        </div>
      </AnimateOnScroll>

      {/* ── Right: then and now ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.08}>
        <ul className={styles.figures}>
          {milestones.map((m) => (
            <li key={m.id} className={styles.figure}>
              <span className={styles.value}>{m.value}</span>
              <span className={styles.label}>{m.label}</span>
            </li>
          ))}
        </ul>
      </AnimateOnScroll>
    </div>
  </section>
);

export default NorthernNswStory;
