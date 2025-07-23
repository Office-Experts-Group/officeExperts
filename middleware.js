// // middleware.js - FIXED CSP VERSION
// import { NextResponse } from "next/server";
// import { goneUrls } from "./utils/goneUrls";

// export function middleware(request) {
//   const path = request.nextUrl.pathname;
//   const normalizedPath = path.toLowerCase();

//   // Enhanced handling for Next.js static media and system paths
//   if (
//     path.includes("/_next/static/media/") ||
//     path.includes("/_next/static/chunks/") ||
//     path.includes("/_next/static/css/") ||
//     path.includes("/_next/static/images/") ||
//     path.includes("/_next/image") ||
//     path.includes("/_next/data/")
//   ) {
//     const response = NextResponse.next();
//     response.headers.set("X-Robots-Tag", "noindex, nofollow, noimageindex");
//     response.headers.set(
//       "Cache-Control",
//       "public, max-age=31536000, immutable"
//     );
//     return response;
//   }

//   const pathWithSlash = normalizedPath.endsWith("/")
//     ? normalizedPath
//     : `${normalizedPath}/`;

//   // Check both with and without trailing slash for gone URLs
//   if (goneUrls.includes(normalizedPath) || goneUrls.includes(pathWithSlash)) {
//     return new NextResponse(null, {
//       status: 410,
//       statusText: "Gone",
//       headers: {
//         "X-Robots-Tag": "noindex",
//       },
//     });
//   }

//   const response = NextResponse.next();

//   // Special handling for payment page
//   if (normalizedPath === "/ccp" || normalizedPath.startsWith("/ccp?")) {
//     response.headers.set("X-Frame-Options", "SAMEORIGIN");
//     response.headers.set(
//       "Permissions-Policy",
//       "accelerometer=*, gyroscope=*, magnetometer=*, payment=*, interest-cohort=(), camera=(), microphone=(), geolocation=()"
//     );

//     // FIXED: Combined CSP with all required Google domains
//     const paymentCSP =
//       "default-src 'self'; " +
//       "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.bpoint.com.au *.simplify.com api.simplify.com *.vimeo.com *.googletagmanager.com *.google-analytics.com *.google.com *.gstatic.com *.ahrefs.com analytics.ahrefs.com; " +
//       "style-src 'self' 'unsafe-inline' *.bpoint.com.au *.simplify.com *.googleapis.com; " +
//       "img-src 'self' data: https: *.bpoint.com.au *.simplify.com *.vimeocdn.com *.google-analytics.com *.googletagmanager.com *.google.com *.gstatic.com *.ahrefs.com; " +
//       "font-src 'self' *.bpoint.com.au *.simplify.com *.gstatic.com; " +
//       "frame-src 'self' *.bpoint.com.au *.simplify.com *.vimeo.com player.vimeo.com *.googletagmanager.com; " +
//       "media-src 'self' *.vimeo.com *.vimeocdn.com; " +
//       "connect-src 'self' *.bpoint.com.au *.simplify.com api.simplify.com *.vimeo.com *.vimeocdn.com *.google-analytics.com *.googletagmanager.com *.google.com *.gstatic.com *.officeexperts.com.au *.ahrefs.com analytics.ahrefs.com;";

//     response.headers.set("Content-Security-Policy", paymentCSP);
//   } else {
//     // Non-payment pages
//     response.headers.set("X-Frame-Options", "DENY");
//     response.headers.set(
//       "Permissions-Policy",
//       "accelerometer=(), gyroscope=(), magnetometer=(), payment=self, interest-cohort=(), camera=(), microphone=(), geolocation=()"
//     );

//     // FIXED: Standard CSP with all required Google domains
//     const standardCSP =
//       "default-src 'self'; " +
//       "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.vimeo.com *.googletagmanager.com *.google-analytics.com *.google.com *.gstatic.com *.ahrefs.com analytics.ahrefs.com; " +
//       "style-src 'self' 'unsafe-inline'; " +
//       "img-src 'self' data: https: *.vimeocdn.com *.google-analytics.com *.googletagmanager.com *.google.com *.gstatic.com *.ahrefs.com; " +
//       "font-src 'self'; " +
//       "frame-src 'self' *.vimeo.com player.vimeo.com *.googletagmanager.com; " +
//       "media-src 'self' *.vimeo.com *.vimeocdn.com; " +
//       "connect-src 'self' *.vimeo.com *.vimeocdn.com *.google-analytics.com *.googletagmanager.com *.google.com *.gstatic.com *.officeexperts.com.au *.ahrefs.com analytics.ahrefs.com;";

//     response.headers.set("Content-Security-Policy", standardCSP);
//   }

//   // Common security headers
//   response.headers.set("X-Content-Type-Options", "nosniff");
//   response.headers.set("X-XSS-Protection", "1; mode=block");
//   response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

//   return response;
// }

// export const config = {
//   matcher: [
//     "/((?!api|_next/static|_next/image|favicon.ico).*)",
//     "/_next/static/:path*",
//     "/_next/image/:path*",
//     "/_next/data/:path*",
//   ],
// };

// middleware.js - FIXED CSP WITH ALL REQUIRED DOMAINS
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
      "style-src 'self' 'unsafe-inline' *.bpoint.com.au *.googleapis.com",
      "img-src 'self' data: https: *.bpoint.com.au *.google-analytics.com *.googletagmanager.com *.google.com *.gstatic.com *.doubleclick.net *.ahrefs.com",
      "font-src 'self' *.bpoint.com.au *.gstatic.com",
      "frame-src 'self' *.bpoint.com.au *.googletagmanager.com *.doubleclick.net td.doubleclick.net",
      "connect-src 'self' *.bpoint.com.au *.google-analytics.com *.googletagmanager.com *.google.com *.gstatic.com *.officeexperts.com.au *.doubleclick.net *.ahrefs.com analytics.ahrefs.com",
    ].join("; ");

    response.headers.set("Content-Security-Policy", paymentCSP);
  } else {
    // STANDARD PAGES CSP - Also more permissive for analytics
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set(
      "Permissions-Policy",
      "accelerometer=(), gyroscope=(), magnetometer=(), payment=self, interest-cohort=(), camera=(), microphone=(), geolocation=()"
    );

    const standardCSP = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.vimeo.com *.googletagmanager.com *.google-analytics.com *.google.com *.gstatic.com *.doubleclick.net *.ahrefs.com analytics.ahrefs.com googleads.g.doubleclick.net",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https: *.vimeocdn.com *.google-analytics.com *.googletagmanager.com *.google.com *.gstatic.com *.doubleclick.net *.ahrefs.com",
      "font-src 'self'",
      "frame-src 'self' *.vimeo.com player.vimeo.com *.googletagmanager.com *.doubleclick.net td.doubleclick.net",
      "media-src 'self' *.vimeo.com *.vimeocdn.com",
      "connect-src 'self' *.vimeo.com *.vimeocdn.com *.google-analytics.com *.googletagmanager.com *.google.com *.gstatic.com *.officeexperts.com.au *.doubleclick.net *.ahrefs.com analytics.ahrefs.com",
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
