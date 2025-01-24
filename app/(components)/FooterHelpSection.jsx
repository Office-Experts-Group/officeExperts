import Link from "next/link";
import React from "react";

import styles from "../../styles/footerHelp.module.css";

const FooterHelpSection = () => {
  return (
    <div className={styles.helpSection}>
      <h3>Help</h3>
      <Link href={"/contact-us"}>Online Enquiry Form</Link>
      <Link href={"/faq"}>FAQ</Link>
      <Link href={"/terms-and-conditions"}>Terms and Conditions</Link>
      <Link href={"/privacy-policy"}>Privacy Policy</Link>
      <Link href={"/refund-policy"}>Refund Policy</Link>
      <Link href={"/looking-for-a-job"}>Looking for a Job?</Link>
    </div>
  );
};

export default FooterHelpSection;
