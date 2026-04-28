require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { google } = require("googleapis");

const app = express();
app.use(cors());
app.use(express.json());

const CALENDAR_ID = process.env.CALENDAR_ID;

function getCalendarClient() {
  const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });
  return google.calendar({ version: "v3", auth });
}

// GET /getCalendarEvents — returns all future booked events
app.get("/getCalendarEvents", async (req, res) => {
  try {
    const calendar = getCalendarClient();
    const response = await calendar.events.list({
      calendarId: CALENDAR_ID,
      timeMin: new Date().toISOString(),
      singleEvents: true,
      orderBy: "startTime",
    });
    res.json(response.data.items || []);
  } catch (error) {
    console.error("Error fetching calendar events:", error.message);
    res.status(500).json({ error: "Failed to fetch calendar events" });
  }
});

// POST /createEvent — creates a booking event
app.post("/createEvent", async (req, res) => {
  try {
    const calendar = getCalendarClient();
    const event = req.body;

    const response = await calendar.events.insert({
      calendarId: CALENDAR_ID,
      requestBody: {
        summary: event.summary,
        description: event.description,
        start: {
          dateTime: new Date(event.start.dateTime).toISOString(),
          timeZone: event.start.timeZone || "Europe/London",
        },
        end: {
          dateTime: new Date(new Date(event.end.dateTime).setHours(23, 59, 0, 0)).toISOString(),
          timeZone: event.end.timeZone || "Europe/London",
        },
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error creating calendar event:", error.message);
    res.status(500).json({ error: "Failed to create calendar event" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
