// app/test-page/(components)/HomeTrust.jsx
// First light section after the dark hero: three reasons to choose us, then a
// static row of client logos. Server component, so no JavaScript is shipped.
// Replaces the old IsRight, CTAMain and rotating Brands sections.

// next/image sizes and lazy loads the client logos
import Image from "next/image";

import styles from "@/styles/homeTrust.module.scss";

// Client logo data shared with the old Brands component ({ src, alt, width, height, href })
import { brandData } from "@/brandData";

import { TeamMapIcon, ChatIcon, SupportIcon } from "../(svgs)/HomeIcons";

const HomeTrust = () => {
  const reasons = [
    {
      Icon: TeamMapIcon,
      title: "A united team across Australia",
      text: "Specialists in nearly every major city, so help is close by, whether we work remotely or on site.",
    },
    {
      Icon: ChatIcon,
      title: "Plain English, start to finish",
      text: "We explain your options in business terms, not tech speak, so you can make decisions with confidence.",
    },
    {
      Icon: SupportIcon,
      title: "Ongoing support, a phone call away",
      text: "We document what we build and stay on hand for changes, training and fixes as your business grows.",
    },
  ];

  return (
    <section className={styles.section} aria-labelledby="home-trust-heading">
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Why work with us</span>
          <h2 id="home-trust-heading" className={styles.heading}>
            From humble beginnings,{" "}
            <span className={styles.accent}>to nation-wide success</span>
          </h2>
          <p className={styles.intro}>
            Office Experts Group began in 2000 in a small office in Northern New
            South Wales. Today we’re a team of more than 25 consultants based in
            nearly every major Australian city, supporting everyone from small
            rural businesses to government organisations and multinational
            corporations.
          </p>
        </header>

        <ul className={styles.reasons}>
          {reasons.map(({ Icon, title, text }) => (
            <li key={title} className={styles.reason}>
              <span className={styles.icon}>
                <Icon />
              </span>
              <h3 className={styles.reasonTitle}>{title}</h3>
              <p className={styles.reasonText}>{text}</p>
            </li>
          ))}
        </ul>

        {/* Static logo row: no rotation, so every logo is visible and crawlable once */}
        <div className={styles.clients}>
          <p className={styles.clientsLabel}>Trusted by teams at</p>
          <ul className={styles.logos}>
            {brandData.slice(0, 6).map((brand) => (
              <li key={brand.alt} className={styles.logo}>
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={brand.width}
                  height={brand.height}
                  className={styles.logoImage}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeTrust;
