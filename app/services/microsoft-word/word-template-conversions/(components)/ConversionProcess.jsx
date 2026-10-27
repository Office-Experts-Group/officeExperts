// /services/microsoft-word/word-template-conversions/(components)/ConversionProcess.jsx
import Link from "next/link";

import { CheckIcon, LayersIcon, TemplateIcon } from "../(svgs)/Icons";
import styles from "@/styles/conversionProcess.module.scss";

const STEPS = [
  {
    Icon: TemplateIcon,
    heading: "Tell us what the document needs to do",
    body: "Send through a sample and let us know whether it needs to become a Word template, a fillable form or a straight conversion. We flag anything in the source likely to cause issues.",
  },
  {
    Icon: LayersIcon,
    heading: "We build it properly",
    body: "Templates are rebuilt on real styles, headings and page structure. Fillable forms are built in Adobe Acrobat Pro with the right field types, then tested.",
  },
  {
    Icon: CheckIcon,
    heading: "You receive finished, ready-to-use files",
    body: "Files arrive ready to send, publish or hand to your team. For recurring documents, we hand over a template that works reliably without our involvement.",
  },
];

// Microsoft products and services shown as chips in the intro
const SUITE = [
  "Word",
  "Excel",
  "PowerPoint",
  "Access",
  "Power Platform",
  "Microsoft 365",
  "Custom development",
  "AI automation",
];

const ConversionProcess = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>How we work</span>
          <h2 className={styles.heading}>
            What it is like to work with{" "}
            <span className={styles.accentWord}>Office Experts</span>
          </h2>
          <p>
            No account to set up, no per-file pricing and no uploading
            confidential documents to a tool you know nothing about. Chat with
            skilled designers and get a personalised service.
          </p>
          <p>
            Word is only one part of what we do. Office Experts works across the
            entire Microsoft suite, so whatever your document work connects to,
            from spreadsheets and presentations to databases and automation, one
            team can help with every aspect of your business.{" "}
            <Link href="/services" className={styles.link}>
              Explore all our Microsoft services
            </Link>
            .
          </p>
          <ul className={styles.suite} aria-label="Microsoft products we support">
            {SUITE.map((product) => (
              <li key={product}>{product}</li>
            ))}
          </ul>
        </header>

        <ol className={styles.steps}>
          {STEPS.map(({ Icon, heading, body }, i) => (
            <li key={heading} className={styles.step}>
              <span className={styles.stepIcon}>
                <Icon />
              </span>
              <span className={styles.stepNumber} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{heading}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ConversionProcess;
