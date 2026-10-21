// redirects/internalRedirects.js
// Office Experts pages that moved or merged within officeexperts.com.au.
// Every rule is permanent (308) and points straight at the final URL, never at another redirect.
// Sources never end in "/": Next.js strips trailing slashes before matching.

const permanent = (source, destination) => ({
  source,
  destination,
  permanent: true,
});

module.exports = [
  // ── Old "by-product-and-technology" URLs ──
  permanent(
    "/services/by-product-and-technology/microsoft-dot-net",
    "/services/microsoft-dot-net",
  ),
  permanent(
    "/services/by-product-and-technology/microsoft-publisher",
    "/services/microsoft-publisher",
  ),
  permanent(
    "/services/microsoft-access/microsoft-dot-net",
    "/services/microsoft-dot-net",
  ),

  // ── Services hub restructure ──
  // TODO Phase 5.1: when by-business-solution is flattened, change these three
  // destinations to /services/database-development-and-solutions and
  // /services/sql-server-and-access-integration, and add the NEW rows from Appendix A1.
  permanent(
    "/services/microsoft-office/services/by-business-solution/database-development-and-solutions",
    "/services/by-business-solution/database-development-and-solutions",
  ),
  permanent(
    "/services/office-and-sql-server-integration",
    "/services/by-business-solution/sql-server-and-access-integration",
  ),
  permanent(
    "/services/by-business-solution/office-and-sql-server-integration",
    "/services/sql-server-and-access-integration",
  ),
  permanent(
    "/services/office-and-sql-server-integration",
    "/services/sql-server-and-access-integration",
  ),
  permanent("/by-business-solution", "/services"),
  permanent("/services/by-business-solution", "/services"),
  permanent("/services/by-office-product", "/services"),
  permanent("/services/microsoft-office", "/services"),
  permanent(
    "/services/microsoft-office/upgrades-and-migration",
    "/services/upgrades-and-migration",
  ),
  permanent("/services/microsoft-office-365/copilot", "/services/copilot"),
  permanent(
    "/services/microsoft-office-365/remote-data-gathering-from-any-device",
    "/services/remote-data-gathering-from-any-device",
  ),
  // ── Office 365 ──
  permanent(
    "/services/microsoft-office-365/office-365-implementation",
    "/services/microsoft-office-365",
  ),
  permanent(
    "/services/microsoft-office-365/office-365-migration",
    "/services/microsoft-office-365",
  ),
  permanent(
    "/services/microsoft-office-365/exchange-online-setup-and-support",
    "/microsoft-support-and-training-australia",
  ),
  permanent(
    "/services/microsoft-office-365/support-and-managed-services",
    "/microsoft-support-and-training-australia",
  ),
  permanent(
    "/services/microsoft-office-365/app-and-custom-development",
    "/services/app-and-custom-development",
  ),
  permanent(
    "/services/microsoft-office-365/business-process-automation",
    "/services/business-process-automation",
  ),

  // ── Retired services ──
  permanent(
    "/services/microsoft-vbscript",
    "/services/activex-vbscript-migration",
  ),
  // -- by business solution flattening --
  permanent(
    "/services/by-business-solution/3rd-party-application-or-office-integration",
    "/services/3rd-party-application-or-office-integration",
  ),
  permanent(
    "/services/by-business-solution/add-in-creation",
    "/services/add-in-creation",
  ),
  permanent(
    "/services/by-business-solution/cloud-based-solutions-with-azure",
    "/services/cloud-based-solutions-with-azure",
  ),
  permanent(
    "/services/by-business-solution/custom-office-solutions",
    "/services/custom-office-solutions",
  ),
  permanent(
    "/services/by-business-solution/dashboards",
    "/services/dashboards",
  ),
  permanent(
    "/services/by-business-solution/database-development-and-solutions",
    "/services/database-development-and-solutions",
  ),
  permanent(
    "/services/by-business-solution/online-solutions",
    "/services/online-solutions",
  ),
  permanent(
    "/services/by-business-solution/sql-server-and-access-integration",
    "/services/sql-server-and-access-integration",
  ),
  permanent(
    "/services/by-business-solution/vba-macro-development",
    "/services/vba-macro-development",
  ),

  // ── Powerpoint redirects ──
  permanent(
    "/services/microsoft-powerpoint/automate-presentations-with-vba",
    "/services/microsoft-powerpoint",
  ),
  permanent(
    "/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations",
    "/services/microsoft-powerpoint",
  ),
  permanent(
    "/services/microsoft-powerpoint/existing-powerpoint-redesign",
    "/services/microsoft-powerpoint",
  ),
  permanent(
    "/services/microsoft-powerpoint/powerpoint-user-training-and-assistance",
    "/services/microsoft-powerpoint",
  ),

  // -- other --
  permanent(
    "/microsoft-365-api-integration",
    "/services/microsoft-365-api-integration",
  ),
];
