// faqs/app-and-custom-development.js

// Shared by the FAQSection component and by appAndCustomDevelopmentSchema.js, so the visible FAQ and the FAQPage schema always match
const faqs = [
  {
    question: "What types of custom applications do you build?",
    answer:
      "We build web applications and portals, internal business tools, quoting and booking systems, dashboards, integrations between systems and AI-powered agents. Projects use Next.js and React, WordPress, CRM platforms, the Microsoft Power Platform, .NET or a combination, depending on what suits your requirements and budget.",
  },
  {
    question: "Should we build with Next.js, WordPress or the Power Platform?",
    answer:
      "It depends on the job. WordPress suits content-led sites, the Power Platform is usually the fastest route for internal apps and workflows on Microsoft 365, and Next.js suits bespoke, high-performance applications. Our business analysts compare the options against your requirements before you commit.",
  },
  {
    question: "Can you build a customer or partner portal with Power Pages?",
    answer:
      "Yes. We design the Dataverse data model, security roles and table permissions, then build and brand the portal and connect it to Power Automate for approvals and notifications. External users sign in and see only the records they are entitled to.",
  },
  {
    question: "Can you integrate with our existing CRM?",
    answer:
      "In most cases, yes. We connect CRM platforms to SharePoint, Outlook, SQL Server, Dataverse and your own applications through APIs, so records stay consistent across systems. We can also customise Microsoft Dynamics 365 and other CRMs. Tell us which platform you use and we will confirm the approach.",
  },
  {
    question: "Can you add AI to an application we already use?",
    answer:
      "Yes. We can add features such as document summarising, email triage, data extraction and chat assistants to existing applications, using Copilot, ChatGPT, Claude or custom agents. Each solution includes human review for important decisions, plus logging so you can see what the AI has done.",
  },
  {
    question: "Do your AI agents have to run inside our Microsoft tenant?",
    answer:
      "No. Our programmers build custom agents in Python and JavaScript that can run outside your tenant and connect to your systems securely. If you would rather keep everything within Microsoft 365, we can build with Copilot Studio and Power Automate instead.",
  },
  {
    question: "Can you fix an app or automation we started building ourselves?",
    answer:
      "Yes. We regularly repair and finish Power Apps, Power Automate flows, scripts and web applications that were started in-house or built with AI tools and then stalled. We review what exists, fix faults and security gaps, and bring it to a standard you can rely on.",
  },
  {
    question: "How is custom development priced?",
    answer:
      "We can work to a fixed quote once requirements are clear, or at an hourly rate for smaller or evolving work. A short business analysis stage helps us define the scope accurately, so the quote reflects what you actually need.",
  },
  {
    question: "Do you provide support after the solution goes live?",
    answer:
      "Yes. We offer ongoing support, enhancements and tailored training, delivered by remote access or onsite. Our developers are based across Australia, so you will usually deal with someone in your own time zone.",
  },
];

export default faqs;
