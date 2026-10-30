// /app/services/(components)/CustomDevSection.jsx
// Custom development: a row of technology chips above a terminal style panel listing the services.
import styles from "@/styles/customDevSection.module.scss";
import ServiceLink from "./ServiceLink";
import { CustomDevIcon } from "../(svgs)/CustomDevIcon";

const stack = [
  "JavaScript",
  "PHP",
  ".NET",
  "VBA",
  "Python",
  "React Native",
  "and more",
];

const lines = [
  {
    name: "Business analysis",
    href: "/services/business-analysis",
    description: "Requirements first, so the right thing gets built.",
  },
  {
    name: "App and custom development",
    href: "/services/app-and-custom-development",
    description: "Web apps, portals and mobile apps.",
  },
  {
    name: "Custom Office solutions",
    href: "/services/custom-office-solutions",
    description: "Tailored tools inside the Office apps you use.",
  },
  {
    name: ".NET development",
    href: "/services/microsoft-dot-net",
    description: "Robust business applications.",
  },
  {
    name: "Online solutions",
    href: "/services/online-solutions",
    description: "Bring your process to the web.",
  },
  {
    name: "Add-in creation",
    href: "/services/add-in-creation",
    description: "Extend Office with your own tools.",
  },
  {
    name: "3rd party and Office integration",
    href: "/services/3rd-party-application-or-office-integration",
    description: "Make your systems talk to each other.",
  },
  {
    name: "VBA and macro development",
    href: "/services/vba-macro-development",
    description: "Automation inside Office.",
  },
  {
    name: "VBScript",
    href: "/services/activex-vbscript-migration",
    description: "Scripting and maintenance of existing code.",
  },
  {
    name: "ActiveX and VBScript migration",
    href: "/services/activex-vbscript-migration",
    description: "Retire legacy technology safely.",
  },
  {
    name: "Cloud solutions with Azure",
    href: "/services/cloud-based-solutions-with-azure",
    description: "Hosting and data in the cloud.",
  },
  {
    name: "Remote data gathering",
    href: "/services/remote-data-gathering-from-any-device",
    description: "Collect data from any device.",
  },
];

const CustomDevSection = () => (
  <section
    id="custom-development"
    className={styles.section}
    aria-labelledby="custom-dev-heading"
  >
    <div className={styles.inner}>
      <header className={styles.header}>
        <span className={styles.icon}>
          <CustomDevIcon />
        </span>
        <span className={styles.eyebrow}>Software</span>
        <h2 id="custom-dev-heading" className={styles.heading}>
          Custom development and{" "}
          <span className={styles.accent}>integration</span>
        </h2>
        <p className={styles.intro}>
          When off-the-shelf will not do, our programmers build the system. We
          turn business processes into web apps, portals, add-ins and mobile
          apps.
        </p>
      </header>

      <ul className={styles.stack} aria-label="Technologies we work with">
        {stack.map((tech) => (
          <li key={tech} className={styles.chip}>
            {tech}
          </li>
        ))}
      </ul>

      <div className={styles.terminal}>
        {/* The three coloured dots in the title bar are drawn in CSS and hidden from assistive technology */}
        <div className={styles.bar} aria-hidden="true" />
        <ul className={styles.lines}>
          {lines.map((line) => (
            <li key={line.name} className={styles.line}>
              <h3 className={styles.lineTitle}>
                <ServiceLink href={line.href} className={styles.lineLink}>
                  {line.name}
                </ServiceLink>
              </h3>
              <span className={styles.lineText}>{line.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default CustomDevSection;
