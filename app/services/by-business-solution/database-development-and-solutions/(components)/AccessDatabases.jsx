// app/services/by-business-solution/database-development-and-solutions/(components)/AccessDatabases.jsx
// Microsoft Access section. Capabilities are laid out as a "spec sheet" definition list
// rather than cards, so this section reads differently from the rest of the page.
import Link from "next/link";

// Compiled CSS module (source: styles/accessDatabases.module.scss)
import styles from "@/styles/accessDatabases.module.scss";
import { ExcelToAccessSvg } from "../(svgs)/ExcelToAccessSvg";

const ACCESS_SITE = "https://www.accessexperts.com.au";

// Each spec row can carry an optional link; `before` and `after` wrap the anchor text
const specs = [
  {
    term: "Forms that guide data entry",
    detail:
      "Screens built around each task, with drop-downs, validation and required fields so bad data never reaches the tables.",
  },
  {
    term: "Reports and documents",
    detail:
      "Printable reports, Excel exports and Word documents generated straight from your records with VBA automation.",
  },
  {
    term: "Integration with Office and accounting",
    before: "Outlook, Word and Excel automation, plus ",
    link: {
      href: `${ACCESS_SITE}/3rd-party-product-integration`,
      text: "Xero and MYOB integration",
    },
    after: " so invoices and customer records stay in step.",
  },
  {
    term: "Shared by a small team",
    detail:
      "A split front end and back end lets several people work in the same database across your office network at once.",
  },
  {
    term: "No licence for every user",
    detail:
      "The free Access Runtime lets staff use a finished database without a full Access licence on every PC.",
  },
  {
    term: "Repair and performance tuning",
    before: "Slow, bloated or corrupted files are fixed through ",
    link: {
      href: `${ACCESS_SITE}/access-database-optimisation-and-repair`,
      text: "Access optimisation and repair",
    },
    after: ", often without users noticing anything but the speed.",
  },
];

// Renders the detail text, with an inline link where a row has one
const SpecDetail = ({ spec }) =>
  spec.link ? (
    <>
      {spec.before}
      <Link href={spec.link.href} className={styles.link}>
        {spec.link.text}
      </Link>
      {spec.after}
    </>
  ) : (
    spec.detail
  );

const AccessDatabases = () => {
  return (
    <section className={styles.section} id="access-databases">
      <div className={styles.inner}>
        {/* ── Left: illustration and intro ── */}
        <div className={styles.intro}>
          <span className={styles.eyebrow}>Microsoft Access</span>
          <h2 className={styles.heading}>
            The fastest route from{" "}
            <span className={styles.accent}>spreadsheet to system</span>
          </h2>
          <p>
            When a workbook is shared by several people, holds thousands of rows
            and is held together by lookups, it is usually time for a database.
            Access gives you proper tables and relationships, forms that guide
            data entry, and reports that don't break when someone sorts a
            column.
          </p>
          <p>
            Access is included in several Microsoft 365 business plans on
            Windows, so many clients already have it installed. If you're unsure
            which tool you need, our guide to{" "}
            <Link
              href={`${ACCESS_SITE}/blog/access-vs-excel`}
              className={styles.link}
            >
              Access vs Excel
            </Link>{" "}
            covers the differences.
          </p>

          <div className={styles.visual}>
            <ExcelToAccessSvg />
          </div>
        </div>

        {/* ── Right: spec sheet ── */}
        <div className={styles.sheet}>
          <h3>
            What a <span>real database</span> can do...
          </h3>
          <dl>
            {specs.map((spec) => (
              <div key={spec.term} className={styles.spec}>
                <dt>{spec.term}</dt>
                <dd>
                  <SpecDetail spec={spec} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default AccessDatabases;
