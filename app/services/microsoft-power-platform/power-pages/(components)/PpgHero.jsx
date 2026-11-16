// /app/services/microsoft-power-platform/microsoft-power-pages/(components)/PpgHero.jsx

import Link from "next/link";
import styles from "@/styles/ppgHero.module.scss";
import PpgHeroSvg from "../(svgs)/PpgHeroSvg";
import { ArrowIcon, PinIcon, DatabaseIcon, KeyIcon } from "../(svgs)/PpgIcons";

const PPG_HERO_TRUST = [
  { id: "australia", label: "Australia-wide, mostly remote", Icon: PinIcon },
  {
    id: "dataverse",
    label: "Built on Dataverse and Dynamics 365",
    Icon: DatabaseIcon,
  },
  { id: "signin", label: "Azure AD sign-in", Icon: KeyIcon },
];

const PpgHero = () => {
  return (
    <section
      className={styles.ppgHero}
      id="ppg-hero"
      aria-labelledby="ppg-hero-heading"
    >
      <div className={styles.headerBlock} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1 id="ppg-hero-heading" className={styles.title}>
            Microsoft Power Pages{" "}
            <span className={styles.accent}>
              portals, built for your business
            </span>
          </h1>

          <p className={styles.lede}>
            Power Pages lets you put a secure website in front of the data you
            already keep in Dataverse or Dynamics&nbsp;365. Customers, suppliers
            and partners sign in, see their own records, submit forms and view
            dashboards, without you building a custom web application or giving
            anyone access to your internal systems.
          </p>

          <div className={styles.actions}>
            <Link href="#contact" className={styles.cta}>
              Talk to a Power Pages consultant
            </Link>
            <Link href="#ppg-intro" className={styles.arrowLink}>
              See what Power Pages can do
              <ArrowIcon />
            </Link>
          </div>

          <ul className={styles.trust} aria-label="Why clients choose us">
            {PPG_HERO_TRUST.map(({ id, label, Icon }) => (
              <li key={id} className={styles.trustItem}>
                <Icon />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visual}>
          <PpgHeroSvg flowClass={styles.flow} liveClass={styles.live} />
        </div>
      </div>
    </section>
  );
};

export default PpgHero;
