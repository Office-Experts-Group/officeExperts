// /about-us/components/MeetTheTeamSlider.jsx

import styles from "../../../styles/meetTheTeamSlider.module.css";
import { teamMembers } from "../../../meetTheTeam";
import TeamCard from "./TeamCard";

const MeetTheTeamSlider = () => {
  // The track is rendered three times over so the CSS keyframe animation
  // (slideTrack, defined in meetTheTeamSlider.module.scss) has enough
  // slides to scroll through before looping back to the start, giving
  // the illusion of an endless marquee. This is a purely visual trick —
  // only the FIRST copy is real content, so the 2nd and 3rd copies are
  // marked aria-hidden + inert below to stop them being read out to
  // search engines, screen readers, or find-on-page. This is the fix for
  // the duplicate-content SEO issue: the DOM node count for the marquee
  // is unchanged, but only one set of names/roles/skills is now
  // discoverable as real page content.
  const tripleTeam = [...teamMembers, ...teamMembers, ...teamMembers];

  return (
    <section className={styles.teamSlider}>
      <div className={styles.box}>
        <h2>Office Experts</h2>
      </div>
      <h3 className={styles.teamHeading}>Meet The Team</h3>

      <div className={styles.sliderWrapper} aria-label="Meet the team carousel">
        <div className={styles.sliderTrack}>
          {tripleTeam.map((member, index) => {
            // Which of the three clone sets this slide belongs to (0, 1, 2).
            const setIndex = Math.floor(index / teamMembers.length);
            const isDuplicate = setIndex > 0;

            return (
              <div
                key={`member-${index}`}
                className={styles.slide}
                aria-label={`Team member ${(index % teamMembers.length) + 1}`}
                // Duplicate clone sets are hidden from assistive tech and
                // crawlers so each team member's details only exist once
                // in the accessible/indexable content of the page.
                aria-hidden={isDuplicate || undefined}
                inert={isDuplicate ? "true" : undefined}
              >
                <TeamCard
                  image={member.image}
                  name={member.name}
                  skills={member.skills.join(" - ")}
                  role={member.role}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeamSlider;
