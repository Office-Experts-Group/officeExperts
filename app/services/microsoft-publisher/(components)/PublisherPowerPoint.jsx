// app/services/microsoft-publisher/(components)/PublisherPowerPoint.jsx
// Replaces the old PowerPoint segment: positions PowerPoint as the new home for
// design-led single pages, with the capability list and a poster canvas illustration.
// The id "publisher-powerpoint" is linked from the last card in PublisherDestinations.
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

// SCSS module (styles/publisherPowerPoint.module.scss)
import styles from "@/styles/publisherPowerPoint.module.scss";
// Decorative illustration stored with the route
import { PosterCanvasSvg } from "../(svgs)/PosterCanvasSvg";

// What our PowerPoint template builds include
const includes = [
  "Corporate identity built in",
  "Slide Masters with locked layouts",
  "A4, A3 and custom print sizes",
  "Margin and safe-area guides",
  "Brand colour and font themes",
  "VBA automation for repeat jobs",
  "Help and training",
  "Onsite or remote",
];

const PublisherPowerPoint = () => {
  return (
    <section className={styles.section} id="publisher-powerpoint">
      <div className={styles.inner}>
        <AnimateOnScroll animation="slide-left" duration={1}>
          <div className={styles.visual} aria-hidden="true">
            <PosterCanvasSvg />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={0.8} delay={0.2}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>Design-led pieces</span>
            <h2 className={styles.heading}>
              PowerPoint is the new{" "}
              <span className={styles.accent}>page layout tool.</span>
            </h2>

            <div className={styles.body}>
              <p>
                For single designed pages, PowerPoint behaves far more like
                Publisher than Word does. Objects stay exactly where you put
                them, slides can be set to A4, A3 or custom print sizes, and
                finished pages export as high-resolution PDFs or images ready
                for the printer or social media.
              </p>
              <p>
                What it needs is setting up properly. Our designers build
                PowerPoint templates with your corporate identity in the Slide
                Master, so posters, signage and presentations all come from one
                system. See our{" "}
                <Link href="/services/microsoft-powerpoint">
                  PowerPoint template and presentation design
                </Link>{" "}
                services for the full picture.
              </p>
            </div>

            <ul className={styles.points}>
              {includes.map((item) => (
                <li key={item} className={styles.point}>
                  {/* Tick icon, decorative */}
                  <svg
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PublisherPowerPoint;
