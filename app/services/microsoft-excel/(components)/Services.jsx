import React from "react";
import Image from "next/image";

import ServicesCard from "../../../../components/ServicesCard";
import AnimateOnScroll from "../../../../components/AnimateOnScroll";

import styles from "../../../../styles/services.module.css";

import vba from "../../../../public/microsoft/vbaNoBG.webp";
import custom from "../../../../public/microsoft/excelCustomNoBG.webp";
import formula from "../../../../public/microsoft/formulaNoBG.webp";
import addIns from "../../../../public/microsoft/addInsNoBG.webp";

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
          <h2>Australia's Leading Excel Help Service</h2>
          <p>
            Our expert Microsoft Excel programmers are the very best when it
            comes to custom Microsoft Excel programming, development, databases,
            integration, understanding your business needs, support, data
            manipulation and so much more.
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
            src={vba}
            alt={"VBA/Macro Development"}
            h3={"VBA/Macro Development"}
            li={[
              "Need experts in VBA/Macros to help automate tasks or extend Excel functionality?",
              "Our Australian experts each have at least 15 years' experience.",
            ]}
            link={"/vba-macro-development"}
          />
          <ServicesCard
            src={custom}
            alt={"Custom Design & Development"}
            h3={"Custom Design & Development"}
            li={[
              "Custom Workbook creation",
              "VBA/Macro Programming",
              "Professional advice from senior Australian experts",
              "Custom high-end Excel solutions",
            ]}
            link={"custom-design-and-development"}
          />
          <ServicesCard
            src={formula}
            alt={"Formulas"}
            h3={"Formulas"}
            li={[
              "Formula troubleshooting",
              "Complex formula coding",
              "Custom VBA formula setup",
              "Expert help with formulas, VBA or other built in functions.",
            ]}
            link={"/excel-formulas-and-custom-formulas"}
          />
          <ServicesCard
            src={addIns}
            alt={"Add-In Development"}
            h3={"Add-In Development"}
            li={[
              "Add-in development for Excel and other Office products in VSTO?",
              "Macros setup on multiple computers for all Excel workbooks",
            ]}
            link={"/add-in-development"}
          />
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Services;
