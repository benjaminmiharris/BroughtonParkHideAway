"use client";
import PrimaryBtn from "../../primary-btn/PrimaryBtn";
import styles from "./Booking.module.css";
// import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Image from "next/image";
import WelcomeImage from "../../../../../public/gallery-image-1.jpg";

import { Spinnaker } from "next/font/google";
import Calendar from "./Calendar";
import CalendarReact from "../../calendar/CalendarReact";

const spinnaker = Spinnaker({ subsets: ["latin-ext"], weight: ["400"] });

const Booking = () => {
  return (
    <div className={styles.container} id={"booking-section"}>
      <div className={styles.bookingContainer}>
        <img src={WelcomeImage.src} className={styles.image} />

        <div className={styles.calendarContainer}>
          <p className={styles.headerBox}>2. Booking</p>
          <h2 style={spinnaker.style} className={styles.header}>
            Booking Calendar
          </h2>
          <p className={styles.bookingMessage}>
            Book now and secure your stay at Broughton Park Hideaway in the
            heart of the Manchester Jewish Community.
            <br />
            <br />
            <strong>Prices:</strong>
            <br />
            1–3 days: £100 per day
            <br />
            4–6 days: £80 per day
            <br />
            7+ days: £70 per day
            <br />
            <br />
            Pricing for Shabbos and Yom Tov — on application.
          </p>
          <div className={styles.bookingCalendar}>
            <CalendarReact />
            {/* <BookingForm /> */}
          </div>
          <div>
            {/* <div className={styles.message}>Message will be displayed here</div> */}
          </div>
          {/* <div className={styles.bookingBtnContainer}>
            <PrimaryBtn />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Booking;
