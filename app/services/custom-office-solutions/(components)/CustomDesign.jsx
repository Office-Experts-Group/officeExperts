// app/services/custom-office-solutions/(components)/CustomDesign.jsx
// Document design: branded Word and PowerPoint files, plus InDesign to Word conversion.
// Expands the first half of the old PageSegment8. Features are unordered, so no numbers.
// Server component.
import Link from "next/link";

// SCSS module (source: styles/customDesign.module.scss)
import styles from "@/styles/customDesign.module.scss";
// Decorative illustration stored with the route
import { InDesignToWordSvg } from "../(svgs)/InDesignToWordSvg";

// What a rebuilt Word file includes
const features = [
  {
    title: "Styles that match your brand guide",
    text: "Headings, body text, tables and captions set up as real Word styles, so correct formatting is one click rather than guesswork.",
  },
  {
    title: "Locked layout, editable content",
    text: "Content controls and protected regions let staff fill in the parts that change while logos, footers and page layouts stay put.",
  },
  {
    title: "Reusable building blocks",
    text: "Approved clauses, cover pages, disclaimers and signatures saved as Quick Parts, ready to drop into any document.",
  },
  {
    title: "Clean copy and paste",
    text: "A macro strips foreign formatting from pasted text and applies your approved styles, so documents stay consistent.",
  },
];

const CustomDesign = () => {
  return (
    <section
      className={styles.section}
      id="document-design"
      aria-labelledby="document-design-heading"
    >
      <div className={styles.inner}>
        <div className={styles.top}>
          {/* ── Left: content ── */}
          <div className={styles.content}>
            <span className={styles.eyebrow}>Document design</span>
            <h2 id="document-design-heading" className={styles.heading}>
              Documents that look designed{" "}
              <span className={styles.accent}>and still work in Word</span>
            </h2>
            <p>
              Our designers create custom Word documents and{" "}
              <Link href="/services/microsoft-powerpoint">
                PowerPoint presentations
              </Link>{" "}
              that suit your business and protect your corporate identity. The
              aim is a file staff can fill in, edit and send without breaking the
              layout, so every proposal, report and letter leaves the office
              looking the way your brand guidelines intend.
            </p>

            <div className={styles.convert}>
              <h3>InDesign to Word conversion</h3>
              <p>
                Brand agencies often hand over reports and templates as InDesign
                files or PDFs. They look great, but nobody outside the design
                team can edit them, and copying the text into Word loses every
                style along the way. We rebuild these layouts in Word with
                matching fonts, colours and page designs, so you get a fully
                functional file your whole team can use every day.
              </p>
            </div>
          </div>

          {/* ── Right: illustration ── */}
          <div className={styles.visual}>
            <InDesignToWordSvg />
          </div>
        </div>

        {/* ── What the finished file includes ── */}
        <div className={styles.features}>
          {features.map(({ title, text }) => (
            <div key={title} className={styles.feature}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomDesign;
