// /services/microsoft-word/document-automation/(components)/AutomationMain.jsx
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
// Custom route-level SVG icons, one per capability
import IconVBA from "../(svgs)/IconVBA";
import IconBuildingBlocks from "../(svgs)/IconBuildingBlocks";
import IconHeaderFooter from "../(svgs)/IconHeaderFooter";
import IconOneClick from "../(svgs)/IconOneClick";
import IconConsistency from "../(svgs)/IconConsistency";
import IconWorkflow from "../(svgs)/IconWorkflow";
import styles from "@/styles/automationMain.module.scss";

// Each capability can carry an optional link down to its dedicated feature page
const capabilities = [
  {
    Icon: IconVBA,
    title: "VBA & Macro Development",
    description:
      "Custom Visual Basic for Applications code that automates complex, multi-step tasks at the click of a button. Reduce hours of manual work to seconds.",
    link: { href: "/services/vba-macro-development", text: "VBA macro development" },
  },
  {
    Icon: IconBuildingBlocks,
    title: "Building Blocks & Quick Parts",
    description:
      "Pre-built document elements such as covers, tables, boilerplate clauses and signature blocks, all inserted instantly without copying, pasting or reformatting.",
    link: { href: "/services/microsoft-word/quick-parts", text: "Word Quick Parts" },
  },
  {
    Icon: IconHeaderFooter,
    title: "Automated Headers & Footers",
    description:
      "Dynamic header and footer content that updates automatically: document titles, section names, page counts, client details and revisions.",
  },
  {
    Icon: IconOneClick,
    title: "One-Click Page Layouts",
    description:
      "Landscape pages, A3 sections, multi-column layouts and chapter breaks inserted on demand from a custom ribbon. Correctly formatted, every single time.",
    link: {
      href: "/services/microsoft-word/custom-toolbars-and-ribbons",
      text: "Custom Word ribbons",
    },
  },
  {
    Icon: IconConsistency,
    title: "Template Standardisation",
    description:
      "Locked, role-aware templates that enforce brand consistency across your entire team, removing formatting errors before they happen.",
    link: {
      href: "/services/microsoft-word/corporate-global-template-solution",
      text: "Global Template Solution",
    },
  },
  {
    Icon: IconWorkflow,
    title: "End-to-End Workflow Automation",
    description:
      "From data merge and content population through to PDF output and email distribution. Complete document workflows built around your business processes.",
    link: { href: "/services/microsoft-word/mail-merge", text: "Word mail merge" },
  },
];

const AutomationMain = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.intro}>
        <div className={styles.introContent}>
          <p className={styles.eyebrow}>Work Smart, Not Hard</p>
          <h2 className={styles.heading}>
            Stop Repeating Tasks.{" "}
            <span className={styles.accent}>Start Automating.</span>
          </h2>
          <p className={styles.lead}>
            Every hour you or your team spends reformatting headers,
            re-inserting tables or fixing page layouts is an hour lost. Our Word
            automation specialists build custom solutions using VBA macros,
            Building Blocks and intelligent templates that handle the repetitive
            tasks eating into your productivity.
          </p>
          <p className={styles.lead}>
            Whether you need a single macro to automate a nightly report, or a
            fully templated document system rolled out across a 200-person
            organisation, we design solutions that fit into your current
            workflow.
          </p>
        </div>
      </div>

      <div className={styles.list}>
        {capabilities.map(({ Icon, title, description, link }, i) => (
          <AnimateOnScroll
            key={title}
            animation="fade-up"
            duration={0.8}
            delay={0.08 * i}
          >
            <div className={styles.item}>
              <div className={styles.iconWrap}>
                <Icon className={styles.icon} />
              </div>
              <div className={styles.text}>
                <h3 className={styles.itemTitle}>{title}</h3>
                <p className={styles.itemDesc}>{description}</p>
                {link && (
                  <Link href={link.href} className={styles.link}>
                    {link.text}
                  </Link>
                )}
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default AutomationMain;
