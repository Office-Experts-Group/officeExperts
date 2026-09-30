// app/services/business-analysis/(components)/BusinessAnalysisProblem.jsx

import styles from "../../../../styles/businessAnalysisProblem.module.css";

import { BrokenCodeSvg } from "../(svgs)/BrokenCodeSvg";

// Not sequential, so an unordered list. "tag" is a short visual shorthand
// shown in the left column; the <h3> carries the actual meaning.
const problems = [
  {
    tag: "Fails faster",
    title: "Solutions that automate the wrong process",
    body: "A flow that perfectly replicates a broken manual workflow is still broken. It just fails faster.",
  },
  {
    tag: "Islands",
    title: "Tools that don't talk to each other",
    body: "A Power App here, a Python script there, an AI agent in a third place, each built by a different person with no shared data model.",
  },
  {
    tag: "Afterthought",
    title: "Security and data governance bolted on later",
    body: "Agents with access to data they shouldn't see, spreadsheets holding customer records outside any retention policy, licensing costs nobody budgeted for.",
  },
  {
    tag: "The 10%",
    title: "The edge cases nobody asked about",
    body: "The 10% of transactions that don't follow the happy path, and take up 60% of your team's time.",
  },
  {
    tag: "Orphaned",
    title: "Nobody who can maintain it",
    body: "The person who prompted it into existence has moved on, and there's no documentation of why it works the way it does.",
  },
];

const BusinessAnalysisProblem = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <header className={styles.intro}>
            <span className={styles.eyebrow}>The problem</span>
            <h2 className={styles.heading}>
              Development has never been easier.{" "}
              <span className={styles.muted}>So is making mistakes.</span>
            </h2>
            <p className={styles.lead}>
              AI coding tools, Copilot and low-code platforms have removed most
              of the friction from <em>making</em> software, but they
              haven&apos;t yet got the capability to see the big picture.
              We&apos;re now seeing the results across every sector.
            </p>
          </header>
          <div className={styles.visual}>
            <BrokenCodeSvg />
          </div>
        </div>

        <ul className={styles.list}>
          {problems.map((p) => (
            <li key={p.tag} className={styles.item}>
              {/* Decorative shorthand; hidden so screen readers hear the title first */}
              <span className={styles.tag} aria-hidden="true">
                {p.tag}
              </span>
              <div>
                <h3 className={styles.itemTitle}>{p.title}</h3>
                <p className={styles.itemBody}>{p.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className={styles.closing}>
          None of these are coding problems. They&apos;re analysis problems.
          <br></br>
          <span className={styles.accent}>
            Experienced IT experts know what tools to use, and when.
          </span>
        </p>
      </div>
    </section>
  );
};

export default BusinessAnalysisProblem;
