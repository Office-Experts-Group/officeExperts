// /app/services/microsoft-power-platform/sharepoint-consulting-and-development/(components)/SpcdHero.jsx
import Link from "next/link";
import SpcdHeroSvg from "../(svgs)/SpcdHeroSvg";
import { SpcdArrowIcon } from "../(svgs)/SpcdIcons";
import styles from "@/styles/spcdHero.module.scss";

const SPCD_TRUST = [
  "Microsoft specialists since 2000",
  "Australian owned",
  "Remote-first, nationwide",
];

const SpcdHero = () => {
  return (
    <section className={styles.spcdHero} aria-labelledby="spcd-hero-heading">
      {/* Dark strip behind the fixed header, as on the site's other light heroes */}
      <div className={styles.headerBlock} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1 id="spcd-hero-heading" className={styles.title}>
            SharePoint Consulting &amp;{" "}
            <span className={styles.accent}>Development Services</span>
          </h1>

          <p className={styles.lede}>
            We set up, migrate and build on SharePoint so your files, intranet
            and everyday approvals live in one well-organised place. Your team
            can find what they need, you can see who changed what, and
            Microsoft&nbsp;365 Copilot has clean, current content to answer
            from.
          </p>

          <div className={styles.actions}>
            <Link href="#contact" className={styles.cta}>
              Get a free assessment
            </Link>
            <Link href="#spcd-services" className={styles.secondary}>
              See how we help
              <SpcdArrowIcon />
            </Link>
          </div>

          <ul className={styles.trust} aria-label="About Office Experts">
            {SPCD_TRUST.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.art}>
          <SpcdHeroSvg flowClass={styles.flow} liveClass={styles.live} />
        </div>
      </div>
    </section>
  );
};

export default SpcdHero;
