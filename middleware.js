// middleware.js - NONCE-BASED CSP WITH YOUTUBE AND GOOGLE SERVICES SUPPORT
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
      "public, max-age=31536000, immutable",
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

  // Generate a fresh nonce for this request. This is what lets inline
  // <Script> tags run under CSP without relying on 'unsafe-inline'.
  const nonce = generateNonce();

  // Forward the nonce to the page via a request header so Server Components
  // (layout.js) can read it with next/headers and pass it down to Scripts.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  // PAYMENT PAGE CSP - More permissive for analytics and tracking
  if (normalizedPath === "/ccp" || normalizedPath.startsWith("/ccp?")) {
    console.log("🔒 Setting payment page security headers");

    response.headers.set("X-Frame-Options", "SAMEORIGIN");
    response.headers.set(
      "Permissions-Policy",
      "accelerometer=*, gyroscope=*, magnetometer=*, payment=*, interest-cohort=(), camera=(), microphone=(), geolocation=()",
    );

    const paymentCSP = [
      "default-src 'self'",
      `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' *.bpoint.com.au *.googletagmanager.com *.google-analytics.com *.google.com *.gstatic.com *.doubleclick.net *.ahrefs.com analytics.ahrefs.com googleads.g.doubleclick.net`,
      `script-src-elem 'self' 'nonce-${nonce}' *.bpoint.com.au *.googletagmanager.com *.google-analytics.com *.google.com *.gstatic.com *.doubleclick.net *.ahrefs.com analytics.ahrefs.com googleads.g.doubleclick.net`,
      "style-src 'self' 'unsafe-inline' *.bpoint.com.au *.googleapis.com fonts.googleapis.com",
      "img-src 'self' data: https: *.bpoint.com.au *.google-analytics.com *.googletagmanager.com *.google.com *.gstatic.com *.doubleclick.net *.ahrefs.com www.googletagmanager.com",
      "font-src 'self' *.bpoint.com.au *.gstatic.com fonts.gstatic.com",
      "frame-src 'self' *.bpoint.com.au *.googletagmanager.com *.doubleclick.net td.doubleclick.net",
      "connect-src 'self' *.bpoint.com.au *.google-analytics.com *.googletagmanager.com *.google.com *.gstatic.com *.officeexperts.com.au *.doubleclick.net *.ahrefs.com analytics.ahrefs.com www.googletagmanager.com www.google.com",
    ].join("; ");

    response.headers.set("Content-Security-Policy", paymentCSP);
  } else {
    // STANDARD PAGES CSP - With YouTube and Google services support
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set(
      "Permissions-Policy",
      "accelerometer=(), gyroscope=(), magnetometer=(), payment=self, interest-cohort=(), camera=(), microphone=(), geolocation=()",
    );

    const standardCSP = [
      "default-src 'self'",
      // 'strict-dynamic' lets the nonce-approved GTM/gtag loader script load
      // further scripts it injects (e.g. gtag/js) without listing every host.
      `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' *.vimeo.com *.youtube.com *.ytimg.com *.googletagmanager.com *.google-analytics.com *.google.com *.gstatic.com *.doubleclick.net *.ahrefs.com analytics.ahrefs.com googleads.g.doubleclick.net`,
      // script-src-elem is what GTM's Tag Quality checker specifically looks
      // for; kept in sync with script-src for browsers that support it.
      `script-src-elem 'self' 'nonce-${nonce}' *.vimeo.com *.youtube.com *.ytimg.com *.googletagmanager.com *.google-analytics.com *.google.com *.gstatic.com *.doubleclick.net *.ahrefs.com analytics.ahrefs.com googleads.g.doubleclick.net`,
      "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
      "img-src 'self' data: https: *.vimeocdn.com *.youtube.com *.youtube-nocookie.com *.ytimg.com *.googlevideo.com *.ggpht.com *.google-analytics.com *.googletagmanager.com *.google.com *.gstatic.com *.doubleclick.net *.ahrefs.com www.googletagmanager.com",
      "font-src 'self' fonts.gstatic.com",
      "frame-src 'self' *.vimeo.com player.vimeo.com *.youtube.com *.youtube-nocookie.com *.googletagmanager.com *.doubleclick.net td.doubleclick.net",
      "media-src 'self' *.vimeo.com *.vimeocdn.com *.youtube.com *.youtube-nocookie.com *.googlevideo.com",
      "connect-src 'self' *.vimeo.com *.vimeocdn.com *.youtube.com *.youtube-nocookie.com *.ytimg.com *.googlevideo.com *.google-analytics.com *.googletagmanager.com *.google.com *.gstatic.com *.officeexperts.com.au *.doubleclick.net *.ahrefs.com analytics.ahrefs.com www.googletagmanager.com www.google.com",
    ].join("; ");

    response.headers.set("Content-Security-Policy", standardCSP);
  }

  // Common security headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return response;
}

// Builds a cryptographically random, base64-encoded nonce for this request.
// Edge middleware runs on the Edge Runtime, so we use Web Crypto (available
// globally) rather than Node's 'crypto' module.
function generateNonce() {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return btoa(String.fromCharCode(...bytes));
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/_next/static/:path*",
    "/_next/image/:path*",
    "/_next/data/:path*",
  ],
};
