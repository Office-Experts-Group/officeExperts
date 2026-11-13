// /app/services/microsoft-power-platform/sharepoint-consulting-and-development/(components)/SpcdIntro.jsx
import Link from "next/link";
import SpcdIntroArt from "../(svgs)/SpcdIntroArt";
import { SpcdArrowIcon } from "../(svgs)/SpcdIcons";
import styles from "@/styles/spcdIntro.module.scss";

const SPCD_SITUATIONS = [
  {
    art: "files",
    area: "File management",
    problem: "A cluttered file share nobody trusts",
    fix: "Structured libraries with version control and metadata",
  },
  {
    art: "migration",
    area: "Migration",
    problem: "An ageing server past end of support",
    fix: "A planned move to SharePoint Online, with every file accounted for",
  },
  {
    art: "automation",
    area: "Automation",
    problem: "Manual approvals and follow-up work",
    fix: "Automated workflows through Power Automate",
  },
  {
    art: "ai",
    area: "AI readiness",
    problem: "Copilot giving unreliable answers",
    fix: "A clean, governed environment Copilot can actually draw from",
  },
];

const SpcdIntro = () => {
  return (
    <section
      id="spcd-intro"
      className={styles.spcdIntro}
      aria-labelledby="spcd-intro-heading"
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>SharePoint development</span>
          <h2 id="spcd-intro-heading" className={styles.heading}>
            What SharePoint{" "}
            <span className={styles.accent}>should actually do</span> for your
            business
          </h2>
          <p className={styles.lede}>
            Most businesses know SharePoint as a place to store files.
            That&rsquo;s accurate, but incomplete. A properly built SharePoint
            environment also runs your intranet, automates document workflows,
            connects your teams, and underpins the AI tools Microsoft is
            investing in most heavily right now. The gap between what it can do
            and what most organisations get out of it is usually significant.
          </p>
          <p className={styles.lede}>
            We work with Australian businesses to implement, migrate and build
            on SharePoint, and to connect it with the rest of
            Microsoft&nbsp;365. Whether you&rsquo;re starting from scratch,
            moving off an ageing server, or trying to get more out of what you
            already have, we&rsquo;ll tell you what&rsquo;s actually worth
            doing.
          </p>
          <Link href="#contact" className={styles.cta}>
            Get a free assessment
          </Link>
        </div>

        <div className={styles.panel}>
          <p className={styles.panelLabel} id="spcd-intro-table-caption">
            Common situations we fix
          </p>
          <table
            className={styles.table}
            aria-describedby="spcd-intro-table-caption"
          >
            <thead>
              <tr>
                <th scope="col">Area</th>
                <th scope="col">The problem</th>
                <th scope="col">What we do</th>
              </tr>
            </thead>
            <tbody>
              {SPCD_SITUATIONS.map(({ art, area, problem, fix }) => (
                <tr key={area}>
                  <th scope="row" className={styles.areaCell}>
                    <span className={styles.areaInner}>
                      <SpcdIntroArt type={art} />
                      {area}
                    </span>
                  </th>
                  <td className={styles.problemCell} data-label="The problem">
                    {problem}
                  </td>
                  <td className={styles.fixCell} data-label="What we do">
                    <span className={styles.fixInner}>
                      <SpcdArrowIcon className={styles.fixArrow} />
                      <span>{fix}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className={styles.footnote}>
            Wider Microsoft&nbsp;365 work, from Exchange to Teams, is handled by
            the same team. See our{" "}
            <Link href="/services/microsoft-office-365">
              Office&nbsp;365 services
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpcdIntro;
