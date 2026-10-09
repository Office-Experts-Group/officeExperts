// app/case-studies/caseStudyCardCopy.js
//
// Short card text for the home page carousel, keyed by case study slug.
// Each entry is written only from that case study's existing summary and
// content. The key names match what a case study object can carry, so either
// value can be moved onto its object later and the object's value will win.
//   truncatedDescription - the short description shown on the card
//   linkText             - the button's anchor text

export const cardCopy = {
  "rdao-application-ai-review-workflow": {
    linkText: "See our AI agent review workflow",
    truncatedDescription:
      "One person spent six to seven days manually researching each investment applicant. We built an AI agentic workflow that produces a detailed, referenced review in around 90 minutes.",
  },
  "internal-ai-proposal-assistant-azure-migration": {
    linkText: "See how our AI proposal assistant works",
    truncatedDescription:
      "Reps drafted proposals by hand from call notes and copy-pasted fee figures. We built a conversational AI assistant that drafts a first-pass proposal in the real Word template, using a live rate card.",
  },
  "legal-firm-word-training-workshop": {
    linkText: "Explore our Word training workshop",
    truncatedDescription:
      "A legal firm struggled with inconsistent formatting, numbering issues and copy-and-paste chaos in Word. We delivered a live 90-minute Teams training session for around 29 legal professionals, built around its own documents.",
  },
  "custom-quoting-tool": {
    linkText: "Integrate modern tools with legacy systems",
    truncatedDescription:
      "Every tax depreciation quote was worked out by hand. We built a custom React calculator, embedded in the client's WordPress site as a plugin, that emails an instant branded estimate to the customer and the client's team.",
  },
  "food-manufacturer-excel-costing-workbook": {
    linkText: "See our Excel costing workbook",
    truncatedDescription:
      "Product costing ran through disconnected, in-house Excel workbooks. We rebuilt it as a single Excel Costing Workbook with a forms interface, automatic cost updates and a restricted Admin view.",
  },
  "building-consultants-inspection-crm": {
    linkText: "Explore our enquiry-to-quote automation",
    truncatedDescription:
      "Building inspection enquiries and quotes were handled entirely by hand, causing rework. We built an automated system on SharePoint, Power Apps and Power Automate that manages enquiries and generates quotes ready to email.",
  },
  "retail-power-bi-partner-reporting-security": {
    linkText: "See how we secured partner Power BI reports",
    truncatedDescription:
      "A retail data provider needed certainty that one partner could never see another's data. We locked down access with Row-Level Security and tested with a real external account, matching the client's figures to the cent.",
  },
  "manufacturing-project-setup-automation": {
    linkText: "See our automated project folder setup",
    truncatedDescription:
      "Staff built each new job folder by hand across multiple SharePoint sites. We built a Power Automate flow that reads the project details from the notification email and does the entire setup automatically.",
  },
  "government-workplace-safety-interactive-word-forms": {
    linkText: "Explore our guided, locked-down Word forms",
    truncatedDescription:
      "Complex Word forms were inconsistent and easy to alter. We rebuilt every form with structured styles, content controls and document protection, so staff complete each one by tabbing through guided, locked-down fields.",
  },
  "government-health-master-template-document-transfer": {
    linkText: "See our Master Template transfer process",
    truncatedDescription:
      "A state government health department needed a new Master Template and every existing document brought across. We built the template and moved the entire document set into it using our in-house transfer process.",
  },
  "community-services-excel-consolidation-rebuild": {
    linkText: "See our Power Query consolidation rebuild",
    truncatedDescription:
      "Four location workbooks fed a central file that had grown past 400MB. We rebuilt it as a row-based entry template consolidated with Power Query, and migrated all existing data.",
  },
  "healthcare-patient-form-followup-automation": {
    linkText: "Explore our patient form follow-up flows",
    truncatedDescription:
      "Tracking which patients had returned their forms was done entirely by hand. We built two scheduled Power Automate flows on a Microsoft Fabric data warehouse that send reminders, escalate overdue cases and close off completed forms.",
  },
  "government-health-department-editable-pdf-forms": {
    linkText: "See our editable PDF form design",
    truncatedDescription:
      "A state government health department needed two internal staff forms on its new branded template. We built them into the template, converted them to editable PDFs and trained the team to update them.",
  },
  "professional-services-sharepoint-foundation-workshops": {
    linkText: "Explore our SharePoint Foundation Workshops",
    truncatedDescription:
      "A small team ran email, files and calendar through one shared login. Our SharePoint Foundation Workshops built a proper site structure, an access model and a plan to retire the shared logins.",
  },
  "automated-proposal-generation-in-microsoft": {
    linkText: "See our Word document generator",
    truncatedDescription:
      "Proposals, quotes and contracts of 50 or more pages were pieced together by hand from paper and Excel. We designed an Access database, later migrated to SQL Server, that generates the full Word document automatically.",
  },
  "advisory-branding-template-rollout": {
    linkText: "Explore our branded Word template suite",
    truncatedDescription:
      "Word templates kept breaking and staff could override brand elements. We rebuilt the suite from one Master Template, with a custom Formatting tab locking down fonts and branded Quick Parts.",
  },
  "golf-supplier-sales-data-consolidation": {
    linkText: "See our supplier sales consolidation",
    truncatedDescription:
      "The client received dozens of separate supplier sales files each year. We built a Power Query and Power Pivot solution that consolidates them automatically and produces year-on-year comparisons by supplier, member, month and quarter.",
  },
  "insurance-word-quoting-report-popup-form": {
    linkText: "See our pop-up form for Word reports",
    truncatedDescription:
      "Staff had to hunt through Word reports to find every field to complete. We built a pop-up form that gathers them all, checks mandatory fields and populates the report, with one background list for all templates.",
  },
  "life-insurance-real-time-competitive-intelligence": {
    linkText: "Explore our competitive intelligence system",
    truncatedDescription:
      "A bank's life insurance division was consistently late to competitor moves. We built an AI-driven system on its own Microsoft 365 tenancy that monitors competitors around the clock and routes prioritised alerts into Teams.",
  },
  "corporate-group-multi-entity-master-template-suite": {
    linkText: "See our multi-entity template suite",
    truncatedDescription:
      "A corporate group needed consistent templates across four related entities. We built each Master Template from one shared Global Common template, plus a Formatting tab with a macro that strips foreign formatting.",
  },
  "retail-analytics-automated-review-deck-generator": {
    linkText: "See our automated PowerPoint deck generator",
    truncatedDescription:
      "Review decks were built by hand, slide by slide, from Power BI figures. We built a Python tool that queries Power BI and assembles a fully branded deck of around 660 slides in under five minutes.",
  },
  "water-education-program-word-powerpoint-templates": {
    linkText: "Explore our Word and PowerPoint lesson templates",
    truncatedDescription:
      "A lesson template designed in InDesign had to work for writers using Word and PowerPoint. We translated it into working templates with Quick Parts and a Slide Master system for consistent, branded lessons.",
  },
  "government-department-enterprise-office-template-suite": {
    linkText: "See our custom Word ribbon and templates",
    truncatedDescription:
      "A state government transport department faced formatting corruption and inconsistent branding. We redesigned 17 Word templates, built a custom Formatting Control Tab and added 10 precinct-specific PowerPoint themes.",
  },
  "environmental-consultancy-word-template-rebuild": {
    linkText: "See our Word template rebuild",
    truncatedDescription:
      "New Word templates looked right but weren't built the way Word needs, making them inefficient and error-prone. We rebuilt the whole suite from the ground up, keeping the approved design intact.",
  },
  "sporting-goods-agentic-ai-customer-service": {
    linkText: "Explore our agentic AI customer service",
    truncatedDescription:
      "Customer service ran on manual ticket triage, spreadsheets and hand-written replies. We built a chained agentic AI system on Power Automate and Power Apps that now resolves two-thirds of tickets with no human intervention.",
  },
  "film-crew-booking-system-access-nextjs-rebuild": {
    linkText: "See our Access to Azure migration",
    truncatedDescription:
      "A crew booking operation ran on an Access 2000 database that only worked on a VM. We rebuilt it on Azure SQL Server and rewrote the website in Next.js, giving a site that loads 10x faster.",
  },
  "financial-services-ai-risk-compliance-automation": {
    linkText: "Explore our AI compliance automation",
    truncatedDescription:
      "A compliance workflow ran on spreadsheets and scattered policy documents. We built a live SharePoint risk register, AI agents that map risks to controls, a compliance dashboard and automated regulatory alerting.",
  },
  "committee-report-master-template-pdf-merge": {
    linkText: "See how we merged Word and PDF reports",
    truncatedDescription:
      "Reports from several authors with limited Word experience had to become one document by an urgent deadline. We built a Master Template and merged the result with supporting PDFs into one submission-ready PDF.",
  },
  "private-client-cashflow-forecasting-tool": {
    linkText: "See our private web planning tool",
    truncatedDescription:
      "Investment and business income arrived in seasonal lumps while commitments fell steadily. We built a private planning tool that forecasts cash flow and solves for the exact income needed each month.",
  },
  "biochar-ai-go-to-market-analysis-uk": {
    linkText: "Explore our AI research workflow",
    truncatedDescription:
      "A UK BioChar go-to-market strategy had to be built fast from scattered research. AI research agents synthesised the sources into a reusable SharePoint knowledge base and auto-populated a standardised Word report.",
  },
  "legal-firm-template-suite-formatting-tab": {
    linkText: "See our law firm Formatting tab",
    truncatedDescription:
      "A law firm's style guide wasn't being followed in practice. We built a full document suite from it, plus our custom Formatting tab for easy access to the built-in legal numbering lists.",
  },
  "sporting-organisation-multi-brand-word-template": {
    linkText: "Explore our multi-brand Word template",
    truncatedDescription:
      "Each discipline under one parent brand has its own colours. We built a single Word Master Template with a suite of colour themes, so covers, styles, numbering and tables pick up the right brand colours.",
  },
  "research-organisation-access-kanban-planner": {
    linkText: "See our Kanban planner for Access",
    truncatedDescription:
      "A research organisation wanted something like Microsoft Planner inside its existing Access database. We built a Kanban planner form with four status columns, drag and drop, due date highlighting and a task details form.",
  },
  "financial-planning-word-document-builder": {
    linkText: "See our Word document builder",
    truncatedDescription:
      "Financial planning reports combined free text with a large library of ready-made headings. We built a Word document builder with a pop-up form, custom Heading 3 items and a background library the Administrator maintains.",
  },
};
