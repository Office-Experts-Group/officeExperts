import { NextResponse } from "next/server";
import { goneUrls } from "./utils/goneUrls";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const normalizedPath = path.toLowerCase();

  // Handle static media files - prevent URL indexing while preserving image discovery
  if (path.includes("/_next/static/media/")) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noimageindex, noindex");
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
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.vimeo.com *.googletagmanager.com *.google-analytics.com *.simplify.com api.simplify.com; " +
        "style-src 'self' 'unsafe-inline' *.simplify.com; " +
        "img-src 'self' data: https: *.vimeocdn.com *.google-analytics.com *.googletagmanager.com *.simplify.com; " +
        "font-src 'self' *.simplify.com; " +
        "frame-src 'self' *.vimeo.com player.vimeo.com *.googletagmanager.com *.simplify.com; " +
        "media-src 'self' *.vimeo.com *.vimeocdn.com; " +
        "connect-src 'self' *.vimeo.com *.vimeocdn.com *.google-analytics.com *.googletagmanager.com *.officeexperts.com.au *.simplify.com api.simplify.com;"
      : // Standard CSP for other pages
        "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.vimeo.com *.googletagmanager.com *.google-analytics.com; " +
        "style-src 'self' 'unsafe-inline'; " +
        "img-src 'self' data: https: *.vimeocdn.com *.google-analytics.com *.googletagmanager.com; " +
        "font-src 'self'; " +
        "frame-src 'self' *.vimeo.com player.vimeo.com *.googletagmanager.com; " +
        "media-src 'self' *.vimeo.com *.vimeocdn.com; " +
        "connect-src 'self' *.vimeo.com *.vimeocdn.com *.google-analytics.com *.googletagmanager.com *.officeexperts.com.au;";

  response.headers.set("Content-Security-Policy", cspValue);

  // Handle Next.js system paths
  if (
    request.nextUrl.pathname.startsWith("/_next/") &&
    !request.nextUrl.pathname.startsWith("/_next/image")
  ) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/_next/static/media/:path*",
    "/_next/image",
  ],
};
