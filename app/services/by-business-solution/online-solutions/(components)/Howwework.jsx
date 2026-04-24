import React from "react";
import Link from "next/link";
import AnimateOnScroll from "../../../../../components/AnimateOnScroll";
import ProcessSteps from "./Processsteps";
import styles from "../../../../../styles/howWeWork.module.css";

const reasons = [
  {
    heading: "One team. The entire Microsoft ecosystem.",
    body: "With over 25 consultants, designers and developers, we cover the full Microsoft stack. Whether the answer is SharePoint, Power Platform, Azure or a custom web application, someone on our team has built it before.",
  },
  {
    heading: "Established in 2000",
    body: "We have been building on Microsoft technologies since before the cloud existed. That depth of experience means we know what works, what does not, and how to avoid the mistakes that cost businesses time and money.",
  },
  {
    heading: "We scope before we charge",
    body: "You will always know what you are getting before any invoice is raised. We take the time to understand your requirements properly and document them clearly, so there are no surprises mid-project.",
  },
  {
    heading: "Support that sticks around",
    body: "Building the solution is just the start. We provide ongoing support, training and improvements if you need us. Many of our clients have been with us for years.",
  },
];

const HowWeWork = () => {
  return (
    <section className={styles.section}>
      {/* ── Top: split headline + reasons grid ── */}
      <div className={styles.topBlock}>
        <AnimateOnScroll animation="slide-left" duration={0.7} delay={0}>
          <div className={styles.leftCol}>
            <span className={styles.eyebrow}>How We Work</span>
            <h2 className={styles.headline}>
              Straightforward process.
              <br />
              <span className={styles.accent}>No surprises.</span>
            </h2>
            <p className={styles.intro}>
              A lot of development projects go wrong not because of bad code,
              but because of poor communication and unclear expectations. We
              have built our process around making sure that does not happen.
            </p>
            <Link href="#contact" className={styles.ctaBtn}>
              Start a conversation
            </Link>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={0.7} delay={0.15}>
          <div className={styles.reasonsGrid}>
            {reasons.map((r, i) => (
              <div key={i} className={styles.reasonCard}>
                <div className={styles.reasonDot} aria-hidden="true" />
                <div>
                  <h3 className={styles.reasonHeading}>{r.heading}</h3>
                  <p className={styles.reasonBody}>{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>

      {/* ── Bottom: process steps (client island for hover) ── */}
      <div className={styles.processBlock}>
        <AnimateOnScroll animation="fade-up" duration={0.6} delay={0}>
          <div className={styles.processHeader}>
            <span className={styles.processLabel}>The process</span>
            <p className={styles.processSub}>
              From first call to ongoing support, here is what working with us
              actually looks like.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={0.7} delay={0.1}>
          <ProcessSteps />
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default HowWeWork;
