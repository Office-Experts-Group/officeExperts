// /services/microsoft-word/custom-toolbars-and-ribbons/(components)/ToolbarsLockdown.jsx
import Image from "next/image";

// Fade-up on scroll, shared across the site group
import AnimateOnScroll from "@/components/AnimateOnScroll";

// Tick and cross list markers (colour comes from the parent stylesheet)
import { TickIcon } from "../(svgs)/TickIcon";
import { CrossIcon } from "../(svgs)/CrossIcon";

import styles from "@/styles/toolbarsLockdown.module.scss";

// Screenshots of the same Home tab under each approach. Static imports give
// Next.js the image size, so the layout does not shift while they load.
import restricted from "@/public/restrictedEditing.webp";
import oegTab from "@/public/oegTab.webp";

// One entry per card. `featured` puts the card on the brand colour, and `Marker`
// is the icon shown beside each point.
const approaches = [
  {
    id: "restricted",
    title: "Restricted Editing",
    image: restricted,
    alt: "Word Home tab with most formatting controls greyed out by Restricted Editing",
    Marker: CrossIcon,
    points: [
      "Most formatting controls are simply switched off",
      "Staff lose tools they genuinely need, which slows everyday work",
      "Locked controls can push people to work around the template",
    ],
  },
  {
    id: "governed",
    title: "A governed custom tab",
    image: oegTab,
    alt: "Word Home tab with the Office Experts governed template applied",
    Marker: TickIcon,
    featured: true,
    points: [
      "Approved controls stay available, grouped on a tab built for your team",
      "Pasted content is matched to your corporate formatting automatically",
      "Staff get consistent results without expert-level Word knowledge",
    ],
  },
];

const ToolbarsLockdown = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Header ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Two approaches</p>
          <h2 className={styles.heading}>
            Locking the ribbon is not the same as{" "}
            <span className={styles.accent}>governing it</span>
          </h2>
          <p className={styles.text}>
            Word&rsquo;s built-in Restricted Editing protects a document by
            switching controls off. A custom tab protects your brand by keeping
            the right controls on and steering them through your approved
            styles.
          </p>
        </header>
      </AnimateOnScroll>

      {/* ── Side-by-side cards ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.1}>
        <div className={styles.grid}>
          {approaches.map(({ id, title, image, alt, Marker, points, featured }) => (
            <article
              key={id}
              className={`${styles.card} ${featured ? styles.cardFeatured : ""}`}
            >
              <h3 className={styles.cardTitle}>{title}</h3>

              {/* Screenshot scrolls sideways on narrow screens so the buttons stay readable */}
              <div className={styles.frame}>
                <Image
                  src={image}
                  alt={alt}
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className={styles.image}
                />
              </div>

              <ul className={styles.points}>
                {points.map((point) => (
                  <li key={point} className={styles.point}>
                    <span className={styles.marker}>
                      <Marker />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default ToolbarsLockdown;
