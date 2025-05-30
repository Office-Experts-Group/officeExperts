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
  {
    source: "/services",
    destination: "/",
    permanent: true,
  },
];

const NOINDEX_REDIRECTS = [
  {
    source:
      "/testimonials/electrical-estimating-solutions/attachment/window-line/feed",
    destination: "/client-testimonials",
    permanent: true,
  },
  {
    source:
      "/faq-items/do-you-come-onsite-or-work-remotely/attachment/skype-button/feed",
    destination: "/faqs",
    permanent: true,
  },
  {
    source:
      "/services/microsoft-excel/data-manipulation/attachment/netwok-hologram-over-young-woman-s-face/feed",
    destination: "/services/microsoft-excel",
    permanent: true,
  },
  {
    source:
      "/services/microsoft-excel/attachment/microsoft-office-microsoft-excel-integration/feed",
    destination: "/services/microsoft-excel",
    permanent: true,
  },
  {
    source:
      "/services/microsoft-word/attachment/upgrade-microsoft-word-icon/feed",
    destination: "/services/microsoft-word",
    permanent: true,
  },
  {
    source: "/services/microsoft-office/attachment/online-solutions-icon/feed",
    destination: "/services/microsoft-office",
    permanent: true,
  },
  {
    source:
      "/blog/office-experts-the-best-excel-consultants/attachment/expert-highlighted-in-green/feed",
    destination: "/blog",
    permanent: true,
  },
  {
    source:
      "/faq-items/how-can-we-pay-you/attachment/payment-method_mastercard/feed",
    destination: "/faqs",
    permanent: true,
  },
  {
    source: "/2018/12",
    destination: "/404",
    permanent: true,
  },
  {
    source: "/2019/02",
    destination: "/404",
    permanent: true,
  },
  {
    source: "/2018/11",
    destination: "/404",
    permanent: true,
  },
  {
    source: "/:path*",
    has: [
      {
        type: "query",
        key: "s",
        value: "%7Bsearch_term_string%7D",
      },
    ],
    destination: "/404",
    permanent: true,
  },
  {
    source:
      "/testimonials/electrical-estimating-solutions/attachment/uniting-care-australia/feed",
    destination: "/client-testimonials",
    permanent: true,
  },
  {
    source: "/testimonials/mad-clarity/attachment/mad-clarity/feed",
    destination: "/client-testimonials",
    permanent: true,
  },
  {
    source:
      "/services/microsoft-office/attachment/microsoft-office-add-ins-icon/feed",
    destination: "/services/microsoft-office",
    permanent: true,
  },
  {
    source: "/feed",
    has: [
      {
        type: "query",
        key: "attachment_id",
        value: "73",
      },
    ],
    destination: "/404",
    permanent: true,
  },
  {
    source:
      "/services/microsoft-office-365/cloud-backup-with-onedrive/attachment/cloud-database/feed",
    destination: "/services/microsoft-office/microsoft-office-365",
    permanent: true,
  },
  {
    source: "/comments/feed",
    destination: "/404",
    permanent: true,
  },
  {
    source: "/feed",
    has: [
      {
        type: "query",
        key: "attachment_id",
        value: "75",
      },
    ],
    destination: "/404",
    permanent: true,
  },
  {
    source: "/feed",
    has: [
      {
        type: "query",
        key: "attachment_id",
        value: "78",
      },
    ],
    destination: "/404",
    permanent: true,
  },
];

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  optimizeFonts: true,
  productionBrowserSourceMaps: false,
  swcMinify: true,

  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/**',
      },
    ],
  },
  

  async redirects() {
    return REDIRECTS;
  },

  async headers() {
    return [
      {
        // Match all routes including static files and images
        source: "/:all*(svg|jpg|png|webp|css|js|woff|woff2|ttf|eot)",
        locale: false,
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow, noimageindex",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
      {
        // Regular routes
        source: "/:path*",
        headers: [
          // Same headers as above
          {
            key: "X-Robots-Tag",
            value: "index, follow, noimageindex",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },

  webpack: (config, { dev, isServer }) => {
    // Add CSS minification in production builds
    if (!dev && !isServer) {
      config.optimization.minimizer.push(new CssMinimizerPlugin());
    }
    return config;
  },
};

module.exports = nextConfig;
