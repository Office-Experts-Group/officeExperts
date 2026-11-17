// /app/services/microsoft-power-platform/(components)/PphTools.jsx
// Standout section: zig-zag storytelling. Each tool gets a large illustration
// panel and an overlapping copy card, alternating sides.
import Link from "next/link";

import styles from "@/styles/pphTools.module.scss";

import { PphArrowIcon } from "../(svgs)/PphIcons";
import {
  PphAppsArt,
  PphBiArt,
  PphAutomateArt,
  PphPagesArt,
} from "../(svgs)/PphToolArt";

const PPH_TOOLS = [
  {
    id: "apps",
    tag: "Business apps",
    title: "Microsoft Power Apps",
    intro:
      "Replace spreadsheets, paper forms and email chains with apps built around the way your team really works.",
    points: [
      "Unique, high-performance custom solutions for your specific business needs.",
      "Seamless connection to the data sources you already use, so nothing is re-keyed.",
      "Automation built in to cut manual effort and lift everyday efficiency.",
    ],
    href: "/services/microsoft-power-platform/power-apps",
    linkText: "Explore Power Apps development",
    Art: PphAppsArt,
    panel: "artLight",
  },
  {
    id: "bi",
    tag: "Reports and dashboards",
    title: "Microsoft Power BI",
    intro:
      "Tailored reports and interactive dashboards that turn your data into timely, informed decisions.",
    points: [
      "Dashboards designed around the questions your business actually asks.",
      "Clear visuals that make trends and exceptions easy to spot.",
      "Interactive filtering so you can dig into the detail yourself.",
    ],
    href: "/services/microsoft-power-platform/power-bi",
    linkText: "Explore Power BI consulting",
    Art: PphBiArt,
    panel: "artDark",
  },
  {
    id: "automate",
    tag: "Workflow automation",
    title: "Microsoft Power Automate",
    intro:
      "Hand the repetitive jobs, such as approvals, notifications and document handling, to automated workflows.",
    points: [
      "Workflows that streamline your processes and cut manual input.",
      "Connections to your existing systems and applications so everything works together.",
      "Built to your requirements, from simple tasks to complex multi-step processes.",
    ],
    href: "/services/microsoft-power-platform/power-automate",
    linkText: "Explore Power Automate",
    Art: PphAutomateArt,
    panel: "artAccent",
  },
  {
    id: "pages",
    tag: "Websites and portals",
    title: "Microsoft Power Pages",
    intro:
      "Secure, polished websites and portals where customers, partners or staff can sign in, submit information and track progress.",
    points: [
      "Engaging web experiences that leave a lasting impression on visitors.",
      "Efficient data collection from your customers on any device.",
      "Sign-in and permissions designed so people only see what they should.",
    ],
    href: "/services/microsoft-power-platform/power-pages",
    linkText: "Explore Power Pages",
    Art: PphPagesArt,
    panel: "artNeutral",
  },
];

const PphTools = () => (
  <section
    id="pph-tools"
    className={styles.pphTools}
    aria-labelledby="pph-tools-heading"
  >
    <div className={styles.inner}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>What we build</p>
        <h2 id="pph-tools-heading" className={styles.heading}>
          Power Apps, Power BI, Power Automate{" "}
          <span className={styles.accent}>and Power Pages</span>
        </h2>
        <p className={styles.lede}>
          Four tools, one platform. We help you pick the right one for each job,
          then design, build and support it.
        </p>
      </header>

      <ul className={styles.list}>
        {PPH_TOOLS.map((tool, i) => (
          <li key={tool.id}>
            <article
              className={`${styles.row} ${i % 2 ? styles.rowFlip : ""}`}
              aria-labelledby={`pph-tools-${tool.id}-heading`}
            >
              <div className={`${styles.art} ${styles[tool.panel]}`}>
                <tool.Art />
              </div>

              <div className={styles.copy}>
                <p className={styles.tag}>{tool.tag}</p>
                <h3
                  id={`pph-tools-${tool.id}-heading`}
                  className={styles.title}
                >
                  {tool.title}
                </h3>
                <p className={styles.intro}>{tool.intro}</p>
                <ul className={styles.points}>
                  {tool.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Link href={tool.href} className={styles.arrowLink}>
                  {tool.linkText} <PphArrowIcon />
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default PphTools;
