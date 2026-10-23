// app/popup-forms/(components)/PopupFormsProblem.jsx

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import styles from "../../../styles/popupFormsProblem.module.css";

// One custom icon per pain point — replaces the numbered badge used
// elsewhere on this page, so each row is visually distinct at a glance.
import { BlankTemplateSVG } from "../(svgs)/BlankTemplateSVG";
import { CopyPasteSVG } from "../(svgs)/CopyPasteSVG";
import { MissedFieldSVG } from "../(svgs)/MissedFieldSVG";
import { FormatDriftSVG } from "../(svgs)/FormatDriftSVG";
import { DisconnectedDataSVG } from "../(svgs)/DisconnectedDataSVG";

const painPoints = [
  {
    id: "blank-templates",
    Icon: BlankTemplateSVG,
    name: "Blank templates left open to interpretation",
    description:
      "A document sits on the shared drive with instructions in the header informing staff on what to fill in and where. Everyone reads it slightly differently, and the final documents are inconsistent.",
  },
  {
    id: "copy-paste-errors",
    Icon: CopyPasteSVG,
    name: "Details copied and pasted between documents",
    description:
      "The same client name, reference number, or set of figures gets typed out again for every new document. Each retype is another chance for a typo to creep its way into a contract, letter, or report.",
  },
  {
    id: "missed-fields",
    Icon: MissedFieldSVG,
    name: "Required fields left blank or filled in wrong",
    description:
      "Without validation, there's nothing stopping a mandatory field being skipped, a date being entered the wrong way around, or a dropdown-style answer being typed manually with errors.",
  },
  {
    id: "inconsistent-formatting",
    Icon: FormatDriftSVG,
    name: "Formatting that drifts from document to document",
    description:
      "Manual entry means manual formatting. Fonts, spacing, and layout can shift slightly every time someone fills in a template by hand, and brand consistency gradually weakens with each new document.",
  },
  {
    id: "disconnected-data",
    Icon: DisconnectedDataSVG,
    name: "Source data that lives somewhere else entirely",
    description:
      "The information a document needs already exists in a spreadsheet, SharePoint list, or database, but there's no link between it and the document, so someone has to go and find it manually and painstakingly copy-paste it.",
  },
];

const PopupFormsProblem = () => (
  <section className={styles.section}>
    {/* ── Opening header ── */}
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Recognise any of these?</p>
        <h2 className={styles.heading}>
          The document problems{" "}
          <span className={styles.headingMuted}>a popup form solves.</span>
        </h2>
        <p className={styles.intro}>
          When templates rely heavily on manual text entry, formatting and
          consistency will inevitably one of these days break down. With Word
          Experts implementing automated pop-up forms, we eliminate these
          vulnerabilities entirely, guiding all users through error-proof,
          consistent data entry.
        </p>
      </div>
    </AnimateOnScroll>

    {/* ── Pain point rows ── */}
    <div className={styles.rows} role="list">
      {painPoints.map((point, i) => (
        <AnimateOnScroll
          key={point.id}
          animation="fade-up"
          duration={0.55}
          delay={i * 0.06}
        >
          <article className={styles.row} role="listitem">
            <div className={styles.rowLeft}>
              <span className={styles.rowIcon} aria-hidden="true">
                <point.Icon />
              </span>
              <h3 className={styles.rowName}>{point.name}</h3>
            </div>

            <p className={styles.rowDesc}>{point.description}</p>
          </article>
        </AnimateOnScroll>
      ))}
    </div>
  </section>
);

export default PopupFormsProblem;
