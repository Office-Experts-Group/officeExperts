// /app/services/microsoft-excel/custom-excel-development/(components)/CexdIntegrations.jsx
import Link from "next/link";

import styles from "@/styles/cexdIntegrations.module.scss";

import {
  CexdVbaIcon,
  CexdExcelIcon,
  CexdOfficeIcon,
  CexdSharepointIcon,
  CexdAzureIcon,
  CexdAccessIcon,
  CexdBiIcon,
  CexdDotNetIcon,
  CexdDocIcon,
  CexdMailIcon,
  CexdSlidesIcon,
  CexdAddinTileIcon,
} from "../(svgs)/CexdTechIcons";

// Office Experts links are relative. Access Experts stays absolute until its wave.
const CEXD_TECHNOLOGIES = [
  {
    name: "VBA / Macros",
    href: "/services/vba-macro-development",
    Icon: CexdVbaIcon,
  },
  {
    name: "Microsoft Azure",
    href: "/services/cloud-based-solutions-with-azure",
    Icon: CexdAzureIcon,
  },
  {
    name: "Microsoft Access",
    href: "https://www.accessexperts.com.au",
    external: true,
    Icon: CexdAccessIcon,
  },
  {
    name: "Power BI",
    href: "/services/microsoft-power-platform/power-bi",
    Icon: CexdBiIcon,
  },
  {
    name: "VB.NET / C#",
    href: "/services/microsoft-dot-net",
    Icon: CexdDotNetIcon,
  },
  {
    name: "Microsoft Word",
    href: "/services/microsoft-word",
    Icon: CexdDocIcon,
  },
  {
    name: "Web Apps",
    href: "/services/online-solutions",
    Icon: CexdExcelIcon,
  },
  {
    name: "Office 365",
    href: "/services/microsoft-office-365",
    Icon: CexdOfficeIcon,
  },
  {
    name: "SharePoint",
    href: "/services/microsoft-power-platform/sharepoint-consulting-and-development",
    Icon: CexdSharepointIcon,
  },
  {
    name: "AI Email Triage",
    href: "/services/ai-email-triage",
    Icon: CexdMailIcon,
  },
  {
    name: "PowerPoint",
    href: "/services/microsoft-powerpoint",
    Icon: CexdSlidesIcon,
  },
  {
    name: "Add-in Development",
    href: "/services/add-in-creation",
    Icon: CexdAddinTileIcon,
  },
];

const CexdIntegrations = () => (
  <section
    className={styles.cexdIntegrations}
    id="cexd-integrations"
    aria-labelledby="cexd-integrations-heading"
  >
    <div className={styles.inner}>
      <div className={styles.copy}>
        <span className={styles.eyebrow}>Integration experts</span>
        <h2 id="cexd-integrations-heading" className={styles.heading}>
          Connect your{" "}
          <span className={styles.accent}>entire Microsoft stack.</span>
        </h2>
        <p className={styles.body}>
          As part of the Office Experts Group, we have access to senior
          developers across all Microsoft Office applications. This allows us to
          provide a comprehensive overview of your entire business systems. We
          don’t just solve a single problem, we provide a fully integrated
          solution.
        </p>
        <Link href="#contact" className={styles.cta}>
          Talk to an expert
        </Link>
      </div>

      <div className={styles.tilesWrap}>
        <p className={styles.tilesLabel}>Technologies we work with</p>
        <ul className={styles.tiles}>
          {CEXD_TECHNOLOGIES.map((tech) => (
            <li key={tech.name}>
              <Link
                href={tech.href}
                className={styles.tile}
                target={tech.external ? "_blank" : undefined}
                rel={tech.external ? "noopener noreferrer" : undefined}
              >
                <span className={styles.tileIcon}>
                  <tech.Icon />
                </span>
                <span className={styles.tileName}>{tech.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default CexdIntegrations;
