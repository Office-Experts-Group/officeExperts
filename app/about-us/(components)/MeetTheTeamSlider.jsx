// MeetTheTeamSlider.jsx
import React from "react";

import styles from "../../../styles/testimonialsSection.module.css";

import { teamMembers } from "../../../meetTheTeam";

import TeamCard from "./TeamCard";

const MeetTheTeamSlider = () => {
  const slidesToAppend = [...teamMembers.slice(0, 3)];
  const extendedTeam = [...teamMembers, ...slidesToAppend];

  return (
    <section className={styles.testimonials}>
      <div className={styles.box}>
        <h2>Office Experts</h2>
      </div>
      <h3 className={styles.teamHeading}>Meet The Team</h3>

      <div
        className={styles.testimonialsWrapper}
        aria-label="Meet the team carousel"
      >
        <div className={styles.testimonialsTrack}>
          {extendedTeam.map((member, index) => (
            <div
              key={`member-${index}`}
              className={styles.testimonialSlide}
              aria-label={`Team member ${(index % teamMembers.length) + 1}`}
            >
              <TeamCard
                image={member.image}
                name={member.name}
                skills={member.skills.join(" - ")}
                role={member.role}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeamSlider;
