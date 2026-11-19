// /app/services/microsoft-excel/(components)/ExcelIntro.jsx
// Plain-English intro to custom Excel programming, beside a diagram of how a
// custom workbook fits together. Copy keeps the ranking phrases from the old
// excelexperts.com.au home page (custom Excel programming, development,
// databases, integration, support, data manipulation).

import Link from "next/link";

import styles from "@/styles/excelIntro.module.scss";

import ExcelIntroDiagram from "../(svgs)/ExcelIntroDiagram";

const ExcelIntro = () => {
  const includes = [
    "Forms that make data entry quick and consistent",
    "Clean tables instead of copy and paste",
    "Formulas and VBA you can trust",
    "Reports and dashboards that refresh themselves",
  ];

  return (
    <section
      id="excel-intro"
      className={styles.excelIntro}
      aria-labelledby="excel-intro-heading"
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Custom Excel programming</span>
          <h2 id="excel-intro-heading" className={styles.heading}>
            Excel built around{" "}
            <span className={styles.accent}>how your business works</span>
          </h2>
          <p className={styles.text}>
            Our Microsoft Excel programmers take care of custom Excel
            programming, development, databases and integration. We start by
            understanding your business needs, then build a workbook your team
            can use without a manual.
          </p>
          <p className={styles.text}>
            Already have a file that does most of the job? We’ll usually improve
            it rather than start again. When your data arrives from lots of
            places, our{" "}
            <Link href="/services/microsoft-excel/data-manipulation">
              data manipulation
            </Link>{" "}
            work pulls it together, and our{" "}
            <Link href="/microsoft-support-and-training-australia">
              support and training
            </Link>{" "}
            team is there once it’s live.
          </p>

          <div className={styles.includes}>
            <p className={styles.includesLabel}>A typical build includes</p>
            <ul className={styles.list}>
              {includes.map((item) => (
                <li key={item} className={styles.item}>
                  <svg
                    viewBox="0 0 20 20"
                    className={styles.itemIcon}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <rect
                      x="2.5"
                      y="3.5"
                      width="15"
                      height="13"
                      rx="2.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M2.5 8h15M8 8v8.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="9.5"
                      y="10"
                      width="6"
                      height="4.5"
                      rx="1"
                      fill="currentColor"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className={styles.figure}>
          <div className={styles.diagramScroll}>
            <div className={styles.diagramInner}>
              <ExcelIntroDiagram />
            </div>
          </div>
          <figcaption className={styles.caption}>
            How a custom workbook fits together: your data comes in once, the
            workbook does the work, and the results go where they’re needed.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default ExcelIntro;
