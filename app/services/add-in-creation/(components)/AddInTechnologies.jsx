// /services/add-in-creation/(components)/AddInTechnologies.jsx
// Compares the ways an add-in can be built, so a business can see why the right choice depends on its own environment.
import React from "react";
import Link from "next/link";

import styles from "@/styles/addInTechnologies.module.scss";

// Column headings, repeated on phones as data-label text because the table stacks there
const columns = ["Runs in", "Best for", "Keep in mind"];

const approaches = [
  {
    name: "Office web add-ins (Office.js)",
    runsIn:
      "Office on Windows, Mac and the web. Support varies by app, and covers Excel, Word, PowerPoint, Outlook, OneNote and Project.",
    bestFor:
      "Teams on mixed devices, central deployment, and organisations moving to the new Outlook.",
    keepInMind:
      "Runs in a sandbox, so some deep Windows integration is not possible.",
  },
  {
    name: "VSTO add-ins (.NET)",
    runsIn: "Desktop Office on Windows.",
    bestFor:
      "Deep desktop integration, custom task panes, ribbons and Outlook form regions.",
    keepInMind:
      "Windows only. Not supported in the new Outlook on Windows, though still supported in classic Outlook.",
  },
  {
    name: "COM add-ins",
    runsIn: "Desktop Office on Windows.",
    bestFor:
      "Native performance, and apps such as Access and Publisher that VSTO does not cover.",
    keepInMind: "Installed on each PC, and Windows only.",
  },
  {
    name: "VBA add-ins (.xlam, .dotm and templates)",
    runsIn: "Desktop Office.",
    bestFor:
      "Quick, low-cost tools for a single team, often built from macros you already have.",
    keepInMind:
      "Harder to secure and update across a large organisation, and macro security settings apply.",
  },
  {
    name: "Excel custom functions and XLL",
    runsIn:
      "Custom functions in Excel on Windows, Mac and the web. XLL files in Excel on Windows.",
    bestFor:
      "New worksheet functions your formulas can call, and heavy calculations that need speed.",
    keepInMind: "XLL add-ins are for desktop Excel on Windows only.",
  },
  {
    name: "Teams, SharePoint and Power BI extensions",
    runsIn: "Microsoft 365 and the cloud, through the browser or the app.",
    bestFor:
      "Putting your tools where teams already collaborate, share files and report.",
    keepInMind:
      "Built with web technology and deployed through Microsoft 365, not installed on each PC.",
  },
];

const AddInTechnologies = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Technology options</span>
          <h2 className={styles.heading}>
            The right kind of add-in{" "}
            <span className={styles.accent}>for your environment</span>
          </h2>
          <p className={styles.lead}>
            There is more than one way to build an add-in. The best choice
            depends on where your staff work, which devices they use and how
            much you need to connect to Windows or to other systems. We
            recommend an approach after the analysis stage, not before it.
          </p>
        </header>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <caption className={styles.caption}>
              Add-in technologies compared by where they run, what they suit
              and what to watch for
            </caption>
            <thead>
              <tr>
                <th scope="col">Approach</th>
                {columns.map((column) => (
                  <th key={column} scope="col">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {approaches.map((a) => (
                <tr key={a.name}>
                  <th scope="row">{a.name}</th>
                  <td data-label={columns[0]}>{a.runsIn}</td>
                  <td data-label={columns[1]}>{a.bestFor}</td>
                  <td data-label={columns[2]}>{a.keepInMind}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={styles.note}>
          Not sure which fits? Our consultants map how your people work first,
          then recommend one approach in writing. If the add-in needs to read
          from or write to other software, see our{" "}
          <Link href="/services/3rd-party-application-or-office-integration">
            3rd party app integration
          </Link>{" "}
          and{" "}
          <Link href="/microsoft-365-api-integration">
            Microsoft 365 API integration
          </Link>{" "}
          services. Microsoft changes add-in support from time to time, so we
          check current Microsoft documentation before every build.
        </p>
      </div>
    </section>
  );
};

export default AddInTechnologies;
