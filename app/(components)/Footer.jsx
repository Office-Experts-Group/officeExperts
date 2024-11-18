import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../components/AnimateOnScroll";
import FooterServicesSection from "./FooterServicesSection";
import FooterLocationsSection from "../../components/FooterLocationsSection";
import FooterLogoSection from "../../components/FooterLogoSection";
import FooterHelpSection from "./FooterHelpSection";

import styles from "../../styles/footer.module.css";

import footerImg from "../../public/footerImg800x600.webp";
import semi from "../../public/shapes/semi600x600.webp";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image
        className={styles.bgImg}
        src={footerImg}
        alt="footer image"
        width={800}
        height={600}
      />
      <AnimateOnScroll animation="fade-up" delay={0} duration={1}>
        <FooterLogoSection />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={0.1} duration={1}>
        <FooterServicesSection />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={0.2} duration={1}>
        <FooterLocationsSection />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={0.3} duration={1}>
        <FooterHelpSection />
      </AnimateOnScroll>
      <Image
        className={styles.semi}
        src={semi}
        alt="footer image"
        width={600}
        height={600}
      />
    </footer>
  );
};

export default Footer;
