// app/microsoft-consultants-adelaide/(components)/AdelaideIntro.jsx
import React from "react";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import AdelaideMap from "../(svgs)/AdelaideMap";

import styles from "@/styles/adelaideIntro.module.scss";

// What we cover, in the same plain terms a client would use
const facts = [
  {
    label: "Hours",
    value:
      "We schedule around Adelaide business hours, including the half-hour difference with the eastern states.",
  },
  {
    label: "Delivery",
    value:
      "Remote-first with screen-share workshops. In person only when it genuinely helps, by arrangement.",
  },
  {
    label: "Reach",
    value:
      "Adelaide CBD, North Adelaide, Port Adelaide, Glenelg, Mawson Lakes, Tonsley, the Hills and regional South Australia.",
  },
  {
    label: "Platforms",
    value:
      "Excel, Word, Access, PowerPoint, Power Platform, Microsoft 365, plus AI and custom agent building.",
  },
];

const steps = [
  {
    n: "01",
    title: "Free assessment",
    body: "A short call about what is slowing the business down and how the work really flows.",
  },
  {
    n: "02",
    title: "Clear proposal",
    body: "The options, the effort and the likely cost, written down before anything is built.",
  },
  {
    n: "03",
    title: "Build and test with you",
    body: "Small releases you can try early, so what we deliver matches how your team works.",
  },
  {
    n: "04",
    title: "Handover and support",
    body: "Documentation and training, with ongoing support available if you want it.",
  },
];

const AdelaideIntro = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Headline ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.head}>
          <h2 className={styles.headline}>
            Professional Support For{" "}
            <span className={styles.accentText}>Adelaide Businesses</span>
          </h2>
        </div>
      </AnimateOnScroll>

      {/* ── Lead + spec sheet ── */}
      <div className={styles.split}>
        <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.05}>
          <div className={styles.copy}>
            <p className={styles.lead}>
              Office Experts Group has been building and improving Microsoft
              solutions for Australian businesses since 2000. From Excel
              spreadsheets and Access databases to Power Platform applications
              and AI automation, our consultants help Adelaide businesses solve
              practical problems and get more out of the software they already
              use.
            </p>
            <p className={styles.body}>
              Our team works across Australia, with specialist consultants
              matched to the requirements of each project. Most work is
              delivered remotely through Teams meetings and shared files, with
              local support available when needed.
            </p>
            <div className={styles.ctaRow}>
              <a href="#contact" className={styles.btn}>
                Book a free assessment
              </a>
              <span className={styles.ctaNote}>
                No obligation. Plain-English advice.
              </span>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.1}>
          <div className={styles.mapCard}>
            <AdelaideMap />
          </div>
        </AnimateOnScroll>
      </div>

      {/* ── How an engagement runs ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.05}>
        <div className={styles.process}>
          <p className={styles.processTitle}>How a project runs</p>
          <ol className={styles.steps}>
            {steps.map((s) => (
              <li key={s.n} className={styles.step}>
                <span className={styles.stepNum}>{s.n}</span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepBody}>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default AdelaideIntro;
