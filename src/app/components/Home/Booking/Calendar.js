import React, { useEffect } from "react";

const Calendar = () => {
  useEffect(() => {
    // Load the bookingmood.com embed.js script dynamically
    const script = document.createElement("script");
    script.src = "https://bookingmood.com/js/embed.js";
    // script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      data-bm="7fdd25ae-09de-4540-9ab5-17b4020655e6"
      data-bm-layout="popup"
      data-bm-label="Show availability"
      data-bm-background-color="#2563eb"
      data-bm-color="#fff"
      data-locale="en-US"
      data-stay-expanded="false"
      data-date-visibility="all"
      data-initial-date="today"
      data-autocomplete-date-selection="true"
      data-display-week-numbers="false"
      data-display-product-name="false"
      data-number-of-months=""
      data-theme="modern"
      data-size="regular"
      data-week-starts-on=""
      data-background-color="#ffffff"
      data-text-color="#000000"
      data-available-color="#171717"
      data-unavailable-color="#fca5a5"
      data-tentative-color="#fde047"
      data-first-week-contains-date=""
      data-display-product-images="false"
      data-display-legend="true"
      data-show-yearly="false"
      data-show-totals="true"
      data-interval-wrap-style="square"
      data-rate-visibility="available"
      data-rate-location="inline"
    ></div>
  );
};

export default Calendar;
