// next.config.js
// Redirect rules live in /redirects, one file per reason (see redirects/index.js).
const redirects = require("./redirects");

// Headers for every path, including static files. proxy.js does not run for some static
// paths (/_next/image, favicon.ico), and its page-only headers (CSP, X-Frame-Options,
// Permissions-Policy, X-XSS-Protection) vary by page, so they stay in proxy.js.
const GLOBAL_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,

  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 31536000,
    // Next 16 only allows quality 75 by default. If any <Image quality={...}> uses another
    // value (checklist 1.7), list them here, e.g. qualities: [75, 90],
    remotePatterns: [
      { protocol: "https", hostname: "img.youtube.com", pathname: "/**" },
      // Remove once checklist 8.6 finds no absolute officeexperts.com.au image URLs
      { protocol: "https", hostname: "www.officeexperts.com.au" },
    ],
  },

  async redirects() {
    return redirects;
  },

  async headers() {
    return [
      { source: "/:path*", headers: GLOBAL_HEADERS },
      {
        // /_next/static is excluded: proxy.js sets "noindex, nofollow" there, and two
        // different X-Robots-Tag values on one response would conflict.
        // noimageindex is intentional (keeps site images out of Google Images).
        source: "/((?!_next/static).*)",
        headers: [
          { key: "X-Robots-Tag", value: "index, follow, noimageindex" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
