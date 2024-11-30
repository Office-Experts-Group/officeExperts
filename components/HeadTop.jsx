import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/header.module.css";

import maps from "../public/icons/mapsBlue.webp";
import msg from "../public/icons/msgBlue.webp";
import emailSlide from "../public/icons/emailSlideBlue.webp";

const HeadTop = () => {
  return (
    <div className={styles.headTop}>
      <p>Welcome to the Office Experts Group</p>

      <div className={styles.topContacts}>
        <div>
          <Image src={maps} alt="Location" width={12} height={12} />
          <span>Australia Wide</span>
        </div>
        <div>
          <Link href="mailto:consult@officeexperts.com.au">
            <Image src={emailSlide} alt="email" width={15} height={9} />
            consult@officeexperts.com.au
          </Link>
        </div>

        <div>
          <Link href="tel:+61-1300-12-20-38">
            <Image src={msg} alt="email" width={12} height={12} />
            1300 122 038
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeadTop;
