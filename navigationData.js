// Base URLs for different sites (change these for production)
const WORD_EXPERTS_URL = "https://www.wordexperts.com.au";
const OFFICE_EXPERTS_URL = "/";
const EXCEL_EXPERTS_URL = "https://www.excelexperts.com.au";
const POWER_PLATFORM_EXPERTS_URL = "https://www.powerplatformexperts.com.au";
const ACCESS_EXPERTS_URL = "https://www.accessexperts.com.au";

export const navigationData = {
  locations: {
    label: "Locations",
    href: "/locations",
    items: [
      {
        label: "New South Wales",
        href: "/locations",
        items: [
          {
            label: "Sydney",
            href: "/microsoft-consultants-sydney",
          },
          {
            label: "Wollongong",
            href: "/microsoft-consultants-wollongong",
          },
          {
            label: "Central Coast",
            href: "/microsoft-consultants-central-coast-nsw",
          },
          {
            label: "Northern Rivers",
            href: "/microsoft-consultants-northern-rivers-nsw",
          },
        ],
      },
      {
        label: "Victoria",
        href: "/locations",
        items: [
          {
            label: "Melbourne",
            href: "/microsoft-consultants-melbourne",
          },
          {
            label: "Richmond",
            href: "/microsoft-consultants-richmond",
          },
        ],
      },
      {
        label: "Queensland",
        href: "/locations",
        items: [
          {
            label: "Brisbane",
            href: "/microsoft-consultants-brisbane",
          },
          {
            label: "Gold Coast",
            href: "/microsoft-consultants-gold-coast",
          },
          {
            label: "Cairns",
            href: "/microsoft-consultants-cairns",
          },
        ],
      },
      {
        label: "Western Australia",
        href: "/locations",
        items: [
          {
            label: "Perth",
            href: "/microsoft-consultants-perth",
          },
        ],
      },
      {
        label: "ACT",
        href: "/locations",
        items: [
          {
            label: "Canberra",
            href: "/microsoft-consultants-canberra",
          },
        ],
      },
      {
        label: "Northern Territory",
        href: "/locations",
        items: [
          {
            label: "Darwin",
            href: "/microsoft-consultants-darwin",
          },
        ],
      },
      {
        label: "South Australia",
        href: "/locations",
        items: [
          {
            label: "Adelaide",
            href: "/microsoft-consultants-adelaide",
          },
        ],
      },
    ],
  },
  services: {
    label: "Services",
    items: [
      {
        label: "Microsoft Office",
        href: `/services`,
        items: [
          {
            label: "VBA & Macro Development",
            href: `/services/vba-macro-development`,
          },
          {
            label: "Database Development Solutions",
            href: `/services/database-development-and-solutions`,
          },
          {
            label: "3rd Party App Integration",
            href: `/services/3rd-party-application-or-office-integration`,
          },
          {
            label: "Remote Data Access",
            href: `/services/remote-data-gathering-from-any-device`,
          },
          {
            label: "Online Solutions",
            href: `/services/online-solutions`,
          },
          {
            label: "Upgrades and Migration",
            href: `/services/upgrades-and-migration`,
          },

          {
            label: "Add-in Creation",
            href: `/services/add-in-creation`,
          },
          {
            label: "Power Query",
            href: "/services/power-query",
          },
          {
            label: "Power Pivot",
            href: "/services/power-pivot",
          },
          {
            label: "VBScript and ActiveX",
            href: `/services/activex-vbscript-migration`,
          },
          {
            label: "Apps and Custom Development",
            href: `/services/app-and-custom-development`,
          },
          {
            label: "Support & Training",
            href: "/microsoft-support-and-training-australia",
          },
        ],
      },
      {
        label: "Microsoft Word",
        href: "/services/microsoft-word",
        items: [
          {
            label: "Corporate Global Template",
            href: `/services/microsoft-word/corporate-global-template-solution`,
          },
          {
            label: "Corporate Identity",
            href: `/services/microsoft-word/corporate-identity`,
          },
          {
            label: "Word Document Template Creation",
            href: `/services/microsoft-word/word-document-template-creation`,
          },
          {
            label: "Government Departments",
            href: `/services/microsoft-word/government-departments`,
          },
          {
            label: "Companies & Organisations",
            href: `/services/microsoft-word/companies-and-organisations`,
          },
          {
            label: "Remove Repetition, Increase Productivity",
            href: `/services/microsoft-word/remove-repetition-and-increase-productivity`,
          },
          {
            label: "Quick Parts",
            href: `/services/microsoft-word/quick-parts`,
          },
          {
            label: "Popup Forms",
            href: `/services/microsoft-word/popup-forms`,
          },
          {
            label: "Fill-In Forms",
            href: `/services/microsoft-word/fill-in-forms`,
          },
          {
            label: "Accessibility",
            href: `/services/microsoft-word/accessibility`,
          },
          {
            label: "Converting to Word Documents",
            href: `/services/microsoft-word/word-template-conversions`,
          },
          {
            label: "Custom Toolbars & Ribbons",
            href: `/services/microsoft-word/custom-toolbars-and-ribbons`,
          },
          {
            label: "Document Rebranding",
            href: `/services/microsoft-word/document-rebranding-services`,
          },
          {
            label: "Brand Templates",
            href: `/services/microsoft-word/brand-template`,
          },
          {
            label: "Google Docs Migration",
            href: `/services/microsoft-word/google-docs-to-word-migration`,
          },
          {
            label: "Mail Merge",
            href: `/services/microsoft-word/mail-merge`,
          },
        ],
      },
      {
        label: "Microsoft Excel",
        href: EXCEL_EXPERTS_URL,
        items: [
          {
            label: "Custom Design & Development",
            href: `${EXCEL_EXPERTS_URL}/custom-design-and-development`,
          },
          {
            label: "VBA Macro Development",
            href: `${EXCEL_EXPERTS_URL}/vba-macro-development`,
          },
          {
            label: "Formulas",
            href: `${EXCEL_EXPERTS_URL}/excel-formulas-and-custom-formulas`,
          },
          {
            label: "Training and Skill Development",
            href: `${EXCEL_EXPERTS_URL}/excel-support`,
          },
          {
            label: "Data analysis and reporting",
            href: `${EXCEL_EXPERTS_URL}/data-manipulation`,
          },
          {
            label: "Dashboards",
            href: `/services/dashboards`,
          },
          {
            label: "Charting & Pivot Tables",
            href: `${EXCEL_EXPERTS_URL}/pivot-tables-charts-and-reporting-solutions`,
          },
          {
            label: "Upgrades & Migration",
            href: `${EXCEL_EXPERTS_URL}/upgrades-and-migration`,
          },
          {
            label: "Add-In Development",
            href: `${EXCEL_EXPERTS_URL}/add-in-development`,
          },
        ],
      },
      {
        label: "Microsoft Access",
        href: ACCESS_EXPERTS_URL,
        items: [
          {
            label: "Is Access right for you company?",
            href: `${ACCESS_EXPERTS_URL}/is-access-right-for-your-company`,
          },
          {
            label: "3rd Party Product Integration",
            href: `${ACCESS_EXPERTS_URL}/3rd-party-product-integration`,
          },
          {
            label: "Help & Training",
            href: `${ACCESS_EXPERTS_URL}/access-support`,
          },
          {
            label: "Upgrades & Migration",
            href: `${ACCESS_EXPERTS_URL}/upgrades-and-migration`,
          },
          {
            label: "Cloud-based Solutions",
            href: `${ACCESS_EXPERTS_URL}/access-online`,
          },
          {
            label: "Power BI Integration",
            href: `${ACCESS_EXPERTS_URL}/integrate-access-with-power-bi`,
          },
          {
            label: "Database Optimisation and Repair",
            href: `${ACCESS_EXPERTS_URL}/access-database-optimisation-and-repair`,
          },
          {
            label: "SQL Server Backend Solutions",
            href: `${ACCESS_EXPERTS_URL}/sql-server-backend-business-solutions`,
          },
        ],
      },
      {
        label: "Microsoft Power Platform",
        href: POWER_PLATFORM_EXPERTS_URL,
        items: [
          {
            label: "AI Integrations",
            href: `${POWER_PLATFORM_EXPERTS_URL}/services/microsoft-power-platform/ai-integrations`,
          },
          {
            label: "App Development with Power Apps",
            href: `${POWER_PLATFORM_EXPERTS_URL}/services/microsoft-power-platform/microsoft-power-apps`,
          },
          {
            label: "Automation with Power Automate",
            href: `${POWER_PLATFORM_EXPERTS_URL}/services/microsoft-power-platform/microsoft-power-automate`,
          },
          {
            label: "Data Visualisation with Power BI",
            href: `${POWER_PLATFORM_EXPERTS_URL}/services/microsoft-power-platform/microsoft-power-bi`,
          },
          {
            label: "Websites with Power Pages",
            href: `${POWER_PLATFORM_EXPERTS_URL}/services/microsoft-power-platform/microsoft-power-pages`,
          },
          {
            label: "Data Analytics with Microsoft Fabric",
            href: `${POWER_PLATFORM_EXPERTS_URL}/microsoft-fabric`,
          },
          {
            label: "Power Bi Support",
            href: `${POWER_PLATFORM_EXPERTS_URL}/power-bi-support`,
          },
          {
            label: "Power Apps Support",
            href: `${POWER_PLATFORM_EXPERTS_URL}/power-apps-support`,
          },
          {
            label: "Data Integration",
            href: `${POWER_PLATFORM_EXPERTS_URL}/power-bi-data-integration`,
          },
          {
            label: "Excel to Power BI Migration",
            href: `${POWER_PLATFORM_EXPERTS_URL}/excel-to-power-bi-migration`,
          },
        ],
      },
      {
        label: "Copilot and AI",
        href: `/services/copilot`,
        items: [
          {
            label: "Copilot in Office 365",
            href: `/services/copilot`,
          },
          {
            label: "AI Agent Development",
            href: `/services/ai-agent-development`,
          },
          {
            label: "Email Triage with AI",
            href: `/services/ai-email-triage`,
          },
          {
            label: "Power Platform AI Integrations",
            href: `${POWER_PLATFORM_EXPERTS_URL}/services/microsoft-power-platform/ai-integrations`,
          },
          {
            label: "AI Templates In Word",
            href: `/services/microsoft-word/ai-ready-word-templates`,
          },
        ],
      },
      {
        label: "Other Services",
        href: `/services`,
        items: [
          {
            label: "Business Analysis",
            href: `/services/business-analysis`,
          },
          {
            label: "Office 365",
            href: `/services/microsoft-office-365`,
          },
          {
            label: "SharePoint",
            href: `${POWER_PLATFORM_EXPERTS_URL}/sharepoint-consulting-and-development`,
          },
          {
            label: "Business Process Automation",
            href: `/services/business-process-automation`,
          },
          {
            label: "Azure Cloud Solutions",
            href: `/services/cloud-based-solutions-with-azure`,
          },
          {
            label: "SQL Server",
            href: `/services/sql-server-and-access-integration`,
          },
          {
            label: "PowerPoint",
            href: `/services/microsoft-powerpoint`,
          },
          {
            label: ".NET",
            href: `/services/microsoft-dot-net`,
          },
          {
            label: "Outlook",
            href: `/services/custom-office-solutions`,
          },
          {
            label: "Publisher",
            href: `/services/microsoft-publisher`,
          },
          {
            label: "OneDrive Cloud Backup",
            href: `/services/cloud-backup-with-onedrive`,
          },
          {
            label: "API Integrations",
            href: `/services/microsoft-365-api-integration`,
          },
        ],
      },
    ],
  },
  staticLinks: [
    {
      label: "About Us",
      href: `/about-us`,
    },
    {
      label: "Testimonials",
      href: "/client-testimonials",
    },
    {
      label: "Meet Our Team",
      href: "/meet-the-team",
    },
  ],
};
