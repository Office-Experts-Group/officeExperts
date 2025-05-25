import { NextResponse } from "next/server";
import { goneUrls } from "./utils/goneUrls";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const normalizedPath = path.toLowerCase();

  // Handle static media files - completely block from crawling
  if (path.includes("/_next/static/media/")) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }

  const pathWithSlash = normalizedPath.endsWith("/")
    ? normalizedPath
    : `${normalizedPath}/`;

  // Check both with and without trailing slash for gone URLs
  if (
    goneUrls.includes(normalizedPath) ||
    goneUrls.includes(pathWithSlash)
  ) {
    return new NextResponse(null, {
      status: 410,
      statusText: "Gone",
      headers: {
        "X-Robots-Tag": "noindex",
      },
    });
  }

  const response = NextResponse.next();

  // Security headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  
  // Special CSP for payment pages
  if (path.startsWith("/ccp") || path.includes("debug-payment") || path.includes("test-invoice")) {
    // Relaxed CSP for payment processing pages
    response.headers.set(
      "Content-Security-Policy",
      "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.vimeo.com *.googletagmanager.com *.google-analytics.com analytics.ahrefs.com googleads.g.doubleclick.net *.simplify.com *.commbank.com.au; " +
        "style-src 'self' 'unsafe-inline' fonts.googleapis.com *.googletagmanager.com *.simplify.com; " +
        "img-src 'self' data: https: *.vimeocdn.com *.google-analytics.com *.googletagmanager.com *.ahrefs.com *.simplify.com *.commbank.com.au; " +
        "font-src 'self' fonts.gstatic.com fonts.googleapis.com *.simplify.com; " +
        "frame-src 'self' *.vimeo.com player.vimeo.com *.googletagmanager.com *.youtube.com www.youtube.com youtube.com td.doubleclick.net *.simplify.com *.commbank.com.au; " +
        "media-src 'self' *.vimeo.com *.vimeocdn.com *.youtube.com www.youtube.com youtube.com; " +
        "connect-src 'self' *.vimeo.com *.vimeocdn.com *.youtube.com www.youtube.com youtube.com *.google-analytics.com *.googletagmanager.com www.google.com google.com *.officeexperts.com.au *.ahrefs.com analytics.ahrefs.com googleads.g.doubleclick.net *.simplify.com *.commbank.com.au api.simplify.com; " +
        "form-action 'self' *.simplify.com *.commbank.com.au; " +
        "frame-ancestors 'none';"
    );
  } else {
    // Regular CSP for all other pages
    response.headers.set(
      "Content-Security-Policy",
      "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.vimeo.com *.googletagmanager.com *.google-analytics.com analytics.ahrefs.com googleads.g.doubleclick.net; " +
        "style-src 'self' 'unsafe-inline' fonts.googleapis.com *.googletagmanager.com; " +
        "img-src 'self' data: https: *.vimeocdn.com *.google-analytics.com *.googletagmanager.com *.ahrefs.com; " +
        "font-src 'self' fonts.gstatic.com fonts.googleapis.com; " +
        "frame-src 'self' *.vimeo.com player.vimeo.com *.googletagmanager.com *.youtube.com www.youtube.com youtube.com td.doubleclick.net; " +
        "media-src 'self' *.vimeo.com *.vimeocdn.com *.youtube.com www.youtube.com youtube.com; " +
        "connect-src 'self' *.vimeo.com *.vimeocdn.com *.youtube.com www.youtube.com youtube.com *.google-analytics.com *.googletagmanager.com www.google.com google.com *.officeexperts.com.au *.ahrefs.com analytics.ahrefs.com googleads.g.doubleclick.net;"
    );
  }

  // Handle ALL Next.js system paths
  if (path.startsWith("/_next/")) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/_next/static/media/:path*",
    "/_next/:path*",
  ],
};