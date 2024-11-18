import React from "react";
import Image from "next/image";

import ServicesCard from "../../../../components/ServicesCard";
import AnimateOnScroll from "../../../../components/AnimateOnScroll";

import styles from "../../../../styles/services.module.css";

import corporate from "../../../../public/microsoft/corporateNoBG.webp";
import word from "../../../../public/microsoft/wordNoBG.webp";
import accessibility from "../../../../public/microsoft/accessibilityNoBG.webp";
import quickParts from "../../../../public/microsoft/quickPartsNoBG.webp";
import scott from "../../../../public/scott.webp";
import signature from "../../../../public/signature.webp";

const Services = () => {
  return (
    <section className={styles.services}>
      <AnimateOnScroll animation="slide-left" delay={0} duration={1.5}>
        <div className={styles.content}>
          <div className={styles.subBox}>
            <p>
              Document Design and Development
              <span> for Microsoft Word</span>
            </p>
          </div>
          <h2>Microsoft Word Designer & Consultants</h2>
          <p>
            When it comes to Microsoft Word, our Australia-wide, cross-industry
            consultants deliver a prompt, quality service with competitive
            pricing. Our Microsoft Word experts specialise in templates,
            document design, forms, online documents, accessibility,
            integration, training and support.
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
            src={corporate}
            alt={"Corporate Global Template Solution"}
            h3={"Corporate Global Template Solution"}
            li={[
              "Our advanced Corporate Word Template Solution enables users to efficiently create corporate documents in a controlled environment within your branding guidelines.",
            ]}
            link={"/corporate-global-template-solution"}
          />
          <ServicesCard
            src={word}
            alt={"Word Document & Template Creation"}
            h3={"Word Document & Template Creation"}
            li={[
              "Let us take the stress out of your company templates. We create easy to use templates for all of your organisation's documents with your branding, a consistent look and a professional feel.",
            ]}
            link={"/word-document-template-creation"}
          />
          <ServicesCard
            src={accessibility}
            alt={"Accessibility"}
            h3={"Accessibility"}
            li={[
              "Templates created to Accessibility Guidelines.",
              "Ensure your Corporate or Government documentation adheres to Accessibility Guidelines.",
            ]}
            link={"/accessibility"}
          />
          <ServicesCard
            src={quickParts}
            alt={"Quick Parts"}
            h3={"Quick Parts"}
            li={[
              "Increase productivity and reduce repetition",
              "With Quick Parts and Building Blocks we can pre-design page layouts, content, image placements and more for easy insertion by users",
            ]}
            link={"/quick-parts"}
          />
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Services;
