// /app/services/microsoft-power-platform/microsoft-power-apps/(components)/PappsMobility.jsx
import PappsMobilitySvg from "../(svgs)/PappsMobilitySvg";
import { PappsCheckIcon } from "../(svgs)/PappsIcons";

import styles from "@/styles/pappsMobility.module.scss";

const PAPPS_MOBILITY_POINTS = [
  "Cloud-based, so your team can reach it from anywhere with a connection",
  "Works across phone, tablet and browser",
  "Better decisions from up-to-date information",
  "Everyone works from the same shared data",
];

const PappsMobility = () => {
  return (
    <section
      className={styles.pappsMobility}
      id="papps-mobility"
      aria-labelledby="papps-mobility-heading"
    >
      <div className={styles.copy}>
        <h2 id="papps-mobility-heading" className={styles.heading}>
          Unlocking mobility with{" "}
          <span className={styles.accent}>cloud-based Power Apps</span>
        </h2>
        <p className={styles.lede}>
          Because Power Apps runs in the cloud, the people who need an app can
          use it wherever they work: in the office, on site or on the road.
          Changes and new records are shared across devices, so decisions are
          made on current information.
        </p>
        <ul className={styles.points}>
          {PAPPS_MOBILITY_POINTS.map((point) => (
            <li key={point} className={styles.point}>
              <span className={styles.pointIcon}>
                <PappsCheckIcon />
              </span>
              {point}
            </li>
          ))}
        </ul>
        <a href="#contact" className={`btn ${styles.cta}`}>
          Plan your mobile app
        </a>
      </div>

      <div className={styles.art}>
        <PappsMobilitySvg />
      </div>
    </section>
  );
};

export default PappsMobility;
