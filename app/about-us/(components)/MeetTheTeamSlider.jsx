"use client";
import React, { useEffect, useRef } from "react";
import styles from "../../../styles/testimonialsSection.module.css";
import { teamMembers } from "../../../meetTheTeam";
import TeamCard from "./TeamCard";

const MeetTheTeamSlider = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Clone the track content for seamless looping
    const cloneSlides = () => {
      const slides = track.children;
      const slideWidth = slides[0].offsetWidth;
      const slideCount = teamMembers.length;

      // Reset position when reaching end of original slides
      const handleScroll = () => {
        if (track.scrollLeft === 0) {
          track.scrollLeft = slideWidth * slideCount;
        } else if (track.scrollLeft >= slideWidth * slideCount * 2) {
          track.scrollLeft = slideWidth * slideCount;
        }
      };

      track.addEventListener("scroll", handleScroll);

      // Start animation
      let scrollPos = 0;
      const animate = () => {
        scrollPos += 0.5; // Adjust speed as needed
        track.scrollLeft = scrollPos;
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);

      return () => track.removeEventListener("scroll", handleScroll);
    };

    const cleanup = cloneSlides();
    return cleanup;
  }, []);

  // Create three sets of slides for seamless looping
  const tripleTeam = [...teamMembers, ...teamMembers, ...teamMembers];

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
        <div ref={trackRef} className={styles.testimonialsTrack}>
          {tripleTeam.map((member, index) => (
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
