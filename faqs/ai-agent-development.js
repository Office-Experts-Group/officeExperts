// faqs/ai-agent-development.js

// Single source for the FAQ section and the FAQPage schema on
// /services/ai-agent-development. page.js builds the schema from this array,
// so the two can't drift apart.
//
// Before go-live:
// - "How much does a custom AI agent cost?" answers with cost drivers only.
//   Add an indicative range here if the business decides to publish one.
// - "Does our data stay in Australia?" needs dev team sign-off.

const faqs = [
  {
    question:
      "What is an AI agent, and how is it different from Copilot or ChatGPT?",
    answer:
      "ChatGPT and Microsoft 365 Copilot respond when a person asks them something. An AI agent is given a job rather than a prompt: it picks up work as it arrives, gathers what it needs from your systems, makes decisions within rules you set and produces a finished result for someone to approve. Copilot helps one person with one task. An agent runs the same process, the same way, for everyone.",
  },
  {
    question: "How much does a custom AI agent cost in Australia?",
    answer:
      "Build cost depends on how many steps and decisions the agent handles, how many systems it connects to, whether it's built in Microsoft 365 or custom code, and how much human review the rollout needs. Running costs depend on how often the agent works and which AI model it uses. After a discovery session we give you a written scope and quote covering both, so there are no surprises.",
  },
  {
    question: "How long does it take to build an AI agent?",
    answer:
      "A single agent with one clear job is much quicker to build than a multi-agent workflow connected to several systems. We aim to put a first working version in front of your team early, tested on your own data, then extend it in stages. You'll get a timeline with your quote.",
  },
  {
    question: "Should we use Copilot Studio or a custom-coded agent?",
    answer:
      "If the process lives mainly in SharePoint, Outlook, Teams and Word, and you want everything inside your tenant on existing licences, Copilot Studio and Power Platform are usually the right start. If the agent needs complex orchestration, outside research, a specific AI model or systems outside Microsoft, custom code in Python or JavaScript gives you more room. Some projects start as custom code and move inside the tenant later. We build all three, so the recommendation is based on fit.",
  },
  {
    question: "Can an AI agent work with our existing systems?",
    answer:
      "Usually, yes. Agents can read from and write to SharePoint lists, Word templates, Teams channels, Outlook, Power BI and SQL databases, and custom-coded agents can connect to almost any system with an API. Where a system has no API, we look at exports, email or direct database access instead.",
  },
  {
    question: "Does our data stay in Australia?",
    answer:
      "Agents built with Copilot Studio, Power Platform or Azure run inside your own Microsoft tenant, so your data stays in the regions your tenant already uses. When a custom-coded agent uses an outside AI model, we tell you which provider processes the data, where, and what is retained before anything is built, and we can host the agent inside your tenant if that's a requirement.",
  },
  {
    question: "Which AI models do you use?",
    answer:
      "Whichever suits the task and your data rules. We've built agents on OpenAI's GPT models and Anthropic's Claude, including Claude running inside Azure through Microsoft Foundry, as well as Copilot Studio and agent platforms such as Relevance.ai. The model is a component rather than the foundation, so it can be swapped as better options appear.",
  },
  {
    question: "Do AI agents replace staff?",
    answer:
      "In our projects, agents take over the repetitive gathering, checking and drafting, and people keep the decisions. The usual result is that the same team handles far more volume, and the person who used to be the bottleneck spends their time on the cases that need judgement.",
  },
  {
    question: "What happens when the agent gets something wrong?",
    answer:
      "Every agent we build has a check before anything important goes out: a validation agent, an escalation rule or a person approving the result. Findings link back to their source, so mistakes are quick to spot, and corrections feed back into the agent so the same error becomes less likely.",
  },
  {
    question: "Can you take over or extend an agent someone else built?",
    answer:
      "Yes. We start by reviewing how it's built, what it connects to and how well it performs, then recommend whether to extend it, rebuild parts of it or move it onto a platform that's easier to maintain.",
  },
];

export default faqs;
