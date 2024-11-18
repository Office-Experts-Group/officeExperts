import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import styles from "../styles/testimonialsCard.module.css";

const TestimonialCard = ({ content, name, contact, image }) => {
  // Add defensive check
  if (!image || typeof image !== "object") {
    console.error("Invalid image prop:", image);
    return null;
  }

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <p>&quot;{content}&quot;</p>
        <div className={styles.imageWrapper}>
          <Image
            src={image.src}
            alt={`${contact}'s logo`}
            width={image.width}
            height={image.height}
          />
        </div>
      </div>
      <h4>{name}</h4>
      <h5>{contact}</h5>
    </div>
  );
};

TestimonialCard.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
};

export default TestimonialCard;
