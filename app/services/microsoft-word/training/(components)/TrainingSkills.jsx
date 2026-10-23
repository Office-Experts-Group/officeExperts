import React from "react";
import Link from "next/link";
import DocumentSvg from "../(svgs)/DocumentSvg";
import TrainingSvg from "../(svgs)/TrainingSvg";
import EfficiencySvg from "../(svgs)/EfficiencySvg";
import CollabSvg from "../(svgs)/CollabSvg";
import BrandSvg from "../(svgs)/BrandSvg";
import styles from "../../../styles/trainingSkills.module.css";

const skills = [
  {
    Icon: DocumentSvg,
    num: "01",
    title: "Core Word Skills",
    body: (
      <>
        Build a solid foundation with practical training in styles, formatting,
        navigation, and layout control. These essential skills help your staff
        work faster, avoid common errors, and produce documents that look
        professional every time.
      </>
    ),
    chips: ["Styles & formatting", "Page layout", "Navigation panels"],
  },
  {
    Icon: BrandSvg,
    num: "02",
    title: "Template & Branding Mastery",
    body: (
      <>
        Get the most from <Link href="/brand-template">templates</Link>,{" "}
        <Link href="/quick-parts">Quick Parts</Link>, and{" "}
        <Link href="/custom-toolbars-and-ribbons">custom ribbons</Link>. We show
        your team how to maintain brand consistency across every report,
        proposal, and letter, protecting your{" "}
        <Link href="/corporate-identity">corporate identity</Link> at scale.
      </>
    ),
    chips: ["Brand templates", "Quick Parts", "Custom ribbons"],
  },
  {
    Icon: EfficiencySvg,
    num: "03",
    title: "Automation & Efficiency",
    body: (
      <>
        Go beyond the basics with tools that cut repetitive work. From{" "}
        <Link href="/mail-merge">mail merge</Link> and automated numbering to
        introductory{" "}
        <a href="https://www.officeexperts.com.au/services/by-business-solution/vba-macro-development">
          VBA and macros
        </a>
        , we help staff streamline tasks and recover hours each week.
      </>
    ),
    chips: ["Mail merge", "Auto-numbering", "VBA & macros"],
  },
  {
    Icon: CollabSvg,
    num: "04",
    title: "Collaboration & Compliance",
    body: (
      <>
        Improve teamwork and document integrity with training on track changes,
        version control, <Link href="/accessibility">accessibility</Link>{" "}
        features, and template protection. Ensure documents remain accurate,
        compliant, and easy to manage across your organisation.
      </>
    ),
    chips: ["Track changes", "Version control", "Accessibility"],
  },
  {
    Icon: TrainingSvg,
    num: "05",
    title: "How-To Video Resources",
    body: (
      <>
        We produce clear, branded &ldquo;how-to&rdquo; videos your staff can
        reference after training. Reinforcing learning with on-demand resources
        means skills are retained and applied long after the session ends.
      </>
    ),
    chips: ["Branded video guides", "On-demand access", "Skill reinforcement"],
  },
  {
    Icon: DocumentSvg,
    num: "06",
    title: "Group & Individual Sessions",
    body: (
      <>
        Whether you need one-on-one coaching for a senior executive or
        structured group training for an entire department, we tailor every
        session to the specific tasks and challenges your team faces day-to-day.
      </>
    ),
    chips: ["One-on-one coaching", "Team workshops", "Task-specific focus"],
  },
];

const TrainingSkills = () => {
  return (
    <section
      className={styles.section}
      id="word-training"
      style={{ scrollMarginTop: "150px" }}
    >
      <div className={styles.layout}>
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>What We Cover</span>
          <h2 className={styles.heading}>
            Practical Skills for
            <span className={styles.accent}> Smarter Documents</span>
          </h2>
          <p className={styles.intro}>
            High-quality, professionally tailored training for individuals,
            teams, and entire corporations. Our experienced trainers focus on
            practical, task-specific learning that saves time from day one.
          </p>
          <Link href="/contact-us/request-a-quote" className={styles.cta}>
            Request a Quote
          </Link>
        </div>

        <div className={styles.skillList}>
          {skills.map(({ Icon, num, title, body, chips }) => (
            <article key={num} className={styles.row} id={`skill-${num}`}>
              <span className={styles.num} aria-hidden="true">
                {num}
              </span>
              <div className={styles.rowBody}>
                <div className={styles.rowHeader}>
                  <div className={styles.iconWrap}>
                    <Icon width={22} height={22} className={styles.icon} />
                  </div>
                  <h3 className={styles.rowHeading}>{title}</h3>
                </div>
                <p className={styles.rowDesc}>{body}</p>
                <div className={styles.chips}>
                  {chips.map((chip) => (
                    <span key={chip} className={styles.chip}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSkills;
