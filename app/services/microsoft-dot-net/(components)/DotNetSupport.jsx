// app/services/microsoft-dot-net/(components)/DotNetSupport.jsx
// Support lifecycle for every .NET and .NET Framework version still in common use, with our advice.
// A real <table> so the dates are readable by screen readers and answer engines.
// Dates from Microsoft's .NET and .NET Framework support policies (checked November 2026).
// Server component. The id "dotnet-support" is linked from DotNetIntro.
import Link from "next/link";

// SCSS module from the shared styles directory
import styles from "@/styles/dotNetSupport.module.scss";

// `status` picks the chip style: recommended | supported | ending | ended
const versions = [
  {
    name: ".NET 10",
    status: "recommended",
    statusLabel: "Recommended",
    type: "Long-term support (LTS)",
    ends: "November 2028",
    advice: "Our default target for upgrades and new builds.",
  },
  {
    name: ".NET 11",
    status: "supported",
    statusLabel: "Supported",
    type: "Standard-term support (STS)",
    ends: "24 months from its November 2026 release",
    advice:
      "Suits teams that upgrade every year. Most businesses are better served by .NET 10.",
  },
  {
    name: ".NET 8 and .NET 9",
    status: "ended",
    statusLabel: "Ended",
    type: "LTS and STS",
    ends: "10 November 2026",
    advice:
      "Upgrade to .NET 10. Usually the simplest move on this list, as the code base is already modern .NET.",
  },
  {
    name: ".NET Core 3.1, .NET 6 and .NET 7",
    status: "ended",
    statusLabel: "Ended",
    type: "Various",
    ends: "Between December 2022 and November 2024",
    advice:
      "Upgrade to .NET 10, checking for NuGet packages that have since been retired.",
  },
  {
    name: ".NET Framework 4.8 and 4.8.1",
    status: "supported",
    statusLabel: "Supported",
    type: "Windows component",
    ends: "Follows the Windows version it runs on",
    advice:
      "Fine for VSTO add-ins and Web Forms apps, but 4.8.1 is the final release and no new features are coming.",
  },
  {
    name: ".NET Framework 4.6.2",
    status: "ending",
    statusLabel: "Ending soon",
    type: "Windows component",
    ends: "12 January 2027",
    advice:
      "Retarget to 4.8.1 as a quick fix, then plan the move to .NET 10.",
  },
  {
    name: ".NET Framework 3.5 SP1",
    status: "ending",
    statusLabel: "Ending",
    type: "Fixed lifecycle",
    ends: "9 January 2029",
    advice:
      "Plan a migration now. Apps this old usually need more than a straight upgrade.",
  },
];

const DotNetSupport = () => {
  return (
    <section
      id="dotnet-support"
      className={styles.section}
      aria-labelledby="dotnet-support-heading"
    >
      <div className={styles.inner}>
        <div className={styles.top}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>Support lifecycle</span>
            <h2 id="dotnet-support-heading" className={styles.heading}>
              Is your .NET version{" "}
              <span className={styles.accent}>still supported?</span>
            </h2>
            <p className={styles.intro}>
              Microsoft ships a new version of .NET every November.
              Even-numbered releases get three years of long-term support,
              odd-numbered releases get two years of standard-term support.
              .NET Framework works differently: 4.8.1 is the last version, and
              it is supported for as long as the Windows it runs on.
            </p>
          </header>

          {/* What end of support means in practice */}
          <aside className={styles.callout}>
            <h3 className={styles.calloutTitle}>
              What &ldquo;end of support&rdquo; actually means
            </h3>
            <p>
              Nothing breaks on the day. Your application keeps running, but
              the next security vulnerability found in the runtime will not be
              patched, and Microsoft stops providing technical support. Security
              questionnaires and audits increasingly ask whether your software
              is still vendor-supported, and Azure App Service has already
              asked customers to move .NET 8 apps to .NET 10.
            </p>
          </aside>
        </div>

        {/* Rows stack into cards on phones rather than scrolling sideways */}
        <div>
          <table className={styles.table}>
            <caption className={styles.srOnly}>
              Microsoft .NET and .NET Framework support dates and our upgrade
              advice
            </caption>
            <thead>
              <tr>
                <th scope="col">Version</th>
                <th scope="col">Support type</th>
                <th scope="col">End of support</th>
                <th scope="col">Our advice</th>
              </tr>
            </thead>
            <tbody>
              {versions.map((v) => (
                <tr key={v.name}>
                  <th scope="row">
                    <span className={styles.version}>{v.name}</span>
                    <span className={`${styles.status} ${styles[v.status]}`}>
                      {v.statusLabel}
                    </span>
                  </th>
                  {/* data-label feeds the stacked mobile layout (see the SCSS) */}
                  <td data-label="Support type">{v.type}</td>
                  <td data-label="End of support" className={styles.date}>
                    {v.ends}
                  </td>
                  <td data-label="Our advice">{v.advice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.footer}>
          <p>
            Not sure which version your software runs on? We can check it for
            you, list what needs to change and give you a fixed-scope quote.
            Version upgrades across every platform we support are covered on
            our{" "}
            <Link href="/services/upgrades-and-migration">
              upgrades and migration
            </Link>{" "}
            page.
          </p>
          <Link href="#contact" className="btn">
            Book an upgrade assessment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DotNetSupport;
