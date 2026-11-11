// app/services/microsoft-dot-net/(components)/DotNetMigration.jsx
// What changes when a .NET Framework app moves to modern .NET, technology by technology,
// then the migration process (genuinely sequential, so numbered) and a note on AI upgrade tooling.
// Server component. The id "dotnet-migration" is linked from DotNetIntro and DotNetServices.
import Link from "next/link";

// SCSS module from the shared styles directory
import styles from "@/styles/dotNetMigration.module.scss";
// Decorative migration path illustration stored with the route
import { MigrationPathSvg } from "../(svgs)/MigrationPathSvg";

// One row per technology: where it starts, where it lands, how much work to expect
const paths = [
  {
    from: "Windows Forms and WPF",
    to: ".NET 10 on Windows",
    effort: "Light",
    note: "Desktop apps usually move across with project file changes and package updates. They stay Windows-only, which suits most internal tools.",
  },
  {
    from: "ASP.NET MVC and Web API",
    to: "ASP.NET Core",
    effort: "Moderate",
    note: "Routing, configuration and authentication change. Large sites can move route by route while the old site keeps serving the rest.",
  },
  {
    from: "ASP.NET Web Forms",
    to: "Blazor or Razor Pages",
    effort: "UI rewrite",
    note: "Web Forms was never brought to modern .NET. Pages and controls are rebuilt, while the business logic and database underneath are reused.",
  },
  {
    from: "WCF services",
    to: "ASP.NET Core Web API, gRPC or CoreWCF",
    effort: "Moderate to high",
    note: "Modern .NET can call WCF services but can't host them. CoreWCF covers common cases, though not every WCF feature.",
  },
  {
    from: "Entity Framework 6",
    to: "Entity Framework Core",
    effort: "Moderate",
    note: "Most queries carry over. Features such as EntitySQL and the visual model designer need replacing with LINQ and code-first models.",
  },
  {
    from: "VB.NET code",
    to: "VB.NET libraries or C#",
    effort: "Varies",
    note: "Visual Basic still runs on modern .NET, but Microsoft no longer adds language features and ASP.NET Core only uses it through class libraries.",
  },
];

// The migration process. Order matters here, so these are numbered.
const steps = [
  {
    title: "Assess",
    text: "List every project, package, third-party control and API the app uses, and flag anything that doesn't exist in modern .NET.",
  },
  {
    title: "Plan",
    text: "Agree the target version, the order projects move in, and whether to upgrade in place or run old and new side by side.",
  },
  {
    title: "Upgrade in stages",
    text: "Shared libraries move first so both versions can use them, then each application. Nothing goes dark for months.",
  },
  {
    title: "Test",
    text: "Automated tests plus side-by-side comparisons against the original, so reports and calculations match to the cent.",
  },
  {
    title: "Release and support",
    text: "Deployment, monitoring through the first weeks, updated documentation and ongoing patching.",
  },
];

const DotNetMigration = () => {
  return (
    <section
      id="dotnet-migration"
      className={styles.section}
      aria-labelledby="dotnet-migration-heading"
    >
      <div className={styles.inner}>
        <div className={styles.top}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>.NET migration</span>
            <h2 id="dotnet-migration-heading" className={styles.heading}>
              Moving from .NET Framework{" "}
              <span className={styles.accent}>to modern .NET</span>
            </h2>
            <p className={styles.intro}>
              Modern .NET is faster, runs on Windows, Linux and in containers,
              and gets new features every year. Getting there is rarely one
              click. Some parts of a .NET Framework app move across with small
              changes, others were never brought forward by Microsoft and need
              replacing. Knowing which is which is the difference between an
              accurate quote and a blown budget.
            </p>
          </header>
          <div className={styles.visual} aria-hidden="true">
            <MigrationPathSvg />
          </div>
        </div>

        {/* ── Technology by technology ── */}
        <div className={styles.paths}>
          {paths.map(({ from, to, effort, note }) => (
            <article key={from} className={styles.path}>
              <div className={styles.pathRoute}>
                <h3 className={styles.pathFrom}>{from}</h3>
                <span className={styles.pathTo}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 8h11M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {to}
                </span>
              </div>
              <p className={styles.pathNote}>{note}</p>
              <span className={styles.effort}>
                <span className={styles.effortLabel}>Effort</span>
                {effort}
              </span>
            </article>
          ))}
        </div>

        {/* ── Process ── */}
        <div className={styles.process}>
          <h3 className={styles.processTitle}>How we run a migration</h3>
          <ol className={styles.steps}>
            {steps.map(({ title, text }, i) => (
              <li key={title} className={styles.step}>
                <span className={styles.stepNum} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className={styles.stepTitle}>{title}</h4>
                <p className={styles.stepText}>{text}</p>
              </li>
            ))}
          </ol>

          {/* AI upgrade tooling: what it does and where it stops */}
          <div className={styles.tooling}>
            <h4 className={styles.toolingTitle}>
              What about AI upgrade tools?
            </h4>
            <p>
              Microsoft has deprecated the free .NET Upgrade Assistant in
              favour of GitHub Copilot app modernization, an AI agent that
              plans an upgrade and rewrites code. It speeds up the repetitive
              parts, but it needs a paid Copilot licence, works on C# projects
              only, and every change it makes still needs an experienced
              developer to review it. VB.NET apps and anything with unusual
              third-party controls still come down to people who have done this
              before. See our{" "}
              <Link href="/services/upgrades-and-migration">
                upgrades and migration
              </Link>{" "}
              service for how we scope this work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DotNetMigration;
