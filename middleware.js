import { NextResponse } from "next/server";
import { goneUrls } from "./utils/goneUrls";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const normalizedPath = path.toLowerCase();

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
    // Strong directives to prevent crawling and indexing
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

  // Special handling for payment page - allow iframe embedding and sensors
  if (normalizedPath === "/ccp" || normalizedPath.startsWith("/ccp?")) {
    response.headers.set("X-Frame-Options", "SAMEORIGIN");

    // Add permissions policy to allow necessary features for payment processing
    // The asterisk (*) allows all origins for these features
    response.headers.set(
      "Permissions-Policy",
      "accelerometer=*, gyroscope=*, magnetometer=*, payment=*, interest-cohort=(), camera=(), microphone=(), geolocation=()"
    );
  } else {
    response.headers.set("X-Frame-Options", "DENY");
    // Default restrictive permissions policy for other pages
    response.headers.set(
      "Permissions-Policy",
      "accelerometer=(), gyroscope=(), magnetometer=(), payment=self, interest-cohort=(), camera=(), microphone=(), geolocation=()"
    );
  }

  // Security headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Modified CSP with special handling for payment page
  const cspValue =
    normalizedPath === "/ccp" || normalizedPath.startsWith("/ccp?")
      ? // More permissive CSP for payment page
        "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.vimeo.com *.googletagmanager.com *.google-analytics.com *.simplify.com api.simplify.com *.ahrefs.com analytics.ahrefs.com; " +
        "style-src 'self' 'unsafe-inline' *.simplify.com; " +
        "img-src 'self' data: https: *.vimeocdn.com *.google-analytics.com *.googletagmanager.com *.simplify.com *.ahrefs.com; " +
        "font-src 'self' *.simplify.com; " +
        "frame-src 'self' *.vimeo.com player.vimeo.com *.googletagmanager.com *.simplify.com; " +
        "media-src 'self' *.vimeo.com *.vimeocdn.com; " +
        "connect-src 'self' *.vimeo.com *.vimeocdn.com *.google-analytics.com *.googletagmanager.com *.officeexperts.com.au *.simplify.com api.simplify.com *.ahrefs.com analytics.ahrefs.com;"
      : // Standard CSP for other pages
        "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.vimeo.com *.googletagmanager.com *.google-analytics.com *.ahrefs.com analytics.ahrefs.com; " +
        "style-src 'self' 'unsafe-inline'; " +
        "img-src 'self' data: https: *.vimeocdn.com *.google-analytics.com *.googletagmanager.com *.ahrefs.com; " +
        "font-src 'self'; " +
        "frame-src 'self' *.vimeo.com player.vimeo.com *.googletagmanager.com; " +
        "media-src 'self' *.vimeo.com *.vimeocdn.com; " +
        "connect-src 'self' *.vimeo.com *.vimeocdn.com *.google-analytics.com *.googletagmanager.com *.officeexperts.com.au *.ahrefs.com analytics.ahrefs.com;";

  response.headers.set("Content-Security-Policy", cspValue);

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
