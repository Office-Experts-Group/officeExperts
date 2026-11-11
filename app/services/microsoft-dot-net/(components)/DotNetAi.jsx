// app/services/microsoft-dot-net/(components)/DotNetAi.jsx
// Adding AI features to existing .NET applications with Microsoft.Extensions.AI and
// Microsoft Agent Framework, rather than rewriting them in another language.
// Server component. The id "dotnet-ai" is linked from DotNetIntro.
import Link from "next/link";

// SCSS module from the shared styles directory
import styles from "@/styles/dotNetAi.module.scss";
// Decorative agent and tools illustration stored with the route
import { AiAgentSvg } from "../(svgs)/AiAgentSvg";

// Practical AI features we add to .NET apps. Unordered, so no numbers.
const uses = [
  {
    tag: "Ask",
    title: "Plain-English search",
    text: "Staff type a question and get an answer drawn from your SQL Server data, inside the app they already use.",
  },
  {
    tag: "Draft",
    title: "Documents from your records",
    text: "Quotes, letters and summaries written from application data and dropped into your existing Word templates.",
  },
  {
    tag: "Act",
    title: "Agents that use your code",
    text: "Existing C# methods become tools an agent can call, limited to the permissions you choose.",
  },
  {
    tag: "Sort",
    title: "Classify and route",
    text: "Incoming emails, invoices and forms are read, checked and sent to the right queue or person.",
  },
];

const DotNetAi = () => {
  return (
    <section
      id="dotnet-ai"
      className={styles.section}
      aria-labelledby="dotnet-ai-heading"
    >
      <div className={styles.inner}>
        <div className={styles.lead}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>AI in .NET</span>
            <h2 id="dotnet-ai-heading" className={styles.heading}>
              Add AI to the .NET apps{" "}
              <span className={styles.accent}>you already own.</span>
            </h2>
            <p className={styles.intro}>
              You don&rsquo;t need to rewrite a working C# application in
              Python to give it AI features. Microsoft.Extensions.AI gives .NET
              one standard way to talk to language models, so the model
              provider can change without touching the rest of your code.
              Microsoft Agent Framework, which reached version 1.0 in April 2026
              as the successor to Semantic Kernel, adds agents that can call
              your existing code as tools.
            </p>
            <p className={styles.intro}>
              Because the AI runs inside your application, it works within the
              logins, permissions and audit trail you already have. Where{" "}
              <Link href="/services/copilot">Microsoft 365 Copilot</Link>{" "}
              already covers the need, we&rsquo;ll tell you, and when the job
              is bigger than one app, our{" "}
              <Link href="/services/ai-agent-development">
                AI agent development
              </Link>{" "}
              team builds standalone agents.
            </p>
          </header>
          <div className={styles.visual} aria-hidden="true">
            <AiAgentSvg />
          </div>
        </div>

        <div className={styles.uses}>
          {uses.map(({ tag, title, text }) => (
            <article key={title} className={styles.use}>
              <span className={styles.useTag}>{tag}</span>
              <h3 className={styles.useTitle}>{title}</h3>
              <p className={styles.useText}>{text}</p>
            </article>
          ))}
          <Link href="#contact" className={`btn ${styles.cta}`}>
            Talk to us about AI in your app
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DotNetAi;
