import React from "react";
import Image from "next/image";

import styles from "../styles/meetTheTeam.module.css";

import { teamMembers } from "../meetTheTeam";

const MeetTheTeam = () => {
  return (
    <section className={styles.meetTheTeam}>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={`${member.name}-${index}`} className={styles.teamMember}>
            <div className={styles.imageWrapper}>
              <Image
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                width={200}
                height={244}
                className={styles.memberImage}
              />
            </div>
            <div className={styles.memberInfo}>
              <h2>{member.name}</h2>
              <h3>{member.role}</h3>
              <p className={styles.skills}>{member.skills.join(" • ")}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
