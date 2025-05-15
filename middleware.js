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
  
  // Comprehensive CSP that covers all Google Ads and Analytics requirements
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; " +
    // Script sources
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' " +
      "*.vimeo.com " +
      "*.googletagmanager.com " +
      "*.google-analytics.com " +
      "analytics.google.com " +
      "tagmanager.google.com " +
      "www.googleadservices.com " +
      "*.doubleclick.net " +
      "googleads.g.doubleclick.net " +
      "www.google.com " +
      "www.gstatic.com " +
      "*.ahrefs.com " +
      "analytics.ahrefs.com; " +
    // Style sources
    "style-src 'self' 'unsafe-inline' fonts.googleapis.com; " +
    // Image sources
    "img-src 'self' data: https: " +
      "*.vimeocdn.com " +
      "*.google-analytics.com " +
      "*.googletagmanager.com " +
      "www.google.com " +
      "www.google.com.au " +
      "www.googleadservices.com " +
      "*.doubleclick.net " +
      "*.g.doubleclick.net " +
      "*.ahrefs.com; " +
    // Font sources
    "font-src 'self' data: fonts.gstatic.com; " +
    // Frame sources 
    "frame-src 'self' " +
      "*.vimeo.com " +
      "player.vimeo.com " +
      "*.googletagmanager.com " +
      "www.google.com " +
      "*.doubleclick.net " +
      "td.doubleclick.net " +
      "bid.g.doubleclick.net " +
      "www.youtube.com; " +
    // Media sources
    "media-src 'self' *.vimeo.com *.vimeocdn.com; " +
    // Connect sources - crucial for analytics tracking
    "connect-src 'self' " +
      "*.vimeo.com " +
      "*.vimeocdn.com " +
      "*.google-analytics.com " +
      "analytics.google.com " +
      "stats.g.doubleclick.net " +
      "*.doubleclick.net " +
      "*.googletagmanager.com " +
      "www.google.com " +
      "*.officeexperts.com.au " +
      "*.ahrefs.com " +
      "analytics.ahrefs.com; " +
    // Object sources
    "object-src 'self' data:; " +
    // Form action sources
    "form-action 'self' " +
      "*.google.com " +
      "*.doubleclick.net; " +
    // Base URI restriction
    "base-uri 'self';"
  );

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