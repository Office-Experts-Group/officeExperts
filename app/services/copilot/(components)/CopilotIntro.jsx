// app/services/copilot/(components)/CopilotIntro.jsx
import React from "react";
import Link from "next/link";

// Import compiled CSS module (not the .scss source)
import styles from "@/styles/copilotIntro.module.scss";
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
  <>
    <div className={styles.lightHeroBlock}></div>
    <section className={styles.section}>
      <div className={styles.grid}>
        {/* ── Left: headline + body copy ── */}
        <div className={styles.left}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>Microsoft 365 Copilot</span>

            <h1 className={styles.headline}>
              Forget the Ai Hype...<br></br>
              <span className={styles.accent}>
                See real productivity gains.
              </span>
            </h1>

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
        </div>

        {/* ── Right: app integration panel ── */}
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
      </div>
    </section>
  </>
);

export default CopilotIntro;
