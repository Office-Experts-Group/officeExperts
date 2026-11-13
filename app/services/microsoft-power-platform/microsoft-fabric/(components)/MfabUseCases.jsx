// /app/services/microsoft-power-platform/microsoft-fabric/(components)/MfabUseCases.jsx
// Industry switcher built from radio inputs and CSS only (no client JS).
// Every panel is in the HTML; the stylesheet shows the checked one.

import Link from "next/link";

import styles from "@/styles/mfabUseCases.module.scss";
import { MfabIndustryArt } from "../(svgs)/MfabIndustryArt";
import { MfabArrowIcon } from "../(svgs)/MfabIcons";

const MFAB_INDUSTRIES = [
  {
    id: "financial",
    title: "Financial Services",
    description: "Real-time fraud detection and risk analytics",
    detail:
      "Monitor transactions as they occur, spot suspicious patterns quickly and calculate risk exposure across your whole portfolio from one set of data.",
    workloads: ["Real-Time Intelligence", "Data Science", "Power BI"],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Patient data integration and predictive analytics",
    detail:
      "Bring patient records together from several systems, predict health outcomes and improve the quality of care with a complete view of each patient.",
    workloads: ["Data Factory", "Data Science", "Power BI"],
    link: {
      href: "/case-studies/healthcare-patient-form-followup-automation",
      text: "See our patient follow-up automation on a Fabric warehouse",
    },
  },
  {
    id: "retail",
    title: "Retail",
    description: "Customer behaviour analysis and inventory optimisation",
    detail:
      "Follow customer journeys across every touchpoint, forecast demand more accurately and set stock levels that cut waste while keeping shelves full.",
    workloads: ["Data Warehouse", "Data Science", "Power BI"],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Supply chain optimisation and predictive maintenance",
    detail:
      "Monitor equipment health in real time, predict failures before they happen and run the supply chain with end-to-end visibility.",
    workloads: ["Real-Time Intelligence", "Data Engineering", "Power BI"],
  },
  {
    id: "government",
    title: "Government",
    description: "Data consolidation and reporting compliance",
    detail:
      "Join up data from separate departments, meet reporting and compliance obligations and give stakeholders and the public clear, consistent figures.",
    workloads: ["Data Factory", "Data Warehouse", "Power BI"],
  },
];

const MfabUseCases = () => {
  return (
    <section
      className={styles.mfabUseCases}
      id="mfab-use-cases"
      aria-labelledby="mfab-use-cases-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="mfab-use-cases-heading" className={styles.heading}>
            How businesses use{" "}
            <span className={styles.accent}>Microsoft Fabric</span>
          </h2>
          <p className={styles.text}>
            From financial services to healthcare, manufacturing to government,
            organisations are using Microsoft Fabric to change how they work
            with data. Pick an industry to see how it puts Fabric’s unified
            platform to work.
          </p>
        </header>

        <div className={styles.switcher}>
          {MFAB_INDUSTRIES.map(({ id }, i) => (
            <input
              key={id}
              type="radio"
              name="mfab-industry"
              id={`mfab-industry-${id}`}
              className={styles.radio}
              defaultChecked={i === 0}
            />
          ))}

          <div className={styles.tabList}>
            {MFAB_INDUSTRIES.map(({ id, title }) => (
              <label
                key={id}
                htmlFor={`mfab-industry-${id}`}
                className={styles.tab}
              >
                {title}
              </label>
            ))}
          </div>

          <div className={styles.panels}>
            {MFAB_INDUSTRIES.map(
              ({ id, title, description, detail, workloads, link }) => (
                <div key={id} className={styles.panel}>
                  <div className={styles.art}>
                    <MfabIndustryArt type={id} />
                  </div>
                  <div className={styles.panelCopy}>
                    <h3 className={styles.panelTitle}>{title}</h3>
                    <p className={styles.panelDescription}>{description}</p>
                    <p className={styles.panelDetail}>{detail}</p>
                    <p className={styles.chipsLabel}>Fabric workloads used</p>
                    <ul className={styles.chips}>
                      {workloads.map((w) => (
                        <li key={w}>{w}</li>
                      ))}
                    </ul>
                    {link && (
                      <Link href={link.href} className={styles.panelLink}>
                        {link.text} <MfabArrowIcon />
                      </Link>
                    )}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MfabUseCases;
