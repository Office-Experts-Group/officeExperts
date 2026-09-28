// middleware.js
// Static CSP (no nonce) so pages can be prerendered; also handles 410 Gone URLs
// and cache headers for static build assets.

import { NextResponse } from "next/server";
// List of retired URLs that should return 410 Gone rather than 404
import { goneUrls } from "./utils/goneUrls";

// Next's dev server uses eval() for fast refresh; never allow it in production
const isDev = process.env.NODE_ENV !== "production";

// Host groups shared between the standard and payment policies
const GOOGLE_HOSTS =
  "*.googletagmanager.com *.google-analytics.com *.google.com *.gstatic.com *.doubleclick.net googleads.g.doubleclick.net";
const AHREFS_HOSTS = "*.ahrefs.com analytics.ahrefs.com";
const VIDEO_SCRIPT_HOSTS = "*.vimeo.com *.youtube.com *.ytimg.com";
const BPOINT_HOSTS = "*.bpoint.com.au";

// 'unsafe-inline' is required without a nonce: Next's hydration scripts and
// GTM are inline. script-src-elem overrides script-src for <script> elements,
// so both must allow the same sources.
function scriptDirectives(hosts) {
  const sources = `'self' 'unsafe-inline' ${hosts}`;
  return [
    `script-src ${sources}${isDev ? " 'unsafe-eval'" : ""}`,
    `script-src-elem ${sources}`,
  ];
}

// Payment page: allows BPoint scripts, frames and connections
const PAYMENT_CSP = [
  "default-src 'self'",
  ...scriptDirectives(`${BPOINT_HOSTS} ${GOOGLE_HOSTS} ${AHREFS_HOSTS}`),
  `style-src 'self' 'unsafe-inline' ${BPOINT_HOSTS} fonts.googleapis.com`,
  `img-src 'self' data: https:`,
  `font-src 'self' ${BPOINT_HOSTS} fonts.gstatic.com`,
  `frame-src 'self' ${BPOINT_HOSTS} *.googletagmanager.com *.doubleclick.net`,
  `connect-src 'self' ${BPOINT_HOSTS} ${GOOGLE_HOSTS} ${AHREFS_HOSTS} *.officeexperts.com.au`,
].join("; ");

// All other pages: adds YouTube and Vimeo embeds
const STANDARD_CSP = [
  "default-src 'self'",
  ...scriptDirectives(`${VIDEO_SCRIPT_HOSTS} ${GOOGLE_HOSTS} ${AHREFS_HOSTS}`),
  "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
  "img-src 'self' data: https:",
  "font-src 'self' fonts.gstatic.com",
  "frame-src 'self' *.vimeo.com *.youtube.com *.youtube-nocookie.com *.googletagmanager.com *.doubleclick.net",
  "media-src 'self' *.vimeo.com *.vimeocdn.com *.youtube.com *.youtube-nocookie.com *.googlevideo.com",
  `connect-src 'self' *.vimeo.com *.vimeocdn.com *.youtube.com *.youtube-nocookie.com *.ytimg.com *.googlevideo.com google.com ${GOOGLE_HOSTS} ${AHREFS_HOSTS} *.officeexperts.com.au`,
].join("; ");

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const normalisedPath = path.toLowerCase();

  // Hashed build assets: cache forever and keep them out of the index
  if (path.startsWith("/_next/static/") || path.startsWith("/_next/data/")) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    response.headers.set(
      "Cache-Control",
      "public, max-age=31536000, immutable",
    );
    return response;
  }

  if (isGoneUrl(normalisedPath)) {
    return new NextResponse(null, {
      status: 410,
      statusText: "Gone",
      headers: { "X-Robots-Tag": "noindex" },
    });
  }

  const response = NextResponse.next();
  const isPaymentPage = normalisedPath === "/ccp";

  if (isPaymentPage) {
    response.headers.set("X-Frame-Options", "SAMEORIGIN");
    response.headers.set(
      "Permissions-Policy",
      "accelerometer=*, gyroscope=*, magnetometer=*, payment=*, interest-cohort=(), camera=(), microphone=(), geolocation=()",
    );
    response.headers.set("Content-Security-Policy", PAYMENT_CSP);
  } else {
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set(
      "Permissions-Policy",
      "accelerometer=(), gyroscope=(), magnetometer=(), payment=self, interest-cohort=(), camera=(), microphone=(), geolocation=()",
    );
    response.headers.set("Content-Security-Policy", STANDARD_CSP);
  }

  // Common security headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  // "0" disables the legacy XSS auditor, which could itself be exploited
  response.headers.set("X-XSS-Protection", "0");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return response;
}

// goneUrls may be stored with or without a trailing slash, so check both forms
function isGoneUrl(normalisedPath) {
  const withSlash = normalisedPath.endsWith("/")
    ? normalisedPath
    : `${normalisedPath}/`;
  return goneUrls.includes(normalisedPath) || goneUrls.includes(withSlash);
}

export const config = {
  matcher: [
    // Pages (excludes API routes, static assets, image optimiser and favicon)
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/_next/static/:path*",
    "/_next/data/:path*",
  ],
};
