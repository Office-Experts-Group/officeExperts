// (components)/LockedFormatting.jsx
import styles from "@/styles/lockedFormatting.module.scss";

import { LockedDocumentSvg, LockIconSvg } from "../(svgs)/LockedDocumentSvg";

import CorporateIdentityComparison from "./CorporateIdentityComparison";

// The brand-defining elements the governed template locks down
const lockedElements = [
  "Typeface",
  "Type sizes",
  "Colour palette",
  "Bullets & numbering",
];

const LockedFormatting = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.inner}>
          {/* ── Left: illustration (hidden on phones) ── */}
          <div className={styles.visual}>
            <LockedDocumentSvg />
          </div>

          {/* ── Right: content ── */}
          <div className={styles.content}>
            <h2>
              Lock What Matters,{" "}
              <span className={styles.accent}>Not Everything</span>
            </h2>
            <p className={styles.lead}>
              A handful of formatting decisions define your brand. We lock those
              down, so no one can accidentally turn a corporate report into a
              design experiment, and no one has to police it.
            </p>

            <ul className={styles.chips}>
              {lockedElements.map((element) => (
                <li key={element} className={styles.chip}>
                  <LockIconSvg />
                  {element}
                </li>
              ))}
            </ul>

            <p className={styles.callout}>
              Just because an employee loves{" "}
              <span className={styles.comic}>Comic Sans</span> doesn’t mean it
              belongs in your company documentation.
            </p>

            <p className={styles.lead}>
              Word’s built‑in Restricted Editing takes a much blunter approach,
              locking almost everything, right down to bold, italic and
              alignment. Our governed template locks only what would break your
              brand, then replaces those controls with approved options we’ve
              already created and tested. No heart‑shaped bullets, no
              star‑shaped lists, no creative numbering schemes.
            </p>
          </div>
        </div>
      </section>

      <CorporateIdentityComparison />
    </>
  );
};

export default LockedFormatting;
