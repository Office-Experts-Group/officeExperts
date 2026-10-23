// faqs/copilot-and-ai-templates.js
// FAQ content for /copilot-and-ai-templates. Also the single source for the
// FAQPage schema (faqs/copilotAiTemplatesSchema.js), so answers only live here.
// Each answer opens with a direct one-sentence answer for snippets/answer engines.

const faqs = [
  {
    question: "Why does Copilot ignore my Word template?",
    answer:
      "Usually because the template isn't built in a way AI can read. If headings are manually formatted, placeholders are plain text and styles are inconsistent, Copilot has no reliable structure to follow, so it overwrites or appends instead of filling. Rebuilding the template with proper styles and content controls fixes most of these issues.",
  },
  {
    question: "Why does Copilot mess up formatting in Word?",
    answer:
      "Copilot works from the document's underlying styles, not how it looks on screen. Where text is formatted manually, or styles are missing or duplicated, its edits can appear random, and it may even report a change as complete when nothing has changed. A clean, consistent style set gives it something correct to apply.",
  },
  {
    question: "What is an AI-ready Word template?",
    answer:
      "An AI-ready template is a Word template structured so AI tools can understand it: a clean style hierarchy, named content controls for each piece of variable information, locked zones for fixed wording, and built-in guidance on what to write. It works equally well for people, screen readers and AI.",
  },
  {
    question: "Is Copilot better than ChatGPT or Claude for Word documents?",
    answer:
      "For most businesses already on Microsoft 365, Copilot is the safer default because it works inside your tenant with your existing security settings and can draw on your own files. ChatGPT for Word and Claude for Word can be strong for specific drafting and review tasks, provided your organisation has approved the plan and set clear data rules.",
  },
  {
    question: "Is it safe to use ChatGPT with confidential Word documents?",
    answer:
      "It depends on the plan. OpenAI states business and enterprise workspace data isn't used for training by default, but personal plans have different terms, and the document still leaves your Microsoft environment. Organisations should decide which AI tools and plans are approved before staff start using them.",
  },
  {
    question: "Does Copilot use my company data to train AI?",
    answer:
      "No. Microsoft 365 Copilot operates under enterprise data protection, which covers prompts and responses with the same contractual commitments as your email and SharePoint files. The bigger risk is internal: Copilot can surface any file a user already has access to, so permissions need tidying first.",
  },
  {
    question: "Do I need a Microsoft 365 Copilot licence to use AI in Word?",
    answer:
      "For Copilot built into Word, yes. Microsoft 365 Copilot is a per-user licence added on top of a qualifying Microsoft 365 plan. Free Copilot Chat is available to many business plans but isn't integrated into document editing in the same way. Third-party add-ins need their own subscriptions.",
  },
  {
    question: "How much does Microsoft 365 Copilot cost in Australia?",
    answer:
      "Microsoft 365 Copilot is charged per user per month on top of your existing Microsoft 365 subscription, with different pricing for smaller businesses and enterprise plans. Microsoft adjusted Australian pricing and promotions several times in 2026, so check Microsoft's Australian pricing page or ask us for current figures.",
  },
  {
    question: "Can AI create invoices in Word automatically?",
    answer:
      "Yes. A custom AI agent can pull client, job and pricing details from your systems, fill a branded invoice or quote template and produce a Word or PDF file ready for approval. The template does the formatting and the AI supplies the content, so the output looks the same every time.",
  },
  {
    question: "Can an AI agent sort and reply to emails in Outlook?",
    answer:
      "Yes. An email triage agent can categorise and prioritise incoming messages, draft replies from approved wording and route anything complex to the right person. We recommend a human approval step before replies are sent, particularly for client-facing or shared inboxes.",
  },
  {
    question: "Can AI make mistakes in business documents?",
    answer:
      "Yes. Every large language model can produce confident but incorrect content, including invented figures and references. Australian courts have dealt with more than twenty matters involving AI-generated false citations since 2024. Structured templates, approved source content and human review are the practical safeguards.",
  },
  {
    question: "How do I get my Word templates ready for Copilot?",
    answer:
      "Start with an audit. Replace manual formatting with a consistent style set, convert placeholders to named content controls, protect fixed wording, add guidance for drafting, and test with real prompts. Word Experts can review and convert an existing template library without changing how it looks.",
  },
];

export default faqs;
