import React from "react";
import Link from "next/link";
import Image from "next/image";

import maps from "../../public/icons/mapsBlue.webp";
import msg from "../../public/icons/msgBlue.webp";
import emailSlide from "../../public/icons/emailSlideBlue.webp";

const MobileContact = ({ styles }) => {
  return (
    <div className={styles.navContacts}>
      <p>Contact Info</p>
      <div>
        <div className={styles.navContact}>
          <Image src={maps} alt="Location" width={12} height={12} />
          <span>Australia Wide</span>
        </div>
        <div className={styles.navContact}>
          <Image src={emailSlide} alt="email" width={15} height={9} />
          <Link href="mailto:consult@officeexperts.com.au">
            <span>consult@officeexperts.com.au</span>
          </Link>
        </div>

        <div className={styles.navContact}>
          <Image src={msg} alt="email" width={12} height={12} />
          <Link href="tel:+61-1300-12-20-38">
            <span>1300 122 038</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileContact;
