// app/services/microsoft-powerpoint/(components)/PowerPointSupport.jsx

import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/powerPointSupport.module.scss";

import { MortarboardIcon } from "../(svgs)/MortarboardIcon";
import { SupportIcon } from "../(svgs)/SupportIcon";

// Two panels: planned training and on-demand support
const panels = [
  {
    id: "training",
    heading: "User training",
    text: "Our PowerPoint experts show your users the best ways to build presentations, with practical guidance and helpful hints for everyday work.",
    Icon: MortarboardIcon,
    points: [
      "Task specific training",
      "Time and cost effective",
      "Onsite or remote access",
      "Group or individual sessions",
      "“How to” videos produced for your team",
      "Highly experienced trainers",
    ],
  },
  {
    id: "support",
    heading: "Support and troubleshooting",
    text: "Stuck on a presentation? We offer instant help and advice, so small problems do not turn into missed deadlines.",
    Icon: SupportIcon,
    points: [
      "Resolve your issues",
      "Professional guidance",
      "Troubleshoot presentations",
      "Upgrades and migration",
      "Highly experienced consultants",
      "Competitive rates",
    ],
  },
];

const PowerPointSupport = () => (
  <section className={styles.section} id="training">
    <div className={styles.inner}>
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Training and support</p>
          <h2 className={styles.heading}>
            Help when you need it,{" "}
            <span className={styles.accent}>skills that last.</span>
          </h2>
          <p className={styles.lead}>
            Are you struggling with PowerPoint? Do you need some guidance from
            time to time? Via remote access or over the phone, we can offer
            instant help and advice, whether you are an individual or have a
            team of people. You will appreciate having your own dedicated
            consultant available when you need them most.
          </p>
          <Link href="#contact" className={`btn ${styles.cta}`}>
            Get PowerPoint help
          </Link>
        </div>
      </AnimateOnScroll>

      <div className={styles.panels}>
        {panels.map(({ id, heading, text, Icon, points }, i) => (
          <AnimateOnScroll
            key={id}
            animation="fade-up"
            duration={0.6}
            delay={0.05 + i * 0.1}
          >
            <article className={styles.panel}>
              <span className={styles.icon} aria-hidden="true">
                <Icon />
              </span>
              <h3 className={styles.panelHeading}>{heading}</h3>
              <p className={styles.panelText}>{text}</p>
              <ul className={styles.points}>
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default PowerPointSupport;
