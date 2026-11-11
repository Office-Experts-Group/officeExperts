// app/services/cloud-based-solutions-with-azure/(components)/AzureIntro.jsx
// Page opener with the H1. Replaces PageSegmentMain2 (hero image, contents box and the Access intro)
// and PageSegment4 (the "Cloud Based Options" tick list), which listed the same four options twice.
// The jump list below now does the job of both, and the accent panel explains why Azure.
import Link from "next/link";

// SCSS module (source: styles/azureIntro.module.scss)
import styles from "@/styles/azureIntro.module.scss";
// Custom illustration: Azure database in a cloud feeding Access, web and mobile front ends
import { AzureCloudSvg } from "../(svgs)/AzureCloudSvg";

// Anchors match the id on each section further down the page.
// The original ids are kept so existing links to this page still land in the right place.
const onThisPage = [
  { href: "#access", label: "Access with an Azure back end" },
  { href: "#visual-studio", label: "Desktop apps built in Visual Studio" },
  {
    href: "#integrated-solutions",
    label: "Web, mobile and database integration",
  },
  { href: "#sharePoint-solutions", label: "SharePoint and Microsoft 365" },
  { href: "#cloud-based-solutions", label: "How we get you on the cloud" },
];

// Short facts shown in the accent panel
const facts = [
  {
    value: "Up to 35 days",
    text: "of point-in-time restore, so a bad import can be rolled back",
  },
  {
    value: "Entra ID",
    text: "Microsoft sign-in with multi-factor authentication for every user",
  },
  {
    value: "Pay monthly",
    text: "and scale up or down without buying or replacing a server",
  },
];

// Small right arrow on each jump link, coloured through currentColor so the hover state applies
const ArrowRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AzureIntro = () => {
  return (
    <>
      <div className={styles.lightHero}></div>
      <section className={styles.section} id="cloud-based-options">
        <div className={styles.inner}>
          <div className={styles.top}>
            {/* ── Left: content ── */}
            <div className={styles.content}>
              <span className={styles.eyebrow}>Microsoft cloud solutions</span>
              <h1 className={styles.heading}>
                Cloud based solutions{" "}
                <span className={styles.accent}>built on Microsoft Azure</span>
              </h1>
              <p>
                Most of the systems we move to the cloud already work in the
                office. An Access database, a desktop app or a set of
                spreadsheets the business depends on. Moving the data into Azure
                means staff, customers and partners can use it from anywhere.
              </p>
              <p>
                Our team of 25+ Microsoft developers has been building database
                and Office solutions for Australian businesses since 2000. We
                host your data in Azure SQL Database, then connect whichever
                front end suits your people: Access, a Windows desktop app, a
                web portal, a mobile app or Microsoft 365. Not sure which? Start
                with a{" "}
                <Link
                  href="/services/business-analysis"
                  className={styles.link}
                >
                  business analysis session
                </Link>
                .
              </p>

              <div className={styles.ctaRow}>
                <Link href="#contact" className="btn">
                  Talk to an Azure developer
                </Link>
                <Link href="/case-studies" className={styles.link}>
                  See our case studies
                </Link>
              </div>
            </div>

            {/* ── Right: illustration ── */}
            <div className={styles.visual}>
              <AzureCloudSvg />
            </div>
          </div>

          <div className={styles.bottom}>
            {/* ── Numbered jump list ── */}
            <nav className={styles.toc} aria-label="On this page">
              <span className={styles.tocLabel}>Cloud based options</span>
              <ol>
                {onThisPage.map((item, i) => (
                  <li key={item.href}>
                    <a href={item.href}>
                      <span className={styles.tocNum}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={styles.tocText}>{item.label}</span>
                      <ArrowRight />
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* ── Why Azure: accent panel with light text ── */}
            <div className={styles.why}>
              <p className={styles.whyLabel}>
                Why Azure for Australian businesses
              </p>
              <h2 className={styles.whyHeading}>
                Your data stays onshore, backed up and behind Microsoft sign-in
              </h2>
              <p>
                Azure has four data centre regions in Australia: Australia East
                in New South Wales, Australia Southeast in Victoria and two
                Australia Central regions in Canberra. We host your database in
                the region that suits you, so your data is stored at rest in
                Australia.
              </p>
              <dl className={styles.facts}>
                {facts.map((fact) => (
                  <div key={fact.value} className={styles.fact}>
                    <dt>{fact.value}</dt>
                    <dd>{fact.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AzureIntro;
