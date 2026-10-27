// /word-template-conversions/(components)/ConversionProblem.jsx
import {
  DriftIcon,
  FlatIcon,
  FontIcon,
  LockIcon,
  TableIcon,
} from "../(svgs)/Icons";
import styles from "@/styles/conversionProblem.module.scss";

const PAIN_POINTS = [
  {
    id: "static-only",
    Icon: FlatIcon,
    name: "Flat PDFs when you needed a form",
    description:
      "A straight Word to PDF export is a static document. An interactive, fillable PDF takes a proper conversion built in Adobe Acrobat.",
  },
  {
    id: "template-drift",
    Icon: DriftIcon,
    name: "The same template, a different result each time",
    description:
      "If a Word template was never built with PDF export in mind, every conversion is a gamble. Rebuilding it properly once removes the guesswork.",
  },
  {
    id: "broken-tables",
    Icon: TableIcon,
    name: "Tables and columns that fall apart",
    description:
      "Multi-column layouts, merged cells and nested tables are where most converters fail first. Rows shift and borders vanish.",
  },
  {
    id: "font-substitution",
    Icon: FontIcon,
    name: "Fonts swapped for a default",
    description:
      "A document set in your corporate typeface can come out in a generic system font, and go unnoticed until a client opens it.",
  },
  {
    id: "privacy-risk",
    Icon: LockIcon,
    name: "Confidential files on unknown servers",
    description:
      "Free converters need your file uploaded to a third party, often with vague terms about retention. For contracts and HR records that is a real risk.",
  },
];

const ConversionProblem = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Recognise any of these?</p>
          <h2 className={styles.heading}>
            Where free converters{" "}
            <span className={styles.muted}>let businesses down.</span>
          </h2>
          <p className={styles.intro}>
            Five ways a conversion quietly goes wrong, and the point at which
            each one stops being an annoyance and starts costing you time or
            credibility.
          </p>
        </header>

        <ol className={styles.list}>
          {PAIN_POINTS.map(({ id, Icon, name, description }, i) => (
            <li key={id} className={styles.row}>
              <span className={styles.icon}>
                <Icon />
              </span>
              <span className={styles.number} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.name}>{name}</h3>
              <p className={styles.description}>{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ConversionProblem;
