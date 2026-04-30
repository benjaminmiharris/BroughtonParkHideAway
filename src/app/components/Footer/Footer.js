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

        <p className={styles.copyright}>
          © {new Date().getFullYear()} Broughton Park Hideaway. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
