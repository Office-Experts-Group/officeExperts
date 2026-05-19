// app/services/microsoft-office-365/copilot/(components)/CopilotIntro.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

// Import compiled CSS module (not the .scss source)
import styles from "../../../../../styles/copilotIntro.module.css";

// The five Office apps Copilot integrates with —
// displayed as anchor links to the detailed app section further down the page
const apps = [
  { label: "Word", id: "word" },
  { label: "Excel", id: "excel" },
  { label: "Power Platform", id: "power-platform" },
  { label: "Outlook", id: "outlook" },
  { label: "Teams", id: "teams" },
];

const CopilotIntro = () => (
  <section className={styles.section}>
    <div className={styles.grid}>
      {/* ── Left: headline + body copy ── */}
      <div className={styles.left}>
        <AnimateOnScroll animation="fade-up" duration={0.6} delay={0}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>365 Copilot</span>

            <h2 className={styles.headline}>
              Forget the Ai Hype...<br></br>
              <span className={styles.accent}>
                See real productivity gains.
              </span>
            </h2>

            <div className={styles.body}>
              <p>
                Microsoft 365 Copilot has been built to sit inside your Office
                apps, it taps into your company&rsquo;s data through Microsoft
                Graph, it's not just another ChatGPT interface, Copilot can read
                your emails, files, and dashboards. It is designed with security
                at the forefront, enabling organisations to allow AI deep into
                their systems without giving away all their data.
              </p>

              <p>
                But rolling out Copilot isn&rsquo;t as simple as switching on a
                licence. Your data governance has to be in shape, SharePoint
                permissions need to be sorted, and your team needs to know how
                to ask Copilot the right questions. If you don't lay down the
                ground rules, you risk unleashing a beast that hallucinates on
                the wrong information or just simply delivers disappointing
                results.
              </p>

              <p>
                We help businesses get Copilot up and running, starting with a{" "}
                <Link href="#delivery" className={styles.bodyLink}>
                  readiness assessment
                </Link>{" "}
                and moving through setup, staff training, and even ongoing
                support. With Microsoft consulting experience dating back to
                2000, we have the knowledge to set the foundations for companies
                looking to move into natural language queries and powerful
                automations in the work space.
              </p>
            </div>

            <Link href="#contact" className={styles.btn}>
              Get a Free Assessment
            </Link>
          </div>
        </AnimateOnScroll>
      </div>

      {/* ── Right: app integration panel ── */}
      <AnimateOnScroll animation="fade-up" duration={0.8} delay={0.15}>
        <div className={styles.right}>
          <div className={styles.panel}>
            <span className={styles.panelLabel}>Copilot works inside</span>

            <div className={styles.appList}>
              {apps.map((app, i) => (
                <a
                  key={app.id}
                  href={`#${app.id}`}
                  className={styles.appItem}
                  style={{ animationDelay: `${0.3 + i * 0.08}s` }}
                >
                  <span className={styles.appIndex}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.appName}>{app.label}</span>
                  <svg
                    className={styles.appArrow}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 3l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ))}
            </div>

            <div className={styles.panelFooter}>
              <span className={styles.panelNote}>
                Your files, emails, meetings &amp; calendars can now be securely
                managed with Copilot's latest features.
              </span>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default CopilotIntro;
