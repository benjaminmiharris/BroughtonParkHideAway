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

function parseDescription(description) {
  if (!description) return {};
  const fields = {};
  const patterns = [
    ["email", /Contact Email:\s*([^,]+)/i],
    ["phone", /Contact Number:\s*([^,]+)/i],
    ["guests", /Number of Guests:\s*([^,]+)/i],
    ["notes", /Additional details:\s*(.+)$/i],
  ];
  for (const [key, regex] of patterns) {
    const match = description.match(regex);
    if (match) fields[key] = match[1].trim();
  }
  return fields;
}

function BookingCard({ event, index, onDelete }) {
  const [expanded, setExpanded] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const details = parseDescription(event.description);
  const checkIn = formatDate(event.start.date || event.start.dateTime);
  const checkOut = formatDate(event.end.date || event.end.dateTime);

  const handleDelete = async () => {
    setDeleting(true);
    await onDelete(event.id);
    setDeleting(false);
  };

  return (
    <div style={card}>
      <div style={cardHeader}>
        <span style={indexBadge}>{index}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={summaryText}>{event.summary || "Untitled Booking"}</div>
          <div style={datesText}>
            {checkIn} → {checkOut}
          </div>
        </div>
        <button
          onClick={() => setExpanded((v) => !v)}
          style={toggleBtn}
          aria-label={expanded ? "Hide details" : "Show details"}
        >
          {expanded ? "▲ Hide" : "▼ Details"}
        </button>
      </div>

      {expanded && (
        <div style={detailsPanel}>
          {details.email && (
            <div style={detailRow}>
              <span style={detailLabel}>Email</span>
              <a href={`mailto:${details.email}`} style={detailValue}>
                {details.email}
              </a>
            </div>
          )}
          {details.phone && (
            <div style={detailRow}>
              <span style={detailLabel}>Phone</span>
              <a href={`tel:${details.phone}`} style={detailValue}>
                {details.phone}
              </a>
            </div>
          )}
          {details.guests && (
            <div style={detailRow}>
              <span style={detailLabel}>Guests</span>
              <span style={detailValue}>{details.guests}</span>
            </div>
          )}
          {details.notes && details.notes !== "undefined" && (
            <div style={detailRow}>
              <span style={detailLabel}>Notes</span>
              <span style={detailValue}>{details.notes}</span>
            </div>
          )}

          <div style={{ marginTop: "1rem" }}>
            {confirmDelete ? (
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
                <span style={{ fontSize: "0.9rem" }}>Remove this booking?</span>
                <button
                  onClick={handleDelete}
                  disabled={deleting}
                  style={btnDanger}
                >
                  {deleting ? "Removing…" : "Yes, remove"}
                </button>
                <button onClick={() => setConfirmDelete(false)} style={btnCancel}>
                  Cancel
                </button>
              </div>
            ) : (
              <button onClick={() => setConfirmDelete(true)} style={btnDanger}>
                Remove booking
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function BookingsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/getCalendarEvents`)
      .then((res) => setEvents(res.data))
      .catch(() => setError("Failed to load calendar events."))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${SERVER_URL}/deleteEvent/${id}`);
      setEvents((prev) => prev.filter((e) => e.id !== id));
    } catch {
      setError("Failed to delete event. Please try again.");
    }
  };

  const sorted = [...events].sort((a, b) => {
    const aDate = new Date(a.start.date || a.start.dateTime);
    const bDate = new Date(b.start.date || b.start.dateTime);
    return aDate - bDate;
  });

  return (
    <div style={page}>
      <h1 style={{ marginBottom: "1.5rem", fontSize: "1.5rem" }}>Bookings</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && sorted.length === 0 && <p>No upcoming bookings.</p>}
      {sorted.map((event, i) => (
        <BookingCard
          key={event.id || i}
          event={event}
          index={i + 1}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

const page = {
  padding: "1.5rem",
  fontFamily: "sans-serif",
  maxWidth: 700,
  margin: "0 auto",
};
const card = {
  border: "1px solid #ddd",
  borderRadius: 8,
  marginBottom: "1rem",
  overflow: "hidden",
};
const cardHeader = {
  display: "flex",
  alignItems: "flex-start",
  gap: "0.75rem",
  padding: "1rem",
  background: "#fafafa",
};
const indexBadge = {
  background: "#555",
  color: "#fff",
  borderRadius: "50%",
  width: 26,
  height: 26,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.8rem",
  flexShrink: 0,
  marginTop: 2,
};
const summaryText = {
  fontWeight: 600,
  fontSize: "0.95rem",
  marginBottom: "0.2rem",
  wordBreak: "break-word",
};
const datesText = {
  fontSize: "0.85rem",
  color: "#555",
};
const toggleBtn = {
  flexShrink: 0,
  padding: "0.3rem 0.7rem",
  background: "#fff",
  border: "1px solid #ccc",
  borderRadius: 4,
  cursor: "pointer",
  fontSize: "0.8rem",
  whiteSpace: "nowrap",
};
const detailsPanel = {
  padding: "1rem",
  borderTop: "1px solid #eee",
  background: "#fff",
};
const detailRow = {
  display: "flex",
  gap: "0.75rem",
  marginBottom: "0.5rem",
  flexWrap: "wrap",
};
const detailLabel = {
  fontWeight: 600,
  fontSize: "0.85rem",
  minWidth: 55,
  color: "#444",
};
const detailValue = {
  fontSize: "0.85rem",
  color: "#222",
  wordBreak: "break-word",
};
const btnDanger = {
  padding: "0.45rem 1rem",
  background: "#c0392b",
  color: "#fff",
  border: "none",
  borderRadius: 4,
  cursor: "pointer",
  fontSize: "0.85rem",
};
const btnCancel = {
  padding: "0.45rem 1rem",
  background: "#888",
  color: "#fff",
  border: "none",
  borderRadius: 4,
  cursor: "pointer",
  fontSize: "0.85rem",
};
