import React from "react";
import styles from "../../../styles/automationImpact.module.css";

const scenarios = [
  {
    before:
      "Manually copying client names, addresses and project details into each new proposal taking 25 minutes per document.",
    after:
      "A single data-entry form populates every field across the entire document in seconds.",
  },
  {
    before:
      "Inserting a landscape page mid-document breaks the header, footer, and page numbering every time.",
    after:
      "One button click inserts a correctly formatted landscape section with matching header and footer automatically.",
  },
  {
    before:
      "Each staff member applies their own formatting interpretation, producing inconsistent documents sent to clients.",
    after:
      "A locked template enforces brand standards. Every document looks identical, regardless of who creates it.",
  },
  {
    before:
      "Compiling monthly reports means copying data from multiple spreadsheets, reformatting tables, and re-checking page numbers.",
    after:
      "A macro pulls the data, builds the tables, and outputs a finished, print-ready document.",
  },
];

// const PulseIcon = () => (
//   <svg
//     className={styles.pulsesvg}
//     viewBox="0 0 360 480"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     aria-hidden="true"
//   >
//     {/* Outer rings — concentric, pulsing at different phases */}
//     <circle
//       cx="180"
//       cy="240"
//       r="180"
//       stroke="currentColor"
//       strokeWidth="1"
//       className={styles.ring}
//       style={{ "--delay": "0s" }}
//     />
//     <circle
//       cx="180"
//       cy="240"
//       r="140"
//       stroke="currentColor"
//       strokeWidth="1"
//       className={styles.ring}
//       style={{ "--delay": "0.4s" }}
//     />
//     <circle
//       cx="180"
//       cy="240"
//       r="100"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       className={styles.ring}
//       style={{ "--delay": "0.8s" }}
//     />
//     <circle
//       cx="180"
//       cy="240"
//       r="62"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       className={styles.ring}
//       style={{ "--delay": "1.2s" }}
//     />

//     {/* Inner document motif */}
//     <rect
//       x="148"
//       y="204"
//       width="64"
//       height="80"
//       rx="4"
//       stroke="currentColor"
//       strokeWidth="2"
//     />
//     <line
//       x1="160"
//       y1="222"
//       x2="200"
//       y2="222"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//     />
//     <line
//       x1="160"
//       y1="234"
//       x2="200"
//       y2="234"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//     />
//     <line
//       x1="160"
//       y1="246"
//       x2="188"
//       y2="246"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//     />

//     {/* Spark / cursor */}
//     <path
//       d="M180 262 l6 14 3-6 6 3-9-14z"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinejoin="round"
//     />

//     {/* Cross-hairs on rings — subtle position markers */}
//     <line
//       x1="180"
//       y1="56"
//       x2="180"
//       y2="66"
//       stroke="currentColor"
//       strokeWidth="1"
//       strokeLinecap="round"
//       opacity="0.5"
//     />
//     <line
//       x1="180"
//       y1="414"
//       x2="180"
//       y2="424"
//       stroke="currentColor"
//       strokeWidth="1"
//       strokeLinecap="round"
//       opacity="0.5"
//     />
//     <line
//       x1="0"
//       y1="240"
//       x2="10"
//       y2="240"
//       stroke="currentColor"
//       strokeWidth="1"
//       strokeLinecap="round"
//       opacity="0.5"
//     />
//     <line
//       x1="350"
//       y1="240"
//       x2="360"
//       y2="240"
//       stroke="currentColor"
//       strokeWidth="1"
//       strokeLinecap="round"
//       opacity="0.5"
//     />
//   </svg>
// );

const PageSegmentImpact = () => (
  <section className={styles.wrapper}>
    <div className={styles.inner}>
      <div className={styles.headerCol}>
        <p className={styles.eyebrow}>Real Business Outcomes</p>
        <h2 className={styles.heading}>
          What Automation{" "}
          <span className={styles.accent}>Actually Looks Like</span>
        </h2>
        <p className={styles.subheading}>
          Document automation might sound like a buzzword, something that can
          over complicate your existing system, but it is most often built with
          the standard tools already available inside Microsoft Word. We use VBA
          macros to execute multi-step tasks at the click of a button, Building
          Blocks to insert pre-formatted content instantly, Content Controls to
          guide users through structured data entry, and field codes to keep
          dynamic content like dates, titles, and page numbers always current.
          The result is an easy to use solution that when correctly implemented
          frees up time and quickly feels like an essential part of your
          workplace.
        </p>
      </div>

      {/* <PulseIcon /> */}
    </div>

    <div className={styles.scenarioList}>
      {scenarios.map(({ before, after }, i) => (
        <div key={i} className={styles.scenario}>
          {/* Gradient spine with number */}
          <div className={styles.spine} aria-hidden="true">
            <div className={styles.spineNumber}>{i + 1}</div>
            {i < scenarios.length - 1 && <div className={styles.spineLine} />}
          </div>

          <div className={styles.panels}>
            <div className={styles.beforePanel}>
              <span className={styles.stateLabel} data-type="before">
                Before
              </span>
              <p className={styles.panelText}>{before}</p>
            </div>
            <div className={styles.afterPanel}>
              <span className={styles.stateLabel} data-type="after">
                After
              </span>
              <p className={styles.panelText}>{after}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default PageSegmentImpact;
