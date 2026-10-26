// app/services/microsoft-365-api-integration/(components)/apiFaqData.js

// Single source for the FAQ. ApiFaq.jsx renders it and page.js builds the
// FAQPage schema from it, so the visible answers and the structured data
// can never drift apart. Keep answers as plain strings for that reason.

export const apiFaqs = [
  {
    question: "What is Microsoft 365 API integration?",
    answer:
      "It's connecting Word, Excel, Outlook, Teams, SharePoint, Power Platform and your databases through their programming interfaces, so data moves between them automatically. Instead of copying figures from an email into a spreadsheet and then into a report, the systems pass the data along themselves.",
  },
  {
    question: "Which Microsoft APIs do you work with?",
    answer:
      "The Office JavaScript API (Office.js) for add-ins inside Word, Excel, PowerPoint and Outlook; Microsoft Graph for mail, calendars, files, Teams and Excel workbooks; the Dataverse Web API and connectors for Power Platform; the Power BI REST API; the Microsoft 365 Copilot APIs; MCP servers for AI agents; and SQL Server or ODBC for Access and other databases.",
  },
  {
    question: "Can you replace our old VBA, COM or VSTO add-ins?",
    answer:
      "Usually, yes. Office.js add-ins run on Windows, Mac and the web, while COM and VSTO add-ins only run in desktop Office on Windows, and the new Outlook for Windows doesn't load COM add-ins at all. The unified manifest can also switch off the old add-in automatically once its replacement is installed. VBA still has a place in desktop-only workbooks, so we assess each one rather than rewriting everything.",
  },
  {
    question: "Do we need Microsoft 365 Copilot licences?",
    answer:
      "Only for some integrations. Office.js add-ins, Microsoft Graph, Dataverse and SQL Server integrations work with standard Microsoft 365 and Power Platform licensing. The Copilot Retrieval API and Microsoft's Agent 365 MCP servers do need Copilot licensing, and Power BI's API needs at least a Pro licence. We check this before any build starts.",
  },
  {
    question: "Is our data secure when systems are connected?",
    answer:
      "Every integration signs in through Microsoft Entra ID with only the permissions it needs. Where a person is involved, it acts with that person's own access, so it can't see anything they couldn't. Data stays inside your Microsoft 365 tenant unless an integration is specifically designed to send it elsewhere, and activity can be logged and audited.",
  },
  {
    question: "Can a web or mobile app use our Excel workbooks?",
    answer:
      "Yes. Microsoft Graph can read and write tables, ranges and charts in .xlsx workbooks stored in OneDrive or SharePoint, and can run Excel's worksheet functions remotely. Older .xls files aren't supported. If many people will be writing at once, moving the data into a database such as SQL Server or Dataverse is usually more reliable.",
  },
  {
    question: "Can our Access database connect to Microsoft 365?",
    answer:
      "Yes, though Access itself has no cloud API. The usual path is moving the tables to SQL Server or Azure SQL while keeping the Access forms, or linking to Dataverse so Power Apps can use the same records. Once the data is on a server, Power BI, Power Automate and web portals can all connect to it.",
  },
  {
    question: "Do you integrate Microsoft 365 with Xero, MYOB or Salesforce?",
    answer:
      "Yes. Connections to non-Microsoft products such as Xero, MYOB and Salesforce are covered on our 3rd party app integration page.",
  },
];
