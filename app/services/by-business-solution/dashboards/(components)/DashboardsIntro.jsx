// app/services/by-business-solution/dashboards/(components)/DashboardsIntro.jsx
// Opening section under the ServiceHero: positioning copy, CTAs, proof points and the
// dashboard illustration. Server component, no client JavaScript required.
import Link from "next/link";

// Compiled CSS module from the shared styles directory (source: styles/dashboardsIntro.module.scss)
import styles from "../../../../../styles/dashboardsIntro.module.css";

// Decorative illustration stored with the route
import { DashboardSvg } from "../(svgs)/DashboardSvg";

// Proof points shown beneath the CTAs
const stats = [
  { num: "2000", label: "Building reports since" },
  { num: "25+", label: "Developers Australia-wide" },
  { num: "3", label: "Platforms: Power BI, Excel, web" },
];

const DashboardsIntro = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>A Picture can paint 1000 words</span>
          <h2 className={styles.heading}>
            Your numbers in one place,{" "}
            <span className={styles.accent}>always up to date.</span>
          </h2>

          <div className={styles.body}>
            <p>
              Most businesses already have the data they need. It's often spread
              across accounting software, a CRM, spreadsheets and Microsoft 365,
              and requires someone to spends hour each month exporting and
              pasting it all together. We build dashboards that do that work
              automatically, by creating a solid foundation and connectivity
              between all your data sources, the important decisions are made
              with live, up-to-date figures.
            </p>
            <p>
              Our developers build reporting dashboards in Power BI, Excel and
              custom web applications, and we can now add{" "}
              <Link href="#ai-dashboards">
                AI that can further automate data manipulation, watch for
                problems and answer questions in plain English
              </Link>
              .
            </p>
          </div>

          <div className={styles.ctaRow}>
            <Link href="#contact" className="btn">
              Book a free consultation
            </Link>
            <Link href="#dashboard-demos" className={styles.ctaSecondary}>
              Watch the demos
            </Link>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <DashboardSvg />
        </div>
      </div>
    </section>
  );
};

export default DashboardsIntro;
