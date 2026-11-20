// /app/services/microsoft-access/access-database-optimisation-and-repair/(components)/AorCauses.jsx
// Standout section: a CSS-only "pick a problem area" diagram. The radio buttons drive
// which panel shows and which layer of the diagram lights up. No client JavaScript.
import React from "react";
import Link from "next/link";

import AorCausesDiagram from "../(svgs)/AorCausesDiagram";
import { AOR_CAUSE_ART } from "../(svgs)/AorCauseArt";
import { ArrowIcon } from "../(svgs)/AorIcons";

import styles from "@/styles/aorCauses.module.scss";

const AOR_CAUSES = [
  {
    key: "file",
    title: "Database file bloat & fragmentation",
    description:
      "As a database grows, Access piles up temporary objects and leftover space from deleted records, and it doesn’t clean them up on its own. The file swells far beyond what the data needs, and everything from opening a form to running a query gets slower.",
    symptoms: [
      "Database file much larger than the data suggests",
      "Slow opening and closing times",
      "Gradual performance degradation",
    ],
    fix: "We compact and repair the file, clear out the leftovers and set up a routine so the bloat doesn’t creep back.",
  },
  {
    key: "design",
    title: "Poor table design & indexing",
    description:
      "Databases built without much planning often miss indexes on the fields people search most. Missing or excessive indexes, unnormalised tables and the wrong data types all make Access work harder than it should.",
    symptoms: [
      "Queries taking minutes instead of seconds",
      "Forms slow to filter or sort",
      "Reports timing out with large datasets",
    ],
    fix: "We add the indexes that matter, remove the ones that hurt, and tidy table design where it is the real culprit.",
  },
  {
    key: "memory",
    title: "Memory & resource limitations",
    description:
      "Access databases on PCs with too little memory or processing power struggle to keep up. Once a database outgrows the memory available, constant disk access slows things down for everyone.",
    symptoms: [
      "System freezes or hangs",
      "Out of memory errors",
      "Slow with multiple databases open",
    ],
    fix: "We trim what the database asks of each PC, and tell you plainly if the hardware is the real limit.",
  },
  {
    key: "queries",
    title: "Inefficient queries & forms",
    description:
      "Queries that fetch more data than they need, forms that load a whole table instead of a filtered set, and cascading combo boxes that aren’t set up well all add up to a sluggish database.",
    symptoms: [
      "Long waits when opening forms",
      "Combo boxes taking ages to fill",
      "Heavy memory use while queries run",
    ],
    fix: "We rewrite slow queries and change forms so they only load the records people actually need.",
  },
  {
    key: "vba",
    title: "VBA code performance issues",
    description:
      "Inefficient VBA, such as nested loops or repeated DLookup calls, or code with no error handling, can bring a database to a crawl. Code that was fine with a small amount of data becomes a problem as the data grows.",
    symptoms: [
      "Buttons or actions taking too long",
      "Database unresponsive during processes",
      "Code errors dragging down overall performance",
    ],
    fix: "We replace slow patterns with faster ones, add proper error handling and show progress on long jobs.",
  },
  {
    key: "corruption",
    title: "Corruption & file integrity",
    description:
      "Corruption shows up as mysterious errors, missing objects or slowdowns nobody can explain. It often follows improper shutdowns, network drop-outs or hardware faults, and even minor corruption can drag performance down until it is repaired.",
    symptoms: [
      "Unexpected error messages",
      "Forms or reports failing to open",
      "Increasing instability over time",
    ],
    fix: "We work on a copy, repair what we can, recover data from damaged files and look for what caused it.",
  },
];

const AorCauses = () => {
  return (
    <section
      id="aor-causes"
      className={styles.aorCauses}
      aria-labelledby="aor-causes-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Identifying performance issues</p>
          <h2 id="aor-causes-heading" className={styles.heading}>
            Common causes of{" "}
            <span className={styles.accent}>slow database performance</span>
          </h2>
          <p className={styles.subtitle}>
            Knowing what is slowing your Access database down is the first step
            to getting its speed back. These are the problems we meet most often
            when we diagnose a database. Pick one to see where it sits and what
            it looks like.
          </p>
        </header>

        <figure className={styles.figure}>
          <div className={styles.diagramScroll}>
            <div className={styles.diagramInner}>
              <AorCausesDiagram />
            </div>
          </div>
        </figure>

        <fieldset className={styles.picker}>
          <legend className={styles.legend}>
            Choose a problem area to see its symptoms and how we fix it
          </legend>

          <div className={styles.tabs}>
            {AOR_CAUSES.map((cause, i) => {
              const Art = AOR_CAUSE_ART[cause.key];
              return (
                <React.Fragment key={cause.key}>
                  <input
                    type="radio"
                    name="aor-cause"
                    id={`aor-cause-${cause.key}`}
                    value={cause.key}
                    defaultChecked={i === 0}
                    className={styles.radio}
                  />
                  <label
                    htmlFor={`aor-cause-${cause.key}`}
                    className={styles.tab}
                  >
                    <span className={styles.tabArt}>
                      <Art />
                    </span>
                    <span className={styles.tabText}>{cause.title}</span>
                  </label>
                </React.Fragment>
              );
            })}
          </div>

          <div className={styles.panels}>
            {AOR_CAUSES.map((cause) => (
              <div
                key={cause.key}
                className={styles.panel}
                data-panel={cause.key}
              >
                <h3 className={styles.panelTitle}>{cause.title}</h3>
                <p className={styles.panelText}>{cause.description}</p>
                <p className={styles.symptomsLabel}>Common symptoms</p>
                <ul className={styles.symptoms}>
                  {cause.symptoms.map((symptom) => (
                    <li key={symptom}>{symptom}</li>
                  ))}
                </ul>
                <div className={styles.fix}>
                  <p className={styles.fixLabel}>How we fix it</p>
                  <p className={styles.fixText}>{cause.fix}</p>
                  <Link href="#aor-services" className={styles.arrowLink}>
                    See our optimisation services <ArrowIcon />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
    </section>
  );
};

export default AorCauses;
