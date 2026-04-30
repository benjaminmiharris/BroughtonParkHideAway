"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useSWR from "swr";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "./CalendarReact.module.css";
import PrimaryBtn from "../primary-btn/PrimaryBtn";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export default function CalendarReact() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [guestFullName, setGuestFullName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestContactNumber, setGuestContactNumber] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [additionalBookingDetails, setAdditionalBookingDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [sumNumberOfDays, setSumNumberOfDays] = useState();
  const [price, setPrice] = useState({});
  const [excludeDates, setExcludeDates] = useState([]);
  const [errorBooking, setErrorBooking] = useState("");

  const { data: eventData } = useSWR(`${SERVER_URL}/getCalendarEvents`, fetcher);

  // Convert calendar events to excluded date ranges
  useEffect(() => {
    if (!eventData) return;
    const converted = eventData.map((event) => ({
      start: new Date(event.start.date || event.start.dateTime),
      end: new Date(event.end.date || event.end.dateTime),
    }));
    setExcludeDates(converted);
  }, [eventData]);

  // Calculate number of days when dates change
  useEffect(() => {
    if (!startDate || !endDate) return;
    const days = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
    setSumNumberOfDays(days);
  }, [startDate, endDate]);

  // Calculate price based on GBP rates
  useEffect(() => {
    if (!sumNumberOfDays) return;
    let rate;
    if (sumNumberOfDays <= 3) rate = 100;
    else if (sumNumberOfDays <= 6) rate = 80; // 4–6 days
    else rate = 70;
    setPrice({
      price: sumNumberOfDays * rate,
      deposit: sumNumberOfDays * rate * 0.2,
    });
  }, [sumNumberOfDays]);

  const isDateInExcludedRange = (date) =>
    excludeDates.some(({ start, end }) => date >= start && date <= end);

  const isRangeValid = (start, end) => {
    if (!start || !end) return true;
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      if (isDateInExcludedRange(new Date(d))) return false;
    }
    return true;
  };

  const handleStartDateChange = (date) => {
    setErrorBooking("");
    if (date && endDate && !isRangeValid(date, endDate)) {
      setErrorBooking("Selected range includes unavailable dates.");
      return;
    }
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setErrorBooking("");
    if (startDate && date && !isRangeValid(startDate, date)) {
      setErrorBooking("Selected range includes unavailable dates.");
      return;
    }
    setEndDate(date);
  };

  const sendEmail = (event) => {
    const startDateFormatted = new Date(event.start.dateTime).toLocaleDateString("en-GB");
    const endDateFormatted = new Date(event.end.dateTime).toLocaleDateString("en-GB");

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      {
        startdate: startDateFormatted,
        enddate: endDateFormatted,
        deposit: price.deposit,
        amount: price.price,
        guestEmail: event.details.contactEmail,
        guestName: event.details.guestName,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );
  };

  const handleBookingSubmission = async () => {
    if (!guestFullName || !guestEmail || !numberOfGuests || !startDate || !endDate) {
      setShowSubmitError(true);
      return;
    }

    const newEvent = {
      summary: `Broughton Park Booking - ${guestFullName}`,
      description: `Contact Email: ${guestEmail}, Contact Number: ${guestContactNumber}, Number of Guests: ${numberOfGuests}, Additional details: ${additionalBookingDetails}`,
      start: {
        dateTime: startDate,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      end: {
        dateTime: endDate,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      details: {
        contactEmail: guestEmail,
        guestName: guestFullName,
        contactNumber: guestContactNumber,
        numberOfGuests,
        additionalDetails: additionalBookingDetails,
      },
    };

    try {
      const response = await fetch(`${SERVER_URL}/createEvent`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEvent),
      });
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      sendEmail(newEvent);
      setSubmitted(true);
    } catch (error) {
      setErrorBooking("Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <p style={{ color: "white", fontSize: "1.1rem", lineHeight: "1.8" }}>
        Thank you for your booking request. We will be in touch to confirm your
        dates and arrange the deposit. Your dates will be held for 24 hours.
      </p>
    );
  }

  return (
    <div>
      <InputGroup className="mb-3">
        <div className={styles.datePicker}>
          <DatePicker
            className={styles.datePickerInputStart}
            dateFormat="dd/MM/yyyy"
            placeholderText="Check-in"
            selected={startDate}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            onChange={handleStartDateChange}
            filterDate={(d) => new Date() < d}
            isClearable
            excludeDateIntervals={excludeDates}
          />
          <DatePicker
            className={styles.datePickerInputEnd}
            dateFormat="dd/MM/yyyy"
            placeholderText="Check-out"
            selected={endDate}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            onChange={handleEndDateChange}
            filterDate={(d) => new Date() < d}
            maxDate={startDate ? new Date(new Date(startDate).setDate(new Date(startDate).getDate() + 14)) : null}
            isClearable
            excludeDateIntervals={excludeDates}
          />
        </div>
        {errorBooking && <p className={styles.error}>{errorBooking}</p>}
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Full Name"
          onChange={(e) => setGuestFullName(e.target.value)}
          isInvalid={showSubmitError && !guestFullName}
        />
        <Form.Control
          type="email"
          placeholder="Email"
          onChange={(e) => setGuestEmail(e.target.value)}
          isInvalid={showSubmitError && !guestEmail}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Mobile"
          onChange={(e) => setGuestContactNumber(e.target.value)}
        />
        <Form.Control
          type="number"
          placeholder="No of Guests"
          onChange={(e) => setNumberOfGuests(e.target.value)}
          isInvalid={showSubmitError && !numberOfGuests}
          min={1}
          max={6}
        />
      </InputGroup>

      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          rows={2}
          placeholder="Additional details"
          onChange={(e) => setAdditionalBookingDetails(e.target.value)}
        />
      </Form.Group>

      <div className={styles.bookingBtnContainer}>
        <PrimaryBtn onClick={handleBookingSubmission} />
      </div>
    </div>
  );
}
