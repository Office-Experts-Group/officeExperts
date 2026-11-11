// app/services/custom-office-solutions/(components)/CustomTechChooser.jsx
// Comparison of the four main ways to customise Office: VBA, Office Scripts with
// Power Automate, Office Add-ins (Office.js) and Python or AI agents.
// A real <table> so the comparison is readable by screen readers and answer engines.
// Server component.
import Link from "next/link";

// SCSS module (source: styles/customTechChooser.module.scss)
import styles from "@/styles/customTechChooser.module.scss";

// Column headings, each linking to the page that covers that approach in depth
const tools = [
  { name: "VBA macros", href: "/services/vba-macro-development" },
  {
    name: "Office Scripts + Power Automate",
    href: "https://www.powerplatformexperts.com.au",
  },
  {
    name: "Office Add-ins (JavaScript)",
    href: "/services/app-and-custom-development",
  },
  { name: "Python and AI agents", href: "/services/ai-agent-development" },
];

// One entry per row; `values` lines up with the tool columns above
const rows = [
  {
    label: "Runs in",
    values: [
      "Desktop Word, Excel, Access, PowerPoint and classic Outlook on Windows",
      "Excel on the web, Windows and Mac, or unattended from a cloud flow",
      "Word, Excel, Outlook and PowerPoint on the web, Windows, Mac and iPad",
      "Excel through Python in Excel, or a hosted service connected to Microsoft 365",
    ],
  },
  {
    label: "Best for",
    values: [
      "Rich desktop automation across several Office apps, including legacy systems",
      "Scheduled or triggered Excel jobs that run without anyone opening the file",
      "Custom ribbons, task panes and functions rolled out to every user at once",
      "Heavy analysis, document processing and agents that read, decide and act",
    ],
  },
  {
    label: "Watch out for",
    values: [
      "Blocked in files from the internet and not supported in the new Outlook",
      "Excel only, no workbook events and time limits when run from a flow",
      "Hosted like a small web app, and some desktop-only features aren't available",
      "Needs clear rules on data access and a person reviewing important actions",
    ],
  },
  {
    label: "Rolled out by",
    values: [
      "Signed templates, add-in files or macro-enabled workbooks in trusted locations",
      "Scripts stored in OneDrive or SharePoint and shared with the workbook",
      "Centralised deployment from your Microsoft 365 admin centre",
      "Python formulas in the workbook, a Teams app or a hosted service",
    ],
  },
];

// Small right chevron for the footer link, coloured through currentColor
const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M6 3l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CustomTechChooser = () => {
  return (
    <section
      className={styles.section}
      id="choosing-a-technology"
      aria-labelledby="tech-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Choosing the right tool</span>
          <h2 id="tech-heading" className={styles.heading}>
            VBA, scripts or add-ins?{" "}
            <span className={styles.accent}>It depends on the job.</span>
          </h2>
          <p>
            There are more ways to customise Office than ever, and each one
            suits a different situation. Picking the wrong one is how businesses
            end up with macros that won't run in the browser, or flows that
            can't reach the file they need. Our developers work across all four,
            so we recommend whatever fits your licences, devices and team rather
            than the one tool we happen to know.
          </p>
        </header>

        {/* Wrapper scrolls sideways on small screens so the table keeps its shape */}
        <div className={styles.scroller}>
          <table className={styles.table}>
            <thead>
              <tr>
                <td aria-hidden="true" />
                {tools.map((tool) => (
                  <th key={tool.name} scope="col">
                    <Link href={tool.href}>{tool.name}</Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {row.values.map((value, i) => (
                    <td key={tools[i].name}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.footer}>
          <p>
            Most projects combine two or more of these. Tell us what you're
            trying to achieve and we'll suggest the right mix.
          </p>
          <Link href="#contact" className={styles.footerLink}>
            Ask for a recommendation
            <ChevronRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomTechChooser;
