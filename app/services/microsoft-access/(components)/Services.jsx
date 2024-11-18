import React from "react";
import Image from "next/image";

import ServicesCard from "../../../../components/ServicesCard";
import AnimateOnScroll from "../../../../components/AnimateOnScroll";

import styles from "../../../../styles/services.module.css";

import dataSol from "../../../../public/microsoft/dataSolNoBG.webp";
import azure from "../../../../public/microsoft/azureNoBG.webp";
import integrate from "../../../../public/microsoft/integrateNoBG.webp";
import upgrades from "../../../../public/microsoft/upgradesNoBG.webp";
import scott from "../../../../public/scott.webp";
import signature from "../../../../public/signature.webp";

const Services = () => {
  return (
    <section className={styles.services}>
      <AnimateOnScroll animation="slide-left" delay={0} duration={1.5}>
        <div className={styles.content}>
          <div className={styles.subBox}>
            <p>
              Database Analysis, Design and Development
              <span> for Microsoft Access</span>
            </p>
          </div>
          <h2>Access Experts Consulting Services</h2>
          <p>
            Our Australia-wide, cross-industry Access database consultants each
            have over 15 years experience and deliver a prompt, quality service
            with innovative solutions and competitive pricing. We excel in
            design, development, database work, integration, support, data
            manipulation and reporting solutions.
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
          <ServicesCard
            src={dataSol}
            alt={"Office environment"}
            h3={"Microsoft Database Solutions"}
            li={[
              "Need a reliable database built by experts with 15+ years experience?",
              "We build cost effective database solutions in most Microsoft technologies.",
            ]}
            link={
              "https://www.officeexperts.com.au/services/by-business-solution/database-development-and-solutions"
            }
          />
          <ServicesCard
            src={azure}
            alt={"Access/Azure Cloud Solutions"}
            h3={"Access/Azure Cloud Solutions"}
            li={[
              "Need an Access database setup to be used remotely?",
              "Using Azure in combination with Access we can setup a custom, cost effective cloud database to suit your needs.",
            ]}
            link={"/access-azure-cloud-based-solutions"}
          />
          <ServicesCard
            src={integrate}
            alt={"3rd Party Product Integration"}
            h3={"3rd Party Product Integration"}
            li={[
              "Need an accounting package, CRM, 3rd party product or Office app linked to Access?",
              "Want to extend 3rd party product functionality with Access?",
            ]}
            link={"/3rd-party-product-integration"}
          />
          <ServicesCard
            src={upgrades}
            alt={"Upgrades and Conversions"}
            h3={"Upgrades and Conversions"}
            li={[
              "Have a database that needs upgrading or is failing after upgrading?",
              "Have a database that needs to be converted from or to another format?",
            ]}
            link={"/upgrades-and-migration"}
          />
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Services;
