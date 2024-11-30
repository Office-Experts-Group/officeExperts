import React from "react";
import Image from "next/image";
import Link from "next/link";

import SocialLinks from "./SocialLinks";

import styles from "../styles/footerLogo.module.css";

import logo from "../public/logo200x86.webp";
import msg from "../public/icons/msgBlue.webp";
import emailSlide from "../public/icons/emailSlideBlue.webp";

const FooterLogoSection = () => {
  return (
    <div className={styles.footerLogo}>
      <Image src={logo} alt="logo" width={200} height={86} />
      <div className={styles.contact}>
        <h3>Contact Us</h3>
        <Link href={"tel:+61-1300-10-28-10"}>
          <Image src={msg} alt="msg" width={18} height={18} />
          1300 102 810
        </Link>
        <Link href={"mailto:consult@officeexperts.com.au"}>
          <Image src={emailSlide} alt="msg" width={22} height={13} />
          consult@officeexperts.com.au
        </Link>
      </div>

      <h3>Follow Us</h3>
      <SocialLinks />
    </div>
  );
};

export default FooterLogoSection;
