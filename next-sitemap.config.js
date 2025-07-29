/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.officeexperts.com.au",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*"],
  generateIndexSitemap: false,
  trailingSlash: false,

  transform: async (config, path) => {
    // List of paths that have different canonicals (you'd maintain this list)
    const pathsWithDifferentCanonicals = [
      "/services",
      // word
      "/services/microsoft-word",
      "/services/microsoft-word/accessibility",
      "/services/microsoft-word/companies-and-organisations",
      "/services/microsoft-word/corporate-global-template-solution",
      "/services/microsoft-word/corporate-identity",
      "/services/microsoft-word/custom-toolbars-and-ribbons",
      "/services/microsoft-word/fill-in-forms",
      "/services/microsoft-word/government-departments",
      "/services/microsoft-word/popup-forms",
      "/services/microsoft-word/quick-parts",
      "/services/microsoft-word/remove-repetition-and-increase-productivity",
      "/services/microsoft-word/training",
      "/services/microsoft-word/upgrades-and-migration",
      "/services/microsoft-word/word-document-template-creation",
      "/services/microsoft-word/word-template-conversions",
      // excel
      "/services/microsoft-excel",
      "/services/microsoft-excel/add-in-development",
      "/services/microsoft-excel/custom-design-and-development",
      "/services/microsoft-excel/data-manipulation",
      "/services/microsoft-excel/excel-formulas-and-custom-formulas",
      "/services/microsoft-excel/excel-support",
      "/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions",
      "/services/microsoft-excel/upgrades-and-migration",
      "/services/microsoft-excel/vba-macro-development",
      // access
      "/services/microsoft-access",
      "/services/microsoft-access/3rd-party-product-integration",
      "/services/microsoft-access/access-azure-cloud-based-solutions",
      "/services/microsoft-access/access-online",
      "/services/microsoft-access/access-support",
      "/services/microsoft-access/is-access-right-for-your-company",
      "/services/microsoft-access/upgrades-and-migration",
      // power platform
      "/services/microsoft-power-platform",
      "/services/microsoft-power-platform/",
      "/services/microsoft-power-platform/microsoft-power-apps",
      "/services/microsoft-power-platform/microsoft-power-automate",
      "/services/microsoft-power-platform/microsoft-power-bi",
      "/services/microsoft-power-platform/microsoft-power-pages",
      // locations
      "/office-and-office-365-experts-gold-coast",
      "/excel-and-access-experts-melbourne",
      "/excel-and-access-experts-sydney",
      "/word-and-powerpoint-experts-richmond",
      // blogs
      "/blog/20-advanced-excel-shortcuts",
      "/blog/convert-canva-to-word",
      "/blog/convert-custom-excel-shortcuts-with-macros",
      "/blog/export-to-pdf-in-power-apps",
      "/blog/fields-and-repeating-data-in-word",
      "/blog/file-attachments-in-power-apps",
      "/blog/power-apps-pdf-function",
      "/blog/power-apps-with-sql-database",
      "/blog/sharepoint-lists",
      "/blog/spreadsheet-errors-in-excel",
      "/blog/ultimate-guide-to-word-templates",
      "/blog/word-templates-for-legal-firms",
    ];

    // Exclude paths that have different canonical URLs
    if (pathsWithDifferentCanonicals.includes(path)) {
      return null; // Exclude from sitemap
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
