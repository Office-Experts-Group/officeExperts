// /services/microsoft-word/quick-parts/(components)/QuickPartsTypes.jsx

import styles from "@/styles/quickPartsTypes.module.scss";

// The Word features that sit under Insert > Quick Parts, in plain English
const features = [
  {
    term: "Quick Parts gallery",
    what: "Your own reusable blocks, shown as previews at the top of the Quick Parts menu.",
    use: "Cover pages, clauses, tables and any content staff insert regularly.",
  },
  {
    term: "AutoText",
    what: "Text blocks that insert by typing the first few letters of their name and pressing Enter or F3.",
    use: "Short, frequently typed wording such as disclaimers and sign-offs.",
  },
  {
    term: "Document Property",
    what: "Fields linked to the document's properties, such as Title, Company and Author.",
    use: "Details that repeat throughout a document and update everywhere at once.",
  },
  {
    term: "Field",
    what: "Dynamic codes for page numbers, dates, cross-references and calculations.",
    use: "Content that has to stay accurate as the document changes.",
  },
  {
    term: "Building Blocks Organizer",
    what: "The master list of every building block, its gallery, category and storage location.",
    use: "Managing, renaming and cleaning up a large library.",
  },
];

// Where building blocks can be saved, and what that means for a team
const storage = [
  {
    place: "Normal.dotm or Building Blocks.dotx",
    result: "Only works on the computer that saved it. Lost when a PC is replaced.",
  },
  {
    place: "Your document template",
    result: "Travels with the template, so everyone creating from it gets the same blocks.",
    recommended: true,
  },
  {
    place: "A global template (add-in)",
    result: "Loads for every user in every document, deployed from a network drive or SharePoint.",
    recommended: true,
  },
];

const QuickPartsTypes = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>How Quick Parts work</p>
        <h2 className={styles.heading}>
          One menu, <span className={styles.accent}>five tools.</span>
        </h2>
        <p className={styles.intro}>
          Quick Parts is the Insert menu in Word that gives access to building
          blocks, AutoText, document properties and fields. Each does a
          different job, and a well-built template uses them together.
        </p>
      </div>

      <dl>
        {features.map((feature) => (
          <div key={feature.term} className={styles.feature}>
            <dt className={styles.term}>{feature.term}</dt>
            <dd className={styles.what}>{feature.what}</dd>
            <dd className={styles.use}>{feature.use}</dd>
          </div>
        ))}
      </dl>

      {/* Storage location is the most common reason Quick Parts fail for teams */}
      <div className={styles.storage}>
        <h3 className={styles.storageHeading}>
          Where your Quick Parts are saved matters
        </h3>
        <p className={styles.storageIntro}>
          By default, Word saves new building blocks to the user's own computer.
          That is why a colleague's Quick Parts never show up for anyone else.
          We store them where the whole team can reach them.
        </p>

        <div className={styles.storageGrid}>
          {storage.map((item) => (
            <div
              key={item.place}
              className={`${styles.storageCard} ${item.recommended ? styles.storageRecommended : ""}`}
            >
              <span className={styles.storageTag}>
                {item.recommended ? "Team-ready" : "Single user"}
              </span>
              <p className={styles.storagePlace}>{item.place}</p>
              <p className={styles.storageResult}>{item.result}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default QuickPartsTypes;
