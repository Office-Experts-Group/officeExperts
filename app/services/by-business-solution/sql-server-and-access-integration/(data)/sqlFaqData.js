// app/services/by-business-solution/sql-server-and-access-integration/(data)/sqlFaqData.js

// Single source for the FAQ. SqlFaq.jsx renders it and page.js turns it into FAQPage
// schema, so the visible answers and the structured data can never drift apart.
// Answers are plain strings (no JSX) because the schema needs plain text.
export const sqlFaqs = [
  {
    question: "Will I lose my Access forms and reports if I move to SQL Server?",
    answer:
      "No. Your Access file stays as the front end, with its forms, reports and interface intact, and its tables are linked to the SQL Server database through ODBC. Your team keeps working in the screens they already know.",
  },
  {
    question: "How many users can SQL Server support compared with Access?",
    answer:
      "An Access database typically begins to slow, or risks corruption, once 10 to 20 people use it at the same time. With a SQL Server backend, tens or even hundreds of users can work concurrently, because queries run on the server and only the results are sent to each user.",
  },
  {
    question: "Is there a size limit for an Access database?",
    answer:
      "Yes. A single Access database file is limited to 2GB. SQL Server handles databases from a few megabytes to multiple terabytes, so your data can keep growing without workarounds.",
  },
  {
    question: "Can Excel, Word and PowerPoint use data from SQL Server?",
    answer:
      "Yes. We build Excel dashboards that refresh from SQL Server with pivot charts and tables, Word documents generated for your customers from database records, and PowerPoint presentations produced automatically each month from your live data.",
  },
  {
    question: "Can SQL Server run in the cloud?",
    answer:
      "Yes. SQL Server can be hosted in-house or on Microsoft Azure. Azure gives you secure remote access and makes it easier for people in different locations to work on the same data.",
  },
  {
    question: "How long does a migration take, and will it disrupt our team?",
    answer:
      "It depends on the size and complexity of your database, so we start with a review and give you a clear scope. Migrations are planned to avoid disrupting daily operations, and the system is tested before your team switches over.",
  },
];
