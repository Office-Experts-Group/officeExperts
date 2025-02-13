import React from "react";

import ServicesCard from "../../components/ServicesCard";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import CardIntersectionWrapper from "../../components/CardIntersectionWrapper";

import styles from "../../styles/services.module.css";

import excel from "../../public/microsoft/excelNoBG.webp";
import word from "../../public/microsoft/wordNoBG.webp";
import access from "../../public/microsoft/accessNoBG.webp";
import powerPlatform from "../../public/microsoft/powerPlatformNoBG.webp";

const Services = ({ location }) => {
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
          <h2>Microsoft Office Services - {location}</h2>
          <p>
            Our reputation is built on delivering outstanding customer service,
            cutting-edge solutions, and reliable support. With a growing list of
            satisfied clients, we take pride in offering expert troubleshooting,
            customised development, and hands-on guidance to meet diverse
            business needs. Whether it's Excel, Access, Word, Power Platform
            support you're after or a complete Office integration, our expertise
            ensures tailored, effective solutions are delivered that empower
            your team.
          </p>
          <p>
            Working with a local consultant brings the added advantage of
            regional expertise, faster response times and direct, face-to-face
            support when needed. Based in {location}, we are well-positioned to
            provide both remote and onsite assistance, ensuring businesses
            receive timely, professional service from specialists who understand
            their unique challenges.
          </p>
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
