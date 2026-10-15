// faqs/database-development-and-solutions.js
// FAQ content for /services/by-business-solution/database-development-and-solutions.
// Used by FAQSection on the page and by databaseDevelopmentSchema.js, so the visible answers
// and the FAQPage structured data always match. Answers are plain strings for that reason.

const faqs = [
  {
    question: "When should we move from Excel to a database?",
    answer:
      "Usually when several people edit the same workbook, the same details are typed into more than one place, files are copied and emailed around, or the workbook becomes slow and fragile. A database stores each record once, checks entries as they are made and lets several people work at the same time without overwriting each other.",
  },
  {
    question: "Is Microsoft Access still supported?",
    answer:
      "Yes. Microsoft has not announced an end-of-life date for Access, and it is included in Microsoft 365 and Access LTSC 2024. Support is handled version by version, so older versions such as Access 2016 and 2019 no longer receive security updates. If you are running an older version, we can upgrade the database and resolve any compatibility issues.",
  },
  {
    question: "How many users can an Access database support?",
    answer:
      "A well-built Access database split into a front end and back end comfortably supports around 10 to 15 people working at the same time over a local network. Beyond that, or when users need remote access, we move the data to SQL Server or Azure SQL and keep the Access forms your staff already know.",
  },
  {
    question: "Can you upgrade or migrate our old Access database?",
    answer:
      "Yes, this is one of the most common jobs we take on. We fix 32-bit and 64-bit conflicts, update broken VBA and references, convert old file formats, move back ends to SQL Server or Azure, or rebuild the database as a web or Power Platform app when that is the better option. We assess the database first and recommend the least disruptive path.",
  },
  {
    question: "Should our database be on our own server or in Azure?",
    answer:
      "On-premises SQL Server suits organisations with existing servers and staff who work mainly in the office. Azure SQL suits teams who work remotely or across several sites, and removes the need to maintain hardware, patching and backups. We can recommend an option based on your users, budget and security requirements.",
  },
  {
    question: "Can our database be used from a web browser or phone?",
    answer:
      "Yes. Once the data is in SQL Server, Azure SQL or a web database such as PostgreSQL or Supabase, we can build a secure web portal in Next.js and React or a mobile app in React Native, while staff continue to use desktop forms if they prefer.",
  },
  {
    question: "Do you work with non-Microsoft databases such as PostgreSQL, Supabase, Firebase or MongoDB?",
    answer:
      "Yes. Alongside Access, SQL Server and Azure SQL, we build on PostgreSQL, Supabase, MySQL, Firebase and MongoDB. We choose the platform based on the job, such as relational reporting, real-time mobile data or flexible document storage, rather than defaulting to one vendor.",
  },
  {
    question: "Can AI work with our own documents and databases?",
    answer:
      "Yes. Using retrieval-augmented generation (RAG), an AI assistant searches your documents, SharePoint sites, spreadsheets and databases, then answers using only what it found and shows the sources. This allows staff to ask plain-English questions about company information without the assistant guessing.",
  },
  {
    question: "Is our data safe if we connect AI to it?",
    answer:
      "We design AI connections so each person only sees the information they are already permitted to access, using Microsoft sign-in, role-based permissions, read-only database connections and audit logs. Assistants can be built inside your own Microsoft tenant when your data must stay there.",
  },
  {
    question: "How much does a custom database cost?",
    answer:
      "Cost depends on the number of tables and forms, reporting and document output, integration with other systems, data migration and where the database will be hosted. A small Access database is a modest project, while a multi-user web platform is larger. We provide a fixed quote or estimate after an initial consultation.",
  },
  {
    question: "Can you take over a database someone else built?",
    answer:
      "Yes. We regularly support, repair and extend databases built by former staff, other developers or with AI tools. We review the structure and code first, document how it works, then fix immediate problems before recommending improvements.",
  },
];

export default faqs;
