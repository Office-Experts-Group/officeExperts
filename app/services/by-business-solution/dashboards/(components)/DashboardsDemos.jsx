// app/services/by-business-solution/dashboards/(components)/DashboardsDemos.jsx

// Compiled CSS module (source: styles/dashboardsDemos.module.scss)
import styles from "@/styles/dashboardsDemos.module.scss";
// Vimeo videos carried over from the previous page
const demos = [
  {
    platform: "Power BI",
    title: "Power BI dashboard demo",
    text: "A walkthrough of an older interactive Power BI dashboard built Office Experts..",
    src: "https://player.vimeo.com/video/286127973?h=12b183a3fa",
  },
  {
    platform: "Excel",
    title: "Excel dashboard demo",
    text: "An Excel dashboard built by our team, Scott showcases some of the abilities inside Excel.",
    src: "https://player.vimeo.com/video/219956072?h=08ba25eec7",
  },
];

const DashboardsDemos = () => {
  return (
    <section
      id="dashboard-demos"
      className={styles.section}
      aria-labelledby="demos-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Watch a demo</span>
          <h2 id="demos-heading" className={styles.heading}>
            See a dashboard <span className={styles.accent}>in action.</span>
          </h2>
        </header>

        <div className={styles.videos}>
          {demos.map(({ platform, title, text, src }) => (
            <article key={title} className={styles.video}>
              <div className={styles.frame}>
                <iframe
                  src={src}
                  title={title}
                  loading="lazy"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <span className={styles.platform}>{platform}</span>
              <h3 className={styles.videoTitle}>{title}</h3>
              <p className={styles.videoText}>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardsDemos;
