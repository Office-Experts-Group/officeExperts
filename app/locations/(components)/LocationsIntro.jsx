// app/locations/(components)/LocationsIntro.jsx
import React from "react";

// Compiled CSS module (built from styles/locationsIntro.module.scss)
import styles from "../../../styles/locationsIntro.module.css";

// Single figure in the stats row
const Stat = ({ value, label }) => (
  <li className={styles.stat}>
    <span className={styles.statValue}>{value}</span>
    <span className={styles.statLabel}>{label}</span>
  </li>
);

// Arrow icon, inline SVG so it inherits the link colour via currentColor
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" className={styles.jumpArrow} aria-hidden="true">
    <path
      d="M4 12h16M14 6l6 6-6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Plain anchor links so the jump menu works without any client-side JavaScript.
// Each href matches the id set on the corresponding LocationGroups section.
const JumpTo = ({ sections }) => (
  <nav className={styles.jump} aria-label="Jump to a state or territory">
    <p className={styles.jumpTitle}>Jump to</p>
    <ul className={styles.jumpList}>
      {sections.map(({ id, sectionTitle }, index) => (
        <li key={id}>
          <a href={`#${id}`} className={styles.jumpLink}>
            <span className={styles.jumpIndex}>
              {/* Zero-padded position, e.g. 01, 02 */}
              <span className={styles.jumpNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.jumpDot} />
            </span>
            <span className={styles.jumpName}>{sectionTitle}</span>
            <ArrowIcon />
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

// locationCount and sections are built in page.js from locationData,
// so the figures and jump links can never drift from the cards below
const LocationsIntro = ({ locationCount, sections }) => {
  return (
    <section className={styles.intro}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Microsoft consultants Australia-wide,{" "}
            <span className={styles.accent}>locally supported</span>
          </h2>

          <p className={styles.lead}>
            Office Experts Group has been providing Microsoft consulting,
            development and training since 2000. Our team works with businesses
            across Australia, with consultants based in cities and regions
            throughout the country.
          </p>

          <p className={styles.body}>
            Most projects are handled remotely, from initial discussions and
            requirements analysis through to development, implementation and
            support. Our consultants work directly with your business to
            understand what you need and build a solution that fits. Where
            required, we can also arrange on-site support in the locations
            listed below.
          </p>
          <a
            href="#contact"
            className="btn"
            style={{ marginTop: "2rem", textTransform: "capitalize" }}
          >
            Get a free consultation
          </a>
        </div>

        <JumpTo sections={sections} />
      </div>

      <ul className={styles.stats}>
        <Stat value="2000" label="Established" />
        <Stat value="25+" label="Consultants nationwide" />
        <Stat value={locationCount} label="Local service areas" />
        <Stat value="Remote Support" label="Australia wide" />
      </ul>
    </section>
  );
};

export default LocationsIntro;
