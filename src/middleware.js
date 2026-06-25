import { NextResponse } from "next/server";

export function middleware(request) {
  const auth = request.cookies.get("bookings_auth");

  if (auth?.value === "1") {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/bookings/login", request.url));
}

export const config = {
  matcher: "/bookings",
};
