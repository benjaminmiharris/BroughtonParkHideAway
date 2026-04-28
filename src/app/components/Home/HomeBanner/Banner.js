"use client";
import React, { useState, useEffect } from "react";

import styles from "./Banner.module.css";

import { Spinnaker } from "next/font/google";
import PrimaryBtn from "../../primary-btn/PrimaryBtn";
const spinnaker = Spinnaker({ subsets: ["latin-ext"], weight: ["400"] });

const Banner = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldNavbarBeScrolled = scrollPosition > 0;

      setScrolled(shouldNavbarBeScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickScroll = (location) => {
    const element = document.getElementById(location);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <p className={`${styles.topText} text`}>A great place for your visit</p>
          <h1 style={spinnaker.style} className={`${styles.heading}`}>
            BROUGHTON PARK RETREAT
          </h1>
          <p className={`${styles.bottomText} text`}>
            Your home from home in the heart of the Manchester Jewish Community.
          </p>
          <div className={styles.btnContainer}>
            <PrimaryBtn onClick={() => handleClickScroll("booking-section")} />
          </div>
        </div>
      </div>
      <div className={styles.image}></div>
    </div>
  );
};

export default Banner;
