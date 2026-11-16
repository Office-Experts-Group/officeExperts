// /app/services/microsoft-power-platform/(components)/PphTeam.jsx
// Kept from the Power Platform Experts site: same marquee and TeamCard, with
// the wrapper restyled to the site theme.
import Link from "next/link";

import styles from "@/styles/pphTeam.module.scss";

import TeamCard from "../../../about-us/(components)/TeamCard";
import { teamMembers } from "@/meetTheTeam";

import { PphArrowIcon } from "../(svgs)/PphIcons";

const PphTeam = () => {
  // The track is rendered three times so the CSS marquee has enough slides to
  // scroll through before it loops. Only the first copy is real content: the
  // other two are aria-hidden and inert so each person only appears once to
  // search engines, screen readers and find-on-page.
  const tripleTeam = [...teamMembers, ...teamMembers, ...teamMembers];

  return (
    <section
      id="pph-team"
      className={styles.pphTeam}
      aria-labelledby="pph-team-heading"
    >
      <div className={styles.header}>
        <p className={styles.eyebrow}>The people behind the work</p>
        <h2 id="pph-team-heading" className={styles.heading}>
          Meet the <span className={styles.accent}>team</span>
        </h2>
      </div>

      <div
        className={styles.wrapper}
        aria-label="Meet the team carousel"
        tabIndex={0}
      >
        <div
          className={styles.track}
          style={{ "--pph-count": teamMembers.length }}
        >
          {tripleTeam.map((member, index) => {
            const isDuplicate = Math.floor(index / teamMembers.length) > 0;

            return (
              <div
                key={`member-${index}`}
                className={styles.slide}
                aria-label={`Team member ${(index % teamMembers.length) + 1}`}
                aria-hidden={isDuplicate || undefined}
                inert={isDuplicate || undefined}
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

      <div className={styles.foot}>
        <Link href="/about-us" className={styles.btn}>
          Learn about Office Experts
        </Link>
      </div>
    </section>
  );
};

export default PphTeam;
