// /app/services/microsoft-access/is-access-right-for-your-company/(components)/IarcAssessment.jsx
import React from "react";

import styles from "@/styles/iarcAssessment.module.scss";
import {
  IarcAssessDatabaseArt,
  IarcAssessRequirementsArt,
  IarcAssessOptionsArt,
  IarcAssessPlanArt,
} from "../(svgs)/IarcAssessmentArt";

const IARC_ASSESSMENT = [
  {
    title: "Database assessment",
    text: "We look at what you have today, whether that is a handful of spreadsheets, an Access file or a system that is creaking. We check its structure, size, speed and how people use it.",
    Art: IarcAssessDatabaseArt,
  },
  {
    title: "Business requirements analysis",
    text: "We talk to the people who use it. What do they enter, what do they need out, what slows them down and what will they need in a year or two?",
    Art: IarcAssessRequirementsArt,
  },
  {
    title: "Solution consulting",
    text: "We lay out the realistic options, such as Access, Access with SQL Server or Azure, a Power Platform app or a web app, and the trade-offs of each in plain English.",
    Art: IarcAssessOptionsArt,
  },
  {
    title: "Database strategy planning",
    text: "You get a clear plan: what to build first, how it will be backed up and supported, and when to revisit the decision as the business grows.",
    Art: IarcAssessPlanArt,
  },
];

const IarcAssessment = () => (
  <section
    id="iarc-assessment"
    className={styles.iarcAssessment}
    aria-labelledby="iarc-assessment-heading"
  >
    <div className={styles.inner}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Our Access assessment</p>
        <h2 id="iarc-assessment-heading" className={styles.heading}>
          How we decide{" "}
          <span className={styles.accent}>if Access is right for you</span>
        </h2>
        <p className={styles.lede}>
          We review your data needs, your users and your system compatibility,
          then explain what we found and what we would do about it. No jargon,
          and no assumption that the answer is Access.
        </p>
      </header>

      <ul className={styles.list}>
        {IARC_ASSESSMENT.map(({ title, text, Art }) => (
          <li key={title} className={styles.item}>
            <Art className={styles.art} />
            <h3 className={styles.itemTitle}>{title}</h3>
            <p className={styles.itemText}>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default IarcAssessment;
