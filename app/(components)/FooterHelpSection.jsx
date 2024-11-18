import Link from "next/link";
import React from "react";
// import Image from "next/image";

// import msg from "../../public/icons/msg.png";
// import emailSlide from "../../public/icons/emailSlide.png";

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
      {/* <h3>Contact Us</h3>
      <Link href={"tel:+61-1300-10-28-10"}>
        <Image src={msg} alt="msg" width={18} height={18} />
        1300 10 28 10
      </Link>
      <Link href={"mailto:consult@powerplatformexperts.com.au"}>
        <Image src={emailSlide} alt="msg" width={22} height={13} />
        consult@powerplatformexperts.com.au
      </Link> */}
    </div>
  );
};

export default FooterHelpSection;
