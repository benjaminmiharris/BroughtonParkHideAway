"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

function formatDate(dateStr) {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BookingsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [confirmId, setConfirmId] = useState(null);

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/getCalendarEvents`)
      .then((res) => setEvents(res.data))
      .catch(() => setError("Failed to load calendar events."))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    setDeletingId(id);
    setConfirmId(null);
    try {
      await axios.delete(`${SERVER_URL}/deleteEvent/${id}`);
      setEvents((prev) => prev.filter((e) => e.id !== id));
    } catch {
      setError("Failed to delete event. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  const sorted = [...events].sort((a, b) => {
    const aDate = new Date(a.start.date || a.start.dateTime);
    const bDate = new Date(b.start.date || b.start.dateTime);
    return aDate - bDate;
  });

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "sans-serif",
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && sorted.length === 0 && <p>No bookings found.</p>}

      {!loading && !error && sorted.length > 0 && (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "5rem",
          }}
        >
          <thead>
            <tr style={{ background: "#f0f0f0", textAlign: "left" }}>
              <th style={th}>#</th>
              <th style={th}>Summary</th>
              <th style={th}>Check-in</th>
              <th style={th}>Check-out</th>
              <th style={th}></th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((event, i) => (
              <tr
                key={event.id || i}
                style={{ borderBottom: "1px solid #ddd" }}
              >
                <td style={td}>{i + 1}</td>
                <td style={td}>{event.summary || "—"}</td>
                <td style={td}>
                  {formatDate(event.start.date || event.start.dateTime)}
                </td>
                <td style={td}>
                  {formatDate(event.end.date || event.end.dateTime)}
                </td>
                <td style={{ ...td, textAlign: "right", whiteSpace: "nowrap" }}>
                  {confirmId === event.id ? (
                    <>
                      <span style={{ marginRight: "0.5rem", fontSize: "0.9rem" }}>
                        Remove this booking?
                      </span>
                      <button
                        onClick={() => handleDelete(event.id)}
                        disabled={deletingId === event.id}
                        style={{ ...btnDanger, marginRight: "0.4rem" }}
                      >
                        {deletingId === event.id ? "Removing…" : "Yes, remove"}
                      </button>
                      <button
                        onClick={() => setConfirmId(null)}
                        style={btnCancel}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setConfirmId(event.id)}
                      style={btnDanger}
                    >
                      Remove
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const th = { padding: "0.6rem 1rem", fontWeight: 600 };
const td = { padding: "0.6rem 1rem" };
const btnDanger = {
  padding: "0.3rem 0.8rem",
  background: "#c0392b",
  color: "#fff",
  border: "none",
  borderRadius: 4,
  cursor: "pointer",
  fontSize: "0.85rem",
};
const btnCancel = {
  padding: "0.3rem 0.8rem",
  background: "#888",
  color: "#fff",
  border: "none",
  borderRadius: 4,
  cursor: "pointer",
  fontSize: "0.85rem",
};
