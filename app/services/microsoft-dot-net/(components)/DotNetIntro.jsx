// app/services/microsoft-dot-net/(components)/DotNetIntro.jsx
// Opening section, replacing ServiceHero and the old PageSegmentMain. Carries the page's only <h1>.
// The dark lightHero block sits behind the transparent header so the nav stays readable.
// Server component, no client JavaScript required.
import Link from "next/link";

// SCSS module from the shared styles directory
import styles from "@/styles/dotNetIntro.module.scss";
// Decorative code editor illustration stored with the route
import { DotNetCodeSvg } from "../(svgs)/DotNetCodeSvg";

// Anchors match the id on each section further down the page
const onThisPage = [
  { href: "#dotnet-services", label: "Our .NET development services" },
  { href: "#dotnet-support", label: "Is your .NET version supported?" },
  { href: "#dotnet-migration", label: "Moving to modern .NET" },
  { href: "#vsto-add-ins", label: "VSTO and Office add-ins" },
  { href: "#dotnet-ai", label: "Adding AI to .NET apps" },
];

// Small right chevron on each jump link, coloured through currentColor so the hover state applies
const ChevronRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M6 3l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DotNetIntro = () => {
  return (
    <>
      <div className={styles.lightHero}></div>
      <section className={styles.section} id="dotnet-development">
        <div className={styles.inner}>
          <div className={styles.top}>
            {/* ── Left: content ── */}
            <div className={styles.content}>
              <span className={styles.eyebrow}>
                C#, VB.NET and ASP.NET Core developers
              </span>
              <h1 className={styles.heading}>
                Microsoft .NET development,{" "}
                <span className={styles.accent}>
                  from first build to final upgrade
                </span>
              </h1>
              <p>
                Our team of 25+ developers across Australia designs, builds,
                troubleshoots and upgrades .NET applications on everything from
                .NET Framework 3.5 to .NET 10. New projects start with a{" "}
                <Link
                  href="/services/business-analysis"
                  className={styles.link}
                >
                  business analysis session
                </Link>{" "}
                so the software fits the way your people work, and inherited
                ones start with a code review so you know exactly what you have.
              </p>

              <div className={styles.ctaRow}>
                <Link href="#contact" className="btn">
                  Talk to a .NET developer
                </Link>
                <Link href="#dotnet-support" className={styles.link}>
                  Check your .NET version
                </Link>
              </div>
            </div>

            {/* ── Right: illustration ── */}
            <div className={styles.visual}>
              <DotNetCodeSvg />
            </div>
          </div>

          <div className={styles.bottom}>
            <nav className={styles.toc} aria-label="On this page">
              <span className={styles.tocLabel}>On this page</span>
              <ol>
                {onThisPage.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>
                      <span className={styles.tocText}>{item.label}</span>
                      <ChevronRight />
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Deadline hook. The full version table lives in DotNetSupport */}
            <div className={styles.notice}>
              <span className={styles.noticeTag}>Support has ended</span>
              <h2 className={styles.noticeHeading}>
                .NET 8 and .NET 9 stopped receiving security fixes on 10
                November 2026.
              </h2>
              <p>
                Your apps still run, but the next vulnerability found in either
                runtime won&rsquo;t be patched. .NET 10 is the current long-term
                support release. Our{" "}
                <Link
                  href="/services/upgrades-and-migration"
                  className={styles.noticeLink}
                >
                  upgrades and migration
                </Link>{" "}
                team can move you across without starting from scratch.
              </p>
              <a href="#dotnet-support" className={styles.noticeArrow}>
                See every version&rsquo;s support date
                <ChevronRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DotNetIntro;
