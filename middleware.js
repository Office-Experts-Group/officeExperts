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

  // Security headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.vimeo.com *.googletagmanager.com *.google-analytics.com; " +
      "style-src 'self' 'unsafe-inline'; " +
      "img-src 'self' data: https: *.vimeocdn.com *.google-analytics.com *.googletagmanager.com; " +
      "font-src 'self'; " +
      "frame-src 'self' *.vimeo.com player.vimeo.com *.googletagmanager.com; " +
      "media-src 'self' *.vimeo.com *.vimeocdn.com; " +
      "connect-src 'self' *.vimeo.com *.vimeocdn.com *.google-analytics.com *.googletagmanager.com *.officeexperts.com.au;"
  );

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
