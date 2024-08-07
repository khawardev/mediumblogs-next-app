import { NextRequest, NextResponse } from "next/server";
export const config = {
  matcher: ["/blogs", "/profile/:path*", "/published/:path*", "/p/:path*"],
};
export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("next-auth.session-token");
  if (!authToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
