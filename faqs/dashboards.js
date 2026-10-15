// faqs/dashboards.js
// FAQ content for /services/by-business-solution/dashboards.
// Shared by the FAQSection component and the FAQPage schema (faqs/dashboardsSchema.js),
// so the visible answers and the structured data can never drift apart.

const faqs = [
  {
    question: "How much does a custom dashboard cost?",
    answer:
      "Cost depends mainly on how many data sources need connecting, how clean that data is and how many report pages you need. A single-source Excel or Power BI report is a small project, while a multi-system dashboard with AI monitoring is larger. After a free consultation we give you a written quote before any work starts.",
  },
  {
    question: "Should we use Power BI or Excel for our dashboard?",
    answer:
      "Excel suits smaller teams who already work in spreadsheets and want automated reporting without new licences. Power BI suits reporting shared across an organisation, larger datasets and secure sharing through Teams and SharePoint. If your viewers are customers or partners outside your business, a custom web dashboard is often the better choice. We build all three and will recommend the one that fits.",
  },
  {
    question: "Can a dashboard update in real time?",
    answer:
      "Yes, within limits set by the platform and your licensing. Power BI Pro allows up to 8 scheduled refreshes a day and Premium or Fabric capacity allows up to 48. For live figures we use DirectQuery against your database, or Microsoft Fabric for streaming data. Custom web dashboards can show data the moment it changes.",
  },
  {
    question: "Can AI answer questions about our dashboard data?",
    answer:
      "Yes. Copilot in Power BI lets people ask questions in plain English and returns answers and visuals from your data model, though it needs a paid Fabric or Premium capacity. Where Copilot isn't available or doesn't fit, we build custom AI agents that answer questions over SQL Server, Access or other business data and show the figures behind each answer.",
  },
  {
    question: "Is our data safe if we add AI to our dashboards?",
    answer:
      "We design AI features to respect the permissions you already have. Agents can run inside your own Microsoft 365 or Azure tenant, follow row-level security so people only see data they're allowed to, and avoid sending data to services you haven't approved. We document where data goes before anything is built.",
  },
  {
    question: "Can you connect Xero, MYOB or Salesforce to a dashboard?",
    answer:
      "Yes. We regularly connect accounting and CRM platforms including Xero, MYOB, Salesforce and HubSpot, along with SQL Server, Access, SharePoint and Excel files. All sources are brought into one data model so figures match across every page.",
  },
  {
    question: "Do dashboards work on phones and tablets?",
    answer:
      "Power BI dashboards can have a dedicated mobile layout so key figures and alerts are easy to read on a phone, while the full report stays available on desktop. Custom web dashboards are built responsive from the start. Excel dashboards are best viewed on a laptop or desktop.",
  },
  {
    question: "Can you fix or take over a dashboard someone else built?",
    answer:
      "Yes. We often take over reports built by former staff, other consultants or with AI tools that got part of the way and stalled. We review the data model, fix slow or incorrect measures, document how it works and then extend it.",
  },
];

export default faqs;
