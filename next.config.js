const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const REDIRECTS = [
  {
    source: "/services/by-product-and-technology/microsoft-dot-net",
    destination: "/services/microsoft-dot-net",
    permanent: true,
  },
  {
    source: "/services/by-product-and-technology/microsoft-publisher",
    destination: "/services/microsoft-publisher",
    permanent: true,
  },
  {
    source: "/corporate-identity",
    destination: "/services/microsoft-word/corporate-identity",
    permanent: true,
  },
  {
    source: "/word-document-template-creation",
    destination: "/services/microsoft-word/word-document-template-creation",
    permanent: true,
  },
  {
    source: "/popup-forms",
    destination: "/services/microsoft-word/popup-forms",
    permanent: true,
  },
  {
    source: "/quick-parts",
    destination: "/services/microsoft-word/quick-parts",
    permanent: true,
  },
  {
    source: "/government-departments",
    destination: "/services/microsoft-word/government-departments",
    permanent: true,
  },
  {
    source: "/fill-in-forms",
    destination: "/services/microsoft-word/fill-in-forms",
    permanent: true,
  },
  {
    source: "/custom-toolbars-and-ribbons",
    destination: "/services/microsoft-word/custom-toolbars-and-ribbons",
    permanent: true,
  },
  {
    source: "/training",
    destination: "/services/microsoft-word/training",
    permanent: true,
  },
  {
    source: "/remove-repetition-and-increase-productivity",
    destination:
      "/services/microsoft-word/remove-repetition-and-increase-productivity",
    permanent: true,
  },
  {
    source: "/accessibility",
    destination: "/services/microsoft-word/accessibility",
    permanent: true,
  },
  {
    source: "/upgrades-and-migration",
    destination: "/services/microsoft-word/upgrades-and-migration",
    permanent: true,
  },
  {
    source: "/companies-and-organisations",
    destination: "/services/microsoft-word/companies-and-organisations",
    permanent: true,
  },
  {
    source: "/corporate-global-template-solution",
    destination: "/services/microsoft-word/corporate-global-template-solution",
    permanent: true,
  },
  {
    source: "/word-template-conversions",
    destination: "/services/microsoft-word/word-template-conversions",
    permanent: true,
  },
  {
    source: "/access-azure-cloud-based-solutions",
    destination:
      "/services/microsoft-access/access-azure-cloud-based-solutions",
    permanent: true,
  },
  {
    source: "/access-support",
    destination: "/services/microsoft-access/access-support",
    permanent: true,
  },
  {
    source: "/access-online",
    destination: "/services/microsoft-access/access-online",
    permanent: true,
  },
  {
    source: "/3rd-party-product-integration",
    destination: "/services/microsoft-access/3rd-party-product-integration",
    permanent: true,
  },
  {
    source: "/is-access-right-for-your-company",
    destination: "/services/microsoft-access/is-access-right-for-your-company",
    permanent: true,
  },
  {
    source: "/excel-formulas-and-custom-formulas",
    destination: "/services/microsoft-excel/excel-formulas-and-custom-formulas",
    permanent: true,
  },
  {
    source: "/services/custom-design-and-development",
    destination: "/services/microsoft-excel/custom-design-and-development",
    permanent: true,
  },
  {
    source: "/data-manipulation",
    destination: "/services/microsoft-excel/data-manipulation",
    permanent: true,
  },
  {
    source: "/add-in-development",
    destination: "/services/microsoft-excel/add-in-development",
    permanent: true,
  },
  {
    source: "/pivot-tables-charts-and-reporting-solutions",
    destination:
      "/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions",
    permanent: true,
  },
  {
    source: "/excel-support",
    destination: "/services/microsoft-excel/excel-support",
    permanent: true,
  },
  {
    source: "/vba-macro-development",
    destination: "/services/microsoft-excel/vba-macro-development",
    permanent: true,
  },
  {
    source:
      "/services/microsoft-office/services/by-business-solution/database-development-and-solutions",
    destination:
      "/services/by-business-solution/database-development-and-solutions",
    permanent: true,
  },
  {
    source: "/services/office-and-sql-server-integration",
    destination:
      "/services/by-business-solution/office-and-sql-server-integration",
    permanent: true,
  },
  {
    source: "/services/microsoft-power-bi",
    destination: "/services/microsoft-power-platform/microsoft-power-bi",
    permanent: true,
  },
  {
    source: "/vba-macro-developmentVBA%20macros",
    destination: "/services/microsoft-excel/vba-macro-development",
    permanent: true,
  },
  {
    source: "/services/microsoft-access/microsoft-dot-net",
    destination: "/services/microsoft-dot-net",
    permanent: true,
  },
  {
    source: "/by-business-solution",
    destination: "/services/by-business-solution",
    permanent: true,
  },
  {
    source: "/testimonials/warringtonfire-australia-pty-ltd/",
    destination: "/client-testimonials",
    permanent: true,
  },
  {
    source: "/electrical-estimating-solutions/attachment/lend-lease/",
    destination: "/client-testimonials",
    permanent: true,
  },
];
/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  optimizeFonts: true,
  productionBrowserSourceMaps: false,
  swcMinify: true,
  trailingSlash: true,

  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 31536000,
  },

  async redirects() {
    return REDIRECTS;
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
        ],
      },
    ];
  },

  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.minimizer.push(new CssMinimizerPlugin());
    }
    return config;
  },
};

module.exports = nextConfig;
