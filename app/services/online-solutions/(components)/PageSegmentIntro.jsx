import styles from "@/styles/introduction.module.scss";
import IntroDropdowns from "./IntroDropdowns";

const PageSegmentIntro = () => {
  return (
    <>
      <div className={styles.heroPad}></div>
      <section className={`${styles.introVisible} ${styles.intro}`}>
        {/* ── Top: headline block ── */}
        <div className={styles.headlineBlock}>
          <div className={styles.eyebrow}>Online Solutions</div>
          <h1 className={styles.headline}>
            Your systems should work for you.
            <br />
            <span className={styles.accent}>We make sure they do</span>
          </h1>
          <div className={styles.introBody}>
            <p>
              Most businesses don&rsquo;t need more software, they need their
              existing tools to actually work together. We&rsquo;ve spent over
              25 years helping Australian businesses untangle manual processes,
              connect their platforms and build online systems that make
              everyday work a lot less painful.
            </p>
            <p>
              Our development teams uses a huge variety of tools for an equally
              diverse range of businesses. We have found that there is no
              one-size-fits-all solution, Power pages may be the perfect tool
              for organisations with existing Power Platform integrations,
              whilst JavaScript applications can become the lightning fast tool
              to that connects your team through desktop and mobile, in the
              office or out in the field.
            </p>
          </div>
        </div>

        <IntroDropdowns />
      </section>
    </>
  );
};

export default PageSegmentIntro;
