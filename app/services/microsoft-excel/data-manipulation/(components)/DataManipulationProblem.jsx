// /app/services/microsoft-excel/data-manipulation/(components)/DataManipulationProblem.jsx

import styles from "@/styles/dataManipulationProblem.module.scss";
import {
  DmpCopyArt,
  DmpStaleArt,
  DmpFragileArt,
  DmpCleanArt,
  DmpMacroArt,
} from "../(svgs)/DataManipulationProblemArt";

// size = grid footprint, tone = tile colour (both are classes in the module)
const DMP_PAIN_POINTS = [
  {
    id: "copy-paste",
    name: "Manual copying between systems",
    description:
      "Staff transferring records from one platform manually. Each pass is a chance for an error, and the time adds up fast. What once was a ten-minute job has now become the first hour of someone’s morning, every morning.",
    size: "tileThird",
    tone: "accentTile",
    Art: DmpCopyArt,
  },
  {
    id: "stale-exports",
    name: "Reports built on yesterday’s data",
    description:
      "Pulling live data takes too long, so reports run on last night’s export. By the time a decision is made, the numbers have already moved. The gap between what the report shows and what’s actually happening widens every hour it sits untouched.",
    size: "tileThird",
    tone: "darkTile",
    Art: DmpStaleArt,
  },
  {
    id: "fragile-sheets",
    name: "Spreadsheets that break when formats change",
    description:
      "A column gets renamed upstream. A date field switches format. A source system adds a new row at the top. Suddenly a workbook that’s worked fine for two years is broken and nobody knows exactly why. Fragile setups like this require constant babysitting and eventually fail at the worst possible moment.",
    size: "tileThird",
    tone: "lightTile",
    Art: DmpFragileArt,
  },
  {
    id: "cleaning-overhead",
    name: "Hours of cleaning before any analysis",
    description:
      "Deduplicating records, stripping whitespace, or reformatting dates all done manually before a single chart can be built. This is prep work that a properly built pipeline eliminates entirely, yet it consumes a significant portion of many people’s time.",
    size: "tileHalfRow",
    tone: "midTile",
    Art: DmpCleanArt,
  },
  {
    id: "broken-macros",
    name: "Macros that fail after every update",
    description:
      "Legacy VBA that worked reliably for years suddenly breaks after a 64-bit Office migration or a Microsoft 365 update. The person who built it left years ago, the documentation is thin, and nobody wants to touch it. We rebuild these properly.",
    size: "tileHalfRow",
    tone: "deepTile",
    Art: DmpMacroArt,
  },
];

const DataManipulationProblem = () => (
  <section
    id="dmp-problems"
    className={styles.dataManipulationProblem}
    aria-labelledby="dmp-problems-heading"
  >
    <header className={styles.header}>
      <div>
        <p className={styles.eyebrow}>Recognise any of these?</p>
        <h2 id="dmp-problems-heading" className={styles.heading}>
          The data problems{" "}
          <span className={styles.accent}>we fix permanently.</span>
        </h2>
      </div>
      <p className={styles.intro}>
        Most of these aren’t new problems. They’ve usually grown over time, and
        they’ve been quietly costing the business every single day. The
        difference between a patch and a permanent fix is choosing the right
        tool and building a solid foundation.
      </p>
    </header>

    <ul className={styles.grid} role="list">
      {DMP_PAIN_POINTS.map(({ id, name, description, size, tone, Art }) => (
        <li
          key={id}
          className={`${styles.tile} ${styles[size]} ${styles[tone]}`}
        >
          <div className={styles.art}>
            <Art />
          </div>
          <div className={styles.text}>
            <h3 className={styles.title}>{name}</h3>
            <p className={styles.description}>{description}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default DataManipulationProblem;
