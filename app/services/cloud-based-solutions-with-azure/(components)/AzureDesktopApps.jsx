// app/services/cloud-based-solutions-with-azure/(components)/AzureDesktopApps.jsx
// Windows desktop applications built in Visual Studio (C# or VB.NET) over Azure SQL Database.
// Replaces PageSegment3, which covered the same option in one paragraph.
import Link from "next/link";

// SCSS module (source: styles/azureDesktopApps.module.scss)
import styles from "@/styles/azureDesktopApps.module.scss";
// Custom illustration: a .NET desktop app window with dashboard, chart and data grid
import { DesktopAppSvg } from "../(svgs)/DesktopAppSvg";

const features = [
  {
    title: "No Access licence needed",
    text: "The application installs on its own and updates itself when we publish a new version, so nobody runs an old copy.",
  },
  {
    title: "Sign in with Microsoft 365",
    text: "Users log in with their existing Microsoft Entra ID account, and what they can see or change is controlled by role.",
  },
  {
    title: "Built for heavier workloads",
    text: "Complex calculations, document generation and links to other systems run comfortably in .NET.",
  },
  {
    title: "Ready for the web later",
    text: "The same Azure database and business rules can later power a web portal or mobile app, so nothing is rebuilt.",
  },
];

const AzureDesktopApps = () => {
  return (
    <section className={styles.section} id="visual-studio">
      <div className={styles.inner}>
        {/* ── Left: illustration ── */}
        <div className={styles.visual}>
          <DesktopAppSvg />
        </div>

        {/* ── Right: content ── */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>Desktop apps built in Visual Studio</span>
          <h2 className={styles.heading}>
            When Access isn&apos;t the right front end,{" "}
            <span className={styles.accent}>a .NET desktop app is</span>
          </h2>
          <p className={styles.intro}>
            Some organisations can&apos;t install Access, need tighter control
            over who changes what, or have outgrown what an Access front end can
            do. For these we build a Windows desktop application in Visual Studio
            using C# or VB.NET, with the data held in Azure SQL Database. Staff
            and external users can run it on any Windows PC without connecting
            directly to a server.
          </p>

          <ul className={styles.features}>
            {features.map((item) => (
              <li key={item.title} className={styles.feature}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>

          <Link href="/services/microsoft-dot-net" className={styles.arrowLink}>
            Explore our .NET development services
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M3 7h8M7 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AzureDesktopApps;
