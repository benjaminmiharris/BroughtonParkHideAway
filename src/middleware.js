import { NextResponse } from "next/server";

export function middleware(request) {
  const authHeader = request.headers.get("authorization");

  if (authHeader) {
    const base64 = authHeader.split(" ")[1];
    const [user, pass] = Buffer.from(base64, "base64").toString().split(":");

    if (
      user === process.env.ADMIN_USER &&
      pass === process.env.ADMIN_PASS
    ) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Unauthorised", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Bookings Admin"',
    },
  });
}

export const config = {
  matcher: "/bookings",
};
