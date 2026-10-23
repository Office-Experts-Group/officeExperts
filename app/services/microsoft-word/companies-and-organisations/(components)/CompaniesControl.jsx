// /services/microsoft-word/companies-and-organisations/(components)/CompaniesControl.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import { PasteFlowSvg } from "../(svgs)/PasteFlowSvg";

import styles from "@/styles/companiesControl.module.scss";

// What the controlled environment does with content. Unordered, so a plain list
const controls = [
  {
    title: "Content from other documents is controlled",
    body: "When someone inserts or pastes content from another file, it arrives under the template’s rules rather than dragging its old formatting along.",
  },
  {
    title: "Unknown formatting defaults to ‘Normal’",
    body: "Anything the template doesn’t recognise falls back to your ‘Normal’ style, instead of introducing a stray font, size or colour.",
  },
  {
    title: "Tables get your table style",
    body: "Tables have the default table style applied for consistent branding, so headers, borders and shading match without any manual fiddling.",
  },
  {
    title: "Pasted text finds the right styles",
    body: "Pasted text looks for default Word styles such as Headings and ‘Normal’, applying your correct styles to them and keeping the document’s structure intact.",
  },
];

// Real projects where a master template approach was used, linked for proof and internal linking
const examples = [
  {
    href: "/case-studies/advisory-branding-template-rollout",
    title: "Eleven sub-templates from one master",
    body: "A single Master Template rebuilt an advisory firm’s whole template suite around its new brand.",
  },
  {
    href: "/case-studies/sporting-organisation-multi-brand-word-template",
    title: "One master, a colour theme per discipline",
    body: "A national sporting organisation keeps its sub-brands consistent from one Word Master Template.",
  },
  {
    href: "/case-studies/government-department-enterprise-office-template-suite",
    title: "Seventeen templates, one ribbon",
    body: "A state transport department’s Word templates stay on-brand with a custom Formatting Control ribbon.",
  },
];

// Small tick used as the list marker; drawn in currentColor
const Tick = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

const Arrow = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 7h8M7 3l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CompaniesControl = () => (
  <section className={styles.section} id="in-control">
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.panel}>
        <div className={styles.top}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>Your templates, your rules</p>
            <h2 className={styles.heading}>
              We&rsquo;ll Put You{" "}
              <span className={styles.headingAccent}>Back In Control!</span>
            </h2>
            <p className={styles.lead}>
              With our master templates, users can create sub templates in house
              under our controlled template environment.
            </p>
            <p className={styles.body}>
              That means your team isn&rsquo;t waiting on a developer every time
              a new report, letter or proposal format is needed. They start from
              the master, create the variation they need, and the controls,
              styles and colour palette come with it. We build them using
              Word&rsquo;s own tools, including{" "}
              <Link href="/services/microsoft-word/custom-toolbars-and-ribbons">
                custom ribbons
              </Link>{" "}
              and{" "}
              <Link href="/services/microsoft-word/quick-parts">
                Quick Parts
              </Link>
              , so there is nothing extra to install or learn.
            </p>
          </div>

          <div className={styles.art}>
            <PasteFlowSvg />
          </div>
        </div>

        <ul className={styles.items}>
          {controls.map((control) => (
            <li key={control.title} className={styles.item}>
              <span className={styles.tick} aria-hidden="true">
                <Tick />
              </span>
              <div className={styles.itemText}>
                <h3 className={styles.itemTitle}>{control.title}</h3>
                <p className={styles.itemBody}>{control.body}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* ── Where this has worked ── */}
        <div className={styles.examples}>
          <p className={styles.examplesLabel}>Where this has worked</p>
          <ul className={styles.exampleList}>
            {examples.map((example) => (
              <li key={example.href}>
                <Link href={example.href} className={styles.example}>
                  <span className={styles.exampleTitle}>{example.title}</span>
                  <span className={styles.exampleBody}>{example.body}</span>
                  <span className={styles.exampleLink}>
                    Read the case study
                    <Arrow />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Closing CTA ── */}
        <div className={styles.ctaRow}>
          {/* Own button style: the global .btn is $accent, which would vanish on this panel */}
          <a href="#contact" className={styles.cta}>
            Talk to our Word experts
          </a>
          <span className={styles.ctaNote}>
            Tell us where your documents are going wrong today.
          </span>
        </div>
      </div>
    </AnimateOnScroll>
  </section>
);

export default CompaniesControl;
