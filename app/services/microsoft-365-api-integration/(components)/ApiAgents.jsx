// app/services/microsoft-365-api-integration/(components)/ApiAgents.jsx
// Dark section covering the 2026 AI layer: MCP servers, Copilot APIs and
// agents that call Office add-ins. Facts current as of October 2026.

import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import { AgentFlowSvg } from "../(svgs)/AgentFlowSvg";
import { ArrowIcon } from "../(svgs)/ArrowIcon";

import styles from "@/styles/apiAgents.module.scss";

// Each option gets a status label so readers can see what's production-ready
const options = [
  {
    id: "agent365",
    status: "Generally available",
    title: "Microsoft-hosted MCP servers",
    text: "Agent 365 tooling servers give an agent governed access to Outlook mail and calendar, SharePoint and OneDrive and Copilot Search, acting on behalf of the signed-in user. IT manages them from the Microsoft 365 admin centre. They need Agent 365 and Microsoft 365 Copilot licensing.",
  },
  {
    id: "dataverse",
    status: "Generally available",
    title: "Dataverse and custom MCP servers",
    text: "Dataverse has its own MCP server that respects your security roles, and Power Platform can now publish custom MCP servers assembled from existing connector actions, with data loss prevention applied per tool. Copilot Studio or another agent can then work with your records without a direct database connection.",
  },
  {
    id: "retrieval",
    status: "Licence dependent",
    title: "Copilot Retrieval API",
    text: "Grounds your own app or agent in SharePoint, OneDrive and Copilot connector content, returning permission-trimmed text, so people only get answers drawn from documents they could already open. It's included with Copilot licences, with pay-as-you-go access in preview for other users.",
  },
  {
    id: "addins",
    status: "Preview",
    title: "Copilot agents inside Office add-ins",
    text: "The unified manifest now packages an Office add-in, a Teams app and a Copilot agent together. Microsoft is previewing agents that call an add-in's own functions, so a request like “fill this proposal from the CRM” can run the same code your add-in button does.",
  },
];

const ApiAgents = () => (
  <section className={styles.section} id="ai-agents">
    <div className={styles.inner}>
      <div className={styles.top}>
        <AnimateOnScroll animation="fade-up" duration={0.6}>
          <div>
            <p className={styles.eyebrow}>AI agents and MCP</p>
            <h2 className={styles.heading}>
              The newest integration layer:{" "}
              <span className={styles.accent}>
                agents that act inside Microsoft 365.
              </span>
            </h2>
            <p className={styles.text}>
              Until recently, an integration was code that followed fixed rules.
              The same Microsoft 365 data can now also be reached by AI agents,
              which read a request in plain English and choose which tool to
              call. Microsoft has standardised much of this on the Model Context
              Protocol (MCP), an open way for agents to discover and use tools,
              with permissions and audit applied in the middle.
            </p>
            <p className={styles.text}>
              We build agents in Copilot Studio when your licensing and
              governance are already in place, and fully custom agents in Python
              or JavaScript when they don&rsquo;t need to live inside your
              tenant. Either way, the agent only gets the access it needs for
              one job.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={0.8} delay={0.15}>
          <div className={styles.visual}>
            <AgentFlowSvg />
          </div>
        </AnimateOnScroll>
      </div>

      <ul className={styles.grid}>
        {options.map((option) => (
          <li key={option.id} className={styles.item}>
            <span className={styles.status}>{option.status}</span>
            <h3 className={styles.title}>{option.title}</h3>
            <p className={styles.itemText}>{option.text}</p>
          </li>
        ))}
      </ul>

      <div className={styles.links}>
        <Link href="/services/ai-agent-development" className={styles.link}>
          AI agent development
          <ArrowIcon />
        </Link>
        <Link href="/services/copilot" className={styles.link}>
          Microsoft 365 Copilot set-up
          <ArrowIcon />
        </Link>
      </div>
    </div>
  </section>
);

export default ApiAgents;
