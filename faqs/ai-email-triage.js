// faqs/ai-email-triage.js

// FAQ content for /services/ai-email-triage.
// Used twice by the page: rendered by the shared FAQSection component, and
// mapped into FAQPage structured data in page.js, so the visible answers and
// the schema can never drift apart.

const faqs = [
  {
    question: "What is AI email triage?",
    answer:
      "AI email triage uses artificial intelligence to read incoming emails, work out what each one is about and how urgent it is, and then sort, route or act on it automatically. It replaces the manual first pass through an inbox that someone would otherwise do by hand.",
  },
  {
    question: "How is AI email triage different from Outlook rules?",
    answer:
      "Outlook rules match fixed conditions such as a sender, a word in the subject line, or an address. AI triage understands meaning and intent, so it can tell a complaint from a compliment, or an urgent request from a routine one, even when the wording is different every time.",
  },
  {
    question: "Can Microsoft Copilot triage my email?",
    answer:
      "Yes. With a Microsoft 365 Copilot licence, Outlook can prioritise new mail as high, normal or low and perform triage actions such as flagging and archiving on request. It is designed for personal inboxes. For shared mailboxes and business processes, Power Automate or a custom Copilot Studio agent is usually a better fit.",
  },
  {
    question: "Can AI triage a shared mailbox?",
    answer:
      "Yes. Shared mailboxes such as info@, accounts@ and support@ are where AI triage delivers the biggest time savings. We typically use a Power Automate flow or a Copilot Studio agent that monitors the shared mailbox and processes every new email automatically.",
  },
  {
    question: "Do I need a Copilot licence for every user?",
    answer:
      "Not necessarily. Copilot in Outlook is licensed per user, but a Power Automate flow or Copilot Studio agent running against a shared mailbox is licensed differently, so a whole team can benefit without every person needing Copilot. We'll help you find the most cost-effective option.",
  },
  {
    question: "Will AI reply to emails automatically?",
    answer:
      "Only if you want it to. Most businesses start with AI sorting and drafting replies for a person to review and send. Fully automatic replies can be enabled for low-risk, repetitive messages once you're confident in the results.",
  },
  {
    question: "How accurate is AI email classification?",
    answer:
      "Modern language models are very good at understanding email, particularly when categories are clearly defined and described. We test against your real historical emails before go-live, log every decision, and refine the categories so accuracy improves over time.",
  },
  {
    question: "Is my email data secure?",
    answer:
      "Our solutions are built on Microsoft 365 and the Power Platform, so your email is processed under your existing Microsoft security, compliance and data loss prevention controls rather than being sent to a separate third-party AI service.",
  },
  {
    question: "Can AI triage work with our CRM or other systems?",
    answer:
      "Yes. Through Microsoft connectors, triaged emails can create or update records in Dynamics 365, Dataverse, SharePoint, Excel and many third-party systems, and we can build custom connectors where needed.",
  },
];

export default faqs;
