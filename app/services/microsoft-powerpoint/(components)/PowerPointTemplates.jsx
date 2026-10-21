// app/services/microsoft-powerpoint/(components)/PowerPointTemplates.jsx

import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/powerPointTemplates.module.scss";

// Diagram of one master slide feeding three layouts
import { MasterSlideSvg } from "../(svgs)/MasterSlideSvg";
import { ArrowIcon } from "../(svgs)/ArrowIcon";

// What a template project covers (merged from the old template and redesign pages)
const covers = [
  "Corporate identity",
  "Corporate styles",
  "Themes",
  "Master slides",
  "Custom layouts",
  "Onsite or offsite",
];

const PowerPointTemplates = () => (
  // id is the jump target from the intro and the /services hub
  <section className={styles.section} id="templates">
    <div className={styles.inner}>
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Templates and master slides</p>
          <h2 className={styles.heading}>
            Professional templates that keep every deck{" "}
            <span className={styles.accent}>on brand.</span>
          </h2>
          <p className={styles.body}>
            Our PowerPoint experts create professional templates with master
            slides that meet your brand guidelines and keep your corporate
            presentations consistent, whoever builds them.
          </p>
          <p className={styles.body}>
            A good template does the formatting for you. Colours, fonts, logos
            and layouts are set once in the master, so your people can
            concentrate on the story rather than fighting the slide.
          </p>

          <ul className={styles.list}>
            {covers.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Link
            href="/case-studies/advisory-branding-template-rollout"
            className={styles.link}
          >
            How we rolled out on-brand templates for an advisory firm
            <ArrowIcon />
          </Link>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.1}>
        <div className={styles.visual}>
          <MasterSlideSvg />
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default PowerPointTemplates;
