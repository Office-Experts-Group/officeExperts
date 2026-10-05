// next-sitemap.config.js

/**
 * next-sitemap configuration.
 * Runs after `next build` (via the "postbuild" script in package.json)
 * and writes sitemap.xml and robots.txt into /public.
 */

// Allows each site in the group to set its own domain via .env, falling back to Office Experts
const SITE_URL = process.env.SITE_URL || "https://www.officeexperts.com.au";

// Pages whose canonical points to another domain in the group (e.g. wordexperts.com.au).
// They're kept out of this sitemap so we don't submit non-canonical URLs to Google.
// Note: don't Disallow these in robots.txt, or Google can't crawl them to see the canonical tag.
const pathsWithDifferentCanonicals = new Set([
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
  "/services/microsoft-power-platform/microsoft-power-apps",
  "/services/microsoft-power-platform/microsoft-power-automate",
  "/services/microsoft-power-platform/microsoft-power-bi",
  "/services/microsoft-power-platform/microsoft-power-pages",
  // locations
  "/office-and-office-365-experts-gold-coast",
  "/office-excel-access-and-365-consultants-brisbane",
  "/excel-and-access-experts-melbourne",
  "/office-and-office-365-experts-melbourne",
  "/office-excel-access-and-365-experts-melbourne",
  "/word-and-powerpoint-experts-sydney",
  "/office-and-office-365-experts-sydney",
  "/word-and-powerpoint-experts-perth",
  "/office-excel-access-and-365-consultants-perth",
  "/word-and-powerpoint-experts-canberra",
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
  "/blog/custom-excel-shortcuts-with-macros",
  // other
  "/services/microsoft-office-365/office-365-implementation",
  "/services/microsoft-office-365/office-365-migration",
  "/services/microsoft-office-365/support-and-managed-services",
  "/services/microsoft-office-365/exchange-online-setup-and-support",
  "/test-page",
  "/case-study-submission",
]);

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  trailingSlash: false,
  autoLastmod: false, // Without this, every URL gets the build time as its lastmod

  // Excluded from the sitemap entirely (supports wildcards)
  exclude: ["/api/*", "/test-invoice"],

  robotsTxtOptions: {
    // (leave policies, additionalSitemaps and transformRobotsTxt unchanged)
  },

  transform: async (_config, path) => {
    // Strip any trailing slash so "/foo/" and "/foo" match the same Set entry
    const normalisedPath = path.length > 1 ? path.replace(/\/$/, "") : path;

    if (pathsWithDifferentCanonicals.has(normalisedPath)) {
      return null; // Returning null excludes the path from the sitemap
    }

    // Only the URL is listed; lastmod is omitted until real per-page dates exist
    return { loc: path };
  },
};
