// app/services/microsoft-dot-net/(components)/DotNetServices.jsx
// Replaces the old PageSegment7. The six lifecycle services as unordered cards (no numbers,
// as they aren't sequential), then the languages and frameworks the team works in.
// Server component. The id "dotnet-services" is the target of the jump list in DotNetIntro.
import Link from "next/link";

// SCSS module from the shared styles directory
import styles from "@/styles/dotNetServices.module.scss";
// Decorative lifecycle ring stored with the route
import { DotNetLifecycleSvg } from "../(svgs)/DotNetLifecycleSvg";

// Each body is JSX so it can carry inline links
const services = [
  {
    tag: "Plan",
    title: "Analysis and design",
    body: (
      <>
        We map how your team works today, agree what the software needs to do
        and design the architecture before any code is written. Our{" "}
        <Link href="/services/business-analysis">business analysis</Link>{" "}
        process is where most budget blowouts are prevented.
      </>
    ),
  },
  {
    tag: "Build",
    title: "Development and testing",
    body: (
      <>
        Desktop apps in Windows Forms and WPF, web apps and APIs in ASP.NET Core
        and Blazor, and class libraries other systems can call. Code is covered
        by automated tests so later changes don&rsquo;t break what already
        works. See our wider{" "}
        <Link href="/services/app-and-custom-development">
          custom app development
        </Link>{" "}
        work.
      </>
    ),
  },
  {
    tag: "Fix",
    title: "Troubleshooting",
    body: (
      <>
        Crashes, slow screens, errors after a Windows or Office update, or an
        app nobody in-house understands any more. We diagnose the cause, fix it
        and tell you plainly whether the code is worth keeping.
      </>
    ),
  },
  {
    tag: "Move",
    title: "Migration to modern .NET",
    body: (
      <>
        Upgrades from .NET Framework, .NET Core or .NET 8 to .NET 10, including
        Web Forms, WCF and Entity Framework code that needs replacing.{" "}
        <a href="#dotnet-migration">See what changes in a migration</a>.
      </>
    ),
  },
  {
    tag: "Record",
    title: "Documentation",
    body: (
      <>
        Technical documentation, architecture diagrams and handover notes, so
        your software no longer depends on one person remembering how it works.
        We document inherited systems as we learn them.
      </>
    ),
  },
  {
    tag: "Support",
    title: "Maintenance, help and training",
    body: (
      <>
        Ongoing support agreements, monthly security patching, small
        enhancements as the business changes, and training for in-house
        developers taking over a codebase.
      </>
    ),
  },
];

// Languages, frameworks and tools from the original page, brought up to date
const stack = [
  "C#",
  "VB.NET",
  "ASP.NET Core",
  "Blazor",
  "ASP.NET MVC and Web Forms",
  "Windows Forms",
  "WPF",
  "Class library APIs",
  "Entity Framework Core",
  "SQL Server",
  "Azure",
  "Visual Studio",
  "VSTO",
];

const DotNetServices = () => {
  return (
    <section
      id="dotnet-services"
      className={styles.section}
      aria-labelledby="dotnet-services-heading"
    >
      <div className={styles.inner}>
        <div className={styles.top}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>What we do</span>
            <h2 id="dotnet-services-heading" className={styles.heading}>
              The whole .NET software lifecycle,{" "}
              <span className={styles.accent}>under one roof.</span>
            </h2>
            <p className={styles.intro}>
              Some clients need a new application built from scratch. Others
              need one bug fixed in a system that has run quietly for fifteen
              years. Most sit somewhere in between, so our .NET developers
              cover every stage, and the same team stays with you after
              go-live.
            </p>
            <Link href="#contact" className="btn">
              Discuss your project
            </Link>
          </header>

          <div className={styles.visual} aria-hidden="true">
            <DotNetLifecycleSvg />
          </div>
        </div>

        <div className={styles.grid}>
          {services.map(({ tag, title, body }) => (
            <article key={title} className={styles.card}>
              <span className={styles.cardTag}>{tag}</span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardText}>{body}</p>
            </article>
          ))}
        </div>

        <div className={styles.stack}>
          <h3 className={styles.stackTitle}>Languages and frameworks we work in</h3>
          <ul className={styles.chips}>
            {stack.map((item) => (
              <li key={item} className={styles.chip}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DotNetServices;
