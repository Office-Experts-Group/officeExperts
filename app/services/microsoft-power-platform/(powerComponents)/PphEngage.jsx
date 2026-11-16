// /app/services/microsoft-power-platform/(components)/PphEngage.jsx
import Link from "next/link";

import styles from "@/styles/pphEngage.module.scss";

import { PphArrowIcon, PphPhoneIcon } from "../(svgs)/PphIcons";
import {
  PphQuoteArt,
  PphOngoingArt,
  PphRemoteArt,
  PphTrainingArt,
} from "../(svgs)/PphEngageArt";

const PPH_WAYS = [
  {
    id: "quote",
    title: "Quote or hourly rate",
    text: "A fixed quote for a defined project, or an hourly rate when the scope will evolve.",
    Art: PphQuoteArt,
  },
  {
    id: "ongoing",
    title: "Ongoing support",
    text: "Help when you need it, from quick fixes to regular improvements.",
    Art: PphOngoingArt,
  },
  {
    id: "remote",
    title: "Remote access or onsite",
    text: "Most work is done remotely. We come to you when it helps.",
    Art: PphRemoteArt,
  },
  {
    id: "training",
    title: "Tailored training",
    text: "Sessions built around your solution and your people.",
    Art: PphTrainingArt,
  },
];

const PphEngage = () => (
  <section
    id="pph-engage"
    className={styles.pphEngage}
    aria-labelledby="pph-engage-heading"
  >
    <div className={styles.inner}>
      <div className={styles.grid}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Any questions?</p>
          <h2 id="pph-engage-heading" className={styles.heading}>
            Our experts <span className={styles.accent}>await your call</span>
          </h2>
          <p className={styles.lede}>
            Contact us today to explore how Office Experts can create a
            successful Power Platform experience for your business.
          </p>

          <div className={styles.actions}>
            <a href="tel:1300102810" className={`btn ${styles.phone}`}>
              <PphPhoneIcon /> 1300 102 810
            </a>
            <Link
              href="/contact-us/request-a-quote"
              className={styles.quoteLink}
            >
              Request a quote <PphArrowIcon />
            </Link>
          </div>
        </div>

        <ul className={styles.ways}>
          {PPH_WAYS.map((way) => (
            <li key={way.id} className={styles.way}>
              <div className={styles.wayArt}>
                <way.Art />
              </div>
              <h3 className={styles.wayTitle}>{way.title}</h3>
              <p className={styles.wayText}>{way.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.reach}>
        <p>
          Since 2000, Office Experts has grown into a team of more than 25
          consultants in nearly every major city across Australia. We support
          clients anywhere in Australia and New Zealand, and we’re onsite when
          you need us.
        </p>
        <Link href="/locations" className={styles.reachLink}>
          Find your nearest consultants <PphArrowIcon />
        </Link>
      </div>
    </div>
  </section>
);

export default PphEngage;
