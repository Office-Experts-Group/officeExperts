// app/services/microsoft-publisher/(components)/PublisherConversion.jsx
// Comparison of the four realistic ways to get content out of .pub files.
// A real <table> so the comparison is readable by screen readers and answer engines.
// The id "publisher-conversion" is the target of the secondary CTA in PublisherHero.
import Link from "next/link";

// SCSS module (styles/publisherConversion.module.scss)
import styles from "@/styles/publisherConversion.module.scss";

// Column headings. `ours` marks the column describing our rebuild service.
const options = [
  { name: "Save as PDF" },
  { name: "Open the PDF in Word" },
  { name: "Import into LibreOffice or Affinity" },
  { name: "Rebuild as a Word or PowerPoint template", ours: true },
];

// One entry per row; `values` lines up with the option columns above
const rows = [
  {
    label: "Keeps the look",
    values: [
      "Exactly, as a fixed page",
      "Loosely, pictures and frames often move",
      "Mostly, complex layouts and WordArt can drift",
      "Faithfully, rebuilt to your brand",
    ],
  },
  {
    label: "Editable after",
    values: [
      "No",
      "Text yes, layout is fragile",
      "Yes, but only in that app",
      "Yes, in Word or PowerPoint",
    ],
  },
  {
    label: "Reusable by staff",
    values: [
      "No",
      "Rarely, each file stays a one-off",
      "Means new software and training",
      "Yes, branding locked into a template",
    ],
  },
  {
    label: "Works in bulk",
    values: [
      "Yes, from any machine that can still read .pub",
      "One file at a time",
      "Batch export to PDF or ODG",
      "Archive in bulk, rebuild only what's still used",
    ],
  },
  {
    label: "Best for",
    values: [
      "Old issues, records and anything kept for reference",
      "A quick text fix on a simple page",
      "Occasional edits by one designer",
      "Publications produced every week, month or term",
    ],
  },
];

const PublisherConversion = () => {
  return (
    <section className={styles.section} id="publisher-conversion">
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Conversion options</span>
          <h2 className={styles.heading}>
            Four ways out of Publisher,{" "}
            <span className={styles.accent}>and what each one keeps.</span>
          </h2>
          <p>
            Microsoft hasn&rsquo;t released a converter that turns .pub files
            into editable Word documents. Its recommended route is to save each
            publication as a PDF and open that PDF in Word, and its sample
            PowerShell script only batch-exports to PDF on a machine with a
            licensed copy of Publisher. Free tools such as LibreOffice Draw and
            Affinity can read .pub files without Publisher, but they leave you
            editing in a different app. Here&rsquo;s how the options compare.
          </p>
        </header>

        {/* Wrapper scrolls sideways on small screens so the table keeps its shape */}
        <div className={styles.scroller}>
          <table className={styles.table}>
            <thead>
              <tr>
                <td aria-hidden="true" />
                {options.map((option) => (
                  <th
                    key={option.name}
                    scope="col"
                    className={option.ours ? styles.ours : undefined}
                  >
                    {option.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {row.values.map((value, i) => (
                    <td key={options[i].name}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={styles.note}>
          Most libraries end up split: years of old issues archived to PDF, and
          a handful of live publications rebuilt properly. If your files are
          already Word documents that need tidying, see our{" "}
          <Link href="/services/microsoft-word/document-rebranding-services">
            document rebranding services
          </Link>
          . Not sure which files belong where?{" "}
          <Link href="#contact">Send us a sample</Link> and we&rsquo;ll tell
          you.
        </p>
      </div>
    </section>
  );
};

export default PublisherConversion;
