// middleware.js - FIXED CSP WITH YOUTUBE AND GOOGLE SERVICES SUPPORT
import { NextResponse } from "next/server";
import { goneUrls } from "./utils/goneUrls";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const normalizedPath = path.toLowerCase();

  // Static media handling
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

  // Handle gone URLs
  if (goneUrls.includes(normalizedPath) || goneUrls.includes(pathWithSlash)) {
    return new NextResponse(null, {
      status: 410,
      statusText: "Gone",
      headers: { "X-Robots-Tag": "noindex" },
    });
  }

  const response = NextResponse.next();

  // PAYMENT PAGE CSP - More permissive for analytics and tracking
  if (normalizedPath === "/ccp" || normalizedPath.startsWith("/ccp?")) {
    console.log("🔒 Setting payment page security headers");

    response.headers.set("X-Frame-Options", "SAMEORIGIN");
    response.headers.set(
      "Permissions-Policy",
      "accelerometer=*, gyroscope=*, magnetometer=*, payment=*, interest-cohort=(), camera=(), microphone=(), geolocation=()"
    );

    // COMPREHENSIVE CSP FOR PAYMENT PAGE
    const paymentCSP = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.bpoint.com.au *.googletagmanager.com *.google-analytics.com *.google.com *.gstatic.com *.doubleclick.net *.ahrefs.com analytics.ahrefs.com googleads.g.doubleclick.net",
      "style-src 'self' 'unsafe-inline' *.bpoint.com.au *.googleapis.com fonts.googleapis.com",
      "img-src 'self' data: https: *.bpoint.com.au *.google-analytics.com *.googletagmanager.com *.google.com *.gstatic.com *.doubleclick.net *.ahrefs.com",
      "font-src 'self' *.bpoint.com.au *.gstatic.com fonts.gstatic.com",
      "frame-src 'self' *.bpoint.com.au *.googletagmanager.com *.doubleclick.net td.doubleclick.net",
      "connect-src 'self' *.bpoint.com.au *.google-analytics.com *.googletagmanager.com *.google.com *.gstatic.com *.officeexperts.com.au *.doubleclick.net *.ahrefs.com analytics.ahrefs.com google.com",
    ].join("; ");

    response.headers.set("Content-Security-Policy", paymentCSP);
  } else {
    // STANDARD PAGES CSP - With YouTube and Google services support
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set(
      "Permissions-Policy",
      "accelerometer=(), gyroscope=(), magnetometer=(), payment=self, interest-cohort=(), camera=(), microphone=(), geolocation=()"
    );

    const standardCSP = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.vimeo.com *.youtube.com *.ytimg.com *.googletagmanager.com *.google-analytics.com *.google.com *.gstatic.com *.doubleclick.net *.ahrefs.com analytics.ahrefs.com googleads.g.doubleclick.net",
      "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
      "img-src 'self' data: https: *.vimeocdn.com *.youtube.com *.youtube-nocookie.com *.ytimg.com *.googlevideo.com *.ggpht.com *.google-analytics.com *.googletagmanager.com *.google.com *.gstatic.com *.doubleclick.net *.ahrefs.com",
      "font-src 'self' fonts.gstatic.com",
      "frame-src 'self' *.vimeo.com player.vimeo.com *.youtube.com *.youtube-nocookie.com *.googletagmanager.com *.doubleclick.net td.doubleclick.net",
      "media-src 'self' *.vimeo.com *.vimeocdn.com *.youtube.com *.youtube-nocookie.com *.googlevideo.com",
      "connect-src 'self' *.vimeo.com *.vimeocdn.com *.youtube.com *.youtube-nocookie.com *.ytimg.com *.googlevideo.com *.google-analytics.com *.googletagmanager.com *.google.com *.gstatic.com *.officeexperts.com.au *.doubleclick.net *.ahrefs.com analytics.ahrefs.com google.com",
    ].join("; ");

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
