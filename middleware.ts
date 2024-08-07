import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/blogs", "/profile/:path*", "/published/:path*", "/p/:path*"],
};

export function middleware(request: NextRequest) {
  // Check for the presence of either cookie
  const authToken =
    request.cookies.get("next-auth.session-token") ||
    request.cookies.get("__Secure-next-auth.session-token");

  if (!authToken) {
    // Redirect to home page if no auth token is present
    return NextResponse.redirect(new URL("/", request.url));
  }
}
