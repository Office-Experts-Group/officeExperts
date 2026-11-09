// app/services/power-pivot/(components)/PowerPivotCaseStudy.jsx
// Single featured case study. Used instead of RelatedLinks, which only works well with two or more cards.
// Server component. Copy is condensed from the golf-supplier-sales-data-consolidation case study.
import Image from "next/image";
import Link from "next/link";

// Compiled CSS module (source: styles/powerPivotCaseStudy.module.scss)
import styles from "@/styles/powerPivotCaseStudy.module.scss";
// Screenshot of the finished workbook. A static import lets Next.js read the image size, so no width or height is needed.
import workbook from "@/public/case-studies/on-course-golf-sales-summaryLg.png";

// Headline results from the case study
const stats = [
  { value: "2 tools", label: "Built for summary and year-on-year comparison" },
  {
    value: "Automatic",
    label: "Supplier files combined and categorised on refresh",
  },
  { value: "4 views", label: "By supplier, member, month and quarter" },
];

const PowerPivotCaseStudy = () => {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.visual}>
          <Image
            src={workbook}
            alt="Supplier sales summary workbook built with Power Query and Power Pivot"
            sizes="(max-width: 1024px) 100vw, 560px"
          />
        </div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>Case study</span>
          <h2 className={styles.heading}>
            Dozens of supplier files,{" "}
            <span className={styles.accent}>one automated summary.</span>
          </h2>

          <div className={styles.body}>
            <p>
              The client received dozens of separate Excel files from its
              suppliers each year, detailing sales to every club and member.
              Bringing them together by hand, then repeating the effort to
              compare one financial year with the next, took considerable time.
            </p>
            <p>
              We built a Power Query and Power Pivot solution that pulls the raw
              files in automatically, categorises the data and produces
              summaries by supplier, member, month and quarter. A second
              workbook shows quarter-on-quarter movement between financial
              years, with no manual copy and paste.
            </p>
          </div>

          <ul className={styles.stats}>
            {stats.map(({ value, label }) => (
              <li key={value}>
                <strong>{value}</strong>
                <span>{label}</span>
              </li>
            ))}
          </ul>

          <div className={styles.links}>
            <Link
              href="/case-studies/golf-supplier-sales-data-consolidation"
              className={styles.link}
            >
              See our supplier sales consolidation
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 10h12M12 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <p className={styles.related}>
              Related:{" "}
              <Link href="https://www.excelexperts.com.au/data-manipulation">
                Data manipulation services
              </Link>{" "}
              and{" "}
              <Link href="https://www.excelexperts.com.au/custom-design-and-development">
                custom design and development
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerPivotCaseStudy;
