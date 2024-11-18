import Image from "next/image";
import React from "react";
import styles from "../../../styles/teamCard.module.css";

const TeamCard = ({ image, name, skills, role }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={`${name} - ${role}`}
          height={240}
          width={200}
          className={styles.image}
        />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <h4 className={styles.role}>{role}</h4>
      <p className={styles.skills}>{skills}</p>
    </div>
  );
};

export default TeamCard;
