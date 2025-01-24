import React from "react";
import Image from "next/image";

import ServicesCard from "../../components/ServicesCard";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import CardIntersectionWrapper from "../../components/CardIntersectionWrapper";

import styles from "../../styles/services.module.css";

import excel from "../../public/microsoft/excelNoBG.webp";
import word from "../../public/microsoft/wordNoBG.webp";
import access from "../../public/microsoft/accessNoBG.webp";
import powerPlatform from "../../public/microsoft/powerPlatformNoBG.webp";

import scott from "../../public/scott.webp";
import signature from "../../public/signature.webp";

const Services = () => {
  return (
    <section className={styles.services}>
      <AnimateOnScroll animation="slide-left" delay={0} duration={1.5}>
        <div className={styles.content}>
          <div className={styles.subBox}>
            <p>
              Design, Development and Consulting
              <span> for Microsoft Technologies</span>
            </p>
          </div>
          <h2>Microsoft Office Services</h2>
          <p>
            Specialising in Office and Microsoft technologies, our
            Australia-wide, cross-industry consultants excel in innovative
            design and development, databases, document design and templates,
            dashboards and reporting solutions, corporate identity, automation,
            integration, support, training and data manipulation. We strive to
            deliver a prompt, quality service with competitive pricing.
          </p>
          <div className={styles.signature}>
            <div>
              <Image src={scott} alt="Scott Robinson" width={30} height={30} />
            </div>
            <Image
              src={signature}
              alt="Scott signature"
              width={200}
              height={50}
            />
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-down" delay={0} duration={1.5}>
        <div className={styles.cards}>
          <CardIntersectionWrapper>
            <ServicesCard
              src={excel}
              alt={"Microsoft Excel"}
              h3={"Microsoft Excel"}
              li={[
                "Spreadsheets and Add-ins",
                "Process Data and Automation",
                "Develop VBA macros",
                "Pivot tables, reports, charts",
                "Forms/formulas/functions",
              ]}
              link={"/services/microsoft-excel"}
              linkText={"Excel"}
            />
          </CardIntersectionWrapper>

          <CardIntersectionWrapper>
            <ServicesCard
              src={word}
              alt={"Microsoft Word"}
              h3={"Microsoft Word"}
              li={[
                "Format and design documents",
                "Mail merge",
                "Template creation",
                "Macro development",
              ]}
              link={"/services/microsoft-word"}
              linkText={"Word"}
            />
          </CardIntersectionWrapper>

          <CardIntersectionWrapper>
            <ServicesCard
              src={powerPlatform}
              alt={"Power Platform"}
              h3={"Power Platform"}
              li={[
                "Web enabled Dashboard solutions which auto-refresh from your live databases.",
                "Power BI Business Intelligence solutions.",
                "Effortlessly drill down into your data.",
                "Graphs, charts and other visual solutions to easily monitor the data that matters.",
              ]}
              link={"https://www.powerplatformexperts.com.au/"}
              linkText={"Power Platform"}
            />
          </CardIntersectionWrapper>

          <CardIntersectionWrapper>
            <ServicesCard
              src={access}
              alt={"Microsoft Access"}
              h3={"Microsoft Access"}
              li={[
                "Create and design databases",
                "Automation and upgrades",
                "Review code and fix defects",
                "Integrate financial systems",
              ]}
              link={"/services/microsoft-access"}
              linkText={"Access"}
            />
          </CardIntersectionWrapper>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Services;
