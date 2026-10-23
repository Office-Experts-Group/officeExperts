// app/fill-in-forms/(components)/Segment4Repeat.jsx

import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import { RealWorldFormsSVG } from "../(svgs)/RealWorldFormsSVG";

import styles from "../../../styles/formBuilding.module.css";
import { Span } from "next/dist/trace";

const scenarios = [
  {
    tag: "Staff intake",
    body: "An onboarding pack that's been filled in by hand or edited freehand for years, rebuilt as a locked form so new starters can't accidentally overwrite a heading or a table.",
  },
  {
    tag: "Compliance & audit",
    body: "Site inspection and audit checklists with mandatory fields, so a form can't be marked complete until every required check box has genuinely been ticked.",
  },
  {
    tag: "Client-facing intake",
    body: "Application and referral forms shared outside your organisation, built to stay on-brand and legible on any device the recipient happens to open it on.",
  },
];

const Segment4Repeat = () => {
  return (
    <div className="animate-wrapper">
      <section className={styles.section}>
        <div className={styles.intro}>
          <AnimateOnScroll animation="fade-up" duration={0.7} delay={0}>
            <p>We Work From What You Already Have</p>
            <h2>
              Built From Your Existing Document,{" "}
              <span className={styles.accent}>Not From Scratch</span>
            </h2>
            <p className={styles.introBody}>
              Most of the forms we build start life as something you already
              use, a <Link href="/brand-template">Word template</Link>, a
              printed checklist, or an old{" "}
              <Link href="/popup-forms">popup form</Link> that&rsquo;s become
              awkward to maintain. We rebuild it as a proper fill-in form
              without losing the branding, tone or layout that your staff and
              clients already recognise.
            </p>
          </AnimateOnScroll>
        </div>

        <div className={styles.body}>
          <div className={styles.svgWrapper}>
            <RealWorldFormsSVG />
          </div>

          <div className={styles.scenarios}>
            {scenarios.map((scenario, i) => (
              <AnimateOnScroll
                key={scenario.tag}
                animation="fade-up"
                duration={0.55}
                delay={0.15 + i * 0.1}
              >
                <div className={styles.scenario}>
                  <span className={styles.scenarioTag}>{scenario.tag}</span>
                  <p className={styles.scenarioBody}>{scenario.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Segment4Repeat;
