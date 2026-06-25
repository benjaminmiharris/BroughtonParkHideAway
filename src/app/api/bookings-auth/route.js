import { NextResponse } from "next/server";

export async function POST(request) {
  const { user, pass } = await request.json();

  if (
    user !== process.env.ADMIN_USER ||
    pass !== process.env.ADMIN_PASS
  ) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set("bookings_auth", "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/bookings",
  });
  return response;
}
