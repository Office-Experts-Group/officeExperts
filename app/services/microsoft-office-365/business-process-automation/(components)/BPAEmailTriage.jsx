import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";
import { EmailTriageSvg } from "../(svgs)/EmailTriageSvg";

import styles from "../../../../../styles/bpaEmailTriage.module.scss";

// ─────────────────────────────────────────────
// Inbox type chips
// ─────────────────────────────────────────────
const inboxTypes = ["finance@", "accounts@", "support@", "info@", "orders@"];

// ─────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────
const BPAEmailTriage = () => (
  <section className={styles.section} id="email-triage">
    <div className={styles.grid}>
      {/* ── Left — text content ── */}
      <AnimateOnScroll animation="slide-left" duration={0.8} delay={0}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            AI Builder · Email Intelligence
          </span>

          <h2 className={styles.heading}>
            Your shared inbox shouldn&rsquo;t need{" "}
            <span>a full-time person.</span>
          </h2>

          <p className={styles.body}>
            Finance teams, procurement desks, and customer service queues all
            face the same problem: a shared inbox receiving hundreds of emails a
            day, requiring someone to read, categorise, and distribute every
            one. It is slow, error-prone, and one of the clearest targets for AI
            automation in 2026.
          </p>

          <p className={styles.body}>
            We build AI email triage flows that classify incoming emails by
            intent and urgency, route each item to the right place, and handle
            routine items automatically before anyone needs to open the inbox.
          </p>

          <div className={styles.divider} aria-hidden="true" />

          {/* How it works — inline prose, no bullets */}
          <p className={styles.howLabel}>How it works</p>
          <p className={styles.howBody}>
            Every email entering the shared mailbox is passed through a text
            classification model the moment it arrives. The model detects
            intent, it may be an invoice submission, payment query, order
            enquiry, or just a general question. The email is given a score
            urgency based on language signals, sender history, and subject line
            keywords. High-priority items trigger an immediate Teams
            notification to the right person. Routine items are routed to a
            queue, logged to SharePoint, and if required can be handled with a
            traditional automated reply.
          </p>

          {/* Target inbox chips */}
          <div className={styles.inboxBlock}>
            <p className={styles.inboxLabel}>Works on any shared mailbox</p>
            <ul
              className={styles.inboxList}
              aria-label="Target shared inbox types"
            >
              {inboxTypes.map((inbox) => (
                <li key={inbox} className={styles.inboxChip}>
                  {inbox}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.divider} aria-hidden="true" />

          {/* CTA */}
          <div className={styles.ctaBlock}>
            <Link
              href="#contact"
              className="btn"
              style={{ textTransform: "capitalize" }}
            >
              <span>Talk to us about email triage</span>
            </Link>
          </div>
        </div>
      </AnimateOnScroll>

      {/* ── Right — animated SVG ── */}
      <AnimateOnScroll animation="fade-up" duration={0.9} delay={0.15}>
        <div className={styles.visual}>
          <div className={styles.svgWrap}>
            <EmailTriageSvg />
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default BPAEmailTriage;
