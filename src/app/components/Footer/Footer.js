import React from "react";

import styles from "./Footer.module.css";
import { Spinnaker } from "next/font/google";
const spinnaker = Spinnaker({ subsets: ["latin-ext"], weight: ["400"] });

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.locationContainer}>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed/v1/place?q=31.715100343987498,34.98198595041616&key=AIzaSyBtL3axnPI17U5NnoyJ9dYjhIxqJHy-LJM"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <h2 style={spinnaker.style} className={styles.logo}>
        RAMAT SHILO RETREAT{" "}
      </h2>
      {/* <div className={styles.details}>
        <h6 className={styles.detailsBig}>GET IN TOUCH</h6>
        <p className={styles.termsConditons}>Terms & Conditions</p>
        <h6 className={styles.detailsBig}> BOOK</h6>
      </div> */}
    </div>
  );
};

export default Footer;

// <iframe
//   width="600"
//   height="450"
//   frameborder="0"
//   style="border:0"
//   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d338826.68212264704!2d34.58605175373319!3d31.457579350181396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDE1JzU0LjMiTiAzNMKwMTUnMTMuMyJF!5e0!3m2!1sen!2suk!4v1505237664946"
//   allowfullscreen
// ></iframe>
