import React from "react";
import styles from "./Footer.module.css";
import { Spinnaker } from "next/font/google";
const spinnaker = Spinnaker({ subsets: ["latin-ext"], weight: ["400"] });

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h2 style={spinnaker.style} className={styles.logo}>
          BROUGHTON PARK HIDEAWAY
        </h2>

        <div className={styles.contact}>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Location</span>
            Broughton Park, Salford, Manchester
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Enquiries</span>
            broughtonparkhideaway@gmail.com
          </div>
        </div>

        <div className={styles.locationContainer}>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2372.5!2d-2.272!3d53.506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae6c05163365%3A0xff6cc55ac34da316!2sBroughton%20Park%2C%20Salford!5e0!3m2!1sen!2suk!4v1"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} Broughton Park Hideaway. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
