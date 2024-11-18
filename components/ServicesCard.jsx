import React from "react";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

import styles from "../styles/servicesCard.module.css";

const ServicesCard = ({ src, alt, h3, li, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src={src}
          alt={alt}
          className={styles.cardImg}
          height={100}
          width={100}
        />
        <h3>{h3}</h3>
      </div>

      <div className={styles.cardContent}>
        <h4>{h3}</h4>
        <ul>
          {li.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Link href={link}>
          Learn more
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;

ServicesCard.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  h3: PropTypes.string,
  li: PropTypes.array,
  link: PropTypes.string,
};
