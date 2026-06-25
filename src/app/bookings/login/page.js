"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingsLogin() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/bookings-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, pass }),
      });
      if (!res.ok) {
        setError("Incorrect username or password.");
        return;
      }
      router.push("/bookings");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={page}>
      <div style={card}>
        <h1 style={heading}>Bookings Admin</h1>
        <form onSubmit={handleSubmit}>
          <input
            style={input}
            type="text"
            placeholder="Username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            autoComplete="username"
            required
          />
          <input
            style={input}
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            autoComplete="current-password"
            required
          />
          {error && <p style={errorStyle}>{error}</p>}
          <button type="submit" style={btn} disabled={loading}>
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#f5f5f5",
  fontFamily: "sans-serif",
};
const card = {
  background: "#fff",
  padding: "2.5rem",
  borderRadius: 8,
  boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
  width: "100%",
  maxWidth: 360,
};
const heading = {
  fontSize: "1.3rem",
  fontWeight: 700,
  marginBottom: "1.5rem",
  textAlign: "center",
};
const input = {
  display: "block",
  width: "100%",
  padding: "0.6rem 0.8rem",
  marginBottom: "1rem",
  border: "1px solid #ccc",
  borderRadius: 4,
  fontSize: "1rem",
  boxSizing: "border-box",
};
const btn = {
  display: "block",
  width: "100%",
  padding: "0.7rem",
  background: "#2c3e50",
  color: "#fff",
  border: "none",
  borderRadius: 4,
  fontSize: "1rem",
  cursor: "pointer",
  marginTop: "0.5rem",
};
const errorStyle = {
  color: "#c0392b",
  fontSize: "0.9rem",
  marginBottom: "0.5rem",
};
