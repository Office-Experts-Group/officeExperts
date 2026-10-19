// /app/services/(components)/PowerPlatformSection.jsx
// Power Platform: four large product tiles, then a ruled multi-column list for the supporting services.
import styles from "../../../styles/powerPlatformSection.module.scss";
import ServiceLink from "./ServiceLink";
import { PowerPlatformIcon } from "../(svgs)/PowerPlatformIcon";
import { PowerAppsIcon } from "../(svgs)/PowerAppsIcon";
import { PowerAutomateIcon } from "../(svgs)/PowerAutomateIcon";
import { PowerBiIcon } from "../(svgs)/PowerBiIcon";
import { PowerPagesIcon } from "../(svgs)/PowerPagesIcon";

// Tile icons keyed by the tile name in servicesData.js
const tileIcons = {
  "Power Apps": PowerAppsIcon,
  "Power Automate": PowerAutomateIcon,
  "Power BI": PowerBiIcon,
  "Power Pages": PowerPagesIcon,
};

const PowerPlatformSection = ({ data }) => {
  const { eyebrow, title, intro, tiles, moreTitle, more } = data;

  return (
    <section
      id="power-platform"
      className={styles.section}
      aria-labelledby="power-platform-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <div>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h2 id="power-platform-heading" className={styles.heading}>
              {title}
            </h2>
            <p className={styles.intro}>{intro}</p>
          </div>
          {/* Large faint icon on wide screens, purely decorative */}
          <span className={styles.watermark}>
            <PowerPlatformIcon />
          </span>
        </header>

        <div className={styles.tiles}>
          {tiles.map((tile) => {
            const TileIcon = tileIcons[tile.name];
            return (
              <article key={tile.name} className={styles.tile}>
                <span className={styles.tileIcon}>
                  <TileIcon />
                </span>
                <h3 className={styles.tileTitle}>
                  <ServiceLink href={tile.href} className={styles.tileLink}>
                    {tile.name}
                  </ServiceLink>
                </h3>
                <p className={styles.tileText}>{tile.description}</p>
                <ServiceLink
                  href={tile.support.href}
                  className={styles.support}
                >
                  {tile.support.name}
                </ServiceLink>
              </article>
            );
          })}
        </div>

        <h3 className={styles.moreTitle}>{moreTitle}</h3>
        <ul className={styles.more}>
          {more.map((item) => (
            <li key={item.name} className={styles.moreItem}>
              <ServiceLink href={item.href} className={styles.moreLink}>
                {item.name}
              </ServiceLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PowerPlatformSection;
