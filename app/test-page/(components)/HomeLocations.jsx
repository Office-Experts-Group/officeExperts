// app/test-page/(components)/HomeLocations.jsx
// Local presence: an interactive coverage map where every city node links to
// its city page, so the home page passes authority to the location hubs.
// Server component.

import Link from "next/link";

import styles from "@/styles/homeLocations.module.scss";
import { ArrowIcon } from "../(svgs)/HomeIcons";
import { AustralasiaMapLightSvg } from "../(svgs)/AustralasiaMapLightSvg";

// City links live in AustralasiaMapLightSvg.js. Check the newer hubs are live
// before launch: Adelaide, Darwin, Gold Coast, Wollongong, Northern NSW.
const HomeLocations = () => (
  <section className={styles.section} aria-labelledby="home-locations-heading">
    <div className={styles.inner}>
      <div className={styles.copy}>
        <span className={styles.eyebrow}>Locations</span>
        <h2 id="home-locations-heading" className={styles.heading}>
          Local experts, <span className={styles.accent}>Australia-wide</span>
        </h2>
        <p className={styles.intro}>
          Most of our work is done remotely, which keeps things quick and
          affordable wherever you are. When it helps to be in the room, one of
          our consultants can come to you.
        </p>
        <Link href="/locations" className={styles.link}>
          View all locations <ArrowIcon />
        </Link>
      </div>

      <div className={styles.map}>
        <AustralasiaMapLightSvg />
      </div>
    </div>
  </section>
);

export default HomeLocations;
