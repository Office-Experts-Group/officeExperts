// app/services/3rd-party-application-or-office-integration/(data)/thirdPartyFaqs.js

export const thirdPartyFaqs = [
  {
    question: "Can you integrate Xero with Excel?",
    answer:
      "Yes. Using the Xero API we can pull invoices, bills, contacts, bank transactions and reports into Excel so your budgets, cashflow forecasts and board reports update from live data instead of copied exports. We can also build the reverse: a validated Excel sheet that creates invoices or journals in Xero, with checks that stop bad data getting in.",
  },
  {
    question: "Can you connect MYOB to Excel, Word or Access?",
    answer:
      "In most cases, yes. Depending on your MYOB product and version, we connect through the MYOB API or through ODBC. That lets us bring customer, supplier, job and ledger data into Excel for reporting, into Word for document generation, or into Access when you need a more structured reporting database. We confirm the best connection method with you before quoting.",
  },
  {
    question: "How do you integrate Salesforce with Microsoft Office?",
    answer:
      "We use the Salesforce API to read and write leads, accounts, contacts and opportunities. Typical solutions include Excel pipeline reports that refresh on demand, Word quotes and proposals generated from an opportunity record, and Outlook or Teams actions that update Salesforce without anyone re-keying details.",
  },
  {
    question: "What if our software doesn't have an API?",
    answer:
      "Many older systems still offer an ODBC connection, a database we can read directly, or scheduled CSV and Excel exports. Where one of those exists we can usually automate it. Where none does, we will tell you plainly and suggest the next best option rather than building something fragile.",
  },
  {
    question: "Can AI work with our Xero, MYOB or Salesforce data?",
    answer:
      "Yes. We build AI agents that read your business data, check it against your rules, and draft results such as summaries, reconciliations or proposals for a person to approve. They can run inside your Microsoft 365 or Azure tenant, or as custom Python and JavaScript agents. Before any code is written we agree which AI provider is used, where data is processed and what is retained.",
  },
  {
    question: "What does a 3rd party app integration cost?",
    answer:
      "Cost depends on how many systems are connected, how much data moves in each direction, and how much validation and review the process needs. A single read-only report from one system is a small project, while a two-way sync between several systems is larger. After a discovery conversation we provide a written scope and quote.",
  },
  {
    question: "What happens when Xero, MYOB or Salesforce change their API?",
    answer:
      "Vendors update their APIs from time to time, and we build integrations with that in mind, using supported endpoints and logging every call so problems are easy to trace. If a vendor change affects your solution, we can update it under a support arrangement.",
  },
];
