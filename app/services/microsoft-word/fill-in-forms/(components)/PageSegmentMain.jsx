// /services/microsoft-word/fill-in-forms/(components)/PageSegmentMain.jsx

import { StreamlinedEntrySVG } from "../(svgs)/StreamlinedEntrySVG";

import styles from "@/styles/fillFormMain.module.scss";

const PageSegmentMain = () => {
  return (
    <section className={styles.hero}>
      {/* Inner grid keeps content at 1300px while the background runs full width */}
      <div className={styles.grid}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Intuitive Form Solutions</p>
          <h1 className={styles.heading}>
            Streamlined Data Entry with{" "}
            <span className={styles.accent}>Custom Fill-In Forms</span>
          </h1>
          <div className={styles.body}>
            <p>
              Our team of Word design experts can deliver your document
              templates with fill in forms to take your data entry to the next
              level when it comes to simplicity, usability and intuitive design.
            </p>
            <p>
              Instead of a template where every copy is filled in a little
              differently, locked content controls keep the layout, formatting
              and field order identical no matter who&rsquo;s completing it, so
              the data coming back is consistent every time.
            </p>
          </div>
        </div>

        <div className={styles.svgWrapper}>
          <StreamlinedEntrySVG />
        </div>
      </div>
    </section>
  );
};

export default PageSegmentMain;
