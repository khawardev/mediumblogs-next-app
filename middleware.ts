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
    return NextResponse.redirect(new URL("/", request.url));
  }
  try {
    const requestURL: any = new URL(request.url);
    const refererURL: any = request.headers.get("referer");
    if (refererURL.origin !== requestURL.origin) {
      throw new Error("origin mismatch");
    }
  } catch {
    NextResponse.redirect(new URL("/", request.url));
  }
}
