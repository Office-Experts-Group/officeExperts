import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse.next();

  // Security headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.vimeo.com; " +
      "style-src 'self' 'unsafe-inline'; " +
      "img-src 'self' data: https: *.vimeocdn.com; " +
      "font-src 'self'; " +
      "frame-src 'self' *.vimeo.com player.vimeo.com; " + // Added this line
      "media-src 'self' *.vimeo.com *.vimeocdn.com; " + // Added this line
      "connect-src 'self' *.vimeo.com *.vimeocdn.com;" // Added this line
  );

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
    "/_next/image",
  ],
};
