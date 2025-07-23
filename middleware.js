// middleware.js - FIXED VERSION
import { NextResponse } from "next/server";
import { goneUrls } from "./utils/goneUrls";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const normalizedPath = path.toLowerCase();

  // Determine payment method
  const isDev = process.env.NODE_ENV === "development";
  const isBpointBranch =
    process.env.VERCEL_GIT_COMMIT_REF === "bpoint-integration";
  const bpointEnabled = process.env.BPOINT_ENABLED === "true";
  const useBpoint = isDev || isBpointBranch || bpointEnabled;

  // Enhanced handling for Next.js static media and system paths
  if (
    path.includes("/_next/static/media/") ||
    path.includes("/_next/static/chunks/") ||
    path.includes("/_next/static/css/") ||
    path.includes("/_next/static/images/") ||
    path.includes("/_next/image") ||
    path.includes("/_next/data/")
  ) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noimageindex");
    response.headers.set(
      "Cache-Control",
      "public, max-age=31536000, immutable"
    );
    return response;
  }

  const pathWithSlash = normalizedPath.endsWith("/")
    ? normalizedPath
    : `${normalizedPath}/`;

  // Check both with and without trailing slash for gone URLs
  if (goneUrls.includes(normalizedPath) || goneUrls.includes(pathWithSlash)) {
    return new NextResponse(null, {
      status: 410,
      statusText: "Gone",
      headers: {
        "X-Robots-Tag": "noindex",
      },
    });
  }

  const response = NextResponse.next();

  // Special handling for payment page
  if (normalizedPath === "/ccp" || normalizedPath.startsWith("/ccp?")) {
    response.headers.set("X-Frame-Options", "SAMEORIGIN");
    response.headers.set(
      "Permissions-Policy",
      "accelerometer=*, gyroscope=*, magnetometer=*, payment=*, interest-cohort=(), camera=(), microphone=(), geolocation=()"
    );

    // Combined CSP for both Bpoint and Simplify + Google services
    const paymentCSP =
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.bpoint.com.au *.simplify.com api.simplify.com *.vimeo.com *.googletagmanager.com *.google-analytics.com *.ahrefs.com analytics.ahrefs.com; " +
      "style-src 'self' 'unsafe-inline' *.bpoint.com.au *.simplify.com *.googleapis.com; " +
      "img-src 'self' data: https: *.bpoint.com.au *.simplify.com *.vimeocdn.com *.google-analytics.com *.googletagmanager.com *.ahrefs.com; " +
      "font-src 'self' *.bpoint.com.au *.simplify.com *.gstatic.com; " +
      "frame-src 'self' *.bpoint.com.au *.simplify.com *.vimeo.com player.vimeo.com *.googletagmanager.com; " +
      "media-src 'self' *.vimeo.com *.vimeocdn.com; " +
      "connect-src 'self' *.bpoint.com.au *.simplify.com api.simplify.com *.vimeo.com *.vimeocdn.com *.google-analytics.com *.googletagmanager.com *.officeexperts.com.au *.ahrefs.com analytics.ahrefs.com;";

    response.headers.set("Content-Security-Policy", paymentCSP);
  } else {
    // Non-payment pages
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set(
      "Permissions-Policy",
      "accelerometer=(), gyroscope=(), magnetometer=(), payment=self, interest-cohort=(), camera=(), microphone=(), geolocation=()"
    );

    // Standard CSP for other pages
    const standardCSP =
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.vimeo.com *.googletagmanager.com *.google-analytics.com *.ahrefs.com analytics.ahrefs.com; " +
      "style-src 'self' 'unsafe-inline'; " +
      "img-src 'self' data: https: *.vimeocdn.com *.google-analytics.com *.googletagmanager.com *.ahrefs.com; " +
      "font-src 'self'; " +
      "frame-src 'self' *.vimeo.com player.vimeo.com *.googletagmanager.com; " +
      "media-src 'self' *.vimeo.com *.vimeocdn.com; " +
      "connect-src 'self' *.vimeo.com *.vimeocdn.com *.google-analytics.com *.googletagmanager.com *.officeexperts.com.au *.ahrefs.com analytics.ahrefs.com;";

    response.headers.set("Content-Security-Policy", standardCSP);
  }

  // Common security headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/_next/static/:path*",
    "/_next/image/:path*",
    "/_next/data/:path*",
  ],
};
